import { Link } from "react-router-dom";

export default function Navbar() {

  function activateNav(e) {
    document.querySelector(".active-navitem")?.classList.remove("active-navitem");
    e.target.classList.toggle("active-navitem");
  }
    

  return (
    <header className="w-[100vw] h-[8vh] bg-blue-400 flex justify-around items-center">
        <h2 className="w-1/6 text-center text-indigo-800 text-2xl font-bold">RecipeX</h2>
        <nav className="w-2/6 flex justify-around items-center">
            <li className="navitem"><Link to="/" onClick={activateNav}>Home</Link></li>
            <li className="navitem"><Link to="/all-recipes" onClick={activateNav}>Browse</Link></li>
            <li className="navitem"><Link to="#" onClick={activateNav}>Favourites</Link></li>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" style={{fill: "rgb(55, 48, 163)"}}><path d="M12 2C6.579 2 2 6.579 2 12s4.579 10 10 10 10-4.579 10-10S17.421 2 12 2zm0 5c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zm-5.106 9.772c.897-1.32 2.393-2.2 4.106-2.2h2c1.714 0 3.209.88 4.106 2.2C15.828 18.14 14.015 19 12 19s-3.828-.86-5.106-2.228z"></path></svg>
        </nav>
    </header>
  )
}
