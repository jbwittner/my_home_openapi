/* tslint:disable */
/* eslint-disable */
/**
 * Swagger for MyHome
 * This is openapi specification for MyHome application.
 *
 * The version of the OpenAPI document: 0.2.0-SNAPSHOT
 * Contact: jeanbaptiste.wittner@outlook.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { UserRegistrationParameter } from '../model';
/**
 * AuthenticationApi - axios parameter creator
 * @export
 */
export const AuthenticationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Register a new user account
         * @param {UserRegistrationParameter} [userRegistrationParameter] Object that needs to register a new user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registration: async (userRegistrationParameter?: UserRegistrationParameter, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/authentication/registration`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(userRegistrationParameter, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthenticationApi - functional programming interface
 * @export
 */
export const AuthenticationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthenticationApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Register a new user account
         * @param {UserRegistrationParameter} [userRegistrationParameter] Object that needs to register a new user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async registration(userRegistrationParameter?: UserRegistrationParameter, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.registration(userRegistrationParameter, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AuthenticationApi - factory interface
 * @export
 */
export const AuthenticationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthenticationApiFp(configuration)
    return {
        /**
         * 
         * @summary Register a new user account
         * @param {UserRegistrationParameter} [userRegistrationParameter] Object that needs to register a new user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registration(userRegistrationParameter?: UserRegistrationParameter, options?: any): AxiosPromise<void> {
            return localVarFp.registration(userRegistrationParameter, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AuthenticationApi - interface
 * @export
 * @interface AuthenticationApi
 */
export interface AuthenticationApiInterface {
    /**
     * 
     * @summary Register a new user account
     * @param {UserRegistrationParameter} [userRegistrationParameter] Object that needs to register a new user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApiInterface
     */
    registration(userRegistrationParameter?: UserRegistrationParameter, options?: AxiosRequestConfig): AxiosPromise<void>;

}

/**
 * AuthenticationApi - object-oriented interface
 * @export
 * @class AuthenticationApi
 * @extends {BaseAPI}
 */
export class AuthenticationApi extends BaseAPI implements AuthenticationApiInterface {
    /**
     * 
     * @summary Register a new user account
     * @param {UserRegistrationParameter} [userRegistrationParameter] Object that needs to register a new user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public registration(userRegistrationParameter?: UserRegistrationParameter, options?: AxiosRequestConfig) {
        return AuthenticationApiFp(this.configuration).registration(userRegistrationParameter, options).then((request) => request(this.axios, this.basePath));
    }
}