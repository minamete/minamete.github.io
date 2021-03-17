class UserProfile {
    constructor(username = 'Anonymous value accumulator', achievements = [], currentValue = 0, totalValue = 0, valueAccumulators = [], bonuses = [], earliestTime = Date.now()) {
        this.username = username;
        this.achievements = achievements;
        this.currentValue = currentValue;
        this.totalValue = totalValue;
        this.valueAccumulators = valueAccumulators;
        this.bonuses = bonuses;
        this.earliestTime = earliestTime;
    }
}

UserProfile.prototype.getTimeBetweenMS = () => {
    return Date.now() - earliestTime;
}
