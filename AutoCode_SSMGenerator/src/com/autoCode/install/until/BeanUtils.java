/**
 * 
 */
package com.autoCode.install.until;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.RandomAccessFile;
import java.io.UnsupportedEncodingException;
import java.io.Writer;
import java.lang.reflect.Field;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;


public class BeanUtils {
	//公共部分
	private static final String RT_1 = "\r\n";
	private static final String RT_2 = RT_1+RT_1;
	private static final String BLANK_1 =" ";
	private static final String BLANK_4 ="    ";
	//注释部分
	private static final String ANNOTATION_AUTHOR_PARAMTER1 = "All Rights Reserved, Designed By ";
	private static final String ANNOTATION_AUTHOR_PARAMTER2 = "Sinze Internet Finance Service (Hangzhou) Co., Ltd.";
	private static final String ANNOTATION_AUTHOR_PARAMTER3 = "Copyright © 2016";
	private static final String ANNOTATION_AUTHOR_PARAMTER = "@author ";
	private static final String ANNOTATION_AUTHOR_NAME = BasicPath.ANNOTATION_AUTHOR_NAME;
	private static final String ANNOTATION_AUTHOR = ANNOTATION_AUTHOR_PARAMTER + ANNOTATION_AUTHOR_NAME;
	private static final String ANNOTATION_DATE = "@date ";
	private static final String ANNOTATION = "/**"+RT_1+BLANK_1+"*"+BLANK_1+ANNOTATION_AUTHOR_PARAMTER1 +RT_1
			                                  +BLANK_1+"*"+BLANK_1+ANNOTATION_AUTHOR_PARAMTER2 +RT_1
			                                  +BLANK_1+"*"+BLANK_1+ANNOTATION_AUTHOR_PARAMTER3 +RT_1
			                                  +BLANK_1+"*"+BLANK_1+ANNOTATION_AUTHOR +RT_1
			                                  +BLANK_1+"*"+BLANK_1+ANNOTATION_DATE +getDate()+RT_1+BLANK_1+"*/"+RT_1;
	//pager的路径
	private static final String PAGER_PATH=BasicPath.PAGER_PATH;
	//项目本地存放地址，根据本地存放路径替换
	private static final String REALDAOPATH =BasicPath.REALDAOPATH;
	private static final String REALPSERVICEATH =BasicPath.REALPSERVICEATH;
	private static final String REALPROVIDERPATH =BasicPath.REALPROVIDERPATH;
	private static final String REALCMSPATH =BasicPath.REALCMSPATH;
    //model本地存路径
	private static final String path =BasicPath.PATH;
	
//	@Resource
//	private ApiDetailController apiDetailController;
	
	/**
	 * 创建bean的Dao<br>
	 * @throws Exception
	 */
	public void createBeanDao(Map<String, Object> map) throws Exception {
		String BEAN_URL=map.get("packageName").toString();
		String DAO_URL = map.get("packageName").toString().replace("model", "dao");
		String DAO_PATH=DAO_URL.replace(".", "/");
		String className = map.get("className").toString();
		String fileName = REALDAOPATH  + DAO_PATH
				          + "/" + className + "Dao.java";
		File f = new File(fileName);
		File parent = f.getParentFile(); 
		if(!parent.exists()){ 
		   parent.mkdirs();
		} 
		 Writer fw = new BufferedWriter(new OutputStreamWriter( new FileOutputStream(fileName),"UTF-8"));
		fw.write("package "+DAO_URL+";"+RT_2
		         +"import java.util.Map;"+RT_2		
		         +"import "+BEAN_URL+"."+className+";"		
		         +RT_2+ANNOTATION+"public interface " + 
				 className + "Dao{"+RT_2
				 +"}");
		fw.flush();
		fw.close();
		showInfo(fileName);
	}
    
    /**
     * 创建bean的service
     * @param c
     * @throws Exception
     */
    public void createBeanService(Map<String, Object> map) throws Exception{
    	String BEAN_URL=map.get("packageName").toString();
    	String SERVICE_URL = map.get("packageName").toString().replace("model", "service");
    	String SERVICE_PATH =SERVICE_URL.replace(".", "/");
    	String className=map.get("className").toString();
		String fileName = REALPSERVICEATH  + SERVICE_PATH
				          + "/" + className + "Service.java";
		File f = new File(fileName);
		File parent = f.getParentFile(); 
		if(!parent.exists()){ 
		   parent.mkdirs(); 
		}
	    Writer fw = new BufferedWriter(new OutputStreamWriter( new FileOutputStream(fileName),"UTF-8"));
		fw.write("package "+SERVICE_URL+";"+RT_2
				+"import "+BEAN_URL+"."+className+";"+RT_2
				+"import "+PAGER_PATH+";"+RT_2
				+"import java.util.Map;"+RT_2
				+"import java.util.List;"
				+RT_2+ANNOTATION+"public interface " + 
				className + "Service{"+RT_2
				+"}");
		fw.flush();
		fw.close();
		showInfo(fileName);
    }
    
    /**
     * 创建bean的service的实现类
     * @param c
     * @throws Exception
     */
    public void createBeanServiceImpl(Map<String, Object> map) throws Exception{
    	String BEAN_URL=map.get("packageName").toString();
    	String SERVICE_IMPL_URL = map.get("packageName").toString().replace("model", "service")+".impl";
    	String SERVICE_IMPL_PATH=SERVICE_IMPL_URL.replace(".", "/");
    	String DAO_URL = map.get("packageName").toString().replace("model", "dao");
    	String SERVICE_URL = map.get("packageName").toString().replace("model", "service");
    	String className=map.get("className").toString();
    	String fileName = REALPROVIDERPATH  + SERVICE_IMPL_PATH 
    			          + "/" +className+"ServiceImpl.java";
    	File f = new File(fileName);
    	File parent = f.getParentFile(); 
		if(!parent.exists()){ 
		   parent.mkdirs(); 
		}
    	 Writer fw = new BufferedWriter(new OutputStreamWriter( new FileOutputStream(fileName),"UTF-8"));
    	fw.write("package "+SERVICE_IMPL_URL+";"+RT_2
    			+"import javax.annotation.Resource;"+RT_2
    			+"import org.springframework.stereotype.Service;"+RT_2
				+"import java.util.Map;"+RT_2
    			+"import java.util.List;"+RT_2
    			+"import "+PAGER_PATH+";"+RT_2
    			+"import "+SERVICE_URL+"."+className+"Service;"+RT_2
				+"import "+BEAN_URL+"."+className+";"+RT_2
				+"import "+DAO_URL+"."+className+"Dao;"
    			+RT_2+ANNOTATION+"@Service(\""+getLowercaseChar(className)+"Service\")\r\npublic class " 
    			+ className + "ServiceImpl implements "+className+"Service{"+RT_2+BLANK_4
    			+"@Resource\r\n"
				+"	private "+className+"Dao "+getLowercaseChar(className)
				+"Dao;"+RT_2+BLANK_4
				+"}");
    	fw.flush();
		fw.close();
		showInfo(fileName);
    }
    /**
     * 创建bean的serviceImpl里的分页语句
     * @param c
     * @throws Exception
     */
    private String createBeanServiceImplPage(String className) throws Exception{
    	String page;
    	page="/**\r\n    * "+className+"分页语句\r\n    * @param map\r\n    * @throws Exception*/\r\n"+"    @SuppressWarnings(\"unchecked\")\r\n"+
        		"    public "+"Pager<"+className+"> "+"selPager"+className+"(Map<String,Object> map){\r\n"+
        		"	     int pageSize=(Integer) map.get(\"pageSize\");\r\n"+"	     int pageIndex=(Integer) map.get(\"pageIndex\");\r\n"+
        		"	     Pager<"+className+"> "+"pages = new Pager<"+className+">();\r\n"+
        		"	     this."+getLowercaseChar(className)+"Dao.selectPager"+className+"(map);\r\n"+
        		"	     List<"+className+"> datas=(List<"+className+">) map.get(\"result\");\r\n"+
        		"	     pages.setDatas(datas);\r\n"+
        		"	     pages.setPageOffset(pageIndex);\r\n"+
        		"	     pages.setPageSize(pageSize);\r\n"+
        		"	     pages.setPageIndex(pageIndex);\r\n"+
        		"	     int totalRecord = Integer.parseInt(map.get(\"count\").toString());\r\n"+
        		"	     pages.setTotalRecord(totalRecord);\r\n"+
        		"	     int totalPage;\r\n"+
        		"	     if(totalRecord%pageSize==0){\r\n"+
    			"	          totalPage = totalRecord/pageSize;\r\n"+
    			"	     }else{\r\n"+
    			"	          totalPage = (totalRecord/pageSize)+1;\r\n	     }\r\n"+
    			"	     pages.setTotalPage(totalPage);\r\n"+
    			"		 return pages;\r\n    }";
    	return page;
    }	
    
    /** 
     * 创建bean的serviceImpl里的添加语句
     * @param c
     * @throws Exception
     */
    private String createBeanServiceImplAdd(String className) throws Exception{  
    	String add;
    	add="    /**\r\n    * "+className+"添加语句\r\n    * @param "+getLowercaseChar(className)+"*/\r\n"+
    		"    public "+className+" add"+className+"("+className+" "+getLowercaseChar(className)+"){\r\n"+
    		"		 this."+getLowercaseChar(className)+"Dao.insert"+className+"("+getLowercaseChar(className)+");\r\n"+
    		"		 return "+getLowercaseChar(className)+";\r\n    }";
    	return add;
    }
    
    /** 
     * 创建bean的serviceImpl里的删除语句
     * @param c
     * @throws Exception
     */
    private String createBeanServiceImplDel(String className) throws Exception{ 
    	String del;
    	del="     /**\r\n     * "+className+"删除语句\r\n     * @param "+getLowercaseChar(className)+"*/\r\n"+
    		"	 public "+className+" del"+className+"("+className+" "+getLowercaseChar(className)+"){\r\n"+
    		"		 this."+getLowercaseChar(className)+"Dao.delete"+className+"("+getLowercaseChar(className)+");\r\n"+
    		"		 return "+getLowercaseChar(className)+";\r\n     }";
    	return del;
    }
    /** 
     * 创建bean的serviceImpl里的修改语句
     * @param c
     * @throws Exception
     */
    private String createBeanServiceImplMod(String className) throws Exception{
    	String mod;
    	mod="     /**\r\n     * "+className+"修改语句\r\n     * @param "+getLowercaseChar(className)+"*/\r\n"+
    		"     public "+className+" mod"+className+"("+className+" "+getLowercaseChar(className)+"){\r\n"+
    		"	     this."+getLowercaseChar(className)+"Dao.update"+className+"("+getLowercaseChar(className)+");\r\n"+
    		"	     return "+getLowercaseChar(className)+";\r\n     }";
    	return mod;
    }
    
    /** 
     * 创建bean的serviceImpl里的获取单条数据语句
     * @param c
     * @throws Exception
     */
    private String createBeanServiceImplGet(String className) throws Exception{
    	String get;
    	get="     /**\r\n     * "+className+"查询语句\r\n     * @param "+getLowercaseChar(className)+"*/\r\n"+
    		"     public "+className+" get"+className+"("+className+" "+getLowercaseChar(className)+"){\r\n"+
    		"	     this."+getLowercaseChar(className)+"Dao.select"+className+"ById("+getLowercaseChar(className)+");\r\n"+
    		"	     return "+getLowercaseChar(className)+";\r\n     }";
    	return get;
    }
    
    /** 
     * 创建bean的serviceImpl里的获取list语句
     * @param c
     * @throws Exception
     */
    private String createBeanServiceImplList(String className) throws Exception{ 
    	String list;
    	list="     /**\r\n     * "+className+"获取list语句\r\n     * @param "+getLowercaseChar(className)+"*/\r\n"+
    		"     public List<"+className+"> sel"+className+"(Map<String, Object> map){\r\n"+
    		"	     this."+getLowercaseChar(className)+"Dao.select"+className+"(map);\r\n"+
    		"        List<"+className+"> list=(List<"+className+">)map.get(\"result\");                                                                   " +    
    		"	     return list;\r\n     }";
    	return list;
    }
    
    /**
     * 创建bean的Controller
     * @param c
     * @throws Exception
     */
    public void createBeanController(Map<String, Object> map) throws Exception{
    	String BEAN_URL=map.get("packageName").toString();
    	String CONTROLLER = map.get("packageName").toString().replace("model", "controller");
    	String SERVICE_URL = map.get("packageName").toString().replace("model", "service");
    	String CONTROLLER_PATH=CONTROLLER.replace(".", "/");
    	String className=map.get("className").toString();
    	String fileName = REALCMSPATH  + CONTROLLER_PATH
    			          + "/" +className+"Controller.java";
    	File f = new File(fileName);
    	File parent = f.getParentFile(); 
    	String RequestMapping=map.get("RequestMapping").toString();
		if(!parent.exists()){ 
		   parent.mkdirs(); 
		}
    	 Writer fw = new BufferedWriter(new OutputStreamWriter( new FileOutputStream(fileName),"UTF-8"));
    	fw.write("package "+CONTROLLER+";"+RT_2
    			+"import javax.annotation.Resource;"+RT_2
				+"import java.util.Map;"+RT_2
    			+"import java.util.List;"+RT_2
    			+"import "+PAGER_PATH+";"+RT_2
    			+"import org.springframework.stereotype.Controller;"+RT_2
				+"import org.springframework.web.bind.annotation.RequestMapping;"+RT_2
    			+"import org.springframework.web.bind.annotation.RequestBody;"+RT_2
    			+"import org.springframework.web.bind.annotation.RequestMethod;"+RT_2
				+"import org.springframework.web.bind.annotation.ResponseBody;"+RT_2
    			+"import "+SERVICE_URL+"."+className+"Service;"+RT_2
				+"import "+BEAN_URL+"."+className+";"
    			+RT_2+ANNOTATION+"@Controller\r\n@RequestMapping(\""+RequestMapping+"\")\r\npublic class " 
    			+ className + "Controller{"+RT_2+BLANK_4
    			+"@Resource\r\n"
				+"	private "+className+"Service "+getLowercaseChar(className)
				+"Service;"+RT_2+BLANK_4
				+"}");
    	fw.flush();
		fw.close();
		showInfo(fileName);
    }
    
    /**
     * 创建bean的Controller里的分页
     * @param c
     * @throws Exception
     */
    public String createBeanControllerPage(String className) throws Exception{
    	String sel;
    	sel="/**\r\n     * "+className+"获取分页\r\n     * @param map*/\r\n"+
    		"    @RequestMapping(value = \"/selPager\", method = RequestMethod.POST)\r\n"+
		    "    public @ResponseBody "+
		    "Pager<"+className+"> selPager"+className+"(@RequestBody Map<String, Object> map){\r\n"+
			"		Pager<"+className+"> page=this."+getLowercaseChar(className)+"Service.selPager"+className+"(map);\r\n"+
			"		return page;\r\n    }";
    	return sel;	
    }
    
    /**
     * 创建bean的Controller里的获取list
     * @param c
     * @throws Exception
     */
    public String createBeanControllerList(String className) throws Exception{ 
    	String sel;
    	sel="/**\r\n     * "+className+"获取list\r\n     * @param map*/\r\n"+
    		"    @RequestMapping(value = \"/sel\", method = RequestMethod.POST)\r\n"+
		    "    public @ResponseBody "+
		    "List<"+className+"> sel"+className+"(@RequestBody Map<String, Object> map){\r\n"+
			"		List<"+className+"> list =this."+getLowercaseChar(className)+"Service.sel"+className+"(map);\r\n"+
			"		return list;\r\n    }";
    	return sel;	
    }
    
    /**
     * 创建bean的Controller里的添加
     * @param c
     * @throws Exception
     */
    public String createBeanControllerAdd(String className) throws Exception{
    	String add;
    	add="     /**\r\n     * "+className+"添加信息\r\n     * @param "+getLowercaseChar(className)+"*/\r\n"+
    	    "    @RequestMapping(value = \"/add\", method = RequestMethod.POST)\r\n"+
		    "	 public @ResponseBody "
		    +className+" add"+className+"(@RequestBody "+className+" "+getLowercaseChar(className)+") {\r\n		"
			+getLowercaseChar(className)+"= this."+getLowercaseChar(className)+"Service.add"+className+"("+getLowercaseChar(className)+");\r\n"+
			"		return "+getLowercaseChar(className)+";\r\n    }";
    	return add;   	
    }
    
    /**
     * 创建bean的Controller里的删除
     * @param c
     * @throws Exception
     */
    public String createBeanControllerDel(String className) throws Exception{ 
    	String del;
    	del="     /**\r\n     * "+className+"删除单条信息\r\n     * @param "+getLowercaseChar(className)+"*/\r\n"+
    		"    @RequestMapping(value = \"/del\", method = RequestMethod.POST)\r\n"+
		    "    public @ResponseBody "
		    +className+" del"+className+"(@RequestBody "+className+" "+getLowercaseChar(className)+") {\r\n        "
			+getLowercaseChar(className)+"= this."+getLowercaseChar(className)+"Service.del"+className+"("+getLowercaseChar(className)+");\r\n"+
			"	    return "+getLowercaseChar(className)+";\r\n    }";
    	return del;
    }
    
    /**
     * 创建bean的Controller里的查询
     * @param c
     * @throws Exception
     */
    public String createBeanControllerGet(String className) throws Exception{
    	String get;
    	get="     /**\r\n     * "+className+"获取一条数据\r\n     * @param "+getLowercaseChar(className)+"*/\r\n"+
    		"    @RequestMapping(value = \"/get\", method = RequestMethod.POST)\r\n"+
		    "    public @ResponseBody "
		    +className+" get"+className+"(@RequestBody "+className+" "+getLowercaseChar(className)+") {\r\n	    "
			+getLowercaseChar(className)+"= this."+getLowercaseChar(className)+"Service.get"+className+"("+getLowercaseChar(className)+");\r\n"+
			"	    return "+getLowercaseChar(className)+";\r\n    }";
    	return get;	
    }
    
    /**
     * 创建bean的Controller里的修改
     * @param c
     * @throws Exception
     */
    public String createBeanControllerMod(String className) throws Exception{ 
    	String mod;
    	mod="     /**\r\n     * "+className+"修改一条信息\r\n     * @param "+getLowercaseChar(className)+"*/\r\n"+
    		"    @RequestMapping(value = \"/mod\", method = RequestMethod.POST)\r\n"+
		    "    public @ResponseBody "
		    +className+" mod"+className+"(@RequestBody "+className+" "+getLowercaseChar(className)+") {\r\n	    "
			+getLowercaseChar(className)+"= this."+getLowercaseChar(className)+"Service.mod"+className+"("+getLowercaseChar(className)+");\r\n"+
			"	    return "+getLowercaseChar(className)+";\r\n    }";
    	return mod;
    	
    }
    
    
    /**
     * @title 生成修改存储过程的dao到controller的接口和方法
     * @author YSL
     * CreateDate 2016-9-22
     * @Description
     * @param c
     * @param map
     * @throws Exception
     */
    public void allBeanMod(Map<String, Object> map)throws Exception{
    	createServiceImplMethod(map);
    	createServiceMethod( map);
    	createDaoMethod( map);
    }
 
    /**
     * @title 生成controller中的方法
     * CreateDate 2016-10-24
     * @Description
     * @param map
     * @throws Exception
     */
    public Map<String, Object> createControllerMethod(Map<String, Object> map,String ControllerContext)throws Exception{
    	String className = map.get("className").toString();
    	String CONTROLLER = map.get("packageName").toString().replace("model", "controller");
    	String CONTROLLER_PATH=CONTROLLER.replace(".", "/");
    	String ControllerfileName = REALCMSPATH  + CONTROLLER_PATH 
		          + "/" +className+"Controller.java";
    	addContext(ControllerContext, ControllerfileName);
    	return map;
    }
    
    /**
     * @title 生成serviceImpl中的方法
     * CreateDate 2016-10-24
     * @Description
     * @param map
     * @throws Exception
     */
    public void createServiceImplMethod(Map<String, Object> map)throws Exception{
    	String className=map.get("className").toString();
    	String serviceMethodName=map.get("serviceMethodName").toString();
    	String daoMethodName=map.get("daoMethodName").toString();
    	String serviceParamIn=map.get("serviceParamIn").toString();
    	String serviceParamIn1=serviceParamIn;
    	String daoParamIn=map.get("daoParamIn").toString();
    	if(serviceParamIn1.equals("Map")){
    		serviceParamIn1="Map<String,Object>";
    	}
    	String paramOut=map.get("serviceParamOut").toString();
    	String paramOut1=paramOut;
    	if(paramOut1.equals("Map")){
    		paramOut1="Map<String,Object>";
    	}else if(paramOut1.equals("Pager")){
    		paramOut1="Pager<"+className+">";
    	}
    	String SERVICE_IMPL_URL = map.get("packageName").toString().replace("model", "service")+".impl";
    	String SERVICE_IMPL_PATH=SERVICE_IMPL_URL.replace(".", "/");
    	String ServiceImplfileName = REALPROVIDERPATH  + SERVICE_IMPL_PATH 
    			          + "/" +className+"ServiceImpl.java";
		File f = new File(ServiceImplfileName);
		File parent = f.getParentFile(); 
		if(!parent.exists()){ 
		 parent.mkdirs();
		} 
		String controllerType = (String) map.get("controllerType");
		
    	String ServiceImplContext="     /**\r\n     * "+className+"的"+serviceMethodName+"方法\r\n     * @param "+getLowercaseChar(serviceParamIn)+"*/\r\n"+
        		"     public "+paramOut1+" "+serviceMethodName+"("+serviceParamIn1+" "+getLowercaseChar(serviceParamIn)+"){\r\n"+
        		"	     this."+getLowercaseChar(className)+"Dao."+daoMethodName+"("+getLowercaseChar(daoParamIn)+");\r\n"+
        		"	     return "+getLowercaseChar(paramOut)+";\r\n     }";
    	if(controllerType.equals("page")){
    		ServiceImplContext=this.createBeanServiceImplPage(className);
    	}else if(controllerType.equals("list")){
    		ServiceImplContext=this.createBeanServiceImplList(className);
    	}
    	addContext(ServiceImplContext, ServiceImplfileName);
    }
    
    /**
     * @title 生成service中的方法
     * CreateDate 2016-10-24
     * @Description
     * @param map
     * @throws Exception
     */
    public void createServiceMethod(Map<String, Object> map)throws Exception{
    	String className=map.get("className").toString();
    	String serviceMethodName=map.get("serviceMethodName").toString();
    	
    	String serviceParamIn=map.get("serviceParamIn").toString();
    	String serviceParamIn1=serviceParamIn;
    	if(serviceParamIn1.equals("Map")){
    		serviceParamIn1="Map<String,Object>";
    	}
    	String paramOut=map.get("serviceParamOut").toString();
    	if(paramOut.equals("Map")){
    		paramOut="Map<String,Object>";
    	}else if(paramOut.equals("Pager")){
    		paramOut="Pager<"+className+">";
    	}
    	String SERVICE_URL = map.get("packageName").toString().replace("model", "service");
    	String SERVICE_PATH=SERVICE_URL.replace(".", "/");
    	String ServicefileName = REALPSERVICEATH  + SERVICE_PATH 
		          + "/" +className+"Service.java";  
    	File f = new File(ServicefileName);
		File parent = f.getParentFile(); 
		if(!parent.exists()){ 
		 parent.mkdirs();
		} 
    	String ServiceContext="    /**\r\n    * "+className+"的"+serviceMethodName+"方法\r\n    * @param "+getLowercaseChar(serviceParamIn)+"*/\r\n"+
    			"	public "+paramOut+" "+serviceMethodName+"("+serviceParamIn1+" "+getLowercaseChar(serviceParamIn)+");";
    	addContext(ServiceContext, ServicefileName);
    }
    
    
    
    /**
     * @title 生成Dao中的方法
     * CreateDate 2016-10-24
     * @Description
     * @param map
     * @throws Exception
     */
    public void createDaoMethod(Map<String, Object> map)throws Exception{
    	String className=map.get("className").toString();
    	String daoMethodName=map.get("daoMethodName").toString();
    	String daoParamIn=map.get("daoParamIn").toString();
    	String daoParamIn1=daoParamIn;
    	if(daoParamIn1.equals("Map")){
    		daoParamIn1="Map<String,Object>";
    	}
    	String DAO_URL = map.get("packageName").toString().replace("model", "dao");
    	String DAO_PATH=DAO_URL.replace(".", "/");
    	String DaofileName = REALDAOPATH  + DAO_PATH 
		          + "/" +className+"Dao.java";
    	File f = new File(DaofileName);
		File parent = f.getParentFile(); 
		if(!parent.exists()){ 
		 parent.mkdirs();
		} 
    	String DaoContext="    /**\r\n    * "+className+"的"+daoMethodName+"方法\r\n    * @param "+getLowercaseChar(daoParamIn)+"*/\r\n"+
    			"	public void "+daoMethodName+"("+daoParamIn1+" "+getLowercaseChar(daoParamIn)+");";
    	addContext(DaoContext, DaofileName);
    }

//    /**
//     * @title 生成xml中的映射String
//     * CreateDate 2016-10-24
//     * @Description
//     * @param map
//     * @throws Exception
//     */
//    public String createXmlMapping(String apiInfoUrl,String daoMethodName,String controllerType,String className,String procedure)throws Exception{
//    	Map<String,Object> map=new HashMap<String,Object>();
//    	map.put("apiInfoUrl", apiInfoUrl);
//		List<ApiDetail> list=this.apiDetailController.apiDetailSel(map);
//    	String xml="	<select id=\""+daoMethodName+"\" statementType=\"CALLABLE\" parameterType=\"";
//    	if(controllerType.equals("list")){
//    		xml+="map\">\r\n";
//    	}else if(controllerType.equals("page")){
//    		xml+="map\">\r\n";
//    	}else{
//    		xml+=className+"\">\r\n";
//        }
//    	xml+="		call "+procedure+"(\r\n";
//		String in="";
//		String out="";
//    	for(int i=0;i<list.size();i++){
//    		if(list.get(i).getApiDetailDataType().equals("String")){
//    			list.get(i).setApiDetailDataType("VARCHAR");
//    		}
//    		if(list.get(i).getApiDetailParamType().equals("0")){
//    			in+="			#{"+list.get(i).getApiDetailNameEN()+",jdbcType="+list.get(i).getApiDetailDataType()+",mode=IN,\r\n";
//    		}else if(list.get(i).getApiDetailParamType().equals("1")){
//    			out+="			#{"+list.get(i).getApiDetailNameEN()+",jdbcType="+list.get(i).getApiDetailDataType()+",mode=OUT,\r\n";
//    		}
//    	}
//    	xml+=in+out;
//    	xml.substring(0, xml.lastIndexOf(",")-1);
//    	xml+="\r\n		)}\r\n	</select>";
//    	return xml;
//    }
    
    /**
     * @title 向项目内指定文件结尾添加内容
     * @author YSL
     * CreateDate 2016-9-22
     * @Description
     * @param context
     * @param fileName
     * @throws UnsupportedEncodingException 
     */
    private void addContext(String context,String fileName) throws UnsupportedEncodingException{
    	RandomAccessFile raf=null;
		byte[] content=(context+RT_2+"}").getBytes("UTF-8");
		try {  
            raf = new RandomAccessFile(fileName, "rw");  
            raf.seek(raf.length()-1);  
            raf.write(content);  
           
        } catch (FileNotFoundException e) {  
            e.printStackTrace();  
        } catch (IOException e) {  
            e.printStackTrace();  
        } finally {  
            try {  
                raf.close();  
            } catch (Exception e) {  
            }  
        }
    }
    
    /**
     * @title 向指定XML文件结尾添加内容
     * @author YSL
     * CreateDate 2016-9-22
     * @Description
     * @param context
     * @param fileName
     * @throws UnsupportedEncodingException 
     */
    private void addContextForXml(String context,String fileName) throws UnsupportedEncodingException{
    	RandomAccessFile raf=null;
		byte[] content=(context+RT_2+"}").getBytes("UTF-8");
		try {  
            raf = new RandomAccessFile(fileName, "rw");  
            raf.seek(raf.length()-9);  
            raf.write(content);  
           
        } catch (FileNotFoundException e) {  
            e.printStackTrace();  
        } catch (IOException e) {  
            e.printStackTrace();  
        } finally {  
            try {  
                raf.close();  
            } catch (Exception e) {  
            }  
        }
    }
    
	/**
	 * 获取路径的最后面字符串<br>
	 * 如：<br>
	 *     <code>str = "com.b510.base.bean.User"</code><br>
	 *     <code> return "User";<code>
	 * @param str
	 * @return
	 */
    private String getLastChar(String str) {
		if ((str != null) && (str.length() > 0)) {
			int dot = str.lastIndexOf('.');
			if ((dot > -1) && (dot < (str.length() - 1))) {
				return str.substring(dot + 1);
			}
		}
		return str;
	}
	
	/**
	 * 把第一个字母变为小写<br>
	 * 如：<br>
	 *     <code>str = "UserDao";</code><br>
	 *     <code>return "userDao";</code>
	 * @param str
	 * @return
	 */
    public String getLowercaseChar(String str){
		return str.substring(0,1).toLowerCase()+str.substring(1);
	}

	/**
	 * 显示信息
	 * @param info
	 */
    private void showInfo(String info){
		System.out.println("创建文件："+ info+ "成功！");
	}
	
	/**
	 * 获取系统时间
	 * @return
	 */
    private static String getDate(){
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
		return simpleDateFormat.format(new Date());
	}
	
	/**
	 * 判断后台相关类是否已创建
	 * return String 
	 */
	public String exisClass( Map<String, Object> map){
		String DAO_URL = map.get("packageName").toString().replace("model", "dao");
		String DAO_PATH=DAO_URL.replace(".", "/");
		String className=map.get("className").toString();
		String fileName = REALDAOPATH  + DAO_PATH
				          + "/" + className + "Dao.java";
		File f = new File(fileName);
		if(f.exists()){
			return "0";
		}else{
			return null; 
		}
	}
	
	/**
	 * 
	 * @title 获取model的中文注释
	 * @author CMN
	 * CreateDate 2016-10-12
	 * @Description 
	 * @param map
	 * @return
	 * @throws IOException
	 */
	public List<String> getComment(Map<String, Object> map) throws IOException {	
		//该处需自行替换本地model对象的本地存放路径
		String path1 =path+map.get("packageName").toString().replace(".", "/")+"/"+map.get("className")+".java";
		
		System.out.println("path路径----------"+path1);
		List<String> comments = new ArrayList<String>();
		BufferedReader bfr = new BufferedReader(new InputStreamReader(new FileInputStream(path1), "UTF-8"));
		String line = null;
		while ((line = bfr.readLine()) != null) {
			line = line.trim();
			if (line.startsWith("//")) {
				comments.add(line);
			} else if (line.startsWith("/*") && line.endsWith("*/")) {
				comments.add(line);
				System.out.println(line);
			} else if (line.startsWith("/** ") && !line.endsWith("*/")) {
				StringBuffer multilineComment = new StringBuffer(line);
				while ((line = bfr.readLine())!= null) {
					line = line.trim();
					multilineComment.append("\n").append(line);
					if (line.endsWith("*/")) {
						comments.add(multilineComment.toString());
						break;
					}
				}

			}
		}
		bfr.close();
		return comments;
	}
	
	
	/**
	 * 
	 * @title 获取model的英文属性名
	 * @author CMN
	 * CreateDate 2016-10-12
	 * @Description 
	 * @param map
	 * @return
	 * @throws ClassNotFoundException
	 * @throws InstantiationException
	 * @throws IllegalAccessException
	 */
	public List<String> getField(Map<String, Object> map) throws ClassNotFoundException, InstantiationException, IllegalAccessException {
		String className = map.get("packageName")+"."+map.get("className");
		Class<?> clazz = Class.forName(className);//这里的类名是全名,有包的话要加上包名 
		Object obj = clazz.newInstance(); 
		//Class c = object.getClass();
		Field[] fields = obj.getClass().getDeclaredFields();
		List<String> list = new ArrayList<String>();
		Field.setAccessible(fields, true);
		try {
			for(Field field : fields) {
				list.add(field.getName());
			}
		}catch(Exception e) {
			e.printStackTrace();
		}
		return list;
	}
	
	/**
	 * 根据bean生成相应的文件
	 * @param beanUtils
	 * @param c
	 * @throws Exception
	 */
	public void beanTool(Map<String, Object> map)throws Exception{
		createBeanDao(map);
		createBeanService(map);
		createBeanServiceImpl(map);
		createBeanController(map);
	}
	
}
