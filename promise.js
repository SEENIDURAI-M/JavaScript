function prepareIceCream(flavor) {
    console.log(`Preparing ${flavor} ice cream...`);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (flavor === "chocolate") {
          reject("We don't have chocolate ice cream today!");
        } else {
          console.log(`${flavor} ice cream is ready!`);
          resolve();
        }
      }, 2000);
    });
  }
  
  function addToppings(toppings) {
    console.log(`Adding ${toppings.join(", ")}...`);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Toppings added: ${toppings.join(", ")}`);
        resolve();
      }, 1000);
    });
  }
  
  function serveIceCream() {
    console.log("Ice cream served!");
  }
  
  prepareIceCream("vanilla")
    .then(() => {
      return addToppings(["chocolate chips", "sprinkles"]);
    })
    .then(() => {
      serveIceCream();
    })
    .catch((error) => {
      console.error(error);
    });
  