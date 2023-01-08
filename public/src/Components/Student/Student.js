import React from 'react'
import styles from './Student.module.css'

function Student({student}) {
  return (
    <div className={styles.student_container}>
      <div className={styles.img_container}>
        <img src={student.img} alt="img"/>
      </div>
      <div className={styles.details_container}>
        <h3>{student.name}</h3>
        <h3>{student.reg}</h3>
        <h3>{student.sex}</h3>
        <div className={styles.skills_container}>
          <span>{student.html}</span>
          <span>{student.css}</span>
          <span>{student.Js}</span>
        </div>
      </div>
    </div>
  )
}

export default Student