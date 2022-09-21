import React from 'react'
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container
} from "reactstrap";

const Course=({course}) => {


  return (
    <div>
        <Card>
            <CardBody>
                <CardSubtitle className="font-weight-bold">
                    {course.title}
                </CardSubtitle>
                <CardText> {course.description }</CardText>
                <Container className='text-center'>
                    <Button  color='danger m1-3' > Delete</Button>
                    {'   '}
                    <Button color='warning m1=3' >Update</Button>
                </Container>
            </CardBody>
        </Card>

    </div>
  )
}
export default Course;
