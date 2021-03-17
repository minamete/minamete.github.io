export class Effect {
    constructor(a = null, b = null, previousEffects = null, effectKey) {
        this.a = a;
        this.b = b;
        this.previousEffects = previousEffects;
        this.effectKey = effectKey;
    }
}

Effect.prototype.getEffectFromKey = () => {
    return EffectDictionary[effectKey];
}

export const EffectDictionary = {
    //basic arithmetic, aka the controls the user can change
    'addOne' : (a) => ++a,
    'subtractOne' : (a) => --a,
    'addMultiple' : (a, b = 0) => a + b,
    'subtractMultiple' : (a, b = 0) => a - b,

    //slightly more complex
    'multiply': (a, b = 1) => a * b,
    'divide': (a, b = 1) => a / b,
    'root': (a, b = 1) => Math.pow(a, 1/b),
    'pow': (a, b = 1) => Math.pow(a,b),
    'log': (a, b = 10) => Math.log(a)/Math.log(b),
    
    //trig
    'sin': (a) => Math.sin(a),
    'cos': (a) => Math.cos(a),
    'tan': (a) => Math.tan(a),
    'csc': (a) => 1/Math.sin(a),
    'sec': (a) => 1/Math.cos(a),
    'cot': (a) => 1/Math.tan(a),
    'arcsin': (a) => 1/Math.asin(a),
    'arccos': (a) => 1/Math.acos(a),
    'arctan': (a) => 1/Math.atan(a),

    //evil bois
    'derivative': derivative,
    'reciprocal': reciprocal,
    'hexadecimal': hexadecimal
}

const hexadecimal = (previousEffects) => {
    for (effect of previousEffects) {
        effect.a = !effect.a ? null : parseInt(effect.a.toString(16).replace(/[^0-9.]/, ''));
        effect.b = !effect.b ? null : parseInt(effect.b.toString(16).replace(/[^0-9.]/, ''));
    }
}

const derivative = (effects) => { //just to be clear, this thing makes the entire equation get derivative'd

}

const reciprocal = (effects) => {

}