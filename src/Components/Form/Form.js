import React, { useState } from 'react'
import styles from './Form.module.css'
import { v4 as uuidv4 } from 'uuid';

function Form({student,handleStudent}) {
    const [skills,setskills]=useState([]);
  return (
    <div className={styles.form_container}>
        <h1 className={styles.form_label}>Enrollment Form :</h1>
        <div className={styles.details_cont_1}>
            <div>
                <h1>
                    Name 
                </h1>
                <input
                type="text"
                onChange={e => {
                    student.name = e.target.value;
                }
                }
                />
            </div>
            <div>
                <h1>
                    Email 
                </h1>
                <input
                type="email"
                onChange={e => {
                    student.email=e.target.value;
                }
                }
                />
            </div>
            <div>
                <h1>
                    Website 
                </h1>
                <input
                type="url"
                onChange={e => {
                    student.website=e.target.value;
                }
                }
                />
            </div>
            <div>
                <h1>
                    Image 
                </h1>
                <input
                type="url"
                onChange={e => {
                    student.img=e.target.value;
                }
                }
                />
            </div>
        </div>
        <div className={styles.details_cont_2}>
            <h1 className={styles.gender_label}>
                Gender :
            </h1>
            <div className={styles.sex_input_container}>
                <input
                type="radio"
                value="Male"
                onChange={(e)=>{
                    student.sex=e.target.value;
                }
                }
                />
                <p>Male</p>
                <input
                type="radio"
                value="Female"
                onChange={e=>{
                    student.sex = e.target.value;
                }}
                />
                <p>Female</p>
            </div>
            <h1 className={styles.skills_label}>Skills :</h1>
            <div className={styles.skills_input_container}>
                <input 
                onChange={(e)=>{
                    setskills([...skills,e.target.value]);
                }} 
                type="checkbox" 
                value="HTML"
                />
                <p>HTML</p>
                <input 
                onChange={(e)=>{
                    setskills([...skills,e.target.value]);
                }}
                type="checkbox"
                 value="CSS"
                 />
                 <p>CSS</p>
                <input 
                onChange={(e)=>{
                    setskills([...skills,e.target.value]);
                }} 
                type="checkbox" 
                value="JS"
                />
                <p>JS</p>
            </div>
        <button 
        className={styles.enroll_btn}
        onClick={()=>{
            student.id=uuidv4();
            student.skills=skills;
            if(student.name.length<1){
                student.name=" ";
            }
            handleStudent(student);
            setskills([]);
            const input = document.querySelectorAll("input");
            input.forEach(i =>{
                i.value="";
            })
        }}>Enroll</button>
        <button
        className={styles.clear_btn}
        onClick={()=>{
            const input = document.querySelectorAll("input");
            input.forEach(i =>{
                i.value="";
            })
            student.name=" ";
        }}
        >
            Clear
        </button>
        </div>
    </div>
  )
}

export default Form