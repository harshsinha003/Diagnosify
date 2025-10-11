import pandas as pd
from flask import Flask, jsonify, request
from flask_cors import CORS
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import SVC
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
import pickle 
import os

app = Flask(__name__)

# CORS configuration for production and development
CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route('/')
def home():
    return jsonify({
        "message": "Diagnosify API is running",
        "status": "healthy",
        "endpoints": ["/api/predict", "/api/get-disease", "/health"]
    })

@app.route('/health')
def health_check():
    return jsonify({"status": "healthy"})

def train_model():
    training_data = pd.read_csv("./ExcelSheets/data_Training.csv")

    X = training_data.drop(columns=["Disease"])
    y = training_data["Disease"]

    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.1, random_state=42
    )

    models = {
        "RandomForest": RandomForestClassifier(),
        "SVM": SVC(),
        "LogisticRegression": LogisticRegression(max_iter=1000),
    }

    best_model = None
    best_score = 0

    for model_name, model in models.items():
        model.fit(X_train, y_train)
        y_pred = model.predict(X_test)
        score = accuracy_score(y_test, y_pred)
        print(f"{model_name} Accuracy: {score}")

        if score > best_score:
            best_score = score
            best_model = model

    with open("model.pkl", "wb") as f:
        pickle.dump(best_model, f)

    return best_model


@app.route("/api/predict", methods=["POST"])
def predict():
    try:
        data = request.json
        if not data:
            return jsonify({"error": "No data provided"}), 400

        try:
            with open("model.pkl", "rb") as f:
                model = pickle.load(f)
        except FileNotFoundError:
            model = train_model()

        training_data = pd.read_csv("./ExcelSheets/data_Training.csv")
        feature_columns = training_data.drop(columns=["Disease"]).columns

        df = pd.DataFrame([data], columns=feature_columns)

        output = model.predict(df)

        desc = pd.read_csv("./ExcelSheets/description.csv")
        result = desc[desc["Disease"] == output[0]]

        wrk = pd.read_csv("./ExcelSheets/workout.csv")
        wrk = wrk[wrk["disease"] == output[0]]

        diets = pd.read_csv("./ExcelSheets/diets.csv")
        die = diets[diets["Disease"] == output[0]]["Diet"].values.tolist()

        med = pd.read_csv("./ExcelSheets/medications.csv")
        medi = med[med["Disease"] == output[0]]["Medication"].values.tolist()

        return jsonify({
            "disease": output[0],
            "description": result.iloc[0]["Description"] if not result.empty else "No description available",
            "workout": wrk["workout"].tolist(),
            "diets": die,
            "medication": medi,
        })
    except Exception as e:
        print(f"Error in predict: {e}")
        return jsonify({"error": str(e)}), 500


@app.route("/api/get-disease", methods=["POST"])
def get_disease():
    try:
        data = request.json
        disease_name = data.get("disease", {}).get("name", "")
        
        if not disease_name:
            return jsonify({"error": "Disease name is required"}), 400

        desc = pd.read_csv("./ExcelSheets/description.csv")
        workout = pd.read_csv("./ExcelSheets/workout.csv")
        diet = pd.read_csv("./ExcelSheets/diets.csv")
        med = pd.read_csv("./ExcelSheets/medications.csv")

        return jsonify({
            "description": desc[
                desc["Disease"].str.strip().str.lower()
                == disease_name.strip().lower()
            ]["Description"].tolist(),
            "workout": workout[
                workout["disease"].str.strip().str.lower()
                == disease_name.strip().lower()
            ]["workout"].tolist(),
            "diets": diet[
                diet["Disease"].str.strip().str.lower()
                == disease_name.strip().lower()
            ]["Diet"].tolist(),
            "medication": med[
                med["Disease"].str.strip().str.lower()
                == disease_name.strip().lower()
            ]["Medication"].tolist(),
        })
    except Exception as e:
        print(f"Error in get_disease: {e}")
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=False)