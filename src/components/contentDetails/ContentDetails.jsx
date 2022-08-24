import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { detailVideo } from "../../redux/action/actionInfo"

export default function ContentDetails() {

    const info= useSelector(state=>state)
    const dispatch= useDispatch()
    const { id } = useParams();

    console.log(id)

    // useEffect(()=>{
    //     dispatch(detailVideo("info"))
    // },[])

    return (
        <div>
            <h2>name</h2>
            <img src="" alt="" />
            {/* <p>{a.a.description}</p>
            <p>{a.a.company}</p> */}
        </div>
    )
}
