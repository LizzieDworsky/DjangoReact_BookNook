import { Outlet } from "react-router-dom";
import "./App.css";

// Define the main layout component for the application
function App() {
    return (
        <div className="App">
            <Outlet />
        </div>
    );
}

export default App;
