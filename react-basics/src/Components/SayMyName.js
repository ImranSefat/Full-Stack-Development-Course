import React from 'react'
import ComplexComponent from './ComplexComponent'
function SayMyName(props) {
    return (
        <div>
            <h3>My name is {props.name}. Age is {props.age}</h3>
            <h4>from {props.university}</h4>
            <ComplexComponent
                courses={
                    [
                        "CSE491",
                        "CSE422"
                    ]
                }
                name="Imran"
            />
        </div>
    )
}


function addMe(x, y) {
    return x + y
}

export default SayMyName
