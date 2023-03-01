class Vehicle {
    constructor (make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        return "Beep.";
    }
    toString(){
        return `The vehicle is a ${make} ${model} from ${year}`;
    }
};

class Car extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 4;
    }
};

class Motorcycle extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine(){
        return "VROOM!!!";
    }
};

class Garage {
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity;

    }
    add(newAuto){
        if (newAuto === Vehicle){
            this.vehicles.push(newAuto);
        }
        if (this.vehicles.length >= this.capacity){
            return "Sorry, we're full.";
        }
        else {
            return "Only vehicles are allowed in here!";
        }
    }
}
