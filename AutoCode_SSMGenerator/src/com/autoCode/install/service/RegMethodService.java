package com.autoCode.install.service;

import java.util.Map;

import com.autoCode.install.model.RegMethod;
import com.autoCode.install.until.Pager;
/**
 * All Rights Reserved, Designed By 
 * Sinze Internet Finance Service (Hangzhou) Co., Ltd.
 * Copyright  2016
 * @author CMN
 * CreateDate 2016-8-25
 * Description 
 */
public interface RegMethodService {
	
	/**
	 * @title 在方法注册中心添加一条数据
	 * @author CMN
	 * CreateDate 2016-10-24
	 * @Description
	 * @param map
	 * @throws Exception
	 */
	public RegMethod addRegMethod(Map<String, Object> map)throws Exception;
	
	/**
	 * @title 在方法注册中心修改一条数据
	 * @author CMN
	 * CreateDate 2016-10-24
	 * @Description
	 * @param regMethod
	 * @throws Exception
	 */
	public RegMethod modRegMethod(RegMethod regMethod);
	
	/**
	 * @title 在方法注册中心删除一条数据
	 * @author CMN
	 * CreateDate 2016-10-24
	 * @Description
	 * @param regMethod
	 * @throws Exception
	 */
	public RegMethod delRegMethod(RegMethod regMethod);
	
	/**
	 * @title 在方法注册中心获取一条数据
	 * @author CMN
	 * CreateDate 2016-10-24
	 * @Description
	 * @param regMethod
	 * @throws Exception
	 */
	public RegMethod selRegMethod(RegMethod regMethod);
	
	/**
	 * @title 在方法注册中心获取数据分页
	 * @author CMN
	 * CreateDate 2016-10-24
	 * @Description
	 * @param regMethod
	 * @throws Exception
	 */
	public Pager<RegMethod> selRegMethodPage(Map<String,Object> map);

}
