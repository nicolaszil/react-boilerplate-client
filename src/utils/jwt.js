import jwt_decode from "jwt-decode";
import { getRefreshedTokens } from "../queries";

const ACCESS_TOKEN_KEY = "__access_token__";
const REFRESH_TOKEN_KEY = "__refresh_token__";
const USER_INFO_KEY = "__user_info__";

export const registerTokens = ({ accessToken, refreshToken, user }) => {
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  localStorage.setItem(USER_INFO_KEY, JSON.stringify(user));
};

export const resetAccessToken = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
};

export const resetTokens = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
  localStorage.removeItem(USER_INFO_KEY);
};

export const refreshAccessToken = async () => {
  const { accessToken, refreshToken } = await getRefreshedTokens(getRefreshToken());
	if (accessToken) localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  if (refreshToken) localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
};

export const isValidAccessToken = () => {
  const token = getAccessToken();
  if (!token) return false;
  const { exp: expirationTime = 0 } = jwt_decode(token);
  const currentTime = Math.floor(Date.now() / 1000);
  return expirationTime > currentTime;
};

export const getPreviousAuthenticationInfo = () => {
  const isValidToken = isValidAccessToken();
  if (isValidToken) return JSON.parse(getUserInfo());
  resetTokens();
  return null;
};

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN_KEY);
export const getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN_KEY);
export const getUserInfo = () => localStorage.getItem(USER_INFO_KEY);
