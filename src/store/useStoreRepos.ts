import create from 'zustand';
import axios from "axios";

interface Repo {
    id: number,
    full_name: string
}

interface Repos {
    repos: Repo[],
    setRepos: () => void
}

const useStoreRepos = create<Repos>((set) => ({
    repos: [],
    setRepos: async () => {

      //  let response = await axios.get("https://api.github.com/search/repositories?q=created:%3E2024-05-03&sort=stars&order=desc")

        set({ repos: [
                {id: 1, full_name: "a"},
                {id: 2, full_name: "b"},
                {id: 3, full_name: "c"},
                {id: 4, full_name: "d"},
                {id: 5, full_name: "e"},
                {id: 6, full_name: "f"},
                {id: 7, full_name: "dsasda"},
            ]});

    }
}));

export default useStoreRepos;