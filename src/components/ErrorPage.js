import NavBar from "./NavBar";
import Header from "./Header";

function ErrorPage(){
    return (
        <div className="app">
            <NavBar/>
            <Header/>
            <h1>Oops! Looks like something went wrong.</h1>
        </div>
    )
}

export default ErrorPage;