import React from 'react'

import { IoAnalyticsSharp } from 'react-icons/io5'

export default function AdminHeader() {
  return (
    <div className="flex h-full items-center rounded-md bg-gray-900 text-center ">
      <div className="text-center">
        <div className="flex justify-center">
          <IoAnalyticsSharp className="h-10 w-10" />
        </div>
        <p className=" text-sm text-gray-400">
          Data Table, Setting, Auth pages, Charts, Drag and drop etc.
        </p>
      </div>
    </div>
  )
}
