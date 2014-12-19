exports.showDatabasesQuery = {
  "fields": [
    {
      "catalog": "def",
      "charsetNr": 33,
      "db": "information_schema",
      "decimals": 0,
      "flags": 1,
      "length": 192,
      "name": "Database",
      "orgName": "SCHEMA_NAME",
      "orgTable": "SCHEMATA",
      "protocol41": true,
      "table": "SCHEMATA",
      "type": 253,
      "zeroFill": false
    }
  ],
  "rows": [
    {
      "Database": "information_schema"
    },
    {
      "Database": "build_api"
    },
    {
      "Database": "dev.typeform_analytics"
    },
    {
      "Database": "dev.typeform_backend"
    },
    {
      "Database": "dev.typeform_backend_acl"
    },
    {
      "Database": "dev.typeform_logs"
    },
    {
      "Database": "dev.typeform_result_storage"
    },
    {
      "Database": "dev.typeform_results"
    },
    {
      "Database": "mysql"
    },
    {
      "Database": "performance_schema"
    },
    {
      "Database": "test.typeform_analytics"
    },
    {
      "Database": "test.typeform_backend"
    },
    {
      "Database": "test.typeform_backend_acl"
    },
    {
      "Database": "test.typeform_logs"
    },
    {
      "Database": "test.typeform_results"
    },
    {
      "Database": "typeform-2014"
    },
    {
      "Database": "volhelp.api"
    }
  ]
}

exports.useDatabaseQuery = {
  "rows": {
    "affectedRows": 0,
    "changedRows": 0,
    "fieldCount": 0,
    "insertId": 0,
    "message": "",
    "protocol41": true,
    "serverStatus": 2,
    "warningCount": 0
  }
}

exports.showTablesQuery = {
  "fields": [
    {
      "catalog": "def",
      "charsetNr": 33,
      "db": "information_schema",
      "decimals": 0,
      "flags": 1,
      "length": 192,
      "name": "Tables_in_build_api",
      "orgName": "TABLE_NAME",
      "orgTable": "TABLE_NAMES",
      "protocol41": true,
      "table": "TABLE_NAMES",
      "type": 253,
      "zeroFill": false
    }
  ],
  "rows": [
    {
      "Tables_in_build_api": "configurations"
    },
    {
      "Tables_in_build_api": "fields"
    },
    {
      "Tables_in_build_api": "forms"
    },
    {
      "Tables_in_build_api": "logic_jump_answers"
    },
    {
      "Tables_in_build_api": "logic_jumps"
    },
    {
      "Tables_in_build_api": "schema_migrations"
    }
  ]
}

exports.selectAllFromQuery = {
  "fields": [
    {
      "catalog": "def",
      "charsetNr": 63,
      "db": "build_api",
      "decimals": 0,
      "flags": 16899,
      "length": 11,
      "name": "id",
      "orgName": "id",
      "orgTable": "forms",
      "protocol41": true,
      "table": "forms",
      "type": 3,
      "zeroFill": false
    },
    {
      "catalog": "def",
      "charsetNr": 33,
      "db": "build_api",
      "decimals": 0,
      "flags": 4097,
      "length": 765,
      "name": "title",
      "orgName": "title",
      "orgTable": "forms",
      "protocol41": true,
      "table": "forms",
      "type": 253,
      "zeroFill": false
    },
    {
      "catalog": "def",
      "charsetNr": 33,
      "db": "build_api",
      "decimals": 0,
      "flags": 16388,
      "length": 765,
      "name": "uid",
      "orgName": "uid",
      "orgTable": "forms",
      "protocol41": true,
      "table": "forms",
      "type": 253,
      "zeroFill": false
    },
    {
      "catalog": "def",
      "charsetNr": 63,
      "db": "build_api",
      "decimals": 0,
      "flags": 0,
      "length": 11,
      "name": "design",
      "orgName": "design",
      "orgTable": "forms",
      "protocol41": true,
      "table": "forms",
      "type": 3,
      "zeroFill": false
    },
    {
      "catalog": "def",
      "charsetNr": 63,
      "db": "build_api",
      "decimals": 0,
      "flags": 4225,
      "length": 19,
      "name": "created_at",
      "orgName": "created_at",
      "orgTable": "forms",
      "protocol41": true,
      "table": "forms",
      "type": 12,
      "zeroFill": false
    },
    {
      "catalog": "def",
      "charsetNr": 63,
      "db": "build_api",
      "decimals": 0,
      "flags": 4225,
      "length": 19,
      "name": "updated_at",
      "orgName": "updated_at",
      "orgTable": "forms",
      "protocol41": true,
      "table": "forms",
      "type": 12,
      "zeroFill": false
    }
  ],
  "rows": [
    {
      "created_at": {},
      "design": null,
      "id": 1,
      "title": "Hello Title",
      "uid": "EEILQq8Q",
      "updated_at": {}
    },
    {
      "created_at": {},
      "design": null,
      "id": 2,
      "title": "Hello World",
      "uid": "K5xriEzQ",
      "updated_at": {}
    },
    {
      "created_at": {},
      "design": null,
      "id": 3,
      "title": "New Form",
      "uid": "xSgroae2",
      "updated_at": {}
    },
    {
      "created_at": {},
      "design": null,
      "id": 4,
      "title": "New Form",
      "uid": "9xkWgl-A",
      "updated_at": {}
    },
    {
      "created_at": {},
      "design": null,
      "id": 5,
      "title": "New Form",
      "uid": "F-ZiQItx",
      "updated_at": {}
    },
    {
      "created_at": {},
      "design": null,
      "id": 6,
      "title": "New Form",
      "uid": "DtJhxY2l",
      "updated_at": {}
    },
    {
      "created_at": {},
      "design": null,
      "id": 7,
      "title": "New Form",
      "uid": "RRTN5wKo",
      "updated_at": {}
    },
    {
      "created_at": {},
      "design": null,
      "id": 8,
      "title": "New Form",
      "uid": "FGvvpfWV",
      "updated_at": {}
    },
    {
      "created_at": {},
      "design": null,
      "id": 9,
      "title": "New Form",
      "uid": "AdJEPV8Z",
      "updated_at": {}
    },
    {
      "created_at": {},
      "design": null,
      "id": 10,
      "title": "New Form",
      "uid": "xIue3Udq",
      "updated_at": {}
    },
    {
      "created_at": {},
      "design": null,
      "id": 11,
      "title": "New Form",
      "uid": "MRo2h-8F",
      "updated_at": {}
    },
    {
      "created_at": {},
      "design": null,
      "id": 12,
      "title": "New Form",
      "uid": "g5FAK7gW",
      "updated_at": {}
    },
    {
      "created_at": {},
      "design": null,
      "id": 13,
      "title": "New Form",
      "uid": "dMOWoIbV",
      "updated_at": {}
    },
    {
      "created_at": {},
      "design": null,
      "id": 14,
      "title": "New Form",
      "uid": "nJJWXNvN",
      "updated_at": {}
    },
    {
      "created_at": {},
      "design": null,
      "id": 15,
      "title": "New Form",
      "uid": "qu0zaa0d",
      "updated_at": {}
    },
    {
      "created_at": {},
      "design": null,
      "id": 16,
      "title": "New Form",
      "uid": "6UXsUgSg",
      "updated_at": {}
    },
    {
      "created_at": {},
      "design": null,
      "id": 17,
      "title": "New Form",
      "uid": "pzTNFBU6",
      "updated_at": {}
    },
    {
      "created_at": {},
      "design": null,
      "id": 18,
      "title": "New Form",
      "uid": "jOGmyOWu",
      "updated_at": {}
    }
  ]
}
