



/**
 * 获取分页的当前页数的公共方法
 * @param type
 * @returns
 */
// TODO 获取分页的当前页数的公共方法
function getPagerIndexUtil(type) {
	// 获取当前页
	var pagedIndex = $("#pageIndex").val();
	pageIndex = Number(pageIndex);
	// 获取总页数
	var pageCount = $("#pageCount").val();
	// 获取搜索页
	var pageSearch = $("#pageSearch").val();
	/**
	 * 判断按钮的类型
	 */
	var pageindex;
	if (type == 1) {
		// 首页
		pageindex = 1;
	} else if (type == 2) {
		// 上一页
		pageindex = (parseInt(pagedIndex) - 1);
	} else if (type == 3) {
		// 下一页
		pageindex = (parseInt(pagedIndex) + 1);
	} else if (type == 4) {
		// 末页
		pageindex = (parseInt(pageCount));
	} else if (type == 5) {
		// 跳转页空
		if (pageSearch == '') {
			alertNow("跳转页数据不能为空！");
			return;
		}
		// 跳转页是否为正整数
		if (numberValid(pageSearch) == false) {
			alertNow("跳转页数据不是正整数！");
			return;
		}
		// 跳转页是否大于最后页
		else if (Number(pageSearch) > Number(pageCount)) {
			alertNow("跳转页数据不能超过总页数！");
			return;
		}
		// 搜索页等于当前页，页面不再跳转
		else if (pageSearch == pageIndex) {
			return;
		}
		// 跳转页
		pageindex = (parseInt(pageSearch.trim()));
	} else {
		pageindex = 1;
	}
	// 判断显示或隐藏分页按钮
	if (pageindex == 1) {
		$("#pageHome").attr("disabled", "disabled");
		$("#pagePrevious").attr("disabled", "disabled");
		$("#pageNext").removeAttr('disabled');
		$("#pageLast").removeAttr('disabled');
	} else if (pageindex > 1 && pageindex < pageCount) {
		$("#pageNext").removeAttr('disabled');
		$("#pageLast").removeAttr('disabled');
		$("#pageHome").removeAttr('disabled');
		$("#pagePrevious").removeAttr('disabled');
	} else if (pageindex == pageCount) {
		$("#pageHome").removeAttr('disabled');
		$("#pagePrevious").removeAttr('disabled');
		$("#pageNext").attr("disabled", "disabled");
		$("#pageLast").attr("disabled", "disabled");
	}
	return pageindex;
}

/**
 * 设置分页中的数据参数
 */
function setPagerData(pageIndex,tatalPage,totalRecord){
	//当前页
	$("#nowPage").text(pageIndex);
	$("#pageIndex").val(pageIndex);
	//总页数
	$("#totalPage").text(tatalPage);
	$("#pageCount").val(tatalPage);
	//总数据
	$("#totalCount").text(totalRecord);
	if(tatalPage==1){
		$("#pageHome").attr("disabled", "disabled");
		$("#pagePrevious").attr("disabled", "disabled");
		$("#pageNext").attr("disabled", "disabled");
		$("#pageLast").attr("disabled", "disabled");
	}
}



/**
 * 获取分页的当前页数的公共方法
 * @param type
 * @returns
 */
// TODO 获取分页的当前页数的公共方法
function getPagerIndexUtils(type,sign) {
	// 获取当前页
	var pagedIndex = $("#"+sign+" #pageIndex").val();
	// 获取总页数
	var pageCount = $("#"+sign+" #pageCount").val();
	// 获取搜索页
	var pageSearch = $("#"+sign+" #pageSearch").val();
	/**
	 * 判断按钮的类型
	 */
	var pageindex;
	if (type == 1) {
		// 首页
		pageindex = 1;
	} else if (type == 2) {
		// 上一页
		pageindex = (parseInt(pagedIndex) - 1);
	} else if (type == 3) {
		// 下一页
		pageindex = (parseInt(pagedIndex) + 1);
	} else if (type == 4) {
		// 末页
		pageindex = (parseInt(pageCount));
	} else if (type == 5) {
		// 跳转页空
		if (pageSearch == '') {
			alertNow("跳转页数据不能为空！");
			return;
		}
		// 跳转页是否为正整数
		if (numberValid(pageSearch) == false) {
			alertNow("跳转页数据不是正整数！");
			return;
		}
		// 跳转页是否大于最后页
		else if (Number(pageSearch) > Number(pageCount)) {
			alertNow("跳转页数据不能超过总页数！");
			return;
		}
		// 搜索页等于当前页，页面不再跳转
		else if (pageSearch == pageIndex) {
			return;
		}
		// 跳转页
		pageindex = (parseInt(pageSearch.trim()));
	} else {
		pageindex = 1;
	}
	// 判断显示或隐藏分页按钮
	if (pageindex == 1) {
		$("#"+sign+" #pageHome").attr("disabled", "disabled");
		$("#"+sign+" #pagePrevious").attr("disabled", "disabled");
		$("#"+sign+" #pageNext").removeAttr('disabled');
		$("#"+sign+" #pageLast").removeAttr('disabled');
	} else if (pageindex > 1 && pageindex < pageCount) {
		$("#"+sign+" #pageNext").removeAttr('disabled');
		$("#"+sign+" #pageLast").removeAttr('disabled');
		$("#"+sign+" #pageHome").removeAttr('disabled');
		$("#"+sign+" #pagePrevious").removeAttr('disabled');
	} else if (pageindex == pageCount) {
		$("#"+sign+" #pageHome").removeAttr('disabled');
		$("#"+sign+" #pagePrevious").removeAttr('disabled');
		$("#"+sign+" #pageNext").attr("disabled", "disabled");
		$("#"+sign+" #pageLast").attr("disabled", "disabled");
	}
	return pageindex;
}

/**
 * 设置分页中的数据参数
 */
function setPagerDatas(pageOffset,tatalPage,totalRecord,sign){
	//当前页
	$("#"+sign+" #nowPage").text(pageOffset);
	$("#"+sign+" #pageIndex").val(pageOffset);
	//总页数
	$("#"+sign+" #totalPage").text(tatalPage);
	$("#"+sign+" #pageCount").val(tatalPage);
	//总数据
	$("#"+sign+" #totalCount").text(totalRecord);
	if(tatalPage==1){
		$("#"+sign+" #pageHome").attr("disabled", "disabled");
		$("#"+sign+" #pagePrevious").attr("disabled", "disabled");
		$("#"+sign+" #pageNext").attr("disabled", "disabled");
		$("#"+sign+" #pageLast").attr("disabled", "disabled");
	}
}