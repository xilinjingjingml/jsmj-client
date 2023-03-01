/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.item = (function() {

    /**
     * Namespace item.
     * @exports item
     * @namespace
     */
    var item = {};

    item.Item = (function() {

        /**
         * Constructs a new Item service.
         * @memberof item
         * @classdesc Represents an Item
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Item(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Item.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Item;

        /**
         * Creates new Item service using the specified rpc implementation.
         * @function create
         * @memberof item.Item
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Item} RPC service. Useful where requests and/or responses are streamed.
         */
        Item.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link item.Item#updateItem}.
         * @memberof item.Item
         * @typedef UpdateItemCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {item.UpdateItemRsp} [response] UpdateItemRsp
         */

        /**
         * Calls UpdateItem.
         * @function updateItem
         * @memberof item.Item
         * @instance
         * @param {item.IUpdateItemReq} request UpdateItemReq message or plain object
         * @param {item.Item.UpdateItemCallback} callback Node-style callback called with the error, if any, and UpdateItemRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Item.prototype.updateItem = function updateItem(request, callback) {
            return this.rpcCall(updateItem, $root.item.UpdateItemReq, $root.item.UpdateItemRsp, request, callback);
        }, "name", { value: "UpdateItem" });

        /**
         * Calls UpdateItem.
         * @function updateItem
         * @memberof item.Item
         * @instance
         * @param {item.IUpdateItemReq} request UpdateItemReq message or plain object
         * @returns {Promise<item.UpdateItemRsp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link item.Item#getPlayerInfo}.
         * @memberof item.Item
         * @typedef GetPlayerInfoCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {item.GetPlayerInfoRsp} [response] GetPlayerInfoRsp
         */

        /**
         * Calls GetPlayerInfo.
         * @function getPlayerInfo
         * @memberof item.Item
         * @instance
         * @param {item.IGetPlayerInfoReq} request GetPlayerInfoReq message or plain object
         * @param {item.Item.GetPlayerInfoCallback} callback Node-style callback called with the error, if any, and GetPlayerInfoRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Item.prototype.getPlayerInfo = function getPlayerInfo(request, callback) {
            return this.rpcCall(getPlayerInfo, $root.item.GetPlayerInfoReq, $root.item.GetPlayerInfoRsp, request, callback);
        }, "name", { value: "GetPlayerInfo" });

        /**
         * Calls GetPlayerInfo.
         * @function getPlayerInfo
         * @memberof item.Item
         * @instance
         * @param {item.IGetPlayerInfoReq} request GetPlayerInfoReq message or plain object
         * @returns {Promise<item.GetPlayerInfoRsp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link item.Item#updateHead}.
         * @memberof item.Item
         * @typedef UpdateHeadCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {item.UpdateHeadRsp} [response] UpdateHeadRsp
         */

        /**
         * Calls UpdateHead.
         * @function updateHead
         * @memberof item.Item
         * @instance
         * @param {item.IUpdateHeadReq} request UpdateHeadReq message or plain object
         * @param {item.Item.UpdateHeadCallback} callback Node-style callback called with the error, if any, and UpdateHeadRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Item.prototype.updateHead = function updateHead(request, callback) {
            return this.rpcCall(updateHead, $root.item.UpdateHeadReq, $root.item.UpdateHeadRsp, request, callback);
        }, "name", { value: "UpdateHead" });

        /**
         * Calls UpdateHead.
         * @function updateHead
         * @memberof item.Item
         * @instance
         * @param {item.IUpdateHeadReq} request UpdateHeadReq message or plain object
         * @returns {Promise<item.UpdateHeadRsp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link item.Item#updateHeadFrame}.
         * @memberof item.Item
         * @typedef UpdateHeadFrameCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {item.UpdateHeadFrameRsp} [response] UpdateHeadFrameRsp
         */

        /**
         * Calls UpdateHeadFrame.
         * @function updateHeadFrame
         * @memberof item.Item
         * @instance
         * @param {item.IUpdateHeadFrameReq} request UpdateHeadFrameReq message or plain object
         * @param {item.Item.UpdateHeadFrameCallback} callback Node-style callback called with the error, if any, and UpdateHeadFrameRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Item.prototype.updateHeadFrame = function updateHeadFrame(request, callback) {
            return this.rpcCall(updateHeadFrame, $root.item.UpdateHeadFrameReq, $root.item.UpdateHeadFrameRsp, request, callback);
        }, "name", { value: "UpdateHeadFrame" });

        /**
         * Calls UpdateHeadFrame.
         * @function updateHeadFrame
         * @memberof item.Item
         * @instance
         * @param {item.IUpdateHeadFrameReq} request UpdateHeadFrameReq message or plain object
         * @returns {Promise<item.UpdateHeadFrameRsp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link item.Item#getItemNum}.
         * @memberof item.Item
         * @typedef GetItemNumCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {item.GetItemNumRsp} [response] GetItemNumRsp
         */

        /**
         * Calls GetItemNum.
         * @function getItemNum
         * @memberof item.Item
         * @instance
         * @param {item.IGetItemNumReq} request GetItemNumReq message or plain object
         * @param {item.Item.GetItemNumCallback} callback Node-style callback called with the error, if any, and GetItemNumRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Item.prototype.getItemNum = function getItemNum(request, callback) {
            return this.rpcCall(getItemNum, $root.item.GetItemNumReq, $root.item.GetItemNumRsp, request, callback);
        }, "name", { value: "GetItemNum" });

        /**
         * Calls GetItemNum.
         * @function getItemNum
         * @memberof item.Item
         * @instance
         * @param {item.IGetItemNumReq} request GetItemNumReq message or plain object
         * @returns {Promise<item.GetItemNumRsp>} Promise
         * @variation 2
         */

        return Item;
    })();

    item.ItemOpt = (function() {

        /**
         * Properties of an ItemOpt.
         * @memberof item
         * @interface IItemOpt
         * @property {number|null} [id] ItemOpt id
         * @property {number|Long|null} [num] ItemOpt num
         * @property {number|Long|null} [expireAt] ItemOpt expireAt
         */

        /**
         * Constructs a new ItemOpt.
         * @memberof item
         * @classdesc Represents an ItemOpt.
         * @implements IItemOpt
         * @constructor
         * @param {item.IItemOpt=} [properties] Properties to set
         */
        function ItemOpt(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ItemOpt id.
         * @member {number} id
         * @memberof item.ItemOpt
         * @instance
         */
        ItemOpt.prototype.id = 0;

        /**
         * ItemOpt num.
         * @member {number|Long} num
         * @memberof item.ItemOpt
         * @instance
         */
        ItemOpt.prototype.num = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ItemOpt expireAt.
         * @member {number|Long} expireAt
         * @memberof item.ItemOpt
         * @instance
         */
        ItemOpt.prototype.expireAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ItemOpt instance using the specified properties.
         * @function create
         * @memberof item.ItemOpt
         * @static
         * @param {item.IItemOpt=} [properties] Properties to set
         * @returns {item.ItemOpt} ItemOpt instance
         */
        ItemOpt.create = function create(properties) {
            return new ItemOpt(properties);
        };

        /**
         * Encodes the specified ItemOpt message. Does not implicitly {@link item.ItemOpt.verify|verify} messages.
         * @function encode
         * @memberof item.ItemOpt
         * @static
         * @param {item.IItemOpt} message ItemOpt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemOpt.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.num != null && message.hasOwnProperty("num"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.num);
            if (message.expireAt != null && message.hasOwnProperty("expireAt"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.expireAt);
            return writer;
        };

        /**
         * Encodes the specified ItemOpt message, length delimited. Does not implicitly {@link item.ItemOpt.verify|verify} messages.
         * @function encodeDelimited
         * @memberof item.ItemOpt
         * @static
         * @param {item.IItemOpt} message ItemOpt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemOpt.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ItemOpt message from the specified reader or buffer.
         * @function decode
         * @memberof item.ItemOpt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {item.ItemOpt} ItemOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemOpt.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item.ItemOpt();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.num = reader.int64();
                    break;
                case 3:
                    message.expireAt = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ItemOpt message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof item.ItemOpt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {item.ItemOpt} ItemOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemOpt.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ItemOpt message.
         * @function verify
         * @memberof item.ItemOpt
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ItemOpt.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.num != null && message.hasOwnProperty("num"))
                if (!$util.isInteger(message.num) && !(message.num && $util.isInteger(message.num.low) && $util.isInteger(message.num.high)))
                    return "num: integer|Long expected";
            if (message.expireAt != null && message.hasOwnProperty("expireAt"))
                if (!$util.isInteger(message.expireAt) && !(message.expireAt && $util.isInteger(message.expireAt.low) && $util.isInteger(message.expireAt.high)))
                    return "expireAt: integer|Long expected";
            return null;
        };

        /**
         * Creates an ItemOpt message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof item.ItemOpt
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {item.ItemOpt} ItemOpt
         */
        ItemOpt.fromObject = function fromObject(object) {
            if (object instanceof $root.item.ItemOpt)
                return object;
            var message = new $root.item.ItemOpt();
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
            if (object.expireAt != null)
                if ($util.Long)
                    (message.expireAt = $util.Long.fromValue(object.expireAt)).unsigned = false;
                else if (typeof object.expireAt === "string")
                    message.expireAt = parseInt(object.expireAt, 10);
                else if (typeof object.expireAt === "number")
                    message.expireAt = object.expireAt;
                else if (typeof object.expireAt === "object")
                    message.expireAt = new $util.LongBits(object.expireAt.low >>> 0, object.expireAt.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an ItemOpt message. Also converts values to other types if specified.
         * @function toObject
         * @memberof item.ItemOpt
         * @static
         * @param {item.ItemOpt} message ItemOpt
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ItemOpt.toObject = function toObject(message, options) {
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
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.expireAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.expireAt = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.num != null && message.hasOwnProperty("num"))
                if (typeof message.num === "number")
                    object.num = options.longs === String ? String(message.num) : message.num;
                else
                    object.num = options.longs === String ? $util.Long.prototype.toString.call(message.num) : options.longs === Number ? new $util.LongBits(message.num.low >>> 0, message.num.high >>> 0).toNumber() : message.num;
            if (message.expireAt != null && message.hasOwnProperty("expireAt"))
                if (typeof message.expireAt === "number")
                    object.expireAt = options.longs === String ? String(message.expireAt) : message.expireAt;
                else
                    object.expireAt = options.longs === String ? $util.Long.prototype.toString.call(message.expireAt) : options.longs === Number ? new $util.LongBits(message.expireAt.low >>> 0, message.expireAt.high >>> 0).toNumber() : message.expireAt;
            return object;
        };

        /**
         * Converts this ItemOpt to JSON.
         * @function toJSON
         * @memberof item.ItemOpt
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ItemOpt.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ItemOpt;
    })();

    item.ItemUpdate = (function() {

        /**
         * Properties of an ItemUpdate.
         * @memberof item
         * @interface IItemUpdate
         * @property {number|null} [id] ItemUpdate id
         * @property {number|Long|null} [change] ItemUpdate change
         * @property {number|Long|null} [num] ItemUpdate num
         * @property {number|Long|null} [expireAt] ItemUpdate expireAt
         */

        /**
         * Constructs a new ItemUpdate.
         * @memberof item
         * @classdesc Represents an ItemUpdate.
         * @implements IItemUpdate
         * @constructor
         * @param {item.IItemUpdate=} [properties] Properties to set
         */
        function ItemUpdate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ItemUpdate id.
         * @member {number} id
         * @memberof item.ItemUpdate
         * @instance
         */
        ItemUpdate.prototype.id = 0;

        /**
         * ItemUpdate change.
         * @member {number|Long} change
         * @memberof item.ItemUpdate
         * @instance
         */
        ItemUpdate.prototype.change = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ItemUpdate num.
         * @member {number|Long} num
         * @memberof item.ItemUpdate
         * @instance
         */
        ItemUpdate.prototype.num = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ItemUpdate expireAt.
         * @member {number|Long} expireAt
         * @memberof item.ItemUpdate
         * @instance
         */
        ItemUpdate.prototype.expireAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ItemUpdate instance using the specified properties.
         * @function create
         * @memberof item.ItemUpdate
         * @static
         * @param {item.IItemUpdate=} [properties] Properties to set
         * @returns {item.ItemUpdate} ItemUpdate instance
         */
        ItemUpdate.create = function create(properties) {
            return new ItemUpdate(properties);
        };

        /**
         * Encodes the specified ItemUpdate message. Does not implicitly {@link item.ItemUpdate.verify|verify} messages.
         * @function encode
         * @memberof item.ItemUpdate
         * @static
         * @param {item.IItemUpdate} message ItemUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.change != null && message.hasOwnProperty("change"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.change);
            if (message.num != null && message.hasOwnProperty("num"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.num);
            if (message.expireAt != null && message.hasOwnProperty("expireAt"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.expireAt);
            return writer;
        };

        /**
         * Encodes the specified ItemUpdate message, length delimited. Does not implicitly {@link item.ItemUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof item.ItemUpdate
         * @static
         * @param {item.IItemUpdate} message ItemUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ItemUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof item.ItemUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {item.ItemUpdate} ItemUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item.ItemUpdate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.change = reader.int64();
                    break;
                case 3:
                    message.num = reader.int64();
                    break;
                case 4:
                    message.expireAt = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ItemUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof item.ItemUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {item.ItemUpdate} ItemUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ItemUpdate message.
         * @function verify
         * @memberof item.ItemUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ItemUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.change != null && message.hasOwnProperty("change"))
                if (!$util.isInteger(message.change) && !(message.change && $util.isInteger(message.change.low) && $util.isInteger(message.change.high)))
                    return "change: integer|Long expected";
            if (message.num != null && message.hasOwnProperty("num"))
                if (!$util.isInteger(message.num) && !(message.num && $util.isInteger(message.num.low) && $util.isInteger(message.num.high)))
                    return "num: integer|Long expected";
            if (message.expireAt != null && message.hasOwnProperty("expireAt"))
                if (!$util.isInteger(message.expireAt) && !(message.expireAt && $util.isInteger(message.expireAt.low) && $util.isInteger(message.expireAt.high)))
                    return "expireAt: integer|Long expected";
            return null;
        };

        /**
         * Creates an ItemUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof item.ItemUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {item.ItemUpdate} ItemUpdate
         */
        ItemUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.item.ItemUpdate)
                return object;
            var message = new $root.item.ItemUpdate();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.change != null)
                if ($util.Long)
                    (message.change = $util.Long.fromValue(object.change)).unsigned = false;
                else if (typeof object.change === "string")
                    message.change = parseInt(object.change, 10);
                else if (typeof object.change === "number")
                    message.change = object.change;
                else if (typeof object.change === "object")
                    message.change = new $util.LongBits(object.change.low >>> 0, object.change.high >>> 0).toNumber();
            if (object.num != null)
                if ($util.Long)
                    (message.num = $util.Long.fromValue(object.num)).unsigned = false;
                else if (typeof object.num === "string")
                    message.num = parseInt(object.num, 10);
                else if (typeof object.num === "number")
                    message.num = object.num;
                else if (typeof object.num === "object")
                    message.num = new $util.LongBits(object.num.low >>> 0, object.num.high >>> 0).toNumber();
            if (object.expireAt != null)
                if ($util.Long)
                    (message.expireAt = $util.Long.fromValue(object.expireAt)).unsigned = false;
                else if (typeof object.expireAt === "string")
                    message.expireAt = parseInt(object.expireAt, 10);
                else if (typeof object.expireAt === "number")
                    message.expireAt = object.expireAt;
                else if (typeof object.expireAt === "object")
                    message.expireAt = new $util.LongBits(object.expireAt.low >>> 0, object.expireAt.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an ItemUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof item.ItemUpdate
         * @static
         * @param {item.ItemUpdate} message ItemUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ItemUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.change = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.change = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.num = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.num = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.expireAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.expireAt = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.change != null && message.hasOwnProperty("change"))
                if (typeof message.change === "number")
                    object.change = options.longs === String ? String(message.change) : message.change;
                else
                    object.change = options.longs === String ? $util.Long.prototype.toString.call(message.change) : options.longs === Number ? new $util.LongBits(message.change.low >>> 0, message.change.high >>> 0).toNumber() : message.change;
            if (message.num != null && message.hasOwnProperty("num"))
                if (typeof message.num === "number")
                    object.num = options.longs === String ? String(message.num) : message.num;
                else
                    object.num = options.longs === String ? $util.Long.prototype.toString.call(message.num) : options.longs === Number ? new $util.LongBits(message.num.low >>> 0, message.num.high >>> 0).toNumber() : message.num;
            if (message.expireAt != null && message.hasOwnProperty("expireAt"))
                if (typeof message.expireAt === "number")
                    object.expireAt = options.longs === String ? String(message.expireAt) : message.expireAt;
                else
                    object.expireAt = options.longs === String ? $util.Long.prototype.toString.call(message.expireAt) : options.longs === Number ? new $util.LongBits(message.expireAt.low >>> 0, message.expireAt.high >>> 0).toNumber() : message.expireAt;
            return object;
        };

        /**
         * Converts this ItemUpdate to JSON.
         * @function toJSON
         * @memberof item.ItemUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ItemUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ItemUpdate;
    })();

    item.UpdateItemReq = (function() {

        /**
         * Properties of an UpdateItemReq.
         * @memberof item
         * @interface IUpdateItemReq
         * @property {number|Long|null} [uid] UpdateItemReq uid
         * @property {string|null} [reason] UpdateItemReq reason
         * @property {string|null} [param] UpdateItemReq param
         * @property {string|null} [cliParam] UpdateItemReq cliParam
         * @property {Array.<item.IItemOpt>|null} [update] UpdateItemReq update
         */

        /**
         * Constructs a new UpdateItemReq.
         * @memberof item
         * @classdesc Represents an UpdateItemReq.
         * @implements IUpdateItemReq
         * @constructor
         * @param {item.IUpdateItemReq=} [properties] Properties to set
         */
        function UpdateItemReq(properties) {
            this.update = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateItemReq uid.
         * @member {number|Long} uid
         * @memberof item.UpdateItemReq
         * @instance
         */
        UpdateItemReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UpdateItemReq reason.
         * @member {string} reason
         * @memberof item.UpdateItemReq
         * @instance
         */
        UpdateItemReq.prototype.reason = "";

        /**
         * UpdateItemReq param.
         * @member {string} param
         * @memberof item.UpdateItemReq
         * @instance
         */
        UpdateItemReq.prototype.param = "";

        /**
         * UpdateItemReq cliParam.
         * @member {string} cliParam
         * @memberof item.UpdateItemReq
         * @instance
         */
        UpdateItemReq.prototype.cliParam = "";

        /**
         * UpdateItemReq update.
         * @member {Array.<item.IItemOpt>} update
         * @memberof item.UpdateItemReq
         * @instance
         */
        UpdateItemReq.prototype.update = $util.emptyArray;

        /**
         * Creates a new UpdateItemReq instance using the specified properties.
         * @function create
         * @memberof item.UpdateItemReq
         * @static
         * @param {item.IUpdateItemReq=} [properties] Properties to set
         * @returns {item.UpdateItemReq} UpdateItemReq instance
         */
        UpdateItemReq.create = function create(properties) {
            return new UpdateItemReq(properties);
        };

        /**
         * Encodes the specified UpdateItemReq message. Does not implicitly {@link item.UpdateItemReq.verify|verify} messages.
         * @function encode
         * @memberof item.UpdateItemReq
         * @static
         * @param {item.IUpdateItemReq} message UpdateItemReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateItemReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            if (message.reason != null && message.hasOwnProperty("reason"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.reason);
            if (message.param != null && message.hasOwnProperty("param"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.param);
            if (message.cliParam != null && message.hasOwnProperty("cliParam"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.cliParam);
            if (message.update != null && message.update.length)
                for (var i = 0; i < message.update.length; ++i)
                    $root.item.ItemOpt.encode(message.update[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UpdateItemReq message, length delimited. Does not implicitly {@link item.UpdateItemReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof item.UpdateItemReq
         * @static
         * @param {item.IUpdateItemReq} message UpdateItemReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateItemReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateItemReq message from the specified reader or buffer.
         * @function decode
         * @memberof item.UpdateItemReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {item.UpdateItemReq} UpdateItemReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateItemReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item.UpdateItemReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int64();
                    break;
                case 2:
                    message.reason = reader.string();
                    break;
                case 3:
                    message.param = reader.string();
                    break;
                case 4:
                    message.cliParam = reader.string();
                    break;
                case 10:
                    if (!(message.update && message.update.length))
                        message.update = [];
                    message.update.push($root.item.ItemOpt.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateItemReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof item.UpdateItemReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {item.UpdateItemReq} UpdateItemReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateItemReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateItemReq message.
         * @function verify
         * @memberof item.UpdateItemReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateItemReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.reason != null && message.hasOwnProperty("reason"))
                if (!$util.isString(message.reason))
                    return "reason: string expected";
            if (message.param != null && message.hasOwnProperty("param"))
                if (!$util.isString(message.param))
                    return "param: string expected";
            if (message.cliParam != null && message.hasOwnProperty("cliParam"))
                if (!$util.isString(message.cliParam))
                    return "cliParam: string expected";
            if (message.update != null && message.hasOwnProperty("update")) {
                if (!Array.isArray(message.update))
                    return "update: array expected";
                for (var i = 0; i < message.update.length; ++i) {
                    var error = $root.item.ItemOpt.verify(message.update[i]);
                    if (error)
                        return "update." + error;
                }
            }
            return null;
        };

        /**
         * Creates an UpdateItemReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof item.UpdateItemReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {item.UpdateItemReq} UpdateItemReq
         */
        UpdateItemReq.fromObject = function fromObject(object) {
            if (object instanceof $root.item.UpdateItemReq)
                return object;
            var message = new $root.item.UpdateItemReq();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.reason != null)
                message.reason = String(object.reason);
            if (object.param != null)
                message.param = String(object.param);
            if (object.cliParam != null)
                message.cliParam = String(object.cliParam);
            if (object.update) {
                if (!Array.isArray(object.update))
                    throw TypeError(".item.UpdateItemReq.update: array expected");
                message.update = [];
                for (var i = 0; i < object.update.length; ++i) {
                    if (typeof object.update[i] !== "object")
                        throw TypeError(".item.UpdateItemReq.update: object expected");
                    message.update[i] = $root.item.ItemOpt.fromObject(object.update[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an UpdateItemReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof item.UpdateItemReq
         * @static
         * @param {item.UpdateItemReq} message UpdateItemReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateItemReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.update = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.reason = "";
                object.param = "";
                object.cliParam = "";
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = message.reason;
            if (message.param != null && message.hasOwnProperty("param"))
                object.param = message.param;
            if (message.cliParam != null && message.hasOwnProperty("cliParam"))
                object.cliParam = message.cliParam;
            if (message.update && message.update.length) {
                object.update = [];
                for (var j = 0; j < message.update.length; ++j)
                    object.update[j] = $root.item.ItemOpt.toObject(message.update[j], options);
            }
            return object;
        };

        /**
         * Converts this UpdateItemReq to JSON.
         * @function toJSON
         * @memberof item.UpdateItemReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateItemReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateItemReq;
    })();

    item.UpdateItemRsp = (function() {

        /**
         * Properties of an UpdateItemRsp.
         * @memberof item
         * @interface IUpdateItemRsp
         * @property {number|null} [errCode] UpdateItemRsp errCode
         * @property {string|null} [errMsg] UpdateItemRsp errMsg
         */

        /**
         * Constructs a new UpdateItemRsp.
         * @memberof item
         * @classdesc Represents an UpdateItemRsp.
         * @implements IUpdateItemRsp
         * @constructor
         * @param {item.IUpdateItemRsp=} [properties] Properties to set
         */
        function UpdateItemRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateItemRsp errCode.
         * @member {number} errCode
         * @memberof item.UpdateItemRsp
         * @instance
         */
        UpdateItemRsp.prototype.errCode = 0;

        /**
         * UpdateItemRsp errMsg.
         * @member {string} errMsg
         * @memberof item.UpdateItemRsp
         * @instance
         */
        UpdateItemRsp.prototype.errMsg = "";

        /**
         * Creates a new UpdateItemRsp instance using the specified properties.
         * @function create
         * @memberof item.UpdateItemRsp
         * @static
         * @param {item.IUpdateItemRsp=} [properties] Properties to set
         * @returns {item.UpdateItemRsp} UpdateItemRsp instance
         */
        UpdateItemRsp.create = function create(properties) {
            return new UpdateItemRsp(properties);
        };

        /**
         * Encodes the specified UpdateItemRsp message. Does not implicitly {@link item.UpdateItemRsp.verify|verify} messages.
         * @function encode
         * @memberof item.UpdateItemRsp
         * @static
         * @param {item.IUpdateItemRsp} message UpdateItemRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateItemRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            return writer;
        };

        /**
         * Encodes the specified UpdateItemRsp message, length delimited. Does not implicitly {@link item.UpdateItemRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof item.UpdateItemRsp
         * @static
         * @param {item.IUpdateItemRsp} message UpdateItemRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateItemRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateItemRsp message from the specified reader or buffer.
         * @function decode
         * @memberof item.UpdateItemRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {item.UpdateItemRsp} UpdateItemRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateItemRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item.UpdateItemRsp();
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
         * Decodes an UpdateItemRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof item.UpdateItemRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {item.UpdateItemRsp} UpdateItemRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateItemRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateItemRsp message.
         * @function verify
         * @memberof item.UpdateItemRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateItemRsp.verify = function verify(message) {
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
         * Creates an UpdateItemRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof item.UpdateItemRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {item.UpdateItemRsp} UpdateItemRsp
         */
        UpdateItemRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.item.UpdateItemRsp)
                return object;
            var message = new $root.item.UpdateItemRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            return message;
        };

        /**
         * Creates a plain object from an UpdateItemRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof item.UpdateItemRsp
         * @static
         * @param {item.UpdateItemRsp} message UpdateItemRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateItemRsp.toObject = function toObject(message, options) {
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
         * Converts this UpdateItemRsp to JSON.
         * @function toJSON
         * @memberof item.UpdateItemRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateItemRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateItemRsp;
    })();

    item.UpdateMjzzItemNot = (function() {

        /**
         * Properties of an UpdateMjzzItemNot.
         * @memberof item
         * @interface IUpdateMjzzItemNot
         * @property {string|null} [cliParam] UpdateMjzzItemNot cliParam
         * @property {Array.<item.IItemUpdate>|null} [update] UpdateMjzzItemNot update
         */

        /**
         * Constructs a new UpdateMjzzItemNot.
         * @memberof item
         * @classdesc Represents an UpdateMjzzItemNot.
         * @implements IUpdateMjzzItemNot
         * @constructor
         * @param {item.IUpdateMjzzItemNot=} [properties] Properties to set
         */
        function UpdateMjzzItemNot(properties) {
            this.update = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateMjzzItemNot cliParam.
         * @member {string} cliParam
         * @memberof item.UpdateMjzzItemNot
         * @instance
         */
        UpdateMjzzItemNot.prototype.cliParam = "";

        /**
         * UpdateMjzzItemNot update.
         * @member {Array.<item.IItemUpdate>} update
         * @memberof item.UpdateMjzzItemNot
         * @instance
         */
        UpdateMjzzItemNot.prototype.update = $util.emptyArray;

        /**
         * Creates a new UpdateMjzzItemNot instance using the specified properties.
         * @function create
         * @memberof item.UpdateMjzzItemNot
         * @static
         * @param {item.IUpdateMjzzItemNot=} [properties] Properties to set
         * @returns {item.UpdateMjzzItemNot} UpdateMjzzItemNot instance
         */
        UpdateMjzzItemNot.create = function create(properties) {
            return new UpdateMjzzItemNot(properties);
        };

        /**
         * Encodes the specified UpdateMjzzItemNot message. Does not implicitly {@link item.UpdateMjzzItemNot.verify|verify} messages.
         * @function encode
         * @memberof item.UpdateMjzzItemNot
         * @static
         * @param {item.IUpdateMjzzItemNot} message UpdateMjzzItemNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateMjzzItemNot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cliParam != null && message.hasOwnProperty("cliParam"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.cliParam);
            if (message.update != null && message.update.length)
                for (var i = 0; i < message.update.length; ++i)
                    $root.item.ItemUpdate.encode(message.update[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UpdateMjzzItemNot message, length delimited. Does not implicitly {@link item.UpdateMjzzItemNot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof item.UpdateMjzzItemNot
         * @static
         * @param {item.IUpdateMjzzItemNot} message UpdateMjzzItemNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateMjzzItemNot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateMjzzItemNot message from the specified reader or buffer.
         * @function decode
         * @memberof item.UpdateMjzzItemNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {item.UpdateMjzzItemNot} UpdateMjzzItemNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateMjzzItemNot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item.UpdateMjzzItemNot();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cliParam = reader.string();
                    break;
                case 10:
                    if (!(message.update && message.update.length))
                        message.update = [];
                    message.update.push($root.item.ItemUpdate.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateMjzzItemNot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof item.UpdateMjzzItemNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {item.UpdateMjzzItemNot} UpdateMjzzItemNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateMjzzItemNot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateMjzzItemNot message.
         * @function verify
         * @memberof item.UpdateMjzzItemNot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateMjzzItemNot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cliParam != null && message.hasOwnProperty("cliParam"))
                if (!$util.isString(message.cliParam))
                    return "cliParam: string expected";
            if (message.update != null && message.hasOwnProperty("update")) {
                if (!Array.isArray(message.update))
                    return "update: array expected";
                for (var i = 0; i < message.update.length; ++i) {
                    var error = $root.item.ItemUpdate.verify(message.update[i]);
                    if (error)
                        return "update." + error;
                }
            }
            return null;
        };

        /**
         * Creates an UpdateMjzzItemNot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof item.UpdateMjzzItemNot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {item.UpdateMjzzItemNot} UpdateMjzzItemNot
         */
        UpdateMjzzItemNot.fromObject = function fromObject(object) {
            if (object instanceof $root.item.UpdateMjzzItemNot)
                return object;
            var message = new $root.item.UpdateMjzzItemNot();
            if (object.cliParam != null)
                message.cliParam = String(object.cliParam);
            if (object.update) {
                if (!Array.isArray(object.update))
                    throw TypeError(".item.UpdateMjzzItemNot.update: array expected");
                message.update = [];
                for (var i = 0; i < object.update.length; ++i) {
                    if (typeof object.update[i] !== "object")
                        throw TypeError(".item.UpdateMjzzItemNot.update: object expected");
                    message.update[i] = $root.item.ItemUpdate.fromObject(object.update[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an UpdateMjzzItemNot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof item.UpdateMjzzItemNot
         * @static
         * @param {item.UpdateMjzzItemNot} message UpdateMjzzItemNot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateMjzzItemNot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.update = [];
            if (options.defaults)
                object.cliParam = "";
            if (message.cliParam != null && message.hasOwnProperty("cliParam"))
                object.cliParam = message.cliParam;
            if (message.update && message.update.length) {
                object.update = [];
                for (var j = 0; j < message.update.length; ++j)
                    object.update[j] = $root.item.ItemUpdate.toObject(message.update[j], options);
            }
            return object;
        };

        /**
         * Converts this UpdateMjzzItemNot to JSON.
         * @function toJSON
         * @memberof item.UpdateMjzzItemNot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateMjzzItemNot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateMjzzItemNot;
    })();

    item.GetPlayerInfoReq = (function() {

        /**
         * Properties of a GetPlayerInfoReq.
         * @memberof item
         * @interface IGetPlayerInfoReq
         * @property {string|null} [uidList] GetPlayerInfoReq uidList
         */

        /**
         * Constructs a new GetPlayerInfoReq.
         * @memberof item
         * @classdesc Represents a GetPlayerInfoReq.
         * @implements IGetPlayerInfoReq
         * @constructor
         * @param {item.IGetPlayerInfoReq=} [properties] Properties to set
         */
        function GetPlayerInfoReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetPlayerInfoReq uidList.
         * @member {string} uidList
         * @memberof item.GetPlayerInfoReq
         * @instance
         */
        GetPlayerInfoReq.prototype.uidList = "";

        /**
         * Creates a new GetPlayerInfoReq instance using the specified properties.
         * @function create
         * @memberof item.GetPlayerInfoReq
         * @static
         * @param {item.IGetPlayerInfoReq=} [properties] Properties to set
         * @returns {item.GetPlayerInfoReq} GetPlayerInfoReq instance
         */
        GetPlayerInfoReq.create = function create(properties) {
            return new GetPlayerInfoReq(properties);
        };

        /**
         * Encodes the specified GetPlayerInfoReq message. Does not implicitly {@link item.GetPlayerInfoReq.verify|verify} messages.
         * @function encode
         * @memberof item.GetPlayerInfoReq
         * @static
         * @param {item.IGetPlayerInfoReq} message GetPlayerInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPlayerInfoReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uidList != null && message.hasOwnProperty("uidList"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uidList);
            return writer;
        };

        /**
         * Encodes the specified GetPlayerInfoReq message, length delimited. Does not implicitly {@link item.GetPlayerInfoReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof item.GetPlayerInfoReq
         * @static
         * @param {item.IGetPlayerInfoReq} message GetPlayerInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPlayerInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetPlayerInfoReq message from the specified reader or buffer.
         * @function decode
         * @memberof item.GetPlayerInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {item.GetPlayerInfoReq} GetPlayerInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPlayerInfoReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item.GetPlayerInfoReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uidList = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetPlayerInfoReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof item.GetPlayerInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {item.GetPlayerInfoReq} GetPlayerInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPlayerInfoReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetPlayerInfoReq message.
         * @function verify
         * @memberof item.GetPlayerInfoReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetPlayerInfoReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uidList != null && message.hasOwnProperty("uidList"))
                if (!$util.isString(message.uidList))
                    return "uidList: string expected";
            return null;
        };

        /**
         * Creates a GetPlayerInfoReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof item.GetPlayerInfoReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {item.GetPlayerInfoReq} GetPlayerInfoReq
         */
        GetPlayerInfoReq.fromObject = function fromObject(object) {
            if (object instanceof $root.item.GetPlayerInfoReq)
                return object;
            var message = new $root.item.GetPlayerInfoReq();
            if (object.uidList != null)
                message.uidList = String(object.uidList);
            return message;
        };

        /**
         * Creates a plain object from a GetPlayerInfoReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof item.GetPlayerInfoReq
         * @static
         * @param {item.GetPlayerInfoReq} message GetPlayerInfoReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetPlayerInfoReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.uidList = "";
            if (message.uidList != null && message.hasOwnProperty("uidList"))
                object.uidList = message.uidList;
            return object;
        };

        /**
         * Converts this GetPlayerInfoReq to JSON.
         * @function toJSON
         * @memberof item.GetPlayerInfoReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetPlayerInfoReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetPlayerInfoReq;
    })();

    item.PlayerInfo = (function() {

        /**
         * Properties of a PlayerInfo.
         * @memberof item
         * @interface IPlayerInfo
         * @property {number|Long|null} [uid] PlayerInfo uid
         * @property {Array.<item.IItemOpt>|null} [items] PlayerInfo items
         */

        /**
         * Constructs a new PlayerInfo.
         * @memberof item
         * @classdesc Represents a PlayerInfo.
         * @implements IPlayerInfo
         * @constructor
         * @param {item.IPlayerInfo=} [properties] Properties to set
         */
        function PlayerInfo(properties) {
            this.items = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerInfo uid.
         * @member {number|Long} uid
         * @memberof item.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PlayerInfo items.
         * @member {Array.<item.IItemOpt>} items
         * @memberof item.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.items = $util.emptyArray;

        /**
         * Creates a new PlayerInfo instance using the specified properties.
         * @function create
         * @memberof item.PlayerInfo
         * @static
         * @param {item.IPlayerInfo=} [properties] Properties to set
         * @returns {item.PlayerInfo} PlayerInfo instance
         */
        PlayerInfo.create = function create(properties) {
            return new PlayerInfo(properties);
        };

        /**
         * Encodes the specified PlayerInfo message. Does not implicitly {@link item.PlayerInfo.verify|verify} messages.
         * @function encode
         * @memberof item.PlayerInfo
         * @static
         * @param {item.IPlayerInfo} message PlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            if (message.items != null && message.items.length)
                for (var i = 0; i < message.items.length; ++i)
                    $root.item.ItemOpt.encode(message.items[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link item.PlayerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof item.PlayerInfo
         * @static
         * @param {item.IPlayerInfo} message PlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof item.PlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {item.PlayerInfo} PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item.PlayerInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int64();
                    break;
                case 2:
                    if (!(message.items && message.items.length))
                        message.items = [];
                    message.items.push($root.item.ItemOpt.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof item.PlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {item.PlayerInfo} PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerInfo message.
         * @function verify
         * @memberof item.PlayerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (var i = 0; i < message.items.length; ++i) {
                    var error = $root.item.ItemOpt.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof item.PlayerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {item.PlayerInfo} PlayerInfo
         */
        PlayerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.item.PlayerInfo)
                return object;
            var message = new $root.item.PlayerInfo();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".item.PlayerInfo.items: array expected");
                message.items = [];
                for (var i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".item.PlayerInfo.items: object expected");
                    message.items[i] = $root.item.ItemOpt.fromObject(object.items[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a PlayerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof item.PlayerInfo
         * @static
         * @param {item.PlayerInfo} message PlayerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.items = [];
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
            if (message.items && message.items.length) {
                object.items = [];
                for (var j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.item.ItemOpt.toObject(message.items[j], options);
            }
            return object;
        };

        /**
         * Converts this PlayerInfo to JSON.
         * @function toJSON
         * @memberof item.PlayerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerInfo;
    })();

    item.GetPlayerInfoRsp = (function() {

        /**
         * Properties of a GetPlayerInfoRsp.
         * @memberof item
         * @interface IGetPlayerInfoRsp
         * @property {number|null} [errCode] GetPlayerInfoRsp errCode
         * @property {string|null} [errMsg] GetPlayerInfoRsp errMsg
         * @property {Array.<item.IPlayerInfo>|null} [infoList] GetPlayerInfoRsp infoList
         */

        /**
         * Constructs a new GetPlayerInfoRsp.
         * @memberof item
         * @classdesc Represents a GetPlayerInfoRsp.
         * @implements IGetPlayerInfoRsp
         * @constructor
         * @param {item.IGetPlayerInfoRsp=} [properties] Properties to set
         */
        function GetPlayerInfoRsp(properties) {
            this.infoList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetPlayerInfoRsp errCode.
         * @member {number} errCode
         * @memberof item.GetPlayerInfoRsp
         * @instance
         */
        GetPlayerInfoRsp.prototype.errCode = 0;

        /**
         * GetPlayerInfoRsp errMsg.
         * @member {string} errMsg
         * @memberof item.GetPlayerInfoRsp
         * @instance
         */
        GetPlayerInfoRsp.prototype.errMsg = "";

        /**
         * GetPlayerInfoRsp infoList.
         * @member {Array.<item.IPlayerInfo>} infoList
         * @memberof item.GetPlayerInfoRsp
         * @instance
         */
        GetPlayerInfoRsp.prototype.infoList = $util.emptyArray;

        /**
         * Creates a new GetPlayerInfoRsp instance using the specified properties.
         * @function create
         * @memberof item.GetPlayerInfoRsp
         * @static
         * @param {item.IGetPlayerInfoRsp=} [properties] Properties to set
         * @returns {item.GetPlayerInfoRsp} GetPlayerInfoRsp instance
         */
        GetPlayerInfoRsp.create = function create(properties) {
            return new GetPlayerInfoRsp(properties);
        };

        /**
         * Encodes the specified GetPlayerInfoRsp message. Does not implicitly {@link item.GetPlayerInfoRsp.verify|verify} messages.
         * @function encode
         * @memberof item.GetPlayerInfoRsp
         * @static
         * @param {item.IGetPlayerInfoRsp} message GetPlayerInfoRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPlayerInfoRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            if (message.infoList != null && message.infoList.length)
                for (var i = 0; i < message.infoList.length; ++i)
                    $root.item.PlayerInfo.encode(message.infoList[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetPlayerInfoRsp message, length delimited. Does not implicitly {@link item.GetPlayerInfoRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof item.GetPlayerInfoRsp
         * @static
         * @param {item.IGetPlayerInfoRsp} message GetPlayerInfoRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPlayerInfoRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetPlayerInfoRsp message from the specified reader or buffer.
         * @function decode
         * @memberof item.GetPlayerInfoRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {item.GetPlayerInfoRsp} GetPlayerInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPlayerInfoRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item.GetPlayerInfoRsp();
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
                    if (!(message.infoList && message.infoList.length))
                        message.infoList = [];
                    message.infoList.push($root.item.PlayerInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetPlayerInfoRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof item.GetPlayerInfoRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {item.GetPlayerInfoRsp} GetPlayerInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPlayerInfoRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetPlayerInfoRsp message.
         * @function verify
         * @memberof item.GetPlayerInfoRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetPlayerInfoRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                if (!$util.isInteger(message.errCode))
                    return "errCode: integer expected";
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                if (!$util.isString(message.errMsg))
                    return "errMsg: string expected";
            if (message.infoList != null && message.hasOwnProperty("infoList")) {
                if (!Array.isArray(message.infoList))
                    return "infoList: array expected";
                for (var i = 0; i < message.infoList.length; ++i) {
                    var error = $root.item.PlayerInfo.verify(message.infoList[i]);
                    if (error)
                        return "infoList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetPlayerInfoRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof item.GetPlayerInfoRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {item.GetPlayerInfoRsp} GetPlayerInfoRsp
         */
        GetPlayerInfoRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.item.GetPlayerInfoRsp)
                return object;
            var message = new $root.item.GetPlayerInfoRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            if (object.infoList) {
                if (!Array.isArray(object.infoList))
                    throw TypeError(".item.GetPlayerInfoRsp.infoList: array expected");
                message.infoList = [];
                for (var i = 0; i < object.infoList.length; ++i) {
                    if (typeof object.infoList[i] !== "object")
                        throw TypeError(".item.GetPlayerInfoRsp.infoList: object expected");
                    message.infoList[i] = $root.item.PlayerInfo.fromObject(object.infoList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetPlayerInfoRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof item.GetPlayerInfoRsp
         * @static
         * @param {item.GetPlayerInfoRsp} message GetPlayerInfoRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetPlayerInfoRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.infoList = [];
            if (options.defaults) {
                object.errCode = 0;
                object.errMsg = "";
            }
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                object.errCode = message.errCode;
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                object.errMsg = message.errMsg;
            if (message.infoList && message.infoList.length) {
                object.infoList = [];
                for (var j = 0; j < message.infoList.length; ++j)
                    object.infoList[j] = $root.item.PlayerInfo.toObject(message.infoList[j], options);
            }
            return object;
        };

        /**
         * Converts this GetPlayerInfoRsp to JSON.
         * @function toJSON
         * @memberof item.GetPlayerInfoRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetPlayerInfoRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetPlayerInfoRsp;
    })();

    item.PlayerMsgNot = (function() {

        /**
         * Properties of a PlayerMsgNot.
         * @memberof item
         * @interface IPlayerMsgNot
         * @property {number|Long|null} [uid] PlayerMsgNot uid
         * @property {string|null} [route] PlayerMsgNot route
         * @property {Uint8Array|null} [body] PlayerMsgNot body
         */

        /**
         * Constructs a new PlayerMsgNot.
         * @memberof item
         * @classdesc Represents a PlayerMsgNot.
         * @implements IPlayerMsgNot
         * @constructor
         * @param {item.IPlayerMsgNot=} [properties] Properties to set
         */
        function PlayerMsgNot(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerMsgNot uid.
         * @member {number|Long} uid
         * @memberof item.PlayerMsgNot
         * @instance
         */
        PlayerMsgNot.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PlayerMsgNot route.
         * @member {string} route
         * @memberof item.PlayerMsgNot
         * @instance
         */
        PlayerMsgNot.prototype.route = "";

        /**
         * PlayerMsgNot body.
         * @member {Uint8Array} body
         * @memberof item.PlayerMsgNot
         * @instance
         */
        PlayerMsgNot.prototype.body = $util.newBuffer([]);

        /**
         * Creates a new PlayerMsgNot instance using the specified properties.
         * @function create
         * @memberof item.PlayerMsgNot
         * @static
         * @param {item.IPlayerMsgNot=} [properties] Properties to set
         * @returns {item.PlayerMsgNot} PlayerMsgNot instance
         */
        PlayerMsgNot.create = function create(properties) {
            return new PlayerMsgNot(properties);
        };

        /**
         * Encodes the specified PlayerMsgNot message. Does not implicitly {@link item.PlayerMsgNot.verify|verify} messages.
         * @function encode
         * @memberof item.PlayerMsgNot
         * @static
         * @param {item.IPlayerMsgNot} message PlayerMsgNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerMsgNot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            if (message.route != null && message.hasOwnProperty("route"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.route);
            if (message.body != null && message.hasOwnProperty("body"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.body);
            return writer;
        };

        /**
         * Encodes the specified PlayerMsgNot message, length delimited. Does not implicitly {@link item.PlayerMsgNot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof item.PlayerMsgNot
         * @static
         * @param {item.IPlayerMsgNot} message PlayerMsgNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerMsgNot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerMsgNot message from the specified reader or buffer.
         * @function decode
         * @memberof item.PlayerMsgNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {item.PlayerMsgNot} PlayerMsgNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerMsgNot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item.PlayerMsgNot();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int64();
                    break;
                case 2:
                    message.route = reader.string();
                    break;
                case 3:
                    message.body = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerMsgNot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof item.PlayerMsgNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {item.PlayerMsgNot} PlayerMsgNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerMsgNot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerMsgNot message.
         * @function verify
         * @memberof item.PlayerMsgNot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerMsgNot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.route != null && message.hasOwnProperty("route"))
                if (!$util.isString(message.route))
                    return "route: string expected";
            if (message.body != null && message.hasOwnProperty("body"))
                if (!(message.body && typeof message.body.length === "number" || $util.isString(message.body)))
                    return "body: buffer expected";
            return null;
        };

        /**
         * Creates a PlayerMsgNot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof item.PlayerMsgNot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {item.PlayerMsgNot} PlayerMsgNot
         */
        PlayerMsgNot.fromObject = function fromObject(object) {
            if (object instanceof $root.item.PlayerMsgNot)
                return object;
            var message = new $root.item.PlayerMsgNot();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.route != null)
                message.route = String(object.route);
            if (object.body != null)
                if (typeof object.body === "string")
                    $util.base64.decode(object.body, message.body = $util.newBuffer($util.base64.length(object.body)), 0);
                else if (object.body.length)
                    message.body = object.body;
            return message;
        };

        /**
         * Creates a plain object from a PlayerMsgNot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof item.PlayerMsgNot
         * @static
         * @param {item.PlayerMsgNot} message PlayerMsgNot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerMsgNot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.route = "";
                if (options.bytes === String)
                    object.body = "";
                else {
                    object.body = [];
                    if (options.bytes !== Array)
                        object.body = $util.newBuffer(object.body);
                }
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.route != null && message.hasOwnProperty("route"))
                object.route = message.route;
            if (message.body != null && message.hasOwnProperty("body"))
                object.body = options.bytes === String ? $util.base64.encode(message.body, 0, message.body.length) : options.bytes === Array ? Array.prototype.slice.call(message.body) : message.body;
            return object;
        };

        /**
         * Converts this PlayerMsgNot to JSON.
         * @function toJSON
         * @memberof item.PlayerMsgNot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerMsgNot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerMsgNot;
    })();

    item.UpdateHeadReq = (function() {

        /**
         * Properties of an UpdateHeadReq.
         * @memberof item
         * @interface IUpdateHeadReq
         * @property {number|Long|null} [uid] UpdateHeadReq uid
         * @property {number|Long|null} [index] UpdateHeadReq index
         */

        /**
         * Constructs a new UpdateHeadReq.
         * @memberof item
         * @classdesc Represents an UpdateHeadReq.
         * @implements IUpdateHeadReq
         * @constructor
         * @param {item.IUpdateHeadReq=} [properties] Properties to set
         */
        function UpdateHeadReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateHeadReq uid.
         * @member {number|Long} uid
         * @memberof item.UpdateHeadReq
         * @instance
         */
        UpdateHeadReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UpdateHeadReq index.
         * @member {number|Long} index
         * @memberof item.UpdateHeadReq
         * @instance
         */
        UpdateHeadReq.prototype.index = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new UpdateHeadReq instance using the specified properties.
         * @function create
         * @memberof item.UpdateHeadReq
         * @static
         * @param {item.IUpdateHeadReq=} [properties] Properties to set
         * @returns {item.UpdateHeadReq} UpdateHeadReq instance
         */
        UpdateHeadReq.create = function create(properties) {
            return new UpdateHeadReq(properties);
        };

        /**
         * Encodes the specified UpdateHeadReq message. Does not implicitly {@link item.UpdateHeadReq.verify|verify} messages.
         * @function encode
         * @memberof item.UpdateHeadReq
         * @static
         * @param {item.IUpdateHeadReq} message UpdateHeadReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateHeadReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            if (message.index != null && message.hasOwnProperty("index"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.index);
            return writer;
        };

        /**
         * Encodes the specified UpdateHeadReq message, length delimited. Does not implicitly {@link item.UpdateHeadReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof item.UpdateHeadReq
         * @static
         * @param {item.IUpdateHeadReq} message UpdateHeadReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateHeadReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateHeadReq message from the specified reader or buffer.
         * @function decode
         * @memberof item.UpdateHeadReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {item.UpdateHeadReq} UpdateHeadReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateHeadReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item.UpdateHeadReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int64();
                    break;
                case 2:
                    message.index = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateHeadReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof item.UpdateHeadReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {item.UpdateHeadReq} UpdateHeadReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateHeadReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateHeadReq message.
         * @function verify
         * @memberof item.UpdateHeadReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateHeadReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.index != null && message.hasOwnProperty("index"))
                if (!$util.isInteger(message.index) && !(message.index && $util.isInteger(message.index.low) && $util.isInteger(message.index.high)))
                    return "index: integer|Long expected";
            return null;
        };

        /**
         * Creates an UpdateHeadReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof item.UpdateHeadReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {item.UpdateHeadReq} UpdateHeadReq
         */
        UpdateHeadReq.fromObject = function fromObject(object) {
            if (object instanceof $root.item.UpdateHeadReq)
                return object;
            var message = new $root.item.UpdateHeadReq();
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
                if ($util.Long)
                    (message.index = $util.Long.fromValue(object.index)).unsigned = false;
                else if (typeof object.index === "string")
                    message.index = parseInt(object.index, 10);
                else if (typeof object.index === "number")
                    message.index = object.index;
                else if (typeof object.index === "object")
                    message.index = new $util.LongBits(object.index.low >>> 0, object.index.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an UpdateHeadReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof item.UpdateHeadReq
         * @static
         * @param {item.UpdateHeadReq} message UpdateHeadReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateHeadReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.index = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.index = options.longs === String ? "0" : 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.index != null && message.hasOwnProperty("index"))
                if (typeof message.index === "number")
                    object.index = options.longs === String ? String(message.index) : message.index;
                else
                    object.index = options.longs === String ? $util.Long.prototype.toString.call(message.index) : options.longs === Number ? new $util.LongBits(message.index.low >>> 0, message.index.high >>> 0).toNumber() : message.index;
            return object;
        };

        /**
         * Converts this UpdateHeadReq to JSON.
         * @function toJSON
         * @memberof item.UpdateHeadReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateHeadReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateHeadReq;
    })();

    item.UpdateHeadRsp = (function() {

        /**
         * Properties of an UpdateHeadRsp.
         * @memberof item
         * @interface IUpdateHeadRsp
         * @property {number|null} [errCode] UpdateHeadRsp errCode
         * @property {string|null} [errMsg] UpdateHeadRsp errMsg
         */

        /**
         * Constructs a new UpdateHeadRsp.
         * @memberof item
         * @classdesc Represents an UpdateHeadRsp.
         * @implements IUpdateHeadRsp
         * @constructor
         * @param {item.IUpdateHeadRsp=} [properties] Properties to set
         */
        function UpdateHeadRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateHeadRsp errCode.
         * @member {number} errCode
         * @memberof item.UpdateHeadRsp
         * @instance
         */
        UpdateHeadRsp.prototype.errCode = 0;

        /**
         * UpdateHeadRsp errMsg.
         * @member {string} errMsg
         * @memberof item.UpdateHeadRsp
         * @instance
         */
        UpdateHeadRsp.prototype.errMsg = "";

        /**
         * Creates a new UpdateHeadRsp instance using the specified properties.
         * @function create
         * @memberof item.UpdateHeadRsp
         * @static
         * @param {item.IUpdateHeadRsp=} [properties] Properties to set
         * @returns {item.UpdateHeadRsp} UpdateHeadRsp instance
         */
        UpdateHeadRsp.create = function create(properties) {
            return new UpdateHeadRsp(properties);
        };

        /**
         * Encodes the specified UpdateHeadRsp message. Does not implicitly {@link item.UpdateHeadRsp.verify|verify} messages.
         * @function encode
         * @memberof item.UpdateHeadRsp
         * @static
         * @param {item.IUpdateHeadRsp} message UpdateHeadRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateHeadRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            return writer;
        };

        /**
         * Encodes the specified UpdateHeadRsp message, length delimited. Does not implicitly {@link item.UpdateHeadRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof item.UpdateHeadRsp
         * @static
         * @param {item.IUpdateHeadRsp} message UpdateHeadRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateHeadRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateHeadRsp message from the specified reader or buffer.
         * @function decode
         * @memberof item.UpdateHeadRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {item.UpdateHeadRsp} UpdateHeadRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateHeadRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item.UpdateHeadRsp();
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
         * Decodes an UpdateHeadRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof item.UpdateHeadRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {item.UpdateHeadRsp} UpdateHeadRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateHeadRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateHeadRsp message.
         * @function verify
         * @memberof item.UpdateHeadRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateHeadRsp.verify = function verify(message) {
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
         * Creates an UpdateHeadRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof item.UpdateHeadRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {item.UpdateHeadRsp} UpdateHeadRsp
         */
        UpdateHeadRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.item.UpdateHeadRsp)
                return object;
            var message = new $root.item.UpdateHeadRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            return message;
        };

        /**
         * Creates a plain object from an UpdateHeadRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof item.UpdateHeadRsp
         * @static
         * @param {item.UpdateHeadRsp} message UpdateHeadRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateHeadRsp.toObject = function toObject(message, options) {
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
         * Converts this UpdateHeadRsp to JSON.
         * @function toJSON
         * @memberof item.UpdateHeadRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateHeadRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateHeadRsp;
    })();

    item.UpdateHeadFrameReq = (function() {

        /**
         * Properties of an UpdateHeadFrameReq.
         * @memberof item
         * @interface IUpdateHeadFrameReq
         * @property {number|Long|null} [uid] UpdateHeadFrameReq uid
         * @property {number|Long|null} [index] UpdateHeadFrameReq index
         */

        /**
         * Constructs a new UpdateHeadFrameReq.
         * @memberof item
         * @classdesc Represents an UpdateHeadFrameReq.
         * @implements IUpdateHeadFrameReq
         * @constructor
         * @param {item.IUpdateHeadFrameReq=} [properties] Properties to set
         */
        function UpdateHeadFrameReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateHeadFrameReq uid.
         * @member {number|Long} uid
         * @memberof item.UpdateHeadFrameReq
         * @instance
         */
        UpdateHeadFrameReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UpdateHeadFrameReq index.
         * @member {number|Long} index
         * @memberof item.UpdateHeadFrameReq
         * @instance
         */
        UpdateHeadFrameReq.prototype.index = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new UpdateHeadFrameReq instance using the specified properties.
         * @function create
         * @memberof item.UpdateHeadFrameReq
         * @static
         * @param {item.IUpdateHeadFrameReq=} [properties] Properties to set
         * @returns {item.UpdateHeadFrameReq} UpdateHeadFrameReq instance
         */
        UpdateHeadFrameReq.create = function create(properties) {
            return new UpdateHeadFrameReq(properties);
        };

        /**
         * Encodes the specified UpdateHeadFrameReq message. Does not implicitly {@link item.UpdateHeadFrameReq.verify|verify} messages.
         * @function encode
         * @memberof item.UpdateHeadFrameReq
         * @static
         * @param {item.IUpdateHeadFrameReq} message UpdateHeadFrameReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateHeadFrameReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            if (message.index != null && message.hasOwnProperty("index"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.index);
            return writer;
        };

        /**
         * Encodes the specified UpdateHeadFrameReq message, length delimited. Does not implicitly {@link item.UpdateHeadFrameReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof item.UpdateHeadFrameReq
         * @static
         * @param {item.IUpdateHeadFrameReq} message UpdateHeadFrameReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateHeadFrameReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateHeadFrameReq message from the specified reader or buffer.
         * @function decode
         * @memberof item.UpdateHeadFrameReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {item.UpdateHeadFrameReq} UpdateHeadFrameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateHeadFrameReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item.UpdateHeadFrameReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int64();
                    break;
                case 2:
                    message.index = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateHeadFrameReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof item.UpdateHeadFrameReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {item.UpdateHeadFrameReq} UpdateHeadFrameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateHeadFrameReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateHeadFrameReq message.
         * @function verify
         * @memberof item.UpdateHeadFrameReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateHeadFrameReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.index != null && message.hasOwnProperty("index"))
                if (!$util.isInteger(message.index) && !(message.index && $util.isInteger(message.index.low) && $util.isInteger(message.index.high)))
                    return "index: integer|Long expected";
            return null;
        };

        /**
         * Creates an UpdateHeadFrameReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof item.UpdateHeadFrameReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {item.UpdateHeadFrameReq} UpdateHeadFrameReq
         */
        UpdateHeadFrameReq.fromObject = function fromObject(object) {
            if (object instanceof $root.item.UpdateHeadFrameReq)
                return object;
            var message = new $root.item.UpdateHeadFrameReq();
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
                if ($util.Long)
                    (message.index = $util.Long.fromValue(object.index)).unsigned = false;
                else if (typeof object.index === "string")
                    message.index = parseInt(object.index, 10);
                else if (typeof object.index === "number")
                    message.index = object.index;
                else if (typeof object.index === "object")
                    message.index = new $util.LongBits(object.index.low >>> 0, object.index.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an UpdateHeadFrameReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof item.UpdateHeadFrameReq
         * @static
         * @param {item.UpdateHeadFrameReq} message UpdateHeadFrameReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateHeadFrameReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.index = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.index = options.longs === String ? "0" : 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.index != null && message.hasOwnProperty("index"))
                if (typeof message.index === "number")
                    object.index = options.longs === String ? String(message.index) : message.index;
                else
                    object.index = options.longs === String ? $util.Long.prototype.toString.call(message.index) : options.longs === Number ? new $util.LongBits(message.index.low >>> 0, message.index.high >>> 0).toNumber() : message.index;
            return object;
        };

        /**
         * Converts this UpdateHeadFrameReq to JSON.
         * @function toJSON
         * @memberof item.UpdateHeadFrameReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateHeadFrameReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateHeadFrameReq;
    })();

    item.UpdateHeadFrameRsp = (function() {

        /**
         * Properties of an UpdateHeadFrameRsp.
         * @memberof item
         * @interface IUpdateHeadFrameRsp
         * @property {number|null} [errCode] UpdateHeadFrameRsp errCode
         * @property {string|null} [errMsg] UpdateHeadFrameRsp errMsg
         */

        /**
         * Constructs a new UpdateHeadFrameRsp.
         * @memberof item
         * @classdesc Represents an UpdateHeadFrameRsp.
         * @implements IUpdateHeadFrameRsp
         * @constructor
         * @param {item.IUpdateHeadFrameRsp=} [properties] Properties to set
         */
        function UpdateHeadFrameRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateHeadFrameRsp errCode.
         * @member {number} errCode
         * @memberof item.UpdateHeadFrameRsp
         * @instance
         */
        UpdateHeadFrameRsp.prototype.errCode = 0;

        /**
         * UpdateHeadFrameRsp errMsg.
         * @member {string} errMsg
         * @memberof item.UpdateHeadFrameRsp
         * @instance
         */
        UpdateHeadFrameRsp.prototype.errMsg = "";

        /**
         * Creates a new UpdateHeadFrameRsp instance using the specified properties.
         * @function create
         * @memberof item.UpdateHeadFrameRsp
         * @static
         * @param {item.IUpdateHeadFrameRsp=} [properties] Properties to set
         * @returns {item.UpdateHeadFrameRsp} UpdateHeadFrameRsp instance
         */
        UpdateHeadFrameRsp.create = function create(properties) {
            return new UpdateHeadFrameRsp(properties);
        };

        /**
         * Encodes the specified UpdateHeadFrameRsp message. Does not implicitly {@link item.UpdateHeadFrameRsp.verify|verify} messages.
         * @function encode
         * @memberof item.UpdateHeadFrameRsp
         * @static
         * @param {item.IUpdateHeadFrameRsp} message UpdateHeadFrameRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateHeadFrameRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            return writer;
        };

        /**
         * Encodes the specified UpdateHeadFrameRsp message, length delimited. Does not implicitly {@link item.UpdateHeadFrameRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof item.UpdateHeadFrameRsp
         * @static
         * @param {item.IUpdateHeadFrameRsp} message UpdateHeadFrameRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateHeadFrameRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateHeadFrameRsp message from the specified reader or buffer.
         * @function decode
         * @memberof item.UpdateHeadFrameRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {item.UpdateHeadFrameRsp} UpdateHeadFrameRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateHeadFrameRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item.UpdateHeadFrameRsp();
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
         * Decodes an UpdateHeadFrameRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof item.UpdateHeadFrameRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {item.UpdateHeadFrameRsp} UpdateHeadFrameRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateHeadFrameRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateHeadFrameRsp message.
         * @function verify
         * @memberof item.UpdateHeadFrameRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateHeadFrameRsp.verify = function verify(message) {
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
         * Creates an UpdateHeadFrameRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof item.UpdateHeadFrameRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {item.UpdateHeadFrameRsp} UpdateHeadFrameRsp
         */
        UpdateHeadFrameRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.item.UpdateHeadFrameRsp)
                return object;
            var message = new $root.item.UpdateHeadFrameRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            return message;
        };

        /**
         * Creates a plain object from an UpdateHeadFrameRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof item.UpdateHeadFrameRsp
         * @static
         * @param {item.UpdateHeadFrameRsp} message UpdateHeadFrameRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateHeadFrameRsp.toObject = function toObject(message, options) {
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
         * Converts this UpdateHeadFrameRsp to JSON.
         * @function toJSON
         * @memberof item.UpdateHeadFrameRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateHeadFrameRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateHeadFrameRsp;
    })();

    item.GetItemNumReq = (function() {

        /**
         * Properties of a GetItemNumReq.
         * @memberof item
         * @interface IGetItemNumReq
         * @property {number|Long|null} [uid] GetItemNumReq uid
         * @property {string|null} [itemList] GetItemNumReq itemList
         */

        /**
         * Constructs a new GetItemNumReq.
         * @memberof item
         * @classdesc Represents a GetItemNumReq.
         * @implements IGetItemNumReq
         * @constructor
         * @param {item.IGetItemNumReq=} [properties] Properties to set
         */
        function GetItemNumReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetItemNumReq uid.
         * @member {number|Long} uid
         * @memberof item.GetItemNumReq
         * @instance
         */
        GetItemNumReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetItemNumReq itemList.
         * @member {string} itemList
         * @memberof item.GetItemNumReq
         * @instance
         */
        GetItemNumReq.prototype.itemList = "";

        /**
         * Creates a new GetItemNumReq instance using the specified properties.
         * @function create
         * @memberof item.GetItemNumReq
         * @static
         * @param {item.IGetItemNumReq=} [properties] Properties to set
         * @returns {item.GetItemNumReq} GetItemNumReq instance
         */
        GetItemNumReq.create = function create(properties) {
            return new GetItemNumReq(properties);
        };

        /**
         * Encodes the specified GetItemNumReq message. Does not implicitly {@link item.GetItemNumReq.verify|verify} messages.
         * @function encode
         * @memberof item.GetItemNumReq
         * @static
         * @param {item.IGetItemNumReq} message GetItemNumReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetItemNumReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            if (message.itemList != null && message.hasOwnProperty("itemList"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.itemList);
            return writer;
        };

        /**
         * Encodes the specified GetItemNumReq message, length delimited. Does not implicitly {@link item.GetItemNumReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof item.GetItemNumReq
         * @static
         * @param {item.IGetItemNumReq} message GetItemNumReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetItemNumReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetItemNumReq message from the specified reader or buffer.
         * @function decode
         * @memberof item.GetItemNumReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {item.GetItemNumReq} GetItemNumReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetItemNumReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item.GetItemNumReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int64();
                    break;
                case 2:
                    message.itemList = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetItemNumReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof item.GetItemNumReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {item.GetItemNumReq} GetItemNumReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetItemNumReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetItemNumReq message.
         * @function verify
         * @memberof item.GetItemNumReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetItemNumReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.itemList != null && message.hasOwnProperty("itemList"))
                if (!$util.isString(message.itemList))
                    return "itemList: string expected";
            return null;
        };

        /**
         * Creates a GetItemNumReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof item.GetItemNumReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {item.GetItemNumReq} GetItemNumReq
         */
        GetItemNumReq.fromObject = function fromObject(object) {
            if (object instanceof $root.item.GetItemNumReq)
                return object;
            var message = new $root.item.GetItemNumReq();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.itemList != null)
                message.itemList = String(object.itemList);
            return message;
        };

        /**
         * Creates a plain object from a GetItemNumReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof item.GetItemNumReq
         * @static
         * @param {item.GetItemNumReq} message GetItemNumReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetItemNumReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.itemList = "";
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.itemList != null && message.hasOwnProperty("itemList"))
                object.itemList = message.itemList;
            return object;
        };

        /**
         * Converts this GetItemNumReq to JSON.
         * @function toJSON
         * @memberof item.GetItemNumReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetItemNumReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetItemNumReq;
    })();

    item.GetItemNumRsp = (function() {

        /**
         * Properties of a GetItemNumRsp.
         * @memberof item
         * @interface IGetItemNumRsp
         * @property {number|null} [errCode] GetItemNumRsp errCode
         * @property {string|null} [errMsg] GetItemNumRsp errMsg
         * @property {Object.<string,number|Long>|null} [items] GetItemNumRsp items
         */

        /**
         * Constructs a new GetItemNumRsp.
         * @memberof item
         * @classdesc Represents a GetItemNumRsp.
         * @implements IGetItemNumRsp
         * @constructor
         * @param {item.IGetItemNumRsp=} [properties] Properties to set
         */
        function GetItemNumRsp(properties) {
            this.items = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetItemNumRsp errCode.
         * @member {number} errCode
         * @memberof item.GetItemNumRsp
         * @instance
         */
        GetItemNumRsp.prototype.errCode = 0;

        /**
         * GetItemNumRsp errMsg.
         * @member {string} errMsg
         * @memberof item.GetItemNumRsp
         * @instance
         */
        GetItemNumRsp.prototype.errMsg = "";

        /**
         * GetItemNumRsp items.
         * @member {Object.<string,number|Long>} items
         * @memberof item.GetItemNumRsp
         * @instance
         */
        GetItemNumRsp.prototype.items = $util.emptyObject;

        /**
         * Creates a new GetItemNumRsp instance using the specified properties.
         * @function create
         * @memberof item.GetItemNumRsp
         * @static
         * @param {item.IGetItemNumRsp=} [properties] Properties to set
         * @returns {item.GetItemNumRsp} GetItemNumRsp instance
         */
        GetItemNumRsp.create = function create(properties) {
            return new GetItemNumRsp(properties);
        };

        /**
         * Encodes the specified GetItemNumRsp message. Does not implicitly {@link item.GetItemNumRsp.verify|verify} messages.
         * @function encode
         * @memberof item.GetItemNumRsp
         * @static
         * @param {item.IGetItemNumRsp} message GetItemNumRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetItemNumRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            if (message.items != null && message.hasOwnProperty("items"))
                for (var keys = Object.keys(message.items), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]).uint32(/* id 2, wireType 0 =*/16).int64(message.items[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetItemNumRsp message, length delimited. Does not implicitly {@link item.GetItemNumRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof item.GetItemNumRsp
         * @static
         * @param {item.IGetItemNumRsp} message GetItemNumRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetItemNumRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetItemNumRsp message from the specified reader or buffer.
         * @function decode
         * @memberof item.GetItemNumRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {item.GetItemNumRsp} GetItemNumRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetItemNumRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item.GetItemNumRsp(), key;
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
                    reader.skip().pos++;
                    if (message.items === $util.emptyObject)
                        message.items = {};
                    key = reader.int32();
                    reader.pos++;
                    message.items[key] = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetItemNumRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof item.GetItemNumRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {item.GetItemNumRsp} GetItemNumRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetItemNumRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetItemNumRsp message.
         * @function verify
         * @memberof item.GetItemNumRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetItemNumRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                if (!$util.isInteger(message.errCode))
                    return "errCode: integer expected";
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                if (!$util.isString(message.errMsg))
                    return "errMsg: string expected";
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!$util.isObject(message.items))
                    return "items: object expected";
                var key = Object.keys(message.items);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "items: integer key{k:int32} expected";
                    if (!$util.isInteger(message.items[key[i]]) && !(message.items[key[i]] && $util.isInteger(message.items[key[i]].low) && $util.isInteger(message.items[key[i]].high)))
                        return "items: integer|Long{k:int32} expected";
                }
            }
            return null;
        };

        /**
         * Creates a GetItemNumRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof item.GetItemNumRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {item.GetItemNumRsp} GetItemNumRsp
         */
        GetItemNumRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.item.GetItemNumRsp)
                return object;
            var message = new $root.item.GetItemNumRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            if (object.items) {
                if (typeof object.items !== "object")
                    throw TypeError(".item.GetItemNumRsp.items: object expected");
                message.items = {};
                for (var keys = Object.keys(object.items), i = 0; i < keys.length; ++i)
                    if ($util.Long)
                        (message.items[keys[i]] = $util.Long.fromValue(object.items[keys[i]])).unsigned = false;
                    else if (typeof object.items[keys[i]] === "string")
                        message.items[keys[i]] = parseInt(object.items[keys[i]], 10);
                    else if (typeof object.items[keys[i]] === "number")
                        message.items[keys[i]] = object.items[keys[i]];
                    else if (typeof object.items[keys[i]] === "object")
                        message.items[keys[i]] = new $util.LongBits(object.items[keys[i]].low >>> 0, object.items[keys[i]].high >>> 0).toNumber();
            }
            return message;
        };

        /**
         * Creates a plain object from a GetItemNumRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof item.GetItemNumRsp
         * @static
         * @param {item.GetItemNumRsp} message GetItemNumRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetItemNumRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.items = {};
            if (options.defaults) {
                object.errCode = 0;
                object.errMsg = "";
            }
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                object.errCode = message.errCode;
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                object.errMsg = message.errMsg;
            var keys2;
            if (message.items && (keys2 = Object.keys(message.items)).length) {
                object.items = {};
                for (var j = 0; j < keys2.length; ++j)
                    if (typeof message.items[keys2[j]] === "number")
                        object.items[keys2[j]] = options.longs === String ? String(message.items[keys2[j]]) : message.items[keys2[j]];
                    else
                        object.items[keys2[j]] = options.longs === String ? $util.Long.prototype.toString.call(message.items[keys2[j]]) : options.longs === Number ? new $util.LongBits(message.items[keys2[j]].low >>> 0, message.items[keys2[j]].high >>> 0).toNumber() : message.items[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this GetItemNumRsp to JSON.
         * @function toJSON
         * @memberof item.GetItemNumRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetItemNumRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetItemNumRsp;
    })();

    item.ItemVipLevelNot = (function() {

        /**
         * Properties of an ItemVipLevelNot.
         * @memberof item
         * @interface IItemVipLevelNot
         * @property {Object.<string,string>|null} [params] ItemVipLevelNot params
         */

        /**
         * Constructs a new ItemVipLevelNot.
         * @memberof item
         * @classdesc Represents an ItemVipLevelNot.
         * @implements IItemVipLevelNot
         * @constructor
         * @param {item.IItemVipLevelNot=} [properties] Properties to set
         */
        function ItemVipLevelNot(properties) {
            this.params = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ItemVipLevelNot params.
         * @member {Object.<string,string>} params
         * @memberof item.ItemVipLevelNot
         * @instance
         */
        ItemVipLevelNot.prototype.params = $util.emptyObject;

        /**
         * Creates a new ItemVipLevelNot instance using the specified properties.
         * @function create
         * @memberof item.ItemVipLevelNot
         * @static
         * @param {item.IItemVipLevelNot=} [properties] Properties to set
         * @returns {item.ItemVipLevelNot} ItemVipLevelNot instance
         */
        ItemVipLevelNot.create = function create(properties) {
            return new ItemVipLevelNot(properties);
        };

        /**
         * Encodes the specified ItemVipLevelNot message. Does not implicitly {@link item.ItemVipLevelNot.verify|verify} messages.
         * @function encode
         * @memberof item.ItemVipLevelNot
         * @static
         * @param {item.IItemVipLevelNot} message ItemVipLevelNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemVipLevelNot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.params != null && message.hasOwnProperty("params"))
                for (var keys = Object.keys(message.params), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.params[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ItemVipLevelNot message, length delimited. Does not implicitly {@link item.ItemVipLevelNot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof item.ItemVipLevelNot
         * @static
         * @param {item.IItemVipLevelNot} message ItemVipLevelNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemVipLevelNot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ItemVipLevelNot message from the specified reader or buffer.
         * @function decode
         * @memberof item.ItemVipLevelNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {item.ItemVipLevelNot} ItemVipLevelNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemVipLevelNot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item.ItemVipLevelNot(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    reader.skip().pos++;
                    if (message.params === $util.emptyObject)
                        message.params = {};
                    key = reader.string();
                    reader.pos++;
                    message.params[key] = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ItemVipLevelNot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof item.ItemVipLevelNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {item.ItemVipLevelNot} ItemVipLevelNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemVipLevelNot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ItemVipLevelNot message.
         * @function verify
         * @memberof item.ItemVipLevelNot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ItemVipLevelNot.verify = function verify(message) {
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
         * Creates an ItemVipLevelNot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof item.ItemVipLevelNot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {item.ItemVipLevelNot} ItemVipLevelNot
         */
        ItemVipLevelNot.fromObject = function fromObject(object) {
            if (object instanceof $root.item.ItemVipLevelNot)
                return object;
            var message = new $root.item.ItemVipLevelNot();
            if (object.params) {
                if (typeof object.params !== "object")
                    throw TypeError(".item.ItemVipLevelNot.params: object expected");
                message.params = {};
                for (var keys = Object.keys(object.params), i = 0; i < keys.length; ++i)
                    message.params[keys[i]] = String(object.params[keys[i]]);
            }
            return message;
        };

        /**
         * Creates a plain object from an ItemVipLevelNot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof item.ItemVipLevelNot
         * @static
         * @param {item.ItemVipLevelNot} message ItemVipLevelNot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ItemVipLevelNot.toObject = function toObject(message, options) {
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
         * Converts this ItemVipLevelNot to JSON.
         * @function toJSON
         * @memberof item.ItemVipLevelNot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ItemVipLevelNot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ItemVipLevelNot;
    })();

    return item;
})();

module.exports = $root.item;
