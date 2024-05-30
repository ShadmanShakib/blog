import React from 'react'
import Image from 'next/image'

export default function PaymentHeader() {
  return (
    <div className="group flex h-full items-center justify-center rounded-md bg-gray-900 text-center">
      <div className="flex flex-col items-center">
        <Image src="/static/images/stripe-logo.svg" alt="stripe logo" height={100} width={120} />
        <p className="text-sm text-gray-400">
          Payment integration with Stripe webhook and checkout
        </p>
      </div>
    </div>
  )
}
