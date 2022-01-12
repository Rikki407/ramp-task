import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Ramp from './components/Ramp';

function App() {
    const [input, setInput] = useState('["Hello", "World", 407]');
    const handleChange = (e) => setInput(e.target.value);
    return (
        <>
            <div className="title">
                <a className="title-link" href="https://www.rishablamba.com/">
                    RishabLamba.com
                </a>
            </div>
            <div>
                <Ramp input={input} />
                <div
                    className="neu-input-container"
                    style={{ marginBottom: 10 }}
                >
                    <input
                        placeholder="Enter input prop in JS..."
                        onChange={handleChange}
                        value={input}
                    />
                    <div className="instructions">
                        change the input prop from here
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
