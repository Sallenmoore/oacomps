import React from 'react';

/*
props:
    label=text label
    link= href link
    icon= font awesome icon class type and icon
    start= active or not
    type= button or text
*/

export default class MenuItem extends React.Component {
    //constructor sets up props (immutable)
    constructor(props) {
        super(props);
        this.state = {
            active: (this.props.start)?true:false,
            label: <span></span>
        };

    }

    componentDidMount() {
        //
        // class_name += ? " button is-inverted " : '';
        let icon = '';
        if(this.props.icon){
            icon = <span className="icon">
                        <i className={this.props.icon}></i>
                    </span>;
        }
        let label = (this.props.label)? <span>{this.props.label}</span> : '';
        if(this.props.type === 'button'){
            this.setState({
                    label : <span className="navbar-item">
                                <a className="button is-primary is-inverted" href={this.props.link}>
                                    {icon}
                                    <span>{label}</span>
                                </a>
                            </span>
            });
        }else{
            let class_name = "navbar-item" + ((this.state.active) ? " is-active" : '');
            this.setState({
                    label : <a className={class_name} href={this.props.link} >
                                {icon}
                                {label}
                            </a>
            });
        }
    }

    render() {
        return this.state.label;
    }
}
