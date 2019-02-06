# Service Worker Lifecycles
Learn the lifecycles of a Service Worker here: https://codeburst.io/work-it-featuring-service-workers-de769bd4917b


## To run
Service Workers will NOT load under the following conditions:
- Site is not served over HTTPS (localhost exempt)
- Site is served without an origin (served from file system is primary cause of this)

### SimpleHTTPServer
I currently use a quick python server to serve this site. Make sure you have [SimpleHTTPServer](https://docs.python.org/2/library/simplehttpserver.html) installed. 
```
npm start
```

Once running, visit http://localhost:8080 to load the site.

To kill the server: CTRL + C
