import Image from "next/image"
import hbg from "../../../public/abg.png"
export default function About(){

  return (
    <div>
      <div className="xl:flex lg:flex md:grid sm:flex sm:pt-1 md:pt-1 lg:pt-4 xl:pt-4">
        <div className="italic">
   <h1 className="ml-[50px] lg:mt-[60px] xl:mt-[60px] sm:mt-[2px] md:mt-[2px] text-[yellow] text-[90px] ">Rubab Fatima</h1>

      <p className="ml-[50px] text-[#84a314] text-[22px]">Python Developer and Full Stack Engineer<br></br> with a strong focus on Generative AI and <br></br>innovative web development. As the <br></br>Co-Founder, CEO, and CTO of nysquiz.com, <br></br>I lead a dynamic platform <br></br>built to transform online learning through adaptive, <br></br>topic-based quizzes powered by cutting-edge AI.</p>

          </div>

        <div>
      <Image src={hbg} width={"900"} height={"900"} alt="logo" className="lg:ml-[50px] md:ml-[50px]"/>
          </div>
        </div>
      <button className="border-[1px] rounded-xl  bg-[#3ea0f0] border-inherit	p-[5px] mr-[50px] ml-[70px]"  ><a href="/projects">Projects</a></button>
      <button className="border-[1px] rounded-xl  bg-[#3ea0f0] border-inherit	p-[5px] mr-[50px] pl-[13px] pr-[13px]" ><a href="/about">About</a></button>
      <button className="border-[1px] rounded-xl  bg-[#3ea0f0] border-inherit	p-[5px] mr-[50px]"  ><a href="/contact">Contact</a></button>
    </div>
  )
}
