package com.autoCode.install.service.impl;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.autoCode.install.dao.ApiDetailDao;
import com.autoCode.install.service.ApiDetailService;

/**
 * All Rights Reserved, Designed By ysl
 * Sinze Internet Finance Service (Hangzhou) Co., Ltd.
 * Copyright  2016
 * @author ysl
 * CreateDate 2016-10-24
 * Description
 */
@Service("ApiDetailService")
public class ApiDetailServiceImpl implements ApiDetailService{

	@Resource
	private ApiDetailDao apiDetailDao;
	
	/**
	 * @title 获取对应接口名的参数list
	 * @author YSL
	 * CreateDate 2016-10-24
	 * @Description
	 * @param map
	 * @return
	 */
	public Map<String, Object> apiDetailSel(Map<String, Object> map) {
		this.apiDetailDao.selectApiDetail(map);
		return map;
	}
}
