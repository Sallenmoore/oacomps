import React from 'react';

export default class Content extends React.Component {
    //constructor sets up props (immutable)
    //and state (mutable)
    constructor(props) {
        super(props);
        let columns= [];
        for(const col of this.props.columns){
            let column = <div className="column">

            </div>
        }
        this.state = {
            title: (this.props.title)?<h2 className="title">{this.props.title}</h2>:'',
            subtitle: (this.props.subtitle)?<h3 className="subtitle">{this.props.subtitle}</h3>:'',
            image: (this.props.image)?<img className="image" src={this.props.image} />:'',
            section: <div className="columns">

            </div>,
        };
    }

    render() {
        //this is the JSX object that will be rendered
        return (
            <section>
                <h2 className='title'>{this.props.title}</h2>
            </section>
        );
    }
}
