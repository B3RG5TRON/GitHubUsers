import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import "./empty.css";

export const Empty = () => {
   return (
      <>
      <div id="empty">
         <FontAwesomeIcon id="icon-times" icon={faTimesCircle} />
         <h2>Nenhuma informação foi encontrada</h2>
      </div>
      </>
   );
};