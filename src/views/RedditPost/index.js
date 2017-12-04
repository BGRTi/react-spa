import React, {Component} from 'react';
import {connect} from 'redux';

class RedditPost extends Component {
    constructor(props) {
        super(props);
        this.state = {showInfo: false};
    }

    onHover = () => {
        this.setState({
            showInfo: true
        });
    };

    onOut = () => {
        this.setState({
            showInfo: false
        });
    };

    render() {
        const {post} = this.props;
        const symbolsAmount = 300;

        const divStyle = {
            color: 'black',
            backgroundColor: 'white',
            padding: '5px'
        };

        return (
            <a href={post.url}>
                <li onMouseOver={this.onHover} onMouseOut={this.onOut}>
                    {post.title}
                    {this.state.showInfo ? <p style={divStyle}> {post.selftext.slice(0, symbolsAmount)}
                        {post.selftext.length ? '...' : null}<br/>
                        <small> Author: {post.author}</small>
                    </p> : null}
                </li>
            </a>
        );
    }
}

export default RedditPost;
