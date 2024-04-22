# BookNook

BookNook is a full-stack web application inspired by GoodReads, catering to book enthusiasts who enjoy tracking their reading and sharing reviews. It combines a Django RESTful backend with a React frontend, offering a seamless user experience for finding books and managing favorites and reviews.

## Key Features

-   User Authentication: Securely register and log in to access personalized features.
-   Book Search: Utilize the Google Books API to search for books and view detailed information.
-   Favorites: Add or remove books from your personal favorites list.
-   Reviews: Write reviews and rate books, with immediate updates and the ability to edit or delete your contributions.
-   Responsive Design: A flexible UI that adapts to different screen sizes for optimal viewing on any device.

## Technologies Used

-   **Backend**: Python, Django, Django REST Framework, Simple JWT for authentication.
-   **Frontend**: JavaScript, React.js for building user interfaces, Axios for API requests, React Router for navigation.

## Installation

To set up BookNook locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the `backend` directory.
3. Run `pipenv install` to set up the virtual environment and install the required Python packages.
4. Activate the virtual environment with `pipenv shell`.
5. Set up a local MySQL database.
6. Create a `local_settings.py` file in the same directory as `settings.py`, and configure your database settings there.
7. Ensure `local_settings.py` is imported at the end of your `settings.py` file.
8. Run `python manage.py migrate` to create the necessary database tables.
9. Start the backend server with `python manage.py runserver`.
10. In a new terminal, navigate to the `frontend` directory and run `npm install` to install the required npm packages.
11. Start the React application with `npm start`.

Make sure MySQL is running and accessible before attempting to run the migrations and start the Django development server.

## Project Structure

The project is divided into two main directories:

-   `backend/`: Contains the Django project and apps with models, views, serializers, and URL configurations.
-   `frontend/`: Houses the React application with components, utilities, and styling.

### Backend File Structure

### Frontend File Structure
