import ListItem from "@/components/listItem"
import { ListItemType } from "@/global"
import { Handlee } from "next/font/google"

const brand = Handlee({weight: '400', subsets: ['latin']})

const dummyData: ListItemType[] = [
  {
    id: crypto.randomUUID(),
    priority: 'high',
    text: 'Another message from me Kivi Corn'
  },
  {
    id: crypto.randomUUID(),
    priority: 'medium',
    text: 'Some dummy datat over here'
  },
  {
    id: crypto.randomUUID(),
    priority: 'low',
    text: 'how cool is coding!?'
  }
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 max-w-md mx-auto gap-8">
      <div className={`flex gap-4 justify-between w-full`}>
        <h1 className={`${brand.className} text-2xl w-full text-left text-blue-800`}>PriorityPal</h1>
        <button className="bg-blue-800 text-white h-6 w-6 inline-flex justify-center items-center">+</button>
      </div>
      <form className="w-full">   
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search Titles, Descriptions..." required />
          <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
        </div>
      </form>

      <div className="flex flex-col gap-4 w-full">
        {dummyData.map(listItem => (
          <ListItem key={listItem.id} priority={listItem.priority} text={listItem.text} />
        ))}
      </div>
    </main>
  )
}
