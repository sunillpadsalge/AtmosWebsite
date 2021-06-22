import React, { useEffect } from 'react';
import { Jumbotron, CardImg  } from 'reactstrap';
import img1 from '../images/atmos_logo.jpg';
import imgIT from '../images/IT.png';
import imglearn from '../images/learn_atmos.jpg';
import axios from 'axios';
import base_url from '../api/bootapi';
import Courses from './Courses';
import Allcourses from './Allcourses';

const Home=()=>{
    useEffect(()=>{
        document.title="Atmos Academy";
        },[]);
    
    return(

                
        <div>
            
                        <br/><br/>
                        <Jumbotron>
                        {/* <img src={imgIT} style={{height:"400px"}}/>  */}
                        <CardImg bottom width="100%" src={imgIT} alt="Card image cap" /> 
                        <h1>Atmos IT Solutions</h1>
                        <h2>Learn Programming languages</h2>
                        <p>Atmos Academy welcomes you to get well trained here in Pune and achieve excellence & mastery in any course that you select. We always appreciate the talent that lies within you & its our responsibility to empower you to achieve your goals.</p>
                    </Jumbotron>
                        
                    

                    <Jumbotron>
                    <img src={imglearn} style={{height:"200px"}}/><br/><br/>
                        <h2>WHY ATMOS</h2>
                        <p>Atmos provides Web solutions to get single access point for
                            different information. Our portal developers have both engineering skills and business touch to achieve complete goal as per the requirements. For portal development  we firstly require demands and input from the client and accordingly we work on the service. Our portal developers carry high-level skill set and expertise on B2B and B2C. We create websites which have good level of designing, are fully responsive and have best UI.
                            We believe that your ideas can be turned into solid reality.  
                        </p>
                    </Jumbotron>          

                    <Jumbotron>
                    <img src={imgIT} style={{height:"200px"}}/><br/><br/>
                    <h2>IT & Web Solutions</h2>
                        <p>Atmos provides Web solutions to get single access point for
                            different information. Our portal developers have both engineering skills and business touch to achieve complete goal as per the requirements. For portal development  we firstly require demands and input from the client and accordingly we work on the service. Our portal developers carry high-level skill set and expertise on B2B and B2C. We create websites which have good level of designing, are fully responsive and have best UI.
                            We believe that your ideas can be turned into solid reality.  
                        </p>
                    
                    
                    </Jumbotron>
                    
        </div>
    )
}




export default Home;  