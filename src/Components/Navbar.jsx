import { Menu } from "lucide-react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <Menu />
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/" className="font-semibold">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className="font-semibold">
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/wishlist" className="font-semibold">
                Wishlist
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="flex items-center gap-0.5">
          <img className="w-12" src={'favIcon.png'} alt="" srcset="" />
          <h1 className="text-2xl font-bold">HomeDecor</h1>
        </Link>
      </div>

      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1 hidden lg:flex">
          <li>
            <NavLink to="/" className="font-semibold">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className="font-semibold">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/wishlist" className="font-semibold">
              Wishlist
            </NavLink>
          </li>
        </ul>

        <NavLink to="/products" className="btn">
          Visit Shop
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
