import { Handlee } from "next/font/google"

const brand = Handlee({weight: '400', subsets: ['latin']})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 max-w-md mx-auto gap-8">
      <h1 className={`${brand.className} brand text-2xl w-full text-left text-blue-800`}>PriorityPal</h1>
      <div className="flex flex-col gap-4">
        <div className="block max-w-md p-6 bg-pink-50 border border-gray-200 rounded-lg shadow">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>
        <div className="block max-w-md p-6 bg-orange-50 border border-gray-200 rounded-lg shadow">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>
        <div className="block max-w-md p-6 bg-green-50 border border-gray-200 rounded-lg shadow">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>
      </div>
    </main>
  )
}
