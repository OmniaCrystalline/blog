/** @format */
import React from "react";
import ThemeToggle from "./ThemeToggle";
import NavLinks from "./NavLinks";
import BurgerMenu from "./BurgerMenu";

const Navigation = ({theme}) => {
  return (
    <nav className='flex gap-5 border-b-2 border-slate-500 px-5 py-5 place-items-center'>
      <span className='grid place-items-center'>Navigation</span>
      <ThemeToggle theme={theme} />
      <NavLinks />
      <BurgerMenu theme={theme} />
    </nav>
  );
};

export default Navigation;
