import React, { useState } from "react";
import { addCalorieEntry } from "../api";

const AddCalorieForm = ({ refresh }) => {
    const [food, setFood] = useState("");
    const [calories, setCalories] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addCalorieEntry({ food_name: food, calories });
        refresh();
        setFood("");
        setCalories("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Food" value={food} onChange={(e) => setFood(e.target.value)} required />
            <input type="number" placeholder="Calories" value={calories} onChange={(e) => setCalories(e.target.value)} required />
            <button type="submit">Add Entry</button>
        </form>
    );
};

export default AddCalorieForm;
