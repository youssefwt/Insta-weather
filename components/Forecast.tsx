import React, { ReactNode, useState } from 'react'
import Tabs from './Tabs';
import { Forecastday } from '@/types';
import { extractHour, formatDate, isSameHour } from '@/lib/utils';
import Image from 'next/image';

type PropTypes = {
    forecast: Forecastday[] | undefined
    unit: "c" | "f"
}

const tabs = ["Hourly", "Daily"]
const UnitForecast = ({ icon, temp, children }: { icon: string, temp: number, children: ReactNode }) => {
    return (<>
        {children}
        <Image className='w-[4.5rem] max-w-[4.5rem]' src={icon || ""} alt='condition icon' width={64} height={64} />
        <p className='mb-10 text-2xl'>{temp}&deg;</p>
    </>)
}
const Forecast = ({ forecast, unit }: PropTypes) => {
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const HourlyForecast = () => {
        return (
            <>
                {forecast?.[0].hour.map((hour) => {
                    return (<div key={hour.time} className='flex flex-col justify-center items-center gap-1'>
                        <UnitForecast
                            temp={unit === "c" ? hour.temp_c : hour.temp_f}
                            icon={hour.condition.icon.replace(/^\/\//, "https://")}>
                            <p className='text-xl'>{isSameHour(hour.time) ? "now" : extractHour(hour.time)}</p>
                        </UnitForecast>
                    </div>)
                })}
            </>
        )
    }
    const DailyForecast = () => {
        const dateOptions = {
            day: 'numeric' as const,
            weekday: 'short' as const,
        };
        return (
            <>
                {
                    forecast?.map((day, i) => {
                        return (
                            <div key={day.date} className='flex flex-col justify-center items-center gap-1 w-[100px]'>
                                <UnitForecast
                                    temp={unit === "c" ? day.day.avgtemp_c : day.day.avgtemp_f}
                                    icon={day.day.condition.icon.replace(/^\/\//, "https://")}>
                                    <p className='text-lg'>{i === 0 ? "today" : formatDate(day.date, dateOptions)}</p>
                                </UnitForecast>
                            </div>
                        )
                    })
                }
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
                    activeTab === "Hourly" ? <HourlyForecast /> : <DailyForecast />
                }
            </div>
        </div>
    )
}

export default Forecast