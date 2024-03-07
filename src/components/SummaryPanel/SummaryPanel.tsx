import SummaryPanelCSS from './SummaryPanel.module.css';


export default function SummaryPanel(): JSX.Element {
    return(
        <section className={SummaryPanelCSS.componentBody}>

            <div className={SummaryPanelCSS.backgroundPhoto}></div>
            
            <h1>Create Workout Plan</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ullam ducimus eligendi incidunt odit non debitis, suscipit veritatis dolorum illo dolore!
            </p>

            <p><a href="#" className='link'>Create Plan</a></p>
          
        </section>  
    )
}