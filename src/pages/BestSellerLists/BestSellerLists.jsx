import React from 'react';
import PageFooter from '../../components/Footer/Footer';
import PageHeader from '../../components/Header/Header';
import NYTimesInfo from '../../components/NYTimesInfo/NYTimesInfo';



export default function BestSellers({user, handleLogout, setResults, results, searchText, setSearchText, bestSellerInfo}){  
   
  
    return (
        <div>

      <PageHeader user={user} handleLogout={handleLogout} setResults={setResults} results={results} searchText={searchText} setSearchText={setSearchText}/>
      <NYTimesInfo bestSellerInfo={bestSellerInfo}/>
     
       

    
       <PageFooter/>
      

       </div>
    )
}