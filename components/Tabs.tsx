import { Forecastday } from '@/types';
import React, { Dispatch } from 'react'

type PropTypes = {
    tabs: string[];
    activeTab: string;
    setActiveTab: Dispatch<React.SetStateAction<string>>
    forecast: Forecastday[] | undefined
}

const Tabs = ({ tabs, activeTab, setActiveTab }: PropTypes) => {
    return (
        <>
            <div className="flex border-b">
                {tabs.map(tab => (
                    <div
                        key={tab}
                        className={`cursor-pointer p-4 font-bold 
                        ${activeTab === tab ? 'border-b-2 border-white font-bold text-white' : 'text-neutral-100/70'}`
                        }
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Tabs