import React, { useEffect, useState } from "react";
import { getCalorieEntries, deleteCalorieEntry } from "../api";

const CalorieList = () => {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await getCalorieEntries();
        setEntries(response.data);
    };

    const handleDelete = async (id) => {
        await deleteCalorieEntry(id);
        fetchData();
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
