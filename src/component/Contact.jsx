import axios from "axios";
import {Fragment, React, useEffect} from "react";
import { useState } from "react/cjs/react.development";
import form, { Input, Label } from "reactstrap";
import base_url from '../api/bootapi';

const Contact=()=>{
       
    useEffect(()=>{
       document.title="Add Customer Information"; 
    },[]);

    const [contact,setContact]= useState({});

    const handleform=(e)=>{
        console.log(contact);
        postdataserver(contact);
        e.preventDefault();

    };

    const postdataserver=(data)=>{
        
        axios.post(`${base_url}/contactus`,data).then(
            (response)=>{
                
                console.log(response);
            },(error)=>{
                console.log(error);

            }
        )
    };

    return(
        <div>
                    <p>22/37, Office No. 5,<br></br> 1st Floor, Balaji Nagar, Pune-411043.​​<br></br> Tel: +91 9970 195959​ <br></br>service@atmosacademy.com</p>

        <form onSubmit={handleform}>
        <Fragment>
            <h1 className="text-center my-3">
                Fill your details:
            </h1>
            <Label for="id" >Id</Label>
            <Input type="text" placeholder="Enter Id" name="id" onChange={(e)=>{setContact({...contact,id:e.target.value});
            }}
            />
            <Label for="Name" >Title</Label>
            <Input type="text" placeholder="Enter Name" name="name" onChange={(e)=>{setContact({...contact,name:e.target.value});
            }}/>
            <Label for="Email" >Email</Label>
            <Input type="text" placeholder="Enter Email" name="email" onChange={(e)=>{setContact({...contact,email:e.target.value});
            }}></Input>
            <Label for="Contact" >Contact</Label>
            <Input type="text" placeholder="Enter Contact" name="contact" onChange={(e)=>{setContact({...contact,contact:e.target.value});
            }}></Input>
            <Label for="Address" >Address</Label>
            <Input type="text" placeholder="Enter Address" name="address" onChange={(e)=>{setContact({...contact,address:e.target.value});
            }}></Input>
            <Label for="Subject" >Subject</Label>
            <Input type="text" placeholder="Enter Subject" name="subject" onChange={(e)=>{setContact({...contact,subject:e.target.value});
            }}></Input>
            <Label for="Message" >Message</Label>
            <Input type="text" placeholder="Enter the Message" name="message" onChange={(e)=>{setContact({...contact,message:e.target.value});
            }}></Input>
            

        </Fragment>
        <button className="btn btn-outline-success" type="submit">Submit</button>
        </form>
        
        </div>
        
    )

    
}  
export default Contact;