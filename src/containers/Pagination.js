import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pagination from 'views/Pagination';
import PreLoader from 'views/PreLoader';
import {
    STATUS_ERROR,
    STATUS_LOADING,
    STATUS_DONE,
} from 'actions/actionConstants';

class PaginationContainer extends Component {
    getContent() {
        console.log(this.props);
        const { page, tag } = this.props;

        switch (this.props.status) {
            case STATUS_ERROR:
                return <p>There was an error loading the items</p>;

            case STATUS_LOADING:
                return <PreLoader />;

            case STATUS_DONE:
                return <Pagination pages={this.props.posts} tag={tag} page={page} />;

            default:
                return <PreLoader />;
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
