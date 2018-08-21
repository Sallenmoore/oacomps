import React from 'react';
import HeroBody from './HeroBody.js';
import HeroFoot from './HeroFoot.js';
import HeroHead from './HeroHead.js';

export default class Hero extends React.Component {
    //constructor sets up props (immutable)
    //and state (mutable)
    constructor(props) {
        super(props);
        this.state = {
            key: "value",
        };

        // this.handleClick = this.handleClick.bind(this);
    }

    render() {
        //this is the JSX object that will be rendered
        return (
            <section className="section is-paddingless hero is-primary is-bold" id="hero">
                <HeroHead
                    title={this.props.title}
                    menu_items={this.props.menu_items}
                />
                <HeroBody
                    hero_content={this.props.hero_content}
                />
                <HeroFoot
                    tabs = {this.props.tabs}
                />
            </section>
        );
    }
}
