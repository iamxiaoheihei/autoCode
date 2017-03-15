//防止trim无效
String.prototype.trim = function() {
	return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
};

var commonCheck = function(field , fieldName , tip)
{
	var targetEle = document.getElementById(field);
	// 如果该字段的值为空
	if (targetEle.value.trim() == "")
	{
		alert(fieldName + "字段必须填写！");
		return false;
	}
	// 调用checkValidity()方法执行输入校验
	else if(!targetEle.checkValidity())
	{
		alert(fieldName + tip);
		return false;
	}
	return true;
};

function contentshow(){
	$("body").css("overflow","auto");
	$("#loadingdiv").fadeOut(400);
	$("#contentdiv").fadeIn(400);
}
function contenthide(){
	$("body").css("overflow","hidden");
	$("#loadingdiv").fadeIn(400);
	$("#contentdiv").fadeOut(400);
}
function directshow(){
	$("body").css("overflow","auto");
	$("#loadingdiv").hide();
	$("#contentdiv").show();
}
function directhide(){
	$("body").css("overflow","hidden");
	$("#loadingdiv").show();
	$("#contentdiv").hide();
}
//bootstrap的日期控件初始化
function dateset(){
	$('.form_date').datetimepicker({
        language:  'zh-CN',
        weekStart: 1,
        todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		minView: 2,
		forceParse: 0
    });
}

//bootstrap的日期控件初始化     可以选择小时版本
function datehourset(){
	$('.form_date').datetimepicker({
		format: 'yyyy-mm-dd hh:ii',
        language:  'zh-CN',
        weekStart: 1,
        todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		minView: 0,
		forceParse: 0
    });
}

//bootstrap的Popover控件初始化
function popoverset(){
	$("[data-toggle='popover']").popover({
		trigger:'manual'
	})
	.on('blur',function(){
		if($(this).parent().children("input[type='text'][readonly='false']").val()==''){
			$(this).popover('show');
		}
	})
	.on('focus',function(){
		$(this).popover('hide');
	});
}

//根据regID获取面包屑导航栏信息
function getRegBread(pathName){
	if(pathName==0){
		$("#level0",window.parent.document).addClass("hidden");
		$("#level1",window.parent.document).addClass("hidden");
		$("#level2",window.parent.document).addClass("hidden");
		$("#level3",window.parent.document).addClass("hidden");
	}else{
		var str= new Array();   
		str=pathName.split(">");
		$("#level0",window.parent.document).removeClass("hidden").html('<span class="glyphicon glyphicon-home"></span>');
		$("#level1",window.parent.document).removeClass("hidden").html('---').html(str[0]);
		$("#level2",window.parent.document).removeClass("hidden").html('---').html(str[1]);
		$("#level3",window.parent.document).removeClass("hidden").html('---').html(str[2]);
	}
		/*$.ajax({
			type : 'GET',
			url : 'sinze/reg/get/'+regID,
			data : null,
			success : function(data) {
				var pathName=data.pathName;
				var str= new Array();   
				str=pathName.split(">");
				$("#level0",window.parent.document).removeClass("hidden").html('<span class="glyphicon glyphicon-home"></span>');
				$("#level1",window.parent.document).removeClass("hidden").html('---').html(str[0]);
				$("#level2",window.parent.document).removeClass("hidden").html('---').html(str[1]);
				$("#level3",window.parent.document).removeClass("hidden").html('---').html(str[2]);
			},
			error : function(data){
				alert("获取模块信息出错");
			},
	});*/
	
}

//barcode function
function getCodeString(zfstr){
 	var zf = zfstr;
 	zf = zf.replace("0","_|_|__||_||_|");
 	zf = zf.replace("1","_||_|__|_|_||");
 	zf = zf.replace("2","_|_||__|_|_||");
 	zf = zf.replace("3","_||_||__|_|_|");
 	zf = zf.replace("4","_|_|__||_|_||");
 	zf = zf.replace("5","_||_|__||_|_|");
 	zf = zf.replace("7","_|_|__|_||_||");
 	zf = zf.replace("6","_|_||__||_|_|");
 	zf = zf.replace("8","_||_|__|_||_|");
 	zf = zf.replace("9","_|_||__|_||_|");
 	zf = zf.replace("a","_||_|_|__|_||");
 	zf = zf.replace("b","_|_||_|__|_||");
 	zf = zf.replace("c","_||_||_|__|_|");
 	zf = zf.replace("d","_|_|_||__|_||");
 	zf = zf.replace("e","_||_|_||__|_|");
 	zf = zf.replace("f","_|_||_||__|_|");
 	zf = zf.replace("g","_|_|_|__||_||");
 	zf = zf.replace("h","_||_|_|__||_|");
 	zf = zf.replace("i","_|_||_|__||_|");
 	zf = zf.replace("j","_|_|_||__||_|");
 	zf = zf.replace("k","_||_|_|_|__||");
 	zf = zf.replace("l","_|_||_|_|__||");
 	zf = zf.replace("m","_||_||_|_|__|");
 	zf = zf.replace("n","_|_|_||_|__||");
 	zf = zf.replace("o","_||_|_||_|__|");
 	zf = zf.replace("p","_|_||_||_|__|");
 	zf = zf.replace("r","_||_|_|_||__|");
 	zf = zf.replace("q","_|_|_|_||__||");
 	zf = zf.replace("s","_|_||_|_||__|");
 	zf = zf.replace("t","_|_|_||_||__|");
 	zf = zf.replace("u","_||__|_|_|_||");
 	zf = zf.replace("v","_|__||_|_|_||");
 	zf = zf.replace("w","_||__||_|_|_|");
 	zf = zf.replace("x","_|__|_||_|_||");
 	zf = zf.replace("y","_||__|_||_|_|");
 	zf = zf.replace("z","_|__||_||_|_|");
 	zf = zf.replace("-","_|__|_|_||_||");
 	zf = zf.replace("*","_|__|_||_||_|");
 	zf = zf.replace("/","_|__|__|_|__|");
 	zf = zf.replace("%","_|_|__|__|__|");
 	zf = zf.replace("+","_|__|_|__|__|");
 	zf = zf.replace(".","_||__|_|_||_|");
	return zf;
}

//部门下拉列表 获取部门初始化数据  形成部门树
//包含部门树元素ID一定要是deptTree
function deptset(){
	var setting = {
		view : {
			dblClickExpand : false,
			showLine : true
		},
		data : {
			simpleData : {
				enable : true
			}
		},
		callback : {
			onClick : onClick
		}
	};

	var zNodes = new Array();

	function onClick(e, treeId, treeNode) {
		var zTree = $.fn.zTree.getZTreeObj("deptTree");
		zTree.expandNode(treeNode);
		if(treeNode.level!=0){
			$("#deptName").val(treeNode.name);
			$("#deptID").val(treeNode.id);
			$("#deptTree").parent().slideUp("fast");
		}
	}

	$(document).ready(function() {
		var data={
				"searchParam":'all',
				"parentID":''
			};
			$.ajax({
				type : 'POST',
				contentType : 'application/json',
				url : url_dept_sel,
				dataType : 'json',
				data : JSON.stringify(data),
				success : function(data) {
				zNodes[0] = {
						id : 'dep_000000',
						pId : 'dep_000000',
						name : "部门列表",
						//图标
					    icon:"images/I001.gif",
					    open:true,
					};
				for ( var i = 1; i <= data.length; i++) {
					zNodes[i] = {
						id : data[i-1].id,
						pId : data[i-1].parentID,
						name : data[i-1].name,
						//其他图标
						icon:"images/I003.gif"
					};
				}
				$.fn.zTree.init($("#deptTree"), setting, zNodes);
				contentshow();
			},
			error : function() {
			}
		});
	});
	
	//部门下拉列表的位置
	var test = $("#deptName");
	var testOffset = $("#deptName").offset();
	$("#menuContent").css({left:testOffset.left + "px", top:testOffset.top + test.outerHeight() + "px"});
	
	$("#deptName").click(function(){
		if($("#menuContent").is(":hidden")){
			$("#menuContent").slideDown("fast");
		}
		else{
			$("#menuContent").slideUp("fast");
		}
	});
	
	$("body").click(function(){
		if (!(event.target.id == "deptName" || event.target.id == "menuContent" || $(event.target).parents("#menuContent").length>0)) {
			$("#menuContent").slideUp("fast");
		}
	});
}

//分页按钮
function pageButtonSet(data){
	//当前页
	var index = data.pageIndex;
	//总页数
	var totalPageCount = data.tatalPage;
	//总记录数
	var totalCount = data.totalRecord;

	$("#pageIndex").val(index);
	$("#pageCount").val(totalPageCount);
	
	$("#nowPage").html('').html(index);
	$("#totalCount").html('').html(totalCount);
	$("#totalPage").html('').html(totalPageCount);
	
	//如果不是第一页 显示 首页和上页
	if(index>1){
		$("#pageHome").show();
		$("#pageLast").show();
	}
	else{
		$("#pageHome").hide();
		$("#pageLast").hide();
	}
	//如果不是最后一页 显示 尾页和下页
	if (index < totalPageCount) {
		$("#pageNext").show();
		$("#pageEnd").show();
	}
	else{
		$("#pageNext").hide();
		$("#pageEnd").hide();
	}
}

//分页按钮
function ttyPageButton(data){
	//当前页
	var index = data.pageIndex;
	//总页数
	var totalPageCount = data.tatalPage;
	//总记录数
	var totalCount = data.totalRecord;

	$("#pageIndex").val(index);
	$("#pageCount").val(totalPageCount);
	
	$("#nowPage").html('').html(index);
	$("#totalCount").html('').html(totalCount);
	$("#totalPage").html('').html(totalPageCount);
	
	//如果是第一页  首页和上页禁用
	if(index==1){
		$("#pageHome").attr("disabled","disabled");
		$("#pagePrevious").attr("disabled","disabled");
	}
	//如果是最后一页  尾页和下页禁用
	if (index==totalPageCount) {
		$("#pageNext").attr("disabled","disabled");
		$("#pageLast").attr("disabled","disabled");
	}
}

//根据类型 总页数 查询页 获取将要显示的当前页数
function ttyPageIndexGet(type,pageCount,pageSearch){
	var pagedIndex = $("#pageIndex").val();
	/**
	 * 判断按钮的类型
	 */
	if (type == 1) {
		// 首页
		return 1;
	} else if (type == 2) {
		// 上一页
		return (parseInt(pagedIndex) - 1);
	} else if (type == 3) {
		// 下一页
		return (parseInt(pagedIndex) + 1);
	} else if (type == 4) {
		// 末页
		return (parseInt(pageCount));
	} else if (type == 5 ) {
		// 跳转页空
		if(pageSearch==''){
			return 0;
		}
		// 跳转页是否为正整数
		if(numberValid(pageSearch)==false){
			return 0;
		}
		// 跳转页是否大于最后页
		else if(pageSearch>pageCount){
			return 0;
		}
		// 搜索页等于当前页，页面不再跳转
		else if(pageSearch==pageIndex){
			return 0;
		}
		// 跳转页
		else{
		return (parseInt(pageSearch.trim()));
		}
	} else {
		return 1;
	}
}



//部门下拉列表 获取部门初始化数据  形成部门树
//包含部门树元素ID一定要是deptTree
function deptset(setType){
	var setting = {
		view : {
			dblClickExpand : false,
			showLine : true
		},
		data : {
			simpleData : {
				enable : true
			}
		},
		callback : {
			onClick : onClick
		}
	};

	var zNodes = new Array();
	
	//setType=0 可以选择所有节点  
	//=1 不能选择一级节点
	//=2 不能选择一、二级节点
	function onClick(e, treeId, treeNode) {
		var zTree = $.fn.zTree.getZTreeObj("deptTree");
		zTree.expandNode(treeNode);
		if(setType==0){
			$("#deptName").val(treeNode.name);
			$("#deptID").val(treeNode.id);
			$("#deptTree").parent().slideUp("fast");
		}
		else if(setType==1){
			if(treeNode.level!=0){
				$("#deptName").val(treeNode.name);
				$("#deptID").val(treeNode.id);
				$("#deptTree").parent().slideUp("fast");
			}
		}
		else if(setType==2){
			if(treeNode.level!=0&&treeNode.level!=1){
				$("#deptName").val(treeNode.name);
				$("#deptID").val(treeNode.id);
				$("#deptTree").parent().slideUp("fast");
			}
		}
	}

	$(document).ready(function() {
		var data={
				"searchParam":'all',
				"parentID":''
			};
			$.ajax({
				type : 'POST',
				contentType : 'application/json',
				url : url_dept_sel,
				dataType : 'json',
				data : JSON.stringify(data),
				success : function(data) {
				zNodes[0] = {
						id : 'dep_000000',
						pId : 'dep_000000',
						name : "部门列表",
						//图标
					    icon:"images/I001.gif",
					    open:true,
					};
				for ( var i = 1; i <= data.length; i++) {
					zNodes[i] = {
						id : data[i-1].id,
						pId : data[i-1].parentID,
						name : data[i-1].name,
						//其他图标
						icon:"images/I003.gif"
					};
				}
				$.fn.zTree.init($("#deptTree"), setting, zNodes);
				contentshow();
			},
			error : function() {
			}
		});
	});
	
	//部门下拉列表的位置
	var test = $("#deptName");
	var testOffset = $("#deptName").offset();
	$("#menuContent").css({left:testOffset.left + "px", top:testOffset.top + test.outerHeight() + "px"});
	
	$("#deptName").click(function(){
		if($("#menuContent").is(":hidden")){
			$("#menuContent").slideDown("fast");
		}
		else{
			$("#menuContent").slideUp("fast");
		}
	});
	
	$("body").click(function(){
		if (!(event.target.id == "deptName" || event.target.id == "menuContent" || $(event.target).parents("#menuContent").length>0)) {
			$("#menuContent").slideUp("fast");
		}
	});
}


//部门的下拉列表多选框
function deptCheckSet(){
	var setting = {
			check: {
				enable: true,
				chkboxType: {"Y":"", "N":""}
			},
			view: {
				dblClickExpand: false
			},
			data: {
				simpleData: {
					enable: true
				}
			},
			callback: {
				beforeClick: beforeClick,
				onCheck: onCheck
			}
		};

	function beforeClick(treeId, treeNode) {
		var zTree = $.fn.zTree.getZTreeObj("deptTree");
		zTree.checkNode(treeNode, !treeNode.checked, null, true);
		return false;
	}
	
	function onCheck(e, treeId, treeNode) {
		var zTree = $.fn.zTree.getZTreeObj("deptTree"),
		nodes = zTree.getCheckedNodes(true),
		v = "";
		var idstr="";
		for (var i=0, l=nodes.length; i<l; i++) {
			v += nodes[i].name + ",";
			idstr+=nodes[i].id + ",";
		}
		if (v.length > 0 ) v = v.substring(0, v.length-1);
		if (idstr.length > 0 ) idstr = idstr.substring(0, idstr.length-1);
		var cityObj = $("#deptName");
		cityObj.attr("value", v);
		$("#deptID").attr("value", idstr);
	}
	
	$("#deptName").click(function(){
		var deptObj = $("#deptName");
		var deptOffset = $("#deptName").offset(); 
		$("#menuContent").css({left:deptOffset.left + "px", top:deptOffset.top + deptObj.outerHeight() + "px"});
		if($("#menuContent").is(":hidden")){
			$("#menuContent").slideDown("fast");
		}
		else{
			$("#menuContent").slideUp("fast");
		}
	});
	
	var data={
			"searchParam":'all',
			"parentID":''
		};
		$.ajax({
			type : 'POST',
			contentType : 'application/json',
			url : url_dept_sel,
			dataType : 'json',
			data : JSON.stringify(data),
			success : function(data) {
			zNodes[0] = {
					id : 'dep_000000',
					pId : 'dep_000000',
					name : "部门列表",
					//图标
				    icon:"images/I001.gif",
				    open:true,
				    nocheck:true
				};
			for ( var i = 1; i <= data.length; i++) {
				zNodes[i] = {
					id : data[i-1].id,
					pId : data[i-1].parentID,
					name : data[i-1].name,
					//其他图标
					icon:"images/I003.gif"
				};
			}
			$.fn.zTree.init($("#deptTree"), setting, zNodes);
		},
		error : function() {
		}
	});
	
}


//通用弹出信息
//必须要配合通用弹出框myModal使用
function alertNow(getValue){
	$("#alertInfo").html(getValue);
	$("#myModal").modal('show');
}

//根据员工工号获取员工信息
function workerSelByNum(getValue){
	var data={"paramStr1":getValue};
	var nums;
	$.ajax({
		type : 'POST',
		async:false,
		contentType : 'application/json',
		url : 'sinze/oa/worker/workerSelByNum',
		dataType : 'json',
		data : JSON.stringify(data),
		success : function(data) {
				nums=data.name;
		},
		error : function() {
			nums='';
		}
	});
	return nums;
}

//根据员工姓名获取员工信息
function workerSelByName(getValue){
	var data={"paramStr1":getValue};
	var nums;
	$.ajax({
		type : 'POST',
		async:false,
		contentType : 'application/json',
		url : 'sinze/oa/worker/workerSelByName',
		dataType : 'json',
		data : JSON.stringify(data),
		success : function(data) {
			nums=data.serialNum;
		},
		error : function() {
			nums='';
		}
	});
	return nums;
}

//根据开始日期和结束日期  获取日期天数差
function getDateDiff(beginDate,endDate){
	var oDate1, oDate2, iDays;  
    oDate1 = new Date(beginDate);  
    oDate2 = new Date(endDate);  
    var iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24);  
    if ((oDate1 - oDate2) > 0){  
        return -iDays;  
    }  
    return iDays; 
}

//根据vocationType获取请假类型
function getVocationType(getValue){
	if(getValue==0){
		return '';
	}
	else if(getValue==1){
		return '事假';
	}
	else if(getValue==2){
		return '病假';
	}
	else if(getValue==3){
		return '年假';
	}
	else if(getValue==4){
		return '调休';
	}
	else if(getValue==5){
		return '其他';
	}
}

//加密
function idEncrypt(getValue){
	var test;
	$.ajax({
		type : 'POST',
		async:false,
		url : url_util_encrypt,
		data : 'regID='+getValue,
		success : function(data) {
			test=data;
		},
		error : function() {
			test='';
		}
	});
	return test;
}

//检验正整数
function numberValid(num){
	var pattern = /^[1-9]\d*$/; 
	if(pattern.test(num)){
		return true;
	}
	return false;
}

//名称过长只取前一部分
function shortenItem(getValue,getLen){
	if(getValue.length>getLen){
		return getValue.substr(0,getLen)+' ... ';
	}
	else{
		return getValue;
	}
}

/**
 * ajax的POST方法
 * @param url
 * @param data
 */
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

/**
 * ajax的GET方法
 * @param url
 * @param id
 */
function ajaxGet(url,id){
	var returnData;
	$.ajax({
		type : 'GET',
		async:false,
		url : url,
		dataType : 'json',
		data : "id="+id,
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

//根据form表单ID 获取form表单内input的JSON数据
//特别说明，元素不能被禁用（禁用的元素不会被包括在内），并且元素应当有含有 name 属性。提交按钮的值也不会被序列化。文件选择元素的数据也不会被序列化。
function getFormJson(id){
	var test=$("#"+id).serializeArray();
	var dataStr="{";
	for(var i=0;i<test.length;i++){
		var nameT=test[i].name;
		var valueT=test[i].value;
		dataStr=dataStr+"\""+nameT+"\":\""+valueT.trim()+"\",";
	}
	$("#"+id+" input[type='checkbox']").each(function(){
		if(!$(this).prop("checked")){
			dataStr=dataStr+"\""+$(this).attr("name")+"\":\"0\",";
		}
	});
	dataStr=dataStr.substring(0,dataStr.length-1);
	dataStr=dataStr+"}";
	var dataJson=JSON.parse(dataStr);
	return dataJson;
}

//根据formID和input的required属性 检测input是否为空 如果required属性有并且输入为空 自动聚焦到空的输入框
function checkFormValid(id){
	var test=$("#"+id).serializeArray();
	for(var i=0;i<test.length;i++){
		var nameT=test[i].name;
		var require=$("input[name='"+nameT+"']").prop("required");
		if(require){
			if($("input[name='"+nameT+"']").val().trim()==""){
				$("input[name='"+nameT+"']").focus();
				return false;
			}
		}
	}
	return true;
}

//将json数据加载到form表单中
function loadData(data){
    var key,value,tagName,type,arr;
    for(x in data){
        key = x;
        value = data[x];
        //class字段加载
        $("."+key).text(value);
        //name字段加载
        $("[name='"+key+"'],[name='"+key+"[]']").each(function(){
            tagName = $(this)[0].tagName;
            type = $(this).attr('type');
            if(tagName=='INPUT'){
                if(type=='radio'){
                    $(this).attr('checked',$(this).val()==value);
                }else if(type=='checkbox'){
                    arr = value.split(',');
                    for(var i =0;i<arr.length;i++){
                        if($(this).val()==arr[i]){
                            $(this).attr('checked',true);
                            break;
                        }
                    }
                }else{
                	if($(this).parent().hasClass("date")){
                		if(value!=null&&value!=''){
                			$(this).val(moment(value).format("YYYY-MM-DD HH:mm:ss"));
                		}else{
                			$(this).val(value);
                		}
                	}else{
                		$(this).val(value);
                	}
                }
            }else if(tagName=='TEXTAREA'){
                $(this).val(value);
            }else if(tagName=='SELECT'){
            	$(this).val(value);
            	$(this).change();
            }
        });
    }
}

//将json数据里面的null项目变成空的
function nullToEmp(data){
	for(x in data){
        if(data[x]==null){
        	data[x]="";
        }
	}
	return data;
}

//将json数据里面取回的对象身上的属性为null变成空的
function nullToEmpty(String){
	if(String==null){
		String="";
	}
	return String;
}
