// var li = document.createElement("li");
// li.innerHTML = "js 动态添加li";
// document.getElementById("root").appendChild(li);


import React from 'react';
import ReactDOM from 'react-dom';

import {Router,Route,hashHistory} from 'react-router';

import Home from './Home';
import About from './About/index';

// const routeConfig = {
// 	path:'/',
// 	component:Home,
// 	indexRoute: { component: Home },
// 	childRoutes: [
// 		{
// 			path: 'about',
// 			component: About,
// 		},
// 	]
// };
// 父子路由需要用这种方案接收 {this.props.children}

const routeConfig = {
	childRoutes:[
		{
			path: '/',
			component: Home,
		},
		{
			path: 'about',
			component: About,
		},
	]
}




ReactDOM.render((<Router history={hashHistory} routes={routeConfig} />), document.getElementById('root'));

// ReactDOM.render(<Home />, document.getElementById('root'));


// ReactDOM.render((
// 	<Router history={hashHistory}>
// 		<Route path="/" component={Home}/>
// 		<Route path="about" component={About}/>
// 	</Router>
// ), document.getElementById('root'));
