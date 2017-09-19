import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import MainLayout from 'views/LayoutMain';

import Home from 'views/Home';
import About from 'views/About';
import SignUp from 'views/SignUp';
import Userpage from 'views/Userpage';
import PostsContainer from 'containers/Posts';
import PostContainer from 'containers/Post';

export default (
    <BrowserRouter>
        <MainLayout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/posts" component={PostsContainer} />
                <Route path="/post/:id" component={PostContainer} />
                <Route path="/signup" component={SignUp} />
                <Route path="/userpage/" component={Userpage} />
            </Switch>
        </MainLayout>
    </BrowserRouter>
);
