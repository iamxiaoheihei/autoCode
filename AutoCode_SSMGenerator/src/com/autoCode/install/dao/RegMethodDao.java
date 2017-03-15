package com.autoCode.install.dao;

import java.util.Map;

import com.autoCode.install.model.RegMethod;

/**
 * All Rights Reserved, Designed By 
 * Sinze Internet Finance Service (Hangzhou) Co., Ltd.
 * Copyright  2016
 * @author CMN
 * CreateDate 2016-8-25
 * Description 
 */
public interface RegMethodDao {

	/**
	 * @title 在方法注册中心添加一条数据
	 * @author CMN
	 * CreateDate 2016-10-24
	 * @Description
	 * @param map
	 * @throws Exception
	 */
	public void insertRegMethod(RegMethod regMethod);

	/**
	 * @title 在方法注册中心修改一条数据
	 * @author CMN
	 * CreateDate 2016-10-24
	 * @Description
	 * @param regMethod
	 * @throws Exception
	 */
	public void updateRegMethod(RegMethod regMethod);
	
	/**
	 * @title 在方法注册中心删除一条数据
	 * @author CMN
	 * CreateDate 2016-10-24
	 * @Description
	 * @param regMethod
	 * @throws Exception
	 */
	public void deleteRegMethod(RegMethod regMethod);
	
	/**
	 * @title 在方法注册中心获取一条数据
	 * @author CMN
	 * CreateDate 2016-10-24
	 * @Description
	 * @param regMethod
	 * @throws Exception
	 */
	public void selectRegMethod(RegMethod regMethod);
	
	/**
	 * @title 在方法注册中心获取数据分页
	 * @author CMN
	 * CreateDate 2016-10-24
	 * @Description
	 * @param regMethod
	 * @throws Exception
	 */
	public void selectRegMethodPage(Map<String,Object> map);
	
}
