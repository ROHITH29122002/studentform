import React, { useState } from 'react'
import styles from './Form.module.css'
import { v4 as uuidv4 } from 'uuid';

function Form({student,handleStudent}) {
    const [skills,setskills]=useState([]);
  return (
    <div className={styles.form_container}>
        <div className={styles.details_cont_1}>
            <div>
                <h1>
                    Name :
                </h1>
                <input
                type="text"
                onChange={e => {
                    student.name=e.target.value;
                }
                }
                />
            </div>
            <div>
                <h1>
                    Email :
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
                    Website :
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
                    Image :
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
            <h1>
                Gender :
            </h1>
                <div>
                    <input
                    type="radio"
                    value="Male"
                    onChange={(e)=>{
                        student.sex=e.target.value;
                    }
                    }
                    />
                    <label>Male</label>
                    <input
                    type="radio"
                    value="Female"
                    onChange={e=>{
                        student.sex = e.target.value;
                    }}
                    />
                    <label>Female</label>
                </div>
            <label>
                Skills :
                <input 
                onChange={(e)=>{
                    setskills([...skills,e.target.value]);
                }} 
                type="checkbox" 
                value="HTML"
                />
                HTML
                <input 
                onChange={(e)=>{
                    setskills([...skills,e.target.value]);
                }}
                type="checkbox"
                 value="CSS"
                 />
                 CSS
                <input 
                onChange={(e)=>{
                    setskills([...skills,e.target.value]);
                }} 
                type="checkbox" 
                value="JS"
                />
                JS
            </label>
        </div>
        <button onClick={()=>{
            student.id=uuidv4();
            student.skills=skills;
            handleStudent(student);
            setskills([]);
        }}>Enroll</button>
    </div>
  )
}

export default Form