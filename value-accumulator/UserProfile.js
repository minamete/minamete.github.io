import {Effect, EffectDictionary} from './Effects'
import { EffectTree } from './EffectTree'

class UserProfile {
    constructor(username = 'Anonymous value accumulator', achievements = [], currentValue = 0, totalValue = 0, valueAccumulators = new EffectTree(new Effect(null, null, 1, 0, addMultiple)), bonuses = [], changePerSecond = 1, earliestTime = Date.now()) {
        this.username = username;
        this.achievements = achievements;
        this.currentValue = currentValue;
        this.totalValue = totalValue;
        this.valueAccumulators = valueAccumulators; //list of effects
        this.bonuses = bonuses;
        this.earliestTime = earliestTime;
        this.changePerSecond = changePerSecond;
        this.calculateChangePerSecond();
    }
}

UserProfile.prototype.getTimeBetweenMS = () => {
    return Date.now() - earliestTime;
}

//inserts a random effect
UserProfile.prototype.roll = () => {

}

//calculates to see if the user has enough value to take the hit in cost
//inserts an addone or subtractone effect into the tree, with effectID as its child (a) and null (1) as its b child.
UserProfile.prototype.modifyEffect = (effectID, addition = true) => {
    //cannot modify onto "addOne" or "subtractOne"

    //checks if user has enough value by finding the key of the effectID
    let [isAddingToExistingModifier, cost] = this.valueAccumulators.dfs(undefined, (element) => {
        //purpose: find the effectID child 
        if(element.effectID == effectID) {
            //check for cost
            if(element.effectKey == 'addOne' || element.effectKey == 'subtractOne') {
                return [true, element.a.getEffectFromKey().cost * element.getEffectFromKey().cost/100];
            }   
            return [false, element.getEffectFromKey().cost];
        }
    }).clean();
    //Concerns: this traverses the entire tree, may not be efficient

    if (cost/100*this.changePerSecond > this.currentValue) return;
    this.currentValue -= cost;

    if (isAddingToExistingModifier) {
        this.valueAccumulators.dfs(undefined, (element) => {
            if(element.effectID == effectID) {
                ++element.bNum; //Concerns: will element be changed if it's in a callback like this?
            }
        })
    } else {
        this.valueAccumulators.insert(addition ? 'addOne' : 'subtractOne', effectID);
    }
    calculateChangePerSecond();
}

UserProfile.prototype.calculateChangePerSecond = () => {
    let a = 1; //initial change per second
    return this.valueAccumulators.dfs(undefined, (element) => {
        
    })
}

UserProfile.prototype.updatePerSecond = () => {
    this.currentValue += changePerSecond;
    this.totalValue += changePerSecond;
    if(this.currentValue <= 0) return -1;
}