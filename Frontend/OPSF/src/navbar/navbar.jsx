import "./navbar.css";

function Navbar() {
  return (
    <>
      <nav className="fixed top-0 navbar flex justify-center items-center gap-10 sour-gummy-font  pt-2 fixed">
        <div className="flex gap-10 bg-black p-2 px-10 black-bars">
          <button className="">Home</button>
          <button className="">Projects</button>
        </div>

        <h1 className="text-6xl">Lumen</h1>
        <div className="flex gap-10 bg-black p-2 px-10  black-bars">

          <button className="">T a g s</button>
          <button className="">About Us</button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
