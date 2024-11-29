import Image from "next/image"
import hbg from "../../../public/cbg.png"
export default function Contact(){

  return (
    <div>
      <div className="main">
        <div className="about">
   <h1 className="name" style={{fontSize:"50px",fontStyle:"italic"}} >Connect with Rubab Fatima </h1>

         <h1 className="intro"> <strong>Email:</strong> rubab.fatima8888@gmail.com</h1>
          <h1 className="intro"> <strong>Address:</strong>Karachi Sindh, Pakistan</h1>
          <h1 className="intro"> <strong>Phone:</strong> +923452117948</h1>
          <h1 className="intro"> <strong>WhatsApp</strong> +923452117948</h1>
           </div>

        <div className="img" style={{marginLeft:"20%"}} >
      <Image src={hbg} width={"500"} height={"500"} alt="logo" className="himg" />
          </div>
        </div>
      
      <button className="p" style={{marginRight:"7px"}} ><a href="/projects">Projects</a></button>
      <button className="ab" style={{marginRight:"7px"}} ><a href="/about">About</a></button>
      <button className="c" style={{marginRight:"7px"}} ><a href="/contact">Contact</a></button>
    </div>
  )
}
