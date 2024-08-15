import React from 'react'

const Footer = () => {
    return (
        <div className='bg-red-300 flex items-center justify-around py-2'>
            <div className="logo text-xl"><span className='font-bold text-gray-800'>&lt;save</span><span className='text-white font-semibold'>word&gt;</span></div>
            <div className="text flex items-center"> Created with <span><lord-icon
                src="https://cdn.lordicon.com/zjhryiyb.json"
                trigger="hover"
                state="hover-heartbeat-alt"
                colors="primary:#c71f16,secondary:#ebe6ef,tertiary:#ffc738,quaternary:#f9c9c0,quinary:#c71f16">
            </lord-icon></span>By Samir Nepal</div>
        </div>
    )
}

export default Footer
