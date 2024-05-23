// URL da API que retorna a imagem diretamente
const apiUrl = 'https://api.mcstatus.io/v2/widget/java/gunthmc.xyz?dark=false';

// Função para obter a imagem da API
async function fetchImage() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Erro na resposta da rede');
        }

        // Converte a resposta para um blob
        const blob = await response.blob();

        // Cria uma URL para o blob e define como src do elemento <img>
        const imgElement = document.getElementById('corner-image');
        const imageUrl = URL.createObjectURL(blob);
        imgElement.src = imageUrl;

        // Remove o indicador de loading e exibe a imagem
        const loadingElement = document.getElementById('loading');
        loadingElement.style.display = 'none'; // Oculta o indicador de loading
        imgElement.style.display = 'block'; // Exibe a imagem
        imgElement.style.opacity = '1'; // Torna a imagem visível
    } catch (error) {
        console.error('Erro ao buscar a imagem da API:', error);
    }
}

// Exibe o indicador de loading assim que a página é carregada
window.onload = function() {
    const loadingElement = document.getElementById('loading');
    loadingElement.style.display = 'block'; // Exibe o indicador de loading
    fetchImage(); // Inicia o processo de busca da imagem
};
