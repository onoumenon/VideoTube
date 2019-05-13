import axios from "axios";

const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: "AIzaSyCkLcoHKwBUUrQtNaKrOVu1OOWaFkVzt7s"
  }
});

export const searchYoutube = async term => {
  const response = await youtube.get("/search", {
    params: {
      q: term
    }
  });
  return response.data.items;
};

export default youtube;
