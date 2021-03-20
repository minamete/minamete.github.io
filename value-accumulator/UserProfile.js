import { Effect, EffectDictionary } from './Effects'
import { EffectTree } from './EffectTree'

export class UserProfile {
    constructor(username = 'Anonymous value accumulator', achievements = [], currentValue = 0, totalValue = 0, valueAccumulators = new EffectTree(new Effect(null, null, 1, 0, 'addMultiple')), bonuses = [], changePerSecond = 1, earliestTime = Date.now()) {
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

    getTimeBetweenMS = () => {
        return Date.now() - earliestTime;
    }

    //inserts a random effect
    roll = () => {

    }

    //calculates to see if the user has enough value to take the hit in cost
    //inserts an addone or subtractone effect into the tree, with effectID as its child (a) and null (1) as its b child.
    modifyEffect = (effectID, addition = true) => {
        //cannot modify onto "addOne" or "subtractOne"
    
        //checks if user has enough value by finding the key of the effectID
        let [isAddingToExistingModifier, cost] = this.valueAccumulators.dfs(undefined, (element) => {
            //purpose: find the effectID child 
            if (element.effectID == effectID) {
                //check for cost
                if (element.effectKey == 'addOne' || element.effectKey == 'subtractOne') {
                    return [true, element.a.getEffectFromKey().cost * element.getEffectFromKey().cost / 100];
                }
                return [false, element.getEffectFromKey().cost];
            }
        }).clean();
        //Concerns: this traverses the entire tree, may not be efficient
    
        if (cost / 100 * this.changePerSecond > this.currentValue) return;
        this.currentValue -= cost;
    
        if (isAddingToExistingModifier) {
            this.valueAccumulators.dfs(undefined, (element) => {
                if (element.effectID == effectID) {
                    ++element.bNum; //Concerns: will element be changed if it's in a callback like this?
                }
            })
        } else {
            this.valueAccumulators.insert(addition ? 'addOne' : 'subtractOne', effectID);
        }
        this.calculateChangePerSecond();
        return this;
    }

    calculateChangePerSecond = () => {
        this.changePerSecond = this.valueAccumulators.performCalculation();
    }

    updatePerSecond = () => {
        this.currentValue += this.changePerSecond;
        this.totalValue += this.changePerSecond;
        if (this.currentValue < 0) {console.log('you lose!');return -1;}
        return this;
    }

    static updatePerSecond = (exampleUser) => {
        let user = this.getUserProfileFromObject(exampleUser);
        user.currentValue += user.changePerSecond;
        user.totalValue += user.changePerSecond;
        if (user.currentValue < 0) {console.log('you lose!');return -1;}
        return user;
    }

    static getUserProfileFromObject(cachedProfile) {
        return new UserProfile(cachedProfile.username, cachedProfile.achievements, cachedProfile.currentValue, cachedProfile.totalValue, new EffectTree(Effect.fromObj(cachedProfile.valueAccumulators.root)), cachedProfile.bonuses, cachedProfile.changePerSecond, cachedProfile.earliestTime);
    }

    removeProfile() {
        this.updatePerSecond = () => {
            return null;
        }
    }
}
