# test

[![LoopBack](https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)

The steps I have followed to create project:

C:\&gt;lb4 test

? Project description: test

? Project root directory: test

? Application class name: TestApplication

? Select features to enable in the project (Press &lt;space&gt; to select, &lt;a&gt; to toggle all, &lt;i&gt; to invert selection)Enable e

slint, Enable prettier, Enable mocha, Enable loopbackBuild, Enable vscode, Enable docker, Enable repositories, Enable se

rvices

   create .eslintignore

   create .eslintrc.js

   create .mocharc.json

   create .npmrc

   create .prettierignore

   create .prettierrc

   create DEVELOPING.md

   create index.ts

   create package.json

   create README.md

   create tsconfig.json

   create .vscode\settings.json

   create .vscode\tasks.json

   create .gitignore

   create .dockerignore

   create Dockerfile

   create index.js

   create public\index.html

   create src\application.ts

   create src\index.ts

   create src\migrate.ts

   create src\sequence.ts

   create src\controllers\index.ts

   create src\controllers\ping.controller.ts

   create src\controllers\README.md

   create src\datasources\README.md

   create src\models\README.md

   create src\repositories\README.md

   create src\__tests__\README.md

   create src\__tests__\acceptance\home-page.acceptance.ts

   create src\__tests__\acceptance\ping.controller.acceptance.ts

   create src\__tests__\acceptance\test-helper.ts

npm WARN deprecated superagent@3.8.3: Please note that v5.0.1+ of superagent removes User-Agent header by default, therefore you may need to add it yourself (e.g. GitHub blocks requests without a User-Agent header).  This notice will go away with v5.0.2+ once it is released.

&gt; core-js@2.6.9 postinstall C:\test\node_modules\core-js

&gt; node scripts/postinstall || echo "ignore"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:

&gt; https://opencollective.com/core-js

&gt; https://www.patreon.com/zloirock

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)

npm notice created a lockfile as package-lock.json. You should commit this file.

npm WARN test@1.0.0 No license field.

added 529 packages from 1195 contributors and audited 3946 packages in 78.055s

found 0 vulnerabilities

Application test was created in test.

Next steps:

$ cd test

$ npm start

C:\&gt;cd test

C:\test&gt;lb4 datasource

? Datasource name: mongoDS

? Select the connector for mongoDS: MongoDB (supported by StrongLoop)

? Connection String url to override other settings (eg: mongodb://username:password@hostname:port/database):

? host: 127.0.0.1

? port: 27017

? user:

? password: [hidden]

? database: testapp

? Feature supported by MongoDB v3.1.0 and above: Yes

   create src\datasources\mongo-ds.datasource.json

   create src\datasources\mongo-ds.datasource.ts

npm WARN test@1.0.0 No license field.

+ loopback-connector-mongodb@4.2.0

added 6 packages from 11 contributors and audited 4112 packages in 4.258s

found 0 vulnerabilities

   update src\datasources\index.ts

Datasource MongoDs was created in src\datasources/

C:\test&gt;lb4 model

? Model class name: user

? Please select the model base class Entity (A persisted model with an ID)

? Allow additional (free-form) properties? No

Model User will be created in src/models/user.model.ts

Let's add a property to User

Enter an empty property name when done

? Enter the property name: id

? Property type: number

? Is id the ID property? Yes

? Is it required?: Yes

? Default value [leave blank for none]:

Let's add another property to User

Enter an empty property name when done

? Enter the property name: email

? Property type: string

? Is it required?: Yes

? Default value [leave blank for none]:

Let's add another property to User

Enter an empty property name when done

? Enter the property name: password

? Property type: string

? Is it required?: Yes

? Default value [leave blank for none]:

Let's add another property to User

Enter an empty property name when done

? Enter the property name:

   create src\models\user.model.ts

   update src\models\index.ts

Model User was created in src\models/

C:\test&gt;lb4 model

? Model class name: userinfo

? Please select the model base class Entity (A persisted model with an ID)

? Allow additional (free-form) properties? No

Model Userinfo will be created in src/models/userinfo.model.ts

Let's add a property to Userinfo

Enter an empty property name when done

? Enter the property name: id

? Property type: number

? Is id the ID property? Yes

? Is it required?: Yes

? Default value [leave blank for none]:

Let's add another property to Userinfo

Enter an empty property name when done

? Enter the property name: firstname

? Property type: string

? Is it required?: No

? Default value [leave blank for none]:

Let's add another property to Userinfo

Enter an empty property name when done

? Enter the property name: lastname

? Property type: string

? Is it required?: No

? Default value [leave blank for none]:

Let's add another property to Userinfo

Enter an empty property name when done

? Enter the property name: bdate

? Property type: string

? Is it required?: No

? Default value [leave blank for none]:

Let's add another property to Userinfo

Enter an empty property name when done

? Enter the property name: activated

? Property type: boolean

? Is it required?: Yes

? Default value [leave blank for none]:

Let's add another property to Userinfo

Enter an empty property name when done

? Enter the property name:

   create src\models\userinfo.model.ts

   update src\models\index.ts

Model Userinfo was created in src\models/

C:\test&gt;lb4 repository

? Please select the datasource MongoDsDatasource

? Select the model(s) you want to generate a repository User, Userinfo

? Please select the repository base class DefaultCrudRepository (Legacy juggler bridge)

   create src\repositories\user.repository.ts

   create src\repositories\userinfo.repository.ts

   update src\repositories\index.ts

   update src\repositories\index.ts

Repositories UserRepository, UserinfoRepository were created in src\repositories/

C:\test&gt;lb4 controller

? Controller class name: user

Controller User will be created in src/controllers/user.controller.ts

? What kind of controller would you like to generate? REST Controller with CRUD functions

? What is the name of the model to use with this CRUD repository? User

? What is the name of your CRUD repository? UserRepository

? What is the name of ID property? id

? What is the type of your ID? number

? What is the base HTTP path name of the CRUD operations? /users

   create src\controllers\user.controller.ts

   update src\controllers\index.ts

Controller User was created in src\controllers/

C:\test&gt;lb4 controller

? Controller class name: userinfo

Controller Userinfo will be created in src/controllers/userinfo.controller.ts

? What kind of controller would you like to generate? REST Controller with CRUD functions

? What is the name of the model to use with this CRUD repository? Userinfo

? What is the name of your CRUD repository? UserinfoRepository

? What is the name of ID property? id

? What is the type of your ID? number

? What is the base HTTP path name of the CRUD operations? /userinfos

   create src\controllers\userinfo.controller.ts

   update src\controllers\index.ts

Controller Userinfo was created in src\controllers/

C:\test&gt;npm start

&gt; test@1.0.0 prestart C:\test

&gt; npm run build

&gt; test@1.0.0 build C:\test

&gt; lb-tsc

&gt; test@1.0.0 start C:\test

&gt; node -r source-map-support/register .

Server is running at http://[::1]:3000

Try http://[::1]:3000/ping

For data :

{

  "id":10,

  "email": "abcd@defg.com",

  "password": "Abcd2018"

}

for schema/model of user: 

{

  "id": 0,

  "email": "string",

  "password": "string"

}

I am getting following error:

{

  "error": {

    "statusCode": 422,

    "name": "UnprocessableEntityError",

    "message": "The request body is invalid. See error object `details` property for more info.",

    "code": "VALIDATION_FAILED",

    "details": [

      {

        "path": "",

        "code": "not",

        "message": "should NOT be valid",

        "info": {}

      }

    ]

  }

}
