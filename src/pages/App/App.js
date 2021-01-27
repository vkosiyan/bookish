import React, {useState, useEffect} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import ProfilePage from '../ProfilePage/ProfilePage'
import userService from '../../utils/userService'
import Home from '../Home/Home';
import BookInfo from '../BookInfo/BookInfo';
import SearchResults from '../SearchResults/SearchResults';
import BestSellers from '../BestSellerLists/BestSellerLists';
import BestSellerListInfo from '../../components/BestSellerListInfo/BestSellerListInfo';
import BestSellerList from '../../components/BestSellerList/BestSellerList';

function App() {

  function handleSignUpOrLogin(){
    setUser(userService.getUser()) // getting the user from localstorage decoding the jwt
  }
  function handleLogout(){
    userService.logout();
    setUser({user: null})
  }

  //// HOOKS ////
  const [results, setResults] = useState([]);
  const[bestSellerInfo, setBestSellerInfo] = useState([])
  const [searchText, setSearchText] = useState(""); 
  const [currentBook, setCurrentBook] = useState(""); 
  const [user, setUser] = useState(userService.getUser()) // getUser decodes our JWT token, into a javascript object
  // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like 
  // this  const token = createJWT(user); // where user was the document we created from mongo

  const listURL = "https://api.nytimes.com/svc/books/v3/lists/best-sellers/2020";
  const list2020BestURL = "https://api.nytimes.com/svc/books/v3/lists/best-sellers/2020";
  const nyTimesApiKey = '.json?api-key=YF4jFW7MyybdTuz3s6uLGAoUcFZqULxg';
  // const googleApiKey = 'AIzaSyB2MR9Aytx1NBrLhcns0k2UAd0RfsemqlE';    
  //////// API KEYS ////

  const bestSellerNoIsbnInfoArray = [];
  const bestSellerInfoArray = [];
  let url = '';
  let isbnArray = [];            

  useEffect(() => {
      url = `${list2020BestURL}${nyTimesApiKey}`

      const makeApiCall = async () => {
        const res  =  await fetch(url)
        const json = await res.json()
        const bestSellingBooks = json.results
        
        {bestSellingBooks.map((book, idx) => (
          book.isbns[0] ? isbnArray.push(book.isbns[0].isbn10) : bestSellerNoIsbnInfoArray.push(book) 
          ))} 

        {isbnArray.map((isbnNum, idx) => (           

          fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbnNum)
          .then(function (res) {
           return res.json();
         })
          .then(function (result) {        
           result.items ? bestSellerInfoArray.push({
                id: result.items[0].id,
                title: result.items[0].volumeInfo.title,
                authors: result.items[0].volumeInfo.authors,
                imageLink: result.items[0].volumeInfo.imageLinks ? result.items[0].volumeInfo.imageLinks.thumbnail : 'undefined',
                averageRating: result.items[0].volumeInfo.averageRating,
                description: result.items[0].volumeInfo.description
            }) : console.log('pass')

         })           
        
       ))} 

       setBestSellerInfo(bestSellerInfoArray)
      
      }
      
      makeApiCall()       
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  return (
    <div className="App">
      <Switch>
        {console.log('RESULTS', results)}
          <Route exact path="/login">
             <LoginPage handleSignUpOrLogin={handleSignUpOrLogin}/>
          </Route>
          <Route exact path="/signup">
             <SignupPage handleSignUpOrLogin={handleSignUpOrLogin}/>
          </Route>
          {userService.getUser() ? 
            <>
               <Switch>
                <Route exact path="/">
                    <Home user={user} handleLogout={handleLogout} setResults={setResults} results={results} searchText={searchText} setSearchText={setSearchText} bestSellerInfo={bestSellerInfo} />
                </Route>
                <Route exact path="/bestsellers">
                    <BestSellers user={user} handleLogout={handleLogout} setResults={setResults} results={results} searchText={searchText} setSearchText={setSearchText} bestSellerInfo={bestSellerInfo} />
                </Route>  
                <Route exact path="/bestsellerslist">
                    <BestSellerList user={user} handleLogout={handleLogout} setResults={setResults} results={results} searchText={searchText} setSearchText={setSearchText} bestSellerInfo={bestSellerInfo} />
                </Route>                
                
                <Route exact path="/search">
                    <SearchResults user={user} handleLogout={handleLogout} setResults={setResults} results={results} searchText={searchText} setSearchText={setSearchText}/>
                </Route>
                <Route exact path="/:username">
                  <ProfilePage user={user} handleLogout={handleLogout} setResults={setResults} results={results} searchText={searchText} setSearchText={setSearchText}/>
                </Route>                            
                <Route path="/books/:bookid"
            render={(routerProps) => (
              <BookInfo {...routerProps} user={user} handleLogout={handleLogout} searchText={searchText} setSearchText={setSearchText} currentBook={currentBook} setCurrentBook={setCurrentBook} setResults={setResults} results={results} />
            )}
          />
          <Route exact path="/listinfo/:list_name_encoded" render={(routerProps) => (
                    <BestSellerListInfo {...routerProps} user={user} handleLogout={handleLogout} setResults={setResults} results={results} searchText={searchText} setSearchText={setSearchText} bestSellerInfo={bestSellerInfo}/>
                    )} />
          </Switch>
            </>
            :
            <Redirect to='/login'/>
          }
      </Switch>
    </div>
  );
}
export default App;