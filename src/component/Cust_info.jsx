import axios from "axios";
import {Fragment, React, useEffect} from "react";
import { useState } from "react/cjs/react.development";
import form, { Input, Label } from "reactstrap";
import base_url from '../api/bootapi';

const Cust_info=()=>{
       
    useEffect(()=>{
       document.title="Add Customer Information"; 
    },[]);

    const [courses,setCourses]= useState({});

    const handleform1=(e)=>{
        console.log(courses);
        postdataserver(courses);
        e.preventDefault();

    };

    const postdataserver=(data)=>{
        axios.post(`${base_url}/courses`,data).then(
            (response)=>{
                console.log(response);
            },(error)=>{
                console.log(error);

            }
        )
    };

    return(
        <div>
        <form onSubmit={handleform1}>
        <Fragment>
            <h1 className="text-center my-3">
                Fill your details:
            </h1>
            <Label for="id" >Id</Label>
            <Input type="text" placeholder="Enter Id" name="id" onChange={(e)=>{setCourses({...courses,id:e.target.value});
            }}
            />
            <Label for="title" >Title</Label>
            <Input type="text" placeholder="Enter Address" name="title" onChange={(e)=>{setCourses({...courses,title:e.target.value});
            }}/>
            <Label for="description" >Description</Label>
            <Input type="text" placeholder="Enter Description" name="description" onChange={(e)=>{setCourses({...courses,description:e.target.value});
            }}> </Input>
            <Label for="phone" >Contact</Label>
            <Input type="text" placeholder="Enter Contact" name="phone" onChange={(e)=>{setCourses({...courses,phone:e.target.value});
            }}> </Input>

            

        </Fragment>
        <button className="btn btn-outline-success" type="submit">Submit</button>
        </form>
        
        </div>
        
    )

    
}  
export default Cust_info;