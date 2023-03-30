import React, { useState } from "react";

const Sudoku = ({ question, setHomeComponent, difficulty }) => {
  //styling
  const styleRow = { borderBottom: "1px Solid" };
  const styleColumn = { borderLeft: "1px Solid" };
  const noStyle = {};

  //array to iteraate input
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  //local state  handliing
  const [sudokuQuestion, setSudokuQuestion] = useState(deepCopy(question));
  // const [sudokuAnswer, setSudokuAnswer] = useState(deepCopy(questionArray));
  const [mistake, setMistake] = useState(0);

  // function to create deep copy
  function deepCopy(arr) {
    return JSON.parse(JSON.stringify(arr));
  }

  //function to handle input changes by user.

  function handleInputChange(e, row, column) {
    var value = parseInt(e.target.value) || 0;
    var grid = deepCopy(sudokuQuestion);

    if (value === 0 || (value >= 1 && value <= 9)) {
      grid[row][column] = value;
    }

    if (puzzle[row][column] !== grid[row][column]) {
      grid[row][column] = 0;
      alert("wrong entry");
      setMistake(mistake + 1);
    } else {
      setSudokuQuestion(grid);
    }

    winner(grid, row, column);
    // console.log(checkRow(grid, row, 3));
    // console.log(checkSudoku());
  }

  // reset question
  if (mistake === 3) {
    setMistake(0);
    setSudokuQuestion(question);
    alert("You Failed, please try again");
  }

  //check if sudoku is completed or not and alert the user
  function winner(grid, row, column) {
    let count = 0;
    for (let i = 0; i <= 8; i++) {
      for (let j = 0; j <= 8; j++) {
        if (sudokuQuestion[i][j] === 0) {
          count = count + 1;
        }
      }
    }
    if (count <= 1 && grid[row][column] !== 0) {
      alert("Congratulations, you won");
      alert("Taking you to home page");
      setHomeComponent(true);
    }
    console.log("count", count);
  }

  // function to solve sudoku
  function solveSudoku(puzzle) {
    //isValid is a function to check num is unique in row column and grid

    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (puzzle[row][col] === 0) {
          for (let val = 1; val <= 9; val++) {
            if (isValid(row, col, val)) {
              puzzle[row][col] = val;
              if (solveSudoku(puzzle)) {
                //again solving for mutated puzzle ;
                return true;
              } else {
                puzzle[row][col] = 0;
              }
            }
          }
          return false;
        }
      }
    }

    function isValid(row, col, val) {
      for (let i = 0; i < 9; i++) {
        const rowCheck = puzzle[row][i] === val; // check num is valid in row or not
        const colCheck = puzzle[i][col] === val; // check num is valid in column or not
        const boxCheck = // check num is vaid in the 3*3 grid or not
          puzzle[Math.floor(row / 3) * 3 + Math.floor(i / 3)][
            Math.floor(col / 3) * 3 + (i % 3)
          ] === val;
        if (rowCheck || colCheck || boxCheck) {
          return false;
        }
      }

      return true;
    }

    return true;

    //some local testing via console
  }

  // calling function to solve the sudoku and store it in question array.
  let puzzle = deepCopy(question);
  solveSudoku(puzzle);
  console.log("puzzle,", puzzle);

  console.log("sudokuQuestion", sudokuQuestion);

  return (
    <div className="sudoku-area">
      <section className="game-info">
        <p> {difficulty} </p>
        <p>
          Mistake: <span>{mistake >= 0 && mistake}/3</span>{" "}
        </p>
        <div
          className="button-home"
          onClick={() => {
            setHomeComponent(true);
          }}
        >
          Home
        </div>
      </section>
      <table className="main-block">
        <tbody>
          {arr.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              style={(rowIndex + 1) % 3 === 0 ? styleRow : noStyle}
            >
              {arr.map((column, columnIndex) => (
                <td
                  key={columnIndex}
                  style={columnIndex % 3 === 0 ? styleColumn : noStyle}
                >
                  <input
                    className="input-cell"
                    value={
                      sudokuQuestion[row][column] === 0
                        ? ""
                        : sudokuQuestion[row][column]
                    }
                    disabled={sudokuQuestion[row][column] === 0 ? false : true}
                    onChange={(e) => {
                      handleInputChange(e, row, column);
                    }}
                  ></input>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sudoku;
