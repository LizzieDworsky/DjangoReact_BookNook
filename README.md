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

```
backend/
│   book_details/
│   │   urls.py
│   │   views.py
│   booknook/
│   │   local_settings.py
│   │   settings.py
│   │   urls.py
│   favorites/
│   │   models.py
│   │   serializer.py
│   │   urls.py
│   │   views.py
│   reviews/
│   │   models.py
│   │   serializer.py
│   │   urls.py
│   │   views.py
│   users/
│   │   serializer.py
│   │   urls.py
│   │   views.py
│   .gitignore
│   manage.py
│   Pipfile
│   Pipfile.lock
```

### Frontend File Structure

```
frontend/
│   node_modules/
│   public/
│   src/
│   │   components/
│   │   │   auth/
│   │   │   BookDetails/
│   │   │   BookList/
│   │   │   Layout/
│   │   │   Reviews/
│   │   │   SearchBar/
│   │   pages/
│   │   │   BookDetailsPage.jsx
│   │   │   FavoritesPage.jsx
│   │   │   HomePage.jsx
│   │   │   LoginPage.jsx
│   │   │   RegisterPage.jsx
│   │   utils/
│   │   │   PrivateRoute.jsx
│   │   │   useAuth.js
│   │   App.css
│   │   App.js
│   │   index.js
│   .gitignore
│   package-lock.json
│   package.json
│   README.md
```

## Future Work

<!-- -   **Security Enhancements**: Implement HttpOnly cookies for secure JWT storage, CSRF protection, and rate limiting for the API endpoints. -->

-   **Refresh Token Implementation**: Regularly refresh JWT access tokens using refresh tokens to improve security without compromising user experience.
-   **Performance Optimization**: Introduce caching strategies for frequently accessed data, especially for book details and average ratings.
-   **Frontend Improvements**: Improve error messaging in the frontend for a better user experience. Consider implementing optimistic UI updates for favoriting and reviewing books.
-   **User Experience**: Add a 'show password' toggle for password fields and implement front-end validation for user inputs.
-   **Feature Expansion**: Limit the number of reviews a user can leave for a book to one, and display their review at the top.
-   **Search Enhancement**: Include advanced search filters and sorting options in the book search feature.
-   **Review System**: Implement a system to feature 'helpful' reviews based on user votes and display them prominently.
-   **Review Enhancements**: Incorporate dates on reviews and implement sorting functionality, allowing users to view reviews by the most recent or most helpful.
-   **Book Collections**: Allow users to organize their favorited books into personalized book collections, improving the management and display of their favorite reads on the user favorites page.
-   **User Profiles**: Create dedicated user profile pages where users can edit personal details and pin their favorite collections for others to see.
-   **Profile Pictures**: Introduce the ability for users to upload profile pictures, which will be displayed alongside their reviews to add a personal touch.
-   **Social Features**: Allow users to follow other readers, see their favorites, and reviews, creating a social network atmosphere.
-   **Accessibility**: Ensure all components are fully accessible, including modal dialogs and interactive ratings components.
-   **Design System**: Develop a design system for consistent UI components across the application.
-   **Mobile Responsiveness**: Enhance the responsiveness of the application for an improved mobile user experience.
-   **Testing**: Add test coverage for both backend and frontend components to improve reliability.
-   **Documentation**: Create comprehensive API documentation and developer guides.

These enhancements and features aim to improve the robustness, functionality, and user engagement of the BookNook application.

## Challenges and Lessons Learned

Throughout the development of BookNook, several challenges were encountered which offered valuable learning opportunities:

-   **Authentication Implementation**: Implementing a robust authentication system, including double password validation and JWT refresh tokens, was a complex task that reinforced the importance of security and meticulous state management in web applications.

-   **Favorites Logic**: Ensuring that users could not favorite a book multiple times required careful attention to the backend logic, and handling potential duplicate entries proved to be a valuable lesson in maintaining data integrity.

-   **Book Details Management**: Balancing data from the Google Books API and the backend, especially when integrating the loader function and updating data in real-time (like favorites or reviews), was a substantial challenge that tested my skills in state management and component lifecycle in React.

-   **Interactive Ratings**: Creating a user-friendly rating system that was both interactive and could display ratings accurately required a deep dive into React's state management and conditional rendering capabilities.

-   **Reusable Components**: Designing and implementing a reusable modal component was a test of my React and CSS skills, and it emphasized the importance of creating flexible UI components that can be adapted for various parts of an application.

Each of these challenges led to a deeper understanding of the technologies used, the complexities of building a full-stack application, and the satisfaction of overcoming obstacles through perseverance and strategic problem-solving.

## Contributing

Contributions are welcome! If you're interested in improving BookNook, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

<!-- Please make sure to update tests as appropriate. -->

---

For any additional questions or comments, feel free to reach out.
