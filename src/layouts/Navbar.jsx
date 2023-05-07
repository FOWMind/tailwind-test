import { FiMenu } from 'react-icons/fi'
import { useState } from 'react'

import Logo from '@/assets/logo.svg'

export function Navbar() {
  const [menuOpened, setMenuOpened] = useState(false)

  const toggleMenu = () => setMenuOpened((x) => !x)

  return (
    <nav className="relative flex justify-between items-center px-10 py-4 mx-32 bg-[#121416] border-t-2 border-[#212325] rounded-[50px] text-[#6a6d6e] text-lg font-medium">
      <div>
        <a href="#" className="text-white text-2xl child:inline-block">
          <img src={Logo} alt="Logo" className="w-10 mr-3" />
          <h1 className="align-middle">Norch.AI</h1>
        </a>
      </div>

      <button
        onClick={toggleMenu}
        className="border-2 border-transparent p-2 xl:[display:none]"
      >
        <FiMenu className="text-white text-3xl" />
      </button>

      <div
        className={`max-w-sm absolute bottom-0 right-10 translate-y-full py-5 [&_a]:mb-2 [&_a]:block [&_a]:w-full bg-[#121416]
        
        <!-- Extra large -->
        xl:max-w-none xl:static xl:translate-y-0 xl:py-0 xl:[&_a]:mb-0 xl:[&_a]:inline-block xl:[&_a]:w-auto xl:bg-transparent ${
          menuOpened ? 'xl:flex' : '[display:none]'
        } xl:flex xl:justify-between xl:items-center`}
      >
        <ul className="[&_a]:px-14 xl:[&_a]:px-2 xl:flex xl:items-center  xl:child:mr-4 child:transition-colors child:duration-75 last:mr-0 child-hover:text-white">
          <li>
            <a href="#" className="text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Company</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>

        <div
          className="mt-4 w-full child:max-w-[90%] child:text-center child:mx-auto inline-block rounded-[50px] border-t-2 border-[#212325] child:rounded-[50px] child:transition-colors duration-75

          <!-- Extra large -->
          xl:mt-0 xl:w-auto
        "
        >
          <a href="#" className="px-3 py-2 bg-white text-black">
            Get Started
          </a>
          <a href="#" className="px-3 py-2 hover:text-white">
            Login
          </a>
        </div>
      </div>
    </nav>
  )
}
