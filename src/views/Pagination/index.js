import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Pagination extends Component {
    render() {
        const { posts, tag, page } = this.props;

        let pagesCount;

        if (tag) {
            pagesCount = Math.ceil(posts.filteredLength / posts.limit);
        } else {
            pagesCount = Math.ceil(posts.length / posts.limit);
        }

        let pageLinks = Array.from(
            { length: pagesCount }, (v, k) => k + 1
        );

        const divStyle = {
            color: 'black',
            textDecoration: 'underline'
        };

        if (tag) {
            pageLinks = pageLinks.map((item) => {
                if (page == item) {
                    return (<Link key={item} style={divStyle} to={`/tag/${tag}/${item}`}>
                        {item}
                    </Link>);
                } else {
                    return (<Link key={item} to={`/tag/${tag}/${item}`}>
                        {item}
                    </Link>);
                }
            });
        } else {
            pageLinks = pageLinks.map((item) => {
                if (page == item) {
                    return (<Link key={item} style={divStyle} to={`/page/${item}`}>
                        {item}
                    </Link>);
                } else {
                    return (<Link key={item} to={`/page/${item}`}>
                        {item}
                    </Link>);
                }
            });
        }

        let pagination = <div className="pagination">
            {pageLinks}
        </div>;

        return (
            <div>
                {pagination}
            </div>
        );
    }
}

export default Pagination;
