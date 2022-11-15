import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Addroom(props) {

    const [roomType,setRoomType] = useState('')
    const [roomName,setRoomName] = useState('')
    const [roomColor,setRoomColor] = useState('')

    const nav = useNavigate();

  return (
    <div>
        <select style={{height: 30 , width: 240}}
        onChange={(e) => {setRoomType(e.target.value)}}>
            {/* the value of the selected room type is roomType */}
            <option>choose a room</option>
            <option value={'Bedroom'}>Bedroom</option>
            <option value={'bathroom/toilet'}>bathroom/toilet</option>
            <option value={'kitchen'}>kitchen</option>
            <option value={'Livingroom'}>Living room</option>
            <option value={'office'}>office</option>
        </select>
        <br/>
        <input style={{height: 23 , width: 230}} onChange={(e)=>{setRoomName(e.target.value)}} type="text" placeholder='room name'/>
        <br />
        <input style={{height: 23 , width: 230}} onChange={(e)=>{setRoomColor(e.target.value)}} type="text" placeholder='room color'/>
        <br /><br />
        <button style={{fontWeight: 'bold' , backgroundColor: 'orange' , color: 'white' , height: 30 , width: 80 , borderRadius: 5}} onClick={()=>{
            if(roomName.length > 5 || roomName.length === 0){
            alert('ERROR')
            nav('/')
        }else{
            props.addNewRoom(roomType,roomName,roomColor)
            nav('/')
        }
        }}>create</button>
    </div>
  )
}
