import React from "react";

const App = () => {
  const onClickButton = () => {
    alert();
  };

  const contentStyle = {
    color: "bleu",
    fontSize: "18px"
  };

  return (
    <>
      <h1 style={contentStyle}> aaa</h1>
      <p>ooo</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
