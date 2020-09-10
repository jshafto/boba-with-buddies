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


const navWrapper = document.querySelector('.wrapper-nav');
// if a navbar exists
if (navWrapper) {
  // check if the user is logged in
  if (getCookieValue('token')) {
    // logged in user should have links for /boba-times, /hosting,
    // /dashboard and asignout button
    navWrapper.innerHTML = `<a class="header-link" href="/boba-times">BOBA TIMES</a>
    <a class="header-link" href="/hosting">HOSTING</a>
    <a class="header-link" href="/dashboard">DASHBOARD</a>
    <button id="signout">SIGN OUT</button>
    `
    const signoutButton = document.getElementById("signout");
    signoutButton.addEventListener("click", async (e) => {
      const res = await fetch("/api/users/session", {
        method: "DELETE",
      });

      if (res.ok) {
        window.location.href = "/login";
      }
    });
  } else {
    // without an account, the links should go to /boba-times,
    // /signin and /signup
    navWrapper.innerHTML = `<a class="header-link" href="/boba-times">BOBA TIMES</a>
    <a class="header-link" href="/login">SIGN IN</a>
    <button id="signup">
    <a href="/signup">SIGN UP</a>
    </button>
    `;
  }
}
