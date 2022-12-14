# Board game API express

#### Inlämning 3- Server Express Node TS

An applikation for getting, posting, updating and deleting an object I've created using different API endpoints.

## Server setup

You need to have `Node.js` installed on your computer

```
$ git clone https://github.com/pollyyllop/Inl-mning-3.git
$ cd server
$ npm install
```

## Server setup

You need to have `Node.js` installed on your computer

```
$ cd client
$ npm install
```

## Run in developer phase

```
$ npm run dev
```

## Build and run in production phase

```
$ tsc
$ npm run start
```

Board game express API runs on `localhost:3000` on default.

## Endpoints

### `GET <host>/api/boardgame`

Retrieves all objects.

### `GET <host>/api/boardgame/<id>`

Retrieves specifik objects by their id.

### `POST <host>/api/boardgame`

Post an object using this template:

```json
  "id": "1",
  "name": "Nemesis",
  "description": "Escape the aliens",
  "published": 1993
```

### `PUT <host>/api/boardgame/<id>`

Update an object using the template above and the object's id.

### `<host>/api/boardgame`

Deletes ALL objects.

## Krav för godkänt

- [x] Projektet innehåller minst 4 st. endpoints (GET, POST, PUT & DELETE för en resurs)
- [x] Samtliga endpoints skall kunna nås via en REST Client fil (.rest|.http)
- [x] Datan som API:et hanterar sparas lokalt i serverfilen
- [x] API'et ska svara med 404 om datan saknas.
- [x] Git & GitHub har använts
- [x] Projektmappen innehåller en README.md fil
- [x] Uppgiften lämnas in i tid

## Krav för väl godkänt

- [x] Alla punkter för godkänt är uppfyllda
- [ ] All data skall vara sparad i en JSON-fil istället för i serverfilen
- [ ] Datan i JSON-filen skall uppdateras då något läggs till, uppdateras eller tas bort
- [ ] Ett klient-gränssnitt skall byggas för att anropa API:ets alla olika endpoints och presentera datan, redigeringsformulär skall fyllas i med befintlig information.
- [x] Ytterligare en GET endpoint skall läggas till där det går att hämta ett specifikt objekt
