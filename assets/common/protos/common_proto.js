/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.commonProto || ($protobuf.roots.commonProto = {});

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

$root.SysError = (function() {

    /**
     * Properties of a SysError.
     * @exports ISysError
     * @interface ISysError
     * @property {string|null} [id] SysError id
     * @property {number|null} [code] SysError code
     * @property {string|null} [detail] SysError detail
     * @property {string|null} [status] SysError status
     */

    /**
     * Constructs a new SysError.
     * @exports SysError
     * @classdesc Represents a SysError.
     * @implements ISysError
     * @constructor
     * @param {ISysError=} [properties] Properties to set
     */
    function SysError(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SysError id.
     * @member {string} id
     * @memberof SysError
     * @instance
     */
    SysError.prototype.id = "";

    /**
     * SysError code.
     * @member {number} code
     * @memberof SysError
     * @instance
     */
    SysError.prototype.code = 0;

    /**
     * SysError detail.
     * @member {string} detail
     * @memberof SysError
     * @instance
     */
    SysError.prototype.detail = "";

    /**
     * SysError status.
     * @member {string} status
     * @memberof SysError
     * @instance
     */
    SysError.prototype.status = "";

    /**
     * Creates a new SysError instance using the specified properties.
     * @function create
     * @memberof SysError
     * @static
     * @param {ISysError=} [properties] Properties to set
     * @returns {SysError} SysError instance
     */
    SysError.create = function create(properties) {
        return new SysError(properties);
    };

    /**
     * Encodes the specified SysError message. Does not implicitly {@link SysError.verify|verify} messages.
     * @function encode
     * @memberof SysError
     * @static
     * @param {ISysError} message SysError message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SysError.encode = function encode(message, writer) {
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
     * Encodes the specified SysError message, length delimited. Does not implicitly {@link SysError.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SysError
     * @static
     * @param {ISysError} message SysError message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SysError.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SysError message from the specified reader or buffer.
     * @function decode
     * @memberof SysError
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SysError} SysError
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SysError.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SysError();
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
     * Decodes a SysError message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SysError
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SysError} SysError
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SysError.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SysError message.
     * @function verify
     * @memberof SysError
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SysError.verify = function verify(message) {
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
     * Creates a SysError message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SysError
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SysError} SysError
     */
    SysError.fromObject = function fromObject(object) {
        if (object instanceof $root.SysError)
            return object;
        var message = new $root.SysError();
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
     * Creates a plain object from a SysError message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SysError
     * @static
     * @param {SysError} message SysError
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SysError.toObject = function toObject(message, options) {
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
     * Converts this SysError to JSON.
     * @function toJSON
     * @memberof SysError
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SysError.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SysError;
})();

module.exports = $root;
