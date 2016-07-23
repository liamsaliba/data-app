var people = [];

$('#input-id-btn').click(function(){
	submit($('#input-id').val()); // uses value entered in text field
});

$("#input-id-random").click(function(){
	Math.seedrandom();
	submit(Math.floor(Math.random() * 100000000000));
});

var Person = function (id) {
	this.num = people.length + 1;
	this.id = id;

	Math.seedrandom(this.id);
	//generate sex
	var probability =  [{weight:0.5, result:"M", age:
							{}}, 
						{weight:0.5, result:"F"}];
	this.sex = getRandom(probability);

	this.age = Math.floor(Math.random() * 100);

	//TODO
	this.firstName = "John";
	this.lastName = "Doe";
	this.religion = "Athiest";
	this.race = "Caucasian";
	this.toString = function() {
		return "[" + this.id + "] " + this.firstName + " " + this.lastName + ", aged " + this.age;
	};

	console.log("Person, " + this.toString() + " created.");
};

// weights and results assumed to be equal length
// sum of weights should be 1 (it's probability)
// weights correspond to results
function getRandom(probability){
	var random = Math.random(),
		sum = 0,
		lastIndex = probability.length - 1;

		// iterate throguh weights array
		for (var i=0; i < lastIndex; i++){
			sum += probability[i].weight;
			if (random < sum) {
				return probability[i].result;
			}
		}

		return probability[lastIndex].result;
}

function submit(id){
	$("#input-id").val(id);
	$("#output").removeClass("hidden");

	people[people.length] = new Person(id);
	log();
}

// pushes output
function log(){
	$("#output-table-body")
		.append($("<tr>") // append row
			.append($("<td>") // #
				.text(people[people.length - 1].num)
			)
			.append($("<td>") // ID
				.text(people[people.length - 1].id)
			)
			.append($("<td>") // First
				.text(people[people.length - 1].firstName)
			)
			.append($("<td>") // Last
				.text(people[people.length - 1].lastName)
			)
			.append($("<td>") // age
				.text(people[people.length - 1].age)
			)
			.append($("<td>") // sex
				.text(people[people.length - 1].sex)
			)
			.append($("<td>") // religion
				.text(people[people.length - 1].religion)
			)
			.append($("<td>") // race
				.text(people[people.length - 1].race)
			)

		);
}