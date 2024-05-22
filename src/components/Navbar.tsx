import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="ftrNav">
      <div className="ftrNavTab">
        <NavLink to={"/before"}>Before you write</NavLink>
        <NavLink to={"/lowercase"}>a–z</NavLink>
        <NavLink to={"/uppercase"}>A–Z</NavLink>
        <NavLink to={"/num"}>1–10</NavLink>
        <NavLink to={"/words"}>Oxford Wordlist Words</NavLink>
        <NavLink to={"/own"}>Your own Words</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
