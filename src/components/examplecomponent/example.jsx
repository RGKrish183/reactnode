import React, { Component } from 'react';
import { connect } from 'react-redux';
import { exampleAction } from '../../redux/actions/example';


class Examples extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      this.props.exampleAction("action was called")
    return (<div>
      <h1>Example</h1>
      <h2>{this.props.exampleaction}</h2>
      </div>
    );
  }
}


const mapStateToProps= state=>({
    exampleaction:state.exampleaction
  });
  
  
  
  const mapActionsToProps={
    exampleAction:exampleAction
   }

export default connect(mapStateToProps,mapActionsToProps)(Examples);
