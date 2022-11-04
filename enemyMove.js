class EnemyMove{
    constructor(inEnemy)
    {
        this.enemyDirection = "right";
        this.enemyIsStriking = false;
        this.enemy = inEnemy;
    }
    
    moveRight(){
        this.enemy.setVelocityX(300);
        console.log("move right");
        this.enemy.anims.play('enemyWalkRight', true);
        this.enemy.setCircle(30, 2, 30);
        this.enemyDirection = "right"; 
    }

    moveLeft(){
        this.enemy.setVelocityX(-300);
        this.enemy.anims.play('enemyWalkLeft', true);
        this.enemy.setCircle(30, 75, 30);
        this.enemyDirection = "left"; 
    }

    jump(){
        this.enemy.setVelocityY(-600);
    }

    idle(){
        this.enemy.setVelocityX(0);
        if (this.enemyDirection === "right")
        {
            this.idleRight();
        }
        else if (this.enemyDirection === "left")
        {
            this.idleLeft();
        }
    }

    idleRight(){
        this.enemy.setVelocityX(0);
        this.enemy.anims.play('enemyIdleR', true);  
        this.enemy.setCircle(30, 2, 30);
        
    }

    idleLeft(){
        this.enemy.setVelocityX(0); 
        this.enemy.anims.play('enemyIdleL', true); 
        this.enemy.setCircle(30, 75, 30);
    }

    dieRight(){
        this.enemy.setVelocityX(0);
        this.enemy.anims.play('enemyDieRight', true);  
        this.enemy.setCircle(30, 2, 30);
    }

    strikeRight(){
        this.enemy.setVelocityX(0);
        this.enemy.anims.play('enemyStrikeRight', true);  
        this.enemy.setCircle(30, 2, 30);
        this.enemyIsStriking = true;
    }

    strikeLeft(){
        this.enemy.setVelocityX(0);
        this.enemy.anims.play('enemyStrikeLeft', true);  
        this.enemy.setCircle(30, 75, 30);
        this.enemyIsStriking = true;
    }
}