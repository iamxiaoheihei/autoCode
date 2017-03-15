/**
 * All Rights Reserved, Designed By
 * Sinze Internet Finance Service (Hangzhou) Co., Ltd.
 * Copyright  2016
 * @author �׷�
 * CreateDate 2016-12-28
 * Description UserReward
 */
package com.tty.reward.model;

import java.math.BigDecimal;
import java.util.Date;

public class UserReward {

    /** �û�������� */
    private String userRewardId;

    /** �û���� */
    private String userId;

    /** ���������� */
    private String rewardKindId;

    /** ���� */
    private String activityId;

    /** ������ȡʱ�� */
    private Date getTime;

    /** ��������ʱ�� */
    private Date overDueTime;

    /** 0�������ã�1��δʹ�ã�2����ʹ�ã�3���ѹ��� */
    private String rewartStatus;

    /** ��ȡ��ֵ */
    private BigDecimal obtainAmount;

    /** 0������Ҫ�����������¼����Դ
1��Ͷ�ʼ�¼
2�����ʼ�¼ etc. */
    private String obtainSourceType;

    /** ��ȡ��ԴID */
    private String obtainSourceId;

    public String getUserRewardId() {
        return userRewardId;
    }

    public void setUserRewardId(String userRewardId) {
        this.userRewardId = userRewardId == null ? null : userRewardId.trim();
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId == null ? null : userId.trim();
    }

    public String getRewardKindId() {
        return rewardKindId;
    }

    public void setRewardKindId(String rewardKindId) {
        this.rewardKindId = rewardKindId == null ? null : rewardKindId.trim();
    }

    public String getActivityId() {
        return activityId;
    }

    public void setActivityId(String activityId) {
        this.activityId = activityId == null ? null : activityId.trim();
    }

    public Date getGetTime() {
        return getTime;
    }

    public void setGetTime(Date getTime) {
        this.getTime = getTime;
    }

    public Date getOverDueTime() {
        return overDueTime;
    }

    public void setOverDueTime(Date overDueTime) {
        this.overDueTime = overDueTime;
    }

    public String getRewartStatus() {
        return rewartStatus;
    }

    public void setRewartStatus(String rewartStatus) {
        this.rewartStatus = rewartStatus == null ? null : rewartStatus.trim();
    }

    public BigDecimal getObtainAmount() {
        return obtainAmount;
    }

    public void setObtainAmount(BigDecimal obtainAmount) {
        this.obtainAmount = obtainAmount;
    }

    public String getObtainSourceType() {
        return obtainSourceType;
    }

    public void setObtainSourceType(String obtainSourceType) {
        this.obtainSourceType = obtainSourceType == null ? null : obtainSourceType.trim();
    }

    public String getObtainSourceId() {
        return obtainSourceId;
    }

    public void setObtainSourceId(String obtainSourceId) {
        this.obtainSourceId = obtainSourceId == null ? null : obtainSourceId.trim();
    }
}