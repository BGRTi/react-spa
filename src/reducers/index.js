import { post, posts, pageposts } from './posts';
import { tags } from './tags';
import { popular } from './popular';
import { comments } from './comments';

const reducers = combineReducers({
    tags,
    comments,
    popular,
    session,
    user,
    post,
    posts,
    pageposts,
    form: reduxFormReducer
});

export default reducers;
