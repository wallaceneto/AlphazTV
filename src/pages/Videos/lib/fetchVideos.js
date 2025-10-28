import { getPlaylistItens } from "../../../services/getData";

const fetchNextPage = async (
  playlistId,
  previousPageResults,
  nextPageToken,
  setPlaylistItems,
) => {
  const data = await getPlaylistItens(playlistId, 50, nextPageToken);
  const fullPlaylist = previousPageResults.concat(data.items);

  setPlaylistItems(fullPlaylist);
}

const fetchVideos = async (playlistId, setPlaylistItems) => {
  const data = await getPlaylistItens(playlistId);
  setPlaylistItems(data.items);
  if (data.nextPageToken) {
    fetchNextPage(playlistId, data.items, data.nextPageToken, setPlaylistItems);
  }
}

export { fetchVideos }