import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {ListGroup} from "reactstrap";
import "./style.css";


const Menus =()=>{
    return( 
<ListGroup style={{ flex: 1, flexDirection: "row",justifyContent: 'space-between'}}>
     <Link tag="a" to="/home" action>
          Home
      </Link>
      <Link tag="a" to="/service" action>
          Service
      </Link>
      <Link tag="a" to="/courses" action>
          Courses
      </Link>
      <Link tag="a" to="/aboutus" action>
          About Us
      </Link>
      <Link tag="a" to="/contactus" action>
          Contact Us
      </Link>



{/* ----------------------Dropdown list for Courses---------------------------- */}
<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Courses
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    {/* <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a> */}
    <ListGroup>

    <Link tag="a" to="/c-language" action>
          C Language
      </Link>
      <Link tag="a" to="/core-java" action>
          Core Java
      </Link>
      <Link tag="a" to="/advance-java" action>
          Aadvance Java
      </Link>
      <Link tag="a" to="/web-dev" action>
          Web Development
      </Link>
    <Link tag="a" to="/spoken-eng" action>Spoken English</Link>
    </ListGroup>
  </div>
</div>
{/* ----------------------End of Dropdown list for Courses---------------------------- */}
</ListGroup>

    );
}

export default Menus;
