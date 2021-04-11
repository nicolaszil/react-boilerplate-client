export const BASE_URL = process.env.BASE_URL;

export const App = {
	getSomethingFromYourApi: "/api/path",
};

export const Authentication = {
	authenticate: "/token/authenticate",
	refreshToken: "/token/refresh",
};

export default {
	BASE_URL,
	App,
	Authentication,
};
