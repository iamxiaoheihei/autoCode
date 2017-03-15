$.ajaxSetup({cache:false});
var allpath=sessionStorage.getItem("allpath");
$(document).ready(function() {
	
	 $(function() {
		  $('#sky').jQlouds();
		  $('#sky').jQlouds({ skyHeight: 710 });
		  wind: true
		  });
	
	$("#onclick").click(function(){
		var className = $("#className").val();
		if(className==""){
			alertNow("请输入类名！！！");
			return;
		}
		var packageName = $("#packageName").val();
		if(packageName==""){
			alertNow("请输入包名！！！");
			return;
		}
		var serviceMethodName = $("#serviceMethodName").val();
		if(serviceMethodName==""){
			alertNow("请输入service方法名！！！");
			return;
		}
		var serviceParamIn = $("#serviceParamIn").val();
		if(serviceParamIn==""){
			alertNow("请输入service方法入参！！！");
			return;
		}
		var serviceParamOut = $("#serviceParamOut").val();
		if(serviceParamOut==""){
			alertNow("请输入service方法出参！！！");
			return;
		}
		var serviceInRemark = $("#serviceInRemark").val();
		if(serviceInRemark==""){
			alertNow("请输入service方法入参备注！！！");
			return;
		}
		var serviceOutRemark = $("#serviceOutRemark").val();
		if(serviceOutRemark==""){
			alertNow("请输入service方法出参备注！！！");
			return;
		}
		var daoMethodName = $("#daoMethodName").val();
		if(daoMethodName==""){
			alertNow("请输入dao方法名！！！");
			return;
		}
		var daoParamIn = $("#daoParamIn").val();
		if(daoParamIn==""){
			alertNow("请输入dao方法入参！！！");
			return;
		}
//		var daoParamOut = $("#daoParamOut").val();
//		if(daoParamOut==""){
//			alertNow("请输入dao方法出参！！！");
//			return;
//		}
		var daoInRemark = $("#daoInRemark").val();
		if(daoInRemark==""){
			alertNow("请输入dao方法入参备注！！！");
			return;
		}
//		var daoOutRemark = $("#daoOutRemark").val();
//		if(daoOutRemark==""){
//			alertNow("请输入dao方法出参备注！！！");
//			return;
//		}
		var regName = $("#regName").val();
		if(regName==""){
			alertNow("请输入注册人姓名！！！");
			return;
		}
	    var pdata = {
	    		"className":className,
	    		"packageName":packageName,
	    		"serviceMethodName":serviceMethodName,
	    		"serviceParamIn":serviceParamIn,
	    		"serviceParamOut":serviceParamOut,
	    		"serviceInRemark":serviceInRemark,
	    		"serviceOutRemark":serviceOutRemark,
	    		"daoMethodName":daoMethodName,
	    		"daoParamIn":daoParamIn,
	    		"daoInRemark":daoInRemark,
	    		"regName":regName
	    		};
		var data=ajaxPost("autoCode/reg/add",pdata);
		if(data.returnFlag==0){
			alertNow("添加成功");
			setTimeout(function(){
				document.location.reload();
			},1000);
		}else if(data.returnFlag==2){
			alertNow("已有同名方法，请重新添加！！");
		}else{
			alertNow("添加失败！！");
		}
	});
});