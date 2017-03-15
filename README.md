# tryit
document microservice

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
