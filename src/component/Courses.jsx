import react from 'react';
import {Card,CardBody,CardTitle,CardSubtitle,CardText,CardFooter,Button,Container,} from 'reactstrap';
//import clang from '../images/c.png';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Course=({course})=>{
return(
    <Card className="text-center">
        <CardBody>
        
            <CardSubtitle className="font-weight-bold">
                {course.title}
            </CardSubtitle>
            <CardText>
            {course.description}
            </CardText>
            <CardText>
            {course.syllabus}
            </CardText>
            <CardText>
            {course.phone}
            </CardText>
            <Container className="text-center" >
                <Link to='/home'>
                <button type="button" className="btn btn-info">Book Now</button>
                </Link>
                <Button color="warning">Syllabus</Button>
            </Container>
        </CardBody>
    </Card>
)
}
export default Course;