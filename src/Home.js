import React, { useState } from "react";
// import Sudoku from "./Sudoku";

const Home = () => {
  const questionVeryEasy = [
    [8, 5, 3, 6, 7, 0, 2, 9, 1],
    [7, 6, 1, 9, 8, 2, 5, 4, 3],
    [4, 9, 2, 0, 3, 1, 7, 8, 6],
    [9, 2, 7, 3, 1, 5, 8, 6, 4],
    [1, 4, 6, 2, 9, 8, 0, 5, 7],
    [3, 8, 5, 4, 6, 7, 1, 2, 9],
    [6, 7, 4, 8, 0, 3, 9, 1, 5],
    [5, 3, 8, 1, 4, 9, 6, 7, 2],
    [2, 1, 9, 7, 5, 6, 4, 3, 8],
  ];

  const questionEasy = [
    [0, 0, 6, 0, 0, 0, 8, 0, 2],
    [7, 0, 0, 4, 2, 8, 0, 9, 6],
    [2, 1, 0, 0, 3, 0, 7, 0, 5],
    [0, 3, 1, 0, 0, 0, 9, 8, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 7],
    [8, 2, 0, 9, 5, 0, 0, 0, 3],
    [3, 0, 0, 0, 0, 2, 0, 6, 0],
    [0, 8, 5, 0, 0, 6, 0, 0, 0],
    [9, 0, 2, 5, 0, 1, 3, 0, 8],
  ];

  const questionMedium = [
    [0, 5, 0, 9, 0, 0, 0, 0, 0],
    [8, 0, 0, 0, 4, 0, 3, 0, 7],
    [0, 0, 0, 2, 8, 0, 1, 9, 0],
    [5, 3, 8, 6, 0, 7, 9, 4, 0],
    [0, 2, 0, 3, 0, 1, 0, 0, 0],
    [1, 0, 9, 8, 0, 4, 6, 2, 3],
    [9, 0, 7, 4, 0, 0, 0, 0, 0],
    [0, 4, 5, 0, 0, 0, 2, 0, 9],
    [0, 0, 0, 0, 3, 0, 0, 7, 0],
  ];

  const questionHard = [
    [0, 1, 4, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 6, 5, 0, 0, 0],
    [0, 0, 0, 9, 2, 0, 1, 5, 0],
    [0, 5, 0, 0, 3, 0, 4, 6, 0],
    [0, 0, 3, 0, 4, 0, 0, 0, 0],
    [0, 0, 2, 6, 0, 1, 7, 0, 5],
    [0, 7, 0, 0, 0, 0, 5, 1, 3],
    [1, 0, 0, 0, 0, 0, 0, 9, 0],
    [0, 0, 0, 3, 0, 6, 0, 7, 0],
  ];

  const questionNightmare = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 8, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  const [question, setquestion] = useState();
  const [homeComponent, setHomeComponent] = useState(true);
  const difficultyLevel = ["Very Easy", "Easy", "Medium", "Hard", "Nightmare"];
  const [difficulty, setDifficulty] = useState();
  return (
    <div>
      {homeComponent ? (
        <>
          <h3>Select any difficulty level to start the game</h3>
          <div className="menu-home">
            <h2
              className="game-difficulty "
              style={{ cursor: "pointer" }}
              onClick={() => {
                setquestion(questionVeryEasy);
                setHomeComponent(false);
                setDifficulty(difficultyLevel[0]);
                console.log(question);
              }}
            >
              {" "}
              Very Easy{" "}
            </h2>
            <h2
              className="game-difficulty "
              style={{ cursor: "pointer" }}
              onClick={() => {
                setquestion(questionEasy);
                setHomeComponent(false);
                setDifficulty(difficultyLevel[1]);
                console.log(question);
              }}
            >
              {" "}
              Easy{" "}
            </h2>
            <h2
              className="game-difficulty "
              onClick={() => {
                setquestion(questionMedium);
                setDifficulty(difficultyLevel[2]);
                setHomeComponent(false);
              }}
            >
              {" "}
              Medium{" "}
            </h2>
            <h2
              className="game-difficulty "
              onClick={() => {
                setquestion(questionHard);
                setDifficulty(difficultyLevel[3]);
                setHomeComponent(false);
              }}
            >
              Hard{" "}
            </h2>
            <h2
              className="game-difficulty "
              onClick={() => {
                setquestion(questionNightmare);
                setDifficulty(difficultyLevel[4]);
                setHomeComponent(false);
              }}
            >
              Nightmare{" "}
            </h2>
          </div>
        </>
      ) : (
        <>
          {/* <Sudoku
            question={question}
            setHomeComponent={setHomeComponent}
            difficulty={difficulty}
          /> */}
        </>
      )}
    </div>
  );
};

export default Home;
