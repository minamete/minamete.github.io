import {Effect, EffectDictionary} from './Effects'

class ValueAccumulator {
    static totalInstances = 0;
    constructor(cost, effectPerSecond) {
        //effectPerSecond is an array of functions of t, where t is the # of seconds.
        ValueAccumulator.accumulatorID++;
        this.effectPerSecond = effectPerSecond;
        this.cost = cost;
        ValueAccumulator.totalInstances++;
        this.accumulatorID = ValueAccumulator.totalInstances;
    }
}