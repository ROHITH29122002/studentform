import React from 'react'
import Student from '../Student/Student'
import styles from './Students.module.css'

function Students({students}) {
  return (
    <>
    <div className={styles.students_container}>
    <h1>Enrolled Students : </h1>
      {
        students.map(student => {
          return <Student student={student} key={student.id}/>
        })
      }
    </div>
    </>
  )
}

export default Students