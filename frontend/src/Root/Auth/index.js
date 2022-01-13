const STORAGE_KEY = false;

const isLogged = () => !!localStorage.getItem(STORAGE_KEY);

const LoginSignIn = (name, typeAccont) => {
  localStorage.setItem(STORAGE_KEY, [name, typeAccont]);
};

const LoginOut = () => localStorage.removeItem(STORAGE_KEY);

export { LoginSignIn, LoginOut, isLogged, STORAGE_KEY };
