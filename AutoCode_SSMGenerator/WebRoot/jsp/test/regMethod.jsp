
<%@ page language="java" import="java.util.*"  contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>注册中心注册页面</title>
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
  
  <body style="margin-left:30%;margin-top:2%;background-color:#B2DFEE">
  	<form>
  	<div id="tip_build">
  	<%@include file="../main/quote.jsp"%>
	</div>
    	<table>
    	    <tr>
    	        <td>注册方法对应model所属包<input type="text" id="packageName" value=""/></td>
    	        <td>注册方法对应model类名<input type="text" id="className" value=""/></td>
    	    </tr>
    	    <tr>
    	        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Service方法名<input type="text" id="serviceMethodName" value=""/></td>
    	        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Service方法入参<input type="text" id="serviceParamIn" value=""/></td>
    	    </tr> 
    	    <tr>
		   	    <td>Service方法入参备注</td> 
		   	    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Service方法出参<input type="text" id="serviceParamOut" value=""/></td>
    	    </tr>
    	    <tr >
    			<td colspan="2"><textarea id="serviceInRemark" rows="5" cols="100"></textarea></td>
    		</tr>
    		<tr>
		   	    <td>Service方法出参备注</td> 
    	    </tr>
    	    <tr >
    			<td colspan="2"><textarea id="serviceOutRemark" rows="5" cols="100"></textarea></td>
    		</tr>
    	    <tr>
    	       <td>Dao方法名<input type="text" id="daoMethodName" value=""/></td>
    	       <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dao方法入参<input type="text" id="daoParamIn" value=""/></td>
    	    </tr>
    	    <tr>
	    	    <td>Dao方法入参备注</td> 
	    	   <!--  <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dao方法出参<input type="text" id="daoParamOut" value=""/></td> -->
    	    </tr>
    	    <tr >
    			<td colspan="2"><textarea id="daoInRemark" rows="5" cols="100"></textarea></td>
    		</tr>
    		<!-- <tr>
	    	    <td>Dao方法出参备注</td> 
    	    </tr>
    	    <tr >
    			<td colspan="2"><textarea id="daoOutRemark" rows="5" cols="100"></textarea></td>
    		</tr> -->
    	     <tr >
    			<td>注册人<input type="text" id="regName" value=""/></td>
    		</tr>
    	    <tr>
    	        <td><input type="button" id="onclick" value="点击注册并生成service到dao层方法"/></td>
    	    </tr>
    	</table>
    </form>
    <div id="sky" style="margin-left: -880px"></div>
    <script type="text/javascript" src="jsp/test/regMethod.js" charset="utf-8"></script>
    <script src="jsp/test/jquery.jqlouds.min.js"></script>
  </body>
</html>
