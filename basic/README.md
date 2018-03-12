
# Grape-samples: basic

This demo app is an example of a very basic Grape project.

To run this sample app, make sure ../config.json is properly set up.

Install npm modules:
```cd app/; npm install; cd ..```

Create the DB with: 
```grape-db-setup -r -a ../config.json db/initial.manifest```

And then start the program with:
```node app/index.js```

You should now be able to browse to http://localhost:9000/ 



