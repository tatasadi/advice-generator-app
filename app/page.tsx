import Card from "./components/Card"
import Reference from "./components/Reference"

export default function Home() {
  return (
    <main className="flex h-full min-h-screen w-full max-w-[33.75rem] flex-col items-center px-4 pt-[7.5rem] lg:min-h-0 lg:pt-[13.94rem]">
      <h1 className="sr-only">Advice Generator App</h1>
      <Card />
      <Reference />
    </main>
  )
}
