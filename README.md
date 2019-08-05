This project is a simple video streaming web application.
Only for demo purposes. Not suitable for production.
Works with [OBS](https://obsproject.com/).

## How to use it

There are three components of it:

- **Client**: The Frontend
- **API**: Backend API to connect to all the data except video streaming
- **RTMP Server**: Streaming the video content from OBS

### Client

https://github.com/rolandkopka/simple-streaming-client

`npm start`
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### API

https://github.com/rolandkopka/simple-streaming-api

`npm start`
Runs the app in the development mode.
Use [http://localhost:3001](http://localhost:3001) to reach the API. Also opens in browser.

The database stored in the db.json file. Editable by hand.

### RTMP

https://github.com/rolandkopka/simple-streaming-rtmpserver

`npm start`
Runs the app in the development mode.
In OBS set the stream server to `rtmp://localhost/live`
the stream key should be the `id` of the stream.
For example: http://localhost:3000/streams/42 _(42 is the key)_
