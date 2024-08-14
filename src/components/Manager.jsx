import React from 'react'
import { useRef, useState, useEffect } from 'react'

const Manager = () => {
    const [form, setForm] = useState({ site: "", username: "", password: "" })
    // const [forms, setForms] = useState({})
    const [forms, setForms] = useState([])
    let toogle = false
    let ref = useRef()
    let passRef = useRef()

    useEffect(() => {
        let data = localStorage.getItem("forms")
        if (data) {
            setForms(JSON.parse(data))
        }
    }, [])


    const showPass = () => {
        toogle = !toogle;
        if (toogle === true) {
            ref.current.innerHTML = `<lord-icon
        src="https://cdn.lordicon.com/vfczflna.json"
        trigger="hover"
        state="hover-lashes"
        colors="primary:#4d2c19,secondary:#ee6d66"
        >
    </lord-icon>`
            passRef.current.type = "text"
        }
        else {
            ref.current.innerHTML = `<lord-icon
                            src="https://cdn.lordicon.com/vfczflna.json"
                            trigger="hover"
                            colors="primary:#4d2c19,secondary:#ee6d66"
                        >
                        </lord-icon>`
            passRef.current.type = "password"
        }
    }

    const savePassword = () => {
        setForms([...forms, form])
        localStorage.setItem("forms", JSON.stringify([...forms, form]))
        console.log([...forms, form]);

    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    return (
        <div className='w-[100vw] flex items-center py-7 flex-col gap-8'>
            <div className="absolute inset-0 -z-10 h-full w-full bg-red-50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <div className='flex flex-col w-[50%] gap-5 justify-center items-center'>
                <div className="heading flex flex-col justify-center items-center mb-2">
                    <div className='flex font-bold text-[30px] text-gray-600'><h1> &lt;saveword&gt;</h1><span className='text-red-500 font-extrabold'>#</span></div>
                    <p className='text-gray-500'>Your own password manager.</p>
                </div>

                <div className="url w-full">
                    <input value={form.site} type="text" onChange={handleChange} name="site" placeholder='Enter website URL' className='w-full border-[1px] border-black rounded-full px-6 py-2' />
                </div>
                <div className="unp flex gap-4 w-full">
                    <input type="text" value={form.username} name="username" onChange={handleChange} placeholder='Username' className='w-[70%] border-[1px] border-black rounded-full px-6 py-2' />
                    <div className="relative w-[30%]">
                        <input type="password" value={form.password} name="password" onChange={handleChange} placeholder='Password' ref={passRef} className='cpassword w-full border-[1px] border-black rounded-full px-6 py-2' />
                        <span className='paswords absolute right-3 top-1 cursor-pointer' ref={ref} onClick={showPass}><lord-icon
                            src="https://cdn.lordicon.com/vfczflna.json"
                            trigger="hover"
                            colors="primary:#4d2c19,secondary:#ee6d66"
                        >
                        </lord-icon></span>
                    </div>

                </div>
                <div className="btn">
                    <button onClick={savePassword} className='w-fit px-4 py-2 bg-red-500 font-semibold rounded-full text-white hover:bg-red-400 cursor-pointer flex items-center justify-between gap-4'><lord-icon
                        src="https://cdn.lordicon.com/zrkkrrpl.json"
                        trigger="hover"
                        colors="primary:#ffffff,secondary:#ffffff">
                    </lord-icon>Add Password</button>
                </div>
            </div>
            <div className="savedpasswords flex flex-col items-center gap-8 w-[70%]">

                <h2 className='flex font-bold text-[20px] text-gray-600'>Saved Passwords</h2>

                {forms.length === 0 && <div>No Passwords to show</div>}

                {forms.length != 0 &&

                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg flex w-full">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-red-200 dark:bg-red-500 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Site
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Username
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Password
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {forms.map((item,index) => {
                                    return <tr key={index} className="bg-red-50 border-b-[1px] border-white  dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <a href={item["site"]} target="_blank">{item["site"]}</a>
                                        </th>
                                        <td className="px-6 py-4">
                                            {item["username"]}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item["password"]}
                                        </td>

                                        <td className="px-6 py-4">
                                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        </td>
                                    </tr>
                                })}


                            </tbody>
                        </table>
                    </div>
                }
            </div>
        </div>

    )
}

export default Manager
