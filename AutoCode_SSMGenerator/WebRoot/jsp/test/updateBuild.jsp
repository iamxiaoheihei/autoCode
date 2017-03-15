
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
  
  <body style="margin-left:40%;margin-top:2%;background-color:#B2DFEE">
  	<form>
  	<div id="tip_build">
  	<%@include file="../main/quote.jsp"%>
	</div>
    	<table>
    	    <tr><td>该类所属包<input type="text" id="packageName" value=""/></td></tr>
    	    <tr><td>请输入类名<input type="text" id="className" value=""/></td></tr>
    	    <tr><td>请输入想要改变的属性字段(首字母大写)</td></tr>
    	    <tr><td><input type="text" id="propertyName" value=""/>
    	    <input type="button" id="onclick" value="点击生成该属性的后台配置"/></td></tr>
    	</table>
    </form>
    <div id="sky" style="margin-left: -880px"></div>
    <script type="text/javascript" src="jsp/test/updateBuild.js" charset="utf-8"></script>
    <script src="jsp/test/jquery.jqlouds.min.js"></script>
  </body>
</html>
