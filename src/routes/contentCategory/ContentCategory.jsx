import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import ContentSimple from "../../components/contentSimple/ContentSimple";
import NavBar from "../../components/navBar/NavBar";

export default function ContentCategory() {
    const isLoged = useSelector((state) => state.user);

    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoged) {
            navigate("/login", { replace: true });
        }
    });

    const filter = useSelector((state) => state.genresFilter);

    return (
        <div>
        <NavBar />
        {filter.map((a) => (
            <ContentSimple key={a.id} a={a} />
        ))}
        </div>
    );
}
