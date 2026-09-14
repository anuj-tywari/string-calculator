import React, { useState } from 'react';
import './App.css';

function App() {
    const [numbers, setNumbers] = useState('');
    const [result, setResult] = useState(null);

    const handleCalculate = async () => {
        try {
            const response = await fetch('http://localhost:3000/string-calculator/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ numbers: numbers }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Error occurred');
            }

            const data = await response.json();
            setResult(data.result);
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="app">
            <h1>String Calculator</h1>
            <input
                type="text"
                value={numbers}
                onChange={(e) => setNumbers(e.target.value)}
                placeholder='Enter numbers...'
                className="input"
            />
            <button onClick={handleCalculate} className="button">
                Calculate
            </button>
            <p className="result">Sum: {result !== null ? result : 0}</p>
        </div>
    );
}

export default App;
