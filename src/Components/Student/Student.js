import React from 'react'
import styles from './Student.module.css'

function Student({student}) {
  const skills = student.skills;
  return (
    <div className={styles.student_container}>
      <div>
        <img src={student.img} alt="img"/>
      </div>
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
    </div>
  )
}

export default Student