import React from 'react';
import './navbar.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class Navbars extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.showMobilemenu = this.showMobilemenu.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    console.log("toggle");
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

 showMobilemenu(){
   console.log("show mobile");
  document.getElementById('main-wrapper').classList.toggle('show-sidebar');
 }

  render() {
    return (
      <div className='topbar'>
        <Navbar color="light" light expand="md">
        
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler  onClick={this.showMobilemenu}/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navbars