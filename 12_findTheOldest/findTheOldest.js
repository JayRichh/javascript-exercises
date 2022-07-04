const findTheOldest = function (people) {
    const thisYear = new Date().getFullYear();

    return people.reduce(   // reduce() is a higher order function that takes a function and an array as arguments and returns a single value (the result of the function applied to the array elements)
        (result, person) => {  // res is the accumulator, which is the result of the previous reduce() call
            const age = (person.yearOfDeath || thisYear) - person.yearOfBirth; // if person.yearOfDeath is undefined, use thisYear instead
            return age > result.age ? { person, age } : result; // if age is greater than res.age, return {person, age}
        },  // if age is less than res.age, return res
        { person: null, age: 0 }    // if age is not greater than res.age, return {person: null, age: 0}
    ).person; // return the person with the highest age
};

// Do not edit below this line
module.exports = findTheOldest;
