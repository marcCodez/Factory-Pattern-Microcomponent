// ES6 Classes version

class MemberFactory {
    createMember(name, type) {
    // init member variable
    let member;
    // Check the types that are passed in, and by that type crate a new certain type of object
        if(type === 'simple'){
          member = new SimpleMembership(name);  
        } else if (type === 'standard') {
            member = new StandardMembership(name);
        } else if (type === 'super'){
            member = new SuperMembership(name);
        }

        // set type of membership in the member object
        // member.type = type;

        member.define = function() {
            console.log(`${this.name} (${this.type}): ${this.cost}`);
        }

        return member;
    }

}

// Create constructors for the membership subclasses
// assigned type inside of the membership instead
class SimpleMembership{
    constructor(name) {
    this.name = name;
    this.type = 'simple';
    this.cost = '$5';
}
}

class StandardMembership {
    constructor(name) {
    this.name = name;
    this.type = 'standard';
    this.cost = '$15';
}
}

class SuperMembership {
    constructor (name){
    this.name = name;
    this.type = 'super';
    this.cost = '$25';
    }
}

const members = [];
// define our factory
const factory = new MemberFactory();

members.push(factory.createMember('John Cena', 'simple'));
members.push(factory.createMember('Batista', 'standard'));
members.push(factory.createMember('Edge', 'super'));
members.push(factory.createMember('Undertaker', 'super'));

// loop through the members, for each value call the define function we created
members.forEach(function(member){
    member.define();
});












// // Member factory ES5 constructors
// function MemberFactory() {
//     this.createMember = function(name, type) {
//     // init member variable
//     let member;
//     // Check the types that are passed in, and by that type crate a new certain type of object
//         if(type === 'simple'){
//           member = new SimpleMembership(name);  
//         } else if (type === 'standard') {
//             member = new StandardMembership(name);
//         } else if (type === 'super'){
//             member = new SuperMembership(name);
//         }

//         // set type of membership in the member object
//         member.type = type;

//         member.define = function() {
//             console.log(`${this.name} (${this.type}): ${this.cost}`);
//         }

//         return member;
//     }

// }

// // Create constructors for the membership subclasses
// const SimpleMembership = function(name) {
//     this.name = name;
//     this.cost = '$5';
// }

// const StandardMembership = function(name) {
//     this.name = name;
//     this.cost = '$15';
// }

// const SuperMembership = function(name) {
//     this.name = name;
//     this.cost = '$25';
// }

// const members = [];
// // define our factory
// const factory = new MemberFactory();

// members.push(factory.createMember('John Cena', 'simple'));
// members.push(factory.createMember('Batista', 'standard'));
// members.push(factory.createMember('Edge', 'super'));
// members.push(factory.createMember('Undertaker', 'super'));

 
// console.log(members);

// // loop through the members, for each value call the define function we created
// members.forEach(function(member){
//     member.define();
// });



