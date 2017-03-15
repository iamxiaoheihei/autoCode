/*全路径信息*/
//var servicePath="http://192.168.2.123:8080/TTY_WebManage";
var servicePath="http://localhost:8080/TTY_WebManage";
//var servicePath="http://www.tiantianyi.com/cms";
//var servicePath="http://www.tiantianyi.com.cn/cms";
//var servicePath="http://10.10.10.100:9080/cms";
//var servicePath="http://115.231.97.244:80/cms";

/*模块部分*/
var url_reg_sel='tty/sys/reg/sel';//获取模块列表--get--无--模块列表**
var url_reg_get='tty/sys/reg/get';//根据ID的值获取模块的信息**
var url_reg_sort='tty/sys/reg/sort';//模块排序**
var url_reg_save='tty/sys/reg/save';//保存模块**
var url_reg_del='tty/sys/reg/del';//模块删除**
var url_reg_move='tty/sys/reg/move';//模块移动**

/*系统表*/
var url_db_sel='tty/sys/db/sel';//获取数据库表的树结构数据--post--null--list<sys_dbutil>
var url_db_sort_get='tty/sys/db/sort/get';//获取数据表分类--get--id--sys_dbsort
var url_db_sort_add='tty/sys/db/sort/add';//添加数据库表分类--post--sys_dbsort--returnFlag
var url_db_sort_mod='tty/sys/db/sort/mod';//修改数据库表分类--post--sys_dbsort--returnFlag
var url_db_sort_del='tty/sys/db/sort/del';//删除数据库表分类--post--sys_dbsort--returnFlag
var url_db_table_get='tty/sys/db/table/get';//获取数据表--get--id--sys_dbtable
var url_db_table_add='tty/sys/db/table/add';//添加数据库表--post--sys_dbtable--returnFlag
var url_db_table_mod='tty/sys/db/table/mod';//修改数据库表--post--sys_dbtable--returnFlag
var url_db_table_del='tty/sys/db/table/del';//删除数据库表--post--sys_dbtable--returnFlag
var url_db_item_add='tty/sys/db/item/add';//添加数据库表条目--post--sys_dbtableitem--returnFlag
var url_db_item_del='tty/sys/db/item/del';//删除数据库表条目--post--sys_dbtableitem--returnFlag
var url_db_item_sel='tty/sys/db/item/sel';//获取数据库表条目--post--sys_dbtableitem--list<sys_dbtableitem>
var url_db_item_sort='tty/sys/db/item/sort';//获取数据库表条目--post--sys_dbtableitem[]--returnFlag

/*角色部分*/
var url_group_get='tty/sys/group/get';//获取角色--get--id--部门信息
var url_group_add='tty/sys/group/add';//添加角色--post--sys_group
var url_group_del='tty/sys/group/del';//删除角色--post--id
var url_group_sort='tty/sys/group/sort';//角色排序--post--sys_group[]
var url_group_sel='tty/sys/group/sub';//角色列表--post--params--list<sys_group>
var url_group_sub='tty/sys/group/sub';//下属角色--post--params--list<sys_group>
var url_group_move='tty/sys/group/move';//移动角色--post--sys_group--returnFlag
var url_group_power_mod='tty/sys/group/power/mod';//保存角色--post--sys_group--returnFlag

/*部门部分*/
var url_dept_add='tty/sys/dept/add';//保存部门--post--sys_dept--returnFlag
var url_dept_get='tty/sys/dept/get';//获取部门--get--id--sys_dept
var url_dept_sub='tty/sys/dept/sub';//下属部门--post--param(searchParam='parentID',parentID=parentID)--list<sys_dept>
var url_dept_del='tty/sys/dept/del';//删除部门--post--id--returnFlag
var url_dept_sort='tty/sys/dept/sort';//部门排序--post--sys_dept[]--returnFlags
var url_dept_sel='tty/sys/dept/sel';//部门列表--post--param(searchParam='all',parentID='')--list<sys_dept>
var url_dept_move='tty/sys/dept/move';//移动部门--post--sys_dept(id,parentID)--returnFlag

/*用户部分*/
var url_member_get='tty/sys/member/get';//获取用户--get--id--sys_member
var url_member_getNow='tty/sys/member/getNow';//获取当前用户--post--null--sys_member
var url_member_add='tty/sys/member/add';//添加用户--post--sys_memebr--returnFlag
var url_member_mod='tty/sys/member/mod';//修改用户--post--sys_memebr--returnFlag
var url_member_login='tty/sys/member/login';//用户登录**
var url_member_power_parentID_sel='tty/sys/member/powerParentIDSel';//用户登录后获取顶部一级模块信息**
var url_member_logout='tty/sys/member/logout';//用户退出系统**
var url_member_passMod='tty/sys/member/passMod';//修改用户密码**
var url_member_state='tty/sys/member/state';//修改用户状态
var url_member_sel='tty/sys/member/sel';//用户列表--post--param--用户列表
var url_member_dept='tty/sys/member/dept';//获取一个部门下的用户
var url_member_group_add='tty/sys/member/group/add';//用户加入角色--post--sys_member--returnFlag
var url_member_group_remove='tty/sys/member/group/remove';//用户移除角色--post--sys_member--returnFlag


/*地区部分*/
var url_area_get='tty/sys/area/get';//获取地区信息--get--无--area**
var url_area_save='tty/sys/area/save';//添加地区--post-area--0：成功；1：重名失败；2：失败**
var url_area_del='tty/sys/area/del';//删除地区-post-id-0：成功；1：还有下属地区失败；2：失败**
var url_area_sort='tty/sys/area/sort';//地区排序-post-area[]-0：保存成功；1：保存失败**
var url_area_sel='tty/sys/area/sel';//获取地区列表--get--无--List<Area>**
var url_area_move='tty/sys/area/move';//获取地区列表--get--无--List<Area>**

/*行业部分*/
var url_industry_get='tty/sys/industry/get';//获取行业--get--id--sys_industry
var url_industry_sel='tty/sys/industry/sel';//行业列表--post--param--List<sys_industry>
var url_industry_add='tty/sys/industry/add';//添加行业--post-sys_industry--0：成功；1：重名失败；2：失败
var url_industry_mod='tty/sys/industry/mod';//修改行业--post-sys_industry--0：成功；1：重名失败；2：失败
var url_industry_del='tty/sys/industry/del';//删除行业--post--id--0：删除成功；1：有下属 删除失败
var url_industry_sort='tty/sys/industry/sort';//行业排序-post-sys_industry[]-0：保存成功；1：保存失败
var url_industry_move='tty/sys/industry/move';//移动行业-post-sys_industry-0：保存成功；1：保存失败

/*系统公告部分*/
var url_notice_latest_get='tty/sys/notice/latestGet';//获取最新的一条系统公告信息**
var url_notice_page='tty/sys/notice/page';//获取系统公告分页信息数据**
var url_notice_add='tty/sys/notice/add';//添加系统公告信息**
var url_notice_mod='tty/sys/notice/mod';//修改系统公告信息**
var url_notice_del='tty/sys/notice/del';//修改系统公告信息**


/*日历空间部分*/
var url_calendar_addMember_sel='tty/sys/calendar/addMemberSel';//获取用户所有的日历事件信息**
var url_calendar_get='tty/sys/calendar/get';//获取一条日历事件信息**
var url_calendar_save='tty/sys/calendar/save';//保存日历事件信息**
var url_calendar_del='tty/sys/calendar/del';//保存日历事件信息**

/*工具部分*/
var url_util_encrypt='tty/sys/util/encrypt';//模块加密**
var url_util_backstageLoginCode=servicePath+'/tty/sys/util/backstageLoginCode';//获取后台登录验证码图片

/*图标部分*/
var url_main_icon_sel='tty/sys/main/icon/sel';//获取所有的fontAwesome字体图标和说明**
var url_main_icon_mod='tty/sys/main/icon/mod';//修改一个fontAwesome的说明**

/*编辑器上传图片的功能*/
var url_upload_editorImage='tty/sys/upload/editorImage';//修改一个fontAwesome的说明**
var url_upload_agreementFile='tty/sys/upload/agreement/agreement';//上传协议文件
var url_upload_agreementImage='tty/sys/upload/agreementImage';//上传协议内容中的图片信息
var url_upload_image='tty/sys/upload/image';//上传图片的公共方法
var url_upload_file='tty/sys/upload/file';//上传图片的公共方法
var url_upload_apk='tty/sys/upload/apk';//上传apk的公共方法

//平台参数
var url_parameter_add = 'tty/sys/parameter/add';
var url_parameter_del = 'tty/sys/parameter/del';
var url_parameter_get = 'tty/sys/parameter/get';
var url_parameter_mod = 'tty/sys/parameter/mod';
var url_parameter_page = 'tty/sys/parameter/page';

/*导出的excel设置*/
var url_excel_table_add='tty/sys/excel/table/add';
var url_excel_table_mod='tty/sys/excel/table/mod';
var url_excel_table_page='tty/sys/excel/table/page';
var url_excel_table_get='tty/sys/excel/table/get';
var url_excel_column_add='tty/sys/excel/column/add';
var url_excel_column_sel='tty/sys/excel/column/sel';
var url_excel_column_del='tty/sys/excel/column/del';

/*banner*/
var url_banner_get='tty/website/banner/get';
var url_banner_sel='tty/website/banner/sel';
var url_banner_add='tty/website/banner/add';
var url_banner_pic_upload='tty/website/banner/pic/upload';
var url_banner_mod='tty/website/banner/mod';
var url_banner_del='tty/website/banner/del';
var url_banner_page='tty/website/banner/sel';

/************************************************************************用户基础管理***************************************************************/
/*银行卡类型*/
var url_bankCardType_get='tty/usermng/bankCardType/get';
var url_bankCardType_sel='tty/usermng/bankCardType/sel';
var url_bankCardType_add='tty/usermng/bankCardType/add';
var url_bankCardType_mod='tty/usermng/bankCardType/mod';
var url_bankCardType_del='tty/usermng/bankCardType/del';

/*银行*/
var url_bankInfo_get='tty/usermng/bankInfo/get';
var url_bankInfo_sel='tty/usermng/bankInfo/sel';
var url_bankInfo_add='tty/usermng/bankInfo/add';
var url_bankInfo_mod='tty/usermng/bankInfo/mod';
var url_bankInfo_del='tty/usermng/bankInfo/del';

/*用户类型*/
var url_userType_add='tty/usermng/userType/add';
var url_userType_mod='tty/usermng/userType/mod';
var url_userType_del='tty/usermng/userType/del';
var url_userType_get='tty/usermng/userType/get';
var url_userType_sel='tty/usermng/userType/sel';

/*用户等级*/
var url_userLevel_add='tty/usermng/userLevel/add';
var url_userLevel_mod='tty/usermng/userLevel/mod';
var url_userLevel_del='tty/usermng/userLevel/del';
var url_userLevel_get='tty/usermng/userLevel/get';
var url_userLevel_sel='tty/usermng/userLevel/sel';

/*密保问题*/
var url_securityQuestion_add='tty/usermng/securityQuestion/add';
var url_securityQuestion_mod='tty/usermng/securityQuestion/mod';
var url_securityQuestion_del='tty/usermng/securityQuestion/del';
var url_securityQuestion_get='tty/usermng/securityQuestion/get';
var url_securityQuestion_sel='tty/usermng/securityQuestion/sel';

/*系统头像*/
var url_headIcon_add='tty/usermng/headIcon/add';
var url_headIcon_del='tty/usermng/headIcon/del';
var url_headIcon_get='tty/usermng/headIcon/get';
var url_headIcon_sel='tty/usermng/headIcon/sel';
var url_headIcon_upload='tty/usermng/headIcon/upload';
var url_headIcon_userUpload='tty/usermng/headIcon/userUpload';

/*网站客户*/
var url_userInfo_get='tty/usermng/userInfo/get';
var url_userInfo_page='tty/usermng/userInfo/page';
var url_userScore_page='tty/usermng/userInfo/score/page';
var url_userInfo_setOffline='tty/usermng/userInfo/setOffline';//强制用户下线 IN:user_id
var url_userInfo_unlock='tty/usermng/userInfo/unlock';//用户解锁 IN:user_id
/*个人用户和企业用户*/
var url_userInfo_typeIdPage='tty/usermng/userInfo/typeIdPage';

/*个人信息*/
var url_person_get='tty/usermng/person/get';
/*单位资料*/
var url_person_work_get='tty/usermng/personalWorkInfo/get';
/*企业资料*/
var url_enter_get='tty/usermng/userEnterprise/get';
/*联系方式*/
var url_contact_get='tty/usermng/personContact/get';
/*联系人*/
var url_relation_get='tty/usermng/personalRelation/get';
/*个人财务信息*/
var url_pFinance_get='tty/usermng/personalFinance/get';
/*公司财务信息*/
var url_eFinance_get='tty/usermng/enterpriseFinance/get';
/****************************************************************************************************************************************************/
/************************************************************************账户信息管理******************************************************************/
var url_accountInfo_get='tty/usermng/accountInfo/get';
var url_accountInfo_page='tty/usermng/accountInfo/mng/page';
var url_accountInfo_name_get='tty/usermng/accountInfo/name/get';
var url_account_user_amountMod='tty/usermng/accountInfo/amountMod';//根据用户ID修改对应的账户信息

/*新增账户银行卡信息与三方银行卡同步*/
var url_account_user_bankCardMode='tty/usermng/bankCard/accountInfoBankCardMod';//进行开户用户银行卡信息与三方信息同步

/****************************************************************************************************************************************************/
/************************************************************************奖励信息管理******************************************************************/
/*奖励类型*/
var url_rewardType_add='tty/reward/rewardType/add';
var url_rewardType_mod='tty/reward/rewardType/mod';
var url_rewardType_del='tty/reward/rewardType/del';
var url_rewardType_get='tty/reward/rewardType/get';
var url_rewardType_name_get='tty/reward/rewardType/name/get';
var url_rewardType_sel='tty/reward/rewardType/sel';

/*红包类型*/
var url_redPacketKind_add='tty/reward/redPacketKind/add';
var url_redPacketKind_mod='tty/reward/redPacketKind/mod';
var url_redPacketKind_del='tty/reward/redPacketKind/del';
var url_redPacketKind_get='tty/reward/redPacketKind/get';
var url_redPacketKind_sel='tty/reward/redPacketKind/sel';
var url_redPacketKind_activity_sel='tty/reward/redPacketKind/activity/sel';

/*红包*/
var url_redPacket_add='tty/reward/redPacket/add';
var url_redPacket_mod='tty/reward/redPacket/mod';
var url_redPacket_del='tty/reward/redPacket/del';
var url_redPacket_get='tty/reward/redPacket/get';
var url_redPacket_page='tty/reward/redPacket/page';
var url_redPacket_pageAll='tty/reward/redPacket/pageAll';
var url_redPacket_activity_add='tty/reward/redPacket/activity/add';
var url_redPacket_tmpSel='tty/reward/redPacket/tmpSel';


/*新增 待转红包页*/
var url_redPacket_toTransfer_pageAll='tty/reward/redPacket/toTransfer/pageAll';
/*新增 待转红包excel*/
var url_redPacket_toTransfer_excel='tty/reward/redPacket/toTransfer/excel';
/*新增 待划转账户*/
var url_redPacket_toTransfer_account='tty/reward/redPacket/toTransfer/account';
/*新增 已投资账户红包信息*/
var url_redPacket_invested_totranRedp_sel='tty/reward/redPacket/invested/totranRedp/sel';


/*积分类型*/
var url_scoreKind_add='tty/reward/scoreKind/add';
var url_scoreKind_mod='tty/reward/scoreKind/mod';
var url_scoreKind_del='tty/reward/scoreKind/del';
var url_scoreKind_get='tty/reward/scoreKind/get';
var url_scoreKind_sel='tty/reward/scoreKind/sel';

/*积分使用类型*/
var url_scoreUsageType_add='tty/reward/scoreUsageType/add';
var url_scoreUsageType_mod='tty/reward/scoreUsageType/mod';
var url_scoreUsageType_del='tty/reward/scoreUsageType/del';
var url_scoreUsageType_get='tty/reward/scoreUsageType/get';
var url_scoreUsageType_sel='tty/reward/scoreUsageType/sel';



/*活动类型  新增*/
var url_activityKind_add='tty/reward/activityKind/add';
var url_activityKind_mod='tty/reward/activityKind/mod';
var url_activityKind_del='tty/reward/activityKind/del';
var url_activityKind_get='tty/reward/activityKind/get';
var url_activityKind_sel='tty/reward/activityKind/sel';
var url_activityKind_pic_upload='tty/reward/activityKind/pic/upload'; //活动图片上传
/*红包活动映射  新增*/
var url_activityKind_mapAdd='tty/reward/activityKind/map/add';
var url_activity_redpacket_del='tty/reward/activityKind/map/del';


/*******************************************************************************************************************************************************/
/*协议信息*/
var page_agreement_pageSize=10;//分页的每页显示的数据量

var url_agreement_page='tty/project/agreement/page';
var url_agreement_add='tty/project/agreement/add';
var url_agreement_get='tty/project/agreement/get';
var url_agreement_mod='tty/project/agreement/mod';
var url_agreement_del='tty/project/agreement/del';
var url_agreement_sel='tty/project/agreement/sel';
var url_agreement_modFile='tty/project/agreement/modFile';

/*投资类型*/
var page_investmentType_pageSize=10;//分页的每页显示的数据量

var url_investmentType_add='tty/project/investmentType/add';
var url_investmentType_mod='tty/project/investmentType/mod';
var url_investmentType_del='tty/project/investmentType/del';
var url_investmentType_get='tty/project/investmentType/get';
var url_investmentType_page='tty/project/investmentType/page';
var url_investmentType_sel='tty/project/investmentType/sel';

/*投资周期*/
var page_investmentCycle_pageSize=10;//分页的每页显示的数据量

var url_investmentCycle_add='tty/project/investmentCycle/add';
var url_investmentCycle_mod='tty/project/investmentCycle/mod';
var url_investmentCycle_del='tty/project/investmentCycle/del';
var url_investmentCycle_get='tty/project/investmentCycle/get';
var url_investmentCycle_page='tty/project/investmentCycle/page';
var url_investmentCycle_sel='tty/project/investmentCycle/sel';


/*还款周期*/
var page_repaymentCycle_pageSize=10;//分页的每页显示的数据量

var url_repaymentCycle_add='tty/profit/repaymentCycle/add';
var url_repaymentCycle_mod='tty/profit/repaymentCycle/mod';
var url_repaymentCycle_get='tty/profit/repaymentCycle/get';
var url_repaymentCycle_del='tty/profit/repaymentCycle/del';
var url_repaymentCycle_page='tty/profit/repaymentCycle/page';
var url_repaymentCycle_sel='tty/profit/repaymentCycle/sel';

/*还款方式*/
var page_repaymentMethod_pageSize=10;//分页的每页显示的数据量

var url_repaymentMethod_add='tty/project/repaymentMethod/add';
var url_repaymentMethod_mod='tty/project/repaymentMethod/mod';
var url_repaymentMethod_del='tty/project/repaymentMethod/del';
var url_repaymentMethod_get='tty/project/repaymentMethod/get';
var url_repaymentMethod_page='tty/project/repaymentMethod/page';
var url_repaymentMethod_sel='tty/project/repaymentMethod/sel';


/*投资种类*/
var page_investmentKind_pageSize=10;//分页的每页显示的数据量

var url_investmentKind_add='tty/project/investmentKind/add';
var url_investmentKind_mod='tty/project/investmentKind/mod';
var url_investmentKind_del='tty/project/investmentKind/del';
var url_investmentKind_get='tty/project/investmentKind/get';
var url_investmentKind_page='tty/project/investmentKind/page';
var url_investmentKind_sel='tty/project/investmentKind/sel';

/*投资费率*/
var page_investmentKindRate_pageSize=10;//分页的每页显示的数据量

var url_investmentKindRate_add='tty/project/investmentKindRate/add';
var url_investmentKindRate_mod='tty/project/investmentKindRate/mod';
var url_investmentKindRate_del='tty/project/investmentKindRate/del';
var url_investmentKindRate_get='tty/project/investmentKindRate/get';
var url_investmentKindRate_page='tty/project/investmentKindRate/page';
var url_investmentKindRate_sel='tty/project/investmentKindRate/sel';

/*前端用户*/
var url_userInfo_sel='tty/usermng/userInfo/sel';
var url_userInfo_nickNameSel='tty/usermng/userInfo/nickNameSel';

/*资产类型*/
var page_assetType_pageSize=10;//分页的每页显示的数据量
var assetType_name01='票贷融通';
var assetType_name02='股权融通';
var assetType_name03='私募基金';

var url_assetType_add='tty/asset/assetType/add';
var url_assetType_mod='tty/asset/assetType/mod';
var url_assetType_get='tty/asset/assetType/get';
var url_assetType_del='tty/asset/assetType/del';
var url_assetType_page='tty/asset/assetType/page';
var url_assetType_sel='tty/asset/assetType/sel';

/*交易记录*/
var url_accountOperRecord_pageAll='tty/usermng/accountOperRecord/pageAll';//用户交易记录
var url_accountOperRecord_pageByType='tty/usermng/accountOperRecord/pageByType';//用户交易记录

/*用户资产图片*/
var url_assetImage_add='tty/asset/assetImage/add';
var url_assetImage_del='tty/asset/assetImage/del';
var url_assetImage_userAssetSel='tty/asset/assetImage/userAssetSel';//根据用户资产编号获取图片的列表

/*票据信息*/
var url_bill_image_bill='attachment';//上传图片存放的位置

var url_bill_add='tty/asset/bill/add';
var url_bill_mod='tty/asset/bill/mod';
var url_bill_del='tty/asset/bill/del';
var url_bill_get='tty/asset/bill/get';

/*保理产品信息*/
var url_factoring_image_bill='attachment';//上传图片存放的位置

var url_userFactoring_add='tty/asset/userFactoring/add';
var url_userFactoring_del='tty/asset/userFactoring/del';
var url_userFactoring_get='tty/asset/userFactoring/get';
var url_userFactoring_mod='tty/asset/userFactoring/mod';


/*阳光私募产品信息*/
var url_fund_image_bill='attachment';//上传图片存放的位置

var url_userFund_add='tty/asset/userFund/add';
var url_userFund_del='tty/asset/userFund/del';
var url_userFund_get='tty/asset/userFund/get';
var url_userFund_mod='tty/asset/userFund/mod';
var url_userFund_release='tty/asset/userFund/release';//发布信息
var url_userFund_progress='tty/asset/userFund/progress';//修改信息状态
var url_userFund_statusMod='tty/asset/userFund/statusMod';//修改信息状态



/*用户资产信息*/
var page_userAsset_pageSize=10;//分页的每页显示的数据量

var url_userAsset_page='tty/asset/userAsset/page';
var url_userAsset_sel='tty/asset/userAsset/sel';
var url_userAsset_selNotUsed='tty/asset/userAsset/selNotUsed';//获取未使用的用户资产信息列表

/*项目信息*/
var page_investmentProject_pageSize=10;//分页的每页显示的数据量

var url_investmentProject_add='tty/project/investmentProject/add';
var url_investmentProject_mod='tty/project/investmentProject/mod';
var url_investmentProject_get='tty/project/investmentProject/get';
var url_investmentProject_getSecurity='tty/project/investmentProject/getSecurity';
var url_investmentProject_del='tty/project/investmentProject/del';
var url_investmentProject_page='tty/project/investmentProject/page';
var url_investmentProject_modp='tty/project/investmentProject/modp';//发布项目信息
var url_investmentProject_moda='tty/project/investmentProject/moda';//项目的强制满标
//var url_investmentProject_modf='tty/project/investmentProject/modf';//项目满标划转
var url_yeepay_transfer_generate='tty/usermng/apiOperRecord/yeepay/transfer/generate';//满标划转
var url_yeepay_update_account='tty/usermng/apiOperRecord/updateAccount';//修改所有开户用户的第三方账户数据
var url_yeepay_bankCardAdd='tty/usermng/apiOperRecord/bankCard/add';//添加一张银行卡（和三方同步）
var url_yeepay_invest_notify="tty/usermng/apiOperRecord/yeepay/cpTrans/notify/finish";//手动notify
//var url_yeepay_update_record='tty/usermng/apiOperRecord/updateRecord';//修改所有开户用户的第三方交易记录
//var url_yeepay_update_invest='tty/usermng/apiOperRecord/updateInvest';//修改所有开户用户的投资记录

var url_investmentProject_pageByPhone='tty/project/investmentProject/pageByPhone';//产品信息分页列表
var url_apiOperRecord_repayPage='tty/usermng/apiOperRecord/repayPage';//获取第三方接口操作记录
var url_yeepay_directTrans='tty/usermng/apiOperRecord/yeepay/directTrans/generate';//直接转账
var url_apiOperRecord_pageAll='tty/usermng/apiOperRecord/pageAll';//获取三方请求记录的分页数据

/*审核类型信息*/
var page_approvalType_pageSize=10;//分页的每页显示的数据量
var approvalTypeName01='票贷初审';
var approvalTypeName02='票贷满标审核';
var approvalTypeName03='平台信息审核';
var approvalTypeName04='股权初审';
var approvalTypeName05='股权满标审核';
var approvalTypeName06='私募基金初审';
var approvalTypeName07='私募基金满标审核';
var approvalTypeName08='转让初审';
var approvalTypeName09='转让满标审核';
var approvalTypeName10='票贷复审';
var approvalTypeName11='股权复审';
var approvalTypeName12='私募基金复审';

var url_approvalType_add='tty/audit/approvalType/add';
var url_approvalType_mod='tty/audit/approvalType/mod';
var url_approvalType_del='tty/audit/approvalType/del';
var url_approvalType_get='tty/audit/approvalType/get';
var url_approvalType_sel='tty/audit/approvalType/sel';
var url_approvalType_page='tty/audit/approvalType/page';


/*审核记录信息*/
var page_approvalRecord_pageSize=10;//分页的每页显示的数据量

var url_approvalRecord_add='tty/audit/approvalRecord/add';
var url_approvalRecord_mod='tty/audit/approvalRecord/mod';
var url_approvalRecord_del='tty/audit/approvalRecord/del';
var url_approvalRecord_get='tty/audit/approvalRecord/get';
var url_approvalRecord_page='tty/audit/approvalRecord/page';

/*收益的类型*/
var page_profitType_pageSize=10;//分页的每页显示的数据量

var url_profitType_add='tty/profit/profitType/add';
var url_profitType_mod='tty/profit/profitType/mod';
var url_profitType_get='tty/profit/profitType/get';
var url_profitType_del='tty/profit/profitType/del';
var url_profitType_page='tty/profit/profitType/page';
var url_profitType_sel='tty/profit/profitType/sel';

/*收益人的类型*/
var page_receiptorType_pageSize=10;//分页的每页显示的数据量

var url_receiptorType_add='tty/profit/receiptorType/add';
var url_receiptorType_mod='tty/profit/receiptorType/mod';
var url_receiptorType_get='tty/profit/receiptorType/get';
var url_receiptorType_del='tty/profit/receiptorType/del';
var url_receiptorType_page='tty/profit/receiptorType/page';
var url_receiptorType_sel='tty/profit/receiptorType/sel';

/*投资记录*/
var page_investRecord_pageSize=10;//分页的每页显示的数据量

var url_investRecord_page='tty/project/investRecord/page';
var url_investRecord_pages='tty/project/investRecord/pages';
var url_investRecord_pageManage='tty/project/investRecord/pageManage';

/*还款记录*/
var page_repaymentRecord_pageSize=15;//分页的每页显示的数据量

var url_repaymentRecord_page='tty/profit/repaymentRecord/page';
var url_repaymentRecord_modPay='tty/profit/repaymentRecord/modPay';//还款操作


/*还款计划表*/
var url_repaymentPlan_get='tty/profit/repaymentPlan/get';
var url_repaymentPlan_repayAlertPage='tty/profit/repaymentPlan/repayAlertPage';//后台获取回款计划信息，还款短信提醒
var url_repaymentPlan_updateIsMsgAlert='tty/profit/repaymentPlan/updateIsMsgAlert';//修改还款短信提醒状态

/*收益计划表*/
var url_profitPlan_page='tty/profit/profitPlan/page';



/*投资管理表*/
var url_investmentProject_page1='tty/project/investmentProject/page1';

/*投资管详情表*/
var url_investmentProject_page2='tty/project/investmentProject/page2';






/*平台信息表*/
var page_newsInfo_pageSize=10;//分页的每页显示的数据量



var url_newsInfo_add='tty/website/newsInfo/add';
var url_newsInfo_mod='tty/website/newsInfo/mod';
var url_newsInfo_del='tty/website/newsInfo/del';
var url_newsInfo_get='tty/website/newsInfo/get';
var url_newsInfo_page='tty/website/newsInfo/page';
var url_newsInfo_pic_del='tty/website/newsInfo/pic/del';

/*站內信信息*/
var page_message_pageSize=10;//分页的每页显示的数据量


var url_message_add='tty/website/message/add';
var url_message_modstatus='tty/website/message/modstatus';
var url_message_del='tty/website/message/del';
var url_message_get='tty/website/message/get';
var url_message_page='tty/website/message/page';

/*短信模板信息*/
var page_shortMsgTemp_pageSize=20;//分页的每页显示的数据量


var url_shortMsgTemp_add='tty/website/shortMsgTemp/add';
var url_shortMsgTemp_mod='tty/website/shortMsgTemp/mod';
var url_shortMsgTemp_modUser='tty/website/shortMsgTemp/modUser';
var url_shortMsgTemp_del='tty/website/shortMsgTemp/del';
var url_shortMsgTemp_get='tty/website/shortMsgTemp/get';
var url_shortMsgTemp_page='tty/website/shortMsgTemp/page';

/*短信发送记录信息*/
var page_shortMessage_pageSize=10;//分页的每页显示的数据量


var url_shortMessage_add='tty/website/shortMessage/add';
var url_shortMessage_get='tty/website/shortMessage/get';
var url_shortMessage_getUser='tty/website/shortMessage/getUser';
var url_shortMessage_page='tty/website/shortMessage/page';
var url_shortMessage_test='tty/website/shortMessage/test';

var url_util_shortMessageSendRepayAlert='tty/sys/util/shortMessageSendRepayAlert';//发送还款提醒

/************************************************************************第三方***************************************************************/
/*第三方操作类型*/
var url_apiOperType_get='tty/usermng/apiOperType/get';
var url_apiOperType_sel='tty/usermng/apiOperType/sel';
var url_apiOperType_add='tty/usermng/apiOperType/add';
var url_apiOperType_mod='tty/usermng/apiOperType/mod';
var url_apiOperType_del='tty/usermng/apiOperType/del';


var url_yeepay_accountGet='tty/usermng/apiOperRecord/yeepay/accountGet';//第三方直连接口 根据账户ID获取账户详细信息

/************************************************************************债权转让***************************************************************/
var page_investTransApply_pageSize=10;//分页的每页显示的数据量

var url_investTransApply_apply='tty/project/investTransApply/apply';
var url_investTransApply_page='tty/project/investTransApply/page';
var url_investTransApply_get='tty/project/investTransApply/get';
var url_approvalRecord_transAdd='tty/audit/approvalRecord/transAdd';//转让项目初审并发布项目
var url_investTransApply_projectPage='tty/project/investTransApply/projectPage';//项目列表
var url_investTransApply_projectGet='tty/project/investTransApply/projectGet';//项目列表
var url_investmentProject_transPublish='tty/project/investmentProject/transPublish';//发布一条债权转让项目

var url_prerepayment_sel='tty/profit/prerepayment/sel';//提前还款计划列表
var url_prerepayment_selPage='tty/profit/prerepayment/selPage';//提前还款计划列表并分页
var url_prerepayment_get='tty/profit/prerepayment/get';//提前还款计划获取
var url_prerepayment_check='tty/profit/prerepayment/check';//提前还款计划审核

var url_inviteInfo_page='tty/usermng/inviteData/inviteInfoPage';//获取邀请统计信息并分页
var url_repaymentPlan_pageNew='tty/profit/repaymentPlan/pageNew';//还款计划信息

var url_investData_page='tty/usermng/investData/page';//获取所有的投资记录并分页
var url_repaymentPlan_pageOverdue='tty/profit/repaymentPlan/pageOverdue';//获取逾期还款列表并分页
var url_repaymentPlan_updateIsOverdueAlert='tty/profit/repaymentPlan/updateIsOverdueAlert';//修改逾期还款短信提醒状态
var url_raiseData_page='tty/usermng/raiseData/page'//获取用户融资统计并分页
var url_prerepayment_planPage='tty/profit/prerepayment/planPage';//提前还款计划审核

var url_androidVersion_add='tty/website/androidVersion/add';// 添加一条安卓版本
var url_androidVersion_sel='tty/website/androidVersion/sel';// 获取安卓版本信息列表并分页
var url_androidVersion_get='tty/website/androidVersion/get';// 获取一条最新安卓版本信息
var url_androidVersion_download='tty/website/androidVersion/download';// 获取一条最新安卓版本信息
var url_androidVersion_apk='apk';//上传apk存放的位置
var url_inviteApply_page='tty/usermng/inviteApply/page';//获取申请邀请的信息并分页
var url_inviteApply_check='tty/usermng/inviteApply/check';//邀请人变更申请审核

var url_redPacket_obtainRule_add='tty/reward/redPacketObtainRule/add';//添加一个红包获取规则
var url_redPacket_obtainRule_del='tty/reward/redPacketObtainRule/del';//添加一个红包获取规则
var url_redPacket_obtainRule_kindSel='tty/reward/redPacketObtainRule/kindSel';//添加一个红包获取规则

var url_bankInfo_page='tty/usermng/bankCard/page';//获取用户的银行卡信息
var url_yeepay_query='tty/usermng/apiOperRecord/yeepay/query';//满标划转

var url_apiOperRecord_transferPage='tty/usermng/apiOperRecord/transferPage';//后台获取三方转账确认信息列表
var url_repaymentRecord_successPage='tty/profit/repaymentRecord/successPage';//后台获取记录还款记录成功信息的分页数据
var url_investmentProject_checkByUser='tty/project/investmentProject/checkByUser';//项目信息

var url_friendlyLink_page='tty/website/friendlyLink/page';//获取后台友情链接信息列表
var url_friendlyLink_add='tty/website/friendlyLink/add';//后台友情链接添加
var url_friendlyLink_mod='tty/website/friendlyLink/mod';//后台友情链接修改
var url_friendlyLink_del='tty/website/friendlyLink/del';//后台友情链接删除
var url_friendlyLink_get='tty/website/friendlyLink/get';//后台单条友情链接信息获取

var url_failScale_judge='tty/usermng/apiOperRecord/failScale/judge';//流标时判断选中的项目是否投资过
var url_investmentProject_expire='tty/project/investmentProject/expire';//让项目变成过期状态

var url_investmentProject_kind_mod='tty/project/investmentProject/kind/mod';//后台修改项目投资种类信息