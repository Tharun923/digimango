export const getFromLocalStorage = (key) => {
  try {
    const serializedData = localStorage.getItem(key);
    if (serializedData === null) {
      return undefined;
    }
    return JSON.parse(serializedData);
  } catch (err) {
    console.log(err)
    return undefined;
  }
};

export const setInLocalStorage = (key, value) => {
  try {
    const serializedData = JSON.stringify(value);
    localStorage.setItem(key, serializedData);
  } catch (err) {
    console.log(err)
  }
};

export const getFromSessionStorage = (key) => {
  try {
    const serializedData = sessionStorage.getItem(key);
    if (serializedData === null) {
      return undefined;
    }
    return JSON.parse(serializedData);
  } catch (err) {
    console.log(err)
    return undefined;
  }
};

export const setInSessionStorage = (key, value) => {
  try {
    const serializedData = JSON.stringify(value);
    sessionStorage.setItem(key, serializedData);
  } catch (err) {
    console.log(err)
  }
};

export const appendToSessionStorage = (key, value) => {
  try {
    const data = getFromSessionStorage(key)
    data.push(value);
    setInSessionStorage(key, data)
  } catch {
    setInSessionStorage(key, [value])
  }
};

