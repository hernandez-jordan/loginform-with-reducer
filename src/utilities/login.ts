enum LoginType {
  USERNAME = "jordan",
  PASSWORD = "password",
}

interface ILogin {
  username: string;
  password: string;
}
//fake async login
export async function login({ username, password }: ILogin) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === LoginType.USERNAME && password === LoginType.PASSWORD) {
        resolve(console.log("logged in"));
      } else {
        reject("error logging in, check the username or password");
      }
    }, 2000);
  });
}
