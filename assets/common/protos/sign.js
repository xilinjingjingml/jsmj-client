/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.sign || ($protobuf.roots.sign = {});

$root.Sign = (function() {

    /**
     * Constructs a new Sign service.
     * @exports Sign
     * @classdesc Represents a Sign
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function Sign(rpcImpl, requestDelimited, responseDelimited) {
        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
    }

    (Sign.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Sign;

    /**
     * Creates new Sign service using the specified rpc implementation.
     * @function create
     * @memberof Sign
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {Sign} RPC service. Useful where requests and/or responses are streamed.
     */
    Sign.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        return new this(rpcImpl, requestDelimited, responseDelimited);
    };

    /**
     * Callback as used by {@link Sign#dengLuJiangLi}.
     * @memberof Sign
     * @typedef DengLuJiangLiCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {GetMeiRiDengLuJiangLiAck} [response] GetMeiRiDengLuJiangLiAck
     */

    /**
     * Calls DengLuJiangLi.
     * @function dengLuJiangLi
     * @memberof Sign
     * @instance
     * @param {IGetMeiRiDengLuJiangLiReq} request GetMeiRiDengLuJiangLiReq message or plain object
     * @param {Sign.DengLuJiangLiCallback} callback Node-style callback called with the error, if any, and GetMeiRiDengLuJiangLiAck
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Sign.prototype.dengLuJiangLi = function dengLuJiangLi(request, callback) {
        return this.rpcCall(dengLuJiangLi, $root.GetMeiRiDengLuJiangLiReq, $root.GetMeiRiDengLuJiangLiAck, request, callback);
    }, "name", { value: "DengLuJiangLi" });

    /**
     * Calls DengLuJiangLi.
     * @function dengLuJiangLi
     * @memberof Sign
     * @instance
     * @param {IGetMeiRiDengLuJiangLiReq} request GetMeiRiDengLuJiangLiReq message or plain object
     * @returns {Promise<GetMeiRiDengLuJiangLiAck>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link Sign#getLoginReward}.
     * @memberof Sign
     * @typedef GetLoginRewardCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {Empty} [response] Empty
     */

    /**
     * Calls GetLoginReward.
     * @function getLoginReward
     * @memberof Sign
     * @instance
     * @param {IGetLoginRewardReq} request GetLoginRewardReq message or plain object
     * @param {Sign.GetLoginRewardCallback} callback Node-style callback called with the error, if any, and Empty
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Sign.prototype.getLoginReward = function getLoginReward(request, callback) {
        return this.rpcCall(getLoginReward, $root.GetLoginRewardReq, $root.Empty, request, callback);
    }, "name", { value: "GetLoginReward" });

    /**
     * Calls GetLoginReward.
     * @function getLoginReward
     * @memberof Sign
     * @instance
     * @param {IGetLoginRewardReq} request GetLoginRewardReq message or plain object
     * @returns {Promise<Empty>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link Sign#dailyFirstLogin}.
     * @memberof Sign
     * @typedef DailyFirstLoginCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {GetDailyFirstLoginAck} [response] GetDailyFirstLoginAck
     */

    /**
     * Calls DailyFirstLogin.
     * @function dailyFirstLogin
     * @memberof Sign
     * @instance
     * @param {IGetDailyFirstLoginReq} request GetDailyFirstLoginReq message or plain object
     * @param {Sign.DailyFirstLoginCallback} callback Node-style callback called with the error, if any, and GetDailyFirstLoginAck
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Sign.prototype.dailyFirstLogin = function dailyFirstLogin(request, callback) {
        return this.rpcCall(dailyFirstLogin, $root.GetDailyFirstLoginReq, $root.GetDailyFirstLoginAck, request, callback);
    }, "name", { value: "DailyFirstLogin" });

    /**
     * Calls DailyFirstLogin.
     * @function dailyFirstLogin
     * @memberof Sign
     * @instance
     * @param {IGetDailyFirstLoginReq} request GetDailyFirstLoginReq message or plain object
     * @returns {Promise<GetDailyFirstLoginAck>} Promise
     * @variation 2
     */

    return Sign;
})();

$root.Empty = (function() {

    /**
     * Properties of an Empty.
     * @exports IEmpty
     * @interface IEmpty
     */

    /**
     * Constructs a new Empty.
     * @exports Empty
     * @classdesc Represents an Empty.
     * @implements IEmpty
     * @constructor
     * @param {IEmpty=} [properties] Properties to set
     */
    function Empty(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new Empty instance using the specified properties.
     * @function create
     * @memberof Empty
     * @static
     * @param {IEmpty=} [properties] Properties to set
     * @returns {Empty} Empty instance
     */
    Empty.create = function create(properties) {
        return new Empty(properties);
    };

    /**
     * Encodes the specified Empty message. Does not implicitly {@link Empty.verify|verify} messages.
     * @function encode
     * @memberof Empty
     * @static
     * @param {IEmpty} message Empty message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Empty.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified Empty message, length delimited. Does not implicitly {@link Empty.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Empty
     * @static
     * @param {IEmpty} message Empty message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Empty.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Empty message from the specified reader or buffer.
     * @function decode
     * @memberof Empty
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Empty} Empty
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Empty.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Empty();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Empty message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Empty
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Empty} Empty
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Empty.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Empty message.
     * @function verify
     * @memberof Empty
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Empty.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates an Empty message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Empty
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Empty} Empty
     */
    Empty.fromObject = function fromObject(object) {
        if (object instanceof $root.Empty)
            return object;
        return new $root.Empty();
    };

    /**
     * Creates a plain object from an Empty message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Empty
     * @static
     * @param {Empty} message Empty
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Empty.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this Empty to JSON.
     * @function toJSON
     * @memberof Empty
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Empty.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Empty;
})();

$root.Pair = (function() {

    /**
     * Properties of a Pair.
     * @exports IPair
     * @interface IPair
     * @property {string|null} [key] Pair key
     * @property {string|null} [value] Pair value
     */

    /**
     * Constructs a new Pair.
     * @exports Pair
     * @classdesc Represents a Pair.
     * @implements IPair
     * @constructor
     * @param {IPair=} [properties] Properties to set
     */
    function Pair(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Pair key.
     * @member {string} key
     * @memberof Pair
     * @instance
     */
    Pair.prototype.key = "";

    /**
     * Pair value.
     * @member {string} value
     * @memberof Pair
     * @instance
     */
    Pair.prototype.value = "";

    /**
     * Creates a new Pair instance using the specified properties.
     * @function create
     * @memberof Pair
     * @static
     * @param {IPair=} [properties] Properties to set
     * @returns {Pair} Pair instance
     */
    Pair.create = function create(properties) {
        return new Pair(properties);
    };

    /**
     * Encodes the specified Pair message. Does not implicitly {@link Pair.verify|verify} messages.
     * @function encode
     * @memberof Pair
     * @static
     * @param {IPair} message Pair message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Pair.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.key != null && message.hasOwnProperty("key"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
        if (message.value != null && message.hasOwnProperty("value"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
        return writer;
    };

    /**
     * Encodes the specified Pair message, length delimited. Does not implicitly {@link Pair.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Pair
     * @static
     * @param {IPair} message Pair message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Pair.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Pair message from the specified reader or buffer.
     * @function decode
     * @memberof Pair
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Pair} Pair
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Pair.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Pair();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.key = reader.string();
                break;
            case 2:
                message.value = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Pair message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Pair
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Pair} Pair
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Pair.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Pair message.
     * @function verify
     * @memberof Pair
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Pair.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.key != null && message.hasOwnProperty("key"))
            if (!$util.isString(message.key))
                return "key: string expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!$util.isString(message.value))
                return "value: string expected";
        return null;
    };

    /**
     * Creates a Pair message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Pair
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Pair} Pair
     */
    Pair.fromObject = function fromObject(object) {
        if (object instanceof $root.Pair)
            return object;
        var message = new $root.Pair();
        if (object.key != null)
            message.key = String(object.key);
        if (object.value != null)
            message.value = String(object.value);
        return message;
    };

    /**
     * Creates a plain object from a Pair message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Pair
     * @static
     * @param {Pair} message Pair
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Pair.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.key = "";
            object.value = "";
        }
        if (message.key != null && message.hasOwnProperty("key"))
            object.key = message.key;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = message.value;
        return object;
    };

    /**
     * Converts this Pair to JSON.
     * @function toJSON
     * @memberof Pair
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Pair.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Pair;
})();

$root.Award = (function() {

    /**
     * Properties of an Award.
     * @exports IAward
     * @interface IAward
     * @property {number|null} [index] Award index
     * @property {number|Long|null} [num] Award num
     * @property {Array.<IPair>|null} [param] Award param
     */

    /**
     * Constructs a new Award.
     * @exports Award
     * @classdesc Represents an Award.
     * @implements IAward
     * @constructor
     * @param {IAward=} [properties] Properties to set
     */
    function Award(properties) {
        this.param = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Award index.
     * @member {number} index
     * @memberof Award
     * @instance
     */
    Award.prototype.index = 0;

    /**
     * Award num.
     * @member {number|Long} num
     * @memberof Award
     * @instance
     */
    Award.prototype.num = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Award param.
     * @member {Array.<IPair>} param
     * @memberof Award
     * @instance
     */
    Award.prototype.param = $util.emptyArray;

    /**
     * Creates a new Award instance using the specified properties.
     * @function create
     * @memberof Award
     * @static
     * @param {IAward=} [properties] Properties to set
     * @returns {Award} Award instance
     */
    Award.create = function create(properties) {
        return new Award(properties);
    };

    /**
     * Encodes the specified Award message. Does not implicitly {@link Award.verify|verify} messages.
     * @function encode
     * @memberof Award
     * @static
     * @param {IAward} message Award message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Award.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.index != null && message.hasOwnProperty("index"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.index);
        if (message.num != null && message.hasOwnProperty("num"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.num);
        if (message.param != null && message.param.length)
            for (var i = 0; i < message.param.length; ++i)
                $root.Pair.encode(message.param[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Award message, length delimited. Does not implicitly {@link Award.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Award
     * @static
     * @param {IAward} message Award message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Award.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Award message from the specified reader or buffer.
     * @function decode
     * @memberof Award
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Award} Award
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Award.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Award();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.index = reader.int32();
                break;
            case 2:
                message.num = reader.int64();
                break;
            case 3:
                if (!(message.param && message.param.length))
                    message.param = [];
                message.param.push($root.Pair.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Award message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Award
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Award} Award
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Award.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Award message.
     * @function verify
     * @memberof Award
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Award.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.index != null && message.hasOwnProperty("index"))
            if (!$util.isInteger(message.index))
                return "index: integer expected";
        if (message.num != null && message.hasOwnProperty("num"))
            if (!$util.isInteger(message.num) && !(message.num && $util.isInteger(message.num.low) && $util.isInteger(message.num.high)))
                return "num: integer|Long expected";
        if (message.param != null && message.hasOwnProperty("param")) {
            if (!Array.isArray(message.param))
                return "param: array expected";
            for (var i = 0; i < message.param.length; ++i) {
                var error = $root.Pair.verify(message.param[i]);
                if (error)
                    return "param." + error;
            }
        }
        return null;
    };

    /**
     * Creates an Award message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Award
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Award} Award
     */
    Award.fromObject = function fromObject(object) {
        if (object instanceof $root.Award)
            return object;
        var message = new $root.Award();
        if (object.index != null)
            message.index = object.index | 0;
        if (object.num != null)
            if ($util.Long)
                (message.num = $util.Long.fromValue(object.num)).unsigned = false;
            else if (typeof object.num === "string")
                message.num = parseInt(object.num, 10);
            else if (typeof object.num === "number")
                message.num = object.num;
            else if (typeof object.num === "object")
                message.num = new $util.LongBits(object.num.low >>> 0, object.num.high >>> 0).toNumber();
        if (object.param) {
            if (!Array.isArray(object.param))
                throw TypeError(".Award.param: array expected");
            message.param = [];
            for (var i = 0; i < object.param.length; ++i) {
                if (typeof object.param[i] !== "object")
                    throw TypeError(".Award.param: object expected");
                message.param[i] = $root.Pair.fromObject(object.param[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from an Award message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Award
     * @static
     * @param {Award} message Award
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Award.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.param = [];
        if (options.defaults) {
            object.index = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.num = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.num = options.longs === String ? "0" : 0;
        }
        if (message.index != null && message.hasOwnProperty("index"))
            object.index = message.index;
        if (message.num != null && message.hasOwnProperty("num"))
            if (typeof message.num === "number")
                object.num = options.longs === String ? String(message.num) : message.num;
            else
                object.num = options.longs === String ? $util.Long.prototype.toString.call(message.num) : options.longs === Number ? new $util.LongBits(message.num.low >>> 0, message.num.high >>> 0).toNumber() : message.num;
        if (message.param && message.param.length) {
            object.param = [];
            for (var j = 0; j < message.param.length; ++j)
                object.param[j] = $root.Pair.toObject(message.param[j], options);
        }
        return object;
    };

    /**
     * Converts this Award to JSON.
     * @function toJSON
     * @memberof Award
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Award.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Award;
})();

$root.DayItem = (function() {

    /**
     * Properties of a DayItem.
     * @exports IDayItem
     * @interface IDayItem
     * @property {Array.<IAward>|null} [award] DayItem award
     * @property {number|null} [day] DayItem day
     * @property {number|null} [State] DayItem State
     * @property {string|null} [desc] DayItem desc
     * @property {string|null} [service] DayItem service
     * @property {string|null} [orderId] DayItem orderId
     */

    /**
     * Constructs a new DayItem.
     * @exports DayItem
     * @classdesc Represents a DayItem.
     * @implements IDayItem
     * @constructor
     * @param {IDayItem=} [properties] Properties to set
     */
    function DayItem(properties) {
        this.award = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DayItem award.
     * @member {Array.<IAward>} award
     * @memberof DayItem
     * @instance
     */
    DayItem.prototype.award = $util.emptyArray;

    /**
     * DayItem day.
     * @member {number} day
     * @memberof DayItem
     * @instance
     */
    DayItem.prototype.day = 0;

    /**
     * DayItem State.
     * @member {number} State
     * @memberof DayItem
     * @instance
     */
    DayItem.prototype.State = 0;

    /**
     * DayItem desc.
     * @member {string} desc
     * @memberof DayItem
     * @instance
     */
    DayItem.prototype.desc = "";

    /**
     * DayItem service.
     * @member {string} service
     * @memberof DayItem
     * @instance
     */
    DayItem.prototype.service = "";

    /**
     * DayItem orderId.
     * @member {string} orderId
     * @memberof DayItem
     * @instance
     */
    DayItem.prototype.orderId = "";

    /**
     * Creates a new DayItem instance using the specified properties.
     * @function create
     * @memberof DayItem
     * @static
     * @param {IDayItem=} [properties] Properties to set
     * @returns {DayItem} DayItem instance
     */
    DayItem.create = function create(properties) {
        return new DayItem(properties);
    };

    /**
     * Encodes the specified DayItem message. Does not implicitly {@link DayItem.verify|verify} messages.
     * @function encode
     * @memberof DayItem
     * @static
     * @param {IDayItem} message DayItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DayItem.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.award != null && message.award.length)
            for (var i = 0; i < message.award.length; ++i)
                $root.Award.encode(message.award[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.day != null && message.hasOwnProperty("day"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.day);
        if (message.State != null && message.hasOwnProperty("State"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.State);
        if (message.desc != null && message.hasOwnProperty("desc"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.desc);
        if (message.service != null && message.hasOwnProperty("service"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.service);
        if (message.orderId != null && message.hasOwnProperty("orderId"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.orderId);
        return writer;
    };

    /**
     * Encodes the specified DayItem message, length delimited. Does not implicitly {@link DayItem.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DayItem
     * @static
     * @param {IDayItem} message DayItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DayItem.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DayItem message from the specified reader or buffer.
     * @function decode
     * @memberof DayItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DayItem} DayItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DayItem.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DayItem();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.award && message.award.length))
                    message.award = [];
                message.award.push($root.Award.decode(reader, reader.uint32()));
                break;
            case 2:
                message.day = reader.int32();
                break;
            case 3:
                message.State = reader.int32();
                break;
            case 4:
                message.desc = reader.string();
                break;
            case 5:
                message.service = reader.string();
                break;
            case 6:
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
     * Decodes a DayItem message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DayItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DayItem} DayItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DayItem.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DayItem message.
     * @function verify
     * @memberof DayItem
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DayItem.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.award != null && message.hasOwnProperty("award")) {
            if (!Array.isArray(message.award))
                return "award: array expected";
            for (var i = 0; i < message.award.length; ++i) {
                var error = $root.Award.verify(message.award[i]);
                if (error)
                    return "award." + error;
            }
        }
        if (message.day != null && message.hasOwnProperty("day"))
            if (!$util.isInteger(message.day))
                return "day: integer expected";
        if (message.State != null && message.hasOwnProperty("State"))
            if (!$util.isInteger(message.State))
                return "State: integer expected";
        if (message.desc != null && message.hasOwnProperty("desc"))
            if (!$util.isString(message.desc))
                return "desc: string expected";
        if (message.service != null && message.hasOwnProperty("service"))
            if (!$util.isString(message.service))
                return "service: string expected";
        if (message.orderId != null && message.hasOwnProperty("orderId"))
            if (!$util.isString(message.orderId))
                return "orderId: string expected";
        return null;
    };

    /**
     * Creates a DayItem message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DayItem
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DayItem} DayItem
     */
    DayItem.fromObject = function fromObject(object) {
        if (object instanceof $root.DayItem)
            return object;
        var message = new $root.DayItem();
        if (object.award) {
            if (!Array.isArray(object.award))
                throw TypeError(".DayItem.award: array expected");
            message.award = [];
            for (var i = 0; i < object.award.length; ++i) {
                if (typeof object.award[i] !== "object")
                    throw TypeError(".DayItem.award: object expected");
                message.award[i] = $root.Award.fromObject(object.award[i]);
            }
        }
        if (object.day != null)
            message.day = object.day | 0;
        if (object.State != null)
            message.State = object.State | 0;
        if (object.desc != null)
            message.desc = String(object.desc);
        if (object.service != null)
            message.service = String(object.service);
        if (object.orderId != null)
            message.orderId = String(object.orderId);
        return message;
    };

    /**
     * Creates a plain object from a DayItem message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DayItem
     * @static
     * @param {DayItem} message DayItem
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DayItem.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.award = [];
        if (options.defaults) {
            object.day = 0;
            object.State = 0;
            object.desc = "";
            object.service = "";
            object.orderId = "";
        }
        if (message.award && message.award.length) {
            object.award = [];
            for (var j = 0; j < message.award.length; ++j)
                object.award[j] = $root.Award.toObject(message.award[j], options);
        }
        if (message.day != null && message.hasOwnProperty("day"))
            object.day = message.day;
        if (message.State != null && message.hasOwnProperty("State"))
            object.State = message.State;
        if (message.desc != null && message.hasOwnProperty("desc"))
            object.desc = message.desc;
        if (message.service != null && message.hasOwnProperty("service"))
            object.service = message.service;
        if (message.orderId != null && message.hasOwnProperty("orderId"))
            object.orderId = message.orderId;
        return object;
    };

    /**
     * Converts this DayItem to JSON.
     * @function toJSON
     * @memberof DayItem
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DayItem.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DayItem;
})();

$root.GetMeiRiDengLuJiangLiAck = (function() {

    /**
     * Properties of a GetMeiRiDengLuJiangLiAck.
     * @exports IGetMeiRiDengLuJiangLiAck
     * @interface IGetMeiRiDengLuJiangLiAck
     * @property {number|null} [errCode] GetMeiRiDengLuJiangLiAck errCode
     * @property {string|null} [errMsg] GetMeiRiDengLuJiangLiAck errMsg
     * @property {Array.<IDayItem>|null} [AllItems] GetMeiRiDengLuJiangLiAck AllItems
     * @property {number|null} [today] GetMeiRiDengLuJiangLiAck today
     */

    /**
     * Constructs a new GetMeiRiDengLuJiangLiAck.
     * @exports GetMeiRiDengLuJiangLiAck
     * @classdesc Represents a GetMeiRiDengLuJiangLiAck.
     * @implements IGetMeiRiDengLuJiangLiAck
     * @constructor
     * @param {IGetMeiRiDengLuJiangLiAck=} [properties] Properties to set
     */
    function GetMeiRiDengLuJiangLiAck(properties) {
        this.AllItems = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetMeiRiDengLuJiangLiAck errCode.
     * @member {number} errCode
     * @memberof GetMeiRiDengLuJiangLiAck
     * @instance
     */
    GetMeiRiDengLuJiangLiAck.prototype.errCode = 0;

    /**
     * GetMeiRiDengLuJiangLiAck errMsg.
     * @member {string} errMsg
     * @memberof GetMeiRiDengLuJiangLiAck
     * @instance
     */
    GetMeiRiDengLuJiangLiAck.prototype.errMsg = "";

    /**
     * GetMeiRiDengLuJiangLiAck AllItems.
     * @member {Array.<IDayItem>} AllItems
     * @memberof GetMeiRiDengLuJiangLiAck
     * @instance
     */
    GetMeiRiDengLuJiangLiAck.prototype.AllItems = $util.emptyArray;

    /**
     * GetMeiRiDengLuJiangLiAck today.
     * @member {number} today
     * @memberof GetMeiRiDengLuJiangLiAck
     * @instance
     */
    GetMeiRiDengLuJiangLiAck.prototype.today = 0;

    /**
     * Creates a new GetMeiRiDengLuJiangLiAck instance using the specified properties.
     * @function create
     * @memberof GetMeiRiDengLuJiangLiAck
     * @static
     * @param {IGetMeiRiDengLuJiangLiAck=} [properties] Properties to set
     * @returns {GetMeiRiDengLuJiangLiAck} GetMeiRiDengLuJiangLiAck instance
     */
    GetMeiRiDengLuJiangLiAck.create = function create(properties) {
        return new GetMeiRiDengLuJiangLiAck(properties);
    };

    /**
     * Encodes the specified GetMeiRiDengLuJiangLiAck message. Does not implicitly {@link GetMeiRiDengLuJiangLiAck.verify|verify} messages.
     * @function encode
     * @memberof GetMeiRiDengLuJiangLiAck
     * @static
     * @param {IGetMeiRiDengLuJiangLiAck} message GetMeiRiDengLuJiangLiAck message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetMeiRiDengLuJiangLiAck.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.errCode != null && message.hasOwnProperty("errCode"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
        if (message.errMsg != null && message.hasOwnProperty("errMsg"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
        if (message.AllItems != null && message.AllItems.length)
            for (var i = 0; i < message.AllItems.length; ++i)
                $root.DayItem.encode(message.AllItems[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.today != null && message.hasOwnProperty("today"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.today);
        return writer;
    };

    /**
     * Encodes the specified GetMeiRiDengLuJiangLiAck message, length delimited. Does not implicitly {@link GetMeiRiDengLuJiangLiAck.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetMeiRiDengLuJiangLiAck
     * @static
     * @param {IGetMeiRiDengLuJiangLiAck} message GetMeiRiDengLuJiangLiAck message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetMeiRiDengLuJiangLiAck.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetMeiRiDengLuJiangLiAck message from the specified reader or buffer.
     * @function decode
     * @memberof GetMeiRiDengLuJiangLiAck
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetMeiRiDengLuJiangLiAck} GetMeiRiDengLuJiangLiAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetMeiRiDengLuJiangLiAck.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetMeiRiDengLuJiangLiAck();
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
                if (!(message.AllItems && message.AllItems.length))
                    message.AllItems = [];
                message.AllItems.push($root.DayItem.decode(reader, reader.uint32()));
                break;
            case 4:
                message.today = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GetMeiRiDengLuJiangLiAck message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetMeiRiDengLuJiangLiAck
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetMeiRiDengLuJiangLiAck} GetMeiRiDengLuJiangLiAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetMeiRiDengLuJiangLiAck.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetMeiRiDengLuJiangLiAck message.
     * @function verify
     * @memberof GetMeiRiDengLuJiangLiAck
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetMeiRiDengLuJiangLiAck.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.errCode != null && message.hasOwnProperty("errCode"))
            if (!$util.isInteger(message.errCode))
                return "errCode: integer expected";
        if (message.errMsg != null && message.hasOwnProperty("errMsg"))
            if (!$util.isString(message.errMsg))
                return "errMsg: string expected";
        if (message.AllItems != null && message.hasOwnProperty("AllItems")) {
            if (!Array.isArray(message.AllItems))
                return "AllItems: array expected";
            for (var i = 0; i < message.AllItems.length; ++i) {
                var error = $root.DayItem.verify(message.AllItems[i]);
                if (error)
                    return "AllItems." + error;
            }
        }
        if (message.today != null && message.hasOwnProperty("today"))
            if (!$util.isInteger(message.today))
                return "today: integer expected";
        return null;
    };

    /**
     * Creates a GetMeiRiDengLuJiangLiAck message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetMeiRiDengLuJiangLiAck
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetMeiRiDengLuJiangLiAck} GetMeiRiDengLuJiangLiAck
     */
    GetMeiRiDengLuJiangLiAck.fromObject = function fromObject(object) {
        if (object instanceof $root.GetMeiRiDengLuJiangLiAck)
            return object;
        var message = new $root.GetMeiRiDengLuJiangLiAck();
        if (object.errCode != null)
            message.errCode = object.errCode | 0;
        if (object.errMsg != null)
            message.errMsg = String(object.errMsg);
        if (object.AllItems) {
            if (!Array.isArray(object.AllItems))
                throw TypeError(".GetMeiRiDengLuJiangLiAck.AllItems: array expected");
            message.AllItems = [];
            for (var i = 0; i < object.AllItems.length; ++i) {
                if (typeof object.AllItems[i] !== "object")
                    throw TypeError(".GetMeiRiDengLuJiangLiAck.AllItems: object expected");
                message.AllItems[i] = $root.DayItem.fromObject(object.AllItems[i]);
            }
        }
        if (object.today != null)
            message.today = object.today | 0;
        return message;
    };

    /**
     * Creates a plain object from a GetMeiRiDengLuJiangLiAck message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetMeiRiDengLuJiangLiAck
     * @static
     * @param {GetMeiRiDengLuJiangLiAck} message GetMeiRiDengLuJiangLiAck
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetMeiRiDengLuJiangLiAck.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.AllItems = [];
        if (options.defaults) {
            object.errCode = 0;
            object.errMsg = "";
            object.today = 0;
        }
        if (message.errCode != null && message.hasOwnProperty("errCode"))
            object.errCode = message.errCode;
        if (message.errMsg != null && message.hasOwnProperty("errMsg"))
            object.errMsg = message.errMsg;
        if (message.AllItems && message.AllItems.length) {
            object.AllItems = [];
            for (var j = 0; j < message.AllItems.length; ++j)
                object.AllItems[j] = $root.DayItem.toObject(message.AllItems[j], options);
        }
        if (message.today != null && message.hasOwnProperty("today"))
            object.today = message.today;
        return object;
    };

    /**
     * Converts this GetMeiRiDengLuJiangLiAck to JSON.
     * @function toJSON
     * @memberof GetMeiRiDengLuJiangLiAck
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetMeiRiDengLuJiangLiAck.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetMeiRiDengLuJiangLiAck;
})();

$root.GetMeiRiDengLuJiangLiReq = (function() {

    /**
     * Properties of a GetMeiRiDengLuJiangLiReq.
     * @exports IGetMeiRiDengLuJiangLiReq
     * @interface IGetMeiRiDengLuJiangLiReq
     * @property {number|Long|null} [uid] GetMeiRiDengLuJiangLiReq uid
     */

    /**
     * Constructs a new GetMeiRiDengLuJiangLiReq.
     * @exports GetMeiRiDengLuJiangLiReq
     * @classdesc Represents a GetMeiRiDengLuJiangLiReq.
     * @implements IGetMeiRiDengLuJiangLiReq
     * @constructor
     * @param {IGetMeiRiDengLuJiangLiReq=} [properties] Properties to set
     */
    function GetMeiRiDengLuJiangLiReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetMeiRiDengLuJiangLiReq uid.
     * @member {number|Long} uid
     * @memberof GetMeiRiDengLuJiangLiReq
     * @instance
     */
    GetMeiRiDengLuJiangLiReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new GetMeiRiDengLuJiangLiReq instance using the specified properties.
     * @function create
     * @memberof GetMeiRiDengLuJiangLiReq
     * @static
     * @param {IGetMeiRiDengLuJiangLiReq=} [properties] Properties to set
     * @returns {GetMeiRiDengLuJiangLiReq} GetMeiRiDengLuJiangLiReq instance
     */
    GetMeiRiDengLuJiangLiReq.create = function create(properties) {
        return new GetMeiRiDengLuJiangLiReq(properties);
    };

    /**
     * Encodes the specified GetMeiRiDengLuJiangLiReq message. Does not implicitly {@link GetMeiRiDengLuJiangLiReq.verify|verify} messages.
     * @function encode
     * @memberof GetMeiRiDengLuJiangLiReq
     * @static
     * @param {IGetMeiRiDengLuJiangLiReq} message GetMeiRiDengLuJiangLiReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetMeiRiDengLuJiangLiReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uid != null && message.hasOwnProperty("uid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
        return writer;
    };

    /**
     * Encodes the specified GetMeiRiDengLuJiangLiReq message, length delimited. Does not implicitly {@link GetMeiRiDengLuJiangLiReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetMeiRiDengLuJiangLiReq
     * @static
     * @param {IGetMeiRiDengLuJiangLiReq} message GetMeiRiDengLuJiangLiReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetMeiRiDengLuJiangLiReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetMeiRiDengLuJiangLiReq message from the specified reader or buffer.
     * @function decode
     * @memberof GetMeiRiDengLuJiangLiReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetMeiRiDengLuJiangLiReq} GetMeiRiDengLuJiangLiReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetMeiRiDengLuJiangLiReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetMeiRiDengLuJiangLiReq();
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
     * Decodes a GetMeiRiDengLuJiangLiReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetMeiRiDengLuJiangLiReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetMeiRiDengLuJiangLiReq} GetMeiRiDengLuJiangLiReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetMeiRiDengLuJiangLiReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetMeiRiDengLuJiangLiReq message.
     * @function verify
     * @memberof GetMeiRiDengLuJiangLiReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetMeiRiDengLuJiangLiReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                return "uid: integer|Long expected";
        return null;
    };

    /**
     * Creates a GetMeiRiDengLuJiangLiReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetMeiRiDengLuJiangLiReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetMeiRiDengLuJiangLiReq} GetMeiRiDengLuJiangLiReq
     */
    GetMeiRiDengLuJiangLiReq.fromObject = function fromObject(object) {
        if (object instanceof $root.GetMeiRiDengLuJiangLiReq)
            return object;
        var message = new $root.GetMeiRiDengLuJiangLiReq();
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
     * Creates a plain object from a GetMeiRiDengLuJiangLiReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetMeiRiDengLuJiangLiReq
     * @static
     * @param {GetMeiRiDengLuJiangLiReq} message GetMeiRiDengLuJiangLiReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetMeiRiDengLuJiangLiReq.toObject = function toObject(message, options) {
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
     * Converts this GetMeiRiDengLuJiangLiReq to JSON.
     * @function toJSON
     * @memberof GetMeiRiDengLuJiangLiReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetMeiRiDengLuJiangLiReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetMeiRiDengLuJiangLiReq;
})();

$root.GetLoginRewardReq = (function() {

    /**
     * Properties of a GetLoginRewardReq.
     * @exports IGetLoginRewardReq
     * @interface IGetLoginRewardReq
     * @property {number|Long|null} [uid] GetLoginRewardReq uid
     * @property {number|null} [day] GetLoginRewardReq day
     * @property {string|null} [service] GetLoginRewardReq service
     * @property {string|null} [orderId] GetLoginRewardReq orderId
     */

    /**
     * Constructs a new GetLoginRewardReq.
     * @exports GetLoginRewardReq
     * @classdesc Represents a GetLoginRewardReq.
     * @implements IGetLoginRewardReq
     * @constructor
     * @param {IGetLoginRewardReq=} [properties] Properties to set
     */
    function GetLoginRewardReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetLoginRewardReq uid.
     * @member {number|Long} uid
     * @memberof GetLoginRewardReq
     * @instance
     */
    GetLoginRewardReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * GetLoginRewardReq day.
     * @member {number} day
     * @memberof GetLoginRewardReq
     * @instance
     */
    GetLoginRewardReq.prototype.day = 0;

    /**
     * GetLoginRewardReq service.
     * @member {string} service
     * @memberof GetLoginRewardReq
     * @instance
     */
    GetLoginRewardReq.prototype.service = "";

    /**
     * GetLoginRewardReq orderId.
     * @member {string} orderId
     * @memberof GetLoginRewardReq
     * @instance
     */
    GetLoginRewardReq.prototype.orderId = "";

    /**
     * Creates a new GetLoginRewardReq instance using the specified properties.
     * @function create
     * @memberof GetLoginRewardReq
     * @static
     * @param {IGetLoginRewardReq=} [properties] Properties to set
     * @returns {GetLoginRewardReq} GetLoginRewardReq instance
     */
    GetLoginRewardReq.create = function create(properties) {
        return new GetLoginRewardReq(properties);
    };

    /**
     * Encodes the specified GetLoginRewardReq message. Does not implicitly {@link GetLoginRewardReq.verify|verify} messages.
     * @function encode
     * @memberof GetLoginRewardReq
     * @static
     * @param {IGetLoginRewardReq} message GetLoginRewardReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetLoginRewardReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uid != null && message.hasOwnProperty("uid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
        if (message.day != null && message.hasOwnProperty("day"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.day);
        if (message.service != null && message.hasOwnProperty("service"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.service);
        if (message.orderId != null && message.hasOwnProperty("orderId"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.orderId);
        return writer;
    };

    /**
     * Encodes the specified GetLoginRewardReq message, length delimited. Does not implicitly {@link GetLoginRewardReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetLoginRewardReq
     * @static
     * @param {IGetLoginRewardReq} message GetLoginRewardReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetLoginRewardReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetLoginRewardReq message from the specified reader or buffer.
     * @function decode
     * @memberof GetLoginRewardReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetLoginRewardReq} GetLoginRewardReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetLoginRewardReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetLoginRewardReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.uid = reader.int64();
                break;
            case 2:
                message.day = reader.int32();
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
     * Decodes a GetLoginRewardReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetLoginRewardReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetLoginRewardReq} GetLoginRewardReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetLoginRewardReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetLoginRewardReq message.
     * @function verify
     * @memberof GetLoginRewardReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetLoginRewardReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                return "uid: integer|Long expected";
        if (message.day != null && message.hasOwnProperty("day"))
            if (!$util.isInteger(message.day))
                return "day: integer expected";
        if (message.service != null && message.hasOwnProperty("service"))
            if (!$util.isString(message.service))
                return "service: string expected";
        if (message.orderId != null && message.hasOwnProperty("orderId"))
            if (!$util.isString(message.orderId))
                return "orderId: string expected";
        return null;
    };

    /**
     * Creates a GetLoginRewardReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetLoginRewardReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetLoginRewardReq} GetLoginRewardReq
     */
    GetLoginRewardReq.fromObject = function fromObject(object) {
        if (object instanceof $root.GetLoginRewardReq)
            return object;
        var message = new $root.GetLoginRewardReq();
        if (object.uid != null)
            if ($util.Long)
                (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
            else if (typeof object.uid === "string")
                message.uid = parseInt(object.uid, 10);
            else if (typeof object.uid === "number")
                message.uid = object.uid;
            else if (typeof object.uid === "object")
                message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
        if (object.day != null)
            message.day = object.day | 0;
        if (object.service != null)
            message.service = String(object.service);
        if (object.orderId != null)
            message.orderId = String(object.orderId);
        return message;
    };

    /**
     * Creates a plain object from a GetLoginRewardReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetLoginRewardReq
     * @static
     * @param {GetLoginRewardReq} message GetLoginRewardReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetLoginRewardReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.uid = options.longs === String ? "0" : 0;
            object.day = 0;
            object.service = "";
            object.orderId = "";
        }
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (typeof message.uid === "number")
                object.uid = options.longs === String ? String(message.uid) : message.uid;
            else
                object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
        if (message.day != null && message.hasOwnProperty("day"))
            object.day = message.day;
        if (message.service != null && message.hasOwnProperty("service"))
            object.service = message.service;
        if (message.orderId != null && message.hasOwnProperty("orderId"))
            object.orderId = message.orderId;
        return object;
    };

    /**
     * Converts this GetLoginRewardReq to JSON.
     * @function toJSON
     * @memberof GetLoginRewardReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetLoginRewardReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetLoginRewardReq;
})();

$root.GetDailyFirstLoginReq = (function() {

    /**
     * Properties of a GetDailyFirstLoginReq.
     * @exports IGetDailyFirstLoginReq
     * @interface IGetDailyFirstLoginReq
     * @property {number|Long|null} [uid] GetDailyFirstLoginReq uid
     */

    /**
     * Constructs a new GetDailyFirstLoginReq.
     * @exports GetDailyFirstLoginReq
     * @classdesc Represents a GetDailyFirstLoginReq.
     * @implements IGetDailyFirstLoginReq
     * @constructor
     * @param {IGetDailyFirstLoginReq=} [properties] Properties to set
     */
    function GetDailyFirstLoginReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetDailyFirstLoginReq uid.
     * @member {number|Long} uid
     * @memberof GetDailyFirstLoginReq
     * @instance
     */
    GetDailyFirstLoginReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new GetDailyFirstLoginReq instance using the specified properties.
     * @function create
     * @memberof GetDailyFirstLoginReq
     * @static
     * @param {IGetDailyFirstLoginReq=} [properties] Properties to set
     * @returns {GetDailyFirstLoginReq} GetDailyFirstLoginReq instance
     */
    GetDailyFirstLoginReq.create = function create(properties) {
        return new GetDailyFirstLoginReq(properties);
    };

    /**
     * Encodes the specified GetDailyFirstLoginReq message. Does not implicitly {@link GetDailyFirstLoginReq.verify|verify} messages.
     * @function encode
     * @memberof GetDailyFirstLoginReq
     * @static
     * @param {IGetDailyFirstLoginReq} message GetDailyFirstLoginReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetDailyFirstLoginReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uid != null && message.hasOwnProperty("uid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
        return writer;
    };

    /**
     * Encodes the specified GetDailyFirstLoginReq message, length delimited. Does not implicitly {@link GetDailyFirstLoginReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetDailyFirstLoginReq
     * @static
     * @param {IGetDailyFirstLoginReq} message GetDailyFirstLoginReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetDailyFirstLoginReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetDailyFirstLoginReq message from the specified reader or buffer.
     * @function decode
     * @memberof GetDailyFirstLoginReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetDailyFirstLoginReq} GetDailyFirstLoginReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetDailyFirstLoginReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetDailyFirstLoginReq();
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
     * Decodes a GetDailyFirstLoginReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetDailyFirstLoginReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetDailyFirstLoginReq} GetDailyFirstLoginReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetDailyFirstLoginReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetDailyFirstLoginReq message.
     * @function verify
     * @memberof GetDailyFirstLoginReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetDailyFirstLoginReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                return "uid: integer|Long expected";
        return null;
    };

    /**
     * Creates a GetDailyFirstLoginReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetDailyFirstLoginReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetDailyFirstLoginReq} GetDailyFirstLoginReq
     */
    GetDailyFirstLoginReq.fromObject = function fromObject(object) {
        if (object instanceof $root.GetDailyFirstLoginReq)
            return object;
        var message = new $root.GetDailyFirstLoginReq();
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
     * Creates a plain object from a GetDailyFirstLoginReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetDailyFirstLoginReq
     * @static
     * @param {GetDailyFirstLoginReq} message GetDailyFirstLoginReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetDailyFirstLoginReq.toObject = function toObject(message, options) {
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
     * Converts this GetDailyFirstLoginReq to JSON.
     * @function toJSON
     * @memberof GetDailyFirstLoginReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetDailyFirstLoginReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetDailyFirstLoginReq;
})();

$root.GetDailyFirstLoginAck = (function() {

    /**
     * Properties of a GetDailyFirstLoginAck.
     * @exports IGetDailyFirstLoginAck
     * @interface IGetDailyFirstLoginAck
     * @property {number|null} [errCode] GetDailyFirstLoginAck errCode
     * @property {string|null} [errMsg] GetDailyFirstLoginAck errMsg
     * @property {boolean|null} [isFirst] GetDailyFirstLoginAck isFirst
     */

    /**
     * Constructs a new GetDailyFirstLoginAck.
     * @exports GetDailyFirstLoginAck
     * @classdesc Represents a GetDailyFirstLoginAck.
     * @implements IGetDailyFirstLoginAck
     * @constructor
     * @param {IGetDailyFirstLoginAck=} [properties] Properties to set
     */
    function GetDailyFirstLoginAck(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetDailyFirstLoginAck errCode.
     * @member {number} errCode
     * @memberof GetDailyFirstLoginAck
     * @instance
     */
    GetDailyFirstLoginAck.prototype.errCode = 0;

    /**
     * GetDailyFirstLoginAck errMsg.
     * @member {string} errMsg
     * @memberof GetDailyFirstLoginAck
     * @instance
     */
    GetDailyFirstLoginAck.prototype.errMsg = "";

    /**
     * GetDailyFirstLoginAck isFirst.
     * @member {boolean} isFirst
     * @memberof GetDailyFirstLoginAck
     * @instance
     */
    GetDailyFirstLoginAck.prototype.isFirst = false;

    /**
     * Creates a new GetDailyFirstLoginAck instance using the specified properties.
     * @function create
     * @memberof GetDailyFirstLoginAck
     * @static
     * @param {IGetDailyFirstLoginAck=} [properties] Properties to set
     * @returns {GetDailyFirstLoginAck} GetDailyFirstLoginAck instance
     */
    GetDailyFirstLoginAck.create = function create(properties) {
        return new GetDailyFirstLoginAck(properties);
    };

    /**
     * Encodes the specified GetDailyFirstLoginAck message. Does not implicitly {@link GetDailyFirstLoginAck.verify|verify} messages.
     * @function encode
     * @memberof GetDailyFirstLoginAck
     * @static
     * @param {IGetDailyFirstLoginAck} message GetDailyFirstLoginAck message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetDailyFirstLoginAck.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.errCode != null && message.hasOwnProperty("errCode"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
        if (message.errMsg != null && message.hasOwnProperty("errMsg"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
        if (message.isFirst != null && message.hasOwnProperty("isFirst"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isFirst);
        return writer;
    };

    /**
     * Encodes the specified GetDailyFirstLoginAck message, length delimited. Does not implicitly {@link GetDailyFirstLoginAck.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetDailyFirstLoginAck
     * @static
     * @param {IGetDailyFirstLoginAck} message GetDailyFirstLoginAck message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetDailyFirstLoginAck.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetDailyFirstLoginAck message from the specified reader or buffer.
     * @function decode
     * @memberof GetDailyFirstLoginAck
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetDailyFirstLoginAck} GetDailyFirstLoginAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetDailyFirstLoginAck.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetDailyFirstLoginAck();
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
                message.isFirst = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GetDailyFirstLoginAck message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetDailyFirstLoginAck
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetDailyFirstLoginAck} GetDailyFirstLoginAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetDailyFirstLoginAck.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetDailyFirstLoginAck message.
     * @function verify
     * @memberof GetDailyFirstLoginAck
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetDailyFirstLoginAck.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.errCode != null && message.hasOwnProperty("errCode"))
            if (!$util.isInteger(message.errCode))
                return "errCode: integer expected";
        if (message.errMsg != null && message.hasOwnProperty("errMsg"))
            if (!$util.isString(message.errMsg))
                return "errMsg: string expected";
        if (message.isFirst != null && message.hasOwnProperty("isFirst"))
            if (typeof message.isFirst !== "boolean")
                return "isFirst: boolean expected";
        return null;
    };

    /**
     * Creates a GetDailyFirstLoginAck message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetDailyFirstLoginAck
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetDailyFirstLoginAck} GetDailyFirstLoginAck
     */
    GetDailyFirstLoginAck.fromObject = function fromObject(object) {
        if (object instanceof $root.GetDailyFirstLoginAck)
            return object;
        var message = new $root.GetDailyFirstLoginAck();
        if (object.errCode != null)
            message.errCode = object.errCode | 0;
        if (object.errMsg != null)
            message.errMsg = String(object.errMsg);
        if (object.isFirst != null)
            message.isFirst = Boolean(object.isFirst);
        return message;
    };

    /**
     * Creates a plain object from a GetDailyFirstLoginAck message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetDailyFirstLoginAck
     * @static
     * @param {GetDailyFirstLoginAck} message GetDailyFirstLoginAck
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetDailyFirstLoginAck.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.errCode = 0;
            object.errMsg = "";
            object.isFirst = false;
        }
        if (message.errCode != null && message.hasOwnProperty("errCode"))
            object.errCode = message.errCode;
        if (message.errMsg != null && message.hasOwnProperty("errMsg"))
            object.errMsg = message.errMsg;
        if (message.isFirst != null && message.hasOwnProperty("isFirst"))
            object.isFirst = message.isFirst;
        return object;
    };

    /**
     * Converts this GetDailyFirstLoginAck to JSON.
     * @function toJSON
     * @memberof GetDailyFirstLoginAck
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetDailyFirstLoginAck.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetDailyFirstLoginAck;
})();

module.exports = $root;
