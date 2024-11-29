import Image from "next/image"
import hbg from "../../../public/abg.png"
export default function About(){

  return (
    <div>
      <div className="main">
        <div className="about">
   <h1 className="name">Rubab Fatima </h1>

      <p style={{fontSize:"20px",color:"yellowgreen"}}>Python Developer and Full Stack Engineer<br></br> with a strong focus on Generative AI and <br></br>innovative web development. As the <br></br>Co-Founder, CEO, and CTO of nysquiz.com, <br></br>I lead a dynamic platform <br></br>built to transform online learning through adaptive, <br></br>topic-based quizzes powered by cutting-edge AI.</p>

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
