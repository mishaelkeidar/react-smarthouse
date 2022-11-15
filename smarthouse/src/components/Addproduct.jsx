import React,{useState} from 'react'

export default function Addproduct(props) {

  const [product,setProduct]=useState('')

  const maxProduct = () => {
    props.products.forEach((val,index)=>{
    if(index > 3){
      changeproductsNumberFlag()
    }
  })
  }

  const changeproductsNumberFlag =()=>{
    props.setProductsNumberFlag(!props.productsNumberFlag)
}

  const validAddProduct = () => {
    if(props.productsNumberFlag === false){
      if(product === 'Stereo'){
        if(props.stereoFlag === false){
          props.addNewProduct(props.index,product)
          changeStereoFlag()
        }else{
          alert('error: you can add maximum one stereo')
        }
      }
      
      if(product === 'Water Heater'){
        if(props.type === 'bathroom/toilet'){
          props.addNewProduct(props.index,product)
        }else{
          alert('error: you can add Water Heater just in room from type bathroom/toilet')
        }
    }else if(product !== 'Water Heater'){
      if(product !== 'Stereo'){
        props.addNewProduct(props.index,product)
      }
    }
    maxProduct()
    }else if(props.productsNumberFlag === true){
      alert('error: the maximum products in room is 5')
    }
  }

  const changeStereoFlag =()=>{
    props.setStereoFlag(!props.stereoFlag)
}

  return (
    <div>
<select style={{height: 30 , width: 180}} onChange={(e)=>{setProduct(e.target.value)}}>
<option>choose a product</option>
  <option value="Air Conditioner">Air Conditioner</option>
  <option value="Water Heater">Water Heater</option>
  <option value="Stereo">Stereo</option>
  <option value="Lamp">Lamp</option>
  <option value="Computer">Computer</option>
  <option value="Bed">Bed</option>
  <option value="Table">Table</option>
</select>
<br />
<br />
<button style={{fontWeight: 'bold' , height: 40 , width: 65 , backgroundColor: 'orange' , color: 'white' , borderRadius: 5}} onClick={()=>{validAddProduct() ;  props.change()}}>add product </button>
    </div>
  )
}
