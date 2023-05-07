import { BsArrowRightShort } from 'react-icons/bs'

export function Hero() {
  return (
    <div className="rounded-[150px] border-b-2 border-[#212325] p-20 text-center text-[#6a6d6e] text-lg font-medium">
      <p className="rounded-xl inline-block bg-[#121416] border-2 border-[#212325] p-3">
        Fastest Copywriting Your Website
      </p>
      <h2 className="my-7 mx-auto max-w-4xl uppercase font-bold text-6xl text-white leading-tight child:text-[#1DC4F4]">
        The <i>fastest</i> way to write copy for your <i>website</i>
      </h2>

      <p className="max-w-xl mx-auto">
        With this tool, writing website copy has never been faster. Speed up your content creation process and get your
        website up and running in no time.
      </p>
      <a
        href="#"
        className="inline-block mt-7 bg-gradient-to-r from-[#5840B6] to-[#358DD8] text-white py-4 px-8 rounded-[50px] group"
      >
        Try for free
        <BsArrowRightShort className="ml-1 text-3xl float-right group-hover:translate-x-2 transition-transform duration-75" />
      </a>
    </div>
  )
}
