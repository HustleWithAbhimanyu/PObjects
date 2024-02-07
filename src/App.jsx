import { useState } from 'react'

import './App.css'

function App() {
  const[typedName,setTypedName]=useState();
  const[random, setRandom]=useState(4);
  const[data, setData]=useState([
    {
      id :1,
      name :"Abhimanyu",
      like: 0,
      dislike:0,


  },{
    id:2,
    name:"Apple",
    like: 0,
    dislike:0,

  }
  
])

const Add=()=>{
  setRandom(random+1)
  setData((prev)=>[...prev ,{id:random , name:typedName , like:0, dislike:0}])

}
const handleDelte=(id)=>{
  setData(data.filter((prev)=>prev.id !==id))
}
const handleLike=(id,lik)=>{
  const newData = data.map(
    (item) => item.id === id ?{...item,like:lik+1}: item);

  setData(newData);

}
const handleDislike=(id,dis)=>{

  const new_data=data.map((item)=> item.id === id ? {...item , dislike :dis+1}:item);
  
  setData(new_data);
}

const handleSort= () => {
    const new_sort= [...data].sort((a, b)=>b.like - a.like)
    setData(new_sort);
}

  return (
    <div>
      <h2>Practice Objects</h2>  
      <div>
            <button onClick={handleSort} className='button'>SORT</button>
      </div>
      <input type="text" placeholder='write something ..... ' onChange={(e)=>setTypedName(e.target.value)}/>
      <button className='button' onClick={Add}>ADD ME </button>
      {data.map((ele)=>(
        <div key={ele.id} className="container">
          
          <h2>{ele.name}</h2>
          <p>Like- {ele.like} </p>
          <p>Dislike-{ele.dislike} </p>
          
          <button onClick={()=>handleLike(ele.id,ele.like)}>Like</button>
          <button onClick={()=>handleDislike(ele.id, ele.dislike)}>Dislike</button>
          <div>
          <button onClick={()=>handleDelte(ele.id)}>Delete</button>
          </div>
        </div>
         
       
      ))}

    </div>
  )
}

export default App
