import React from 'react';

export default class HeroFoot extends React.Component {
    //constructor sets up props (immutable)
    //and state (mutable)
    constructor(props) {
        super(props);
        this.state = {
            tab: <li className={(this.props.active)?'is-active':'is-marginless'}>
                    <a onClick={() => handleClick(index)}>
                        {this.props.label}
                    </a>
                </li>;
        };
    }

    render() {
        //this is the JSX object that will be rendered
        return (
            <div className="hero-foot">
                <nav className="tabs is-boxed is-fullwidth">
                    <div className="container">
                        <ul>
                            {this.state.tabs}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
