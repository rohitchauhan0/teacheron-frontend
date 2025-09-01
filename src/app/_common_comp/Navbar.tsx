"use client";

import Link from "next/link";
import { useState } from "react";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";

const Dropdown = ({ title, items }: { title: string; items: string[] }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="hover:text-blue-600 focus:outline-none font-medium flex items-center space-x-2 cursor-pointer w-full md:w-auto"
      >
        <span>{title}</span>
        <FaAngleDown
          className={`transform transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`md:absolute md:top-full md:mt-2 w-full md:w-48 bg-white shadow-xl border rounded-md z-50
        transition-all duration-300
        ${open ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 md:translate-y-2 hidden md:block"}`}
      >
        {items.map((item, i) => (
          <Link
            key={i}
            href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
            className="block px-4 py-2 text-gray-700 hover:bg-blue-100 transition-all"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full py-2">
      <nav className="flex items-center justify-between px-6 py-4 bg-white sticky top-0 z-50 max-w-screen-xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center text-2xl font-bold text-[#ff4c60]"
        >
          <span className=" text-blue-600">t</span>eacher
          <span className="text-pink-600">On</span>
        </Link>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center gap-6 text-sm">
            <Dropdown
              title="Find Tutors"
              items={[
                "Request a tutor",
                "All Tutors",
                "Online Tutors",
                "Home Tutors",
              ]}
            />
            <Dropdown
              title="Find Tutor Jobs"
              items={[
                "Teaching Jobs",
                "Online Teaching",
                "Home Teaching",
                "Assignment Jobs",
              ]}
            />
            <a href="#" className="hover:text-blue-600">
              Assignment help
            </a>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="border border-gray-600 px-4 py-2 rounded-md text-sm hover:bg-gray-100 transition-all"
            >
              Login
            </Link>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md text-sm hover:bg-green-600 transition-all">
              Request a tutor
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t p-4 space-y-4">
          <Dropdown
            title="Find Tutors"
            items={[
              "Request a tutor",
              "All Tutors",
              "Online Tutors",
              "Home Tutors",
            ]}
          />
          <Dropdown
            title="Find Tutor Jobs"
            items={[
              "Teaching Jobs",
              "Online Teaching",
              "Home Teaching",
              "Assignment Jobs",
            ]}
          />
          <a href="#" className="block hover:text-blue-600">
            Assignment help
          </a>

          <div className="flex flex-col gap-3">
            <Link
              href="/login"
              className="border border-gray-600 px-4 py-2 rounded-md text-sm text-center hover:bg-gray-100 transition-all"
            >
              Login
            </Link>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md text-sm hover:bg-green-600 transition-all">
              Request a tutor
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
