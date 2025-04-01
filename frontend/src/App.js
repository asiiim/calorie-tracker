import React, { useState, useEffect } from "react";
import CalorieList from "./components/CalorieList";
import AddCalorieForm from "./components/AddCalorieForm";
import { getCalorieEntries } from "./api";

function App() {
    const [calorieEntries, setCalorieEntries] = useState([]);

    const fetchCalorieEntries = async () => {
        try {
            const response = await getCalorieEntries();
            setCalorieEntries(response.data);
        } catch (error) {
            console.error("Error fetching calorie entries:", error);
        }
    };

    useEffect(() => {
        fetchCalorieEntries();
    }, []);

    return (
        <div>
            <h1>Calorie Tracker</h1>
            <AddCalorieForm refresh={fetchCalorieEntries} />
            <CalorieList entries={calorieEntries} refresh={fetchCalorieEntries} />
        </div>
    );
}

export default App;