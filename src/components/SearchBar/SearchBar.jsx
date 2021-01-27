import React from "react";  
import axios from 'axios';  
import { useHistory } from 'react-router-dom'



function SearchBar({setResults, results, setSearchText, searchText}) {      
    
    const apiKey = 'AIzaSyB2MR9Aytx1NBrLhcns0k2UAd0RfsemqlE';
    const history = useHistory();
    

    function handleChange(event) { 
        const searchText = event.target.value; 
        console.log('I AM BOOK', searchText) 
        setSearchText(searchText);
    } 
    function handleSubmit(event) {  
        console.log("I am event", event)
        event.preventDefault();  
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchText + "&key=" + apiKey + "&maxResults=40")  
            .then(data => {  
                console.log('DATA ITEMS', data.data.items);  
                setResults(data.data.items);
                history.push('/search')                     
            }) 
            .then(d => {
                
            }) 
            
    }  
    return (  
        <div>            
        <form onSubmit={handleSubmit}>  
       
            <div className="card-header main-search">  
                <div className="row">  
                    <div className="col-12 col-md-3 col-xl-3">                      
                        <input onChange={handleChange} className="AutoFocus form-control" placeholder="Search books" type="text" style={{ minWidth: 500 }}/>  
                    </div>  
                    <div style={{float: 'right'}}>  
                    <input type="submit" value="Search" className="btn btn-primary search-btn" />  
                    </div>  
                </div>  
            </div>  
            

        </form>  
        </div>
  
    )  
}  
  
export default SearchBar



