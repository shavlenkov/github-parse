class AllRepositories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        var realDate = new Date()

        var dateWeekAgo = realDate.setDate(realDate.getDate() - 7);

        let date = realDate.toISOString()

        fetch(`https://api.github.com/search/repositories?q=created:>${date}&sort=stars&order=desc`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    add(item) {
        let data = {
            id: item.id,
            name: item.name,
            descr: item.description,
            url: item.html_url,
            stars: item.stargazers_count,
            watchers: item.watchers_count,
            forks: item.forks_count
        }

        localStorage.setItem(item.id, JSON.stringify(data))
    }

    render() {
        const { isLoaded, items } = this.state;

        let loading = document.getElementById("loading");

        if (!isLoaded) {
            loading.setAttribute("style", "display: block")
        } else {
            loading.setAttribute("style", "display: none")
        }

        return (
            <div class="list-group">
                {
                    items.map(item => (
                        <div  className="list-group-item list-group-item-action flex-column align-items-start">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1"><a href={item.html_url} target="blank">{item.name}</a></h5>
                                <button onClick={ () => this.add(item) } class="btn btn-primary">
                                    <i className="fa-regular fa-star"></i>
                                </button>
                            </div>
                            <p className="mb-1">{item.description}</p>
                            <small><i className="fa-solid fa-star"></i> {item.stargazers_count}</small>
                            &nbsp;&nbsp;
                            <small><i className="fa-solid fa-eye"></i> {item.watchers_count}</small>
                            &nbsp;&nbsp;
                            <small><i className="fa-solid fa-code-fork"></i> {item.forks_count}</small>
                        </div>
                    ))
                }
            </div>
        );
    }
}

class SavedRepositories extends React.Component {

    delete(name) {
        localStorage.removeItem(name);
        window.location.reload();
    }

    render() {

        let loading = document.getElementById("loading");
        loading.setAttribute("style", "display: none")

        var savedRepositories = []

        for (let i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            savedRepositories.push(JSON.parse(localStorage.getItem(key)));
        }

        if(savedRepositories.length == 0) {
            return (<h3>Здесь пока-что нет сохраненных репозиториев</h3>);
        } else {
            return (
                <div class="list-group">
                    {
                        savedRepositories.map(item => (
                            <div  className="list-group-item list-group-item-action flex-column align-items-start">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1"><a href={item.url} target="blank">{item.name}</a></h5>
                                    <button onClick={() => this.delete(item.id)} className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>
                                </div>
                                <p className="mb-1">{item.desc}</p>
                                <small><i className="fa-solid fa-star"></i> {item.stars}</small>
                                &nbsp;&nbsp;
                                <small><i className="fa-solid fa-eye"></i> {item.watchers}</small>
                                &nbsp;&nbsp;
                                <small><i className="fa-solid fa-code-fork"></i> {item.forks}</small>
                            </div>
                        ))
                    }
                </div>
            )
        }

    }

}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.showSavedRepositories = this.showSavedRepositories.bind(this);
        this.showAllRepositories = this.showAllRepositories.bind(this);
        this.state = {status: false};
    }

    showSavedRepositories() {
        this.setState({status: true});
    }

    showAllRepositories() {
        this.setState({status: false});
    }

    render() {
        const status = this.state.status;
        let button;
        let list;

        if (status) {
            button = <button class="btn btn-danger" onClick={this.showAllRepositories}><i className="fa-solid fa-arrow-left"></i> Назад</button>;
            list = <SavedRepositories/>
        } else {
            button = <button class="btn btn-primary" onClick={this.showSavedRepositories}><i className="fa-regular fa-bookmark"></i> Избранные</button>;
            list = <AllRepositories/>
        }

        return (
            <div>
                {button}
                <br/><br/>
                {list}
            </div>
        );
    }
}



ReactDOM.render(
    <App/>,
    document.getElementById("app")
)
