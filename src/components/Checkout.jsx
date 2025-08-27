import React from 'react'

import qrcode from '../assets/qr.png'
import { Link } from 'react-router-dom'

function Checkout() {
    return (
        <div className='pb-5 bg-body-secondary d-flex  flex-column justify-content-center pt-5 align-items-center '>

            <h1 className='lg:text-start text-center mb-5 lg:text-5xl text-2xl font-bold '>Explore Our Annual Science Exhibition!</h1>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-3 lg:gap-[100px]'>
                <div className='w-full flex flex-col gap-5 justify-center items-center '>
                    <img src={qrcode} alt="" className='w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] shadow-lg rounded-5' />
                    <span className='text-blue-700 text-lg'>
                    </span>
                </div>
                <div className='w-full flex flex-col gap-2 lg:gap-5 justify-center '>

                    <div className='flex text-center lg:text-start flex-col lg:p-0 p-3'>
                        <span className='text-xl lg:text-3xl font-bold lg:mb-3'>Special Recognition Awards</span>
                        <span className='lg:text-2xl'>Outstanding Presentation</span>
                        <span className='lg:text-2xl'>Most Creative Display</span>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Checkout
