const findTheOldest = function(people) {
    const thisYear = new Date().getFullYear()
    const oldest = people.sort(function(a, b) {
        if ("yearOfDeath" in a == false) {a.yearOfDeath = thisYear}
        if ("yearOfDeath" in b == false) {b.yearOfDeath = thisYear}
        const age1 = a.yearOfDeath - a.yearOfBirth;
        const age2= b.yearOfDeath - b.yearOfBirth;
        return age1 > age2 ? -1 : 1;
      });
      return people[0]
};

// Do not edit below this line
module.exports = findTheOldest;
