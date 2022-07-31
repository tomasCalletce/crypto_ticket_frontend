import axios from 'axios';

const url = 'https://cryptotickets.herokuapp.com/companies';

const getCompany = async (address) => {
  let response = await axios.get(`${url}/${address}`);
  let data = await response.data;
  console.log(data);
  return data;
};

const getAllCompany = async () => {
  let response = await axios.get(url);
  let data = await response.data;
  console.log(data);
  return data;
};

const createCompany = async (eventInformation) => {
  let response = await axios.post(url, eventInformation);
  let data = await response.data;
  console.log(data);
  return data;
};

export { getCompany, getAllCompany, createCompany };
