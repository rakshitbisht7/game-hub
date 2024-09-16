import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fdfffa08a686490ebe4703440ed3dad6",
  },
});
