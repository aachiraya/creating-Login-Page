import React from "react"
import { Button } from "react-bootstrap"
import { Navbar} from "react-bootstrap"
import { Nav} from "react-bootstrap"
import { NavItem} from "react-bootstrap"
import { NavDropdown} from "react-bootstrap"
import { MenuItem} from "react-bootstrap"

import { Glyphicon } from "react-bootstrap"
import logo from './logo.svg'
import "./App.scss";

export default class DownloadPage extends React.Component {
  render() {
    return (
<div className="Rents">
    <div className="RentS-Header">
        <div className="Inline">
          <img src={"https://go.crmls.org/wp-content/uploads/2017/06/logo-RentSpree-CRMLS.png"} className="RentS-logo" alt="logo-RentSpre"/>
        </div>  
        <div className="Inline">
          <div className="RentS-title">
              <h2 ><div className="title-bold">rent</div><div className="title-normal" >spree</div></h2>    
          </div> 
        </div>
    </div>
         
<Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">React-Bootstrap</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="#">
      Link
    </NavItem>
    <NavItem eventKey={2} href="#">
      Link
    </NavItem>
    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>Action</MenuItem>
      <MenuItem eventKey={3.2}>Another action</MenuItem>
      <MenuItem eventKey={3.3}>Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.4}>Separated link</MenuItem>
    </NavDropdown>
  </Nav>
</Navbar>
</div>      
    )
  }
}