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
