'use client'
import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-black">
          <div className='flex items-center gap-2'>
            <div className='w-[70px]'>
              <img src="logo.png" alt="Logo" />
            </div>
            At-<span className="text-black font-extrabold">Talim</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-600 font-medium">
          <li className="cursor-pointer hover:text-black">Home</li>
          <li className="cursor-pointer hover:text-black">About</li>
          <li className="cursor-pointer hover:text-black">Destination</li>
          <li className="cursor-pointer hover:text-black">Search</li>
        </ul>

        {/* Login Button */}
        <div className="hidden md:flex">
          <button className="flex items-center gap-2 px-3 py-1 border-2 border-[#f4f3db] bg-[#F9F5BC] text-black rounded-md font-semibold hover:bg-[#f5ef9a] transition-all">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-gray-600 font-medium bg-white/80 backdrop-blur-sm">
          <div className="flex flex-col gap-2">
            <span className="hover:text-black">Home</span>
            <span className="hover:text-black">About</span>
            <span className="hover:text-black">Destination</span>
            <span className="hover:text-black">Search</span>
            <button className="flex items-center gap-2 px-4 py-1 border-2 border-[#f4f3db] bg-[#F9F5BC] text-black rounded-md font-semibold w-max">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
