interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Shakib-Admin: Dashboard Using Next.js and Tailwind CSS',
    description: `Beautiful Looking dashbaord build using Next.js 14 (app router) and Tailwind CSS.`,
    imgSrc: '/static/images/shakib-admin.png',
    href: 'https://shakib-admin.vercel.app/',
  },
  {
    title: 'The Time Machine',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
]

export default projectsData
