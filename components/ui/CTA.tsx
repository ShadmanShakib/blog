import React from 'react'

type Props = {
  title: string
}

export default function CTA({ title }: Props) {
  return (
    <a
      href="https://cal.com/sadman-shakib/30min"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-md bg-[#8957e5] px-5 py-3 font-semibold text-gray-100
      shadow-md dark:text-slate-100"
    >
      {title}
    </a>
  )
}
