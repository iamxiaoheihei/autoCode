package com.autoCode.install.dao;

import java.util.Map;

public interface ApiDetailDao {
	/**
	 * 获取对应接口名的接口信息list
	 *@param map*/
	public void selectApiDetail(Map<String,Object> map);
}
