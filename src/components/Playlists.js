import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router";
import LoadingPage from "./LoadingPage";

const Playlists = () => {
    const [playlists, setPlaylists] = useState({});
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();


    useEffect( () => {
        setLoading(true);

        async function fetchData(){
        try {
            const response = await axios.get('https://api.spotify.com/v1/me/playlists?limit=50', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setPlaylists(response.data);
            console.log(response.data);
        }
        catch(error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    }
    fetchData()
    },[token]);

    if (loading) {
        return <LoadingPage />;
    }
    if (Object.keys(playlists).length === 0) {
        return <p>No Data!</p>
    }

    return(
        <div>                        
            <h4 className="text-muted">Playlists</h4>

            <Row xs={1} md={5} className="g-6">
            {playlists.items.map((pl,idx) =>  (
                <Col key={Math.random()}>
                <div className="card-grid" style={{height: "auto"}}>
                <Card className="card">
                    <Card.Img variant="top" src={pl.images[0].url} />
                    <Card.Body>
                    {/* <Card.Title style={ {fontSize: 14, fontFamily: "Arial"}} >{pl.name}</Card.Title> */}
                    <Card.Text style={ {fontSize: 13, fontFamily: "Arial"}}>
                    {pl.name}
                    <li> Creator: {pl.owner.display_name}</li>
                    <li>
                        <a>Tracks: </a>
                        <a
                            href="" onClick={() => {navigate(`/tracks/${pl.name}/${pl.id}`)}}>{pl.tracks.total}
                        </a>
                    </li>
                    </Card.Text>
                    </Card.Body>
                </Card>
                <br/>
                </div>
                </Col>
            ))}
            </Row>
        </div>
    );
}
export default Playlists;
