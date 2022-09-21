import React, { useState } from 'react'
import Course from "./Course";

const AllCourse =()=> {
    const [courses, setCourses]= useState([
        {title:"Django Course", description:"This is Django course"},
        {title:"Python Course", description:"This is Python course"},
        {title:"Java Course", description:"This is Java course"},
        {title:"React Course", description:"This is React course"}

    ])
  return (
    <div>
    <h4>All Course</h4> 
    <p> List of Courses are as follows</p>  
    {
        courses.length>0 ? courses.map((item)=>(<Course course={item} />)): "No Courses Available"
    }
    
     </div>
  )
}
export default AllCourse;
