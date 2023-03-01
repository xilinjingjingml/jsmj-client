/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.shop = (function() {

    /**
     * Namespace shop.
     * @exports shop
     * @namespace
     */
    var shop = {};

    shop.Shop = (function() {

        /**
         * Constructs a new Shop service.
         * @memberof shop
         * @classdesc Represents a Shop
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Shop(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Shop.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Shop;

        /**
         * Creates new Shop service using the specified rpc implementation.
         * @function create
         * @memberof shop.Shop
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Shop} RPC service. Useful where requests and/or responses are streamed.
         */
        Shop.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link shop.Shop#getConfig}.
         * @memberof shop.Shop
         * @typedef GetConfigCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {shop.GetConfigRsp} [response] GetConfigRsp
         */

        /**
         * Calls GetConfig.
         * @function getConfig
         * @memberof shop.Shop
         * @instance
         * @param {shop.IGetConfigReq} request GetConfigReq message or plain object
         * @param {shop.Shop.GetConfigCallback} callback Node-style callback called with the error, if any, and GetConfigRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Shop.prototype.getConfig = function getConfig(request, callback) {
            return this.rpcCall(getConfig, $root.shop.GetConfigReq, $root.shop.GetConfigRsp, request, callback);
        }, "name", { value: "GetConfig" });

        /**
         * Calls GetConfig.
         * @function getConfig
         * @memberof shop.Shop
         * @instance
         * @param {shop.IGetConfigReq} request GetConfigReq message or plain object
         * @returns {Promise<shop.GetConfigRsp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link shop.Shop#exchangeBox}.
         * @memberof shop.Shop
         * @typedef ExchangeBoxCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {shop.ExchangeBoxRsp} [response] ExchangeBoxRsp
         */

        /**
         * Calls ExchangeBox.
         * @function exchangeBox
         * @memberof shop.Shop
         * @instance
         * @param {shop.IExchangeBoxReq} request ExchangeBoxReq message or plain object
         * @param {shop.Shop.ExchangeBoxCallback} callback Node-style callback called with the error, if any, and ExchangeBoxRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Shop.prototype.exchangeBox = function exchangeBox(request, callback) {
            return this.rpcCall(exchangeBox, $root.shop.ExchangeBoxReq, $root.shop.ExchangeBoxRsp, request, callback);
        }, "name", { value: "ExchangeBox" });

        /**
         * Calls ExchangeBox.
         * @function exchangeBox
         * @memberof shop.Shop
         * @instance
         * @param {shop.IExchangeBoxReq} request ExchangeBoxReq message or plain object
         * @returns {Promise<shop.ExchangeBoxRsp>} Promise
         * @variation 2
         */

        return Shop;
    })();

    shop.StateCode = (function() {

        /**
         * Properties of a StateCode.
         * @memberof shop
         * @interface IStateCode
         * @property {number|null} [id] StateCode id
         * @property {string|null} [msg] StateCode msg
         */

        /**
         * Constructs a new StateCode.
         * @memberof shop
         * @classdesc Represents a StateCode.
         * @implements IStateCode
         * @constructor
         * @param {shop.IStateCode=} [properties] Properties to set
         */
        function StateCode(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StateCode id.
         * @member {number} id
         * @memberof shop.StateCode
         * @instance
         */
        StateCode.prototype.id = 0;

        /**
         * StateCode msg.
         * @member {string} msg
         * @memberof shop.StateCode
         * @instance
         */
        StateCode.prototype.msg = "";

        /**
         * Creates a new StateCode instance using the specified properties.
         * @function create
         * @memberof shop.StateCode
         * @static
         * @param {shop.IStateCode=} [properties] Properties to set
         * @returns {shop.StateCode} StateCode instance
         */
        StateCode.create = function create(properties) {
            return new StateCode(properties);
        };

        /**
         * Encodes the specified StateCode message. Does not implicitly {@link shop.StateCode.verify|verify} messages.
         * @function encode
         * @memberof shop.StateCode
         * @static
         * @param {shop.IStateCode} message StateCode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StateCode.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.msg != null && message.hasOwnProperty("msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified StateCode message, length delimited. Does not implicitly {@link shop.StateCode.verify|verify} messages.
         * @function encodeDelimited
         * @memberof shop.StateCode
         * @static
         * @param {shop.IStateCode} message StateCode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StateCode.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StateCode message from the specified reader or buffer.
         * @function decode
         * @memberof shop.StateCode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {shop.StateCode} StateCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StateCode.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.shop.StateCode();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.msg = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StateCode message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof shop.StateCode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {shop.StateCode} StateCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StateCode.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StateCode message.
         * @function verify
         * @memberof shop.StateCode
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StateCode.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates a StateCode message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof shop.StateCode
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {shop.StateCode} StateCode
         */
        StateCode.fromObject = function fromObject(object) {
            if (object instanceof $root.shop.StateCode)
                return object;
            var message = new $root.shop.StateCode();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a StateCode message. Also converts values to other types if specified.
         * @function toObject
         * @memberof shop.StateCode
         * @static
         * @param {shop.StateCode} message StateCode
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StateCode.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.msg = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this StateCode to JSON.
         * @function toJSON
         * @memberof shop.StateCode
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StateCode.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StateCode;
    })();

    shop.GetConfigReq = (function() {

        /**
         * Properties of a GetConfigReq.
         * @memberof shop
         * @interface IGetConfigReq
         * @property {number|Long|null} [uid] GetConfigReq uid
         */

        /**
         * Constructs a new GetConfigReq.
         * @memberof shop
         * @classdesc Represents a GetConfigReq.
         * @implements IGetConfigReq
         * @constructor
         * @param {shop.IGetConfigReq=} [properties] Properties to set
         */
        function GetConfigReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetConfigReq uid.
         * @member {number|Long} uid
         * @memberof shop.GetConfigReq
         * @instance
         */
        GetConfigReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GetConfigReq instance using the specified properties.
         * @function create
         * @memberof shop.GetConfigReq
         * @static
         * @param {shop.IGetConfigReq=} [properties] Properties to set
         * @returns {shop.GetConfigReq} GetConfigReq instance
         */
        GetConfigReq.create = function create(properties) {
            return new GetConfigReq(properties);
        };

        /**
         * Encodes the specified GetConfigReq message. Does not implicitly {@link shop.GetConfigReq.verify|verify} messages.
         * @function encode
         * @memberof shop.GetConfigReq
         * @static
         * @param {shop.IGetConfigReq} message GetConfigReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetConfigReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            return writer;
        };

        /**
         * Encodes the specified GetConfigReq message, length delimited. Does not implicitly {@link shop.GetConfigReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof shop.GetConfigReq
         * @static
         * @param {shop.IGetConfigReq} message GetConfigReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetConfigReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetConfigReq message from the specified reader or buffer.
         * @function decode
         * @memberof shop.GetConfigReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {shop.GetConfigReq} GetConfigReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetConfigReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.shop.GetConfigReq();
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
         * Decodes a GetConfigReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof shop.GetConfigReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {shop.GetConfigReq} GetConfigReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetConfigReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetConfigReq message.
         * @function verify
         * @memberof shop.GetConfigReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetConfigReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            return null;
        };

        /**
         * Creates a GetConfigReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof shop.GetConfigReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {shop.GetConfigReq} GetConfigReq
         */
        GetConfigReq.fromObject = function fromObject(object) {
            if (object instanceof $root.shop.GetConfigReq)
                return object;
            var message = new $root.shop.GetConfigReq();
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
         * Creates a plain object from a GetConfigReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof shop.GetConfigReq
         * @static
         * @param {shop.GetConfigReq} message GetConfigReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetConfigReq.toObject = function toObject(message, options) {
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
         * Converts this GetConfigReq to JSON.
         * @function toJSON
         * @memberof shop.GetConfigReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetConfigReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetConfigReq;
    })();

    shop.Box = (function() {

        /**
         * Properties of a Box.
         * @memberof shop
         * @interface IBox
         * @property {number|null} [id] Box id
         * @property {number|Long|null} [num] Box num
         */

        /**
         * Constructs a new Box.
         * @memberof shop
         * @classdesc Represents a Box.
         * @implements IBox
         * @constructor
         * @param {shop.IBox=} [properties] Properties to set
         */
        function Box(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Box id.
         * @member {number} id
         * @memberof shop.Box
         * @instance
         */
        Box.prototype.id = 0;

        /**
         * Box num.
         * @member {number|Long} num
         * @memberof shop.Box
         * @instance
         */
        Box.prototype.num = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Box instance using the specified properties.
         * @function create
         * @memberof shop.Box
         * @static
         * @param {shop.IBox=} [properties] Properties to set
         * @returns {shop.Box} Box instance
         */
        Box.create = function create(properties) {
            return new Box(properties);
        };

        /**
         * Encodes the specified Box message. Does not implicitly {@link shop.Box.verify|verify} messages.
         * @function encode
         * @memberof shop.Box
         * @static
         * @param {shop.IBox} message Box message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Box.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.num != null && message.hasOwnProperty("num"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.num);
            return writer;
        };

        /**
         * Encodes the specified Box message, length delimited. Does not implicitly {@link shop.Box.verify|verify} messages.
         * @function encodeDelimited
         * @memberof shop.Box
         * @static
         * @param {shop.IBox} message Box message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Box.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Box message from the specified reader or buffer.
         * @function decode
         * @memberof shop.Box
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {shop.Box} Box
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Box.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.shop.Box();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.num = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Box message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof shop.Box
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {shop.Box} Box
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Box.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Box message.
         * @function verify
         * @memberof shop.Box
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Box.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.num != null && message.hasOwnProperty("num"))
                if (!$util.isInteger(message.num) && !(message.num && $util.isInteger(message.num.low) && $util.isInteger(message.num.high)))
                    return "num: integer|Long expected";
            return null;
        };

        /**
         * Creates a Box message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof shop.Box
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {shop.Box} Box
         */
        Box.fromObject = function fromObject(object) {
            if (object instanceof $root.shop.Box)
                return object;
            var message = new $root.shop.Box();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.num != null)
                if ($util.Long)
                    (message.num = $util.Long.fromValue(object.num)).unsigned = false;
                else if (typeof object.num === "string")
                    message.num = parseInt(object.num, 10);
                else if (typeof object.num === "number")
                    message.num = object.num;
                else if (typeof object.num === "object")
                    message.num = new $util.LongBits(object.num.low >>> 0, object.num.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a Box message. Also converts values to other types if specified.
         * @function toObject
         * @memberof shop.Box
         * @static
         * @param {shop.Box} message Box
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Box.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.num = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.num = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.num != null && message.hasOwnProperty("num"))
                if (typeof message.num === "number")
                    object.num = options.longs === String ? String(message.num) : message.num;
                else
                    object.num = options.longs === String ? $util.Long.prototype.toString.call(message.num) : options.longs === Number ? new $util.LongBits(message.num.low >>> 0, message.num.high >>> 0).toNumber() : message.num;
            return object;
        };

        /**
         * Converts this Box to JSON.
         * @function toJSON
         * @memberof shop.Box
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Box.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Box;
    })();

    shop.BoxItem = (function() {

        /**
         * Properties of a BoxItem.
         * @memberof shop
         * @interface IBoxItem
         * @property {number|null} [index] BoxItem index
         * @property {shop.IBox|null} [needItem] BoxItem needItem
         * @property {shop.IBox|null} [getItem] BoxItem getItem
         * @property {string|null} [icon] BoxItem icon
         */

        /**
         * Constructs a new BoxItem.
         * @memberof shop
         * @classdesc Represents a BoxItem.
         * @implements IBoxItem
         * @constructor
         * @param {shop.IBoxItem=} [properties] Properties to set
         */
        function BoxItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BoxItem index.
         * @member {number} index
         * @memberof shop.BoxItem
         * @instance
         */
        BoxItem.prototype.index = 0;

        /**
         * BoxItem needItem.
         * @member {shop.IBox|null|undefined} needItem
         * @memberof shop.BoxItem
         * @instance
         */
        BoxItem.prototype.needItem = null;

        /**
         * BoxItem getItem.
         * @member {shop.IBox|null|undefined} getItem
         * @memberof shop.BoxItem
         * @instance
         */
        BoxItem.prototype.getItem = null;

        /**
         * BoxItem icon.
         * @member {string} icon
         * @memberof shop.BoxItem
         * @instance
         */
        BoxItem.prototype.icon = "";

        /**
         * Creates a new BoxItem instance using the specified properties.
         * @function create
         * @memberof shop.BoxItem
         * @static
         * @param {shop.IBoxItem=} [properties] Properties to set
         * @returns {shop.BoxItem} BoxItem instance
         */
        BoxItem.create = function create(properties) {
            return new BoxItem(properties);
        };

        /**
         * Encodes the specified BoxItem message. Does not implicitly {@link shop.BoxItem.verify|verify} messages.
         * @function encode
         * @memberof shop.BoxItem
         * @static
         * @param {shop.IBoxItem} message BoxItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BoxItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.index != null && message.hasOwnProperty("index"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.index);
            if (message.needItem != null && message.hasOwnProperty("needItem"))
                $root.shop.Box.encode(message.needItem, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.getItem != null && message.hasOwnProperty("getItem"))
                $root.shop.Box.encode(message.getItem, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.icon != null && message.hasOwnProperty("icon"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.icon);
            return writer;
        };

        /**
         * Encodes the specified BoxItem message, length delimited. Does not implicitly {@link shop.BoxItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof shop.BoxItem
         * @static
         * @param {shop.IBoxItem} message BoxItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BoxItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BoxItem message from the specified reader or buffer.
         * @function decode
         * @memberof shop.BoxItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {shop.BoxItem} BoxItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BoxItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.shop.BoxItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.index = reader.int32();
                    break;
                case 2:
                    message.needItem = $root.shop.Box.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.getItem = $root.shop.Box.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.icon = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BoxItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof shop.BoxItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {shop.BoxItem} BoxItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BoxItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BoxItem message.
         * @function verify
         * @memberof shop.BoxItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BoxItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.index != null && message.hasOwnProperty("index"))
                if (!$util.isInteger(message.index))
                    return "index: integer expected";
            if (message.needItem != null && message.hasOwnProperty("needItem")) {
                var error = $root.shop.Box.verify(message.needItem);
                if (error)
                    return "needItem." + error;
            }
            if (message.getItem != null && message.hasOwnProperty("getItem")) {
                var error = $root.shop.Box.verify(message.getItem);
                if (error)
                    return "getItem." + error;
            }
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            return null;
        };

        /**
         * Creates a BoxItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof shop.BoxItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {shop.BoxItem} BoxItem
         */
        BoxItem.fromObject = function fromObject(object) {
            if (object instanceof $root.shop.BoxItem)
                return object;
            var message = new $root.shop.BoxItem();
            if (object.index != null)
                message.index = object.index | 0;
            if (object.needItem != null) {
                if (typeof object.needItem !== "object")
                    throw TypeError(".shop.BoxItem.needItem: object expected");
                message.needItem = $root.shop.Box.fromObject(object.needItem);
            }
            if (object.getItem != null) {
                if (typeof object.getItem !== "object")
                    throw TypeError(".shop.BoxItem.getItem: object expected");
                message.getItem = $root.shop.Box.fromObject(object.getItem);
            }
            if (object.icon != null)
                message.icon = String(object.icon);
            return message;
        };

        /**
         * Creates a plain object from a BoxItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof shop.BoxItem
         * @static
         * @param {shop.BoxItem} message BoxItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BoxItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.index = 0;
                object.needItem = null;
                object.getItem = null;
                object.icon = "";
            }
            if (message.index != null && message.hasOwnProperty("index"))
                object.index = message.index;
            if (message.needItem != null && message.hasOwnProperty("needItem"))
                object.needItem = $root.shop.Box.toObject(message.needItem, options);
            if (message.getItem != null && message.hasOwnProperty("getItem"))
                object.getItem = $root.shop.Box.toObject(message.getItem, options);
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            return object;
        };

        /**
         * Converts this BoxItem to JSON.
         * @function toJSON
         * @memberof shop.BoxItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BoxItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BoxItem;
    })();

    shop.Award = (function() {

        /**
         * Properties of an Award.
         * @memberof shop
         * @interface IAward
         * @property {number|null} [propId] Award propId
         * @property {number|Long|null} [minNum] Award minNum
         * @property {number|Long|null} [maxNum] Award maxNum
         * @property {number|Long|null} [effectTime] Award effectTime
         */

        /**
         * Constructs a new Award.
         * @memberof shop
         * @classdesc Represents an Award.
         * @implements IAward
         * @constructor
         * @param {shop.IAward=} [properties] Properties to set
         */
        function Award(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Award propId.
         * @member {number} propId
         * @memberof shop.Award
         * @instance
         */
        Award.prototype.propId = 0;

        /**
         * Award minNum.
         * @member {number|Long} minNum
         * @memberof shop.Award
         * @instance
         */
        Award.prototype.minNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Award maxNum.
         * @member {number|Long} maxNum
         * @memberof shop.Award
         * @instance
         */
        Award.prototype.maxNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Award effectTime.
         * @member {number|Long} effectTime
         * @memberof shop.Award
         * @instance
         */
        Award.prototype.effectTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Award instance using the specified properties.
         * @function create
         * @memberof shop.Award
         * @static
         * @param {shop.IAward=} [properties] Properties to set
         * @returns {shop.Award} Award instance
         */
        Award.create = function create(properties) {
            return new Award(properties);
        };

        /**
         * Encodes the specified Award message. Does not implicitly {@link shop.Award.verify|verify} messages.
         * @function encode
         * @memberof shop.Award
         * @static
         * @param {shop.IAward} message Award message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Award.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.propId != null && message.hasOwnProperty("propId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.propId);
            if (message.minNum != null && message.hasOwnProperty("minNum"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.minNum);
            if (message.maxNum != null && message.hasOwnProperty("maxNum"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.maxNum);
            if (message.effectTime != null && message.hasOwnProperty("effectTime"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.effectTime);
            return writer;
        };

        /**
         * Encodes the specified Award message, length delimited. Does not implicitly {@link shop.Award.verify|verify} messages.
         * @function encodeDelimited
         * @memberof shop.Award
         * @static
         * @param {shop.IAward} message Award message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Award.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Award message from the specified reader or buffer.
         * @function decode
         * @memberof shop.Award
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {shop.Award} Award
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Award.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.shop.Award();
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
         * @memberof shop.Award
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {shop.Award} Award
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
         * @memberof shop.Award
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Award.verify = function verify(message) {
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
            return null;
        };

        /**
         * Creates an Award message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof shop.Award
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {shop.Award} Award
         */
        Award.fromObject = function fromObject(object) {
            if (object instanceof $root.shop.Award)
                return object;
            var message = new $root.shop.Award();
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
            return message;
        };

        /**
         * Creates a plain object from an Award message. Also converts values to other types if specified.
         * @function toObject
         * @memberof shop.Award
         * @static
         * @param {shop.Award} message Award
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Award.toObject = function toObject(message, options) {
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
            return object;
        };

        /**
         * Converts this Award to JSON.
         * @function toJSON
         * @memberof shop.Award
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Award.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Award;
    })();

    shop.GetConfigRsp = (function() {

        /**
         * Properties of a GetConfigRsp.
         * @memberof shop
         * @interface IGetConfigRsp
         * @property {shop.IStateCode|null} [code] GetConfigRsp code
         * @property {Array.<shop.IBoxItem>|null} [boxList] GetConfigRsp boxList
         */

        /**
         * Constructs a new GetConfigRsp.
         * @memberof shop
         * @classdesc Represents a GetConfigRsp.
         * @implements IGetConfigRsp
         * @constructor
         * @param {shop.IGetConfigRsp=} [properties] Properties to set
         */
        function GetConfigRsp(properties) {
            this.boxList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetConfigRsp code.
         * @member {shop.IStateCode|null|undefined} code
         * @memberof shop.GetConfigRsp
         * @instance
         */
        GetConfigRsp.prototype.code = null;

        /**
         * GetConfigRsp boxList.
         * @member {Array.<shop.IBoxItem>} boxList
         * @memberof shop.GetConfigRsp
         * @instance
         */
        GetConfigRsp.prototype.boxList = $util.emptyArray;

        /**
         * Creates a new GetConfigRsp instance using the specified properties.
         * @function create
         * @memberof shop.GetConfigRsp
         * @static
         * @param {shop.IGetConfigRsp=} [properties] Properties to set
         * @returns {shop.GetConfigRsp} GetConfigRsp instance
         */
        GetConfigRsp.create = function create(properties) {
            return new GetConfigRsp(properties);
        };

        /**
         * Encodes the specified GetConfigRsp message. Does not implicitly {@link shop.GetConfigRsp.verify|verify} messages.
         * @function encode
         * @memberof shop.GetConfigRsp
         * @static
         * @param {shop.IGetConfigRsp} message GetConfigRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetConfigRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                $root.shop.StateCode.encode(message.code, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.boxList != null && message.boxList.length)
                for (var i = 0; i < message.boxList.length; ++i)
                    $root.shop.BoxItem.encode(message.boxList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetConfigRsp message, length delimited. Does not implicitly {@link shop.GetConfigRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof shop.GetConfigRsp
         * @static
         * @param {shop.IGetConfigRsp} message GetConfigRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetConfigRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetConfigRsp message from the specified reader or buffer.
         * @function decode
         * @memberof shop.GetConfigRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {shop.GetConfigRsp} GetConfigRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetConfigRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.shop.GetConfigRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = $root.shop.StateCode.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.boxList && message.boxList.length))
                        message.boxList = [];
                    message.boxList.push($root.shop.BoxItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetConfigRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof shop.GetConfigRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {shop.GetConfigRsp} GetConfigRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetConfigRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetConfigRsp message.
         * @function verify
         * @memberof shop.GetConfigRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetConfigRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code")) {
                var error = $root.shop.StateCode.verify(message.code);
                if (error)
                    return "code." + error;
            }
            if (message.boxList != null && message.hasOwnProperty("boxList")) {
                if (!Array.isArray(message.boxList))
                    return "boxList: array expected";
                for (var i = 0; i < message.boxList.length; ++i) {
                    var error = $root.shop.BoxItem.verify(message.boxList[i]);
                    if (error)
                        return "boxList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetConfigRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof shop.GetConfigRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {shop.GetConfigRsp} GetConfigRsp
         */
        GetConfigRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.shop.GetConfigRsp)
                return object;
            var message = new $root.shop.GetConfigRsp();
            if (object.code != null) {
                if (typeof object.code !== "object")
                    throw TypeError(".shop.GetConfigRsp.code: object expected");
                message.code = $root.shop.StateCode.fromObject(object.code);
            }
            if (object.boxList) {
                if (!Array.isArray(object.boxList))
                    throw TypeError(".shop.GetConfigRsp.boxList: array expected");
                message.boxList = [];
                for (var i = 0; i < object.boxList.length; ++i) {
                    if (typeof object.boxList[i] !== "object")
                        throw TypeError(".shop.GetConfigRsp.boxList: object expected");
                    message.boxList[i] = $root.shop.BoxItem.fromObject(object.boxList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetConfigRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof shop.GetConfigRsp
         * @static
         * @param {shop.GetConfigRsp} message GetConfigRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetConfigRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.boxList = [];
            if (options.defaults)
                object.code = null;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = $root.shop.StateCode.toObject(message.code, options);
            if (message.boxList && message.boxList.length) {
                object.boxList = [];
                for (var j = 0; j < message.boxList.length; ++j)
                    object.boxList[j] = $root.shop.BoxItem.toObject(message.boxList[j], options);
            }
            return object;
        };

        /**
         * Converts this GetConfigRsp to JSON.
         * @function toJSON
         * @memberof shop.GetConfigRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetConfigRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetConfigRsp;
    })();

    shop.ExchangeBoxReq = (function() {

        /**
         * Properties of an ExchangeBoxReq.
         * @memberof shop
         * @interface IExchangeBoxReq
         * @property {number|Long|null} [uid] ExchangeBoxReq uid
         * @property {number|null} [index] ExchangeBoxReq index
         */

        /**
         * Constructs a new ExchangeBoxReq.
         * @memberof shop
         * @classdesc Represents an ExchangeBoxReq.
         * @implements IExchangeBoxReq
         * @constructor
         * @param {shop.IExchangeBoxReq=} [properties] Properties to set
         */
        function ExchangeBoxReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExchangeBoxReq uid.
         * @member {number|Long} uid
         * @memberof shop.ExchangeBoxReq
         * @instance
         */
        ExchangeBoxReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ExchangeBoxReq index.
         * @member {number} index
         * @memberof shop.ExchangeBoxReq
         * @instance
         */
        ExchangeBoxReq.prototype.index = 0;

        /**
         * Creates a new ExchangeBoxReq instance using the specified properties.
         * @function create
         * @memberof shop.ExchangeBoxReq
         * @static
         * @param {shop.IExchangeBoxReq=} [properties] Properties to set
         * @returns {shop.ExchangeBoxReq} ExchangeBoxReq instance
         */
        ExchangeBoxReq.create = function create(properties) {
            return new ExchangeBoxReq(properties);
        };

        /**
         * Encodes the specified ExchangeBoxReq message. Does not implicitly {@link shop.ExchangeBoxReq.verify|verify} messages.
         * @function encode
         * @memberof shop.ExchangeBoxReq
         * @static
         * @param {shop.IExchangeBoxReq} message ExchangeBoxReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExchangeBoxReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            if (message.index != null && message.hasOwnProperty("index"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.index);
            return writer;
        };

        /**
         * Encodes the specified ExchangeBoxReq message, length delimited. Does not implicitly {@link shop.ExchangeBoxReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof shop.ExchangeBoxReq
         * @static
         * @param {shop.IExchangeBoxReq} message ExchangeBoxReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExchangeBoxReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExchangeBoxReq message from the specified reader or buffer.
         * @function decode
         * @memberof shop.ExchangeBoxReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {shop.ExchangeBoxReq} ExchangeBoxReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExchangeBoxReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.shop.ExchangeBoxReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int64();
                    break;
                case 2:
                    message.index = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ExchangeBoxReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof shop.ExchangeBoxReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {shop.ExchangeBoxReq} ExchangeBoxReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExchangeBoxReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExchangeBoxReq message.
         * @function verify
         * @memberof shop.ExchangeBoxReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExchangeBoxReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.index != null && message.hasOwnProperty("index"))
                if (!$util.isInteger(message.index))
                    return "index: integer expected";
            return null;
        };

        /**
         * Creates an ExchangeBoxReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof shop.ExchangeBoxReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {shop.ExchangeBoxReq} ExchangeBoxReq
         */
        ExchangeBoxReq.fromObject = function fromObject(object) {
            if (object instanceof $root.shop.ExchangeBoxReq)
                return object;
            var message = new $root.shop.ExchangeBoxReq();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.index != null)
                message.index = object.index | 0;
            return message;
        };

        /**
         * Creates a plain object from an ExchangeBoxReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof shop.ExchangeBoxReq
         * @static
         * @param {shop.ExchangeBoxReq} message ExchangeBoxReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExchangeBoxReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.index = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.index != null && message.hasOwnProperty("index"))
                object.index = message.index;
            return object;
        };

        /**
         * Converts this ExchangeBoxReq to JSON.
         * @function toJSON
         * @memberof shop.ExchangeBoxReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExchangeBoxReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ExchangeBoxReq;
    })();

    shop.ExchangeBoxRsp = (function() {

        /**
         * Properties of an ExchangeBoxRsp.
         * @memberof shop
         * @interface IExchangeBoxRsp
         * @property {shop.IStateCode|null} [code] ExchangeBoxRsp code
         * @property {shop.IBox|null} [getItem] ExchangeBoxRsp getItem
         */

        /**
         * Constructs a new ExchangeBoxRsp.
         * @memberof shop
         * @classdesc Represents an ExchangeBoxRsp.
         * @implements IExchangeBoxRsp
         * @constructor
         * @param {shop.IExchangeBoxRsp=} [properties] Properties to set
         */
        function ExchangeBoxRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExchangeBoxRsp code.
         * @member {shop.IStateCode|null|undefined} code
         * @memberof shop.ExchangeBoxRsp
         * @instance
         */
        ExchangeBoxRsp.prototype.code = null;

        /**
         * ExchangeBoxRsp getItem.
         * @member {shop.IBox|null|undefined} getItem
         * @memberof shop.ExchangeBoxRsp
         * @instance
         */
        ExchangeBoxRsp.prototype.getItem = null;

        /**
         * Creates a new ExchangeBoxRsp instance using the specified properties.
         * @function create
         * @memberof shop.ExchangeBoxRsp
         * @static
         * @param {shop.IExchangeBoxRsp=} [properties] Properties to set
         * @returns {shop.ExchangeBoxRsp} ExchangeBoxRsp instance
         */
        ExchangeBoxRsp.create = function create(properties) {
            return new ExchangeBoxRsp(properties);
        };

        /**
         * Encodes the specified ExchangeBoxRsp message. Does not implicitly {@link shop.ExchangeBoxRsp.verify|verify} messages.
         * @function encode
         * @memberof shop.ExchangeBoxRsp
         * @static
         * @param {shop.IExchangeBoxRsp} message ExchangeBoxRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExchangeBoxRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                $root.shop.StateCode.encode(message.code, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.getItem != null && message.hasOwnProperty("getItem"))
                $root.shop.Box.encode(message.getItem, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ExchangeBoxRsp message, length delimited. Does not implicitly {@link shop.ExchangeBoxRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof shop.ExchangeBoxRsp
         * @static
         * @param {shop.IExchangeBoxRsp} message ExchangeBoxRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExchangeBoxRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExchangeBoxRsp message from the specified reader or buffer.
         * @function decode
         * @memberof shop.ExchangeBoxRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {shop.ExchangeBoxRsp} ExchangeBoxRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExchangeBoxRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.shop.ExchangeBoxRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = $root.shop.StateCode.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.getItem = $root.shop.Box.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ExchangeBoxRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof shop.ExchangeBoxRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {shop.ExchangeBoxRsp} ExchangeBoxRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExchangeBoxRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExchangeBoxRsp message.
         * @function verify
         * @memberof shop.ExchangeBoxRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExchangeBoxRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code")) {
                var error = $root.shop.StateCode.verify(message.code);
                if (error)
                    return "code." + error;
            }
            if (message.getItem != null && message.hasOwnProperty("getItem")) {
                var error = $root.shop.Box.verify(message.getItem);
                if (error)
                    return "getItem." + error;
            }
            return null;
        };

        /**
         * Creates an ExchangeBoxRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof shop.ExchangeBoxRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {shop.ExchangeBoxRsp} ExchangeBoxRsp
         */
        ExchangeBoxRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.shop.ExchangeBoxRsp)
                return object;
            var message = new $root.shop.ExchangeBoxRsp();
            if (object.code != null) {
                if (typeof object.code !== "object")
                    throw TypeError(".shop.ExchangeBoxRsp.code: object expected");
                message.code = $root.shop.StateCode.fromObject(object.code);
            }
            if (object.getItem != null) {
                if (typeof object.getItem !== "object")
                    throw TypeError(".shop.ExchangeBoxRsp.getItem: object expected");
                message.getItem = $root.shop.Box.fromObject(object.getItem);
            }
            return message;
        };

        /**
         * Creates a plain object from an ExchangeBoxRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof shop.ExchangeBoxRsp
         * @static
         * @param {shop.ExchangeBoxRsp} message ExchangeBoxRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExchangeBoxRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = null;
                object.getItem = null;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = $root.shop.StateCode.toObject(message.code, options);
            if (message.getItem != null && message.hasOwnProperty("getItem"))
                object.getItem = $root.shop.Box.toObject(message.getItem, options);
            return object;
        };

        /**
         * Converts this ExchangeBoxRsp to JSON.
         * @function toJSON
         * @memberof shop.ExchangeBoxRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExchangeBoxRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ExchangeBoxRsp;
    })();

    return shop;
})();

module.exports = $root.shop;
