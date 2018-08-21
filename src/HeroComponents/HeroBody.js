import React from 'react';

export default class HeroBody extends React.Component {
    //constructor sets up props (immutable)
    //and state (mutable)
    constructor(props) {
        super(props);
        this.state = {
            key: "value",
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
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-narrow">
                            {this.props.hero_content}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
