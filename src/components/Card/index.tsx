import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect } from "react";
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
    followers: number,
    bio?: string
};

export const Card = ({ id, login, name, company, location, link_to_github, avatar_url, email, linkedin_url, public_repos, followers, bio }: CardProps) => {

    useEffect(() => {
        console.log(linkedin_url)
    }, [])

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
                <div id="right-area">
                    <div id="stats-user">
                        <div className="stats-divisor">
                            <h4 className="number-stats">{public_repos}</h4>
                            <p className="legend-stats"> Public Repos</p>
                        </div>
                        <div className="stats-divisor">
                            <h4 className="number-stats">{followers}</h4>
                            <p className="legend-stats"> Followers </p>
                        </div>
                    </div>
                </div>
            </article>
            <div id="Bio-area">
                <h4 id="title-bio">Bio:</h4>
                <p id="description-area">{bio}</p>
            </div>
            <div id="social-media-area">
                <FontAwesomeIcon icon={faLinkedin} id="linkedin_icon" onClick={(e) => window.open(`${linkedin_url}`, '_blank')}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faGithubSquare} id="github_icon" onClick={(e) => window.open(`${link_to_github}`, '_blank')}></FontAwesomeIcon>
            </div>
        </div>

    );
};
