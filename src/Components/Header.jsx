import { useEffect, useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {IoIosArrowDown} from 'react-icons/io'

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=> {
        const onScroll = () => {
            if(window.scrollY > 1){
                setScrolled(true);
            }
            else
                setScrolled(false)            
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll)
    },[])

    return(
        <div className={`z-10 flex  w-full mx-auto h-16 items-center justify-between text-primary pt-2 px-10 md:px-24 sticky top-0 bg-white ${scrolled && 'drop-shadow-sm'}`}>
                <ul className='flex  justify-between w-4/12'>
                    <img src='https://enterpriseleague.com/public/img/logo-header.svg' alt="logo" />
                    <li className='hidden  md:flex items-center px-3 hover:cursor-pointer hover:opacity-90'>Product <IoIosArrowDown className='mt-1 ml-1'/></li>
                    <li className='hidden md:flex items-center px-3 hover:cursor-pointer hover:opacity-90'>Resources <IoIosArrowDown className='mt-1 ml-1'/></li>
                    <li className='hidden md:flex items-center px-3 hover:cursor-pointer hover:opacity-90'>Company <IoIosArrowDown className='mt-1 ml-1'/></li>
                </ul>
                <div className='hidden md:flex w-40 justify-between items-center'>
                    <span className='hover:text-accent hover:cursor-pointer'>Log in</span>
                    <button className='bg-accent text-white px-3 py-2 rounded-md hover:bg-opacity-80' >Get started</button>
                </div>


            <GiHamburgerMenu size={'2rem'} className='md:hidden' onClick={() => setMenuOpen(!menuOpen)}/>
            {
                menuOpen && <div>MENU</div>
            }
        </div>

    )
}
export default Header;