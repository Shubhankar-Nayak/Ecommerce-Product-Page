import React, { useState, useEffect, useRef } from 'react'
import cart from '../assets/images/icon-cart.svg'
import avatar from '../assets/images/image-avatar.png'
import menu from '../assets/images/icon-menu.svg'
import close from '../assets/images/icon-close.svg'
import Cart from './Cart';

const NavBar = ({count, setCount}) => {
    const navItems = ["Collections", "Men", "Women", "About", "Contact"];
    const [toggle, setToggle] = useState(false);
    const [sideNav, setSideNav] = useState(false);
    const cartRef = useRef(null);

    const cartToggle = () => {
      setToggle((prev) => !prev);
    };

    const sideNavOpen = () => {
      setSideNav((true));
    };

    const sideNavClose = () => {
      setSideNav((false));
    };

    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setToggle(false);
      }
    };
  
    useEffect(() => {
      if (toggle) {
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [toggle]);
  
    return (
      <div className="w-full flex justify-center">
        <div className="w-full bg-white fixed laptop:max-w-[1110px] h-[8vh] tablet:px-5 laptop:border-b-[1px] flex justify-between items-center">
          {/* Left Section */}
          <div className="h-full flex items-center">
            <img className="mx-5 laptop:hidden" src={menu} alt="Menu" onClick={sideNavOpen} />
            <h1 className="text-[30px] font-bold">sneakers</h1>
            <div className="hidden laptop:flex items-center gap-8 h-full ms-8 text-DarkGrayishBlue font-medium">
              {navItems.map((item) => (
                <div
                  key={item}
                  className="h-full flex items-center border-b-4 border-white hover:border-Orange hover:text-VeryDarkBlue cursor-pointer duration-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
  
          {/* Right Section */}
          <div className="flex items-center gap-8">
            <div className='relative' ref={cartRef}>
              <img className="cursor-pointer" src={cart} alt="Cart" onClick={cartToggle} />
              {count > 0 ? (<div className='absolute top-[-8px] right-[-5px] bg-Orange px-1 text-[10px] text-white font-medium rounded-full'>{count}</div>) : (<></>)}
              {toggle && <Cart count={count} setCount={setCount} /> }
            </div>
            <img
              className="w-[30px] tablet:w-[40px] hover:border-2 active:border-2 border-Orange rounded-full cursor-pointer"
              src={avatar}
              alt="Avatar"
            />
          </div>
        </div>

        {sideNav && (
          <>
            <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10'></div>
            
            <div className='w-[70%] h-screen px-5 pt-5 bg-white fixed left-0 z-40'>
              <img className='mb-10' src={close} alt="Close" />
              {navItems.map((item) => (
                <div className='text-[20px] my-5 font-semibold' key={item}>{item}</div>
              ))}
            </div>
          </>
        )}
      </div>
    );
  };
  
export default NavBar;
  