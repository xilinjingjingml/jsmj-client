/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.lobby_rank = (function() {

    /**
     * Namespace lobby_rank.
     * @exports lobby_rank
     * @namespace
     */
    var lobby_rank = {};

    lobby_rank.RankData = (function() {

        /**
         * Properties of a RankData.
         * @memberof lobby_rank
         * @interface IRankData
         * @property {number|null} [index] RankData index
         * @property {number|Long|null} [uid] RankData uid
         * @property {string|null} [username] RankData username
         * @property {string|null} [faceUrl] RankData faceUrl
         * @property {number|Long|null} [money] RankData money
         */

        /**
         * Constructs a new RankData.
         * @memberof lobby_rank
         * @classdesc Represents a RankData.
         * @implements IRankData
         * @constructor
         * @param {lobby_rank.IRankData=} [properties] Properties to set
         */
        function RankData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RankData index.
         * @member {number} index
         * @memberof lobby_rank.RankData
         * @instance
         */
        RankData.prototype.index = 0;

        /**
         * RankData uid.
         * @member {number|Long} uid
         * @memberof lobby_rank.RankData
         * @instance
         */
        RankData.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RankData username.
         * @member {string} username
         * @memberof lobby_rank.RankData
         * @instance
         */
        RankData.prototype.username = "";

        /**
         * RankData faceUrl.
         * @member {string} faceUrl
         * @memberof lobby_rank.RankData
         * @instance
         */
        RankData.prototype.faceUrl = "";

        /**
         * RankData money.
         * @member {number|Long} money
         * @memberof lobby_rank.RankData
         * @instance
         */
        RankData.prototype.money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new RankData instance using the specified properties.
         * @function create
         * @memberof lobby_rank.RankData
         * @static
         * @param {lobby_rank.IRankData=} [properties] Properties to set
         * @returns {lobby_rank.RankData} RankData instance
         */
        RankData.create = function create(properties) {
            return new RankData(properties);
        };

        /**
         * Encodes the specified RankData message. Does not implicitly {@link lobby_rank.RankData.verify|verify} messages.
         * @function encode
         * @memberof lobby_rank.RankData
         * @static
         * @param {lobby_rank.IRankData} message RankData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RankData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.index != null && message.hasOwnProperty("index"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.index);
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.uid);
            if (message.username != null && message.hasOwnProperty("username"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.username);
            if (message.faceUrl != null && message.hasOwnProperty("faceUrl"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.faceUrl);
            if (message.money != null && message.hasOwnProperty("money"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.money);
            return writer;
        };

        /**
         * Encodes the specified RankData message, length delimited. Does not implicitly {@link lobby_rank.RankData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lobby_rank.RankData
         * @static
         * @param {lobby_rank.IRankData} message RankData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RankData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RankData message from the specified reader or buffer.
         * @function decode
         * @memberof lobby_rank.RankData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lobby_rank.RankData} RankData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RankData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby_rank.RankData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.index = reader.int32();
                    break;
                case 2:
                    message.uid = reader.int64();
                    break;
                case 3:
                    message.username = reader.string();
                    break;
                case 4:
                    message.faceUrl = reader.string();
                    break;
                case 5:
                    message.money = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RankData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lobby_rank.RankData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lobby_rank.RankData} RankData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RankData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RankData message.
         * @function verify
         * @memberof lobby_rank.RankData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RankData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.index != null && message.hasOwnProperty("index"))
                if (!$util.isInteger(message.index))
                    return "index: integer expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.faceUrl != null && message.hasOwnProperty("faceUrl"))
                if (!$util.isString(message.faceUrl))
                    return "faceUrl: string expected";
            if (message.money != null && message.hasOwnProperty("money"))
                if (!$util.isInteger(message.money) && !(message.money && $util.isInteger(message.money.low) && $util.isInteger(message.money.high)))
                    return "money: integer|Long expected";
            return null;
        };

        /**
         * Creates a RankData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lobby_rank.RankData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lobby_rank.RankData} RankData
         */
        RankData.fromObject = function fromObject(object) {
            if (object instanceof $root.lobby_rank.RankData)
                return object;
            var message = new $root.lobby_rank.RankData();
            if (object.index != null)
                message.index = object.index | 0;
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.username != null)
                message.username = String(object.username);
            if (object.faceUrl != null)
                message.faceUrl = String(object.faceUrl);
            if (object.money != null)
                if ($util.Long)
                    (message.money = $util.Long.fromValue(object.money)).unsigned = false;
                else if (typeof object.money === "string")
                    message.money = parseInt(object.money, 10);
                else if (typeof object.money === "number")
                    message.money = object.money;
                else if (typeof object.money === "object")
                    message.money = new $util.LongBits(object.money.low >>> 0, object.money.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a RankData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lobby_rank.RankData
         * @static
         * @param {lobby_rank.RankData} message RankData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RankData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.index = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.username = "";
                object.faceUrl = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.money = options.longs === String ? "0" : 0;
            }
            if (message.index != null && message.hasOwnProperty("index"))
                object.index = message.index;
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.faceUrl != null && message.hasOwnProperty("faceUrl"))
                object.faceUrl = message.faceUrl;
            if (message.money != null && message.hasOwnProperty("money"))
                if (typeof message.money === "number")
                    object.money = options.longs === String ? String(message.money) : message.money;
                else
                    object.money = options.longs === String ? $util.Long.prototype.toString.call(message.money) : options.longs === Number ? new $util.LongBits(message.money.low >>> 0, message.money.high >>> 0).toNumber() : message.money;
            return object;
        };

        /**
         * Converts this RankData to JSON.
         * @function toJSON
         * @memberof lobby_rank.RankData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RankData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RankData;
    })();

    lobby_rank.GetWinMoneyRankReq = (function() {

        /**
         * Properties of a GetWinMoneyRankReq.
         * @memberof lobby_rank
         * @interface IGetWinMoneyRankReq
         * @property {number|Long|null} [uid] GetWinMoneyRankReq uid
         * @property {string|null} [gameId] GetWinMoneyRankReq gameId
         * @property {number|null} [pageIndex] GetWinMoneyRankReq pageIndex
         * @property {number|null} [pageCount] GetWinMoneyRankReq pageCount
         * @property {number|Long|null} [beginTime] GetWinMoneyRankReq beginTime
         * @property {number|Long|null} [endTime] GetWinMoneyRankReq endTime
         */

        /**
         * Constructs a new GetWinMoneyRankReq.
         * @memberof lobby_rank
         * @classdesc Represents a GetWinMoneyRankReq.
         * @implements IGetWinMoneyRankReq
         * @constructor
         * @param {lobby_rank.IGetWinMoneyRankReq=} [properties] Properties to set
         */
        function GetWinMoneyRankReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetWinMoneyRankReq uid.
         * @member {number|Long} uid
         * @memberof lobby_rank.GetWinMoneyRankReq
         * @instance
         */
        GetWinMoneyRankReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetWinMoneyRankReq gameId.
         * @member {string} gameId
         * @memberof lobby_rank.GetWinMoneyRankReq
         * @instance
         */
        GetWinMoneyRankReq.prototype.gameId = "";

        /**
         * GetWinMoneyRankReq pageIndex.
         * @member {number} pageIndex
         * @memberof lobby_rank.GetWinMoneyRankReq
         * @instance
         */
        GetWinMoneyRankReq.prototype.pageIndex = 0;

        /**
         * GetWinMoneyRankReq pageCount.
         * @member {number} pageCount
         * @memberof lobby_rank.GetWinMoneyRankReq
         * @instance
         */
        GetWinMoneyRankReq.prototype.pageCount = 0;

        /**
         * GetWinMoneyRankReq beginTime.
         * @member {number|Long} beginTime
         * @memberof lobby_rank.GetWinMoneyRankReq
         * @instance
         */
        GetWinMoneyRankReq.prototype.beginTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetWinMoneyRankReq endTime.
         * @member {number|Long} endTime
         * @memberof lobby_rank.GetWinMoneyRankReq
         * @instance
         */
        GetWinMoneyRankReq.prototype.endTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GetWinMoneyRankReq instance using the specified properties.
         * @function create
         * @memberof lobby_rank.GetWinMoneyRankReq
         * @static
         * @param {lobby_rank.IGetWinMoneyRankReq=} [properties] Properties to set
         * @returns {lobby_rank.GetWinMoneyRankReq} GetWinMoneyRankReq instance
         */
        GetWinMoneyRankReq.create = function create(properties) {
            return new GetWinMoneyRankReq(properties);
        };

        /**
         * Encodes the specified GetWinMoneyRankReq message. Does not implicitly {@link lobby_rank.GetWinMoneyRankReq.verify|verify} messages.
         * @function encode
         * @memberof lobby_rank.GetWinMoneyRankReq
         * @static
         * @param {lobby_rank.IGetWinMoneyRankReq} message GetWinMoneyRankReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetWinMoneyRankReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.gameId);
            if (message.pageIndex != null && message.hasOwnProperty("pageIndex"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.pageIndex);
            if (message.pageCount != null && message.hasOwnProperty("pageCount"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.pageCount);
            if (message.beginTime != null && message.hasOwnProperty("beginTime"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.beginTime);
            if (message.endTime != null && message.hasOwnProperty("endTime"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.endTime);
            return writer;
        };

        /**
         * Encodes the specified GetWinMoneyRankReq message, length delimited. Does not implicitly {@link lobby_rank.GetWinMoneyRankReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lobby_rank.GetWinMoneyRankReq
         * @static
         * @param {lobby_rank.IGetWinMoneyRankReq} message GetWinMoneyRankReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetWinMoneyRankReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetWinMoneyRankReq message from the specified reader or buffer.
         * @function decode
         * @memberof lobby_rank.GetWinMoneyRankReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lobby_rank.GetWinMoneyRankReq} GetWinMoneyRankReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetWinMoneyRankReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby_rank.GetWinMoneyRankReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int64();
                    break;
                case 2:
                    message.gameId = reader.string();
                    break;
                case 3:
                    message.pageIndex = reader.int32();
                    break;
                case 4:
                    message.pageCount = reader.int32();
                    break;
                case 5:
                    message.beginTime = reader.int64();
                    break;
                case 6:
                    message.endTime = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetWinMoneyRankReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lobby_rank.GetWinMoneyRankReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lobby_rank.GetWinMoneyRankReq} GetWinMoneyRankReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetWinMoneyRankReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetWinMoneyRankReq message.
         * @function verify
         * @memberof lobby_rank.GetWinMoneyRankReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetWinMoneyRankReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isString(message.gameId))
                    return "gameId: string expected";
            if (message.pageIndex != null && message.hasOwnProperty("pageIndex"))
                if (!$util.isInteger(message.pageIndex))
                    return "pageIndex: integer expected";
            if (message.pageCount != null && message.hasOwnProperty("pageCount"))
                if (!$util.isInteger(message.pageCount))
                    return "pageCount: integer expected";
            if (message.beginTime != null && message.hasOwnProperty("beginTime"))
                if (!$util.isInteger(message.beginTime) && !(message.beginTime && $util.isInteger(message.beginTime.low) && $util.isInteger(message.beginTime.high)))
                    return "beginTime: integer|Long expected";
            if (message.endTime != null && message.hasOwnProperty("endTime"))
                if (!$util.isInteger(message.endTime) && !(message.endTime && $util.isInteger(message.endTime.low) && $util.isInteger(message.endTime.high)))
                    return "endTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a GetWinMoneyRankReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lobby_rank.GetWinMoneyRankReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lobby_rank.GetWinMoneyRankReq} GetWinMoneyRankReq
         */
        GetWinMoneyRankReq.fromObject = function fromObject(object) {
            if (object instanceof $root.lobby_rank.GetWinMoneyRankReq)
                return object;
            var message = new $root.lobby_rank.GetWinMoneyRankReq();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.gameId != null)
                message.gameId = String(object.gameId);
            if (object.pageIndex != null)
                message.pageIndex = object.pageIndex | 0;
            if (object.pageCount != null)
                message.pageCount = object.pageCount | 0;
            if (object.beginTime != null)
                if ($util.Long)
                    (message.beginTime = $util.Long.fromValue(object.beginTime)).unsigned = false;
                else if (typeof object.beginTime === "string")
                    message.beginTime = parseInt(object.beginTime, 10);
                else if (typeof object.beginTime === "number")
                    message.beginTime = object.beginTime;
                else if (typeof object.beginTime === "object")
                    message.beginTime = new $util.LongBits(object.beginTime.low >>> 0, object.beginTime.high >>> 0).toNumber();
            if (object.endTime != null)
                if ($util.Long)
                    (message.endTime = $util.Long.fromValue(object.endTime)).unsigned = false;
                else if (typeof object.endTime === "string")
                    message.endTime = parseInt(object.endTime, 10);
                else if (typeof object.endTime === "number")
                    message.endTime = object.endTime;
                else if (typeof object.endTime === "object")
                    message.endTime = new $util.LongBits(object.endTime.low >>> 0, object.endTime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a GetWinMoneyRankReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lobby_rank.GetWinMoneyRankReq
         * @static
         * @param {lobby_rank.GetWinMoneyRankReq} message GetWinMoneyRankReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetWinMoneyRankReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.gameId = "";
                object.pageIndex = 0;
                object.pageCount = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.beginTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.beginTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.endTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.endTime = options.longs === String ? "0" : 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            if (message.pageIndex != null && message.hasOwnProperty("pageIndex"))
                object.pageIndex = message.pageIndex;
            if (message.pageCount != null && message.hasOwnProperty("pageCount"))
                object.pageCount = message.pageCount;
            if (message.beginTime != null && message.hasOwnProperty("beginTime"))
                if (typeof message.beginTime === "number")
                    object.beginTime = options.longs === String ? String(message.beginTime) : message.beginTime;
                else
                    object.beginTime = options.longs === String ? $util.Long.prototype.toString.call(message.beginTime) : options.longs === Number ? new $util.LongBits(message.beginTime.low >>> 0, message.beginTime.high >>> 0).toNumber() : message.beginTime;
            if (message.endTime != null && message.hasOwnProperty("endTime"))
                if (typeof message.endTime === "number")
                    object.endTime = options.longs === String ? String(message.endTime) : message.endTime;
                else
                    object.endTime = options.longs === String ? $util.Long.prototype.toString.call(message.endTime) : options.longs === Number ? new $util.LongBits(message.endTime.low >>> 0, message.endTime.high >>> 0).toNumber() : message.endTime;
            return object;
        };

        /**
         * Converts this GetWinMoneyRankReq to JSON.
         * @function toJSON
         * @memberof lobby_rank.GetWinMoneyRankReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetWinMoneyRankReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetWinMoneyRankReq;
    })();

    lobby_rank.GetWinMoneyRankAck = (function() {

        /**
         * Properties of a GetWinMoneyRankAck.
         * @memberof lobby_rank
         * @interface IGetWinMoneyRankAck
         * @property {number|null} [pageIndex] GetWinMoneyRankAck pageIndex
         * @property {number|null} [pageSize] GetWinMoneyRankAck pageSize
         * @property {number|null} [pageCount] GetWinMoneyRankAck pageCount
         * @property {lobby_rank.IRankData|null} [myData] GetWinMoneyRankAck myData
         * @property {Array.<lobby_rank.IRankData>|null} [rankList] GetWinMoneyRankAck rankList
         */

        /**
         * Constructs a new GetWinMoneyRankAck.
         * @memberof lobby_rank
         * @classdesc Represents a GetWinMoneyRankAck.
         * @implements IGetWinMoneyRankAck
         * @constructor
         * @param {lobby_rank.IGetWinMoneyRankAck=} [properties] Properties to set
         */
        function GetWinMoneyRankAck(properties) {
            this.rankList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetWinMoneyRankAck pageIndex.
         * @member {number} pageIndex
         * @memberof lobby_rank.GetWinMoneyRankAck
         * @instance
         */
        GetWinMoneyRankAck.prototype.pageIndex = 0;

        /**
         * GetWinMoneyRankAck pageSize.
         * @member {number} pageSize
         * @memberof lobby_rank.GetWinMoneyRankAck
         * @instance
         */
        GetWinMoneyRankAck.prototype.pageSize = 0;

        /**
         * GetWinMoneyRankAck pageCount.
         * @member {number} pageCount
         * @memberof lobby_rank.GetWinMoneyRankAck
         * @instance
         */
        GetWinMoneyRankAck.prototype.pageCount = 0;

        /**
         * GetWinMoneyRankAck myData.
         * @member {lobby_rank.IRankData|null|undefined} myData
         * @memberof lobby_rank.GetWinMoneyRankAck
         * @instance
         */
        GetWinMoneyRankAck.prototype.myData = null;

        /**
         * GetWinMoneyRankAck rankList.
         * @member {Array.<lobby_rank.IRankData>} rankList
         * @memberof lobby_rank.GetWinMoneyRankAck
         * @instance
         */
        GetWinMoneyRankAck.prototype.rankList = $util.emptyArray;

        /**
         * Creates a new GetWinMoneyRankAck instance using the specified properties.
         * @function create
         * @memberof lobby_rank.GetWinMoneyRankAck
         * @static
         * @param {lobby_rank.IGetWinMoneyRankAck=} [properties] Properties to set
         * @returns {lobby_rank.GetWinMoneyRankAck} GetWinMoneyRankAck instance
         */
        GetWinMoneyRankAck.create = function create(properties) {
            return new GetWinMoneyRankAck(properties);
        };

        /**
         * Encodes the specified GetWinMoneyRankAck message. Does not implicitly {@link lobby_rank.GetWinMoneyRankAck.verify|verify} messages.
         * @function encode
         * @memberof lobby_rank.GetWinMoneyRankAck
         * @static
         * @param {lobby_rank.IGetWinMoneyRankAck} message GetWinMoneyRankAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetWinMoneyRankAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pageIndex != null && message.hasOwnProperty("pageIndex"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.pageIndex);
            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.pageSize);
            if (message.pageCount != null && message.hasOwnProperty("pageCount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.pageCount);
            if (message.myData != null && message.hasOwnProperty("myData"))
                $root.lobby_rank.RankData.encode(message.myData, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.rankList != null && message.rankList.length)
                for (var i = 0; i < message.rankList.length; ++i)
                    $root.lobby_rank.RankData.encode(message.rankList[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetWinMoneyRankAck message, length delimited. Does not implicitly {@link lobby_rank.GetWinMoneyRankAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lobby_rank.GetWinMoneyRankAck
         * @static
         * @param {lobby_rank.IGetWinMoneyRankAck} message GetWinMoneyRankAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetWinMoneyRankAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetWinMoneyRankAck message from the specified reader or buffer.
         * @function decode
         * @memberof lobby_rank.GetWinMoneyRankAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lobby_rank.GetWinMoneyRankAck} GetWinMoneyRankAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetWinMoneyRankAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby_rank.GetWinMoneyRankAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.pageIndex = reader.int32();
                    break;
                case 2:
                    message.pageSize = reader.int32();
                    break;
                case 3:
                    message.pageCount = reader.int32();
                    break;
                case 4:
                    message.myData = $root.lobby_rank.RankData.decode(reader, reader.uint32());
                    break;
                case 10:
                    if (!(message.rankList && message.rankList.length))
                        message.rankList = [];
                    message.rankList.push($root.lobby_rank.RankData.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetWinMoneyRankAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lobby_rank.GetWinMoneyRankAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lobby_rank.GetWinMoneyRankAck} GetWinMoneyRankAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetWinMoneyRankAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetWinMoneyRankAck message.
         * @function verify
         * @memberof lobby_rank.GetWinMoneyRankAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetWinMoneyRankAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pageIndex != null && message.hasOwnProperty("pageIndex"))
                if (!$util.isInteger(message.pageIndex))
                    return "pageIndex: integer expected";
            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                if (!$util.isInteger(message.pageSize))
                    return "pageSize: integer expected";
            if (message.pageCount != null && message.hasOwnProperty("pageCount"))
                if (!$util.isInteger(message.pageCount))
                    return "pageCount: integer expected";
            if (message.myData != null && message.hasOwnProperty("myData")) {
                var error = $root.lobby_rank.RankData.verify(message.myData);
                if (error)
                    return "myData." + error;
            }
            if (message.rankList != null && message.hasOwnProperty("rankList")) {
                if (!Array.isArray(message.rankList))
                    return "rankList: array expected";
                for (var i = 0; i < message.rankList.length; ++i) {
                    var error = $root.lobby_rank.RankData.verify(message.rankList[i]);
                    if (error)
                        return "rankList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetWinMoneyRankAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lobby_rank.GetWinMoneyRankAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lobby_rank.GetWinMoneyRankAck} GetWinMoneyRankAck
         */
        GetWinMoneyRankAck.fromObject = function fromObject(object) {
            if (object instanceof $root.lobby_rank.GetWinMoneyRankAck)
                return object;
            var message = new $root.lobby_rank.GetWinMoneyRankAck();
            if (object.pageIndex != null)
                message.pageIndex = object.pageIndex | 0;
            if (object.pageSize != null)
                message.pageSize = object.pageSize | 0;
            if (object.pageCount != null)
                message.pageCount = object.pageCount | 0;
            if (object.myData != null) {
                if (typeof object.myData !== "object")
                    throw TypeError(".lobby_rank.GetWinMoneyRankAck.myData: object expected");
                message.myData = $root.lobby_rank.RankData.fromObject(object.myData);
            }
            if (object.rankList) {
                if (!Array.isArray(object.rankList))
                    throw TypeError(".lobby_rank.GetWinMoneyRankAck.rankList: array expected");
                message.rankList = [];
                for (var i = 0; i < object.rankList.length; ++i) {
                    if (typeof object.rankList[i] !== "object")
                        throw TypeError(".lobby_rank.GetWinMoneyRankAck.rankList: object expected");
                    message.rankList[i] = $root.lobby_rank.RankData.fromObject(object.rankList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetWinMoneyRankAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lobby_rank.GetWinMoneyRankAck
         * @static
         * @param {lobby_rank.GetWinMoneyRankAck} message GetWinMoneyRankAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetWinMoneyRankAck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.rankList = [];
            if (options.defaults) {
                object.pageIndex = 0;
                object.pageSize = 0;
                object.pageCount = 0;
                object.myData = null;
            }
            if (message.pageIndex != null && message.hasOwnProperty("pageIndex"))
                object.pageIndex = message.pageIndex;
            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                object.pageSize = message.pageSize;
            if (message.pageCount != null && message.hasOwnProperty("pageCount"))
                object.pageCount = message.pageCount;
            if (message.myData != null && message.hasOwnProperty("myData"))
                object.myData = $root.lobby_rank.RankData.toObject(message.myData, options);
            if (message.rankList && message.rankList.length) {
                object.rankList = [];
                for (var j = 0; j < message.rankList.length; ++j)
                    object.rankList[j] = $root.lobby_rank.RankData.toObject(message.rankList[j], options);
            }
            return object;
        };

        /**
         * Converts this GetWinMoneyRankAck to JSON.
         * @function toJSON
         * @memberof lobby_rank.GetWinMoneyRankAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetWinMoneyRankAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetWinMoneyRankAck;
    })();

    lobby_rank.GetRichRankReq = (function() {

        /**
         * Properties of a GetRichRankReq.
         * @memberof lobby_rank
         * @interface IGetRichRankReq
         * @property {number|Long|null} [uid] GetRichRankReq uid
         * @property {number|null} [pageIndex] GetRichRankReq pageIndex
         * @property {number|null} [pageCount] GetRichRankReq pageCount
         */

        /**
         * Constructs a new GetRichRankReq.
         * @memberof lobby_rank
         * @classdesc Represents a GetRichRankReq.
         * @implements IGetRichRankReq
         * @constructor
         * @param {lobby_rank.IGetRichRankReq=} [properties] Properties to set
         */
        function GetRichRankReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetRichRankReq uid.
         * @member {number|Long} uid
         * @memberof lobby_rank.GetRichRankReq
         * @instance
         */
        GetRichRankReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetRichRankReq pageIndex.
         * @member {number} pageIndex
         * @memberof lobby_rank.GetRichRankReq
         * @instance
         */
        GetRichRankReq.prototype.pageIndex = 0;

        /**
         * GetRichRankReq pageCount.
         * @member {number} pageCount
         * @memberof lobby_rank.GetRichRankReq
         * @instance
         */
        GetRichRankReq.prototype.pageCount = 0;

        /**
         * Creates a new GetRichRankReq instance using the specified properties.
         * @function create
         * @memberof lobby_rank.GetRichRankReq
         * @static
         * @param {lobby_rank.IGetRichRankReq=} [properties] Properties to set
         * @returns {lobby_rank.GetRichRankReq} GetRichRankReq instance
         */
        GetRichRankReq.create = function create(properties) {
            return new GetRichRankReq(properties);
        };

        /**
         * Encodes the specified GetRichRankReq message. Does not implicitly {@link lobby_rank.GetRichRankReq.verify|verify} messages.
         * @function encode
         * @memberof lobby_rank.GetRichRankReq
         * @static
         * @param {lobby_rank.IGetRichRankReq} message GetRichRankReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRichRankReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            if (message.pageIndex != null && message.hasOwnProperty("pageIndex"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.pageIndex);
            if (message.pageCount != null && message.hasOwnProperty("pageCount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.pageCount);
            return writer;
        };

        /**
         * Encodes the specified GetRichRankReq message, length delimited. Does not implicitly {@link lobby_rank.GetRichRankReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lobby_rank.GetRichRankReq
         * @static
         * @param {lobby_rank.IGetRichRankReq} message GetRichRankReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRichRankReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetRichRankReq message from the specified reader or buffer.
         * @function decode
         * @memberof lobby_rank.GetRichRankReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lobby_rank.GetRichRankReq} GetRichRankReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRichRankReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby_rank.GetRichRankReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int64();
                    break;
                case 2:
                    message.pageIndex = reader.int32();
                    break;
                case 3:
                    message.pageCount = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetRichRankReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lobby_rank.GetRichRankReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lobby_rank.GetRichRankReq} GetRichRankReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRichRankReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetRichRankReq message.
         * @function verify
         * @memberof lobby_rank.GetRichRankReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetRichRankReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.pageIndex != null && message.hasOwnProperty("pageIndex"))
                if (!$util.isInteger(message.pageIndex))
                    return "pageIndex: integer expected";
            if (message.pageCount != null && message.hasOwnProperty("pageCount"))
                if (!$util.isInteger(message.pageCount))
                    return "pageCount: integer expected";
            return null;
        };

        /**
         * Creates a GetRichRankReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lobby_rank.GetRichRankReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lobby_rank.GetRichRankReq} GetRichRankReq
         */
        GetRichRankReq.fromObject = function fromObject(object) {
            if (object instanceof $root.lobby_rank.GetRichRankReq)
                return object;
            var message = new $root.lobby_rank.GetRichRankReq();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.pageIndex != null)
                message.pageIndex = object.pageIndex | 0;
            if (object.pageCount != null)
                message.pageCount = object.pageCount | 0;
            return message;
        };

        /**
         * Creates a plain object from a GetRichRankReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lobby_rank.GetRichRankReq
         * @static
         * @param {lobby_rank.GetRichRankReq} message GetRichRankReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetRichRankReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.pageIndex = 0;
                object.pageCount = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.pageIndex != null && message.hasOwnProperty("pageIndex"))
                object.pageIndex = message.pageIndex;
            if (message.pageCount != null && message.hasOwnProperty("pageCount"))
                object.pageCount = message.pageCount;
            return object;
        };

        /**
         * Converts this GetRichRankReq to JSON.
         * @function toJSON
         * @memberof lobby_rank.GetRichRankReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetRichRankReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetRichRankReq;
    })();

    lobby_rank.GetRichRankAck = (function() {

        /**
         * Properties of a GetRichRankAck.
         * @memberof lobby_rank
         * @interface IGetRichRankAck
         * @property {number|null} [pageIndex] GetRichRankAck pageIndex
         * @property {number|null} [pageSize] GetRichRankAck pageSize
         * @property {number|null} [pageCount] GetRichRankAck pageCount
         * @property {lobby_rank.IRankData|null} [myData] GetRichRankAck myData
         * @property {Array.<lobby_rank.IRankData>|null} [rankList] GetRichRankAck rankList
         */

        /**
         * Constructs a new GetRichRankAck.
         * @memberof lobby_rank
         * @classdesc Represents a GetRichRankAck.
         * @implements IGetRichRankAck
         * @constructor
         * @param {lobby_rank.IGetRichRankAck=} [properties] Properties to set
         */
        function GetRichRankAck(properties) {
            this.rankList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetRichRankAck pageIndex.
         * @member {number} pageIndex
         * @memberof lobby_rank.GetRichRankAck
         * @instance
         */
        GetRichRankAck.prototype.pageIndex = 0;

        /**
         * GetRichRankAck pageSize.
         * @member {number} pageSize
         * @memberof lobby_rank.GetRichRankAck
         * @instance
         */
        GetRichRankAck.prototype.pageSize = 0;

        /**
         * GetRichRankAck pageCount.
         * @member {number} pageCount
         * @memberof lobby_rank.GetRichRankAck
         * @instance
         */
        GetRichRankAck.prototype.pageCount = 0;

        /**
         * GetRichRankAck myData.
         * @member {lobby_rank.IRankData|null|undefined} myData
         * @memberof lobby_rank.GetRichRankAck
         * @instance
         */
        GetRichRankAck.prototype.myData = null;

        /**
         * GetRichRankAck rankList.
         * @member {Array.<lobby_rank.IRankData>} rankList
         * @memberof lobby_rank.GetRichRankAck
         * @instance
         */
        GetRichRankAck.prototype.rankList = $util.emptyArray;

        /**
         * Creates a new GetRichRankAck instance using the specified properties.
         * @function create
         * @memberof lobby_rank.GetRichRankAck
         * @static
         * @param {lobby_rank.IGetRichRankAck=} [properties] Properties to set
         * @returns {lobby_rank.GetRichRankAck} GetRichRankAck instance
         */
        GetRichRankAck.create = function create(properties) {
            return new GetRichRankAck(properties);
        };

        /**
         * Encodes the specified GetRichRankAck message. Does not implicitly {@link lobby_rank.GetRichRankAck.verify|verify} messages.
         * @function encode
         * @memberof lobby_rank.GetRichRankAck
         * @static
         * @param {lobby_rank.IGetRichRankAck} message GetRichRankAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRichRankAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pageIndex != null && message.hasOwnProperty("pageIndex"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.pageIndex);
            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.pageSize);
            if (message.pageCount != null && message.hasOwnProperty("pageCount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.pageCount);
            if (message.myData != null && message.hasOwnProperty("myData"))
                $root.lobby_rank.RankData.encode(message.myData, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.rankList != null && message.rankList.length)
                for (var i = 0; i < message.rankList.length; ++i)
                    $root.lobby_rank.RankData.encode(message.rankList[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetRichRankAck message, length delimited. Does not implicitly {@link lobby_rank.GetRichRankAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lobby_rank.GetRichRankAck
         * @static
         * @param {lobby_rank.IGetRichRankAck} message GetRichRankAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRichRankAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetRichRankAck message from the specified reader or buffer.
         * @function decode
         * @memberof lobby_rank.GetRichRankAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lobby_rank.GetRichRankAck} GetRichRankAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRichRankAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby_rank.GetRichRankAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.pageIndex = reader.int32();
                    break;
                case 2:
                    message.pageSize = reader.int32();
                    break;
                case 3:
                    message.pageCount = reader.int32();
                    break;
                case 4:
                    message.myData = $root.lobby_rank.RankData.decode(reader, reader.uint32());
                    break;
                case 10:
                    if (!(message.rankList && message.rankList.length))
                        message.rankList = [];
                    message.rankList.push($root.lobby_rank.RankData.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetRichRankAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lobby_rank.GetRichRankAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lobby_rank.GetRichRankAck} GetRichRankAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRichRankAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetRichRankAck message.
         * @function verify
         * @memberof lobby_rank.GetRichRankAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetRichRankAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pageIndex != null && message.hasOwnProperty("pageIndex"))
                if (!$util.isInteger(message.pageIndex))
                    return "pageIndex: integer expected";
            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                if (!$util.isInteger(message.pageSize))
                    return "pageSize: integer expected";
            if (message.pageCount != null && message.hasOwnProperty("pageCount"))
                if (!$util.isInteger(message.pageCount))
                    return "pageCount: integer expected";
            if (message.myData != null && message.hasOwnProperty("myData")) {
                var error = $root.lobby_rank.RankData.verify(message.myData);
                if (error)
                    return "myData." + error;
            }
            if (message.rankList != null && message.hasOwnProperty("rankList")) {
                if (!Array.isArray(message.rankList))
                    return "rankList: array expected";
                for (var i = 0; i < message.rankList.length; ++i) {
                    var error = $root.lobby_rank.RankData.verify(message.rankList[i]);
                    if (error)
                        return "rankList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetRichRankAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lobby_rank.GetRichRankAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lobby_rank.GetRichRankAck} GetRichRankAck
         */
        GetRichRankAck.fromObject = function fromObject(object) {
            if (object instanceof $root.lobby_rank.GetRichRankAck)
                return object;
            var message = new $root.lobby_rank.GetRichRankAck();
            if (object.pageIndex != null)
                message.pageIndex = object.pageIndex | 0;
            if (object.pageSize != null)
                message.pageSize = object.pageSize | 0;
            if (object.pageCount != null)
                message.pageCount = object.pageCount | 0;
            if (object.myData != null) {
                if (typeof object.myData !== "object")
                    throw TypeError(".lobby_rank.GetRichRankAck.myData: object expected");
                message.myData = $root.lobby_rank.RankData.fromObject(object.myData);
            }
            if (object.rankList) {
                if (!Array.isArray(object.rankList))
                    throw TypeError(".lobby_rank.GetRichRankAck.rankList: array expected");
                message.rankList = [];
                for (var i = 0; i < object.rankList.length; ++i) {
                    if (typeof object.rankList[i] !== "object")
                        throw TypeError(".lobby_rank.GetRichRankAck.rankList: object expected");
                    message.rankList[i] = $root.lobby_rank.RankData.fromObject(object.rankList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetRichRankAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lobby_rank.GetRichRankAck
         * @static
         * @param {lobby_rank.GetRichRankAck} message GetRichRankAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetRichRankAck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.rankList = [];
            if (options.defaults) {
                object.pageIndex = 0;
                object.pageSize = 0;
                object.pageCount = 0;
                object.myData = null;
            }
            if (message.pageIndex != null && message.hasOwnProperty("pageIndex"))
                object.pageIndex = message.pageIndex;
            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                object.pageSize = message.pageSize;
            if (message.pageCount != null && message.hasOwnProperty("pageCount"))
                object.pageCount = message.pageCount;
            if (message.myData != null && message.hasOwnProperty("myData"))
                object.myData = $root.lobby_rank.RankData.toObject(message.myData, options);
            if (message.rankList && message.rankList.length) {
                object.rankList = [];
                for (var j = 0; j < message.rankList.length; ++j)
                    object.rankList[j] = $root.lobby_rank.RankData.toObject(message.rankList[j], options);
            }
            return object;
        };

        /**
         * Converts this GetRichRankAck to JSON.
         * @function toJSON
         * @memberof lobby_rank.GetRichRankAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetRichRankAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetRichRankAck;
    })();

    return lobby_rank;
})();

module.exports = $root.lobby_rank;
