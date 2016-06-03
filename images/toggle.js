// 切换脚本

$id = function(myid)
{
	return document.getElementById(myid);
}

$class = function(myclass)
{
	return document.getElementsByClassName(myclass);
}

$query = function(myselector)
{
	return document.querySelectorAll(myselector);	
}

// 左侧菜单对像数组
var $menuArray = [];

// 右侧板块数组
var $panelArray = [];

//初始化菜单和板块数组
$initArray = function()
{
	// 获取金融板块 box finance
	var menu1 = $query(".finance .box_menu a");
	var panel1 = $query(".finance .box_right>ol>li");
	$menuArray.push(menu1);
	$panelArray.push(panel1);
	
	var m1 = menu1.length;
	var p1 = panel1.length;
	for(var i=0;i<m1;i++)
	{
		menu1[i].setAttribute("Index",0);
		menu1[i].setAttribute("subIndex",i);
		menu1[i].setAttribute("onmouseover","$mouseOver(this)");
		panel1[i].setAttribute("Index",0);
		panel1[i].setAttribute("subIndex",i);
	}
	
	
	// 获取社交板块 box social
	var menu2 = $query(".social .box_menu a");
	var panel2 = $query(".social .box_right>ol>li");
	$menuArray.push(menu2);
	$panelArray.push(panel2);
	var m2 = menu2.length;
	var p2 = panel2.length;
	for(var i=0;i<m2;i++)
	{
		menu2[i].setAttribute("Index",1);
		menu2[i].setAttribute("subIndex",i);
		menu2[i].setAttribute("onmouseover","$mouseOver(this)");
		panel2[i].setAttribute("Index",1);
		panel2[i].setAttribute("subIndex",i);
	}
	
	
	// 获取生活板块 box life
	var menu3 = $query(".life .box_menu a");
	var panel3 = $query(".life .box_right>ol>li");
	$menuArray.push(menu3);
	$panelArray.push(panel3);
	var m3 = menu3.length;
	var p3 = panel3.length;
	for(var i=0;i<m3;i++)
	{
		menu3[i].setAttribute("Index",2);
		menu3[i].setAttribute("subIndex",i);
		menu3[i].setAttribute("onmouseover","$mouseOver(this)");
		panel3[i].setAttribute("Index",2);
		panel3[i].setAttribute("subIndex",i);
	}
	
	
	// 获取Ta说板块 box ta_say
	var menu4 = $query(".ta_say .box_menu a");
	var panel4 = $query(".ta_say .box_right>ol>li");
	$menuArray.push(menu4);
	$panelArray.push(panel4);
	var m4 = menu4.length;
	var p4 = panel4.length;
	for(var i=0;i<m4;i++)
	{
		menu4[i].setAttribute("Index",3);
		menu4[i].setAttribute("subIndex",i);
		menu4[i].setAttribute("onmouseover","$mouseOver(this)");
		panel4[i].setAttribute("Index",3);
		panel4[i].setAttribute("subIndex",i);
	}
	
	// 获取You惠板块 box you_hui
	var menu5 = $query(".you_hui .box_menu a");	
	var panel5 = $query(".you_hui .box_right>ol>li");
	$menuArray.push(menu5);
	$panelArray.push(panel5);
	var m5 = menu5.length;
	var p5 = panel5.length;
	for(var i = 0;i<m5;i++)
	{
		menu5[i].setAttribute("Index",4);
		menu5[i].setAttribute("subIndex",i);
		menu5[i].setAttribute("onmouseover","$mouseOver(this)");
		panel5[i].setAttribute("Index",4);
		panel5[i].setAttribute("subIndex",i);
	}
}

// 鼠标移过函数
$mouseOver=function(obj)
{
	var index = obj.getAttribute("Index");
	var subIndex = obj.getAttribute("subIndex");
	
	// 设置导航和板块状态
	var menuItem = $menuArray[index];
	var panelItem = $panelArray[index];
	
	var mlength=menuItem.length;
	for(var i = 0;i<mlength;i++)
	{
		menuItem[i].className = "";
		
		var panelClass = panelItem[i].className;
		panelClass = panelClass.replace("hide","");
		panelClass = panelClass+" hide";
		panelItem[i].className = panelClass;
	}
	menuItem[subIndex].className="cur";
	
	panelClass = panelItem[subIndex].className;
	panelClass = panelClass.replace("hide","");
	panelItem[subIndex].className = panelClass;
	
	
	
	//console.log("index:"+index+",subIndex"+subIndex);
}

$initArray();