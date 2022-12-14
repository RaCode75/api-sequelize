import { Project } from "../models/Project.js"

export const getProjects = async (req, res) => {
    try{
        const projects = await Project.findAll()
        res.json(projects)
    } catch(error) {
        return res.status(500).json({message: error.message});
    }   
}


    export const createProject = async (req, res) => {
        try{
        const {name, priority, description} = req.body
    
        const newProject = await Project.create({
            name,
            description,
            priority
        })        
        res.json(newProject)        
    }catch(error){
        return res.status(500).json({message: error.message});
        }
    }

