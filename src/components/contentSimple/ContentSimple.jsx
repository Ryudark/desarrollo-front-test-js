import { Link } from 'react-router-dom'

export default function ContentSimple(a) {

    return (
        <div>
            <Link>
                <img src={a.a.img} alt={a.a.img}/>
                <h2>{a.a.name}</h2>
            </Link>
            
        </div>
    )
}