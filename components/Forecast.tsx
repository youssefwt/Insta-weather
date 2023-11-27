import React, { useState } from 'react'
import Tabs from './Tabs';
import { Forecastday } from '@/types';

type PropTypes = {
    forecast: Forecastday[] | undefined
}

const tabs = ["Hourly", "Daily"]
const Forecast = ({ forecast }: PropTypes) => {
    const [activeTab, setActiveTab] = useState(tabs[0]);
    return (
        <>
            {/* tabs */}
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} forecast={forecast} />
            {/* content */}
        </>
    )
}

export default Forecast