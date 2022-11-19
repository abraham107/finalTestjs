import http from "./http-common";
import TVShow from "../TVShow";

function TVShowListDataService()
    {
        //create

        // read
        public static readAll()
        {
        return http.get<Array<TVShow>>("");
        }

        //update

        //delete
    }

export default TVShowListDataService();
function readAll() {
    throw new Error("Function not implemented.");
}

