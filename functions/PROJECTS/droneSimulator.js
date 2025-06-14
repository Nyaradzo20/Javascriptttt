class Village{
    constructor(name, x,y){
        this.name =name;
        this.x = x;
        this.y = y;
    }
}


class City extends Village{
    constructor(name,x,y) {
        super(name, x,y);

    }
}

class Medicine{
    constructor(name, amount)
    {
        this.name = name;
        this.amount = amount;
    }
}

class Drone{
    constructor(name, speed, x, y,batteryLife){
        this.name = name;
        this.speed = speed;
    }
}
