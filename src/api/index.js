const express = require("express");
const issues = require("./issues.json");
const cors = require('cors');

const api =  express();
api.use(cors())

const HOST = "localhost";
const PORT = 8888;

// I left the original response of the issues.json to create an example of
//an adapter in the frontend side. A similar method could work for the endpoint.

api.get("/issues", (req, res) => {
  const { keywords } = req.query;
  if(keywords) {
    const filter = keywords.toLowerCase();
    const filteredRes = issues.filter(issue => issue.name.toLowerCase().includes(filter));
    res.status(200).json(filteredRes);
  } else {
    res.status(200).json(issues);
  }
})

api.get("/issue/:id", (req, res) => {
  const id = req.params.id;
  const filteredIssue = issues.find(issue => issue.id.toString() === id);
  if(filteredIssue) {
    res.status(200).json(filteredIssue);
  } else {
    res.status(404).json({ Error: "Not found"});
  }
})

api.listen(PORT, () => console.log(`API running at ${HOST}:${PORT}`));
