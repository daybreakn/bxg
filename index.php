<?php
	//通过php来获得地址的信息
	//根据地址的信息执行不同的逻辑

	//如何 获得地址信息？
	//php 通过$_GET可以获得get方式发送的请求
	//php 通过$_POST可以获得post方式发送的请求
	//php 通过$_FILES可以获得上传的文件

	//php 还提供了 $_SERVER /可以获得服务器信息
	 // var_dump($_SERVER);
	 //通过 $_SERVER['PATH_INFO']可以获得地址的部分信息
	 //通过此信息可以调整输出的内容
	 $pathinfo=$_SERVER['PATH_INFO'];

	 // echo $pathinfo;

	 // include './views/' . $pathinfo . '.html';

	 //$pathinfo包含了路径的两部分

	 //为了保证地址的灵活性 地址需要支持一层结构
	 //bxg.com/index
	 //假如是一层结构，默认采用的目录名称为index
	 //如上相当于是bxg.com/index/index
	 //bxg.com/index/login

	 //和两层结构
	 //bxg.com/teacher/index

	 //判断地址是一层机构还是两层

	 //将$pathinfo拆分称数组，然后判断数据情况得到地址结构
	 //在php中如何将字符串拆分成数组
	 //使用explode()将字符串拆成数组
	 $pathinfo = substr($pathinfo, 1);

	 // echo '<br>';
	 // echo $pathinfo;
	 $route = explode('/', $pathinfo);
	 // print_r($route);

	 // phpinfo();exit;
	 //php 使用empty()函数可以判断某个变量是否为空
	 //为空为true ，否为false

	 // var_dump(empty($pathinfo));

	 if(empty($pathinfo)){
	 	$path='index/index';
	 }else if(count($route)==1){//判断数组长度为1

	 	$path='index/'.$route[0];
	 }else{//数组长度为2
	 	$path=$route[0].'/'.$route[1];

	 }


	 include './views/' . $path .'.html';




