import { HoverEffect } from '@/components/ui/card-hover-effect'
import Image from 'next/image'

import { MongoDB, Nodejs, ReactIcon } from '../icons'

export default function Techs() {
  return (
    <div className="mx-auto w-full ">
      <HoverEffect items={projects} />
    </div>
  )
}
export const projects = [
  {
    title: (
      <div className="">
        <Image src="/static/images/nextjs.png" alt="nextjs" width={100} height={190} />
      </div>
    ),
    description:
      'Next.js is a powerful React framework that enables server-side rendering and static site generation. ',
    link: 'https://nextjs.org',
  },
  {
    title: <ReactIcon />,
    description:
      'Built with latest features of React.js(most popular JS library) including server components and server actions. ',
    link: 'https://reactjs.org',
  },
  {
    title: <Image src="/static/images/tailwindcss.png" alt="tailwindcss" height={50} width={50} />,
    description:
      'A multinational technology company that specializes in Internet-related services and products.',
    link: 'https://tailwindcss.com',
  },
  {
    title: <Image src="/static/images/PostgresSQL.png" alt="postgres" height={50} width={50} />,
    description:
      'PostgreSQL supports complex queries, advanced data types, and full ACID compliance, making it a great choice for transactional applications.',
    link: 'https://postgressql.org',
  },
  {
    title: <MongoDB />,
    description: 'MongoDB is a NoSQL database known for its flexibility and scalability.',
    link: 'https://mongodb.com',
  },
  {
    title: <Nodejs />,
    description:
      'Node.js is a JavaScript runtime built on Chromes V8 JavaScript engine. It allows developers to build scalable network applications using JavaScript on the server-side.',
    link: 'https://nodejs.org',
  },
]
