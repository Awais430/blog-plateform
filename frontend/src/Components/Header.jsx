import React from "react";
import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
const Header = () => {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center font-semibold whitespace-nowrap text-sm sm:text-xl dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Hamza's
        </span>
        Blog
      </Link>
      <form>
        <TextInput
          type="text"
          rightIcon={AiOutlineSearch}
          placeholder="Serach..."
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
        <Link to="/sign_in">
          <Button className="" gradientDuoTone="purpleToBlue" color="gray" pill>
            Sign in
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path==="/"} as={'div'}>
          <Link to="/">home</Link>
        </Navbar.Link>
        <Navbar.Link  active={path==="/project"} as={'div'}>
          <Link to="/project">project</Link>
        </Navbar.Link>
        <Navbar.Link  active={path==="/about"} as={'div'}>
          <Link to="/about">about</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
