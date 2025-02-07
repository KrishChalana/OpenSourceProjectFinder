import "./navbar.css";

function Navbar() {
  return (
    <>
      <nav className=" transiton-all fixed top-10 navbar flex justify-center items-center gap-10 sour-gummy-font  pt-2">
        <div className=" flex gap-10  text-xl  p-2 px-10 black-bars">
          <button className=" text-3xl hover:text-5xl">Home</button>
          <button className=" text-3xl hover:text-5xl">Projects</button>
        </div>

        <h1 className=" diff-text text-8xl ">Lumen</h1>
        <div className="flex gap-10 text-xl  p-2 px-10  black-bars">

          <button className="text-3xl hover:text-5xl">Tags</button>
          <button className="text-3xl hover:text-5xl">About Us</button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
