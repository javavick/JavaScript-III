/* The four principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window Binding: When utilizing "this" on the global scope, "this" will refer to the window or console Object.
 * 2. Implicit Binding: If a function is called with a dot before it, the object on the left side of the dot is "this".
 * 3. New Binding: When using a constructor function, "this" will refer to the instance of the object that was created with the constructor function.
 * 4. Explicit Binding: "This" can be explicitly defined when utilizing the apply or call JavaScript methods.
 *
 * write out a code example of each explanation above
 */

// Principle 1
console.log(this);
// code example for Window Binding

// Principle 2
const gundam = {
  model: "RX-78-2",
  isMoving: function() {
    console.log(`The ${this.model}! It's moving!`);
  }
};

gundam.isMoving();
// code example for Implicit Binding

// Principle 3
function MobileSuit(name, pilot) {
  this.name = name;
  this.pilot = pilot;
  this.launch = function() {
    console.log(`${this.name}, ${this.pilot}, launching!`);
  };
}

let cherudim = new MobileSuit("Cherudim", "Lockon Stratos");
let gusion = new MobileSuit("Gusion Rebake", "Akihiro Altland");

cherudim.launch();
gusion.launch();
// code example for New Binding

// Principle 4
cherudim.launch.call(gusion);
gusion.launch.apply(cherudim);
// code example for Explicit Binding
