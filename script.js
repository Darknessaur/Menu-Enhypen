document.querySelectorAll('.card').forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
        console.log(`Card ${index + 1} foi clicado.`);
        const audio = card.querySelector('audio');
        if (audio) {
            console.log(`Reproduzindo áudio para o card ${index + 1}`);
            audio.currentTime = 0;
            audio.play().catch(error => {
                console.log(`Erro ao tocar o áudio no card ${index + 1}:`, error);
            });
        } else {
            console.log(`Nenhum áudio encontrado para o card ${index + 1}`);
        }
    });
});