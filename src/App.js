import React, {Component} from 'react';
// import logo from './assets/images/logo.svg';
// import './assets/css/App.css';
// import Home from './components/Home'
// import News from './components/News'
// import Person from './components/Person'
// import Pic from './components/Pic';
// import TestEvent from './components/event/TestEvent';
// import List from './components/list/List';
// import Bind1 from './components/project/Bind1';
// import Bind from './components/bind/Bind';
// import Ray from './components/app/Ray';
// import TodoList from './components/test/work/TodoList';
// import TodoList2 from './components/test/work/TodoList2';
// import logo from './assets/images/logo.svg';
// import './assets/css/App.css';
// import Home from './components/Home'
// import  News from './components/News'
// import  Person from './components/Person'
// import Pic from './components/Pic';
// import Action from './components/action/Action';
import User from './components/test/sys/User';

//这里是根组件
class App extends Component {


    //render  模板        jsx    js 中写html
    render() {
        return (
            <div className="App">
                {/*<h3>你好</h3>*/}
                <hr/>
                {/*<Home></Home>*/}
                {/*<News/>*/}
                {/*<Person/>*/}
                {/*<Pic/>*/}
                {/*<TestEvent/>*/}
                {/*<List/>*/}
                {/*<Bind1/>*/}
                {/*<Bind/>*/}
                {/*<Ray/>*/}
                {/*<TodoList/>*/}
                {/*<TodoList2/>*/}
                <User/>
            </div>
        );
    }
}

export default App;
