import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-red-300 w-[100vw] flex justify-center px-3 py-3'>
            <div className='flex justify-between w-[80%]'>
                <div className="logo text-xl"><span className='font-bold text-gray-800'>&lt;save</span><span className='text-white font-semibold'>word&gt;</span></div>
                <ul className='flex gap-4'>
                    <li className='hover:underline'>
                        <a href="">Home</a>
                    </li>
                    <li className='hover:underline'>
                        <a href="">About</a>
                    </li>
                    <li className='hover:underline'>
                        <a href="">contact</a>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar
