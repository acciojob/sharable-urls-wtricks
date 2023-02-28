// your code here
document.querySelector("form").addEventListener("submit", (event) => {
	event.preventDefault();

	let name = document.querySelector("#name").value;
	let year = document.querySelector("#year").value;

	document.querySelector("h3").textContent=`https://localhost:8080/?name=${name}&year=${year}`;
});