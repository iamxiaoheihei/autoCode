
package com.autoCode.install.controller;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.autoCode.install.model.RegMethod;
import com.autoCode.install.service.RegMethodService;
import com.autoCode.install.until.Pager;

/**
 * All Rights Reserved, Designed By 
 * Sinze Internet Finance Service (Hangzhou) Co., Ltd.
 * Copyright  2016
 * @author CMN
 * CreateDate 2016-10-24
 * Description
 */

@Controller
@RequestMapping("/reg")
public class RegisterContoller {

	@Resource
	private RegMethodService regMethodService;
	
	/**
	 * @title 在方法注册中心添加一条数据
	 * @author CMN
	 * CreateDate 2016-10-24
	 * @Description
	 * @param map
	 * @throws Exception
	 */
	@RequestMapping(value="/add",method=RequestMethod.POST)
	public @ResponseBody RegMethod addRegMethod(@RequestBody Map<String, Object> map) throws Exception{
		return this.regMethodService.addRegMethod(map);
	}
	
	
	/**
	 * @title 在方法注册中心修改一条数据
	 * @author CMN
	 * CreateDate 2016-10-24
	 * @Description
	 * @param regMethod
	 * @throws Exception
	 */
	@RequestMapping(value="/mod",method=RequestMethod.POST)
	public @ResponseBody RegMethod modRegMethod(@RequestBody RegMethod regMethod){
		this.regMethodService.modRegMethod(regMethod);
		return regMethod;
	}
	
	/**
	 * @title 在方法注册中心删除一条数据
	 * @author CMN
	 * CreateDate 2016-10-24
	 * @Description
	 * @param regMethod
	 * @throws Exception
	 */
	@RequestMapping(value="/del",method=RequestMethod.POST)
	public @ResponseBody RegMethod delRegMethod(@RequestBody RegMethod regMethod){
		this.regMethodService.delRegMethod(regMethod);
		return regMethod;
	}
	
	/**
	 * @title 在方法注册中心获取一条数据
	 * @author CMN
	 * CreateDate 2016-10-24
	 * @Description
	 * @param regMethod
	 * @throws Exception
	 */
	@RequestMapping(value="/sel",method=RequestMethod.POST)
	public @ResponseBody RegMethod selRegMethod(@RequestBody RegMethod regMethod){
		this.regMethodService.selRegMethod(regMethod);
		return regMethod;
	}
	
	/**
	 * @title 在方法注册中心删除一条数据
	 * @author CMN
	 * CreateDate 2016-10-24
	 * @Description
	 * @param regMethod
	 * @throws Exception
	 */
	@RequestMapping(value="/sel/page",method=RequestMethod.POST)
	public @ResponseBody Pager<RegMethod> selRegMethodPage(@RequestBody Map<String, Object> map) {
		Pager<RegMethod> page = this.regMethodService.selRegMethodPage(map);
		return page;
	}
	
}
