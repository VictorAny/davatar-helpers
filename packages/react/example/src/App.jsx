import Davatar from '@davatar/react';
import { getDefaultProvider } from '@ethersproject/providers';
import Web3 from 'web3';

import './App.css';

const ethersProvider = getDefaultProvider('ropsten');
const web3Provider = new Web3(Web3.givenProvider);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Davatar size={120} provider={ethersProvider} address={'0x9B6568d72A6f6269049Fac3998d1fadf1E6263cc'} />
        <Davatar
          size={120}
          provider={web3Provider}
          address={'0x9B6568d72A6f6269049Fac3998d1fadf1E6263cc'}
          generatedAvatarType="blockies"
        />
        <Davatar size={120} address={'0x983110309620D911731Ac0932219af06091b6744'} generatedAvatarType="blockies" />
        <Davatar size={120} address={'0xb8c2C29ee19D8307cb7255e1Cd9CbDE883A267d5'} generatedAvatarType="blockies" />
        <Davatar
          size={120}
          address={'0x9B6568d72A6f6269049Fac3998d1fadf1E6263cc'}
          generatedAvatarType="blockies"
          style={{ borderRadius: 8 }}
        />
        <Davatar
          size={120}
          address={'0x9B6568d72A6f6269049Fac3998d1fadf1E6263cc'}
          defaultComponent={<h2>Loading...</h2>}
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
