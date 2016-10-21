define({ "api": [
  {
    "type": "get",
    "url": "/v2/status",
    "title": "Get status from all monitors",
    "version": "0.2.0",
    "name": "GetStatus",
    "group": "Status",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "statusAggregate",
            "description": "<p>List of status aggregates.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "statusAggregate.name",
            "description": "<p>Name of the aggregate.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "statusAggregate.type",
            "description": "<p>Type of aggregate</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "statusAggregate.status",
            "description": "<p>Array of statuses.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "statusAggregate.status.code",
            "description": "<p>Status code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "statusAggregate.status.message",
            "description": "<p>Status message</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "statusAggregate.status.time",
            "description": "<p>Observation date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"name\": \"Database Status\",\n        \"type\": 0\n        \"status\": [\n            {\n                \"code\": 0,\n                \"message\": \"Launchpad Database -> Connected\",\n                \"time\": \"2016-10-20T09:30:13.2447018-05:00\"\n            }\n        ]\n    },\n    {\n        \"name\": \"Http Endpoint Status\",\n        \"type\": 1\n        \"status\": [\n            {\n                \"code\": 0,\n                \"message\": \"Connected to http://www.google.com\",\n                \"time\": \"2016-10-20T08:44:45.0739773-05:00\"\n            },\n            {\n                \"code\": 1,\n                \"message\": \"Error processing http://thisisnotavalidurl.io -> The remote name could not be resolved: 'thisisnotavalidurl.io'\",\n                \"time\": \"2016-10-20T08:44:50.5613938-05:00\"\n            }\n        ]\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "Controllers/API/v2/StatusV2Controller.cs",
    "groupTitle": "Status",
    "sampleRequest": [
      {
        "url": "/api/v2/status"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/status",
    "title": "Get status from all monitors",
    "version": "0.1.0",
    "name": "GetStatus",
    "group": "Status",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "statusAggregate",
            "description": "<p>List of status aggregates.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "statusAggregate.name",
            "description": "<p>Name of the aggregate.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "statusAggregate.type",
            "description": "<p>Type of aggregate</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "statusAggregate.status",
            "description": "<p>Array of statuses.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "statusAggregate.status.code",
            "description": "<p>Status code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "statusAggregate.status.message",
            "description": "<p>Status message</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "statusAggregate.status.time",
            "description": "<p>Observation date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"name\": \"Database Status\",\n        \"type\": 0\n        \"status\": [\n            {\n                \"code\": 0,\n                \"message\": \"Launchpad Database -> Connected\",\n                \"time\": \"2016-10-20T09:30:13.2447018-05:00\"\n            }\n        ]\n    },\n    {\n        \"name\": \"Http Endpoint Status\",\n        \"type\": 1\n        \"status\": [\n            {\n                \"code\": 0,\n                \"message\": \"Connected to http://www.google.com\",\n                \"time\": \"2016-10-20T08:44:45.0739773-05:00\"\n            },\n            {\n                \"code\": 1,\n                \"message\": \"Error processing http://thisisnotavalidurl.io -> The remote name could not be resolved: 'thisisnotavalidurl.io'\",\n                \"time\": \"2016-10-20T08:44:50.5613938-05:00\"\n            }\n        ]\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "Controllers/API/v1/StatusController.cs",
    "groupTitle": "Status",
    "sampleRequest": [
      {
        "url": "/api/v1/status"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v2/status/:id",
    "title": "Get status by monitor type",
    "version": "0.2.0",
    "name": "GetStatusByType",
    "group": "Status",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Monitor type</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "statusAggregate",
            "description": "<p>List of status aggregates.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "statusAggregate.name",
            "description": "<p>Name of the aggregate.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "statusAggregate.type",
            "description": "<p>Type of aggregate</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "statusAggregate.status",
            "description": "<p>Array of statuses.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "statusAggregate.status.code",
            "description": "<p>Status code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "statusAggregate.status.message",
            "description": "<p>Status mesage</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "statusAggregate.status.time",
            "description": "<p>Observation date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"name\": \"Database Status\",\n        \"type\": 0,\n        \"status\": [\n            {\n                \"code\": 0,\n                \"message\": \"Launchpad Database -> Connected\",\n                \"time\": \"2016-10-20T09:30:13.2447018-05:00\"\n            }\n        ]\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "Controllers/API/v2/StatusV2Controller.cs",
    "groupTitle": "Status",
    "sampleRequest": [
      {
        "url": "/api/v2/status/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/status/:id",
    "title": "Get status by monitor type",
    "version": "0.1.0",
    "name": "GetStatusByType",
    "group": "Status",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Monitor type</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "statusAggregate",
            "description": "<p>List of status aggregates.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "statusAggregate.name",
            "description": "<p>Name of the aggregate.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "statusAggregate.type",
            "description": "<p>Type of aggregate</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "statusAggregate.status",
            "description": "<p>Array of statuses.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "statusAggregate.status.code",
            "description": "<p>Status code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "statusAggregate.status.message",
            "description": "<p>Status mesage</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "statusAggregate.status.time",
            "description": "<p>Observation date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"name\": \"Database Status\",\n        \"type\": 0,\n        \"status\": [\n            {\n                \"code\": 0,\n                \"message\": \"Launchpad Database -> Connected\",\n                \"time\": \"2016-10-20T09:30:13.2447018-05:00\"\n            }\n        ]\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "Controllers/API/v1/StatusController.cs",
    "groupTitle": "Status",
    "sampleRequest": [
      {
        "url": "/api/v1/status/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v2/widget",
    "title": "Create a new widget",
    "version": "0.2.0",
    "name": "CreateWidget",
    "group": "Widget",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the widget</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>Color of the widget</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "widget",
            "description": "<p>New widget</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "widget.name",
            "description": "<p>Name of the widget</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "widget.id",
            "description": "<p>ID of the widget</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "widgets.color",
            "description": "<p>Color of the widget</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 CREATED      \n{\n     \"id\": 70,\n     \"name\": \"Small Widget\",\n     \"color\": \"Magenta\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "Controllers/API/v2/WidgetV2Controller.cs",
    "groupTitle": "Widget",
    "sampleRequest": [
      {
        "url": "/api/v2/widget"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>The input did not pass the model validation.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400: Bad Request\n{\n    \"message\": \"The request is invalid.\",\n    \"modelState\": {\n        \"widget.Name\": [\n            \"A widget must have a name\"\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/v1/widget",
    "title": "Create a new widget",
    "version": "0.1.0",
    "name": "CreateWidget",
    "group": "Widget",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the widget</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "widget",
            "description": "<p>New widget</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "widget.name",
            "description": "<p>Name of the widget</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "widget.id",
            "description": "<p>ID of the widget</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 CREATED      \n{\n     \"id\": 70,\n     \"name\": \"Small Widget\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "Controllers/API/v1/WidgetController.cs",
    "groupTitle": "Widget",
    "sampleRequest": [
      {
        "url": "/api/v1/widget"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>The input did not pass the model validation.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400: Bad Request\n{\n    \"message\": \"The request is invalid.\",\n    \"modelState\": {\n        \"widget.Name\": [\n            \"A widget must have a name\"\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/v2/widget/:id",
    "title": "Delete a widget",
    "version": "0.2.0",
    "name": "DeleteWidget",
    "group": "Widget",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the widget which will be deleted</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204",
          "type": "json"
        }
      ]
    },
    "filename": "Controllers/API/v2/WidgetV2Controller.cs",
    "groupTitle": "Widget",
    "sampleRequest": [
      {
        "url": "/api/v2/widget/:id"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/v1/widget/:id",
    "title": "Delete a widget",
    "version": "0.1.0",
    "name": "DeleteWidget",
    "group": "Widget",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the widget which will be deleted</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204",
          "type": "json"
        }
      ]
    },
    "filename": "Controllers/API/v1/WidgetController.cs",
    "groupTitle": "Widget",
    "sampleRequest": [
      {
        "url": "/api/v1/widget/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v2/widget/:id",
    "title": "Get a widget",
    "version": "0.2.0",
    "name": "GetWidget",
    "group": "Widget",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>widget's unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the widget.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the widget.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>Color of the widget</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"id\": 3,\n   \"name\": \"Large Widget\"\n   \"color\": \"Green\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "WidgetNotFound",
            "description": "<p>The Widget with the requested id was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Widget with ID 33 not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "Controllers/API/v2/WidgetV2Controller.cs",
    "groupTitle": "Widget",
    "sampleRequest": [
      {
        "url": "/api/v2/widget/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/widget/:id",
    "title": "Get a widget",
    "version": "0.1.0",
    "name": "GetWidget",
    "group": "Widget",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>widget's unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the widget.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the widget.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"id\": 3,\n   \"name\": \"Large Widget\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "WidgetNotFound",
            "description": "<p>The Widget with the requested id was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Widget with ID 33 not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "Controllers/API/v1/WidgetController.cs",
    "groupTitle": "Widget",
    "sampleRequest": [
      {
        "url": "/api/v1/widget/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v2/widget",
    "title": "Get all widgets",
    "version": "0.2.0",
    "name": "GetWidgets",
    "group": "Widget",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "widgets",
            "description": "<p>List of widgets.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "widgets.name",
            "description": "<p>Name of the widget.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "widgets.id",
            "description": "<p>ID of the widget.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "widgets.color",
            "description": "<p>Color of the widget</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n    \"id\": 3,\n    \"name\": \"Large Widget\",\n    \"color\": \"Green\"\n },\n {\n    \"id\": 7,\n    \"name\": \"Medium Widget\",\n    \"color\": \"Blue\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "Controllers/API/v2/WidgetV2Controller.cs",
    "groupTitle": "Widget",
    "sampleRequest": [
      {
        "url": "/api/v2/widget"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/widget",
    "title": "Get all widgets",
    "version": "0.1.0",
    "name": "GetWidgets",
    "group": "Widget",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "widgets",
            "description": "<p>List of widgets.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "widgets.name",
            "description": "<p>Name of the widget.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "widgets.id",
            "description": "<p>ID of the widget.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n    \"id\": 3,\n    \"name\": \"Large Widget\"\n },\n {\n    \"id\": 7,\n    \"name\": \"Medium Widget\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "Controllers/API/v1/WidgetController.cs",
    "groupTitle": "Widget",
    "sampleRequest": [
      {
        "url": "/api/v1/widget"
      }
    ]
  },
  {
    "type": "put",
    "url": "/v2/widget",
    "title": "Update an existing widget",
    "version": "0.2.0",
    "name": "UpdateWidget",
    "group": "Widget",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the widget</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the widget</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>Coor of the widget</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "widget",
            "description": "<p>Updated widget</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "widget.name",
            "description": "<p>Name of the widget</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "widget.id",
            "description": "<p>ID of the widget</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "widgets.color",
            "description": "<p>Color of the widget</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"id\": 3,\n   \"name\": \"Large Widget\"\n   \"color\": \"Green\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "WidgetNotFound",
            "description": "<p>The Widget with the requested id was not found.</p>"
          }
        ],
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>The input did not pass the model validation.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Widget with ID 33 not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400: Bad Request\n{\n    \"message\": \"The request is invalid.\",\n    \"modelState\": {\n        \"widget.Name\": [\n            \"A widget must have a name\"\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "Controllers/API/v2/WidgetV2Controller.cs",
    "groupTitle": "Widget",
    "sampleRequest": [
      {
        "url": "/api/v2/widget"
      }
    ]
  },
  {
    "type": "put",
    "url": "/v1/widget",
    "title": "Update an existing widget",
    "version": "0.1.0",
    "name": "UpdateWidget",
    "group": "Widget",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the widget</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the widget</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "widget",
            "description": "<p>Updated widget</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "widget.name",
            "description": "<p>Name of the widget</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "widget.id",
            "description": "<p>ID of the widget</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "WidgetNotFound",
            "description": "<p>The Widget with the requested id was not found.</p>"
          }
        ],
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>The input did not pass the model validation.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Widget with ID 33 not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400: Bad Request\n{\n    \"message\": \"The request is invalid.\",\n    \"modelState\": {\n        \"widget.Name\": [\n            \"A widget must have a name\"\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "Controllers/API/v1/WidgetController.cs",
    "groupTitle": "Widget",
    "sampleRequest": [
      {
        "url": "/api/v1/widget"
      }
    ]
  }
] });
