import React, { Component } from 'react';
import { connect } from 'react-redux';
import { booksAction,getBooksAction } from '../../redux/actions/products';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,Container,Row,Col } from 'reactstrap';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import './product.css';
import classNames from 'classnames';




class Products extends Component {
    constructor(props) {
      super(props);
    }
  



componentDidMount(){
    this.props.getBooksAction()
}

    render() {
       
      return (
        <div>
        <h1>Products component</h1>
        </div>
      );
    }
  }


  const mapStateToProps= state=>({
    booksReducer:state.booksReducer
  });
  
  
  
  const mapActionsToProps={
    getBooksAction:getBooksAction
   }

export default connect(mapStateToProps,mapActionsToProps)(Products);