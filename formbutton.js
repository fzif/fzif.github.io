// えなに見てんのウケる
function formsubmit () {
    var exec = document.getElementById("exec");
    var b = document.getElementById("shorten").button.value;
    var t = document.getElementById("shorten").text.value;
    if (t === "") {
        exec.innerHTML = "入力欄が空値です";
    } else {
        exec.innerHTML = "https://yuzupon1133.github.io/"+b+"/"+t+"/";
    }
}
function showtype() {
    var type = document.getElementById("type");
    var a = document.getElementById("shorten").button.value;
    if (a === "u") {
        type.innerHTML = 'ユーザー名';
    }
    if (a === "p") {
        type.innerHTML = 'プロジェクトID';
    }
    if (a === "s") {
        type.innerHTML = 'スタジオID';
    }
    if (a === "f") {
        type.innerHTML = 'フォーラムポストID';
    }
}