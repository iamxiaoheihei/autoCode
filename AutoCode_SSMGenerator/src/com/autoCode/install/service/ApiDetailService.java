package com.autoCode.install.service;

import java.util.Map;

import com.autoCode.install.model.ApiDetail;

/**
 * All Rights Reserved, Designed By  ysl
 * Sinze Internet Finance Service (Hangzhou) Co., Ltd.
 * Copyright  2016
 * @author ysl
 * CreateDate 2016-10-24
 * Description
 */
public interface ApiDetailService{
	
	/**
	 * @title 获取对应接口名的参数list
	 * @author YSL
	 * CreateDate 2016-10-24
	 * @Description
	 * @param map
	 * @return
	 */
	public Map<String, Object> apiDetailSel(Map<String, Object> map);
}
