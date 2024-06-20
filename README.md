# Synapse - Real-Time Multiuser Chat App

## Introduction

**Synapse** is a real-time, multi-user chat application built with React, Firebase, and ChatEngine. The app provides a seamless chat experience, allowing users to register, log in, and communicate instantly with others. Synapse leverages the power of Firebase for authentication and data storage, and ChatEngine for real-time messaging capabilities.

### Live Demo
Check out the live application: [Synapse](https://synapse-chat.vercel.app/)

## Screenshots

### Login Page
![Login Page](https://github.com/BhaskarAcharjee/Synapse/assets/76872572/1863ee07-68a3-4071-9fdb-6c32651703d9)

### Chat Interface
![Chat Screen](https://github.com/BhaskarAcharjee/Synapse/assets/76872572/daff0104-71be-4c8a-8a61-d866fe7ee6a8)


## Features

- **Real-Time Messaging**: Instant messaging with live updates.
- **User Authentication**: Secure sign-in and sign-up using Firebase Authentication.
- **Social Authentication**: Sign in with Google and Facebook.
- **User Management**: Manage user profiles and chat settings.
- **Responsive Design**: Works seamlessly on desktops, tablets, and mobile devices.

## Tech Stack

- **Frontend**: React
- **Backend**: Firebase (Firestore, Authentication)
- **Real-Time Messaging**: ChatEngine
- **Hosting**: Vercel

## Getting Started

Follow these steps to set up the project locally:

### Prerequisites

- Node.js and npm installed on your machine
- Firebase project set up with Firestore and Authentication enabled
- ChatEngine account and project

### Installation

1. **Clone the repository**

   ```sh
   git clone https://github.com/BhaskarAcharjee/Synapse.git
   cd Synapse
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Set up Firebase**

   - Create a Firebase project in the Firebase Console.
   - Enable Firestore and Authentication (Email/Password, Google, and Facebook sign-in methods).
   - Create a `.env` file in the root of your project and add your Firebase configuration:

     ```sh
     REACT_APP_FIREBASE_API_KEY=your-api-key
     ```

4. **Set up ChatEngine**

   - Create a ChatEngine project in the ChatEngine Console.
   - Add your ChatEngine configuration to the `.env` file:

     ```sh
     REACT_APP_CHAT_ENGINE_PROJECT_ID=your-chat-engine-project-id
     REACT_APP_CHAT_ENGINE_PRIVATE_KEY=your-chat-engine-private-key
     ```

5. **Run the application**

   ```sh
   npm start
   ```

   The application will start on `http://localhost:3000`.

## Usage

1. **Sign Up / Sign In**
   - Register a new account or sign in with an existing account.
   - Use Google or Facebook for quick sign-in.

2. **Start Chatting**
   - Create new chat rooms and invite users.
   - Send and receive messages in real time.

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or suggestions, feel free to open an issue or contact me.

---

Thank you for using Synapse! Happy chatting! 🚀
