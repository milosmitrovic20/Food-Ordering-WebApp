<?php
session_start();

if (isset($_SESSION['email'])) {
?>
    <!DOCTYPE html>
    <html>

    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://kit.fontawesome.com/a572b64406.js" crossorigin="anonymous"></script>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        <link href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        <script src="https://kit.fontawesome.com/a572b64406.js" crossorigin="anonymous"></script>
        <title>Narudzbine</title>
        <link rel="stylesheet" href="narudzbine.css">
        <link href="../../slike/tab-logo.png" rel="icon">
    </head>

    <body>

        </script>
        <header>
            <a class="logo"><img src="../../slike/lets-order-logo.png" alt="logo" width="auto" height="77px"></a>
            <nav>
                <ul class="nav__links">
                    <li><a class="active" href="/narudzbine.php">Orders</a></li>
                    <li><a href="../artikli/artikli.php">Products</a></li>
                    <li><a href="../ponuda/ponuda.php">Menu</a></li>
                </ul>
            </nav>
            <div class="dropdown">
                <button id="cta" class="cta"><i class="fa-solid fa-user"></i></button>
                <div id="myDropdown" class="dropdown-content hide">
                    <a href="../nalog/profile.php">Moj Nalog</a>
                    <a>Statistika</a>
                </div>
            </div>
        </header>
        <div class="overlay">
            <a class="close">&times;</a>
            <div class="overlay__content">
                <a href="../narudzbine/narudzbine.php">Narudzbine</a>
                <a class="active" href="artikli.php">Artikli</a>
                <a href="../ponuda/ponuda.php">Ponuda</a>
            </div>
        </div>


        
        <div class="form-modal">

            <div class="form-toggle">
                <button id="aktivne-toggle" onclick="toggleAktivne()">Aktivne</button>
                <button id="izvrsene-toggle" onclick="toggleIzvrsene()">Izvršene</button>
                <button id="odbijene-toggle" onclick="toggleOdbijene()"> Odbijene</button>
            </div>
            <div id="divaktivne" class="divaktivne">
                <div class="content">

                    <div class="container">

                        <div class="table-responsive" id="tabela-aktivne">


                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Broj Stola</th>
                                        <th scope="col">Ukupna Cena</th>
                                        <th scope="col">Vreme narudžbine</th>
                                        <th scope="col">Napomena</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>

                                <tbody id="aktivne">

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div id="divizvrsene" class="divizvrsene">
                <div class="content">

                    <div class="container">


                        <div class="table-responsive">

                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Broj Stola</th>
                                        <th scope="col">Ukupna Cena</th>
                                        <th scope="col">Vreme narudžbine</th>
                                        <th scope="col">Napomena</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>

                                <tbody id="izvrsene">

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div id="divodbijene" class="divodbijene">

                <div class="content">

                    <div class="container">


                        <div class="table-responsive">

                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Broj Stola</th>
                                        <th scope="col">Ukupna Cena</th>
                                        <th scope="col">Vreme narudžbine</th>
                                        <th scope="col">Napomena</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody id="odbijene">

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="obavestenje" class="obavestenje">ALO MAJMUNE STIGLA TI NARUDZBINA</div>
        <script src="narudzbine.js"> </script>



    </body>
    <script>
        function toggleIzvrsene() {
            document.getElementById("aktivne-toggle").style.backgroundColor = "#f9f9f9";
            document.getElementById("aktivne-toggle").style.color = "#333";
            document.getElementById("izvrsene-toggle").style.backgroundColor = "#333";
            document.getElementById("izvrsene-toggle").style.color = "#ffb266";
            document.getElementById("odbijene-toggle").style.backgroundColor = "#f9f9f9";
            document.getElementById("odbijene-toggle").style.color = "#333";
            document.getElementById("divaktivne").style.display = "none";
            document.getElementById("divizvrsene").style.display = "block";
            document.getElementById("divodbijene").style.display = "none";
        }

        function toggleAktivne() {
            document.getElementById("aktivne-toggle").style.backgroundColor = "#333";
            document.getElementById("aktivne-toggle").style.color = "#ffb266";
            document.getElementById("izvrsene-toggle").style.backgroundColor = "#f9f9f9";
            document.getElementById("izvrsene-toggle").style.color = "#333";
            document.getElementById("odbijene-toggle").style.backgroundColor = "#f9f9f9";
            document.getElementById("odbijene-toggle").style.color = "#333";
            document.getElementById("divaktivne").style.display = "block";
            document.getElementById("divizvrsene").style.display = "none";
            document.getElementById("divodbijene").style.display = "none";
        }

        function toggleOdbijene() {
            document.getElementById("aktivne-toggle").style.backgroundColor = "#f9f9f9";
            document.getElementById("aktivne-toggle").style.color = "#333";
            document.getElementById("izvrsene-toggle").style.backgroundColor = "#f9f9f9";
            document.getElementById("izvrsene-toggle").style.color = "#333";
            document.getElementById("odbijene-toggle").style.backgroundColor = "#333";
            document.getElementById("odbijene-toggle").style.color = "#ffb266";
            document.getElementById("divaktivne").style.display = "none";
            document.getElementById("divizvrsene").style.display = "none";
            document.getElementById("divodbijene").style.display = "block";
        }
    </script>

    </html>

    </html>
<?php
} else {
    header('Location: ../../../../prijava/login.php');
}
