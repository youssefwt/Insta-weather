"use client"

import TodayWeather from "@/components/TodayWeather";
import Header from "@/components/Header"
import useWeather from "@/hooks/useWeather";
import { useState } from "react"
import Forecast from "@/components/Forecast";
import TodayWetherSkeleton from "@/components/TodayWetherSkeleton";

export default function Home() {
  const [unit, setUnit] = useState<"c" | "f">("c")
  const { data, error, isLoading, isValidating } = useWeather();
  console.log(data, error, isLoading, isValidating)


  return (
    <main className='container mx-auto h-screen flex items-start justify-center bg-cover'>
      <section className='w-3/4 my-auto flex flex-col justify-between'>
        <Header unit={unit} setUnit={setUnit} />

        <div className="lg:h-5/6 flex flex-col gap-9 lg:gap-16">
          {isLoading || isValidating ?
            <TodayWetherSkeleton /> :
            <TodayWeather current={data?.current} unit={unit} dayForecast={data?.forecast.forecastday[0].day} location={data?.location} />}
          <Forecast forecast={data?.forecast.forecastday} unit={unit} />
        </div>
      </section>
    </main>
  )
}
