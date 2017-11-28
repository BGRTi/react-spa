import {
    GET_COMMENTS_REQUEST,
    GET_COMMENTS_SUCCESS,
    GET_COMMENTS_FAILURE,
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_FAILURE,
} from './actionConstants';

const url = '/data.json';

const getCommentsRequest = () => {
    return {
        type: GET_COMMENTS_REQUEST
    };
};

const getCommentsSuccess = (comments) => {
    return {
        type: GET_COMMENTS_SUCCESS,
        payload: comments
    };
};

const getCommentsFailure = () => {
    return {
        type: GET_COMMENTS_FAILURE
    };
};

const addCommentRequest = () => {
    return {
        type: ADD_COMMENT_REQUEST
    };
};

const addCommentSuccess = (data) => {
    return {
        type: ADD_COMMENT_SUCCESS,
        payload: data
    };
};

const addCommentFailure = () => {
    return {
        type: ADD_COMMENT_FAILURE
    };
};

export const getComments = (id) => {
    return (dispatch) => {
        dispatch(getCommentsRequest());

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.status);
                }

                return response;
            })
            .then(response => response.json())
            .then((response) => {
                let comments = response.comments.sort((a, b) => {
                    return b.date - a.date;
                });
                comments = comments.filter((comment) => {
                    return comment.post_id === id;
                });

                dispatch(getCommentsSuccess(comments));
            })
            .catch(response => dispatch(getCommentsFailure(response)));
    };
};

export const addComment = (values, dispatch, params) => {
    dispatch(addCommentRequest());
    values = {
        'post_id': params.post_id,
        'text' : values.notes
    };
    fetch('/add-comment', {
        method: 'put',
        body: JSON.stringify(values),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            if (response.status <= 200 && response.status > 300) {
                throw Error(response.status);
            }

            return dispatch(addCommentSuccess(response.status));
        })
        .catch(response => dispatch(addCommentFailure(response)));
};
