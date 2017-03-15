
<%@ page language="java" import="java.util.*"  contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>jsp标签生成器</title>
    <link rel="stylesheet" href="bootstrap-3.3.5-dist/css/bootstrap.min.css" type="text/css"></link>
    
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  </head>
  
  <body style="margin-left:20%;margin-top:2%;background-color:#B2DFEE">
  	<form>
  	<div id="tip_build">
  	<%@include file="../main/quote.jsp"%>
	</div>

	
	
    	
    	   <p>该类所属包<input type="text" id="packageName" value=""/></p>
    	    <p>请输入类名<input type="text" id="className" value=""/></p>
    	    <p><input type="button" id="onclick" value="点击搜索该类"/></p>
    	    <p>请输入注册人<input type="text" id="regName" value=""/></p>
<div class="panel-group" id="accordion">
	<div class="panel panel-default">
		<div class="panel-heading">
			<h4 class="panel-title">
				<a data-toggle="collapse" data-parent="#accordion" 
				   href="#collapseOne">
					基础方法部分
				</a>
			</h4>
		</div>
		<div id="collapseOne" class="panel-collapse collapse in">
			<div class="panel-body">
				生成添加方法<input type="radio" name="controllerType" value="add" checked/>&nbsp;
    	    生成删除方法<input type="radio"  name="controllerType" value="del"/>&nbsp;
    	    生成修改方法<input type="radio" id="mod" name="controllerType" value="mod"/>&nbsp;
    	    生成查看方法<input type="radio" id="get" name="controllerType" value="get"/>&nbsp;
    	    生成分页方法<input type="radio" id="pager" name="controllerType" value="page"/>&nbsp;
    	       生成list方法<input type="radio" id="list" name="controllerType" value="list"/>&nbsp;
			</div>
		</div>
	</div>
	<div class="panel panel-default">
		<div class="panel-heading">
			<h4 class="panel-title">
				<a data-toggle="collapse" data-parent="#accordion" 
				   href="#collapseTwo">
					修改字段方法 部分
				</a>
			</h4>
		</div>
		<div id="collapseTwo" class="panel-collapse collapse">
			<div class="panel-body">
				 <p>生成属性字段修改方法<input type="radio"  name="controllerType" value="modProperty"/>&nbsp;&nbsp;请输入想要改变的属性字段(首字母大写)<input type="text" id="propertyName" value=""/></p>
			</div>
		</div>
	</div>
	<div class="panel panel-default">
		<div class="panel-heading">
			<h4 class="panel-title">
				<a data-toggle="collapse" data-parent="#accordion" 
				   href="#collapseThree">
					其余复杂方法生成部分（仅生成controller）
				</a>
			</h4>
		</div>
		<div id="collapseThree" class="panel-collapse collapse">
			<div class="panel-body">
				<p>其他<input type="radio"  name="controllerType" value="others"/>&nbsp;&nbsp;请输入controller方法名<input type="text" id="controllerName"> &nbsp;&nbsp;请输入接口地址<input type="text" id="apiInfoUrl"></p> 
    	    <p>填写controller的RequestMapping<input type="text" id="RequestMapping" value=""/></p>
			</div>
		</div>
	</div>
</div>
    	    
    	    <p><input type="button" id="create" value="点击生成后台相关类及方法" /></p>
    		<p><textarea id="tip" rows="16" cols="150"></textarea></p>
    		<p><input type="button" id="submit" value="点击生成前台代码"/><p>
    </form>
    <div id="sky" style="margin-left: -520px"></div>
    <script type="text/javascript" src="bootstrap-3.3.5-dist/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="jsp/test/builder.js" charset="utf-8"></script>
    <script src="jsp/test/jquery.jqlouds.min.js"></script>
    
  </body>
</html>
