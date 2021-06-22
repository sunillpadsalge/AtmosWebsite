import React,{Component} from "react";
import Card from "./cardsUI";
import img1 from '..images/atmos_logo.jpg';
import img2 from '..images/ATMOS ACADEMY.jpg';
class Cards extends Component {
     
     render() { 
       return (
           <div className="container-fluid d-flex justify-content-center">
               <div className="row">
                   <div className="col-md-4">
                   <Card imgsrc={img1} title="Atmos Academy"/>
                   </div>
                   <div className="col-md-4">
                   <Card imgsrc={img2} title="Arogyam Clinic"/>   
                   </div>
                   <div className="col-md-4">
                    <Card imgsrc={img1} title="Samarth Hostel"/>   
                   </div>
               </div>
           </div>  
       );
     }
 }
 export default Cards;