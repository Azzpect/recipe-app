import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";


export default function Hamburger() {
    let hamburger = useRef(null);
    let hamburgerMenu = useRef(null);
    let line1 = useRef(null);
    let line2 = useRef(null);
    let line3 = useRef(null);
    let [hamburgerOn, setHamburgerOn] = useState(false);
    function hamburgerOnAnimation() {
      line2.current.style.display = "none";
      line1.current.style.transform = "translateY(7px) rotateZ(45deg)";
      line3.current.style.transform = "translateY(-7px) rotateZ(-45deg)";
      hamburgerMenu.current.style.top = "9vh";
      setHamburgerOn(true);
    }
    function hamburgerOffAnimation() {
      line2.current.style.display = "block";
      line1.current.style.transform = "rotateZ(180deg)";
      line3.current.style.transform = "rotateZ(-180deg)";
      hamburgerMenu.current.style.top = "-100%";
      setHamburgerOn(false);
    }
    useEffect(() => {
      if(!hamburgerOn) {
        hamburger.current.addEventListener("click", () => {
          hamburgerOnAnimation();
        })
      }
      else {
        hamburger.current.addEventListener("click", () => {
          hamburgerOffAnimation();
        })
      }
    })

    function activateNav(e) {
      document.querySelector(".active-hamburger-navitem")?.classList.remove("active-hamburger-navitem");
      e.target.classList.toggle("active-hamburger-navitem");
    }

  return (
    <>
    <div ref={hamburger} className="flex flex-col w-[40%] h-[80%] justify-around">
        <div ref={line1} className="hamburger-line"></div>
        <div ref={line2} className="hamburger-line"></div>
        <div ref={line3} className="hamburger-line"></div>
    </div>
    <div ref={hamburgerMenu} className="bg-indigo-800 w-28 h-36 absolute right-2 -top-[100%] flex flex-col items-center justify-around rounded-lg transition-all duration-300 ease-linear">
      <Link to="/" className="hamburger-navitem active-hamburger-navitem" onClick={activateNav}><li>Home</li></Link>
      <Link to="/all-recipes" className="hamburger-navitem" onClick={activateNav}><li>Browse</li></Link>
      <Link to="#" className="hamburger-navitem" onClick={activateNav}><li>Favourites</li></Link>
    </div>
    </>
  )
}
