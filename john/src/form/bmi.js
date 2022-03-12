import { useState } from "react";
import React from "react";
import './form.css'

const BmiProj=()=>{
    const[weight,setweight]=useState('0')
    const[height,setheight]=useState('0')
    const[msg,setmsg]=useState('')
    const[bmi,setbmi]=useState('')

    const bmiCal=(e)=>{
        e.preventDefault()
    if(weight==0 || height==0){
        alert('Yo Enter')
    }else{
        let bmi=((weight)/(height*height))
      
        setbmi(bmi.toFixed(1))

        if(bmi<18.5){
            setmsg('You are under weight')
        }
        else if(bmi>=18.5 && bmi<24.9){
            setmsg('You are an healthy man')
        }else{
            setmsg('You are Overweight')
        }
        
          
    }
}

const reload=()=>{
    window.location.reload()
}

let imgsrc;
          if(bmi<1){
              imgsrc=null;
          }
          else if(bmi<18.5){
              imgsrc=require('../images/lean.jpg')
          }
          else if(bmi>=18.5 && bmi<24.9){
              imgsrc=require('../images/medium.jpg')
          }
          else {
              imgsrc=require('../images/fat.jpg')
          }   

return(
<div className="main">
<div className="container">
    <h1>Body Mass Index Calculater</h1>
    <form onSubmit={bmiCal}>
    <div>
    <label>Weight(kg):</label><input type='text' onChange={(e)=>setweight(e.target.value)}/>
    </div>
    <div>
    <label>Height:(m)</label><input type='text' onChange={(e)=>setheight(e.target.value)}/>
    </div>

    <div>
    <button className='btn btn-success btn-lg' type='submit'>Submit</button>
    <button className='btn btn-warning btn-lg' type='submit' onClick={reload} >Reset</button>
    </div>
    </form>
    <div>
    <h5>BMI : {bmi}</h5>
    <p>{msg}</p>
    <div className="img-container">
        <img src={imgsrc} height="350px" width="230px"/>
    </div></div>
</div>
</div>
)

}

export default BmiProj