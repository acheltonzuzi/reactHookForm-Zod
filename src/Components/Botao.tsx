import { ReactNode } from "react"

interface MyProps{
    disable?:boolean
    children:ReactNode
    click?:()=>void
    
}

function Botao({disable,children,click}:MyProps) {
  return (
    <>
        <button disabled={disable} onClick={click}>{children}</button>
    </>
  )
}

export default Botao