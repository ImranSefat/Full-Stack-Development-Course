import React from 'react'

function ComplexComponent(props) {


    const data = props.courses.map((course) =>
        <li>{course}</li>
    )




    return (
        <div>
            my name is {props.name} <br />
            I took these courses <br />
            {
                props.courses.map((course) =>
                    <li>{course}</li>
                )
            }
        </div>
    )
}

export default ComplexComponent
