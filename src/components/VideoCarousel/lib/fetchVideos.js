import { getPlaylistItens } from "../../../services/getData";

const fetchVideos = async (playlistId, setPlaylistItems) => {
  const data = await getPlaylistItens(playlistId, 25);
  setPlaylistItems(data.items);
}

export { fetchVideos };