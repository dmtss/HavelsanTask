import React from 'react';
import TreeComponents from './TreeComponents'

import './style.css';

function App() {

    return(
        <div>
        <div className="header">
        <div className="topBar"></div>
        <h1>University Academic Comparison</h1>
        </div>
        <div className="main">
        <TreeComponents/>       
        </div>
        </div>
    );
}

export default App;