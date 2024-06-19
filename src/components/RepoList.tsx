import React from 'react';
import RepoItem from "./RepoItem";
import '../css/RepoList.css'

interface RepoListProps {
    repos: any[]; // Adjust the type according to your data structure
}

const RepoList: React.FC<RepoListProps> = ({ repos }) => {
    return (
        <div className="list-group">
            {repos.map((repo, index) => (
               <RepoItem data={repo}/> // Adjust the rendering as needed
            ))}
        </div>
    );
};

export default RepoList;