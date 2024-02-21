import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

import logo from "../assets/Mask Group.png";
import { setSearch } from "../redux/slices/SearchSlice";
import { useDispatch } from "react-redux";
export default function App() {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { Label: "Home", link: "/" },
    { Label: "about", link: "/about" },
    { Label: "contact", link: "/contact" },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <img src={logo} alt="" width="20" />
          <p className="ml-2 font-bold ">FoodApp</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-6 sm:flex " justify="center">
        <NavbarItem>
          <Link className="text-black" href="/">
            Home
          </Link>
        </NavbarItem>
        <Link className="text-black" href="/about">
          About
        </Link>
        <NavbarItem>
          <Link className="text-black" href="/contact">
            Contact us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="ml-20" justify="end">
        <input
          type="text"
          placeholder="Enter your Food"
          className="w-full p-2 text-gray-900 placeholder-gray-400 rounded-lg outline-none lg:w-96 bg-slate-200"
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
        <div className=""></div>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-black hover:text-gray-500"
              href={item.link}
              size="lg"
            >
              {item.Label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
