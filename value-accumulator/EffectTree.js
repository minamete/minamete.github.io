import {Effect} from './Effects.js';

export class EffectTree {
    constructor(root = null) {
        this.root = root;
    }

    insert(effectValue, childId) {
        //the childId cannot be null
        let newEffect = new Effect(null, null, 1, 1, effectValue);
        if(this.root === null) {
            this.root = newEffect; //creates the root of the tree
            return this;
        }
        //finds the correct pos in tree and inserts node
        this.insertNode(this.root, newEffect, childId);
    } 

    insertNode(node, newNode, childId) {
        //information given: the node that is modified, i.e. the child of the inserted node (a value)
        //the data values of the node (its b value)
        //traverse the node tree, find the correct node given its effect id (given in childId)
        if(node.a.effectID == childId || node.b.effectID == childId) {
            //finds the node with the child node as its a or b-value
            if(node.a.effectID == childId) {
                let temp = node.a;
                node.a = newNode;
                newNode.a = temp;
                newNode.aNum = null;
            } else {
                let temp = node.b;
                node.b = newNode;
                newNode.a = temp;
                newNode.aNum = null;
            }
        } else{
            //traverse down the tree
            this.insertNode(node.a, newNode, childId); //left
            this.insertNode(node.b, newNode, childId); //right
        }
    }

    dfs(node = this.root, callback, returnValue = []) {
        if(node !== null) {
            this.dfs(node.left, callback, returnValue);
            //visit the root
            let obj = callback(node);
            //if the callback returned anything, add it to the list of things returned
            returnValue.push(obj);
            this.dfs(node.right, callback, returnValue);
        }
        return returnValue;
    }

    
}