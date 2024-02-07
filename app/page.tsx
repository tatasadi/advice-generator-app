"use client"
import Card from "./components/Card"
import Reference from "./components/Reference"
import { QueryClient, QueryClientProvider } from "react-query"

export default function Home() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <main className="flex h-full min-h-screen w-full max-w-[33.75rem] flex-col items-center px-4 pt-[7.5rem] lg:min-h-0 lg:pt-[13.94rem]">
        <h1 className="sr-only">Advice Generator App</h1>
        <Card />
        <Reference />
      </main>
    </QueryClientProvider>
  )
}
