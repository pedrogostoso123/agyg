document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão de envio do formulário
    
    // Simular envio do formulário e exibir mensagem de sucesso
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.classList.remove('hidden'); // Mostra a mensagem de resposta

    // Após 3 segundos, redireciona para a página inicial
    setTimeout(function() {
        window.location.href = "home.html";
    }, 3000);
});
