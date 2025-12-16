//❓Согласно мифам о сотворении мира авраамических религий, Адам и Ева были первыми людьми, которые появились на Земле.
//
// Вы должны выполнить работу Бога. Метод создания должен возвращать массив длиной 2, содержащий объекты (представляющие Адама и Еву). Первый объект в массиве должен быть экземпляром класса Man. Второй должен быть экземпляром класса Woman. Оба объекта должны быть подклассами Human. Ваша задача — реализовать эти Human, Man and Womanклассы.

//✅ SOLUTION:
class Human {
    constructor(name) {
        this.name = name;
    }
}

class Man extends Human {
    constructor(name) {
        super(name);
        this.gender = 'male';
    }
}

class Woman extends Human {
    constructor(name) {
        super(name);
        this.gender = 'female';
    }
}

class God {
    static create() {
        const adam = new Man("Adam");
        const eve = new Woman("Eve");
        return [adam, eve];
    }

}

const humans = God.create();

console.log(humans);
// code
