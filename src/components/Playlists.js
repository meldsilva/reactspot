import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router";

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
        // await axios.get(
        //     'https://api.spotify.com/v1/me/playlists',
        //     {
        //         headers: {
        //             Authorization: `Bearer ${token}`,
        //         }
        //     }
        // ).then( (resp) => {
        //     setPlaylists(resp.data);
        //     console.log(resp.data);
        // }).catch( (err) => {
        //     console.log("PLAYLISTS API ERROR",JSON.stringify(err));
        //     return;
        // });
    },[token]);

    if (loading) {
        return <h3>Data is loading...</h3>;
    }
    if (Object.keys(playlists).length === 0) {
        return <p>No Data!</p>
    }

    return(
        <div>
            <h2>Playists</h2>

            <Row xs={1} md={5} className="g-6">
            {playlists.items.map((pl) =>  (
                <Col>
                <div className="card-grid" style={{height: "22rem"}}>
                <Card className="card">
                    <Card.Img variant="top" src={pl.images[0].url} />
                    <Card.Body>
                    {/* <Card.Title style={ {fontSize: 14, fontFamily: "Arial"}} >{pl.name}</Card.Title> */}
                    <Card.Text style={ {fontSize: 13, fontFamily: "Arial"}}>
                    <h6>{pl.name}</h6>
                    <li>Creator: {pl.owner.display_name}</li>
                    <li>
                        <a>Tracks: </a>
                        <a 
                            href="#" onClick={() => {navigate("/tracks/0gYAPTIMVtbCanEhF4cBNF")}}>{pl.tracks.total}
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
