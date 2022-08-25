import { Link } from "react-router-dom";
import "./contentSimple.css";

export default function ContentSimple(a) {
    return (
        <div className="card">
            <Link className="vinculo" to={`/contentDetails/${a.a.id}`}>
                <img src={a.a.img} alt={a.a.img} />
                <h2>{a.a.name}</h2>
            </Link>
        </div>
    );
}
