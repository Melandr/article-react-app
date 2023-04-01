import { ArticleList } from "./components/ArticleList";
import { articles } from "./config";

function App() {
    return (
        <div className="wrapper">
            <ArticleList articles={articles} />
        </div>
    );
}

export default App;
