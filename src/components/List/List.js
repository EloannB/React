
import { useParams } from 'react-router-dom';


function List() {

    const search = useParams() 
    
    return (
        <div className="container">
            <h2>Liste des films</h2>
            <p>{search.data}</p>  
        </div>
    );
}
export default List;