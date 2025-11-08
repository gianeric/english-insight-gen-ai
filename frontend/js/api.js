export async function sendMessageToApi(message) {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?offset=180&limit=20"
    );

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar dados na API:", error);
    return null;
  }
}
