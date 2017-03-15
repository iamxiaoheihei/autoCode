$.ajaxSetup({cache:false});
var allpath=sessionStorage.getItem("allpath");
$(document).ready(function() {
	
	 $(function() {
		  $('#sky').jQlouds();
		  $('#sky').jQlouds({ skyHeight: 710 });
		  wind: true;
		  });
	 
	$("#delete").click(function(){
		var methodName = $("#methodName").val();
		if(methodName==""){
			alertNow("请输入方法名！！！");
			return;
		}
	    var pdata = {
	    		"methodName":methodName
	    		};
		var data=ajaxPost("autoCode/reg/del",pdata);
		if(data.returnFlag==0){
			alertNow("删除成功，请删除生成的方法对应的java代码！！");
			setTimeout(function(){
				document.location.reload();
			},1000);
		}else{
			alertNow("删除失败！！");
		}
		
	});
	
	$("#onclick").click(function(){
		var methodName = $("#methodName").val();
		if(methodName==""){
			alertNow("请输入原方法名！！！");
			return;
		}
		var newMethodName = $("#newMethodName").val();
		if(newMethodName==""){
			alertNow("请输入方法名！！！");
			return;
		}
		var regName = $("#regName").val();
		if(regName==""){
			alertNow("请输入注册人姓名！！！");
			return;
		}
		var paramIn = $("#paramIn").val();
		if(paramIn==""){
			alertNow("请输入方法入参！！！");
			return;
		}
		var paramOut = $("#paramOut").val();
		if(paramOut==""){
			alertNow("请输入方法出参！！！");
			return;
		}
		var inRemark = $("#inRemark").val();
		if(inRemark==""){
			alertNow("请输入方法入参备注！！！");
			return;
		}
		var outRemark = $("#outRemark").val();
		if(outRemark==""){
			alertNow("请输入方法出参备注！！！");
			return;
		}
	    var pdata = {
	    		"methodName":methodName,
	    		"newMethodName":newMethodName,
	    		"paramIn":paramIn,
	    		"paramOut":paramOut,
	    		"paramInRemark":inRemark,
	    		"paramOutRemark":outRemark,
	    		"regName":regName
	    		};
		var data=ajaxPost("autoCode/reg/mod",pdata);
		if(data.returnFlag==0){
			alertNow("修改成功，请去修改生成方法中对应的java代码！！");
			setTimeout(function(){
				document.location.reload();
			},1000);
		}else{
			alertNow("修改失败！！");
		}
	});
});