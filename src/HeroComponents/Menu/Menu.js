import React from 'react';
import MenuItem from './MenuItem.js';

export default class Menu extends React.Component {
    //constructor sets up props (immutable)
    //and state (mutable)
    constructor(props) {
        super(props);
        this.state = {
            menu_list: this.props.menu_items.map(function(item, index){
                            return <MenuItem
                                        key={index}
                                        label={item.label}
                                        link={item.link}
                                        icon={item.icon}
                                        start={item.start}
                                        type={item.type}
                                    />;
                        })
        };

        //bind this to methods
        //this.handleClick = this.handleClick.bind(this);
    }


    //TODO need ot be able to update active state or re-render menu
    // handleClick(){
    //     let list = this.props.menu_items.map(function(item){
    //         return <MenuItem
    //                     label={item.label}
    //                     link={item.link}
    //                     icon={item.icon}
    //                     start={item.start}
    //                     type={item.type}
    //                 />;
    //     });
    //     console.log(list);
    //     this.setState({
    //         menu_list : list
    //     });
    // }

    render() {
        //this is the JSX object that will be rendered
        //this.buildMenu();
        return (
            <div className="navbar-menu" id="navbar-menu-hero">
                <div className="navbar-end">
                    {this.state.menu_list}
                </div>
            </div>
        );
    }
}
