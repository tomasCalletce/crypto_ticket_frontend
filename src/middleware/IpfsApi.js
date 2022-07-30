import React from 'react';
import { IpfsClient } from 'ipfs-http-client';
import toBuffer from 'it-to-buffer';

function IpfsApi() {
  const ipfs = IpfsClient({ host: 'ipfs.infura.io', port: '5001', protocol: 'https' });
  const [eventHash, setEventHash] = React.useState('');

  const run = async (eventInformation) => {
    let results = [];

    for await (let result of ipfs.add(eventInformation)) {
      results.push(result);
    }
    console.log(results[0].cid.string); // hash value
    setEventHash(results[0].cid.string);
    const fileContents = await toBuffer(ipfs.cat(eventHash));
    console.log(fileContents);
  };

  const fileSelector = (eventInformation) => {
    run(eventInformation);
  };

  return {
    fileSelector,
    eventHash,
  };
}

export default IpfsApi;
