import Article from "../article/Article";

const Main = ()=>{
    return(
        <main>
            <Article
            title="Naujiena 1"
            content="Puiki diena"
            />
            <Article
            title="Naujiena 2"
            content="Labai puiki diena"
            />
            <Article
            title="Naujiena 3"
            content="Labai labai puiki diena"
            />
            <Article
            title="Naujiena 4"
            content="Labai labai labai puiki diena"
            />
        </main>
    )
}

export default Main;