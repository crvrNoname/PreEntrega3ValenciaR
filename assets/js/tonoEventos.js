    // Función para reproducir sonido
    function playSound(coordenada) {
        // Define los sonidos para cada coordenada
        const sounds = {
            A01: 'https://andres-valencia-sb.vercel.app/assets/tonos/water_drip.mp3', // Aquí colocas la URL del archivo de sonido correspondiente a A01
            
        };

        // Obtén el sonido correspondiente a la coordenada
        const sound = sounds[coordenada];
        if (sound) {
            // Crea un elemento de audio y reproduce el sonido
            const audio = new Audio(sound);
            audio.play();
        }
    }