export const validPassword = (password) =>
  password.length >= 8 &&
  password.split("").some((char) => !isNaN(Number(char))) &&
  password
    .split("")
    .some(
      (char) => (char >= "A" && char <= "Z") || (char >= "a" && char <= "z")
    );
