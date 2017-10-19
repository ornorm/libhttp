/** @babel */
import {Executors} from 'hjs-future/lib/executor';
import {Callable} from "hjs-future/lib/future";
import {FutureTask} from "hjs-future/lib/service";
import {AsyncTask} from "hjs-future/lib/task";
import {
    ABORT_STATE,
    ERROR_STATE,
    LOAD_END_STATE,
    PROGRESS_STATE,
    TIMEOUT_STATE,
    GET,
    UNKNOWN,
    HTTPConnection
} from "./http";

const HTTP_EXECUTOR = Executors.newSerialExecutor({capacity: 128});

export class HTTPWorker extends AsyncTask {

    constructor({
        onCancelled = null,
        onPostExecute = null,
        onPreExecute = null,
        onProgressUpdate = null,
    }) {
        super({executor: HTTP_EXECUTOR, onCancelled, onPostExecute, onPreExecute, onProgressUpdate});
    }

    doInBackground({
        url,
        method = GET,
        user = null,
        password = null,
        overridedMimeTypes = null,
        headers = null,
        body = null,
        responseType = UNKNOWN,
        timeout = 0,
        withTimestamp = false,
        withCredentials = false,
        withCache = false,
        failedOnce = false,
        ifModifiedSince = 0,
        withRestrictedHeaders = true,
        maxRetry = 0
    } = {}) {
        let connection = new HTTPConnection({
            url,
            method,
            user,
            password,
            overridedMimeTypes,
            headers,
            body,
            responseType,
            timeout,
            withTimestamp,
            withCredentials,
            withCache,
            failedOnce,
            ifModifiedSince,
            withRestrictedHeaders,
            maxRetry,
            handlers: {

                onHandleRequest: (event) => {
                    if (this.isCancelled()) {
                        connection.abort();
                    } else {
                        let type = event.type;
                        let response = event.response;
                        switch (type) {
                            case PROGRESS_STATE:
                                this.publishProgress(response.getLoaded(), response.getTotal());
                                break;
                            case ABORT_STATE:
                            case ERROR_STATE:
                            case TIMEOUT_STATE:
                                this.cancel();
                            case LOAD_END_STATE:
                                this.notify(response);
                                break;
                        }
                    }
                }

            }
        });
    }

}

export class HTTPFuture extends FutureTask {

    constructor({
        url,
        method = GET,
        user = null,
        password = null,
        overridedMimeTypes = null,
        headers = {},
        body = null,
        responseType = UNKNOWN,
        timeout = 0,
        withTimestamp = false,
        withCredentials = false,
        withCache = false,
        failedOnce = false,
        ifModifiedSince = 0,
        withRestrictedHeaders = true,
        maxRetry = 0

    } = {}) {
        super({
            callable: new Callable({

                compute: (onComplete) => {

                    let connection = new HTTPConnection({
                        url,
                        method,
                        user,
                        password,
                        overridedMimeTypes,
                        headers,
                        body,
                        responseType,
                        timeout,
                        withTimestamp,
                        withCredentials,
                        withCache,
                        failedOnce,
                        ifModifiedSince,
                        withRestrictedHeaders,
                        maxRetry,
                        handlers: {

                            onHandleRequest: (event) => {
                                let type = event.type;
                                let response = event.response;
                                switch (type) {
                                    case ABORT_STATE:
                                    case ERROR_STATE:
                                    case TIMEOUT_STATE:
                                        onComplete(response);
                                        break;
                                    case LOAD_END_STATE:
                                        onComplete(response);
                                        break;
                                }
                            }

                        }
                    });

                }

            })

        });
    }

}
