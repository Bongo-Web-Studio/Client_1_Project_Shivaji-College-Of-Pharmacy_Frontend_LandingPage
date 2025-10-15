import React, { useState } from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

interface SubRoute {
  label: string;
  path: string;
}

export interface RouteItem {
  label: string;
  path?: string;
  submenu?: SubRoute[];
}

interface WebsiteNavbarProps {
  routes?: RouteItem[];
}

// === Default Routes ===
const WebsiteRoutes: RouteItem[] = [
  {
    label: "About",
    submenu: [
      { label: "About Institute", path: "/about/about-institute" },
      { label: "Principal Message", path: "/about/principal-message" },
      { label: "Program Educational Objectives", path: "/about/program-educational-objectives" },
      { label: "Program Outcome", path: "/about/program-outcome" },
      { label: "Vision, Mission & Values", path: "/about/vision-mission-outcome" },
    ],
  },
  {
    label: "Academic",
    submenu: [
      { path: "/academic/syllabus", label: "Programme" },
      { path: "/academic/admission", label: "Admission" },
      { path: "/academic/academic-planing-monitoring", label: "Academic Planning & Monitoring" },
      { path: "/academic/academic-objective", label: "Academic Objective" },
    ],
  },
  {
    label: "Facilities",
    submenu: [
      { path: "/facilities/class-rooms", label: "Class Rooms" },
      { path: "/facilities/laboratories", label: "Laboratories" },
      { path: "/facilities/library", label: "Library" },
      { path: "/facilities/computer-labs", label: "Computer Labs" },
      { path: "/facilities/hostel", label: "Hostel" },
      { path: "/facilities/sports", label: "Sports" },
    ],
  },
  {
    label: "StudentCorner",
    submenu: [
      { path: "/student-corner/committees", label: "Committees" },
      { path: "/student-corner/student-council", label: "Student Council" },
      { path: "/student-corner/scholarship", label: "Scholarship" },
      { path: "/student-corner/mentor-mentee-information", label: "Mentor Mentee Info" },
      { path: "/student-corner/alumni", label: "Alumni" },
      { path: "/student-corner/student-participation-Achievement", label: "Student Participation & Achievement" },
      { path: "/student-corner/discipline", label: "Discipline" },
    ],
  },
];

const NavbarSection: React.FC<WebsiteNavbarProps> = ({ routes }) => {
  const mergedRoutes = routes ?? WebsiteRoutes;
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  const location = useLocation();

  const isActive = (path?: string) => (path ? location.pathname.startsWith(path) : false);

  const toggleMenu = () => setIsOpen((s) => !s);
  const toggleSubmenu = (index: number) =>
    setActiveSubmenu((cur) => (cur === index ? null : index));

  return (
    <nav className="bg-white shadow-md w-full sticky top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className="text-xl font-bold text-[#0D2048] flex items-center justify-center"
            >
              Shivaji Pharmacy
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {mergedRoutes.map((route, idx) => (
              <div key={idx} className="relative group">
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-black hover:text-[#0D2048]">
                  {route.label} <FaChevronDown className="text-xs" />
                </button>

                {route.submenu && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all">
                    {route.submenu.map((sub, subIdx) => (
                      <Link
                        key={subIdx}
                        to={sub.path}
                        className={`block px-4 py-2 text-sm ${
                          isActive(sub.path)
                            ? "bg-[#0D2048] text-white"
                            : "text-black hover:bg-gray-100"
                        }`}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link
              to="/gallery"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100"
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100"
            >
              Contact
            </Link>
            <Link
              to="/training"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100"
            >
              Training
            </Link>
            <div className="flex items-center border rounded-md overflow-hidden">
              <input
                type="text"
                placeholder="Search"
                className="px-2 py-1 w-24 sm:w-32 focus:outline-none text-sm"
              />
              <button className="px-2 py-1 bg-[#0D2048] text-white">
                <FaSearch />
              </button>
            </div>
            <Link
              to="/login"
              className="px-3 py-2 bg-[#0D2048] text-white rounded-md text-sm font-medium"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
              aria-label="Open menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-16 left-0 w-64 bg-gray-900 h-[calc(100vh-4rem)] overflow-y-auto transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none mb-6"
            aria-label="Close menu"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {mergedRoutes.map((route, index) => (
            <div key={index} className="mb-2">
              {route.submenu ? (
                <>
                  <button
                    onClick={() => toggleSubmenu(index)}
                    className="w-full text-left px-3 py-2 text-white hover:bg-gray-700 rounded-md flex justify-between items-center"
                  >
                    {route.label}
                    <FaChevronDown
                      className={`transition-transform ${activeSubmenu === index ? "rotate-180" : ""}`}
                    />
                  </button>
                  {activeSubmenu === index && (
                    <div className="ml-4 mt-1">
                      {route.submenu.map((sub, subIdx) => (
                        <Link
                          key={subIdx}
                          to={sub.path}
                          onClick={() => setIsOpen(false)}
                          className={`block px-3 py-2 rounded-md text-sm text-white hover:bg-gray-700 ${
                            isActive(sub.path) ? "bg-gray-700 text-yellow-400" : ""
                          }`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={route.path ?? "#"}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-sm text-white hover:bg-gray-700"
                >
                  {route.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavbarSection;
