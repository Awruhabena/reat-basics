import Header from "../Components/Header";
import './ErrorPage.css'

function ErrorPage (){
    return (
        <>
            <Header />
            
            <title>404 Page Not Found</title>
            <link rel="icon" type="image/svg+xml" href="home-favicon.png" />

            
            <h1 className ="error-message">Page Not Found</h1>
        </>
    )
}

export default ErrorPage