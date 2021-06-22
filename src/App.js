import React,{Component} from 'react';
import {  Container,CardFooter, Row, Col, Card, CardBody} from 'reactstrap';
import Headers from "./component/Header";
import "./App.css";
import "./cards/card-style.css";
import Menus from './component/Menus';
import Home from './component/Home';
import Cust_info from './component/Cust_info';
import {BrowserRouter as Router, Route } from "react-router-dom";
import Allcourses from './component/Allcourses';
import Contact from './component/Contact';
import Header from './component/Header';
import Address from './component/Address';
import OneCourse from './component/OneCourse';
import C_Lang from './component/C_Lang';




class App extends Component {
  
    render() {

        return (  
            
              <Router>
              <Container>
                  <Headers/>
                <Row>
                   {/* <Col ms={3}> */}
                      {/* <Card style={{width:'100%'}}>
                          <CardBody>
                      
                          <Menus/>
                      
                      </CardBody>
                      </Card> */}
                      <CardBody>
                          <Menus/>
                      </CardBody>
                </Row>
                    {/*</Col> */}
                   {/* <Col ms={8}> */}
                      <Row>
                      <Card style={{width:'100%'}}>
                      <CardBody>
                            
                          <Route path="/home" component={Home} exact/>
                          <Route path="/service" component={Home} exact/>
                          <Route path="/courses" component={Allcourses} exact/>
                          {/* <Route path="/courses/id" component={OneCourse} exact/> */}
                          <Route path="/aboutus" component={Home} exact/>
                          <Route path="/contactus" component={Cust_info} exact/>
                          <Route path="/c-language" component={C_Lang} exact/>
                      
                      </CardBody>
                      </Card>
                    
                  </Row>
                  
                  
                      
                   <CardFooter style={{backgroundColor:'#E9ECEF'}}>
                      <Row>
                      <Col ms={3}> 
                        <Address/>
                      </Col>
                      <Col ms={8}>
                      <Cust_info/>      
                    </Col> 
                    </Row>
                  </CardFooter>
                
                  
                  
              </Container>
           
              </Router>      
              
        );
    }
}
 
export default App;