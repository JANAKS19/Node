const db = require('../db');


const insertUser = async (userData) => {
  userData.flag=1;
    const { flag,firstname,lastname ,city,pincode,contactno,email,citycode,isprovider,id ,password} = userData;
    try {
      // Call the stored procedure
      const result = await db.query('CALL public.manageusermaster($1, $2,$3,$4,$5,$6,$7,$8,$9,$9,$10)', [flag,firstname,lastname ,city,
        pincode,contactno,email,citycode,isprovider,password,id ]);
        return {
          statusCode: 200,
          body: {
            message: 'User inserted successfully',
            data: result.rows // Adjust this according to the actual result structure
          }
        };    } catch (error) {
      console.error('Error inserting user:', error);
      return {
        statusCode: 500,
        body: {
          message: 'Error inserting user',
          error: error.message // Provide more details if needed
        }
      };    }
};

const updateuser = async (userData) => {
  const { flag,firstname,lastname ,city,pincode,contactno,email,citycode,isprovider,id ,password} = userData;4
  userData.flag=2;
  try {
    // Call the stored procedure
    const result = await db.query('CALL public.manageusermaster($1, $2,$3,$4,$5,$6,$7,$8,$9,$9,$10)', [flag,firstname,lastname ,city,
      pincode,contactno,email,citycode,isprovider,password,id ]);
      return {
        statusCode: 200,
        body: {
          message: 'User inserted successfully',
          data: result.rows // Adjust this according to the actual result structure
        }
      };    } catch (error) {
    console.error('Error inserting user:', error);
    return {
      statusCode: 500,
      body: {
        message: 'Error inserting user',
        error: error.message // Provide more details if needed
      }
    };    }
};


const getAllCities = async () => {
  try {
    debugger;
    const result = await db.query('select * from public.all_cities '); // Adjust the query as needed
    return { success: true, data: result.rows };
  } catch (error) {
    return { success: false, message: 'Error fetching cities: ' + error.message };
  }
};

const getAllStates = async () => {
  try {
    debugger;
    const result = await db.query('SELECT * FROM public.all_states'); // Adjust the query as needed
    return { success: true, data: result.rows };
  } catch (error) {
    return { success: false, message: 'Error fetching cities: ' + error.message };
  }
};

const getUserById = async (userId) => {
  try {
    debugger;
    const result = await db.query('SELECT * from public."UserMaster" where "Id" = $1', [userId]); // Adjust the table and column names as needed
    return { success: true, data: result.rows[0] }; // Assuming there's only one user with the given ID
  } catch (error) {
    return { success: false, message: 'Error fetching user: ' + error.message };
  }
};


  
  module.exports = {
    insertUser,updateuser,getAllCities,getAllStates,getUserById
  };