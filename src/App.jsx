import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import items from './item_db';

import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Items from './pages/Items';
import Contact from './pages/Contact';
import More from './pages/More';
import NotFound from './pages/NotFound';

class App extends Component{
    constructor(props){
        super(props);
    }
    handleItemIdReceiver(){
        this.setState({itemId: []})
    }
    render(){    
        return (
            <main>
                <Nav/>
                    <div className="content">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/shop" render={()=> <Items items={items} onSelectItemCallback={this.selectItem} />}/>
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/more/:id" render={props => (<More {...props} items={items}  />)} />
                        <Route component={NotFound} />
                    </Switch>
                    <Footer/>
                </div>
            </main>
        );
    }
}
export default App;