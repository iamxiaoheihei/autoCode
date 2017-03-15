/**
 * All Rights Reserved, Designed By
 * Sinze Internet Finance Service (Hangzhou) Co., Ltd.
 * Copyright  2016
 * @author 雷锋
 * CreateDate 2016-10-24
 * Description RegMethod
 */
package com.autoCode.install.model;

import java.util.Date;

public class RegMethod {
	
	 /**注册信息id*/ 
    private String regId;

    /** 组件类型，0：DAO，1：SERVICE，2：CONTROLLER */
    private String regType;

    /** 方法名 */
    private String methodName;
    
    /** 新的方法名 */
    private String newMethodName;

    /** 输入参数 */
    private String paramIn;

    /** 输出参数 */
    private String paramOut;

    /** 入参备注 */
    private String paramInRemark;

    /** 出参备注 */
    private String paramOutRemark;

    /** 注册人 */
    private String regName;

    /** 注册时间 */
    private Date regTime;
    
    /**传入类名*/ 
    private String className;

    private String returnMsg;
    private Integer returnFlag;
    public String getRegType() {
        return regType;
    }

    public void setRegType(String regType) {
        this.regType = regType == null ? null : regType.trim();
    }

    public String getMethodName() {
        return methodName;
    }

    public void setMethodName(String methodName) {
        this.methodName = methodName == null ? null : methodName.trim();
    }

    public String getParamIn() {
        return paramIn;
    }

    public void setParamIn(String paramIn) {
        this.paramIn = paramIn == null ? null : paramIn.trim();
    }

    public String getParamOut() {
        return paramOut;
    }

    public void setParamOut(String paramOut) {
        this.paramOut = paramOut == null ? null : paramOut.trim();
    }

    public String getParamInRemark() {
        return paramInRemark;
    }

    public void setParamInRemark(String paramInRemark) {
        this.paramInRemark = paramInRemark == null ? null : paramInRemark.trim();
    }

    public String getParamOutRemark() {
        return paramOutRemark;
    }

    public void setParamOutRemark(String paramOutRemark) {
        this.paramOutRemark = paramOutRemark == null ? null : paramOutRemark.trim();
    }

    public String getRegName() {
        return regName;
    }

    public void setRegName(String regName) {
        this.regName = regName == null ? null : regName.trim();
    }

    public Date getRegTime() {
        return regTime;
    }

    public void setRegTime(Date regTime) {
        this.regTime = regTime;
    }

	public String getReturnMsg() {
		return returnMsg;
	}

	public void setReturnMsg(String returnMsg) {
		this.returnMsg = returnMsg;
	}

	public Integer getReturnFlag() {
		return returnFlag;
	}

	public void setReturnFlag(Integer returnFlag) {
		this.returnFlag = returnFlag;
	}

	public String getClassName() {
		return className;
	}

	public void setClassName(String className) {
		this.className = className;
	}

	public String getRegId() {
		return regId;
	}

	public void setRegId(String regId) {
		this.regId = regId;
	}

	public String getNewMethodName() {
		return newMethodName;
	}

	public void setNewMethodName(String newMethodName) {
		this.newMethodName = newMethodName;
	}
}
