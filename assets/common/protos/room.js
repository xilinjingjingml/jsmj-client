/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.roomProto || ($protobuf.roots.roomProto = {});

$root.RoomInfo = (function() {

    /**
     * Properties of a RoomInfo.
     * @exports IRoomInfo
     * @interface IRoomInfo
     * @property {string|null} [roomId] RoomInfo roomId
     * @property {string|null} [serverId] RoomInfo serverId
     * @property {string|null} [gameId] RoomInfo gameId
     * @property {string|null} [ruleId] RoomInfo ruleId
     * @property {string|null} [metaData] RoomInfo metaData
     */

    /**
     * Constructs a new RoomInfo.
     * @exports RoomInfo
     * @classdesc Represents a RoomInfo.
     * @implements IRoomInfo
     * @constructor
     * @param {IRoomInfo=} [properties] Properties to set
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
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.roomId = "";

    /**
     * RoomInfo serverId.
     * @member {string} serverId
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.serverId = "";

    /**
     * RoomInfo gameId.
     * @member {string} gameId
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.gameId = "";

    /**
     * RoomInfo ruleId.
     * @member {string} ruleId
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.ruleId = "";

    /**
     * RoomInfo metaData.
     * @member {string} metaData
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.metaData = "";

    /**
     * Creates a new RoomInfo instance using the specified properties.
     * @function create
     * @memberof RoomInfo
     * @static
     * @param {IRoomInfo=} [properties] Properties to set
     * @returns {RoomInfo} RoomInfo instance
     */
    RoomInfo.create = function create(properties) {
        return new RoomInfo(properties);
    };

    /**
     * Encodes the specified RoomInfo message. Does not implicitly {@link RoomInfo.verify|verify} messages.
     * @function encode
     * @memberof RoomInfo
     * @static
     * @param {IRoomInfo} message RoomInfo message or plain object to encode
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
     * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link RoomInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RoomInfo
     * @static
     * @param {IRoomInfo} message RoomInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoomInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RoomInfo message from the specified reader or buffer.
     * @function decode
     * @memberof RoomInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RoomInfo} RoomInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoomInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RoomInfo();
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
     * @memberof RoomInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RoomInfo} RoomInfo
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
     * @memberof RoomInfo
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
     * @memberof RoomInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RoomInfo} RoomInfo
     */
    RoomInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.RoomInfo)
            return object;
        var message = new $root.RoomInfo();
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
     * @memberof RoomInfo
     * @static
     * @param {RoomInfo} message RoomInfo
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
     * @memberof RoomInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RoomInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RoomInfo;
})();

$root.StartJoinRoomReq = (function() {

    /**
     * Properties of a StartJoinRoomReq.
     * @exports IStartJoinRoomReq
     * @interface IStartJoinRoomReq
     * @property {number|Long|null} [uid] StartJoinRoomReq uid
     * @property {string|null} [gameId] StartJoinRoomReq gameId
     * @property {string|null} [ruleId] StartJoinRoomReq ruleId
     */

    /**
     * Constructs a new StartJoinRoomReq.
     * @exports StartJoinRoomReq
     * @classdesc Represents a StartJoinRoomReq.
     * @implements IStartJoinRoomReq
     * @constructor
     * @param {IStartJoinRoomReq=} [properties] Properties to set
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
     * @memberof StartJoinRoomReq
     * @instance
     */
    StartJoinRoomReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * StartJoinRoomReq gameId.
     * @member {string} gameId
     * @memberof StartJoinRoomReq
     * @instance
     */
    StartJoinRoomReq.prototype.gameId = "";

    /**
     * StartJoinRoomReq ruleId.
     * @member {string} ruleId
     * @memberof StartJoinRoomReq
     * @instance
     */
    StartJoinRoomReq.prototype.ruleId = "";

    /**
     * Creates a new StartJoinRoomReq instance using the specified properties.
     * @function create
     * @memberof StartJoinRoomReq
     * @static
     * @param {IStartJoinRoomReq=} [properties] Properties to set
     * @returns {StartJoinRoomReq} StartJoinRoomReq instance
     */
    StartJoinRoomReq.create = function create(properties) {
        return new StartJoinRoomReq(properties);
    };

    /**
     * Encodes the specified StartJoinRoomReq message. Does not implicitly {@link StartJoinRoomReq.verify|verify} messages.
     * @function encode
     * @memberof StartJoinRoomReq
     * @static
     * @param {IStartJoinRoomReq} message StartJoinRoomReq message or plain object to encode
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
     * Encodes the specified StartJoinRoomReq message, length delimited. Does not implicitly {@link StartJoinRoomReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof StartJoinRoomReq
     * @static
     * @param {IStartJoinRoomReq} message StartJoinRoomReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StartJoinRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a StartJoinRoomReq message from the specified reader or buffer.
     * @function decode
     * @memberof StartJoinRoomReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {StartJoinRoomReq} StartJoinRoomReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StartJoinRoomReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StartJoinRoomReq();
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
     * @memberof StartJoinRoomReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {StartJoinRoomReq} StartJoinRoomReq
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
     * @memberof StartJoinRoomReq
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
     * @memberof StartJoinRoomReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {StartJoinRoomReq} StartJoinRoomReq
     */
    StartJoinRoomReq.fromObject = function fromObject(object) {
        if (object instanceof $root.StartJoinRoomReq)
            return object;
        var message = new $root.StartJoinRoomReq();
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
     * @memberof StartJoinRoomReq
     * @static
     * @param {StartJoinRoomReq} message StartJoinRoomReq
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
     * @memberof StartJoinRoomReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    StartJoinRoomReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return StartJoinRoomReq;
})();

$root.StartJoinRoomRsp = (function() {

    /**
     * Properties of a StartJoinRoomRsp.
     * @exports IStartJoinRoomRsp
     * @interface IStartJoinRoomRsp
     * @property {number|null} [errCode] StartJoinRoomRsp errCode
     * @property {string|null} [errMsg] StartJoinRoomRsp errMsg
     * @property {IGameData|null} [gameData] StartJoinRoomRsp gameData
     */

    /**
     * Constructs a new StartJoinRoomRsp.
     * @exports StartJoinRoomRsp
     * @classdesc Represents a StartJoinRoomRsp.
     * @implements IStartJoinRoomRsp
     * @constructor
     * @param {IStartJoinRoomRsp=} [properties] Properties to set
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
     * @memberof StartJoinRoomRsp
     * @instance
     */
    StartJoinRoomRsp.prototype.errCode = 0;

    /**
     * StartJoinRoomRsp errMsg.
     * @member {string} errMsg
     * @memberof StartJoinRoomRsp
     * @instance
     */
    StartJoinRoomRsp.prototype.errMsg = "";

    /**
     * StartJoinRoomRsp gameData.
     * @member {IGameData|null|undefined} gameData
     * @memberof StartJoinRoomRsp
     * @instance
     */
    StartJoinRoomRsp.prototype.gameData = null;

    /**
     * Creates a new StartJoinRoomRsp instance using the specified properties.
     * @function create
     * @memberof StartJoinRoomRsp
     * @static
     * @param {IStartJoinRoomRsp=} [properties] Properties to set
     * @returns {StartJoinRoomRsp} StartJoinRoomRsp instance
     */
    StartJoinRoomRsp.create = function create(properties) {
        return new StartJoinRoomRsp(properties);
    };

    /**
     * Encodes the specified StartJoinRoomRsp message. Does not implicitly {@link StartJoinRoomRsp.verify|verify} messages.
     * @function encode
     * @memberof StartJoinRoomRsp
     * @static
     * @param {IStartJoinRoomRsp} message StartJoinRoomRsp message or plain object to encode
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
            $root.GameData.encode(message.gameData, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified StartJoinRoomRsp message, length delimited. Does not implicitly {@link StartJoinRoomRsp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof StartJoinRoomRsp
     * @static
     * @param {IStartJoinRoomRsp} message StartJoinRoomRsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StartJoinRoomRsp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a StartJoinRoomRsp message from the specified reader or buffer.
     * @function decode
     * @memberof StartJoinRoomRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {StartJoinRoomRsp} StartJoinRoomRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StartJoinRoomRsp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StartJoinRoomRsp();
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
                message.gameData = $root.GameData.decode(reader, reader.uint32());
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
     * @memberof StartJoinRoomRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {StartJoinRoomRsp} StartJoinRoomRsp
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
     * @memberof StartJoinRoomRsp
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
            var error = $root.GameData.verify(message.gameData);
            if (error)
                return "gameData." + error;
        }
        return null;
    };

    /**
     * Creates a StartJoinRoomRsp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof StartJoinRoomRsp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {StartJoinRoomRsp} StartJoinRoomRsp
     */
    StartJoinRoomRsp.fromObject = function fromObject(object) {
        if (object instanceof $root.StartJoinRoomRsp)
            return object;
        var message = new $root.StartJoinRoomRsp();
        if (object.errCode != null)
            message.errCode = object.errCode | 0;
        if (object.errMsg != null)
            message.errMsg = String(object.errMsg);
        if (object.gameData != null) {
            if (typeof object.gameData !== "object")
                throw TypeError(".StartJoinRoomRsp.gameData: object expected");
            message.gameData = $root.GameData.fromObject(object.gameData);
        }
        return message;
    };

    /**
     * Creates a plain object from a StartJoinRoomRsp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof StartJoinRoomRsp
     * @static
     * @param {StartJoinRoomRsp} message StartJoinRoomRsp
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
            object.gameData = $root.GameData.toObject(message.gameData, options);
        return object;
    };

    /**
     * Converts this StartJoinRoomRsp to JSON.
     * @function toJSON
     * @memberof StartJoinRoomRsp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    StartJoinRoomRsp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return StartJoinRoomRsp;
})();

$root.StartJoinRoomNot = (function() {

    /**
     * Properties of a StartJoinRoomNot.
     * @exports IStartJoinRoomNot
     * @interface IStartJoinRoomNot
     * @property {string|null} [gameId] StartJoinRoomNot gameId
     * @property {string|null} [ruleId] StartJoinRoomNot ruleId
     */

    /**
     * Constructs a new StartJoinRoomNot.
     * @exports StartJoinRoomNot
     * @classdesc Represents a StartJoinRoomNot.
     * @implements IStartJoinRoomNot
     * @constructor
     * @param {IStartJoinRoomNot=} [properties] Properties to set
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
     * @memberof StartJoinRoomNot
     * @instance
     */
    StartJoinRoomNot.prototype.gameId = "";

    /**
     * StartJoinRoomNot ruleId.
     * @member {string} ruleId
     * @memberof StartJoinRoomNot
     * @instance
     */
    StartJoinRoomNot.prototype.ruleId = "";

    /**
     * Creates a new StartJoinRoomNot instance using the specified properties.
     * @function create
     * @memberof StartJoinRoomNot
     * @static
     * @param {IStartJoinRoomNot=} [properties] Properties to set
     * @returns {StartJoinRoomNot} StartJoinRoomNot instance
     */
    StartJoinRoomNot.create = function create(properties) {
        return new StartJoinRoomNot(properties);
    };

    /**
     * Encodes the specified StartJoinRoomNot message. Does not implicitly {@link StartJoinRoomNot.verify|verify} messages.
     * @function encode
     * @memberof StartJoinRoomNot
     * @static
     * @param {IStartJoinRoomNot} message StartJoinRoomNot message or plain object to encode
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
     * Encodes the specified StartJoinRoomNot message, length delimited. Does not implicitly {@link StartJoinRoomNot.verify|verify} messages.
     * @function encodeDelimited
     * @memberof StartJoinRoomNot
     * @static
     * @param {IStartJoinRoomNot} message StartJoinRoomNot message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StartJoinRoomNot.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a StartJoinRoomNot message from the specified reader or buffer.
     * @function decode
     * @memberof StartJoinRoomNot
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {StartJoinRoomNot} StartJoinRoomNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StartJoinRoomNot.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StartJoinRoomNot();
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
     * @memberof StartJoinRoomNot
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {StartJoinRoomNot} StartJoinRoomNot
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
     * @memberof StartJoinRoomNot
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
     * @memberof StartJoinRoomNot
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {StartJoinRoomNot} StartJoinRoomNot
     */
    StartJoinRoomNot.fromObject = function fromObject(object) {
        if (object instanceof $root.StartJoinRoomNot)
            return object;
        var message = new $root.StartJoinRoomNot();
        if (object.gameId != null)
            message.gameId = String(object.gameId);
        if (object.ruleId != null)
            message.ruleId = String(object.ruleId);
        return message;
    };

    /**
     * Creates a plain object from a StartJoinRoomNot message. Also converts values to other types if specified.
     * @function toObject
     * @memberof StartJoinRoomNot
     * @static
     * @param {StartJoinRoomNot} message StartJoinRoomNot
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
     * @memberof StartJoinRoomNot
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    StartJoinRoomNot.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return StartJoinRoomNot;
})();

$root.CancelJoinRoomReq = (function() {

    /**
     * Properties of a CancelJoinRoomReq.
     * @exports ICancelJoinRoomReq
     * @interface ICancelJoinRoomReq
     * @property {number|Long|null} [uid] CancelJoinRoomReq uid
     */

    /**
     * Constructs a new CancelJoinRoomReq.
     * @exports CancelJoinRoomReq
     * @classdesc Represents a CancelJoinRoomReq.
     * @implements ICancelJoinRoomReq
     * @constructor
     * @param {ICancelJoinRoomReq=} [properties] Properties to set
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
     * @memberof CancelJoinRoomReq
     * @instance
     */
    CancelJoinRoomReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new CancelJoinRoomReq instance using the specified properties.
     * @function create
     * @memberof CancelJoinRoomReq
     * @static
     * @param {ICancelJoinRoomReq=} [properties] Properties to set
     * @returns {CancelJoinRoomReq} CancelJoinRoomReq instance
     */
    CancelJoinRoomReq.create = function create(properties) {
        return new CancelJoinRoomReq(properties);
    };

    /**
     * Encodes the specified CancelJoinRoomReq message. Does not implicitly {@link CancelJoinRoomReq.verify|verify} messages.
     * @function encode
     * @memberof CancelJoinRoomReq
     * @static
     * @param {ICancelJoinRoomReq} message CancelJoinRoomReq message or plain object to encode
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
     * Encodes the specified CancelJoinRoomReq message, length delimited. Does not implicitly {@link CancelJoinRoomReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CancelJoinRoomReq
     * @static
     * @param {ICancelJoinRoomReq} message CancelJoinRoomReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CancelJoinRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CancelJoinRoomReq message from the specified reader or buffer.
     * @function decode
     * @memberof CancelJoinRoomReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CancelJoinRoomReq} CancelJoinRoomReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CancelJoinRoomReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CancelJoinRoomReq();
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
     * @memberof CancelJoinRoomReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CancelJoinRoomReq} CancelJoinRoomReq
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
     * @memberof CancelJoinRoomReq
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
     * @memberof CancelJoinRoomReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CancelJoinRoomReq} CancelJoinRoomReq
     */
    CancelJoinRoomReq.fromObject = function fromObject(object) {
        if (object instanceof $root.CancelJoinRoomReq)
            return object;
        var message = new $root.CancelJoinRoomReq();
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
     * @memberof CancelJoinRoomReq
     * @static
     * @param {CancelJoinRoomReq} message CancelJoinRoomReq
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
     * @memberof CancelJoinRoomReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CancelJoinRoomReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CancelJoinRoomReq;
})();

$root.CancelJoinRoomRsp = (function() {

    /**
     * Properties of a CancelJoinRoomRsp.
     * @exports ICancelJoinRoomRsp
     * @interface ICancelJoinRoomRsp
     * @property {number|null} [errCode] CancelJoinRoomRsp errCode
     * @property {string|null} [errMsg] CancelJoinRoomRsp errMsg
     */

    /**
     * Constructs a new CancelJoinRoomRsp.
     * @exports CancelJoinRoomRsp
     * @classdesc Represents a CancelJoinRoomRsp.
     * @implements ICancelJoinRoomRsp
     * @constructor
     * @param {ICancelJoinRoomRsp=} [properties] Properties to set
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
     * @memberof CancelJoinRoomRsp
     * @instance
     */
    CancelJoinRoomRsp.prototype.errCode = 0;

    /**
     * CancelJoinRoomRsp errMsg.
     * @member {string} errMsg
     * @memberof CancelJoinRoomRsp
     * @instance
     */
    CancelJoinRoomRsp.prototype.errMsg = "";

    /**
     * Creates a new CancelJoinRoomRsp instance using the specified properties.
     * @function create
     * @memberof CancelJoinRoomRsp
     * @static
     * @param {ICancelJoinRoomRsp=} [properties] Properties to set
     * @returns {CancelJoinRoomRsp} CancelJoinRoomRsp instance
     */
    CancelJoinRoomRsp.create = function create(properties) {
        return new CancelJoinRoomRsp(properties);
    };

    /**
     * Encodes the specified CancelJoinRoomRsp message. Does not implicitly {@link CancelJoinRoomRsp.verify|verify} messages.
     * @function encode
     * @memberof CancelJoinRoomRsp
     * @static
     * @param {ICancelJoinRoomRsp} message CancelJoinRoomRsp message or plain object to encode
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
     * Encodes the specified CancelJoinRoomRsp message, length delimited. Does not implicitly {@link CancelJoinRoomRsp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CancelJoinRoomRsp
     * @static
     * @param {ICancelJoinRoomRsp} message CancelJoinRoomRsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CancelJoinRoomRsp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CancelJoinRoomRsp message from the specified reader or buffer.
     * @function decode
     * @memberof CancelJoinRoomRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CancelJoinRoomRsp} CancelJoinRoomRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CancelJoinRoomRsp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CancelJoinRoomRsp();
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
     * @memberof CancelJoinRoomRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CancelJoinRoomRsp} CancelJoinRoomRsp
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
     * @memberof CancelJoinRoomRsp
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
     * @memberof CancelJoinRoomRsp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CancelJoinRoomRsp} CancelJoinRoomRsp
     */
    CancelJoinRoomRsp.fromObject = function fromObject(object) {
        if (object instanceof $root.CancelJoinRoomRsp)
            return object;
        var message = new $root.CancelJoinRoomRsp();
        if (object.errCode != null)
            message.errCode = object.errCode | 0;
        if (object.errMsg != null)
            message.errMsg = String(object.errMsg);
        return message;
    };

    /**
     * Creates a plain object from a CancelJoinRoomRsp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CancelJoinRoomRsp
     * @static
     * @param {CancelJoinRoomRsp} message CancelJoinRoomRsp
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
     * @memberof CancelJoinRoomRsp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CancelJoinRoomRsp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CancelJoinRoomRsp;
})();

$root.GetRoomInfoReq = (function() {

    /**
     * Properties of a GetRoomInfoReq.
     * @exports IGetRoomInfoReq
     * @interface IGetRoomInfoReq
     * @property {string|null} [roomId] GetRoomInfoReq roomId
     */

    /**
     * Constructs a new GetRoomInfoReq.
     * @exports GetRoomInfoReq
     * @classdesc Represents a GetRoomInfoReq.
     * @implements IGetRoomInfoReq
     * @constructor
     * @param {IGetRoomInfoReq=} [properties] Properties to set
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
     * @memberof GetRoomInfoReq
     * @instance
     */
    GetRoomInfoReq.prototype.roomId = "";

    /**
     * Creates a new GetRoomInfoReq instance using the specified properties.
     * @function create
     * @memberof GetRoomInfoReq
     * @static
     * @param {IGetRoomInfoReq=} [properties] Properties to set
     * @returns {GetRoomInfoReq} GetRoomInfoReq instance
     */
    GetRoomInfoReq.create = function create(properties) {
        return new GetRoomInfoReq(properties);
    };

    /**
     * Encodes the specified GetRoomInfoReq message. Does not implicitly {@link GetRoomInfoReq.verify|verify} messages.
     * @function encode
     * @memberof GetRoomInfoReq
     * @static
     * @param {IGetRoomInfoReq} message GetRoomInfoReq message or plain object to encode
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
     * Encodes the specified GetRoomInfoReq message, length delimited. Does not implicitly {@link GetRoomInfoReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetRoomInfoReq
     * @static
     * @param {IGetRoomInfoReq} message GetRoomInfoReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetRoomInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetRoomInfoReq message from the specified reader or buffer.
     * @function decode
     * @memberof GetRoomInfoReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetRoomInfoReq} GetRoomInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetRoomInfoReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetRoomInfoReq();
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
     * @memberof GetRoomInfoReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetRoomInfoReq} GetRoomInfoReq
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
     * @memberof GetRoomInfoReq
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
     * @memberof GetRoomInfoReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetRoomInfoReq} GetRoomInfoReq
     */
    GetRoomInfoReq.fromObject = function fromObject(object) {
        if (object instanceof $root.GetRoomInfoReq)
            return object;
        var message = new $root.GetRoomInfoReq();
        if (object.roomId != null)
            message.roomId = String(object.roomId);
        return message;
    };

    /**
     * Creates a plain object from a GetRoomInfoReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetRoomInfoReq
     * @static
     * @param {GetRoomInfoReq} message GetRoomInfoReq
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
     * @memberof GetRoomInfoReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetRoomInfoReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetRoomInfoReq;
})();

$root.GetRoomInfoRsp = (function() {

    /**
     * Properties of a GetRoomInfoRsp.
     * @exports IGetRoomInfoRsp
     * @interface IGetRoomInfoRsp
     * @property {number|null} [errCode] GetRoomInfoRsp errCode
     * @property {string|null} [errMsg] GetRoomInfoRsp errMsg
     * @property {IRoomInfo|null} [room] GetRoomInfoRsp room
     */

    /**
     * Constructs a new GetRoomInfoRsp.
     * @exports GetRoomInfoRsp
     * @classdesc Represents a GetRoomInfoRsp.
     * @implements IGetRoomInfoRsp
     * @constructor
     * @param {IGetRoomInfoRsp=} [properties] Properties to set
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
     * @memberof GetRoomInfoRsp
     * @instance
     */
    GetRoomInfoRsp.prototype.errCode = 0;

    /**
     * GetRoomInfoRsp errMsg.
     * @member {string} errMsg
     * @memberof GetRoomInfoRsp
     * @instance
     */
    GetRoomInfoRsp.prototype.errMsg = "";

    /**
     * GetRoomInfoRsp room.
     * @member {IRoomInfo|null|undefined} room
     * @memberof GetRoomInfoRsp
     * @instance
     */
    GetRoomInfoRsp.prototype.room = null;

    /**
     * Creates a new GetRoomInfoRsp instance using the specified properties.
     * @function create
     * @memberof GetRoomInfoRsp
     * @static
     * @param {IGetRoomInfoRsp=} [properties] Properties to set
     * @returns {GetRoomInfoRsp} GetRoomInfoRsp instance
     */
    GetRoomInfoRsp.create = function create(properties) {
        return new GetRoomInfoRsp(properties);
    };

    /**
     * Encodes the specified GetRoomInfoRsp message. Does not implicitly {@link GetRoomInfoRsp.verify|verify} messages.
     * @function encode
     * @memberof GetRoomInfoRsp
     * @static
     * @param {IGetRoomInfoRsp} message GetRoomInfoRsp message or plain object to encode
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
            $root.RoomInfo.encode(message.room, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GetRoomInfoRsp message, length delimited. Does not implicitly {@link GetRoomInfoRsp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetRoomInfoRsp
     * @static
     * @param {IGetRoomInfoRsp} message GetRoomInfoRsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetRoomInfoRsp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetRoomInfoRsp message from the specified reader or buffer.
     * @function decode
     * @memberof GetRoomInfoRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetRoomInfoRsp} GetRoomInfoRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetRoomInfoRsp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetRoomInfoRsp();
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
                message.room = $root.RoomInfo.decode(reader, reader.uint32());
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
     * @memberof GetRoomInfoRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetRoomInfoRsp} GetRoomInfoRsp
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
     * @memberof GetRoomInfoRsp
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
            var error = $root.RoomInfo.verify(message.room);
            if (error)
                return "room." + error;
        }
        return null;
    };

    /**
     * Creates a GetRoomInfoRsp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetRoomInfoRsp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetRoomInfoRsp} GetRoomInfoRsp
     */
    GetRoomInfoRsp.fromObject = function fromObject(object) {
        if (object instanceof $root.GetRoomInfoRsp)
            return object;
        var message = new $root.GetRoomInfoRsp();
        if (object.errCode != null)
            message.errCode = object.errCode | 0;
        if (object.errMsg != null)
            message.errMsg = String(object.errMsg);
        if (object.room != null) {
            if (typeof object.room !== "object")
                throw TypeError(".GetRoomInfoRsp.room: object expected");
            message.room = $root.RoomInfo.fromObject(object.room);
        }
        return message;
    };

    /**
     * Creates a plain object from a GetRoomInfoRsp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetRoomInfoRsp
     * @static
     * @param {GetRoomInfoRsp} message GetRoomInfoRsp
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
            object.room = $root.RoomInfo.toObject(message.room, options);
        return object;
    };

    /**
     * Converts this GetRoomInfoRsp to JSON.
     * @function toJSON
     * @memberof GetRoomInfoRsp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetRoomInfoRsp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetRoomInfoRsp;
})();

$root.GetCurRoomInfoReq = (function() {

    /**
     * Properties of a GetCurRoomInfoReq.
     * @exports IGetCurRoomInfoReq
     * @interface IGetCurRoomInfoReq
     * @property {number|Long|null} [uid] GetCurRoomInfoReq uid
     */

    /**
     * Constructs a new GetCurRoomInfoReq.
     * @exports GetCurRoomInfoReq
     * @classdesc Represents a GetCurRoomInfoReq.
     * @implements IGetCurRoomInfoReq
     * @constructor
     * @param {IGetCurRoomInfoReq=} [properties] Properties to set
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
     * @memberof GetCurRoomInfoReq
     * @instance
     */
    GetCurRoomInfoReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new GetCurRoomInfoReq instance using the specified properties.
     * @function create
     * @memberof GetCurRoomInfoReq
     * @static
     * @param {IGetCurRoomInfoReq=} [properties] Properties to set
     * @returns {GetCurRoomInfoReq} GetCurRoomInfoReq instance
     */
    GetCurRoomInfoReq.create = function create(properties) {
        return new GetCurRoomInfoReq(properties);
    };

    /**
     * Encodes the specified GetCurRoomInfoReq message. Does not implicitly {@link GetCurRoomInfoReq.verify|verify} messages.
     * @function encode
     * @memberof GetCurRoomInfoReq
     * @static
     * @param {IGetCurRoomInfoReq} message GetCurRoomInfoReq message or plain object to encode
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
     * Encodes the specified GetCurRoomInfoReq message, length delimited. Does not implicitly {@link GetCurRoomInfoReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetCurRoomInfoReq
     * @static
     * @param {IGetCurRoomInfoReq} message GetCurRoomInfoReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetCurRoomInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetCurRoomInfoReq message from the specified reader or buffer.
     * @function decode
     * @memberof GetCurRoomInfoReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetCurRoomInfoReq} GetCurRoomInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetCurRoomInfoReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetCurRoomInfoReq();
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
     * @memberof GetCurRoomInfoReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetCurRoomInfoReq} GetCurRoomInfoReq
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
     * @memberof GetCurRoomInfoReq
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
     * @memberof GetCurRoomInfoReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetCurRoomInfoReq} GetCurRoomInfoReq
     */
    GetCurRoomInfoReq.fromObject = function fromObject(object) {
        if (object instanceof $root.GetCurRoomInfoReq)
            return object;
        var message = new $root.GetCurRoomInfoReq();
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
     * @memberof GetCurRoomInfoReq
     * @static
     * @param {GetCurRoomInfoReq} message GetCurRoomInfoReq
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
     * @memberof GetCurRoomInfoReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetCurRoomInfoReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetCurRoomInfoReq;
})();

$root.GetCurRoomInfoRsp = (function() {

    /**
     * Properties of a GetCurRoomInfoRsp.
     * @exports IGetCurRoomInfoRsp
     * @interface IGetCurRoomInfoRsp
     * @property {number|null} [errCode] GetCurRoomInfoRsp errCode
     * @property {string|null} [errMsg] GetCurRoomInfoRsp errMsg
     * @property {IRoomInfo|null} [room] GetCurRoomInfoRsp room
     */

    /**
     * Constructs a new GetCurRoomInfoRsp.
     * @exports GetCurRoomInfoRsp
     * @classdesc Represents a GetCurRoomInfoRsp.
     * @implements IGetCurRoomInfoRsp
     * @constructor
     * @param {IGetCurRoomInfoRsp=} [properties] Properties to set
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
     * @memberof GetCurRoomInfoRsp
     * @instance
     */
    GetCurRoomInfoRsp.prototype.errCode = 0;

    /**
     * GetCurRoomInfoRsp errMsg.
     * @member {string} errMsg
     * @memberof GetCurRoomInfoRsp
     * @instance
     */
    GetCurRoomInfoRsp.prototype.errMsg = "";

    /**
     * GetCurRoomInfoRsp room.
     * @member {IRoomInfo|null|undefined} room
     * @memberof GetCurRoomInfoRsp
     * @instance
     */
    GetCurRoomInfoRsp.prototype.room = null;

    /**
     * Creates a new GetCurRoomInfoRsp instance using the specified properties.
     * @function create
     * @memberof GetCurRoomInfoRsp
     * @static
     * @param {IGetCurRoomInfoRsp=} [properties] Properties to set
     * @returns {GetCurRoomInfoRsp} GetCurRoomInfoRsp instance
     */
    GetCurRoomInfoRsp.create = function create(properties) {
        return new GetCurRoomInfoRsp(properties);
    };

    /**
     * Encodes the specified GetCurRoomInfoRsp message. Does not implicitly {@link GetCurRoomInfoRsp.verify|verify} messages.
     * @function encode
     * @memberof GetCurRoomInfoRsp
     * @static
     * @param {IGetCurRoomInfoRsp} message GetCurRoomInfoRsp message or plain object to encode
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
            $root.RoomInfo.encode(message.room, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GetCurRoomInfoRsp message, length delimited. Does not implicitly {@link GetCurRoomInfoRsp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetCurRoomInfoRsp
     * @static
     * @param {IGetCurRoomInfoRsp} message GetCurRoomInfoRsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetCurRoomInfoRsp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetCurRoomInfoRsp message from the specified reader or buffer.
     * @function decode
     * @memberof GetCurRoomInfoRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetCurRoomInfoRsp} GetCurRoomInfoRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetCurRoomInfoRsp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetCurRoomInfoRsp();
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
                message.room = $root.RoomInfo.decode(reader, reader.uint32());
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
     * @memberof GetCurRoomInfoRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetCurRoomInfoRsp} GetCurRoomInfoRsp
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
     * @memberof GetCurRoomInfoRsp
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
            var error = $root.RoomInfo.verify(message.room);
            if (error)
                return "room." + error;
        }
        return null;
    };

    /**
     * Creates a GetCurRoomInfoRsp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetCurRoomInfoRsp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetCurRoomInfoRsp} GetCurRoomInfoRsp
     */
    GetCurRoomInfoRsp.fromObject = function fromObject(object) {
        if (object instanceof $root.GetCurRoomInfoRsp)
            return object;
        var message = new $root.GetCurRoomInfoRsp();
        if (object.errCode != null)
            message.errCode = object.errCode | 0;
        if (object.errMsg != null)
            message.errMsg = String(object.errMsg);
        if (object.room != null) {
            if (typeof object.room !== "object")
                throw TypeError(".GetCurRoomInfoRsp.room: object expected");
            message.room = $root.RoomInfo.fromObject(object.room);
        }
        return message;
    };

    /**
     * Creates a plain object from a GetCurRoomInfoRsp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetCurRoomInfoRsp
     * @static
     * @param {GetCurRoomInfoRsp} message GetCurRoomInfoRsp
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
            object.room = $root.RoomInfo.toObject(message.room, options);
        return object;
    };

    /**
     * Converts this GetCurRoomInfoRsp to JSON.
     * @function toJSON
     * @memberof GetCurRoomInfoRsp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetCurRoomInfoRsp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetCurRoomInfoRsp;
})();

$root.RoomListReq = (function() {

    /**
     * Properties of a RoomListReq.
     * @exports IRoomListReq
     * @interface IRoomListReq
     */

    /**
     * Constructs a new RoomListReq.
     * @exports RoomListReq
     * @classdesc Represents a RoomListReq.
     * @implements IRoomListReq
     * @constructor
     * @param {IRoomListReq=} [properties] Properties to set
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
     * @memberof RoomListReq
     * @static
     * @param {IRoomListReq=} [properties] Properties to set
     * @returns {RoomListReq} RoomListReq instance
     */
    RoomListReq.create = function create(properties) {
        return new RoomListReq(properties);
    };

    /**
     * Encodes the specified RoomListReq message. Does not implicitly {@link RoomListReq.verify|verify} messages.
     * @function encode
     * @memberof RoomListReq
     * @static
     * @param {IRoomListReq} message RoomListReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoomListReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified RoomListReq message, length delimited. Does not implicitly {@link RoomListReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RoomListReq
     * @static
     * @param {IRoomListReq} message RoomListReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoomListReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RoomListReq message from the specified reader or buffer.
     * @function decode
     * @memberof RoomListReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RoomListReq} RoomListReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoomListReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RoomListReq();
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
     * @memberof RoomListReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RoomListReq} RoomListReq
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
     * @memberof RoomListReq
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
     * @memberof RoomListReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RoomListReq} RoomListReq
     */
    RoomListReq.fromObject = function fromObject(object) {
        if (object instanceof $root.RoomListReq)
            return object;
        return new $root.RoomListReq();
    };

    /**
     * Creates a plain object from a RoomListReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RoomListReq
     * @static
     * @param {RoomListReq} message RoomListReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RoomListReq.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this RoomListReq to JSON.
     * @function toJSON
     * @memberof RoomListReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RoomListReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RoomListReq;
})();

$root.RoomListRsp = (function() {

    /**
     * Properties of a RoomListRsp.
     * @exports IRoomListRsp
     * @interface IRoomListRsp
     * @property {number|null} [errCode] RoomListRsp errCode
     * @property {string|null} [errMsg] RoomListRsp errMsg
     * @property {Array.<IRoomInfo>|null} [roomList] RoomListRsp roomList
     */

    /**
     * Constructs a new RoomListRsp.
     * @exports RoomListRsp
     * @classdesc Represents a RoomListRsp.
     * @implements IRoomListRsp
     * @constructor
     * @param {IRoomListRsp=} [properties] Properties to set
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
     * @memberof RoomListRsp
     * @instance
     */
    RoomListRsp.prototype.errCode = 0;

    /**
     * RoomListRsp errMsg.
     * @member {string} errMsg
     * @memberof RoomListRsp
     * @instance
     */
    RoomListRsp.prototype.errMsg = "";

    /**
     * RoomListRsp roomList.
     * @member {Array.<IRoomInfo>} roomList
     * @memberof RoomListRsp
     * @instance
     */
    RoomListRsp.prototype.roomList = $util.emptyArray;

    /**
     * Creates a new RoomListRsp instance using the specified properties.
     * @function create
     * @memberof RoomListRsp
     * @static
     * @param {IRoomListRsp=} [properties] Properties to set
     * @returns {RoomListRsp} RoomListRsp instance
     */
    RoomListRsp.create = function create(properties) {
        return new RoomListRsp(properties);
    };

    /**
     * Encodes the specified RoomListRsp message. Does not implicitly {@link RoomListRsp.verify|verify} messages.
     * @function encode
     * @memberof RoomListRsp
     * @static
     * @param {IRoomListRsp} message RoomListRsp message or plain object to encode
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
                $root.RoomInfo.encode(message.roomList[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified RoomListRsp message, length delimited. Does not implicitly {@link RoomListRsp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RoomListRsp
     * @static
     * @param {IRoomListRsp} message RoomListRsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoomListRsp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RoomListRsp message from the specified reader or buffer.
     * @function decode
     * @memberof RoomListRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RoomListRsp} RoomListRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoomListRsp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RoomListRsp();
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
                message.roomList.push($root.RoomInfo.decode(reader, reader.uint32()));
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
     * @memberof RoomListRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RoomListRsp} RoomListRsp
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
     * @memberof RoomListRsp
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
                var error = $root.RoomInfo.verify(message.roomList[i]);
                if (error)
                    return "roomList." + error;
            }
        }
        return null;
    };

    /**
     * Creates a RoomListRsp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RoomListRsp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RoomListRsp} RoomListRsp
     */
    RoomListRsp.fromObject = function fromObject(object) {
        if (object instanceof $root.RoomListRsp)
            return object;
        var message = new $root.RoomListRsp();
        if (object.errCode != null)
            message.errCode = object.errCode | 0;
        if (object.errMsg != null)
            message.errMsg = String(object.errMsg);
        if (object.roomList) {
            if (!Array.isArray(object.roomList))
                throw TypeError(".RoomListRsp.roomList: array expected");
            message.roomList = [];
            for (var i = 0; i < object.roomList.length; ++i) {
                if (typeof object.roomList[i] !== "object")
                    throw TypeError(".RoomListRsp.roomList: object expected");
                message.roomList[i] = $root.RoomInfo.fromObject(object.roomList[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a RoomListRsp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RoomListRsp
     * @static
     * @param {RoomListRsp} message RoomListRsp
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
                object.roomList[j] = $root.RoomInfo.toObject(message.roomList[j], options);
        }
        return object;
    };

    /**
     * Converts this RoomListRsp to JSON.
     * @function toJSON
     * @memberof RoomListRsp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RoomListRsp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RoomListRsp;
})();

$root.EnterRoomConfirmReq = (function() {

    /**
     * Properties of an EnterRoomConfirmReq.
     * @exports IEnterRoomConfirmReq
     * @interface IEnterRoomConfirmReq
     * @property {boolean|null} [confirmed] EnterRoomConfirmReq confirmed
     */

    /**
     * Constructs a new EnterRoomConfirmReq.
     * @exports EnterRoomConfirmReq
     * @classdesc Represents an EnterRoomConfirmReq.
     * @implements IEnterRoomConfirmReq
     * @constructor
     * @param {IEnterRoomConfirmReq=} [properties] Properties to set
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
     * @memberof EnterRoomConfirmReq
     * @instance
     */
    EnterRoomConfirmReq.prototype.confirmed = false;

    /**
     * Creates a new EnterRoomConfirmReq instance using the specified properties.
     * @function create
     * @memberof EnterRoomConfirmReq
     * @static
     * @param {IEnterRoomConfirmReq=} [properties] Properties to set
     * @returns {EnterRoomConfirmReq} EnterRoomConfirmReq instance
     */
    EnterRoomConfirmReq.create = function create(properties) {
        return new EnterRoomConfirmReq(properties);
    };

    /**
     * Encodes the specified EnterRoomConfirmReq message. Does not implicitly {@link EnterRoomConfirmReq.verify|verify} messages.
     * @function encode
     * @memberof EnterRoomConfirmReq
     * @static
     * @param {IEnterRoomConfirmReq} message EnterRoomConfirmReq message or plain object to encode
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
     * Encodes the specified EnterRoomConfirmReq message, length delimited. Does not implicitly {@link EnterRoomConfirmReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EnterRoomConfirmReq
     * @static
     * @param {IEnterRoomConfirmReq} message EnterRoomConfirmReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EnterRoomConfirmReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EnterRoomConfirmReq message from the specified reader or buffer.
     * @function decode
     * @memberof EnterRoomConfirmReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EnterRoomConfirmReq} EnterRoomConfirmReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EnterRoomConfirmReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EnterRoomConfirmReq();
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
     * @memberof EnterRoomConfirmReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EnterRoomConfirmReq} EnterRoomConfirmReq
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
     * @memberof EnterRoomConfirmReq
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
     * @memberof EnterRoomConfirmReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EnterRoomConfirmReq} EnterRoomConfirmReq
     */
    EnterRoomConfirmReq.fromObject = function fromObject(object) {
        if (object instanceof $root.EnterRoomConfirmReq)
            return object;
        var message = new $root.EnterRoomConfirmReq();
        if (object.confirmed != null)
            message.confirmed = Boolean(object.confirmed);
        return message;
    };

    /**
     * Creates a plain object from an EnterRoomConfirmReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EnterRoomConfirmReq
     * @static
     * @param {EnterRoomConfirmReq} message EnterRoomConfirmReq
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
     * @memberof EnterRoomConfirmReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EnterRoomConfirmReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EnterRoomConfirmReq;
})();

$root.EnterRoomConfirmRsp = (function() {

    /**
     * Properties of an EnterRoomConfirmRsp.
     * @exports IEnterRoomConfirmRsp
     * @interface IEnterRoomConfirmRsp
     * @property {number|null} [errCode] EnterRoomConfirmRsp errCode
     * @property {string|null} [errMsg] EnterRoomConfirmRsp errMsg
     * @property {IRoomInfo|null} [room] EnterRoomConfirmRsp room
     */

    /**
     * Constructs a new EnterRoomConfirmRsp.
     * @exports EnterRoomConfirmRsp
     * @classdesc Represents an EnterRoomConfirmRsp.
     * @implements IEnterRoomConfirmRsp
     * @constructor
     * @param {IEnterRoomConfirmRsp=} [properties] Properties to set
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
     * @memberof EnterRoomConfirmRsp
     * @instance
     */
    EnterRoomConfirmRsp.prototype.errCode = 0;

    /**
     * EnterRoomConfirmRsp errMsg.
     * @member {string} errMsg
     * @memberof EnterRoomConfirmRsp
     * @instance
     */
    EnterRoomConfirmRsp.prototype.errMsg = "";

    /**
     * EnterRoomConfirmRsp room.
     * @member {IRoomInfo|null|undefined} room
     * @memberof EnterRoomConfirmRsp
     * @instance
     */
    EnterRoomConfirmRsp.prototype.room = null;

    /**
     * Creates a new EnterRoomConfirmRsp instance using the specified properties.
     * @function create
     * @memberof EnterRoomConfirmRsp
     * @static
     * @param {IEnterRoomConfirmRsp=} [properties] Properties to set
     * @returns {EnterRoomConfirmRsp} EnterRoomConfirmRsp instance
     */
    EnterRoomConfirmRsp.create = function create(properties) {
        return new EnterRoomConfirmRsp(properties);
    };

    /**
     * Encodes the specified EnterRoomConfirmRsp message. Does not implicitly {@link EnterRoomConfirmRsp.verify|verify} messages.
     * @function encode
     * @memberof EnterRoomConfirmRsp
     * @static
     * @param {IEnterRoomConfirmRsp} message EnterRoomConfirmRsp message or plain object to encode
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
            $root.RoomInfo.encode(message.room, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EnterRoomConfirmRsp message, length delimited. Does not implicitly {@link EnterRoomConfirmRsp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EnterRoomConfirmRsp
     * @static
     * @param {IEnterRoomConfirmRsp} message EnterRoomConfirmRsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EnterRoomConfirmRsp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EnterRoomConfirmRsp message from the specified reader or buffer.
     * @function decode
     * @memberof EnterRoomConfirmRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EnterRoomConfirmRsp} EnterRoomConfirmRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EnterRoomConfirmRsp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EnterRoomConfirmRsp();
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
                message.room = $root.RoomInfo.decode(reader, reader.uint32());
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
     * @memberof EnterRoomConfirmRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EnterRoomConfirmRsp} EnterRoomConfirmRsp
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
     * @memberof EnterRoomConfirmRsp
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
            var error = $root.RoomInfo.verify(message.room);
            if (error)
                return "room." + error;
        }
        return null;
    };

    /**
     * Creates an EnterRoomConfirmRsp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EnterRoomConfirmRsp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EnterRoomConfirmRsp} EnterRoomConfirmRsp
     */
    EnterRoomConfirmRsp.fromObject = function fromObject(object) {
        if (object instanceof $root.EnterRoomConfirmRsp)
            return object;
        var message = new $root.EnterRoomConfirmRsp();
        if (object.errCode != null)
            message.errCode = object.errCode | 0;
        if (object.errMsg != null)
            message.errMsg = String(object.errMsg);
        if (object.room != null) {
            if (typeof object.room !== "object")
                throw TypeError(".EnterRoomConfirmRsp.room: object expected");
            message.room = $root.RoomInfo.fromObject(object.room);
        }
        return message;
    };

    /**
     * Creates a plain object from an EnterRoomConfirmRsp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EnterRoomConfirmRsp
     * @static
     * @param {EnterRoomConfirmRsp} message EnterRoomConfirmRsp
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
            object.room = $root.RoomInfo.toObject(message.room, options);
        return object;
    };

    /**
     * Converts this EnterRoomConfirmRsp to JSON.
     * @function toJSON
     * @memberof EnterRoomConfirmRsp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EnterRoomConfirmRsp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EnterRoomConfirmRsp;
})();

$root.GameData = (function() {

    /**
     * Properties of a GameData.
     * @exports IGameData
     * @interface IGameData
     * @property {string|null} [roomId] GameData roomId
     * @property {string|null} [ruleId] GameData ruleId
     * @property {string|null} [serverId] GameData serverId
     * @property {string|null} [gameId] GameData gameId
     */

    /**
     * Constructs a new GameData.
     * @exports GameData
     * @classdesc Represents a GameData.
     * @implements IGameData
     * @constructor
     * @param {IGameData=} [properties] Properties to set
     */
    function GameData(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GameData roomId.
     * @member {string} roomId
     * @memberof GameData
     * @instance
     */
    GameData.prototype.roomId = "";

    /**
     * GameData ruleId.
     * @member {string} ruleId
     * @memberof GameData
     * @instance
     */
    GameData.prototype.ruleId = "";

    /**
     * GameData serverId.
     * @member {string} serverId
     * @memberof GameData
     * @instance
     */
    GameData.prototype.serverId = "";

    /**
     * GameData gameId.
     * @member {string} gameId
     * @memberof GameData
     * @instance
     */
    GameData.prototype.gameId = "";

    /**
     * Creates a new GameData instance using the specified properties.
     * @function create
     * @memberof GameData
     * @static
     * @param {IGameData=} [properties] Properties to set
     * @returns {GameData} GameData instance
     */
    GameData.create = function create(properties) {
        return new GameData(properties);
    };

    /**
     * Encodes the specified GameData message. Does not implicitly {@link GameData.verify|verify} messages.
     * @function encode
     * @memberof GameData
     * @static
     * @param {IGameData} message GameData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomId);
        if (message.ruleId != null && message.hasOwnProperty("ruleId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.ruleId);
        if (message.serverId != null && message.hasOwnProperty("serverId"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.serverId);
        if (message.gameId != null && message.hasOwnProperty("gameId"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.gameId);
        return writer;
    };

    /**
     * Encodes the specified GameData message, length delimited. Does not implicitly {@link GameData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GameData
     * @static
     * @param {IGameData} message GameData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GameData message from the specified reader or buffer.
     * @function decode
     * @memberof GameData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GameData} GameData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.roomId = reader.string();
                break;
            case 2:
                message.ruleId = reader.string();
                break;
            case 3:
                message.serverId = reader.string();
                break;
            case 4:
                message.gameId = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GameData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GameData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GameData} GameData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GameData message.
     * @function verify
     * @memberof GameData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GameData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (!$util.isString(message.roomId))
                return "roomId: string expected";
        if (message.ruleId != null && message.hasOwnProperty("ruleId"))
            if (!$util.isString(message.ruleId))
                return "ruleId: string expected";
        if (message.serverId != null && message.hasOwnProperty("serverId"))
            if (!$util.isString(message.serverId))
                return "serverId: string expected";
        if (message.gameId != null && message.hasOwnProperty("gameId"))
            if (!$util.isString(message.gameId))
                return "gameId: string expected";
        return null;
    };

    /**
     * Creates a GameData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GameData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GameData} GameData
     */
    GameData.fromObject = function fromObject(object) {
        if (object instanceof $root.GameData)
            return object;
        var message = new $root.GameData();
        if (object.roomId != null)
            message.roomId = String(object.roomId);
        if (object.ruleId != null)
            message.ruleId = String(object.ruleId);
        if (object.serverId != null)
            message.serverId = String(object.serverId);
        if (object.gameId != null)
            message.gameId = String(object.gameId);
        return message;
    };

    /**
     * Creates a plain object from a GameData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GameData
     * @static
     * @param {GameData} message GameData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GameData.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.roomId = "";
            object.ruleId = "";
            object.serverId = "";
            object.gameId = "";
        }
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            object.roomId = message.roomId;
        if (message.ruleId != null && message.hasOwnProperty("ruleId"))
            object.ruleId = message.ruleId;
        if (message.serverId != null && message.hasOwnProperty("serverId"))
            object.serverId = message.serverId;
        if (message.gameId != null && message.hasOwnProperty("gameId"))
            object.gameId = message.gameId;
        return object;
    };

    /**
     * Converts this GameData to JSON.
     * @function toJSON
     * @memberof GameData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GameData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GameData;
})();

$root.Error = (function() {

    /**
     * Properties of an Error.
     * @exports IError
     * @interface IError
     * @property {string|null} [id] Error id
     * @property {number|null} [code] Error code
     * @property {string|null} [detail] Error detail
     * @property {string|null} [status] Error status
     */

    /**
     * Constructs a new Error.
     * @exports Error
     * @classdesc Represents an Error.
     * @implements IError
     * @constructor
     * @param {IError=} [properties] Properties to set
     */
    function Error(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Error id.
     * @member {string} id
     * @memberof Error
     * @instance
     */
    Error.prototype.id = "";

    /**
     * Error code.
     * @member {number} code
     * @memberof Error
     * @instance
     */
    Error.prototype.code = 0;

    /**
     * Error detail.
     * @member {string} detail
     * @memberof Error
     * @instance
     */
    Error.prototype.detail = "";

    /**
     * Error status.
     * @member {string} status
     * @memberof Error
     * @instance
     */
    Error.prototype.status = "";

    /**
     * Creates a new Error instance using the specified properties.
     * @function create
     * @memberof Error
     * @static
     * @param {IError=} [properties] Properties to set
     * @returns {Error} Error instance
     */
    Error.create = function create(properties) {
        return new Error(properties);
    };

    /**
     * Encodes the specified Error message. Does not implicitly {@link Error.verify|verify} messages.
     * @function encode
     * @memberof Error
     * @static
     * @param {IError} message Error message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Error.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.code != null && message.hasOwnProperty("code"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.code);
        if (message.detail != null && message.hasOwnProperty("detail"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.detail);
        if (message.status != null && message.hasOwnProperty("status"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.status);
        return writer;
    };

    /**
     * Encodes the specified Error message, length delimited. Does not implicitly {@link Error.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Error
     * @static
     * @param {IError} message Error message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Error.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Error message from the specified reader or buffer.
     * @function decode
     * @memberof Error
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Error} Error
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Error.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Error();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.code = reader.int32();
                break;
            case 3:
                message.detail = reader.string();
                break;
            case 4:
                message.status = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Error message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Error
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Error} Error
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Error.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Error message.
     * @function verify
     * @memberof Error
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Error.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.code != null && message.hasOwnProperty("code"))
            if (!$util.isInteger(message.code))
                return "code: integer expected";
        if (message.detail != null && message.hasOwnProperty("detail"))
            if (!$util.isString(message.detail))
                return "detail: string expected";
        if (message.status != null && message.hasOwnProperty("status"))
            if (!$util.isString(message.status))
                return "status: string expected";
        return null;
    };

    /**
     * Creates an Error message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Error
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Error} Error
     */
    Error.fromObject = function fromObject(object) {
        if (object instanceof $root.Error)
            return object;
        var message = new $root.Error();
        if (object.id != null)
            message.id = String(object.id);
        if (object.code != null)
            message.code = object.code | 0;
        if (object.detail != null)
            message.detail = String(object.detail);
        if (object.status != null)
            message.status = String(object.status);
        return message;
    };

    /**
     * Creates a plain object from an Error message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Error
     * @static
     * @param {Error} message Error
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Error.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.code = 0;
            object.detail = "";
            object.status = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = message.code;
        if (message.detail != null && message.hasOwnProperty("detail"))
            object.detail = message.detail;
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        return object;
    };

    /**
     * Converts this Error to JSON.
     * @function toJSON
     * @memberof Error
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Error.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Error;
})();

module.exports = $root;
