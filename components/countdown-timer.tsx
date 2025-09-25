"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  targetDate: Date
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white p-6 md:p-12 rounded-2xl md:rounded-3xl shadow-2xl mb-8 transform hover:scale-105 transition-transform duration-300">
      <h3 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 text-center animate-pulse">¡Faltan solo!</h3>
      <div className="grid grid-cols-4 gap-2 md:gap-6 text-center">
        <div className="md:bg-white/30 md:rounded-xl p-2 md:p-4 md:m-2 md:backdrop-blur-md md:border md:border-white/40 md:shadow-lg md:min-w-[100px]">
          <div className="text-4xl md:text-5xl font-bold text-center leading-tight">{timeLeft.days}</div>
          <div className="text-lg md:text-xl text-center mt-1 md:mt-2">Días</div>
        </div>
        <div className="md:bg-white/30 md:rounded-xl p-2 md:p-4 md:m-2 md:backdrop-blur-md md:border md:border-white/40 md:shadow-lg md:min-w-[100px]">
          <div className="text-4xl md:text-5xl font-bold text-center leading-tight">{timeLeft.hours}</div>
          <div className="text-lg md:text-xl text-center mt-1 md:mt-2">Horas</div>
        </div>
        <div className="md:bg-white/30 md:rounded-xl p-2 md:p-4 md:m-2 md:backdrop-blur-md md:border md:border-white/40 md:shadow-lg md:min-w-[100px]">
          <div className="text-4xl md:text-5xl font-bold text-center leading-tight">{timeLeft.minutes}</div>
          <div className="text-lg md:text-xl text-center mt-1 md:mt-2">Min</div>
        </div>
        <div className="md:bg-white/30 md:rounded-xl p-2 md:p-4 md:m-2 md:backdrop-blur-md md:border md:border-white/40 md:shadow-lg md:min-w-[100px]">
          <div className="text-4xl md:text-5xl font-bold text-center leading-tight">{timeLeft.seconds}</div>
          <div className="text-lg md:text-xl text-center mt-1 md:mt-2">Seg</div>
        </div>
      </div>
    </div>
  )
}
