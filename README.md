# **Career Counseling**  
A platform dedicated to helping users find their ideal career path through personalized guidance, resources, and tools.

## **Live Site**  
[Visit CareerCounseling](https://career-counsiling-b3e75.web.app)

## **Features**  
- **Secure User Authentication**: Powered by Firebase for seamless login and signup functionality.  
- **Personalized Career Guidance**: Offers tailored advice based on user inputs, preferences, and assessments.  
- **Resource Library**: A curated collection of articles, videos, and career tools to aid decision-making.  
- **Interactive Career Assessments**: Quizzes and tests to identify strengths, interests, and suitable career options.  
- **Appointment Scheduling**: Directly book sessions with professional career counselors through an integrated scheduling feature.  

## **Technologies Used**  
- **Frontend**: React, React Router, Tailwind CSS.  
- **Backend**: Firebase (Authentication, Firestore, Hosting).  
- **Routing**: React Router for smooth navigation.  

### **Dependencies:**
- **React**: For building the user interface.
- **React Router**: For handling routing and navigation in the app.
- **Tailwind CSS**: For utility-first CSS to create responsive layouts.
- **Firebase**: For authentication, Firestore database, and hosting.

## 💻 Local Setup Guide

Follow these steps to run the project locally:

### 1. Clone the repository

First, clone the project repository to your local machine:

```bash
git clone https://github.com/arifhassansky/roomify.git
cd roomify
```

### 2. Install dependencies

Run the following command to install the necessary dependencies:

```bash
npm install
```

### 3. Set up environment variables

To configure the backend services like Firebase and MongoDB, you'll need to set up environment variables. Create a .env file in the root of the project and add the following:

```bash
REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-firebase-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-firebase-app-id
```

Make sure to replace your-* with actual credentials from your Firebase project.

### 4. Run the project

Once the dependencies are installed and environment variables are configured, you can run the project locally using:

```bash
npm start
```

This will start the development server and open the project in your default browser. You can now begin working with the Career Counseling Platform locally.



This is a full setup guide that includes the necessary dependencies, local environment setup, and backend instructions for the *Roomify Platform* project. You can copy this into your README.md file for better clarity.

