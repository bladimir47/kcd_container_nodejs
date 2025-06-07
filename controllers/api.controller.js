


exports.getEnviroments = (req, res, next) => {
    
    try {
        const data = process.env
        return res.status(200).send({KCD: data})
    } catch (error) {
        return res.status(400).send({KCD: "NOOOOOOOOO"})
    }
}