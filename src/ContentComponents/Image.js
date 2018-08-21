import React from 'react';

export default class Content extends React.Component {
    //constructor sets up props (immutable)
    //and state (mutable)
    constructor(props) {
        super(props);
        this.state = {
            subtitle: (this.props.subtitle)?<h3 className="subtitle">{this.props.subtitle}</h3>:'',
            image: (this.props.image)?<img className="image" src={this.props.image} />:'',
        };
    }

    render() {
        //this is the JSX object that will be rendered
        return (
            <img className="image" src={this.state.image} />
        );
    }
}
