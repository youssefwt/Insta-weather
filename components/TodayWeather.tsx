import { Current, Day, Location } from '@/types'
import Image from 'next/image'
import React from 'react'

type PropTypes = {
    unit: "c" | "f"
    current: Current | undefined
    dayForecast: Day | undefined
    location: Location | undefined
}

const TodayWeather = ({ unit, current, dayForecast: forecast, location }: PropTypes) => {
    const temp = unit === "c" ? current?.temp_c : current?.temp_f
    const maxTemp = unit === "c" ? forecast?.maxtemp_c : forecast?.maxtemp_f
    const minTemp = unit === "c" ? forecast?.mintemp_c : forecast?.mintemp_f
    const date = new Date()
    const dateOptions = {
        weekday: 'long' as const,
        day: 'numeric' as const,
        month: 'short' as const,
        year: 'numeric' as const
    };
    const formattedDate = new Intl.DateTimeFormat('en-US', dateOptions).format(date);
    return (
        <article className='flex flex-col gap-6 md:flex-row justify-between items-center h-[230px]'>
            {/* condition */}
            <div className='flex flex-col justify-between h-full text-center md:text-start'>
                <h2 className='font-bold text-5xl'>{location?.name}</h2>
                <p className='font-semibold text-lg my-3'>{formattedDate}</p>
                <Image className='w-24' src={current?.condition.icon.replace(/^\/\//, "https://") || ""} alt='condition icon' width={64} height={64} />
                <p className='font-bold text-2xl'>{current?.condition.text}</p>
            </div>
            {/* weather */}
            <div className='flex flex-col gap-2 justify-between h-full text-center md:text-end'>
                <p className='font-bold text-8xl '>{temp && Math.round(temp)}&deg;</p>
                <p className=' text-4xl '>{maxTemp && Math.round(maxTemp)}&deg;{" "}/{" "} <span className='text-neutral-200'>{minTemp && Math.round(minTemp)}&deg;</span></p>
                <p className='text-lg font-medium'>{forecast?.condition.text} through the day</p>
            </div>
        </article>
    )
}

export default TodayWeather