const getCookies = () => {
    const allCookies = document.cookie;
    const cookiePairs = allCookies.split("; ");
    return cookiePairs;
  };

  const getCookieValue = (name) => {
    const cookiePairs = getCookies();
    for (let i = 0; i < cookiePairs.length; i++) {
      const cookie = cookiePairs[i];
      let [key, value] = cookie.split("=");
      if (name === key) {
        return value;
      }
    }
    return null;
  };

const getToken = () => {

    return document.cookie.split("; ").find((cookie) => {
        const [key, value] = cookie.split("=");
        return key === "token";
    });
};

const getUser = () => {
    const token = getToken();
    if(!token) return;

    const payloadEncoded = token.split(".")[1];
    // atob function decodes base 64 encoded strings
    const payload = atob(payloadEncoded);

    const user = JSON.parse(payload);

    return user;
};
