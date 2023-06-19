import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <NavLink to="/">Summary</NavLink>
      <span>{" || "}</span>
      <NavLink to="/donetodo">Done to-do</NavLink>
      <span>{" || "}</span>
      <NavLink to="/opentodo">Open to-do</NavLink>
    </>
  );
};
export default Navbar;
