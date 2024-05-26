import { HoverEffect } from '@/components/ui/card-hover-effect'

export default function Techs() {
  return (
    <div className="mx-auto w-full ">
      <HoverEffect items={projects} />
    </div>
  )
}
export const projects = [
  {
    title: 'NEXT.js 14',
    description:
      'Latest Next.js version with app router and server actions. Full stack development with the power of Next.js API routes.',
    link: 'https://stripe.com',
  },
  {
    title: 'React.js',
    description:
      'A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
    link: 'https://netflix.com',
  },
  {
    title: 'Tailwind CSS',
    description:
      'A multinational technology company that specializes in Internet-related services and products.',
    link: 'https://google.com',
  },
  {
    title: 'Postgres',
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: 'https://meta.com',
  },
  {
    title: 'SEO',
    description:
      'A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.',
    link: 'https://amazon.com',
  },
  {
    title: 'Testing',
    description:
      'A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.',
    link: 'https://microsoft.com',
  },
]
