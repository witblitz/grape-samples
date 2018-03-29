
# Grape-samples: api

This demo app shows various options in API calls and how to use them.

To run this sample app, make sure ../config.json is properly set up.

Install npm modules:
```cd app/; npm install; cd ..```

Create the DB with: 
```grape-db-setup -r -a ../config.json db/initial.manifest```

And then start the program with:
```node app/index.js```

and make API calls to it.

The API call definitions is in app/api/*json.



