class EnemyAI
{
    constructor(enemy)
    {
        this.enemy = enemy;
        this.moving = false;
        this.enemyMove = new EnemyMove(enemy);
        setInterval(this.chooseDirection,4000,this);
    }
    
    generateRand(upperLimit)
    {
        console.log("rand");
        return Math.floor(Math.random() * upperLimit) + 1;
    }

    chooseDirection(_this)
    {
        var direction = _this.generateRand(3);
        console.log(direction);
        switch(direction)
        {
            case 1: _this.enemyMove.moveRight();
            break;
            case 2: _this.enemyMove.moveLeft();
            break;
            case 3: _this.enemyMove.jump();
            break;
        }
    }

}