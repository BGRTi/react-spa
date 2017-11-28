import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pagination from 'views/Pagination';
import PreLoader from 'views/PreLoader';
import { getPostsPages } from 'actions/posts';
import {
    STATUS_ERROR,
    STATUS_LOADING,
    STATUS_DONE,
} from 'actions/actionConstants';

class PaginationContainer extends Component {
    loadPosts() {
        const postsPerPage = 4;
        const { dispatch } = this.props;
        const { id, tag } = this.props.match.params;
        const options = {
            tag,
            limit: postsPerPage,
            page: id,
        };

        dispatch(getPostsPages(options));
    }

    componentDidMount() {
        this.loadPosts();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params !== this.props.match.params ||
            prevProps.match.params.tag !== this.props.match.params.tag) {
            this.loadPosts();
        }
    }

    getContent() {
        const { status, posts } = this.props;
        const { id, tag } = this.props.match.params;
        switch (status) {
            case STATUS_ERROR:
                return <p>There was an error loading the items</p>;

            default:
            case STATUS_LOADING:
                return <PreLoader />;

            case STATUS_DONE:
                return <Pagination posts={posts} tag={tag} page={id} />;
        }
    }

    render() {
        return (
            <section className="articles">
                { this.getContent() }
            </section>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        posts: store.posts.items,
        status: store.posts.status
    };
};

export default connect(mapStateToProps)(PaginationContainer);
