import React from 'react'
import {  ListGroup, ListGroupItem } from 'reactstrap';

 const Menus=()=> {
  return (
    <div>
        <ListGroup>
            <ListGroupItem tag="a" href="/" action="Home">Home</ListGroupItem>
            <ListGroupItem tag="a" href="/add-course" action="Add Course">Add Course</ListGroupItem>
            <ListGroupItem tag="a" href="/view-course" action="View Course">View Course</ListGroupItem>
            <ListGroupItem tag="a" href="#!" action="About">About</ListGroupItem>
            <ListGroupItem tag="a" href="#!" action="Contact">Contact</ListGroupItem>
            
        </ListGroup>
    </div>
  )
} 
export default Menus;
