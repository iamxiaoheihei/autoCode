/**
 * All Rights Reserved, Designed By
 * Sinze Internet Finance Service (Hangzhou) Co., Ltd.
 * Copyright  2016
 * @author 雷锋
 * CreateDate 2017-02-07
 * Description RewardKindCondition
 */
package com.tty.reward.model;

import java.math.BigDecimal;
import java.nio.file.Path;

public class RewardKindCondition {

    /** 奖励种类限制编号 */
    private String rewardKindConditionId;

    /** 奖励种类限制映射表ID */
    private String rewardKindConditionMapId;

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

    public String getRewardKindConditionMapId() {
        return rewardKindConditionMapId;
    }

    public void setRewardKindConditionMapId(String rewardKindConditionMapId) {
        this.rewardKindConditionMapId = rewardKindConditionMapId == null ? null : rewardKindConditionMapId.trim();
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