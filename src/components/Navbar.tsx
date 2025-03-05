"use client";
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between items-center z-50 '>
            <Link href="#top">
                <Image src="/images/logo.jpg" alt="Logo" width={50} height={50} className='cursor-pointer mr-14' />
            </Link>
            <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3'>
                <li>
                    <Link href="#top">Home</Link>
                </li>
                <li>
                    <Link href="#about">About Me</Link>
                </li>
                <li>
                    <Link href="#work">My Work</Link>
                </li>
                <li>
                    <Link href="#services">Services</Link>
                </li>
                <li>
                    <Link href="#contact">My Contact</Link>
                </li>
            </ul>

            <div>
                <Link href="#contact" className='hidden lg:flex items-center gap-3 px-10 border border-gray-500 rounded-full ml-4'>Contact <Image src="/images/arrow.png" alt="arrow" width={20} height={20} /> </Link>

            </div>
        </nav>

    )
}