import React from 'react'

const TodayWetherSkeleton = () => {
    return (
        <article className='flex flex-col gap-6 lg:flex-row justify-between items-center'>
            <div className='w-[220px] flex flex-col gap-2'>
                <div className='h-[50px] w-full animate-pulse bg-neutral-300'></div>
                <div className='h-[90px] w-full animate-pulse bg-neutral-300'></div>
                <div className='h-[50px] w-full animate-pulse bg-neutral-300'></div>
            </div>
            <div className='w-[220px] flex flex-col gap-2'>
                <div className='h-[50px] w-full animate-pulse bg-neutral-300'></div>
                <div className='h-[90px] w-full animate-pulse bg-neutral-300'></div>
                <div className='h-[50px] w-full animate-pulse bg-neutral-300'></div>
            </div>
        </article>
    )
}

export default TodayWetherSkeleton