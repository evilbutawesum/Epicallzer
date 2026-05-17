const params = new URLSearchParams(window.location.search);
const room = params.get("room");
const name = localStorage.getItem("name");

document.getElementById("roomTitle").innerText = "Room: " + room;

const userBox = document.getElementById("userBox");

const me = document.createElement("div");
me.innerText = "😎 " + name;

userBox.appendChild(me);

const games = [
    { name: "Snake", url: "https://example.com/snake" },
    { name: "Tetris", url: "https://example.com/tetris" }
];

function leave(){
    window.location.href = "index.html";
}

function toggleGames(){
    const menu = document.getElementById("gameMenu");

    if(menu.style.display === "none"){
        menu.style.display = "block";
        menu.innerHTML = "";

        games.forEach(g => {
            const btn = document.createElement("button");
            btn.innerText = g.name;

            btn.onclick = () => {
                const w = window.open("about:blank", "_blank");
                w.document.write(`
                    <iframe src="${g.url}" style="width:100vw;height:100vh;border:none;"></iframe>
                `);
            };

            menu.appendChild(btn);
        });
    } else {
        menu.style.display = "none";
    }
}
