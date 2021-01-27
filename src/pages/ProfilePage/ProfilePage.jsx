import React, { useState, useEffect } from 'react';
import { Grid } from 'semantic-ui-react'
import userService from '../../utils/userService';
import ProfileBio from '../../components/ProfileBio/ProfileBio';
import PageHeader from '../../components/Header/Header';
import { useLocation } from 'react-router-dom';
import PageFooter from '../../components/Footer/Footer';

export default function ProfilePage({ user, handleLogout, setResults, results, searchText, setSearchText}) {

    const [profileUser, setProfileUser] = useState({})
    const [error, setError] = useState('')

    const location = useLocation()
    console.log(user)

    async function getProfile() {

        try {
            console.log(user)
            const username = location.pathname.substring(1)
            // location.pathname returns /jimbo so we need to cut off the / using the js method substring
            // This gets the username from the url! 
            console.log(username)
            const data = await userService.getProfile(username);
            console.log(data)
            setProfileUser(() => data.user)
            console.log('DATA', data)
        } catch (err) {
            console.log(err)
            setError(err)
        }
    }




    useEffect(() => {
        getProfile()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

    return (

        <div>

            
                <Grid style={{ marginTop: '15em' }}>
                    <Grid.Row>
                        <Grid.Column>
                            <PageHeader user={user} handleLogout={handleLogout} setResults={setResults} results={results} searchText={searchText} setSearchText={setSearchText}/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                       
                            <ProfileBio user={user} />
                       
                    </Grid.Row>
                    <Grid.Row centered>                

                    </Grid.Row> 
                    
                </Grid>
            
            
            <PageFooter/>

        </div>
    )
}
