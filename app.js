function makeCode(){
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for(let i = 0; i < 6; i++){
        code += chars[Math.floor(Math.random() * chars.length)];
    }
    return code;
}

document.getElementById("createBtn").onclick = () => {
    const name = document.getElementById("name").value;
    if(!name) return;
    const room = makeCode();
    localStorage.setItem("name", name);
    window.location.href = `call.html?room=${room}`;
};

document.getElementById("joinBtn").onclick = () => {
    const name = document.getElementById("name").value;
    const room = document.getElementById("roomCode").value;
    if(!name || !room) return;
    localStorage.setItem("name", name);
    window.location.href = `call.html?room=${room}`;
};
