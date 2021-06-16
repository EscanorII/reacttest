import {Nav, Navbar} from "react-bootstrap";
import classes from "./Navigation.module.css"
import {Link} from "react-router-dom";

function Navigation() {
    return(
        <Navbar bg="white" expand="lg" className = {classes.nav}>
            <Navbar.Brand className = {classes.brand}>IINC</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className = {classes.collapse}>
                <Nav className="mr-auto">
                    <Nav.Link><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link><Link to="/favorite">Favorite</Link></Nav.Link>
                    <Nav.Link><Link to="/add">Add</Link></Nav.Link>
                    <Nav.Link><Link to="/info">Info</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )

}

export default Navigation;