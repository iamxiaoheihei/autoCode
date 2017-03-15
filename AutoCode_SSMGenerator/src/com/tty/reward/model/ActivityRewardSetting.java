/**
 * All Rights Reserved, Designed By
 * Sinze Internet Finance Service (Hangzhou) Co., Ltd.
 * Copyright  2016
 * @author 雷锋
 * CreateDate 2016-12-30
 * Description ActivityRewardSetting
 */
package com.tty.reward.model;

import java.math.BigDecimal;

public class ActivityRewardSetting {

    /** 活动奖励设置编号 */
    private String rewardSettingId;

    /** 用户等级上限 */
    private String upperUserLevelId;

    /** 用户等级下限 */
    private String lowerUserLevelId;

    /** 唯一编号 */
    private String inputId;

    /** 奖励种类编号 */
    private String rewardKindId;

    /** 活动编号 */
    private String activityId;

    /** 活动中奖励设置的类型：1.概率型，由用户行为触发有一定几率[可能为100%]获得奖励或由抽奖次数有一定几率转换为其他奖励2.兑换型，用一种奖励按照一定的比例与附加条件转换为另一种奖励3.折算型，由用户行为触发，被动获取奖励，可能会根据资金折算为奖励数值4.使用型，仅与用户行为有关 */
    private String actRewardType;

    /**  参与奖(谢谢参与)   特等奖   一等奖   二等奖 etc. */
    private Short rewardLevel;

    /** 包括   (1)注册    (2)登录   (3)邀请与被邀请   (4)开户    (5)实名认证    (6)绑卡    (7)充值   (8)提现   (9)投资   (10)融资   (11)兑换   (12)抽奖    (13)直接使用其中    (7)-(10)与资金有关，要求完成后才进行计算 */
    private String relateAction;

    /** 0：无限制1：产品类型限制  2：产品种类限制  3：具体产品限制 */
    private String productLimitLevel;

    /** 具体产品限制 */
    private String productLimitList;

    /** 0：固定值 1：动态计算 */
    private String valueType;

    /** 固定值 */
    private BigDecimal staticValue;

    /** 动态计算公式 */
    private String dynamicFormula;

    /** 计算公式说明 */
    private String formulaNote;

    /** 获取几率 */
    private BigDecimal winningRate;

    /** 总数上限 */
    private Integer upperLimitQuantity;

    /** 个人数量上限 */
    private Integer singleUpperLimit;

    public String getRewardSettingId() {
        return rewardSettingId;
    }

    public void setRewardSettingId(String rewardSettingId) {
        this.rewardSettingId = rewardSettingId == null ? null : rewardSettingId.trim();
    }

    public String getUpperUserLevelId() {
        return upperUserLevelId;
    }

    public void setUpperUserLevelId(String upperUserLevelId) {
        this.upperUserLevelId = upperUserLevelId == null ? null : upperUserLevelId.trim();
    }

    public String getLowerUserLevelId() {
        return lowerUserLevelId;
    }

    public void setLowerUserLevelId(String lowerUserLevelId) {
        this.lowerUserLevelId = lowerUserLevelId == null ? null : lowerUserLevelId.trim();
    }

    public String getInputId() {
        return inputId;
    }

    public void setInputId(String inputId) {
        this.inputId = inputId == null ? null : inputId.trim();
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

    public String getActRewardType() {
        return actRewardType;
    }

    public void setActRewardType(String actRewardType) {
        this.actRewardType = actRewardType == null ? null : actRewardType.trim();
    }

    public Short getRewardLevel() {
        return rewardLevel;
    }

    public void setRewardLevel(Short rewardLevel) {
        this.rewardLevel = rewardLevel;
    }

    public String getRelateAction() {
        return relateAction;
    }

    public void setRelateAction(String relateAction) {
        this.relateAction = relateAction == null ? null : relateAction.trim();
    }

    public String getProductLimitLevel() {
        return productLimitLevel;
    }

    public void setProductLimitLevel(String productLimitLevel) {
        this.productLimitLevel = productLimitLevel == null ? null : productLimitLevel.trim();
    }

    public String getProductLimitList() {
        return productLimitList;
    }

    public void setProductLimitList(String productLimitList) {
        this.productLimitList = productLimitList == null ? null : productLimitList.trim();
    }

    public String getValueType() {
        return valueType;
    }

    public void setValueType(String valueType) {
        this.valueType = valueType == null ? null : valueType.trim();
    }

    public BigDecimal getStaticValue() {
        return staticValue;
    }

    public void setStaticValue(BigDecimal staticValue) {
        this.staticValue = staticValue;
    }

    public String getDynamicFormula() {
        return dynamicFormula;
    }

    public void setDynamicFormula(String dynamicFormula) {
        this.dynamicFormula = dynamicFormula == null ? null : dynamicFormula.trim();
    }

    public String getFormulaNote() {
        return formulaNote;
    }

    public void setFormulaNote(String formulaNote) {
        this.formulaNote = formulaNote == null ? null : formulaNote.trim();
    }

    public BigDecimal getWinningRate() {
        return winningRate;
    }

    public void setWinningRate(BigDecimal winningRate) {
        this.winningRate = winningRate;
    }

    public Integer getUpperLimitQuantity() {
        return upperLimitQuantity;
    }

    public void setUpperLimitQuantity(Integer upperLimitQuantity) {
        this.upperLimitQuantity = upperLimitQuantity;
    }

    public Integer getSingleUpperLimit() {
        return singleUpperLimit;
    }

    public void setSingleUpperLimit(Integer singleUpperLimit) {
        this.singleUpperLimit = singleUpperLimit;
    }
}