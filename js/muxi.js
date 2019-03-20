$(function(){
	const pages =["木兮首页.html","关于木兮.html","productshow.html","joinus.html","contactus.html"];
	$("#muxi-content").load(pages[0]);
	$("#muxi-navigation li").click(function(){
		$(this).addClass("select").siblings().removeClass("select");
		$("#muxi-content").load(pages[$(this).index()]);
	});
	$("#changepage div").click(function(){
		$("#muxi-navigation li").eq($(this).index()+1).addClass("select").siblings().removeClass("select");
		$("#muxi-content").load(pages[$(this).index()+1]);
	});
})