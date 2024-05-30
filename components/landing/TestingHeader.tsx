import React from 'react'
import Image from 'next/image'

export default function TestingHeader() {
  return (
    <div className="flex h-full items-center justify-center rounded-md bg-gray-900">
      <Image
        src="/static/images/playwright-logo.svg"
        width={100}
        height={100}
        alt="palywright-logo"
      />
    </div>
  )
}
