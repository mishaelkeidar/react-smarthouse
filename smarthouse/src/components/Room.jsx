import React,{useState} from 'react'
import Addproduct from './Addproduct'

export default function Room(props) {

  const [flag,setFlag]=useState(false)
  const [stereoFlag,setStereoFlag]=useState(false)
  const [productsNumberFlag,setProductsNumberFlag]=useState(false)

  const show =()=>{
    if(flag === false){ 
        return <div>
            <Addproduct products={props.products} productsNumberFlag={productsNumberFlag} setProductsNumberFlag={setProductsNumberFlag} type={props.type} stereoFlag={stereoFlag} setStereoFlag={setStereoFlag} change={change} index={props.index} addNewProduct={props.addNewProduct}/>
        </div>
    }else{
        return <button style={{fontWeight: 'bold' ,  backgroundColor: 'orange' , height: 50 , width: 65 , color: 'white'}} onClick={change}>add product</button>
    }
    }

    const change =()=>{
        setFlag(!flag)
    }

  return (
    <div>
        <h3 style={{color: 'white' , fontSize: 20}}><span style={{color: 'orange'}}>room name: </span>{props.name}</h3>
        <h3 style={{color: 'white' , fontSize: 20}}><span style={{color: 'orange'}}>room type: </span>{props.type}</h3>

        {show()}

        <br /><br />

        {props.products.map((val,index)=>{
        let condition = val.condition ? 'green' : 'red'
        return <button  onClick={()=>{props.changeCondition(props.index,index)}}  style={{backgroundColor:condition}} >{val.type}</button>
})}
    </div>
  )
}
