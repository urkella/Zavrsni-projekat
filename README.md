# Diamond React Food App

Projekat je napravljen pomoću [Create React App](https://github.com/facebook/create-react-app) i [json-server](https://github.com/typicode/json-server).

Projekat je dostupan na sledecem [LINK-u](https://diamond-food-app.herokuapp.com).

JSON-SERVER ima svoj [repozitorijum](https://github.com/urkella/Zavrsni-projekat-json) i dostupan je na sledecem [LINK-u](https://diamond-food-app-json.herokuapp.com).

## Pokretanje projekta

Otvoriti terminal u projekt direktorijumu i uneti sledece komande:

### `npm install`

Instalira sve node module potrebne za pokretanje aplikacije

### `touch .env`

Kreira konfiguracioni fajl u kome cuvamo konstantne vrednosti. Po default-u je potrebno dodati sledecu vrednost: 
REACT_APP_DIAMOND_API=http://localhost:3005

### `npm start`

Pokrece aplikaciju u development mode-u.
Aplikacija ce biti otvorena na [http://localhost:3000](http://localhost:3000) linku.

### `json-server --watch db.json --port 3005`

Pokrece json-server potreban za sve API pozive u aplikaciji.
Server ce biti pokrenut na [http://localhost:3005](http://localhost:3005) linku.

## Mogucnosti

### `Dodavanje hrane`

```
POST /food
```

Ukoliko ste ulogovani user mocicete da dodajete hranu koja ce biti sacuvana u db.json fajlu i prikazana na sajtu.

### `Prikazivanje hrane`

```
GET /food
```

Dodata hrane se prikazuje na vise mesta. Jedna od mesta su pocetna stranica gde hranu filtriramo po najnovijoj i onoj koja ima najmanju cenu.

### `Autentikacija`

```
POST /users
```

Novi korisnici se cuvaju u json-server pomocu forme za registraciju. Nakon registracije ih automatiski ulogujemo.

```
GET /users
```

Koristeci json-server simulirana je autentikacija pomocu koje korisnici mogu da se uloguju i izloguju. Samo ukoliko ste ulogovani mocicete da postavite hranu.
