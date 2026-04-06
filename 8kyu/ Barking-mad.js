//❓Научите Снупи и Скуби-Ду лаять, используя предметные методы. В настоящее время лаять умеет только Снупи, а Скуби-Ду — нет.
//
// snoopy.bark(); // return "Woof"
// scoobydoo.bark(); // undefined
// Используйте прототипы методов, чтобы все собаки могли лаять.

// ✅ SOLUTION:
function Dog (breed) {
    this.breed = breed;
}

var snoopy = new Dog("Beagle");

snoopy.bark = function() {
    return "Woof";
};

var scoobydoo = new Dog("Great Dane");
scoobydoo.bark = function() {
    return "Woof";
}
