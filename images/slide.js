
	    /**
		     @author  	deng
		     @date  	2015.5.5
		     @version 	1.0
			 @首页
		**/

		var index_browseW=0;					//浏览器宽度
	    var index_imagesNum=0;				    //轮循图片张数
		var index_imagesWidth=0;				//轮循图片总宽度
		var index_currentIndex=0;				//当前图片索引
		var index_currentPosition=0;            //当前divSlider 相对父元素divSliderContainer的左移动位置
		var index_direction=1;                  // 朝右移动为1,朝左移动为0;
		// 动画
		var myAnimation = setInterval(animationImg, 6000); 
			

			
		function init()
		{
			setPageSize();	
		}
		
		window.onresize = function()
		{  	
			setPageSize();
		}
		
		// 设置页面尺寸
		function setPageSize()
		{
			if(window.innerHeight!= undefined)
			{
				window.index_browseW = window.innerWidth >1200? window.innerWidth:1200;
				//console.log(window.index_browseW);
			}
			else
			{
				var B= document.body, D= document.documentElement;
				var wTemp=Math.min(D.clientWidth, B.clientWidth);
				//window.index_browseW= wTemp>1200? wTemp:1200;	 ?: 运算方式在IE 8 下不支持,奶奶的
				if(wTemp>1200)
				{
					window.index_browseW=wTemp;	
				}
				else
				{
					window.index_browseW=1200;
				}
				//console.log(wTemp);
				//console.log(window.index_browseW);
			}
			
			window.index_imagesNum=$("img.slider").length;
			window.index_imagesWidth=window.index_imagesNum*2000;
			window.index_currentPosition=window.index_currentIndex*2000+(2000-window.index_browseW)*0.5;
			/****移动divSlider****/
			$("#divSlider").css("width",window.index_imagesWidth+"px");
			$("#divSlider").css("left",-window.index_currentPosition+"px");
			
			/****设置指示按钮颜色****/
			$("button.indicator").css("background-color","#ffffff");
			$("button.indicator:eq("+window.index_currentIndex+")").css("background-color","#ff2323");	
		} 
		
		// 点击d左移按钮图片左移
		$("#buttonLeftArrow").click(function()
		{
			clearInterval(myAnimation);
			
			if(window.index_currentIndex<1)
			{
				//啥也不做;
			}
			else
			{
				window.index_currentIndex=window.index_currentIndex-1;
				window.index_currentPosition=window.index_currentIndex*2000+(2000-window.index_browseW)*0.5;
				/****移动divSlider****/
				$("#divSlider").animate({left:-window.index_currentPosition+"px"},1000);
				
				/****设置指示按钮颜色****/
				$("button.indicator").css("background-color","#ffffff");
				$("button.indicator:eq("+window.index_currentIndex+")").css("background-color","#ff2323");
			}
			
			window.myAnimation=setInterval(animationImg, 6000); 
		})
		
		// 点击右移按钮图片右移
		$("#buttonRightArrow").click(function()
		{
			clearInterval(myAnimation);
			
			if(window.index_currentIndex>window.index_imagesNum-2)
			{
				//啥也不做;
			}
			else
			{
				window.index_currentIndex=window.index_currentIndex+1;
				window.index_currentPosition=window.index_currentIndex*2000+(2000-window.index_browseW)*0.5;
				/****移动divSlider****/
				$("#divSlider").animate({left:-window.index_currentPosition+"px"},1000);
				
				/****设置指示按钮颜色****/
				$("button.indicator").css("background-color","#ffffff");
				$("button.indicator:eq("+window.index_currentIndex+")").css("background-color","#ff2323");
			}
			
			window.myAnimation=setInterval(animationImg, 6000); 
		})

		// 点击按钮移动
		function moveImg(imgIndex)
		{
			clearInterval(myAnimation);
			
			window.index_currentIndex=Number(imgIndex);
			window.index_currentPosition=window.index_currentIndex*2000+(2000-window.index_browseW)*0.5;
			$("#divSlider").animate({left:-window.index_currentPosition+"px"},1000);
			
			/****设置指示按钮颜色****/
			$("button.indicator").css("background-color","#ffffff");
			$("button.indicator:eq("+window.index_currentIndex+")").css("background-color","#ff2323");
			
			window.myAnimation=setInterval(animationImg, 6000); 
		}
		
		
		function animationImg()
		{
			if(window.index_currentIndex==(window.index_imagesNum-1))
			{
				window.index_direction=0;
				//console.log(window.index_direction);
			}
			
			if(window.index_currentIndex==0)
			{
				window.index_direction=1;
				//console.log(window.index_direction);
			}
			
			if(window.index_direction==1)
			{
				window.index_currentIndex=window.index_currentIndex+1;
			}
			else
			{
				window.index_currentIndex=window.index_currentIndex-1;
			}
			
			window.index_currentPosition=window.index_currentIndex*2000+(2000-window.index_browseW)*0.5;
			$("#divSlider").animate({left:-window.index_currentPosition+"px"},1000);
			
			/****设置指示按钮颜色****/
			$("button.indicator").css("background-color","#ffffff");
			$("button.indicator:eq("+window.index_currentIndex+")").css("background-color","#ff2323");
		}
		
		document.onreadystatechange=function()
		{ 
			if(document.readyState=="complete"){init()}
		}

	
		