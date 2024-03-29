import React, { useState,useEffect } from 'react'
import Student from '../Student/Student'
import styles from './Students.module.css'


function Students() {
  const [students,setstudents]=useState([]);
  useEffect(() => {
    const getdata = async () => {
      const response = await fetch("https://rc-student-registration.onrender.com/students")
      const data = await response.json();
      setstudents(data);
    }
    getdata();
  },[])

  return (
    <>
    <div className={styles.students_container}>
    <h1>ENROLLED :</h1>
      {
        students.map(student => {
          return <Student student={student} key={student._id}/>
        })
      }
    </div>
    </>
  )
}

export default Students