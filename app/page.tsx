"use client"

import Header from "@/components/Header"
import useWeather from "@/hooks/useWeather";
import { useState } from "react"

export default function Home() {
  const [unit, setUnit] = useState<"c" | "f">("c")
  const { data, error, isLoading } = useWeather();
  console.log(data, error, isLoading)

  return (
    <main className='container mx-auto h-screen flex items-center justify-center'>
      <section className='h-5/6 w-4/5 bg-cyan-200 px-20 py-10'>
        <Header unit={unit} setUnit={setUnit} />
      </section>
    </main>
  )
}
