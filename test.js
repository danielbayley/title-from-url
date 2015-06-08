var test = require("prova");
var title = require("./");

test('generate a title from url', function (t) {
  t.plan(6);
  t.equal(title('http://wikipedia.org'), 'Wikipedia');
  t.equal(title('https://en.wikipedia.org/wiki/Gezi'), 'Gezi - Wiki @ En, Wikipedia');
  t.equal(title('encrypted.google.com/search?q=foo&bar=qux'), 'Search (q:foo, bar:qux) @ Encrypted, Google');
  t.equal(title('azer.bike/f.o-o/bar.html'), 'Bar - F.o-o @ Azer');
  t.equal(title('http://ada.io'), 'Ada');
  t.equal(title('http://en.wikipedia.org/wiki/Foo_%28app%29'), 'Foo (app) - Wiki @ En, Wikipedia');
});
