export function setItemOnStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.error('Erro ao salvar dado localmente', error);
  }
}

export function getItemFromStorage(key) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : undefined;
  } catch (error) {
    console.error('Erro ao obter dado local', error);
  }
}