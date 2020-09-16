import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {FilterPage} from '../pages'
export default class AppRouter extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/category/:id" exact component= {FilterPage}/>
            </Switch>
        );
    }
}
