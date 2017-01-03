var Benchmark = require('benchmark')
var suite = new Benchmark.Suite;

// add tests
suite.add('Linier#test', function() {

})
.add('Binary#test', function() {

})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
//
.run({'async': false})
