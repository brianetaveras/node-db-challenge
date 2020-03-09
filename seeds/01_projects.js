exports.seed = async function(knex) {
	await knex("projects").insert([   
		{ name: "Start the sprint", description: "Project description homie", completed: false },
		{ name: "Finish the sprint", description: "Project description homie", completed: true },
	])
}