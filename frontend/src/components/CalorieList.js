import React from "react";
import { deleteCalorieEntry } from "../api";

const CalorieList = ({ entries, refresh }) => {
    const handleDelete = async (id) => {
        await deleteCalorieEntry(id);
        refresh();
    };

    return (
        <div>
            <h2>Calorie Entries</h2>
            <ul>
                {entries.map((entry) => (
                    <li key={entry.id}>
                        {entry.food_name} - {entry.calories} kcal
                        <button onClick={() => handleDelete(entry.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CalorieList;