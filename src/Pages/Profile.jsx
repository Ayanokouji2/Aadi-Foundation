import { UserContext } from '../Context/user.context'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'

export default function Profile({ userData }) {
    const [pages, setPages] = useState([])
    const [accessToken, setToken] = useState('')
    const [selectedPage, setSelectedPage] = useState(null)
    const [insights, setInsights] = useState({
        followers: 0,
        reactions: 0,
        impressions: 0,
        engagement: 0

    })
    useEffect(() => {
        setToken(userData.accessToken)
    }, [userData])

    useEffect(() => {
        (async () => {
            const response = await axios.get(`https://graph.facebook.com/v20.0/me/accounts?access_token=${userData.accessToken}`)
            setPages(response.data.data)
        })()
    }, [accessToken])


    useEffect(() => {
        (async () => {
            const pageId = selectedPage.split(',')[0]
            const pageAccessToken = selectedPage.split(',')[1]
            console.log(pageId, pageAccessToken)
            const response = await axios.get(`https://graph.facebook.com/v20.0/${pageId}?fields=followers_count&access_token=${userData.accessToken}`)
            console.log(response.data.followers_count)
            setInsights((prev) => ({ ...prev, followers: response.data.followers_count }))

            // response = await axios.get(`https://graph.facebook.com/v20.0/${pageId}/insights/page_impressions&access_token=${pageAccessToken}`)
            // console.log(response.data[0])
            // const values = response.data[0].values
            // setInsights((prev) => ({ ...prev, impressions: values[0].value +values[1].value }))
        })()
    }, [selectedPage])

    // useEffect(() => {
    //     (async () => {
    //         const response = await axios.get(`https://graph.facebook.com/v20.0/${selectedPage[0]}?fields=followers_count&access_token=${userData.accessToken}`)
    //         setInsights((prev) => ({ ...prev, reactions: response.data.followers_count }))
    //     })()
    // }, [selectedPage])

    // useEffect(() => {
    //     (async () => {
    //         const response = await axios.get(`https://graph.facebook.com/v20.0/${selectedPage[0]}?fields=followers_count&access_token=${userData.accessToken}`)
    //         setInsights((prev) => ({ ...prev, impressions: response.data.followers_count }))
    //     })()
    // }, [selectedPage])

    // useEffect(() => {
    //     (async () => {
    //         const response = await axios.get(`https://graph.facebook.com/v20.0/${selectedPage[0]}?fields=followers_count&access_token=${userData.accessToken}`)
    //         setInsights((prev) => ({ ...prev, engagement: response.data.followers_count }))
    //     })()
    // }, [selectedPage])

    return (
        <main className="">
            I m the profile page
            <select name="" onChange={(e) => setSelectedPage(e.target.value)}>

                <option value={null}>Select Page</option>
                {pages.map((page) => (
                    <option value={[page.id, page.access_token]}>{page.name}</option>
                ))}
            </select>
        </main>
    )
}