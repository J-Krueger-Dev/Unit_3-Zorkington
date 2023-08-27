/* 
    TODO for students
        General Setup:
            - This object is framed for you to fill out the values to help customize your game.
            - This will alter the browser to display your game title. The "Quick Notes" modal will also detail your information along with the description (desc) of what your game is about. It is important to highlight key commands that you want the player to use.
            - The startingRoomDescription will display what the player sees upon coming to your project.

        Do NOT alter the name of this object.

        Both exports are required in order for this project to run.

        - index.html should be running in your browser through the build process.
            - use your browsers console throughout testing.
*/

export const gameDetails = {   
    title: 'A Day at the Park',
    desc: 'Welcome to the world of... here are some quick rules & concepts...',
    author: 'Joshua Krueger',
    cohort: 'PTSB-2023',
    startingRoomDescription: 'What you see before you is an open field in a beatiful local park, birds chirping, children playing, and an itch to play tennis.',
    playerCommands: [
        // replace these with your games commands as needed
        'inspect', 'view', 'look', 'pickup','move','drop'
    ]
    // Commands are basic things that a player can do throughout the game besides possibly moving to another room. This line will populate on the footer of your game for players to reference. 
    // This shouldn't be more than 6-8 different commands.
}

// Your code here


// * creating Item class to contain all of my Item objects with three parameters
class Item {
    constructor({name,desc,location,boolean}){ // * maybe add true or false for pickup ability?
    this.name = name;
    this.desc = desc;
    this.location = location;
    this.boolean = boolean;
}
inspect(){
    return this.desc;
}
// never got these methods to run the way i was imagining it to
pickup(){
    if(this.boolean === true){
        return `${this.name} has been added to inventory`;
    }else{
        return `${this.name} cannot be moved`;
    }
} 
}

class Room{
    constructor({location,exits,desc,items}){
    this.location = location;
    this.exits = exits;
    this.desc = desc;
    this.items= items;
    }
    // having trouble implementing any method i create but this was meant to work in player input area
    view(){
        return this.location + this.desc
    }
    //! add methods here later
}

const room1 = new Room({
    location: 'open field',
    exits: ['room2','room4'],
    desc: `you are in an open field with `, // add items?
    items:['item1','item2','item3']
});
console.log(room1)
const room2 = new Room({
    location:'play ground',
    exits: ['room1','room3','room4'],
    desc: `you're run of the mill playgound, lots of kids today looks like there are a few things here,`,
    items: ['item4','item5','item6']

});

const room3 = new Room({
    location:'tennis court',
    exits: ['room2','room4'],
    desc: `nice looking tennis court with `,
    items: ['item7','item8','item9']

});
const room4 = new Room({
    location:'Fountain',
    exits: ['room1','room2','room3'],
    desc: `A big fountain with `,
    items: ['item10','item11','item12']

});

const item1 = new Item({
    name:`lowers`,
    desc:`wow what a pleasent bunch of flowers`,
    location: room1,
    boolean: true
});

const item2 = new Item({
    name:`tennis ball`,
    desc: `this ball has mud stains, but it'll do`,
    location:room1,
    boolean: true
});

const item3 = new Item({
    name:`statue`,
    desc:`Giant brass statue of Pizza`,
    location:room1,
    boolean: false
});

const item4 = new Item({
    name:`swing set`,
    desc:`old rusty swing set`,
    location: room2,
    boolean: false
})

const item5 = new Item({
    name:`bird`,
    desc:`Chirp Chirp`,
    location:room2,
    boolean: false
})

const item6 = new Item({
   name: `kite`,
    desc:`red kite, doesnt look like it can fly`,
   location: room2,
   boolean: true
})

const item7 = new Item({
    name: 'light pole',
    desc: `LED SO BRIGHT`,
    location: room3,
    boolean: false
})

const item8 = new Item({
    name: `score sheet`,
    desc: `I need something to keep track of score`,
    location: room3,
    boolean: true
})

const item9 = new Item({
    name: `empty court`,
    desc: `court looks to be in good shape`,
    location: room3,
    boolean: false
})
const item10 = new Item({
    name: `park bench`,
    desc: `peaceful bench by the water feature`,
    location: room4,
    boolean: false
})
const item11 = new Item({
    name: `racket`,
    desc: `wonder how this ended up here, might need it to play`,
    location: room4,
    boolean: true
})
const item12 = new Item({
    name: `marker`,
    desc: `I could keep track of score with this`,
    location: room4,
    boolean: true
})
// dictionary of rooms to allow for strings from player input to be intrepreted from variables created from the rooms
let roomDict = {
    'room1': room1,
    'room2': room2,
    'room3': room3,
    'room4': room4
}
// dictionary of items same as room Dict above for purposes of taking a string and relating it to a value
let itemDict={
    'item1': item1,
    'item2': item2,
    'item3' : item3,
    'item4': item4, 
    'item5': item5, 
    'item6': item6,
    'item7': item7,
    'item8': item8,
    'item9': item9,
    'item10': item10, 
    'item11': item11, 
    'item12': item12,  
}
//let action
//let target 
//will ad an item to inventory later in the code
let playerInventory = [];
//defines our first room and that we are in it
let currentRoom = room1;

//let displayText = '';
   /*const playerInput2= playerInput.toLowerCase()
    console.log(playerInput2)
   [action,target] = playerInput2.split(' ')
    console.log(target) */
export const domDisplay = (playerInput) => {
   //let currentRoom = room1
    let [action,target] = playerInput.split(' ');
   console.log(target);
   console.log(action);
   // action allowing players to move from room to room if the exit is available in that room and denying if they cannot
   if(action === 'move'){
    if(target){
        console.log(currentRoom)
      if(currentRoom.exits.includes(target)){
        currentRoom= roomDict[target];
        return`you have walked to the ${currentRoom.location}`;
      }else{
        return 'you cannot go that way';
      }
    }
   }
    // this is allowing my player to pickup and item once promted... this cant figure out how to make an item unable to be picked up
   if(action == 'pickup'){
    if(target);
     console.log(target)    ; 
      if(currentRoom.items.includes(target) && true){ 
        playerInventory.push(target);
        console.log(playerInventory);
        return `you have picked up ${target}`;
      }else{
        return `you cannot pick up ${target}`;
      }
   }
   console.log(playerInventory)
   /// this is allowing my player to drop an item into a room once they have picked it up
   if (action === 'drop') {
    if (target) {
        if (playerInventory.includes(target)) {
            playerInventory = playerInventory.filter(item => item !== target);
            currentRoom.items.push(target);
            return `You dropped ${target} in the ${currentRoom.location}.`;
        } else {
            return `${target} is not your inventory.`
    }
  } 
}
console.log(playerInventory)
// look if statement give the current room description with items in the room
if(action === 'look')
    if(target)
        if(currentRoom){
        return currentRoom.desc + currentRoom.items
        }
    /* 
        TODO: for students
        - This function must return a string. 
        - This will be the information that is displayed within the browsers game interface above the users input field.

        - This function name cannot be altered. 
        - "playerInput" is whatever text the user is typing within the input field in the browser after hitting the ENTER key.
            - test this out with a console log.

        What your player should be able to do (checklist):
            - move between rooms
            - view current room
            - pickup moveable items
                - there should be at least 2 items that cannot be moved.
            - view player inventory
        
        Stretch Goals:
            - drop items in "current room" (if a player picks up an item in one room and moves to another, they should be able to remove it from their inventory)
            - create win/lose conditions.
                - this could be a puzzle that may require an item to be within the players inventory to move forward, etc.

        HINTS:
            - consider the various methods that are available to use.
            - arrays are a great way to hold "lists".
            - You are not limited to just the exported function. Build additional functions and don't forget to hold the return within a variable.
            - Review notes!
                - Have them open as you build.
                - break down each problem into small chunks
                    - What is the process of picking up an item exactly? ex: Look. Pick from a list of items. Put into players list of items... 
    */

    // Your code here
    // this was created to give an error if the player imput does not match a command
    if(playerInput != gameDetails.playerCommands[playerInput])
    return "please try a different command"

}