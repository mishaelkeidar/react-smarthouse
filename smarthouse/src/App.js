import './App.css';
import {useState} from 'react'
import {HashRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Addroom from './components/Addroom';
import Room from './components/Room';

function App() {

  const [room,setRoom]=useState([]);

  const addNewRoom =(t,n,c)=>{
    setRoom([...room,{name:n,type:t,color:c,products:[]}])
  }

  const addNewProduct =(index,typeOfProduct)=>{
    let temp = {condition:false,type:typeOfProduct}
    room[index].products.push(temp)
    setRoom([...room])
    }

    const changeCondition = (indexOfRoom,indexOfProduct)=>{
      room[indexOfRoom].products[indexOfProduct].condition = !room[indexOfRoom].products[indexOfProduct].condition
      setRoom([...room])
      }
    
  return (
    <div className="App">
      <h1 style={{fontSize: 50 , color: 'white'}}>smart house</h1>
      <HashRouter>
      <Routes>
        <Route path='/' element={<Home room={room}/>}/>
        <Route path='/addroom' element={<Addroom addNewRoom={addNewRoom}/>}/>

        {/* loop that create a routes with the room names and send the data in props*/}
        {room.map((val,index)=>{
        return <Route path={`room/${val.name}`} element={<Room products={val.products} changeCondition={changeCondition} addNewProduct={addNewProduct} index={index} name={val.name} type={val.type}/>}/>
     })}

      </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
