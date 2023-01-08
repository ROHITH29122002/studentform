import React, { useState } from 'react'
import styles from './Form.module.css'

function Form() {

    const [skills,setskills]=useState({html:"",css:"",Js:""});
    const [student,setstudent] = useState({name:"",email:"",reg:"",img:"",sex:""});


    const handleinput = (e)=> {
        const key = e.target.name;
        const value = e.target.value;
        setstudent({...student,[key]:value});
    }

    const handleimageinput = (e) => {
        const key = e.target.name;
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            console.log(reader.result);
            setstudent({...student,[key]:reader.result})
        }
    }

    const postdata = async (e) => {
        e.preventDefault();
        const {name,email,reg,img,sex} = student;
        const {html,css,Js} = skills;
        const response = await fetch("/student",{
            method:'post',
            headers : {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                name,email,reg,img,sex,html,css,Js
            })
        })
        if(response.status === 400){
            window.alert("Error");
        }
        if(response.status===201){
            window.alert("Successful Registration");
        }
        window.location.reload();
    }

  return (
    <form  className={styles.form_container}>
        <h1 className={styles.form_label}>REGISTER :</h1>
        <div className={styles.details_cont_1}>
            <div>
                <h1>
                    NAME : 
                </h1>
                <input
                type="text"
                name='name'
                value={student.name}
                onChange={e => {
                    handleinput(e);
                }
                }
                />
            </div>
            <div>
                <h1>
                    EMAIL :
                </h1>
                <input
                type="email"
                name='email'
                value={student.email}
                onChange={e => {
                    handleinput(e);
                }
                }
                />
            </div>
            <div>
                <h1>
                    REG NO :
                </h1>
                <input
                type="text"
                name="reg"
                value={student.reg}
                onChange={e => {
                    handleinput(e);
                }
                }
                />
            </div>
            <div>
                <h1>
                    IMAGE :
                </h1>
                <input
                type="file"
                id='img'
                className={styles.img}
                name='img'
                onChange={e => {
                    handleimageinput(e)
                }
                }
                />
            </div>
        </div>
        <div className={styles.details_cont_2}>
            <h1 className={styles.gender_label}>
                GENDER :
            </h1>
            <div className={styles.sex_input_container}>
                <input
                type="radio"
                value="MALE"
                name='sex'
                onChange={(e)=>{
                    handleinput(e);
                }
                }
                />
                <p>Male</p>
                <input
                type="radio"
                value="FEMALE"
                name='sex'
                onChange={e=>{
                    handleinput(e);
                }}
                />
                <p>Female</p>
            </div>
            <h1 className={styles.skills_label}>Skills :</h1>
            <div className={styles.skills_input_container}>
                <input 
                onChange={(e)=>{
                    if(e.target.checked){
                        setskills({...skills,[e.target.name]:e.target.value});
                    }
                    else{
                        setskills({...skills,[e.target.name]:""});
                    }
                    setstudent({...student,skills});
                }} 
                name="html"
                type="checkbox" 
                value="HTML"
                />
                <p>HTML</p>
                <input 
                onChange={(e)=>{
                    if(e.target.checked){
                        setskills({...skills,[e.target.name]:e.target.value});
                    }
                    else{
                        setskills({...skills,[e.target.name]:""});
                    }
                    setstudent({...student,skills});
                }}
                name='css'
                type="checkbox"
                 value="CSS"
                 />
                 <p>CSS</p>
                <input 
                onChange={(e)=>{
                    if(e.target.checked){
                        setskills({...skills,[e.target.name]:e.target.value});
                    }
                    else{
                        setskills({...skills,[e.target.name]:""});
                    }
                    setstudent({...student,skills});
                }} 
                name='Js'
                type="checkbox" 
                value="JS"
                />
                <p>JS</p>
            </div>
        <button
        className={styles.enroll_btn}
        onClick={(e)=>{
            console.log(student);
            console.log(skills);
            postdata(e);
        }}>
            Enroll
        </button>
        <button
        className={styles.clear_btn}
        onClick={(e)=>{
            e.preventDefault();
            window.location.assign("/");
        }}
        >
            Clear
        </button>
        </div>
    </form>
  )
}

export default Form