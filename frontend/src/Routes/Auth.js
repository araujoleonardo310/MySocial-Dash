const LABEL_LOCAL_STORAGE = "token";

const LoginOut = () => localStorage.removeItem(LABEL_LOCAL_STORAGE);

export { LoginOut, LABEL_LOCAL_STORAGE };
