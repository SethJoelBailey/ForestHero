class EnemyAI
{
    constructor(enemy)
    {
        this.enemy = enemy;
        this.moving = false;
        this.enemyMove = new EnemyMove(enemy);
    }
    
    generateRand(upperLimit)
    {
        console.log("rand");
        return Math.floor(Math.random() * upperLimit) + 1;
    }

    chooseDirection()
    {
        var direction = this.generateRand(1);
        console.log(direction);
        switch(direction)
        {
            case 1: this.walk(4000, "right");
            break;
            case 2: this.walk(4000, "left");
            break;
            case 3: this.walk(4000, "up");
            break;
        }
    }

    walk(time, direction)
    {
        this.moving = true;
        switch(direction)
        {
            case "right": 
            console.log("walk right");
            setTimeout(this.enemyMove.moveRight, time);
            break;
            case "left": 
            console.log("walk left");
            setTimeout(this.enemyMove.moveLeft, time);
            break;
            case "up": 
            console.log("jump");
            setTimeout(this.enemyMove.jump, time);
            break;
        }
        
    }

}