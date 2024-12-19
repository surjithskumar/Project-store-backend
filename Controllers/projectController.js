const projects = require('../Model/projectSchema');

// Add a Project
exports.addProjects = async (req, res) => {
    console.log("Inside add project");

    const { title, languages, overview, github, website } = req.body;
    const projectImage = req.file?.filename;
    const userId = req.payload;

    console.log(title, languages, overview, github, website, projectImage, userId);

    try {
        const existingProject = await projects.findOne({ github });

        if (existingProject) {
            return res.status(406).json({ error: "Project already exists" });
        }

        const newProject = new projects({
            title,
            languages,
            overview,
            github,
            website,
            projectImage,
            userId
        });

        await newProject.save();
        res.status(200).json(newProject);
    } catch (err) {
        console.error("Error while adding project:", err);
        res.status(500).json({ error: "Internal Server Error", details: err.message });
    }
};

// Get Home Projects
exports.getHomeProjects = async (req, res) => {
    console.log('Inside home projects function');
    try {
        const homeProjects = await projects.find().limit(3);
        res.status(200).json(homeProjects);
    } catch (error) {
        console.error("Error while fetching home projects:", error);
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};

// Get All Projects
exports.getAllProjects = async (req, res) => {
    console.log('Inside all projects function');
    try {
        const allProjects = await projects.find();
        res.status(200).json(allProjects);
    } catch (error) {
        console.error("Error while fetching all projects:", error);
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};

// Get User Projects
exports.getUserProjects = async (req, res) => {
    console.log('Inside user projects function');
    const userId = req.payload;
    try {
        const userProjects = await projects.find({ userId });
        res.status(200).json(userProjects);
    } catch (error) {
        console.error("Error while fetching user projects:", error);
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};