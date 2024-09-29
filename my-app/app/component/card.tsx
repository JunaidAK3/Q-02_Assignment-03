import React from 'react'

export const Card = (props:any) => {
    return(
        <div id = "cardContent">
            <h1>---------------------------------</h1>
            <h1>Name: {props.name}<br/></h1>
            <h1>Roll No.: {props.rollno}<br/></h1>
            <h1>Day: {props.day}</h1>
        </div>
    )
}