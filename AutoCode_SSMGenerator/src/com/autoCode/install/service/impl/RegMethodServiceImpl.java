package com.autoCode.install.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import com.autoCode.install.dao.RegMethodDao;
import com.autoCode.install.model.RegMethod;
import com.autoCode.install.service.RegMethodService;
import com.autoCode.install.until.BeanUtils;
import com.autoCode.install.until.Pager;
import com.itextpdf.text.log.SysoCounter;


/**
 * All Rights Reserved, Designed By 
 * Sinze Internet Finance Service (Hangzhou) Co., Ltd.
 * Copyright  2016
 * @author CMN
 * CreateDate 2016-8-25
 * Description 
 */
@Service("regMethodService")
public class RegMethodServiceImpl implements RegMethodService {

	@Resource
	private RegMethodDao regMethodDao;
	
	/**
	 * @title 在方法注册中心注册一个方法同时生成该方法的java代码
	 * @author CMN
	 * CreateDate 2016-10-24
	 * @Description
	 * @param map
	 * @throws Exception
	 */
	public RegMethod addRegMethod(Map<String, Object> map) throws Exception{
		String controllerType = (String) map.get("controllerType");
		System.out.println("========================"+controllerType);
		RegMethod regMethod3 = new RegMethod();
		if(controllerType!=null&&!controllerType.equals("")){
			if(controllerType.equals("others")){
				RegMethod regMethod2 = new RegMethod();
				regMethod2.setRegId("");
				regMethod2.setRegType("2");
				regMethod2.setMethodName(map.get("controllerMethodName").toString());
				regMethod2.setParamIn(map.get("controllerParamIn").toString());
				regMethod2.setParamInRemark(map.get("controllerInRemark").toString());
				regMethod2.setParamOut(map.get("controllerParamOut").toString());
				regMethod2.setParamOutRemark(map.get("controllerOutRemark").toString());
				regMethod2.setRegName(map.get("regName").toString());
				//注册controller方法
				this.regMethodDao.insertRegMethod(regMethod2);
				regMethod3=regMethod2;
			}else{
				RegMethod regMethod = new RegMethod();
				regMethod.setRegId("");
				regMethod.setRegType("1");
				regMethod.setMethodName(map.get("serviceMethodName").toString());
				regMethod.setParamIn(map.get("serviceParamIn").toString());
				regMethod.setParamInRemark(map.get("serviceInRemark").toString());
				regMethod.setParamOut(map.get("serviceParamOut").toString());
				regMethod.setParamOutRemark(map.get("serviceOutRemark").toString());
				regMethod.setRegName(map.get("regName").toString());
				RegMethod regMethod1 = new RegMethod();
				regMethod1.setRegId("");
				regMethod1.setRegType("0");
				regMethod1.setMethodName(map.get("daoMethodName").toString());
				regMethod1.setParamIn(map.get("daoParamIn").toString());
				regMethod1.setParamInRemark(map.get("daoInRemark").toString());
				regMethod1.setParamOut("void");
				regMethod1.setParamOutRemark("void");
				regMethod1.setRegName(map.get("regName").toString());
				if(controllerType!=null&&!controllerType.equals("")&&!controllerType.equals("others")){
					RegMethod regMethod2 = new RegMethod();
					regMethod2.setRegId("");
					regMethod2.setRegType("2");
					regMethod2.setMethodName(map.get("controllerMethodName").toString());
					regMethod2.setParamIn(map.get("controllerParamIn").toString());
					regMethod2.setParamInRemark(map.get("controllerInRemark").toString());
					regMethod2.setParamOut(map.get("controllerParamOut").toString());
					regMethod2.setParamOutRemark(map.get("controllerOutRemark").toString());
					regMethod2.setRegName(map.get("regName").toString());
					//注册controller方法
					this.regMethodDao.insertRegMethod(regMethod2);
				}
				//注册dao方法
				this.regMethodDao.insertRegMethod(regMethod);
				
				if(regMethod.getReturnFlag()==0){
					//注册service方法
					this.regMethodDao.insertRegMethod(regMethod1);
					if(regMethod1.getReturnFlag()==0){
						//生成对应的serviceImpl到dao的方法
						BeanUtils beanUtils = new BeanUtils();
						beanUtils.allBeanMod(map);
					}
					regMethod3=regMethod1;
				}else{
					regMethod3=regMethod;
				}
			}
		}else{
			RegMethod regMethod = new RegMethod();
			regMethod.setRegId("");
			regMethod.setRegType("1");
			regMethod.setMethodName(map.get("serviceMethodName").toString());
			regMethod.setParamIn(map.get("serviceParamIn").toString());
			regMethod.setParamInRemark(map.get("serviceInRemark").toString());
			regMethod.setParamOut(map.get("serviceParamOut").toString());
			regMethod.setParamOutRemark(map.get("serviceOutRemark").toString());
			regMethod.setRegName(map.get("regName").toString());
			RegMethod regMethod1 = new RegMethod();
			regMethod1.setRegId("");
			regMethod1.setRegType("0");
			regMethod1.setMethodName(map.get("daoMethodName").toString());
			regMethod1.setParamIn(map.get("daoParamIn").toString());
			regMethod1.setParamInRemark(map.get("daoInRemark").toString());
			regMethod1.setParamOut("void");
			regMethod1.setParamOutRemark("void");
			regMethod1.setRegName(map.get("regName").toString());
			this.regMethodDao.insertRegMethod(regMethod);
			if(regMethod.getReturnFlag()==0){
				//注册service方法
				this.regMethodDao.insertRegMethod(regMethod1);
				if(regMethod1.getReturnFlag()==0){
					//生成对应的serviceImpl到dao的方法
					BeanUtils beanUtils = new BeanUtils();
					beanUtils.allBeanMod(map);
				}
			    regMethod3=regMethod1;
		    }else{
			    regMethod3=regMethod;
		    }
		}
		System.out.println(regMethod3.getReturnFlag());
		return regMethod3;
	}
	
	/**
	 * @title 在方法注册中心修改一条数据
	 * @author CMN
	 * CreateDate 2016-10-24
	 * @Description
	 * @param regMethod
	 * @throws Exception
	 */
	public RegMethod modRegMethod(RegMethod regMethod){
		this.regMethodDao.updateRegMethod(regMethod);
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
	public RegMethod delRegMethod(RegMethod regMethod){
		this.regMethodDao.deleteRegMethod(regMethod);
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
	public RegMethod selRegMethod(RegMethod regMethod) {
		this.regMethodDao.selectRegMethod(regMethod);
		return regMethod;
	}

	/**
	 * @title 在方法注册中心获取数据分页
	 * @author CMN
	 * CreateDate 2016-10-24
	 * @Description
	 * @param regMethod
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public Pager<RegMethod> selRegMethodPage(Map<String,Object> map){
		int pageSize=(Integer) map.get("pageSize");
		int pageIndex=(Integer) map.get("pageIndex");
		Pager<RegMethod> pages = new Pager<RegMethod>();
		this.regMethodDao.selectRegMethodPage(map);
		List<RegMethod> datas=(List<RegMethod>) map.get("result");
		pages.setDatas(datas);
		pages.setPageOffset(pageIndex);
		pages.setPageSize(pageSize);
		pages.setPageIndex(pageIndex);
		int totalRecord = Integer.parseInt(map.get("count").toString());
		pages.setTotalRecord(totalRecord);
		int totalPage;
		if(totalRecord%pageSize==0){
			totalPage = totalRecord/pageSize;
		}else{
			totalPage = (totalRecord/pageSize)+1;
		}
		pages.setTotalPage(totalPage);
		return pages;
	}

}
