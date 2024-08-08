const userService = require('../Services/userService');

const createUser = async (req, res) => {
    try {

        debugger;
      const userData = req.body;
      await userService.insertUser(userData);
      res.status(res.statusCode).json({message: res.body.message, // Access the message
      data: res.body.data // Optionally include other data
    });
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(401).json({ message: error.message});
    }
};

const updateuser = async (req, res) => {
  try {

      debugger;
    const userData = req.body;
    await userService.updateuser(userData);
    res.status(res.statusCode).json({message: res.body.message, // Access the message
    data: res.body.data // Optionally include other data
  });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(401).json({ message: error.message});
  }
};

const getAllCities = async (req, res) => {
  try {
    debugger;
    const cities = await userService.getAllCities();
    res.status(200).json({
      message: 'Cities fetched successfully',
      data: cities
    });
  } catch (error) {
    console.error('Error fetching cities:', error);
    res.status(500).json({ 
      message: 'Error fetching cities', 
      error: error.message 
    });
  }
};

const getAllStates = async (req, res) => {
  try {
    debugger;
    const States = await userService.getAllStates();
    res.status(200).json({
      message: 'States fetched successfully',
      data: States
    });
  } catch (error) {
    console.error('Error fetching States:', error);
    res.status(500).json({ 
      message: 'Error fetching States', 
      error: error.message 
    });
  }
};

const getUserById = async (req, res) => {
  try {
    debugger;
    const userId = req.params.id; // Assuming the ID is passed as a URL parameter
    const user = await userService.getUserById(userId);
    res.status(200).json({
      message: 'User fetched successfully',
      data: user
    });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ 
      message: 'Error fetching user', 
      error: error.message 
    });
  }
};


  
  module.exports = {
    createUser,updateuser,getAllCities,getAllStates,getUserById
  };