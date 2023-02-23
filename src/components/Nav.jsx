import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useSpring, useTransition, animated } from "@react-spring/web";
import { Link } from "react-router-dom";
import { About } from "../Pages/About";
import { Home } from "../Pages/Home";
import { Product } from "../Pages/Product";
export const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  //   const handleClick = () => {
  //     setShowMenu(!showMenu);
  //   };
  const menutransitions = useSpring({
    transform: showMenu ? "translate3d( 0%, 0, 0)" : "translate3d(100%, 0 ,0)",
  });

  const btntransitions = useSpring({
    transform: !showMenu
      ? "translate3d( 0%, -100%, 0)"
      : "translate3d(0%, 0 ,0)",
    delay: 300,
  });

  const litransitions = useSpring({
    opacity: showMenu ? 1 : 0,
    transform: showMenu ? `scale(1)` : `scale(-1)`,
    delay: 100,
  });

  return (
    <nav>
      <span className="text-xl">
        <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
      </span>
      <animated.div
        style={menutransitions}
        className="fixed bg-slate-600 top-0 right-0 w-2/6 h-full z-50 shadow-2xl flex"
      >
        {showMenu && (
          <>
            <animated.span
              style={btntransitions}
              className="text-4xl text-white p-5 float-left"
            >
              <FontAwesomeIcon
                icon={faXmark}
                onClick={() => setShowMenu(false)}
              />
            </animated.span>
            <ul className="flex flex-col h-2/4 items-center self-center justify-around m-3 w-3/4 text-xl">
              <animated.li
                style={litransitions}
                className="w-2/6  min-w-fit text-center font-bold text-white p-3 transitione-all hover:bg-red-400"
              >
                <Link
                  to="/Home"
                  onClick={() => {
                    setShowMenu(!setShowMenu);
                  }}
                  element={<Home />}
                >
                  Home
                </Link>
              </animated.li>
              <animated.li
                style={litransitions}
                className="w-2/6  min-w-fit text-center font-bold text-white p-3 transitione-all hover:bg-red-400"
              >
                <Link
                  to="/products"
                  element={<Product />}
                  onClick={() => {
                    setShowMenu(!setShowMenu);
                  }}
                >
                  Products
                </Link>
              </animated.li>
              <animated.li
                style={litransitions}
                className="w-2/6  min-w-fit text-center font-bold text-white p-3 transitione-all hover:bg-red-400"
              >
                <Link
                  to="/about"
                  element={<About />}
                  onClick={() => {
                    setShowMenu(!setShowMenu);
                  }}
                >
                  About
                </Link>
              </animated.li>
            </ul>
          </>
        )}
      </animated.div>
    </nav>
  );
};
