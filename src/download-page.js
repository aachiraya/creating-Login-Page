import React from "react"
import { Navbar} from "react-bootstrap"
import { Nav} from "react-bootstrap"
import { NavItem} from "react-bootstrap"
import { NavDropdown} from "react-bootstrap"
import { Glyphicon } from "react-bootstrap"
import { MenuItem} from "react-bootstrap"
import { FormControl} from "react-bootstrap"
import { FormGroup } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { ButtonToolbar } from "react-bootstrap"
import "./App.scss";

export default class DownloadPage extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {Fname: '',LName:'',PNum:''};
    this.FirstName = this.FirstName.bind(this);
    this.LastName = this.LastName.bind(this);
    this.PhoneNum = this.PhoneNum.bind(this);
  }
  FirstName(event) {
    this.setState({Fname: event.target.value});
  }

  LastName(event) {
    this.setState({LName: event.target.value});
  }

  PhoneNum(event) {
    this.setState({PNum: event.target.value});
  }

  render() {
    return (

<div className="RentS-Web">
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
 <Nav>
    <NavItem eventKey={1} href="#">
    <i class="glyphicon glyphicon-th-list"></i> Listing Application
    </NavItem>
    <NavItem eventKey={2} href="#">
    <i class="glyphicon glyphicon-list-alt"></i> Request Application
    </NavItem>
    <NavItem eventKey={1} href="#">
    <i class="glyphicon glyphicon-calendar"></i> Listing Application
    </NavItem>
    <NavItem eventKey={1} href="#">
    <i class="glyphicon glyphicon-th-list"></i> Transction Overview
    </NavItem>
  </Nav>
</Navbar>
<div class="container">
  <div className="RentS-Body">
  <br />
  <div class="row" >
  <div class="col-sm-6 col-sm-offset-3 col-xs-10">
  <h3>1.Creative register from</h3>
  <form onSubmit={this.handleSubmit}>
  <FormGroup>
    <FormControl type="text" placeholder="First name" onChange={this.FirstName} />
  </FormGroup>
  <FormGroup>
    <FormControl type="text" placeholder="Last name" onChange={this.LastName}/>
  </FormGroup>
  <FormGroup>
    <FormControl type="number" pattern="[0-9]*" placeholder="Phone number" onChange={this.PhoneNum} />
  </FormGroup>
  <hr/>
  Name  : {this.state.Fname} <font/><font/> { this.state.LName} <br />
  Phone Number : {this.state.PNum}
</form>
 
<h3>2.Select report to Download</h3>
</div>
  </div>
<ButtonToolbar>
  <div class="row">
    <div class="col-sm-2 col-sm-offset-3 col-xs-10">
<Button className="RentS-Box"><h1><i class="glyphicon glyphicon-file"></i></h1> 
Application<br/>received</Button></div>
    <div class="col-sm-2 col-xs-10">
<Button className="RentS-Box"><h1><i class="glyphicon glyphicon-home"></i></h1>
Details by<br/>property</Button></div>
    <div class="col-sm-2 col-xs-10">
<Button className="RentS-Box"><h1><i class="glyphicon glyphicon-credit-card	"></i></h1>
Revenue<br/>sharing</Button></div></div><br />
</ButtonToolbar>
 
  </div>
</div>         
</div>  
    )
  }
}