import React from "react";
import CalorieList from "./components/CalorieList";
import AddCalorieForm from "./components/AddCalorieForm";

function App() {
    return (
        <div>
            <h1>Calorie Tracker</h1>
            <AddCalorieForm />
            <CalorieList />
        </div>
    );
}

export default App;
