/**
 * TypeScript supports both string and number index signatures:
 */
console.log("1. String & Index Signatures");

/**
 * Example 1
 */
console.log("1.1 String Siganture ");

// This interface represents an object with string keys and string values
interface StringDictionary {
  [key: string]: string;
}

// Example 1
const names: StringDictionary = {
  firstName: "Alice",
  lastName: "Smith",
  "100": "One Hundred",
};

// Adding new properties dynamically
names["age"] = "30";

// Accessing properties
console.log(names["firstName"]); // "Alice"
console.log(names["lastName"]); // "Smith"
console.log(names["100"]); // "One Hundred"

// This would cause an error
//names["age"] = 30; // Error: Type 'number' is not assignable to type 'string'
let ageAttName = "age";
console.log(names[ageAttName]);

/**
 * Exmaple 2
 */
console.log("1.2 Numbered Siganture ");
// Object with number indexes
interface NumberDictionary {
  [index: number]: any;
}

// Object with
const scores: NumberDictionary = {
  0: "Zero",
  1: 100,
  2: true,
};

console.log(scores[0]); // "Zero"
console.log(scores[1]); // 100
console.log(scores[2]); // true

// Adding a new complex object
scores[3] = { passed: true };

console.log(scores[0]);
console.log(scores[1]);
console.log(scores[2]);
console.log(scores[3]);

/**
 * Combined Index Signatures
 */
/**
 * Example 3
 */
console.log("2. Kombined Index Signatures");
interface UserInfo {
  name: string; // Required property with specific name
  age: number; // Required property with specific name
  [key: string]: string | number; // All other properties must be string or number
}

const user: UserInfo = {
  name: "Alice", // Required
  age: 30, // Required
  address: "123 Main St", // Optional
  zipCode: 12345, // Optional
};

// This would cause an error
// const invalidUser: UserInfo = {
//  name: "Bob",
//  age: "thirty", // Error: Type 'string' is not assignable to type 'number'
//  isAdmin: true  // Error: Type 'boolean' is not assignable to type 'string | number'
// };
let addressAttName = "address";

console.log(user.name);
console.log(user.age);
console.log(user.zipCode);
console.log(user.address);
console.log(user["address"]);
console.log(user[addressAttName]);
