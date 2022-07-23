import React from 'react'

function Student({student}) {
  const skills = student.skills;
  return (
    <div>
      <div>
        <h2>{student.name}</h2>
        <h2>{student.email}</h2>
        <h2>{student.sex}</h2>
        <h2>{student.website}</h2>
        {
          skills.map(element => {
            return <h2 key={element}>{element}</h2>
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