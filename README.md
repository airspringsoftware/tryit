# tryit
Document Microservice

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
curl -X GET -H "Content-Type: application/json" -H "Cache-Control: no-cache" "https://tryit.airspringsoftware.com:6001/marketing/api/overview.json?company=your_company_name&email=your_email_address&address=your_company_address&phone=your_phone_number"
```
> Replace company and email in the preceeding curl example

**5. Node tryit.js example:**

```js
var options = { method: 'POST',
  url: 'https://tryit.airspringsoftware.com/marketing/api/overview.json',
  headers: 
   { 'cache-control': 'no-cache',
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

