import api from "./api";
import thumbApi from "./thumbApi";

const app_key = import.meta.env.VITE_YOUTUBE_APP_KEY;

const getPlaylistItens = async (playlistId, maxResults, pageToken) => {
  try {
    const requestPart = "snippet%2CcontentDetails";
    const videosPerPage = maxResults || 50;

    const response = await api.get(
      "/playlistItems?playlistId=" + playlistId +
      "&maxResults=" + videosPerPage +
      "&part=" + requestPart +
      (pageToken ? "&pageToken=" + pageToken : "") +
      "&key=" + app_key
    );

    return response.data;
  } catch (error) {
    console.warn(error);
  }
}

const getThumb = async (videoId, highRes) => {
  const baseUrl = thumbApi.getUri();

  if (!highRes) return baseUrl + `/${videoId}/mqdefault.jpg`;

  try {
    const response = await thumbApi.get(`/${videoId}/maxresdefault.jpg`);

    if (response.status === 200) return baseUrl + `/${videoId}/maxresdefault.jpg`;
    // eslint-disable-next-line no-unused-vars
  } catch (error) {
    return baseUrl + `/${videoId}/mqdefault.jpg`; 
  }

}

export { getPlaylistItens, getThumb }