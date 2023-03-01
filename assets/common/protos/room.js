/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.servermanager = (function () {

    /**
     * Namespace servermanager.
     * @exports servermanager
     * @namespace
     */
    var servermanager = {};

    servermanager.RoomInfo = (function () {

        /**
         * Properties of a RoomInfo.
         * @memberof servermanager
         * @interface IRoomInfo
         * @property {string|null} [roomId] RoomInfo roomId
         * @property {string|null} [serverId] RoomInfo serverId
         * @property {string|null} [gameId] RoomInfo gameId
         * @property {string|null} [ruleId] RoomInfo ruleId
         * @property {string|null} [metaData] RoomInfo metaData
         */

        /**
         * Constructs a new RoomInfo.
         * @memberof servermanager
         * @classdesc Represents a RoomInfo.
         * @implements IRoomInfo
         * @constructor
         * @param {servermanager.IRoomInfo=} [properties] Properties to set
         */
        function RoomInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomInfo roomId.
         * @member {string} roomId
         * @memberof servermanager.RoomInfo
         * @instance
         */
        RoomInfo.prototype.roomId = "";

        /**
         * RoomInfo serverId.
         * @member {string} serverId
         * @memberof servermanager.RoomInfo
         * @instance
         */
        RoomInfo.prototype.serverId = "";

        /**
         * RoomInfo gameId.
         * @member {string} gameId
         * @memberof servermanager.RoomInfo
         * @instance
         */
        RoomInfo.prototype.gameId = "";

        /**
         * RoomInfo ruleId.
         * @member {string} ruleId
         * @memberof servermanager.RoomInfo
         * @instance
         */
        RoomInfo.prototype.ruleId = "";

        /**
         * RoomInfo metaData.
         * @member {string} metaData
         * @memberof servermanager.RoomInfo
         * @instance
         */
        RoomInfo.prototype.metaData = "";

        /**
         * Creates a new RoomInfo instance using the specified properties.
         * @function create
         * @memberof servermanager.RoomInfo
         * @static
         * @param {servermanager.IRoomInfo=} [properties] Properties to set
         * @returns {servermanager.RoomInfo} RoomInfo instance
         */
        RoomInfo.create = function create(properties) {
            return new RoomInfo(properties);
        };

        /**
         * Encodes the specified RoomInfo message. Does not implicitly {@link servermanager.RoomInfo.verify|verify} messages.
         * @function encode
         * @memberof servermanager.RoomInfo
         * @static
         * @param {servermanager.IRoomInfo} message RoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomId);
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.serverId);
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.gameId);
            if (message.ruleId != null && message.hasOwnProperty("ruleId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.ruleId);
            if (message.metaData != null && message.hasOwnProperty("metaData"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.metaData);
            return writer;
        };

        /**
         * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link servermanager.RoomInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof servermanager.RoomInfo
         * @static
         * @param {servermanager.IRoomInfo} message RoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomInfo message from the specified reader or buffer.
         * @function decode
         * @memberof servermanager.RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {servermanager.RoomInfo} RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.servermanager.RoomInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.roomId = reader.string();
                        break;
                    case 2:
                        message.serverId = reader.string();
                        break;
                    case 3:
                        message.gameId = reader.string();
                        break;
                    case 4:
                        message.ruleId = reader.string();
                        break;
                    case 10:
                        message.metaData = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof servermanager.RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {servermanager.RoomInfo} RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomInfo message.
         * @function verify
         * @memberof servermanager.RoomInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                if (!$util.isString(message.serverId))
                    return "serverId: string expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isString(message.gameId))
                    return "gameId: string expected";
            if (message.ruleId != null && message.hasOwnProperty("ruleId"))
                if (!$util.isString(message.ruleId))
                    return "ruleId: string expected";
            if (message.metaData != null && message.hasOwnProperty("metaData"))
                if (!$util.isString(message.metaData))
                    return "metaData: string expected";
            return null;
        };

        /**
         * Creates a RoomInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof servermanager.RoomInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {servermanager.RoomInfo} RoomInfo
         */
        RoomInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.servermanager.RoomInfo)
                return object;
            var message = new $root.servermanager.RoomInfo();
            if (object.roomId != null)
                message.roomId = String(object.roomId);
            if (object.serverId != null)
                message.serverId = String(object.serverId);
            if (object.gameId != null)
                message.gameId = String(object.gameId);
            if (object.ruleId != null)
                message.ruleId = String(object.ruleId);
            if (object.metaData != null)
                message.metaData = String(object.metaData);
            return message;
        };

        /**
         * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof servermanager.RoomInfo
         * @static
         * @param {servermanager.RoomInfo} message RoomInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.roomId = "";
                object.serverId = "";
                object.gameId = "";
                object.ruleId = "";
                object.metaData = "";
            }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                object.serverId = message.serverId;
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            if (message.ruleId != null && message.hasOwnProperty("ruleId"))
                object.ruleId = message.ruleId;
            if (message.metaData != null && message.hasOwnProperty("metaData"))
                object.metaData = message.metaData;
            return object;
        };

        /**
         * Converts this RoomInfo to JSON.
         * @function toJSON
         * @memberof servermanager.RoomInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoomInfo;
    })();

    servermanager.StartJoinRoomReq = (function () {

        /**
         * Properties of a StartJoinRoomReq.
         * @memberof servermanager
         * @interface IStartJoinRoomReq
         * @property {number|Long|null} [uid] StartJoinRoomReq uid
         * @property {string|null} [gameId] StartJoinRoomReq gameId
         * @property {string|null} [ruleId] StartJoinRoomReq ruleId
         */

        /**
         * Constructs a new StartJoinRoomReq.
         * @memberof servermanager
         * @classdesc Represents a StartJoinRoomReq.
         * @implements IStartJoinRoomReq
         * @constructor
         * @param {servermanager.IStartJoinRoomReq=} [properties] Properties to set
         */
        function StartJoinRoomReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StartJoinRoomReq uid.
         * @member {number|Long} uid
         * @memberof servermanager.StartJoinRoomReq
         * @instance
         */
        StartJoinRoomReq.prototype.uid = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * StartJoinRoomReq gameId.
         * @member {string} gameId
         * @memberof servermanager.StartJoinRoomReq
         * @instance
         */
        StartJoinRoomReq.prototype.gameId = "";

        /**
         * StartJoinRoomReq ruleId.
         * @member {string} ruleId
         * @memberof servermanager.StartJoinRoomReq
         * @instance
         */
        StartJoinRoomReq.prototype.ruleId = "";

        /**
         * Creates a new StartJoinRoomReq instance using the specified properties.
         * @function create
         * @memberof servermanager.StartJoinRoomReq
         * @static
         * @param {servermanager.IStartJoinRoomReq=} [properties] Properties to set
         * @returns {servermanager.StartJoinRoomReq} StartJoinRoomReq instance
         */
        StartJoinRoomReq.create = function create(properties) {
            return new StartJoinRoomReq(properties);
        };

        /**
         * Encodes the specified StartJoinRoomReq message. Does not implicitly {@link servermanager.StartJoinRoomReq.verify|verify} messages.
         * @function encode
         * @memberof servermanager.StartJoinRoomReq
         * @static
         * @param {servermanager.IStartJoinRoomReq} message StartJoinRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartJoinRoomReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.gameId);
            if (message.ruleId != null && message.hasOwnProperty("ruleId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.ruleId);
            return writer;
        };

        /**
         * Encodes the specified StartJoinRoomReq message, length delimited. Does not implicitly {@link servermanager.StartJoinRoomReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof servermanager.StartJoinRoomReq
         * @static
         * @param {servermanager.IStartJoinRoomReq} message StartJoinRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartJoinRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StartJoinRoomReq message from the specified reader or buffer.
         * @function decode
         * @memberof servermanager.StartJoinRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {servermanager.StartJoinRoomReq} StartJoinRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartJoinRoomReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.servermanager.StartJoinRoomReq();
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
                        message.ruleId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        /**
         * Decodes a StartJoinRoomReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof servermanager.StartJoinRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {servermanager.StartJoinRoomReq} StartJoinRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartJoinRoomReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StartJoinRoomReq message.
         * @function verify
         * @memberof servermanager.StartJoinRoomReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StartJoinRoomReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isString(message.gameId))
                    return "gameId: string expected";
            if (message.ruleId != null && message.hasOwnProperty("ruleId"))
                if (!$util.isString(message.ruleId))
                    return "ruleId: string expected";
            return null;
        };

        /**
         * Creates a StartJoinRoomReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof servermanager.StartJoinRoomReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {servermanager.StartJoinRoomReq} StartJoinRoomReq
         */
        StartJoinRoomReq.fromObject = function fromObject(object) {
            if (object instanceof $root.servermanager.StartJoinRoomReq)
                return object;
            var message = new $root.servermanager.StartJoinRoomReq();
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
            if (object.ruleId != null)
                message.ruleId = String(object.ruleId);
            return message;
        };

        /**
         * Creates a plain object from a StartJoinRoomReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof servermanager.StartJoinRoomReq
         * @static
         * @param {servermanager.StartJoinRoomReq} message StartJoinRoomReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StartJoinRoomReq.toObject = function toObject(message, options) {
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
                object.ruleId = "";
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            if (message.ruleId != null && message.hasOwnProperty("ruleId"))
                object.ruleId = message.ruleId;
            return object;
        };

        /**
         * Converts this StartJoinRoomReq to JSON.
         * @function toJSON
         * @memberof servermanager.StartJoinRoomReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StartJoinRoomReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StartJoinRoomReq;
    })();

    servermanager.StartJoinRoomRsp = (function () {

        /**
         * Properties of a StartJoinRoomRsp.
         * @memberof servermanager
         * @interface IStartJoinRoomRsp
         * @property {number|null} [errCode] StartJoinRoomRsp errCode
         * @property {string|null} [errMsg] StartJoinRoomRsp errMsg
         * @property {common.IGameData|null} [gameData] StartJoinRoomRsp gameData
         */

        /**
         * Constructs a new StartJoinRoomRsp.
         * @memberof servermanager
         * @classdesc Represents a StartJoinRoomRsp.
         * @implements IStartJoinRoomRsp
         * @constructor
         * @param {servermanager.IStartJoinRoomRsp=} [properties] Properties to set
         */
        function StartJoinRoomRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StartJoinRoomRsp errCode.
         * @member {number} errCode
         * @memberof servermanager.StartJoinRoomRsp
         * @instance
         */
        StartJoinRoomRsp.prototype.errCode = 0;

        /**
         * StartJoinRoomRsp errMsg.
         * @member {string} errMsg
         * @memberof servermanager.StartJoinRoomRsp
         * @instance
         */
        StartJoinRoomRsp.prototype.errMsg = "";

        /**
         * StartJoinRoomRsp gameData.
         * @member {common.IGameData|null|undefined} gameData
         * @memberof servermanager.StartJoinRoomRsp
         * @instance
         */
        StartJoinRoomRsp.prototype.gameData = null;

        /**
         * Creates a new StartJoinRoomRsp instance using the specified properties.
         * @function create
         * @memberof servermanager.StartJoinRoomRsp
         * @static
         * @param {servermanager.IStartJoinRoomRsp=} [properties] Properties to set
         * @returns {servermanager.StartJoinRoomRsp} StartJoinRoomRsp instance
         */
        StartJoinRoomRsp.create = function create(properties) {
            return new StartJoinRoomRsp(properties);
        };

        /**
         * Encodes the specified StartJoinRoomRsp message. Does not implicitly {@link servermanager.StartJoinRoomRsp.verify|verify} messages.
         * @function encode
         * @memberof servermanager.StartJoinRoomRsp
         * @static
         * @param {servermanager.IStartJoinRoomRsp} message StartJoinRoomRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartJoinRoomRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            if (message.gameData != null && message.hasOwnProperty("gameData"))
                $root.common.GameData.encode(message.gameData, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified StartJoinRoomRsp message, length delimited. Does not implicitly {@link servermanager.StartJoinRoomRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof servermanager.StartJoinRoomRsp
         * @static
         * @param {servermanager.IStartJoinRoomRsp} message StartJoinRoomRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartJoinRoomRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StartJoinRoomRsp message from the specified reader or buffer.
         * @function decode
         * @memberof servermanager.StartJoinRoomRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {servermanager.StartJoinRoomRsp} StartJoinRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartJoinRoomRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.servermanager.StartJoinRoomRsp();
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
                        message.gameData = $root.common.GameData.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        /**
         * Decodes a StartJoinRoomRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof servermanager.StartJoinRoomRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {servermanager.StartJoinRoomRsp} StartJoinRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartJoinRoomRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StartJoinRoomRsp message.
         * @function verify
         * @memberof servermanager.StartJoinRoomRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StartJoinRoomRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                if (!$util.isInteger(message.errCode))
                    return "errCode: integer expected";
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                if (!$util.isString(message.errMsg))
                    return "errMsg: string expected";
            if (message.gameData != null && message.hasOwnProperty("gameData")) {
                var error = $root.common.GameData.verify(message.gameData);
                if (error)
                    return "gameData." + error;
            }
            return null;
        };

        /**
         * Creates a StartJoinRoomRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof servermanager.StartJoinRoomRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {servermanager.StartJoinRoomRsp} StartJoinRoomRsp
         */
        StartJoinRoomRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.servermanager.StartJoinRoomRsp)
                return object;
            var message = new $root.servermanager.StartJoinRoomRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            if (object.gameData != null) {
                if (typeof object.gameData !== "object")
                    throw TypeError(".servermanager.StartJoinRoomRsp.gameData: object expected");
                message.gameData = $root.common.GameData.fromObject(object.gameData);
            }
            return message;
        };

        /**
         * Creates a plain object from a StartJoinRoomRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof servermanager.StartJoinRoomRsp
         * @static
         * @param {servermanager.StartJoinRoomRsp} message StartJoinRoomRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StartJoinRoomRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.errCode = 0;
                object.errMsg = "";
                object.gameData = null;
            }
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                object.errCode = message.errCode;
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                object.errMsg = message.errMsg;
            if (message.gameData != null && message.hasOwnProperty("gameData"))
                object.gameData = $root.common.GameData.toObject(message.gameData, options);
            return object;
        };

        /**
         * Converts this StartJoinRoomRsp to JSON.
         * @function toJSON
         * @memberof servermanager.StartJoinRoomRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StartJoinRoomRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StartJoinRoomRsp;
    })();

    servermanager.StartJoinRoomNot = (function () {

        /**
         * Properties of a StartJoinRoomNot.
         * @memberof servermanager
         * @interface IStartJoinRoomNot
         * @property {string|null} [gameId] StartJoinRoomNot gameId
         * @property {string|null} [ruleId] StartJoinRoomNot ruleId
         */

        /**
         * Constructs a new StartJoinRoomNot.
         * @memberof servermanager
         * @classdesc Represents a StartJoinRoomNot.
         * @implements IStartJoinRoomNot
         * @constructor
         * @param {servermanager.IStartJoinRoomNot=} [properties] Properties to set
         */
        function StartJoinRoomNot(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StartJoinRoomNot gameId.
         * @member {string} gameId
         * @memberof servermanager.StartJoinRoomNot
         * @instance
         */
        StartJoinRoomNot.prototype.gameId = "";

        /**
         * StartJoinRoomNot ruleId.
         * @member {string} ruleId
         * @memberof servermanager.StartJoinRoomNot
         * @instance
         */
        StartJoinRoomNot.prototype.ruleId = "";

        /**
         * Creates a new StartJoinRoomNot instance using the specified properties.
         * @function create
         * @memberof servermanager.StartJoinRoomNot
         * @static
         * @param {servermanager.IStartJoinRoomNot=} [properties] Properties to set
         * @returns {servermanager.StartJoinRoomNot} StartJoinRoomNot instance
         */
        StartJoinRoomNot.create = function create(properties) {
            return new StartJoinRoomNot(properties);
        };

        /**
         * Encodes the specified StartJoinRoomNot message. Does not implicitly {@link servermanager.StartJoinRoomNot.verify|verify} messages.
         * @function encode
         * @memberof servermanager.StartJoinRoomNot
         * @static
         * @param {servermanager.IStartJoinRoomNot} message StartJoinRoomNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartJoinRoomNot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.gameId);
            if (message.ruleId != null && message.hasOwnProperty("ruleId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.ruleId);
            return writer;
        };

        /**
         * Encodes the specified StartJoinRoomNot message, length delimited. Does not implicitly {@link servermanager.StartJoinRoomNot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof servermanager.StartJoinRoomNot
         * @static
         * @param {servermanager.IStartJoinRoomNot} message StartJoinRoomNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartJoinRoomNot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StartJoinRoomNot message from the specified reader or buffer.
         * @function decode
         * @memberof servermanager.StartJoinRoomNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {servermanager.StartJoinRoomNot} StartJoinRoomNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartJoinRoomNot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.servermanager.StartJoinRoomNot();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.gameId = reader.string();
                        break;
                    case 2:
                        message.ruleId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        /**
         * Decodes a StartJoinRoomNot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof servermanager.StartJoinRoomNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {servermanager.StartJoinRoomNot} StartJoinRoomNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartJoinRoomNot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StartJoinRoomNot message.
         * @function verify
         * @memberof servermanager.StartJoinRoomNot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StartJoinRoomNot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isString(message.gameId))
                    return "gameId: string expected";
            if (message.ruleId != null && message.hasOwnProperty("ruleId"))
                if (!$util.isString(message.ruleId))
                    return "ruleId: string expected";
            return null;
        };

        /**
         * Creates a StartJoinRoomNot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof servermanager.StartJoinRoomNot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {servermanager.StartJoinRoomNot} StartJoinRoomNot
         */
        StartJoinRoomNot.fromObject = function fromObject(object) {
            if (object instanceof $root.servermanager.StartJoinRoomNot)
                return object;
            var message = new $root.servermanager.StartJoinRoomNot();
            if (object.gameId != null)
                message.gameId = String(object.gameId);
            if (object.ruleId != null)
                message.ruleId = String(object.ruleId);
            return message;
        };

        /**
         * Creates a plain object from a StartJoinRoomNot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof servermanager.StartJoinRoomNot
         * @static
         * @param {servermanager.StartJoinRoomNot} message StartJoinRoomNot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StartJoinRoomNot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.gameId = "";
                object.ruleId = "";
            }
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            if (message.ruleId != null && message.hasOwnProperty("ruleId"))
                object.ruleId = message.ruleId;
            return object;
        };

        /**
         * Converts this StartJoinRoomNot to JSON.
         * @function toJSON
         * @memberof servermanager.StartJoinRoomNot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StartJoinRoomNot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StartJoinRoomNot;
    })();

    servermanager.CancelJoinRoomReq = (function () {

        /**
         * Properties of a CancelJoinRoomReq.
         * @memberof servermanager
         * @interface ICancelJoinRoomReq
         * @property {number|Long|null} [uid] CancelJoinRoomReq uid
         */

        /**
         * Constructs a new CancelJoinRoomReq.
         * @memberof servermanager
         * @classdesc Represents a CancelJoinRoomReq.
         * @implements ICancelJoinRoomReq
         * @constructor
         * @param {servermanager.ICancelJoinRoomReq=} [properties] Properties to set
         */
        function CancelJoinRoomReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CancelJoinRoomReq uid.
         * @member {number|Long} uid
         * @memberof servermanager.CancelJoinRoomReq
         * @instance
         */
        CancelJoinRoomReq.prototype.uid = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * Creates a new CancelJoinRoomReq instance using the specified properties.
         * @function create
         * @memberof servermanager.CancelJoinRoomReq
         * @static
         * @param {servermanager.ICancelJoinRoomReq=} [properties] Properties to set
         * @returns {servermanager.CancelJoinRoomReq} CancelJoinRoomReq instance
         */
        CancelJoinRoomReq.create = function create(properties) {
            return new CancelJoinRoomReq(properties);
        };

        /**
         * Encodes the specified CancelJoinRoomReq message. Does not implicitly {@link servermanager.CancelJoinRoomReq.verify|verify} messages.
         * @function encode
         * @memberof servermanager.CancelJoinRoomReq
         * @static
         * @param {servermanager.ICancelJoinRoomReq} message CancelJoinRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CancelJoinRoomReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            return writer;
        };

        /**
         * Encodes the specified CancelJoinRoomReq message, length delimited. Does not implicitly {@link servermanager.CancelJoinRoomReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof servermanager.CancelJoinRoomReq
         * @static
         * @param {servermanager.ICancelJoinRoomReq} message CancelJoinRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CancelJoinRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CancelJoinRoomReq message from the specified reader or buffer.
         * @function decode
         * @memberof servermanager.CancelJoinRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {servermanager.CancelJoinRoomReq} CancelJoinRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CancelJoinRoomReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.servermanager.CancelJoinRoomReq();
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
         * Decodes a CancelJoinRoomReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof servermanager.CancelJoinRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {servermanager.CancelJoinRoomReq} CancelJoinRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CancelJoinRoomReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CancelJoinRoomReq message.
         * @function verify
         * @memberof servermanager.CancelJoinRoomReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CancelJoinRoomReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            return null;
        };

        /**
         * Creates a CancelJoinRoomReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof servermanager.CancelJoinRoomReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {servermanager.CancelJoinRoomReq} CancelJoinRoomReq
         */
        CancelJoinRoomReq.fromObject = function fromObject(object) {
            if (object instanceof $root.servermanager.CancelJoinRoomReq)
                return object;
            var message = new $root.servermanager.CancelJoinRoomReq();
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
         * Creates a plain object from a CancelJoinRoomReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof servermanager.CancelJoinRoomReq
         * @static
         * @param {servermanager.CancelJoinRoomReq} message CancelJoinRoomReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CancelJoinRoomReq.toObject = function toObject(message, options) {
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
         * Converts this CancelJoinRoomReq to JSON.
         * @function toJSON
         * @memberof servermanager.CancelJoinRoomReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CancelJoinRoomReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CancelJoinRoomReq;
    })();

    servermanager.CancelJoinRoomRsp = (function () {

        /**
         * Properties of a CancelJoinRoomRsp.
         * @memberof servermanager
         * @interface ICancelJoinRoomRsp
         * @property {number|null} [errCode] CancelJoinRoomRsp errCode
         * @property {string|null} [errMsg] CancelJoinRoomRsp errMsg
         */

        /**
         * Constructs a new CancelJoinRoomRsp.
         * @memberof servermanager
         * @classdesc Represents a CancelJoinRoomRsp.
         * @implements ICancelJoinRoomRsp
         * @constructor
         * @param {servermanager.ICancelJoinRoomRsp=} [properties] Properties to set
         */
        function CancelJoinRoomRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CancelJoinRoomRsp errCode.
         * @member {number} errCode
         * @memberof servermanager.CancelJoinRoomRsp
         * @instance
         */
        CancelJoinRoomRsp.prototype.errCode = 0;

        /**
         * CancelJoinRoomRsp errMsg.
         * @member {string} errMsg
         * @memberof servermanager.CancelJoinRoomRsp
         * @instance
         */
        CancelJoinRoomRsp.prototype.errMsg = "";

        /**
         * Creates a new CancelJoinRoomRsp instance using the specified properties.
         * @function create
         * @memberof servermanager.CancelJoinRoomRsp
         * @static
         * @param {servermanager.ICancelJoinRoomRsp=} [properties] Properties to set
         * @returns {servermanager.CancelJoinRoomRsp} CancelJoinRoomRsp instance
         */
        CancelJoinRoomRsp.create = function create(properties) {
            return new CancelJoinRoomRsp(properties);
        };

        /**
         * Encodes the specified CancelJoinRoomRsp message. Does not implicitly {@link servermanager.CancelJoinRoomRsp.verify|verify} messages.
         * @function encode
         * @memberof servermanager.CancelJoinRoomRsp
         * @static
         * @param {servermanager.ICancelJoinRoomRsp} message CancelJoinRoomRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CancelJoinRoomRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            return writer;
        };

        /**
         * Encodes the specified CancelJoinRoomRsp message, length delimited. Does not implicitly {@link servermanager.CancelJoinRoomRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof servermanager.CancelJoinRoomRsp
         * @static
         * @param {servermanager.ICancelJoinRoomRsp} message CancelJoinRoomRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CancelJoinRoomRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CancelJoinRoomRsp message from the specified reader or buffer.
         * @function decode
         * @memberof servermanager.CancelJoinRoomRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {servermanager.CancelJoinRoomRsp} CancelJoinRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CancelJoinRoomRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.servermanager.CancelJoinRoomRsp();
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
         * Decodes a CancelJoinRoomRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof servermanager.CancelJoinRoomRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {servermanager.CancelJoinRoomRsp} CancelJoinRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CancelJoinRoomRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CancelJoinRoomRsp message.
         * @function verify
         * @memberof servermanager.CancelJoinRoomRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CancelJoinRoomRsp.verify = function verify(message) {
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
         * Creates a CancelJoinRoomRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof servermanager.CancelJoinRoomRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {servermanager.CancelJoinRoomRsp} CancelJoinRoomRsp
         */
        CancelJoinRoomRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.servermanager.CancelJoinRoomRsp)
                return object;
            var message = new $root.servermanager.CancelJoinRoomRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            return message;
        };

        /**
         * Creates a plain object from a CancelJoinRoomRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof servermanager.CancelJoinRoomRsp
         * @static
         * @param {servermanager.CancelJoinRoomRsp} message CancelJoinRoomRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CancelJoinRoomRsp.toObject = function toObject(message, options) {
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
         * Converts this CancelJoinRoomRsp to JSON.
         * @function toJSON
         * @memberof servermanager.CancelJoinRoomRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CancelJoinRoomRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CancelJoinRoomRsp;
    })();

    servermanager.GetRoomInfoReq = (function () {

        /**
         * Properties of a GetRoomInfoReq.
         * @memberof servermanager
         * @interface IGetRoomInfoReq
         * @property {string|null} [roomId] GetRoomInfoReq roomId
         */

        /**
         * Constructs a new GetRoomInfoReq.
         * @memberof servermanager
         * @classdesc Represents a GetRoomInfoReq.
         * @implements IGetRoomInfoReq
         * @constructor
         * @param {servermanager.IGetRoomInfoReq=} [properties] Properties to set
         */
        function GetRoomInfoReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetRoomInfoReq roomId.
         * @member {string} roomId
         * @memberof servermanager.GetRoomInfoReq
         * @instance
         */
        GetRoomInfoReq.prototype.roomId = "";

        /**
         * Creates a new GetRoomInfoReq instance using the specified properties.
         * @function create
         * @memberof servermanager.GetRoomInfoReq
         * @static
         * @param {servermanager.IGetRoomInfoReq=} [properties] Properties to set
         * @returns {servermanager.GetRoomInfoReq} GetRoomInfoReq instance
         */
        GetRoomInfoReq.create = function create(properties) {
            return new GetRoomInfoReq(properties);
        };

        /**
         * Encodes the specified GetRoomInfoReq message. Does not implicitly {@link servermanager.GetRoomInfoReq.verify|verify} messages.
         * @function encode
         * @memberof servermanager.GetRoomInfoReq
         * @static
         * @param {servermanager.IGetRoomInfoReq} message GetRoomInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRoomInfoReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomId);
            return writer;
        };

        /**
         * Encodes the specified GetRoomInfoReq message, length delimited. Does not implicitly {@link servermanager.GetRoomInfoReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof servermanager.GetRoomInfoReq
         * @static
         * @param {servermanager.IGetRoomInfoReq} message GetRoomInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRoomInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetRoomInfoReq message from the specified reader or buffer.
         * @function decode
         * @memberof servermanager.GetRoomInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {servermanager.GetRoomInfoReq} GetRoomInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRoomInfoReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.servermanager.GetRoomInfoReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.roomId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetRoomInfoReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof servermanager.GetRoomInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {servermanager.GetRoomInfoReq} GetRoomInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRoomInfoReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetRoomInfoReq message.
         * @function verify
         * @memberof servermanager.GetRoomInfoReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetRoomInfoReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
            return null;
        };

        /**
         * Creates a GetRoomInfoReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof servermanager.GetRoomInfoReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {servermanager.GetRoomInfoReq} GetRoomInfoReq
         */
        GetRoomInfoReq.fromObject = function fromObject(object) {
            if (object instanceof $root.servermanager.GetRoomInfoReq)
                return object;
            var message = new $root.servermanager.GetRoomInfoReq();
            if (object.roomId != null)
                message.roomId = String(object.roomId);
            return message;
        };

        /**
         * Creates a plain object from a GetRoomInfoReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof servermanager.GetRoomInfoReq
         * @static
         * @param {servermanager.GetRoomInfoReq} message GetRoomInfoReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetRoomInfoReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.roomId = "";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            return object;
        };

        /**
         * Converts this GetRoomInfoReq to JSON.
         * @function toJSON
         * @memberof servermanager.GetRoomInfoReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetRoomInfoReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetRoomInfoReq;
    })();

    servermanager.GetRoomInfoRsp = (function () {

        /**
         * Properties of a GetRoomInfoRsp.
         * @memberof servermanager
         * @interface IGetRoomInfoRsp
         * @property {number|null} [errCode] GetRoomInfoRsp errCode
         * @property {string|null} [errMsg] GetRoomInfoRsp errMsg
         * @property {servermanager.IRoomInfo|null} [room] GetRoomInfoRsp room
         */

        /**
         * Constructs a new GetRoomInfoRsp.
         * @memberof servermanager
         * @classdesc Represents a GetRoomInfoRsp.
         * @implements IGetRoomInfoRsp
         * @constructor
         * @param {servermanager.IGetRoomInfoRsp=} [properties] Properties to set
         */
        function GetRoomInfoRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetRoomInfoRsp errCode.
         * @member {number} errCode
         * @memberof servermanager.GetRoomInfoRsp
         * @instance
         */
        GetRoomInfoRsp.prototype.errCode = 0;

        /**
         * GetRoomInfoRsp errMsg.
         * @member {string} errMsg
         * @memberof servermanager.GetRoomInfoRsp
         * @instance
         */
        GetRoomInfoRsp.prototype.errMsg = "";

        /**
         * GetRoomInfoRsp room.
         * @member {servermanager.IRoomInfo|null|undefined} room
         * @memberof servermanager.GetRoomInfoRsp
         * @instance
         */
        GetRoomInfoRsp.prototype.room = null;

        /**
         * Creates a new GetRoomInfoRsp instance using the specified properties.
         * @function create
         * @memberof servermanager.GetRoomInfoRsp
         * @static
         * @param {servermanager.IGetRoomInfoRsp=} [properties] Properties to set
         * @returns {servermanager.GetRoomInfoRsp} GetRoomInfoRsp instance
         */
        GetRoomInfoRsp.create = function create(properties) {
            return new GetRoomInfoRsp(properties);
        };

        /**
         * Encodes the specified GetRoomInfoRsp message. Does not implicitly {@link servermanager.GetRoomInfoRsp.verify|verify} messages.
         * @function encode
         * @memberof servermanager.GetRoomInfoRsp
         * @static
         * @param {servermanager.IGetRoomInfoRsp} message GetRoomInfoRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRoomInfoRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            if (message.room != null && message.hasOwnProperty("room"))
                $root.servermanager.RoomInfo.encode(message.room, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetRoomInfoRsp message, length delimited. Does not implicitly {@link servermanager.GetRoomInfoRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof servermanager.GetRoomInfoRsp
         * @static
         * @param {servermanager.IGetRoomInfoRsp} message GetRoomInfoRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRoomInfoRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetRoomInfoRsp message from the specified reader or buffer.
         * @function decode
         * @memberof servermanager.GetRoomInfoRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {servermanager.GetRoomInfoRsp} GetRoomInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRoomInfoRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.servermanager.GetRoomInfoRsp();
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
                        message.room = $root.servermanager.RoomInfo.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetRoomInfoRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof servermanager.GetRoomInfoRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {servermanager.GetRoomInfoRsp} GetRoomInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRoomInfoRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetRoomInfoRsp message.
         * @function verify
         * @memberof servermanager.GetRoomInfoRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetRoomInfoRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                if (!$util.isInteger(message.errCode))
                    return "errCode: integer expected";
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                if (!$util.isString(message.errMsg))
                    return "errMsg: string expected";
            if (message.room != null && message.hasOwnProperty("room")) {
                var error = $root.servermanager.RoomInfo.verify(message.room);
                if (error)
                    return "room." + error;
            }
            return null;
        };

        /**
         * Creates a GetRoomInfoRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof servermanager.GetRoomInfoRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {servermanager.GetRoomInfoRsp} GetRoomInfoRsp
         */
        GetRoomInfoRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.servermanager.GetRoomInfoRsp)
                return object;
            var message = new $root.servermanager.GetRoomInfoRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            if (object.room != null) {
                if (typeof object.room !== "object")
                    throw TypeError(".servermanager.GetRoomInfoRsp.room: object expected");
                message.room = $root.servermanager.RoomInfo.fromObject(object.room);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetRoomInfoRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof servermanager.GetRoomInfoRsp
         * @static
         * @param {servermanager.GetRoomInfoRsp} message GetRoomInfoRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetRoomInfoRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.errCode = 0;
                object.errMsg = "";
                object.room = null;
            }
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                object.errCode = message.errCode;
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                object.errMsg = message.errMsg;
            if (message.room != null && message.hasOwnProperty("room"))
                object.room = $root.servermanager.RoomInfo.toObject(message.room, options);
            return object;
        };

        /**
         * Converts this GetRoomInfoRsp to JSON.
         * @function toJSON
         * @memberof servermanager.GetRoomInfoRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetRoomInfoRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetRoomInfoRsp;
    })();

    servermanager.GetCurRoomInfoReq = (function () {

        /**
         * Properties of a GetCurRoomInfoReq.
         * @memberof servermanager
         * @interface IGetCurRoomInfoReq
         * @property {number|Long|null} [uid] GetCurRoomInfoReq uid
         */

        /**
         * Constructs a new GetCurRoomInfoReq.
         * @memberof servermanager
         * @classdesc Represents a GetCurRoomInfoReq.
         * @implements IGetCurRoomInfoReq
         * @constructor
         * @param {servermanager.IGetCurRoomInfoReq=} [properties] Properties to set
         */
        function GetCurRoomInfoReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetCurRoomInfoReq uid.
         * @member {number|Long} uid
         * @memberof servermanager.GetCurRoomInfoReq
         * @instance
         */
        GetCurRoomInfoReq.prototype.uid = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * Creates a new GetCurRoomInfoReq instance using the specified properties.
         * @function create
         * @memberof servermanager.GetCurRoomInfoReq
         * @static
         * @param {servermanager.IGetCurRoomInfoReq=} [properties] Properties to set
         * @returns {servermanager.GetCurRoomInfoReq} GetCurRoomInfoReq instance
         */
        GetCurRoomInfoReq.create = function create(properties) {
            return new GetCurRoomInfoReq(properties);
        };

        /**
         * Encodes the specified GetCurRoomInfoReq message. Does not implicitly {@link servermanager.GetCurRoomInfoReq.verify|verify} messages.
         * @function encode
         * @memberof servermanager.GetCurRoomInfoReq
         * @static
         * @param {servermanager.IGetCurRoomInfoReq} message GetCurRoomInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetCurRoomInfoReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            return writer;
        };

        /**
         * Encodes the specified GetCurRoomInfoReq message, length delimited. Does not implicitly {@link servermanager.GetCurRoomInfoReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof servermanager.GetCurRoomInfoReq
         * @static
         * @param {servermanager.IGetCurRoomInfoReq} message GetCurRoomInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetCurRoomInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetCurRoomInfoReq message from the specified reader or buffer.
         * @function decode
         * @memberof servermanager.GetCurRoomInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {servermanager.GetCurRoomInfoReq} GetCurRoomInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetCurRoomInfoReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.servermanager.GetCurRoomInfoReq();
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
         * Decodes a GetCurRoomInfoReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof servermanager.GetCurRoomInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {servermanager.GetCurRoomInfoReq} GetCurRoomInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetCurRoomInfoReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetCurRoomInfoReq message.
         * @function verify
         * @memberof servermanager.GetCurRoomInfoReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetCurRoomInfoReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            return null;
        };

        /**
         * Creates a GetCurRoomInfoReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof servermanager.GetCurRoomInfoReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {servermanager.GetCurRoomInfoReq} GetCurRoomInfoReq
         */
        GetCurRoomInfoReq.fromObject = function fromObject(object) {
            if (object instanceof $root.servermanager.GetCurRoomInfoReq)
                return object;
            var message = new $root.servermanager.GetCurRoomInfoReq();
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
         * Creates a plain object from a GetCurRoomInfoReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof servermanager.GetCurRoomInfoReq
         * @static
         * @param {servermanager.GetCurRoomInfoReq} message GetCurRoomInfoReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetCurRoomInfoReq.toObject = function toObject(message, options) {
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
         * Converts this GetCurRoomInfoReq to JSON.
         * @function toJSON
         * @memberof servermanager.GetCurRoomInfoReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetCurRoomInfoReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetCurRoomInfoReq;
    })();

    servermanager.GetCurRoomInfoRsp = (function () {

        /**
         * Properties of a GetCurRoomInfoRsp.
         * @memberof servermanager
         * @interface IGetCurRoomInfoRsp
         * @property {number|null} [errCode] GetCurRoomInfoRsp errCode
         * @property {string|null} [errMsg] GetCurRoomInfoRsp errMsg
         * @property {servermanager.IRoomInfo|null} [room] GetCurRoomInfoRsp room
         */

        /**
         * Constructs a new GetCurRoomInfoRsp.
         * @memberof servermanager
         * @classdesc Represents a GetCurRoomInfoRsp.
         * @implements IGetCurRoomInfoRsp
         * @constructor
         * @param {servermanager.IGetCurRoomInfoRsp=} [properties] Properties to set
         */
        function GetCurRoomInfoRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetCurRoomInfoRsp errCode.
         * @member {number} errCode
         * @memberof servermanager.GetCurRoomInfoRsp
         * @instance
         */
        GetCurRoomInfoRsp.prototype.errCode = 0;

        /**
         * GetCurRoomInfoRsp errMsg.
         * @member {string} errMsg
         * @memberof servermanager.GetCurRoomInfoRsp
         * @instance
         */
        GetCurRoomInfoRsp.prototype.errMsg = "";

        /**
         * GetCurRoomInfoRsp room.
         * @member {servermanager.IRoomInfo|null|undefined} room
         * @memberof servermanager.GetCurRoomInfoRsp
         * @instance
         */
        GetCurRoomInfoRsp.prototype.room = null;

        /**
         * Creates a new GetCurRoomInfoRsp instance using the specified properties.
         * @function create
         * @memberof servermanager.GetCurRoomInfoRsp
         * @static
         * @param {servermanager.IGetCurRoomInfoRsp=} [properties] Properties to set
         * @returns {servermanager.GetCurRoomInfoRsp} GetCurRoomInfoRsp instance
         */
        GetCurRoomInfoRsp.create = function create(properties) {
            return new GetCurRoomInfoRsp(properties);
        };

        /**
         * Encodes the specified GetCurRoomInfoRsp message. Does not implicitly {@link servermanager.GetCurRoomInfoRsp.verify|verify} messages.
         * @function encode
         * @memberof servermanager.GetCurRoomInfoRsp
         * @static
         * @param {servermanager.IGetCurRoomInfoRsp} message GetCurRoomInfoRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetCurRoomInfoRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            if (message.room != null && message.hasOwnProperty("room"))
                $root.servermanager.RoomInfo.encode(message.room, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetCurRoomInfoRsp message, length delimited. Does not implicitly {@link servermanager.GetCurRoomInfoRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof servermanager.GetCurRoomInfoRsp
         * @static
         * @param {servermanager.IGetCurRoomInfoRsp} message GetCurRoomInfoRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetCurRoomInfoRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetCurRoomInfoRsp message from the specified reader or buffer.
         * @function decode
         * @memberof servermanager.GetCurRoomInfoRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {servermanager.GetCurRoomInfoRsp} GetCurRoomInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetCurRoomInfoRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.servermanager.GetCurRoomInfoRsp();
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
                        message.room = $root.servermanager.RoomInfo.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetCurRoomInfoRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof servermanager.GetCurRoomInfoRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {servermanager.GetCurRoomInfoRsp} GetCurRoomInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetCurRoomInfoRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetCurRoomInfoRsp message.
         * @function verify
         * @memberof servermanager.GetCurRoomInfoRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetCurRoomInfoRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                if (!$util.isInteger(message.errCode))
                    return "errCode: integer expected";
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                if (!$util.isString(message.errMsg))
                    return "errMsg: string expected";
            if (message.room != null && message.hasOwnProperty("room")) {
                var error = $root.servermanager.RoomInfo.verify(message.room);
                if (error)
                    return "room." + error;
            }
            return null;
        };

        /**
         * Creates a GetCurRoomInfoRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof servermanager.GetCurRoomInfoRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {servermanager.GetCurRoomInfoRsp} GetCurRoomInfoRsp
         */
        GetCurRoomInfoRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.servermanager.GetCurRoomInfoRsp)
                return object;
            var message = new $root.servermanager.GetCurRoomInfoRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            if (object.room != null) {
                if (typeof object.room !== "object")
                    throw TypeError(".servermanager.GetCurRoomInfoRsp.room: object expected");
                message.room = $root.servermanager.RoomInfo.fromObject(object.room);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetCurRoomInfoRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof servermanager.GetCurRoomInfoRsp
         * @static
         * @param {servermanager.GetCurRoomInfoRsp} message GetCurRoomInfoRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetCurRoomInfoRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.errCode = 0;
                object.errMsg = "";
                object.room = null;
            }
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                object.errCode = message.errCode;
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                object.errMsg = message.errMsg;
            if (message.room != null && message.hasOwnProperty("room"))
                object.room = $root.servermanager.RoomInfo.toObject(message.room, options);
            return object;
        };

        /**
         * Converts this GetCurRoomInfoRsp to JSON.
         * @function toJSON
         * @memberof servermanager.GetCurRoomInfoRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetCurRoomInfoRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetCurRoomInfoRsp;
    })();

    servermanager.RoomListReq = (function () {

        /**
         * Properties of a RoomListReq.
         * @memberof servermanager
         * @interface IRoomListReq
         */

        /**
         * Constructs a new RoomListReq.
         * @memberof servermanager
         * @classdesc Represents a RoomListReq.
         * @implements IRoomListReq
         * @constructor
         * @param {servermanager.IRoomListReq=} [properties] Properties to set
         */
        function RoomListReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new RoomListReq instance using the specified properties.
         * @function create
         * @memberof servermanager.RoomListReq
         * @static
         * @param {servermanager.IRoomListReq=} [properties] Properties to set
         * @returns {servermanager.RoomListReq} RoomListReq instance
         */
        RoomListReq.create = function create(properties) {
            return new RoomListReq(properties);
        };

        /**
         * Encodes the specified RoomListReq message. Does not implicitly {@link servermanager.RoomListReq.verify|verify} messages.
         * @function encode
         * @memberof servermanager.RoomListReq
         * @static
         * @param {servermanager.IRoomListReq} message RoomListReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomListReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified RoomListReq message, length delimited. Does not implicitly {@link servermanager.RoomListReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof servermanager.RoomListReq
         * @static
         * @param {servermanager.IRoomListReq} message RoomListReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomListReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomListReq message from the specified reader or buffer.
         * @function decode
         * @memberof servermanager.RoomListReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {servermanager.RoomListReq} RoomListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomListReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.servermanager.RoomListReq();
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
         * Decodes a RoomListReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof servermanager.RoomListReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {servermanager.RoomListReq} RoomListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomListReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomListReq message.
         * @function verify
         * @memberof servermanager.RoomListReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomListReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a RoomListReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof servermanager.RoomListReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {servermanager.RoomListReq} RoomListReq
         */
        RoomListReq.fromObject = function fromObject(object) {
            if (object instanceof $root.servermanager.RoomListReq)
                return object;
            return new $root.servermanager.RoomListReq();
        };

        /**
         * Creates a plain object from a RoomListReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof servermanager.RoomListReq
         * @static
         * @param {servermanager.RoomListReq} message RoomListReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomListReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this RoomListReq to JSON.
         * @function toJSON
         * @memberof servermanager.RoomListReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomListReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoomListReq;
    })();

    servermanager.RoomListRsp = (function () {

        /**
         * Properties of a RoomListRsp.
         * @memberof servermanager
         * @interface IRoomListRsp
         * @property {number|null} [errCode] RoomListRsp errCode
         * @property {string|null} [errMsg] RoomListRsp errMsg
         * @property {Array.<servermanager.IRoomInfo>|null} [roomList] RoomListRsp roomList
         */

        /**
         * Constructs a new RoomListRsp.
         * @memberof servermanager
         * @classdesc Represents a RoomListRsp.
         * @implements IRoomListRsp
         * @constructor
         * @param {servermanager.IRoomListRsp=} [properties] Properties to set
         */
        function RoomListRsp(properties) {
            this.roomList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomListRsp errCode.
         * @member {number} errCode
         * @memberof servermanager.RoomListRsp
         * @instance
         */
        RoomListRsp.prototype.errCode = 0;

        /**
         * RoomListRsp errMsg.
         * @member {string} errMsg
         * @memberof servermanager.RoomListRsp
         * @instance
         */
        RoomListRsp.prototype.errMsg = "";

        /**
         * RoomListRsp roomList.
         * @member {Array.<servermanager.IRoomInfo>} roomList
         * @memberof servermanager.RoomListRsp
         * @instance
         */
        RoomListRsp.prototype.roomList = $util.emptyArray;

        /**
         * Creates a new RoomListRsp instance using the specified properties.
         * @function create
         * @memberof servermanager.RoomListRsp
         * @static
         * @param {servermanager.IRoomListRsp=} [properties] Properties to set
         * @returns {servermanager.RoomListRsp} RoomListRsp instance
         */
        RoomListRsp.create = function create(properties) {
            return new RoomListRsp(properties);
        };

        /**
         * Encodes the specified RoomListRsp message. Does not implicitly {@link servermanager.RoomListRsp.verify|verify} messages.
         * @function encode
         * @memberof servermanager.RoomListRsp
         * @static
         * @param {servermanager.IRoomListRsp} message RoomListRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomListRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            if (message.roomList != null && message.roomList.length)
                for (var i = 0; i < message.roomList.length; ++i)
                    $root.servermanager.RoomInfo.encode(message.roomList[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RoomListRsp message, length delimited. Does not implicitly {@link servermanager.RoomListRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof servermanager.RoomListRsp
         * @static
         * @param {servermanager.IRoomListRsp} message RoomListRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomListRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomListRsp message from the specified reader or buffer.
         * @function decode
         * @memberof servermanager.RoomListRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {servermanager.RoomListRsp} RoomListRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomListRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.servermanager.RoomListRsp();
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
                        if (!(message.roomList && message.roomList.length))
                            message.roomList = [];
                        message.roomList.push($root.servermanager.RoomInfo.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoomListRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof servermanager.RoomListRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {servermanager.RoomListRsp} RoomListRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomListRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomListRsp message.
         * @function verify
         * @memberof servermanager.RoomListRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomListRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                if (!$util.isInteger(message.errCode))
                    return "errCode: integer expected";
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                if (!$util.isString(message.errMsg))
                    return "errMsg: string expected";
            if (message.roomList != null && message.hasOwnProperty("roomList")) {
                if (!Array.isArray(message.roomList))
                    return "roomList: array expected";
                for (var i = 0; i < message.roomList.length; ++i) {
                    var error = $root.servermanager.RoomInfo.verify(message.roomList[i]);
                    if (error)
                        return "roomList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RoomListRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof servermanager.RoomListRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {servermanager.RoomListRsp} RoomListRsp
         */
        RoomListRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.servermanager.RoomListRsp)
                return object;
            var message = new $root.servermanager.RoomListRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            if (object.roomList) {
                if (!Array.isArray(object.roomList))
                    throw TypeError(".servermanager.RoomListRsp.roomList: array expected");
                message.roomList = [];
                for (var i = 0; i < object.roomList.length; ++i) {
                    if (typeof object.roomList[i] !== "object")
                        throw TypeError(".servermanager.RoomListRsp.roomList: object expected");
                    message.roomList[i] = $root.servermanager.RoomInfo.fromObject(object.roomList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RoomListRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof servermanager.RoomListRsp
         * @static
         * @param {servermanager.RoomListRsp} message RoomListRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomListRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.roomList = [];
            if (options.defaults) {
                object.errCode = 0;
                object.errMsg = "";
            }
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                object.errCode = message.errCode;
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                object.errMsg = message.errMsg;
            if (message.roomList && message.roomList.length) {
                object.roomList = [];
                for (var j = 0; j < message.roomList.length; ++j)
                    object.roomList[j] = $root.servermanager.RoomInfo.toObject(message.roomList[j], options);
            }
            return object;
        };

        /**
         * Converts this RoomListRsp to JSON.
         * @function toJSON
         * @memberof servermanager.RoomListRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomListRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoomListRsp;
    })();

    servermanager.EnterRoomConfirmReq = (function () {

        /**
         * Properties of an EnterRoomConfirmReq.
         * @memberof servermanager
         * @interface IEnterRoomConfirmReq
         * @property {boolean|null} [confirmed] EnterRoomConfirmReq confirmed
         */

        /**
         * Constructs a new EnterRoomConfirmReq.
         * @memberof servermanager
         * @classdesc Represents an EnterRoomConfirmReq.
         * @implements IEnterRoomConfirmReq
         * @constructor
         * @param {servermanager.IEnterRoomConfirmReq=} [properties] Properties to set
         */
        function EnterRoomConfirmReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterRoomConfirmReq confirmed.
         * @member {boolean} confirmed
         * @memberof servermanager.EnterRoomConfirmReq
         * @instance
         */
        EnterRoomConfirmReq.prototype.confirmed = false;

        /**
         * Creates a new EnterRoomConfirmReq instance using the specified properties.
         * @function create
         * @memberof servermanager.EnterRoomConfirmReq
         * @static
         * @param {servermanager.IEnterRoomConfirmReq=} [properties] Properties to set
         * @returns {servermanager.EnterRoomConfirmReq} EnterRoomConfirmReq instance
         */
        EnterRoomConfirmReq.create = function create(properties) {
            return new EnterRoomConfirmReq(properties);
        };

        /**
         * Encodes the specified EnterRoomConfirmReq message. Does not implicitly {@link servermanager.EnterRoomConfirmReq.verify|verify} messages.
         * @function encode
         * @memberof servermanager.EnterRoomConfirmReq
         * @static
         * @param {servermanager.IEnterRoomConfirmReq} message EnterRoomConfirmReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomConfirmReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.confirmed != null && message.hasOwnProperty("confirmed"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.confirmed);
            return writer;
        };

        /**
         * Encodes the specified EnterRoomConfirmReq message, length delimited. Does not implicitly {@link servermanager.EnterRoomConfirmReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof servermanager.EnterRoomConfirmReq
         * @static
         * @param {servermanager.IEnterRoomConfirmReq} message EnterRoomConfirmReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomConfirmReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnterRoomConfirmReq message from the specified reader or buffer.
         * @function decode
         * @memberof servermanager.EnterRoomConfirmReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {servermanager.EnterRoomConfirmReq} EnterRoomConfirmReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomConfirmReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.servermanager.EnterRoomConfirmReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.confirmed = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        /**
         * Decodes an EnterRoomConfirmReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof servermanager.EnterRoomConfirmReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {servermanager.EnterRoomConfirmReq} EnterRoomConfirmReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomConfirmReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnterRoomConfirmReq message.
         * @function verify
         * @memberof servermanager.EnterRoomConfirmReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnterRoomConfirmReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.confirmed != null && message.hasOwnProperty("confirmed"))
                if (typeof message.confirmed !== "boolean")
                    return "confirmed: boolean expected";
            return null;
        };

        /**
         * Creates an EnterRoomConfirmReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof servermanager.EnterRoomConfirmReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {servermanager.EnterRoomConfirmReq} EnterRoomConfirmReq
         */
        EnterRoomConfirmReq.fromObject = function fromObject(object) {
            if (object instanceof $root.servermanager.EnterRoomConfirmReq)
                return object;
            var message = new $root.servermanager.EnterRoomConfirmReq();
            if (object.confirmed != null)
                message.confirmed = Boolean(object.confirmed);
            return message;
        };

        /**
         * Creates a plain object from an EnterRoomConfirmReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof servermanager.EnterRoomConfirmReq
         * @static
         * @param {servermanager.EnterRoomConfirmReq} message EnterRoomConfirmReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnterRoomConfirmReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.confirmed = false;
            if (message.confirmed != null && message.hasOwnProperty("confirmed"))
                object.confirmed = message.confirmed;
            return object;
        };

        /**
         * Converts this EnterRoomConfirmReq to JSON.
         * @function toJSON
         * @memberof servermanager.EnterRoomConfirmReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnterRoomConfirmReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EnterRoomConfirmReq;
    })();

    servermanager.EnterRoomConfirmRsp = (function () {

        /**
         * Properties of an EnterRoomConfirmRsp.
         * @memberof servermanager
         * @interface IEnterRoomConfirmRsp
         * @property {number|null} [errCode] EnterRoomConfirmRsp errCode
         * @property {string|null} [errMsg] EnterRoomConfirmRsp errMsg
         * @property {servermanager.IRoomInfo|null} [room] EnterRoomConfirmRsp room
         */

        /**
         * Constructs a new EnterRoomConfirmRsp.
         * @memberof servermanager
         * @classdesc Represents an EnterRoomConfirmRsp.
         * @implements IEnterRoomConfirmRsp
         * @constructor
         * @param {servermanager.IEnterRoomConfirmRsp=} [properties] Properties to set
         */
        function EnterRoomConfirmRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterRoomConfirmRsp errCode.
         * @member {number} errCode
         * @memberof servermanager.EnterRoomConfirmRsp
         * @instance
         */
        EnterRoomConfirmRsp.prototype.errCode = 0;

        /**
         * EnterRoomConfirmRsp errMsg.
         * @member {string} errMsg
         * @memberof servermanager.EnterRoomConfirmRsp
         * @instance
         */
        EnterRoomConfirmRsp.prototype.errMsg = "";

        /**
         * EnterRoomConfirmRsp room.
         * @member {servermanager.IRoomInfo|null|undefined} room
         * @memberof servermanager.EnterRoomConfirmRsp
         * @instance
         */
        EnterRoomConfirmRsp.prototype.room = null;

        /**
         * Creates a new EnterRoomConfirmRsp instance using the specified properties.
         * @function create
         * @memberof servermanager.EnterRoomConfirmRsp
         * @static
         * @param {servermanager.IEnterRoomConfirmRsp=} [properties] Properties to set
         * @returns {servermanager.EnterRoomConfirmRsp} EnterRoomConfirmRsp instance
         */
        EnterRoomConfirmRsp.create = function create(properties) {
            return new EnterRoomConfirmRsp(properties);
        };

        /**
         * Encodes the specified EnterRoomConfirmRsp message. Does not implicitly {@link servermanager.EnterRoomConfirmRsp.verify|verify} messages.
         * @function encode
         * @memberof servermanager.EnterRoomConfirmRsp
         * @static
         * @param {servermanager.IEnterRoomConfirmRsp} message EnterRoomConfirmRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomConfirmRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            if (message.room != null && message.hasOwnProperty("room"))
                $root.servermanager.RoomInfo.encode(message.room, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified EnterRoomConfirmRsp message, length delimited. Does not implicitly {@link servermanager.EnterRoomConfirmRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof servermanager.EnterRoomConfirmRsp
         * @static
         * @param {servermanager.IEnterRoomConfirmRsp} message EnterRoomConfirmRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomConfirmRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnterRoomConfirmRsp message from the specified reader or buffer.
         * @function decode
         * @memberof servermanager.EnterRoomConfirmRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {servermanager.EnterRoomConfirmRsp} EnterRoomConfirmRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomConfirmRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.servermanager.EnterRoomConfirmRsp();
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
                        message.room = $root.servermanager.RoomInfo.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        /**
         * Decodes an EnterRoomConfirmRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof servermanager.EnterRoomConfirmRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {servermanager.EnterRoomConfirmRsp} EnterRoomConfirmRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomConfirmRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnterRoomConfirmRsp message.
         * @function verify
         * @memberof servermanager.EnterRoomConfirmRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnterRoomConfirmRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                if (!$util.isInteger(message.errCode))
                    return "errCode: integer expected";
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                if (!$util.isString(message.errMsg))
                    return "errMsg: string expected";
            if (message.room != null && message.hasOwnProperty("room")) {
                var error = $root.servermanager.RoomInfo.verify(message.room);
                if (error)
                    return "room." + error;
            }
            return null;
        };

        /**
         * Creates an EnterRoomConfirmRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof servermanager.EnterRoomConfirmRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {servermanager.EnterRoomConfirmRsp} EnterRoomConfirmRsp
         */
        EnterRoomConfirmRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.servermanager.EnterRoomConfirmRsp)
                return object;
            var message = new $root.servermanager.EnterRoomConfirmRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            if (object.room != null) {
                if (typeof object.room !== "object")
                    throw TypeError(".servermanager.EnterRoomConfirmRsp.room: object expected");
                message.room = $root.servermanager.RoomInfo.fromObject(object.room);
            }
            return message;
        };

        /**
         * Creates a plain object from an EnterRoomConfirmRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof servermanager.EnterRoomConfirmRsp
         * @static
         * @param {servermanager.EnterRoomConfirmRsp} message EnterRoomConfirmRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnterRoomConfirmRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.errCode = 0;
                object.errMsg = "";
                object.room = null;
            }
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                object.errCode = message.errCode;
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                object.errMsg = message.errMsg;
            if (message.room != null && message.hasOwnProperty("room"))
                object.room = $root.servermanager.RoomInfo.toObject(message.room, options);
            return object;
        };

        /**
         * Converts this EnterRoomConfirmRsp to JSON.
         * @function toJSON
         * @memberof servermanager.EnterRoomConfirmRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnterRoomConfirmRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EnterRoomConfirmRsp;
    })();

    return servermanager;
})();

module.exports = $root.servermanager;
