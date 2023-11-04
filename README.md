# GLP
## GreatLakesPizza is an interactive single-page application (SPA) website that offers a delightful pizza ordering experience. The project employs a modern tech stack, with a React frontend, Python backend, and utilizes Flask, Flask-Login, and MySQL for seamless user interaction and data management. GreatLakesPizza is not just a pizza ordering website; it's a culinary adventure waiting to happen. Dive in, and treat yourself to a world of pizza perfection!

## Key Features:

### Interactive Pizza Selection: GreatLakesPizza offers a visually appealing interface that allows users to explore a wide variety of mouthwatering pizza options. With just a few clicks, users can customize their pizzas to perfection.

### Effortless Ordering: Ordering pizza has never been easier. Users can add their favorite pizzas to the cart, customize them with toppings, combos, and review their selections before placing an order.

### Secure User Authentication: To ensure the security of user data, GreatLakesPizza implements Flask-Login for user registration and authentication. Creating accounts and logging in is a hassle-free and secure process.

### Streamlined Checkout: The project provides a smooth and secure checkout process, via a robust cart system across all pages.

### User Profiles: GreatLakesPizza offers user profiles that allow customers to manage their personal information conveniently. Users can access their order history and receive loyalty rewards based on their past orders.

### Responsive Design: The website is designed to be fully responsive, ensuring a seamless experience on various devices, from desktops to mobile phones.

### Optimized Performance: GreatLakesPizza prioritizes optimized page load times and performance, delivering an exceptional user experience with minimal waiting.

## Tech Stack:

- Frontend: React - A modern JavaScript library for building user interfaces, providing a dynamic and interactive user experience.
- Backend: Python with Flask - Flask is a lightweight web framework that powers the backend, handling requests and business logic.
- Database: MySQL - MySQL is used to efficiently store and manage user data, orders, and pizza details.
- User Authentication: Flask-Login - Flask-Login is employed to secure user registration and authentication, ensuring data privacy.

## How To Run Locally:

To run this application locally, first clone the repository to your local machine. Next, run 'npm install' from the root directory, the app directory as well as the /backend directory. Finally, create a virtual python environment within the same /backend directory and install the python depencies (via the 'pip install -r requirements.txt' command.). Now the application should be via running 'python main.py' from the backend directory! This willl require a SQLALCHEMY_DATABASE_URI, a SQLALCHEMY_TRACK_MODIFICATIONS flag and a SECRET_KEY.
