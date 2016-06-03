/*================================================
 * Author: zhengfei
 * Time: 2015/06/03 - 2015/06/??
 *===============================================*/


/*================================================
 * 未登录头部
 *===============================================*/
var html_header = function(data) {
	
	// 数据初始化
	var tel 	= data.tel;
	var link_1 	= data.register_link;
	var link_2 	= data.login_link;
	var base_path=data.base_path;
	
	// html
	// 页头
	var a = '<div class="top_wrap">'+
		'<div class="top_menu">'+
			'<div class="top_left">'+
				'<span>4001-871-178</span>'+
				'<a href="#" class="wechat">'+
					'<div class="qr_code">'+
						'<div class="code_img"><img src="'+base_path+'/images/wechat_code.jpg" alt="" title="" /></div>'+
						'<p>微信二维码</p>'+
					'</div>'+
				'</a>'+
				'<a href="http://weibo.com/17money" target="_blank" class="sina"></a>'+
			'</div>'+
			'<div class="top_right">'+
				'<span class="phone">金佳APP'+
					'<div class="code clearfix">'+
						'<p><img src="'+base_path+'/images/appDownload.png" alt="" title="" /><span>金佳金融APP</span></p>'+
						'<p><img src="'+base_path+'/images/hua_app.jpg" alt="" title="" /><span>花乐APP</span></p>'+
					'</div>'+
				'</span>'+
				'<a href="'+link_1+'" class="register_btn">注册</a>'+
				'<a href="'+link_2+'" class="login_btn">登录</a>'+
			'</div>'+
		'</div>'+
	'</div>';
	
	return a;
	
};


/*================================================
 * 登录后头部
 *===============================================*/
var html_header_login = function(data) {
	
	// 初始化
	var tel		=	data.tel;
	var name	=	data.name;
	var phone	=	data.phone;
	var msg		=	data.msg;
	var link_1	=	data.link_1;
	var link_2	=	data.link_2;
	var base_path=data.base_path;
	
	if(data.headImgUrl!=null&&data.headImgUrl!=''){
		$("#headImg").attr("src",data.headImgUrl);
	}
	
	// 数据处理
	var m = true;
	if ( name == false || name == null ) {
		name = phone;
	};
	
	var a = '<div class="top_wrap">'+
		'<div class="top_menu">'+
			'<div class="top_left">'+
				'<span>4001-871-178</span>'+
				'<a href="#" class="wechat">'+
					'<div class="qr_code">'+
						'<div class="code_img"><img src="'+base_path+'/images/wechat_code.jpg" alt="" title="" /></div>'+
						'<p>微信二维码</p>'+
					'</div>'+
				'</a>'+
				'<a href="http://weibo.com/17money" target="_blank" class="sina"></a>'+
			'</div>'+
			'<div class="top_right">'+
				'<span class="phone">金佳APP'+
					'<div class="code clearfix">'+
						'<p><img src="'+base_path+'/images/appDownload.png" alt="" title="" /><span>金佳金融APP</span></p>'+
						'<p><img src="'+base_path+'/images/hua_app.jpg" alt="" title="" /><span>花乐APP</span></p>'+
					'</div>'+
				'</span><a href="'+link_1+'">欢迎回来，'+name+'</a>'+
				'<a href="'+link_2+'" class="login_btn">安全退出</a>'+
			'</div>'+
		'</div>'+
	'</div>';
	
	return a;
	
};


/*================================================
 * 主导航
 *===============================================*/
var html_main_nav = function(data,base_path,index) {
	var menu=data.menu;
	var links=data.links;
	var pageIndex=null;
	if($('#jjjr_pageIndex').length==1){
		pageIndex=$('#jjjr_pageIndex').html();
	}else{
		pageIndex='-1';
	}
	
	var htmlMenu='';
	
	// 属性分离
	for ( i = 0; i <menu.length; i ++ ) {
		var menuId='index_'+menu[i].id;
		if(menuId==pageIndex){
			htmlMenu=htmlMenu+'<li><a href="'+menu[i].link+'" class="cur">'+menu[i].name+'</a></li>';
		}else{
			var htmlBlank=menu[i].blank==true?'target="_blank"':"";
			htmlMenu=htmlMenu+'<li><a href="'+menu[i].link+'" '+htmlBlank+'>'+menu[i].name+'</a></li>';
		}
	};
	var htmlLinks='';
	for(var i=0;i<links.length;i++){
		htmlLinks=htmlLinks+'<li><a href="'+links[i].url+'">'+links[i].text+'</a></li>';
	}
	var a= '<div class="menu_wrap"><div class="menu clearfix">'+
		'<div class="main_left">'+
			'<a href="'+index+'"><img src="'+base_path+'/images/logo.png" alt="" title="" /></a>'+
		'</div>'+
		'<div class="main_right clearfix">'+
			'<ul class="main_menu">'+htmlMenu+
			'</ul>'+
			'<div class="user_center clearfix">'+
				'<div class="head"><img src="'+base_path+'/images/b_head.png" alt="" title="" id="headImg" /></div>'+
					'<div class="user_menu">'+
						'<p>我的资产</p>'+
						'<ul>'+htmlLinks+
						'</ul>'+
					'</div>'+
				'</div>'+
			'</div>'+
		'</div>'+
	'</div>';
	return a;

};


/*================================================
 * 底部
 *===============================================*/
 
var html_footer = function(data) {
	
	// 初始化
	var info	= 	data.info;
	var links	= 	data.links;
	var about	=	data.about;
	var tel		=	data.tel;
	var name	=	data.name;
	var addr	=	data.addr;
	var icp		=	data.icp;
	var base_path=data.base_path;
	
	// 数据处理
	var html_info	=	'';
	var html_links	=	'';
	var html_about	=	'';
	
	for ( i = 0; i <= info.length - 1; i ++ ) {
		html_info = html_info + '<a href="' + info[i].link + '">' + info[i].title + '</a>';
	};
	for ( i = 0; i <= links.length - 1; i ++ ) {
		html_links = html_links + '<a href="' + links[i].link + '" target="_blank">' + links[i].title + '</a>';
	};
	for ( i = 0; i <= about.length - 1; i ++ ) {
		html_about = html_about + '<a href="' + about[i].link + '">' + about[i].title + '</a>';
	};
	
	// 页脚
	var a='<div class="footer_wrap"><div class="footer clearfix">'+
			'<div class="about_us"><span>关于我们</span>'+html_info+
			'</div>'+
			'<div class="attention">'+
				'<span>关注我们</span>'+
				'<ul class="clearfix">'+
					'<li class="sweep">'+
						'<img src="'+base_path+'/images/bwechat.png" alt="" title="" /><em>微信公众号</em>'+
						'<div class="qr_code">'+
							'<div class="code_img"><img src="'+base_path+'/images/wechat_code.jpg" alt="" title=""></div>'+
							'<span>微信二维码</span>'+
						'</div>'+
					'</li>'+
					'<li>'+
						'<a href="http://weibo.com/17money" target="_blank" class="sina"><img src="'+base_path+'/images/bsina.png" alt="" title="" /></a><em>新浪微博</em>'+
					'</li>'+
				'</ul>'+
			'</div>'+
			'<div class="custom">'+
				'<img src="'+base_path+'/images/kf.png" alt="" title="" />'+
				'<em>4001-871-178</em>'+
				'<em>服务时间：8 : 30-20 : 30</em>'+
			'</div>'+
		'</div>'+
		'<p class="link">'+html_links+'</p></div>';
	
	a=a+ '<div class="copyright"><p>版权所有：上海金佳金融信息服务有限公司  公司地址：中国（上海）自由贸易试验区富特北路399号二幢楼5B层538沪ICP备14046308号-4</p></div>';
	
	return a;
	
};

var subStrPhone=function(number){
	var pre=number.substring(0,3);
	var suffix=number.substring(7,number.length);
	return pre+"****"+suffix;
}

/*================================================
 * 右侧浮动菜单
 *===============================================*/
var zfFLoatMenu = function(a, b) {
	
	// 几个参数
	var qqSRC =	'http://wpa.b.qq.com/cgi/wpa.php?key=XzkzODAyNTkyOV8zMDg4OTNfNDAwMTg3MTE3OF8';
	var imgURL	  = a;
	var helpLINK  =	b;
	
	// QQ客服 scropt 对象
	var scriptQQ = document.createElement('script');
	scriptQQ.type = 'text/javascript';
	scriptQQ.charset = 'UTF-8';
	scriptQQ.src = qqSRC;
	
	// 插入样式
	var rootLink = $('script[src$="common/js/head_footer.js"]').attr('src').replace('common/js/head_footer.js', '');
	var insertCSS = '<link rel="stylesheet" type="text/css" href="';
	insertCSS += rootLink + 'crowd/css/public.css" />';
	$('head').append(insertCSS);
	
	// html
	var floatMenu = '<ul id="zf-float-menu"><li class="zf-float-qq"><div id="zf-float-qq-code" style="display: none;"></div></li>';
	floatMenu += '<li class="zf-float-wx"><img src="';
	floatMenu += imgURL + '" /></li><li class="zf-float-help"><a target="_blank" href="';
	floatMenu += helpLINK + '"></a></li><li class="zf-float-gotop"></li></ul>';
	$('body').append(floatMenu);
	
	// 插入 QQ客服代码
	var insertQQcode = setInterval(function() {
		if ($('#zf-float-qq-code').length == 1) {
			document.getElementById('zf-float-qq-code').appendChild(scriptQQ);
			clearInterval(insertQQcode);
		}
	}, 10);
	
	// fn
	var fnFloatMenu = function() {
		
		var t = 300;
		var li_wx = $('li.zf-float-wx');
		var li_wx_img = $('li.zf-float-wx img');
		var li_gotop = $('li.zf-float-gotop');
		
		var openWPA = function () {
	         var btn = document.getElementById("zf-float-qq-code").getElementsByTagName("iframe")[0].contentWindow.document.getElementById("launchBtn");
	         if (btn.click) {
	             btn.click();
	         } else {
	             var e = document.createEvent('MouseEvent');
	             e.initEvent('click', false, false);
	             btn.dispatchEvent(e);
	         }
	     };
	     
	     // 客服QQ
	     $('.zf-float-qq').click(function() {
	     	openWPA();
	     });
		
		// 微信二维码
		li_wx.hover(function() {
			li_wx_img.fadeIn(t);
		}, function() {
			li_wx_img.fadeOut(t);
		});

		// 返回顶部
		li_gotop.click(function() {
			$('html, body').animate({'scrollTop' : 0}, t);
		});
		$(window).scroll(function() {
			var sTOP = $(window).scrollTop();
			if (sTOP > 300) {
				li_gotop.stop().animate({'height' : '60px'}, t/2);
			} else {
				li_gotop.stop().animate({'height' : '0'}, t/2);
			}
		});	
	
	};
	
	var bindFUN = setInterval(function() {
		if ($('.zf-float-gotop').length == 1) {
			fnFloatMenu();
			clearInterval(bindFUN);
		}
	}, 10);
	
};


/*================================================
 * END
 *===============================================*/