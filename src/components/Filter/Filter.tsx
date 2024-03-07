import FilterCSS from './Filter.module.css';


export default function Filter() :JSX.Element {
    return(
        <section className={FilterCSS.filter}>
            <h3>Add exercise</h3>
 
            <div className={FilterCSS.selects}>
                <select value='muscle group'>
                    <option value="triceps">triceps</option>
                    <option value="biceps">biceps</option>
                    <option value="shoulders">shoulders</option>
                    <option value="chest">chest</option>
                </select>

                <select value='category'>
                    <option value="dumbbell">dumbbell</option>
                    <option value="cable">cable</option>
                    <option value="bodyweigth">bodyweigth</option>
                </select>
            </div>

            <input type="text" placeholder='exercise name'/>

        </section>
    );
}