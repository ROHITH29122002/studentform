import React from 'react'
import Student from '../Student/Student'

function Students({students}) {
  return (
    <div>
      {
        students.map(student => {
          return <Student student={student} key={student.id}/>
        })
      }
    </div>
  )
}

export default Students