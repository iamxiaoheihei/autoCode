<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>引用的js和css地址</title>
<!-- bootstrap -->
<link rel="stylesheet" href="bootstrap-3.3.5-dist/css/bootstrap.min.css" type="text/css"></link>
<!-- bootstrap日历 -->
<link rel="stylesheet" href="bootstrap-3.3.5-dist/css/bootstrap-datetimepicker.min.css" type="text/css"></link>
<!-- 通用 -->
<link rel="stylesheet" href="css/base.css" type="text/css"></link>
<!-- <link rel="stylesheet/less" href="css/base.less" type="text/css"></link> -->
</head>

<body style="height:0px;">

	<!-- 消息弹出框 -->
	<div class="modal fade" id="myModal" tabindex="0">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title text-center text-danger" id="myModal2Label">
						<strong id="alertInfo"></strong>
					</h4>
				</div>
				<!-- <div class="modal-body">
		            	在这里添加一些文本
		         </div> -->
				<div class="modal-footer">
					<button type="button" class="btn btn-default btn-raised" data-dismiss="modal">关闭
					</button>
					<!-- <button type="button" class="btn btn-primary">
               		提交更改
            		</button> -->
				</div>
			</div>
			<!-- /.modal-content -->
		</div>
		<!-- /.modal -->
	</div>
	<!-- 公用 -->	
	<script type="text/javascript" src="js/util/jquery-1.9.1.js"></script>
	<script type="text/javascript" src="js/util/pageUtil.js"></script>
	<script type="text/javascript" src="js/util/ajaxfileupload.js"></script>
	<script type="text/javascript" src="js/util/path.js"></script>
	<script type="text/javascript" src="js/util/check.js"></script>
	<script type="text/javascript" src="js/util/functionUtil.js"></script>
	<script type="text/javascript" src="js/util/typeUtil.js"></script><!-- 类型的工具类 -->
	<script type="text/javascript" src="js/util/moment.js"></script>
	<script type="text/javascript" src="js/util/less.js"></script>
	<!-- bootstrap引用 -->
	<script type="text/javascript" src="bootstrap-3.3.5-dist/js/bootstrap.min.js"></script>
	<!-- bootstrap确认框 -->
	<script type="text/javascript" src="bootstrap-3.3.5-dist/js/bootstrap-confirmation.js"></script>
	<!-- bootstrap日期 -->
	<script type="text/javascript" src="bootstrap-3.3.5-dist/js/bootstrap-datetimepicker.min.js"></script>
	<script type="text/javascript" src="bootstrap-3.3.5-dist/js/bootstrap-datetimepicker.js"></script>
	<script type="text/javascript" src="bootstrap-3.3.5-dist/js/bootstrap-datetimepicker.zh-CN.js"></script>
	
	
	<!-- 操作中loading弹框 -->
	<div class="modal fade" id="loading" tabindex="-1">
		<div class="modal-dialog" style="width:850px;">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title text-center text-info" id="myModal2Label">
						<strong>操作中。。。</strong>
					</h4>
				</div>
				<div class="modal-body"></div>
			</div>
		</div>
	</div>
	
</body>
</html>