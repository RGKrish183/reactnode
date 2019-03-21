import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getblogAction } from '../../redux/actions/blog';


class Blog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      this.props.getblogAction()
    return (<div>
      <h1>Blog component</h1>
      </div>
    );
  }
}


  
  const mapActionsToProps={
    getblogAction:getblogAction
   }

export default connect(null,mapActionsToProps)(Blog);
