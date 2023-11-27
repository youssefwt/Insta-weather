import { Forecastday } from '@/types';
import React, { Dispatch } from 'react'

type PropTypes = {
    tabs: string[];
    activeTab: string;
    setActiveTab: Dispatch<React.SetStateAction<string>>
    forecast: Forecastday[] | undefined
}

const Tabs = ({ tabs, activeTab, setActiveTab, forecast }: PropTypes) => {
    return (
        <>
            {/* tabs */}
            <div className="flex border-b">
                {tabs.map(tab => (
                    <div
                        key={tab}
                        className={`cursor-pointer p-4 font-bold text-neutral-100
                        ${activeTab === tab ? 'border-b-2 border-white font-bold text-white' : ''}`
                        }
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </div>
                ))}
            </div>
            {/* content */}
            <div className='flex flex-wrap overflow-y-auto'>

            </div>
        </>
    )
}

export default Tabs