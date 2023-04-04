import React, { useRef } from "react";

const Ref = () => {
  const inputRef = useRef(0);

  const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const handleChange = (num) => {
    inputRef.current = num;
    console.log(inputRef.current, "inputref.current");
  };

  return (
    <div>
      <canvas width={161} height={161}></canvas>
      <input
        // ref={inputRef}
        onChange={() => handleChange()}
      ></input>
      <div ref={inputRef}>{inputRef.current}</div>
      <button
        onClick={() => {
          inputRef.current = inputRef.current + 1;
          console.log(inputRef, "onCLick");
        }}
      >
        click me{" "}
      </button>
      {myArr.map((num) => (
        <p
          style={{ border: "1px solid" }}
          key={num}
          onClick={() => {
            console.log(inputRef);
            handleChange(num);
          }}
        >
          {num}
        </p>
      ))}
    </div>
  );
};

export default Ref;
