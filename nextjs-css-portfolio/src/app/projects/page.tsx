import Image from "next/image"
import hbg from "../../../public/abg.png"
export default function Projects(){

  return (
    <div>
      <div className="main">
        <div className="about">
   <h1 className="name">Projects </h1>

         <h1 className="intro"> <a href="https://nysquiz.com">NYS QUIZ</a></h1>








          </div>

        <div className="img">
      <Image src={hbg} width={"900"} height={"900"} alt="logo" className="himg"/>
          </div>
        </div>
      <button className="p" style={{marginRight:"7px"}} ><a href="/projects">Projects</a></button>
      <button className="ab" style={{marginRight:"7px"}} ><a href="/about">About</a></button>
      <button className="c" style={{marginRight:"7px"}} ><a href="/contact">Contact</a></button>
    </div>
  )
}
