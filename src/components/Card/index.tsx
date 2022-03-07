import axios from "axios";
import "./card.css";

// id: number,
//     login: string,
//     avatar_url: string,
//     link_to_github: string,
//     name: string,
//     company: string,
//     location: string,
//     email: string,
//     linkedin_url: string,
//     public_repos: number,
//     followers: number

export const Card = (
    name: any,
    company: any,
    location: any,
    email: any,
    avatar_url: any,
) => {
    return (
        <div id="background">
            <article id="article-divisora">
                <div id="left-area">
                    <div id="avatar-area">
                        <img id="avatar-config" src={avatar_url} alt="imagem_usuario" />
                    </div>
                    <div id="infos-area">
                        <h4 id="name-area">{name}</h4>
                        <p id="city-area">{location}</p>
                        <p id="company-area">{company}</p>
                        <p id="email-area">{email}</p>
                    </div>
                </div>
                <div id="right-area"></div>
            </article>
            <div></div>
            <div></div>
        </div>
    );
};
