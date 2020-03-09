const db = require('../data/config');


class ProjectModel{
    async getAll(){
        return await db.table('resources')
    };

    async insert(data){
        return await db('resources')
        .insert({
            name: data.name,
            description: data.description,

        })
    }
}


module.exports = new ProjectModel()