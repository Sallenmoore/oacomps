import React from 'react';
import ReactDOM from 'react-dom';
import Hero from './HeroComponents/Hero.js';
import Content from './ContentComponents/Content.js';
import Footer from './FooterComponents/Footer.js';
import './style/main.scss';

function App(props){
    //React.Fragment - because you must return a single parent DOM element
    const hero_data = {
        menu : [
            {label:'Item A', link:''},
            {label: 'Item B', link:'', type:'text', icon:'fas fa-address-book', start:true},
            {label: 'Item C', link:'', type:'button', icon:'fas fa-address-book'},
            {label: 'Item D', link:'', type:'button'},
            {icon: 'fas fa-address-book', link:'', type:'button'},
            {icon: 'fas fa-address-book', link:'', type:'text'}
        ],
        title : "Site Title",
        content : <p>This is some content</p>,
        tabs : [
            { label: 'Tab A', view: 'view-a' },
            { label: 'Tab B', view: 'view-b' },
            { label: 'Tab C', view: 'view-c', active:true },
        ]
    }
    const content_data = {
        content:{image: '', title:'Title', subtitle:'Subtitle', isTabbedContent:false,
            columns:[
                {image: '', title:'Column A', subtitle:'Subtitle A', text:'', classes:''},
                {image: '', title:'Column B', subtitle:'Subtitle B', text:'', classes:''},
                {image: '', title:'Column 4', subtitle:'Subtitle C', text:''},
            ]
        },
        table: {rows: 1, columns:1},
        media: {image: '', title:'', subtitle:'', text:''},
        form: {},
        calendar:{}
    }
    return (
        <React.Fragment>
            <Hero
                menu_items = {hero_data.menu}
                title = {hero_data.title}
                hero_content = {hero_data.content}
                tabs = {hero_data.tabs}
            />
            <Content
                image={content_data.content.image}
                title={content_data.content.title}
                subtitle={content_data.content.subtitle}
                isTabbedContent={content_data.content.isTabbedContent}
                columns={content_data.content.columns}
            />
            <Footer />
        </React.Fragment>
    );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
