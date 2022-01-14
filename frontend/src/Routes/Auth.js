const STORAGE_KEY = "token";

const LABEL_LOCAL_STORAGE = "token";

const LoginSignIn = () => localStorage.setItem(LABEL_LOCAL_STORAGE, true);

const LoginOut = () => localStorage.removeItem(LABEL_LOCAL_STORAGE);

export { LoginSignIn, LoginOut };