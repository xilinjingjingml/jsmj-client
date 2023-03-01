/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.lobby_login_phone = (function() {

    /**
     * Namespace lobby_login_phone.
     * @exports lobby_login_phone
     * @namespace
     */
    var lobby_login_phone = {};

    lobby_login_phone.LoginReq = (function() {

        /**
         * Properties of a LoginReq.
         * @memberof lobby_login_phone
         * @interface ILoginReq
         * @property {string|null} [guid] LoginReq guid
         * @property {string|null} [token] LoginReq token
         * @property {string|null} [mid] LoginReq mid
         * @property {string|null} [pn] LoginReq pn
         */

        /**
         * Constructs a new LoginReq.
         * @memberof lobby_login_phone
         * @classdesc Represents a LoginReq.
         * @implements ILoginReq
         * @constructor
         * @param {lobby_login_phone.ILoginReq=} [properties] Properties to set
         */
        function LoginReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginReq guid.
         * @member {string} guid
         * @memberof lobby_login_phone.LoginReq
         * @instance
         */
        LoginReq.prototype.guid = "";

        /**
         * LoginReq token.
         * @member {string} token
         * @memberof lobby_login_phone.LoginReq
         * @instance
         */
        LoginReq.prototype.token = "";

        /**
         * LoginReq mid.
         * @member {string} mid
         * @memberof lobby_login_phone.LoginReq
         * @instance
         */
        LoginReq.prototype.mid = "";

        /**
         * LoginReq pn.
         * @member {string} pn
         * @memberof lobby_login_phone.LoginReq
         * @instance
         */
        LoginReq.prototype.pn = "";

        /**
         * Creates a new LoginReq instance using the specified properties.
         * @function create
         * @memberof lobby_login_phone.LoginReq
         * @static
         * @param {lobby_login_phone.ILoginReq=} [properties] Properties to set
         * @returns {lobby_login_phone.LoginReq} LoginReq instance
         */
        LoginReq.create = function create(properties) {
            return new LoginReq(properties);
        };

        /**
         * Encodes the specified LoginReq message. Does not implicitly {@link lobby_login_phone.LoginReq.verify|verify} messages.
         * @function encode
         * @memberof lobby_login_phone.LoginReq
         * @static
         * @param {lobby_login_phone.ILoginReq} message LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guid != null && message.hasOwnProperty("guid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.guid);
            if (message.token != null && message.hasOwnProperty("token"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
            if (message.mid != null && message.hasOwnProperty("mid"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.mid);
            if (message.pn != null && message.hasOwnProperty("pn"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.pn);
            return writer;
        };

        /**
         * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link lobby_login_phone.LoginReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lobby_login_phone.LoginReq
         * @static
         * @param {lobby_login_phone.ILoginReq} message LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginReq message from the specified reader or buffer.
         * @function decode
         * @memberof lobby_login_phone.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lobby_login_phone.LoginReq} LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby_login_phone.LoginReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guid = reader.string();
                    break;
                case 2:
                    message.token = reader.string();
                    break;
                case 3:
                    message.mid = reader.string();
                    break;
                case 4:
                    message.pn = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lobby_login_phone.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lobby_login_phone.LoginReq} LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginReq message.
         * @function verify
         * @memberof lobby_login_phone.LoginReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guid != null && message.hasOwnProperty("guid"))
                if (!$util.isString(message.guid))
                    return "guid: string expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            if (message.mid != null && message.hasOwnProperty("mid"))
                if (!$util.isString(message.mid))
                    return "mid: string expected";
            if (message.pn != null && message.hasOwnProperty("pn"))
                if (!$util.isString(message.pn))
                    return "pn: string expected";
            return null;
        };

        /**
         * Creates a LoginReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lobby_login_phone.LoginReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lobby_login_phone.LoginReq} LoginReq
         */
        LoginReq.fromObject = function fromObject(object) {
            if (object instanceof $root.lobby_login_phone.LoginReq)
                return object;
            var message = new $root.lobby_login_phone.LoginReq();
            if (object.guid != null)
                message.guid = String(object.guid);
            if (object.token != null)
                message.token = String(object.token);
            if (object.mid != null)
                message.mid = String(object.mid);
            if (object.pn != null)
                message.pn = String(object.pn);
            return message;
        };

        /**
         * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lobby_login_phone.LoginReq
         * @static
         * @param {lobby_login_phone.LoginReq} message LoginReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.guid = "";
                object.token = "";
                object.mid = "";
                object.pn = "";
            }
            if (message.guid != null && message.hasOwnProperty("guid"))
                object.guid = message.guid;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            if (message.mid != null && message.hasOwnProperty("mid"))
                object.mid = message.mid;
            if (message.pn != null && message.hasOwnProperty("pn"))
                object.pn = message.pn;
            return object;
        };

        /**
         * Converts this LoginReq to JSON.
         * @function toJSON
         * @memberof lobby_login_phone.LoginReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginReq;
    })();

    lobby_login_phone.LoginRsp = (function() {

        /**
         * Properties of a LoginRsp.
         * @memberof lobby_login_phone
         * @interface ILoginRsp
         * @property {number|null} [errCode] LoginRsp errCode
         * @property {string|null} [errMsg] LoginRsp errMsg
         * @property {number|Long|null} [uid] LoginRsp uid
         * @property {number|null} [sex] LoginRsp sex
         * @property {number|null} [level] LoginRsp level
         * @property {number|Long|null} [money] LoginRsp money
         * @property {number|null} [vip] LoginRsp vip
         * @property {common.IGameData|null} [gameData] LoginRsp gameData
         * @property {Array.<lobby_login_phone.IItem>|null} [items] LoginRsp items
         */

        /**
         * Constructs a new LoginRsp.
         * @memberof lobby_login_phone
         * @classdesc Represents a LoginRsp.
         * @implements ILoginRsp
         * @constructor
         * @param {lobby_login_phone.ILoginRsp=} [properties] Properties to set
         */
        function LoginRsp(properties) {
            this.items = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginRsp errCode.
         * @member {number} errCode
         * @memberof lobby_login_phone.LoginRsp
         * @instance
         */
        LoginRsp.prototype.errCode = 0;

        /**
         * LoginRsp errMsg.
         * @member {string} errMsg
         * @memberof lobby_login_phone.LoginRsp
         * @instance
         */
        LoginRsp.prototype.errMsg = "";

        /**
         * LoginRsp uid.
         * @member {number|Long} uid
         * @memberof lobby_login_phone.LoginRsp
         * @instance
         */
        LoginRsp.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LoginRsp sex.
         * @member {number} sex
         * @memberof lobby_login_phone.LoginRsp
         * @instance
         */
        LoginRsp.prototype.sex = 0;

        /**
         * LoginRsp level.
         * @member {number} level
         * @memberof lobby_login_phone.LoginRsp
         * @instance
         */
        LoginRsp.prototype.level = 0;

        /**
         * LoginRsp money.
         * @member {number|Long} money
         * @memberof lobby_login_phone.LoginRsp
         * @instance
         */
        LoginRsp.prototype.money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LoginRsp vip.
         * @member {number} vip
         * @memberof lobby_login_phone.LoginRsp
         * @instance
         */
        LoginRsp.prototype.vip = 0;

        /**
         * LoginRsp gameData.
         * @member {common.IGameData|null|undefined} gameData
         * @memberof lobby_login_phone.LoginRsp
         * @instance
         */
        LoginRsp.prototype.gameData = null;

        /**
         * LoginRsp items.
         * @member {Array.<lobby_login_phone.IItem>} items
         * @memberof lobby_login_phone.LoginRsp
         * @instance
         */
        LoginRsp.prototype.items = $util.emptyArray;

        /**
         * Creates a new LoginRsp instance using the specified properties.
         * @function create
         * @memberof lobby_login_phone.LoginRsp
         * @static
         * @param {lobby_login_phone.ILoginRsp=} [properties] Properties to set
         * @returns {lobby_login_phone.LoginRsp} LoginRsp instance
         */
        LoginRsp.create = function create(properties) {
            return new LoginRsp(properties);
        };

        /**
         * Encodes the specified LoginRsp message. Does not implicitly {@link lobby_login_phone.LoginRsp.verify|verify} messages.
         * @function encode
         * @memberof lobby_login_phone.LoginRsp
         * @static
         * @param {lobby_login_phone.ILoginRsp} message LoginRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.uid);
            if (message.sex != null && message.hasOwnProperty("sex"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.sex);
            if (message.level != null && message.hasOwnProperty("level"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.level);
            if (message.money != null && message.hasOwnProperty("money"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.money);
            if (message.vip != null && message.hasOwnProperty("vip"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.vip);
            if (message.gameData != null && message.hasOwnProperty("gameData"))
                $root.common.GameData.encode(message.gameData, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.items != null && message.items.length)
                for (var i = 0; i < message.items.length; ++i)
                    $root.lobby_login_phone.Item.encode(message.items[i], writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LoginRsp message, length delimited. Does not implicitly {@link lobby_login_phone.LoginRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lobby_login_phone.LoginRsp
         * @static
         * @param {lobby_login_phone.ILoginRsp} message LoginRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginRsp message from the specified reader or buffer.
         * @function decode
         * @memberof lobby_login_phone.LoginRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lobby_login_phone.LoginRsp} LoginRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby_login_phone.LoginRsp();
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
                    message.uid = reader.int64();
                    break;
                case 4:
                    message.sex = reader.int32();
                    break;
                case 5:
                    message.level = reader.int32();
                    break;
                case 6:
                    message.money = reader.int64();
                    break;
                case 7:
                    message.vip = reader.int32();
                    break;
                case 8:
                    message.gameData = $root.common.GameData.decode(reader, reader.uint32());
                    break;
                case 15:
                    if (!(message.items && message.items.length))
                        message.items = [];
                    message.items.push($root.lobby_login_phone.Item.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lobby_login_phone.LoginRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lobby_login_phone.LoginRsp} LoginRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginRsp message.
         * @function verify
         * @memberof lobby_login_phone.LoginRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                if (!$util.isInteger(message.errCode))
                    return "errCode: integer expected";
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                if (!$util.isString(message.errMsg))
                    return "errMsg: string expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.sex != null && message.hasOwnProperty("sex"))
                if (!$util.isInteger(message.sex))
                    return "sex: integer expected";
            if (message.level != null && message.hasOwnProperty("level"))
                if (!$util.isInteger(message.level))
                    return "level: integer expected";
            if (message.money != null && message.hasOwnProperty("money"))
                if (!$util.isInteger(message.money) && !(message.money && $util.isInteger(message.money.low) && $util.isInteger(message.money.high)))
                    return "money: integer|Long expected";
            if (message.vip != null && message.hasOwnProperty("vip"))
                if (!$util.isInteger(message.vip))
                    return "vip: integer expected";
            if (message.gameData != null && message.hasOwnProperty("gameData")) {
                var error = $root.common.GameData.verify(message.gameData);
                if (error)
                    return "gameData." + error;
            }
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (var i = 0; i < message.items.length; ++i) {
                    var error = $root.lobby_login_phone.Item.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            return null;
        };

        /**
         * Creates a LoginRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lobby_login_phone.LoginRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lobby_login_phone.LoginRsp} LoginRsp
         */
        LoginRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.lobby_login_phone.LoginRsp)
                return object;
            var message = new $root.lobby_login_phone.LoginRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.sex != null)
                message.sex = object.sex | 0;
            if (object.level != null)
                message.level = object.level | 0;
            if (object.money != null)
                if ($util.Long)
                    (message.money = $util.Long.fromValue(object.money)).unsigned = false;
                else if (typeof object.money === "string")
                    message.money = parseInt(object.money, 10);
                else if (typeof object.money === "number")
                    message.money = object.money;
                else if (typeof object.money === "object")
                    message.money = new $util.LongBits(object.money.low >>> 0, object.money.high >>> 0).toNumber();
            if (object.vip != null)
                message.vip = object.vip | 0;
            if (object.gameData != null) {
                if (typeof object.gameData !== "object")
                    throw TypeError(".lobby_login_phone.LoginRsp.gameData: object expected");
                message.gameData = $root.common.GameData.fromObject(object.gameData);
            }
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".lobby_login_phone.LoginRsp.items: array expected");
                message.items = [];
                for (var i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".lobby_login_phone.LoginRsp.items: object expected");
                    message.items[i] = $root.lobby_login_phone.Item.fromObject(object.items[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a LoginRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lobby_login_phone.LoginRsp
         * @static
         * @param {lobby_login_phone.LoginRsp} message LoginRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.items = [];
            if (options.defaults) {
                object.errCode = 0;
                object.errMsg = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.sex = 0;
                object.level = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.money = options.longs === String ? "0" : 0;
                object.vip = 0;
                object.gameData = null;
            }
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                object.errCode = message.errCode;
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                object.errMsg = message.errMsg;
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.sex != null && message.hasOwnProperty("sex"))
                object.sex = message.sex;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.money != null && message.hasOwnProperty("money"))
                if (typeof message.money === "number")
                    object.money = options.longs === String ? String(message.money) : message.money;
                else
                    object.money = options.longs === String ? $util.Long.prototype.toString.call(message.money) : options.longs === Number ? new $util.LongBits(message.money.low >>> 0, message.money.high >>> 0).toNumber() : message.money;
            if (message.vip != null && message.hasOwnProperty("vip"))
                object.vip = message.vip;
            if (message.gameData != null && message.hasOwnProperty("gameData"))
                object.gameData = $root.common.GameData.toObject(message.gameData, options);
            if (message.items && message.items.length) {
                object.items = [];
                for (var j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.lobby_login_phone.Item.toObject(message.items[j], options);
            }
            return object;
        };

        /**
         * Converts this LoginRsp to JSON.
         * @function toJSON
         * @memberof lobby_login_phone.LoginRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginRsp;
    })();

    lobby_login_phone.Item = (function() {

        /**
         * Properties of an Item.
         * @memberof lobby_login_phone
         * @interface IItem
         * @property {number|null} [id] Item id
         * @property {number|Long|null} [num] Item num
         * @property {number|null} [expireAt] Item expireAt
         */

        /**
         * Constructs a new Item.
         * @memberof lobby_login_phone
         * @classdesc Represents an Item.
         * @implements IItem
         * @constructor
         * @param {lobby_login_phone.IItem=} [properties] Properties to set
         */
        function Item(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Item id.
         * @member {number} id
         * @memberof lobby_login_phone.Item
         * @instance
         */
        Item.prototype.id = 0;

        /**
         * Item num.
         * @member {number|Long} num
         * @memberof lobby_login_phone.Item
         * @instance
         */
        Item.prototype.num = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Item expireAt.
         * @member {number} expireAt
         * @memberof lobby_login_phone.Item
         * @instance
         */
        Item.prototype.expireAt = 0;

        /**
         * Creates a new Item instance using the specified properties.
         * @function create
         * @memberof lobby_login_phone.Item
         * @static
         * @param {lobby_login_phone.IItem=} [properties] Properties to set
         * @returns {lobby_login_phone.Item} Item instance
         */
        Item.create = function create(properties) {
            return new Item(properties);
        };

        /**
         * Encodes the specified Item message. Does not implicitly {@link lobby_login_phone.Item.verify|verify} messages.
         * @function encode
         * @memberof lobby_login_phone.Item
         * @static
         * @param {lobby_login_phone.IItem} message Item message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Item.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.num != null && message.hasOwnProperty("num"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.num);
            if (message.expireAt != null && message.hasOwnProperty("expireAt"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.expireAt);
            return writer;
        };

        /**
         * Encodes the specified Item message, length delimited. Does not implicitly {@link lobby_login_phone.Item.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lobby_login_phone.Item
         * @static
         * @param {lobby_login_phone.IItem} message Item message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Item.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Item message from the specified reader or buffer.
         * @function decode
         * @memberof lobby_login_phone.Item
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lobby_login_phone.Item} Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Item.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby_login_phone.Item();
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
                    message.expireAt = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Item message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lobby_login_phone.Item
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lobby_login_phone.Item} Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Item.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Item message.
         * @function verify
         * @memberof lobby_login_phone.Item
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Item.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.num != null && message.hasOwnProperty("num"))
                if (!$util.isInteger(message.num) && !(message.num && $util.isInteger(message.num.low) && $util.isInteger(message.num.high)))
                    return "num: integer|Long expected";
            if (message.expireAt != null && message.hasOwnProperty("expireAt"))
                if (!$util.isInteger(message.expireAt))
                    return "expireAt: integer expected";
            return null;
        };

        /**
         * Creates an Item message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lobby_login_phone.Item
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lobby_login_phone.Item} Item
         */
        Item.fromObject = function fromObject(object) {
            if (object instanceof $root.lobby_login_phone.Item)
                return object;
            var message = new $root.lobby_login_phone.Item();
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
                message.expireAt = object.expireAt | 0;
            return message;
        };

        /**
         * Creates a plain object from an Item message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lobby_login_phone.Item
         * @static
         * @param {lobby_login_phone.Item} message Item
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Item.toObject = function toObject(message, options) {
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
                object.expireAt = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.num != null && message.hasOwnProperty("num"))
                if (typeof message.num === "number")
                    object.num = options.longs === String ? String(message.num) : message.num;
                else
                    object.num = options.longs === String ? $util.Long.prototype.toString.call(message.num) : options.longs === Number ? new $util.LongBits(message.num.low >>> 0, message.num.high >>> 0).toNumber() : message.num;
            if (message.expireAt != null && message.hasOwnProperty("expireAt"))
                object.expireAt = message.expireAt;
            return object;
        };

        /**
         * Converts this Item to JSON.
         * @function toJSON
         * @memberof lobby_login_phone.Item
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Item.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Item;
    })();

    lobby_login_phone.ItemOpt = (function() {

        /**
         * Properties of an ItemOpt.
         * @memberof lobby_login_phone
         * @interface IItemOpt
         * @property {number|null} [id] ItemOpt id
         * @property {number|Long|null} [num] ItemOpt num
         * @property {number|null} [expireAt] ItemOpt expireAt
         */

        /**
         * Constructs a new ItemOpt.
         * @memberof lobby_login_phone
         * @classdesc Represents an ItemOpt.
         * @implements IItemOpt
         * @constructor
         * @param {lobby_login_phone.IItemOpt=} [properties] Properties to set
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
         * @memberof lobby_login_phone.ItemOpt
         * @instance
         */
        ItemOpt.prototype.id = 0;

        /**
         * ItemOpt num.
         * @member {number|Long} num
         * @memberof lobby_login_phone.ItemOpt
         * @instance
         */
        ItemOpt.prototype.num = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ItemOpt expireAt.
         * @member {number} expireAt
         * @memberof lobby_login_phone.ItemOpt
         * @instance
         */
        ItemOpt.prototype.expireAt = 0;

        /**
         * Creates a new ItemOpt instance using the specified properties.
         * @function create
         * @memberof lobby_login_phone.ItemOpt
         * @static
         * @param {lobby_login_phone.IItemOpt=} [properties] Properties to set
         * @returns {lobby_login_phone.ItemOpt} ItemOpt instance
         */
        ItemOpt.create = function create(properties) {
            return new ItemOpt(properties);
        };

        /**
         * Encodes the specified ItemOpt message. Does not implicitly {@link lobby_login_phone.ItemOpt.verify|verify} messages.
         * @function encode
         * @memberof lobby_login_phone.ItemOpt
         * @static
         * @param {lobby_login_phone.IItemOpt} message ItemOpt message or plain object to encode
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
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.expireAt);
            return writer;
        };

        /**
         * Encodes the specified ItemOpt message, length delimited. Does not implicitly {@link lobby_login_phone.ItemOpt.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lobby_login_phone.ItemOpt
         * @static
         * @param {lobby_login_phone.IItemOpt} message ItemOpt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemOpt.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ItemOpt message from the specified reader or buffer.
         * @function decode
         * @memberof lobby_login_phone.ItemOpt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lobby_login_phone.ItemOpt} ItemOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemOpt.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby_login_phone.ItemOpt();
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
                    message.expireAt = reader.int32();
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
         * @memberof lobby_login_phone.ItemOpt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lobby_login_phone.ItemOpt} ItemOpt
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
         * @memberof lobby_login_phone.ItemOpt
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
                if (!$util.isInteger(message.expireAt))
                    return "expireAt: integer expected";
            return null;
        };

        /**
         * Creates an ItemOpt message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lobby_login_phone.ItemOpt
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lobby_login_phone.ItemOpt} ItemOpt
         */
        ItemOpt.fromObject = function fromObject(object) {
            if (object instanceof $root.lobby_login_phone.ItemOpt)
                return object;
            var message = new $root.lobby_login_phone.ItemOpt();
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
                message.expireAt = object.expireAt | 0;
            return message;
        };

        /**
         * Creates a plain object from an ItemOpt message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lobby_login_phone.ItemOpt
         * @static
         * @param {lobby_login_phone.ItemOpt} message ItemOpt
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
                object.expireAt = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.num != null && message.hasOwnProperty("num"))
                if (typeof message.num === "number")
                    object.num = options.longs === String ? String(message.num) : message.num;
                else
                    object.num = options.longs === String ? $util.Long.prototype.toString.call(message.num) : options.longs === Number ? new $util.LongBits(message.num.low >>> 0, message.num.high >>> 0).toNumber() : message.num;
            if (message.expireAt != null && message.hasOwnProperty("expireAt"))
                object.expireAt = message.expireAt;
            return object;
        };

        /**
         * Converts this ItemOpt to JSON.
         * @function toJSON
         * @memberof lobby_login_phone.ItemOpt
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ItemOpt.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ItemOpt;
    })();

    lobby_login_phone.ItemUpdate = (function() {

        /**
         * Properties of an ItemUpdate.
         * @memberof lobby_login_phone
         * @interface IItemUpdate
         * @property {number|null} [id] ItemUpdate id
         * @property {number|Long|null} [change] ItemUpdate change
         * @property {number|Long|null} [num] ItemUpdate num
         * @property {number|null} [expireAt] ItemUpdate expireAt
         */

        /**
         * Constructs a new ItemUpdate.
         * @memberof lobby_login_phone
         * @classdesc Represents an ItemUpdate.
         * @implements IItemUpdate
         * @constructor
         * @param {lobby_login_phone.IItemUpdate=} [properties] Properties to set
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
         * @memberof lobby_login_phone.ItemUpdate
         * @instance
         */
        ItemUpdate.prototype.id = 0;

        /**
         * ItemUpdate change.
         * @member {number|Long} change
         * @memberof lobby_login_phone.ItemUpdate
         * @instance
         */
        ItemUpdate.prototype.change = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ItemUpdate num.
         * @member {number|Long} num
         * @memberof lobby_login_phone.ItemUpdate
         * @instance
         */
        ItemUpdate.prototype.num = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ItemUpdate expireAt.
         * @member {number} expireAt
         * @memberof lobby_login_phone.ItemUpdate
         * @instance
         */
        ItemUpdate.prototype.expireAt = 0;

        /**
         * Creates a new ItemUpdate instance using the specified properties.
         * @function create
         * @memberof lobby_login_phone.ItemUpdate
         * @static
         * @param {lobby_login_phone.IItemUpdate=} [properties] Properties to set
         * @returns {lobby_login_phone.ItemUpdate} ItemUpdate instance
         */
        ItemUpdate.create = function create(properties) {
            return new ItemUpdate(properties);
        };

        /**
         * Encodes the specified ItemUpdate message. Does not implicitly {@link lobby_login_phone.ItemUpdate.verify|verify} messages.
         * @function encode
         * @memberof lobby_login_phone.ItemUpdate
         * @static
         * @param {lobby_login_phone.IItemUpdate} message ItemUpdate message or plain object to encode
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
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.expireAt);
            return writer;
        };

        /**
         * Encodes the specified ItemUpdate message, length delimited. Does not implicitly {@link lobby_login_phone.ItemUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lobby_login_phone.ItemUpdate
         * @static
         * @param {lobby_login_phone.IItemUpdate} message ItemUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ItemUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof lobby_login_phone.ItemUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lobby_login_phone.ItemUpdate} ItemUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby_login_phone.ItemUpdate();
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
                    message.expireAt = reader.int32();
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
         * @memberof lobby_login_phone.ItemUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lobby_login_phone.ItemUpdate} ItemUpdate
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
         * @memberof lobby_login_phone.ItemUpdate
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
                if (!$util.isInteger(message.expireAt))
                    return "expireAt: integer expected";
            return null;
        };

        /**
         * Creates an ItemUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lobby_login_phone.ItemUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lobby_login_phone.ItemUpdate} ItemUpdate
         */
        ItemUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.lobby_login_phone.ItemUpdate)
                return object;
            var message = new $root.lobby_login_phone.ItemUpdate();
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
                message.expireAt = object.expireAt | 0;
            return message;
        };

        /**
         * Creates a plain object from an ItemUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lobby_login_phone.ItemUpdate
         * @static
         * @param {lobby_login_phone.ItemUpdate} message ItemUpdate
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
                object.expireAt = 0;
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
                object.expireAt = message.expireAt;
            return object;
        };

        /**
         * Converts this ItemUpdate to JSON.
         * @function toJSON
         * @memberof lobby_login_phone.ItemUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ItemUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ItemUpdate;
    })();

    lobby_login_phone.UpdateItemNot = (function() {

        /**
         * Properties of an UpdateItemNot.
         * @memberof lobby_login_phone
         * @interface IUpdateItemNot
         * @property {string|null} [cliParam] UpdateItemNot cliParam
         * @property {Array.<lobby_login_phone.IItemUpdate>|null} [update] UpdateItemNot update
         */

        /**
         * Constructs a new UpdateItemNot.
         * @memberof lobby_login_phone
         * @classdesc Represents an UpdateItemNot.
         * @implements IUpdateItemNot
         * @constructor
         * @param {lobby_login_phone.IUpdateItemNot=} [properties] Properties to set
         */
        function UpdateItemNot(properties) {
            this.update = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateItemNot cliParam.
         * @member {string} cliParam
         * @memberof lobby_login_phone.UpdateItemNot
         * @instance
         */
        UpdateItemNot.prototype.cliParam = "";

        /**
         * UpdateItemNot update.
         * @member {Array.<lobby_login_phone.IItemUpdate>} update
         * @memberof lobby_login_phone.UpdateItemNot
         * @instance
         */
        UpdateItemNot.prototype.update = $util.emptyArray;

        /**
         * Creates a new UpdateItemNot instance using the specified properties.
         * @function create
         * @memberof lobby_login_phone.UpdateItemNot
         * @static
         * @param {lobby_login_phone.IUpdateItemNot=} [properties] Properties to set
         * @returns {lobby_login_phone.UpdateItemNot} UpdateItemNot instance
         */
        UpdateItemNot.create = function create(properties) {
            return new UpdateItemNot(properties);
        };

        /**
         * Encodes the specified UpdateItemNot message. Does not implicitly {@link lobby_login_phone.UpdateItemNot.verify|verify} messages.
         * @function encode
         * @memberof lobby_login_phone.UpdateItemNot
         * @static
         * @param {lobby_login_phone.IUpdateItemNot} message UpdateItemNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateItemNot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cliParam != null && message.hasOwnProperty("cliParam"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.cliParam);
            if (message.update != null && message.update.length)
                for (var i = 0; i < message.update.length; ++i)
                    $root.lobby_login_phone.ItemUpdate.encode(message.update[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UpdateItemNot message, length delimited. Does not implicitly {@link lobby_login_phone.UpdateItemNot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lobby_login_phone.UpdateItemNot
         * @static
         * @param {lobby_login_phone.IUpdateItemNot} message UpdateItemNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateItemNot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateItemNot message from the specified reader or buffer.
         * @function decode
         * @memberof lobby_login_phone.UpdateItemNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lobby_login_phone.UpdateItemNot} UpdateItemNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateItemNot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby_login_phone.UpdateItemNot();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cliParam = reader.string();
                    break;
                case 10:
                    if (!(message.update && message.update.length))
                        message.update = [];
                    message.update.push($root.lobby_login_phone.ItemUpdate.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateItemNot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lobby_login_phone.UpdateItemNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lobby_login_phone.UpdateItemNot} UpdateItemNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateItemNot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateItemNot message.
         * @function verify
         * @memberof lobby_login_phone.UpdateItemNot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateItemNot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cliParam != null && message.hasOwnProperty("cliParam"))
                if (!$util.isString(message.cliParam))
                    return "cliParam: string expected";
            if (message.update != null && message.hasOwnProperty("update")) {
                if (!Array.isArray(message.update))
                    return "update: array expected";
                for (var i = 0; i < message.update.length; ++i) {
                    var error = $root.lobby_login_phone.ItemUpdate.verify(message.update[i]);
                    if (error)
                        return "update." + error;
                }
            }
            return null;
        };

        /**
         * Creates an UpdateItemNot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lobby_login_phone.UpdateItemNot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lobby_login_phone.UpdateItemNot} UpdateItemNot
         */
        UpdateItemNot.fromObject = function fromObject(object) {
            if (object instanceof $root.lobby_login_phone.UpdateItemNot)
                return object;
            var message = new $root.lobby_login_phone.UpdateItemNot();
            if (object.cliParam != null)
                message.cliParam = String(object.cliParam);
            if (object.update) {
                if (!Array.isArray(object.update))
                    throw TypeError(".lobby_login_phone.UpdateItemNot.update: array expected");
                message.update = [];
                for (var i = 0; i < object.update.length; ++i) {
                    if (typeof object.update[i] !== "object")
                        throw TypeError(".lobby_login_phone.UpdateItemNot.update: object expected");
                    message.update[i] = $root.lobby_login_phone.ItemUpdate.fromObject(object.update[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an UpdateItemNot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lobby_login_phone.UpdateItemNot
         * @static
         * @param {lobby_login_phone.UpdateItemNot} message UpdateItemNot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateItemNot.toObject = function toObject(message, options) {
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
                    object.update[j] = $root.lobby_login_phone.ItemUpdate.toObject(message.update[j], options);
            }
            return object;
        };

        /**
         * Converts this UpdateItemNot to JSON.
         * @function toJSON
         * @memberof lobby_login_phone.UpdateItemNot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateItemNot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateItemNot;
    })();

    lobby_login_phone.GetPlayerInfoReq = (function() {

        /**
         * Properties of a GetPlayerInfoReq.
         * @memberof lobby_login_phone
         * @interface IGetPlayerInfoReq
         * @property {Array.<number|Long>|null} [uidList] GetPlayerInfoReq uidList
         */

        /**
         * Constructs a new GetPlayerInfoReq.
         * @memberof lobby_login_phone
         * @classdesc Represents a GetPlayerInfoReq.
         * @implements IGetPlayerInfoReq
         * @constructor
         * @param {lobby_login_phone.IGetPlayerInfoReq=} [properties] Properties to set
         */
        function GetPlayerInfoReq(properties) {
            this.uidList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetPlayerInfoReq uidList.
         * @member {Array.<number|Long>} uidList
         * @memberof lobby_login_phone.GetPlayerInfoReq
         * @instance
         */
        GetPlayerInfoReq.prototype.uidList = $util.emptyArray;

        /**
         * Creates a new GetPlayerInfoReq instance using the specified properties.
         * @function create
         * @memberof lobby_login_phone.GetPlayerInfoReq
         * @static
         * @param {lobby_login_phone.IGetPlayerInfoReq=} [properties] Properties to set
         * @returns {lobby_login_phone.GetPlayerInfoReq} GetPlayerInfoReq instance
         */
        GetPlayerInfoReq.create = function create(properties) {
            return new GetPlayerInfoReq(properties);
        };

        /**
         * Encodes the specified GetPlayerInfoReq message. Does not implicitly {@link lobby_login_phone.GetPlayerInfoReq.verify|verify} messages.
         * @function encode
         * @memberof lobby_login_phone.GetPlayerInfoReq
         * @static
         * @param {lobby_login_phone.IGetPlayerInfoReq} message GetPlayerInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPlayerInfoReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uidList != null && message.uidList.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.uidList.length; ++i)
                    writer.int64(message.uidList[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified GetPlayerInfoReq message, length delimited. Does not implicitly {@link lobby_login_phone.GetPlayerInfoReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lobby_login_phone.GetPlayerInfoReq
         * @static
         * @param {lobby_login_phone.IGetPlayerInfoReq} message GetPlayerInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPlayerInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetPlayerInfoReq message from the specified reader or buffer.
         * @function decode
         * @memberof lobby_login_phone.GetPlayerInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lobby_login_phone.GetPlayerInfoReq} GetPlayerInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPlayerInfoReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby_login_phone.GetPlayerInfoReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.uidList && message.uidList.length))
                        message.uidList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.uidList.push(reader.int64());
                    } else
                        message.uidList.push(reader.int64());
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
         * @memberof lobby_login_phone.GetPlayerInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lobby_login_phone.GetPlayerInfoReq} GetPlayerInfoReq
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
         * @memberof lobby_login_phone.GetPlayerInfoReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetPlayerInfoReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uidList != null && message.hasOwnProperty("uidList")) {
                if (!Array.isArray(message.uidList))
                    return "uidList: array expected";
                for (var i = 0; i < message.uidList.length; ++i)
                    if (!$util.isInteger(message.uidList[i]) && !(message.uidList[i] && $util.isInteger(message.uidList[i].low) && $util.isInteger(message.uidList[i].high)))
                        return "uidList: integer|Long[] expected";
            }
            return null;
        };

        /**
         * Creates a GetPlayerInfoReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lobby_login_phone.GetPlayerInfoReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lobby_login_phone.GetPlayerInfoReq} GetPlayerInfoReq
         */
        GetPlayerInfoReq.fromObject = function fromObject(object) {
            if (object instanceof $root.lobby_login_phone.GetPlayerInfoReq)
                return object;
            var message = new $root.lobby_login_phone.GetPlayerInfoReq();
            if (object.uidList) {
                if (!Array.isArray(object.uidList))
                    throw TypeError(".lobby_login_phone.GetPlayerInfoReq.uidList: array expected");
                message.uidList = [];
                for (var i = 0; i < object.uidList.length; ++i)
                    if ($util.Long)
                        (message.uidList[i] = $util.Long.fromValue(object.uidList[i])).unsigned = false;
                    else if (typeof object.uidList[i] === "string")
                        message.uidList[i] = parseInt(object.uidList[i], 10);
                    else if (typeof object.uidList[i] === "number")
                        message.uidList[i] = object.uidList[i];
                    else if (typeof object.uidList[i] === "object")
                        message.uidList[i] = new $util.LongBits(object.uidList[i].low >>> 0, object.uidList[i].high >>> 0).toNumber();
            }
            return message;
        };

        /**
         * Creates a plain object from a GetPlayerInfoReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lobby_login_phone.GetPlayerInfoReq
         * @static
         * @param {lobby_login_phone.GetPlayerInfoReq} message GetPlayerInfoReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetPlayerInfoReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.uidList = [];
            if (message.uidList && message.uidList.length) {
                object.uidList = [];
                for (var j = 0; j < message.uidList.length; ++j)
                    if (typeof message.uidList[j] === "number")
                        object.uidList[j] = options.longs === String ? String(message.uidList[j]) : message.uidList[j];
                    else
                        object.uidList[j] = options.longs === String ? $util.Long.prototype.toString.call(message.uidList[j]) : options.longs === Number ? new $util.LongBits(message.uidList[j].low >>> 0, message.uidList[j].high >>> 0).toNumber() : message.uidList[j];
            }
            return object;
        };

        /**
         * Converts this GetPlayerInfoReq to JSON.
         * @function toJSON
         * @memberof lobby_login_phone.GetPlayerInfoReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetPlayerInfoReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetPlayerInfoReq;
    })();

    lobby_login_phone.PlayerInfo = (function() {

        /**
         * Properties of a PlayerInfo.
         * @memberof lobby_login_phone
         * @interface IPlayerInfo
         * @property {number|Long|null} [uid] PlayerInfo uid
         * @property {number|null} [sex] PlayerInfo sex
         * @property {string|null} [faceUrl] PlayerInfo faceUrl
         * @property {number|Long|null} [money] PlayerInfo money
         */

        /**
         * Constructs a new PlayerInfo.
         * @memberof lobby_login_phone
         * @classdesc Represents a PlayerInfo.
         * @implements IPlayerInfo
         * @constructor
         * @param {lobby_login_phone.IPlayerInfo=} [properties] Properties to set
         */
        function PlayerInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerInfo uid.
         * @member {number|Long} uid
         * @memberof lobby_login_phone.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PlayerInfo sex.
         * @member {number} sex
         * @memberof lobby_login_phone.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.sex = 0;

        /**
         * PlayerInfo faceUrl.
         * @member {string} faceUrl
         * @memberof lobby_login_phone.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.faceUrl = "";

        /**
         * PlayerInfo money.
         * @member {number|Long} money
         * @memberof lobby_login_phone.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new PlayerInfo instance using the specified properties.
         * @function create
         * @memberof lobby_login_phone.PlayerInfo
         * @static
         * @param {lobby_login_phone.IPlayerInfo=} [properties] Properties to set
         * @returns {lobby_login_phone.PlayerInfo} PlayerInfo instance
         */
        PlayerInfo.create = function create(properties) {
            return new PlayerInfo(properties);
        };

        /**
         * Encodes the specified PlayerInfo message. Does not implicitly {@link lobby_login_phone.PlayerInfo.verify|verify} messages.
         * @function encode
         * @memberof lobby_login_phone.PlayerInfo
         * @static
         * @param {lobby_login_phone.IPlayerInfo} message PlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            if (message.sex != null && message.hasOwnProperty("sex"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.sex);
            if (message.faceUrl != null && message.hasOwnProperty("faceUrl"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.faceUrl);
            if (message.money != null && message.hasOwnProperty("money"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.money);
            return writer;
        };

        /**
         * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link lobby_login_phone.PlayerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lobby_login_phone.PlayerInfo
         * @static
         * @param {lobby_login_phone.IPlayerInfo} message PlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof lobby_login_phone.PlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lobby_login_phone.PlayerInfo} PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby_login_phone.PlayerInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int64();
                    break;
                case 2:
                    message.sex = reader.int32();
                    break;
                case 3:
                    message.faceUrl = reader.string();
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
         * Decodes a PlayerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lobby_login_phone.PlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lobby_login_phone.PlayerInfo} PlayerInfo
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
         * @memberof lobby_login_phone.PlayerInfo
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
            if (message.sex != null && message.hasOwnProperty("sex"))
                if (!$util.isInteger(message.sex))
                    return "sex: integer expected";
            if (message.faceUrl != null && message.hasOwnProperty("faceUrl"))
                if (!$util.isString(message.faceUrl))
                    return "faceUrl: string expected";
            if (message.money != null && message.hasOwnProperty("money"))
                if (!$util.isInteger(message.money) && !(message.money && $util.isInteger(message.money.low) && $util.isInteger(message.money.high)))
                    return "money: integer|Long expected";
            return null;
        };

        /**
         * Creates a PlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lobby_login_phone.PlayerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lobby_login_phone.PlayerInfo} PlayerInfo
         */
        PlayerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.lobby_login_phone.PlayerInfo)
                return object;
            var message = new $root.lobby_login_phone.PlayerInfo();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.sex != null)
                message.sex = object.sex | 0;
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
         * Creates a plain object from a PlayerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lobby_login_phone.PlayerInfo
         * @static
         * @param {lobby_login_phone.PlayerInfo} message PlayerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.sex = 0;
                object.faceUrl = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.money = options.longs === String ? "0" : 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.sex != null && message.hasOwnProperty("sex"))
                object.sex = message.sex;
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
         * Converts this PlayerInfo to JSON.
         * @function toJSON
         * @memberof lobby_login_phone.PlayerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerInfo;
    })();

    lobby_login_phone.GetPlayerInfoRsp = (function() {

        /**
         * Properties of a GetPlayerInfoRsp.
         * @memberof lobby_login_phone
         * @interface IGetPlayerInfoRsp
         * @property {Array.<lobby_login_phone.IPlayerInfo>|null} [infoList] GetPlayerInfoRsp infoList
         */

        /**
         * Constructs a new GetPlayerInfoRsp.
         * @memberof lobby_login_phone
         * @classdesc Represents a GetPlayerInfoRsp.
         * @implements IGetPlayerInfoRsp
         * @constructor
         * @param {lobby_login_phone.IGetPlayerInfoRsp=} [properties] Properties to set
         */
        function GetPlayerInfoRsp(properties) {
            this.infoList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetPlayerInfoRsp infoList.
         * @member {Array.<lobby_login_phone.IPlayerInfo>} infoList
         * @memberof lobby_login_phone.GetPlayerInfoRsp
         * @instance
         */
        GetPlayerInfoRsp.prototype.infoList = $util.emptyArray;

        /**
         * Creates a new GetPlayerInfoRsp instance using the specified properties.
         * @function create
         * @memberof lobby_login_phone.GetPlayerInfoRsp
         * @static
         * @param {lobby_login_phone.IGetPlayerInfoRsp=} [properties] Properties to set
         * @returns {lobby_login_phone.GetPlayerInfoRsp} GetPlayerInfoRsp instance
         */
        GetPlayerInfoRsp.create = function create(properties) {
            return new GetPlayerInfoRsp(properties);
        };

        /**
         * Encodes the specified GetPlayerInfoRsp message. Does not implicitly {@link lobby_login_phone.GetPlayerInfoRsp.verify|verify} messages.
         * @function encode
         * @memberof lobby_login_phone.GetPlayerInfoRsp
         * @static
         * @param {lobby_login_phone.IGetPlayerInfoRsp} message GetPlayerInfoRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPlayerInfoRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.infoList != null && message.infoList.length)
                for (var i = 0; i < message.infoList.length; ++i)
                    $root.lobby_login_phone.PlayerInfo.encode(message.infoList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetPlayerInfoRsp message, length delimited. Does not implicitly {@link lobby_login_phone.GetPlayerInfoRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lobby_login_phone.GetPlayerInfoRsp
         * @static
         * @param {lobby_login_phone.IGetPlayerInfoRsp} message GetPlayerInfoRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPlayerInfoRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetPlayerInfoRsp message from the specified reader or buffer.
         * @function decode
         * @memberof lobby_login_phone.GetPlayerInfoRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lobby_login_phone.GetPlayerInfoRsp} GetPlayerInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPlayerInfoRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby_login_phone.GetPlayerInfoRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.infoList && message.infoList.length))
                        message.infoList = [];
                    message.infoList.push($root.lobby_login_phone.PlayerInfo.decode(reader, reader.uint32()));
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
         * @memberof lobby_login_phone.GetPlayerInfoRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lobby_login_phone.GetPlayerInfoRsp} GetPlayerInfoRsp
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
         * @memberof lobby_login_phone.GetPlayerInfoRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetPlayerInfoRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.infoList != null && message.hasOwnProperty("infoList")) {
                if (!Array.isArray(message.infoList))
                    return "infoList: array expected";
                for (var i = 0; i < message.infoList.length; ++i) {
                    var error = $root.lobby_login_phone.PlayerInfo.verify(message.infoList[i]);
                    if (error)
                        return "infoList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetPlayerInfoRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lobby_login_phone.GetPlayerInfoRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lobby_login_phone.GetPlayerInfoRsp} GetPlayerInfoRsp
         */
        GetPlayerInfoRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.lobby_login_phone.GetPlayerInfoRsp)
                return object;
            var message = new $root.lobby_login_phone.GetPlayerInfoRsp();
            if (object.infoList) {
                if (!Array.isArray(object.infoList))
                    throw TypeError(".lobby_login_phone.GetPlayerInfoRsp.infoList: array expected");
                message.infoList = [];
                for (var i = 0; i < object.infoList.length; ++i) {
                    if (typeof object.infoList[i] !== "object")
                        throw TypeError(".lobby_login_phone.GetPlayerInfoRsp.infoList: object expected");
                    message.infoList[i] = $root.lobby_login_phone.PlayerInfo.fromObject(object.infoList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetPlayerInfoRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lobby_login_phone.GetPlayerInfoRsp
         * @static
         * @param {lobby_login_phone.GetPlayerInfoRsp} message GetPlayerInfoRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetPlayerInfoRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.infoList = [];
            if (message.infoList && message.infoList.length) {
                object.infoList = [];
                for (var j = 0; j < message.infoList.length; ++j)
                    object.infoList[j] = $root.lobby_login_phone.PlayerInfo.toObject(message.infoList[j], options);
            }
            return object;
        };

        /**
         * Converts this GetPlayerInfoRsp to JSON.
         * @function toJSON
         * @memberof lobby_login_phone.GetPlayerInfoRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetPlayerInfoRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetPlayerInfoRsp;
    })();

    return lobby_login_phone;
})();

module.exports = $root.lobby_login_phone;
