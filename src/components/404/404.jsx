import React, { Component } from 'react';

import img from '../../static/images/404.png'

class NotFound extends Component {
    render() {
        return (
            <div>
                <img src={img} alt=""/>
            </div>
        );
    }
}

export default NotFound;