import React, { useState, useEffect } from 'react';
import { Grid, Segment, Dimmer, Loader, Container } from 'semantic-ui-react'
import userService from '../../utils/userService';
import ProfileBio from '../../components/ProfileBio/ProfileBio';
import PostFeed from '../../components/PostFeed/PostFeed';
import PageHeader from '../../components/Header/Header';
import * as likesAPI from '../../utils/likesService';
import { useLocation } from 'react-router-dom';
import PageFooter from '../../components/Footer/Footer';
import BookSearch from '../BookSearch/BookSearch';



export default function ProfilePage({ user, handleLogout, setResults, results, searchText, setSearchText}) {

    const [posts, setPosts] = useState([])
    const [profileUser, setProfileUser] = useState({})
    const [loading, setLoading] = useState(false)
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
            setLoading(() => false)
            setPosts(() => [...data.posts])
            setProfileUser(() => data.user)
            console.log('DATA', data)
        } catch (err) {
            console.log(err)
            setError(err)
        }
    }


    async function addLike(postId) {
        try {
            const data = await likesAPI.create(postId);
            console.log(data, ' this is from addLike')
            getProfile()
        } catch (err) {
            console.log(err)
        }
    }

    async function removeLike(likeId) {
        try {
            const data = await likesAPI.removeLike(likeId);
            getProfile();
        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        getProfile()

    }, [])

    return (

        <>
        <Container text style={{ marginTop: '7em' }}>
            
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <PageHeader user={user} handleLogout={handleLogout} setResults={setResults} results={results} searchText={searchText} setSearchText={setSearchText}/>

                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <ProfileBio user={user} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row centered>                        
                    
                        <Grid.Column style={{ maxWidth: 750 }}>
                            <PostFeed isProfile={true} posts={posts} numPhotosCol={3} addLike={addLike} removeLike={removeLike} user={user} />
                        </Grid.Column>
                        
                    </Grid.Row> 
                    
                </Grid>
            
            
            <PageFooter/>
            </Container>
        </>
    )
}
