import Header from './Header';
import '../App.css';
import Button from 'react-bootstrap/Button'

function Adopt() {
    return (
        
        <div className='background'>
        <Header/>

        <div className="btn-container">
        <Button variant="outline-primary">Connect Web3</Button>{' '}

        </div>
        <div className='panel'>
        <h2>WHY</h2>
          <p>This project is an exploration of the ability to release tradable collectibles and record their ownership on the Ethereum blockchain. This feature of blockchain technology has been demonstrated by recent projects such as CryptoPunks. We have expanded on the idea and added a few novel, and what we think are exciting, features:</p>
       
        <h3>Mining off the chain</h3>
          <p>Instead of selling all of the MoonCats as the contract owner or giving all of the MoonCats away, we have given people the opportunity to find MoonCats by using their computers to generate a seed that hashes to an available and unique catId. This seed can then be submitted to the contract to rescue the corresponding MoonCat. The resulting MoonCat is initially owned by the Ethereum address that submitted it.</p>
          <p>An off chain algorithm, the MD5 checksum of which is stored in the contract, parses the catId into its unique corresponding MoonCat image. This allows you to verify that your catId corresponds to your MoonCat image.</p>
          <p>Additionally, the search seed is not known before the contract is activated. The search seed is generated based on the hash of the most recently mined block when a special activate function is called. This prevents the contract owners from using a known search seed to premine all of the MoonCats, and guarantees that the contract owners do not have a mining advantage over the rest of the community. Once the contract has been activated, it cannot be deactivated.</p>

        <h3>Procedural generation</h3>
          <p>There are over 4 billion unique MoonCats possible. However, only 25,600 MoonCats can be added to the contract. This combination of mining with procedural generation allows for a unique experience that cannot be predicted before the contract is launched. Rescuers have the power to choose whether they want specific MoonCats to become part of the contract or not.</p>
      
        <h3>Irrevocable Naming</h3>
          <p>MoonCats can be named, but they can only be named once. Owners have to decide whether they want to name their MoonCat or keep it unnamed. We think that this creates an interesting dynamic. Owners can leave their mark by being the first and only person to name a MoonCat. However, it is our guess that unnamed MoonCats will fetch a premium in the Adoption Center.</p>
      
      </div>
        </div>
    )
}

export default Adopt
