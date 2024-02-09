export const JwtHandler = {
  JWT_KEY: "JWT",

  onChangeEvent: new CustomEvent("onJwtChange"),

  onChange: (): void => {
    window.dispatchEvent(JwtHandler.onChangeEvent);
  },

  setJwt: (value: string): void => {
    localStorage.setItem(JwtHandler.JWT_KEY, value);

    JwtHandler.onChange();
  },

  clearJwt: (): void => {
    localStorage.removeItem(JwtHandler.JWT_KEY);

    JwtHandler.onChange();
  },

  getJwt: (): string | null => {
    return localStorage.getItem(JwtHandler.JWT_KEY);
  },

  isJwtValid: (): boolean => Boolean(JwtHandler.getJwt()),
};
