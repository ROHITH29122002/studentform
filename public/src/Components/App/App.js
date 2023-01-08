import React from 'react'
import styles from './App.module.css'
import Form from '../Form/Form'
import Students from '../Students/Students'
import logo from './rc logo.png'

function App() {
  return (
    <div>
      <div className={styles.nav_1}>
        <img className={styles.clglogo} src={logo} alt='clg'/>
        <h1>RC INSTITUTE OF TECHNOLOGY</h1>
      </div>
      <div className={styles.nav_2}>
        <h1>REGISTRATION FORM</h1>
      </div>
      <div className={styles.main_container}>
        <Form/>
        <Students/>
      </div>
    </div>
  )
}

export default App
