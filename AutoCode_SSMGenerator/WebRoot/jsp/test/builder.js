$.ajaxSetup({cache:false});
var allpath=sessionStorage.getItem("allpath");
$(document).ready(function() {
	
	      $(function() {
		  $('#sky').jQlouds();
		  $('#sky').jQlouds({ skyHeight: 410 });
		  wind: true;
		  });
	
	$("#onclick").click(function(){
		var className = $("#className").val();
		if(className==""){
			alertNow("快输入类名！！！");
			return;
		}
		var packageName = $("#packageName").val();
		if(packageName==""){
			alertNow("快输入包名！！！！");
			return;
		}
		
		
	    var pdata = {
	    		"className":className,
	    		"packageName":packageName
	    		};
		var data=ajaxPost("autoCode/get/all/information",pdata);
		//alert(JSON.stringify(data));
		var num=data.length;
		buildform(num,data);
		$("#submit").click(function(){
			buildTip(num);
		}) ;
	});
	
	createClass();
	
	
});



function createClass(){
	$("#create").click(function(){
		var className = $("#className").val();
		if(className==""){
			alertNow("快输入类名！！！");
			return;
		}
		var packageName = $("#packageName").val();
		if(packageName==""){
			alertNow("快输入包名！！！！");
			return;
		}
		var RequestMapping=$("#RequestMapping").val();
		var controllerType=$("input[name='controllerType']:checked").val();
		if(controllerType=="others"){
			var apiInfoUrl = $("#apiInfoUrl").val();
			if(apiInfoUrl==""){
				alertNow("选择了生成'其他类型'则必须输入API_INFO中想要生成controller的对应接口地址！");
				return;
			}
			var controllerName = $("#controllerName").val();
			if(controllerName==""){
				alertNow("controller方法名不能为空！！！！");
				return;
			}
//			var pdata={"apiInfoUrl":apiInfoUrl};
//			var data=ajaxPost("autoCode/apiDetail/sel",pdata);
//			if(data.length()==0){
//				alertNow("找不到对应的接口！！！");
//			}
		}
		if(controllerType=="modProperty"){
			var propertyName = $("#propertyName").val();
			if(propertyName==""){
				alertNow("选择了生成'修改属性字段'那么'想修改的属性字段'不能为空！！！！");
				return;
			}
		}
		var propertyName=$("#propertyName").val();
		var controllerName=$("#controllerName").val();
		var regName=$("#regName").val();
		var apiInfoUrl=$("#apiInfoUrl").val();
	    var pdata = {
	    		"className":className,
	    		"packageName":packageName,
	    		"controllerType":controllerType,
	    		"RequestMapping":RequestMapping,
	    		"propertyName":propertyName,
	    		"controllerName":controllerName,
	    		"regName":regName,
	    		"apiInfoUrl":apiInfoUrl
	    		};
	    var data=ajaxPost("autoCode/get/all/classExist",pdata);
	    if(data=="0"){
    		    var data1=ajaxPost("autoCode/get/all/addControllerMethod",pdata);
    			if(data1==null){
    				alertNow("创建相关方法成功！！");
    			}else{
    				alertNow(data1);
    			}
	    }else{
   		    var data1=ajaxPost("autoCode/get/all/create",pdata);
			if(data1==null){
				alertNow("相关类不存在,创建相关类成功！！如要创建相关方法请再点击一次按钮");
			}else{
				alertNow(data1);
			} 
	 } 
	});
}

//自动生成表单
function buildform(num,data){
	for(var i=0;i<num;i++){
		$("#tip_build").append('<table>'+
  	  		'<tr>'+
    			'<td >标签名</td>'+
    			'<td><input type="text" id="tip_name_'+i+'" value="'+data[i].comment+'"/></td>'+
    			'<td >标签id与name</td>'+
    			'<td><input type="text" id="tip_id_'+i+'" value="'+data[i].name+'"/></td>'+
    			'<td>'+
				'是否必填'+
				'</td>'+
				'<td><input type="checkbox" id="request_'+i+'" name="request_'+i+'"/>'+
				'</td>'+
				'<td>是否只读</td><td><input type="checkbox" id="onlyRead_'+i+'" name="onlyRead_'+i+'"/></td>'+
    		'</tr>'+
    		'<tr>'+
    			'<td>'+
    				'类型'+
    			'</td>'+
    			'<td>'+
    				'<label class="checkbox-inline">' +
					        '<input type="radio" name="tip_type_'+i+'" id="optionsRadios1_'+i+'" value="0" checked>文本框' +
					    '</label>' +
					    '<label class="checkbox-inline">' +
					        '<input type="radio" name="tip_type_'+i+'" id="optionsRadios2_'+i+'" value="1">下拉列表' +
					    '</label>'+
					   ' <label class="checkbox-inline">' +
					        '<input type="radio" name="tip_type_'+i+'" id="optionsRadios3_'+i+'" value="2">单选按钮'+ 
					    '</label>'+
					    '<label class="checkbox-inline">' +
					        '<input type="radio" name="tip_type_'+i+'" id="optionsRadios4_'+i+'" value="3">多选框' +
					    '</label>'+
					    '<label class="checkbox-inline">' +
					        '<input type="radio" name="tip_type_'+i+'" id="optionsRadios5_'+i+'" value="4">日历' +
					    '</label>'+
    			'</td>'+
    		'</tr>'+
    	'</table>');
	}
}


//自动生成内容
function buildTip(num){
	var allTip="";
	for(var i=0;i<num;i++){
		var tip_name=$("#tip_name_"+i).val();
		var tip_id=$("#tip_id_"+i).val();
		var request;
		var requesttext;
		if($("#request_"+i).prop("checked")){
			request="text-danger";
			requesttext='data-hint="不能为空" required="required"';
		}else{
			request="";
			requesttext="";
		}
		var onlyRead;
		if($("#onlyRead_"+i).prop("checked")){
			onlyRead="onlyRead";
			
		}else{
			onlyRead="";
		}
		
		var tip_context;
		var tip_type=$('input[name="tip_type_'+i+'"]:checked').val();
		switch(tip_type){
		case "0":
			tip_context='	<input class="form-control input-common" type="text" id="'+tip_id+'" name="'+tip_id+'" '+onlyRead+' '+requesttext+'/> ' ;
			
		break;
		
		case "1":
			tip_context='	<div class="input-common">\r\n		<select class="form-control" id="'+tip_id+'" name="'+tip_id+'">\r\n   		</select>\r\n			</div>';
			
		break;
		
		case "2":
			tip_context='	<label class="checkbox-inline">\r\n 			<input type="radio" id="'+tip_id+'" name="'+tip_id+'" value="选项" checked>\r\n  	</label>';
		
		break;	
		case "3":
			tip_context='	<label class="checkbox-inline">\r\n 			<input type="checkbox" id="'+tip_id+'" name="'+tip_id+'" value="选项">选项名\r\n 		</label>';
		
		break;
		case "4":
			tip_context='	<div class="input-group date form_date" data-date=""\r\n 		style="width:200px;" data-date-format="yyyy-mm-dd"\r\n  		data-link-field="testDateDiv" data-link-format="yyyy-mm-dd">\r\n 		<input class="form-control" size="16" type="text" placeholder="必填日期" id="'+tip_id+'" name="'+tip_id+'" value="" readonly>\r\n  		<span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span> </span> </div>';
			
		break;
		default:;
		}
		if(i==0||i%3==0){
			allTip+='<div class="form-group">\r\n';
		}
		
		allTip+='	<label class="control-label" col-md-2"><span class="'+request+'">\r\n' +
		'   	'+tip_name+'\r\n' +
		'	</span></label>\r\n'+
		'	<div class="col-md-2">\r\n'+
		'   	'+tip_context+'\r\n'+
		'	</div>\r\n';
		
		if((i+1)%3==0||i==num-1){
			allTip+='</div>\r\n';
		}	
	}
	$("#tip").val(allTip);
}

function ajaxPost(url,data){
	var postData;
	if(data==null){
		postData=data;
	}
	else{
		postData=JSON.stringify(data);
	}
	var returnData;
	$.ajax({
		type : 'POST',
		async:false,
		contentType:'application/json',
		url : url,
		dataType : 'json',
		data : postData,
		success : function(data) {
			returnData=data;
		},
		error : function() {
			alertNow(url+"提交失败！");
			returnData=null;
		}
	});
	return returnData;
}
