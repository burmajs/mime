import mime, { type Mime } from "./mime.js";

const typeCache = Object.create(null);

/**
 * @param {string} ext - The file extension to find the MIME type for
 * @returns {{type: string|undefined, typeOf: string|undefined}} An object with the MIME type and type (e.g. "text" or "image"), or undefined if not found
 * @example
 * import {mimeType} from "@burmajs/mime";
 * const {type, typeOf} = mimeType("html");
 * console.log(type); // "text/html"
 * console.log(typeOf); // "text"
 */
function mimeType(ext: string): {
	type: string | undefined;
	typeOf: string | undefined;
} {
	const ex = ext.startsWith(".") ? ext : `.${ext}`;
	const found = typeCache[ex] || (typeCache[ex] = mime[ex]);
	const type = found ? found.type : undefined;
	const typeOf = type ? type.split("/")[0] : undefined;
	return { type, typeOf };
}

export type { Mime };
export default mimeType;
