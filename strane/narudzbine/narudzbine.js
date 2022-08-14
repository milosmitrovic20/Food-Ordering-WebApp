/*let ajax = new XMLHttpRequest();
ajax.open("GET", "./APIs/data.php", true);
ajax.send();
ajax.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(this.responseText);
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            let html = "";
            let id = data[i].id;
            let ukupna_cena = data[i].ukupna_cena;
            let vreme_narucivanja = data[i].vreme_narucivanja;
            let broj_stola = data[i].broj_stola;
            let status = data[i].status;
            let detalji = data[i].detalji;
            let napomena = data[i].napomena;
            html += "<tr scope=row>";
            html += "<input class=\"id_reda\" data-id=\"" + id + "\" type=\"hidden\">";
            html += "<td>" + broj_stola + "</td>";
            html += "<td>" + ukupna_cena + "</td> <!--ukupna cena-->";
            html += "<td>" + vreme_narucivanja + "</td>";
            html += "<td><small class=d-block>" + napomena + "</small></td>"
            html += "<td><button id=a class=more onclick=otvoriPopup(this)>detalji</button></td>"
            if (status == "aktivna") {
                html += "<td>"
                html += "<ion-icon class=stik name=checkmark-outline onclick=izvrsiNarudzbinu(this)></ion-icon>";
                html += "<ion-icon class=x name=remove-circle-outline onclick=odbijNarudzbinu(this)></ion-icon>";
                html += "</td>"
                html += "</tr>"
                document.getElementById("aktivne").innerHTML += html;
            } else if (status == "odbijena") {
                html += "</tr>"
                document.getElementById("odbijene").innerHTML += html;
            } else {
                html += "</tr>"
                document.getElementById("izvrsene").innerHTML += html;
            }

        }

    }
};*/

function ispisiNarudzbinuStola(element) {

    let broj_stola = element.innerText.match(/(\d+)/)[0];
    let ajax = new XMLHttpRequest();
    ajax.open("GET", "./APIs/data.php?broj_stola=" + broj_stola, true);
    ajax.send();
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText);
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                let html = "";
                let id = data[0].id;
                let detalji = data[0].detalji;
                let ukupna_cena = data[i].ukupna_cena;
                let vreme_narucivanja = data[i].vreme_narucivanja;
                let broj_stola = data[i].broj_stola;
                let status = data[i].status;
                let napomena = data[i].napomena;
                html += "<div class=wrapper>"
                html += "<div class=cart-content>";
                html += "<div class=cart-box>";
                let artikli_posebno = detalji.split("RSD ")

                for (i = 0; i < artikli_posebno.length; i++) {
                    console.log(artikli_posebno[i]);
                    razdvojene = artikli_posebno[i].split("&");

                    for (j = 3; j < razdvojene.length; j = j + 3) {
                        let ime = razdvojene[j - 2]
                        let kolicina = razdvojene[j - 1]
                        let cena = razdvojene[j - 0]
                        html += "<input hidden type=number min=0 value=1 class=cart-quantity> " + kolicina + " kom</input>";
                        html += "<div class=cart-product-title>" + ime + "</div>";
                        html += "<div class=cart-price>" + cena + "</div>";
                    }

                }
                html += "</div>";
                html += "</div>";
                html += "</div>";

                document.getElementById("ispis").innerHTML = html;

            }

        }
    };



}

function addToTable() {
    output.innerHTML += "<tr>" + "<td>" + title.value + "</td>" +
        "<td>" + author.value + "</td>" +
        "<td>" + "<input type='button' onclick='post(this);' id='post' value ='Post'>" +
        "<input type='button' onclick='remove(this);' id='remove'value ='Remove'>" + "</td>" + "</tr>"
}

function removeRow(row) {

    document.getElementById("aktivne").removeChild(row)
}

function izvrsiNarudzbinu(element) {
    /*let nastavitiProvera = confirm("Jel ste sigurni da želite da pošaljete ovu narudžbinu u izvršene?");
    console.log(nastavitiProvera); // OK = true, Cancel = false
    if (nastavitiProvera == false) {
        return;
    }*/

    row = element.parentNode.parentNode
    let row_id = element.parentNode.parentNode.getElementsByTagName("input")[0].getAttribute("data-id");
    // console.log(row_id)
    let ajax = new XMLHttpRequest();
    ajax.open("GET", "./APIs/updateFinished.php?id=" + row_id, true);
    ajax.send();
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            removeRow(element)
        }
    };

    let tabelaUbaci = document.getElementById("izvrsene")
    row.removeChild(row.children[6])
    tabelaUbaci.appendChild(row)

}

function odbijNarudzbinu(element) {
    /*let nastavitiProvera = confirm("Da li ste sigurni da želite da pošaljete ovu narudžbinu u odbijene");
    console.log(nastavitiProvera); // OK = true, Cancel = false
    if (nastavitiProvera == false) {
        return;
    }*/
    row = element.parentNode.parentNode
    let row_id = element.parentNode.parentNode.getElementsByTagName("input")[0].getAttribute("data-id");
    // console.log(row_id);
    let ajax = new XMLHttpRequest();
    ajax.open("GET", "./APIs/updateDenied.php?id=" + row_id, true);
    ajax.send();
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            removeRow(row)
        }
    };

    let tabelaUbaci = document.getElementById("odbijene")
    row.removeChild(row.children[6])
    tabelaUbaci.appendChild(row)

}





function otvoriPopup(element) {
    let row_id = element.parentNode.parentNode.getElementsByTagName("input")[0].getAttribute("data-id");
    let ajax = new XMLHttpRequest();
    ajax.open("GET", "./APIs/dataOneRow.php?id=" + row_id, true);
    ajax.send();
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText);
            console.log(data);
            let html = "";
            let id = data[0].id;
            let detalji = data[0].detalji;
            html += "<div class=wrapper>"
            html += "<div class=cart-content>";
            html += "<div class=cart-box>";
            let artikli_posebno = detalji.split("RSD ")

            for (i = 0; i < artikli_posebno.length; i++) {
                console.log(artikli_posebno[i]);
                razdvojene = artikli_posebno[i].split("&");

                for (j = 3; j < razdvojene.length; j = j + 3) {
                    let ime = razdvojene[j - 2]
                    let kolicina = razdvojene[j - 1]
                    let cena = razdvojene[j - 0]
                    html += "<input hidden type=number min=0 value=1 class=cart-quantity> " + kolicina + " kom</input>";
                    html += "<div class=cart-product-title>" + ime + "</div>";
                    html += "<div class=cart-price>" + cena + "</div>";
                }

            }
            html += "</div>";
            html += "</div>";
            html += "</div>";

            document.getElementById("ispis").innerHTML = html;
        }
    }
};



setTimeout(function () {
    location.reload();
}, 60000);