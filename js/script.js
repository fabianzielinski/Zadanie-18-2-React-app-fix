var movies = [
	{
		id : 1,
		title : 'Harry Potter',
		desc : 'film o czarodzieju',
		src: './images/potter.jpg' 
	},
	{
		id : 2,
		title : 'Król lew',
		desc : 'film o królu sawanny',
		src: './images/lion.jpeg'
	},
	{
		id : 3,
		title : 'Shrek',
		desc : 'film o zielonym ogrze',
		src: './images/shrek.jpg'
	},
	{
		id : 4,
		title : 'Król lew',
		desc : 'film o królu sawanny',
		src: './images/lion.jpeg'
	}
];

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id}, 
			React.createElement('h2', {}, movie.title),
			React.createElement('p', {}, movie.desc),
			React.createElement('img', {src: movie.src, alt: movie.title}),
	);
});

var element = 
	React.createElement('div', {}, 
		React.createElement('h1', {}, 'Lista filmów :'),
		React.createElement('ul', {}, moviesElements)
	);
ReactDOM.render(element, document.getElementById('app'));