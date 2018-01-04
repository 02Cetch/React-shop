import React, {Component} from 'react';
import '../css/contact.css';

class Contact extends Component{
    constructor(props){
        super(props);
        this.state={
            name: '',
            email: '',
        };
        this.handleEmailInput = this.handleEmailInput.bind(this);
        this.handleNameInput = this.handleNameInput.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        
    }
    handleNameInput(event){
        this.setState({name: event.target.value})
    }
    handleEmailInput(event){
            this.setState({email: event.target.value})
    }
    render(){
    return(
        <section className="contact">
            <form action= "#" method= "POST" onSubmit={this.handleSubmit}>
                <p>Name:</p><p> <input type= "text" name= "name" value={this.state.name} onChange={this.handleNameInput}/> </p> 
                <p>E-mail: </p><p> <input type= "text" name= "email" value={this.state.email} onChange={this.handleEmailInput}/></p> 
                <p>Message: </p><p> <textarea rows= "10" cols= "45" name= "message"></textarea></p> 
                <input type= "submit" value= "Отправить"/>
            </form>            
        </section>
    );
    }
}
export default Contact;