//定义模块，此模块用来实现登录功能
define(['jquery','cookie'],function($){
	//提供用户输入界面，用户输入登录信息，将用户的登录信息发送至服务端
        //由服务端验证用户是否合法
        //用户提交表单时将数据发送到服务端
        //要将表单提交有两种方式 a) 鼠标点击 B)回车
        //有一个事件叫submit，当表单提交时触发
        $('#loginForm').on('submit',function(){
            // alert(1);
            //获取用户输入的信息
            //将这些信息发送到服务器
            //发送信息有两种方式，一种是使用表单的默认提交，
            //一种是使用xhr进行提交

             // console.log($(this).serialize());
             //获取所有表单的数据(自动忽略没有name属性的表单)
             var FormData = $(this).serialize();


            $.ajax({

                url:'/api/login',
                type:'post',
                data:formData,
                success:function(info){
                    if(info.code == 200){
                        alert('登录成功');

                        //将服务器返回的用户信息
                        //存到cookie中，方便其他页面使用
                        //cookie只能用来存储字符串
                        $.cookie('loginfo',JSON.stringfy(info.result));
                        location.href='/';
                    }
                }
            })
            //组织默认行为
            return false;
        });
})