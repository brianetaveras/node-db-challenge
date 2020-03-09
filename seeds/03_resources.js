exports.seed = async function(knex) {
	await knex("resources").insert([   
		{ name: "computer", description: "task description homie" },
		{ name: "keyboard", description: "task  description homie" },
	])
}