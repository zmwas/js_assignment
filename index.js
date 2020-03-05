import {performUrlLookUp} from "./src/scripts/mock_server.js";

let lastTime = 0;
const throttleTimeInMilliseconds = 100;

const performServerLookUp = (text) => {
    return performUrlLookUp(text)
};

const isValidURL = (text) => {
    const pattern = new RegExp(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/g);
    return pattern.test(text);
};

const getCapturedText = (input) => {
    return input.value;
};

document.addEventListener('keydown', async () => {
    const input = document.getElementById('url-input');
    const result = document.getElementById('result-text');
    if (input !== null) {
        const text = getCapturedText(input);
        if (isValidURL(text)) {
            let now = new Date();
            if (now - lastTime >= throttleTimeInMilliseconds) {
                const results = await performServerLookUp(text);
                result.textContent = `The url ${results.urlExists ? "exists and is a" : "does not exist"} ${results.urlExists ? results.urlType : ""}`;
            }
        }
    }
});