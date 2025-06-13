//creating nested objects
let contact = {
    // Contact for 'ojo'
    "ojo": {
        name: "joel",           // Name of the contact
        phone: 2230000,         // Phone number for 'ojo'
        email: "joel@gmail.com" // Email address for 'ojo'
    },
    // Contact for 'nyarie'
    "nyarie": {
        name: "Nyarie",             // Name of the contact
        phone: "555-1234",          // Phone number for 'nyarie'
        email: "nyarie@gmail.com"   // Email address for 'nyarie'
    },
    // Contact for 'Bree'
    "Bree": {
        name: "Brianna",            // Name of the contact
        phone: 93450-99,            // Phone number for 'Bree'
        email: "bree@gmail.com"     // Email address for 'Bree'
    }
};

//show object
console.log(contact);
console.log("");
//read bree's nume uing []
console.log(contact["Bree"].phone);
//use the dot notation too
console.log("")
console.log(contact.ojo.name)
// delete contact
delete contact.nyarie;
//object after deleting a contact
console.log("");
console.log(contact);
console.log("Adding more coontacts")
console.log()
let newContacts = {
  "alice": { name: "Alice Johnson", phone: "555-1234", email: "alice@example.com" },
  "bob": { name: "Bob Smith", phone: "555-5678", email: "bob@example.com" },
  "carol": { name: "Carol White", phone: "555-8765", email: "carol@example.com" },
  "dave": { name: "Dave Brown", phone: "555-4321", email: "dave@example.com" },
  "eve": { name: "Eve Black", phone: "555-6789", email: "eve@example.com" },
  "frank": { name: "Frank Green", phone: "555-9876", email: "frank@example.com" },
  "grace": { name: "Grace Blue", phone: "555-3456", email: "grace@example.com" }
};

//merge the 2 uing objet assign

Object.assign(contact,newContacts);

//printing new obj using loop

for(key in contact){
    console.log(contact[key]);
}
console.log()

//fiding ojo
console.log("finding Joel");
if ("ojo" in contact) {
    console.log(contact["ojo"]);
} else {
    console.log("doesn't exist");
}
console.log();
//show array of objects
console.log(" objects array")
console.log(Object.keys(contact))

console.log("Number of objects: "+
    Object.keys(contact).length)

console.log()
//change to string
let contactlist= JSON.stringify(contact);
console.log(contactlist);

//change back to object
let contacts = JSON.parse(contactlist);
console.log(contacts);

let contactArray = Object.values(contact);
console.log(contactArray);
//only keys 
let contactProperty = Object.getOwnPropertyNames(contact.bob);
console.log(contactProperty)