import axios from "axios";

export default axios.create({
    baseURL: "../Data/TVShows.json",
    headers: {
        "content-type": "application/json"
    }
});
