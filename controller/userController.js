const User = require("../model/userModel");

// Create a new Person

exports.newPerson = async (req, res) => {
  try {
    const { Name, Age, Email } = req.body;
    // validate input
    if (!(Name || Age || Email)) {
      return res.status(400).json({ error: "Invalid input provided" });
    }
    // create the user 
    const person = await User.create({
      Name,
      Age,
      Email,
    });
    // respond with a success message
    return res
      .status(200)
      .json({ message: `User created successfully`,person });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Fetch a person
exports.findPerson = async (req, res) => {
  try {
    const person = await User.findOne({ _id: req.params.user_id });
    return res.status(200).json(person);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// Update the detail of an existing person
exports.updatePerson = async (req, res) => {
  try {
    const updatedPerson = await User.findByIdAndUpdate(
      req.params.user_id,
      req.body,
      { new: true }
    );
    // Check if the person exists and has been updated
    if (!updatedPerson) {
      return res.status(404).json({ error: "Person not found" });
    }

    // Respond with the updated person object
    return res.status(200).json(updatedPerson);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// Delete an existing person
exports. deletePerson = async(req,res)=>{
    try {
        const removedPerson = await User.findByIdAndRemove({_id:req.params.user_id});
        // Check if the person exists and has been removed
    if (!removedPerson) {
        return res.status(404).json({ error: 'Person not found' });
      }
  
      // Respond with a success message
      return res.status(200).json({ message: 'Person deleted successfully' });
    } catch (error) {
        return res.status(500).json(error.message);

    }
}
