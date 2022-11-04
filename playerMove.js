class PlayerMove{
    
    constructor()
    {
        this.direction = "right";
        this.isPlayerDead = false;
    }

    moveRight(){
        player.setVelocityX(300);

        player.anims.play('right', true);
        this.direction = "right"; 
        player.setCircle(16, 10, 12);
    }

    moveLeft(){
        player.setVelocityX(-300);

        player.anims.play('left', true);
        this.direction = "left";
        player.setCircle(16, 25, 12);
    }

    jump(){
        player.setVelocityY(-600);
    }

    idle(){
        player.setVelocityX(0);
        if (this.direction === "right")
        {
            this.idleRight();
        }
        else if (this.direction === "left")
        {
            this.idleLeft();
        }
    }

    idleRight(){
        player.anims.play('idleR', true);  
    }

    idleLeft(){
        player.anims.play('idleL', true);  
    }

    strike(){
        player.setVelocityX(0);

        if (this.direction === "right")
        {
            this.strikeRight();
        }
        else if (this.direction === "left")
        {
            this.strikeLeft();
        }
    }

    strikeRight()
    {
        player.anims.play('strikeR', true);
    }

    strikeLeft(){
        player.anims.play('strikeL', true);   
    }

    die()
    {
        player.setVelocityX(0);
        player.anims.play('die', true)
        this.isPlayerDead = true;
    }
}