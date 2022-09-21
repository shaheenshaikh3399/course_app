//import logo from './logo.svg';
import './App.css';

import { Button, Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./component/Home.js";
import Course from "./component/Course.js";
import AllCourse from './component/AllCourse';
import AddCourse from './component/AddCourse';
import Header from './component/Header';
import Menus from './component/Menus';


function App() {
  return (
    <div>
       <Router> 
        <Container>
          <Header />
           <Row> 
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>

              <Route path="/" component={Home} exact ></Route>
              <Route path="/add-course" component={AddCourse} exact ></Route>
              <Route path="/view-course" component={AllCourse} exact ></Route>
 

            </Col>
          </Row>

        </Container>
      </Router>
    </div>
  );

}

export default App;
