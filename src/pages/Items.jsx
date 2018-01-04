import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Item from '../components/Item';
import Cart from '../components/Cart';

import '../css/shop.css';
import '../css/keyload.css';

export default class Items extends Component{
    constructor(props){
        super();
        this.state ={
          items: [],
          itemId: 0
        };
        this.handleCartPriceChange = this.handleCartPriceChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
      }
      handleDelete(i){ // вызывается при нажатии на корзину в Cart.jsx    
      // создадим новый массив, что бы не мутировать предыдущий, 
      // после чего методом splice удалим элемент и запишем в state
        const newItems = [...this.state.items];
        newItems.splice(i, 1);
        this.setState({items: newItems})
      }
      handleCartPriceChange(item){  // вызывается для передачи данных об объекте из Item.jsx в Cart.jsx при клике на кнопку в Item.jsx
        this.setState({ items: [...this.state.items, item]});
      }
      render(){
        return(
          <div className="wrap">
            <Cart onDelete={this.handleDelete} items={this.state.items} />
            <section className="shop">
              <div className="wrap_container">
              {this.props.items.map(item =>
                <Item key={item.id} itemId={item.id} title={item.title} decr={item.descr} price={item.price} onCartPriceChange={this.handleCartPriceChange} handleItemId={this.handleActiveItemId} shirt ={item.img}/>
              )}</div>
            </section>
          </div>
        );
      }
    }
    Items.propTypes = {
      items: PropTypes.array.isRequired // передача массива с объектами
    };   