import { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import logo from "../assets/logo.svg";

const NavBar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex items-center py-5 fixed top-0 z-20">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <img src={logo} alt="logo" className="w-15 h-9 object-contain" />
          <p className="uppercase text-[18px] font-bold cursor-pointer flex">Excellence since 2001</p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.value ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer uppercase`}
              onClick={() => setActive(link.value)}>
              <a href={`#${link.id}`}>{link.value}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
