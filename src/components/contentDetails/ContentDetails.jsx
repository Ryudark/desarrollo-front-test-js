import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { detailVideo } from "../../redux/action/actionInfo"
import "./ContentDetails.css"
import { Link } from 'react-router-dom'

export default function ContentDetails() {

    
    const dispatch= useDispatch()
    const { id } = useParams();

    useEffect(() => {
        dispatch(detailVideo(id));
    }, [dispatch, id]);

    const info= useSelector(state=>state.detail)

    return (
        <div className="cardDetail">
            <Link to="/home">Home</Link>

            <h2>{info.name}</h2>
            {/* <img src={info.img} alt={info.name} /> */}
            <iframe width="560" height="315" src={info.video} title="YouTube video player" frameborder="0"></iframe>
            <p>{info.description}</p>
            <h4>{info.company}</h4>
        </div>
    )
}
