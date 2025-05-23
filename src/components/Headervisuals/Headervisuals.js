import React, { useState } from 'react';
import './Headervisuals.css';

const Headervisuals = () => {
    const [sortingAlgo, setSortingAlgo] = useState("");

    const sortingAlgoHandler = (algo) => {
        setSortingAlgo(algo);
    };

    return (
        <div>
            <button onClick={() => this.genArray()}> New array </button>
            <button onClick={() => sortingAlgoHandler('bs')}> Bubble Sort </button>
            <button onClick={() => sortingAlgoHandler('ms')}> Merge Sort</button>
            <button onClick={() => sortingAlgoHandler('qs')}> Quick Sort</button>
            <button onClick={() => sortingAlgoHandler('is')}> Insertion Sort </button>
            <button onClick={() => sortingAlgoHandler('ss')}> Selection Sort</button>
            <p>{sortingAlgo}</p>
        </div>
    );
}

export default Headervisuals;
