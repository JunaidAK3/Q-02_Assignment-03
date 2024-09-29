import React from 'react'
import {Card} from './component/card'

export default function home() {
  return (
    
    <div>
      this is main page

      <Card name= {'abc'} rollno= {'12345'} day={'Monday'}/>
      <Card name= {'xyz'} rollno= {'23424'} day={'Tuesday'}/>
      <Card name= {'asd'} rollno= {'47536'} day={'Wednesday'}/>

    </div>
      
      
  );
}