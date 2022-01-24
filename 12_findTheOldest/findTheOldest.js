const findTheOldest = function(people) {
    return people.reduce((currOldest, person) => {
        if(age(person) > age(currOldest)){
            return person;
        }
        return currOldest;
    });
};

const age = function(person){
    date = new Date();
    let birth = person.yearOfBirth;
    let death = person.yearOfDeath
    if(death == undefined){
        death = date.getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
