import Error404CSS from './Error404.module.css';


export default function Error404():JSX.Element {
    return(
        <div className={Error404CSS.componentBody}>
            <h1>Error 404, Page not found.</h1>
        </div>
    );
}