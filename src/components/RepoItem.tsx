import React from 'react';


interface RepoListProps {
    data: any; // Adjust the type according to your data structure
}

function toggleFavorite(item: any) {

    const id = item.id;
    if (isFavorite(id)) {
        localStorage.removeItem(id);
        // @ts-ignore
        document.getElementById(id).setAttribute('class', 'fa-regular fa-star')
    } else {
        let data = {
            id: item.id,
            full_name: item.full_name,
        };
        localStorage.setItem(id, JSON.stringify(data));
        // @ts-ignore
        document.getElementById(id).setAttribute('class', 'fa-solid fa-star')
    }
}

function isFavorite(id: string) {
    return localStorage.getItem(id) !== null;
}

const RepoItem: React.FC<RepoListProps> = ({data}) => {

    return (
        <div className="d-flex list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1"><a href="#" target="blank">{data.full_name}</a> <sup><span
                    className="badge rounded-pill bg-secondary">Python</span></sup></h5>
                <button className="btn btn-primary"  onClick={() => {toggleFavorite(data)}}>
                    <i id={data.id} className={isFavorite(data.id) ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                 </button>
            </div>
            <div><p className="mb-1">dfdsfsdfsd</p></div>
            <div className="d-flex">
                <small><i className="fa-solid fa-star"></i> 111</small>
                &nbsp;&nbsp;
                <small><i className="fa-solid fa-eye"></i> 111</small>
                &nbsp;&nbsp;
                <small><i className="fa-solid fa-code-fork"></i> 11</small>
            </div>

        </div>
    )
        
};

export default RepoItem;