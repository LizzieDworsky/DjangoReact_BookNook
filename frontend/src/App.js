import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Layout/NavBar";

// Define the main layout component for the application
function App() {
    return (
        <div className="App">
            <NavBar />
            <Outlet />
        </div>
    );
}

export default App;
