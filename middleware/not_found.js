const notFound = (req , res) => {
    res.status(404).send("route does\'nt exist");
}

module.exports = notFound;