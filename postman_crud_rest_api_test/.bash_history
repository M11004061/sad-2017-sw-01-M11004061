{
	"variables": [],
	"info": {
		"name": "Restaurant CRUD REST API Test",
		"_postman_id": "78f8e870-aa6a-e4b3-d528-0cc260ab3ee8",
		"description": "",
		"schema": "https://schema.getpostman.com/json/collection/v2.0.0/collection.json"
	},
	"item": [
		{
			"name": "Call API GET All Restaurants",
			"event": [
				{
					"listen": "test",
					"script": {
						"type": "text/javascript",
						"exec": [
							"'Request Header'",
							"tests[\"Status code is 200\"] = responseCode.code === 200;"
						]
					}
				}
			],
			"request": {
				"url": "http://localhost:3000/api/restaurants",
				"method": "GET",
				"header": [],
				"body": {},
				"description": ""
			},
			"response": []
		},
		{
			"name": "Call API GET Single Restaurant",
			"event": [
				{
					"listen": "test",
					"script": {
						"type": "text/javascript",
						"exec": [
							"'Request Header'",
							"tests[\"Status code is 200\"] = responseCode.code === 200;"
						]
					}
				}
			],
			"request": {
				"url": "http://localhost:3000/api/restaurant/58fb60a52a9ed326ecd0baca",
				"method": "GET",
				"header": [],
				"body": {},
				"description": ""
			},
			"response": []
		},
		{
			"name": "Call API POST Save Restaurant",
			"event": [
				{
					"listen": "test",
					"script": {
						"type": "text/javascript",
						"exec": [
							"'Request Header'",
							"tests[\"Status code is 200\"] = responseCode.code === 200;"
						]
					}
				}
			],
			"request": {
				"url": "http://localhost:3000/api/restaurant",
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json",
						"description": ""
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\"address\":{\"building\":\"469\",\"coord\":[-73.961704,40.662942],\"street\":\"Flatbush Avenue\",\"zipcode\":\"11225\"},\"borough\":\"Brooklyn\",\"cuisine\":\"Hamburgers\",\"grades\":[{\"date\":\"2014-12-30T00:00:00.000Z\",\"grade\":\"A\",\"score\":8},{\"date\":\"2014-07-01T00:00:00.000Z\",\"grade\":\"B\",\"score\":23},{\"date\":\"2013-04-30T00:00:00.000Z\",\"grade\":\"A\",\"score\":12},{\"date\":\"2012-05-08T00:00:00.000Z\",\"grade\":\"A\",\"score\":12}],\"name\":\"New API Test Restaurant\",\"restaurant_id\":\"301123400000\"}"
				},
				"description": ""
			},
			"response": []
		},
		{
			"name": "Call API DELETE Delete Restaurant",
			"event": [
				{
					"listen": "test",
					"script": {
						"type": "text/javascript",
						"exec": [
							"'Request Header'",
							"tests[\"Status code is 200\"] = responseCode.code === 200;"
						]
					}
				}
			],
			"request": {
				"url": "http://localhost:3000/api/restaurant/58f39f0dbc29bf4322e34892",
				"method": "DELETE",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json",
						"description": ""
					}
				],
				"body": {
					"mode": "raw",
					"raw": ""
				},
				"description": ""
			},
			"response": []
		},
		{
			"name": "Call API PUT Change Restaurant",
			"event": [
				{
					"listen": "test",
					"script": {
						"type": "text/javascript",
						"exec": [
							"'Request Header'",
							"tests[\"Status code is 200\"] = responseCode.code === 200;"
						]
					}
				}
			],
			"request": {
				"url": "http://localhost:3000/api/restaurant/58fb60a52a9ed326ecd0baca",
				"method": "PUT",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json",
						"description": ""
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\"address\":{\"building\":\"469\",\"coord\":[-73.961704,40.662942],\"street\":\"Flatbush Avenue\",\"zipcode\":\"11225\"},\"borough\":\"Brooklyn\",\"cuisine\":\"Hamburgers\",\"grades\":[{\"date\":\"2014-12-30T00:00:00.000Z\",\"grade\":\"A\",\"score\":8},{\"date\":\"2014-07-01T00:00:00.000Z\",\"grade\":\"B\",\"score\":23},{\"date\":\"2013-04-30T00:00:00.000Z\",\"grade\":\"A\",\"score\":12},{\"date\":\"2012-05-08T00:00:00.000Z\",\"grade\":\"A\",\"score\":12}],\"name\":\"New API Test Restaurant v3\",\"restaurant_id\":\"301123400000\"}"
				},
				"description": ""
			},
			"response": []
		}
	]
}