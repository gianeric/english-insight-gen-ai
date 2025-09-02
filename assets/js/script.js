document.addEventListener("DOMContentLoaded", () => {
  const fetchDadosApi = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?offset=180&limit=20"
      );
      const dados = await response.json();

      //Seleciona a lista onde os dados serão inseridos
      const lista = document.getElementById("lista-dados");

      //Limpa a lista antes de adicionar novos dados
      lista.innerHTML = "";

      //Adiciona os dados na lista
      dados.results.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.name;
        lista.appendChild(li);
      });
    } catch (error) {
      console.error("Erro ao buscar dados na API:", error);
    }
  };

  fetchDadosApi();
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("[INICIO][API][FOOTBALL-DATA]");
  const fetchDadosApi = async () => {
    try {
      // Carregue a chave do arquivo .env usando uma variável global definida no HTML
      const headers = {
        "X-Auth-Token": window.API_FOOTBALL_X_AUTH_TOKEN, // Defina FOOTBALL_API_KEY no seu HTML
        "Content-Type": "application/json",
      };

      // Exemplo de query params: buscar partidas da Premier League em um intervalo de datas
      const params = new URLSearchParams({
        dateFrom: "2025-04-01",
        dateTo: "2025-04-10",
        competitions: "PL", // PL = Premier League
      });

      //Ativar manualmente o uso temporário do CORS AnyWhere para liberar o IP acessando https://cors-anywhere.herokuapp.com/corsdemo
      const proxy = "https://cors-anywhere.herokuapp.com/";
      const baseUrl = "https://api.football-data.org/v4/matches";
      const url = `${proxy}${baseUrl}?${params.toString()}`;

      const response = await fetch(url, {
        method: "GET",
        headers: headers,
      });

      const dados = await response.json();

      console.log(dados);

      //Seleciona a lista2 onde os dados serão inseridos
      const lista2 = document.getElementById("lista-dados2");

      //Limpa a lista2 antes de adicionar novos dados
      lista2.innerHTML = "";

      //Adiciona os dados na lista2
      dados.matches.forEach((match) => {
        console.log(match.awayTeam.name);
        const li = document.createElement("li");

        const homeScore = match.score.fullTime.home;
        const awayScore = match.score.fullTime.away;
        const homeTeam = match.homeTeam.name;
        const awayTeam = match.awayTeam.name;

        li.textContent = `${homeTeam} ${homeScore} x ${awayScore} ${awayTeam}`;
        lista2.appendChild(li);
      });

      console.log("[FIM][API][FOOTBALL-DATA]");
    } catch (error) {
      console.error("Erro ao buscar dados na API:", error);
      console.log("[FIM][API][FOOTBALL-DATA]");
    }
  };

  fetchDadosApi();
});
