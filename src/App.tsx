import "./App.css";
import { Header } from "./components/Header";
import styled from "styled-components";
import { Card } from "./components/Card";
import axios from "axios";
import { useState } from "react";

export const App = () => {
    const [user, setUser] = useState();
    const PesquisarUser = async () => {
        let loginNome = (
            document.getElementById("login-user") as HTMLInputElement
        ).value;

        await axios
            .get(`https://api.github.com/users/${loginNome}`)
            .then((response: any) => {
                console.log(response.data);
                setUser(response.data ?? undefined);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <>
            <Header />
            <BlankBoard>
                <section id="sessao-divisora">
                    <div className="input-group" id="area-input">
                        <input
                            id="login-user"
                            type="text"
                            className="form-control"
                            placeholder="User Name"
                            aria-label="User Name"
                            aria-describedby="button-addon2"
                        />
                        <button
                            id="btn-search"
                            type="button"
                            onClick={PesquisarUser}
                        >
                            Search
                        </button>
                    </div>
                    <div className="">
                        {/* <Card
                            name={user?.name}
                            company={user?.company}
                            location={user?.location}
                            email={user?.email}
                            avatar_url={user?.avatar_url}
                        ></Card> */}
                    </div>
                </section>
            </BlankBoard>
        </>
    );
};

const BlankBoard = styled.div`
    display: flex;
    margin: 0;
    padding: 6vh 8vh;
    background-color: #f3f5f5;
    width: 100%;
    height: 92vh;
`;
