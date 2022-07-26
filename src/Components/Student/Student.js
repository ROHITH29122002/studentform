import React from 'react'
import styles from './Student.module.css'

function Student({student}) {
  const skills = student.skills;
  return (
    <div className={styles.student_container}>
      <div className={styles.img_container}>
        <img src={student.img} alt="img"/>
      </div>
      <div className={styles.details_container}>
        <h3>{student.name}</h3>
        <h3>{student.email}</h3>
        <h3>{student.sex}</h3>
        <h3>{student.website}</h3>
        <div className={styles.skills_container}>
          {
            skills.map(element => {
              return <h3 key={element}>{element}</h3>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Student