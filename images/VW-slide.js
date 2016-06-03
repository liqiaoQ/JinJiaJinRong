/*================================================
 * VW-slide.js
 * 轮播
 *===============================================*/
'use strict';
if (!window.VW) VW = window.VW = {};

/**
 * @description 描述
 * @example 参数使用
 */
VW.slide = function(config) {
	
	// 参数配置
	var c_elem = config.elem,
		c_item = parseInt(config.tabItem) || 1,
		c_time = parseInt(config.animateTime) || 300,
		c_interval = parseInt(config.slideInterval) || 1500,
		c_switch = config.showSwitch == false ? false : true,
		c_navigation = config.showNavigation == false ? false : true,
		c_run = config.autoRun == false ? false : true,
		c_loop = config.loop == false ? false : true,
		c_navigationLeft = config.navigationLeft || '50%',
		c_navigationTop = config.navigationTop || '95%',
		c_switchLeft = config.switchLeft || '5%',
		c_switchTop = config.switchTop || '50%';
	
	// element
	var elem = {};
	elem.tab = getElemsByClassName(c_elem, 'ul', 'VW-slide-tab')[0];
	elem.tab_li = elem.tab.getElementsByTagName('li');
	
	// 如果轮播数小于 2，轮播数 <= 展示数，则不启用
	if (elem.tab_li.length < 2 || elem.tab_li.length <= c_item) return false;
	
	// 如果展示数 > 1，则不显示 navigation
	if (c_item > 1) c_navigation = false;
	
	// getElementsByClassName 兼容
	function getElemsByClassName(parentElem, tag, className) {
		if (!!document.querySelectorAll) return parentElem.querySelectorAll(tag + '.' + className);
		
		var _nodes = parentElem.getElementsByTagName(tag),
			_classList = [];
		
		for (var i = 0; i < _nodes.length; i ++) {
			if (_nodes[i].className == className) _classList.push(_nodes[i]);
		}
		
		return _classList;
	}
	
	// 加载样式文件
	function includeCss() {
		var js = document.getElementsByTagName('script');
		
		for (var i = 0; i < js.length; i ++) {
			if (/VW-slide.js$/.test(js[i].src)) {
				var css = document.createElement('link');
				css.rel = 'stylesheet';
				css.type = 'text/css';
				css.href = js[i].src.replace(/VW-slide.js$/, 'style.css');
				
				document.head.appendChild(css);
			}
		}
	}
	
	// 获取 elem 最终样式
	function getStyle(elem, css) {
		if (!!window.getComputedStyle) {
			return window.getComputedStyle(elem, false)[css];
		} else {
			return elem.currentStyle[css];
		}
	}
	
	// 生成 switch element
	function addSwitch() {
		function elemSwitch(className) {
			var _elem = document.createElement('a');
			_elem.className = className;
			_elem.href = 'javascript:;';
			return _elem;
		}
		
		var _switchLeft = elemSwitch('VW-slide-switch-left'),
			_switchRight = elemSwitch('VW-slide-switch-right');
		
		_switchLeft.style.left = c_switchLeft;
		_switchLeft.style.top = c_switchTop;
		_switchRight.style.right = c_switchLeft;
		_switchRight.style.top = c_switchTop;
		
		c_elem.appendChild(_switchLeft);
		c_elem.appendChild(_switchRight);
	}
	
	// 生成 navigation element
	function addNavigation() {
		var _nav = document.createElement('ul'),
			_inner = '<li class="active"></li>';
			
		for (var i = 0; i < elem.tab_li.length - 1; i ++) {
			if (i == elem.tab_li.length - 2) {
				_inner += '<li style="margin-right: 0;"></li>';
			} else {
				_inner += '<li></li>';
			}
		}
		_nav.className = 'VW-slide-navigation';
		_nav.innerHTML = _inner;
		_nav.style.left = c_navigationLeft;
		_nav.style.top = c_navigationTop;
		
		c_elem.appendChild(_nav);
	}
	
	// 样式初始化
	function setStyle() {
		var elemWidth = parseInt(getStyle(c_elem, 'width')),
			elemTabLiWidth = elemWidth / c_item;
		
		elem.tab.style.width = elem.tab_li.length * elemTabLiWidth  + 'px';
		for (var i = 0; i < elem.tab_li.length; i ++) {
			elem.tab_li[i].style.position = 'absolute';
			elem.tab_li[i].style.width = elemTabLiWidth + 'px';
			elem.tab_li[i].style.left = elemTabLiWidth * i + 'px';
		}
	}
	
	var p_current = 0;
	
	// 动画
	function animate(elem, css, target, time, callback) {
		var _interval = 30,
			_cssCurrent = parseInt(getStyle(elem, css).match(/^[0-9-]+/)[0]),
			_unit = getStyle(elem, css).match(/[a-zA-Z]+$/)[0],
			_cssTarget = parseInt(target.match(/^[0-9-]+/)[0]),
			_times = parseInt(time / _interval),
			_cssChange = (_cssTarget - _cssCurrent) / _times,
			_timer = 1;
		
		elem.isAnimate = true;
		clearInterval(elem.animateInterval);
		elem.animateInterval = setInterval(function() {
			if (_timer < _times) {
				elem.style[css] = (_cssCurrent + _cssChange * _timer) + _unit;
				_timer ++;
			} else {
				elem.style[css] = target;
				clearInterval(elem.animateInterval);
				elem.isAnimate = false;
				if (callback) callback();
			}
		}, _interval);
	}
	
	// 停止动画
	function stop(elem) {
		clearInterval(elem.animateInterval);
		clearInterval(elem.slideInterval);
	}
	
	// 轮播
	function slide(callback) {
		elem.width = parseInt(getStyle(c_elem, 'width'));
		elem.distance = elem.width / c_item;
		
		if (c_navigation) {
			elem.navigation = getElemsByClassName(c_elem, 'ul', 'VW-slide-navigation')[0];
			elem.navigation_li = elem.navigation.getElementsByTagName('li');
			
			for (var i = 0; i < elem.navigation_li.length; i ++) {
				if (i == p_current) {
					elem.navigation_li[i].className = 'active';
				} else {
					elem.navigation_li[i].className = '';
				}
			}
		}
		
		animate(elem.tab, 'left', - elem.distance * p_current + 'px', c_time, function() {
			if (callback) callback();
		});
	}
	
	// 自动轮播
	function autoRun() {
		elem.tab.slideInterval = setInterval(function() {
			if (p_current == elem.tab_li.length - c_item) {
				p_current = 0;
			} else {
				p_current ++;
			}
			
			slide();
		}, c_interval);
	}
	
	// 绑定 switch 切换按钮
	function addSwitchEvent() {
		elem.switchLeft = getElemsByClassName(c_elem, 'a', 'VW-slide-switch-left')[0];
		elem.switchRight = getElemsByClassName(c_elem, 'a', 'VW-slide-switch-right')[0];
		
		elem.switchLeft.onclick = function() {
			if (elem.tab.isAnimate) return;
			
			if (p_current > 0 && p_current <= elem.tab_li.length - c_item) {
				stop(elem.tab);
				p_current = p_current - 1;
				slide(function() {
					if (c_run) autoRun();
				});
			}
		};
		
		elem.switchRight.onclick = function() {
			if (elem.tab.isAnimate) return;
			
			if (p_current < elem.tab_li.length - c_item && p_current >= 0) {
				stop(elem.tab);
				p_current = p_current + 1;
				slide(function() {
					if (c_run) autoRun();
				});
			}
		};
	}
	
	// START-----------------------------------------------
	includeCss();
	setStyle();
	if (c_switch) {
		addSwitch();
		addSwitchEvent();
	}
	if (c_navigation) addNavigation();
	if (c_run) autoRun();
};
