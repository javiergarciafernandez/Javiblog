class bola {
    constructor(x, y) {
        this.x = x; // Coordenada X de la bola
        this.y = y; // Coordenada Y de la bola
        this.radio = 10; // Radio de la bola
        this.dirX = Math.random() * 2 - 1; // Dirección aleatoria en el eje X (-1 a 1)
        this.dirY = Math.random() * 2 - 1; // Dirección aleatoria en el eje Y (-1 a 1)
        this.velocidad = 5;
    }

    dibujar(ctx) {
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radio, 0, Math.PI * 2);
        ctx.fill();  
        ctx.closePath();
    }

    mover() {
        
        this.x += this.dirX * this.velocidad;
        this.y += this.dirY * this.velocidad;

       
        if (this.x + this.radio > canvas.width || this.x - this.radio < 0) {
            this.dirX *= -1; // 
        }
        if (this.y + this.radio > canvas.height || this.y - this.radio < 0) {
            this.dirY *= -1; 
        }
    }
}


