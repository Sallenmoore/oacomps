import React from 'react';
import Menu from './Menu/Menu.js';

export default class HeroHead extends React.Component {
    //constructor sets up props (immutable)
    //and state (mutable)
    constructor(props) {
        super(props);
        this.state = {
            title: "Site Name",
        };

        // This binding is necessary to make `this` work in the callback
        // You have to be careful about the meaning of this in JSX callbacks.
        // In JavaScript, class methods are not bound by default.
        // If you forget to bind this.handleClick and pass it to onClick, this
        // will be undefined when the function is actually called.
        // i.e. this.handleClick = this.handleClick.bind(this);
    }

    render() {
        //this is the JSX object that will be rendered
        return (
            <div className="hero-head">
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <div className="navbar-item">
                                <img className="image" src="images/logo.png" alt="Logo" />
                                <p className="title"> {this.props.title} </p>
                            </div>
                            <div className="navbar-item">
                                <span className="navbar-burger burger" data-target="navbarMenuHeroB">
                                    <span></span><span></span><span></span>
                                </span>
                            </div>
                        </div>
                        <Menu menu_items={this.props.menu_items} />
                    </div>
                </nav>
            </div>
        );
    }
}
