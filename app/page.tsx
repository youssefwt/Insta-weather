"use client"

import TodayWeather from "@/components/TodayWeather";
import Header from "@/components/Header"
import useWeather from "@/hooks/useWeather";
import { useState } from "react"
import Forecast from "@/components/Forecast";

export default function Home() {
  const [unit, setUnit] = useState<"c" | "f">("c")
  const { data, error, isLoading } = useWeather();
  console.log(data, error, isLoading)


  return (
    <main className='container mx-auto h-screen flex items-center justify-center'>
      <section className='h-5/6 w-4/5 bg-cyan-200 px-1 md:px-20 py-10 flex flex-col justify-between'>
        <Header unit={unit} setUnit={setUnit} />
        <div className="lg:h-5/6 flex flex-col gap-16">
          <TodayWeather current={data?.current} unit={unit} dayForecast={data?.forecast.forecastday[0].day} location={data?.location} />
          <Forecast forecast={data?.forecast.forecastday} />
        </div>
      </section>
    </main>
  )
}
