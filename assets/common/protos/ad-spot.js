/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.adSpot || ($protobuf.roots.adSpot = {});

/**
 * AdOrderState enum.
 * @exports AdOrderState
 * @enum {string}
 * @property {number} Init=0 Init value
 * @property {number} Reject=1 Reject value
 * @property {number} Accept=2 Accept value
 * @property {number} Complete=3 Complete value
 * @property {number} Expired=4 Expired value
 */
$root.AdOrderState = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "Init"] = 0;
    values[valuesById[1] = "Reject"] = 1;
    values[valuesById[2] = "Accept"] = 2;
    values[valuesById[3] = "Complete"] = 3;
    values[valuesById[4] = "Expired"] = 4;
    return values;
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
     * Callback as used by {@link Ad#initOrder}.
     * @memberof Ad
     * @typedef InitOrderCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {AdOrderNot} [response] AdOrderNot
     */

    /**
     * Calls InitOrder.
     * @function initOrder
     * @memberof Ad
     * @instance
     * @param {IAdOrderReq} request AdOrderReq message or plain object
     * @param {Ad.InitOrderCallback} callback Node-style callback called with the error, if any, and AdOrderNot
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Ad.prototype.initOrder = function initOrder(request, callback) {
        return this.rpcCall(initOrder, $root.AdOrderReq, $root.AdOrderNot, request, callback);
    }, "name", { value: "InitOrder" });

    /**
     * Calls InitOrder.
     * @function initOrder
     * @memberof Ad
     * @instance
     * @param {IAdOrderReq} request AdOrderReq message or plain object
     * @returns {Promise<AdOrderNot>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link Ad#orderAward}.
     * @memberof Ad
     * @typedef OrderAwardCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {GetAdOrderAwardAck} [response] GetAdOrderAwardAck
     */

    /**
     * Calls OrderAward.
     * @function orderAward
     * @memberof Ad
     * @instance
     * @param {IGetAdOrderAwardReq} request GetAdOrderAwardReq message or plain object
     * @param {Ad.OrderAwardCallback} callback Node-style callback called with the error, if any, and GetAdOrderAwardAck
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Ad.prototype.orderAward = function orderAward(request, callback) {
        return this.rpcCall(orderAward, $root.GetAdOrderAwardReq, $root.GetAdOrderAwardAck, request, callback);
    }, "name", { value: "OrderAward" });

    /**
     * Calls OrderAward.
     * @function orderAward
     * @memberof Ad
     * @instance
     * @param {IGetAdOrderAwardReq} request GetAdOrderAwardReq message or plain object
     * @returns {Promise<GetAdOrderAwardAck>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link Ad#updateOrderStatus}.
     * @memberof Ad
     * @typedef UpdateOrderStatusCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {UpdateAdOrderStatusAck} [response] UpdateAdOrderStatusAck
     */

    /**
     * Calls UpdateOrderStatus.
     * @function updateOrderStatus
     * @memberof Ad
     * @instance
     * @param {IUpdateAdOrderStatusReq} request UpdateAdOrderStatusReq message or plain object
     * @param {Ad.UpdateOrderStatusCallback} callback Node-style callback called with the error, if any, and UpdateAdOrderStatusAck
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Ad.prototype.updateOrderStatus = function updateOrderStatus(request, callback) {
        return this.rpcCall(updateOrderStatus, $root.UpdateAdOrderStatusReq, $root.UpdateAdOrderStatusAck, request, callback);
    }, "name", { value: "UpdateOrderStatus" });

    /**
     * Calls UpdateOrderStatus.
     * @function updateOrderStatus
     * @memberof Ad
     * @instance
     * @param {IUpdateAdOrderStatusReq} request UpdateAdOrderStatusReq message or plain object
     * @returns {Promise<UpdateAdOrderStatusAck>} Promise
     * @variation 2
     */

    return Ad;
})();

$root.AwardItem = (function() {

    /**
     * Properties of an AwardItem.
     * @exports IAwardItem
     * @interface IAwardItem
     * @property {number|null} [id] AwardItem id
     * @property {number|null} [sequence] AwardItem sequence
     * @property {Array.<IAward>|null} [award] AwardItem award
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
        this.award = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AwardItem id.
     * @member {number} id
     * @memberof AwardItem
     * @instance
     */
    AwardItem.prototype.id = 0;

    /**
     * AwardItem sequence.
     * @member {number} sequence
     * @memberof AwardItem
     * @instance
     */
    AwardItem.prototype.sequence = 0;

    /**
     * AwardItem award.
     * @member {Array.<IAward>} award
     * @memberof AwardItem
     * @instance
     */
    AwardItem.prototype.award = $util.emptyArray;

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
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.sequence != null && message.hasOwnProperty("sequence"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.sequence);
        if (message.award != null && message.award.length)
            for (var i = 0; i < message.award.length; ++i)
                $root.Award.encode(message.award[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
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
                message.id = reader.int32();
                break;
            case 2:
                message.sequence = reader.int32();
                break;
            case 3:
                if (!(message.award && message.award.length))
                    message.award = [];
                message.award.push($root.Award.decode(reader, reader.uint32()));
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
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.sequence != null && message.hasOwnProperty("sequence"))
            if (!$util.isInteger(message.sequence))
                return "sequence: integer expected";
        if (message.award != null && message.hasOwnProperty("award")) {
            if (!Array.isArray(message.award))
                return "award: array expected";
            for (var i = 0; i < message.award.length; ++i) {
                var error = $root.Award.verify(message.award[i]);
                if (error)
                    return "award." + error;
            }
        }
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
        if (object.id != null)
            message.id = object.id | 0;
        if (object.sequence != null)
            message.sequence = object.sequence | 0;
        if (object.award) {
            if (!Array.isArray(object.award))
                throw TypeError(".AwardItem.award: array expected");
            message.award = [];
            for (var i = 0; i < object.award.length; ++i) {
                if (typeof object.award[i] !== "object")
                    throw TypeError(".AwardItem.award: object expected");
                message.award[i] = $root.Award.fromObject(object.award[i]);
            }
        }
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
        if (options.arrays || options.defaults)
            object.award = [];
        if (options.defaults) {
            object.id = 0;
            object.sequence = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.sequence != null && message.hasOwnProperty("sequence"))
            object.sequence = message.sequence;
        if (message.award && message.award.length) {
            object.award = [];
            for (var j = 0; j < message.award.length; ++j)
                object.award[j] = $root.Award.toObject(message.award[j], options);
        }
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

$root.AdTimes = (function() {

    /**
     * Properties of an AdTimes.
     * @exports IAdTimes
     * @interface IAdTimes
     * @property {number|null} [adArea] AdTimes adArea
     * @property {number|Long|null} [adTimes] AdTimes adTimes
     */

    /**
     * Constructs a new AdTimes.
     * @exports AdTimes
     * @classdesc Represents an AdTimes.
     * @implements IAdTimes
     * @constructor
     * @param {IAdTimes=} [properties] Properties to set
     */
    function AdTimes(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AdTimes adArea.
     * @member {number} adArea
     * @memberof AdTimes
     * @instance
     */
    AdTimes.prototype.adArea = 0;

    /**
     * AdTimes adTimes.
     * @member {number|Long} adTimes
     * @memberof AdTimes
     * @instance
     */
    AdTimes.prototype.adTimes = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new AdTimes instance using the specified properties.
     * @function create
     * @memberof AdTimes
     * @static
     * @param {IAdTimes=} [properties] Properties to set
     * @returns {AdTimes} AdTimes instance
     */
    AdTimes.create = function create(properties) {
        return new AdTimes(properties);
    };

    /**
     * Encodes the specified AdTimes message. Does not implicitly {@link AdTimes.verify|verify} messages.
     * @function encode
     * @memberof AdTimes
     * @static
     * @param {IAdTimes} message AdTimes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AdTimes.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.adArea != null && message.hasOwnProperty("adArea"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.adArea);
        if (message.adTimes != null && message.hasOwnProperty("adTimes"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.adTimes);
        return writer;
    };

    /**
     * Encodes the specified AdTimes message, length delimited. Does not implicitly {@link AdTimes.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AdTimes
     * @static
     * @param {IAdTimes} message AdTimes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AdTimes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AdTimes message from the specified reader or buffer.
     * @function decode
     * @memberof AdTimes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AdTimes} AdTimes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AdTimes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AdTimes();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.adArea = reader.int32();
                break;
            case 2:
                message.adTimes = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AdTimes message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AdTimes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AdTimes} AdTimes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AdTimes.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AdTimes message.
     * @function verify
     * @memberof AdTimes
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AdTimes.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.adArea != null && message.hasOwnProperty("adArea"))
            if (!$util.isInteger(message.adArea))
                return "adArea: integer expected";
        if (message.adTimes != null && message.hasOwnProperty("adTimes"))
            if (!$util.isInteger(message.adTimes) && !(message.adTimes && $util.isInteger(message.adTimes.low) && $util.isInteger(message.adTimes.high)))
                return "adTimes: integer|Long expected";
        return null;
    };

    /**
     * Creates an AdTimes message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AdTimes
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AdTimes} AdTimes
     */
    AdTimes.fromObject = function fromObject(object) {
        if (object instanceof $root.AdTimes)
            return object;
        var message = new $root.AdTimes();
        if (object.adArea != null)
            message.adArea = object.adArea | 0;
        if (object.adTimes != null)
            if ($util.Long)
                (message.adTimes = $util.Long.fromValue(object.adTimes)).unsigned = false;
            else if (typeof object.adTimes === "string")
                message.adTimes = parseInt(object.adTimes, 10);
            else if (typeof object.adTimes === "number")
                message.adTimes = object.adTimes;
            else if (typeof object.adTimes === "object")
                message.adTimes = new $util.LongBits(object.adTimes.low >>> 0, object.adTimes.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from an AdTimes message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AdTimes
     * @static
     * @param {AdTimes} message AdTimes
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AdTimes.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.adArea = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.adTimes = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.adTimes = options.longs === String ? "0" : 0;
        }
        if (message.adArea != null && message.hasOwnProperty("adArea"))
            object.adArea = message.adArea;
        if (message.adTimes != null && message.hasOwnProperty("adTimes"))
            if (typeof message.adTimes === "number")
                object.adTimes = options.longs === String ? String(message.adTimes) : message.adTimes;
            else
                object.adTimes = options.longs === String ? $util.Long.prototype.toString.call(message.adTimes) : options.longs === Number ? new $util.LongBits(message.adTimes.low >>> 0, message.adTimes.high >>> 0).toNumber() : message.adTimes;
        return object;
    };

    /**
     * Converts this AdTimes to JSON.
     * @function toJSON
     * @memberof AdTimes
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AdTimes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AdTimes;
})();

$root.AdInfo = (function() {

    /**
     * Properties of an AdInfo.
     * @exports IAdInfo
     * @interface IAdInfo
     * @property {string|null} [service] AdInfo service
     * @property {number|null} [adArea] AdInfo adArea
     * @property {number|null} [adType] AdInfo adType
     * @property {number|null} [awardId] AdInfo awardId
     * @property {IAwardItem|null} [award] AdInfo award
     */

    /**
     * Constructs a new AdInfo.
     * @exports AdInfo
     * @classdesc Represents an AdInfo.
     * @implements IAdInfo
     * @constructor
     * @param {IAdInfo=} [properties] Properties to set
     */
    function AdInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AdInfo service.
     * @member {string} service
     * @memberof AdInfo
     * @instance
     */
    AdInfo.prototype.service = "";

    /**
     * AdInfo adArea.
     * @member {number} adArea
     * @memberof AdInfo
     * @instance
     */
    AdInfo.prototype.adArea = 0;

    /**
     * AdInfo adType.
     * @member {number} adType
     * @memberof AdInfo
     * @instance
     */
    AdInfo.prototype.adType = 0;

    /**
     * AdInfo awardId.
     * @member {number} awardId
     * @memberof AdInfo
     * @instance
     */
    AdInfo.prototype.awardId = 0;

    /**
     * AdInfo award.
     * @member {IAwardItem|null|undefined} award
     * @memberof AdInfo
     * @instance
     */
    AdInfo.prototype.award = null;

    /**
     * Creates a new AdInfo instance using the specified properties.
     * @function create
     * @memberof AdInfo
     * @static
     * @param {IAdInfo=} [properties] Properties to set
     * @returns {AdInfo} AdInfo instance
     */
    AdInfo.create = function create(properties) {
        return new AdInfo(properties);
    };

    /**
     * Encodes the specified AdInfo message. Does not implicitly {@link AdInfo.verify|verify} messages.
     * @function encode
     * @memberof AdInfo
     * @static
     * @param {IAdInfo} message AdInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AdInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.service != null && message.hasOwnProperty("service"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.service);
        if (message.adArea != null && message.hasOwnProperty("adArea"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.adArea);
        if (message.adType != null && message.hasOwnProperty("adType"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.adType);
        if (message.awardId != null && message.hasOwnProperty("awardId"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.awardId);
        if (message.award != null && message.hasOwnProperty("award"))
            $root.AwardItem.encode(message.award, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified AdInfo message, length delimited. Does not implicitly {@link AdInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AdInfo
     * @static
     * @param {IAdInfo} message AdInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AdInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AdInfo message from the specified reader or buffer.
     * @function decode
     * @memberof AdInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AdInfo} AdInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AdInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AdInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.service = reader.string();
                break;
            case 2:
                message.adArea = reader.int32();
                break;
            case 3:
                message.adType = reader.int32();
                break;
            case 4:
                message.awardId = reader.int32();
                break;
            case 5:
                message.award = $root.AwardItem.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AdInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AdInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AdInfo} AdInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AdInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AdInfo message.
     * @function verify
     * @memberof AdInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AdInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.service != null && message.hasOwnProperty("service"))
            if (!$util.isString(message.service))
                return "service: string expected";
        if (message.adArea != null && message.hasOwnProperty("adArea"))
            if (!$util.isInteger(message.adArea))
                return "adArea: integer expected";
        if (message.adType != null && message.hasOwnProperty("adType"))
            if (!$util.isInteger(message.adType))
                return "adType: integer expected";
        if (message.awardId != null && message.hasOwnProperty("awardId"))
            if (!$util.isInteger(message.awardId))
                return "awardId: integer expected";
        if (message.award != null && message.hasOwnProperty("award")) {
            var error = $root.AwardItem.verify(message.award);
            if (error)
                return "award." + error;
        }
        return null;
    };

    /**
     * Creates an AdInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AdInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AdInfo} AdInfo
     */
    AdInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.AdInfo)
            return object;
        var message = new $root.AdInfo();
        if (object.service != null)
            message.service = String(object.service);
        if (object.adArea != null)
            message.adArea = object.adArea | 0;
        if (object.adType != null)
            message.adType = object.adType | 0;
        if (object.awardId != null)
            message.awardId = object.awardId | 0;
        if (object.award != null) {
            if (typeof object.award !== "object")
                throw TypeError(".AdInfo.award: object expected");
            message.award = $root.AwardItem.fromObject(object.award);
        }
        return message;
    };

    /**
     * Creates a plain object from an AdInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AdInfo
     * @static
     * @param {AdInfo} message AdInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AdInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.service = "";
            object.adArea = 0;
            object.adType = 0;
            object.awardId = 0;
            object.award = null;
        }
        if (message.service != null && message.hasOwnProperty("service"))
            object.service = message.service;
        if (message.adArea != null && message.hasOwnProperty("adArea"))
            object.adArea = message.adArea;
        if (message.adType != null && message.hasOwnProperty("adType"))
            object.adType = message.adType;
        if (message.awardId != null && message.hasOwnProperty("awardId"))
            object.awardId = message.awardId;
        if (message.award != null && message.hasOwnProperty("award"))
            object.award = $root.AwardItem.toObject(message.award, options);
        return object;
    };

    /**
     * Converts this AdInfo to JSON.
     * @function toJSON
     * @memberof AdInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AdInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AdInfo;
})();

$root.AdInfoBundle = (function() {

    /**
     * Properties of an AdInfoBundle.
     * @exports IAdInfoBundle
     * @interface IAdInfoBundle
     * @property {IAdInfo|null} [info] AdInfoBundle info
     * @property {Array.<IPair>|null} [params] AdInfoBundle params
     */

    /**
     * Constructs a new AdInfoBundle.
     * @exports AdInfoBundle
     * @classdesc Represents an AdInfoBundle.
     * @implements IAdInfoBundle
     * @constructor
     * @param {IAdInfoBundle=} [properties] Properties to set
     */
    function AdInfoBundle(properties) {
        this.params = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AdInfoBundle info.
     * @member {IAdInfo|null|undefined} info
     * @memberof AdInfoBundle
     * @instance
     */
    AdInfoBundle.prototype.info = null;

    /**
     * AdInfoBundle params.
     * @member {Array.<IPair>} params
     * @memberof AdInfoBundle
     * @instance
     */
    AdInfoBundle.prototype.params = $util.emptyArray;

    /**
     * Creates a new AdInfoBundle instance using the specified properties.
     * @function create
     * @memberof AdInfoBundle
     * @static
     * @param {IAdInfoBundle=} [properties] Properties to set
     * @returns {AdInfoBundle} AdInfoBundle instance
     */
    AdInfoBundle.create = function create(properties) {
        return new AdInfoBundle(properties);
    };

    /**
     * Encodes the specified AdInfoBundle message. Does not implicitly {@link AdInfoBundle.verify|verify} messages.
     * @function encode
     * @memberof AdInfoBundle
     * @static
     * @param {IAdInfoBundle} message AdInfoBundle message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AdInfoBundle.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.info != null && message.hasOwnProperty("info"))
            $root.AdInfo.encode(message.info, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.params != null && message.params.length)
            for (var i = 0; i < message.params.length; ++i)
                $root.Pair.encode(message.params[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified AdInfoBundle message, length delimited. Does not implicitly {@link AdInfoBundle.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AdInfoBundle
     * @static
     * @param {IAdInfoBundle} message AdInfoBundle message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AdInfoBundle.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AdInfoBundle message from the specified reader or buffer.
     * @function decode
     * @memberof AdInfoBundle
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AdInfoBundle} AdInfoBundle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AdInfoBundle.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AdInfoBundle();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.info = $root.AdInfo.decode(reader, reader.uint32());
                break;
            case 2:
                if (!(message.params && message.params.length))
                    message.params = [];
                message.params.push($root.Pair.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AdInfoBundle message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AdInfoBundle
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AdInfoBundle} AdInfoBundle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AdInfoBundle.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AdInfoBundle message.
     * @function verify
     * @memberof AdInfoBundle
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AdInfoBundle.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.info != null && message.hasOwnProperty("info")) {
            var error = $root.AdInfo.verify(message.info);
            if (error)
                return "info." + error;
        }
        if (message.params != null && message.hasOwnProperty("params")) {
            if (!Array.isArray(message.params))
                return "params: array expected";
            for (var i = 0; i < message.params.length; ++i) {
                var error = $root.Pair.verify(message.params[i]);
                if (error)
                    return "params." + error;
            }
        }
        return null;
    };

    /**
     * Creates an AdInfoBundle message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AdInfoBundle
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AdInfoBundle} AdInfoBundle
     */
    AdInfoBundle.fromObject = function fromObject(object) {
        if (object instanceof $root.AdInfoBundle)
            return object;
        var message = new $root.AdInfoBundle();
        if (object.info != null) {
            if (typeof object.info !== "object")
                throw TypeError(".AdInfoBundle.info: object expected");
            message.info = $root.AdInfo.fromObject(object.info);
        }
        if (object.params) {
            if (!Array.isArray(object.params))
                throw TypeError(".AdInfoBundle.params: array expected");
            message.params = [];
            for (var i = 0; i < object.params.length; ++i) {
                if (typeof object.params[i] !== "object")
                    throw TypeError(".AdInfoBundle.params: object expected");
                message.params[i] = $root.Pair.fromObject(object.params[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from an AdInfoBundle message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AdInfoBundle
     * @static
     * @param {AdInfoBundle} message AdInfoBundle
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AdInfoBundle.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.params = [];
        if (options.defaults)
            object.info = null;
        if (message.info != null && message.hasOwnProperty("info"))
            object.info = $root.AdInfo.toObject(message.info, options);
        if (message.params && message.params.length) {
            object.params = [];
            for (var j = 0; j < message.params.length; ++j)
                object.params[j] = $root.Pair.toObject(message.params[j], options);
        }
        return object;
    };

    /**
     * Converts this AdInfoBundle to JSON.
     * @function toJSON
     * @memberof AdInfoBundle
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AdInfoBundle.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AdInfoBundle;
})();

$root.AdOrderReq = (function() {

    /**
     * Properties of an AdOrderReq.
     * @exports IAdOrderReq
     * @interface IAdOrderReq
     * @property {number|Long|null} [uid] AdOrderReq uid
     * @property {number|null} [areaId] AdOrderReq areaId
     */

    /**
     * Constructs a new AdOrderReq.
     * @exports AdOrderReq
     * @classdesc Represents an AdOrderReq.
     * @implements IAdOrderReq
     * @constructor
     * @param {IAdOrderReq=} [properties] Properties to set
     */
    function AdOrderReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AdOrderReq uid.
     * @member {number|Long} uid
     * @memberof AdOrderReq
     * @instance
     */
    AdOrderReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * AdOrderReq areaId.
     * @member {number} areaId
     * @memberof AdOrderReq
     * @instance
     */
    AdOrderReq.prototype.areaId = 0;

    /**
     * Creates a new AdOrderReq instance using the specified properties.
     * @function create
     * @memberof AdOrderReq
     * @static
     * @param {IAdOrderReq=} [properties] Properties to set
     * @returns {AdOrderReq} AdOrderReq instance
     */
    AdOrderReq.create = function create(properties) {
        return new AdOrderReq(properties);
    };

    /**
     * Encodes the specified AdOrderReq message. Does not implicitly {@link AdOrderReq.verify|verify} messages.
     * @function encode
     * @memberof AdOrderReq
     * @static
     * @param {IAdOrderReq} message AdOrderReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AdOrderReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uid != null && message.hasOwnProperty("uid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
        if (message.areaId != null && message.hasOwnProperty("areaId"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.areaId);
        return writer;
    };

    /**
     * Encodes the specified AdOrderReq message, length delimited. Does not implicitly {@link AdOrderReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AdOrderReq
     * @static
     * @param {IAdOrderReq} message AdOrderReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AdOrderReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AdOrderReq message from the specified reader or buffer.
     * @function decode
     * @memberof AdOrderReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AdOrderReq} AdOrderReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AdOrderReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AdOrderReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.uid = reader.int64();
                break;
            case 2:
                message.areaId = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AdOrderReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AdOrderReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AdOrderReq} AdOrderReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AdOrderReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AdOrderReq message.
     * @function verify
     * @memberof AdOrderReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AdOrderReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                return "uid: integer|Long expected";
        if (message.areaId != null && message.hasOwnProperty("areaId"))
            if (!$util.isInteger(message.areaId))
                return "areaId: integer expected";
        return null;
    };

    /**
     * Creates an AdOrderReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AdOrderReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AdOrderReq} AdOrderReq
     */
    AdOrderReq.fromObject = function fromObject(object) {
        if (object instanceof $root.AdOrderReq)
            return object;
        var message = new $root.AdOrderReq();
        if (object.uid != null)
            if ($util.Long)
                (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
            else if (typeof object.uid === "string")
                message.uid = parseInt(object.uid, 10);
            else if (typeof object.uid === "number")
                message.uid = object.uid;
            else if (typeof object.uid === "object")
                message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
        if (object.areaId != null)
            message.areaId = object.areaId | 0;
        return message;
    };

    /**
     * Creates a plain object from an AdOrderReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AdOrderReq
     * @static
     * @param {AdOrderReq} message AdOrderReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AdOrderReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.uid = options.longs === String ? "0" : 0;
            object.areaId = 0;
        }
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (typeof message.uid === "number")
                object.uid = options.longs === String ? String(message.uid) : message.uid;
            else
                object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
        if (message.areaId != null && message.hasOwnProperty("areaId"))
            object.areaId = message.areaId;
        return object;
    };

    /**
     * Converts this AdOrderReq to JSON.
     * @function toJSON
     * @memberof AdOrderReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AdOrderReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AdOrderReq;
})();

$root.AdOrderNot = (function() {

    /**
     * Properties of an AdOrderNot.
     * @exports IAdOrderNot
     * @interface IAdOrderNot
     * @property {number|null} [errCode] AdOrderNot errCode
     * @property {string|null} [errMsg] AdOrderNot errMsg
     * @property {string|null} [service] AdOrderNot service
     * @property {string|null} [orderId] AdOrderNot orderId
     * @property {number|null} [areaId] AdOrderNot areaId
     * @property {Array.<IAward>|null} [award] AdOrderNot award
     * @property {Array.<IPair>|null} [params] AdOrderNot params
     */

    /**
     * Constructs a new AdOrderNot.
     * @exports AdOrderNot
     * @classdesc Represents an AdOrderNot.
     * @implements IAdOrderNot
     * @constructor
     * @param {IAdOrderNot=} [properties] Properties to set
     */
    function AdOrderNot(properties) {
        this.award = [];
        this.params = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AdOrderNot errCode.
     * @member {number} errCode
     * @memberof AdOrderNot
     * @instance
     */
    AdOrderNot.prototype.errCode = 0;

    /**
     * AdOrderNot errMsg.
     * @member {string} errMsg
     * @memberof AdOrderNot
     * @instance
     */
    AdOrderNot.prototype.errMsg = "";

    /**
     * AdOrderNot service.
     * @member {string} service
     * @memberof AdOrderNot
     * @instance
     */
    AdOrderNot.prototype.service = "";

    /**
     * AdOrderNot orderId.
     * @member {string} orderId
     * @memberof AdOrderNot
     * @instance
     */
    AdOrderNot.prototype.orderId = "";

    /**
     * AdOrderNot areaId.
     * @member {number} areaId
     * @memberof AdOrderNot
     * @instance
     */
    AdOrderNot.prototype.areaId = 0;

    /**
     * AdOrderNot award.
     * @member {Array.<IAward>} award
     * @memberof AdOrderNot
     * @instance
     */
    AdOrderNot.prototype.award = $util.emptyArray;

    /**
     * AdOrderNot params.
     * @member {Array.<IPair>} params
     * @memberof AdOrderNot
     * @instance
     */
    AdOrderNot.prototype.params = $util.emptyArray;

    /**
     * Creates a new AdOrderNot instance using the specified properties.
     * @function create
     * @memberof AdOrderNot
     * @static
     * @param {IAdOrderNot=} [properties] Properties to set
     * @returns {AdOrderNot} AdOrderNot instance
     */
    AdOrderNot.create = function create(properties) {
        return new AdOrderNot(properties);
    };

    /**
     * Encodes the specified AdOrderNot message. Does not implicitly {@link AdOrderNot.verify|verify} messages.
     * @function encode
     * @memberof AdOrderNot
     * @static
     * @param {IAdOrderNot} message AdOrderNot message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AdOrderNot.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.errCode != null && message.hasOwnProperty("errCode"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
        if (message.errMsg != null && message.hasOwnProperty("errMsg"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
        if (message.service != null && message.hasOwnProperty("service"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.service);
        if (message.orderId != null && message.hasOwnProperty("orderId"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.orderId);
        if (message.areaId != null && message.hasOwnProperty("areaId"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.areaId);
        if (message.award != null && message.award.length)
            for (var i = 0; i < message.award.length; ++i)
                $root.Award.encode(message.award[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.params != null && message.params.length)
            for (var i = 0; i < message.params.length; ++i)
                $root.Pair.encode(message.params[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified AdOrderNot message, length delimited. Does not implicitly {@link AdOrderNot.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AdOrderNot
     * @static
     * @param {IAdOrderNot} message AdOrderNot message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AdOrderNot.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AdOrderNot message from the specified reader or buffer.
     * @function decode
     * @memberof AdOrderNot
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AdOrderNot} AdOrderNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AdOrderNot.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AdOrderNot();
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
            case 5:
                message.areaId = reader.int32();
                break;
            case 9:
                if (!(message.award && message.award.length))
                    message.award = [];
                message.award.push($root.Award.decode(reader, reader.uint32()));
                break;
            case 10:
                if (!(message.params && message.params.length))
                    message.params = [];
                message.params.push($root.Pair.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AdOrderNot message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AdOrderNot
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AdOrderNot} AdOrderNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AdOrderNot.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AdOrderNot message.
     * @function verify
     * @memberof AdOrderNot
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AdOrderNot.verify = function verify(message) {
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
        if (message.areaId != null && message.hasOwnProperty("areaId"))
            if (!$util.isInteger(message.areaId))
                return "areaId: integer expected";
        if (message.award != null && message.hasOwnProperty("award")) {
            if (!Array.isArray(message.award))
                return "award: array expected";
            for (var i = 0; i < message.award.length; ++i) {
                var error = $root.Award.verify(message.award[i]);
                if (error)
                    return "award." + error;
            }
        }
        if (message.params != null && message.hasOwnProperty("params")) {
            if (!Array.isArray(message.params))
                return "params: array expected";
            for (var i = 0; i < message.params.length; ++i) {
                var error = $root.Pair.verify(message.params[i]);
                if (error)
                    return "params." + error;
            }
        }
        return null;
    };

    /**
     * Creates an AdOrderNot message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AdOrderNot
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AdOrderNot} AdOrderNot
     */
    AdOrderNot.fromObject = function fromObject(object) {
        if (object instanceof $root.AdOrderNot)
            return object;
        var message = new $root.AdOrderNot();
        if (object.errCode != null)
            message.errCode = object.errCode | 0;
        if (object.errMsg != null)
            message.errMsg = String(object.errMsg);
        if (object.service != null)
            message.service = String(object.service);
        if (object.orderId != null)
            message.orderId = String(object.orderId);
        if (object.areaId != null)
            message.areaId = object.areaId | 0;
        if (object.award) {
            if (!Array.isArray(object.award))
                throw TypeError(".AdOrderNot.award: array expected");
            message.award = [];
            for (var i = 0; i < object.award.length; ++i) {
                if (typeof object.award[i] !== "object")
                    throw TypeError(".AdOrderNot.award: object expected");
                message.award[i] = $root.Award.fromObject(object.award[i]);
            }
        }
        if (object.params) {
            if (!Array.isArray(object.params))
                throw TypeError(".AdOrderNot.params: array expected");
            message.params = [];
            for (var i = 0; i < object.params.length; ++i) {
                if (typeof object.params[i] !== "object")
                    throw TypeError(".AdOrderNot.params: object expected");
                message.params[i] = $root.Pair.fromObject(object.params[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from an AdOrderNot message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AdOrderNot
     * @static
     * @param {AdOrderNot} message AdOrderNot
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AdOrderNot.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.award = [];
            object.params = [];
        }
        if (options.defaults) {
            object.errCode = 0;
            object.errMsg = "";
            object.service = "";
            object.orderId = "";
            object.areaId = 0;
        }
        if (message.errCode != null && message.hasOwnProperty("errCode"))
            object.errCode = message.errCode;
        if (message.errMsg != null && message.hasOwnProperty("errMsg"))
            object.errMsg = message.errMsg;
        if (message.service != null && message.hasOwnProperty("service"))
            object.service = message.service;
        if (message.orderId != null && message.hasOwnProperty("orderId"))
            object.orderId = message.orderId;
        if (message.areaId != null && message.hasOwnProperty("areaId"))
            object.areaId = message.areaId;
        if (message.award && message.award.length) {
            object.award = [];
            for (var j = 0; j < message.award.length; ++j)
                object.award[j] = $root.Award.toObject(message.award[j], options);
        }
        if (message.params && message.params.length) {
            object.params = [];
            for (var j = 0; j < message.params.length; ++j)
                object.params[j] = $root.Pair.toObject(message.params[j], options);
        }
        return object;
    };

    /**
     * Converts this AdOrderNot to JSON.
     * @function toJSON
     * @memberof AdOrderNot
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AdOrderNot.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AdOrderNot;
})();

$root.UpdateAdOrderStatusReq = (function() {

    /**
     * Properties of an UpdateAdOrderStatusReq.
     * @exports IUpdateAdOrderStatusReq
     * @interface IUpdateAdOrderStatusReq
     * @property {number|Long|null} [uid] UpdateAdOrderStatusReq uid
     * @property {string|null} [service] UpdateAdOrderStatusReq service
     * @property {string|null} [orderId] UpdateAdOrderStatusReq orderId
     * @property {AdOrderState|null} [state] UpdateAdOrderStatusReq state
     */

    /**
     * Constructs a new UpdateAdOrderStatusReq.
     * @exports UpdateAdOrderStatusReq
     * @classdesc Represents an UpdateAdOrderStatusReq.
     * @implements IUpdateAdOrderStatusReq
     * @constructor
     * @param {IUpdateAdOrderStatusReq=} [properties] Properties to set
     */
    function UpdateAdOrderStatusReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UpdateAdOrderStatusReq uid.
     * @member {number|Long} uid
     * @memberof UpdateAdOrderStatusReq
     * @instance
     */
    UpdateAdOrderStatusReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * UpdateAdOrderStatusReq service.
     * @member {string} service
     * @memberof UpdateAdOrderStatusReq
     * @instance
     */
    UpdateAdOrderStatusReq.prototype.service = "";

    /**
     * UpdateAdOrderStatusReq orderId.
     * @member {string} orderId
     * @memberof UpdateAdOrderStatusReq
     * @instance
     */
    UpdateAdOrderStatusReq.prototype.orderId = "";

    /**
     * UpdateAdOrderStatusReq state.
     * @member {AdOrderState} state
     * @memberof UpdateAdOrderStatusReq
     * @instance
     */
    UpdateAdOrderStatusReq.prototype.state = 0;

    /**
     * Creates a new UpdateAdOrderStatusReq instance using the specified properties.
     * @function create
     * @memberof UpdateAdOrderStatusReq
     * @static
     * @param {IUpdateAdOrderStatusReq=} [properties] Properties to set
     * @returns {UpdateAdOrderStatusReq} UpdateAdOrderStatusReq instance
     */
    UpdateAdOrderStatusReq.create = function create(properties) {
        return new UpdateAdOrderStatusReq(properties);
    };

    /**
     * Encodes the specified UpdateAdOrderStatusReq message. Does not implicitly {@link UpdateAdOrderStatusReq.verify|verify} messages.
     * @function encode
     * @memberof UpdateAdOrderStatusReq
     * @static
     * @param {IUpdateAdOrderStatusReq} message UpdateAdOrderStatusReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UpdateAdOrderStatusReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uid != null && message.hasOwnProperty("uid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
        if (message.service != null && message.hasOwnProperty("service"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.service);
        if (message.orderId != null && message.hasOwnProperty("orderId"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.orderId);
        if (message.state != null && message.hasOwnProperty("state"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.state);
        return writer;
    };

    /**
     * Encodes the specified UpdateAdOrderStatusReq message, length delimited. Does not implicitly {@link UpdateAdOrderStatusReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UpdateAdOrderStatusReq
     * @static
     * @param {IUpdateAdOrderStatusReq} message UpdateAdOrderStatusReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UpdateAdOrderStatusReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an UpdateAdOrderStatusReq message from the specified reader or buffer.
     * @function decode
     * @memberof UpdateAdOrderStatusReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UpdateAdOrderStatusReq} UpdateAdOrderStatusReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UpdateAdOrderStatusReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UpdateAdOrderStatusReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.uid = reader.int64();
                break;
            case 2:
                message.service = reader.string();
                break;
            case 3:
                message.orderId = reader.string();
                break;
            case 4:
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
     * Decodes an UpdateAdOrderStatusReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UpdateAdOrderStatusReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UpdateAdOrderStatusReq} UpdateAdOrderStatusReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UpdateAdOrderStatusReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an UpdateAdOrderStatusReq message.
     * @function verify
     * @memberof UpdateAdOrderStatusReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UpdateAdOrderStatusReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                return "uid: integer|Long expected";
        if (message.service != null && message.hasOwnProperty("service"))
            if (!$util.isString(message.service))
                return "service: string expected";
        if (message.orderId != null && message.hasOwnProperty("orderId"))
            if (!$util.isString(message.orderId))
                return "orderId: string expected";
        if (message.state != null && message.hasOwnProperty("state"))
            switch (message.state) {
            default:
                return "state: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                break;
            }
        return null;
    };

    /**
     * Creates an UpdateAdOrderStatusReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UpdateAdOrderStatusReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UpdateAdOrderStatusReq} UpdateAdOrderStatusReq
     */
    UpdateAdOrderStatusReq.fromObject = function fromObject(object) {
        if (object instanceof $root.UpdateAdOrderStatusReq)
            return object;
        var message = new $root.UpdateAdOrderStatusReq();
        if (object.uid != null)
            if ($util.Long)
                (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
            else if (typeof object.uid === "string")
                message.uid = parseInt(object.uid, 10);
            else if (typeof object.uid === "number")
                message.uid = object.uid;
            else if (typeof object.uid === "object")
                message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
        if (object.service != null)
            message.service = String(object.service);
        if (object.orderId != null)
            message.orderId = String(object.orderId);
        switch (object.state) {
        case "Init":
        case 0:
            message.state = 0;
            break;
        case "Reject":
        case 1:
            message.state = 1;
            break;
        case "Accept":
        case 2:
            message.state = 2;
            break;
        case "Complete":
        case 3:
            message.state = 3;
            break;
        case "Expired":
        case 4:
            message.state = 4;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from an UpdateAdOrderStatusReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UpdateAdOrderStatusReq
     * @static
     * @param {UpdateAdOrderStatusReq} message UpdateAdOrderStatusReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UpdateAdOrderStatusReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.uid = options.longs === String ? "0" : 0;
            object.service = "";
            object.orderId = "";
            object.state = options.enums === String ? "Init" : 0;
        }
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (typeof message.uid === "number")
                object.uid = options.longs === String ? String(message.uid) : message.uid;
            else
                object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
        if (message.service != null && message.hasOwnProperty("service"))
            object.service = message.service;
        if (message.orderId != null && message.hasOwnProperty("orderId"))
            object.orderId = message.orderId;
        if (message.state != null && message.hasOwnProperty("state"))
            object.state = options.enums === String ? $root.AdOrderState[message.state] : message.state;
        return object;
    };

    /**
     * Converts this UpdateAdOrderStatusReq to JSON.
     * @function toJSON
     * @memberof UpdateAdOrderStatusReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UpdateAdOrderStatusReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UpdateAdOrderStatusReq;
})();

$root.UpdateAdOrderStatusAck = (function() {

    /**
     * Properties of an UpdateAdOrderStatusAck.
     * @exports IUpdateAdOrderStatusAck
     * @interface IUpdateAdOrderStatusAck
     * @property {number|null} [errCode] UpdateAdOrderStatusAck errCode
     * @property {string|null} [errMsg] UpdateAdOrderStatusAck errMsg
     * @property {string|null} [service] UpdateAdOrderStatusAck service
     * @property {string|null} [orderId] UpdateAdOrderStatusAck orderId
     * @property {AdOrderState|null} [state] UpdateAdOrderStatusAck state
     */

    /**
     * Constructs a new UpdateAdOrderStatusAck.
     * @exports UpdateAdOrderStatusAck
     * @classdesc Represents an UpdateAdOrderStatusAck.
     * @implements IUpdateAdOrderStatusAck
     * @constructor
     * @param {IUpdateAdOrderStatusAck=} [properties] Properties to set
     */
    function UpdateAdOrderStatusAck(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UpdateAdOrderStatusAck errCode.
     * @member {number} errCode
     * @memberof UpdateAdOrderStatusAck
     * @instance
     */
    UpdateAdOrderStatusAck.prototype.errCode = 0;

    /**
     * UpdateAdOrderStatusAck errMsg.
     * @member {string} errMsg
     * @memberof UpdateAdOrderStatusAck
     * @instance
     */
    UpdateAdOrderStatusAck.prototype.errMsg = "";

    /**
     * UpdateAdOrderStatusAck service.
     * @member {string} service
     * @memberof UpdateAdOrderStatusAck
     * @instance
     */
    UpdateAdOrderStatusAck.prototype.service = "";

    /**
     * UpdateAdOrderStatusAck orderId.
     * @member {string} orderId
     * @memberof UpdateAdOrderStatusAck
     * @instance
     */
    UpdateAdOrderStatusAck.prototype.orderId = "";

    /**
     * UpdateAdOrderStatusAck state.
     * @member {AdOrderState} state
     * @memberof UpdateAdOrderStatusAck
     * @instance
     */
    UpdateAdOrderStatusAck.prototype.state = 0;

    /**
     * Creates a new UpdateAdOrderStatusAck instance using the specified properties.
     * @function create
     * @memberof UpdateAdOrderStatusAck
     * @static
     * @param {IUpdateAdOrderStatusAck=} [properties] Properties to set
     * @returns {UpdateAdOrderStatusAck} UpdateAdOrderStatusAck instance
     */
    UpdateAdOrderStatusAck.create = function create(properties) {
        return new UpdateAdOrderStatusAck(properties);
    };

    /**
     * Encodes the specified UpdateAdOrderStatusAck message. Does not implicitly {@link UpdateAdOrderStatusAck.verify|verify} messages.
     * @function encode
     * @memberof UpdateAdOrderStatusAck
     * @static
     * @param {IUpdateAdOrderStatusAck} message UpdateAdOrderStatusAck message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UpdateAdOrderStatusAck.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.errCode != null && message.hasOwnProperty("errCode"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
        if (message.errMsg != null && message.hasOwnProperty("errMsg"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
        if (message.service != null && message.hasOwnProperty("service"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.service);
        if (message.orderId != null && message.hasOwnProperty("orderId"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.orderId);
        if (message.state != null && message.hasOwnProperty("state"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.state);
        return writer;
    };

    /**
     * Encodes the specified UpdateAdOrderStatusAck message, length delimited. Does not implicitly {@link UpdateAdOrderStatusAck.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UpdateAdOrderStatusAck
     * @static
     * @param {IUpdateAdOrderStatusAck} message UpdateAdOrderStatusAck message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UpdateAdOrderStatusAck.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an UpdateAdOrderStatusAck message from the specified reader or buffer.
     * @function decode
     * @memberof UpdateAdOrderStatusAck
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UpdateAdOrderStatusAck} UpdateAdOrderStatusAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UpdateAdOrderStatusAck.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UpdateAdOrderStatusAck();
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
            case 5:
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
     * Decodes an UpdateAdOrderStatusAck message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UpdateAdOrderStatusAck
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UpdateAdOrderStatusAck} UpdateAdOrderStatusAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UpdateAdOrderStatusAck.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an UpdateAdOrderStatusAck message.
     * @function verify
     * @memberof UpdateAdOrderStatusAck
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UpdateAdOrderStatusAck.verify = function verify(message) {
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
        if (message.state != null && message.hasOwnProperty("state"))
            switch (message.state) {
            default:
                return "state: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                break;
            }
        return null;
    };

    /**
     * Creates an UpdateAdOrderStatusAck message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UpdateAdOrderStatusAck
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UpdateAdOrderStatusAck} UpdateAdOrderStatusAck
     */
    UpdateAdOrderStatusAck.fromObject = function fromObject(object) {
        if (object instanceof $root.UpdateAdOrderStatusAck)
            return object;
        var message = new $root.UpdateAdOrderStatusAck();
        if (object.errCode != null)
            message.errCode = object.errCode | 0;
        if (object.errMsg != null)
            message.errMsg = String(object.errMsg);
        if (object.service != null)
            message.service = String(object.service);
        if (object.orderId != null)
            message.orderId = String(object.orderId);
        switch (object.state) {
        case "Init":
        case 0:
            message.state = 0;
            break;
        case "Reject":
        case 1:
            message.state = 1;
            break;
        case "Accept":
        case 2:
            message.state = 2;
            break;
        case "Complete":
        case 3:
            message.state = 3;
            break;
        case "Expired":
        case 4:
            message.state = 4;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from an UpdateAdOrderStatusAck message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UpdateAdOrderStatusAck
     * @static
     * @param {UpdateAdOrderStatusAck} message UpdateAdOrderStatusAck
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UpdateAdOrderStatusAck.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.errCode = 0;
            object.errMsg = "";
            object.service = "";
            object.orderId = "";
            object.state = options.enums === String ? "Init" : 0;
        }
        if (message.errCode != null && message.hasOwnProperty("errCode"))
            object.errCode = message.errCode;
        if (message.errMsg != null && message.hasOwnProperty("errMsg"))
            object.errMsg = message.errMsg;
        if (message.service != null && message.hasOwnProperty("service"))
            object.service = message.service;
        if (message.orderId != null && message.hasOwnProperty("orderId"))
            object.orderId = message.orderId;
        if (message.state != null && message.hasOwnProperty("state"))
            object.state = options.enums === String ? $root.AdOrderState[message.state] : message.state;
        return object;
    };

    /**
     * Converts this UpdateAdOrderStatusAck to JSON.
     * @function toJSON
     * @memberof UpdateAdOrderStatusAck
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UpdateAdOrderStatusAck.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UpdateAdOrderStatusAck;
})();

$root.GetAdOrderAwardReq = (function() {

    /**
     * Properties of a GetAdOrderAwardReq.
     * @exports IGetAdOrderAwardReq
     * @interface IGetAdOrderAwardReq
     * @property {number|Long|null} [uid] GetAdOrderAwardReq uid
     * @property {string|null} [service] GetAdOrderAwardReq service
     * @property {string|null} [orderId] GetAdOrderAwardReq orderId
     */

    /**
     * Constructs a new GetAdOrderAwardReq.
     * @exports GetAdOrderAwardReq
     * @classdesc Represents a GetAdOrderAwardReq.
     * @implements IGetAdOrderAwardReq
     * @constructor
     * @param {IGetAdOrderAwardReq=} [properties] Properties to set
     */
    function GetAdOrderAwardReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetAdOrderAwardReq uid.
     * @member {number|Long} uid
     * @memberof GetAdOrderAwardReq
     * @instance
     */
    GetAdOrderAwardReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * GetAdOrderAwardReq service.
     * @member {string} service
     * @memberof GetAdOrderAwardReq
     * @instance
     */
    GetAdOrderAwardReq.prototype.service = "";

    /**
     * GetAdOrderAwardReq orderId.
     * @member {string} orderId
     * @memberof GetAdOrderAwardReq
     * @instance
     */
    GetAdOrderAwardReq.prototype.orderId = "";

    /**
     * Creates a new GetAdOrderAwardReq instance using the specified properties.
     * @function create
     * @memberof GetAdOrderAwardReq
     * @static
     * @param {IGetAdOrderAwardReq=} [properties] Properties to set
     * @returns {GetAdOrderAwardReq} GetAdOrderAwardReq instance
     */
    GetAdOrderAwardReq.create = function create(properties) {
        return new GetAdOrderAwardReq(properties);
    };

    /**
     * Encodes the specified GetAdOrderAwardReq message. Does not implicitly {@link GetAdOrderAwardReq.verify|verify} messages.
     * @function encode
     * @memberof GetAdOrderAwardReq
     * @static
     * @param {IGetAdOrderAwardReq} message GetAdOrderAwardReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetAdOrderAwardReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uid != null && message.hasOwnProperty("uid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
        if (message.service != null && message.hasOwnProperty("service"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.service);
        if (message.orderId != null && message.hasOwnProperty("orderId"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.orderId);
        return writer;
    };

    /**
     * Encodes the specified GetAdOrderAwardReq message, length delimited. Does not implicitly {@link GetAdOrderAwardReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetAdOrderAwardReq
     * @static
     * @param {IGetAdOrderAwardReq} message GetAdOrderAwardReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetAdOrderAwardReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetAdOrderAwardReq message from the specified reader or buffer.
     * @function decode
     * @memberof GetAdOrderAwardReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetAdOrderAwardReq} GetAdOrderAwardReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetAdOrderAwardReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetAdOrderAwardReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.uid = reader.int64();
                break;
            case 2:
                message.service = reader.string();
                break;
            case 3:
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
     * Decodes a GetAdOrderAwardReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetAdOrderAwardReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetAdOrderAwardReq} GetAdOrderAwardReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetAdOrderAwardReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetAdOrderAwardReq message.
     * @function verify
     * @memberof GetAdOrderAwardReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetAdOrderAwardReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                return "uid: integer|Long expected";
        if (message.service != null && message.hasOwnProperty("service"))
            if (!$util.isString(message.service))
                return "service: string expected";
        if (message.orderId != null && message.hasOwnProperty("orderId"))
            if (!$util.isString(message.orderId))
                return "orderId: string expected";
        return null;
    };

    /**
     * Creates a GetAdOrderAwardReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetAdOrderAwardReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetAdOrderAwardReq} GetAdOrderAwardReq
     */
    GetAdOrderAwardReq.fromObject = function fromObject(object) {
        if (object instanceof $root.GetAdOrderAwardReq)
            return object;
        var message = new $root.GetAdOrderAwardReq();
        if (object.uid != null)
            if ($util.Long)
                (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
            else if (typeof object.uid === "string")
                message.uid = parseInt(object.uid, 10);
            else if (typeof object.uid === "number")
                message.uid = object.uid;
            else if (typeof object.uid === "object")
                message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
        if (object.service != null)
            message.service = String(object.service);
        if (object.orderId != null)
            message.orderId = String(object.orderId);
        return message;
    };

    /**
     * Creates a plain object from a GetAdOrderAwardReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetAdOrderAwardReq
     * @static
     * @param {GetAdOrderAwardReq} message GetAdOrderAwardReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetAdOrderAwardReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.uid = options.longs === String ? "0" : 0;
            object.service = "";
            object.orderId = "";
        }
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (typeof message.uid === "number")
                object.uid = options.longs === String ? String(message.uid) : message.uid;
            else
                object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
        if (message.service != null && message.hasOwnProperty("service"))
            object.service = message.service;
        if (message.orderId != null && message.hasOwnProperty("orderId"))
            object.orderId = message.orderId;
        return object;
    };

    /**
     * Converts this GetAdOrderAwardReq to JSON.
     * @function toJSON
     * @memberof GetAdOrderAwardReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetAdOrderAwardReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetAdOrderAwardReq;
})();

$root.GetAdOrderAwardAck = (function() {

    /**
     * Properties of a GetAdOrderAwardAck.
     * @exports IGetAdOrderAwardAck
     * @interface IGetAdOrderAwardAck
     * @property {number|null} [errCode] GetAdOrderAwardAck errCode
     * @property {string|null} [errMsg] GetAdOrderAwardAck errMsg
     * @property {string|null} [service] GetAdOrderAwardAck service
     * @property {string|null} [orderId] GetAdOrderAwardAck orderId
     * @property {Array.<IAward>|null} [award] GetAdOrderAwardAck award
     * @property {Array.<IPair>|null} [params] GetAdOrderAwardAck params
     */

    /**
     * Constructs a new GetAdOrderAwardAck.
     * @exports GetAdOrderAwardAck
     * @classdesc Represents a GetAdOrderAwardAck.
     * @implements IGetAdOrderAwardAck
     * @constructor
     * @param {IGetAdOrderAwardAck=} [properties] Properties to set
     */
    function GetAdOrderAwardAck(properties) {
        this.award = [];
        this.params = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetAdOrderAwardAck errCode.
     * @member {number} errCode
     * @memberof GetAdOrderAwardAck
     * @instance
     */
    GetAdOrderAwardAck.prototype.errCode = 0;

    /**
     * GetAdOrderAwardAck errMsg.
     * @member {string} errMsg
     * @memberof GetAdOrderAwardAck
     * @instance
     */
    GetAdOrderAwardAck.prototype.errMsg = "";

    /**
     * GetAdOrderAwardAck service.
     * @member {string} service
     * @memberof GetAdOrderAwardAck
     * @instance
     */
    GetAdOrderAwardAck.prototype.service = "";

    /**
     * GetAdOrderAwardAck orderId.
     * @member {string} orderId
     * @memberof GetAdOrderAwardAck
     * @instance
     */
    GetAdOrderAwardAck.prototype.orderId = "";

    /**
     * GetAdOrderAwardAck award.
     * @member {Array.<IAward>} award
     * @memberof GetAdOrderAwardAck
     * @instance
     */
    GetAdOrderAwardAck.prototype.award = $util.emptyArray;

    /**
     * GetAdOrderAwardAck params.
     * @member {Array.<IPair>} params
     * @memberof GetAdOrderAwardAck
     * @instance
     */
    GetAdOrderAwardAck.prototype.params = $util.emptyArray;

    /**
     * Creates a new GetAdOrderAwardAck instance using the specified properties.
     * @function create
     * @memberof GetAdOrderAwardAck
     * @static
     * @param {IGetAdOrderAwardAck=} [properties] Properties to set
     * @returns {GetAdOrderAwardAck} GetAdOrderAwardAck instance
     */
    GetAdOrderAwardAck.create = function create(properties) {
        return new GetAdOrderAwardAck(properties);
    };

    /**
     * Encodes the specified GetAdOrderAwardAck message. Does not implicitly {@link GetAdOrderAwardAck.verify|verify} messages.
     * @function encode
     * @memberof GetAdOrderAwardAck
     * @static
     * @param {IGetAdOrderAwardAck} message GetAdOrderAwardAck message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetAdOrderAwardAck.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.errCode != null && message.hasOwnProperty("errCode"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
        if (message.errMsg != null && message.hasOwnProperty("errMsg"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
        if (message.service != null && message.hasOwnProperty("service"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.service);
        if (message.orderId != null && message.hasOwnProperty("orderId"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.orderId);
        if (message.award != null && message.award.length)
            for (var i = 0; i < message.award.length; ++i)
                $root.Award.encode(message.award[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.params != null && message.params.length)
            for (var i = 0; i < message.params.length; ++i)
                $root.Pair.encode(message.params[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GetAdOrderAwardAck message, length delimited. Does not implicitly {@link GetAdOrderAwardAck.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetAdOrderAwardAck
     * @static
     * @param {IGetAdOrderAwardAck} message GetAdOrderAwardAck message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetAdOrderAwardAck.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetAdOrderAwardAck message from the specified reader or buffer.
     * @function decode
     * @memberof GetAdOrderAwardAck
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetAdOrderAwardAck} GetAdOrderAwardAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetAdOrderAwardAck.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetAdOrderAwardAck();
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
            case 5:
                if (!(message.award && message.award.length))
                    message.award = [];
                message.award.push($root.Award.decode(reader, reader.uint32()));
                break;
            case 6:
                if (!(message.params && message.params.length))
                    message.params = [];
                message.params.push($root.Pair.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GetAdOrderAwardAck message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetAdOrderAwardAck
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetAdOrderAwardAck} GetAdOrderAwardAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetAdOrderAwardAck.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetAdOrderAwardAck message.
     * @function verify
     * @memberof GetAdOrderAwardAck
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetAdOrderAwardAck.verify = function verify(message) {
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
        if (message.award != null && message.hasOwnProperty("award")) {
            if (!Array.isArray(message.award))
                return "award: array expected";
            for (var i = 0; i < message.award.length; ++i) {
                var error = $root.Award.verify(message.award[i]);
                if (error)
                    return "award." + error;
            }
        }
        if (message.params != null && message.hasOwnProperty("params")) {
            if (!Array.isArray(message.params))
                return "params: array expected";
            for (var i = 0; i < message.params.length; ++i) {
                var error = $root.Pair.verify(message.params[i]);
                if (error)
                    return "params." + error;
            }
        }
        return null;
    };

    /**
     * Creates a GetAdOrderAwardAck message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetAdOrderAwardAck
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetAdOrderAwardAck} GetAdOrderAwardAck
     */
    GetAdOrderAwardAck.fromObject = function fromObject(object) {
        if (object instanceof $root.GetAdOrderAwardAck)
            return object;
        var message = new $root.GetAdOrderAwardAck();
        if (object.errCode != null)
            message.errCode = object.errCode | 0;
        if (object.errMsg != null)
            message.errMsg = String(object.errMsg);
        if (object.service != null)
            message.service = String(object.service);
        if (object.orderId != null)
            message.orderId = String(object.orderId);
        if (object.award) {
            if (!Array.isArray(object.award))
                throw TypeError(".GetAdOrderAwardAck.award: array expected");
            message.award = [];
            for (var i = 0; i < object.award.length; ++i) {
                if (typeof object.award[i] !== "object")
                    throw TypeError(".GetAdOrderAwardAck.award: object expected");
                message.award[i] = $root.Award.fromObject(object.award[i]);
            }
        }
        if (object.params) {
            if (!Array.isArray(object.params))
                throw TypeError(".GetAdOrderAwardAck.params: array expected");
            message.params = [];
            for (var i = 0; i < object.params.length; ++i) {
                if (typeof object.params[i] !== "object")
                    throw TypeError(".GetAdOrderAwardAck.params: object expected");
                message.params[i] = $root.Pair.fromObject(object.params[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a GetAdOrderAwardAck message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetAdOrderAwardAck
     * @static
     * @param {GetAdOrderAwardAck} message GetAdOrderAwardAck
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetAdOrderAwardAck.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.award = [];
            object.params = [];
        }
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
        if (message.award && message.award.length) {
            object.award = [];
            for (var j = 0; j < message.award.length; ++j)
                object.award[j] = $root.Award.toObject(message.award[j], options);
        }
        if (message.params && message.params.length) {
            object.params = [];
            for (var j = 0; j < message.params.length; ++j)
                object.params[j] = $root.Pair.toObject(message.params[j], options);
        }
        return object;
    };

    /**
     * Converts this GetAdOrderAwardAck to JSON.
     * @function toJSON
     * @memberof GetAdOrderAwardAck
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetAdOrderAwardAck.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetAdOrderAwardAck;
})();

$root.AdSpot = (function() {

    /**
     * Constructs a new AdSpot service.
     * @exports AdSpot
     * @classdesc Represents an AdSpot
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function AdSpot(rpcImpl, requestDelimited, responseDelimited) {
        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
    }

    (AdSpot.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = AdSpot;

    /**
     * Creates new AdSpot service using the specified rpc implementation.
     * @function create
     * @memberof AdSpot
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {AdSpot} RPC service. Useful where requests and/or responses are streamed.
     */
    AdSpot.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        return new this(rpcImpl, requestDelimited, responseDelimited);
    };

    /**
     * Callback as used by {@link AdSpot#zhuanPan}.
     * @memberof AdSpot
     * @typedef ZhuanPanCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {GetZhuanPanChouJiangAck} [response] GetZhuanPanChouJiangAck
     */

    /**
     * Calls ZhuanPan.
     * @function zhuanPan
     * @memberof AdSpot
     * @instance
     * @param {IGetZhuanPanChouJiangReq} request GetZhuanPanChouJiangReq message or plain object
     * @param {AdSpot.ZhuanPanCallback} callback Node-style callback called with the error, if any, and GetZhuanPanChouJiangAck
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(AdSpot.prototype.zhuanPan = function zhuanPan(request, callback) {
        return this.rpcCall(zhuanPan, $root.GetZhuanPanChouJiangReq, $root.GetZhuanPanChouJiangAck, request, callback);
    }, "name", { value: "ZhuanPan" });

    /**
     * Calls ZhuanPan.
     * @function zhuanPan
     * @memberof AdSpot
     * @instance
     * @param {IGetZhuanPanChouJiangReq} request GetZhuanPanChouJiangReq message or plain object
     * @returns {Promise<GetZhuanPanChouJiangAck>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link AdSpot#xinShouHaoLi}.
     * @memberof AdSpot
     * @typedef XinShouHaoLiCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {GetXinShouHaoLiAck} [response] GetXinShouHaoLiAck
     */

    /**
     * Calls XinShouHaoLi.
     * @function xinShouHaoLi
     * @memberof AdSpot
     * @instance
     * @param {IGetXinShouHaoLiReq} request GetXinShouHaoLiReq message or plain object
     * @param {AdSpot.XinShouHaoLiCallback} callback Node-style callback called with the error, if any, and GetXinShouHaoLiAck
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(AdSpot.prototype.xinShouHaoLi = function xinShouHaoLi(request, callback) {
        return this.rpcCall(xinShouHaoLi, $root.GetXinShouHaoLiReq, $root.GetXinShouHaoLiAck, request, callback);
    }, "name", { value: "XinShouHaoLi" });

    /**
     * Calls XinShouHaoLi.
     * @function xinShouHaoLi
     * @memberof AdSpot
     * @instance
     * @param {IGetXinShouHaoLiReq} request GetXinShouHaoLiReq message or plain object
     * @returns {Promise<GetXinShouHaoLiAck>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link AdSpot#getLotteryReward}.
     * @memberof AdSpot
     * @typedef GetLotteryRewardCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {GetZhuanPanChouJiangAwardAck} [response] GetZhuanPanChouJiangAwardAck
     */

    /**
     * Calls GetLotteryReward.
     * @function getLotteryReward
     * @memberof AdSpot
     * @instance
     * @param {IGetZhuanPanChouJiangAwardReq} request GetZhuanPanChouJiangAwardReq message or plain object
     * @param {AdSpot.GetLotteryRewardCallback} callback Node-style callback called with the error, if any, and GetZhuanPanChouJiangAwardAck
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(AdSpot.prototype.getLotteryReward = function getLotteryReward(request, callback) {
        return this.rpcCall(getLotteryReward, $root.GetZhuanPanChouJiangAwardReq, $root.GetZhuanPanChouJiangAwardAck, request, callback);
    }, "name", { value: "GetLotteryReward" });

    /**
     * Calls GetLotteryReward.
     * @function getLotteryReward
     * @memberof AdSpot
     * @instance
     * @param {IGetZhuanPanChouJiangAwardReq} request GetZhuanPanChouJiangAwardReq message or plain object
     * @returns {Promise<GetZhuanPanChouJiangAwardAck>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link AdSpot#getAdSpots}.
     * @memberof AdSpot
     * @typedef GetAdSpotsCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {GetAdSpotsAck} [response] GetAdSpotsAck
     */

    /**
     * Calls GetAdSpots.
     * @function getAdSpots
     * @memberof AdSpot
     * @instance
     * @param {IGetAdSpotsReq} request GetAdSpotsReq message or plain object
     * @param {AdSpot.GetAdSpotsCallback} callback Node-style callback called with the error, if any, and GetAdSpotsAck
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(AdSpot.prototype.getAdSpots = function getAdSpots(request, callback) {
        return this.rpcCall(getAdSpots, $root.GetAdSpotsReq, $root.GetAdSpotsAck, request, callback);
    }, "name", { value: "GetAdSpots" });

    /**
     * Calls GetAdSpots.
     * @function getAdSpots
     * @memberof AdSpot
     * @instance
     * @param {IGetAdSpotsReq} request GetAdSpotsReq message or plain object
     * @returns {Promise<GetAdSpotsAck>} Promise
     * @variation 2
     */

    return AdSpot;
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

$root.ZhuanPanItem = (function() {

    /**
     * Properties of a ZhuanPanItem.
     * @exports IZhuanPanItem
     * @interface IZhuanPanItem
     * @property {Array.<IAward>|null} [award] ZhuanPanItem award
     * @property {string|null} [desc] ZhuanPanItem desc
     */

    /**
     * Constructs a new ZhuanPanItem.
     * @exports ZhuanPanItem
     * @classdesc Represents a ZhuanPanItem.
     * @implements IZhuanPanItem
     * @constructor
     * @param {IZhuanPanItem=} [properties] Properties to set
     */
    function ZhuanPanItem(properties) {
        this.award = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ZhuanPanItem award.
     * @member {Array.<IAward>} award
     * @memberof ZhuanPanItem
     * @instance
     */
    ZhuanPanItem.prototype.award = $util.emptyArray;

    /**
     * ZhuanPanItem desc.
     * @member {string} desc
     * @memberof ZhuanPanItem
     * @instance
     */
    ZhuanPanItem.prototype.desc = "";

    /**
     * Creates a new ZhuanPanItem instance using the specified properties.
     * @function create
     * @memberof ZhuanPanItem
     * @static
     * @param {IZhuanPanItem=} [properties] Properties to set
     * @returns {ZhuanPanItem} ZhuanPanItem instance
     */
    ZhuanPanItem.create = function create(properties) {
        return new ZhuanPanItem(properties);
    };

    /**
     * Encodes the specified ZhuanPanItem message. Does not implicitly {@link ZhuanPanItem.verify|verify} messages.
     * @function encode
     * @memberof ZhuanPanItem
     * @static
     * @param {IZhuanPanItem} message ZhuanPanItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ZhuanPanItem.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.award != null && message.award.length)
            for (var i = 0; i < message.award.length; ++i)
                $root.Award.encode(message.award[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.desc != null && message.hasOwnProperty("desc"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.desc);
        return writer;
    };

    /**
     * Encodes the specified ZhuanPanItem message, length delimited. Does not implicitly {@link ZhuanPanItem.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ZhuanPanItem
     * @static
     * @param {IZhuanPanItem} message ZhuanPanItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ZhuanPanItem.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ZhuanPanItem message from the specified reader or buffer.
     * @function decode
     * @memberof ZhuanPanItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ZhuanPanItem} ZhuanPanItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ZhuanPanItem.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ZhuanPanItem();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.award && message.award.length))
                    message.award = [];
                message.award.push($root.Award.decode(reader, reader.uint32()));
                break;
            case 2:
                message.desc = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ZhuanPanItem message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ZhuanPanItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ZhuanPanItem} ZhuanPanItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ZhuanPanItem.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ZhuanPanItem message.
     * @function verify
     * @memberof ZhuanPanItem
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ZhuanPanItem.verify = function verify(message) {
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
        if (message.desc != null && message.hasOwnProperty("desc"))
            if (!$util.isString(message.desc))
                return "desc: string expected";
        return null;
    };

    /**
     * Creates a ZhuanPanItem message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ZhuanPanItem
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ZhuanPanItem} ZhuanPanItem
     */
    ZhuanPanItem.fromObject = function fromObject(object) {
        if (object instanceof $root.ZhuanPanItem)
            return object;
        var message = new $root.ZhuanPanItem();
        if (object.award) {
            if (!Array.isArray(object.award))
                throw TypeError(".ZhuanPanItem.award: array expected");
            message.award = [];
            for (var i = 0; i < object.award.length; ++i) {
                if (typeof object.award[i] !== "object")
                    throw TypeError(".ZhuanPanItem.award: object expected");
                message.award[i] = $root.Award.fromObject(object.award[i]);
            }
        }
        if (object.desc != null)
            message.desc = String(object.desc);
        return message;
    };

    /**
     * Creates a plain object from a ZhuanPanItem message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ZhuanPanItem
     * @static
     * @param {ZhuanPanItem} message ZhuanPanItem
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ZhuanPanItem.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.award = [];
        if (options.defaults)
            object.desc = "";
        if (message.award && message.award.length) {
            object.award = [];
            for (var j = 0; j < message.award.length; ++j)
                object.award[j] = $root.Award.toObject(message.award[j], options);
        }
        if (message.desc != null && message.hasOwnProperty("desc"))
            object.desc = message.desc;
        return object;
    };

    /**
     * Converts this ZhuanPanItem to JSON.
     * @function toJSON
     * @memberof ZhuanPanItem
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ZhuanPanItem.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ZhuanPanItem;
})();

$root.GetZhuanPanChouJiangReq = (function() {

    /**
     * Properties of a GetZhuanPanChouJiangReq.
     * @exports IGetZhuanPanChouJiangReq
     * @interface IGetZhuanPanChouJiangReq
     * @property {number|Long|null} [uid] GetZhuanPanChouJiangReq uid
     */

    /**
     * Constructs a new GetZhuanPanChouJiangReq.
     * @exports GetZhuanPanChouJiangReq
     * @classdesc Represents a GetZhuanPanChouJiangReq.
     * @implements IGetZhuanPanChouJiangReq
     * @constructor
     * @param {IGetZhuanPanChouJiangReq=} [properties] Properties to set
     */
    function GetZhuanPanChouJiangReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetZhuanPanChouJiangReq uid.
     * @member {number|Long} uid
     * @memberof GetZhuanPanChouJiangReq
     * @instance
     */
    GetZhuanPanChouJiangReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new GetZhuanPanChouJiangReq instance using the specified properties.
     * @function create
     * @memberof GetZhuanPanChouJiangReq
     * @static
     * @param {IGetZhuanPanChouJiangReq=} [properties] Properties to set
     * @returns {GetZhuanPanChouJiangReq} GetZhuanPanChouJiangReq instance
     */
    GetZhuanPanChouJiangReq.create = function create(properties) {
        return new GetZhuanPanChouJiangReq(properties);
    };

    /**
     * Encodes the specified GetZhuanPanChouJiangReq message. Does not implicitly {@link GetZhuanPanChouJiangReq.verify|verify} messages.
     * @function encode
     * @memberof GetZhuanPanChouJiangReq
     * @static
     * @param {IGetZhuanPanChouJiangReq} message GetZhuanPanChouJiangReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetZhuanPanChouJiangReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uid != null && message.hasOwnProperty("uid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
        return writer;
    };

    /**
     * Encodes the specified GetZhuanPanChouJiangReq message, length delimited. Does not implicitly {@link GetZhuanPanChouJiangReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetZhuanPanChouJiangReq
     * @static
     * @param {IGetZhuanPanChouJiangReq} message GetZhuanPanChouJiangReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetZhuanPanChouJiangReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetZhuanPanChouJiangReq message from the specified reader or buffer.
     * @function decode
     * @memberof GetZhuanPanChouJiangReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetZhuanPanChouJiangReq} GetZhuanPanChouJiangReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetZhuanPanChouJiangReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetZhuanPanChouJiangReq();
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
     * Decodes a GetZhuanPanChouJiangReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetZhuanPanChouJiangReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetZhuanPanChouJiangReq} GetZhuanPanChouJiangReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetZhuanPanChouJiangReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetZhuanPanChouJiangReq message.
     * @function verify
     * @memberof GetZhuanPanChouJiangReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetZhuanPanChouJiangReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                return "uid: integer|Long expected";
        return null;
    };

    /**
     * Creates a GetZhuanPanChouJiangReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetZhuanPanChouJiangReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetZhuanPanChouJiangReq} GetZhuanPanChouJiangReq
     */
    GetZhuanPanChouJiangReq.fromObject = function fromObject(object) {
        if (object instanceof $root.GetZhuanPanChouJiangReq)
            return object;
        var message = new $root.GetZhuanPanChouJiangReq();
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
     * Creates a plain object from a GetZhuanPanChouJiangReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetZhuanPanChouJiangReq
     * @static
     * @param {GetZhuanPanChouJiangReq} message GetZhuanPanChouJiangReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetZhuanPanChouJiangReq.toObject = function toObject(message, options) {
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
     * Converts this GetZhuanPanChouJiangReq to JSON.
     * @function toJSON
     * @memberof GetZhuanPanChouJiangReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetZhuanPanChouJiangReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetZhuanPanChouJiangReq;
})();

$root.GetZhuanPanChouJiangAck = (function() {

    /**
     * Properties of a GetZhuanPanChouJiangAck.
     * @exports IGetZhuanPanChouJiangAck
     * @interface IGetZhuanPanChouJiangAck
     * @property {number|null} [errCode] GetZhuanPanChouJiangAck errCode
     * @property {string|null} [errMsg] GetZhuanPanChouJiangAck errMsg
     * @property {number|null} [hitIndex] GetZhuanPanChouJiangAck hitIndex
     * @property {number|null} [remainCount] GetZhuanPanChouJiangAck remainCount
     * @property {Array.<IZhuanPanItem>|null} [AllItems] GetZhuanPanChouJiangAck AllItems
     * @property {IAdOrderNot|null} [adOrder] GetZhuanPanChouJiangAck adOrder
     */

    /**
     * Constructs a new GetZhuanPanChouJiangAck.
     * @exports GetZhuanPanChouJiangAck
     * @classdesc Represents a GetZhuanPanChouJiangAck.
     * @implements IGetZhuanPanChouJiangAck
     * @constructor
     * @param {IGetZhuanPanChouJiangAck=} [properties] Properties to set
     */
    function GetZhuanPanChouJiangAck(properties) {
        this.AllItems = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetZhuanPanChouJiangAck errCode.
     * @member {number} errCode
     * @memberof GetZhuanPanChouJiangAck
     * @instance
     */
    GetZhuanPanChouJiangAck.prototype.errCode = 0;

    /**
     * GetZhuanPanChouJiangAck errMsg.
     * @member {string} errMsg
     * @memberof GetZhuanPanChouJiangAck
     * @instance
     */
    GetZhuanPanChouJiangAck.prototype.errMsg = "";

    /**
     * GetZhuanPanChouJiangAck hitIndex.
     * @member {number} hitIndex
     * @memberof GetZhuanPanChouJiangAck
     * @instance
     */
    GetZhuanPanChouJiangAck.prototype.hitIndex = 0;

    /**
     * GetZhuanPanChouJiangAck remainCount.
     * @member {number} remainCount
     * @memberof GetZhuanPanChouJiangAck
     * @instance
     */
    GetZhuanPanChouJiangAck.prototype.remainCount = 0;

    /**
     * GetZhuanPanChouJiangAck AllItems.
     * @member {Array.<IZhuanPanItem>} AllItems
     * @memberof GetZhuanPanChouJiangAck
     * @instance
     */
    GetZhuanPanChouJiangAck.prototype.AllItems = $util.emptyArray;

    /**
     * GetZhuanPanChouJiangAck adOrder.
     * @member {IAdOrderNot|null|undefined} adOrder
     * @memberof GetZhuanPanChouJiangAck
     * @instance
     */
    GetZhuanPanChouJiangAck.prototype.adOrder = null;

    /**
     * Creates a new GetZhuanPanChouJiangAck instance using the specified properties.
     * @function create
     * @memberof GetZhuanPanChouJiangAck
     * @static
     * @param {IGetZhuanPanChouJiangAck=} [properties] Properties to set
     * @returns {GetZhuanPanChouJiangAck} GetZhuanPanChouJiangAck instance
     */
    GetZhuanPanChouJiangAck.create = function create(properties) {
        return new GetZhuanPanChouJiangAck(properties);
    };

    /**
     * Encodes the specified GetZhuanPanChouJiangAck message. Does not implicitly {@link GetZhuanPanChouJiangAck.verify|verify} messages.
     * @function encode
     * @memberof GetZhuanPanChouJiangAck
     * @static
     * @param {IGetZhuanPanChouJiangAck} message GetZhuanPanChouJiangAck message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetZhuanPanChouJiangAck.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.errCode != null && message.hasOwnProperty("errCode"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
        if (message.errMsg != null && message.hasOwnProperty("errMsg"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
        if (message.hitIndex != null && message.hasOwnProperty("hitIndex"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.hitIndex);
        if (message.remainCount != null && message.hasOwnProperty("remainCount"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.remainCount);
        if (message.AllItems != null && message.AllItems.length)
            for (var i = 0; i < message.AllItems.length; ++i)
                $root.ZhuanPanItem.encode(message.AllItems[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.adOrder != null && message.hasOwnProperty("adOrder"))
            $root.AdOrderNot.encode(message.adOrder, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GetZhuanPanChouJiangAck message, length delimited. Does not implicitly {@link GetZhuanPanChouJiangAck.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetZhuanPanChouJiangAck
     * @static
     * @param {IGetZhuanPanChouJiangAck} message GetZhuanPanChouJiangAck message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetZhuanPanChouJiangAck.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetZhuanPanChouJiangAck message from the specified reader or buffer.
     * @function decode
     * @memberof GetZhuanPanChouJiangAck
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetZhuanPanChouJiangAck} GetZhuanPanChouJiangAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetZhuanPanChouJiangAck.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetZhuanPanChouJiangAck();
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
                message.hitIndex = reader.int32();
                break;
            case 4:
                message.remainCount = reader.int32();
                break;
            case 5:
                if (!(message.AllItems && message.AllItems.length))
                    message.AllItems = [];
                message.AllItems.push($root.ZhuanPanItem.decode(reader, reader.uint32()));
                break;
            case 6:
                message.adOrder = $root.AdOrderNot.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GetZhuanPanChouJiangAck message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetZhuanPanChouJiangAck
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetZhuanPanChouJiangAck} GetZhuanPanChouJiangAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetZhuanPanChouJiangAck.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetZhuanPanChouJiangAck message.
     * @function verify
     * @memberof GetZhuanPanChouJiangAck
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetZhuanPanChouJiangAck.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.errCode != null && message.hasOwnProperty("errCode"))
            if (!$util.isInteger(message.errCode))
                return "errCode: integer expected";
        if (message.errMsg != null && message.hasOwnProperty("errMsg"))
            if (!$util.isString(message.errMsg))
                return "errMsg: string expected";
        if (message.hitIndex != null && message.hasOwnProperty("hitIndex"))
            if (!$util.isInteger(message.hitIndex))
                return "hitIndex: integer expected";
        if (message.remainCount != null && message.hasOwnProperty("remainCount"))
            if (!$util.isInteger(message.remainCount))
                return "remainCount: integer expected";
        if (message.AllItems != null && message.hasOwnProperty("AllItems")) {
            if (!Array.isArray(message.AllItems))
                return "AllItems: array expected";
            for (var i = 0; i < message.AllItems.length; ++i) {
                var error = $root.ZhuanPanItem.verify(message.AllItems[i]);
                if (error)
                    return "AllItems." + error;
            }
        }
        if (message.adOrder != null && message.hasOwnProperty("adOrder")) {
            var error = $root.AdOrderNot.verify(message.adOrder);
            if (error)
                return "adOrder." + error;
        }
        return null;
    };

    /**
     * Creates a GetZhuanPanChouJiangAck message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetZhuanPanChouJiangAck
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetZhuanPanChouJiangAck} GetZhuanPanChouJiangAck
     */
    GetZhuanPanChouJiangAck.fromObject = function fromObject(object) {
        if (object instanceof $root.GetZhuanPanChouJiangAck)
            return object;
        var message = new $root.GetZhuanPanChouJiangAck();
        if (object.errCode != null)
            message.errCode = object.errCode | 0;
        if (object.errMsg != null)
            message.errMsg = String(object.errMsg);
        if (object.hitIndex != null)
            message.hitIndex = object.hitIndex | 0;
        if (object.remainCount != null)
            message.remainCount = object.remainCount | 0;
        if (object.AllItems) {
            if (!Array.isArray(object.AllItems))
                throw TypeError(".GetZhuanPanChouJiangAck.AllItems: array expected");
            message.AllItems = [];
            for (var i = 0; i < object.AllItems.length; ++i) {
                if (typeof object.AllItems[i] !== "object")
                    throw TypeError(".GetZhuanPanChouJiangAck.AllItems: object expected");
                message.AllItems[i] = $root.ZhuanPanItem.fromObject(object.AllItems[i]);
            }
        }
        if (object.adOrder != null) {
            if (typeof object.adOrder !== "object")
                throw TypeError(".GetZhuanPanChouJiangAck.adOrder: object expected");
            message.adOrder = $root.AdOrderNot.fromObject(object.adOrder);
        }
        return message;
    };

    /**
     * Creates a plain object from a GetZhuanPanChouJiangAck message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetZhuanPanChouJiangAck
     * @static
     * @param {GetZhuanPanChouJiangAck} message GetZhuanPanChouJiangAck
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetZhuanPanChouJiangAck.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.AllItems = [];
        if (options.defaults) {
            object.errCode = 0;
            object.errMsg = "";
            object.hitIndex = 0;
            object.remainCount = 0;
            object.adOrder = null;
        }
        if (message.errCode != null && message.hasOwnProperty("errCode"))
            object.errCode = message.errCode;
        if (message.errMsg != null && message.hasOwnProperty("errMsg"))
            object.errMsg = message.errMsg;
        if (message.hitIndex != null && message.hasOwnProperty("hitIndex"))
            object.hitIndex = message.hitIndex;
        if (message.remainCount != null && message.hasOwnProperty("remainCount"))
            object.remainCount = message.remainCount;
        if (message.AllItems && message.AllItems.length) {
            object.AllItems = [];
            for (var j = 0; j < message.AllItems.length; ++j)
                object.AllItems[j] = $root.ZhuanPanItem.toObject(message.AllItems[j], options);
        }
        if (message.adOrder != null && message.hasOwnProperty("adOrder"))
            object.adOrder = $root.AdOrderNot.toObject(message.adOrder, options);
        return object;
    };

    /**
     * Converts this GetZhuanPanChouJiangAck to JSON.
     * @function toJSON
     * @memberof GetZhuanPanChouJiangAck
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetZhuanPanChouJiangAck.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetZhuanPanChouJiangAck;
})();

$root.GetZhuanPanChouJiangAwardReq = (function() {

    /**
     * Properties of a GetZhuanPanChouJiangAwardReq.
     * @exports IGetZhuanPanChouJiangAwardReq
     * @interface IGetZhuanPanChouJiangAwardReq
     * @property {number|Long|null} [uid] GetZhuanPanChouJiangAwardReq uid
     * @property {string|null} [service] GetZhuanPanChouJiangAwardReq service
     * @property {string|null} [orderId] GetZhuanPanChouJiangAwardReq orderId
     */

    /**
     * Constructs a new GetZhuanPanChouJiangAwardReq.
     * @exports GetZhuanPanChouJiangAwardReq
     * @classdesc Represents a GetZhuanPanChouJiangAwardReq.
     * @implements IGetZhuanPanChouJiangAwardReq
     * @constructor
     * @param {IGetZhuanPanChouJiangAwardReq=} [properties] Properties to set
     */
    function GetZhuanPanChouJiangAwardReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetZhuanPanChouJiangAwardReq uid.
     * @member {number|Long} uid
     * @memberof GetZhuanPanChouJiangAwardReq
     * @instance
     */
    GetZhuanPanChouJiangAwardReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * GetZhuanPanChouJiangAwardReq service.
     * @member {string} service
     * @memberof GetZhuanPanChouJiangAwardReq
     * @instance
     */
    GetZhuanPanChouJiangAwardReq.prototype.service = "";

    /**
     * GetZhuanPanChouJiangAwardReq orderId.
     * @member {string} orderId
     * @memberof GetZhuanPanChouJiangAwardReq
     * @instance
     */
    GetZhuanPanChouJiangAwardReq.prototype.orderId = "";

    /**
     * Creates a new GetZhuanPanChouJiangAwardReq instance using the specified properties.
     * @function create
     * @memberof GetZhuanPanChouJiangAwardReq
     * @static
     * @param {IGetZhuanPanChouJiangAwardReq=} [properties] Properties to set
     * @returns {GetZhuanPanChouJiangAwardReq} GetZhuanPanChouJiangAwardReq instance
     */
    GetZhuanPanChouJiangAwardReq.create = function create(properties) {
        return new GetZhuanPanChouJiangAwardReq(properties);
    };

    /**
     * Encodes the specified GetZhuanPanChouJiangAwardReq message. Does not implicitly {@link GetZhuanPanChouJiangAwardReq.verify|verify} messages.
     * @function encode
     * @memberof GetZhuanPanChouJiangAwardReq
     * @static
     * @param {IGetZhuanPanChouJiangAwardReq} message GetZhuanPanChouJiangAwardReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetZhuanPanChouJiangAwardReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uid != null && message.hasOwnProperty("uid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
        if (message.service != null && message.hasOwnProperty("service"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.service);
        if (message.orderId != null && message.hasOwnProperty("orderId"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.orderId);
        return writer;
    };

    /**
     * Encodes the specified GetZhuanPanChouJiangAwardReq message, length delimited. Does not implicitly {@link GetZhuanPanChouJiangAwardReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetZhuanPanChouJiangAwardReq
     * @static
     * @param {IGetZhuanPanChouJiangAwardReq} message GetZhuanPanChouJiangAwardReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetZhuanPanChouJiangAwardReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetZhuanPanChouJiangAwardReq message from the specified reader or buffer.
     * @function decode
     * @memberof GetZhuanPanChouJiangAwardReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetZhuanPanChouJiangAwardReq} GetZhuanPanChouJiangAwardReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetZhuanPanChouJiangAwardReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetZhuanPanChouJiangAwardReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.uid = reader.int64();
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
     * Decodes a GetZhuanPanChouJiangAwardReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetZhuanPanChouJiangAwardReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetZhuanPanChouJiangAwardReq} GetZhuanPanChouJiangAwardReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetZhuanPanChouJiangAwardReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetZhuanPanChouJiangAwardReq message.
     * @function verify
     * @memberof GetZhuanPanChouJiangAwardReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetZhuanPanChouJiangAwardReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                return "uid: integer|Long expected";
        if (message.service != null && message.hasOwnProperty("service"))
            if (!$util.isString(message.service))
                return "service: string expected";
        if (message.orderId != null && message.hasOwnProperty("orderId"))
            if (!$util.isString(message.orderId))
                return "orderId: string expected";
        return null;
    };

    /**
     * Creates a GetZhuanPanChouJiangAwardReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetZhuanPanChouJiangAwardReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetZhuanPanChouJiangAwardReq} GetZhuanPanChouJiangAwardReq
     */
    GetZhuanPanChouJiangAwardReq.fromObject = function fromObject(object) {
        if (object instanceof $root.GetZhuanPanChouJiangAwardReq)
            return object;
        var message = new $root.GetZhuanPanChouJiangAwardReq();
        if (object.uid != null)
            if ($util.Long)
                (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
            else if (typeof object.uid === "string")
                message.uid = parseInt(object.uid, 10);
            else if (typeof object.uid === "number")
                message.uid = object.uid;
            else if (typeof object.uid === "object")
                message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
        if (object.service != null)
            message.service = String(object.service);
        if (object.orderId != null)
            message.orderId = String(object.orderId);
        return message;
    };

    /**
     * Creates a plain object from a GetZhuanPanChouJiangAwardReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetZhuanPanChouJiangAwardReq
     * @static
     * @param {GetZhuanPanChouJiangAwardReq} message GetZhuanPanChouJiangAwardReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetZhuanPanChouJiangAwardReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.uid = options.longs === String ? "0" : 0;
            object.service = "";
            object.orderId = "";
        }
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (typeof message.uid === "number")
                object.uid = options.longs === String ? String(message.uid) : message.uid;
            else
                object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
        if (message.service != null && message.hasOwnProperty("service"))
            object.service = message.service;
        if (message.orderId != null && message.hasOwnProperty("orderId"))
            object.orderId = message.orderId;
        return object;
    };

    /**
     * Converts this GetZhuanPanChouJiangAwardReq to JSON.
     * @function toJSON
     * @memberof GetZhuanPanChouJiangAwardReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetZhuanPanChouJiangAwardReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetZhuanPanChouJiangAwardReq;
})();

$root.GetZhuanPanChouJiangAwardAck = (function() {

    /**
     * Properties of a GetZhuanPanChouJiangAwardAck.
     * @exports IGetZhuanPanChouJiangAwardAck
     * @interface IGetZhuanPanChouJiangAwardAck
     * @property {number|null} [errCode] GetZhuanPanChouJiangAwardAck errCode
     * @property {string|null} [errMsg] GetZhuanPanChouJiangAwardAck errMsg
     */

    /**
     * Constructs a new GetZhuanPanChouJiangAwardAck.
     * @exports GetZhuanPanChouJiangAwardAck
     * @classdesc Represents a GetZhuanPanChouJiangAwardAck.
     * @implements IGetZhuanPanChouJiangAwardAck
     * @constructor
     * @param {IGetZhuanPanChouJiangAwardAck=} [properties] Properties to set
     */
    function GetZhuanPanChouJiangAwardAck(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetZhuanPanChouJiangAwardAck errCode.
     * @member {number} errCode
     * @memberof GetZhuanPanChouJiangAwardAck
     * @instance
     */
    GetZhuanPanChouJiangAwardAck.prototype.errCode = 0;

    /**
     * GetZhuanPanChouJiangAwardAck errMsg.
     * @member {string} errMsg
     * @memberof GetZhuanPanChouJiangAwardAck
     * @instance
     */
    GetZhuanPanChouJiangAwardAck.prototype.errMsg = "";

    /**
     * Creates a new GetZhuanPanChouJiangAwardAck instance using the specified properties.
     * @function create
     * @memberof GetZhuanPanChouJiangAwardAck
     * @static
     * @param {IGetZhuanPanChouJiangAwardAck=} [properties] Properties to set
     * @returns {GetZhuanPanChouJiangAwardAck} GetZhuanPanChouJiangAwardAck instance
     */
    GetZhuanPanChouJiangAwardAck.create = function create(properties) {
        return new GetZhuanPanChouJiangAwardAck(properties);
    };

    /**
     * Encodes the specified GetZhuanPanChouJiangAwardAck message. Does not implicitly {@link GetZhuanPanChouJiangAwardAck.verify|verify} messages.
     * @function encode
     * @memberof GetZhuanPanChouJiangAwardAck
     * @static
     * @param {IGetZhuanPanChouJiangAwardAck} message GetZhuanPanChouJiangAwardAck message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetZhuanPanChouJiangAwardAck.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.errCode != null && message.hasOwnProperty("errCode"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
        if (message.errMsg != null && message.hasOwnProperty("errMsg"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
        return writer;
    };

    /**
     * Encodes the specified GetZhuanPanChouJiangAwardAck message, length delimited. Does not implicitly {@link GetZhuanPanChouJiangAwardAck.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetZhuanPanChouJiangAwardAck
     * @static
     * @param {IGetZhuanPanChouJiangAwardAck} message GetZhuanPanChouJiangAwardAck message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetZhuanPanChouJiangAwardAck.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetZhuanPanChouJiangAwardAck message from the specified reader or buffer.
     * @function decode
     * @memberof GetZhuanPanChouJiangAwardAck
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetZhuanPanChouJiangAwardAck} GetZhuanPanChouJiangAwardAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetZhuanPanChouJiangAwardAck.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetZhuanPanChouJiangAwardAck();
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
     * Decodes a GetZhuanPanChouJiangAwardAck message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetZhuanPanChouJiangAwardAck
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetZhuanPanChouJiangAwardAck} GetZhuanPanChouJiangAwardAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetZhuanPanChouJiangAwardAck.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetZhuanPanChouJiangAwardAck message.
     * @function verify
     * @memberof GetZhuanPanChouJiangAwardAck
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetZhuanPanChouJiangAwardAck.verify = function verify(message) {
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
     * Creates a GetZhuanPanChouJiangAwardAck message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetZhuanPanChouJiangAwardAck
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetZhuanPanChouJiangAwardAck} GetZhuanPanChouJiangAwardAck
     */
    GetZhuanPanChouJiangAwardAck.fromObject = function fromObject(object) {
        if (object instanceof $root.GetZhuanPanChouJiangAwardAck)
            return object;
        var message = new $root.GetZhuanPanChouJiangAwardAck();
        if (object.errCode != null)
            message.errCode = object.errCode | 0;
        if (object.errMsg != null)
            message.errMsg = String(object.errMsg);
        return message;
    };

    /**
     * Creates a plain object from a GetZhuanPanChouJiangAwardAck message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetZhuanPanChouJiangAwardAck
     * @static
     * @param {GetZhuanPanChouJiangAwardAck} message GetZhuanPanChouJiangAwardAck
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetZhuanPanChouJiangAwardAck.toObject = function toObject(message, options) {
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
     * Converts this GetZhuanPanChouJiangAwardAck to JSON.
     * @function toJSON
     * @memberof GetZhuanPanChouJiangAwardAck
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetZhuanPanChouJiangAwardAck.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetZhuanPanChouJiangAwardAck;
})();

$root.GetXinShouHaoLiReq = (function() {

    /**
     * Properties of a GetXinShouHaoLiReq.
     * @exports IGetXinShouHaoLiReq
     * @interface IGetXinShouHaoLiReq
     * @property {number|Long|null} [uid] GetXinShouHaoLiReq uid
     */

    /**
     * Constructs a new GetXinShouHaoLiReq.
     * @exports GetXinShouHaoLiReq
     * @classdesc Represents a GetXinShouHaoLiReq.
     * @implements IGetXinShouHaoLiReq
     * @constructor
     * @param {IGetXinShouHaoLiReq=} [properties] Properties to set
     */
    function GetXinShouHaoLiReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetXinShouHaoLiReq uid.
     * @member {number|Long} uid
     * @memberof GetXinShouHaoLiReq
     * @instance
     */
    GetXinShouHaoLiReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new GetXinShouHaoLiReq instance using the specified properties.
     * @function create
     * @memberof GetXinShouHaoLiReq
     * @static
     * @param {IGetXinShouHaoLiReq=} [properties] Properties to set
     * @returns {GetXinShouHaoLiReq} GetXinShouHaoLiReq instance
     */
    GetXinShouHaoLiReq.create = function create(properties) {
        return new GetXinShouHaoLiReq(properties);
    };

    /**
     * Encodes the specified GetXinShouHaoLiReq message. Does not implicitly {@link GetXinShouHaoLiReq.verify|verify} messages.
     * @function encode
     * @memberof GetXinShouHaoLiReq
     * @static
     * @param {IGetXinShouHaoLiReq} message GetXinShouHaoLiReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetXinShouHaoLiReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uid != null && message.hasOwnProperty("uid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
        return writer;
    };

    /**
     * Encodes the specified GetXinShouHaoLiReq message, length delimited. Does not implicitly {@link GetXinShouHaoLiReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetXinShouHaoLiReq
     * @static
     * @param {IGetXinShouHaoLiReq} message GetXinShouHaoLiReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetXinShouHaoLiReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetXinShouHaoLiReq message from the specified reader or buffer.
     * @function decode
     * @memberof GetXinShouHaoLiReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetXinShouHaoLiReq} GetXinShouHaoLiReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetXinShouHaoLiReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetXinShouHaoLiReq();
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
     * Decodes a GetXinShouHaoLiReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetXinShouHaoLiReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetXinShouHaoLiReq} GetXinShouHaoLiReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetXinShouHaoLiReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetXinShouHaoLiReq message.
     * @function verify
     * @memberof GetXinShouHaoLiReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetXinShouHaoLiReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                return "uid: integer|Long expected";
        return null;
    };

    /**
     * Creates a GetXinShouHaoLiReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetXinShouHaoLiReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetXinShouHaoLiReq} GetXinShouHaoLiReq
     */
    GetXinShouHaoLiReq.fromObject = function fromObject(object) {
        if (object instanceof $root.GetXinShouHaoLiReq)
            return object;
        var message = new $root.GetXinShouHaoLiReq();
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
     * Creates a plain object from a GetXinShouHaoLiReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetXinShouHaoLiReq
     * @static
     * @param {GetXinShouHaoLiReq} message GetXinShouHaoLiReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetXinShouHaoLiReq.toObject = function toObject(message, options) {
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
     * Converts this GetXinShouHaoLiReq to JSON.
     * @function toJSON
     * @memberof GetXinShouHaoLiReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetXinShouHaoLiReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetXinShouHaoLiReq;
})();

$root.GetXinShouHaoLiAck = (function() {

    /**
     * Properties of a GetXinShouHaoLiAck.
     * @exports IGetXinShouHaoLiAck
     * @interface IGetXinShouHaoLiAck
     * @property {number|null} [errCode] GetXinShouHaoLiAck errCode
     * @property {string|null} [errMsg] GetXinShouHaoLiAck errMsg
     * @property {IAdOrderNot|null} [adOrder] GetXinShouHaoLiAck adOrder
     */

    /**
     * Constructs a new GetXinShouHaoLiAck.
     * @exports GetXinShouHaoLiAck
     * @classdesc Represents a GetXinShouHaoLiAck.
     * @implements IGetXinShouHaoLiAck
     * @constructor
     * @param {IGetXinShouHaoLiAck=} [properties] Properties to set
     */
    function GetXinShouHaoLiAck(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetXinShouHaoLiAck errCode.
     * @member {number} errCode
     * @memberof GetXinShouHaoLiAck
     * @instance
     */
    GetXinShouHaoLiAck.prototype.errCode = 0;

    /**
     * GetXinShouHaoLiAck errMsg.
     * @member {string} errMsg
     * @memberof GetXinShouHaoLiAck
     * @instance
     */
    GetXinShouHaoLiAck.prototype.errMsg = "";

    /**
     * GetXinShouHaoLiAck adOrder.
     * @member {IAdOrderNot|null|undefined} adOrder
     * @memberof GetXinShouHaoLiAck
     * @instance
     */
    GetXinShouHaoLiAck.prototype.adOrder = null;

    /**
     * Creates a new GetXinShouHaoLiAck instance using the specified properties.
     * @function create
     * @memberof GetXinShouHaoLiAck
     * @static
     * @param {IGetXinShouHaoLiAck=} [properties] Properties to set
     * @returns {GetXinShouHaoLiAck} GetXinShouHaoLiAck instance
     */
    GetXinShouHaoLiAck.create = function create(properties) {
        return new GetXinShouHaoLiAck(properties);
    };

    /**
     * Encodes the specified GetXinShouHaoLiAck message. Does not implicitly {@link GetXinShouHaoLiAck.verify|verify} messages.
     * @function encode
     * @memberof GetXinShouHaoLiAck
     * @static
     * @param {IGetXinShouHaoLiAck} message GetXinShouHaoLiAck message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetXinShouHaoLiAck.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.errCode != null && message.hasOwnProperty("errCode"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
        if (message.errMsg != null && message.hasOwnProperty("errMsg"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
        if (message.adOrder != null && message.hasOwnProperty("adOrder"))
            $root.AdOrderNot.encode(message.adOrder, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GetXinShouHaoLiAck message, length delimited. Does not implicitly {@link GetXinShouHaoLiAck.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetXinShouHaoLiAck
     * @static
     * @param {IGetXinShouHaoLiAck} message GetXinShouHaoLiAck message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetXinShouHaoLiAck.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetXinShouHaoLiAck message from the specified reader or buffer.
     * @function decode
     * @memberof GetXinShouHaoLiAck
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetXinShouHaoLiAck} GetXinShouHaoLiAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetXinShouHaoLiAck.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetXinShouHaoLiAck();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.errCode = reader.int32();
                break;
            case 2:
                message.errMsg = reader.string();
                break;
            case 4:
                message.adOrder = $root.AdOrderNot.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GetXinShouHaoLiAck message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetXinShouHaoLiAck
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetXinShouHaoLiAck} GetXinShouHaoLiAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetXinShouHaoLiAck.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetXinShouHaoLiAck message.
     * @function verify
     * @memberof GetXinShouHaoLiAck
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetXinShouHaoLiAck.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.errCode != null && message.hasOwnProperty("errCode"))
            if (!$util.isInteger(message.errCode))
                return "errCode: integer expected";
        if (message.errMsg != null && message.hasOwnProperty("errMsg"))
            if (!$util.isString(message.errMsg))
                return "errMsg: string expected";
        if (message.adOrder != null && message.hasOwnProperty("adOrder")) {
            var error = $root.AdOrderNot.verify(message.adOrder);
            if (error)
                return "adOrder." + error;
        }
        return null;
    };

    /**
     * Creates a GetXinShouHaoLiAck message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetXinShouHaoLiAck
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetXinShouHaoLiAck} GetXinShouHaoLiAck
     */
    GetXinShouHaoLiAck.fromObject = function fromObject(object) {
        if (object instanceof $root.GetXinShouHaoLiAck)
            return object;
        var message = new $root.GetXinShouHaoLiAck();
        if (object.errCode != null)
            message.errCode = object.errCode | 0;
        if (object.errMsg != null)
            message.errMsg = String(object.errMsg);
        if (object.adOrder != null) {
            if (typeof object.adOrder !== "object")
                throw TypeError(".GetXinShouHaoLiAck.adOrder: object expected");
            message.adOrder = $root.AdOrderNot.fromObject(object.adOrder);
        }
        return message;
    };

    /**
     * Creates a plain object from a GetXinShouHaoLiAck message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetXinShouHaoLiAck
     * @static
     * @param {GetXinShouHaoLiAck} message GetXinShouHaoLiAck
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetXinShouHaoLiAck.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.errCode = 0;
            object.errMsg = "";
            object.adOrder = null;
        }
        if (message.errCode != null && message.hasOwnProperty("errCode"))
            object.errCode = message.errCode;
        if (message.errMsg != null && message.hasOwnProperty("errMsg"))
            object.errMsg = message.errMsg;
        if (message.adOrder != null && message.hasOwnProperty("adOrder"))
            object.adOrder = $root.AdOrderNot.toObject(message.adOrder, options);
        return object;
    };

    /**
     * Converts this GetXinShouHaoLiAck to JSON.
     * @function toJSON
     * @memberof GetXinShouHaoLiAck
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetXinShouHaoLiAck.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetXinShouHaoLiAck;
})();

$root.AwardConfig = (function() {

    /**
     * Properties of an AwardConfig.
     * @exports IAwardConfig
     * @interface IAwardConfig
     * @property {number|null} [index] AwardConfig index
     * @property {number|null} [minNum] AwardConfig minNum
     * @property {number|null} [maxNum] AwardConfig maxNum
     */

    /**
     * Constructs a new AwardConfig.
     * @exports AwardConfig
     * @classdesc Represents an AwardConfig.
     * @implements IAwardConfig
     * @constructor
     * @param {IAwardConfig=} [properties] Properties to set
     */
    function AwardConfig(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AwardConfig index.
     * @member {number} index
     * @memberof AwardConfig
     * @instance
     */
    AwardConfig.prototype.index = 0;

    /**
     * AwardConfig minNum.
     * @member {number} minNum
     * @memberof AwardConfig
     * @instance
     */
    AwardConfig.prototype.minNum = 0;

    /**
     * AwardConfig maxNum.
     * @member {number} maxNum
     * @memberof AwardConfig
     * @instance
     */
    AwardConfig.prototype.maxNum = 0;

    /**
     * Creates a new AwardConfig instance using the specified properties.
     * @function create
     * @memberof AwardConfig
     * @static
     * @param {IAwardConfig=} [properties] Properties to set
     * @returns {AwardConfig} AwardConfig instance
     */
    AwardConfig.create = function create(properties) {
        return new AwardConfig(properties);
    };

    /**
     * Encodes the specified AwardConfig message. Does not implicitly {@link AwardConfig.verify|verify} messages.
     * @function encode
     * @memberof AwardConfig
     * @static
     * @param {IAwardConfig} message AwardConfig message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AwardConfig.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.index != null && message.hasOwnProperty("index"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.index);
        if (message.minNum != null && message.hasOwnProperty("minNum"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.minNum);
        if (message.maxNum != null && message.hasOwnProperty("maxNum"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.maxNum);
        return writer;
    };

    /**
     * Encodes the specified AwardConfig message, length delimited. Does not implicitly {@link AwardConfig.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AwardConfig
     * @static
     * @param {IAwardConfig} message AwardConfig message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AwardConfig.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AwardConfig message from the specified reader or buffer.
     * @function decode
     * @memberof AwardConfig
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AwardConfig} AwardConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AwardConfig.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AwardConfig();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.index = reader.int32();
                break;
            case 2:
                message.minNum = reader.int32();
                break;
            case 3:
                message.maxNum = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AwardConfig message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AwardConfig
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AwardConfig} AwardConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AwardConfig.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AwardConfig message.
     * @function verify
     * @memberof AwardConfig
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AwardConfig.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.index != null && message.hasOwnProperty("index"))
            if (!$util.isInteger(message.index))
                return "index: integer expected";
        if (message.minNum != null && message.hasOwnProperty("minNum"))
            if (!$util.isInteger(message.minNum))
                return "minNum: integer expected";
        if (message.maxNum != null && message.hasOwnProperty("maxNum"))
            if (!$util.isInteger(message.maxNum))
                return "maxNum: integer expected";
        return null;
    };

    /**
     * Creates an AwardConfig message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AwardConfig
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AwardConfig} AwardConfig
     */
    AwardConfig.fromObject = function fromObject(object) {
        if (object instanceof $root.AwardConfig)
            return object;
        var message = new $root.AwardConfig();
        if (object.index != null)
            message.index = object.index | 0;
        if (object.minNum != null)
            message.minNum = object.minNum | 0;
        if (object.maxNum != null)
            message.maxNum = object.maxNum | 0;
        return message;
    };

    /**
     * Creates a plain object from an AwardConfig message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AwardConfig
     * @static
     * @param {AwardConfig} message AwardConfig
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AwardConfig.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.index = 0;
            object.minNum = 0;
            object.maxNum = 0;
        }
        if (message.index != null && message.hasOwnProperty("index"))
            object.index = message.index;
        if (message.minNum != null && message.hasOwnProperty("minNum"))
            object.minNum = message.minNum;
        if (message.maxNum != null && message.hasOwnProperty("maxNum"))
            object.maxNum = message.maxNum;
        return object;
    };

    /**
     * Converts this AwardConfig to JSON.
     * @function toJSON
     * @memberof AwardConfig
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AwardConfig.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AwardConfig;
})();

$root.IdItem = (function() {

    /**
     * Properties of an IdItem.
     * @exports IIdItem
     * @interface IIdItem
     * @property {number|null} [channel] IdItem channel
     * @property {string|null} [id] IdItem id
     * @property {number|null} [percentage] IdItem percentage
     */

    /**
     * Constructs a new IdItem.
     * @exports IdItem
     * @classdesc Represents an IdItem.
     * @implements IIdItem
     * @constructor
     * @param {IIdItem=} [properties] Properties to set
     */
    function IdItem(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * IdItem channel.
     * @member {number} channel
     * @memberof IdItem
     * @instance
     */
    IdItem.prototype.channel = 0;

    /**
     * IdItem id.
     * @member {string} id
     * @memberof IdItem
     * @instance
     */
    IdItem.prototype.id = "";

    /**
     * IdItem percentage.
     * @member {number} percentage
     * @memberof IdItem
     * @instance
     */
    IdItem.prototype.percentage = 0;

    /**
     * Creates a new IdItem instance using the specified properties.
     * @function create
     * @memberof IdItem
     * @static
     * @param {IIdItem=} [properties] Properties to set
     * @returns {IdItem} IdItem instance
     */
    IdItem.create = function create(properties) {
        return new IdItem(properties);
    };

    /**
     * Encodes the specified IdItem message. Does not implicitly {@link IdItem.verify|verify} messages.
     * @function encode
     * @memberof IdItem
     * @static
     * @param {IIdItem} message IdItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IdItem.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.channel != null && message.hasOwnProperty("channel"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.channel);
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.id);
        if (message.percentage != null && message.hasOwnProperty("percentage"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.percentage);
        return writer;
    };

    /**
     * Encodes the specified IdItem message, length delimited. Does not implicitly {@link IdItem.verify|verify} messages.
     * @function encodeDelimited
     * @memberof IdItem
     * @static
     * @param {IIdItem} message IdItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IdItem.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an IdItem message from the specified reader or buffer.
     * @function decode
     * @memberof IdItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {IdItem} IdItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IdItem.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IdItem();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.channel = reader.int32();
                break;
            case 2:
                message.id = reader.string();
                break;
            case 3:
                message.percentage = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an IdItem message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof IdItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {IdItem} IdItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IdItem.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an IdItem message.
     * @function verify
     * @memberof IdItem
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    IdItem.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.channel != null && message.hasOwnProperty("channel"))
            if (!$util.isInteger(message.channel))
                return "channel: integer expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.percentage != null && message.hasOwnProperty("percentage"))
            if (!$util.isInteger(message.percentage))
                return "percentage: integer expected";
        return null;
    };

    /**
     * Creates an IdItem message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof IdItem
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {IdItem} IdItem
     */
    IdItem.fromObject = function fromObject(object) {
        if (object instanceof $root.IdItem)
            return object;
        var message = new $root.IdItem();
        if (object.channel != null)
            message.channel = object.channel | 0;
        if (object.id != null)
            message.id = String(object.id);
        if (object.percentage != null)
            message.percentage = object.percentage | 0;
        return message;
    };

    /**
     * Creates a plain object from an IdItem message. Also converts values to other types if specified.
     * @function toObject
     * @memberof IdItem
     * @static
     * @param {IdItem} message IdItem
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    IdItem.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.channel = 0;
            object.id = "";
            object.percentage = 0;
        }
        if (message.channel != null && message.hasOwnProperty("channel"))
            object.channel = message.channel;
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.percentage != null && message.hasOwnProperty("percentage"))
            object.percentage = message.percentage;
        return object;
    };

    /**
     * Converts this IdItem to JSON.
     * @function toJSON
     * @memberof IdItem
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    IdItem.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return IdItem;
})();

$root.Record = (function() {

    /**
     * Properties of a Record.
     * @exports IRecord
     * @interface IRecord
     * @property {number|null} [area] Record area
     * @property {number|null} [type] Record type
     * @property {number|null} [curNum] Record curNum
     * @property {number|null} [maxNum] Record maxNum
     * @property {Array.<IAwardConfig>|null} [awards] Record awards
     * @property {string|null} [desc] Record desc
     * @property {Array.<IIdItem>|null} [ids] Record ids
     */

    /**
     * Constructs a new Record.
     * @exports Record
     * @classdesc Represents a Record.
     * @implements IRecord
     * @constructor
     * @param {IRecord=} [properties] Properties to set
     */
    function Record(properties) {
        this.awards = [];
        this.ids = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Record area.
     * @member {number} area
     * @memberof Record
     * @instance
     */
    Record.prototype.area = 0;

    /**
     * Record type.
     * @member {number} type
     * @memberof Record
     * @instance
     */
    Record.prototype.type = 0;

    /**
     * Record curNum.
     * @member {number} curNum
     * @memberof Record
     * @instance
     */
    Record.prototype.curNum = 0;

    /**
     * Record maxNum.
     * @member {number} maxNum
     * @memberof Record
     * @instance
     */
    Record.prototype.maxNum = 0;

    /**
     * Record awards.
     * @member {Array.<IAwardConfig>} awards
     * @memberof Record
     * @instance
     */
    Record.prototype.awards = $util.emptyArray;

    /**
     * Record desc.
     * @member {string} desc
     * @memberof Record
     * @instance
     */
    Record.prototype.desc = "";

    /**
     * Record ids.
     * @member {Array.<IIdItem>} ids
     * @memberof Record
     * @instance
     */
    Record.prototype.ids = $util.emptyArray;

    /**
     * Creates a new Record instance using the specified properties.
     * @function create
     * @memberof Record
     * @static
     * @param {IRecord=} [properties] Properties to set
     * @returns {Record} Record instance
     */
    Record.create = function create(properties) {
        return new Record(properties);
    };

    /**
     * Encodes the specified Record message. Does not implicitly {@link Record.verify|verify} messages.
     * @function encode
     * @memberof Record
     * @static
     * @param {IRecord} message Record message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Record.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.area != null && message.hasOwnProperty("area"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.area);
        if (message.type != null && message.hasOwnProperty("type"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
        if (message.curNum != null && message.hasOwnProperty("curNum"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.curNum);
        if (message.maxNum != null && message.hasOwnProperty("maxNum"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.maxNum);
        if (message.awards != null && message.awards.length)
            for (var i = 0; i < message.awards.length; ++i)
                $root.AwardConfig.encode(message.awards[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.desc != null && message.hasOwnProperty("desc"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.desc);
        if (message.ids != null && message.ids.length)
            for (var i = 0; i < message.ids.length; ++i)
                $root.IdItem.encode(message.ids[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Record message, length delimited. Does not implicitly {@link Record.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Record
     * @static
     * @param {IRecord} message Record message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Record.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Record message from the specified reader or buffer.
     * @function decode
     * @memberof Record
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Record} Record
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Record.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Record();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.area = reader.int32();
                break;
            case 2:
                message.type = reader.int32();
                break;
            case 3:
                message.curNum = reader.int32();
                break;
            case 4:
                message.maxNum = reader.int32();
                break;
            case 5:
                if (!(message.awards && message.awards.length))
                    message.awards = [];
                message.awards.push($root.AwardConfig.decode(reader, reader.uint32()));
                break;
            case 6:
                message.desc = reader.string();
                break;
            case 7:
                if (!(message.ids && message.ids.length))
                    message.ids = [];
                message.ids.push($root.IdItem.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Record message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Record
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Record} Record
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Record.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Record message.
     * @function verify
     * @memberof Record
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Record.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.area != null && message.hasOwnProperty("area"))
            if (!$util.isInteger(message.area))
                return "area: integer expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isInteger(message.type))
                return "type: integer expected";
        if (message.curNum != null && message.hasOwnProperty("curNum"))
            if (!$util.isInteger(message.curNum))
                return "curNum: integer expected";
        if (message.maxNum != null && message.hasOwnProperty("maxNum"))
            if (!$util.isInteger(message.maxNum))
                return "maxNum: integer expected";
        if (message.awards != null && message.hasOwnProperty("awards")) {
            if (!Array.isArray(message.awards))
                return "awards: array expected";
            for (var i = 0; i < message.awards.length; ++i) {
                var error = $root.AwardConfig.verify(message.awards[i]);
                if (error)
                    return "awards." + error;
            }
        }
        if (message.desc != null && message.hasOwnProperty("desc"))
            if (!$util.isString(message.desc))
                return "desc: string expected";
        if (message.ids != null && message.hasOwnProperty("ids")) {
            if (!Array.isArray(message.ids))
                return "ids: array expected";
            for (var i = 0; i < message.ids.length; ++i) {
                var error = $root.IdItem.verify(message.ids[i]);
                if (error)
                    return "ids." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Record message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Record
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Record} Record
     */
    Record.fromObject = function fromObject(object) {
        if (object instanceof $root.Record)
            return object;
        var message = new $root.Record();
        if (object.area != null)
            message.area = object.area | 0;
        if (object.type != null)
            message.type = object.type | 0;
        if (object.curNum != null)
            message.curNum = object.curNum | 0;
        if (object.maxNum != null)
            message.maxNum = object.maxNum | 0;
        if (object.awards) {
            if (!Array.isArray(object.awards))
                throw TypeError(".Record.awards: array expected");
            message.awards = [];
            for (var i = 0; i < object.awards.length; ++i) {
                if (typeof object.awards[i] !== "object")
                    throw TypeError(".Record.awards: object expected");
                message.awards[i] = $root.AwardConfig.fromObject(object.awards[i]);
            }
        }
        if (object.desc != null)
            message.desc = String(object.desc);
        if (object.ids) {
            if (!Array.isArray(object.ids))
                throw TypeError(".Record.ids: array expected");
            message.ids = [];
            for (var i = 0; i < object.ids.length; ++i) {
                if (typeof object.ids[i] !== "object")
                    throw TypeError(".Record.ids: object expected");
                message.ids[i] = $root.IdItem.fromObject(object.ids[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a Record message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Record
     * @static
     * @param {Record} message Record
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Record.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.awards = [];
            object.ids = [];
        }
        if (options.defaults) {
            object.area = 0;
            object.type = 0;
            object.curNum = 0;
            object.maxNum = 0;
            object.desc = "";
        }
        if (message.area != null && message.hasOwnProperty("area"))
            object.area = message.area;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.curNum != null && message.hasOwnProperty("curNum"))
            object.curNum = message.curNum;
        if (message.maxNum != null && message.hasOwnProperty("maxNum"))
            object.maxNum = message.maxNum;
        if (message.awards && message.awards.length) {
            object.awards = [];
            for (var j = 0; j < message.awards.length; ++j)
                object.awards[j] = $root.AwardConfig.toObject(message.awards[j], options);
        }
        if (message.desc != null && message.hasOwnProperty("desc"))
            object.desc = message.desc;
        if (message.ids && message.ids.length) {
            object.ids = [];
            for (var j = 0; j < message.ids.length; ++j)
                object.ids[j] = $root.IdItem.toObject(message.ids[j], options);
        }
        return object;
    };

    /**
     * Converts this Record to JSON.
     * @function toJSON
     * @memberof Record
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Record.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Record;
})();

$root.GetAdSpotsReq = (function() {

    /**
     * Properties of a GetAdSpotsReq.
     * @exports IGetAdSpotsReq
     * @interface IGetAdSpotsReq
     * @property {number|Long|null} [uid] GetAdSpotsReq uid
     */

    /**
     * Constructs a new GetAdSpotsReq.
     * @exports GetAdSpotsReq
     * @classdesc Represents a GetAdSpotsReq.
     * @implements IGetAdSpotsReq
     * @constructor
     * @param {IGetAdSpotsReq=} [properties] Properties to set
     */
    function GetAdSpotsReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetAdSpotsReq uid.
     * @member {number|Long} uid
     * @memberof GetAdSpotsReq
     * @instance
     */
    GetAdSpotsReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new GetAdSpotsReq instance using the specified properties.
     * @function create
     * @memberof GetAdSpotsReq
     * @static
     * @param {IGetAdSpotsReq=} [properties] Properties to set
     * @returns {GetAdSpotsReq} GetAdSpotsReq instance
     */
    GetAdSpotsReq.create = function create(properties) {
        return new GetAdSpotsReq(properties);
    };

    /**
     * Encodes the specified GetAdSpotsReq message. Does not implicitly {@link GetAdSpotsReq.verify|verify} messages.
     * @function encode
     * @memberof GetAdSpotsReq
     * @static
     * @param {IGetAdSpotsReq} message GetAdSpotsReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetAdSpotsReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uid != null && message.hasOwnProperty("uid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
        return writer;
    };

    /**
     * Encodes the specified GetAdSpotsReq message, length delimited. Does not implicitly {@link GetAdSpotsReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetAdSpotsReq
     * @static
     * @param {IGetAdSpotsReq} message GetAdSpotsReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetAdSpotsReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetAdSpotsReq message from the specified reader or buffer.
     * @function decode
     * @memberof GetAdSpotsReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetAdSpotsReq} GetAdSpotsReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetAdSpotsReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetAdSpotsReq();
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
     * Decodes a GetAdSpotsReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetAdSpotsReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetAdSpotsReq} GetAdSpotsReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetAdSpotsReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetAdSpotsReq message.
     * @function verify
     * @memberof GetAdSpotsReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetAdSpotsReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                return "uid: integer|Long expected";
        return null;
    };

    /**
     * Creates a GetAdSpotsReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetAdSpotsReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetAdSpotsReq} GetAdSpotsReq
     */
    GetAdSpotsReq.fromObject = function fromObject(object) {
        if (object instanceof $root.GetAdSpotsReq)
            return object;
        var message = new $root.GetAdSpotsReq();
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
     * Creates a plain object from a GetAdSpotsReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetAdSpotsReq
     * @static
     * @param {GetAdSpotsReq} message GetAdSpotsReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetAdSpotsReq.toObject = function toObject(message, options) {
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
     * Converts this GetAdSpotsReq to JSON.
     * @function toJSON
     * @memberof GetAdSpotsReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetAdSpotsReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetAdSpotsReq;
})();

$root.GetAdSpotsAck = (function() {

    /**
     * Properties of a GetAdSpotsAck.
     * @exports IGetAdSpotsAck
     * @interface IGetAdSpotsAck
     * @property {number|null} [errCode] GetAdSpotsAck errCode
     * @property {string|null} [errMsg] GetAdSpotsAck errMsg
     * @property {Array.<IRecord>|null} [records] GetAdSpotsAck records
     */

    /**
     * Constructs a new GetAdSpotsAck.
     * @exports GetAdSpotsAck
     * @classdesc Represents a GetAdSpotsAck.
     * @implements IGetAdSpotsAck
     * @constructor
     * @param {IGetAdSpotsAck=} [properties] Properties to set
     */
    function GetAdSpotsAck(properties) {
        this.records = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetAdSpotsAck errCode.
     * @member {number} errCode
     * @memberof GetAdSpotsAck
     * @instance
     */
    GetAdSpotsAck.prototype.errCode = 0;

    /**
     * GetAdSpotsAck errMsg.
     * @member {string} errMsg
     * @memberof GetAdSpotsAck
     * @instance
     */
    GetAdSpotsAck.prototype.errMsg = "";

    /**
     * GetAdSpotsAck records.
     * @member {Array.<IRecord>} records
     * @memberof GetAdSpotsAck
     * @instance
     */
    GetAdSpotsAck.prototype.records = $util.emptyArray;

    /**
     * Creates a new GetAdSpotsAck instance using the specified properties.
     * @function create
     * @memberof GetAdSpotsAck
     * @static
     * @param {IGetAdSpotsAck=} [properties] Properties to set
     * @returns {GetAdSpotsAck} GetAdSpotsAck instance
     */
    GetAdSpotsAck.create = function create(properties) {
        return new GetAdSpotsAck(properties);
    };

    /**
     * Encodes the specified GetAdSpotsAck message. Does not implicitly {@link GetAdSpotsAck.verify|verify} messages.
     * @function encode
     * @memberof GetAdSpotsAck
     * @static
     * @param {IGetAdSpotsAck} message GetAdSpotsAck message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetAdSpotsAck.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.errCode != null && message.hasOwnProperty("errCode"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
        if (message.errMsg != null && message.hasOwnProperty("errMsg"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
        if (message.records != null && message.records.length)
            for (var i = 0; i < message.records.length; ++i)
                $root.Record.encode(message.records[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GetAdSpotsAck message, length delimited. Does not implicitly {@link GetAdSpotsAck.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetAdSpotsAck
     * @static
     * @param {IGetAdSpotsAck} message GetAdSpotsAck message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetAdSpotsAck.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetAdSpotsAck message from the specified reader or buffer.
     * @function decode
     * @memberof GetAdSpotsAck
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetAdSpotsAck} GetAdSpotsAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetAdSpotsAck.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetAdSpotsAck();
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
                if (!(message.records && message.records.length))
                    message.records = [];
                message.records.push($root.Record.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GetAdSpotsAck message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetAdSpotsAck
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetAdSpotsAck} GetAdSpotsAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetAdSpotsAck.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetAdSpotsAck message.
     * @function verify
     * @memberof GetAdSpotsAck
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetAdSpotsAck.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.errCode != null && message.hasOwnProperty("errCode"))
            if (!$util.isInteger(message.errCode))
                return "errCode: integer expected";
        if (message.errMsg != null && message.hasOwnProperty("errMsg"))
            if (!$util.isString(message.errMsg))
                return "errMsg: string expected";
        if (message.records != null && message.hasOwnProperty("records")) {
            if (!Array.isArray(message.records))
                return "records: array expected";
            for (var i = 0; i < message.records.length; ++i) {
                var error = $root.Record.verify(message.records[i]);
                if (error)
                    return "records." + error;
            }
        }
        return null;
    };

    /**
     * Creates a GetAdSpotsAck message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetAdSpotsAck
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetAdSpotsAck} GetAdSpotsAck
     */
    GetAdSpotsAck.fromObject = function fromObject(object) {
        if (object instanceof $root.GetAdSpotsAck)
            return object;
        var message = new $root.GetAdSpotsAck();
        if (object.errCode != null)
            message.errCode = object.errCode | 0;
        if (object.errMsg != null)
            message.errMsg = String(object.errMsg);
        if (object.records) {
            if (!Array.isArray(object.records))
                throw TypeError(".GetAdSpotsAck.records: array expected");
            message.records = [];
            for (var i = 0; i < object.records.length; ++i) {
                if (typeof object.records[i] !== "object")
                    throw TypeError(".GetAdSpotsAck.records: object expected");
                message.records[i] = $root.Record.fromObject(object.records[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a GetAdSpotsAck message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetAdSpotsAck
     * @static
     * @param {GetAdSpotsAck} message GetAdSpotsAck
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetAdSpotsAck.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.records = [];
        if (options.defaults) {
            object.errCode = 0;
            object.errMsg = "";
        }
        if (message.errCode != null && message.hasOwnProperty("errCode"))
            object.errCode = message.errCode;
        if (message.errMsg != null && message.hasOwnProperty("errMsg"))
            object.errMsg = message.errMsg;
        if (message.records && message.records.length) {
            object.records = [];
            for (var j = 0; j < message.records.length; ++j)
                object.records[j] = $root.Record.toObject(message.records[j], options);
        }
        return object;
    };

    /**
     * Converts this GetAdSpotsAck to JSON.
     * @function toJSON
     * @memberof GetAdSpotsAck
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetAdSpotsAck.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetAdSpotsAck;
})();

module.exports = $root;
