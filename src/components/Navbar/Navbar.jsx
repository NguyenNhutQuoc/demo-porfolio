import { useState } from 'react'
import logo from '../../images/logo.svg'
import Container from '../Container'

const Navbar = () => {
    const [isOpen, SetIsOpen] = useState(false)
    const toggleOpen = () => {
        SetIsOpen(!isOpen)
        console.log('demo')
    }
    return (
        <>
            <div
                className='
                    w-full
                    z-10
                    top-0
                    left-0
                    bg-white
                    shadow-md
                '
            >
                <div className='
                    py-[25px]
                    border-b-1
                '>
                    <Container>
                        <div className='
                            flex
                            flex-row
                            justify-between
                            items-center
                            gap-3
                            md:gap-0
                        '>
                            {/* Logo */}
                            <div className='flex-grow'>
                                <img src={logo} alt='Logo' className='w-[110px] h-[30px]' />
                            </div>
                            {/* Menu */}
                            <div className='hidden lg:block flex-grow'>
                                <div className='flex-grow flex flex-row text-gray-700 font-semibold text-[18px] justify-center items-center'>
                                    <div className='flex-grow hover:cursor-pointer hover:text-rose-500 transition'>Introduction</div>
                                    <div className='flex-grow hover:cursor-pointer hover:text-rose-500 transition'>Projects</div>
                                    <div className='flex-grow hover:cursor-pointer hover:text-rose-500 transition'>Position</div>
                                    <div className='flex-grow hover:cursor-pointer hover:text-rose-500 transition'>Companies Working</div>
                                </div>
                            </div>
                            {/* Button */}
                            <div className='hidden lg:block'>
                                <button onClick={() => SetIsOpen(!isOpen)} className='
                                    bg-rose-500
                                    text-white  
                                    px-5
                                    py-4
                                    rounded-md
                                    hover:bg-rose-600
                                    transition
                                '>
                                    Contact Me
                                </button>
                            </div>
                            {/* List item when device is mobile, tablet */}
                            <div className='block lg:hidden'>
                                <button onClick={toggleOpen} className='
                                    bg-rose-500
                                    text-white
                                    px-5
                                    py-4
                                    rounded-md
                                    hover:bg-rose-600
                                    transition
                                '>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                    </svg>
                                </button>
                            </div>
                            {isOpen && (
                                <div className='
                                    absolute
                                    rounded-xl
                                    shadow-md   
                                    bg-white
                                    overflow-hidden
                                    right-[23px]
                                    top-[100px]
                                    text-sm
                                    w-[200px]
                                    flex
                                    flex-col
                                    justify-start
                                    items-start
                                '>
                                    <div className='
                                        w-full
                                        py-4
                                        px-3
                                        bg-gray-100
                                        text-gray-700
                                        font-semibold
                                        text-[15px]
                                        border-b-[1px]
                                        hover:bg-gray-50
                                        hover:cursor-pointer
                                        transition
                                        '
                                    >
                                        Introduction
                                    </div>
                                    <div className='
                                        w-full
                                        py-4
                                        px-3
                                        bg-gray-100
                                        text-gray-700
                                        font-semibold
                                        text-[15px]
                                        border-b-[1px]
                                        hover:bg-gray-50
                                        hover:cursor-pointer
                                        transition
                                        '
                                    >
                                        Projects
                                    </div>
                                    <div className='
                                        w-full
                                        py-4
                                        px-3
                                        bg-gray-100
                                        text-gray-700
                                        font-semibold
                                        text-[15px]
                                        border-b-[1px]
                                        hover:bg-gray-50
                                        hover:cursor-pointer
                                        transition
                                        '
                                    >
                                        Positions
                                    </div>
                                    <div className='
                                        w-full
                                        py-4
                                        px-3
                                        bg-gray-100
                                        text-gray-700
                                        font-semibold
                                        text-[15px]
                                        border-b-[1px]
                                        hover:bg-gray-50
                                        hover:cursor-pointer
                                        transition
                                        '
                                    >
                                        Companies Working
                                    </div>
                                </div>
                            )}
                        </div>
                    </Container>
                </div>
            </div>
        </>
    )
}
export default Navbar