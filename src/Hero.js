import React, { Component } from 'react';

class Hero extends Component {
    render() {
        return (
            <div class="hero" id="highlighted">
                {this.props.children}
            </div>
        );
    }
}

export default Hero;
