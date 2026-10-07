<h1> Pénz és győzelem </h1>

Anna és Béla egy játékot játszanak. Kezdetben az asztalon van valamennyi pénz, és felváltva vesznek el belőle 500 Ft és 3000 Ft közötti értéket, de csakis 500-zal oszthatót! A győztes aki  az utolsó pénzt el tudja venni!

<p align="center">
    <img src="./sample/start.png" height="120">
</p>


Készítsd el a játékot az alábbi leírás alapján! A változók neveit tetszőlegesen megválaszthatod, de a **függvények neveit pontosan a feladatok szerint** add meg!

0. A játék aktuális állapotát 4 változóval tudjuk leírni:

    - Mennyi pénz van jelenleg az asztalon? `currentMoney`
    - Mennyi pénzt vett el eddig Anna? `annaMoney`
    - Mennyi pénzt vett el eddig Béla? `belaMoney`
    - Ki a következő játékos? (Pl.: 1 = Anna, 2 = Béla) `player`

    Ezeket javasolt globálisan deklarálni és kezdőértéket adni nekik!

1. Az asztalon lévő pénz kezdőértéke 15000 Ft és 20000 Ft közötti véletlenszerű érték legyen, de csakis 1000-rel osztható! (Tehát összesen 6 fajta lehetőségünk van.)

2. Az "Új játék" nevű gombra kattintáskor indítsuk el a játékot. Az eseménykezelő neve `startGame()` legyen! Feladatai a következők:

    a. A `new-game` osztályba tartozó gombot rejtsük el, a `game` osztályba tartozó elemet jelenítsük meg!

    b. Kiírja az állapotot leíró változókat a megfelelő helyre! (Mennyi pénz van az asztalon, Annánál, Bélánál?)

    c. Meghív egy `renderMoney()` nevű függvényt, amelyet a következő feladatban kell megírni!

    <p align="center">
    <img src="./sample/startGame.png" height="250">
    </p>

3. A `renderMoney()` az asztalon lévő összeget jeleníti meg 5000 Ft, 2000 Ft és 500 Ft-os címletekkel egy listában képeket generálva!

    Ehhez használd fel a `money-types` mappában található képeket!

    Ügyelj rá, hogy a lehető legkevesebb képet jelenítsd meg! Például a mintában látható 18000 Ft esetén ne 36 darab 500 Ft-os címletet jeleníts meg, hanem:
    - 3 darab 5000 Ft
    - 1 darab 2000 Ft
    - 2 darab 500 Ft

    Tehát a nagy címleteket használd ameddig csak lehet, majd utána jöhetnek a kisebbek!

    <p align="center">
    <img src="./sample/renderMoney.png" height="120">
    </p>

4. Bővítsd a `startGame()` függvényt, hogy az "Összeg választása" gombra kattintva egy `takeMoney()` nevű eseménykezelő fusson le!

    a. Olvassa ki a választott összeget!

    b. Ha ez több, mint az asztalon lévő összeg, akkor ne tegyen semmi mást! Egyéb esetben az asztalon lévő összeg csökkenjen, az aktuális játékos összege pedig növekedjen a választott értékkel!

    c. Ügyelj arra is, hogy ne csak a JavaScript változók értékeit módosítsd, hanem a felhasználó is láthassa a változásokat! Az asztalon lévő pénzt is újra jelenítsd meg!

    <p align="center">
    <img src="./sample/takeMoney.png" height="250">
    </p>

5. Vizuálisan is jelezd, hogy melyik játékos következik! Az oldal tetején látható ikonok közül a megfelelő kapjon `current-player` osztályt! Ügyelj rá, hogy ez már a kezdő játékos esetében is megtörténjen!

6. Miután egy játékos sikeresen elvett valamennyi pénzt, ellenőrizzük, hogy véget ért-e a játék! Ha igen, akkor a `winner` osztályba tartozó elemhez rendeljük hozzá a `show` osztályt is! Írjuk bele azt is, hogy ki nyert!

    <p align="center">
    <img src="./sample/winner.png" height="250">
    </p>
