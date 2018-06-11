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
import Slider from "react-slick";
import "./App.scss";


export default class DownloadPage extends React.Component {
  render() {
      const settings = {
        speed: 500,
        rows: 2,
        slidesToShow: 2,
        slidesToScroll: 2
      };
      const settinngs2 = {
        speed: 500,
        slidesToShow:3,
        slidesToScroll:3
      }
     
    return (
<div className="RentS-Web">
<div class="conteiner">

<div className="RentS-Im-Box  ">   
<div class="row">
<div class="col-sm-12">

<Navbar inverse className="navStyleBlack">
  <Navbar.Header>
    <Navbar.Brand>
    <img className="picture" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbgAAAB7CAMAAAAxH2UvAAAAq1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Nr6iZAAAAOHRSTlMA8O7z5d7o2p9U1QhmyfnRxfUbYXAV4qTNaVi7teurBG0PjXqxhltDMCbLf7+adUcf15NRSzw1LHqDQ1sAAA5sSURBVHja7Nvpdqo6GIDhjxCIoowyOYAFxQHnOfd/ZafdS8sQQDxn//Asef51b4tdeRsIwUKj0Wg0Go1Go9FoNBqNRqPRaDQajUaj0Wg0Go3G+7IuM3O77Z9vY2j8b1i7aC3SHzrxzabd/0RPU2gG3iyg8eY6kUALrM/QeGdbTEv4zax7X8shrbCFxns60WrDDjTe0IQ+QyxovJ0tfU7cQ+PNmLQO9KZz7jJ/MOCznGg9BN7R+GOXUAaty4E3NBbpQx8+CqEFWgotMID3M8b0oQufZEULTOBKC+hveBX51HAWLRACwE6hLB/ezqeG21DWCr4Vz7kbvJsPDbekLBPgUU4LwzVNW8O7+dBwx6p9yRs9MjcLb3cz96HhRJrXh8TABOjmL39v5jPDzWheD3L6NEOAN/OZ4YY0ZwZsuKx327L8zHA2zToBY/Luj+aE1E//KfY0qw2sG6G11pWL8+6P8w3ujK+j47cCyJpvQ2cYu9q0FX7doMDtcaBlcmwzdEayu/bDbgcSne9XzXcefTjOv7+ez3cLKLQ8db9Ms989LeGZxeD7pf3ePPgvg3vudbvdXvsGzwWXQe9b+9qBWno041x80Gw5bgyFNHo3vQ9TqNAfBqRcV9mDaX0D8nx6t7kPgCnThPj1fJdVA9bFnBKOQxxCHBJG2znkzGPfelQzpzb/80Lek6PiMVkNR2Hyrf3NSD1Cxq3rSIhHCHFc7t1YwSmUMcf9vNbWolPn5ZuBssN3SJ2L3IjeOZnfCcWCX4spZSirALI2mQVsZ8VkCZ6FG7GTzUG8KGDEc981BII5brTLL9OwAT/2R5HHkkQEIqku4fj1CVij5MzTXv8cUhll3u6IeZEQ7HFIFA6YR6PydJ2+yiPhYHsIefZBQLzcg6dGNGUBZcaHGpsnv1FamWmjWNkiLDSoCLfzKMMeP8IptNAUcr48T0J27Ky+el3zOJIwkjDvW5DSVmILvnVt3iXIVtdDTRUQjmWs+xbktUTbhx/WVMdxfBAzs3yCOZVwguyEk9VmKHmiK3K+BYXOqk5UhNXpcbU6TlWMVIGXL/CEynQr1pFp4lIjnEaZcAtCyzil4baVM8qg9cJFiiSK0dWCu/0lIrqEhCsbrqUTW5e3V6MzDoxFb8SLcswJ57JwcwHJhPNk5ziDB2Ooq0SX+7fgca1rIeQi4QQFQt52eTu6GPfvvUQCr2K0qr0gQ1eo0hnSZ2u3aSrDmjLhTgottx4XhYvu3Vjzl8L1qMsNr5Cx32Js6+1MOAOCtXLQp7MgNSEcnWi2PisOd+Ltg65t5xYkFoSXObcbQMqlpUsC34W8sU9dG0U3SFlGoq0qrbr7JgFUSrcYPAm3gQ1lwl1pJa0o3GxJSwivhLMwwXIH8i6qgk7pcO4YportrSDLxKJGlF1RuAsviNIke2hDQLI+tSDH9ASJ9th1mOZJO8jZSaJMN1AF0zulb5rbGRS7bL++ekm49pNw2xtlwlkKTRGnYdSSM//kF4TbSLTMMnU3w3IhLdJdtASWNcyeKjVY6Ui9Qt5NQhrhb/lwU7AEkZsa+YvKd7cQWBdsq3quUaho3NoCRrBGGo2gwoGmoXpPfnbPrnExTTPyT9md6xh+WG1CE13m7Z5/QNdyHKfl6PRBdv7wt5BikAO3gqfa+nQl6MOgqLDradi1suGwAxuFj5ixUrSkW8YCEwHn10Oc1ileU3ixcq48/6XFUCyiGdeycCyk+ccg+5RdTHcPaWJfGk42z5fLwKEpWv2dk7mnitca4byY8MXDCJaANRrmZlzY9pQVm1/WfSg252PkQyLAAiEGlLyjLUgWlHKyA1Qv3LJmOH9y6TDXIrwv2widloRTH2fwmUJ/6akRfrJX2UaStKwTzhXwHootkKSiSyacOtLohr1vsolqQYlIkdPT6MgnXzLmKFZCKLX6N+GsOuH0o1F4rl2U/wS3wnBO8T7PovYmc5eT1H2tcNygfKB4mfMz4WQVu8z8NHVNKT9I4BKcrJ8Xuus5UOqoq7ZR8xOVcnpHZ+R3isN54xrh1gYkjKod6mTYo6JwIaS49Ne8drg+J0m1wpEYyqlExbd0uFhWTpAnC0JShjVQZP7CrJmKLUVXP0KZfUk4KZlZTLh1jV0Yp+QD7sq44ndHfAxK6eaVSX+da4ebcSqudarkIig3uS86knC2NoacixfrJpQLpAP3iGEQCY+gQsQRtVPvsY6ceUynl4SLnocblv1PCCyFPpyYcEIH0nb0V7t2uB2KvahGOMQPoFygHuxhJhw3g7wN5+IFVFjx0mM50lVkfgYV5rzrzaHM+vVwl6fh9ADSgiTNrfJZ7oYJdy79zPWgdjiLCDHfrxGOG0CFMBOlJR7cgHkn9YCnUGWBXb79OJ5K9lAhiA98ZEGJ8OVw3PhpuEnZyZCvfrQ0zYcj5RfEWe1w0KOxyh+Xz8PNoEKfl3UzFU4YMgNxtV1+C1UC+fD4HZraROtAlSMShmcocS2+OZpmRnnL1K0O1y57hK47rT82rcQmmfRqPtwEcqSCcB3xSTg4UlX2iN/dvxKOraJ6rUw4Zth3novOUGkkoBB+7CVJbEGlLn+Iu7X+cEBaPGiUUmW+uGvRlPB5uB5zN1EP18mF2/6dcLD1dEnFvOqHA+Pfhgs0Igyrw/WQivdQKeSwf98Bc/UvqDTnJcmEMhv6ouXL4Y60LuPvzDjWNZR08XCwOU5tTWbGq+Ee57Z1pzLclnPVyKzkk/spdie6Quur0pGoZAJlBvQ1NrwcbkPrWv6tcCzj6x/27nQ7URgMwPCXBIiibCIIVVBcUEBtcc39X9l0llYcJEbpmVOP8/ysbY/y2hhJpKEpEdfIFUTURpzcPDmBnkKXETdchlJNQly5Kf+uvw08k6JqGGPXNOQMKgXsJo1vEu6lIhxHtJ9MVYkohhogeem3/g6HbwjX44TjY/IpHLlCZxuoNGM3OcL3GCo54Xg6Bz+kCFPPJV73tnChVBgqexVDZZ7Zv7QrdePPobLnc4zedXm7jBbsFhpAncmJrjMOaVg7nIikmZlWkMr6NLohXGtJC6ezetKFcDH2ggTEHCSPZFBLym4wuiPcmn06OJ2/vZ04UDucoMjuYWqyZSQe7igbUgjccHPFQzGIcQzVnUItL0wcie4INy+EA6764cTFkmyylXg4m6Roxg+3kA08BkGhpBoO1BHpTNgM7gg3xOzD5vuEg4OrGkpSDLcFjhlJSZMfrqVRqrVAzIx40gJqmTBhyT3hIGQfyDcKB11LsyaiJ5lhIKuGww8HY6KhVxBj6xpZQy0tJiqEu8LZrHBTyTb6snA23OKNGkGjEI57gnhLUiWEK+EWiofGwi9ylHpDqGXDBL3dF64VcF4kXxgJ4+PXhBvBTaau0iuE88iO8+gCzVpfCwd9qXjSi29iaWQLtQyZmD7cFw78imXY0749d7Pv1A+nwW/RQnB+cBYuleWoeguIl6vR1XAx0awx50BDQRIYstr6J39yyb3hhoR9Ggyh4Hg66qv64dhyDxDNG1gHAcO+fDZUarnegwqpZOpjuBoONCUlr1AhdsdxIX5mmXoGFTppz0/gmhZmApZwbzjYsxM5hg/RWGefjneGA4kVyCph7zpi74GtdXGo7Hksq1oa0yjtCITbI8+lTtUiOmZKIVyLup61q5yhIXb4oonlm3g4/j7ApX3otJzjbhawEx/uDWewssKTY1B1bNaWJx0L4ZS9zy5vGRnpnsbawAtX3Jzch4t6lmZtoeDVMlw3gUtipOljuG4YiEwpa4QDjZ3Deum33xuuwbuz0Yohv2JSqeLB2Z6TOSwtMrtQWDdMKwShcMM+Mcng0k0ry7QacCbTNSU/QlnzPSl1QECbXaNHtcINqcC8575wc1amwB8L3TXINIGSjqF41rwYDsfg5ASFHTgTrYhhBkYkFg4cFZlYS0pfniLNWv79Iw3dlKRmeQBEKrX2X3TGMoNa4SBacheLaoQDwsqcz6zUSjEdJ3AuViWNZaWTzG+epaiZA5+GIw+lJlEdEAwHnVQ3FTk7v7VrYE03nQvr2B7FjQSKdn3iSWQOYhaMTxnWDAcwZlXWUCvcKyvrng5kT3dVko/tBD4kfg9RlW2gFA6cqS6TdPaSDAHgbTfpE9k09GUHhMNB1NNz1VpODqdPOw0smrMwgrKMSCnJZ6+fH7K1G4Hi6cYBRK0YVxNqh4OdyS7pH6BeOMj4A0TbtFwaEDqddeM49mchJZKB3Ir1uBkOKEZ5PwwHBiay5uFgDMAJV7bOLYMSd5rFzWacTSUi55a6hou2pk5VFCxndnP7sm6oRFFxsIlAnM44BnCVV3q2l9ke+5u2rd7LXjpgqOK05ERnRW7vAGdGfZm41MXoJyypMpHDpGoFfD9QiGrIriurXpoTpb+/uBmU9+a5s6LENdzf13hwVYUYGweqTDSkGPKv70VK/vOuzeEWTf7a9FVj88MOqh3HlJ0YWQIlE/ND+ROc2oc5nOmMA/aHvNlD2XEypQHGv8Jhtz9JAKq3LuxXOcaIEIQD4+Jvg2wabobA0RkNXIzJO4zlMHaAo9UM5d/fi7C0zJIvXFHtwhc6btvrSTbp2rsEvk5rbo+6o/Z2AVWSeTO222375XQJncoV8M7rS9v37Ze5A3dbbGPf99uxyMNMdrH/zt4e4HbOg13+vKZyuO94xWkhI1bhG16JGeB/uJN+1Vu4J/DQ4RzrWQfKBw8Hu8urOc/gscNBeGlG+RQePNxQKV+l5zk8eDhI2Dn0LP/w79HDQZudOcCTePhw54vVE3gWP9q7YxQEghiAoplyLd1O7BZLsRHM/U+mIMI29jvJezcIvwmkyCfcEnM77e+bbRQId86fEX0UCBfP435A2hHu76/b+QfpFu57Dr9FJzXCxTXzHq0UCReXR/SyjFEiXDtr5hrM57VtnZZoAAAAAAAAAADgyN5g9ImuYf34aAAAAABJRU5ErkJggg=="/>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavDropdown className="textN" eventKey={2} title="BUSINESS" id="basic-nav-dropdown">
        <MenuItem eventKey={2.1}>Action</MenuItem>
        <MenuItem eventKey={2.2}>Another action</MenuItem>
        <MenuItem eventKey={2.3}>Something else here</MenuItem>
        <MenuItem divider/>
        <MenuItem eventKey={2.3}>Separated link</MenuItem> 
        </NavDropdown>
      <NavItem className="textN" eventKey={3} href="#">
        BLOG
      </NavItem>
      <NavItem className="textN" eventKey={4} href="#">
        HELP
      </NavItem>
      <NavItem className="textN" eventKey={5} href="#">
        SCREEN TENANTS
      </NavItem>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
      <Button className="buttonLogIn " ><b>Log In</b>  </Button>
      </NavItem>
      <NavItem eventKey={2} href="#">
      <Button className="buttonSignUp" ><b>Sign Up</b>  </Button>
      </NavItem>
      <NavItem className="textN" eventKey={3} href="#">
        For Renters
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
</div> 
 <br /><br />
 <div class="row">
 <div class="col-sm-5 col-sm-offset-2 col-xs-9 col-xs-offset-1 text-xs-center">
 <br/><br/><br/><br/>
<h2><b>Verify Tenants at Light-Speed</b></h2>
<h4>RentSpree will simplify the rental process and land you better tenants.</h4>
<Button className="buttonn" ><b>Requrest a Demo</b>  </Button>
<h5><i>And I will call you within a few minutes - Michael Lucarelli</i></h5>
 </div> 
 </div> 
 </div> 
 
   <div className="RentS-Im-Box1"> 
       <br /><br /><br/>
       <div class="row">
          <div class="col-sm-10 col-xs-9 col-xs-offset-1 text-xs-center">
          <center><h2>We make leasing simple.</h2><p>Collect online rental applications and screen tenants in one step.</p></center><br/>
          </div>
       </div>
       <div class="row">
          <div class="col-sm-2 col-sm-offset-2 col-xs-9 col-xs-offset-1 box-xs-center">
          <img className="imPages" src="data:image/png;base64,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"/>
          <h4>1. Request applications</h4>
<h5>Enter your applicants' email addresses on RentSpree. Each renter will instantly receive an email to apply.</h5>
          </div> 
          <div class="col-sm-2 col-xs-9 col-xs-offset-1 box-xs-center">
          <img className="imPages" src="data:image/png;base64,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"/>
          <h4>2. Renters apply</h4>
<h5>Renters will receive a request to apply to your property. They fill out an online rental application and undergo screening.</h5>
          </div> 
          <div class="col-sm-2 col-xs-9 col-xs-offset-1 box-xs-center">
          <img className="imPages" src="data:image/png;base64,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"/>
          <h4>3. View, Print, and Share</h4>
<p>You can view the completed application and rental history with no additional tenant verification required.</p><br/><br/><br/><br/><br/><br/><br/><br/>
          </div> 
      </div> 
   </div> 

   <div className="RentS-Im-Box2"> 
       <br /><br />
       <div class="row">
          <div class="col-sm-4 col-sm-offset-2 col-xs-9 col-xs-offset-1">
          <br/>
 <h2>We built this for you.</h2><br/>
<p><b>Real Estate Agents</b> — start screening in 60 seconds. Limit your liability and gain instant access to screening reports.<br/><br/>
<b>Property Managers</b> — receive an online rental application for each unit and allow renters to apply wherever you share the link.<br/><br/>
<b>Landlords</b> — screen applicants within seconds using only the renter’s email address. Straightforward interface makes the process painless.Benefits to your applicants
 <br/><br/> </p>
<u><a className="font-link">Benefits to your applicants</a></u>
         </div>
         <div class="col-sm-4 col-xs-9 col-xs-offset-1">
         <br/>
  <h2>What's Included?</h2><br/>
<ul>
<li>Online Rental Application</li>
<li>Full TransUnion Credit Report</li>
<li>Criminal Background Check</li>
<li>National Eviction Report</li><br/>
<u><a className="font-link">Learn more</a></u>
</ul><br/><br/>
<img className="imPagesB2" src="https://www.rentspree.com/dist/5a6dfea788c4a681cb6dbfc2ee10c980.png"/>
         </div> 
       </div> 
    </div> 

 <div className="RentS-Im-Box3"> 
<div class="row">
<div class="col-sm-12 text-xs-center">

<Navbar className="navStyl">
  <Navbar.Header>
    <Navbar.Text>
    <h6>Want to see how RentSpree benefits your business?</h6>
    </Navbar.Text>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Navbar.Form pullLeft>
    <Button className="buttonn buttonnW" ><b>Requrest a Demo</b>  </Button>
    </Navbar.Form>
  </Navbar.Collapse>
</Navbar>
</div>
</div>
       <br /><br />
       <div class="row">
          <div class="col-sm-8 col-sm-offset-2">
          <br/>
 <center><h3><b>You're in great company.</b></h3></center><br/>
         </div> 
       </div> 
    </div> 

       <div className="RentS-Im-Box4"> 
       <br /><br />
       <div class="row">
          <div class="col-sm-3 col-sm-offset-2 col-xs-9 col-xs-offset-1 ">
          <br/>
<h3><b>Our Clients</b></h3><br/>
<p>We have partnered with some of the most trusted names in real estate, including the California Regional Multiple Listings Service, the largest MLS in the U.S., ziplogix™, the largest forms platform in the U.S. and various state and local REALTOR® associations.</p>
         <br/><br/><br/>
         </div> 

          <div class="col-sm-4 col-xs-9 col-xs-offset-1 ">
         
          <div>
            <br/><br/><br/>
        <Slider {...settings}>
          <div>
          <img className="imPagesB4" src="https://www.rentspree.com/dist/4cd7dde3c8b5d8e79aa5296a093ac9cd.png"/>
          </div>
          <div>
          <img className="imPagesB4" src="https://www.rentspree.com/dist/8d1f50749db396bd651f34c2d6d64672.png"/>
          </div>
          <div>
          <img className="imPagesB4" src="data:image/png;base64,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"/>
          </div>
          <div>
          <img className="imPagesB4" src="https://www.rentspree.com/dist/9a327d091e727ad2609504726fe7d927.png"/>
          </div>
          <div>
          <img className="imPagesB4" src="https://www.rentspree.com/dist/faa21bdccde9aaa232a294978c36f71c.png"/>
          </div>
          <div>
          <img className="imPagesB4" src="https://www.rentspree.com/dist/abd82f14058e247edca89e8d62f770cc.png"/>
          </div>
          <div>
          <img className="imPagesB4" src="data:image/png;base64,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"/>
          </div>
          <div>
          <img className="imPagesB4" src="https://www.rentspree.com/dist/b5f50fde7b78c0f047fd90d8c3fe68be.png"/>
          </div>
          <div>
          <img className="imPagesB4" src="https://www.rentspree.com/dist/ab1944c297bdbcdc9078e731f19cb16e.png"/>
          </div>
          <div>
          </div>
          <div>
          <img className="imPagesB4" src="https://www.rentspree.com/dist/ee8d067b47d5ad4057600ac9ae5e50ee.png"/>
          </div>
          <div>
          </div>
        </Slider>
      </div>

</div>
<br/><br/>
       </div> 
    </div> 


       <div className="RentS-Im-Box5 Box5-xs"> 
       <br /><br />
       <div class="row ">
          <div class="col-sm-3 col-sm-offset-2 col-xs-9 col-xs-offset-1 ">
          <br/><br/><br/>
<img className="imRxT" src="https://www.rentspree.com/dist/c6716c653466fecec93b0a3eb69929a2.png"/>
         </div> 
          <div class="col-sm-4 col-xs-9 col-xs-offset-1 ">
          <br/>
<h3><b>All-in-one online rental application platform</b></h3><br/>
<p>Faster access to reports and reduced liability. RentSpree has teamed up with trusted credit bureau TransUnion to give you a complete application and tenant verification package. Each package includes a full online rental application along with a TransUnion credit report, criminal background check, and national eviction report.</p>
         <br/><br/>
         </div> 
       </div> 
    </div> 

       
       <div className="RentS-Im-Footer"> 
       <br /><br />
       <div class="row">
          <div class="col-sm-4 col-sm-offset-2 col-xs-9 col-xs-offset-1 text-xs-center">
          <img className="Rents-Logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbgAAAB7CAMAAAAxH2UvAAAAq1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Nr6iZAAAAOHRSTlMA8O7z5d7o2p9U1QhmyfnRxfUbYXAV4qTNaVi7teurBG0PjXqxhltDMCbLf7+adUcf15NRSzw1LHqDQ1sAAA5sSURBVHja7Nvpdqo6GIDhjxCIoowyOYAFxQHnOfd/ZafdS8sQQDxn//Asef51b4tdeRsIwUKj0Wg0Go1Go9FoNBqNRqPRaDQajUaj0Wg0Go3G+7IuM3O77Z9vY2j8b1i7aC3SHzrxzabd/0RPU2gG3iyg8eY6kUALrM/QeGdbTEv4zax7X8shrbCFxns60WrDDjTe0IQ+QyxovJ0tfU7cQ+PNmLQO9KZz7jJ/MOCznGg9BN7R+GOXUAaty4E3NBbpQx8+CqEFWgotMID3M8b0oQufZEULTOBKC+hveBX51HAWLRACwE6hLB/ezqeG21DWCr4Vz7kbvJsPDbekLBPgUU4LwzVNW8O7+dBwx6p9yRs9MjcLb3cz96HhRJrXh8TABOjmL39v5jPDzWheD3L6NEOAN/OZ4YY0ZwZsuKx327L8zHA2zToBY/Luj+aE1E//KfY0qw2sG6G11pWL8+6P8w3ujK+j47cCyJpvQ2cYu9q0FX7doMDtcaBlcmwzdEayu/bDbgcSne9XzXcefTjOv7+ez3cLKLQ8db9Ms989LeGZxeD7pf3ePPgvg3vudbvdXvsGzwWXQe9b+9qBWno041x80Gw5bgyFNHo3vQ9TqNAfBqRcV9mDaX0D8nx6t7kPgCnThPj1fJdVA9bFnBKOQxxCHBJG2znkzGPfelQzpzb/80Lek6PiMVkNR2Hyrf3NSD1Cxq3rSIhHCHFc7t1YwSmUMcf9vNbWolPn5ZuBssN3SJ2L3IjeOZnfCcWCX4spZSirALI2mQVsZ8VkCZ6FG7GTzUG8KGDEc981BII5brTLL9Ow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"/> 
<h5 ><b>ABOUT US </b><a className="Inline" href="https://www.rentspree.com/about" target="_blank">About</a><font/>/
<a className="Inline" href="html_images.asp" target="_blank">Press </a><font/>/
<a className="Inline" href="html_images.asp" target="_blank">Help</a><font/>
</h5>

<h5 ><b>RESOURCES </b><a className="Inline" href="html_images.asp" target="_blank">Screen Tenants</a><font/>/
<a className="Inline" href="html_images.asp" target="_blank">Blog</a><font/>/
<a className="Inline" href="html_images.asp" target="_blank">Sitemap</a><font/>
</h5>

<h5 ><b>TALK TO US </b><a className="Inline" href="html_images.asp" target="_blank">Demo</a><font/>/
<a className="Inline" href="html_images.asp" target="_blank">Contact Us</a><font/>
</h5>
         </div> 
         <div class="col-sm-4 col-xs-9 col-xs-offset-1 text-xs-center">
         <h5><b>CONTACT US</b></h5><br/>
         <i class="icon-facebook white"></i>
         </div>
       </div> 
    </div> 


</div>        
</div>  
    )
  }
}