
sublime安装格式化插件是需要依赖node环境


4、回到顶部功能的jquery
	$(function(){
			$("需要点击的对象").click(function () {
				var speed=200;//滑动的速度
				$('body,html').animate({ scrollTop: 0 }, speed);
				return false;
			});
		})
  
  22、底部定位对安卓手机键盘弹出的影响的解决方案
    var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
        $(window).on('resize', function () {
          var nowClientHeight = document.documentElement.clientHeight || document.body.clientHeight;
          if (clientHeight > nowClientHeight) {
              //键盘弹出的事件处理
              $('.foot').hide();
              $('.footer').hide()
          }
          else {
              //键盘收起的事件处理
              $('.foot').show();
              $('.footer').show()
          }
      });
  23、手机键盘弹出对ios来说是改变了scrollTop的值；而安卓则是改变了window.innerHeight.
  26、屏幕显示时操作
    $(document).ready(function() {
      var _arr = []
      $(window).on('scroll', function() {
        $('.forscroll').each(function(index){
          var that = $(this);
          that.index = index;
          if($(document).scrollTop() + $(window).height()/3 > that.offset().top){
          _arr.push(index);
          }
        }); 

        if(_arr.length){
          $('.nav li').eq(_arr[_arr.length-1]).addClass('active').siblings().removeClass('active');
          _arr = [];
        }

      })
      点击之后页面滚动到对应的位置
      $('.nav li').each(function(index){
        $(this).click(function(){
          $('html,body').animate({scrollTop: $('.forscroll').eq(index).offset().top - $('.navbar').height() + 'px'}, 500);
          return false;
        })
      });

    })
39、jQuery阻止移动端遮罩层后页面滚动
	.ovfHiden{overflow: hidden;height: 100%;}
	$(".header_right").click(function(){
	   $('html,body').addClass('ovfHiden'); //使网页不可滚动
	   $(".searchbox").show();
	 })
	 $(".yg-close").click(function(){
	   $('html,body').removeClass('ovfHiden'); //使网页恢复可滚
	   $(".searchbox").hide();
	 })
40、判断两个对象之间的属性以及属性值有没有相同
function com(o, p) {
	var iii = false;
	for (var key in o) {
		if (o.hasOwnProperty(key)) {
			if (p.hasOwnProperty(key)) {
				if (p[key] === o[key]) {
					iii = true;
				}
			}
		}
	}
}

41、js勾子
	钩子是将需要执行的函数或者其他一系列动作注册到一个统一的入口，程序通过调用这个钩子来执行这些已经注册的函数。
	
42、使用animate执行动画会重复执行，解决方法是在该执行函数之前加上stop()
	$('.commonSide').stop().animate({right: '0'},2000)

43、手机端使用rem单位的话需要在头部加上这段js，用设计稿的尺寸除以100
	document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
	
44、身份证验证方法，参考链接:http://blog.csdn.net/zjslqshqz/article/details/73571736

45、遮罩层淡出：setTimeout(function(){
                        $(".commonLayer").fadeOut();
                    },200);
46、关于时间日期的获取方法，参考链接：https://www.cnblogs.com/xiaoshujiang/p/5518462.html

47、var nowDate = new Date();
        console.log(nowDate,'ooo')
        var pro_num = $("#pro_num").val();
        var minDate = new Date(nowDate.setDate(nowDate.getDate()+1));//设置成当前日期的后一天
        var minDate1 = new Date(nowDate.getDate()+1);//将被设置成当前月+1月
        console.log(minDate,minDate1,'hhhh')
	
48、$.trim用来删除字符串开始和末尾的空格。。
49、jquery创建元素的另外一种方法，很牛逼，多学习了一个
var nationBtnBox=$("<div />",{class:"nationBtnBox"});
        var nationChoose=$("<div />",{class:"nationChoose"});
        var nationTitle=$("<div />",{class:"title"});
        nationTitle.append("<p>我选择的是：</p>");
        nationChoose.append(nationTitle);
        nationChoose.append("<div class='items'/>");
        nationChoose.append("<a class='c-blue clear-btn'>清空所有</a>");
50、$$("*")适用于开发工具中使用，直接使用是没有用的。。

51、// let setstyle = [].forEach.call($$("*"),function(a){ a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16) })
    // 解释: 选择所有元素,用数组的forEach方法进行遍历,所有元素都设置一个描边,描边的宽度和类型固定,颜色值随机.随机取得的值乘以2进制的25位值转换
    的10进制值,然后通过位运算可以将浮点数转换成整数,两次否定使整数部分不变,再将这个值转换成16进制字符串. 
    这个是没看懂，但是好像很厉害的样子。
    
    前面的[]空数组为用不到的数组，是一种简写，原型应为Array.prototype
    
    参考网址：http://blog.csdn.net/qq_26847293/article/details/50833285
    
52、事件函数设置
	function addHandler(element, type, handler) {
            if (element.addEventListener) {
                element.addEventListener(type, handler, false);
            } else if (element.attachEvent) {
                element.attachEvent('on' + type, handler);
            } else {
                element['on' + type] = handler;
            }
        }
   使用：
   	addHandler(form, 'submit', function(e) {})
	
53、生成[m,n]之间的随机数，参考链接：https://www.cnblogs.com/starof/p/4988516.html

54、延迟加载jq
 $(function()
        {
            $(".headermenu").click(function()
            {
                $(".headerdl>dd").slideToggle(250);
            });
            $(".headerlist>li").each(function(index)
            {
                $(this).css(
                    {
                        'animation-delay': (index / 10) + 's'
                    });
            });
            $('.reclassify').click(function()
            {
                $(this).toggleClass("on");
                $(this).find('.reclassifytop').toggleClass("on");
                $(this).find('.reclassifybox').slideToggle(200);
            })
        })
