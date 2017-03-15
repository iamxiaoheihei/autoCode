/**
 * All Rights Reserved, Designed By
 * Sinze Internet Finance Service (Hangzhou) Co., Ltd.
 * Copyright  2016
 * @author 雷锋
 * CreateDate 2016-12-28
 * Description UserReward
 */
package com.tty.reward.model;

import java.math.BigDecimal;
import java.util.Date;

public class UserReward {

    /** 用户奖励编号 */
    private String userRewardId;

    /** 用户编号 */
    private String userId;

    /** 奖励种类编号 */
    private String rewardKindId;

    /** 活动编号 */
    private String activityId;

    /** 奖励获取时间 */
    private Date getTime;

    /** 奖励过期时间 */
    private Date overDueTime;

    /** 0：不可用；1：未使用；2：已使用；3：已过期 */
    private String rewartStatus;

    /** 获取数值 */
    private BigDecimal obtainAmount;

    /** 0：不重要的无需特殊记录的来源
1：投资记录
2：融资记录 etc. */
    private String obtainSourceType;

    /** 获取来源ID */
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