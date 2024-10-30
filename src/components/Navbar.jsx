import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { Shopcontext } from '../context/ShopContext'

function Navbar() {
const [visible, setVisible] = useState(false)
const {setShowSearch, getCartCount, navigate} = useContext(Shopcontext)
  return (
    <div className='flex items-center justify-between py-5 font-medium sticky top-2 backdrop-blur-md z-50  rounded-md shadow-sm px-2  '>
        <Link to='/'><img src={assets.logo} alt="" className='w-36'/></Link>
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700 '>
            <NavLink className='flex flex-col items-center gap-1 ' to='/' >
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink className='flex flex-col items-center gap-1 ' to='/collection' >
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden '/>
            </NavLink>
            <NavLink className='flex flex-col items-center gap-1 ' to='/about' >
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink className='flex flex-col items-center gap-1 ' to='/contact' >
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>

        </ul>
        <div className="flex items-center gap-6 ">
            <img src={assets.search_icon} onClick={()=>setShowSearch(true)} className='w-5 cursor-pointer ' alt="" />
            <div className='group relative '>
                <img src={assets.profile_icon}  className='w-5 cursor-pointer' alt="" />
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5  backdrop-blur-lg bg-slate-100 text-gray-500 rounded'>
                        <p onClick={()=>navigate('/login')} className='cursor-pointer hover:text-black'>My Profile</p>
                        <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                        <p onClick={()=>navigate('/')} className='cursor-pointer hover:text-black'>Logout</p>
                    </div>
                </div>
            </div>
            <Link to='/cart' className='relative'>
            <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
            <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
            </Link>
            <img src={assets.menu_icon} onClick={()=>setVisible(true)} className='w-5 cursor-pointer sm:hidden' alt="" />
        </div>
        <div className={`absolute top-0 h-[100vh] backdrop-blur-3xl bg-slate-100 right-0 bottom-0 overflow-hidden  transition-all ${visible? 'w-full' :'w-0'} `}>
            <div className='flex flex-col text-gray-600'>
                <div className='flex items-center gap-4 p-3 cursor-pointer'onClick={()=>setVisible(false)}>
                    <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
                    <p >BACK</p>
                </div>
                <NavLink className="py-2 pl-6 border" onClick={()=>setVisible(false)} to="/">HOME</NavLink>
                <NavLink className="py-2 pl-6 border" onClick={()=>setVisible(false)} to="/collection">COLLLECTION</NavLink>
                <NavLink className="py-2 pl-6 border" onClick={()=>setVisible(false)} to="/about">ABOUT</NavLink>
                <NavLink className="py-2 pl-6 border" onClick={()=>setVisible(false)} to="/contact">CONTACT</NavLink>

            </div>
        </div>
    </div>
  )
}

export default Navbar