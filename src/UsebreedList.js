import { useState, useEffect } from 'react';

const localCache = {};

export default function UseBreedList(animal) {
    const [breedList, setBreedList] = useState([]);
    const [status, setStatus] = useState("unloaded");

    useEffect(() => {
        if (!animal) {
            setBreedList([]);
        } else if (localCache[animal]) {
            setBreedList(localCache[animal])
        } else {
            requestBreedList();
        }

        async function requestBreedList() {
            setBreedList(breedList);
            setStatus("loading");

            const res = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`)
            const json = await res.json();
            localCache[animal] = json.breeds || [];
            setBreedList(localCache[animal]);
            setBreedList("loaded");
        }

    }, [animal]);

    return [breedList, status]
}

// custom hook. revisit this section!!!