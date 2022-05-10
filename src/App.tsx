import React, { MutableRefObject, Ref, useEffect } from "react";
import { useRef } from "react";
import { Outlet, Link } from "react-router-dom";

const App: React.FC = () => {
  const button1 = useRef<HTMLLIElement | null>(null)
  const button2 = useRef<HTMLAnchorElement | null>(null)
  const button3 = useRef<HTMLAnchorElement | null>(null)

  useEffect(() => {
    button1.current?.focus()
  }, [button1])
  

  return (
    <div className="App flex flex-col items-center w-full flex-grow-1">
      <nav className="nav flex flex-wrap items-end justify-between px-4 w-full navbar-height border-b-4">
        <input className="menu-btn hidden" type="checkbox" id="menu-btn"/>
          <label className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none invert" htmlFor="menu-btn">
            <span className="navicon flex items-center relative"></span>
          </label>
    
          <ul className="menu md:border-none flex justify-end list-reset m-0 w-full md:w-auto mb-4">

            <li className="relative group-hover:block">
              <Link className="menu-item block md:inline-block px-4 hover-navbar pt-3 no-underline text-grey-darkest hover:text-grey-darker font-semibold uppercase" to="/">Home</Link>
              <div className="h-1"></div>
            </li>

            <li className="md:border-none">
              <Link className="block md:inline-block px-4 hover-navbar pt-3 no-underline text-grey-darkest hover:text-grey-darker font-semibold uppercase" to="/projects">Experience/Projects</Link>
              <div className="h-1"></div>
            </li>

            <div className="relative group">
              <button className="menu-item block md:inline-block px-4 pt-3 no-underline text-grey-darkest hover:text-grey-darker font-semibold uppercase">
                <span>GOOFS</span>
              </button>
            <div className="relative md:absolute z-10 hidden bg-color_primary border group-hover:block">
                <div className="px-2 pt-2 pb-4 bg-white bg-gray-200 shadow-lg">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
                  <p className="text-left md:text-center pl-2 md:pl-0">
                    <Link className="menu-item block md:inline-block hover-navbar no-underline text-grey-darkest hover:text-grey-darker font-semibold uppercase mb-1 hover:text-accent transition-all" to="/audio">Audio</Link> 
                    <Link className="menu-item block md:inline-block hover-navbar no-underline text-grey-darkest hover:text-grey-darker font-semibold uppercase mb-1 hover:text-accent transition-all" to="/threejs">Three</Link> 
                    </p>
                  </div>
                </div>
              </div>
            </div> 

          </ul>


          
      </nav>
      <Outlet/>
    </div>
  )
}

export default App
