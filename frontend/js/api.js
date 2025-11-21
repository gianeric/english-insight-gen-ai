export async function sendMessageToApi(message) {
  const url = "http://localhost:3000/corrector";

  try {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sentence: message }),
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar dados na API:", error);
    return null;
  }
}
