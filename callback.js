function greeting(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
  } 
  function farewell() {
    console.log("Goodbye!");
  }
  greeting("Alice", farewell);

  //callbackhell
function prepareIceCream(flavor, callback) {
    console.log(`Preparing ${flavor} ice cream...`);
    setTimeout(() => {
      console.log(`${flavor} ice cream is ready!`);
      callback();
    }, 2000);
  }
  
  function addToppings(toppings, callback) {
    console.log(`Adding ${toppings.join(", ")}...`);
    setTimeout(() => {
      console.log(`Toppings added: ${toppings.join(", ")}`);
      callback();
    }, 1000);
  }
  
  function serveIceCream() {
    console.log("Ice cream served!");
  }
  
  prepareIceCream("vanilla", () => {
    addToppings(["chocolate chips", "sprinkles"], () => {
      serveIceCream();
    });
  });
  