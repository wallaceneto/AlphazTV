import api from "./api";

const app_key = 'AIzaSyBk_PQTX8ERN7-T5B8sT-D4-mSF--IeIN8';

const getPlaylistItens = async (playlistId, maxResults) => {
  try {
    const requestPart = "snippet%2CcontentDetails";
    const videosPerPage = maxResults || 50;

    const response = await api
      .get(`/playlistItems?playlistId=${playlistId}&maxResults=${videosPerPage}&part=${requestPart}&key=${app_key}`);
    return response.data;
  } catch (error) {
    console.warn(error);
  }
}

export { getPlaylistItens }