import React from 'react'
import Image from 'next/image'

export default function AIHeader() {
  return (
    <div className="flex h-full items-center justify-center gap-4 rounded-md bg-gray-900">
      <Image
        src="/static/images/openai-white-lockup.png"
        className="fill-current text-white"
        alt="AI"
        width={100}
        height={80}
      />
    </div>
  )
}
