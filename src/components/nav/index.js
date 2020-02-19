import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "./styles.scss";

const Data = {
    data: [
        {
            type: "label",
            text: "Label",
            url: ""
        },
        {
            type: "link",
            text: "Link",
            url: "/test"
        },
        {
            type: "menu",
            text: "Menu",
            sub: [
                {
                    text: "sub 1",
                    url: "/about"
                },
                {
                    text: "sub 2",
                    url: "/test"
                }
            ]
        }
    ]
}

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    toggleMenu = e => {
        e.target.classList.toggle('active')
    }

    getLabelElement = ele => <div className="label">{ele.text}</div>

    getLinkElement = ele => {
        return <div className="link"><Link to={ele.url}>{ele.text}</Link></div>
    }

    getMenuElement = ele => {
        return <div className="menu" onClick={e => this.toggleMenu(e)}>
            {ele.text} &#x25BE;
            <div className="sub">
                {
                    ele.sub.map(item => <div className="link"><Link to={item.url}>{item.text}</Link></div>)
                }
                <div className="link">Sub 1</div>
                <div className="link">Sub 2</div>
            </div>
        </div>
    }

    getElement = (data) => {
        if (data.type == "label") {
            return this.getLabelElement(data)
        }
        else if (data.type == "link") {
            return this.getLinkElement(data)
        }
        else if (data.type == "menu") {
            return this.getMenuElement(data)
        }

    }

    toggleMobileList = () => {
        this.list.classList.toggle('active')
    }
    render() {
        return (
            <div className="sidenav">
                <div className="mobile" onClick={() => this.toggleMobileList()}>&#9776;</div>
                {/* <div className="label">Label</div>
                <div className="link">Link</div>
                <div className="menu" onClick={e=>this.toggleMenu(e)}>
                    Menu
                    <div className="sub">
                        <div className="link">Sub 1</div>
                        <div className="link">Sub 2</div>
                    </div>
                </div> */}
                <div className="list" ref={ref => this.list = ref}>
                    {
                        Data.data.map(ele => {
                            return this.getElement(ele)
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Nav;