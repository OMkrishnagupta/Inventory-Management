import React, { useEffect,useState } from 'react'



function StocksPage() {
  const [products, setProducts] = useState([]);
  

  useEffect(()=>{
    async function fetchData(){
       try { const response = await fetch("http://localhost:5000/api/stocks");
             const data = await response.json();
             setProducts(data);
         }
         catch(err){
             console.error('Error receiving the data', err);
         }}
         fetchData();
    },[]);
  return (<div class = "bg-yellow-500 min-h-screen">
    {products.map(item => (
            <Card name={item.name} stock={item.stock} price={item.price} key={item._id} />
          ))}
    </div>
  )
}


function Card(props){
  return (
    <div key={props._id} style={{display:"flex",flexDirection:"column", color:'white', fontSize:"20px", padding:"10px"}}>
      <h3 style={{padding:"10px"}}>Product Name: {props.name}</h3>
      <p style={{padding:"10px"}}>Available Stock: {props.stock}</p>
      <p style={{padding:"10px"}}>Price per Product: {props.price}</p>
    </div>
  )
}

export default StocksPage;