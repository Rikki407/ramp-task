import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Ramp from './components/Ramp';

function App() {
    return (
        <div>
            <div className="neu-input-container">
                <input placeholder="Input Prop" />
            </div>
            <Ramp />
        </div>
    );
}

export default App;
