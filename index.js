var Converter = require("csvtojson").Converter
var jsonConverter = new Converter({
	noheader: true,
	headers: ["url"]
})
var path = require("path")

var output = {
	valid: [],
	invalid: []
}

jsonConverter.fromFile(path.join(__dirname, process.argv[2]), function(err, result) {
	result.forEach(function(r) {
		var bucket = /^\/(ref|((aponline|reuters)\/)?\d{4}\/\d{2}\/\d{2})(\/([^\/])+){0,2}\/([^\/\.]+)\.html$/.test(r.url) ? "valid" : "invalid"
		output[bucket].push(r.url)
	})

	console.log("INVALID URLS")
	output.invalid.forEach(function(i) {
		console.log(i)
	})

	console.log("\n\n")

	console.log("VALID URLS")
	output.valid.forEach(function(i) {
		console.log(i)
	})

	console.log("\n\n")

	console.log("TOTAL VALID: " + output.valid.length)
	console.log("TOTAL INVALID: " + output.invalid.length)
})
