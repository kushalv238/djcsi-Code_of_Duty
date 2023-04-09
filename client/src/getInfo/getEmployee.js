import axios from 'axios';

const getData = async (data) => {
    try {
        const response = await axios.post('http://localhost:3600/employeeOf', data);
        const responseData = response.data;
        return responseData;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export default getData;