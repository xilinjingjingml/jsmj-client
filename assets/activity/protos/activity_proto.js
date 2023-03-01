/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Activity = (function() {

    /**
     * Constructs a new Activity service.
     * @exports Activity
     * @classdesc Represents an Activity
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function Activity(rpcImpl, requestDelimited, responseDelimited) {
        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
    }

    (Activity.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Activity;

    /**
     * Creates new Activity service using the specified rpc implementation.
     * @function create
     * @memberof Activity
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {Activity} RPC service. Useful where requests and/or responses are streamed.
     */
    Activity.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        return new this(rpcImpl, requestDelimited, responseDelimited);
    };

    /**
     * Callback as used by {@link Activity#getActivityProgress}.
     * @memberof Activity
     * @typedef GetActivityProgressCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {GetActivityProgressRsp} [response] GetActivityProgressRsp
     */

    /**
     * Calls GetActivityProgress.
     * @function getActivityProgress
     * @memberof Activity
     * @instance
     * @param {IGetActivityProgressReq} request GetActivityProgressReq message or plain object
     * @param {Activity.GetActivityProgressCallback} callback Node-style callback called with the error, if any, and GetActivityProgressRsp
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Activity.prototype.getActivityProgress = function getActivityProgress(request, callback) {
        return this.rpcCall(getActivityProgress, $root.GetActivityProgressReq, $root.GetActivityProgressRsp, request, callback);
    }, "name", { value: "GetActivityProgress" });

    /**
     * Calls GetActivityProgress.
     * @function getActivityProgress
     * @memberof Activity
     * @instance
     * @param {IGetActivityProgressReq} request GetActivityProgressReq message or plain object
     * @returns {Promise<GetActivityProgressRsp>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link Activity#uptBcsAdState}.
     * @memberof Activity
     * @typedef UptBcsAdStateCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {UptBcsAdStateRsp} [response] UptBcsAdStateRsp
     */

    /**
     * Calls UptBcsAdState.
     * @function uptBcsAdState
     * @memberof Activity
     * @instance
     * @param {IUptBcsAdStateReq} request UptBcsAdStateReq message or plain object
     * @param {Activity.UptBcsAdStateCallback} callback Node-style callback called with the error, if any, and UptBcsAdStateRsp
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Activity.prototype.uptBcsAdState = function uptBcsAdState(request, callback) {
        return this.rpcCall(uptBcsAdState, $root.UptBcsAdStateReq, $root.UptBcsAdStateRsp, request, callback);
    }, "name", { value: "UptBcsAdState" });

    /**
     * Calls UptBcsAdState.
     * @function uptBcsAdState
     * @memberof Activity
     * @instance
     * @param {IUptBcsAdStateReq} request UptBcsAdStateReq message or plain object
     * @returns {Promise<UptBcsAdStateRsp>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link Activity#getActivityAward}.
     * @memberof Activity
     * @typedef GetActivityAwardCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {GetActivityAwardRsp} [response] GetActivityAwardRsp
     */

    /**
     * Calls GetActivityAward.
     * @function getActivityAward
     * @memberof Activity
     * @instance
     * @param {IGetActivityAwardReq} request GetActivityAwardReq message or plain object
     * @param {Activity.GetActivityAwardCallback} callback Node-style callback called with the error, if any, and GetActivityAwardRsp
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Activity.prototype.getActivityAward = function getActivityAward(request, callback) {
        return this.rpcCall(getActivityAward, $root.GetActivityAwardReq, $root.GetActivityAwardRsp, request, callback);
    }, "name", { value: "GetActivityAward" });

    /**
     * Calls GetActivityAward.
     * @function getActivityAward
     * @memberof Activity
     * @instance
     * @param {IGetActivityAwardReq} request GetActivityAwardReq message or plain object
     * @returns {Promise<GetActivityAwardRsp>} Promise
     * @variation 2
     */

    return Activity;
})();

$root.GetActivityProgressReq = (function() {

    /**
     * Properties of a GetActivityProgressReq.
     * @exports IGetActivityProgressReq
     * @interface IGetActivityProgressReq
     * @property {number|null} [type] GetActivityProgressReq type
     * @property {number|Long|null} [uid] GetActivityProgressReq uid
     */

    /**
     * Constructs a new GetActivityProgressReq.
     * @exports GetActivityProgressReq
     * @classdesc Represents a GetActivityProgressReq.
     * @implements IGetActivityProgressReq
     * @constructor
     * @param {IGetActivityProgressReq=} [properties] Properties to set
     */
    function GetActivityProgressReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetActivityProgressReq type.
     * @member {number} type
     * @memberof GetActivityProgressReq
     * @instance
     */
    GetActivityProgressReq.prototype.type = 0;

    /**
     * GetActivityProgressReq uid.
     * @member {number|Long} uid
     * @memberof GetActivityProgressReq
     * @instance
     */
    GetActivityProgressReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new GetActivityProgressReq instance using the specified properties.
     * @function create
     * @memberof GetActivityProgressReq
     * @static
     * @param {IGetActivityProgressReq=} [properties] Properties to set
     * @returns {GetActivityProgressReq} GetActivityProgressReq instance
     */
    GetActivityProgressReq.create = function create(properties) {
        return new GetActivityProgressReq(properties);
    };

    /**
     * Encodes the specified GetActivityProgressReq message. Does not implicitly {@link GetActivityProgressReq.verify|verify} messages.
     * @function encode
     * @memberof GetActivityProgressReq
     * @static
     * @param {IGetActivityProgressReq} message GetActivityProgressReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetActivityProgressReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
        if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.uid);
        return writer;
    };

    /**
     * Encodes the specified GetActivityProgressReq message, length delimited. Does not implicitly {@link GetActivityProgressReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetActivityProgressReq
     * @static
     * @param {IGetActivityProgressReq} message GetActivityProgressReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetActivityProgressReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetActivityProgressReq message from the specified reader or buffer.
     * @function decode
     * @memberof GetActivityProgressReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetActivityProgressReq} GetActivityProgressReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetActivityProgressReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetActivityProgressReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.type = reader.int32();
                break;
            case 2:
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
     * Decodes a GetActivityProgressReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetActivityProgressReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetActivityProgressReq} GetActivityProgressReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetActivityProgressReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetActivityProgressReq message.
     * @function verify
     * @memberof GetActivityProgressReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetActivityProgressReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isInteger(message.type))
                return "type: integer expected";
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                return "uid: integer|Long expected";
        return null;
    };

    /**
     * Creates a GetActivityProgressReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetActivityProgressReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetActivityProgressReq} GetActivityProgressReq
     */
    GetActivityProgressReq.fromObject = function fromObject(object) {
        if (object instanceof $root.GetActivityProgressReq)
            return object;
        var message = new $root.GetActivityProgressReq();
        if (object.type != null)
            message.type = object.type | 0;
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
     * Creates a plain object from a GetActivityProgressReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetActivityProgressReq
     * @static
     * @param {GetActivityProgressReq} message GetActivityProgressReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetActivityProgressReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.type = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.uid = options.longs === String ? "0" : 0;
        }
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (typeof message.uid === "number")
                object.uid = options.longs === String ? String(message.uid) : message.uid;
            else
                object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
        return object;
    };

    /**
     * Converts this GetActivityProgressReq to JSON.
     * @function toJSON
     * @memberof GetActivityProgressReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetActivityProgressReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetActivityProgressReq;
})();

$root.AwardItem = (function() {

    /**
     * Properties of an AwardItem.
     * @exports IAwardItem
     * @interface IAwardItem
     * @property {number|null} [propId] AwardItem propId
     * @property {number|Long|null} [minNum] AwardItem minNum
     * @property {number|Long|null} [maxNum] AwardItem maxNum
     * @property {number|Long|null} [effectTime] AwardItem effectTime
     * @property {number|Long|null} [propIndex] AwardItem propIndex
     * @property {string|null} [tip] AwardItem tip
     */

    /**
     * Constructs a new AwardItem.
     * @exports AwardItem
     * @classdesc Represents an AwardItem.
     * @implements IAwardItem
     * @constructor
     * @param {IAwardItem=} [properties] Properties to set
     */
    function AwardItem(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AwardItem propId.
     * @member {number} propId
     * @memberof AwardItem
     * @instance
     */
    AwardItem.prototype.propId = 0;

    /**
     * AwardItem minNum.
     * @member {number|Long} minNum
     * @memberof AwardItem
     * @instance
     */
    AwardItem.prototype.minNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * AwardItem maxNum.
     * @member {number|Long} maxNum
     * @memberof AwardItem
     * @instance
     */
    AwardItem.prototype.maxNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * AwardItem effectTime.
     * @member {number|Long} effectTime
     * @memberof AwardItem
     * @instance
     */
    AwardItem.prototype.effectTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * AwardItem propIndex.
     * @member {number|Long} propIndex
     * @memberof AwardItem
     * @instance
     */
    AwardItem.prototype.propIndex = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * AwardItem tip.
     * @member {string} tip
     * @memberof AwardItem
     * @instance
     */
    AwardItem.prototype.tip = "";

    /**
     * Creates a new AwardItem instance using the specified properties.
     * @function create
     * @memberof AwardItem
     * @static
     * @param {IAwardItem=} [properties] Properties to set
     * @returns {AwardItem} AwardItem instance
     */
    AwardItem.create = function create(properties) {
        return new AwardItem(properties);
    };

    /**
     * Encodes the specified AwardItem message. Does not implicitly {@link AwardItem.verify|verify} messages.
     * @function encode
     * @memberof AwardItem
     * @static
     * @param {IAwardItem} message AwardItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AwardItem.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.propId != null && Object.hasOwnProperty.call(message, "propId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.propId);
        if (message.minNum != null && Object.hasOwnProperty.call(message, "minNum"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.minNum);
        if (message.maxNum != null && Object.hasOwnProperty.call(message, "maxNum"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.maxNum);
        if (message.effectTime != null && Object.hasOwnProperty.call(message, "effectTime"))
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.effectTime);
        if (message.propIndex != null && Object.hasOwnProperty.call(message, "propIndex"))
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.propIndex);
        if (message.tip != null && Object.hasOwnProperty.call(message, "tip"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.tip);
        return writer;
    };

    /**
     * Encodes the specified AwardItem message, length delimited. Does not implicitly {@link AwardItem.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AwardItem
     * @static
     * @param {IAwardItem} message AwardItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AwardItem.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AwardItem message from the specified reader or buffer.
     * @function decode
     * @memberof AwardItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AwardItem} AwardItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AwardItem.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AwardItem();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.propId = reader.int32();
                break;
            case 2:
                message.minNum = reader.int64();
                break;
            case 3:
                message.maxNum = reader.int64();
                break;
            case 4:
                message.effectTime = reader.int64();
                break;
            case 5:
                message.propIndex = reader.int64();
                break;
            case 6:
                message.tip = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AwardItem message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AwardItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AwardItem} AwardItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AwardItem.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AwardItem message.
     * @function verify
     * @memberof AwardItem
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AwardItem.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.propId != null && message.hasOwnProperty("propId"))
            if (!$util.isInteger(message.propId))
                return "propId: integer expected";
        if (message.minNum != null && message.hasOwnProperty("minNum"))
            if (!$util.isInteger(message.minNum) && !(message.minNum && $util.isInteger(message.minNum.low) && $util.isInteger(message.minNum.high)))
                return "minNum: integer|Long expected";
        if (message.maxNum != null && message.hasOwnProperty("maxNum"))
            if (!$util.isInteger(message.maxNum) && !(message.maxNum && $util.isInteger(message.maxNum.low) && $util.isInteger(message.maxNum.high)))
                return "maxNum: integer|Long expected";
        if (message.effectTime != null && message.hasOwnProperty("effectTime"))
            if (!$util.isInteger(message.effectTime) && !(message.effectTime && $util.isInteger(message.effectTime.low) && $util.isInteger(message.effectTime.high)))
                return "effectTime: integer|Long expected";
        if (message.propIndex != null && message.hasOwnProperty("propIndex"))
            if (!$util.isInteger(message.propIndex) && !(message.propIndex && $util.isInteger(message.propIndex.low) && $util.isInteger(message.propIndex.high)))
                return "propIndex: integer|Long expected";
        if (message.tip != null && message.hasOwnProperty("tip"))
            if (!$util.isString(message.tip))
                return "tip: string expected";
        return null;
    };

    /**
     * Creates an AwardItem message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AwardItem
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AwardItem} AwardItem
     */
    AwardItem.fromObject = function fromObject(object) {
        if (object instanceof $root.AwardItem)
            return object;
        var message = new $root.AwardItem();
        if (object.propId != null)
            message.propId = object.propId | 0;
        if (object.minNum != null)
            if ($util.Long)
                (message.minNum = $util.Long.fromValue(object.minNum)).unsigned = false;
            else if (typeof object.minNum === "string")
                message.minNum = parseInt(object.minNum, 10);
            else if (typeof object.minNum === "number")
                message.minNum = object.minNum;
            else if (typeof object.minNum === "object")
                message.minNum = new $util.LongBits(object.minNum.low >>> 0, object.minNum.high >>> 0).toNumber();
        if (object.maxNum != null)
            if ($util.Long)
                (message.maxNum = $util.Long.fromValue(object.maxNum)).unsigned = false;
            else if (typeof object.maxNum === "string")
                message.maxNum = parseInt(object.maxNum, 10);
            else if (typeof object.maxNum === "number")
                message.maxNum = object.maxNum;
            else if (typeof object.maxNum === "object")
                message.maxNum = new $util.LongBits(object.maxNum.low >>> 0, object.maxNum.high >>> 0).toNumber();
        if (object.effectTime != null)
            if ($util.Long)
                (message.effectTime = $util.Long.fromValue(object.effectTime)).unsigned = false;
            else if (typeof object.effectTime === "string")
                message.effectTime = parseInt(object.effectTime, 10);
            else if (typeof object.effectTime === "number")
                message.effectTime = object.effectTime;
            else if (typeof object.effectTime === "object")
                message.effectTime = new $util.LongBits(object.effectTime.low >>> 0, object.effectTime.high >>> 0).toNumber();
        if (object.propIndex != null)
            if ($util.Long)
                (message.propIndex = $util.Long.fromValue(object.propIndex)).unsigned = false;
            else if (typeof object.propIndex === "string")
                message.propIndex = parseInt(object.propIndex, 10);
            else if (typeof object.propIndex === "number")
                message.propIndex = object.propIndex;
            else if (typeof object.propIndex === "object")
                message.propIndex = new $util.LongBits(object.propIndex.low >>> 0, object.propIndex.high >>> 0).toNumber();
        if (object.tip != null)
            message.tip = String(object.tip);
        return message;
    };

    /**
     * Creates a plain object from an AwardItem message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AwardItem
     * @static
     * @param {AwardItem} message AwardItem
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AwardItem.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.propId = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.minNum = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.minNum = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.maxNum = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.maxNum = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.effectTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.effectTime = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.propIndex = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.propIndex = options.longs === String ? "0" : 0;
            object.tip = "";
        }
        if (message.propId != null && message.hasOwnProperty("propId"))
            object.propId = message.propId;
        if (message.minNum != null && message.hasOwnProperty("minNum"))
            if (typeof message.minNum === "number")
                object.minNum = options.longs === String ? String(message.minNum) : message.minNum;
            else
                object.minNum = options.longs === String ? $util.Long.prototype.toString.call(message.minNum) : options.longs === Number ? new $util.LongBits(message.minNum.low >>> 0, message.minNum.high >>> 0).toNumber() : message.minNum;
        if (message.maxNum != null && message.hasOwnProperty("maxNum"))
            if (typeof message.maxNum === "number")
                object.maxNum = options.longs === String ? String(message.maxNum) : message.maxNum;
            else
                object.maxNum = options.longs === String ? $util.Long.prototype.toString.call(message.maxNum) : options.longs === Number ? new $util.LongBits(message.maxNum.low >>> 0, message.maxNum.high >>> 0).toNumber() : message.maxNum;
        if (message.effectTime != null && message.hasOwnProperty("effectTime"))
            if (typeof message.effectTime === "number")
                object.effectTime = options.longs === String ? String(message.effectTime) : message.effectTime;
            else
                object.effectTime = options.longs === String ? $util.Long.prototype.toString.call(message.effectTime) : options.longs === Number ? new $util.LongBits(message.effectTime.low >>> 0, message.effectTime.high >>> 0).toNumber() : message.effectTime;
        if (message.propIndex != null && message.hasOwnProperty("propIndex"))
            if (typeof message.propIndex === "number")
                object.propIndex = options.longs === String ? String(message.propIndex) : message.propIndex;
            else
                object.propIndex = options.longs === String ? $util.Long.prototype.toString.call(message.propIndex) : options.longs === Number ? new $util.LongBits(message.propIndex.low >>> 0, message.propIndex.high >>> 0).toNumber() : message.propIndex;
        if (message.tip != null && message.hasOwnProperty("tip"))
            object.tip = message.tip;
        return object;
    };

    /**
     * Converts this AwardItem to JSON.
     * @function toJSON
     * @memberof AwardItem
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AwardItem.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AwardItem;
})();

$root.ActivityItem = (function() {

    /**
     * Properties of an ActivityItem.
     * @exports IActivityItem
     * @interface IActivityItem
     * @property {number|Long|null} [uid] ActivityItem uid
     * @property {string|null} [progId] ActivityItem progId
     * @property {number|null} [activityId] ActivityItem activityId
     * @property {number|null} [type] ActivityItem type
     * @property {string|null} [title] ActivityItem title
     * @property {string|null} [desc] ActivityItem desc
     * @property {number|Long|null} [curNum] ActivityItem curNum
     * @property {number|Long|null} [condNum] ActivityItem condNum
     * @property {Array.<IAwardItem>|null} [awards] ActivityItem awards
     * @property {number|null} [status] ActivityItem status
     */

    /**
     * Constructs a new ActivityItem.
     * @exports ActivityItem
     * @classdesc Represents an ActivityItem.
     * @implements IActivityItem
     * @constructor
     * @param {IActivityItem=} [properties] Properties to set
     */
    function ActivityItem(properties) {
        this.awards = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ActivityItem uid.
     * @member {number|Long} uid
     * @memberof ActivityItem
     * @instance
     */
    ActivityItem.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ActivityItem progId.
     * @member {string} progId
     * @memberof ActivityItem
     * @instance
     */
    ActivityItem.prototype.progId = "";

    /**
     * ActivityItem activityId.
     * @member {number} activityId
     * @memberof ActivityItem
     * @instance
     */
    ActivityItem.prototype.activityId = 0;

    /**
     * ActivityItem type.
     * @member {number} type
     * @memberof ActivityItem
     * @instance
     */
    ActivityItem.prototype.type = 0;

    /**
     * ActivityItem title.
     * @member {string} title
     * @memberof ActivityItem
     * @instance
     */
    ActivityItem.prototype.title = "";

    /**
     * ActivityItem desc.
     * @member {string} desc
     * @memberof ActivityItem
     * @instance
     */
    ActivityItem.prototype.desc = "";

    /**
     * ActivityItem curNum.
     * @member {number|Long} curNum
     * @memberof ActivityItem
     * @instance
     */
    ActivityItem.prototype.curNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ActivityItem condNum.
     * @member {number|Long} condNum
     * @memberof ActivityItem
     * @instance
     */
    ActivityItem.prototype.condNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ActivityItem awards.
     * @member {Array.<IAwardItem>} awards
     * @memberof ActivityItem
     * @instance
     */
    ActivityItem.prototype.awards = $util.emptyArray;

    /**
     * ActivityItem status.
     * @member {number} status
     * @memberof ActivityItem
     * @instance
     */
    ActivityItem.prototype.status = 0;

    /**
     * Creates a new ActivityItem instance using the specified properties.
     * @function create
     * @memberof ActivityItem
     * @static
     * @param {IActivityItem=} [properties] Properties to set
     * @returns {ActivityItem} ActivityItem instance
     */
    ActivityItem.create = function create(properties) {
        return new ActivityItem(properties);
    };

    /**
     * Encodes the specified ActivityItem message. Does not implicitly {@link ActivityItem.verify|verify} messages.
     * @function encode
     * @memberof ActivityItem
     * @static
     * @param {IActivityItem} message ActivityItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ActivityItem.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
        if (message.progId != null && Object.hasOwnProperty.call(message, "progId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.progId);
        if (message.activityId != null && Object.hasOwnProperty.call(message, "activityId"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.activityId);
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.type);
        if (message.title != null && Object.hasOwnProperty.call(message, "title"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.title);
        if (message.desc != null && Object.hasOwnProperty.call(message, "desc"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.desc);
        if (message.curNum != null && Object.hasOwnProperty.call(message, "curNum"))
            writer.uint32(/* id 7, wireType 0 =*/56).int64(message.curNum);
        if (message.condNum != null && Object.hasOwnProperty.call(message, "condNum"))
            writer.uint32(/* id 8, wireType 0 =*/64).int64(message.condNum);
        if (message.awards != null && message.awards.length)
            for (var i = 0; i < message.awards.length; ++i)
                $root.AwardItem.encode(message.awards[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.status);
        return writer;
    };

    /**
     * Encodes the specified ActivityItem message, length delimited. Does not implicitly {@link ActivityItem.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ActivityItem
     * @static
     * @param {IActivityItem} message ActivityItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ActivityItem.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ActivityItem message from the specified reader or buffer.
     * @function decode
     * @memberof ActivityItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ActivityItem} ActivityItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ActivityItem.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ActivityItem();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.uid = reader.int64();
                break;
            case 2:
                message.progId = reader.string();
                break;
            case 3:
                message.activityId = reader.int32();
                break;
            case 4:
                message.type = reader.int32();
                break;
            case 5:
                message.title = reader.string();
                break;
            case 6:
                message.desc = reader.string();
                break;
            case 7:
                message.curNum = reader.int64();
                break;
            case 8:
                message.condNum = reader.int64();
                break;
            case 9:
                if (!(message.awards && message.awards.length))
                    message.awards = [];
                message.awards.push($root.AwardItem.decode(reader, reader.uint32()));
                break;
            case 10:
                message.status = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ActivityItem message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ActivityItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ActivityItem} ActivityItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ActivityItem.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ActivityItem message.
     * @function verify
     * @memberof ActivityItem
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ActivityItem.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                return "uid: integer|Long expected";
        if (message.progId != null && message.hasOwnProperty("progId"))
            if (!$util.isString(message.progId))
                return "progId: string expected";
        if (message.activityId != null && message.hasOwnProperty("activityId"))
            if (!$util.isInteger(message.activityId))
                return "activityId: integer expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isInteger(message.type))
                return "type: integer expected";
        if (message.title != null && message.hasOwnProperty("title"))
            if (!$util.isString(message.title))
                return "title: string expected";
        if (message.desc != null && message.hasOwnProperty("desc"))
            if (!$util.isString(message.desc))
                return "desc: string expected";
        if (message.curNum != null && message.hasOwnProperty("curNum"))
            if (!$util.isInteger(message.curNum) && !(message.curNum && $util.isInteger(message.curNum.low) && $util.isInteger(message.curNum.high)))
                return "curNum: integer|Long expected";
        if (message.condNum != null && message.hasOwnProperty("condNum"))
            if (!$util.isInteger(message.condNum) && !(message.condNum && $util.isInteger(message.condNum.low) && $util.isInteger(message.condNum.high)))
                return "condNum: integer|Long expected";
        if (message.awards != null && message.hasOwnProperty("awards")) {
            if (!Array.isArray(message.awards))
                return "awards: array expected";
            for (var i = 0; i < message.awards.length; ++i) {
                var error = $root.AwardItem.verify(message.awards[i]);
                if (error)
                    return "awards." + error;
            }
        }
        if (message.status != null && message.hasOwnProperty("status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        return null;
    };

    /**
     * Creates an ActivityItem message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ActivityItem
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ActivityItem} ActivityItem
     */
    ActivityItem.fromObject = function fromObject(object) {
        if (object instanceof $root.ActivityItem)
            return object;
        var message = new $root.ActivityItem();
        if (object.uid != null)
            if ($util.Long)
                (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
            else if (typeof object.uid === "string")
                message.uid = parseInt(object.uid, 10);
            else if (typeof object.uid === "number")
                message.uid = object.uid;
            else if (typeof object.uid === "object")
                message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
        if (object.progId != null)
            message.progId = String(object.progId);
        if (object.activityId != null)
            message.activityId = object.activityId | 0;
        if (object.type != null)
            message.type = object.type | 0;
        if (object.title != null)
            message.title = String(object.title);
        if (object.desc != null)
            message.desc = String(object.desc);
        if (object.curNum != null)
            if ($util.Long)
                (message.curNum = $util.Long.fromValue(object.curNum)).unsigned = false;
            else if (typeof object.curNum === "string")
                message.curNum = parseInt(object.curNum, 10);
            else if (typeof object.curNum === "number")
                message.curNum = object.curNum;
            else if (typeof object.curNum === "object")
                message.curNum = new $util.LongBits(object.curNum.low >>> 0, object.curNum.high >>> 0).toNumber();
        if (object.condNum != null)
            if ($util.Long)
                (message.condNum = $util.Long.fromValue(object.condNum)).unsigned = false;
            else if (typeof object.condNum === "string")
                message.condNum = parseInt(object.condNum, 10);
            else if (typeof object.condNum === "number")
                message.condNum = object.condNum;
            else if (typeof object.condNum === "object")
                message.condNum = new $util.LongBits(object.condNum.low >>> 0, object.condNum.high >>> 0).toNumber();
        if (object.awards) {
            if (!Array.isArray(object.awards))
                throw TypeError(".ActivityItem.awards: array expected");
            message.awards = [];
            for (var i = 0; i < object.awards.length; ++i) {
                if (typeof object.awards[i] !== "object")
                    throw TypeError(".ActivityItem.awards: object expected");
                message.awards[i] = $root.AwardItem.fromObject(object.awards[i]);
            }
        }
        if (object.status != null)
            message.status = object.status | 0;
        return message;
    };

    /**
     * Creates a plain object from an ActivityItem message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ActivityItem
     * @static
     * @param {ActivityItem} message ActivityItem
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ActivityItem.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.awards = [];
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.uid = options.longs === String ? "0" : 0;
            object.progId = "";
            object.activityId = 0;
            object.type = 0;
            object.title = "";
            object.desc = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.curNum = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.curNum = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.condNum = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.condNum = options.longs === String ? "0" : 0;
            object.status = 0;
        }
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (typeof message.uid === "number")
                object.uid = options.longs === String ? String(message.uid) : message.uid;
            else
                object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
        if (message.progId != null && message.hasOwnProperty("progId"))
            object.progId = message.progId;
        if (message.activityId != null && message.hasOwnProperty("activityId"))
            object.activityId = message.activityId;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.title != null && message.hasOwnProperty("title"))
            object.title = message.title;
        if (message.desc != null && message.hasOwnProperty("desc"))
            object.desc = message.desc;
        if (message.curNum != null && message.hasOwnProperty("curNum"))
            if (typeof message.curNum === "number")
                object.curNum = options.longs === String ? String(message.curNum) : message.curNum;
            else
                object.curNum = options.longs === String ? $util.Long.prototype.toString.call(message.curNum) : options.longs === Number ? new $util.LongBits(message.curNum.low >>> 0, message.curNum.high >>> 0).toNumber() : message.curNum;
        if (message.condNum != null && message.hasOwnProperty("condNum"))
            if (typeof message.condNum === "number")
                object.condNum = options.longs === String ? String(message.condNum) : message.condNum;
            else
                object.condNum = options.longs === String ? $util.Long.prototype.toString.call(message.condNum) : options.longs === Number ? new $util.LongBits(message.condNum.low >>> 0, message.condNum.high >>> 0).toNumber() : message.condNum;
        if (message.awards && message.awards.length) {
            object.awards = [];
            for (var j = 0; j < message.awards.length; ++j)
                object.awards[j] = $root.AwardItem.toObject(message.awards[j], options);
        }
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        return object;
    };

    /**
     * Converts this ActivityItem to JSON.
     * @function toJSON
     * @memberof ActivityItem
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ActivityItem.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ActivityItem;
})();

$root.GetActivityProgressRsp = (function() {

    /**
     * Properties of a GetActivityProgressRsp.
     * @exports IGetActivityProgressRsp
     * @interface IGetActivityProgressRsp
     * @property {number|null} [errCode] GetActivityProgressRsp errCode
     * @property {string|null} [errMsg] GetActivityProgressRsp errMsg
     * @property {Array.<IActivityItem>|null} [activityItems] GetActivityProgressRsp activityItems
     */

    /**
     * Constructs a new GetActivityProgressRsp.
     * @exports GetActivityProgressRsp
     * @classdesc Represents a GetActivityProgressRsp.
     * @implements IGetActivityProgressRsp
     * @constructor
     * @param {IGetActivityProgressRsp=} [properties] Properties to set
     */
    function GetActivityProgressRsp(properties) {
        this.activityItems = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetActivityProgressRsp errCode.
     * @member {number} errCode
     * @memberof GetActivityProgressRsp
     * @instance
     */
    GetActivityProgressRsp.prototype.errCode = 0;

    /**
     * GetActivityProgressRsp errMsg.
     * @member {string} errMsg
     * @memberof GetActivityProgressRsp
     * @instance
     */
    GetActivityProgressRsp.prototype.errMsg = "";

    /**
     * GetActivityProgressRsp activityItems.
     * @member {Array.<IActivityItem>} activityItems
     * @memberof GetActivityProgressRsp
     * @instance
     */
    GetActivityProgressRsp.prototype.activityItems = $util.emptyArray;

    /**
     * Creates a new GetActivityProgressRsp instance using the specified properties.
     * @function create
     * @memberof GetActivityProgressRsp
     * @static
     * @param {IGetActivityProgressRsp=} [properties] Properties to set
     * @returns {GetActivityProgressRsp} GetActivityProgressRsp instance
     */
    GetActivityProgressRsp.create = function create(properties) {
        return new GetActivityProgressRsp(properties);
    };

    /**
     * Encodes the specified GetActivityProgressRsp message. Does not implicitly {@link GetActivityProgressRsp.verify|verify} messages.
     * @function encode
     * @memberof GetActivityProgressRsp
     * @static
     * @param {IGetActivityProgressRsp} message GetActivityProgressRsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetActivityProgressRsp.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.errCode != null && Object.hasOwnProperty.call(message, "errCode"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
        if (message.errMsg != null && Object.hasOwnProperty.call(message, "errMsg"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
        if (message.activityItems != null && message.activityItems.length)
            for (var i = 0; i < message.activityItems.length; ++i)
                $root.ActivityItem.encode(message.activityItems[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GetActivityProgressRsp message, length delimited. Does not implicitly {@link GetActivityProgressRsp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetActivityProgressRsp
     * @static
     * @param {IGetActivityProgressRsp} message GetActivityProgressRsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetActivityProgressRsp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetActivityProgressRsp message from the specified reader or buffer.
     * @function decode
     * @memberof GetActivityProgressRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetActivityProgressRsp} GetActivityProgressRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetActivityProgressRsp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetActivityProgressRsp();
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
                if (!(message.activityItems && message.activityItems.length))
                    message.activityItems = [];
                message.activityItems.push($root.ActivityItem.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GetActivityProgressRsp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetActivityProgressRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetActivityProgressRsp} GetActivityProgressRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetActivityProgressRsp.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetActivityProgressRsp message.
     * @function verify
     * @memberof GetActivityProgressRsp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetActivityProgressRsp.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.errCode != null && message.hasOwnProperty("errCode"))
            if (!$util.isInteger(message.errCode))
                return "errCode: integer expected";
        if (message.errMsg != null && message.hasOwnProperty("errMsg"))
            if (!$util.isString(message.errMsg))
                return "errMsg: string expected";
        if (message.activityItems != null && message.hasOwnProperty("activityItems")) {
            if (!Array.isArray(message.activityItems))
                return "activityItems: array expected";
            for (var i = 0; i < message.activityItems.length; ++i) {
                var error = $root.ActivityItem.verify(message.activityItems[i]);
                if (error)
                    return "activityItems." + error;
            }
        }
        return null;
    };

    /**
     * Creates a GetActivityProgressRsp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetActivityProgressRsp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetActivityProgressRsp} GetActivityProgressRsp
     */
    GetActivityProgressRsp.fromObject = function fromObject(object) {
        if (object instanceof $root.GetActivityProgressRsp)
            return object;
        var message = new $root.GetActivityProgressRsp();
        if (object.errCode != null)
            message.errCode = object.errCode | 0;
        if (object.errMsg != null)
            message.errMsg = String(object.errMsg);
        if (object.activityItems) {
            if (!Array.isArray(object.activityItems))
                throw TypeError(".GetActivityProgressRsp.activityItems: array expected");
            message.activityItems = [];
            for (var i = 0; i < object.activityItems.length; ++i) {
                if (typeof object.activityItems[i] !== "object")
                    throw TypeError(".GetActivityProgressRsp.activityItems: object expected");
                message.activityItems[i] = $root.ActivityItem.fromObject(object.activityItems[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a GetActivityProgressRsp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetActivityProgressRsp
     * @static
     * @param {GetActivityProgressRsp} message GetActivityProgressRsp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetActivityProgressRsp.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.activityItems = [];
        if (options.defaults) {
            object.errCode = 0;
            object.errMsg = "";
        }
        if (message.errCode != null && message.hasOwnProperty("errCode"))
            object.errCode = message.errCode;
        if (message.errMsg != null && message.hasOwnProperty("errMsg"))
            object.errMsg = message.errMsg;
        if (message.activityItems && message.activityItems.length) {
            object.activityItems = [];
            for (var j = 0; j < message.activityItems.length; ++j)
                object.activityItems[j] = $root.ActivityItem.toObject(message.activityItems[j], options);
        }
        return object;
    };

    /**
     * Converts this GetActivityProgressRsp to JSON.
     * @function toJSON
     * @memberof GetActivityProgressRsp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetActivityProgressRsp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetActivityProgressRsp;
})();

$root.GetActivityAwardReq = (function() {

    /**
     * Properties of a GetActivityAwardReq.
     * @exports IGetActivityAwardReq
     * @interface IGetActivityAwardReq
     * @property {string|null} [progIds] GetActivityAwardReq progIds
     * @property {number|Long|null} [uid] GetActivityAwardReq uid
     * @property {number|null} [type] GetActivityAwardReq type
     * @property {number|null} [double] GetActivityAwardReq double
     */

    /**
     * Constructs a new GetActivityAwardReq.
     * @exports GetActivityAwardReq
     * @classdesc Represents a GetActivityAwardReq.
     * @implements IGetActivityAwardReq
     * @constructor
     * @param {IGetActivityAwardReq=} [properties] Properties to set
     */
    function GetActivityAwardReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetActivityAwardReq progIds.
     * @member {string} progIds
     * @memberof GetActivityAwardReq
     * @instance
     */
    GetActivityAwardReq.prototype.progIds = "";

    /**
     * GetActivityAwardReq uid.
     * @member {number|Long} uid
     * @memberof GetActivityAwardReq
     * @instance
     */
    GetActivityAwardReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * GetActivityAwardReq type.
     * @member {number} type
     * @memberof GetActivityAwardReq
     * @instance
     */
    GetActivityAwardReq.prototype.type = 0;

    /**
     * GetActivityAwardReq double.
     * @member {number} double
     * @memberof GetActivityAwardReq
     * @instance
     */
    GetActivityAwardReq.prototype.double = 0;

    /**
     * Creates a new GetActivityAwardReq instance using the specified properties.
     * @function create
     * @memberof GetActivityAwardReq
     * @static
     * @param {IGetActivityAwardReq=} [properties] Properties to set
     * @returns {GetActivityAwardReq} GetActivityAwardReq instance
     */
    GetActivityAwardReq.create = function create(properties) {
        return new GetActivityAwardReq(properties);
    };

    /**
     * Encodes the specified GetActivityAwardReq message. Does not implicitly {@link GetActivityAwardReq.verify|verify} messages.
     * @function encode
     * @memberof GetActivityAwardReq
     * @static
     * @param {IGetActivityAwardReq} message GetActivityAwardReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetActivityAwardReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.progIds != null && Object.hasOwnProperty.call(message, "progIds"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.progIds);
        if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.uid);
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
        if (message.double != null && Object.hasOwnProperty.call(message, "double"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.double);
        return writer;
    };

    /**
     * Encodes the specified GetActivityAwardReq message, length delimited. Does not implicitly {@link GetActivityAwardReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetActivityAwardReq
     * @static
     * @param {IGetActivityAwardReq} message GetActivityAwardReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetActivityAwardReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetActivityAwardReq message from the specified reader or buffer.
     * @function decode
     * @memberof GetActivityAwardReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetActivityAwardReq} GetActivityAwardReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetActivityAwardReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetActivityAwardReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.progIds = reader.string();
                break;
            case 2:
                message.uid = reader.int64();
                break;
            case 3:
                message.type = reader.int32();
                break;
            case 4:
                message.double = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GetActivityAwardReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetActivityAwardReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetActivityAwardReq} GetActivityAwardReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetActivityAwardReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetActivityAwardReq message.
     * @function verify
     * @memberof GetActivityAwardReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetActivityAwardReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.progIds != null && message.hasOwnProperty("progIds"))
            if (!$util.isString(message.progIds))
                return "progIds: string expected";
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                return "uid: integer|Long expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isInteger(message.type))
                return "type: integer expected";
        if (message.double != null && message.hasOwnProperty("double"))
            if (!$util.isInteger(message.double))
                return "double: integer expected";
        return null;
    };

    /**
     * Creates a GetActivityAwardReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetActivityAwardReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetActivityAwardReq} GetActivityAwardReq
     */
    GetActivityAwardReq.fromObject = function fromObject(object) {
        if (object instanceof $root.GetActivityAwardReq)
            return object;
        var message = new $root.GetActivityAwardReq();
        if (object.progIds != null)
            message.progIds = String(object.progIds);
        if (object.uid != null)
            if ($util.Long)
                (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
            else if (typeof object.uid === "string")
                message.uid = parseInt(object.uid, 10);
            else if (typeof object.uid === "number")
                message.uid = object.uid;
            else if (typeof object.uid === "object")
                message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
        if (object.type != null)
            message.type = object.type | 0;
        if (object.double != null)
            message.double = object.double | 0;
        return message;
    };

    /**
     * Creates a plain object from a GetActivityAwardReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetActivityAwardReq
     * @static
     * @param {GetActivityAwardReq} message GetActivityAwardReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetActivityAwardReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.progIds = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.uid = options.longs === String ? "0" : 0;
            object.type = 0;
            object.double = 0;
        }
        if (message.progIds != null && message.hasOwnProperty("progIds"))
            object.progIds = message.progIds;
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (typeof message.uid === "number")
                object.uid = options.longs === String ? String(message.uid) : message.uid;
            else
                object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.double != null && message.hasOwnProperty("double"))
            object.double = message.double;
        return object;
    };

    /**
     * Converts this GetActivityAwardReq to JSON.
     * @function toJSON
     * @memberof GetActivityAwardReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetActivityAwardReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetActivityAwardReq;
})();

$root.GetActivityAwardRsp = (function() {

    /**
     * Properties of a GetActivityAwardRsp.
     * @exports IGetActivityAwardRsp
     * @interface IGetActivityAwardRsp
     * @property {number|null} [errCode] GetActivityAwardRsp errCode
     * @property {string|null} [errMsg] GetActivityAwardRsp errMsg
     * @property {Array.<IAwardItem>|null} [awards] GetActivityAwardRsp awards
     */

    /**
     * Constructs a new GetActivityAwardRsp.
     * @exports GetActivityAwardRsp
     * @classdesc Represents a GetActivityAwardRsp.
     * @implements IGetActivityAwardRsp
     * @constructor
     * @param {IGetActivityAwardRsp=} [properties] Properties to set
     */
    function GetActivityAwardRsp(properties) {
        this.awards = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetActivityAwardRsp errCode.
     * @member {number} errCode
     * @memberof GetActivityAwardRsp
     * @instance
     */
    GetActivityAwardRsp.prototype.errCode = 0;

    /**
     * GetActivityAwardRsp errMsg.
     * @member {string} errMsg
     * @memberof GetActivityAwardRsp
     * @instance
     */
    GetActivityAwardRsp.prototype.errMsg = "";

    /**
     * GetActivityAwardRsp awards.
     * @member {Array.<IAwardItem>} awards
     * @memberof GetActivityAwardRsp
     * @instance
     */
    GetActivityAwardRsp.prototype.awards = $util.emptyArray;

    /**
     * Creates a new GetActivityAwardRsp instance using the specified properties.
     * @function create
     * @memberof GetActivityAwardRsp
     * @static
     * @param {IGetActivityAwardRsp=} [properties] Properties to set
     * @returns {GetActivityAwardRsp} GetActivityAwardRsp instance
     */
    GetActivityAwardRsp.create = function create(properties) {
        return new GetActivityAwardRsp(properties);
    };

    /**
     * Encodes the specified GetActivityAwardRsp message. Does not implicitly {@link GetActivityAwardRsp.verify|verify} messages.
     * @function encode
     * @memberof GetActivityAwardRsp
     * @static
     * @param {IGetActivityAwardRsp} message GetActivityAwardRsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetActivityAwardRsp.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.errCode != null && Object.hasOwnProperty.call(message, "errCode"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
        if (message.errMsg != null && Object.hasOwnProperty.call(message, "errMsg"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
        if (message.awards != null && message.awards.length)
            for (var i = 0; i < message.awards.length; ++i)
                $root.AwardItem.encode(message.awards[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GetActivityAwardRsp message, length delimited. Does not implicitly {@link GetActivityAwardRsp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetActivityAwardRsp
     * @static
     * @param {IGetActivityAwardRsp} message GetActivityAwardRsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetActivityAwardRsp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetActivityAwardRsp message from the specified reader or buffer.
     * @function decode
     * @memberof GetActivityAwardRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetActivityAwardRsp} GetActivityAwardRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetActivityAwardRsp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetActivityAwardRsp();
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
                if (!(message.awards && message.awards.length))
                    message.awards = [];
                message.awards.push($root.AwardItem.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GetActivityAwardRsp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetActivityAwardRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetActivityAwardRsp} GetActivityAwardRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetActivityAwardRsp.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetActivityAwardRsp message.
     * @function verify
     * @memberof GetActivityAwardRsp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetActivityAwardRsp.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.errCode != null && message.hasOwnProperty("errCode"))
            if (!$util.isInteger(message.errCode))
                return "errCode: integer expected";
        if (message.errMsg != null && message.hasOwnProperty("errMsg"))
            if (!$util.isString(message.errMsg))
                return "errMsg: string expected";
        if (message.awards != null && message.hasOwnProperty("awards")) {
            if (!Array.isArray(message.awards))
                return "awards: array expected";
            for (var i = 0; i < message.awards.length; ++i) {
                var error = $root.AwardItem.verify(message.awards[i]);
                if (error)
                    return "awards." + error;
            }
        }
        return null;
    };

    /**
     * Creates a GetActivityAwardRsp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetActivityAwardRsp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetActivityAwardRsp} GetActivityAwardRsp
     */
    GetActivityAwardRsp.fromObject = function fromObject(object) {
        if (object instanceof $root.GetActivityAwardRsp)
            return object;
        var message = new $root.GetActivityAwardRsp();
        if (object.errCode != null)
            message.errCode = object.errCode | 0;
        if (object.errMsg != null)
            message.errMsg = String(object.errMsg);
        if (object.awards) {
            if (!Array.isArray(object.awards))
                throw TypeError(".GetActivityAwardRsp.awards: array expected");
            message.awards = [];
            for (var i = 0; i < object.awards.length; ++i) {
                if (typeof object.awards[i] !== "object")
                    throw TypeError(".GetActivityAwardRsp.awards: object expected");
                message.awards[i] = $root.AwardItem.fromObject(object.awards[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a GetActivityAwardRsp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetActivityAwardRsp
     * @static
     * @param {GetActivityAwardRsp} message GetActivityAwardRsp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetActivityAwardRsp.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.awards = [];
        if (options.defaults) {
            object.errCode = 0;
            object.errMsg = "";
        }
        if (message.errCode != null && message.hasOwnProperty("errCode"))
            object.errCode = message.errCode;
        if (message.errMsg != null && message.hasOwnProperty("errMsg"))
            object.errMsg = message.errMsg;
        if (message.awards && message.awards.length) {
            object.awards = [];
            for (var j = 0; j < message.awards.length; ++j)
                object.awards[j] = $root.AwardItem.toObject(message.awards[j], options);
        }
        return object;
    };

    /**
     * Converts this GetActivityAwardRsp to JSON.
     * @function toJSON
     * @memberof GetActivityAwardRsp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetActivityAwardRsp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetActivityAwardRsp;
})();

$root.UptBcsAdStateReq = (function() {

    /**
     * Properties of an UptBcsAdStateReq.
     * @exports IUptBcsAdStateReq
     * @interface IUptBcsAdStateReq
     * @property {number|Long|null} [uid] UptBcsAdStateReq uid
     * @property {number|null} [state] UptBcsAdStateReq state
     */

    /**
     * Constructs a new UptBcsAdStateReq.
     * @exports UptBcsAdStateReq
     * @classdesc Represents an UptBcsAdStateReq.
     * @implements IUptBcsAdStateReq
     * @constructor
     * @param {IUptBcsAdStateReq=} [properties] Properties to set
     */
    function UptBcsAdStateReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UptBcsAdStateReq uid.
     * @member {number|Long} uid
     * @memberof UptBcsAdStateReq
     * @instance
     */
    UptBcsAdStateReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * UptBcsAdStateReq state.
     * @member {number} state
     * @memberof UptBcsAdStateReq
     * @instance
     */
    UptBcsAdStateReq.prototype.state = 0;

    /**
     * Creates a new UptBcsAdStateReq instance using the specified properties.
     * @function create
     * @memberof UptBcsAdStateReq
     * @static
     * @param {IUptBcsAdStateReq=} [properties] Properties to set
     * @returns {UptBcsAdStateReq} UptBcsAdStateReq instance
     */
    UptBcsAdStateReq.create = function create(properties) {
        return new UptBcsAdStateReq(properties);
    };

    /**
     * Encodes the specified UptBcsAdStateReq message. Does not implicitly {@link UptBcsAdStateReq.verify|verify} messages.
     * @function encode
     * @memberof UptBcsAdStateReq
     * @static
     * @param {IUptBcsAdStateReq} message UptBcsAdStateReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UptBcsAdStateReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
        if (message.state != null && Object.hasOwnProperty.call(message, "state"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.state);
        return writer;
    };

    /**
     * Encodes the specified UptBcsAdStateReq message, length delimited. Does not implicitly {@link UptBcsAdStateReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UptBcsAdStateReq
     * @static
     * @param {IUptBcsAdStateReq} message UptBcsAdStateReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UptBcsAdStateReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an UptBcsAdStateReq message from the specified reader or buffer.
     * @function decode
     * @memberof UptBcsAdStateReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UptBcsAdStateReq} UptBcsAdStateReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UptBcsAdStateReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UptBcsAdStateReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.uid = reader.int64();
                break;
            case 2:
                message.state = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an UptBcsAdStateReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UptBcsAdStateReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UptBcsAdStateReq} UptBcsAdStateReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UptBcsAdStateReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an UptBcsAdStateReq message.
     * @function verify
     * @memberof UptBcsAdStateReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UptBcsAdStateReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                return "uid: integer|Long expected";
        if (message.state != null && message.hasOwnProperty("state"))
            if (!$util.isInteger(message.state))
                return "state: integer expected";
        return null;
    };

    /**
     * Creates an UptBcsAdStateReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UptBcsAdStateReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UptBcsAdStateReq} UptBcsAdStateReq
     */
    UptBcsAdStateReq.fromObject = function fromObject(object) {
        if (object instanceof $root.UptBcsAdStateReq)
            return object;
        var message = new $root.UptBcsAdStateReq();
        if (object.uid != null)
            if ($util.Long)
                (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
            else if (typeof object.uid === "string")
                message.uid = parseInt(object.uid, 10);
            else if (typeof object.uid === "number")
                message.uid = object.uid;
            else if (typeof object.uid === "object")
                message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
        if (object.state != null)
            message.state = object.state | 0;
        return message;
    };

    /**
     * Creates a plain object from an UptBcsAdStateReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UptBcsAdStateReq
     * @static
     * @param {UptBcsAdStateReq} message UptBcsAdStateReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UptBcsAdStateReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.uid = options.longs === String ? "0" : 0;
            object.state = 0;
        }
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (typeof message.uid === "number")
                object.uid = options.longs === String ? String(message.uid) : message.uid;
            else
                object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
        if (message.state != null && message.hasOwnProperty("state"))
            object.state = message.state;
        return object;
    };

    /**
     * Converts this UptBcsAdStateReq to JSON.
     * @function toJSON
     * @memberof UptBcsAdStateReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UptBcsAdStateReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UptBcsAdStateReq;
})();

$root.UptBcsAdStateRsp = (function() {

    /**
     * Properties of an UptBcsAdStateRsp.
     * @exports IUptBcsAdStateRsp
     * @interface IUptBcsAdStateRsp
     * @property {number|null} [errCode] UptBcsAdStateRsp errCode
     * @property {string|null} [errMsg] UptBcsAdStateRsp errMsg
     * @property {string|null} [service] UptBcsAdStateRsp service
     * @property {string|null} [orderId] UptBcsAdStateRsp orderId
     */

    /**
     * Constructs a new UptBcsAdStateRsp.
     * @exports UptBcsAdStateRsp
     * @classdesc Represents an UptBcsAdStateRsp.
     * @implements IUptBcsAdStateRsp
     * @constructor
     * @param {IUptBcsAdStateRsp=} [properties] Properties to set
     */
    function UptBcsAdStateRsp(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UptBcsAdStateRsp errCode.
     * @member {number} errCode
     * @memberof UptBcsAdStateRsp
     * @instance
     */
    UptBcsAdStateRsp.prototype.errCode = 0;

    /**
     * UptBcsAdStateRsp errMsg.
     * @member {string} errMsg
     * @memberof UptBcsAdStateRsp
     * @instance
     */
    UptBcsAdStateRsp.prototype.errMsg = "";

    /**
     * UptBcsAdStateRsp service.
     * @member {string} service
     * @memberof UptBcsAdStateRsp
     * @instance
     */
    UptBcsAdStateRsp.prototype.service = "";

    /**
     * UptBcsAdStateRsp orderId.
     * @member {string} orderId
     * @memberof UptBcsAdStateRsp
     * @instance
     */
    UptBcsAdStateRsp.prototype.orderId = "";

    /**
     * Creates a new UptBcsAdStateRsp instance using the specified properties.
     * @function create
     * @memberof UptBcsAdStateRsp
     * @static
     * @param {IUptBcsAdStateRsp=} [properties] Properties to set
     * @returns {UptBcsAdStateRsp} UptBcsAdStateRsp instance
     */
    UptBcsAdStateRsp.create = function create(properties) {
        return new UptBcsAdStateRsp(properties);
    };

    /**
     * Encodes the specified UptBcsAdStateRsp message. Does not implicitly {@link UptBcsAdStateRsp.verify|verify} messages.
     * @function encode
     * @memberof UptBcsAdStateRsp
     * @static
     * @param {IUptBcsAdStateRsp} message UptBcsAdStateRsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UptBcsAdStateRsp.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.errCode != null && Object.hasOwnProperty.call(message, "errCode"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
        if (message.errMsg != null && Object.hasOwnProperty.call(message, "errMsg"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
        if (message.service != null && Object.hasOwnProperty.call(message, "service"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.service);
        if (message.orderId != null && Object.hasOwnProperty.call(message, "orderId"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.orderId);
        return writer;
    };

    /**
     * Encodes the specified UptBcsAdStateRsp message, length delimited. Does not implicitly {@link UptBcsAdStateRsp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UptBcsAdStateRsp
     * @static
     * @param {IUptBcsAdStateRsp} message UptBcsAdStateRsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UptBcsAdStateRsp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an UptBcsAdStateRsp message from the specified reader or buffer.
     * @function decode
     * @memberof UptBcsAdStateRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UptBcsAdStateRsp} UptBcsAdStateRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UptBcsAdStateRsp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UptBcsAdStateRsp();
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
                message.service = reader.string();
                break;
            case 4:
                message.orderId = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an UptBcsAdStateRsp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UptBcsAdStateRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UptBcsAdStateRsp} UptBcsAdStateRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UptBcsAdStateRsp.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an UptBcsAdStateRsp message.
     * @function verify
     * @memberof UptBcsAdStateRsp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UptBcsAdStateRsp.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.errCode != null && message.hasOwnProperty("errCode"))
            if (!$util.isInteger(message.errCode))
                return "errCode: integer expected";
        if (message.errMsg != null && message.hasOwnProperty("errMsg"))
            if (!$util.isString(message.errMsg))
                return "errMsg: string expected";
        if (message.service != null && message.hasOwnProperty("service"))
            if (!$util.isString(message.service))
                return "service: string expected";
        if (message.orderId != null && message.hasOwnProperty("orderId"))
            if (!$util.isString(message.orderId))
                return "orderId: string expected";
        return null;
    };

    /**
     * Creates an UptBcsAdStateRsp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UptBcsAdStateRsp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UptBcsAdStateRsp} UptBcsAdStateRsp
     */
    UptBcsAdStateRsp.fromObject = function fromObject(object) {
        if (object instanceof $root.UptBcsAdStateRsp)
            return object;
        var message = new $root.UptBcsAdStateRsp();
        if (object.errCode != null)
            message.errCode = object.errCode | 0;
        if (object.errMsg != null)
            message.errMsg = String(object.errMsg);
        if (object.service != null)
            message.service = String(object.service);
        if (object.orderId != null)
            message.orderId = String(object.orderId);
        return message;
    };

    /**
     * Creates a plain object from an UptBcsAdStateRsp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UptBcsAdStateRsp
     * @static
     * @param {UptBcsAdStateRsp} message UptBcsAdStateRsp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UptBcsAdStateRsp.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.errCode = 0;
            object.errMsg = "";
            object.service = "";
            object.orderId = "";
        }
        if (message.errCode != null && message.hasOwnProperty("errCode"))
            object.errCode = message.errCode;
        if (message.errMsg != null && message.hasOwnProperty("errMsg"))
            object.errMsg = message.errMsg;
        if (message.service != null && message.hasOwnProperty("service"))
            object.service = message.service;
        if (message.orderId != null && message.hasOwnProperty("orderId"))
            object.orderId = message.orderId;
        return object;
    };

    /**
     * Converts this UptBcsAdStateRsp to JSON.
     * @function toJSON
     * @memberof UptBcsAdStateRsp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UptBcsAdStateRsp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UptBcsAdStateRsp;
})();

$root.ActivityHeadFrameNot = (function() {

    /**
     * Properties of an ActivityHeadFrameNot.
     * @exports IActivityHeadFrameNot
     * @interface IActivityHeadFrameNot
     * @property {Object.<string,string>|null} [params] ActivityHeadFrameNot params
     */

    /**
     * Constructs a new ActivityHeadFrameNot.
     * @exports ActivityHeadFrameNot
     * @classdesc Represents an ActivityHeadFrameNot.
     * @implements IActivityHeadFrameNot
     * @constructor
     * @param {IActivityHeadFrameNot=} [properties] Properties to set
     */
    function ActivityHeadFrameNot(properties) {
        this.params = {};
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ActivityHeadFrameNot params.
     * @member {Object.<string,string>} params
     * @memberof ActivityHeadFrameNot
     * @instance
     */
    ActivityHeadFrameNot.prototype.params = $util.emptyObject;

    /**
     * Creates a new ActivityHeadFrameNot instance using the specified properties.
     * @function create
     * @memberof ActivityHeadFrameNot
     * @static
     * @param {IActivityHeadFrameNot=} [properties] Properties to set
     * @returns {ActivityHeadFrameNot} ActivityHeadFrameNot instance
     */
    ActivityHeadFrameNot.create = function create(properties) {
        return new ActivityHeadFrameNot(properties);
    };

    /**
     * Encodes the specified ActivityHeadFrameNot message. Does not implicitly {@link ActivityHeadFrameNot.verify|verify} messages.
     * @function encode
     * @memberof ActivityHeadFrameNot
     * @static
     * @param {IActivityHeadFrameNot} message ActivityHeadFrameNot message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ActivityHeadFrameNot.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.params != null && Object.hasOwnProperty.call(message, "params"))
            for (var keys = Object.keys(message.params), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.params[keys[i]]).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ActivityHeadFrameNot message, length delimited. Does not implicitly {@link ActivityHeadFrameNot.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ActivityHeadFrameNot
     * @static
     * @param {IActivityHeadFrameNot} message ActivityHeadFrameNot message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ActivityHeadFrameNot.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ActivityHeadFrameNot message from the specified reader or buffer.
     * @function decode
     * @memberof ActivityHeadFrameNot
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ActivityHeadFrameNot} ActivityHeadFrameNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ActivityHeadFrameNot.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ActivityHeadFrameNot(), key, value;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (message.params === $util.emptyObject)
                    message.params = {};
                var end2 = reader.uint32() + reader.pos;
                key = "";
                value = "";
                while (reader.pos < end2) {
                    var tag2 = reader.uint32();
                    switch (tag2 >>> 3) {
                    case 1:
                        key = reader.string();
                        break;
                    case 2:
                        value = reader.string();
                        break;
                    default:
                        reader.skipType(tag2 & 7);
                        break;
                    }
                }
                message.params[key] = value;
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ActivityHeadFrameNot message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ActivityHeadFrameNot
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ActivityHeadFrameNot} ActivityHeadFrameNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ActivityHeadFrameNot.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ActivityHeadFrameNot message.
     * @function verify
     * @memberof ActivityHeadFrameNot
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ActivityHeadFrameNot.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.params != null && message.hasOwnProperty("params")) {
            if (!$util.isObject(message.params))
                return "params: object expected";
            var key = Object.keys(message.params);
            for (var i = 0; i < key.length; ++i)
                if (!$util.isString(message.params[key[i]]))
                    return "params: string{k:string} expected";
        }
        return null;
    };

    /**
     * Creates an ActivityHeadFrameNot message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ActivityHeadFrameNot
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ActivityHeadFrameNot} ActivityHeadFrameNot
     */
    ActivityHeadFrameNot.fromObject = function fromObject(object) {
        if (object instanceof $root.ActivityHeadFrameNot)
            return object;
        var message = new $root.ActivityHeadFrameNot();
        if (object.params) {
            if (typeof object.params !== "object")
                throw TypeError(".ActivityHeadFrameNot.params: object expected");
            message.params = {};
            for (var keys = Object.keys(object.params), i = 0; i < keys.length; ++i)
                message.params[keys[i]] = String(object.params[keys[i]]);
        }
        return message;
    };

    /**
     * Creates a plain object from an ActivityHeadFrameNot message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ActivityHeadFrameNot
     * @static
     * @param {ActivityHeadFrameNot} message ActivityHeadFrameNot
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ActivityHeadFrameNot.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.objects || options.defaults)
            object.params = {};
        var keys2;
        if (message.params && (keys2 = Object.keys(message.params)).length) {
            object.params = {};
            for (var j = 0; j < keys2.length; ++j)
                object.params[keys2[j]] = message.params[keys2[j]];
        }
        return object;
    };

    /**
     * Converts this ActivityHeadFrameNot to JSON.
     * @function toJSON
     * @memberof ActivityHeadFrameNot
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ActivityHeadFrameNot.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ActivityHeadFrameNot;
})();

$root.ActivityAwardNot = (function() {

    /**
     * Properties of an ActivityAwardNot.
     * @exports IActivityAwardNot
     * @interface IActivityAwardNot
     * @property {boolean|null} [haveRewards] ActivityAwardNot haveRewards
     * @property {number|null} [style] ActivityAwardNot style
     * @property {string|null} [desc] ActivityAwardNot desc
     * @property {number|null} [align] ActivityAwardNot align
     */

    /**
     * Constructs a new ActivityAwardNot.
     * @exports ActivityAwardNot
     * @classdesc Represents an ActivityAwardNot.
     * @implements IActivityAwardNot
     * @constructor
     * @param {IActivityAwardNot=} [properties] Properties to set
     */
    function ActivityAwardNot(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ActivityAwardNot haveRewards.
     * @member {boolean} haveRewards
     * @memberof ActivityAwardNot
     * @instance
     */
    ActivityAwardNot.prototype.haveRewards = false;

    /**
     * ActivityAwardNot style.
     * @member {number} style
     * @memberof ActivityAwardNot
     * @instance
     */
    ActivityAwardNot.prototype.style = 0;

    /**
     * ActivityAwardNot desc.
     * @member {string} desc
     * @memberof ActivityAwardNot
     * @instance
     */
    ActivityAwardNot.prototype.desc = "";

    /**
     * ActivityAwardNot align.
     * @member {number} align
     * @memberof ActivityAwardNot
     * @instance
     */
    ActivityAwardNot.prototype.align = 0;

    /**
     * Creates a new ActivityAwardNot instance using the specified properties.
     * @function create
     * @memberof ActivityAwardNot
     * @static
     * @param {IActivityAwardNot=} [properties] Properties to set
     * @returns {ActivityAwardNot} ActivityAwardNot instance
     */
    ActivityAwardNot.create = function create(properties) {
        return new ActivityAwardNot(properties);
    };

    /**
     * Encodes the specified ActivityAwardNot message. Does not implicitly {@link ActivityAwardNot.verify|verify} messages.
     * @function encode
     * @memberof ActivityAwardNot
     * @static
     * @param {IActivityAwardNot} message ActivityAwardNot message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ActivityAwardNot.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.haveRewards != null && Object.hasOwnProperty.call(message, "haveRewards"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.haveRewards);
        if (message.style != null && Object.hasOwnProperty.call(message, "style"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.style);
        if (message.desc != null && Object.hasOwnProperty.call(message, "desc"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.desc);
        if (message.align != null && Object.hasOwnProperty.call(message, "align"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.align);
        return writer;
    };

    /**
     * Encodes the specified ActivityAwardNot message, length delimited. Does not implicitly {@link ActivityAwardNot.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ActivityAwardNot
     * @static
     * @param {IActivityAwardNot} message ActivityAwardNot message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ActivityAwardNot.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ActivityAwardNot message from the specified reader or buffer.
     * @function decode
     * @memberof ActivityAwardNot
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ActivityAwardNot} ActivityAwardNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ActivityAwardNot.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ActivityAwardNot();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.haveRewards = reader.bool();
                break;
            case 2:
                message.style = reader.int32();
                break;
            case 3:
                message.desc = reader.string();
                break;
            case 4:
                message.align = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ActivityAwardNot message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ActivityAwardNot
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ActivityAwardNot} ActivityAwardNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ActivityAwardNot.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ActivityAwardNot message.
     * @function verify
     * @memberof ActivityAwardNot
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ActivityAwardNot.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.haveRewards != null && message.hasOwnProperty("haveRewards"))
            if (typeof message.haveRewards !== "boolean")
                return "haveRewards: boolean expected";
        if (message.style != null && message.hasOwnProperty("style"))
            if (!$util.isInteger(message.style))
                return "style: integer expected";
        if (message.desc != null && message.hasOwnProperty("desc"))
            if (!$util.isString(message.desc))
                return "desc: string expected";
        if (message.align != null && message.hasOwnProperty("align"))
            if (!$util.isInteger(message.align))
                return "align: integer expected";
        return null;
    };

    /**
     * Creates an ActivityAwardNot message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ActivityAwardNot
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ActivityAwardNot} ActivityAwardNot
     */
    ActivityAwardNot.fromObject = function fromObject(object) {
        if (object instanceof $root.ActivityAwardNot)
            return object;
        var message = new $root.ActivityAwardNot();
        if (object.haveRewards != null)
            message.haveRewards = Boolean(object.haveRewards);
        if (object.style != null)
            message.style = object.style | 0;
        if (object.desc != null)
            message.desc = String(object.desc);
        if (object.align != null)
            message.align = object.align | 0;
        return message;
    };

    /**
     * Creates a plain object from an ActivityAwardNot message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ActivityAwardNot
     * @static
     * @param {ActivityAwardNot} message ActivityAwardNot
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ActivityAwardNot.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.haveRewards = false;
            object.style = 0;
            object.desc = "";
            object.align = 0;
        }
        if (message.haveRewards != null && message.hasOwnProperty("haveRewards"))
            object.haveRewards = message.haveRewards;
        if (message.style != null && message.hasOwnProperty("style"))
            object.style = message.style;
        if (message.desc != null && message.hasOwnProperty("desc"))
            object.desc = message.desc;
        if (message.align != null && message.hasOwnProperty("align"))
            object.align = message.align;
        return object;
    };

    /**
     * Converts this ActivityAwardNot to JSON.
     * @function toJSON
     * @memberof ActivityAwardNot
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ActivityAwardNot.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ActivityAwardNot;
})();

$root.LevelExp = (function() {

    /**
     * Properties of a LevelExp.
     * @exports ILevelExp
     * @interface ILevelExp
     * @property {number|null} [prevLevel] LevelExp prevLevel
     * @property {number|null} [curLevel] LevelExp curLevel
     * @property {number|null} [incExp] LevelExp incExp
     * @property {number|null} [prevLevelExp] LevelExp prevLevelExp
     * @property {number|null} [prevLeftExp] LevelExp prevLeftExp
     * @property {number|null} [levelExp] LevelExp levelExp
     * @property {number|null} [leftExp] LevelExp leftExp
     * @property {number|null} [money] LevelExp money
     */

    /**
     * Constructs a new LevelExp.
     * @exports LevelExp
     * @classdesc Represents a LevelExp.
     * @implements ILevelExp
     * @constructor
     * @param {ILevelExp=} [properties] Properties to set
     */
    function LevelExp(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LevelExp prevLevel.
     * @member {number} prevLevel
     * @memberof LevelExp
     * @instance
     */
    LevelExp.prototype.prevLevel = 0;

    /**
     * LevelExp curLevel.
     * @member {number} curLevel
     * @memberof LevelExp
     * @instance
     */
    LevelExp.prototype.curLevel = 0;

    /**
     * LevelExp incExp.
     * @member {number} incExp
     * @memberof LevelExp
     * @instance
     */
    LevelExp.prototype.incExp = 0;

    /**
     * LevelExp prevLevelExp.
     * @member {number} prevLevelExp
     * @memberof LevelExp
     * @instance
     */
    LevelExp.prototype.prevLevelExp = 0;

    /**
     * LevelExp prevLeftExp.
     * @member {number} prevLeftExp
     * @memberof LevelExp
     * @instance
     */
    LevelExp.prototype.prevLeftExp = 0;

    /**
     * LevelExp levelExp.
     * @member {number} levelExp
     * @memberof LevelExp
     * @instance
     */
    LevelExp.prototype.levelExp = 0;

    /**
     * LevelExp leftExp.
     * @member {number} leftExp
     * @memberof LevelExp
     * @instance
     */
    LevelExp.prototype.leftExp = 0;

    /**
     * LevelExp money.
     * @member {number} money
     * @memberof LevelExp
     * @instance
     */
    LevelExp.prototype.money = 0;

    /**
     * Creates a new LevelExp instance using the specified properties.
     * @function create
     * @memberof LevelExp
     * @static
     * @param {ILevelExp=} [properties] Properties to set
     * @returns {LevelExp} LevelExp instance
     */
    LevelExp.create = function create(properties) {
        return new LevelExp(properties);
    };

    /**
     * Encodes the specified LevelExp message. Does not implicitly {@link LevelExp.verify|verify} messages.
     * @function encode
     * @memberof LevelExp
     * @static
     * @param {ILevelExp} message LevelExp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LevelExp.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.prevLevel != null && Object.hasOwnProperty.call(message, "prevLevel"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.prevLevel);
        if (message.curLevel != null && Object.hasOwnProperty.call(message, "curLevel"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.curLevel);
        if (message.incExp != null && Object.hasOwnProperty.call(message, "incExp"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.incExp);
        if (message.prevLevelExp != null && Object.hasOwnProperty.call(message, "prevLevelExp"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.prevLevelExp);
        if (message.prevLeftExp != null && Object.hasOwnProperty.call(message, "prevLeftExp"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.prevLeftExp);
        if (message.levelExp != null && Object.hasOwnProperty.call(message, "levelExp"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.levelExp);
        if (message.leftExp != null && Object.hasOwnProperty.call(message, "leftExp"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.leftExp);
        if (message.money != null && Object.hasOwnProperty.call(message, "money"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.money);
        return writer;
    };

    /**
     * Encodes the specified LevelExp message, length delimited. Does not implicitly {@link LevelExp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LevelExp
     * @static
     * @param {ILevelExp} message LevelExp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LevelExp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LevelExp message from the specified reader or buffer.
     * @function decode
     * @memberof LevelExp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LevelExp} LevelExp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LevelExp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LevelExp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.prevLevel = reader.int32();
                break;
            case 2:
                message.curLevel = reader.int32();
                break;
            case 3:
                message.incExp = reader.int32();
                break;
            case 4:
                message.prevLevelExp = reader.int32();
                break;
            case 5:
                message.prevLeftExp = reader.int32();
                break;
            case 6:
                message.levelExp = reader.int32();
                break;
            case 7:
                message.leftExp = reader.int32();
                break;
            case 8:
                message.money = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LevelExp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LevelExp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LevelExp} LevelExp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LevelExp.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LevelExp message.
     * @function verify
     * @memberof LevelExp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LevelExp.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.prevLevel != null && message.hasOwnProperty("prevLevel"))
            if (!$util.isInteger(message.prevLevel))
                return "prevLevel: integer expected";
        if (message.curLevel != null && message.hasOwnProperty("curLevel"))
            if (!$util.isInteger(message.curLevel))
                return "curLevel: integer expected";
        if (message.incExp != null && message.hasOwnProperty("incExp"))
            if (!$util.isInteger(message.incExp))
                return "incExp: integer expected";
        if (message.prevLevelExp != null && message.hasOwnProperty("prevLevelExp"))
            if (!$util.isInteger(message.prevLevelExp))
                return "prevLevelExp: integer expected";
        if (message.prevLeftExp != null && message.hasOwnProperty("prevLeftExp"))
            if (!$util.isInteger(message.prevLeftExp))
                return "prevLeftExp: integer expected";
        if (message.levelExp != null && message.hasOwnProperty("levelExp"))
            if (!$util.isInteger(message.levelExp))
                return "levelExp: integer expected";
        if (message.leftExp != null && message.hasOwnProperty("leftExp"))
            if (!$util.isInteger(message.leftExp))
                return "leftExp: integer expected";
        if (message.money != null && message.hasOwnProperty("money"))
            if (!$util.isInteger(message.money))
                return "money: integer expected";
        return null;
    };

    /**
     * Creates a LevelExp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LevelExp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LevelExp} LevelExp
     */
    LevelExp.fromObject = function fromObject(object) {
        if (object instanceof $root.LevelExp)
            return object;
        var message = new $root.LevelExp();
        if (object.prevLevel != null)
            message.prevLevel = object.prevLevel | 0;
        if (object.curLevel != null)
            message.curLevel = object.curLevel | 0;
        if (object.incExp != null)
            message.incExp = object.incExp | 0;
        if (object.prevLevelExp != null)
            message.prevLevelExp = object.prevLevelExp | 0;
        if (object.prevLeftExp != null)
            message.prevLeftExp = object.prevLeftExp | 0;
        if (object.levelExp != null)
            message.levelExp = object.levelExp | 0;
        if (object.leftExp != null)
            message.leftExp = object.leftExp | 0;
        if (object.money != null)
            message.money = object.money | 0;
        return message;
    };

    /**
     * Creates a plain object from a LevelExp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LevelExp
     * @static
     * @param {LevelExp} message LevelExp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LevelExp.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.prevLevel = 0;
            object.curLevel = 0;
            object.incExp = 0;
            object.prevLevelExp = 0;
            object.prevLeftExp = 0;
            object.levelExp = 0;
            object.leftExp = 0;
            object.money = 0;
        }
        if (message.prevLevel != null && message.hasOwnProperty("prevLevel"))
            object.prevLevel = message.prevLevel;
        if (message.curLevel != null && message.hasOwnProperty("curLevel"))
            object.curLevel = message.curLevel;
        if (message.incExp != null && message.hasOwnProperty("incExp"))
            object.incExp = message.incExp;
        if (message.prevLevelExp != null && message.hasOwnProperty("prevLevelExp"))
            object.prevLevelExp = message.prevLevelExp;
        if (message.prevLeftExp != null && message.hasOwnProperty("prevLeftExp"))
            object.prevLeftExp = message.prevLeftExp;
        if (message.levelExp != null && message.hasOwnProperty("levelExp"))
            object.levelExp = message.levelExp;
        if (message.leftExp != null && message.hasOwnProperty("leftExp"))
            object.leftExp = message.leftExp;
        if (message.money != null && message.hasOwnProperty("money"))
            object.money = message.money;
        return object;
    };

    /**
     * Converts this LevelExp to JSON.
     * @function toJSON
     * @memberof LevelExp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LevelExp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return LevelExp;
})();

module.exports = $root;
