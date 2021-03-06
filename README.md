# tryit

Example service to demonstrate how airSpring Software creates and returns customized PDF documents (via POST).  The PDF generated from this service was designed and built using airSpring's Designer.

The airSpring low-code platform makes it easy for developers to build and run applications, API’s, and services to automate customer-facing forms and document  processes.

## Quick Start

**1. Clone and Setup:**

```sh
git clone https://github.com/airspringsoftware/tryit.git demo
cd demo
npm install
```

**2. Customize the Arguments:**

Open up `tryit.js` and make any changes to the `postParams` object.  Changing the
company and email address to your own will customize the generated PDF with
your own data.

## Demo Workflow

If you look at the `tryit.js` file you'll see all it's doing is making an HTTP POST request
and then downloading the PDF file from the path that's returned from the service.  You can
see the same results by using cURL to post data to our service.

**3. Curl Example:**

```sh
curl -X POST \
"https://tryit.airspringsoftware.com/marketing/api/overview.json" \
-H "Cache-Control: no-cache" \
-H "Content-Type: application/json" \
-d '{ "company": "Your-Company", "email": "Your-Email" }'
```

**4. Node tryit.js example:**

After you've made a few changes the the `postParams` object in `tryit.js` you
can run `node tryit.js` to run the demo.  This will post the params you've specified
to our demo service.  The PDF downloaded will include the data you've posted.


---
## License
MIT
