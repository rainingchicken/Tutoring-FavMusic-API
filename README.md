# Tutoring MongoDB and Mongoose

frontend:
https://github.com/rainingchicken/Tutoring-FavMusic-Frontend

### Description

Favorite music management api server

### Tech Stack

Backend

- mongoose/mongoDB
- express
- node

### endpoints

- /music
  - get all favorite songs posted by client
  - post a favorite song

##### POST request

```js
{
  "artist": "the weeknd",
  "songTitle": "song"
}
```

##### GET request

```js
[
  {
    _id: "67106a0aa2a75f6eb8f19dac",
    artist: "doja cat",
    songTitle: "Kiss me more",
    createdAt: "2024-10-17T01:36:10.219Z",
    updatedAt: "2024-10-17T01:36:10.219Z",
    __v: 0,
  },
  {
    _id: "67106aa03c1c886e114d3375",
    artist: "the weeknd",
    songTitle: "song",
    createdAt: "2024-10-17T01:38:40.135Z",
    updatedAt: "2024-10-17T01:38:40.135Z",
    __v: 0,
  },
];
```

- /music/:\_id

##### PATCH

/music/67106a0aa2a75f6eb8f19dac

```js
{
  "artist": "Doja Cat",
}
```

(results)

```js
{
    _id: "67106a0aa2a75f6eb8f19dac",
    artist: "Doja Cat",
    songTitle: "Kiss me more",
    createdAt: "2024-10-17T01:36:10.219Z",
    updatedAt: "2024-10-23T01:36:10.219Z",
    __v: 0,
}
```

##### DELETE

/music/67106a0aa2a75f6eb8f19dac
