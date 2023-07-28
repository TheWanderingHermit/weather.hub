const timeElem = document.getElementById("time");
const currTime = new Date().toLocaleTimeString();
const nameElem = document.getElementById("name");
timeElem.textContent = `The time is: ${currTime}`

function updateTimeElements() {
    chrome.storage.local.get(["timer"]).then((res)=>{
        const time = res.timer ?? 0;
        timeElem.textContent = `The time is ${time}`
    })
}
updateTimeElements()
setInterval(updateTimeElements, 1000)