🔥 Firebase Chat App

A simple real-time chat application built using Firebase Authentication and Firestore. Users can register, log in, send messages, and see live chat updates instantly.

🚀 Features

🔐 User Registration & Login (Email + Password)

💬 Real-time Messaging

🗂 Firestore Database Integration

📡 Live Message Sync

👨‍💻 Clean & Simple UI

🚪 Logout Functionality

🛠️ Technologies Used

HTML, CSS, JavaScript

Firebase Authentication

Firebase Firestore

Firebase Hosting (optional)

📁 Project Structure
/project-folder
│── index.html
│── style.css
│── app.js
└── README.md

⚙️ Setup Instructions
1️⃣ Clone the Repository
git clone https://github.com/your-username/firebase-chat-app.git
cd firebase-chat-app

2️⃣ Add Your Firebase Config

Replace the config in app.js with your own Firebase credentials:

const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

3️⃣ Open index.html

Just run it directly in your browser — no server needed.

🖼️ Screenshots

(Add your UI screenshots here)

🧩 How It Works
🔐 Authentication

Users can register or log in with email and password.

💬 Real-time Chat

Messages are stored in Firestore.
onSnapshot() listens for live updates and displays new messages instantly.

🛡️ Security Note

Make sure to set proper Firebase Firestore rules before deploying to production.

🌐 Deployment (Optional)

You can deploy this app using Firebase Hosting:

firebase init
firebase deploy

🤝 Contributing

Pull requests are welcome. Feel free to improve UI, add features, or optimize the code.

⭐ Show Your Support

If this project helped you, please ⭐ the repo!
