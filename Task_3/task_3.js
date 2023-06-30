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

webSocket.onerror = function () {
    output.innerText = "ERROR";
};

webSocket.onmessage = (event) => {
    writeServerMessage(event.data);
};

buttonSendMessage.addEventListener("click", () => {
    let message = inputMessageArea.value;
    if (message !== "") {
        let message = inputMessageArea.value;
        writeClientMessage(message);
        webSocket.send(message);
        outputChatMessageArea.scrollTop = outputChatMessageArea.scrollHeight;
    } else {
        alert("Enter message, pls)");
    }
});

function writeClientMessage(message) {
    let getMessage = document.createElement("p");
    getMessage.className = "client-message";
    getMessage.innerHTML = message;
    outputChatMessageArea.appendChild(getMessage);
    inputMessageArea.value = "";
}

function writeServerMessage(event) {
    let getServerMessage = document.createElement("p");
    getServerMessage.className = "server-message";
    getServerMessage.innerHTML = event;
    outputChatMessageArea.appendChild(getServerMessage);
    outputChatMessageArea.scrollTop = outputChatMessageArea.scrollHeight;
}

function writeGeolocationMessage(latitude, longitude) {
    let geolocationMessage = document.createElement("a");
    geolocationMessage.setAttribute("href", `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`);
    geolocationMessage.className = "client-message";
    geolocationMessage.innerHTML = "My geolocation";
    outputChatMessageArea.appendChild(geolocationMessage);
}

const successGeolocation = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    writeGeolocationMessage(latitude, longitude);
    outputChatMessageArea.scrollTop = outputChatMessageArea.scrollHeight;
};

buttonGetGeolocation.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(successGeolocation);
});
