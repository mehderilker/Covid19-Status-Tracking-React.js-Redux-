import React , {Component} from 'react';
import '../App.css';
import {Provider} from "react-redux";
import store from '../stores/store'
import {RouterComp} from './Router'

class App extends Component {
    render() {

        /* const store = createStore(reducers,{},applyMiddleware(ReduxThunk));*/

        return (
            <Provider store={store}>
                <RouterComp/>
            </Provider>

        );
    }
}


export default App;
