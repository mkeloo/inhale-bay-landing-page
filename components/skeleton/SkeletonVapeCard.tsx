import React from 'react'
import vapePlaceholder from '@/public/assets/skeleton/vape_placeholder.webp'
import Image from 'next/image'

export default function SkeletonVapeCard() {
    return (
        <div className="relative h-[420px] my-4 w-[102%] bg-gradient-to-tr from-indigo-400 to-purple-600 flex flex-col items-center justify-between rounded-2xl shadow-md overflow-hidden">
            <div className='w-full h-12 flex flex-row items-center justify-between px-3 pt-6'>
                <div className="w-24 h-10 bg-gradient-to-tr from-green-400 to-green-600 rounded-full animate-pulse"></div>
                <div className="w-12 h-12 bg-gradient-to-tr from-red-400 to-red-600 rounded-full animate-pulse"></div>
            </div>

            <div className='w-full h-fit-content flex flex-col items-center justify-center'>
                <div className='w-full h-40 pt-4 flex items-center justify-center relative z-2 animate-pulse'>
                    <Image src={vapePlaceholder} alt="Vape Placeholder" width={300} height={300} className='w-40 h-40 object-contain absolute transform -rotate-[30deg] -translate-x-16' />
                    <Image src={vapePlaceholder} alt="Vape Placeholder" width={300} height={300} className='w-48 h-48 object-contain relative z-10 pb-4' />
                    <Image src={vapePlaceholder} alt="Vape Placeholder" width={300} height={300} className='w-40 h-40 object-contain absolute transform rotate-[30deg] translate-x-12' />
                </div>

                <div className='w-full h-44 z-10'>
                    <div className='w-full h-[70%] bg-gradient-to-tr from-blue-600 to-blue-800 flex flex-col items-center justify-center px-3 gap-y-3'>
                        <div className="w-52 h-5 bg-gray-400 rounded-lg animate-pulse"></div>
                        <div className="w-40 h-5 mt-1 bg-gray-400 rounded-lg animate-pulse"></div>
                        <div className="w-40 h-5 bg-gray-400 rounded-lg animate-pulse"></div>
                    </div>

                    <div className='w-full h-[30%] bg-gradient-to-tr from-amber-400 to-yellow-600 flex items-center justify-center px-3 gap-x-3'>
                        <div className="w-28 h-6 bg-gray-400 rounded-lg animate-pulse"></div>
                        <div className="w-8 h-6 bg-gray-400 rounded-lg animate-pulse"></div>
                    </div>
                </div>
            </div>

        </div>
    )
}
