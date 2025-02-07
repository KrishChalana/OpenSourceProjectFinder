
import "./searchbar.css";

function Searchbar() {
  return (
    <>
     <form className="flex justify-center items-center gap-10">
        <input  placeholder="Search" type="text" className="bg-white w-[60vw] h-[5vh] font-bold rounded-md focus:rotate-0 transition-transform -rotate-2 text-center text-black"/>
        <button className="px-6 rotate-10 focus:rotate-0 p-3 bg-white text-gray-500 rounded-md"><h3>Submit</h3></button>
        {/* <img src="clumsy.svg" className="" alt="" /> */}
     </form>
    </>
  );
}

export default Searchbar;
