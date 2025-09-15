import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Calendar, HelpCircle, Building2, Presentation, Code, Home, Menu, X } from 'lucide-react'
import { motion } from "framer-motion";

export default function NavBar() {
    const location = useLocation()
    const currentPath = location.pathname
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const isActive = (path) => currentPath === path

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <nav className="fixed top-0 left-0 right-0 bg-black/50 backdrop-blur-sm border-b border-gray-700 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link to="Purdue-USB-Research-Resources-Website/" className="flex items-center space-x-3" onClick={closeMenu}>
                        <img
                            src="./Purdue%20USB%20Research%20Resources.png"
                            alt="USB Research Resources Icon"
                            className="w-10 h-10 object-contain"
                            draggable={false}
                        />
                        <span className="font-bold text-white select-none text-lg"> USB Research Resources</span>
                    </Link>

                    <div className="hidden md:flex space-x-1">
                        <Link to="Purdue-USB-Research-Resources-Website/" className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition ${isActive('/') ? 'bg-green-600 text-white shadow-lg' : 'bg-transparent text-gray-300 hover:bg-green-600/20 hover:text-green-400'}`}>
                            <Home className="w-4 h-4" />
                            <span>Home</span>
                        </Link>
                        <Link to="Purdue-USB-Research-Resources-Website/faq" className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition ${isActive('/faq') ? 'bg-green-600 text-white shadow-lg' : 'bg-transparent text-gray-300 hover:bg-green-600/20 hover:text-green-400'}`}>
                            <HelpCircle className="w-4 h-4" />
                            <span>FAQ</span>
                        </Link>
                        <Link to="Purdue-USB-Research-Resources-Website/organizations-and-programs" className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition ${isActive('/organizations-and-programs') ? 'bg-green-600 text-white shadow-lg' : 'bg-transparent text-gray-300 hover:bg-green-600/20 hover:text-green-400'}`}>
                            <Building2 className="w-4 h-4" />
                            <span>Programs</span>
                        </Link>
                        <Link to="Purdue-USB-Research-Resources-Website/cs-specific-research" className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition ${isActive('/cs-specific-research') ? 'bg-green-600 text-white shadow-lg' : 'bg-transparent text-gray-300 hover:bg-green-600/20 hover:text-green-400'}`}>
                            <Code className="w-4 h-4" />
                            <span>CS Research</span>
                        </Link>
                        <Link to="Purdue-USB-Research-Resources-Website/presenting-your-research" className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition ${isActive('/presenting-your-research') ? 'bg-green-600 text-white shadow-lg' : 'bg-transparent text-gray-300 hover:bg-green-600/20 hover:text-green-400'}`}>
                            <Presentation className="w-4 h-4" />
                            <span>Presenting</span>
                        </Link>
                        <Link to="Purdue-USB-Research-Resources-Website/calendar" className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition ${isActive('/calendar') ? 'bg-green-600 text-white shadow-lg' : 'bg-transparent text-gray-300 hover:bg-green-600/20 hover:text-green-400'}`}>
                            <Calendar className="w-4 h-4" />
                            <span>Calendar</span>
                        </Link>
                    </div>

                    <button
                        onClick={toggleMenu}
                        className="md:hidden flex items-center p-2 rounded-lg text-gray-300 hover:bg-green-600/20 hover:text-green-400"
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
                        <div className="flex flex-col space-y-2 pt-4">
                            <Link to="Purdue-USB-Research-Resources-Website/" className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition ${isActive('/') ? 'bg-green-600 text-white shadow-lg' : 'bg-transparent text-gray-300 hover:bg-green-600/20 hover:text-green-400'}`} onClick={closeMenu}>
                                <Home className="w-4 h-4" />
                                <span>Home</span>
                            </Link>
                            <Link to="Purdue-USB-Research-Resources-Website/faq" className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition ${isActive('/faq') ? 'bg-green-600 text-white shadow-lg' : 'bg-transparent text-gray-300 hover:bg-green-600/20 hover:text-green-400'}`} onClick={closeMenu}>
                                <HelpCircle className="w-4 h-4" />
                                <span>FAQ</span>
                            </Link>
                            <Link to="Purdue-USB-Research-Resources-Website/organizations-and-programs" className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition ${isActive('/organizations-and-programs') ? 'bg-green-600 text-white shadow-lg' : 'bg-transparent text-gray-300 hover:bg-green-600/20 hover:text-green-400'}`} onClick={closeMenu}>
                                <Building2 className="w-4 h-4" />
                                <span>Programs</span>
                            </Link>
                            <Link to="Purdue-USB-Research-Resources-Website/cs-specific-research" className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition ${isActive('/cs-specific-research') ? 'bg-green-600 text-white shadow-lg' : 'bg-transparent text-gray-300 hover:bg-green-600/20 hover:text-green-400'}`} onClick={closeMenu}>
                                <Code className="w-4 h-4" />
                                <span>CS Research</span>
                            </Link>
                            <Link to="Purdue-USB-Research-Resources-Website/presenting-your-research" className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition ${isActive('/presenting-your-research') ? 'bg-green-600 text-white shadow-lg' : 'bg-transparent text-gray-300 hover:bg-green-600/20 hover:text-green-400'}`} onClick={closeMenu}>
                                <Presentation className="w-4 h-4" />
                                <span>Presenting</span>
                            </Link>
                            <Link to="Purdue-USB-Research-Resources-Website/calendar" className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition ${isActive('/calendar') ? 'bg-green-600 text-white shadow-lg' : 'bg-transparent text-gray-300 hover:bg-green-600/20 hover:text-green-400'}`} onClick={closeMenu}>
                                <Calendar className="w-4 h-4" />
                                <span>Calendar</span>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
