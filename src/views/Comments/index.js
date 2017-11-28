import React, { PureComponent } from 'react';
import './Comment.scss';
class Comment extends PureComponent {
    render() {
        const { comments, user } = this.props;
        console.log(user);
        const commentList = comments.map(({ id, author_id, post_id, date, text }) => {
            return (
                <div key={id} className="app-comment">
                    <b>{author_id} - {post_id} Date: {date}</b>
                    <p>{text}</p>
                </div>
            );
        });

        return (
            <div className="app-comments">
                <h3>Comments:</h3>
                {commentList}
            </div>
        );
    }
}

export default Comment;
