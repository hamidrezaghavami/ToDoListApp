import readline from 'readline-sync';
import { ToDoListApp } from './ToDoListApp.js';

function main () {
    const app = new ToDoListApp();

    console.log("\nWelcome to ToDoListApp");
    let option;
    do {
        console.log("\n1. Add Task");
        console.log("2. Display Task");
        console.log("3. Remove Task");
        console.log("4. Exit");
        console.log("Please select an option: ");
        option = readline.question();

        switch ( option ) { 
            case "1": 
                app.addTask();
                break;

            case "2": 
                app.displayTask();
                break;

            case "3": 
                app.removeTask();
                break;

            case "4":
                console.log("\nThanks for using ToDoListApp!");
                break;
            default:
                console.log("\nInvalid option. Please try again.");
        }
    } while ( option !== "4" );
}

main();
export { ToDoListApp };
// End of the program
// This is a simple ToDoListApp program in JavaScript.