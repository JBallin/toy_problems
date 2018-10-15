# Sommelier Server

Use the provided `wines.csv` file to dynamically return information as described in the tests. You will need to make the following routes:

* GET /wines --> Returns all wines  
* GET /wines?location=[location] --> Returns all wines where the location is equal to `[location]`
* GET /wines/:id --> Return a single wine that has an id of `:id`

To read in the CSV, this project makes use of [Papa Parse](http://papaparse.com/). The code required to read in the CSV is included for you.

## Example Responses

Your returned data list should look like this:

```
{
  data: [{
    "id": 1,
    "firstAttribute": "firstValue",
    "secondAttribute": "secondValue"
  },{
    "id": 2,
    "firstAttribute": "firstValue",
    "secondAttribute": "secondValue"
  }]
}
```

Your returned data item should look like this:

```
{
  data: {
    "id": 1,
    "firstAttribute": "firstValue",
    "secondAttribute": "secondValue"
  }
}
```

## Setup

1. Fork and clone this repository
1. Run `npm install` or `yarn`
1. Run the tests with `npm test`
1. Run the server in development mode with `npm run dev` or run it in production mode with `npm start`
