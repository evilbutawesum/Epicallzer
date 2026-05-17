const params = new URLSearchParams(window.location.search);
const room = params.get("room");
const name = localStorage.getItem("name");

document.getElementById("roomTitle").innerText = "Room: " + room;

const userBox = document.getElementById("userBox");

const me = document.createElement("div");
me.innerText = "😎 " + name;

userBox.appendChild(me);

const games = [
    { name: "Snake", url: "games/snake/index.html" },
    { name: "Tetris", url: "games/tetris/index.html" },
    { name: "Who's Your Daddy", url: "games/whosyourdaddy.html" }
];

function leave(){
    window.location.href = "index.html";
}

function toggleGames(){
    const overlay = document.getElementById("gameOverlay");
    const list = document.getElementById("gameList");

    if(overlay.style.display === "none" || overlay.style.display === ""){
        overlay.style.display = "flex";
        list.innerHTML = "";

        games.forEach(g => {
            const btn = document.createElement("button");
            btn.innerText = g.name;

            btn.onclick = () => {
                const w = window.open("about:blank", "_blank");

                w.document.body.style.margin = "0";

                w.document.write(`
                    <style>
                        html,body{
                            margin:0;
                            height:100%;
                            overflow:hidden;
                            background:black;
                        }
                        iframe{
                            border:none;
                            width:100vw;
                            height:100vh;
                        }
                    </style>
                    <iframe src="${g.url}"></iframe>
                `);
            };

            list.appendChild(btn);
        });
    } else {
        overlay.style.display = "none";
    }
}
