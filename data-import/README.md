
# Grape-samples: data-import

This demo app tries to cover all of the data-import-related functionality in Grape.

To run this sample app, make sure ../config.json is properly set up.

Install npm modules:
```cd app/; npm install; cd ..```

Create the DB with: 
```grape-db-setup -r -a ../config.json db/initial.manifest```

And then start the program with:
```node app/index.js```

You should now be able to log into http://localhost:9000/ with username xlu and password xlu.



