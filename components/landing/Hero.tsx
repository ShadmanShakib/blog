import { CTA } from '@/components/ui'
import { IoGiftOutline } from 'react-icons/io5'

const Hero = () => {
  return (
    <section className="py-5">
      <div className=" flex flex-col items-center justify-center">
        <div className="flex justify-center font-medium xl:w-3/5 ">
          <h1 className="w-80 text-center text-3xl leading-relaxed dark:text-gray-100  xl:w-full xl:text-left xl:text-6xl xl:leading-snug ">
            Turn idea into MVP in weeks,{' '}
            <span className="rounded-md bg-primary-500 px-2 py-1 text-white dark:bg-gray-800 dark:text-[#3fb950] ">
              Not months
            </span>
          </h1>
        </div>
        <div className="mt-8">
          <p className="max-w-3xl text-center font-medium text-gray-700 dark:text-gray-400">
            The NextJS Full Stack Devloper with all tools you need to build your SaaS, AI tool, or
            any other web app and make $ online fast.
          </p>
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <CTA title="Shedule a Meeting" />
      </div>
      <div className="mt-2 flex justify-center gap-1 text-gray-600 dark:text-gray-300">
        <IoGiftOutline className="h-5 w-5 animate-bounce text-green-400" />
        <span className="text-green-400">$300 discount</span> the first 5 customers (4 left)
      </div>
    </section>
  )
}

export default Hero
