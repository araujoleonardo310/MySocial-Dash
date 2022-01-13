const STORAGE_KEY = undefined;

const isLogged = () => !!localStorage.getItem(STORAGE_KEY);

const LoginSignIn = (token) => localStorage.setItem(STORAGE_KEY, token);

const LoginOut = () => localStorage.removeItem(STORAGE_KEY);

export { LoginSignIn, LoginOut, isLogged, STORAGE_KEY };
