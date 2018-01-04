import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import '../css/more.css';

export default class More extends Component{
    renderItem(item) {
      const { id, title, descr, img, price } = item; 
      return(
            <div className="more__info">
            <img src={img} alt=""/>
            <div className="title"> 
                <h1 className="title__name">{title}</h1>
                <p className="descr">
                    {descr}
                </p>
                <div className="wrap">
                    <Link to="/shop" className="back">Назад</Link>
                </div>
            </div>
        </div>           
       );
    }
        
    renderEmpty(){
        return (
                <div className="wrap">
                    <Link to="/shop" className="back">Назад</Link>
                </div>
        )
    }

    render(){
        const { id } = this.props.match.params;
        const item = this.props.items[id-1];
        return item ? this.renderItem(item) : this.renderEmpty();
    }
}