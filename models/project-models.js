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
}


module.exports = new ProjectModel()