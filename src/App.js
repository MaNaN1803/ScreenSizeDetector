// import "./App.css";
// import { useEffect, useState } from "react";

// function App() {
//   const [text, settext] = useState(" ");
//   // variation 1
//   // useEffect(() => {
//   //   console.log("ui rendering done");
//   // });

//   // variation 2
//   // useEffect(() => {
//   //   console.log("only one render"); //ek hi baar render print hoga starting me
//   // }, []);

//   //variation3
//   // useEffect(() => {
//   //   console.log("render"); // render when dependencies value is changing that is text
//   // }, [text]);

//   //variation 4
//   useEffect(() => {
//     console.log("listner added");
//     return () => {
//       console.log("listner removed");
//     };
//   }, [text]);

//   function changehandler(event) {
//     console.log(text);
//     settext(event.target.value);
//   }

//   return (
//     <div className="App">
//       <input type="text" onChange={changehandler}></input>
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Screen Size App</h1>
        <p>Current Screen Size:</p>
        <p>{`Width: ${screenSize.width}px`}</p>
        <p>{`Height: ${screenSize.height}px`}</p>
      </header>
    </div>
  );
}

export default App;
