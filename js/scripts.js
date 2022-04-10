document.addEventListener('DOMContentLoaded', function () {
	var hidePeopleButton = document.getElementById('hidePeople');
	var showPeopleButton = document.getElementById('showPeople');

	hidePeopleButton.addEventListener('click', hidePeople);
	showPeopleButton.addEventListener('click', showPeople);
});

function hidePeople(event) {
	var peopleGrid = document.getElementById('peopleGrid');
	peopleGrid.style.display = 'none';
}

function showPeople(event) {
	var peopleGrid = document.getElementById('peopleGrid');
	peopleGrid.style.display = 'flex';
}