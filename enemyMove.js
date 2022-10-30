class EnemyMove{
    
    constructor()
    {
        this.enemyDirection = "right";
    }
    
    moveRight(){
        enemy.setVelocityX(300);

        enemy.anims.play('enemyWalkRight', true);
        enemy.setCircle(30, 2, 30);
        this.enemyDirection = "right"; 

    }

    moveLeft(){
        enemy.setVelocityX(-300);
        enemy.anims.play('enemyWalkLeft', true);
        enemy.setCircle(30, 75, 30);
        this.enemyDirection = "left"; 
    }

    jump(){
        enemy.setVelocityY(-600);
    }

    idle(){
        enemy.setVelocityX(0);
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
        enemy.setVelocityX(0);
        enemy.anims.play('enemyIdleR', true);  
        enemy.setCircle(30, 2, 30);
        
    }

    idleLeft(){
        enemy.setVelocityX(0); 
        enemy.anims.play('enemyIdleL', true); 
        enemy.setCircle(30, 75, 30);
    }

    dieRight(){
        enemy.setVelocityX(0);
        enemy.anims.play('enemyDieRight', true);  
        enemy.setCircle(30, 2, 30);
    }
}