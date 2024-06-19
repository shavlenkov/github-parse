import React from 'react';
import RepoList from "../components/RepoList";
import useStoreFavorites from "../store/useStoreFavorites";

const Favorites = () => {

    const  { favorites, setRepos } = useStoreFavorites();

    React.useEffect(() => {
        setRepos();
    }, [setRepos]);


    return (
        <div>
            <h2>Favorites</h2>
            <RepoList repos={favorites}/>
        </div>
    );
};

export default Favorites;