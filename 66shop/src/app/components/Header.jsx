import { Herr_Von_Muellerhoff } from 'next/font/google'
import React from 'react'


function Header() {
    return (
        <header className='bg-gradient-to-br from-black to-blue-500 h-[80px] flex justify-between items-center'>
            <div className='text-center flex items-center justify-start' >
                <h1 className='font-mono text-white font-bold text-5xl mx-20'>66SHOP</h1>
                <button className='font-mono mx-5 text-3xl font-bold text-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>ร้านค้า</button>
                <button className='font-mono mx-5 text-3xl font-bold text-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>โปรโมชั่น</button>
                <button className='font-mono mx-5 text-3xl font-bold text-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>วิธีการสั่งซื้อ</button>
                <button className='font-mono mx-5 text-3xl font-bold text-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>ชุมชน</button>
            </div>
            <div className='text-center flex items-center' >
                <p className='font-mono mx-5 text-3xl font-bold text-white items-center'>[LOGIN]</p>
            </div>
        </header>
    )
}

export default Header
