# Knowledge Corner

Knowledge Corner is a web application designed to serve as a comprehensive library management system. It allows users to explore a vast collection of books across various categories, borrow books, and manage their borrowing history. Additionally, librarians can perform administrative tasks such as adding, updating, and removing books from the library.


## Live Link 
- **[Knowledge Corner](https://knowledge-corner-55271.web.app)**

## To Access the Librarian Role:(Be Careful)
- **Email**: jhankar.hablu.master@ph.com
- **Password**: Ab1234
- **Verification Code(Important)**: IAmHabluDeveloper
-- Use can also create a new Librarian using this verification code

## Categories I Used :
- **1. Comics**
- **2. Computers**
- **3. Entertainment**
- **4. Horror**
- **5. Kids**
- **6. Sci-Fiction**
- **7. Social Science**

## Features

- **User Authentication**: Users can register, log in, and log out. Authentication is implemented using JWT tokens to ensure secure access to the application.
- **Role-based Access Control**: Librarians have access to administrative functionalities such as adding, updating, and removing books, while regular users can only browse and borrow books.
- **Explore Books**: Users can explore books by categories and view detailed information about each book, including title, author, category, and rating.
- **Borrow Books**: Users can borrow books from the library. The application manages borrowing limits and ensures that users cannot borrow the same book multiple times simultaneously.
- **Manage Borrowing History**: Users can view their borrowing history, including borrowed books, borrowing dates, and return dates. They can also return books, updating their borrowing history and the library's inventory accordingly.
- **Responsive Design**: The application is designed to be responsive and accessible across various devices, ensuring a seamless user experience.

## Technologies Used

- **Frontend**:
  - React.js: Frontend library for building user interfaces.
  - React Router: Declarative routing for React applications.
  - Axios: Promise-based HTTP client for making API requests.
  - JWT Decode: Library for decoding JWT tokens on the client-side.
  - SweetAlert2: Customizable modal dialogs for displaying messages to users.
  - React Rating: React component for displaying star ratings.
- **Backend**:
  - Node.js: JavaScript runtime environment for building server-side applications.
  - Express.js: Fast, unopinionated, minimalist web framework for Node.js.
  - MongoDB: NoSQL database for storing user data, book information, and borrowing history.
  - JWT: JSON Web Tokens for secure authentication and authorization.
- **Deployment**:
  - Firebase: Platform for hosting the frontend application.
  - Vercel: Cloud platform for deploying and managing the backend server.
































# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
