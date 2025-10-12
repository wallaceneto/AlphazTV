import api from "./api";

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

export { getPlaylistItens }