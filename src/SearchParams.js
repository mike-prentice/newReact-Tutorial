import { useState, useEffect, useContext } from "react";
import useBreedList from './useBreedList';
import Results from './Results';
import ThemeContext from './ThemeContext';

const ANIMALS = ["rabbit", "reptile", "bird", "cat", "dog"];

const SearchParams = () => {
    // const location = "Seattle, WA";
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [breeds] = useBreedList(animal);
  const [pets, setPets] = useState([]);
  const [theme, setTheme] = useContext(ThemeContext);

  // console.log(location);
    useEffect(() => {
        requestPets();
    }, []);

    async function requestPets() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        const json = await res.json();

        setPets(json.pets);
    }

  return (
    <div className="search-params">
          <form onSubmit={(e) => {
              e.preventDefault();
          requestPets();
      }}>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          ></input>
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
            onBlur={(e) => {
              setBreed(e.target.value);
            }}
          >
            <option />
            {breeds.map((allbreeds) => (
              <option key={allbreeds} value={allbreeds}>
                {allbreeds}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="theme">
          Theme
          <select
            value={theme}
            onChange={(e) => { setTheme(e.target.value); }}
            onBlur={(e) => { setTheme(e.target.value) }}
          >
            <option value="peru">Peru</option>
            <option value="darkblue">Dark Blue</option>
            <option value="orange">Orange</option>
            <option value="green">Green</option>
            </select>
          
        </label>
        <button style={{backgroundColor: theme}}>Submit</button>
          </form>
          <Results pets={pets}/>
    </div>
  );
};

export default SearchParams;
