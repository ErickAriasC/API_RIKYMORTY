import React, {useState} from 'react' 
import {Card} from './components/Card/Card'
const URL='https://rickandmortyapi.com/api/character';
import './App.css'

function App() {

  const [listCharacter, setListCharacter] = useState([]);

  const handleGetApi = async () => {
    try {
      const newCharacters = [];
      const response = await fetch(URL);
      const data = await response.json();
      const characters=data.results;

      for (let index = 0; index < characters.length; index++) {
        

        const newCharacter = {
          name: characters[index].name,
          image: characters[index].image,
          gender: characters[index].gender
        };
        newCharacters.push(newCharacter);
      }
      setListCharacter(newCharacters);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='app'>
      {listCharacter.map((element, index) => (
        <Card
          key={index}
          nameCharacter={element.name}
          imgCharacter={element.image}
          genderCharacter={element.gender}
        />
      ))}
      <button className='buttonGenerate' onClick={handleGetApi}>Generar Personaje</button>
    </div>
  );
}

export default App;

