const db = require('../data/config');


class ProjectModel{
    async getAll(){
        return await db.table('projects')
    };

    async getById(id){

        const projects = await db.table("projects")
        .where('projects.id', id)
			
        return projects
    }

    async insert(data){
        return await db('projects')
        .insert({
            name: data.name,
            description: data.description,

        })
    }
}


module.exports = new ProjectModel()