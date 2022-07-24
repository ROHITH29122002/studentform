import React, { useState } from 'react'
import styles from './App.module.css'
import Form from '../Form/Form'
import Students from '../Students/Students'

function App() {
  const [students,setstudents]=useState([]);
  const [student,setstudent]=useState({});
  console.log(students);
  function handleStudent(info){
    if(info.name!==" "){
      setstudent(info);
      handleAddStudent(student);
      setstudent({});
    }
  }
  function handleAddStudent(){
    setstudents([...students,student]);
  }
  return (
    <div>
      <div className={styles.nav_1}>
        <h1>RC INSTITUTE OF TECHNOLOGY</h1>
      </div>
      <div className={styles.nav_2}>
        <h1>Student Enrollment Form</h1>
      </div>
      <div className={styles.main_container}>
        <Form student={student} handleStudent={handleStudent}/>
        <Students students={students}/>
      </div>
    </div>
  )
}

export default App
