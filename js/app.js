const input = document.querySelector('#intervals');
const btns = document.querySelectorAll('input');
const cards = document.querySelectorAll('.activity-card__body');
let val = 'daily';
let prev = 'Yesterday';
// let activities;

console.log('cards: ', cards);

/* cards.forEach((card) => {
	// console.log('c:', card.firstElementChild.firstElementChild.innerText);
	// console.log('id: ', card.id);  // ta bort id i html om denna inte används
	const title = card.querySelector('.activity-card__title');
	const current = card.querySelector('.activity-card__current');
	const previous = card.querySelector('.activity-card__previous');
	console.log(title.innerText, current.innerText, previous.innerText);
}); */

input.addEventListener('change', selectValue);

function selectValue(e) {
	// console.log(this); // svekis 180
	val = e.target.value;
	// console.log('sV: ', val);
	loadData();
}

function loadData() {
	fetch('../data.json')
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			/* for (let i = 0; i < data.length; i++) {
				console.log(data[i].title, data[i].timeframes[val].current);
			} */
			// activities = data;
			/* for (let i = 0; i < data.length; i++) {
				console.log(data[i].title, data[i].timeframes[val].current);
			} */
			console.log(data);
			let arr = [];
			data.forEach((activity) => {
				const title = activity.title;
				// const timeframes = activity.timeframes[val];
				const cur = activity.timeframes[val].current;
				const pre = activity.timeframes[val].previous;
				arr.push({ title, cur, pre });
				// console.log(activity.title, activity.timeframes[val]);
			});

			console.log('arr: ', arr);
			console.log(arr.title);

			cards.forEach((card) => {
				const title = card.querySelector('.activity-card__title');
				const current = card.querySelector('.activity-card__current');
				const previous = card.querySelector('.activity-card__previous');
				console.log(title.innerText, current.innerText, previous.innerText);
				// const i = arr.findIndex((title)=> );
				let x = arr.find(function (act) {
					act['title'] == title.innerText;
				});
				console.log(x);
			});
		});
}
loadData();

//gör nytt object med bara en timeframe {'title': 'Work', 'current':5, 'previous': 7}

//https://www.javascripttutorial.net/javascript-dom/javascript-radio-button/

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

/*  
 Från traversy DOM array methods:
 anv filter() ? (rad 48)
 
 */
