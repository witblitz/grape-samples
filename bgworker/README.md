
# Grape-samples: bgworker

This demo app tries to cover all of the bgworker (Process) related functionality in Grape.


To run this sample app, make sure ../config.json
You also have to configure a file called config/ps_bgworker.conf . You can copy ps_bgworker.conf.example and just edit the database connection parameters.

Install npm modules:
```cd app/; npm install; cd ..```

Create the DB with: 
```grape-db-setup -r -a ../config.json db/initial.manifest```

And then start the program with:
```node app/index.js```

You should now be able to log into http://localhost:9000/ with username admin and password admin123.



