/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Home.css'
import Card from '../Card/Card';

const Home = () => {
    const[allActor,setAllActor]=useState([])
    const[selectActors,setSelectActors]=useState([])
    const [remaining,setRemaining]=useState(0)
    const [totalCost,setTotalCost]=useState(0)


    useEffect(()=>{
        fetch('./data.json')
        .then(res=>res.json())
        .then(data=>setAllActor(data))
    },[])

    const handleSelectActor=(actor)=>{
        const isExist=selectActors.find(item=>item.id==actor.id)

            let count=actor.salary  
        if(isExist){
            alert("You Have Been Already Selected")

        }else{

            
            selectActors.forEach(item=>{
               return count= count+item.salary
            })
            const totalRemaining=50000-count
            
            if(count > 50000){
                 alert("You Have Not Any Money")
            }else{
                setTotalCost(count)
            setRemaining(totalRemaining)
            
            setSelectActors([...selectActors,actor])
            }
            
        }
        
    }
   
    return (
        <div className="container">
         <div className="home-container">
          <div className="card-container">
              {
               allActor.map(actor =>(
                <div className="card">
                <div className="card-img">
                    <img className='photo' src={actor.image} alt="" />
                </div>
                <h3>{actor.name}</h3>
                <p><small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, dolores.</small></p>
                <div className="info">
                    <p>Salary: ${actor.salary}</p>
                    <p>{actor.role}</p>
                </div>
                <button onClick={()=>handleSelectActor(actor)} className="card-btn">select</button>

            </div>
               ))
            }
          </div>
          <div className="cart">
          <Card
          selectActors={selectActors}
          remaining={remaining}
          totalCost={totalCost}
          ></Card>
          </div>
         </div>
        </div>
    );
};

export default Home;