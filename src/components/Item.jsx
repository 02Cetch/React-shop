import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import Button from './Button';

export default class Item extends Component{
    constructor(props){
        super(props);
        this.state={
          btn_children: 'ADD',
          item: []
        };
        this.onCartPriceChange = this.onCartPriceChange.bind(this);
        this.onCartPriceOver = this.onCartPriceOver.bind(this);
      }
      onCartPriceChange(){ // срабатывает при наведении курсора на кнопку
        this.setState({ btn_children: this.props.price + '$',})
      }
      onCartPriceOver(){ // срабатывает при уберании курсора с кнопки
        this.setState({btn_children: 'ADD'})
      }
      render(){
        return(
          <div className="shop__item">
            <img className="item" src={this.props.shirt} alt=""/>
            <div className="title">
              <Link to={`more/${this.props.itemId}`} className="descr">подробнее</Link>
              <Button onMouseOver={this.onCartPriceChange} onMouseOut={this.onCartPriceOver} onClick={()=> this.props.onCartPriceChange({price: this.props.price, title: this.props.title})} className="btn_buy">{this.state.btn_children}</Button>
            </div>
          </div>        
        );
      }
    }
    Item.propTypes = {
      title: PropTypes.string.isRequired, // используется для передачи названия объектов, переданных в Cart.jsx
      price: PropTypes.number.isRequired, // используется для передачи цены объектов, переданных в Cart.jsx
      onCartPriceChange: PropTypes.func.isRequired, // передаёт функцию, предназначенную для передачи данных объекта при клике на него 
      shirt: PropTypes.string // картинка товара
    };