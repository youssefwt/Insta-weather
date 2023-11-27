import { Condition } from '@/types'
import Image from 'next/image'
import React from 'react'

type PropTypes = {
    condition: Condition | undefined
}

const CurrentWeather = ({ condition }: PropTypes) => {
    return (
        <article className='flex flex-col gap-6 md:flex-row justify-between items-center'>
            {/* condition */}
            <div>
                <h2 className='font-bold text-5xl'>New Cairo</h2>
                <p className='font-semibold text-lg my-3'>friday 20,2020</p>
                <Image className='w-24' src={condition?.icon.replace(/^\/\//, "https://") || ""} alt='condition icon' width={64} height={64} />
                <p className='font-bold text-2xl'>{condition?.text}</p>
            </div>
            {/* weather */}
            <div>
                weather
            </div>
        </article>
    )
}

export default CurrentWeather