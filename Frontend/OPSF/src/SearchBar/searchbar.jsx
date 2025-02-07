
import React, { useState } from "react";

import { useNavigate } from "react-router";
function Searchbar() {
  const [query, setQuery] = useState("");
  let navigate = useNavigate();
  function handleNavigate() {
    let navUri = "/" + query
    navigate(navUri)
  }
  return (
    <>
      <div className="App flex justify-center items-center gap-10">
        <input
          className="bg-white w-[60vw] h-[5vh] font-bold rounded-md focus:rotate-0 transition-transform -rotate-2 text-center text-black"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for Repo..."
        />
        <button
          className="px-6 rotate-10 focus:rotate-0 p-3 bg-white text-gray-500 rounded-md"
          onClick={handleNavigate}
        >
          Search
        </button>
      </div>
    </>
  );
}

export default Searchbar;
