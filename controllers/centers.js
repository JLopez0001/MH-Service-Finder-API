import Center from "../models/mentalHealthCenter.js";

//Gets all centers
export let getCenters = async (req, res) => {
  try {
    let centers = await Center.find();
    res.json(centers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

//Gets specific center based on id
export let getCenter = async (req, res) => {
  try {
    const { id } = req.params;
    const center = await Center.findById(id);

    //If a center is found then it will show in as JSON
    if (center) {
      return res.json(center);
    }
    res.status(404).json({ message: "Center not found" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

//Create a MH Center
export let createCenter = async (req, res) => {
  try {
    let newCenter = new Center(req.body);
    await newCenter.save();
    res.status(201).json(newCenter);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

//Update specific Center
export let updateCenter = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCenter = await Center.findByIdAndUpdate(id, req.body);
    console.log(id);
    res.status(201).json(updatedCenter);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

//Delete specific Center
export let deleteCenter = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Center.findByIdAndDelete(id);

    if (deleted) {
      return res.status(201).send("Center deleted");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
