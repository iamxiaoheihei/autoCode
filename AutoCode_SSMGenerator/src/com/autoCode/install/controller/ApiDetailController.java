package com.autoCode.install.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.autoCode.install.model.ApiDetail;
import com.autoCode.install.service.ApiDetailService;

@Controller
@RequestMapping("/apiDetail")
public class ApiDetailController {
	
	@Resource
	private ApiDetailService apiDetailService;
	
	/**
	 * @title 获取对应接口名的参数list
	 * @author YSL
	 * CreateDate 2016-10-24
	 * @Description
	 * @param map
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value="/sel", method = RequestMethod.POST)
	public @ResponseBody List<ApiDetail> apiDetailSel(@RequestBody Map<String,Object> map){
		map = this.apiDetailService.apiDetailSel(map);
		List<ApiDetail> list=(List<ApiDetail>)map.get("result");
		return list;
	}
}
