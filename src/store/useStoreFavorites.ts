import create from 'zustand';
import axios from "axios";

interface Repo {
    id: number,
    full_name: string
}

interface Repos {
    favorites: Repo[],
    setRepos: () => void
}

const useStoreFavorites = create<Repos>((set) => ({
    favorites: [],
    setRepos: async () => {

        let items = [];
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            // @ts-ignore
            let value = localStorage.getItem(key);
            if(value !== "true") {
                // @ts-ignore
                items.push(JSON.parse(value))
            }
        }


        //  let response = await axios.get("https://api.github.com/search/repositories?q=created:%3E2024-05-03&sort=stars&order=desc")

        set({ favorites: items });

    }
}));

export default useStoreFavorites;