# Newsly: Finding news stories for you!
Newsly is a web application that utilizes the [News API](https://newsapi.org/) to 
provide top news headlines. Users can also use the search bar to scrape news headlines
matching the query term. It is build using React, Redux and Redux Saga.

## Demo 
![newsly-capture](newsly-capture.gif)

## Development Setup

### Prerequisites
- React
- Node
- npm

### Configuration
1) Clone the repo
2) Run `npm install` to install dependencies
3) Copy the file `env.example` and rename it `.env`. This file contains the name of required environment variables needed for the application to work

```
NODE_ENV=
PORT=
BROWSER=none

REACT_APP_API_PREFIX=   # uri path to here the API server is running
REACT_APP_API_KEY=      # password to access the API server
```
4) Start the application using `npm run serve`

### Deployment
Not Deployed.
