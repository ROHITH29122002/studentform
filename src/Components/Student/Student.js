import React from 'react'

function Student({student}) {
  const skills = student.skills;
  return (
    <div>
      <div>
        <h1>{student.name}</h1>
        <h1>{student.email}</h1>
        <h1>{student.sex}</h1>
        <h1>{student.website}</h1>
        {
          skills.map(element => {
            return <h1 key={element}>{element}</h1>
          })
        }
      </div>
      <div>
        <img src={student.img} alt="img"/>
      </div>
    </div>
  )
}

export default Student