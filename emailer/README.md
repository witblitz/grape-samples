
# Grape-samples: Emails 

This demo app tries to cover all of the email-related functionality in Grape.

To run this sample app, make sure ../config.json is properly set up with a usable DB connection string.

Copy config/grape_settings.json.example to config/grape_settings.json and edit your SMTP parameters.

Install npm modules:
```cd app/; npm install; cd ..```

Create the DB with: 
```grape-db-setup -r -a ../config.json db/initial.manifest```

And then start the program with:
```node app/index.js```

You should now be able to browse to http://localhost:9000/ and send an email



