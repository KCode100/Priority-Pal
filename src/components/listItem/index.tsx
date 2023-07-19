'use client'
import { PriorityTypes } from "@/global"
import { useState } from "react"

type ListItemProps = {
  priority: PriorityTypes
  text: string
}

const ListItem = ({ priority, text }: ListItemProps) => {
  const color = priority === 'high' ? 'pink' : priority === 'medium' ? 'orange' : 'green'
  const [textareaValue, setTextareaValue] = useState<string>(text)

  return ( 
    <div className="flex gap-2">
      <div className="flex flex-col gap-2 pt-2">
        <div className="w-5 h-5 rounded-full cursor-pointer bg-red-400"></div>
        <div className="w-5 h-5 rounded-full cursor-pointer bg-orange-300"></div>
        <div className="w-5 h-5 rounded-full cursor-pointer bg-green-400"></div>
      </div>
      <textarea
        className={`block resize-none w-full max-w-md p-6 bg-${color}-50 border border-gray-200 rounded-lg shadow focus:border-${color}-500`}
        value={textareaValue}
        onChange={(e)=> setTextareaValue(e.target.value)}
      />
      {/* <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">{text}</p> */}
    </div>
  );
}
 
export default ListItem;