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
  

    Lists=()=>{
       console.log("list")
       console.log(this.props.booksReducer)
       return this.props.booksReducer.results.map((data)=>{
      return   <Col sm="4">
        <Card >
          <CardImg top width="20%" src={data.urls.small} alt={data.alt_description} />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        </Col>
        
        
   
        })
      
    }


componentDidMount(){
    this.props.getBooksAction()
}

    render() {
       
      return (
        <div>
        <h1>Example</h1>
        <Button className='btn btn-danger' type="button" >
      Hello World
    </Button>
    <DeleteIcon  className={['test','clr']}  />

    <button className='btn btn-danger'  type="button">Hi</button>

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