import React from 'react';
import { Card, CardBody, Row, Col } from 'reactstrap';
import img_grow from '../images/grow_atmos.jpg';
function Header({name,title}) {
    return(
        <div>
            
            
            
            <Card className=" bg-warning">
            <Row>
            <Col ms={4}>
            <img src={img_grow}/> 
            </Col>
            <Col ms={8}> 
            <CardBody>
            <h1>Atmos IT Solutions</h1>    
            </CardBody>
            </Col>
            </Row>
            </Card>
            
        </div>
    );
}

export default Header;