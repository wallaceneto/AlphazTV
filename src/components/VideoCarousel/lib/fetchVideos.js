import { getPlaylistItens } from "../../../services/getData";

const fetchVideos = async (playlistId, playlistItems, setPlaylistItems) => {
  if (playlistItems.length === 0) {
    const data = await getPlaylistItens(playlistId, 25);
    setPlaylistItems(data.items);
  }
}

export { fetchVideos };