import React, { useState, useEffect } from "react";
import ReactSlider from "react-slider";
import "./Sortervisuals.css";
import * as bs from "../../sortingAlgorithms/bubbleSort.js";
import * as is from "../../sortingAlgorithms/insertionSort.js";
import * as ss from "../../sortingAlgorithms/selectionSort.js";
import * as qs from "../../sortingAlgorithms/quickSort.js";
import * as ms from "../../sortingAlgorithms/mergeSort.js";

const Sortervisuals = () => {
  const [array, setArray] = useState([]);
  const [NOELEM, setNOELEM] = useState(20);
  const [speed, setSpeed] = useState(201 - 20);
  const [running, setRunning] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    genArray();
  }, [NOELEM]);

  const genArray = () => {
    let array = [];
    const MAX_VALUE = 100;
    const MIN_VALUE = 5;
    for (let idx = 0; idx < NOELEM; idx++) {
      array.push(Math.floor(Math.random() * (MAX_VALUE - MIN_VALUE) + 1) + MIN_VALUE);
    }
    setArray(array);
  };

  const animate = (plan) => {
    const arraybarlist = document.getElementsByClassName("value-bar");
    for (let move = 0; move < plan.pos.length; move++) {
      setTimeout(() => {
        let pos1 = plan.pos[move][0];
        let pos2 = plan.pos[move][1];
        if (plan.swap[move]) {
          let temp = array[pos1];
          array[pos1] = array[pos2];
          array[pos2] = temp;
          if (move !== 0) {
            arraybarlist[plan.pos[move - 1][0]].style.backgroundColor = "blue";
            if (plan.pos[move - 1][1] >= 0) {
              arraybarlist[plan.pos[move - 1][1]].style.backgroundColor = "blue";
            }
          }

          arraybarlist[pos1].style.backgroundColor = "red";
          arraybarlist[pos2].style.backgroundColor = "red";
          setArray([...array]);
        } else {
          let pos1 = plan.pos[move][0];
          let pos2 = plan.pos[move][1];
          if (move !== 0) {
            arraybarlist[plan.pos[move - 1][0]].style.backgroundColor = "blue";
            arraybarlist[plan.pos[move - 1][1]].style.backgroundColor = "blue";
          }

          arraybarlist[pos1].style.backgroundColor = "green";
          if (pos2 >= 0) {
            arraybarlist[pos2].style.backgroundColor = "green";
          }

          setArray([...array]);
        }
      }, move * speed);
    }

    setTimeout(() => {
      const arraybarlist = document.getElementsByClassName("value-bar");
      setArray(plan.sorted);
      for (let idx = 0; idx < arraybarlist.length; idx++) {
        arraybarlist[idx].style.backgroundColor = "green";
      }
      setTimeout(() => {
        for (let idx = 0; idx < arraybarlist.length; idx++) {
          arraybarlist[idx].style.backgroundColor = "blue";
        }
        setRunning(false);
      }, speed * 3);
    }, plan.pos.length * speed + 20);
  };

  const bubbleSort = () => {
    if (!running) {
      setRunning(true);
      const bubbleSortPlan = bs.bubbleSort([...array]);
      animate(bubbleSortPlan);
    }
  };

  const mergeSort = () => {
    if (!running) {
      setRunning(true);
      const mergeSortPlan = ms.mergeSort([...array]);
      animate(mergeSortPlan);
    }
  };

  const quickSort = () => {
    if (!running) {
      setRunning(true);
      const quickSortPlan = qs.quickSort([...array]);
      animate(quickSortPlan);
    }
  };

  const insertionSort = () => {
    if (!running) {
      setRunning(true);
      const insertionSortPlan = is.insertionSort([...array]);
      animate(insertionSortPlan);
    }
  };

  const selectionSort = () => {
    if (!running) {
      setRunning(true);
      const selectionSortPlan = ss.selectionSort([...array]);
      animate(selectionSortPlan);
    }
  };

  const changeNum = (val) => {
    const newSpeed = 201 - val;
    setNOELEM(val);
    setSpeed(newSpeed);
    genArray();
  };

  return (
    <div>
      <div className="Header">
        <div className="button-container">
          <button className="button" onClick={genArray}>
            New array
          </button>
        </div>
        <div className="vl"></div>
        <div className="button-container">
          <button className="button" onClick={bubbleSort}>
            Bubble Sort
          </button>
        </div>
        <div className="button-container">
          <button className="button" onClick={mergeSort}>
            Merge Sort
          </button>
        </div>
        <div className="button-container">
          <button className="button" onClick={quickSort}>
            Quick Sort
          </button>
        </div>
        <div className="button-container">
          <button className="button" onClick={insertionSort}>
            Insertion Sort
          </button>
        </div>
        <div className="button-container">
          <button className="button" onClick={selectionSort}>
            Selection Sort
          </button>
        </div>
        <ReactSlider
          onChange={(val) => {
            if (!running) {
              changeNum(val);
            }
          }}
          className="horizontal-slider"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          defaultValue={NOELEM}
          min={10}
          max={200}
          renderThumb={(props, state) => (
            <div {...props}>{state.valueNow}</div>
          )}
        />
      </div>

      <div className="array-holder">
        {array.map((value, idx) => (
          <div
            className="value-bar"
            key={idx}
            style={{
              paddingBottom: `${value * 5}px`,
              paddingLeft: `${Math.floor(window.innerWidth / (array.length * 2) / 2)}px`,
              paddingRight: `${Math.floor(window.innerWidth / (array.length * 2) / 2)}px`,
            }}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sortervisuals;
