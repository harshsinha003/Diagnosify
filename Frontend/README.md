# Diagnosify Frontend

A modern React-based disease prediction application with a clean, intuitive interface.

## API Endpoints

This frontend connects to a Flask backend with the following endpoints:

### Available Routes

### Core API Endpoints

- **Health Check**:  
  `[GET] /health`  
  _Returns API health status_

- **API Status**:  
  `[GET] /`  
  _Returns API information and available endpoints_

- **Disease Prediction**:  
  `[POST] /api/predict`  
  _Predicts disease based on symptom data (array of 0/1 values)_

- **Disease Information**:  
  `[POST] /api/get-disease`  
  _Gets detailed information about a specific disease_

## Features

- ✅ Disease prediction using machine learning
- ✅ Symptom-based diagnosis
- ✅ Treatment recommendations
- ✅ Diet and exercise suggestions
- ✅ Medication information
- ✅ Modern, responsive UI
- ✅ Real-time predictions

## Development

### Setup
```bash
npm install
npm run dev
```

### Environment Variables
Create `.env` file with:
```bash
VITE_API_URL=http://localhost:5000
```

### Build for Production
```bash
npm run build
```

## Tech Stack

- **Frontend**: React + Vite
- **Styling**: Tailwind CSS
- **Backend**: Flask (Python)
- **ML**: Scikit-learn (Random Forest, SVM, Logistic Regression)
