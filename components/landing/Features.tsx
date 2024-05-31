'use client'
import React from 'react'
import { BiSolidChevronRight, BiFile, BiMailSend } from 'react-icons/bi'
import PaymentHeader from './PaymentHeader'
import { BentoGrid, BentoGridItem } from '../ui/bento-grid'
import AuthHeader from './AuthHeader'
import AdminHeader from './AdminHeader'
import AIHeader from './AIHeader'
import SendmailHeader from './SendmailHeader'
import TestingHeader from './TestingHeader'
import SEOHeader from './SEOHeader'

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
    header: <PaymentHeader />,
    icon: <BiFile className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Admin Dashboard',
    description: 'Multi page admin dashboard with charts.js, tables, user profile etc',
    header: <AdminHeader />,
    icon: <BiFile className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'AI App Development',
    description: 'Integration with ChatGPT-3.5, 4, 4o, Gemini 1.5 and many more',
    header: <AIHeader />,
    icon: <BiFile className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Send Emails',
    description: 'Send mail with MailGun',
    header: <SendmailHeader />,
    icon: <BiMailSend className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Testing',
    description: 'End to End testing with Playwright for all the modern web apps.  ',
    header: <TestingHeader />,
    icon: <BiFile className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'SEO & Mdx blog',
    description: 'Join the quest for understanding and enlightenment.',
    header: <SEOHeader />,
    icon: <BiFile className="h-4 w-4 text-neutral-500" />,
  },
]
