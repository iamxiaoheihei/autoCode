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
			alertNow("快输入类名！！！");
			return;
		}
		var packageName = $("#packageName").val();
		if(packageName==""){
			alertNow("快输入包名！！！");
			return;
		}
		var propertyName = $("#propertyName").val();
		if(packageName==""){
			alertNow("快输入想改的字段名！！！");
			return;
		}
	    var pdata = {
	    		"className":className,
	    		"packageName":packageName,
	    		"propertyName":propertyName
	    		};
		var data=ajaxPost("autoCode/get/all/property",pdata);
		alert("添加成功");
		setTimeout(function(){
			document.location.reload();
		},1000);
	});
});