package com.autoCode.install.model;

import java.io.Serializable;

public class ApiDetail implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = -8829913249984440194L;
	/**
	 * 接口详情ID
	 */
	private String apiDetailId;
	/**
	 * 接口信息ID
	 */
	private String apiInfoId;
	/**
	 * 参数的中文名
	 */
	private String apiDetailNameCN;
	/**
	 * 参数的英文名
	 */
	private String apiDetailNameEN;
	/**
	 * 0：入参，1：出参
	 */
	private String apiDetailParamType;
	/**
	 * 参数的数据类型
	 */
	private String apiDetailDataType;
	/**
	 * 0：必填，1：非必填
	 */
	private String apiDetailNullable;
	/**
	 * 该条详情的备注
	 */
	private String apiDetailRemark;
	/**
	 * 该条详情对应的数据字典ID
	 */
	private String dataTypeId;
	
	
	public String getApiDetailId() {
		return apiDetailId;
	}
	public void setApiDetailId(String apiDetailId) {
		this.apiDetailId = apiDetailId;
	}
	public String getApiInfoId() {
		return apiInfoId;
	}
	public void setApiInfoId(String apiInfoId) {
		this.apiInfoId = apiInfoId;
	}
	public String getApiDetailNameCN() {
		return apiDetailNameCN;
	}
	public void setApiDetailNameCN(String apiDetailNameCN) {
		this.apiDetailNameCN = apiDetailNameCN;
	}
	public String getApiDetailNameEN() {
		return apiDetailNameEN;
	}
	public void setApiDetailNameEN(String apiDetailNameEN) {
		this.apiDetailNameEN = apiDetailNameEN;
	}
	public String getApiDetailParamType() {
		return apiDetailParamType;
	}
	public void setApiDetailParamType(String apiDetailParamType) {
		this.apiDetailParamType = apiDetailParamType;
	}
	public String getApiDetailDataType() {
		return apiDetailDataType;
	}
	public void setApiDetailDataType(String apiDetailDataType) {
		this.apiDetailDataType = apiDetailDataType;
	}
	public String getApiDetailNullable() {
		return apiDetailNullable;
	}
	public void setApiDetailNullable(String apiDetailNullable) {
		this.apiDetailNullable = apiDetailNullable;
	}
	public String getApiDetailRemark() {
		return apiDetailRemark;
	}
	public void setApiDetailRemark(String apiDetailRemark) {
		this.apiDetailRemark = apiDetailRemark;
	}
	public String getDataTypeId() {
		return dataTypeId;
	}
	public void setDataTypeId(String dataTypeId) {
		this.dataTypeId = dataTypeId;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
}