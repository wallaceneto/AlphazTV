import { getItemFromStorage, setItemOnStorage } from "../../../global/lib";
import { CACHE_INTERVAL_MINUTES } from "../../../global/utils";
import { getPlaylistItens } from "../../../services/getData";

const fetchVideosWithCache = async (
  cacheKey,
  playlistId,
  setPlaylistItems
) => {
  const dateKey = cacheKey + "Date";
  const cacheDate = getItemFromStorage(dateKey);
  const cacheItens = getItemFromStorage(cacheKey);

  const today = new Date();

  if (cacheDate && cacheItens) {
    const formerDate = new Date(cacheDate);
    const differenceInMinutes = (today.getTime() - formerDate.getTime()) / (1000 * 60);

    if (differenceInMinutes < CACHE_INTERVAL_MINUTES) {
      setPlaylistItems(cacheItens);
    } else {
      const data = await getPlaylistItens(playlistId, 25);
      setPlaylistItems(data.items);

      setItemOnStorage(dateKey, today);
      setItemOnStorage(cacheKey, data.items);
    }

  } else {
    const data = await getPlaylistItens(playlistId, 25);
    setPlaylistItems(data.items);

    setItemOnStorage(dateKey, today);
    setItemOnStorage(cacheKey, data.items);
  }
}

export { fetchVideosWithCache }