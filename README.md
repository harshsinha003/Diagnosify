# 🏥 Diagnosify - AI Disease Prediction Platform

A modern web application that predicts diseases based on symptoms using machine learning algorithms.

## 🌟 Features

- **AI-Powered Predictions**: Uses Random Forest, SVM, and Logistic Regression models
- **Comprehensive Results**: Provides disease predictions, descriptions, medications, diets, and workout recommendations
- **Modern UI**: Beautiful, responsive React interface with smooth animations
- **Real-time Results**: Fast prediction processing with detailed health recommendations

## 🏗️ Architecture

- **Frontend**: React.js with Vite, deployed on Vercel
- **Backend**: Flask Python API with machine learning models, deployed on Render
- **Machine Learning**: Scikit-learn with multiple algorithms for optimal accuracy

## 🚀 Live Demo

- **Frontend**: [https://your-app.vercel.app](https://your-app.vercel.app)
- **Backend API**: [https://your-backend.onrender.com](https://your-backend.onrender.com)

## 🛠️ Local Development

### Prerequisites

- Node.js (v14 or higher)
- Python (v3.8 or higher)
- npm or yarn

### Backend Setup

```bash
cd Python
pip install -r requirements.txt
python app.py
```

The backend will run on `http://localhost:5000`

### Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

The frontend will run on `http://localhost:5173`

## 📁 Project Structure

```
Diagnosify/
├── Python/                 # Flask Backend
│   ├── app.py             # Main Flask application
│   ├── requirements.txt   # Python dependencies
│   ├── Procfile          # Render deployment config
│   ├── model.pkl         # Trained ML model
│   └── ExcelSheets/      # Training data and reference files
├── Frontend/              # React Frontend
│   ├── src/              # Source code
│   ├── package.json      # Node dependencies
│   ├── vercel.json       # Vercel deployment config
│   └── vite.config.js    # Vite configuration
└── README.md
```

## 🚀 Deployment

### Backend Deployment (Render)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Deploy backend"
   git push origin main
   ```

2. **Create Render Web Service**
   - Go to [render.com](https://render.com)
   - Connect your GitHub repository
   - Create a new Web Service
   - Select the `Python` directory as root directory
   - Configure build settings:
     - **Environment**: Python 3
     - **Build Command**: `pip install -r requirements.txt`
     - **Start Command**: `gunicorn app:app`
     - **Auto-Deploy**: Yes

3. **Environment Variables** (Optional)
   - Add any environment variables if needed

### Frontend Deployment (Vercel)

1. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Set root directory to `Frontend`
   - Configure build settings:
     - **Framework Preset**: Vite
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`

2. **Environment Variables**
   - Add `VITE_API_URL` with your Render backend URL
   - Example: `https://your-backend-name.onrender.com`

## 🔄 API Endpoints

### Base URL: `https://your-backend.onrender.com`

- `GET /` - Health check and API information
- `GET /health` - Simple health check
- `POST /api/predict` - Predict disease from symptoms
- `POST /api/get-disease` - Get detailed disease information

### Example API Usage

```javascript
// Predict disease
const response = await fetch('/api/predict', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    symptom1: 1,
    symptom2: 0,
    // ... other symptoms
  })
});

const result = await response.json();
console.log(result);
```

## 🔧 Environment Variables

### Frontend (.env)
```
VITE_API_URL=https://your-backend.onrender.com
```

### Backend (.env)
```
PORT=5000
FLASK_ENV=production
```

## 📊 Machine Learning Model

The application uses an ensemble of three algorithms:
- **Random Forest Classifier**
- **Support Vector Machine (SVM)**
- **Logistic Regression**

The model with the highest accuracy is automatically selected and saved as `model.pkl`.

## 🔒 Security Features

- CORS configured for secure cross-origin requests
- Input validation and error handling
- Environment-based configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you encounter any issues or have questions:
- Create an issue in the GitHub repository
- Contact the development team

## 🙏 Acknowledgments

- Thanks to the machine learning community for the algorithms
- Medical data sources for training datasets
- Open source libraries that made this project possible

---
## ⚠️ Medical Disclaimer

This tool is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.


Made with ❤️ by [Your Name](https://github.com/yourusername)