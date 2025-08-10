# Twitter Clone 🐦

A full-stack Twitter clone built with React, Redux, Node.js, Express, and MongoDB. This project aims to replicate the core functionalities of Twitter, allowing users to post tweets, follow other users, view timelines, and manage their profiles. It solves the problem of creating a scalable and interactive social media platform from scratch, providing a practical learning experience for full-stack development.

## 🚀 Key Features

- **User Authentication:** Secure login and signup functionality.
- **Tweet Creation:** Users can compose and post tweets.
- **Timeline Feed:** Displays a chronological feed of tweets from followed users.
- **User Following:** Ability to follow and unfollow other users.
- **Profile Management:** Users can view and edit their profiles.
- **Real-time Updates:** Utilizes Redux for state management, ensuring a responsive user experience.
- **Data Persistence:** Redux Persist saves user sessions and preferences.
- **Responsive Design:** Adapts to different screen sizes for optimal viewing.
- **User Search:** Find and follow other users on the platform.
- **Notifications:** Real-time notifications for new followers and interactions.

## 🛠️ Tech Stack

**Frontend:**

-   **React:** JavaScript library for building user interfaces.
-   **Redux:** State management library for handling application data.
-   **Redux Persist:** Library for persisting the Redux store to local storage.
-   **React Router DOM:** For handling routing and navigation within the application.
-   **Axios:** HTTP client for making API requests.
-   **React Hot Toast:** For displaying toast notifications.
-   **React Avatar:** For displaying user avatars.
-   **React Icons:** For using icons in the application.
-   **Vite:** Build tool for bundling the frontend application.
-   **@reduxjs/toolkit:** Simplifies Redux development.

**Backend:**

-   **Node.js:** JavaScript runtime environment for server-side development.
-   **Express:** Web application framework for building APIs.
-   **MongoDB:** NoSQL database for storing application data.
-   **Mongoose:** Object Data Modeling (ODM) library for MongoDB and Node.js.
-   **Dotenv:** For loading environment variables from a `.env` file.
-   **Cookie-parser:** Middleware for parsing cookies.
-   **Cors:** Middleware for enabling Cross-Origin Resource Sharing.

## 📦 Getting Started

### Prerequisites

-   Node.js (>=14)
-   npm or yarn
-   MongoDB installed and running

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd twitterclone
    ```

2.  **Install backend dependencies:**

    ```bash
    cd backend
    npm install
    ```

3.  **Install frontend dependencies:**

    ```bash
    cd frontend/twitterclone
    npm install
    ```

4.  **Create a `.env` file in both the `backend` and `frontend/twitterclone` directories:**

    **Backend `.env` example:**

    ```
    PORT=8000
    MONGO_URI=mongodb://localhost:27017/twitterclone
    FRONTEND_URL=http://localhost:5173
    ```

    **Frontend `.env` example:**

    ```
    VITE_USER_API_END_POINT=http://localhost:8000/api/users
    VITE_TWEET_API_END_POINT=http://localhost:8000/api/tweets
    ```

### Running Locally

1.  **Start the backend server:**

    ```bash
    cd backend
    npm run dev
    ```

2.  **Start the frontend development server:**

    ```bash
    cd frontend/twitterclone
    npm run dev
    ```

    The frontend application will be running at `http://localhost:5173`.


## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Push your changes to your fork.
5.  Submit a pull request.

## 📬 Contact

email - maheshp5447@gmail.com

## 💖 Thanks Message

Thank you for checking out this Twitter Clone project! We hope you find it useful and informative. Your contributions and feedback are highly appreciated.
