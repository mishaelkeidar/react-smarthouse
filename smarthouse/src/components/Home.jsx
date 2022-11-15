import React from 'react'
import {useNavigate,Link} from 'react-router-dom'

export default function Home(props) {

  const nav = useNavigate()

  return (
    <div>
      {props.room.map((val)=>{
      return (
        <button style={{backgroundColor:val.color , height: 80 , width: 80 , fontSize: 30 , gap: 5}} onClick={()=>nav(`room/${val.name}`)}>{val.name}</button>
      )
})}
<br /><br />
        <Link to={'/addroom'}><button style={{backgroundColor: 'orange' , height: 65 , width: 65 , fontSize: 45 , color: 'white' , borderRadius: 50}}>+</button></Link>
    </div>
  )
}
