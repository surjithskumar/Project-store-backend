const projects = require('../Model/projectSchema');

// Add projects
exports.addProjects = async (req, res) => {
    console.log("Inside add project");

    const { title, languages, overview, github, website } = req.body;
    const projectImage = req.file?.filename; // Use optional chaining in case req.file is undefined
    const userId = req.payload; // Assuming this is added through middleware

    console.log(title, languages, overview, github, website, projectImage, userId);

    try {
        // Check if a project with the same GitHub link already exists
        const existingProject = await projects.findOne({ github });

        if (existingProject) {
            return res.status(406).json("Project already exists");
        }

        // Create a new project
        const newProject = new projects({
            title,
            languages,
            overview,
            github,
            website,
            projectImage,
            userId
        });

        // Save the new project to the database
        await newProject.save();

        // Respond with the newly created project
        res.status(200).json(newProject);
    } catch (err) {
        console.error("Error while adding project:", err);
        res.status(500).json({ error: "Internal Server Error", details: err.message });
    }
};