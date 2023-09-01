// import { useState } from "react"
import Menu from "../../components/menu"
import NodeList from "../../components/NoteList"

export default function Home(){
  // const [login,setLogin]=useState(false)
  // if(login){

  // }

  return (
    <header className="home">
      <Menu/>
      <NodeList/>
    </header>
  )
}
