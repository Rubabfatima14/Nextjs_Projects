import Image from "next/image"
import hbg from "../../../public/cbg.png"
export default function Contact(){

  return (
    <div>
      <div className="xl:flex lg:flex md:grid sm:flex sm:pt-1 md:pt-1 lg:pt-4 xl:pt-4">
        <div className="italic">
   <h1 className="ml-[50px] lg:mt-[60px] xl:mt-[60px] sm:mt-[2px] md:mt-[2px] text-[yellow] text-[70px] "  >Connect with Najaf Ali </h1>

         <h1 className="ml-[50px] text-[#84a314] text-[30px]"> <strong>Email:</strong> rubab.fatima8888@gmail.com</h1>
          <h1 className="ml-[50px] text-[#84a314] text-[30px]"> <strong>Address:</strong>Karachi Sindh, Pakistan</h1>
          <h1 className="ml-[50px] text-[#84a314] text-[30px]"> <strong>Phone:</strong> +923452117948</h1>
          <h1 className="ml-[50px] text-[#84a314] text-[30px]"> <strong>WhatsApp</strong> +923452117948</h1>




          </div>

        <div >
      <Image src={hbg} width={"500"} height={"500"} alt="logo" className="lg:ml-[50px] md:ml-[50px]" />
          </div>
        </div>
      
      <button className="border-[1px] rounded-xl  bg-[#3ea0f0] border-inherit	p-[5px] mr-[50px] ml-[70px]"  ><a href="/projects">Projects</a></button>
      <button className="border-[1px] rounded-xl  bg-[#3ea0f0] border-inherit	p-[5px] mr-[50px] pl-[13px] pr-[13px]" ><a href="/about">About</a></button>
      <button className="border-[1px] rounded-xl  bg-[#3ea0f0] border-inherit	p-[5px] mr-[50px]" ><a href="/contact">Contact</a></button>
    </div>
  )
}
