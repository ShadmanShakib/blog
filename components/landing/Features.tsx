'use client'

import { cn } from '@/utils/cn'
import React from 'react'
import { BentoGrid, BentoGridItem } from '../ui/bento-grid'
import { BiSolidChevronRight, BiFile } from 'react-icons/bi'
import AuthHeader from './AuthHeader'

export default function Features() {
  return (
    <BentoGrid className="mx-auto w-full">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
        />
      ))}
    </BentoGrid>
  )
}
const Skeleton = () => (
  <div className="flex h-full min-h-[6rem] w-full flex-1 rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800"></div>
)
const items = [
  {
    title: 'Autentication ',
    description: 'Role based authentication for users using NextAuth.js / Auth.js /Clerk. ',
    header: <AuthHeader />,
    icon: <BiSolidChevronRight className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Payment Integration',
    description: 'Payment integration with Stripe webhooks and checkout.',
    header: <Skeleton />,
    icon: <BiFile className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Admin Dashboard',
    description: 'Multi page admin dashboard with charts.js, tables, user profile etc',
    header: <Skeleton />,
    icon: <BiFile className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Send Emails',
    description: 'Understand the impact of effective communication in our lives.',
    header: <Skeleton />,
    icon: <BiFile className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Mdx blog',
    description: 'Join the quest for understanding and enlightenment.',
    header: <Skeleton />,
    icon: <BiFile className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Drag and drop',
    description: 'Task management with drag and drop option',
    header: <Skeleton />,
    icon: <BiFile className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Testing',
    description: 'End to End testing with Playwright ',
    header: <Skeleton />,
    icon: <BiFile className="h-4 w-4 text-neutral-500" />,
  },
]
