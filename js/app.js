const input = document.querySelector('#intervals');

const work = document.getElementById('work');
const play = document.getElementById('play');
const study = document.getElementById('study');
const exercise = document.getElementById('exercise');
const social = document.getElementById('social');
const selfcare = document.getElementById('self-care');

let val = 'daily';
let prevPeriod = 'Yesterday';

const cardContent = (act, cur, prevTime, prevPeriod) => {
	const pluralHours = (n) => {
		return n == 1 ? '' : 's';
	};
	return `<div class="activity-card__title-wrapper">
            <h2 class="activity-card__title">${act}</h2>
            <svg class="activity-card__dots">
              <use href="#ellipsis"></use>
            </svg>
          </div>
          <span class="activity-card__current">${cur}hr${pluralHours(
		cur
	)}</span>
          <span class="activity-card__previous">${prevPeriod} - ${prevTime}hr${pluralHours(
		prevTime
	)}</span>`;
};

input.addEventListener('change', selectValue);

function selectValue(e) {
	val = e.target.value;

	if (val == 'daily') {
		prevPeriod = 'Yesterday';
	} else if (val == 'weekly') {
		prevPeriod = 'Last Week';
	} else {
		prevPeriod = 'Last Month';
	}
	getData();
}

function makeCard(data) {
	data.forEach((activity) => {
		let title = activity.title;
		let current = activity.timeframes[val].current;
		let previous = activity.timeframes[val].previous;
		let act = '';
		// act = activity.title.replace(' ', '').toLowerCase(); // For some reason this didn't work for 'Self Care' so I had to make this ugly if-statment:
		if (activity.title == 'Self Care') {
			selfcare.innerHTML = cardContent(title, current, previous, prevPeriod);
		} else {
			act = activity.title.toLowerCase();
			this[act].innerHTML = cardContent(title, current, previous, prevPeriod);
		}
	});
}

async function getData() {
	const response = await fetch('./data.json');
	const data = await response.json();
	return makeCard(data);
}

getData();
