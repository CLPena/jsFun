/* eslint-disable */

const { kitties } = require('./datasets/kitties');
const { clubs } = require('./datasets/clubs');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { books } = require('./datasets/books');
const { weather } = require('./datasets/weather');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');






// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {

    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']
    const result = kitties.filter(kitty => kitty.color === 'orange').map(orangeKitty => orangeKitty.name);
    return result;

    // Annotation:
    // Get in array of objects with various properties (name, age, color). Need to return array with just names of orange kitties. Use filter prototype to get orange cats, then will map over filtered cats and get back their name property
  },

  sortByAge() {
    // Sort the kitties by their age

    const result = kitties.sort((a, b) => (b.age - a.age));
    return result;

    // Annotation:
    // Get in same array as above. Need to return array with kitties sorted by age. Use sort property but instead of just a and b as variables, access the age property within them.
  },

  growUp() {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    const result = kitties.map(kitty => {
      kitty.age += 2;
      return kitty;
    }).sort((a, b) => (b.age - a.age));
    return result;

    // Annotation:
    // Get in same array as above. Need to create a growUp() function that adds 2 to the age property of each kitty. Use map prototype to achieve this by accessing each kitty individually and adjusting their age property. It looks like the results appear with their ages sorted, so I chained on the same sort prototype as in sortByAge (I tried invoking that directly but couldn't get it to work. Will return to this to troubleshoot later.)
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    const result = {};

    clubs.forEach(club => {
      club.members.forEach(member => {
        if (result[member]) {
          result[member].push(club.club);
        } else {
          result[member] = [club.club];
        }
      });
    });
    return result;

    // Annotation:
    // Get an array of club objects with club and members properties. Need to return an object (with person as key and array of clubs as value). Start by going through clubs one at a time using forEach, then go through the individual members with another forEach. Set result as an empty object. If result has a key with the member's name, push the club name. Else create a key for that name and set its value to an array containing the club.
  }
};




// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    const result = [];
    mods.forEach(el => {
      let newMod = {};
      newMod.mod = el.mod;
      newMod.studentsPerInstructor = el.students / el.instructors;
      result.push(newMod);
    });

    return result;

    // Annotation:
    // Take in an array of mod objects with mod, students, and instructors as properties. Need to return an array of objects with mod and studentsPerInstructor keys. Set an empty array under result variable, then go through mods array and create a new object with mod and studentsPerInstructor keys (dividing mod.students by mod.instructors to find that value). Push that object into the new array.
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    const result = [];
    cakes.forEach(cake => {
      let newCake = {};
      newCake.flavor = cake.cakeFlavor;
      newCake.inStock = cake.inStock;
      result.push(newCake);
    });
    return result;

    // Annotation:
    // Get an array of cake objects with cakeFlavor, filling, frosting, toppings, and inStock properties. Create an empty array for the result. Go through cakes array and assign cakeFlavor and inStock values to flavor and inStock properties on a placeholder newCake object. Push that object to the result array.
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    const result = cakes.filter(cake => cake.inStock > 0);
    return result;

    // Annotation:
    // Get an array of cake objects with cakeFlavor, filling, frosting, toppings, and inStock properties. Use filter prototype to find only the cakes with an inStock property greater than 0.
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59
    let counter = 0;
    cakes.forEach(cake => {
      counter += cake.inStock;
    });
    const result = counter;
    return result;

    // Annotation:
    // Get an array of cake objects with cakeFlavor, filling, frosting, toppings, and inStock properties. Create a counter variable to keep track of sum. Use forEach to go through each cake in the array and add the value of the inStock property to the counter. Set result to counter.
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    const result = [];
    cakes.forEach(cake => {
      cake.toppings.forEach(topping => {
        if (!result.includes(topping)) {
          result.push(topping);
        }
      });
    });

    return result;

    // Annotation:
    // Get an array of cake objects with cakeFlavor, filling, frosting, toppings, and inStock properties. Create a placeholder array. Use a nested forEach to go through the cakes and then the toppings of each cake. Check the placeholder array for that topping using includes prototype, and push the topping to the array if it is not there already.
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }
    let groceryList = {};
    cakes.forEach(cake => {
      cake.toppings.forEach(topping => {
        if (groceryList[topping]) {
          groceryList[topping]++;
        } else {
          groceryList[topping] = 1;
        }
      });
    });

    const result = groceryList;
    return result;

    // Annotation:
    // Get an array of cake objects with cakeFlavor, filling, frosting, toppings, and inStock properties. Create a placeholder object. Use forEach to go through each cake and find the toppings property. Use another forEach and go through the toppings. Check if each topping is a key on the groceryList object. If it is, add one to the value of that key. If it isn't add the key with a value of one.
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    const result = classrooms.filter(classroom => classroom.program === 'FE');
    return result;

    // Annotation:
    // Get an array of objects with roomLetter, program, and capacity. Use filter prototype to create an array of only classrooms with a program property with the value of 'FE'.
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }
    let capacity = {};
    capacity.feCapacity = 0;
    capacity.beCapacity = 0;
    classrooms.forEach(classroom => {
      if (classroom.program === 'FE') {
        capacity.feCapacity += classroom.capacity;
      } else {
        capacity.beCapacity += classroom.capacity;
      }
    });
    const result = capacity;
    return result;

    // Annotation:
    // Get an array of objects with roomLetter, program, and capacity. Create a placeholder capacity object with feCapacity and beCapacity properties both set at 0 as default. Use forEach to go through the classrooms array. If the classroom's program property has the value of 'FE', add the value of its capacity property to the feCapacity property on the capacity object. Otherwise add the value to the beCapacity property.
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const result = classrooms.sort((a, b) => (a.capacity - b.capacity));
    return result;

    // Annotation:
    // Get in same array as above. Need to return array with classrooms sorted by capacity. Use sort property but instead of just a and b as variables, access the capacity property within them.
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence() {
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']


    const result = books.reduce((acc, book) => {
      if ((book.genre !== 'Horror') && (book.genre !== 'True Crime')) {
        acc.push(book.title);
      }
      return acc;
    },[]);
    return result;

    // Annotation:
    // Take in an array of book objects with title, author, genre, and published properties. Use reduce to go through books and add book titles that satisfy both conditions of an if statement to the accumulator.

  },
  getNewBooks() {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    const result = books.reduce((acc, book) => {
      if ((book.published > 1989) && (book.published < 2010)) {
        acc.push({title: book.title, year: book.published});
      }
      return acc;
    },[]);
    return result;

    // Annotation:
    // Take in an array of book objects with title, author, genre, and published properties. Use reduce to go through books and add book titles that satisfy both conditions of an if statement to the accumulator.
    // if book publication is greater than 1989 but smaller than 2010, push it to accumulator array
  }

};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

    const result = weather.reduce((acc, weather) => {
      acc.push((weather.temperature.high + weather.temperature.low) / 2);
      return acc;
    },[]);
    return result;

    // Annotation:
    // Get an array of weather objects with location, type, humidity, and temperature properties. Temperature property is an object with a high and low property. Need to go through weather array and access the high and low within the temperature property, add them together, and divide that by two to get the average. Use reduce to create a new array via the accumulator of those results.
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]

    const result = weather.reduce((acc, weather) => {
      if (weather.type === 'sunny' || weather.type === 'mostly sunny') {
        acc.push(`${weather.location} is ${weather.type}.`);
      }
      return acc;
    }, []);
    return result;

    // Annotation:
    // Get an array of weather objects with location, type, humidity, and temperature properties. Temperature property is an object with a high and low property. Need to use reduce with array accumulator to go through weather and if the type is sunny or mostly sunny, push an interpolated phrase to the accumulator using weather.location and weather.type properties.
  },

  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }

    const result = (weather.sort((a, b) => (b.humidity - a.humidity))).shift();
    return result;

    // Annotation:
    // Write your annotation here as a comment

  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}
    let parksToVisit = nationalParks.filter(park => park.visited === false);
    let parksVisited = nationalParks.filter(park => park.visited === true);
    let parksToVisitNames = parksToVisit.map(park => {
      return park.name;
    });
    let parksVisitedNames = parksVisited.map(park => {
      return park.name;
    });
    const result = {parksToVisit: parksToVisitNames, parksVisited: parksVisitedNames};
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]

    const result = nationalParks.map(park => {
      let parkName = park.name;
      let parkLocation = park.location;
      return ({[parkLocation]: parkName});
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]
    // let allActivities = [];
    // const result = nationalParks.forEach(el => {
    //   el.activities.forEach(activity => {
    //     if (!allActivities.includes(activity)) {
    //       allActivities.push(activity);
    //     }
    //   })
    //
    //   return allActivities;
    // });
    // return result;
    let activityList = [];
    nationalParks.forEach(park => {
      park.activities.forEach(activity => {
        if (!activityList.includes(activity)) {
          activityList.push(activity);
        }
      });
    });

    const result = activityList;
    return result;
    // Annotation:
    // Write your annotation here as a comment
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    const result = breweries.reduce((acc, brewery) => {
      acc += brewery.beers.length;
      return acc;
    }, 0);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]


    const result =     breweries.map(brewery => {
          return {name: brewery.name, beerCount: brewery.beers.length}
        });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }
    let allBeers = breweries.map(brewery => {
      return brewery.beers;
    });
    let topABV = allBeers.flat().sort((a, b) => (b.abv - a.abv));
    const result = topABV[0];
    return result;

    // Annotation:
    // need to go through all breweries and inside the brewery push the beers to a new array
    // then, sort the by abv highest to lowest and shift the highest abv beer
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    const result = instructors.map(instructor => {
      return {name: instructor.name, studentCount: (cohorts.find(cohort => cohort.module === instructor.module)).studentCount}
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    const result = {};
    cohorts.map(el => {
      let cohortName = "cohort" + el.cohort;
      let matchingInstructors = instructors.filter(instructor => instructor.module === el.module);
      let numInstructors = matchingInstructors.length;
      let studentRatio = el.studentCount / numInstructors;
      return result[cohortName] = studentRatio;
      // return result{cohortName: studentRatio};
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    return instructors.reduce((acc, instructor) => {
      let classes = [];
      instructor.teaches.forEach(subject => {
        cohorts.forEach(cohort => {
          if(cohort.curriculum.includes(subject) && !classes.includes(cohort.module)){classes.push(cohort.module)}
        })
      })
      acc[instructor.name] = classes.sort((a, b) => a - b);
      return acc;
    }, {})
    return result;

    // Annotation:
    // for each instructor, go through teaches array and find the module for the cohort.curriculum that includes that subject
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    const result =
    instructors.reduce((acc, instructor) => {
      instructor.teaches.forEach(topic => {
        if(!acc[topic]) {
          acc[topic] = [instructor.name]
        } else {
          acc[topic].push(instructor.name)
        }
      })
      return acc;
    }, {})
    return result;

    // Annotation:
    // go through instructors using reduce with an object acc, for each instructor, go through teaches array and if the topic doesn't exist as a key in the object, create a key with the teacher's name as first in the array. If the key exists, push teacher.name into that array.
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    const result = bosses.keys.reduce((acc, boss) => {
       boss.sidekicks.reduce((y, sidekick) => {
        let x = sidekicks.find(el => el.name === sidekick);
        console.log(x)
        return y;
      }, 0)
      return acc;
    }, []);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.

    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]


    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts
};
