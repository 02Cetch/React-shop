import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

import cart from './img/cart.svg';
export default class Cart extends Component{
    constructor(props){
        super();
    }
    render(){
        var items = this.props.items; // записываем в переменную переданный массив с элементами
        var price = items.reduce((p, c) => p + c.price, 0) // извлекаем из items цену элемента
        return(
          <aside className="cart">
            <div className="wrapper">
            <img src={cart} alt=""/>
              <div className="priceOutput">
                <span className={price<2000? 'price' : 'price_red'}>{`${price ? price +'$' : 'Add item to cart' }` }</span>
                <hr/>
                <div className="cart_history">
                  <ul>{items.map((n, i) =>
                    <li key={i} className="item">{n.title}<i onClick={()=>this.props.onDelete(i)} className="material-icons">delete</i></li>)}
                  </ul>
                </div>
                <Button className="btn_submit">Submit</Button>
              </div>
            </div>
          </aside>            
        );
      }
    }
    Cart.propTypes = {
      onDelete: PropTypes.func.isRequired, // передаёт функцию, вызываемую при удалении
      items: PropTypes.array.isRequired // передаёт элементы из массива
    };