import axios from "axios";

const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

export const searchYouTubeVideos = async (query, pageToken = "") => {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=6&q=${query}&key=${apiKey}&pageToken=${pageToken}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching data from YouTube API:", error);
    throw error;
  }
};
