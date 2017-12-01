import { post, posts, pageposts } from './posts';
import { tags } from './tags';
import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { user, session } from './user';
import { popular } from './popular';
import { comments } from './comments';
import { postsBySubreddit, selectedSubreddit } from './reddit';

const reducers = combineReducers({
    tags,
    comments,
    popular,
    session,
    user,
    post,
    posts,
    pageposts,
    postsBySubreddit,
    selectedSubreddit,
    form: reduxFormReducer
});

export default reducers;
