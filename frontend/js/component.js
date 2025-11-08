import { sendMessageToApi } from "./api.js";

const input = document.getElementById("input_chat");
const button = document.getElementById("btn_send");
const messages = document.querySelector(".messages");

button.addEventListener("click", async () => {
  const text = input.value.trim();
  if (text === "") return;

  const apiResponse = await sendMessageToApi(text);
  console.log(apiResponse);

  apiResponse.results.forEach((item) => {
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("mb-2");
    msgDiv.textContent = item.name;
    messages.appendChild(msgDiv);
  });

  input.value = "";
  messages.scrollTop = messages.scrollHeight;
});
