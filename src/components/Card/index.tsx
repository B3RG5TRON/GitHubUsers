import axios from "axios";
import "./card.css";

type CardProps = {
    id: number,
    login: string,
    avatar_url: string,
    link_to_github: string,
    name: string,
    company: string,
    location: string,
    email: string,
    linkedin_url: string,
    public_repos: number,
    followers: number
};

export const Card = ({ id, login, name, company, location, link_to_github, avatar_url, email, linkedin_url, public_repos, followers }: CardProps) => {
    return (
        <div id="background">
            <article id="article-divisora">
                <div id="left-area">
                    <div id="avatar-area">
                        <img id="avatar-config" src={avatar_url} alt="" />
                    </div>
                    <div id="infos-area">
                        <h4 id="name-area">{name}</h4>
                        <p id="city-area">{location}</p>
                        <p id="company-area">{company}</p>
                    </div>
                </div>
                <div id="right-area"></div>
            </article>
            <div></div>
            <div></div>
        </div>
    );
};
