/*
* @author: HamidReza Ghavami
* @description: This is a simple ToDoListApp program in JavaScript.
* @version: 1.0
* @date: 2025-03-30
*/
import readline from 'readline-sync';
"use strict";

export class ToDoListApp { 

    constructor () {
        this.taskList = [];
    }
    
    addTask () {
        console.log("\nPlease write the first task: ");
        let task1 = readline.question();
        this.taskList.push(task1);
        console.log("\nDo you want to add another task? YES/NO");
        let answer = readline.question().toLowerCase();
        while (answer === "yes") {
            console.log("\nPlease write the next task: ");
            let task = readline.question();
            this.taskList.push(task);
            console.log("\nDo you want to add another task? YES/NO");
            answer = readline.question().toLowerCase();
        }
        console.log('\nThanks for adding tasks!');
    }
    
    displayTask () { 
        console.log("\nTasks List: ");
        this.taskList.forEach((task1, index) => console.log(`${index + 1}. ${task1}`));
    }
    
    removeTask () { 
        console.log("\nPlease write the index of the task that you want to remove: ");
        let index = parseInt(readline.question()) - 1;
    
        if ( index >= 0 && index < this.taskList.length ) {
            console.log(`\nThis task is removed: ${this.taskList[index]}`);
            this.taskList.splice(index, 1);
        } else { 
            console.log("\nThis task is not found in the list.");
        }
    }
}
// end of the Class function