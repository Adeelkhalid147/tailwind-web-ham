import { FC } from "react"

const Button:FC<{text:string}> = ({text}) => {

  return (
    <button className= " text-white bg-primary font-bold rounded-full p-2  text-lg shadow-lg hover:scale-110 duration-300 ">{text}</button>
  )
}

export default Button