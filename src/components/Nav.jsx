import React, {Component} from 'react';

import NavLink from './NavLink';

import '../css/main.css';
import $ from "jquery";

import logo from './img/logo.png';
export default class Nav extends Component{
    constructor(props){
        super();
        this.state = {
            active: null,
            links: ['Home', 'About us', 'Shop', 'Contact us'],
            href: ['/', 'about', 'shop', 'contact']
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(i){
        this.setState({active: i});
    }
    menuClick(){
        $(this.refs.ClickItem).slideToggle(500)
    }
    render(){
    return(
    <nav>
        <a href="#" className="menu-trigger" onClick={()=>this.menuClick()}>Open menu</a>
        <div className="container">
            <div className="logo clearfix">
            <img src={logo} alt=""/>
        </div>
        <div className="nav__items">
            <ul ref="ClickItem">
                    {   // из links[] , записанного в состоянии мы выводим li>NavLink, 
                        // в котором className меняется благодаря проверке состояния на равенство индексу элемента
                        // n - children
                        this.state.links.map((n, i)=> 
                        <li key={i}> 
                        <NavLink 
                            to={this.state.href[i]}
                            className={this.state.active === i ? ' active' : ''} 
                            onClick={()=>this.handleClick(i)}>
                        {n}
                        </NavLink> 
                        </li> )
                    }
            </ul>
        </div>
        </div>
    </nav>
    );
    }
}