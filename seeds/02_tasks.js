exports.seed = async function(knex) {
	await knex("tasks").insert([   
		{ notes: "Start the sprint", description: "Project description homie" },
		{ notes: "Finish the sprint", description: "Project description homie" },
	])
}