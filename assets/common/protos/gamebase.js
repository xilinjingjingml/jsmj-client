/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.gamebase = (function () {

    /**
     * Namespace gamebase.
     * @exports gamebase
     * @namespace
     */
    var gamebase = {};

    gamebase.Base = (function () {

        /**
         * Constructs a new Base service.
         * @memberof gamebase
         * @classdesc Represents a Base
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Base(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Base.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Base;

        /**
         * Creates new Base service using the specified rpc implementation.
         * @function create
         * @memberof gamebase.Base
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Base} RPC service. Useful where requests and/or responses are streamed.
         */
        Base.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        return Base;
    })();

    gamebase.RoomInfo = (function () {

        /**
         * Properties of a RoomInfo.
         * @memberof gamebase
         * @interface IRoomInfo
         * @property {string|null} [roomId] RoomInfo roomId
         * @property {string|null} [serverId] RoomInfo serverId
         * @property {string|null} [gameId] RoomInfo gameId
         * @property {string|null} [ruleId] RoomInfo ruleId
         * @property {string|null} [metaData] RoomInfo metaData
         */

        /**
         * Constructs a new RoomInfo.
         * @memberof gamebase
         * @classdesc Represents a RoomInfo.
         * @implements IRoomInfo
         * @constructor
         * @param {gamebase.IRoomInfo=} [properties] Properties to set
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
         * @memberof gamebase.RoomInfo
         * @instance
         */
        RoomInfo.prototype.roomId = "";

        /**
         * RoomInfo serverId.
         * @member {string} serverId
         * @memberof gamebase.RoomInfo
         * @instance
         */
        RoomInfo.prototype.serverId = "";

        /**
         * RoomInfo gameId.
         * @member {string} gameId
         * @memberof gamebase.RoomInfo
         * @instance
         */
        RoomInfo.prototype.gameId = "";

        /**
         * RoomInfo ruleId.
         * @member {string} ruleId
         * @memberof gamebase.RoomInfo
         * @instance
         */
        RoomInfo.prototype.ruleId = "";

        /**
         * RoomInfo metaData.
         * @member {string} metaData
         * @memberof gamebase.RoomInfo
         * @instance
         */
        RoomInfo.prototype.metaData = "";

        /**
         * Creates a new RoomInfo instance using the specified properties.
         * @function create
         * @memberof gamebase.RoomInfo
         * @static
         * @param {gamebase.IRoomInfo=} [properties] Properties to set
         * @returns {gamebase.RoomInfo} RoomInfo instance
         */
        RoomInfo.create = function create(properties) {
            return new RoomInfo(properties);
        };

        /**
         * Encodes the specified RoomInfo message. Does not implicitly {@link gamebase.RoomInfo.verify|verify} messages.
         * @function encode
         * @memberof gamebase.RoomInfo
         * @static
         * @param {gamebase.IRoomInfo} message RoomInfo message or plain object to encode
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
         * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link gamebase.RoomInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.RoomInfo
         * @static
         * @param {gamebase.IRoomInfo} message RoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomInfo message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.RoomInfo} RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.RoomInfo();
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
         * @memberof gamebase.RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.RoomInfo} RoomInfo
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
         * @memberof gamebase.RoomInfo
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
         * @memberof gamebase.RoomInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.RoomInfo} RoomInfo
         */
        RoomInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.RoomInfo)
                return object;
            var message = new $root.gamebase.RoomInfo();
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
         * @memberof gamebase.RoomInfo
         * @static
         * @param {gamebase.RoomInfo} message RoomInfo
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
         * @memberof gamebase.RoomInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoomInfo;
    })();

    gamebase.EnterRoomReq = (function () {

        /**
         * Properties of an EnterRoomReq.
         * @memberof gamebase
         * @interface IEnterRoomReq
         * @property {number|Long|null} [uid] EnterRoomReq uid
         * @property {string|null} [token] EnterRoomReq token
         * @property {string|null} [roomId] EnterRoomReq roomId
         */

        /**
         * Constructs a new EnterRoomReq.
         * @memberof gamebase
         * @classdesc Represents an EnterRoomReq.
         * @implements IEnterRoomReq
         * @constructor
         * @param {gamebase.IEnterRoomReq=} [properties] Properties to set
         */
        function EnterRoomReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterRoomReq uid.
         * @member {number|Long} uid
         * @memberof gamebase.EnterRoomReq
         * @instance
         */
        EnterRoomReq.prototype.uid = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * EnterRoomReq token.
         * @member {string} token
         * @memberof gamebase.EnterRoomReq
         * @instance
         */
        EnterRoomReq.prototype.token = "";

        /**
         * EnterRoomReq roomId.
         * @member {string} roomId
         * @memberof gamebase.EnterRoomReq
         * @instance
         */
        EnterRoomReq.prototype.roomId = "";

        /**
         * Creates a new EnterRoomReq instance using the specified properties.
         * @function create
         * @memberof gamebase.EnterRoomReq
         * @static
         * @param {gamebase.IEnterRoomReq=} [properties] Properties to set
         * @returns {gamebase.EnterRoomReq} EnterRoomReq instance
         */
        EnterRoomReq.create = function create(properties) {
            return new EnterRoomReq(properties);
        };

        /**
         * Encodes the specified EnterRoomReq message. Does not implicitly {@link gamebase.EnterRoomReq.verify|verify} messages.
         * @function encode
         * @memberof gamebase.EnterRoomReq
         * @static
         * @param {gamebase.IEnterRoomReq} message EnterRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            if (message.token != null && message.hasOwnProperty("token"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.roomId);
            return writer;
        };

        /**
         * Encodes the specified EnterRoomReq message, length delimited. Does not implicitly {@link gamebase.EnterRoomReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.EnterRoomReq
         * @static
         * @param {gamebase.IEnterRoomReq} message EnterRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnterRoomReq message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.EnterRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.EnterRoomReq} EnterRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.EnterRoomReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.uid = reader.int64();
                        break;
                    case 2:
                        message.token = reader.string();
                        break;
                    case 3:
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
         * Decodes an EnterRoomReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.EnterRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.EnterRoomReq} EnterRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnterRoomReq message.
         * @function verify
         * @memberof gamebase.EnterRoomReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnterRoomReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
            return null;
        };

        /**
         * Creates an EnterRoomReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.EnterRoomReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.EnterRoomReq} EnterRoomReq
         */
        EnterRoomReq.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.EnterRoomReq)
                return object;
            var message = new $root.gamebase.EnterRoomReq();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.token != null)
                message.token = String(object.token);
            if (object.roomId != null)
                message.roomId = String(object.roomId);
            return message;
        };

        /**
         * Creates a plain object from an EnterRoomReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.EnterRoomReq
         * @static
         * @param {gamebase.EnterRoomReq} message EnterRoomReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnterRoomReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.token = "";
                object.roomId = "";
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            return object;
        };

        /**
         * Converts this EnterRoomReq to JSON.
         * @function toJSON
         * @memberof gamebase.EnterRoomReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnterRoomReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EnterRoomReq;
    })();

    gamebase.EnterRoomRsp = (function () {

        /**
         * Properties of an EnterRoomRsp.
         * @memberof gamebase
         * @interface IEnterRoomRsp
         * @property {number|null} [errCode] EnterRoomRsp errCode
         * @property {string|null} [errMsg] EnterRoomRsp errMsg
         * @property {gamebase.IRoomInfo|null} [roomInfo] EnterRoomRsp roomInfo
         */

        /**
         * Constructs a new EnterRoomRsp.
         * @memberof gamebase
         * @classdesc Represents an EnterRoomRsp.
         * @implements IEnterRoomRsp
         * @constructor
         * @param {gamebase.IEnterRoomRsp=} [properties] Properties to set
         */
        function EnterRoomRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterRoomRsp errCode.
         * @member {number} errCode
         * @memberof gamebase.EnterRoomRsp
         * @instance
         */
        EnterRoomRsp.prototype.errCode = 0;

        /**
         * EnterRoomRsp errMsg.
         * @member {string} errMsg
         * @memberof gamebase.EnterRoomRsp
         * @instance
         */
        EnterRoomRsp.prototype.errMsg = "";

        /**
         * EnterRoomRsp roomInfo.
         * @member {gamebase.IRoomInfo|null|undefined} roomInfo
         * @memberof gamebase.EnterRoomRsp
         * @instance
         */
        EnterRoomRsp.prototype.roomInfo = null;

        /**
         * Creates a new EnterRoomRsp instance using the specified properties.
         * @function create
         * @memberof gamebase.EnterRoomRsp
         * @static
         * @param {gamebase.IEnterRoomRsp=} [properties] Properties to set
         * @returns {gamebase.EnterRoomRsp} EnterRoomRsp instance
         */
        EnterRoomRsp.create = function create(properties) {
            return new EnterRoomRsp(properties);
        };

        /**
         * Encodes the specified EnterRoomRsp message. Does not implicitly {@link gamebase.EnterRoomRsp.verify|verify} messages.
         * @function encode
         * @memberof gamebase.EnterRoomRsp
         * @static
         * @param {gamebase.IEnterRoomRsp} message EnterRoomRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            if (message.roomInfo != null && message.hasOwnProperty("roomInfo"))
                $root.gamebase.RoomInfo.encode(message.roomInfo, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified EnterRoomRsp message, length delimited. Does not implicitly {@link gamebase.EnterRoomRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.EnterRoomRsp
         * @static
         * @param {gamebase.IEnterRoomRsp} message EnterRoomRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnterRoomRsp message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.EnterRoomRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.EnterRoomRsp} EnterRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.EnterRoomRsp();
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
                        message.roomInfo = $root.gamebase.RoomInfo.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        /**
         * Decodes an EnterRoomRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.EnterRoomRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.EnterRoomRsp} EnterRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnterRoomRsp message.
         * @function verify
         * @memberof gamebase.EnterRoomRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnterRoomRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                if (!$util.isInteger(message.errCode))
                    return "errCode: integer expected";
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                if (!$util.isString(message.errMsg))
                    return "errMsg: string expected";
            if (message.roomInfo != null && message.hasOwnProperty("roomInfo")) {
                var error = $root.gamebase.RoomInfo.verify(message.roomInfo);
                if (error)
                    return "roomInfo." + error;
            }
            return null;
        };

        /**
         * Creates an EnterRoomRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.EnterRoomRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.EnterRoomRsp} EnterRoomRsp
         */
        EnterRoomRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.EnterRoomRsp)
                return object;
            var message = new $root.gamebase.EnterRoomRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            if (object.roomInfo != null) {
                if (typeof object.roomInfo !== "object")
                    throw TypeError(".gamebase.EnterRoomRsp.roomInfo: object expected");
                message.roomInfo = $root.gamebase.RoomInfo.fromObject(object.roomInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from an EnterRoomRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.EnterRoomRsp
         * @static
         * @param {gamebase.EnterRoomRsp} message EnterRoomRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnterRoomRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.errCode = 0;
                object.errMsg = "";
                object.roomInfo = null;
            }
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                object.errCode = message.errCode;
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                object.errMsg = message.errMsg;
            if (message.roomInfo != null && message.hasOwnProperty("roomInfo"))
                object.roomInfo = $root.gamebase.RoomInfo.toObject(message.roomInfo, options);
            return object;
        };

        /**
         * Converts this EnterRoomRsp to JSON.
         * @function toJSON
         * @memberof gamebase.EnterRoomRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnterRoomRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EnterRoomRsp;
    })();

    gamebase.EnterRoomNot = (function () {

        /**
         * Properties of an EnterRoomNot.
         * @memberof gamebase
         * @interface IEnterRoomNot
         * @property {string|null} [roomId] EnterRoomNot roomId
         * @property {number|Long|null} [uid] EnterRoomNot uid
         * @property {string|null} [nickname] EnterRoomNot nickname
         * @property {number|Long|null} [money] EnterRoomNot money
         */

        /**
         * Constructs a new EnterRoomNot.
         * @memberof gamebase
         * @classdesc Represents an EnterRoomNot.
         * @implements IEnterRoomNot
         * @constructor
         * @param {gamebase.IEnterRoomNot=} [properties] Properties to set
         */
        function EnterRoomNot(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterRoomNot roomId.
         * @member {string} roomId
         * @memberof gamebase.EnterRoomNot
         * @instance
         */
        EnterRoomNot.prototype.roomId = "";

        /**
         * EnterRoomNot uid.
         * @member {number|Long} uid
         * @memberof gamebase.EnterRoomNot
         * @instance
         */
        EnterRoomNot.prototype.uid = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * EnterRoomNot nickname.
         * @member {string} nickname
         * @memberof gamebase.EnterRoomNot
         * @instance
         */
        EnterRoomNot.prototype.nickname = "";

        /**
         * EnterRoomNot money.
         * @member {number|Long} money
         * @memberof gamebase.EnterRoomNot
         * @instance
         */
        EnterRoomNot.prototype.money = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * Creates a new EnterRoomNot instance using the specified properties.
         * @function create
         * @memberof gamebase.EnterRoomNot
         * @static
         * @param {gamebase.IEnterRoomNot=} [properties] Properties to set
         * @returns {gamebase.EnterRoomNot} EnterRoomNot instance
         */
        EnterRoomNot.create = function create(properties) {
            return new EnterRoomNot(properties);
        };

        /**
         * Encodes the specified EnterRoomNot message. Does not implicitly {@link gamebase.EnterRoomNot.verify|verify} messages.
         * @function encode
         * @memberof gamebase.EnterRoomNot
         * @static
         * @param {gamebase.IEnterRoomNot} message EnterRoomNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomNot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomId);
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.uid);
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.nickname);
            if (message.money != null && message.hasOwnProperty("money"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.money);
            return writer;
        };

        /**
         * Encodes the specified EnterRoomNot message, length delimited. Does not implicitly {@link gamebase.EnterRoomNot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.EnterRoomNot
         * @static
         * @param {gamebase.IEnterRoomNot} message EnterRoomNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomNot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnterRoomNot message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.EnterRoomNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.EnterRoomNot} EnterRoomNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomNot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.EnterRoomNot();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.roomId = reader.string();
                        break;
                    case 2:
                        message.uid = reader.int64();
                        break;
                    case 3:
                        message.nickname = reader.string();
                        break;
                    case 4:
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
         * Decodes an EnterRoomNot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.EnterRoomNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.EnterRoomNot} EnterRoomNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomNot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnterRoomNot message.
         * @function verify
         * @memberof gamebase.EnterRoomNot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnterRoomNot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.money != null && message.hasOwnProperty("money"))
                if (!$util.isInteger(message.money) && !(message.money && $util.isInteger(message.money.low) && $util.isInteger(message.money.high)))
                    return "money: integer|Long expected";
            return null;
        };

        /**
         * Creates an EnterRoomNot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.EnterRoomNot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.EnterRoomNot} EnterRoomNot
         */
        EnterRoomNot.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.EnterRoomNot)
                return object;
            var message = new $root.gamebase.EnterRoomNot();
            if (object.roomId != null)
                message.roomId = String(object.roomId);
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.nickname != null)
                message.nickname = String(object.nickname);
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
         * Creates a plain object from an EnterRoomNot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.EnterRoomNot
         * @static
         * @param {gamebase.EnterRoomNot} message EnterRoomNot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnterRoomNot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.roomId = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.nickname = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.money = options.longs === String ? "0" : 0;
            }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.money != null && message.hasOwnProperty("money"))
                if (typeof message.money === "number")
                    object.money = options.longs === String ? String(message.money) : message.money;
                else
                    object.money = options.longs === String ? $util.Long.prototype.toString.call(message.money) : options.longs === Number ? new $util.LongBits(message.money.low >>> 0, message.money.high >>> 0).toNumber() : message.money;
            return object;
        };

        /**
         * Converts this EnterRoomNot to JSON.
         * @function toJSON
         * @memberof gamebase.EnterRoomNot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnterRoomNot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EnterRoomNot;
    })();

    gamebase.ExitRoomReq = (function () {

        /**
         * Properties of an ExitRoomReq.
         * @memberof gamebase
         * @interface IExitRoomReq
         */

        /**
         * Constructs a new ExitRoomReq.
         * @memberof gamebase
         * @classdesc Represents an ExitRoomReq.
         * @implements IExitRoomReq
         * @constructor
         * @param {gamebase.IExitRoomReq=} [properties] Properties to set
         */
        function ExitRoomReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ExitRoomReq instance using the specified properties.
         * @function create
         * @memberof gamebase.ExitRoomReq
         * @static
         * @param {gamebase.IExitRoomReq=} [properties] Properties to set
         * @returns {gamebase.ExitRoomReq} ExitRoomReq instance
         */
        ExitRoomReq.create = function create(properties) {
            return new ExitRoomReq(properties);
        };

        /**
         * Encodes the specified ExitRoomReq message. Does not implicitly {@link gamebase.ExitRoomReq.verify|verify} messages.
         * @function encode
         * @memberof gamebase.ExitRoomReq
         * @static
         * @param {gamebase.IExitRoomReq} message ExitRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExitRoomReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ExitRoomReq message, length delimited. Does not implicitly {@link gamebase.ExitRoomReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.ExitRoomReq
         * @static
         * @param {gamebase.IExitRoomReq} message ExitRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExitRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExitRoomReq message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.ExitRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.ExitRoomReq} ExitRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExitRoomReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.ExitRoomReq();
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
         * Decodes an ExitRoomReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.ExitRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.ExitRoomReq} ExitRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExitRoomReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExitRoomReq message.
         * @function verify
         * @memberof gamebase.ExitRoomReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExitRoomReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an ExitRoomReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.ExitRoomReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.ExitRoomReq} ExitRoomReq
         */
        ExitRoomReq.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.ExitRoomReq)
                return object;
            return new $root.gamebase.ExitRoomReq();
        };

        /**
         * Creates a plain object from an ExitRoomReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.ExitRoomReq
         * @static
         * @param {gamebase.ExitRoomReq} message ExitRoomReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExitRoomReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ExitRoomReq to JSON.
         * @function toJSON
         * @memberof gamebase.ExitRoomReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExitRoomReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ExitRoomReq;
    })();

    gamebase.ExitRoomRsp = (function () {

        /**
         * Properties of an ExitRoomRsp.
         * @memberof gamebase
         * @interface IExitRoomRsp
         * @property {number|null} [errCode] ExitRoomRsp errCode
         * @property {string|null} [errMsg] ExitRoomRsp errMsg
         */

        /**
         * Constructs a new ExitRoomRsp.
         * @memberof gamebase
         * @classdesc Represents an ExitRoomRsp.
         * @implements IExitRoomRsp
         * @constructor
         * @param {gamebase.IExitRoomRsp=} [properties] Properties to set
         */
        function ExitRoomRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExitRoomRsp errCode.
         * @member {number} errCode
         * @memberof gamebase.ExitRoomRsp
         * @instance
         */
        ExitRoomRsp.prototype.errCode = 0;

        /**
         * ExitRoomRsp errMsg.
         * @member {string} errMsg
         * @memberof gamebase.ExitRoomRsp
         * @instance
         */
        ExitRoomRsp.prototype.errMsg = "";

        /**
         * Creates a new ExitRoomRsp instance using the specified properties.
         * @function create
         * @memberof gamebase.ExitRoomRsp
         * @static
         * @param {gamebase.IExitRoomRsp=} [properties] Properties to set
         * @returns {gamebase.ExitRoomRsp} ExitRoomRsp instance
         */
        ExitRoomRsp.create = function create(properties) {
            return new ExitRoomRsp(properties);
        };

        /**
         * Encodes the specified ExitRoomRsp message. Does not implicitly {@link gamebase.ExitRoomRsp.verify|verify} messages.
         * @function encode
         * @memberof gamebase.ExitRoomRsp
         * @static
         * @param {gamebase.IExitRoomRsp} message ExitRoomRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExitRoomRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            return writer;
        };

        /**
         * Encodes the specified ExitRoomRsp message, length delimited. Does not implicitly {@link gamebase.ExitRoomRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.ExitRoomRsp
         * @static
         * @param {gamebase.IExitRoomRsp} message ExitRoomRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExitRoomRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExitRoomRsp message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.ExitRoomRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.ExitRoomRsp} ExitRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExitRoomRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.ExitRoomRsp();
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
         * Decodes an ExitRoomRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.ExitRoomRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.ExitRoomRsp} ExitRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExitRoomRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExitRoomRsp message.
         * @function verify
         * @memberof gamebase.ExitRoomRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExitRoomRsp.verify = function verify(message) {
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
         * Creates an ExitRoomRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.ExitRoomRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.ExitRoomRsp} ExitRoomRsp
         */
        ExitRoomRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.ExitRoomRsp)
                return object;
            var message = new $root.gamebase.ExitRoomRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            return message;
        };

        /**
         * Creates a plain object from an ExitRoomRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.ExitRoomRsp
         * @static
         * @param {gamebase.ExitRoomRsp} message ExitRoomRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExitRoomRsp.toObject = function toObject(message, options) {
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
         * Converts this ExitRoomRsp to JSON.
         * @function toJSON
         * @memberof gamebase.ExitRoomRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExitRoomRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ExitRoomRsp;
    })();

    gamebase.ExitRoomNot = (function () {

        /**
         * Properties of an ExitRoomNot.
         * @memberof gamebase
         * @interface IExitRoomNot
         * @property {string|null} [roomId] ExitRoomNot roomId
         * @property {number|Long|null} [uid] ExitRoomNot uid
         */

        /**
         * Constructs a new ExitRoomNot.
         * @memberof gamebase
         * @classdesc Represents an ExitRoomNot.
         * @implements IExitRoomNot
         * @constructor
         * @param {gamebase.IExitRoomNot=} [properties] Properties to set
         */
        function ExitRoomNot(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExitRoomNot roomId.
         * @member {string} roomId
         * @memberof gamebase.ExitRoomNot
         * @instance
         */
        ExitRoomNot.prototype.roomId = "";

        /**
         * ExitRoomNot uid.
         * @member {number|Long} uid
         * @memberof gamebase.ExitRoomNot
         * @instance
         */
        ExitRoomNot.prototype.uid = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * Creates a new ExitRoomNot instance using the specified properties.
         * @function create
         * @memberof gamebase.ExitRoomNot
         * @static
         * @param {gamebase.IExitRoomNot=} [properties] Properties to set
         * @returns {gamebase.ExitRoomNot} ExitRoomNot instance
         */
        ExitRoomNot.create = function create(properties) {
            return new ExitRoomNot(properties);
        };

        /**
         * Encodes the specified ExitRoomNot message. Does not implicitly {@link gamebase.ExitRoomNot.verify|verify} messages.
         * @function encode
         * @memberof gamebase.ExitRoomNot
         * @static
         * @param {gamebase.IExitRoomNot} message ExitRoomNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExitRoomNot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomId);
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.uid);
            return writer;
        };

        /**
         * Encodes the specified ExitRoomNot message, length delimited. Does not implicitly {@link gamebase.ExitRoomNot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.ExitRoomNot
         * @static
         * @param {gamebase.IExitRoomNot} message ExitRoomNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExitRoomNot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExitRoomNot message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.ExitRoomNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.ExitRoomNot} ExitRoomNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExitRoomNot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.ExitRoomNot();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.roomId = reader.string();
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
         * Decodes an ExitRoomNot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.ExitRoomNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.ExitRoomNot} ExitRoomNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExitRoomNot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExitRoomNot message.
         * @function verify
         * @memberof gamebase.ExitRoomNot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExitRoomNot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            return null;
        };

        /**
         * Creates an ExitRoomNot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.ExitRoomNot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.ExitRoomNot} ExitRoomNot
         */
        ExitRoomNot.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.ExitRoomNot)
                return object;
            var message = new $root.gamebase.ExitRoomNot();
            if (object.roomId != null)
                message.roomId = String(object.roomId);
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
         * Creates a plain object from an ExitRoomNot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.ExitRoomNot
         * @static
         * @param {gamebase.ExitRoomNot} message ExitRoomNot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExitRoomNot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.roomId = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
            }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            return object;
        };

        /**
         * Converts this ExitRoomNot to JSON.
         * @function toJSON
         * @memberof gamebase.ExitRoomNot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExitRoomNot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ExitRoomNot;
    })();

    gamebase.DismissRoomReq = (function () {

        /**
         * Properties of a DismissRoomReq.
         * @memberof gamebase
         * @interface IDismissRoomReq
         * @property {string|null} [roomId] DismissRoomReq roomId
         */

        /**
         * Constructs a new DismissRoomReq.
         * @memberof gamebase
         * @classdesc Represents a DismissRoomReq.
         * @implements IDismissRoomReq
         * @constructor
         * @param {gamebase.IDismissRoomReq=} [properties] Properties to set
         */
        function DismissRoomReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DismissRoomReq roomId.
         * @member {string} roomId
         * @memberof gamebase.DismissRoomReq
         * @instance
         */
        DismissRoomReq.prototype.roomId = "";

        /**
         * Creates a new DismissRoomReq instance using the specified properties.
         * @function create
         * @memberof gamebase.DismissRoomReq
         * @static
         * @param {gamebase.IDismissRoomReq=} [properties] Properties to set
         * @returns {gamebase.DismissRoomReq} DismissRoomReq instance
         */
        DismissRoomReq.create = function create(properties) {
            return new DismissRoomReq(properties);
        };

        /**
         * Encodes the specified DismissRoomReq message. Does not implicitly {@link gamebase.DismissRoomReq.verify|verify} messages.
         * @function encode
         * @memberof gamebase.DismissRoomReq
         * @static
         * @param {gamebase.IDismissRoomReq} message DismissRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DismissRoomReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomId);
            return writer;
        };

        /**
         * Encodes the specified DismissRoomReq message, length delimited. Does not implicitly {@link gamebase.DismissRoomReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.DismissRoomReq
         * @static
         * @param {gamebase.IDismissRoomReq} message DismissRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DismissRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DismissRoomReq message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.DismissRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.DismissRoomReq} DismissRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DismissRoomReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.DismissRoomReq();
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
         * Decodes a DismissRoomReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.DismissRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.DismissRoomReq} DismissRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DismissRoomReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DismissRoomReq message.
         * @function verify
         * @memberof gamebase.DismissRoomReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DismissRoomReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
            return null;
        };

        /**
         * Creates a DismissRoomReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.DismissRoomReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.DismissRoomReq} DismissRoomReq
         */
        DismissRoomReq.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.DismissRoomReq)
                return object;
            var message = new $root.gamebase.DismissRoomReq();
            if (object.roomId != null)
                message.roomId = String(object.roomId);
            return message;
        };

        /**
         * Creates a plain object from a DismissRoomReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.DismissRoomReq
         * @static
         * @param {gamebase.DismissRoomReq} message DismissRoomReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DismissRoomReq.toObject = function toObject(message, options) {
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
         * Converts this DismissRoomReq to JSON.
         * @function toJSON
         * @memberof gamebase.DismissRoomReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DismissRoomReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DismissRoomReq;
    })();

    gamebase.DismissRoomRsp = (function () {

        /**
         * Properties of a DismissRoomRsp.
         * @memberof gamebase
         * @interface IDismissRoomRsp
         * @property {number|null} [errCode] DismissRoomRsp errCode
         * @property {string|null} [errMsg] DismissRoomRsp errMsg
         */

        /**
         * Constructs a new DismissRoomRsp.
         * @memberof gamebase
         * @classdesc Represents a DismissRoomRsp.
         * @implements IDismissRoomRsp
         * @constructor
         * @param {gamebase.IDismissRoomRsp=} [properties] Properties to set
         */
        function DismissRoomRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DismissRoomRsp errCode.
         * @member {number} errCode
         * @memberof gamebase.DismissRoomRsp
         * @instance
         */
        DismissRoomRsp.prototype.errCode = 0;

        /**
         * DismissRoomRsp errMsg.
         * @member {string} errMsg
         * @memberof gamebase.DismissRoomRsp
         * @instance
         */
        DismissRoomRsp.prototype.errMsg = "";

        /**
         * Creates a new DismissRoomRsp instance using the specified properties.
         * @function create
         * @memberof gamebase.DismissRoomRsp
         * @static
         * @param {gamebase.IDismissRoomRsp=} [properties] Properties to set
         * @returns {gamebase.DismissRoomRsp} DismissRoomRsp instance
         */
        DismissRoomRsp.create = function create(properties) {
            return new DismissRoomRsp(properties);
        };

        /**
         * Encodes the specified DismissRoomRsp message. Does not implicitly {@link gamebase.DismissRoomRsp.verify|verify} messages.
         * @function encode
         * @memberof gamebase.DismissRoomRsp
         * @static
         * @param {gamebase.IDismissRoomRsp} message DismissRoomRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DismissRoomRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            return writer;
        };

        /**
         * Encodes the specified DismissRoomRsp message, length delimited. Does not implicitly {@link gamebase.DismissRoomRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.DismissRoomRsp
         * @static
         * @param {gamebase.IDismissRoomRsp} message DismissRoomRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DismissRoomRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DismissRoomRsp message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.DismissRoomRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.DismissRoomRsp} DismissRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DismissRoomRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.DismissRoomRsp();
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
         * Decodes a DismissRoomRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.DismissRoomRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.DismissRoomRsp} DismissRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DismissRoomRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DismissRoomRsp message.
         * @function verify
         * @memberof gamebase.DismissRoomRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DismissRoomRsp.verify = function verify(message) {
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
         * Creates a DismissRoomRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.DismissRoomRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.DismissRoomRsp} DismissRoomRsp
         */
        DismissRoomRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.DismissRoomRsp)
                return object;
            var message = new $root.gamebase.DismissRoomRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            return message;
        };

        /**
         * Creates a plain object from a DismissRoomRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.DismissRoomRsp
         * @static
         * @param {gamebase.DismissRoomRsp} message DismissRoomRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DismissRoomRsp.toObject = function toObject(message, options) {
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
         * Converts this DismissRoomRsp to JSON.
         * @function toJSON
         * @memberof gamebase.DismissRoomRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DismissRoomRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DismissRoomRsp;
    })();

    gamebase.HeartBeatReq = (function () {

        /**
         * Properties of a HeartBeatReq.
         * @memberof gamebase
         * @interface IHeartBeatReq
         * @property {number|Long|null} [reqTime] HeartBeatReq reqTime
         */

        /**
         * Constructs a new HeartBeatReq.
         * @memberof gamebase
         * @classdesc Represents a HeartBeatReq.
         * @implements IHeartBeatReq
         * @constructor
         * @param {gamebase.IHeartBeatReq=} [properties] Properties to set
         */
        function HeartBeatReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeartBeatReq reqTime.
         * @member {number|Long} reqTime
         * @memberof gamebase.HeartBeatReq
         * @instance
         */
        HeartBeatReq.prototype.reqTime = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * Creates a new HeartBeatReq instance using the specified properties.
         * @function create
         * @memberof gamebase.HeartBeatReq
         * @static
         * @param {gamebase.IHeartBeatReq=} [properties] Properties to set
         * @returns {gamebase.HeartBeatReq} HeartBeatReq instance
         */
        HeartBeatReq.create = function create(properties) {
            return new HeartBeatReq(properties);
        };

        /**
         * Encodes the specified HeartBeatReq message. Does not implicitly {@link gamebase.HeartBeatReq.verify|verify} messages.
         * @function encode
         * @memberof gamebase.HeartBeatReq
         * @static
         * @param {gamebase.IHeartBeatReq} message HeartBeatReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartBeatReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reqTime != null && message.hasOwnProperty("reqTime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.reqTime);
            return writer;
        };

        /**
         * Encodes the specified HeartBeatReq message, length delimited. Does not implicitly {@link gamebase.HeartBeatReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.HeartBeatReq
         * @static
         * @param {gamebase.IHeartBeatReq} message HeartBeatReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartBeatReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeartBeatReq message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.HeartBeatReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.HeartBeatReq} HeartBeatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartBeatReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.HeartBeatReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.reqTime = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeartBeatReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.HeartBeatReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.HeartBeatReq} HeartBeatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartBeatReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeartBeatReq message.
         * @function verify
         * @memberof gamebase.HeartBeatReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeartBeatReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reqTime != null && message.hasOwnProperty("reqTime"))
                if (!$util.isInteger(message.reqTime) && !(message.reqTime && $util.isInteger(message.reqTime.low) && $util.isInteger(message.reqTime.high)))
                    return "reqTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a HeartBeatReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.HeartBeatReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.HeartBeatReq} HeartBeatReq
         */
        HeartBeatReq.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.HeartBeatReq)
                return object;
            var message = new $root.gamebase.HeartBeatReq();
            if (object.reqTime != null)
                if ($util.Long)
                    (message.reqTime = $util.Long.fromValue(object.reqTime)).unsigned = false;
                else if (typeof object.reqTime === "string")
                    message.reqTime = parseInt(object.reqTime, 10);
                else if (typeof object.reqTime === "number")
                    message.reqTime = object.reqTime;
                else if (typeof object.reqTime === "object")
                    message.reqTime = new $util.LongBits(object.reqTime.low >>> 0, object.reqTime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a HeartBeatReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.HeartBeatReq
         * @static
         * @param {gamebase.HeartBeatReq} message HeartBeatReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeartBeatReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.reqTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.reqTime = options.longs === String ? "0" : 0;
            if (message.reqTime != null && message.hasOwnProperty("reqTime"))
                if (typeof message.reqTime === "number")
                    object.reqTime = options.longs === String ? String(message.reqTime) : message.reqTime;
                else
                    object.reqTime = options.longs === String ? $util.Long.prototype.toString.call(message.reqTime) : options.longs === Number ? new $util.LongBits(message.reqTime.low >>> 0, message.reqTime.high >>> 0).toNumber() : message.reqTime;
            return object;
        };

        /**
         * Converts this HeartBeatReq to JSON.
         * @function toJSON
         * @memberof gamebase.HeartBeatReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeartBeatReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HeartBeatReq;
    })();

    gamebase.HeartBeatRsp = (function () {

        /**
         * Properties of a HeartBeatRsp.
         * @memberof gamebase
         * @interface IHeartBeatRsp
         * @property {number|Long|null} [reqTime] HeartBeatRsp reqTime
         * @property {number|Long|null} [ackTime] HeartBeatRsp ackTime
         */

        /**
         * Constructs a new HeartBeatRsp.
         * @memberof gamebase
         * @classdesc Represents a HeartBeatRsp.
         * @implements IHeartBeatRsp
         * @constructor
         * @param {gamebase.IHeartBeatRsp=} [properties] Properties to set
         */
        function HeartBeatRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeartBeatRsp reqTime.
         * @member {number|Long} reqTime
         * @memberof gamebase.HeartBeatRsp
         * @instance
         */
        HeartBeatRsp.prototype.reqTime = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * HeartBeatRsp ackTime.
         * @member {number|Long} ackTime
         * @memberof gamebase.HeartBeatRsp
         * @instance
         */
        HeartBeatRsp.prototype.ackTime = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * Creates a new HeartBeatRsp instance using the specified properties.
         * @function create
         * @memberof gamebase.HeartBeatRsp
         * @static
         * @param {gamebase.IHeartBeatRsp=} [properties] Properties to set
         * @returns {gamebase.HeartBeatRsp} HeartBeatRsp instance
         */
        HeartBeatRsp.create = function create(properties) {
            return new HeartBeatRsp(properties);
        };

        /**
         * Encodes the specified HeartBeatRsp message. Does not implicitly {@link gamebase.HeartBeatRsp.verify|verify} messages.
         * @function encode
         * @memberof gamebase.HeartBeatRsp
         * @static
         * @param {gamebase.IHeartBeatRsp} message HeartBeatRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartBeatRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reqTime != null && message.hasOwnProperty("reqTime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.reqTime);
            if (message.ackTime != null && message.hasOwnProperty("ackTime"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.ackTime);
            return writer;
        };

        /**
         * Encodes the specified HeartBeatRsp message, length delimited. Does not implicitly {@link gamebase.HeartBeatRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.HeartBeatRsp
         * @static
         * @param {gamebase.IHeartBeatRsp} message HeartBeatRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartBeatRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeartBeatRsp message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.HeartBeatRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.HeartBeatRsp} HeartBeatRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartBeatRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.HeartBeatRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.reqTime = reader.int64();
                        break;
                    case 2:
                        message.ackTime = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeartBeatRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.HeartBeatRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.HeartBeatRsp} HeartBeatRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartBeatRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeartBeatRsp message.
         * @function verify
         * @memberof gamebase.HeartBeatRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeartBeatRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reqTime != null && message.hasOwnProperty("reqTime"))
                if (!$util.isInteger(message.reqTime) && !(message.reqTime && $util.isInteger(message.reqTime.low) && $util.isInteger(message.reqTime.high)))
                    return "reqTime: integer|Long expected";
            if (message.ackTime != null && message.hasOwnProperty("ackTime"))
                if (!$util.isInteger(message.ackTime) && !(message.ackTime && $util.isInteger(message.ackTime.low) && $util.isInteger(message.ackTime.high)))
                    return "ackTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a HeartBeatRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.HeartBeatRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.HeartBeatRsp} HeartBeatRsp
         */
        HeartBeatRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.HeartBeatRsp)
                return object;
            var message = new $root.gamebase.HeartBeatRsp();
            if (object.reqTime != null)
                if ($util.Long)
                    (message.reqTime = $util.Long.fromValue(object.reqTime)).unsigned = false;
                else if (typeof object.reqTime === "string")
                    message.reqTime = parseInt(object.reqTime, 10);
                else if (typeof object.reqTime === "number")
                    message.reqTime = object.reqTime;
                else if (typeof object.reqTime === "object")
                    message.reqTime = new $util.LongBits(object.reqTime.low >>> 0, object.reqTime.high >>> 0).toNumber();
            if (object.ackTime != null)
                if ($util.Long)
                    (message.ackTime = $util.Long.fromValue(object.ackTime)).unsigned = false;
                else if (typeof object.ackTime === "string")
                    message.ackTime = parseInt(object.ackTime, 10);
                else if (typeof object.ackTime === "number")
                    message.ackTime = object.ackTime;
                else if (typeof object.ackTime === "object")
                    message.ackTime = new $util.LongBits(object.ackTime.low >>> 0, object.ackTime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a HeartBeatRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.HeartBeatRsp
         * @static
         * @param {gamebase.HeartBeatRsp} message HeartBeatRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeartBeatRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.reqTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.reqTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.ackTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ackTime = options.longs === String ? "0" : 0;
            }
            if (message.reqTime != null && message.hasOwnProperty("reqTime"))
                if (typeof message.reqTime === "number")
                    object.reqTime = options.longs === String ? String(message.reqTime) : message.reqTime;
                else
                    object.reqTime = options.longs === String ? $util.Long.prototype.toString.call(message.reqTime) : options.longs === Number ? new $util.LongBits(message.reqTime.low >>> 0, message.reqTime.high >>> 0).toNumber() : message.reqTime;
            if (message.ackTime != null && message.hasOwnProperty("ackTime"))
                if (typeof message.ackTime === "number")
                    object.ackTime = options.longs === String ? String(message.ackTime) : message.ackTime;
                else
                    object.ackTime = options.longs === String ? $util.Long.prototype.toString.call(message.ackTime) : options.longs === Number ? new $util.LongBits(message.ackTime.low >>> 0, message.ackTime.high >>> 0).toNumber() : message.ackTime;
            return object;
        };

        /**
         * Converts this HeartBeatRsp to JSON.
         * @function toJSON
         * @memberof gamebase.HeartBeatRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeartBeatRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HeartBeatRsp;
    })();

    gamebase.KickPlayerNot = (function () {

        /**
         * Properties of a KickPlayerNot.
         * @memberof gamebase
         * @interface IKickPlayerNot
         * @property {number|null} [reason] KickPlayerNot reason
         * @property {string|null} [msg] KickPlayerNot msg
         */

        /**
         * Constructs a new KickPlayerNot.
         * @memberof gamebase
         * @classdesc Represents a KickPlayerNot.
         * @implements IKickPlayerNot
         * @constructor
         * @param {gamebase.IKickPlayerNot=} [properties] Properties to set
         */
        function KickPlayerNot(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KickPlayerNot reason.
         * @member {number} reason
         * @memberof gamebase.KickPlayerNot
         * @instance
         */
        KickPlayerNot.prototype.reason = 0;

        /**
         * KickPlayerNot msg.
         * @member {string} msg
         * @memberof gamebase.KickPlayerNot
         * @instance
         */
        KickPlayerNot.prototype.msg = "";

        /**
         * Creates a new KickPlayerNot instance using the specified properties.
         * @function create
         * @memberof gamebase.KickPlayerNot
         * @static
         * @param {gamebase.IKickPlayerNot=} [properties] Properties to set
         * @returns {gamebase.KickPlayerNot} KickPlayerNot instance
         */
        KickPlayerNot.create = function create(properties) {
            return new KickPlayerNot(properties);
        };

        /**
         * Encodes the specified KickPlayerNot message. Does not implicitly {@link gamebase.KickPlayerNot.verify|verify} messages.
         * @function encode
         * @memberof gamebase.KickPlayerNot
         * @static
         * @param {gamebase.IKickPlayerNot} message KickPlayerNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KickPlayerNot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reason != null && message.hasOwnProperty("reason"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.reason);
            if (message.msg != null && message.hasOwnProperty("msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified KickPlayerNot message, length delimited. Does not implicitly {@link gamebase.KickPlayerNot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.KickPlayerNot
         * @static
         * @param {gamebase.IKickPlayerNot} message KickPlayerNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KickPlayerNot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KickPlayerNot message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.KickPlayerNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.KickPlayerNot} KickPlayerNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KickPlayerNot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.KickPlayerNot();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.reason = reader.int32();
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
         * Decodes a KickPlayerNot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.KickPlayerNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.KickPlayerNot} KickPlayerNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KickPlayerNot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KickPlayerNot message.
         * @function verify
         * @memberof gamebase.KickPlayerNot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KickPlayerNot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reason != null && message.hasOwnProperty("reason"))
                if (!$util.isInteger(message.reason))
                    return "reason: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates a KickPlayerNot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.KickPlayerNot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.KickPlayerNot} KickPlayerNot
         */
        KickPlayerNot.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.KickPlayerNot)
                return object;
            var message = new $root.gamebase.KickPlayerNot();
            if (object.reason != null)
                message.reason = object.reason | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a KickPlayerNot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.KickPlayerNot
         * @static
         * @param {gamebase.KickPlayerNot} message KickPlayerNot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KickPlayerNot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.reason = 0;
                object.msg = "";
            }
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = message.reason;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this KickPlayerNot to JSON.
         * @function toJSON
         * @memberof gamebase.KickPlayerNot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KickPlayerNot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return KickPlayerNot;
    })();

    return gamebase;
})();

module.exports = $root.gamebase;
