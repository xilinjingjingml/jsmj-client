/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.mahjong_base = (function() {

    /**
     * Namespace mahjong_base.
     * @exports mahjong_base
     * @namespace
     */
    var mahjong_base = {};

    mahjong_base.ReadyReq = (function() {

        /**
         * Properties of a ReadyReq.
         * @memberof mahjong_base
         * @interface IReadyReq
         * @property {boolean|null} [isReady] ReadyReq isReady
         */

        /**
         * Constructs a new ReadyReq.
         * @memberof mahjong_base
         * @classdesc Represents a ReadyReq.
         * @implements IReadyReq
         * @constructor
         * @param {mahjong_base.IReadyReq=} [properties] Properties to set
         */
        function ReadyReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReadyReq isReady.
         * @member {boolean} isReady
         * @memberof mahjong_base.ReadyReq
         * @instance
         */
        ReadyReq.prototype.isReady = false;

        /**
         * Creates a new ReadyReq instance using the specified properties.
         * @function create
         * @memberof mahjong_base.ReadyReq
         * @static
         * @param {mahjong_base.IReadyReq=} [properties] Properties to set
         * @returns {mahjong_base.ReadyReq} ReadyReq instance
         */
        ReadyReq.create = function create(properties) {
            return new ReadyReq(properties);
        };

        /**
         * Encodes the specified ReadyReq message. Does not implicitly {@link mahjong_base.ReadyReq.verify|verify} messages.
         * @function encode
         * @memberof mahjong_base.ReadyReq
         * @static
         * @param {mahjong_base.IReadyReq} message ReadyReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadyReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.isReady != null && message.hasOwnProperty("isReady"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isReady);
            return writer;
        };

        /**
         * Encodes the specified ReadyReq message, length delimited. Does not implicitly {@link mahjong_base.ReadyReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mahjong_base.ReadyReq
         * @static
         * @param {mahjong_base.IReadyReq} message ReadyReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadyReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReadyReq message from the specified reader or buffer.
         * @function decode
         * @memberof mahjong_base.ReadyReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mahjong_base.ReadyReq} ReadyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadyReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_base.ReadyReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.isReady = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReadyReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mahjong_base.ReadyReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mahjong_base.ReadyReq} ReadyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadyReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReadyReq message.
         * @function verify
         * @memberof mahjong_base.ReadyReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReadyReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.isReady != null && message.hasOwnProperty("isReady"))
                if (typeof message.isReady !== "boolean")
                    return "isReady: boolean expected";
            return null;
        };

        /**
         * Creates a ReadyReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mahjong_base.ReadyReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mahjong_base.ReadyReq} ReadyReq
         */
        ReadyReq.fromObject = function fromObject(object) {
            if (object instanceof $root.mahjong_base.ReadyReq)
                return object;
            var message = new $root.mahjong_base.ReadyReq();
            if (object.isReady != null)
                message.isReady = Boolean(object.isReady);
            return message;
        };

        /**
         * Creates a plain object from a ReadyReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mahjong_base.ReadyReq
         * @static
         * @param {mahjong_base.ReadyReq} message ReadyReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReadyReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.isReady = false;
            if (message.isReady != null && message.hasOwnProperty("isReady"))
                object.isReady = message.isReady;
            return object;
        };

        /**
         * Converts this ReadyReq to JSON.
         * @function toJSON
         * @memberof mahjong_base.ReadyReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReadyReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReadyReq;
    })();

    mahjong_base.ReadyRsp = (function() {

        /**
         * Properties of a ReadyRsp.
         * @memberof mahjong_base
         * @interface IReadyRsp
         * @property {number|null} [errCode] ReadyRsp errCode
         * @property {string|null} [errMsg] ReadyRsp errMsg
         */

        /**
         * Constructs a new ReadyRsp.
         * @memberof mahjong_base
         * @classdesc Represents a ReadyRsp.
         * @implements IReadyRsp
         * @constructor
         * @param {mahjong_base.IReadyRsp=} [properties] Properties to set
         */
        function ReadyRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReadyRsp errCode.
         * @member {number} errCode
         * @memberof mahjong_base.ReadyRsp
         * @instance
         */
        ReadyRsp.prototype.errCode = 0;

        /**
         * ReadyRsp errMsg.
         * @member {string} errMsg
         * @memberof mahjong_base.ReadyRsp
         * @instance
         */
        ReadyRsp.prototype.errMsg = "";

        /**
         * Creates a new ReadyRsp instance using the specified properties.
         * @function create
         * @memberof mahjong_base.ReadyRsp
         * @static
         * @param {mahjong_base.IReadyRsp=} [properties] Properties to set
         * @returns {mahjong_base.ReadyRsp} ReadyRsp instance
         */
        ReadyRsp.create = function create(properties) {
            return new ReadyRsp(properties);
        };

        /**
         * Encodes the specified ReadyRsp message. Does not implicitly {@link mahjong_base.ReadyRsp.verify|verify} messages.
         * @function encode
         * @memberof mahjong_base.ReadyRsp
         * @static
         * @param {mahjong_base.IReadyRsp} message ReadyRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadyRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            return writer;
        };

        /**
         * Encodes the specified ReadyRsp message, length delimited. Does not implicitly {@link mahjong_base.ReadyRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mahjong_base.ReadyRsp
         * @static
         * @param {mahjong_base.IReadyRsp} message ReadyRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadyRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReadyRsp message from the specified reader or buffer.
         * @function decode
         * @memberof mahjong_base.ReadyRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mahjong_base.ReadyRsp} ReadyRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadyRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_base.ReadyRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.errCode = reader.int32();
                    break;
                case 2:
                    message.errMsg = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReadyRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mahjong_base.ReadyRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mahjong_base.ReadyRsp} ReadyRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadyRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReadyRsp message.
         * @function verify
         * @memberof mahjong_base.ReadyRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReadyRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                if (!$util.isInteger(message.errCode))
                    return "errCode: integer expected";
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                if (!$util.isString(message.errMsg))
                    return "errMsg: string expected";
            return null;
        };

        /**
         * Creates a ReadyRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mahjong_base.ReadyRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mahjong_base.ReadyRsp} ReadyRsp
         */
        ReadyRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.mahjong_base.ReadyRsp)
                return object;
            var message = new $root.mahjong_base.ReadyRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            return message;
        };

        /**
         * Creates a plain object from a ReadyRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mahjong_base.ReadyRsp
         * @static
         * @param {mahjong_base.ReadyRsp} message ReadyRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReadyRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.errCode = 0;
                object.errMsg = "";
            }
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                object.errCode = message.errCode;
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                object.errMsg = message.errMsg;
            return object;
        };

        /**
         * Converts this ReadyRsp to JSON.
         * @function toJSON
         * @memberof mahjong_base.ReadyRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReadyRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReadyRsp;
    })();

    mahjong_base.ReadyNot = (function() {

        /**
         * Properties of a ReadyNot.
         * @memberof mahjong_base
         * @interface IReadyNot
         * @property {number|Long|null} [uid] ReadyNot uid
         * @property {boolean|null} [isReady] ReadyNot isReady
         */

        /**
         * Constructs a new ReadyNot.
         * @memberof mahjong_base
         * @classdesc Represents a ReadyNot.
         * @implements IReadyNot
         * @constructor
         * @param {mahjong_base.IReadyNot=} [properties] Properties to set
         */
        function ReadyNot(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReadyNot uid.
         * @member {number|Long} uid
         * @memberof mahjong_base.ReadyNot
         * @instance
         */
        ReadyNot.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReadyNot isReady.
         * @member {boolean} isReady
         * @memberof mahjong_base.ReadyNot
         * @instance
         */
        ReadyNot.prototype.isReady = false;

        /**
         * Creates a new ReadyNot instance using the specified properties.
         * @function create
         * @memberof mahjong_base.ReadyNot
         * @static
         * @param {mahjong_base.IReadyNot=} [properties] Properties to set
         * @returns {mahjong_base.ReadyNot} ReadyNot instance
         */
        ReadyNot.create = function create(properties) {
            return new ReadyNot(properties);
        };

        /**
         * Encodes the specified ReadyNot message. Does not implicitly {@link mahjong_base.ReadyNot.verify|verify} messages.
         * @function encode
         * @memberof mahjong_base.ReadyNot
         * @static
         * @param {mahjong_base.IReadyNot} message ReadyNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadyNot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            if (message.isReady != null && message.hasOwnProperty("isReady"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isReady);
            return writer;
        };

        /**
         * Encodes the specified ReadyNot message, length delimited. Does not implicitly {@link mahjong_base.ReadyNot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mahjong_base.ReadyNot
         * @static
         * @param {mahjong_base.IReadyNot} message ReadyNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadyNot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReadyNot message from the specified reader or buffer.
         * @function decode
         * @memberof mahjong_base.ReadyNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mahjong_base.ReadyNot} ReadyNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadyNot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_base.ReadyNot();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int64();
                    break;
                case 2:
                    message.isReady = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReadyNot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mahjong_base.ReadyNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mahjong_base.ReadyNot} ReadyNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadyNot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReadyNot message.
         * @function verify
         * @memberof mahjong_base.ReadyNot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReadyNot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.isReady != null && message.hasOwnProperty("isReady"))
                if (typeof message.isReady !== "boolean")
                    return "isReady: boolean expected";
            return null;
        };

        /**
         * Creates a ReadyNot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mahjong_base.ReadyNot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mahjong_base.ReadyNot} ReadyNot
         */
        ReadyNot.fromObject = function fromObject(object) {
            if (object instanceof $root.mahjong_base.ReadyNot)
                return object;
            var message = new $root.mahjong_base.ReadyNot();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.isReady != null)
                message.isReady = Boolean(object.isReady);
            return message;
        };

        /**
         * Creates a plain object from a ReadyNot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mahjong_base.ReadyNot
         * @static
         * @param {mahjong_base.ReadyNot} message ReadyNot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReadyNot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.isReady = false;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.isReady != null && message.hasOwnProperty("isReady"))
                object.isReady = message.isReady;
            return object;
        };

        /**
         * Converts this ReadyNot to JSON.
         * @function toJSON
         * @memberof mahjong_base.ReadyNot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReadyNot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReadyNot;
    })();

    return mahjong_base;
})();

module.exports = $root.mahjong_base;
