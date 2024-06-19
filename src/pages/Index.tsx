import React from 'react';
import useStoreRepos from "../store/useStoreRepos";
import RepoList from "../components/RepoList";

const Index: React.FC = () => {
    const { repos, setRepos } = useStoreRepos();

    React.useEffect(() => {
        setRepos();
    }, [setRepos]);

    return (
        <div className="index_page">
            <div className="d-flex justify-content-between align-center">
                <RepoList repos={repos} />
            </div>
        </div>
    );
};

export default Index;
