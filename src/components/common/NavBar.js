import { React, useState } from 'react';
import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
  Container
} from 'react-bootstrap';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as rootActions from '../../store/actions/rootActions';
import * as authActions from '../../store/actions/authActions';
import { auth } from '../../firebase/FirebaseConfig';

const NavBar = () => {
  const [userInput, setUserInput] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  const { currentUser } = auth;
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Link to="/">
          <Navbar.Brand>laescuela</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          ></Nav>
          {currentUser ? (
            <Navbar.Text className="mr-2">
              Hola 👋, {currentUser?.email}
            </Navbar.Text>
          ) : (
            <Form className="d-flex">
              <FormControl
                type="email"
                placeholder="Usuario"
                size="sm"
                style={{ margin: 5 }}
                onChange={(e) => setUserInput(e.target.value)}
                value={userInput}
              />
              <FormControl
                type="password"
                placeholder="contraseña"
                size="sm"
                style={{ margin: 5 }}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </Form>
          )}
          {currentUser ? (
            <Button
              variant="outline-warning"
              onClick={async () => {
                await dispatch(authActions.signOut());
                await dispatch(rootActions.resetApp());
                await history.push('/');
              }}
            >
              Logout
            </Button>
          ) : (
            <Button
              variant="info"
              onClick={async () => {
                await dispatch(authActions.signIn(userInput, password));
              }}
            >
              Login
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <Navbar bg="light" expand="lg">
    //   <Link to="/">
    //     <Navbar.Brand>Wiseass</Navbar.Brand>
    //   </Link>
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav className="align-items-center">
    //       {isSignedIn ? (
    //         <Navbar.Text className="mr-2">
    //           Hola 👋, {currentUser?.email}
    //         </Navbar.Text>
    //       ) : (
    //         <Form inline>

    //         </Form>
    //       )}

    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
  );
};

export default NavBar;
