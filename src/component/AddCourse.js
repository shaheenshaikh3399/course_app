import React from 'react'
import {Button, Container, Form, FormGroup,Input} from 'reactstrap'


 const AddCourse=()=> {
  return (
    <div>
        <h3 className='text-center'> Fill Course Details</h3>
        <Form>
            <FormGroup>
                <label> Course Id</label>
                <Input type="text" placeholder='Enter Here' name="userId" id="userId"></Input>
                </FormGroup>
                <FormGroup>
                <label for ="title"> Course Title</label>
                <Input type="text" placeholder='Enter Title Here' id="title"></Input>
                </FormGroup>
                <FormGroup>
                <label for ="description"> Course Description</label>
                <Input type="textarea" placeholder='Enter Description Here' id="description"></Input>

                
            </FormGroup>
            <Container className='text-center'>
                <Button color="success">Add Course</Button>
                {" "}
                <Button color="warning" ml-2>Clear</Button>
            </Container>


        </Form>
        
    </div>
  )
}
export default AddCourse;
