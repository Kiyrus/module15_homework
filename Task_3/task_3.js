const staticWss = "wss://echo-ws-service.herokuapp.com/";

const buttonSendMessage = document.querySelector(".chat__button-send-message");
const buttonGetGeolocation = document.querySelector(".chat__button-get-geolocation");

const outputConnectionArea = document.querySelector(".status-text--update");
const outputChatMessageArea = document.getElementById("js-chat__down");

const inputMessageArea = document.getElementById("js-input-message");

webSocket = new WebSocket(staticWss);

webSocket.onopen = function () {
    outputConnectionArea.innerText = "CONNECTED";
};

buttonSendMessage.addEventListener("click", () => {
    let message = inputMessageArea.value;
    if (message !== "") {
        let message = inputMessageArea.value;
        writeToScreen(message);
        webSocket.send(message);
        outputChatMessageArea.scrollTop = outputChatMessageArea.scrollHeight;
    } else {
        alert("Enter message, pls)")
    }
});

function writeToScreen(message) {
    let pre = document.createElement("p");
    pre.className = ("client-message");
    pre.innerHTML = message;
    outputChatMessageArea.appendChild(pre);
    inputMessageArea.value = ("");
}
