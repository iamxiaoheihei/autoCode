/**
 * All Rights Reserved, Designed By
 * Sinze Internet Finance Service (Hangzhou) Co., Ltd.
 * Copyright  2016
 * @author 雷锋
 * CreateDate 2017-01-09
 * Description RewardKindCondition
 */
package com.tty.reward.model;

import java.math.BigDecimal;

public class RewardKindCondition {

    /** 奖励种类限制编号 */
    private String rewardKindConditionId;

    /** 奖励种类编号 */
    private String rewardKindId;

    /** 数值下限 */
    private BigDecimal lowerNumberLimit;

    /** 数值上限 */
    private BigDecimal upperNumberLimit;

    /** 使用数值上限 */
    private BigDecimal upperUseAmount;

    public String getRewardKindConditionId() {
        return rewardKindConditionId;
    }

    public void setRewardKindConditionId(String rewardKindConditionId) {
        this.rewardKindConditionId = rewardKindConditionId == null ? null : rewardKindConditionId.trim();
    }

    public String getRewardKindId() {
        return rewardKindId;
    }

    public void setRewardKindId(String rewardKindId) {
        this.rewardKindId = rewardKindId == null ? null : rewardKindId.trim();
    }

    public BigDecimal getLowerNumberLimit() {
        return lowerNumberLimit;
    }

    public void setLowerNumberLimit(BigDecimal lowerNumberLimit) {
        this.lowerNumberLimit = lowerNumberLimit;
    }

    public BigDecimal getUpperNumberLimit() {
        return upperNumberLimit;
    }

    public void setUpperNumberLimit(BigDecimal upperNumberLimit) {
        this.upperNumberLimit = upperNumberLimit;
    }

    public BigDecimal getUpperUseAmount() {
        return upperUseAmount;
    }

    public void setUpperUseAmount(BigDecimal upperUseAmount) {
        this.upperUseAmount = upperUseAmount;
    }
}