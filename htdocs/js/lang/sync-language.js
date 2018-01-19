var fs = require('fs');

fs.readFile('language-en.js', {encoding: 'UTF-8'}, function (err, data) {
  if (err) throw err;
  
  var files = [//'language-fr.js', 
				'language-he.js',
				//'language-ru.js',
				//'language-es.js',
				//'language-fa.js',
				'language-hu.js'
				//'language-pl.js',
				//'language-pt.js',
				//'language-tr.js',
				//'language-de.js',
				//'language-it.js'
				];

	files.forEach(function(item){
		fs.writeFile(item, data, {encoding: 'UTF-8'}, function (err) {
			if (err){
				throw err;
			}
			console.log(item + ' saved!');
		});
  });
});