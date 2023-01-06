class Animal {
    constructor(animalName, animalFood) {
        this.speed = 0;
        this.food = animalFood;
        this.name = animalName;
    }
}

class Rabbit extends Animal {
    constructor(name, food, speed) {
        super(name, "carrots");
    }

    hide() {
        alert("The dog is in yard" + this.name + " needs to stop eating " + this.food + " and go hide.");
    }

}

class Cow extends Animal {
    constructor(name, food, speed) {
        super(name, "grass");
    }

    moo() {
        alert();
    }

}

class Alligator extends Animal {
    constructor(name, food, speed) {
        super(name, "florida tourists");
    }

    eat() {
        alert();
    }


}

class Sloth extends Animal {
    constructor(name, food, speed) {
        super(name, "leaves");
    }

    sleep() {
        alert();
    }

}