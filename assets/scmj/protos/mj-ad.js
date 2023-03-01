/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.dzmjAd || ($protobuf.roots.dzmjAd = {});

$root.Ad = (function() {

    /**
     * Constructs a new Ad service.
     * @exports Ad
     * @classdesc Represents an Ad
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function Ad(rpcImpl, requestDelimited, responseDelimited) {
        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
    }

    (Ad.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Ad;

    /**
     * Creates new Ad service using the specified rpc implementation.
     * @function create
     * @memberof Ad
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {Ad} RPC service. Useful where requests and/or responses are streamed.
     */
    Ad.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        return new this(rpcImpl, requestDelimited, responseDelimited);
    };

    /**
     * Callback as used by {@link Ad#chaiHongBao}.
     * @memberof Ad
     * @typedef ChaiHongBaoCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {GetChaiHongBaoAck} [response] GetChaiHongBaoAck
     */

    /**
     * Calls ChaiHongBao.
     * @function chaiHongBao
     * @memberof Ad
     * @instance
     * @param {IGetChaiHongBaoReq} request GetChaiHongBaoReq message or plain object
     * @param {Ad.ChaiHongBaoCallback} callback Node-style callback called with the error, if any, and GetChaiHongBaoAck
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Ad.prototype.chaiHongBao = function chaiHongBao(request, callback) {
        return this.rpcCall(chaiHongBao, $root.GetChaiHongBaoReq, $root.GetChaiHongBaoAck, request, callback);
    }, "name", { value: "ChaiHongBao" });

    /**
     * Calls ChaiHongBao.
     * @function chaiHongBao
     * @memberof Ad
     * @instance
     * @param {IGetChaiHongBaoReq} request GetChaiHongBaoReq message or plain object
     * @returns {Promise<GetChaiHongBaoAck>} Promise
     * @variation 2
     */

    return Ad;
})();

$root.GetChaiHongBaoReq = (function() {

    /**
     * Properties of a GetChaiHongBaoReq.
     * @exports IGetChaiHongBaoReq
     * @interface IGetChaiHongBaoReq
     * @property {number|Long|null} [uid] GetChaiHongBaoReq uid
     */

    /**
     * Constructs a new GetChaiHongBaoReq.
     * @exports GetChaiHongBaoReq
     * @classdesc Represents a GetChaiHongBaoReq.
     * @implements IGetChaiHongBaoReq
     * @constructor
     * @param {IGetChaiHongBaoReq=} [properties] Properties to set
     */
    function GetChaiHongBaoReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetChaiHongBaoReq uid.
     * @member {number|Long} uid
     * @memberof GetChaiHongBaoReq
     * @instance
     */
    GetChaiHongBaoReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new GetChaiHongBaoReq instance using the specified properties.
     * @function create
     * @memberof GetChaiHongBaoReq
     * @static
     * @param {IGetChaiHongBaoReq=} [properties] Properties to set
     * @returns {GetChaiHongBaoReq} GetChaiHongBaoReq instance
     */
    GetChaiHongBaoReq.create = function create(properties) {
        return new GetChaiHongBaoReq(properties);
    };

    /**
     * Encodes the specified GetChaiHongBaoReq message. Does not implicitly {@link GetChaiHongBaoReq.verify|verify} messages.
     * @function encode
     * @memberof GetChaiHongBaoReq
     * @static
     * @param {IGetChaiHongBaoReq} message GetChaiHongBaoReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetChaiHongBaoReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uid != null && message.hasOwnProperty("uid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
        return writer;
    };

    /**
     * Encodes the specified GetChaiHongBaoReq message, length delimited. Does not implicitly {@link GetChaiHongBaoReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetChaiHongBaoReq
     * @static
     * @param {IGetChaiHongBaoReq} message GetChaiHongBaoReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetChaiHongBaoReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetChaiHongBaoReq message from the specified reader or buffer.
     * @function decode
     * @memberof GetChaiHongBaoReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetChaiHongBaoReq} GetChaiHongBaoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetChaiHongBaoReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetChaiHongBaoReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.uid = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GetChaiHongBaoReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetChaiHongBaoReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetChaiHongBaoReq} GetChaiHongBaoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetChaiHongBaoReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetChaiHongBaoReq message.
     * @function verify
     * @memberof GetChaiHongBaoReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetChaiHongBaoReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                return "uid: integer|Long expected";
        return null;
    };

    /**
     * Creates a GetChaiHongBaoReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetChaiHongBaoReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetChaiHongBaoReq} GetChaiHongBaoReq
     */
    GetChaiHongBaoReq.fromObject = function fromObject(object) {
        if (object instanceof $root.GetChaiHongBaoReq)
            return object;
        var message = new $root.GetChaiHongBaoReq();
        if (object.uid != null)
            if ($util.Long)
                (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
            else if (typeof object.uid === "string")
                message.uid = parseInt(object.uid, 10);
            else if (typeof object.uid === "number")
                message.uid = object.uid;
            else if (typeof object.uid === "object")
                message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a GetChaiHongBaoReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetChaiHongBaoReq
     * @static
     * @param {GetChaiHongBaoReq} message GetChaiHongBaoReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetChaiHongBaoReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.uid = options.longs === String ? "0" : 0;
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (typeof message.uid === "number")
                object.uid = options.longs === String ? String(message.uid) : message.uid;
            else
                object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
        return object;
    };

    /**
     * Converts this GetChaiHongBaoReq to JSON.
     * @function toJSON
     * @memberof GetChaiHongBaoReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetChaiHongBaoReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetChaiHongBaoReq;
})();

$root.GetChaiHongBaoAck = (function() {

    /**
     * Properties of a GetChaiHongBaoAck.
     * @exports IGetChaiHongBaoAck
     * @interface IGetChaiHongBaoAck
     * @property {number|null} [errCode] GetChaiHongBaoAck errCode
     * @property {string|null} [errMsg] GetChaiHongBaoAck errMsg
     * @property {number|null} [CurrentCount] GetChaiHongBaoAck CurrentCount
     * @property {number|null} [TaskCount] GetChaiHongBaoAck TaskCount
     */

    /**
     * Constructs a new GetChaiHongBaoAck.
     * @exports GetChaiHongBaoAck
     * @classdesc Represents a GetChaiHongBaoAck.
     * @implements IGetChaiHongBaoAck
     * @constructor
     * @param {IGetChaiHongBaoAck=} [properties] Properties to set
     */
    function GetChaiHongBaoAck(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetChaiHongBaoAck errCode.
     * @member {number} errCode
     * @memberof GetChaiHongBaoAck
     * @instance
     */
    GetChaiHongBaoAck.prototype.errCode = 0;

    /**
     * GetChaiHongBaoAck errMsg.
     * @member {string} errMsg
     * @memberof GetChaiHongBaoAck
     * @instance
     */
    GetChaiHongBaoAck.prototype.errMsg = "";

    /**
     * GetChaiHongBaoAck CurrentCount.
     * @member {number} CurrentCount
     * @memberof GetChaiHongBaoAck
     * @instance
     */
    GetChaiHongBaoAck.prototype.CurrentCount = 0;

    /**
     * GetChaiHongBaoAck TaskCount.
     * @member {number} TaskCount
     * @memberof GetChaiHongBaoAck
     * @instance
     */
    GetChaiHongBaoAck.prototype.TaskCount = 0;

    /**
     * Creates a new GetChaiHongBaoAck instance using the specified properties.
     * @function create
     * @memberof GetChaiHongBaoAck
     * @static
     * @param {IGetChaiHongBaoAck=} [properties] Properties to set
     * @returns {GetChaiHongBaoAck} GetChaiHongBaoAck instance
     */
    GetChaiHongBaoAck.create = function create(properties) {
        return new GetChaiHongBaoAck(properties);
    };

    /**
     * Encodes the specified GetChaiHongBaoAck message. Does not implicitly {@link GetChaiHongBaoAck.verify|verify} messages.
     * @function encode
     * @memberof GetChaiHongBaoAck
     * @static
     * @param {IGetChaiHongBaoAck} message GetChaiHongBaoAck message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetChaiHongBaoAck.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.errCode != null && message.hasOwnProperty("errCode"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
        if (message.errMsg != null && message.hasOwnProperty("errMsg"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
        if (message.CurrentCount != null && message.hasOwnProperty("CurrentCount"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.CurrentCount);
        if (message.TaskCount != null && message.hasOwnProperty("TaskCount"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.TaskCount);
        return writer;
    };

    /**
     * Encodes the specified GetChaiHongBaoAck message, length delimited. Does not implicitly {@link GetChaiHongBaoAck.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetChaiHongBaoAck
     * @static
     * @param {IGetChaiHongBaoAck} message GetChaiHongBaoAck message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetChaiHongBaoAck.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetChaiHongBaoAck message from the specified reader or buffer.
     * @function decode
     * @memberof GetChaiHongBaoAck
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetChaiHongBaoAck} GetChaiHongBaoAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetChaiHongBaoAck.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetChaiHongBaoAck();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.errCode = reader.int32();
                break;
            case 2:
                message.errMsg = reader.string();
                break;
            case 3:
                message.CurrentCount = reader.int32();
                break;
            case 4:
                message.TaskCount = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GetChaiHongBaoAck message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetChaiHongBaoAck
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetChaiHongBaoAck} GetChaiHongBaoAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetChaiHongBaoAck.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetChaiHongBaoAck message.
     * @function verify
     * @memberof GetChaiHongBaoAck
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetChaiHongBaoAck.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.errCode != null && message.hasOwnProperty("errCode"))
            if (!$util.isInteger(message.errCode))
                return "errCode: integer expected";
        if (message.errMsg != null && message.hasOwnProperty("errMsg"))
            if (!$util.isString(message.errMsg))
                return "errMsg: string expected";
        if (message.CurrentCount != null && message.hasOwnProperty("CurrentCount"))
            if (!$util.isInteger(message.CurrentCount))
                return "CurrentCount: integer expected";
        if (message.TaskCount != null && message.hasOwnProperty("TaskCount"))
            if (!$util.isInteger(message.TaskCount))
                return "TaskCount: integer expected";
        return null;
    };

    /**
     * Creates a GetChaiHongBaoAck message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetChaiHongBaoAck
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetChaiHongBaoAck} GetChaiHongBaoAck
     */
    GetChaiHongBaoAck.fromObject = function fromObject(object) {
        if (object instanceof $root.GetChaiHongBaoAck)
            return object;
        var message = new $root.GetChaiHongBaoAck();
        if (object.errCode != null)
            message.errCode = object.errCode | 0;
        if (object.errMsg != null)
            message.errMsg = String(object.errMsg);
        if (object.CurrentCount != null)
            message.CurrentCount = object.CurrentCount | 0;
        if (object.TaskCount != null)
            message.TaskCount = object.TaskCount | 0;
        return message;
    };

    /**
     * Creates a plain object from a GetChaiHongBaoAck message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetChaiHongBaoAck
     * @static
     * @param {GetChaiHongBaoAck} message GetChaiHongBaoAck
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetChaiHongBaoAck.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.errCode = 0;
            object.errMsg = "";
            object.CurrentCount = 0;
            object.TaskCount = 0;
        }
        if (message.errCode != null && message.hasOwnProperty("errCode"))
            object.errCode = message.errCode;
        if (message.errMsg != null && message.hasOwnProperty("errMsg"))
            object.errMsg = message.errMsg;
        if (message.CurrentCount != null && message.hasOwnProperty("CurrentCount"))
            object.CurrentCount = message.CurrentCount;
        if (message.TaskCount != null && message.hasOwnProperty("TaskCount"))
            object.TaskCount = message.TaskCount;
        return object;
    };

    /**
     * Converts this GetChaiHongBaoAck to JSON.
     * @function toJSON
     * @memberof GetChaiHongBaoAck
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetChaiHongBaoAck.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetChaiHongBaoAck;
})();

module.exports = $root;
