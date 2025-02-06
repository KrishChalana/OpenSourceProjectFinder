import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./navbar/navbar";
function App() {
  return (
    <>
      <div
        id="main-body"
        className="w-[100vw] h-[100vh] flex justify-center items-center gap-10"
      >
        <Navbar />

        <div class="input-container">
          <input
            class="input"
            name="text"
            type="text"
            placeholder="Search the internet..."
          />
        </div>
        <div class="button input">
          <button name="checkbox" type="button"></button>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
}

export default App;
