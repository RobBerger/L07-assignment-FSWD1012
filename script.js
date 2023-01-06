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
        alert("The dog is in yard, " + this.name + " needs to stop eating " + this.food + " and go hide.");
    }

}

class Cow extends Animal {
    constructor(name, food, speed) {
        super(name, "grass");
    }

    moo() {
        alert(this.name + " is going to keep mooing until sombody brings him some " + this.food);
    }

}

class Alligator extends Animal {
    constructor(name, food, speed) {
        super(name, "florida tourists");
    }

    eat() {
        alert(this.name + " is getting hungry... the " + this.food + " that have overstayed there welcome need to be on the lookout!");
    }


}

class Sloth extends Animal {
    constructor(name, food, speed) {
        super(name, "leaves");
    }

    sleep() {
        alert("Slowly up the tree " + this.name + " climbes to munch on the " + this.food + " before taking a nap");
    }

}

let newRabbit = new Rabbit("Jimmy", "carrots", 5)
newRabbit.hide()

let newCow = new Cow("Chester", "grass", 3)
newCow.moo()

let newAlligator = new Alligator("Sheila", "florida tourists")
newAlligator.eat()

let newSloth = new Sloth("Scooter", "leaves")
newSloth.sleep()