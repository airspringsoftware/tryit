# tryit
Document microservice

## Installation

**1. Clone this repo:**

```sh
git clone https://github.com/airspringsoftware/tryit.git demo
cd demo
```
**2. Make it your own:**

```sh
rm -rf .git && git init && npm init
```

> :information_source: This re-initializes the repo and sets up your NPM project.


**3. Install the dependencies:**

```sh
npm install
```

> You're done installing! 

## Demo Workflow


**4. Curl Example:**

```sh
curl -X GET -H "Content-Type: application/json" -H "Cache-Control: no-cache" -H "Postman-Token: d96c8d41-75cf-69ec-61c7-7466d1cc92be" "https://tryit.airspringsoftware.com:6001/marketing/api/overview.json?company=test&email=test@test.com&address=test%20company%20address&phone=555-555-5555"
```
> Replace company and email in the preceeding curl example

**5. Node example:**

```tryit.js
var options = { method: 'POST',
  url: 'https://tryit.airspringsoftware.com/marketing/api/overview.json',
  headers: 
   { 'postman-token': '432fb733-be44-4f4b-03d4-22d530587921',
     'cache-control': 'no-cache',
     'content-type': 'application/json' },
  body: 
   { company: 'airSpring Software',
     email: 'sales@airspringsoftware.com',
     address: '2365 Harrodsburg Rd 2365 Harrodsburg Rd, Lexington, KY 40504',
     phone: '(859) 309-6347' },
  json: true };
```
> Replace company and email in the body portion of the request

**6. Run Node example:**
```sh
node tryit.js
```

---


## License

MIT

