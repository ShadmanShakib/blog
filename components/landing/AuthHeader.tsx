import React from 'react'
import Image from 'next/image'

export default function AuthHeader() {
  return (
    <div className="flex h-full flex-col items-center justify-center rounded-md bg-gray-900">
      <div className="flex items-center justify-center gap-5">
        <Image src="/static/images/next-auth-logo.png" width={40} height={40} alt="auth" />
        <h1 className="text-lg">Next Auth</h1>
      </div>
      <div className="mt-2">
        <p className="text-center text-sm text-gray-400">
          Build in support for many sign in options
        </p>
      </div>
    </div>
  )
}
