let menu = {
  courses: { appetizers: [], mains: [], desserts: [] },
  addDishToCourse: function (courseName, dishName, dishPrice) {
    const dish = { dishName, dishPrice };

    if (courseName === "appetizers") {
      menu.courses.appetizers.push(dish);
    } else if (courseName === "mains") {
      menu.courses.mains.push(dish);
    } else if (courseName === "desserts") {
      menu.courses.desserts.push(dish);
    } else {
      return null;
    }
    return { courseName: [dishName, dishPrice] };
  },
  getRandomDishFromCourse: function (courseName) {
    let dishes = [];
    if (courseName === "appetizers" && menu.courses.appetizers.length > 0) {
      dishes = menu.courses.appetizers;
      dishes.forEach((ap) => {
        dishes.push(menu.courses.appetizers[ap]);
      });
      let randomIndexA = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndexA];
    } else if (courseName === "mains" && menu.courses.mains.length > 0) {
      dishes = menu.courses.mains;
      dishes.forEach((ma) => {
        dishes.push(menu.courses.mains[ma]);
      });
      let randomIndexM = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndexM];
    } else if (courseName === "desserts" && menu.courses.desserts.length > 0) {
      dishes = menu.courses.desserts;
      dishes.forEach((de) => {
        dishes.push(menu.courses.desserts[de]);
      });
      let randomIndexD = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndexD];
    } else {
      return null;
    }
  },
  generateRandomMeal: function () {
    let appetizer = menu.getRandomDishFromCourse("appetizers");
    let main = menu.getRandomDishFromCourse("mains");
    let dessert = menu.getRandomDishFromCourse("desserts");

    let totalPrice = 0;
    if (appetizer && appetizer.dishPrice) {
      totalPrice += appetizer.dishPrice;
    }
    if (main && main.dishPrice) {
      totalPrice += main.dishPrice;
    }
    if (dessert && dessert.dishPrice) {
      totalPrice += dessert.dishPrice;
    }

    let mealDescription = `Your randomly selected dishes are - Appetizer: ${appetizer}, Main: ${main} and Dessert: ${dessert}. This meal would cost $ ${totalPrice} .`;

    return mealDescription;
  },
};

menu.addDishToCourse("appetizers", "puff-puff", 10);
menu.addDishToCourse("appetizers", "spring rolls", 5);
menu.addDishToCourse("appetizers", "suya", 15);

menu.addDishToCourse("mains", "Poundo", 190);
menu.addDishToCourse("mains", "Moi-moi", 50);
menu.addDishToCourse("mains", "Jollof rice", 60);

menu.addDishToCourse("desserts", "cake", 15);
menu.addDishToCourse("desserts", "ice-cream", 5);
menu.addDishToCourse("desserts", "maple cheesecake", 5);

console.log(menu);

var meal = menu.generateRandomMeal();
console.log(meal);

//console.log(menu.getRandomDishFromCourse("appetizers"));
