'use client'

import React, { useEffect, useState } from 'react'
import { InfiniteMovingCards } from '../ui/infinite-moving-cards'

export default function Showcase() {
  return (
    <div className="dark:bg-grid-white/[0.05] relative flex flex-col items-center justify-center overflow-hidden rounded-md py-5  antialiased ">
      <InfiniteMovingCards items={showcaseItems} direction="left" speed="slow" />
    </div>
  )
}

const showcaseItems = [
  {
    name: 'Admin Dashboard',
    src: '/static/images/shakib-admin.png',
  },
  {
    name: 'Kanban ',
    src: '/static/images/kanban.png',
  },
  {
    name: 'profile page',
    src: '/static/images/profile-page.png',
  },
]
