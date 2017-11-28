import React, { PureComponent } from 'react';
import PreLoader from 'views/PreLoader';
import Comment from 'views/Comments';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import { getComments, addComment } from 'actions/comments';
import {
    STATUS_ERROR,
    STATUS_LOADING,
    STATUS_DONE,
} from 'actions/actionConstants';

class Comments extends PureComponent {
    loadComment() {
        const { dispatch, post_id } = this.props;
        dispatch(getComments(post_id));
    }

    componentDidMount() {
        this.loadComment();
    }

    loadComments() {
        const { status, comments, dispatch, post_id, user } = this.props;
        const preLoaderComments = <div className="app-comments_preloader">
            <div className="circle"></div>
        </div>;

        if (comments === 200) {
            dispatch(getComments(post_id));
        }

        switch (status) {
            case STATUS_ERROR:
                return <p>There was an error loading the items</p>;

            case STATUS_LOADING:
                return preLoaderComments;

            case STATUS_DONE:
                return <Comment comments={comments} user={user} />;

            default:
                return <PreLoader />;
        }
    }

    render() {
        const { handleSubmit, pristine, reset, submitting, statusForm } = this.props;
        const commentForm = statusForm === STATUS_DONE ?
            (<form onSubmit={handleSubmit} className="comment-form">
                <div>
                    <label>Leave your comment here:</label>
                    <div>
                        <Field name="notes" component="textarea" />
                    </div>
                </div>
                <div className="app-comments_buttons">
                    <button type="submit" disabled={pristine || submitting}>
                        Submit
                    </button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>
                        Clear Values
                    </button>
                </div>
            </form>) :
            (<div>~</div>);
        return (
            <div className="comment-wrapper">
                <section>{this.loadComments()}</section>
                { commentForm }
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        comments: store.comments.items,
        status: store.comments.status,
        addStatus: store.comments.addStatus,
        statusForm: store.session.status,
        user: store.session.data
    };
};

Comments = connect(mapStateToProps)(Comments);

export default reduxForm({
    form: 'commentForm',
    onSubmit: addComment
})(Comments);
