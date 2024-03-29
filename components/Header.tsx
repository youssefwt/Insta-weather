import React, { Dispatch, SetStateAction } from 'react'

type PropTypes = {
    unit: "c" | "f",
    setUnit: Dispatch<SetStateAction<"c" | "f">>
}

const Header = ({ unit, setUnit }: PropTypes) => {
    return (
        <header className='flex flex-col gap-1 md:flex-row justify-between items-center mb-9 lg:mb-20'>
            {/* TITLE */}
            <h1 className='font-bold text-3xl'>INSTAWEATHER</h1>
            {/* SWITCH */}
            <div>
                <button onClick={() => setUnit("c")} className={`${unit === "c" ? "checked-switch" : ""} switch-button`}>C</button>
                <button onClick={() => setUnit("f")} className={`${unit === "f" ? "checked-switch" : ""} switch-button`}>F</button>
            </div>
        </header>
    )
}

export default Header