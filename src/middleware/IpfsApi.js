import { create } from 'ipfs-http-client';

const addToIpsf = async (eventIfno, state) => {
  const eventInfoString = JSON.stringify(eventIfno);
  const client = create('https://ipfs.infura.io:5001/api/v0');
  try {
    const created = await client.add(eventInfoString);
    state(created.path);
  } catch (error) {
    console.log(error.message);
  }
};
const getIpsf = async (path) => {
  let response = await fetch(`https://ipfs.infura.io/ipfs/${path}`);
  let data = await response.json();
  return data;
};

export { addToIpsf, getIpsf };
