requirejs.config({
	//如果baseUrl 没有设置。那么默认baseUrl的是config.js的目录
	baseUrl : 'js',
	// paths 如果是 / 或者 .js 或者 协议Url 中的一个
	// 那么 相对于 当前加载的HTML脚本
	paths : {
		//baseUrl + paths
		first : 'first',
		jquery : '../lib/jquery.min',
		second : 'second'
	},
	shim :{
		first : {
			deps : ['jquery']
			//这里是防止define的第一个依赖没有写，在shim中的deps也可以写依赖
		},
		//如果是一个无主的文件。  使用shim 的 exports将某个全局变量暴露给require.js
		second : {
			exports : 'secondFun'
			// "secondFun" 就是 second.js 里的那个函数名
		}
	}
});

	requirejs(['first', 'second'], function (t_first, t_second){
		t_first.getEle();

		t_second();
	});	

