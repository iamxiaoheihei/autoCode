package com.autoCode.install.until;

import java.io.Serializable;
import java.util.List;

/**
 * 分页类
 * 
 * @author Administrator
 * 
 * @param <E>
 */
public class Pager<E> implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -1446115581139534313L;

	/**
	 * 第几页
	 */
	private int pageIndex;

	/**
	 * 每页显示多少条
	 */
	private int pageSize;
	/**
	 * 分页的开始值
	 */
	private int pageOffset;
	/**
	 * 总共多少条记录
	 */
	private int totalRecord;
	/**
	 * 总共多少页
	 */
	private int totalPage;
	/**
	 * 放置具体数据的列表
	 */
	private List<E> datas;

	public int getPageIndex() {
		return pageIndex;
	}

	public void setPageIndex(int pageIndex) {
		this.pageIndex = pageIndex;
	}

	public int getPageSize() {
		return pageSize;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

	public int getPageOffset() {
		return pageOffset;
	}

	public void setPageOffset(int pageOffset) {
		this.pageOffset = pageOffset;
	}

	public int getTotalRecord() {
		return totalRecord;
	}

	public void setTotalRecord(int totalRecord) {
		this.totalRecord = totalRecord;
	}

	public int getTotalPage() {
		return totalPage;
	}

	public void setTotalPage(int totalPage) {
		this.totalPage = totalPage;
	}

	public List<E> getDatas() {
		return datas;
	}

	public void setDatas(List<E> datas) {
		this.datas = datas;
	}

}
