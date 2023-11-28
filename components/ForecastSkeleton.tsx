import React from 'react'

const ForecastSkeleton = () => {
    return (
        <div className='min-w-[72px] flex flex-col gap-2 mb-10'>
            <div className='animate-pulse bg-neutral-300 w-full h-[40px]'></div>
            <div className='animate-pulse bg-neutral-300 w-full h-[60px]'></div>
            <div className='animate-pulse bg-neutral-300 w-full h-[40px]'></div>
        </div>
    )
}

export default ForecastSkeleton