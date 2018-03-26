
# Grape-samples: SMS

This demo app tries to cover all of the sms-related functionality in Grape.

To run this sample app, make sure ../config.json is properly set up with a usable DB connection string.

Copy config/local.json.example to config/local.json and edit your NXTSMS parameters.

Install npm modules:
```cd app/; npm install; cd ..```

Create the DB with: 
```grape-db-setup -r -a ../config.json db/initial.manifest```

And then start the program with:
```node app/index.js```

You should now be able to browse to http://localhost:9000/ and send an email



