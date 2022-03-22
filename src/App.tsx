import "./App.css";
import { Header } from "./components/Header";
import styled from "styled-components";
import { Card } from "./components/Card";
import axios from "axios";
import { useState } from "react";
import { Empty } from "./components/Empty";
import { User } from "./utils/interface/User";
import { Footer } from "./components/Footer";

export const App = () => {
   const [user, setUser] = useState<User>();

   const PesquisarUser = async () => {
      let loginNome = (
         document.getElementById("login-user") as HTMLInputElement
      ).value;

      await axios
         .get(`https://api.github.com/users/${loginNome}`)
         .then((response) => {
            const { data } = response;
            setUser(data ?? undefined);
         })
         .catch((err) => {
            console.log(err);
            return;
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
                  <button id="btn-search" type="button" onClick={PesquisarUser}>
                     Search
                  </button>
               </div>
               <div className="">
                  {user === undefined ? (
                     <>
                        <Empty />
                     </>
                  ) : (
                     <>
                        <Card
                           id={user?.id}
                           name={user?.name}
                           login={user?.login}
                           company={user?.company}
                           email={user?.email}
                           location={user?.location}
                           link_to_github={user?.html_url}
                           avatar_url={user?.avatar_url}
                           linkedin_url={user?.blog}
                           public_repos={user?.public_repos}
                           followers={user?.followers}
                           bio={user?.bio}
                        />
                     </>
                  )}
                  <Footer />
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
