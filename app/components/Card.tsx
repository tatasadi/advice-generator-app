"use client"
import React from "react"
import { useQuery } from "react-query"
import iconDice from "@/public/images/icon-dice.svg"
import Image from "next/image"

const Card: React.FC = () => {
  const { data, isLoading, isError, refetch } = useQuery("advice", async () => {
    const response = await fetch("https://api.adviceslip.com/advice")
    const data = await response.json()
    return data
  })

  function generateAdvice() {
    console.log("Generating new advice")
    refetch()
  }

  return (
    <div className="bg-dark-grayish-blue relative flex flex-col items-center rounded-[0.625rem] px-6 pb-16 pt-10 shadow-[30px_50px_80px_0px_rgba(0,0,0,0.10)] lg:p-12 lg:pb-[4.5rem]">
      <h2 className="text-neon-green text-[0.6875rem] font-extrabold leading-normal tracking-[0.21606rem]">
        Advice # 117
      </h2>
      <p className="my-6 text-center text-2xl font-extrabold leading-normal tracking-[-0.01606rem]">
        {isLoading
          ? "Loading..."
          : isError
            ? "Error fetching advice"
            : data?.slip.advice}
      </p>
      <div className="h-4 w-full bg-[url('/images/pattern-divider-mobile.svg')] bg-cover bg-center bg-no-repeat sm:bg-[url('/images/pattern-divider-desktop.svg')]"></div>
      <button
        onClick={generateAdvice}
        className="bg-neon-green absolute -bottom-8 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full hover:shadow-[0_0_40px_0_#53FFAA]"
      >
        <Image src={iconDice} alt="Dice Icon" />
      </button>
    </div>
  )
}

export default Card
