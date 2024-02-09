import { JwtHandler } from "../Jwt_handler/jwt_handler";

interface ApiRequestOptions {
  auth?: boolean;
}

interface RequestOptions extends ApiRequestOptions {
  body?: any;
}

export const Api = {
  baseUrl: "http://localhost:3000",

  // Rota Login
  loginUrl: () => Api.baseUrl + "/login/",

  // Rotas Apliques
  readAllApliquesUrl: () => Api.baseUrl + "/aplique",
  addApliquesUrl: () => Api.baseUrl + "/aplique/create",
  readByIdUrl: (id: string) => Api.baseUrl + "/aplique/getById/" + id,
  updateUrl: (id: string) => Api.baseUrl + "/aplique/updateOne/" + id,
  deleteAplicUrl: (id: string) => Api.baseUrl + "/aplique/deleteOne/" + id,

  // Auth Header
  authHeader: () => ({
    Authorization: "Bearer " + JwtHandler.getJwt(),
  }),

  // GET
  buildApiGetRequest: (url: string, options?: ApiRequestOptions) =>
    fetch(url, {
      method: "GET",
      headers: options?.auth ? new Headers(Api.authHeader()) : undefined,
    }),

  // POST
  buildApiPostRequest: (url: string, body: any, options?: RequestOptions) =>
    fetch(url, {
      method: "POST",
      headers: new Headers({
        "Content-type": "application/json",
        ...(options?.auth ? Api.authHeader() : {}),
      }),
      body: JSON.stringify(body),
    }),

  // PATCH
  buildApiPatchRequest: (url: string, body: any, options?: RequestOptions) =>
    fetch(url, {
      method: "PATCH",
      headers: new Headers({
        "Content-type": "application/json",
        ...(options?.auth ? Api.authHeader() : {}),
      }),
      body: JSON.stringify(body),
    }),

  // DELETE
  buildApiDeleteRequest: (url: string, options?: ApiRequestOptions) =>
    fetch(url, {
      method: "DELETE",
      headers: options?.auth ? new Headers(Api.authHeader()) : undefined,
    }),
};
