import axios from 'axios';
import base_url from '../api/bootapi';
import {useEffect,useState} from 'react';

import Course from './Courses';


   const Allcourses=()=>{
       
        useEffect(()=>{
            getallcoursesfromserver();
        },[]);

        const [courses,setCourses] = useState([
           
        ]);
        
        const getallcoursesfromserver=()=>{
        axios.get(`${base_url}/courses`).then((response)=>{
            
            console.log(response);  
            setCourses(response.data);   
            },
            (error)=>{
                console.log(error);
            } 
            );         
           };
      return(
          <div>
              
              {courses.length > 0
                ? courses.map((item) => <Course key={item.id} course={item} />) 
                :"No courses"}
                
          </div>
      )     
   }
  
   export default Allcourses;