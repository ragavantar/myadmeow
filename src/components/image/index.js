import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./styles.scss";

class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: "100%"
        }
    }

    touchHandler = (e) => {
        var rect = e.target.getBoundingClientRect();
        var x = e.touches[0].clientX - rect.left; //x position within the element.
        this.img.style.width = x + 'px';
        // this.img.style.width = (x / 4) + '%';
    }

    imgLoaded = () => {
        this.setState({ width: this.src.width + 'px' });
    }

    render() {
        const { bgImg, topImg } = this.props;
        return (
            <div
            className="container"
            style={{
                position: 'relative',
                width: '100%'
            }}
            onTouchStart={(e) => this.touchHandler(e)}
            onTouchMove={(e) => this.touchHandler(e)}
            >
                <img 
                style={{ width: '100%' }} 
                src={bgImg} 
                />
                <div 
                className="two" 
                ref={ref => this.img = ref} 
                alt="bg image"
                >
                    <img 
                    ref={ref => this.src = ref} 
                    onLoad={() => this.imgLoaded()} 
                    style={{ 
                        width: this.state.width 
                    }} 
                    src={topImg} 
                    alt="top image" />
                </div>
            </div>
        );
    }
}


export default Image;

Image.propTypes = {
    bgImg: PropTypes.string.isRequired,
    topImg: PropTypes.string.isRequired
}
