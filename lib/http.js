/** @babel */
import * as char from 'hjs-core/lib/char';
import {AbstractMap} from 'hjs-collection/lib/map';

export const CLIENT_ERROR = [400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 421,
    422, 423, 424, 426, 428, 429, 431, 451];

export const INFORMATIONAL = [100, 101, 102, 103];

export const REDIRECTION = [300, 301, 302, 303, 304, 305, 306, 307, 308];

export const SERVER_ERROR = [500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511];

export const SUCCESS = [200, 201, 202, 203, 204, 205, 206, 207, 208, 226];

export const UNOFFICIAL = [103, 419, 420, 450, 498, 499, 509, 530, 440, 449, 451, 444, 495, 496, 497, 520, 521, 522, 523, 524
    , 525, 526];

export const ACCEPT_STRING = 'text/html, image/gif, image/jpeg, *; q=.2, */*; q=.2';

export const X_USER_DEFINED = 'text/plain; charset=x-user-defined';

export const APPLICATION_URL_ENCODED = 'application/x-www-form-urlencoded';

export const MULTIPART_FORM_DATA = 'multipart/form-data';

export const X_REQUESTED_WITH = 'X-Requested-With';

export const EXCLUDE_HEADERS = ['Proxy-Authorization', 'Authorization', 'Accept-Encoding', 'User-Agent', 'Host', 'Connection', 'Cookie', 'Cookie2'];

export const RESTRICTED_HEADERS = [
    /* Restricted by XMLHttpRequest2 */
    'Accept-Charset',
    'Accept-Encoding',
    /**/
    'Access-Control-Request-Headers',
    'Access-Control-Request-Method',
    'Connection', /* close is allowed */
    'Content-Length',
    /* Restricted by XMLHttpRequest2 */
    'Cookie',
    'Cookie2',
    /**/
    'Content-Transfer-Encoding',
    /* Restricted by XMLHttpRequest2 */
    'Date',
    'Expect',
    /**/
    'Host',
    'Keep-Alive',
    'Origin',
    /* Restricted by XMLHttpRequest2 */
    'Referer',
    'TE',
    /**/
    'Trailer',
    'Transfer-Encoding',
    'Upgrade',
    /* Restricted by XMLHttpRequest2 */
    'User-Agent',
    /**/
    'Via'
];

export const STANDARD_REQUEST_HEADERS = [
    'Accept',
    'Accept-Charset',
    'Accept-Encoding',
    'Accept-Language',
    'Accept-Datetime',
    'Authorization',
    'Cache-Control',
    'Connection',
    'Cookie',
    'Content-Length',
    'Content-MD5',
    'Content-Type',
    'Date',
    'Expect',
    'Forwarded',
    'From',
    'Host',
    'If-Match',
    'If-Modified-Since',
    'If-None-Match',
    'If-Range',
    'If-Unmodified-Since',
    'Max-Forwards',
    'Origin',
    'Pragma',
    'Proxy-Authorization',
    'Range',
    'Referer',
    'TE',
    'User-Agent',
    'Upgrade',
    'Via',
    'Warning'
];

export const NON_STANDARD_REQUEST_HEADERS = [
    'X-Requested-With',
    'DNT',
    'X-Forwarded-For',
    'X-Forwarded-Host',
    'X-Forwarded-Proto',
    'Front-End-Https',
    'X-Http-Method-Override',
    'X-ATT-DeviceId',
    'X-Wap-Profile',
    'Proxy-Connection',
    'X-UIDH',
    'X-Csrf-Token',
    'X-Request-ID',
    'X-Correlation-ID'
];

export const STANDARD_RESPONSE_HEADERS = [
    'Access-Control-Allow-Origin',
    'Accept-Patch',
    'Accept-Ranges',
    'Age',
    'Allow',
    'Alt-Svc',
    'Cache-Control',
    'Connection',
    'Content-Disposition',
    'Content-Encoding',
    'Content-Language',
    'Content-Length',
    'Content-Location',
    'Content-MD5',
    'Content-Range',
    'Content-Type',
    'Date',
    'ETag',
    'Expires',
    'Last-Modified',
    'Link',
    'Location',
    'P3P',
    'Pragma',
    'Proxy-Authenticate',
    'Public-Key-Pins',
    'Refresh',
    'Retry-After',
    'Server',
    'Set-Cookie',
    'Status',
    'Strict-Transport-Security',
    'Trailer',
    'Transfer-Encoding',
    'TSV',
    'Upgrade',
    'Vary',
    'Via',
    'Warning',
    'WWW-Authenticate',
    'X-Frame-Options'
];

export const NON_STANDARD_RESPONSE_HEADERS = [
    'X-XSS-Protection',
    'Content-Security-Policy',
    'X-Content-Security-Policy',
    'X-WebKit-CSP',
    'X-Content-Type-Options',
    'X-Powered-By',
    'X-UA-Compatible',
    'X-Content-Duration',
    'Upgrade-Insecure-Requests',
    'X-Request-ID',
    'X-Correlation-ID'
];

export const PERMITTED_USER_METHODS = [
    'OPTIONS',
    'GET',
    'HEAD',
    'POST',
    'PUT',
    'DELETE',
    'TRACE'
    // Note: we don't allow users to specify 'CONNECT'
];

export class NameValuePair {

    constructor({name = '', value = null}) {
        this.name = name;
        this.value = value;
    }

    equals(object) {
        if (this === object) {
            return true;
        }
        if (object instanceof NameValuePair) {
            let pair = object;
            return (this.name !== null ? null === pair.name : this.name === pair.name)
                && (this.value !== null ? null === pair.value : this.value === pair.value);
        }
        return false;
    }

    getName() {
        return name;
    }

    getValue() {
        return value;
    }

    setName(name) {
        this.name = name;
    }

    setValue(value) {
        this.value = value;
    }

    toString() {
        return ('name=' + (this.name !== null ? this.name : "") + ', ' + 'value=' + (this.value !== null ? this.value : ""));
    }
}

export const CONTINUE = 100;
export const SWITCHING_PROTOCOLS = 101;
export const PROCESSING = 102;
export const OK = 200;
export const CREATED = 201;
export const ACCEPTED = 202;
export const NON_AUTHORITATIVE_INFORMATION = 203;
export const NO_CONTENT = 204;
export const RESET_CONTENT = 205;
export const PARTIAL_CONTENT = 206;
export const MULTI_STATUS = 207;
export const ALREADY_REPORTED = 208;
export const IM_USED = 226;
export const MULTIPLE_CHOICES = 300;
export const MOVED_PERMANENTLY = 301;
export const FOUND = 302;
export const SEE_OTHER = 303;
export const NOT_MOFIFIED = 304;
export const USE_PROXY = 305;
export const SWITCH_PROXY = 306;
export const TEMPORARY_REDIRECT = 307;
export const PERMANENT_REDIRECT = 308;
export const BAD_REQUEST = 400;
export const UNAUTHORIZED = 401;
export const PAYMENT_REQUIRED = 402;
export const FORBIDDEN = 403;
export const NOT_FOUND = 404;
export const METHOD_NOT_ALLOWED = 405;
export const NOT_ACCEPTABLE = 406;
export const PROXY_AUTHENTICATION_REQUIRED = 407;
export const REQUEST_TIMEOUT = 408;
export const CONFLICT = 409;
export const GONE = 410;
export const LENGTH_REQUIRED = 411;
export const PRECONDITION_FAILED = 412;
export const PAYLOAD_TOO_LARGE = 413;
export const URI_TOO_LONG = 414;
export const UNSUPPORTED_MEDIA_TYPE = 415;
export const RANGE_NOT_SATISFIABLE = 416;
export const EXPECTATION_FAILED = 417;
export const IM_TEA_POT = 418;
export const MISDIRECTED_REQUEST = 421;
export const UNPROCESSABLE_ENTITY = 422;
export const LOCKED = 423;
export const FAILED_DEPENDENCY = 424;
export const UPGRADE_REQUIRED = 426;
export const PRECONDITION_REQUIRED = 428;
export const TOO_MANY_REQUESTS = 428;
export const REQUEST_HEADER_FIELDS_TOO_LARGE = 431;
export const UNVAILABLE_FOR_LEGAL_REASONS = 451;
export const INTERNAL_SERVER_ERROR = 500;
export const NOT_IMPLEMENTED = 501;
export const BAD_GATEWAY = 502;
export const SERVICE_UNAVAILABLE = 503;
export const GATEWAY_TIMEOUT = 504;
export const HTTP_VERSION_NOT_SUPPORTED = 505;
export const VARIANT_ALSO_NOGOTIATES = 506;
export const INSUFFICIENT_STORAGE = 507;
export const LOOP_DETECTED = 508;
export const NOT_EXTENDED = 510;
export const NETWORK_AUTHENTICATION_REQUIRED = 511;

export class HTTPStatus {

    constructor(statusCode = 0, reasonText = null) {
        this.statusCode = statusCode;
        this.reasonText = reasonText;
    }

    static getClientError() {
        return [].concat(CLIENT_ERROR);
    }

    static getInformational() {
        return [].concat(INFORMATIONAL);
    }

    static getReason(code) {
        switch (code) {
            case CONTINUE:
                return "Continue";
            case SWITCHING_PROTOCOLS:
                return "Switching Protocols";
            case PROCESSING:
                return "Processing";
            case OK:
                return "OK";
            case CREATED:
                return "Created";
            case ACCEPTED:
                return "Accepted";
            case NON_AUTHORITATIVE_INFORMATION:
                return "Non-Authoritative Information";
            case NO_CONTENT:
                return "No Content";
            case RESET_CONTENT:
                return "Reset Content";
            case PARTIAL_CONTENT:
                return "Partial Content";
            case MULTI_STATUS:
                return "Multi-Status";
            case ALREADY_REPORTED:
                return "Already Reported";
            case IM_USED:
                return "IM Used";
            case MULTIPLE_CHOICES:
                return "Multiple Choices";
            case MOVED_PERMANENTLY:
                return "Moved Permanently";
            case FOUND:
                return "Found";
            case SEE_OTHER:
                return "See Other";
            case NOT_MOFIFIED:
                return "Not Modified";
            case USE_PROXY:
                return "Use Proxy";
            case SWITCH_PROXY:
                return "Switch Proxy";
            case TEMPORARY_REDIRECT:
                return "Temporary Redirect";
            case PERMANENT_REDIRECT:
                return "Permanent Redirect";
            case BAD_REQUEST:
                return "Bad Request";
            case UNAUTHORIZED:
                return "Unauthorized";
            case PAYMENT_REQUIRED:
                return "Payment Required";
            case FORBIDDEN:
                return "Forbidden";
            case NOT_FOUND:
                return "Not Found";
            case METHOD_NOT_ALLOWED:
                return "Method Not Allowed";
            case NOT_ACCEPTABLE:
                return "Not Acceptable";
            case PROXY_AUTHENTICATION_REQUIRED:
                return "Proxy Authentication Required";
            case REQUEST_TIMEOUT:
                return "Request Timeout";
            case CONFLICT:
                return "Conflict";
            case GONE:
                return "Gone";
            case LENGTH_REQUIRED:
                return "Length Required";
            case PRECONDITION_FAILED:
                return "Precondition Failed";
            case PAYLOAD_TOO_LARGE:
                return "Payload Too Large";
            case URI_TOO_LONG:
                return "URI Too Long";
            case UNSUPPORTED_MEDIA_TYPE:
                return "Unsupported Media Type";
            case RANGE_NOT_SATISFIABLE:
                return "Range Not Satisfiable";
            case EXPECTATION_FAILED:
                return "Expectation Failed";
            case IM_TEA_POT:
                return "I'm a teapot";
            case MISDIRECTED_REQUEST:
                return "Misdirected Request";
            case UNPROCESSABLE_ENTITY:
                return "Unprocessable Entity";
            case LOCKED:
                return "Locked";
            case FAILED_DEPENDENCY:
                return "Failed Dependency";
            case UPGRADE_REQUIRED:
                return "Upgrade Required";
            case PRECONDITION_REQUIRED:
                return "Precondition Required";
            case TOO_MANY_REQUESTS:
                return "Too Many Requests";
            case REQUEST_HEADER_FIELDS_TOO_LARGE:
                return "Request Header Fields Too Large";
            case UNVAILABLE_FOR_LEGAL_REASONS:
                return "Unavailable For Legal Reasons";
            case INTERNAL_SERVER_ERROR:
                return "Internal Server Error";
            case NOT_IMPLEMENTED:
                return "Not Implemented";
            case BAD_GATEWAY:
                return "Bad Gateway";
            case SERVICE_UNAVAILABLE:
                return "Service Unavailable";
            case GATEWAY_TIMEOUT:
                return "Gateway Timeout";
            case HTTP_VERSION_NOT_SUPPORTED:
                return "HTTP Version Not Supported";
            case VARIANT_ALSO_NOGOTIATES:
                return "Variant Also Negotiates";
            case INSUFFICIENT_STORAGE:
                return "Insufficient Storage";
            case LOOP_DETECTED:
                return "Loop Detected";
            case NOT_EXTENDED:
                return "Not Extended";
            case NETWORK_AUTHENTICATION_REQUIRED:
                return "Network Authentication Required";
            default:
                return "Unknown Client Exception";
        }
    }

    static getRedirection() {
        return [].concat(REDIRECTION);
    }

    getReasonPhrase() {
        return this.reasonText || HTTPStatus.getReason(this.statusCode);
    }

    static getServerError() {
        return [].concat(SERVER_ERROR);
    }

    getStatusCode() {
        return this.statusCode;
    }

    static getSuccess() {
        return [].concat(SUCCESS);
    }

    static getUnofficial() {
        return [].concat(UNOFFICIAL);
    }

    isClientError() {
        return HTTPStatus.getClientError().indexOf(this.statusCode) !== -1;
    }

    isInformational() {
        return HTTPStatus.getInformational().indexOf(this.statusCode) !== -1;
    }

    isRedirection() {
        return HTTPStatus.getRedirection().indexOf(this.statusCode) !== -1;
    }

    isServerError() {
        return HTTPStatus.getServerError().indexOf(this.statusCode) !== -1;
    }

    isSuccess() {
        return HTTPStatus.getSuccess().indexOf(this.statusCode) !== -1;
    }

    isUnofficial() {
        return HTTPStatus.getUnofficial().indexOf(this.statusCode) !== -1;
    }

    toString() {
        return `HTTPStatus[code:${this.getStatusCode()}, message:${this.getReasonPhrase()}]`;
    }
}

export const VERSION = 1.1;

export class HTTPRequestLine {

    constructor(method = GET, uri = '', version = VERSION) {
        this.method = method;
        this.uri = uri;
        this.version = version;
    }

    getMethod() {
        return this.method;
    }

    getRequestLine() {
        return this.getMethod() + " " + this.getUri() + " " + this.getVersion() + "\r\n";
    }

    getUri() {
        return this.uri;
    }

    getVersion() {
        return this.version;
    }

    toString() {
        return this.getRequestLine();
    }
}

export class HTTPStatusLine {

    constructor(status = new HTTPStatus(), version = VERSION) {
        this.status = status;
        this.version = version;
    }

    getStatusCode() {
        return this.status.getStatusCode();
    }

    getReasonPhrase() {
        return this.status.getReasonPhrase();
    }

    getStatusLine() {
        return "HTTP/" + this.getVersion() + " " + this.getStatusCode() + " " + this.getReasonPhrase();
    }

    getVersion() {
        return this.version;
    }

    isClientError() {
        return this.status.isClientError();
    }

    isHost() {
        return this.status.getStatusCode() === 0;
    }

    isInformational() {
        return this.status.isInformational();
    }

    isRedirectionCode() {
        return this.status.isRedirection();
    }

    isServerError() {
        return this.status.isServerError();
    }

    isSuccess() {
        return this.status.isSuccess();
    }

    toString() {
        return this.getStatusLine();
    }
}

export const CONNECT = "CONNECT";
export const DELETE = "DELETE";
export const GET = "GET";
export const HEAD = "HEAD";
export const OPTIONS = "OPTIONS";
export const POST = "POST";
export const PUT = "PUT";
export const TRACE = "TRACE";

export const UNSENT = 0;
export const OPENED = 1;
export const HEADERS_RECEIVED = 2;
export const LOADING = 3;
export const DONE = 4;

export const ARRAY_BUFFER = "arraybuffer";
export const BLOB = "blob";
export const DOCUMENT = "document";
export const JSON = "json";
export const TEXT = "text";
export const UNKNOWN = "";

export class HTTPMessage {

    constructor() {

    }

    static getExcludeHeaders() {
        return [].concat(EXCLUDE_HEADERS);
    }

    getMessageBody() {
        return null;
    }

    getMessageHeader(field) {
        return null
    }

    getMessageHeaders() {
        return null;
    }

    static getNonStandardRequestHeaders() {
        return [].concat(NON_STANDARD_REQUEST_HEADERS);
    }

    static getNonStandardResponseHeaders() {
        return [].concat(NON_STANDARD_RESPONSE_HEADERS);
    }

    static getRestrictedHeaders() {
        return [].concat(RESTRICTED_HEADERS);
    }

    static getStandardRequestHeaders() {
        return [].concat(STANDARD_REQUEST_HEADERS);
    }

    static getStandardResponseHeaders() {
        return [].concat(STANDARD_RESPONSE_HEADERS);
    }

    reset() {

    }

    setup(message) {

    }
}

export class HTTPQuery {

    constructor(options) {
        this.parameters = [];
        this.putAll(options);
    }

    at(index = 0) {
        return this.parameters[index].value;
    }

    clone() {
        return new HTTPQuery(this);
    }

    get(key = '') {
        let values = [];
        let value = null;
        let nameValue = null;
        let len = this.parameters.length;
        while (len--) {
            nameValue = this.parameters[len];
            value = nameValue[key];
            if (value !== null) {
                values.push(value);
            }
        }
        if (values.length === 1) {
            return values[0];
        } else if (values.length > 1) {
            return values;
        }
    }

    put(key = '', value = '') {
        this.parameters.push({
            key: key,
            value: value
        });
    }

    putAll(options) {
        if (options === null) {
            return;
        }
        if (Array.isArray(options)) {
            let nameValue = null;
            let array = options;
            let len = array.length;
            while (len--) {
                nameValue = array[len];
                if (nameValue.constructor === Object &&
                    nameValue.hasOwnProperty("key") &&
                    nameValue.hasOwnProperty("value")) {
                    this.put(nameValue["key"], nameValue["value"]);
                }
            }
        } else if (options.constructor === Object) {
            for (let key in options) {
                if (options.hasOwnProperty(key)) {
                    this.put(key, options[key]);
                }
            }
        } else if (typeof options === "string") {
            let pairs = options.split("&");
            let len = pairs.length;
            let pair = null;
            let part = null;
            while (len--) {
                pair = pairs[len];
                if (pair !== null && pair.length > 0) {
                    part = pair.split("=");
                    this.put(part[0], part[1]);
                }
            }
        } else if (options instanceof HTTPQuery) {
            this.putAll(options.parameters);
        }
    }

    size() {
        return this.parameters.length;
    }

    toString() {
        let segments = [];
        let nameValue = null;
        let len = this.parameters.length;
        while (len--) {
            nameValue = this.parameters[len];
            segments[len] = encodeURIComponent(nameValue.name) + "=" + encodeURIComponent(nameValue.value);
        }
        return segments.join("&");
    }
}

export const ACCESS_CONTROL_ALLOW_ORIGIN = "Access-Control-Allow-Origin";
export const ACCEPT_PATCH = "Accept-Patch";
export const ACCEPT_RANGES = "Accept-Ranges";
export const AGE = "Age";
export const ALLOW = "Allow";
export const ALT_SVC = "Alt-Svc";
export const CONTENT_DISPOSITION = "Content-Disposition";
export const CONTENT_ENCODING = "Content-Encoding";
export const CONTENT_LANGUAGE = "Content-Language";
export const CONTENT_LOCATION = "Content-Location";
export const CONTENT_RANGE = "Content-Range";
export const CONTENT_TYPE = "Content-Type";
export const ETAG = "ETag";
export const EXPIRES = "Expires";
export const LAST_MODIFIED = "Last-Modified";
export const LINK = "Link";
export const LOCATION = "Location";
export const P3P = "P3P";
export const PRAGMA = "Pragma";
export const PROXY_AUTHENTICATE = "Proxy-Authenticate";
export const PUBLIC_KEY_PINS = "Public-Key-Pins";
export const REFRESH = "Refresh";
export const RETRY_AFTER = "Retry-After";
export const SERVER = "Server";
export const SET_COOKIE = "Set-Cookie";
export const STATUS = "Status";
export const STRICT_TRANSPORT_SECURITY = "Strict-Transport-Security";
export const TRAILER = "Trailer";
export const TRANSFER_ENCODING = "Transfer-Encoding";
export const TSV = "TSV";
export const UPGRADE = "Upgrade";
export const VARY = "Vary";
export const VIA = "Via";
export const WARNING = "Warning";
export const WWW_AUTHENTICATE = "WWW-Authenticate";
export const X_FRAME_OPTIONS = "X-Frame-Options";

export class HTTPResponse extends HTTPMessage {

    constructor({
                    body = '',
                    headers = '',
                    responseType = UNKNOWN,
                    readyState = UNSENT,
                    statusLine = new HTTPStatusLine(),
                    lengthComputable = false,
                    loaded = 0,
                    total = 0,
                    startTime = 0,
                    endTime = 0,
                    timeStamp = 0,
                    hasError = false,
                    isAborted = false,
                    isTimeout = false,
                    isCached = false,
                    throwable = null
                } = {}) {
        super();
        this.setup({
            body,
            headers,
            responseType,
            readyState,
            statusLine,
            lengthComputable,
            loaded,
            total,
            startTime,
            endTime,
            timeStamp,
            hasError,
            isAborted,
            isTimeout,
            isCached,
            throwable
        });
    }

    getContentEncoding() {
        return this.getMessageHeader(CONTENT_ENCODING);
    }

    getContentLength() {
        return parseInt(this.getMessageHeader(CONTENT_LENGTH));
    }

    getContentType() {
        return this.getMessageHeader(CONTENT_TYPE);
    }

    static getCookie(name) {
        name = name.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
        let regex = new RegExp('(?:^|;)\\s?' + name + '=(.*?)(?:;|$)', 'i');
        let match = document.cookie.match(regex);
        if (match) {
            return unescape(match[1]);
        }
        return null;
    }

    getDate() {
        let date = this.getMessageHeader(DATE);
        if (date !== null) {
            return Date.parse(date);
        }
        return 0;
    }

    getElapsedTime() {
        return this.getEndTime() - this.getStartTime();
    }

    getEndTime() {
        return this.options.endTime;
    }

    getException() {
        return this.options.exception;
    }

    getExpiration() {
        let date = this.getMessageHeader(EXPIRES);
        if (date !== null) {
            return Date.parse(date);
        }
        return 0;
    }

    getLastModified() {
        let date = this.getMessageHeader(LAST_MODIFIED);
        if (date !== null) {
            return Date.parse(date);
        }
        return 0;
    }

    getLoaded() {
        return this.options.loaded;
    }

    getMessageBody() {
        return this.options.body;
    }

    getMessageHeader(field) {
        return this.options.headers[field];
    }

    getMessageHeaders() {
        return this.options.headers;
    }

    getReadyState() {
        return this.options.readyState;
    }

    getResponseType() {
        return this.options.responseType;
    }

    getStartTime() {
        return this.options.startTime;
    }

    getStatusLine() {
        return this.options.statusLine;
    }

    getTimeStamp() {
        return this.options.timeStamp;
    }

    getTotal() {
        return this.options.total;
    }

    hasError() {
        return this.options.error;
    }

    isAborted() {
        return this.options.aborted;
    }

    isCached() {
        return this.options.useCaches;
    }

    isDone() {
        return this.getReadyState() === DONE;
    }

    isHeadersReceived() {
        return this.getReadyState() === HEADERS_RECEIVED;
    }

    isLengthComputable() {
        return this.options.lengthComputable;
    }

    isLoading() {
        return this.getReadyState() === LOADING;
    }

    isOpened() {
        return this.getReadyState() === OPENED;
    }

    isTimeout() {
        return this.options.timeout;
    }

    isUnset() {
        return this.getReadyState() === UNSENT;
    }

    static parseMessageHeaders(headers = '') {
        let result = {};
        if (headers.length > 0) {
            let array = headers.split("\n");
            let len = array.length, parts = null, field = null, value = null, key = null;
            while (len--) {
                field = array[len];
                if (field.length !== 0) {
                    parts = field.split(":");
                    key = parts[0].trim();
                    value = parts[1].trim();
                    result[key] = value;
                }
            }
        }
        return result;
    }

    reset() {
        this.options = {
            headers: {},
            body: null,
            aborted: false,
            cached: false,
            endTime: Date.now(),
            error: false,
            exception: null,
            lengthComputable: false,
            loaded: 0,
            startTime: Date.now(),
            responseType: UNKNOWN,
            readyState: UNSENT,
            statusLine: null,
            timeout: 0,
            timeStamp: 0,
            total: 0
        };
    }

    setAborted(aborted = false) {
        this.options.aborted = aborted;
    }

    setCached(cached = false) {
        this.options.useCaches = cached;
    }

    setEndTime(time = 0) {
        this.options.endTime = time;
    }

    setError(error = false) {
        this.options.error = error;
    }

    setException(exception = null) {
        this.options.exception = exception;
    }

    setLengthComputable(lengthComputable = false) {
        this.options.lengthComputable = lengthComputable;
    }

    setLoaded(loaded = 0) {
        this.options.loaded = loaded;
    }

    setMessageBody(body = '') {
        this.options.body = body;
    }

    setMessageHeader(field = '', value = '') {
        this.options.headers[field] = value;
    }

    setMessageHeaders(messageHeaders = {}) {
        this.options.headers = messageHeaders;
    }

    setReadyState(state = UNSENT) {
        this.options.readyState = state;
    }

    setResponseType(type = UNKNOWN) {
        this.options.responseType = type;
    }

    setStartTime(time = 0) {
        this.options.startTime = time;
    }

    setStatusLine(statusLine = new HTTPStatusLine()) {
        this.options.statusLine = statusLine;
    }

    setTimeout(timeout = false) {
        this.options.timeout = timeout;
    }

    setTimeStamp(timeStamp = 0) {
        this.options.timeStamp = timeStamp;
    }

    setTotal(total = 0) {
        this.options.total = total;
    }

    setup({
              body = '',
              headers = '',
              responseType = UNKNOWN,
              readyState = UNSENT,
              statusLine = new HTTPStatusLine(),
              lengthComputable = false,
              loaded = 0,
              total = 0,
              startTime = 0,
              endTime = 0,
              timeStamp = 0,
              hasError = false,
              isAborted = false,
              isTimeout = false,
              isCached = false,
              throwable = null
          } = {}) {
        let time = Date.now();
        this.setMessageBody(body);
        this.options.headers = HTTPResponse.parseMessageHeaders(headers);
        this.setEndTime(endTime || Date.now());
        this.setError(hasError);
        this.setAborted(isAborted);
        this.setCached(isCached);
        this.setLengthComputable(lengthComputable);
        this.setLoaded(loaded);
        this.setResponseType(responseType);
        this.setStartTime(startTime || time);
        this.setReadyState(readyState);
        this.setStatusLine(statusLine);
        this.setException(throwable);
        this.setTimeout(isTimeout);
        this.setTimeStamp(timeStamp || time);
        this.setTotal(total);
    }

    toString() {
        let buffer = "";
        buffer += "HTTPResponse[type: " + this.options.responseType;
        buffer += ",\nloaded: " + this.options.loaded;
        buffer += ",\ntotal: " + this.options.total;
        buffer += ",\nlengthComputable: " + this.options.lengthComputable;
        buffer += ",\ntimeStamp: " + this.options.timeStamp;
        buffer += ",\nheaders: " + this.options.headers;
        buffer += ",\nreadyState: " + this.options.readyState;
        buffer += ",\nstatusLine: " + (this.options.statusLine !== null ? this.options.statusLine : "null");
        buffer += ",\nstartTime: " + this.options.startTime;
        buffer += ",\nendTime: " + this.options.endTime;
        buffer += ",\nerror: " + this.options.error;
        buffer += ",\nexception: " + (this.options.exception !== null ? this.options.exception : "null");
        buffer += ",\nbody: " + (this.options.body !== null ? this.options.body : "null");
        buffer += ",\ntimeout: " + this.options.timeout;
        buffer += ",\naborted: " + this.options.aborted;
        buffer += ",\nuseCaches: " + this.options.useCaches;
        buffer += "]";
        return buffer;
    }

    updateEvent(event) {
        this.options.lengthComputable = event.lengthComputable;
        if (this.options.lengthComputable) {
            this.options.loaded = event.loaded;
            this.options.total = event.total;
        } else {
            this.options.loaded = this.options.total = 0;
        }
        this.options.timeStamp = event.timeStamp;
        this.options.eventType = event.type;
    }
}

export const ACCEPT = "Accept";
export const ACCEPT_CHARSET = "Accept-Charset";
export const ACCEPT_ENCODING = "Accept-Encoding";
export const ACCEPT_LANGUAGE = "Accept-Language";
export const ACCEPT_DATETIME = "Accept-Datetime";
export const AUTHORIZATION = "Authorization";
export const CACHE_CONTROL = "Cache-Control";
export const CONNECTION = "Connection";
export const COOKIE = "Cookie";
export const CONTENT_LENGTH = "Content-Length";
export const CONTENT_MD5 = "Content-MD5";
export const DATE = "Date";
export const EXPECT = "Expect";
export const FORWARDED = "Forwarded";
export const FROM = "From";
export const HOST = "Host";
export const IF_MATCH = "If-Match";
export const IF_MODIFIED_SINCE = "If-Modified-Since";
export const IF_NONE_MATCH = "If-None-Match";
export const IF_RANGE = "If-Range";
export const IF_UNMODIFIED_SINCE = "If-Unmodified-Since";
export const MAX_FORWARDS = "Max-Forwards";
export const ORIGIN = "Origin";
export const PROXY_AUTHORIZATION = "Proxy-Authorization";
export const RANGE = "Range";
export const REFERER = "Referer";
export const USER_AGENT = "User-Agent";

export class HTTPRequest extends HTTPMessage {

    constructor({line = new HTTPRequestLine(), headers = {}, body = null} = {}) {
        super();
        this.setup({line, headers, body});
    }

    getMessageBody() {
        return this.messageBody;
    }

    getMessageHeader(field) {
        return this.messageHeaders[field];
    }

    getMessageHeaders() {
        return this.messageHeaders;
    }

    getRequestLine() {
        return this.requestLine;
    }

    reset() {
        this.messageHeaders = {};
        this.requestLine = null;
        this.messageBody = null;
    }

    setMessageBody(messageBody) {
        this.messageBody = messageBody;
    }

    setMessageHeader(field = '', value = '') {
        this.messageHeaders[field] = value;
    }

    setMessageHeaders(messageHeaders = {}) {
        this.messageHeaders = messageHeaders;
    }

    setRequestLine(requestLine = new HTTPRequestLine()) {
        this.requestLine = requestLine;
    }

    setup({line = new HTTPRequestLine(), headers = {}, body = null} = {}) {
        this.requestLine = line;
        this.messageHeaders = headers;
        this.messageBody = body;
    }
}

export class HTTPRequestHandler {

    constructor({onHandleRequest = null} = {}) {
        if (onHandleRequest !== null) {
            this.onHandleRequest = onHandleRequest;
        }
    }

    onHandleRequest(event) {

    }

}

const HTTP_CACHE = {};

export const ABORT_STATE = "abort";
export const ERROR_STATE = "error";
export const LOAD_STATE = "load";
export const LOAD_END_STATE = "loadend";
export const LOAD_START_STATE = "loadstart";
export const PROGRESS_STATE = "progress";
export const TIMEOUT_STATE = "timeout";
export const TIMEOUT = 300;

export class HTTPConnection {

    constructor({
                    url,
                    method = GET,
                    asynchronous = true,
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
                    reuseClient = false,
                    maxRetry = 0,
                    handlers = [],
                    autostart = true
                } = {}) {
        this.reset();
        this.setup({
            url,
            method,
            asynchronous,
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
            reuseClient,
            maxRetry,
            handlers,
            autostart
        });
    }

    abort() {
        let client = this.properties.get("client");
        if (client !== null && this.isConnected()) {
            client.abort();
        } else {
            HTTPConnection.checkNotConnected(this);
        }
    }

    addListener(listener) {
        let index = this.listeners.indexOf(listener);
        if (index === -1) {
            this.listeners.push(listener);
        }
    }

    static checkNotConnected(connection) {
        if (connection.properties !== null && connection.isConnected()) {
            throw new URIError("IllegalStateException " + connection.getRequestUrl() + " Already connected");
        }
    }

    checkMessageHeader(key, value) {
        let LF = '\n';
        let index = key.indexOf(LF);
        if (index !== -1) {
            throw new EvalError("IllegalArgumentException Illegal character(s) in message header field: " + key);
        }
        if (value === null) {
            return;
        }
        let c = null;
        index = value.indexOf(LF);
        while (index !== -1) {
            index++;
            if (index < value.length) {
                c = value.charAt(index);
                if ((c === ' ') || (c === '\t')) {
                    index = value.indexOf(LF, index);
                    continue;
                }
            }
            throw new EvalError("IllegalArgumentException Illegal character(s) in message header value: " + value);
        }
    }

    close() {
        if (this.isConnected()) {
            this.disconnect();
            this.stopListeners();
            let reuseClient = this.properties.get("reuseClient");
            if (reuseClient) {
                let client = this.properties.get("client");
                if (client !== null) {
                    let response = this.properties.get("response");
                    response.reset();
                }
            } else {
                this.reset();
            }
        }
    }

    static createNewClient() {
        let win = window, C = win["XMLHttpRequest"]
            || win["XDomainRequest"]
            || win["ActiveXObject"]
            || win["Microsoft.XMLHTTP"]
            || win["Msxml2.XMLHTTP"]
            || win["Msxml2.XMLHTTP.3.0"]
            || win["Msxml2.XMLHTTP.6.0"];
        if (C !== null) {
            return new C();
        }
        return null;
    }

    disconnect() {
        this.properties.put("connected", false);
    }

    getClient() {
        return this.properties.get("client");
    }

    static getFormDataSize(formData) {
        let entries = formData.entries();
        let len = 0;
        for (const entry of entries) {
            let val = entry[1];
            if (typeof val === "string") {
                len += val.length;
            } else if (val instanceof Blob) {
                len += val.size;
            } else if (val instanceof File) {
                len += val.fileSize;
            }
        }
        return len;
    }

    getMaxRetry() {
        return this.properties.get("maxRetry");
    }

    getRequestBody() {
        return this.properties.get("body");
    }

    getRequestHeader(field) {
        let headers = this.properties.get("headers");
        if (headers !== null) {
            return headers[field];
        }
        return null;
    }

    getRequestHeaders() {
        return this.properties.get("headers");
    }

    getRequestIfModifiedSince() {
        return this.properties.get("ifModifiedSince");
    }

    getRequestMessage() {
        return this.properties.get("request");
    }

    getRequestMethod() {
        return this.properties.get("method");
    }

    getRequestOverridedMimeTypes() {
        return this.properties.get("overridedMimeTypes");
    }

    getRequestPassword() {
        return this.properties.get("password");
    }

    getTimeout() {
        return this.properties.get("timeout");
    }

    getRequestUrl() {
        return this.properties.get("url");
    }

    getRequestUser() {
        return this.properties.get("user");
    }

    getResponseType() {
        return this.properties.get("responseType");
    }

    static hostsEqual(uri1, uri2) {
        return char.equalsIgnoreCase(uri1.host, uri2.host) ? true : uri1.host === null && uri2.host === null ? true : uri2.host === null;
    }

    isAsyncRequest() {
        return this.properties.get("async");
    }

    isConnected() {
        return this.properties.get("connected");
    }

    isExternalMessageHeaderAllowed(key, value) {
        this.checkMessageHeader(key, value);
        return !this.isRestrictedHeader(key, value);
    }

    static isReachable({url, maxRetry = 3, timeout = 0, onComplete}) {
        new HTTPConnection({
            url: url || "https://www.google.com",
            method: HEAD,
            responseType: TEXT,
            timeout,
            maxRetry,
            handlers: {
                onHandleRequest: (event) => {
                    if (event.type === LOAD_END_STATE) {
                        onComplete(event.response.getException() !== null);
                    }
                }
            }
        });
    }

    isRequestWithCache() {
        return this.properties.get("withCache");
    }

    isRequestWithCredentials() {
        return this.properties.get("withCredentials");
    }

    isRequestWithTimestamp() {
        return this.properties.get("withTimestamp");
    }

    isRestrictedHeader(key, value) {
        let allowRestrictedHeaders = this.properties.get("allowRestrictedHeaders");
        if (allowRestrictedHeaders) {
            return false;
        }
        if (RESTRICTED_HEADERS.indexOf(key) !== -1) {
            key = key.toLowerCase();
            if (key === "connection" && char.equalsIgnoreCase(value, "close")) {
                return false;
            }
            return true;
        } else if (char.startsWith(key, "sec-")) {
            return true;
        }
        return false;
    }

    isReuseClient() {
        return this.properties.get("reuseClient");
    }

    needToRetry() {
        return this.properties.get("maxRetry") > 0;
    }

    notifyListeners(type, request, response) {
        for (const listener of this.listeners) {
            listener.onHandleRequest({type, request, response});
        }
    }

    onProgress(event) {
        event = event || window.event;
        let response = this.properties.get("response");
        let request = this.properties.get("request");
        let maxRetry = this.getMaxRetry();
        let needToRetry = this.needToRetry();
        let type = event.type;
        response.updateEvent(event);
        switch (type) {
            case LOAD_START_STATE:
                response.setStartTime(Date.now());
            case PROGRESS_STATE:
                response.setLengthComputable(event.lengthComputable);
                response.setLoaded(event.loaded);
                response.setTotal(event.total);
            case LOAD_STATE:
                this.notifyListeners(type, request, response);
                break;
            case ABORT_STATE:
                response.setAborted(true);
            case ERROR_STATE:
                response.setError(true);
            case TIMEOUT_STATE:
                response.setTimeout(true);
                if (!needToRetry) {
                    this.notifyListeners(type, request, response);
                }
                break;
            case LOAD_END_STATE:
                response.setEndTime(Date.now());
                if (!needToRetry) {
                    let cached = this.isRequestWithCache();
                    let url = this.getRequestUrl();
                    if (cached) {
                        HTTP_CACHE[url] = {
                            type: type,
                            request: request,
                            response: response
                        }
                    }
                    response.setCached(cached);
                    this.notifyListeners(type, request, response);
                } else {
                    this.retry(maxRetry - 1);
                }
                break;
        }
    }

    onReadyStateChange(event) {
        event = event || window.event;
        let client = event.target || event.srcElement;
        let status = client.status;
        let readyState = client.readyState;
        let response = this.properties.get("response");
        let headers = client.getAllResponseHeaders();
        response.setReadyState(readyState);
        if (readyState === UNSENT || readyState === DONE) {
            let body = null;
            let hasBody = false;
            let isLocal = false;
            let type = client.responseType;
            let statusError = false;
            let method = this.getRequestMethod();
            let statusText = client.statusText;
            let httpStatus = new HTTPStatus(status, statusText);
            let statusLine = new HTTPStatusLine(httpStatus);
            let isRedirection = httpStatus.isRedirection();
            if (statusText === null || statusText.length === 0) {
                statusText = HTTPStatus.getReason(status);
            }
            if ((status === 0) || (status >= 200 && status < 300) || isRedirection) {
                switch (status) {
                    //case 304:
                    // not modified
                    case 206:
                    // partial content
                    case 203:
                    //Non-Authoritative Information
                    case 0:
                        isLocal = true;
                    case 200:
                        isRedirection = client.responseURL === this.getRequestUrl();
                        switch (type) {
                            case ARRAY_BUFFER:
                            case BLOB:
                            case JSON:
                            case UNKNOWN:
                                body = client.response;
                                hasBody = body !== null;
                                break;
                            case DOCUMENT:
                                body = client.responseXML;
                                hasBody = body !== null;
                                break;
                            case TEXT:
                                body = client.responseText;
                                hasBody = body !== null && body.length > 0;
                                break;
                        }
                        break;
                    case 201:
                    //created
                    case 202:
                    //accepted
                    case 204:
                        //no content
                        hasBody = false;
                        break;
                }
            } else {
                hasBody = false;
                this.properties.put("failedOnce", statusError = (status >= 400 && status < 500) || (status >= 500));
            }
            if (statusError) {
                response.setException(new URIError(statusText));
            }
            let hasHeaders = headers.length > 0;
            if ((method === HEAD || method === CONNECT || method === OPTIONS || method === TRACE)
                && !hasHeaders) {
                response.setException(new URIError(statusText));
                this.properties.put("failedOnce", true);
            }
            if (!isLocal &&
                (!(hasBody && hasHeaders) &&
                (status !== 201 || status !== 202 || status !== 204))) {
                response.setException(new URIError(statusText));
                this.properties.put("failedOnce", true);
            }
            response.setError(this.properties.get("failedOnce"));
            response.setMessageBody(body);
            response.setStatusLine(statusLine);
        } else if (readyState === HEADERS_RECEIVED) {
            response.setMessageHeaders(response.parseMessageHeaders(headers));
        }
    }

    open({
             url,
             method = GET,
             asynchronous = true,
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
             reuseClient = false,
             maxRetry = 0,
             handlers = [],
             autostart = true
         } = {}) {
        if (!this.isConnected()) {
            this.setup({
                url,
                method,
                asynchronous,
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
                reuseClient,
                maxRetry,
                handlers,
                autostart
            });
            let url = this.getRequestUrl();
            if (url === null) {
                throw new URIError("Unspecified url");
            }
            if (this.isRequestWithCache() && HTTP_CACHE[url] === null) {
                let components = HTTP_CACHE[url];
                let type = components.type;
                let request = components.request;
                let response = components.response;
                this.notifyListeners(type, request, response);
                return;
            }
            let method = this.getRequestMethod();
            if (PERMITTED_USER_METHODS.indexOf(method.toUpperCase()) === -1) {
                throw new URIError("ProtocolException Invalid HTTP method: " + method);
            }
            if (this.isRequestWithTimestamp()) {
                url += ((/\?/).test(url) ? "&" : "?") + (new Date()).getTime();
            }
            let body = this.getRequestBody();
            let bodyDefined = body !== null;
            if ((method === POST || method === PUT) && !bodyDefined) {
                throw new URIError("Unspecified body with HTTP method " + method);
            }
            let responseType = this.getResponseType();
            this.properties.get("response").setResponseType(responseType);
            if (bodyDefined && (method === GET || method === DELETE)) {
                if (typeof body === "string") {
                    url += "?" + body;
                } else if (body.constructor === Object) {
                    url += "?" + (new HTTPQuery(body).toString());
                } else {
                    throw new TypeError("Unsupported data of type " + body.constructor + " for the specified HTTP method " + method);
                }
            }
            let client = null;
            if (this.isReuseClient()) {
                client = this.getClient();
            }
            if (client === null) {
                client = HTTPConnection.createNewClient();
            }
            let isBinaries = responseType === ARRAY_BUFFER || responseType === BLOB;
            let timeout = this.getRequestTimeout();
            if (isNaN(timeout)) {
                timeout = 0;
            }
            if (timeout > 0) {
                client.timeout = timeout;
            } else if (timeout < -1) {
                throw new RangeError("IllegalArgumentException timeout can not be negative");
            }
            this.setClient(client);
            this.startListeners();
            client.responseType = responseType;
            let withCredentials = this.isRequestWithCredentials();
            if (withCredentials) {
                client.withCredentials = withCredentials;
            }
            let user = this.getRequestUser();
            let async = this.isAsyncRequest();
            let password = this.getRequestPassword();
            if (user !== null && password !== null) {
                client.open(method, url, async, user, password);
            } else {
                client.open(method, url, async);
            }
            let useCaches = this.isRequestWithCache();
            if (!useCaches) {
                this.setRequestHeader("Cache-Control", "no-cache");
                this.setRequestHeader("Pragma", "no-cache");
            }
            //this.setRequestHeader("User-Agent", navigator.userAgent);
            let parsedUrl = HTTPConnection.parseURI(url, false);
            this.setRequestHeader("Host", parsedUrl.host + ":" + (parsedUrl.port || 80));
            this.setRequestHeader("Accept", ACCEPT_STRING);
            //this.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            let failedOnce = this.properties.get("failedOnce");
            if (!failedOnce) {
                this.setRequestHeader("Connection", "keep-alive");
            } else {
                this.setRequestHeader("Connection", "close");
            }
            let modTime = this.getRequestIfModifiedSince();
            if (modTime !== 0) {
                let date = new Date(modTime);
                this.setRequestHeader("If-Modified-Since", date.toString());
            }
            let request = this.properties.get("request");
            request.reset();
            request.setRequestLine(new HTTPRequestLine(method, url, VERSION));
            //let isUrlEncoded = false;
            //let isMultiformData = false;
            let headers = this.getRequestHeaders();
            let field = null;
            for (let p in headers) {
                if (headers.hasOwnProperty(p)) {
                    field = headers[p];
                    if (this.isExternalMessageHeaderAllowed(p, field)) {
                        request.setMessageHeader(p, field);
                        client.setRequestHeader(p, field);
                        if (char.equalsIgnoreCase(p, "Content-Type")) {

                        }
                        /*
                         if (char.equalsIgnoreCase(p, "Content-Type")) {
                         isUrlEncoded = headers[p].indexOf(APPLICATION_URL_ENCODED) != -1;
                         isMultiformData = headers[p].indexOf(MULTIPART_FORM_DATA) != -1;
                         }
                         */
                    }
                }
            }
            if (bodyDefined && (method === POST || method === PUT)) {
                let formData = null;
                if (body instanceof ArrayBuffer) {
                    this.setRequestHeader("Content-Length", body.byteLength);
                } else if (body instanceof Blob) {
                    this.setRequestHeader("Content-Length", body.size);
                } else if (body instanceof Document) {
                    this.setRequestHeader("Content-Length", body.toString().length);
                } else if (typeof body === "string") {
                    this.setRequestHeader("Content-Length", body.length);
                } else if (body instanceof FormData) {
                    this.setRequestHeader("Content-Length", "" + HTTPConnection.getFormDataSize(formData = body));
                    //this.setRequestHeader("Content-Type", APPLICATION_URL_ENCODED);
                } else if (body instanceof HTMLFormElement) {
                    this.setRequestHeader("Content-Length", "" + HTTPConnection.getFormDataSize(formData = new FormData(body)));
                } else if (body.constructor === Object || Array.isArray(body)) {
                    body = JSON.stringify(body);
                    this.setRequestHeader("Content-Length", body.length);
                } else {
                    throw new TypeError("Unsupported data of type " + body.constructor + " for the specified HTTP method " + method);
                }
                if (formData !== null) {

                }
            }
            request.setMessageBody(body);
            let overridedMimeTypes = this.getRequestOverridedMimeTypes();
            if (overridedMimeTypes !== null) {
                for (const type of overridedMimeTypes) {
                    client.overrideMimeType(type);
                }
            }
            if (isBinaries) {
                client.overrideMimeType(X_USER_DEFINED);
            }
            try {
                this.setConnected();
                client.send(body);
            } catch (ex) {
                this.disconnect();
                console.log(ex);
            }
        } else {
            throw new URIError("Request " + this.getRequestUrl() + " is connected");
        }
    }

    static parseURI(url, strictMode = false) {
        let options = {
            strictMode,
            key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
            q: {
                name: "queryKey",
                parser: /(?:^|&)([^&=]*)=?([^&]*)/g
            },
            parser: {
                strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
            }
        };
        let o = options,
            m = o.parser[o.strictMode ? "strict" : "loose"].exec(url),
            uri = {},
            i = 14;
        while (i--) uri[o.key[i]] = m[i] || "";
        uri[o.q.name] = {};
        uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
            if ($1) uri[o.q.name][$1] = $2;
        });
        return uri;
    }

    removeListener(listener) {
        let index = this.listeners.indexOf(listener);
        if (index !== -1) {
            this.listeners.splice(index, 1);
        }
    }

    reset() {
        HTTPConnection.checkNotConnected(this);
        this.listeners = [];
        this.properties = new AbstractMap();
        this.properties.put("request", new HTTPRequest());
        this.properties.put("response", new HTTPResponse());
        this.properties.put("headers", {});
        this.properties.put("async", true);
        this.properties.put("method", GET);
        this.properties.put("responseType", UNKNOWN);
        this.properties.put("useCaches", false);
        this.properties.put("connected", false);
        this.properties.put("useTimestamp", false);
        this.properties.put("withCredentials", false);
        this.properties.put("timeout", 0);
        this.properties.put("ifModifiedsince", 0);
        this.properties.put("allowRestrictedHeaders", false);
        this.properties.put("reuseClient", false);
        this.properties.put("maxRetry", 0);
        this.mRetryOptions = null;
        let client = this.properties.get("client");
        if (client !== null) {
            this.properties.put("client", null);
            client = null;
        }
    }

    retry(count = 0) {
        let options = this.mRetryOptions;
        options.maxRetry = count;
        this.close();
        this.setup(options);
        if (!this.isConnected()) {
            this.open();
        }
    }

    setAsyncRequest(async = true) {
        HTTPConnection.checkNotConnected(this);
        this.properties.put("async", async);
    }

    setClient(client) {
        HTTPConnection.checkNotConnected(this);
        if (client !== null) {
            this.properties.put("client", client);
        }
    }

    setConnected() {
        HTTPConnection.checkNotConnected(this);
        this.properties.put("connected", true);
    }

    setRequestHandler(handler) {
        if (handler !== null) {
            if (handler instanceof HTTPRequestHandler) {
                this.addListener(handler);
            } else {
                if (handler.hasOwnProperty("handleRequest")) {
                    this.addListener(new HTTPRequestHandler(handler));
                }
            }
        }
    }

    setRequestBody(body) {
        HTTPConnection.checkNotConnected(this);
        if (body !== null) {
            this.properties.put("body", body);
        }
    }

    setRequestHeader(field = '', value = '') {
        HTTPConnection.checkNotConnected(this);
        let headers = this.properties.get("headers");
        if (headers[field] === null) {
            headers[field] = value;
        }
    }

    setRequestHeaders(headers = {}) {
        HTTPConnection.checkNotConnected(this);
        this.properties.put("headers", headers);
    }

    setRequestIfModifiedSince(ifModifiedSince = 0) {
        HTTPConnection.checkNotConnected(this);
        this.properties.put("ifModifiedSince", ifModifiedSince);
    }

    setRequestMethod(method = GET) {
        HTTPConnection.checkNotConnected(this);
        if ((char.equalsIgnoreCase(method, CONNECT) ||
            char.equalsIgnoreCase(method, DELETE) ||
            char.equalsIgnoreCase(method, GET) ||
            char.equalsIgnoreCase(method, HEAD) ||
            char.equalsIgnoreCase(method, OPTIONS) ||
            char.equalsIgnoreCase(method, POST) ||
            char.equalsIgnoreCase(method, PUT) ||
            char.equalsIgnoreCase(method, TRACE))) {
            this.properties.put("method", method);
        }
    }

    setRequestOverridedMimeTypes(overridedMimeTypes = []) {
        HTTPConnection.checkNotConnected(this);
        if (Array.isArray(overridedMimeTypes)) {
            this.properties.put("overridedMimeTypes", overridedMimeTypes);
        }
    }

    setRequestPassword(password) {
        HTTPConnection.checkNotConnected(this);
        if (password !== null) {
            this.properties.put("password", password);
        }
    }

    setRequestTimeout(timeout = 0) {
        HTTPConnection.checkNotConnected(this);
        this.properties.put("timeout", timeout);
    }

    setRequestUrl(url) {
        HTTPConnection.checkNotConnected(this);
        if (url !== null) {
            this.properties.put("url", url);
        }
    }

    setRequestUser(user) {
        HTTPConnection.checkNotConnected(this);
        if (user !== null) {
            this.properties.put("user", user);
        }
    }

    setRequestWithCache(useCaches = false) {
        HTTPConnection.checkNotConnected(this);
        this.properties.put("withCache", useCaches);
    }

    setRequestWithCredentials(withCredentials = false) {
        HTTPConnection.checkNotConnected(this);
        this.properties.put("withCredentials", withCredentials);
    }

    setRequestWithRestrictedHeaders(allowRestrictedHeaders = true) {
        HTTPConnection.checkNotConnected(this);
        this.properties.put("withRestrictedHeaders", allowRestrictedHeaders);
    }

    setRequestWithTimestamp(withTimestamp = false) {
        HTTPConnection.checkNotConnected(this);
        this.properties.put("withTimestamp", withTimestamp);
    }

    setResponseType(responseType = UNKNOWN) {
        HTTPConnection.checkNotConnected(this);
        if ((char.equalsIgnoreCase(responseType, ARRAY_BUFFER) ||
            char.equalsIgnoreCase(responseType, BLOB) ||
            char.equalsIgnoreCase(responseType, DOCUMENT) ||
            char.equalsIgnoreCase(responseType, JSON) ||
            char.equalsIgnoreCase(responseType, TEXT) ||
            char.equalsIgnoreCase(responseType, UNKNOWN))
        ) {
            this.properties.put("responseType", responseType);
        }
    }

    setReuseClient(reuseClient = false) {
        this.properties.put("reuseClient", reuseClient);
    }

    setup({
              url,
              method = GET,
              asynchronous = true,
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
              reuseClient = false,
              maxRetry = 0,
              handlers = [],
              autostart = true
          } = {}) {
        HTTPConnection.checkNotConnected(this);
        this.properties.put("url", url);
        this.properties.put("method", method);
        this.properties.put("async", asynchronous);
        this.properties.put("user", user);
        this.properties.put("password", password);
        this.properties.put("overridedMimeTypes", overridedMimeTypes);
        this.properties.put("headers", headers);
        this.properties.put("body", body);
        this.properties.put("responseType", responseType);
        this.properties.put("timeout", timeout);
        this.properties.put("withTimestamp", withTimestamp);
        this.properties.put("withCredentials", withCredentials);
        this.properties.put("withCache", useCaches);
        this.properties.put("failedOnce", failedOnce);
        this.properties.put("ifModifiedSince", ifModifiedSince);
        this.properties.put("withRestrictedHeaders", withRestrictedHeaders);
        this.properties.put("reuseClient", reuseClient);
        this.properties.put("maxRetry", maxRetry);
        if (handlers !== null) {
            if (Array.isArray(handlers)) {
                for (const handler of handlers) {
                    this.setRequestHandler(handler);
                }
            } else {
                this.setRequestHandler(handlers);
            }
        }
        if (this.needToRetry()) {
            this.mRetryOptions = {
                url,
                method,
                asynchronous,
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
                reuseClient,
                maxRetry,
                handlers,
                autostart
            };
        }
        if (autostart) {
            this.open();
        }
    }

    startListeners() {
        let client = this.properties.get("client");
        if (client !== null) {
            if (this.mOnProgress === null && this.mOnReadyStateChange === null) {
                this.mOnProgress = this.onProgress.bind(this);
                this.mOnReadyStateChange = this.onReadyStateChange.bind(this);
                client.addEventListener("readystatechange", this.mOnReadyStateChange, false);
                client.addEventListener("loadstart", this.mOnProgress, false);
                client.addEventListener("progress", this.mOnProgress, false);
                client.addEventListener("abort", this.mOnProgress, false);
                client.addEventListener("error", this.mOnProgress, false);
                client.addEventListener("load", this.mOnProgress, false);
                client.addEventListener("timeout", this.mOnProgress, false);
                client.addEventListener("loadend", this.mOnProgress, false);
            }
        } else {
            HTTPConnection.checkNotConnected(this);
        }
    }

    stopListeners() {
        let client = this.properties.get("client");
        if (client !== null) {
            if (this.mOnProgress !== null && this.mOnReadyStateChange !== null) {
                client.removeEventListener("readystatechange", this.mOnReadyStateChange, false);
                client.removeEventListener("loadstart", this.mOnProgress, false);
                client.removeEventListener("progress", this.mOnProgress, false);
                client.removeEventListener("abort", this.mOnProgress, false);
                client.removeEventListener("error", this.mOnProgress, false);
                client.removeEventListener("load", this.mOnProgress, false);
                client.removeEventListener("timeout", this.mOnProgress, false);
                client.removeEventListener("loadend", this.mOnProgress, false);
                this.mOnReadyStateChange = null;
                this.mOnProgress = null;
            }
        } else {
            HTTPConnection.checkNotConnected(this);
        }
    }
}
