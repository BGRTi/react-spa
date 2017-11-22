import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import MainLayout from 'views/LayoutMain';
import Home from 'views/Home';
import Posts from 'containers/Posts';
import Post from 'containers/Post';
import User from 'containers/User';
import Profile from 'containers/Profile';
import SignUp from 'views/SignUp';
import About from 'views/About';

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
