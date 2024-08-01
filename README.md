# User Authentication API

This is a user authentication system built with Node.js, Express, and MongoDB. It includes registration, login, and password reset functionalities.

## Features

- User registration
- User login
- Password reset request
- Password reset

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- bcryptjs
- JWT (JSON Web Tokens)
- nodemailer
- crypto
- dotenv

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/user_authentication.git
    cd user_authentication
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your configuration variables:

    ```
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    EMAIL_HOST=your_email_host
    EMAIL_PORT=your_email_port
    EMAIL_USER=your_email_user
    EMAIL_PASS=your_email_password
    ```

4. Start the development server:

    ```bash
    npm run dev
    ```

## API Endpoints

### Register a New User

- **Endpoint:** `/api/auth/register`
- **Method:** `POST`
- **Description:** Registers a new user.
- **Body Parameters:**
  - `username` (string, required)
  - `email` (string, required)
  - `password` (string, required)

![Register User](./screenshots/register.png)

### Login a User

- **Endpoint:** `/api/auth/login`
- **Method:** `POST`
- **Description:** Logs in a user.
- **Body Parameters:**
  - `email` (string, required)
  - `password` (string, required)

![Login User](./screenshots/login.png)

### Request Password Reset

- **Endpoint:** `/api/auth/reset-password-request`
- **Method:** `POST`
- **Description:** Requests a password reset.
- **Body Parameters:**
  - `email` (string, required)

![Request Password Reset](./screenshots/reset_password_request.png)

### Reset Password

- **Endpoint:** `/api/auth/reset-password/:token`
- **Method:** `POST`
- **Description:** Resets the user's password.
- **Body Parameters:**
  - `password` (string, required)

![Reset Password](./screenshots/reset_password.png)

## Usage

### Registration

1. Open Postman and set the request method to `POST`.
2. Enter the URL: `http://localhost:5000/api/auth/register`.
3. Go to the Body tab, select `raw`, and choose `JSON`.
4. Enter the registration details in JSON format:
    ```json
    {
      "username": "your_username",
      "email": "your_email@example.com",
      "password": "your_password"
    }
    ```
5. Click `Send`.

### Login

1. Open Postman and set the request method to `POST`.
2. Enter the URL: `http://localhost:5000/api/auth/login`.
3. Go to the Body tab, select `raw`, and choose `JSON`.
4. Enter the login details in JSON format:
    ```json
    {
      "email": "your_email@example.com",
      "password": "your_password"
    }
    ```
5. Click `Send`.

### Request Password Reset

1. Open Postman and set the request method to `POST`.
2. Enter the URL: `http://localhost:5000/api/auth/reset-password-request`.
3. Go to the Body tab, select `raw`, and choose `JSON`.
4. Enter the email in JSON format:
    ```json
    {
      "email": "your_email@example.com"
    }
    ```
5. Click `Send`.

### Reset Password

1. Open Postman and set the request method to `POST`.
2. Enter the URL: `http://localhost:5000/api/auth/reset-password/{token}` (replace `{token}` with the actual token).
3. Go to the Body tab, select `raw`, and choose `JSON`.
4. Enter the new password in JSON format:
    ```json
    {
      "password": "your_new_password"
    }
    ```
5. Click `Send`.

## Video Walkthrough

For a detailed video walkthrough of all operations being performed in Postman, please refer to the following link:

[![Watch the video](./screenshots/video_thumbnail.png)](https://www.youtube.com/watch?v=vC6HGOGtntM)

## Screenshots

- **Registration:**

  ![Registration](https://firebasestorage.googleapis.com/v0/b/userauthentication-af0ad.appspot.com/o/register_page.png?alt=media&token=5b12b573-0d0e-4fa2-bc69-a1e8b88d5e32)

- **Login:**

  ![Login](https://firebasestorage.googleapis.com/v0/b/userauthentication-af0ad.appspot.com/o/login_page.png?alt=media&token=7be5da97-ca46-4b76-b76e-bdc7a17b0e0e)

- **Request Password Reset:**

  ![Request Password Reset](https://firebasestorage.googleapis.com/v0/b/userauthentication-af0ad.appspot.com/o/password_reset.png?alt=media&token=614e37d1-2078-411f-ade0-99c444164407)

- **Reset Password:**

  ![Reset Password](https://firebasestorage.googleapis.com/v0/b/userauthentication-af0ad.appspot.com/o/Reaset_password_request.png?alt=media&token=e8924424-4bc1-48a0-9432-676caf7ba409)

## License

This project is licensed under the MIT License.
