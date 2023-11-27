import React, { useState } from 'react'
import Tabs from './Tabs';
import { Forecastday } from '@/types';
import { extractHour, isSameHour } from '@/lib/utils';
import Image from 'next/image';

type PropTypes = {
    forecast: Forecastday[] | undefined
    unit: "c" | "f"
}

const tabs = ["Hourly", "Daily"]
const Forecast = ({ forecast, unit }: PropTypes) => {
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const HourlyForecast = () => {
        return (
            <>
                {forecast?.[0].hour.map((hour) => {
                    return (<div key={hour.time} className='flex flex-col justify-center items-center gap-1'>
                        <p className='text-xl'>{isSameHour(hour.time) ? "now" : extractHour(hour.time)}</p>
                        <Image className='w-[4.5rem] max-w-[4.5rem]' src={hour.condition.icon.replace(/^\/\//, "https://") || ""} alt='condition icon' width={64} height={64} />
                        <p className='mb-10 text-2xl'>{unit === "c" ? hour.temp_c : hour.temp_f}&deg;</p>
                    </div>)
                })}
            </>
        )
    }
    return (
        <div className='flex flex-col gap-10'>
            {/* tabs */}
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} forecast={forecast} />
            {/* content */}
            <div className='flex overflow-x-auto overflow-y-clip gap-10 w-full'>
                {

                    activeTab === "Hourly" ? <HourlyForecast /> : "daily forecast"
                }
            </div>
        </div>
    )
}

export default Forecast