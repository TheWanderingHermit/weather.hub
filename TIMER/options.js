const nameInput = document.getElementById("name-input");
const saveBtn   = document.getElementById("save-btn");

saveBtn.addEventListener("click", ()=>{
    const name = nameInput.value
    chrome.storage.sync.set({ name: name }).then(() => {
        console.log(`name is set to ${name}`)
    });
})