
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // Contexto para dibujar en 2D


canvas.width = innerWidth;
canvas.height = innerHeight;


let bolas = [];

for (let i = 0; i < 20; i++) {
    bolas.push(new bola(canvas.width / 2, canvas.height / 2));  // Todas las bolas empiezan en el centro
}


function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiamos el canvas en cada fotograma


    bolas.forEach(bola => {
        bolas.forEach(bola2 => {
            // Calculamos la distancia entre la bola actual y la otra bola
            let dx = bola2.x - bola.x; // Distancia horizontal
            let dy = bola2.y - bola.y; // Distancia vertical
            let dist = Math.sqrt(dx ** 2 + dy ** 2); // Distancia total entre las dos bolas

            // Si la distancia es menor que 300px, dibujamos una línea entre las bolas
            if (dist < 300) {
                ctx.beginPath();
                ctx.moveTo(bola.x, bola.y); // Desde la bola actual
                ctx.lineTo(bola2.x, bola2.y); // Hacia la otra bola
                ctx.stroke();  // Dibuja la línea
                ctx.closePath();
            }
        });

        bola.dibujar(ctx); // Dibujamos la bola
        bola.mover(); // Movemos la bola
    });

   
    requestAnimationFrame(animar);  // Esto asegura que la animación continúe en bucle
}


animar();
