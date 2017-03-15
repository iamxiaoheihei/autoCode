package com.autoCode.install.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

//import com.autoCode.install.model.ApiDetail;
import com.autoCode.install.service.RegMethodService;
import com.autoCode.install.until.BasicPath;
import com.autoCode.install.until.BeanUtils;


@Controller
@RequestMapping("/get/all")
public class GenerateController {
	
//	@Resource
//	private ApiDetailController apiDetailController;
	
	@Resource
	private RegMethodService regMethodService;
	
	private static final String path =BasicPath.PATH;


	/**
	 * @title 生成从Dao层到Controller的对应的空的.java文件
	 * @author YSL
	 * CreateDate 2016-9-28
	 * @Description
	 * @param map
	 * @throws Exception
	 */
	@RequestMapping(value="/create",method=RequestMethod.POST)
	public @ResponseBody void createAll(@RequestBody Map<String, Object> map) throws Exception {
		// 进行文件创建
		BeanUtils beanUtils = new BeanUtils();
		beanUtils.beanTool(map);
		
	}
	
	/**
	 * @title 为jsp返回list
	 * @author YSL
	 * CreateDate 2016-9-28
	 * @Description
	 * @param map
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	@RequestMapping(value="/information",method=RequestMethod.POST)
	public @ResponseBody List<Map> getAll(@RequestBody Map<String, Object> map) throws Exception {
		List<Map> list = new ArrayList<Map>();
		Map<String, Object> infoMap = null;
		//获取属性字段汉语注释
		List<String> comments = new BeanUtils().getComment(map);
		//获取属性字段英文名
		List<String> propertys = new BeanUtils().getField(map);
		for (int i = 0; i < propertys.size(); i++) {
			infoMap = new HashMap<String, Object>();
			String comment= comments.get(i).replace("/** ", "");
			comment = comment.replace(" */", "");
			System.out.println(comment);
			infoMap.put("comment",comment);
			infoMap.put("name", propertys.get(i));
			list.add(infoMap);
		}
		System.out.println("-----------" + list.get(0).get("comment"));
		
       return list; 
	}
	
	/**
	 * @title 生成对应property的dao到controller
	 * @author YSL
	 * CreateDate 2016-9-22
	 * @Description
	 * @param map
	 * @throws Exception
	 */
	@RequestMapping(value="/property",method=RequestMethod.POST)
	public @ResponseBody boolean setProperty(@RequestBody Map<String, Object> map){
		try {
			BeanUtils test= new BeanUtils();
			test.allBeanMod(map);
			return true;
		} catch (Exception e) {
			return false;
		}
	}
	
	/**
	 * @title  判断后台相关controller到dao层.java文件是否创建
	 * @author CMN
	 * CreateDate 2016-9-29
	 * @Description
	 * @param map
	 * @return
	 */
	@RequestMapping(value="/classExist",method=RequestMethod.POST)
	public @ResponseBody String classExist(@RequestBody Map<String, Object> map) throws Exception {
		BeanUtils beanUtils = new BeanUtils();
		return beanUtils.exisClass(map);
	}

	/**
	 * @title 根据类名、包名、接口名生成controller
	 * @author YSL
	 * CreateDate 2016-10-24
	 * @Description
	 * @param map
	 * @return
	 */
	@RequestMapping(value="/addControllerMethod",method=RequestMethod.POST)
	public @ResponseBody boolean addControllerMethod(@RequestBody Map<String, Object> map){
		try {
			BeanUtils beanUtils=new BeanUtils();
			String controllerType=map.get("controllerType").toString();
			String className = map.get("className").toString();
			if(controllerType.equals("add")){
				String ControllerContext=beanUtils.createBeanControllerAdd(className);
				beanUtils.createControllerMethod(map, ControllerContext);
				map.put("serviceMethodName", "add"+className);
				map.put("serviceParamIn",className);
				map.put("serviceInRemark",className);
				map.put("serviceParamOut",className);
				map.put("serviceOutRemark","returnFlag returnMsg");
				map.put("daoMethodName", "insert"+className);
				map.put("daoParamIn",className);
				map.put("daoInRemark",className);
				map.put("daoParamOut", " ");
				map.put("daoOutRemark"," ");
				map.put("controllerMethodName", "add"+className);
				map.put("controllerParamIn",className);
				map.put("controllerInRemark",className);
				map.put("controllerParamOut",className);
				map.put("controllerOutRemark","returnFlag returnMsg");
				regMethodService.addRegMethod(map);
			}else if(controllerType.equals("del")){
				String ControllerContext=beanUtils.createBeanControllerDel(className);
				beanUtils.createControllerMethod(map, ControllerContext);
				map.put("serviceMethodName", "del"+className);
				map.put("serviceParamIn",className);
				map.put("serviceInRemark",className);
				map.put("serviceParamOut",className);
				map.put("serviceOutRemark","returnFlag returnMsg");
				map.put("daoMethodName", "delete"+className);
				map.put("daoParamIn",className);
				map.put("daoInRemark",className);
				map.put("daoParamOut", " ");
				map.put("daoOutRemark"," ");
				map.put("controllerMethodName", "del"+className);
				map.put("controllerParamIn",className);
				map.put("controllerInRemark",className);
				map.put("controllerParamOut",className);
				map.put("controllerOutRemark","returnFlag returnMsg");
				regMethodService.addRegMethod(map);
			}else if(controllerType.equals("mod")){
				String ControllerContext=beanUtils.createBeanControllerMod(className);
				beanUtils.createControllerMethod(map, ControllerContext);
				map.put("serviceMethodName", "mod"+className);
				map.put("serviceParamIn",className);
				map.put("serviceInRemark",className);
				map.put("serviceParamOut",className);
				map.put("serviceOutRemark","returnFlag returnMsg");
				map.put("daoMethodName", "update"+className);
				map.put("daoParamIn",className);
				map.put("daoInRemark",className);
				map.put("daoParamOut", " ");
				map.put("daoOutRemark"," ");
				map.put("controllerMethodName", "mod"+className);
				map.put("controllerParamIn",className);
				map.put("controllerInRemark",className);
				map.put("controllerParamOut",className);
				map.put("controllerOutRemark","returnFlag returnMsg");
				regMethodService.addRegMethod(map);				
			}else if(controllerType.equals("get")){
				String ControllerContext=beanUtils.createBeanControllerGet(className);
				beanUtils.createControllerMethod(map, ControllerContext);
				map.put("serviceMethodName", "get"+className);
				map.put("serviceParamIn",className);
				map.put("serviceInRemark",className);
				map.put("serviceParamOut",className);
				map.put("serviceOutRemark","returnFlag returnMsg");
				map.put("daoMethodName", "select"+className+"ById");
				map.put("daoParamIn",className);
				map.put("daoInRemark",className);
				map.put("daoParamOut", " ");
				map.put("daoOutRemark"," ");
				map.put("controllerMethodName", "get"+className);
				map.put("controllerParamIn",className);
				map.put("controllerInRemark",className);
				map.put("controllerParamOut",className);
				map.put("controllerOutRemark","returnFlag returnMsg");
				regMethodService.addRegMethod(map);
			}else if(controllerType.equals("page")){
				String ControllerContext=beanUtils.createBeanControllerPage(className);
				beanUtils.createControllerMethod(map, ControllerContext);
				map.put("serviceMethodName", "selPager"+className);
				map.put("serviceParamIn","Map");
				map.put("serviceInRemark","pageIndex pageSize 搜索条件");
				map.put("serviceParamOut","Pager<"+className+">");
				map.put("serviceOutRemark","count resultMap");
				map.put("daoMethodName", "selectPager"+className);
				map.put("daoParamIn","Map");
				map.put("daoInRemark","pageIndex pageSize 搜索条件");
				map.put("daoParamOut", " ");
				map.put("daoOutRemark"," ");
				map.put("controllerMethodName", "selPager"+className);
				map.put("controllerParamIn","Map");
				map.put("controllerInRemark","pageIndex pageSize 搜索条件");
				map.put("controllerParamOut","Pager<"+className+">");
				map.put("controllerOutRemark","datas count");
				regMethodService.addRegMethod(map);
			}else if(controllerType.equals("list")){
				String ControllerContext=beanUtils.createBeanControllerList(className);
				beanUtils.createControllerMethod(map, ControllerContext);
				map.put("serviceMethodName", "sel"+className);
				map.put("serviceParamIn","Map");
				map.put("serviceInRemark","搜索条件");
				map.put("serviceParamOut","List<"+className+">");
				map.put("serviceOutRemark","List<"+className+">");
				map.put("daoMethodName", "select"+className);
				map.put("daoParamIn","Map");
				map.put("daoInRemark","搜索条件");
				map.put("daoParamOut", " ");
				map.put("daoOutRemark"," ");
				map.put("controllerMethodName", "sel"+className);
				map.put("controllerParamIn","Map");
				map.put("controllerInRemark","搜索条件");
				map.put("controllerParamOut","List<"+className+">");
				map.put("controllerOutRemark","List<"+className+">");
				regMethodService.addRegMethod(map);
			}else if(controllerType.equals("modProperty")){
				String propertyName=map.get("propertyName").toString();
				String ControllerContext="     /**\r\n     * "+className+propertyName+"修改语句\r\n     * @param "+beanUtils.getLowercaseChar(className)+"*/\r\n"+
		        		"    @RequestMapping(value = \"/mod"+propertyName+"\", method = RequestMethod.POST)\r\n"+
		    		    "    public @ResponseBody "
		    		    +className+" mod"+className+propertyName+"(@RequestBody "+className+" "+beanUtils.getLowercaseChar(className)+") {\r\n	    "
		    			+beanUtils.getLowercaseChar(className)+"= this."+beanUtils.getLowercaseChar(className)+"Service.mod"+className+propertyName+"("+beanUtils.getLowercaseChar(className)+");\r\n"+
		    			"	    return "+beanUtils.getLowercaseChar(className)+";\r\n    }";
				beanUtils.createControllerMethod(map, ControllerContext);
				map.put("serviceMethodName", "mod"+className+propertyName);
				map.put("serviceParamIn",className);
				map.put("serviceInRemark",className);
				map.put("serviceParamOut",className);
				map.put("serviceOutRemark","returnFlag returnMsg");
				map.put("daoMethodName", "update"+className+propertyName);
				map.put("daoParamIn",className);
				map.put("daoInRemark",className);
				map.put("daoParamOut", " ");
				map.put("daoOutRemark"," ");
				map.put("controllerMethodName", "mod"+className+propertyName);
				map.put("controllerParamIn",className);
				map.put("controllerInRemark",className);
				map.put("controllerParamOut",className);
				map.put("controllerOutRemark","returnFlag returnMsg");
				regMethodService.addRegMethod(map);
			}else if(controllerType.equals("others")){
				String controllerName=map.get("controllerName").toString();
//				List<ApiDetail> list=this.apiDetailController.apiDetailSel(map);
				String parameter="	/**\r\n	* ";
//				for(int i=0;i<list.size();i++){
//					String apiType="";
//					parameter+=i+1;
//					if(list.get(i).getApiDetailParamType().equals("0")){
//						apiType="入参:";
//					}else if(list.get(i).getApiDetailParamType().equals("1")){
//						apiType="出参:";
//					}
//					if(i%5==0){
//						parameter+="\r\n	* ";
//					}
//					parameter+=apiType+list.get(i).getApiDetailNameEN()+";";
//					if(i==list.size()-1){
//						parameter+="*/\r\n";
//					}
//				}
				String ControllerContext=parameter+"    @RequestMapping(value = \"\", method = RequestMethod.POST)\r\n"+
		    		    "    public @ResponseBody "
		    		    +className+" "+controllerName+"(@RequestBody "+className+" "+beanUtils.getLowercaseChar(className)+") {\r\n	    "+
		    			"	    return "+beanUtils.getLowercaseChar(className)+";\r\n    }";
				beanUtils.createControllerMethod(map, ControllerContext);
				map.put("controllerMethodName", controllerName);
				map.put("controllerParamIn",className);
				map.put("controllerInRemark",className);
				map.put("controllerParamOut",className);
				map.put("controllerOutRemark","returnFlag returnMsg");
				regMethodService.addRegMethod(map);
			}
			return true;
		  } catch (Exception e) {
			return false;
		}
	}
	
}
