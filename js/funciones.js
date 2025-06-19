let comodin = null;

const fn_loadData = () => {
    let registros = [];
    const jsonRegistros = localStorage.getItem("registros");
    if (jsonRegistros === null) {
        localStorage.setItem("registros", "[]");
    } else {
        registros = JSON.parse(jsonRegistros);
    }
    return registros;
};

const fn_saveData = (r) => {
    const jsonRegistros = JSON.stringify(r);
    localStorage.setItem("registros", jsonRegistros);
};

const fn_formatoHMS = (s) => {
    const h = Math.floor(s / 3600);
    s -= h * 3600;

    const m = Math.floor(s / 60);
    s -= m * 60;

    const pad = (n) => n < 10 ? "0" + n : n;
    return `${pad(h)}:${pad(m)}:${pad(s)}`;
};

const loadHTTP = (url, ck) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            try {
                console.log(xhttp.responseText);
                ck(xhttp.responseText);
            } catch (e) {
                console.log("Error CallBack " + e.message);
            }
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
};

const aleatorio = (limite) => {
    return Math.floor((Math.random() * limite) + 1);
};

const ordenar_arreglo = (n) => {
    for (let i = 0; i < n.length - 1; i++) {
        const temp = n[i + 1];
        let j = i + 1;
        while (j > 0 && temp.tiempo < n[j - 1].tiempo) {
            n[j] = n[j - 1];
            j--;
        }
        n[j] = temp;
    }
    return n;
};