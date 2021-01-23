import React, {useState} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import ProfilePage from '../ProfilePage/ProfilePage'
import userService from '../../utils/userService'
import Home from '../Home/Home';
import BookInfo from '../BookInfo/BookInfo';
import SearchResults from '../SearchResults/SearchResults';
import Feed from '../Feed/Feed';
import * as booksAPI from '../../utils/bookService';


function App() {

  const [books, setBooks] = useState([])


  function handleSignUpOrLogin(){
    setUser(userService.getUser()) // getting the user from localstorage decoding the jwt
  }
  function handleLogout(){
    userService.logout();
    setUser({user: null})
  }

  async function handleAddBook(book){

    const data = await booksAPI.create(book);

    // to check to make sure this is working
    console.log(data, ' I AM data')
    // after this we'll want to update state
    // after we get back our new post
    // data is the response from our create function in controllers/books
    // update the state

    setBooks([data.book,  ...books])
    // to conifrm this check the devtools for your feed component
    
}
  //// HOOKS ////
  const [results, setResults] = useState([]);
  const [bestSellerBooks, setBestSellerBooks] = useState([])  
  const [searchText, setSearchText] = useState(""); 
  const [currentBook, setCurrentBook] = useState(""); 
  const [user, setUser] = useState(userService.getUser()) // getUser decodes our JWT token, into a javascript object
  // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like 
  // this  const token = createJWT(user); // where user was the document we created from mongo
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
                    <Home user={user} handleLogout={handleLogout} setResults={setResults} results={results} searchText={searchText} setSearchText={setSearchText} bestSellerBooks={bestSellerBooks} setBestSellerBooks={setBestSellerBooks}/>
                </Route>
                <Route exact path="/favorites">
                    <Feed user={user} handleLogout={handleLogout} setResults={setResults} results={results} searchText={searchText} setSearchText={setSearchText} books={books} setBooks={setBooks}/>
                </Route>

                <Route exact path="/search">
                    <SearchResults user={user} handleLogout={handleLogout} setResults={setResults} results={results} searchText={searchText} setSearchText={setSearchText}/>
                </Route>

                <Route exact path="/:username">
                  <ProfilePage user={user} handleLogout={handleLogout} setResults={setResults} results={results} searchText={searchText} setSearchText={setSearchText}/>
                </Route>
            
                
                <Route path="/books/:bookid"
            render={(routerProps) => (
              <BookInfo {...routerProps} user={user} handleLogout={handleLogout} searchText={searchText} setSearchText={setSearchText} user={user} currentBook={currentBook} setCurrentBook={setCurrentBook} setResults={setResults} results={results} handleAddBook={handleAddBook}/>
            )}
          />
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