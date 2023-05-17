import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';

function Header() {
    return (
        <div className='bg-transparent py-8 z-10 fixed w-full'>
            <div className="container mx-auto text-white flex justify-between items-center">
                <div className="logo w-1/12">
                    <img className='w-full' src="https://themebeyond.com/html/movflx/img/logo/logo.png"/>
                </div>
                <div className="nav-items w-4/12">
                    <ul className='flex justify-between font-bold'>
                        <li className='text-main-yellow'>HOME</li>
                        <li>MOVIE</li>
                        <li>TV SHOW</li>
                        <li>PRICING</li>
                        <li>BLOG</li>
                        <li>CONTACTS</li>
                    </ul>
                </div>

                <div className="items-center w-2/12 right-area flex justify-around text-center">
                    <div className='pr-4 border-r-2 h-3 flex items-center'>
                        <SearchIcon />
                    </div>
                    <div>
                        <LanguageIcon />
                    </div>
                    <div>
                        <button className='border-2 px-7 py-3 rounded-3xl border-main-yellow'>SIGN IN</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header