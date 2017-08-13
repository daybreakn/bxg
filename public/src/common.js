
	// NProgress.start();

	// NProgress.done();

	// $('.navs ul').prev('a').on('click', function () {
	// 	$(this).next().slideToggle();
	// });

	//检测用户是否登录，如果没有登录，则跳转至登陆页

	//如何检测用户是否登录了呢？

	//当存了一个session后，浏览器会设置一个名字叫PHPSESSID的cookie

	//只要检测PHPSESSID是否存在就可以判断用户是否登录过

	//通过document.cookie可以读取本地存的cookie
	// if(document.cookie.indexOf(('PHPSESSID') != -1){
	// 	//登陆过
	// }else{

	// 	//没有登录，跳转至登录页面
	// 	//除了login页面自身外都需要检测
	// 	//如何得知当前是不是login
	// 	location.href='/login';


	// }

	//浏览器提供了location这个BOM对象可以i获得地址的信息
	// console.log(document.cookie);
	// for(var key in location){
	// 	console.log(key + '—>'+ location[key])
	// }

	define(['jquery','template','cookie'],function($,template){

		if(document.cookie.indexOf('PHPSESSID') == -1 && location.pathname != '/login'){

		location.href='/login';



	}

	//获取用户的登录信息(被计入在了cookie中)
	// var loginfo=JSON.parse($.cookie('loginfo'));
	var loginfo=$.cookie('loginfo') && JSON.parse($.cookie('loginfo'));
	//将存在cookie的用户头像和名称显示在页面中
	// $('.profile img').attr('src',loginfo.tc_avatar);
	// $('.profile h4').text(loginfo.tc_name);
	//template方法传递两个参数
	//第一个参数是模板所在DOM标签的ID
	// 第二个参数是模板所需要的数据(对象类型)
	//template('tpl',data);


	//complie方法也需要两个参数
	//第一个参数是字符串形式的模板
	//第二个参数是配置选项可以省略
	// var tpl='<h1></h1>'
	// template.complie(source,options),
	//定义模板
	var source=  '<div class="avatar img-circle">\
                <img src="<%= tc_avatar %>">\
            </div>\
            <h4><%= tc_name %></h4>',
            //编译模板
             render=template.complie(source),
             //传递数据
              html=render(loginfo);
            console.log(html);
            //将拼凑好数据的html添加至dom
            $('.profile').append(html);

	// console.log(loginfo);

	//退出登录
	$.('#logout').on('click',function(){
		$.ajax({
			url: '/api/logout',
			type:'post',
			success:function(info){
				if(info.code==200){
					alert('退出成功');
					location.href='/login'
				}

			}
		})
	})

	})