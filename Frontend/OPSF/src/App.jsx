import Searchbar from "./SearchBar/searchbar";
import "./App.css";
import Navbar from "./navbar/navbar";
function App() {
  return (
    <>
      <div
        id="main-body"
        className="w-[100vw] h-[100vh]"
      >
        <div className=" flex flex-col justify-end items-center h-full gap-20">
        <Navbar />
        <Searchbar />
        <div className=" flex justify-between w-full">

<img src="doodle1.png" className="rotate-13" alt="" />
<img src="wizard.png" className="-rotate-13" alt="" />
</div>

        </div>

      

      </div>
  
    </>
  );
}

export default App;
