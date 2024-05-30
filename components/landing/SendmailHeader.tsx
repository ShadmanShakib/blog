import React from 'react'
import Image from 'next/image'
export default function SendmailHeader() {
  return (
    <div className="flex h-full items-center justify-center gap-3 rounded-md bg-gray-900">
      <Image src="/static/images/mailgun.svg" alt="logo" width={40} height={40} />
      <h1>Mailgun</h1>
    </div>
  )
}
