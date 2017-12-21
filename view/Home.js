import React from 'react'
import {Link} from 'react-router';

import './Home.scss';
class Home extends React.Component {

	componentDidMount(){

	}

	render() {
		return(
			<div id='homepage'>
				<div id="top">
					<div className="container clearfix">
						<div className="fl name myFontCH">万少博</div>
						<ul className="fr">
							<Link to='#'><li className="fr">ABOUT</li></Link>
							<a href="http://github.com/wanshaobo" target='_blank'><li className="fr">GITHUB</li></a>
							<a href="http://blog.csdn.net/wanshaobo888" target='_blank'><li className="fr">BLOG</li></a>
						</ul>
					</div>
				</div>
				<div id='about'>
					<div id='head'>
						<img src="../static/img/head.jpeg" alt=""/>
					</div>
					<div className="name center myFontCH">嗨，我是万少博</div>
					<div className="intro center myFontCH">我是一名前端开发工程师，2016年硕士毕业于西安建筑科技大学，热爱生活，更热爱技术；</div>
					<div className="intro center myFontCH">面对工作，尽职尽责，脚踏实地，用心细心；</div>
					<div className="intro center myFontCH">对待生活，与人为善，坦然从容，享受生命带来的乐趣；</div>
					<div className="intro center myFontCH">与你相遇，是彼此的缘分，还是命运的安排，我在这儿，你在哪儿？</div>
				</div>
				<div id='album'>
					<div className="title center myFontCH">本网站技术架构</div>'
					<ul>
						<li><img src="../static/img/git.png" alt=""/></li>
						<li><img src="../static/img/mongodb-logo.png" alt=""/></li>
						<li><img src="../static/img/nodejs.jpg" alt=""/></li>
						<li><img src="../static/img/sass.png" alt=""/></li>
						<li><img src="../static/img/webpack.jpeg" alt=""/></li>
						<li><img src="../static/img/react.png" alt=""/></li>
					</ul>
				</div>
				<div id='footer'>
					<div className='container clearfix'>
						<div className='wechat fl'><img src="../static/img/wechat-qrcode.jpg" alt=""/></div>
						<ul className='contact fr'>
							<li className='colorW myFontCH font22 title'>联系方式</li>
							<li className='colorW myFontEN font20 info'>tel：13161854871</li>
							<li className='colorW myFontEN font20 info'>email：565020807@qq.com</li>
							<li className='colorW myFontCH font20 info'>addr：中国·北京</li>
						</ul>
					</div>
				</div>
				<div id='website-info'>
					<div className='container'>
						<span className='text colorW myFontEN'>©  2017  </span>
						<a className='text colorW myFontEN' href="#">个人网站  </a>
						<a className='text colorW myFontEN' target="blank" href="http://www.miitbeian.gov.cn">京ICP备17060046号  </a>
						<span className='text colorW myFontEN'>网站地图</span>
					</div>
				</div>
			</div>
		)
	}
}

module.exports = Home;