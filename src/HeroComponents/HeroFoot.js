import React from 'react';

export default class HeroFoot extends React.Component {
    //constructor sets up props (immutable)
    //and state (mutable)
    constructor(props) {
        super(props);
        const pthis = this;
        this.state = {
            active: this.props.active,
            tabs: this.props.tabs.map(function(item, index){
                            return <li key={index} className={(item.active)?'is-active':''}>
                                        <a onClick={() => pthis.handleClick(index)}>
                                            {item.label}
                                        </a>
                                    </li>;
                        })
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(key){
        const pthis = this;
        this.setState({
            tabs: this.state.tabs.map(function(item, index){
                            return <li key={index} className={(index === key)?'is-active':''}>
                                        <a onClick={() => pthis.handleClick(index)}>
                                            {item.label}
                                        </a>
                                    </li>;
                        })
        });
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
