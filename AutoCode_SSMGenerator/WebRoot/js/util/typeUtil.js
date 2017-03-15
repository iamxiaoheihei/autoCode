//获取用户的激活状态
function getUserActive(id){
	if(id==0){return "未激活";}
	else if(id==1){return "已激活";}
	else if(id==2){return "禁用";}
	else if(id==3){return "锁定";}
}

//获取红包的状态
function getRedPacketStatus(id){
	if(id==0){return "失效";}
	else if(id==1){return "生效";}
	else if(id==2){return "已使用";}
	else if(id==3){return "待划转";}
	else if(id==4){return "已返现";}
}

//获取银行类型的数组
function getBankTypeArr(){
	var arr=new Array();
	arr.push({"id":"00","name":"中央银行"});
	arr.push({"id":"01","name":"政策性银行"});
	arr.push({"id":"02","name":"国有商业银行"});
	arr.push({"id":"03","name":"全国性股份制银行"});
	arr.push({"id":"04","name":"邮政储蓄银行"});
	arr.push({"id":"10","name":"城市商业银行"});
	arr.push({"id":"11","name":"农村商业银行"});
	arr.push({"id":"12","name":"农村合作银行"});
	arr.push({"id":"20","name":"中外合资银行"});
	arr.push({"id":"21","name":"外资法人银行"});
	arr.push({"id":"22","name":"侨资法人银行"});
	arr.push({"id":"23","name":"外国银行分行"});
	return arr;
}
//银行类型
function getBankTypeName(id){
	if(id=="00"){return "中央银行";}
	if(id=="01"){return "政策性银行";}
	if(id=="02"){return "国有商业银行";}
	if(id=="03"){return "全国性股份制银行";}
	if(id=="04"){return "邮政储蓄银行";}
	if(id=="10"){return "城市商业银行";}
	if(id=="11"){return "农村商业银行";}
	if(id=="12"){return "农村合作银行";}
	if(id=="20"){return "中外合资银行";}
	if(id=="21"){return "外资法人银行";}
	if(id=="22"){return "侨资法人银行";}
	if(id=="23"){return "外国银行分行";}
}

/**
 * 获取协议类型数组
 * @returns {Array}
 */
function getAgreementArray(){
	var arr=new Array();
	arr.push({"id":"00","name":"其他协议"});
	arr.push({"id":"01","name":"借款协议"});
	arr.push({"id":"02","name":"投资协议"});
	arr.push({"id":"03","name":"注册服务协议"});
	arr.push({"id":"04","name":"债权转让协议"});
	return arr;
}

/**
 * 获取账户状态数组
 * @returns {Array}
 */
function getAccountStatusArr(){
	var arr=new Array();
	arr.push({"id":"0","name":"未激活"});
	arr.push({"id":"1","name":"已激活"});
	arr.push({"id":"2","name":"锁定"});
	return arr;
}

/**
 * 获取类型名称
 * @param id
 * @returns {String}
 */
function getAgreementName(id){
	if(id=="00"){return "其他协议";}
	if(id=="01"){return "借款协议";}
	if(id=="02"){return "投资协议";}
	if(id=="03"){return "注册服务协议";}
	if(id=="04"){return "债权转让协议";}
}

/**
 * 是否的名称
 * @param id
 * @returns {String}
 */
function getwhetherName(id){
	if(id=="0"){return "是";}
	if(id=="1"){return "否";}
}


/**
 * 是否的名称
 * @param id
 * @returns {String}
 */
function getwhetherNames(id){
	if(id=="1"){return "是";}
	if(id=="0"){return "否";}
}


/**
 * 获取项目设立人类型数组
 * @returns {Array}
 */
function getSetupUserTypeArray(){
	var arr=new Array();
	arr.push({"id":"0","name":"平台系统管理员"});
	arr.push({"id":"1","name":"合作机构"});
	arr.push({"id":"2","name":"普通用户"});
	return arr;
}

/**
 * 获取项目设立人类型名称
 * @param id
 * @returns {String}
 */
function getSetupUserTypeName(id){
	if(id=="0"){return "平台系统管理员";}
	if(id=="1"){return "合作机构";}
	if(id=="2"){return "普通用户";}
}

/**
 * 获取票据类型信息
 * @returns {Array}
 */
function getBillTypeArray(){
	var arr=new Array();
	arr.push({"id":"1","name":"银行票据"});
	arr.push({"id":"2","name":"商业票据"});
	return arr;
}

/**
 * 获取票据类型名称
 * @param id
 * @returns {String}
 */
function getBillTypeName(id){
	if(id=="1"){return "银行票据";}
	if(id=="2"){return "商业票据";}
}

/**
 * 获取项目状态信息
 * @returns {Array}
 */
function getProjectStateArray(){
	var arr=new Array();
	arr.push({"id":"1","name":"初审待审"});
	arr.push({"id":"15","name":"待复审"});
	arr.push({"id":"16","name":"复审未通过"});
	arr.push({"id":"2","name":"待发布"});
	arr.push({"id":"3","name":"初审审核未通过"});
	arr.push({"id":"4","name":"招标中"});
	arr.push({"id":"5","name":"满标待审核"});
	arr.push({"id":"6","name":"满标待划转"});
	arr.push({"id":"7","name":"满标未通过"});
	arr.push({"id":"8","name":"已过期"});
	arr.push({"id":"9","name":"已删除"});
	arr.push({"id":"10","name":"已流标"});
//	没有用
	arr.push({"id":"11","name":"已划转"});
//	没有用
	arr.push({"id":"12","name":"投标完成"});
	arr.push({"id":"13","name":"还款中"});
	arr.push({"id":"14","name":"还款完成"});
	return arr;
}

/**
 * 获取项目状态名称
 * @param id
 * @returns {String}
 */
function getProjectStateName(id){
	if(id=="1"){return "初审待审";}
	if(id=="15"){return "待复审";}
	if(id=="16"){return "复审未通过";}
	if(id=="2"){return "待发布";}
	if(id=="3"){return "初审审核未通过";}
	if(id=="4"){return "招标中";}
	if(id=="5"){return "满标待审核";}
	if(id=="6"){return "满标待划转";}
	if(id=="7"){return "满标未通过";}
	if(id=="8"){return "已过期";}
	if(id=="9"){return "已删除";}
	if(id=="10"){return "已流标";}
	if(id=="11"){return "已划转";}
	if(id=="12"){return "投标完成";}
	if(id=="13"){return "还款中";}
	if(id=="14"){return "还款完成";}
}


/**
 * 获取还款状态的名称
 * @param id
 * @returns {String}
 */
function repaymentStatusName(id){
	if(id=="0"){return "招标中";}
	if(id=="1"){return "待还款";}
	if(id=="2"){return "已还款";}
	if(id=="3"){return "计划失效";}
	if(id=="4"){return "提前还款";}
}

/**
 * 获取还款计划状态的名称
 * @param id
 * @returns {String}
 */
function repayPlanStatusName(id){
	if(id=="0"){return "失效";}
	if(id=="1"){return "生效";}
	if(id=="2"){return "已完成";}
	if(id=="3"){return "已作废";}
}


/**
 * 审核的名称
 * @param id
 * @returns {String}
 */
function getCheckName(id){
	if(id=="0"){return "拒绝";}
	if(id=="1"){return "通过";}
	if(id=="2"){return "未审核";}
}


/**
 * 获取平台信息的类型
 * @returns {Array}
 */
function getNewsInfoArray(){
	var arr=new Array();
	arr.push({"id":"1","name":"通知公告"});
	arr.push({"id":"2","name":"安全保障"});
	arr.push({"id":"3","name":"联系我们"});
	arr.push({"id":"4","name":"媒体报道"});
	arr.push({"id":"5","name":"最新动态"});
	arr.push({"id":"6","name":"成功故事"});
	arr.push({"id":"7","name":"投资策略"});
	arr.push({"id":"8","name":"票据小贴士"});
	arr.push({"id":"9","name":"股权小贴士"});
	arr.push({"id":"10","name":"私募小帖士"});
	arr.push({"id":"11","name":"客服电话"});
	arr.push({"id":"12","name":"常见问题"});
	arr.push({"id":"13","name":"充值提现"});
	arr.push({"id":"14","name":"名词解释"});
	arr.push({"id":"15","name":"法律法规"});
	arr.push({"id":"16","name":"公司简介"});
	arr.push({"id":"17","name":"团队介绍"});
	arr.push({"id":"18","name":"政府支持"});
	arr.push({"id":"19","name":"合作伙伴"});
	arr.push({"id":"20","name":"网站公告"});
	return arr;
}

/**
 * 获取平台信息类型的名称
 * @param id
 * @returns {String}
 */
function getNewsInfoName(id){
	if(id=="1"){return "通知公告";}
	if(id=="2"){return "安全保障";}
	if(id=="3"){return "联系我们";}
	if(id=="4"){return "媒体报道";}
	if(id=="5"){return "最新动态";}
	if(id=="6"){return "成功故事";}
	if(id=="7"){return "投资策略";}
	if(id=="8"){return "票据小贴士";}
	if(id=="9"){return "股权小贴士";}
	if(id=="10"){return "私募小帖士";}
	if(id=="11"){return "客服电话";}
	if(id=="12"){return "常见问题";}
	if(id=="13"){return "充值提现";}
	if(id=="14"){return "名词解释";}
	if(id=="15"){return "法律法规";}
	if(id=="16"){return "公司简介";}
	if(id=="17"){return "团队介绍";}
	if(id=="18"){return "政府支持";}
	if(id=="19"){return "合作伙伴";}
	if(id=="20"){return "网站公告";}
}

/**
 * 获取信息的单条或多条信息
 */
function getSingleSignVal(num){
	if(num==2||num==11||num==16||num==18){
		return 1;
	}else{
		return 2;
	}
}

/**
 * 获取公司类型
 * @returns {Array}
 */
function getCompanyTypeArray(){
	var arr=new Array();
	arr.push({"id":"1","name":"外资企业"});
	arr.push({"id":"2","name":"无限公司"});
	arr.push({"id":"3","name":"有限责任公司"});
	arr.push({"id":"4","name":"股份有限责任公司"});
	return arr;
}

/**
 * 获取公司类型名称
 * @param id
 * @returns {String}
 */
function getCompanyTypeName(id){
	if(id=="1"){return "外资企业";}
	if(id=="2"){return "无限公司";}
	if(id=="3"){return "有限责任公司";}
	if(id=="4"){return "股份有限责任公司";}
}


/**
 * 获取信息类单条数据类型
 * @returns {Array}
 */
function getSingleSignArray(){
	var arr=new Array();
	arr.push({"id":"1","name":"企业简介"});
	arr.push({"id":"2","name":"客服电话"});
	return arr;
}

/**
 * 获取信息类单条数据类型名称
 * @param id
 * @returns {String}
 */
function getSingleSignName(id){
	if(id=="1"){return "企业简介";}
	if(id=="2"){return "客服电话";}
}

/**
 * 获取短信模板启用状态列表
 * @returns {Array}
 */
function getEnableStateArray(){
	var arr=new Array();
	arr.push({"id":"0","name":"启用"});
	arr.push({"id":"1","name":"停用"});
	return arr;
}

/**
 * 获取短信模板启用状态名称
 * @param id
 * @returns {String}
 */
function getEnableStateName(id){
	if(id=="0"){return "启用";}
	if(id=="1"){return "停用";}
}


/**
 * 获取短信模板类型列表
 * @returns {Array}
 */
function getTemplateTypeArray(){
	var arr=new Array();
	arr.push({"id":"2","name":"客户"});
	arr.push({"id":"1","name":"平台"});
	return arr;
}

/**
 * 获取短信模板类型名称
 * @param id
 * @returns {String}
 */
function getTemplateTypeName(id){
	if(id=="1"){return "平台";}
	if(id=="2"){return "客户";}
}

/**
 * 获取发送短信类型列表
 * @returns {Array}
 */
function getSendTypeArray(){
	var arr=new Array();
	arr.push({"id":"1","name":"通知"});
	arr.push({"id":"2","name":"催费"});
	arr.push({"id":"3","name":"广告"});
	arr.push({"id":"4","name":"节日"});
	return arr;
}

/**
 * 获取发送短信类型名称
 * @param id
 * @returns {String}
 */
function getSendTypeName(id){
	if(id=="1"){return "通知";}
	if(id=="2"){return "催费";}
	if(id=="3"){return "广告";}
	if(id=="4"){return "节日";}
	
}


/**
 * 获取发送短信发送状态名称
 * @param id
 * @returns {String}
 */
function getSendStatusName(id){
	if(id=="1"){return "短信发送成功";}
	if(id=="2"){return "数据格式错误";}
	if(id=="3"){return "发送号码过多";}
	if(id=="4"){return "流量过大";}
	if(id=="5"){return "发送内容过多";}
	if(id=="6"){return "没有有效号码";}
	if(id=="7"){return "内容中有屏蔽字";}
	if(id=="8"){return "服务器异常";}
	if(id=="9"){return "其他错误";}
}


/**
 * 获取站内信息的状态信息
 */
function getMessageStatusName(id){
	if(id=="1"){return "发送成功";}
	if(id=="2"){return "已阅读";}
	if(id=="3"){return "发件人删除";}
	if(id=="4"){return "收件人删除";}
}


/**
 * 投资转让的状态
 */
function getInvestTransApplyName(id){
	if(id=="0"){return "提交申请";}
	if(id=="1"){return "申请成功";}
	if(id=="2"){return "被拒绝";}
}


/**
 * 根据类型数组和ID 获取类型名称
 * @param arr
 * @param id
 * @returns
 */
function getTypeName(arr,id){
	for(var i=0;i<arr.length;i++){
		if(arr[i].id==id){
			return arr[i].name;
		}
	}
}

/**
 * 教育水平
 * @returns {Array}
 */
function getEducationArr(){
	var arr=new Array();
	arr.push({"id":"0","name":"小学"});
	arr.push({"id":"1","name":"初中"});
	arr.push({"id":"2","name":"高中"});
	arr.push({"id":"3","name":"中专"});
	arr.push({"id":"4","name":"大专"});
	arr.push({"id":"5","name":"本科"});
	arr.push({"id":"6","name":"硕士"});
	arr.push({"id":"7","name":"博士"});
	return arr;
}

/**
 * 教育水平
 * @param id
 * @returns {String}
 */
function getEducationName(id){
	if(id=="0"){return "小学";}
	if(id=="1"){return "初中";}
	if(id=="2"){return "高中";}
	if(id=="3"){return "中专";}
	if(id=="4"){return "大专";}
	if(id=="5"){return "本科";}
	if(id=="6"){return "硕士";}
	if(id=="7"){return "博士";}
}

/**
 * 性别
 * @returns {Array}
 */
function getSexArr(){
	var arr=new Array();
	arr.push({"id":"male","name":"男"});
	arr.push({"id":"female","name":"女"});
	return arr;
}

/**
 * 性别
 * @param id
 * @returns {String}
 */
function getSexName(id){
	if(id=="male"){return "男";}
	if(id=="female"){return "女";}
}

/**
 * 是否有房 是否有车
 * @returns {Array}
 */
function getHouseArr(){
	var arr=new Array();
	arr.push({"id":"0","name":"无"});
	arr.push({"id":"1","name":"有"});
	arr.push({"id":"2","name":"保密"});
	return arr;
}

/**
 * 是否有房 是否有车
 * @param id
 * @returns {String}
 */
function getHouseName(id){
	if(id=="0"){return "无";}
	if(id=="1"){return "有";}
	if(id=="2"){return "保密";}
}

/**
 * 婚姻状况
 * @returns {Array}
 */
function getMarryArr(){
	var arr=new Array();
	arr.push({"id":"0","name":"未婚"});
	arr.push({"id":"1","name":"已婚"});
	arr.push({"id":"2","name":"利益"});
	arr.push({"id":"3","name":"保密"});
	return arr;
}

/**
 * 婚姻状况
 * @param id
 * @returns {String}
 */
function getMarryName(id){
	if(id=="0"){return "未婚";}
	if(id=="1"){return "已婚";}
	if(id=="2"){return "利益";}
	if(id=="3"){return "保密";}
}

/**
 * 根据类型数组和ID 获取类型名称
 * @param arr
 * @param id
 * @returns
 */
function getTypeName(arr,id){
	for(var i=0;i<arr.length;i++){
		if(arr[i].id==id){
			return arr[i].name;
		}
	}
	return "";
}

/**
 * 交易状态
 * @param id
 * @returns {String}
 */
function getTradeStatus(id){
	if(id==0){return "交易失败";}
	if(id==1){return "交易成功";}
	if(id==2){return "交易未完成";}
}

/*交易类型*/
function getTradeTypeArr(){
	var arr=new Array();
	arr.push({"id":"0","name":"充值"});
	arr.push({"id":"1","name":"提现"});
	arr.push({"id":"A","name":"充值"});
	arr.push({"id":"B","name":"提现"});
	arr.push({"id":"2","name":"投资"});
	arr.push({"id":"3","name":"收款"});
	arr.push({"id":"4","name":"融资"});
	arr.push({"id":"5","name":"还款"});
	arr.push({"id":"6","name":"-"});
	arr.push({"id":"7","name":"撤投"});
	return arr;
}

//获取银行卡绑定状态
function getBankStatus(id){
	if(id==0){return "未绑定";}
	else if(id==1){return "已绑定";}
	else if(id==2){return "已解绑";}
	else if(id==3){return "绑定验证中";}
	else if(id==4){return "解绑验证中";}
}

//第三方支付的操作类型编号
function get3rdTypeName(){
	var arr=new Array();
	arr.push({"id":"","name":"全部"});
	arr.push({"id":"0010","name":"直接转账"});
	arr.push({"id":"0021","name":"注册"});
	arr.push({"id":"0001","name":"充值"});
	arr.push({"id":"0002","name":"提现"});
	arr.push({"id":"0005","name":"转账确认"});
	arr.push({"id":"0006","name":"绑卡"});
	arr.push({"id":"0007","name":"解绑"});
	arr.push({"id":"0008","name":"单笔查询"});
	arr.push({"id":"0008","name":"重置密码"});
	arr.push({"id":"0004","name":"转账授权"});
	arr.push({"id":"0003","name":"冻结"});
	arr.push({"id":"0022","name":"企业注册"});
	return arr;
}