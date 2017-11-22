import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import MainLayout from 'views/LayoutMain';
import Home from 'views/Home';
import loadAbout from 'bundle-loader?lazy!./views/About/index';
import loadPosts from 'bundle-loader?lazy!./containers/Posts';
import loadPost from 'bundle-loader?lazy!./containers/Post';
import loadUser from 'bundle-loader?lazy!./containers/User';
import loadSignUp from 'bundle-loader?lazy!./views/SignUp/';
import Bundle from './Bundle';

const About = (props) => (
    <Bundle load={loadAbout}>
        { (About) => <About {...props} /> }
    </Bundle>
);

const Posts = (props) => (
    <Bundle load={loadPosts}>
        { (Posts) => <Posts {...props} /> }
    </Bundle>
);

const Post = (props) => (
    <Bundle load={loadPost}>
        { (Post) => <Post {...props} /> }
    </Bundle>
);

const User = (props) => (
    <Bundle load={loadUser}>
        { (User) => <User {...props} /> }
    </Bundle>
);

const SignUp = (props) => (
    <Bundle load={loadSignUp}>
        { (SignUp) => <SignUp {...props} /> }
    </Bundle>
);

const Profile = (props) => (
    <Bundle load={loadProfile}>
        { (Profile) => <Profile {...props} /> }
    </Bundle>
);

export default (
    <BrowserRouter>
        <MainLayout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/posts" key="all" component={Posts} />
                <Route path="/page/:id" key="pages" component={Posts} />
                <Route path="/post/:id" component={Post} />
                <Route path="/signup" component={SignUp} />
                <Route path="/profile/" component={Profile} />
                <Route path="/user/:id" component={User} />
                <Route path="/tag/:tag" key="filtered" component={Posts} />
            </Switch>
        </MainLayout>
    </BrowserRouter>
);
