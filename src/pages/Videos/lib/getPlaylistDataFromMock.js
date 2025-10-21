import allPLaylists from '../../../mock/playlists/all.json';

const getPlaylistDataFromMock = (playlistId, setPlaylist) => {
  allPLaylists.forEach(item => {
    if (playlistId === item.id) {
      setPlaylist({ name: item.name, description: item.description });
      return;
    }
  });
}

export { getPlaylistDataFromMock }