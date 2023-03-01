/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.loginProto || ($protobuf.roots.loginProto = {});

$root.LoginReq = (function() {

    /**
     * Properties of a LoginReq.
     * @exports ILoginReq
     * @interface ILoginReq
     * @property {string|null} [guid] LoginReq guid
     * @property {string|null} [token] LoginReq token
     * @property {string|null} [mid] LoginReq mid
     * @property {string|null} [pn] LoginReq pn
     */

    /**
     * Constructs a new LoginReq.
     * @exports LoginReq
     * @classdesc Represents a LoginReq.
     * @implements ILoginReq
     * @constructor
     * @param {ILoginReq=} [properties] Properties to set
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
     * @memberof LoginReq
     * @instance
     */
    LoginReq.prototype.guid = "";

    /**
     * LoginReq token.
     * @member {string} token
     * @memberof LoginReq
     * @instance
     */
    LoginReq.prototype.token = "";

    /**
     * LoginReq mid.
     * @member {string} mid
     * @memberof LoginReq
     * @instance
     */
    LoginReq.prototype.mid = "";

    /**
     * LoginReq pn.
     * @member {string} pn
     * @memberof LoginReq
     * @instance
     */
    LoginReq.prototype.pn = "";

    /**
     * Creates a new LoginReq instance using the specified properties.
     * @function create
     * @memberof LoginReq
     * @static
     * @param {ILoginReq=} [properties] Properties to set
     * @returns {LoginReq} LoginReq instance
     */
    LoginReq.create = function create(properties) {
        return new LoginReq(properties);
    };

    /**
     * Encodes the specified LoginReq message. Does not implicitly {@link LoginReq.verify|verify} messages.
     * @function encode
     * @memberof LoginReq
     * @static
     * @param {ILoginReq} message LoginReq message or plain object to encode
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
     * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link LoginReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LoginReq
     * @static
     * @param {ILoginReq} message LoginReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LoginReq message from the specified reader or buffer.
     * @function decode
     * @memberof LoginReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LoginReq} LoginReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoginReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginReq();
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
     * @memberof LoginReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LoginReq} LoginReq
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
     * @memberof LoginReq
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
     * @memberof LoginReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LoginReq} LoginReq
     */
    LoginReq.fromObject = function fromObject(object) {
        if (object instanceof $root.LoginReq)
            return object;
        var message = new $root.LoginReq();
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
     * @memberof LoginReq
     * @static
     * @param {LoginReq} message LoginReq
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
     * @memberof LoginReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LoginReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return LoginReq;
})();

$root.LoginRsp = (function() {

    /**
     * Properties of a LoginRsp.
     * @exports ILoginRsp
     * @interface ILoginRsp
     * @property {number|null} [errCode] LoginRsp errCode
     * @property {string|null} [errMsg] LoginRsp errMsg
     * @property {number|Long|null} [uid] LoginRsp uid
     * @property {number|null} [sex] LoginRsp sex
     * @property {number|null} [level] LoginRsp level
     * @property {number|Long|null} [money] LoginRsp money
     * @property {number|null} [vip] LoginRsp vip
     * @property {IGameData|null} [gameData] LoginRsp gameData
     * @property {Array.<IItem>|null} [items] LoginRsp items
     */

    /**
     * Constructs a new LoginRsp.
     * @exports LoginRsp
     * @classdesc Represents a LoginRsp.
     * @implements ILoginRsp
     * @constructor
     * @param {ILoginRsp=} [properties] Properties to set
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
     * @memberof LoginRsp
     * @instance
     */
    LoginRsp.prototype.errCode = 0;

    /**
     * LoginRsp errMsg.
     * @member {string} errMsg
     * @memberof LoginRsp
     * @instance
     */
    LoginRsp.prototype.errMsg = "";

    /**
     * LoginRsp uid.
     * @member {number|Long} uid
     * @memberof LoginRsp
     * @instance
     */
    LoginRsp.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * LoginRsp sex.
     * @member {number} sex
     * @memberof LoginRsp
     * @instance
     */
    LoginRsp.prototype.sex = 0;

    /**
     * LoginRsp level.
     * @member {number} level
     * @memberof LoginRsp
     * @instance
     */
    LoginRsp.prototype.level = 0;

    /**
     * LoginRsp money.
     * @member {number|Long} money
     * @memberof LoginRsp
     * @instance
     */
    LoginRsp.prototype.money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * LoginRsp vip.
     * @member {number} vip
     * @memberof LoginRsp
     * @instance
     */
    LoginRsp.prototype.vip = 0;

    /**
     * LoginRsp gameData.
     * @member {IGameData|null|undefined} gameData
     * @memberof LoginRsp
     * @instance
     */
    LoginRsp.prototype.gameData = null;

    /**
     * LoginRsp items.
     * @member {Array.<IItem>} items
     * @memberof LoginRsp
     * @instance
     */
    LoginRsp.prototype.items = $util.emptyArray;

    /**
     * Creates a new LoginRsp instance using the specified properties.
     * @function create
     * @memberof LoginRsp
     * @static
     * @param {ILoginRsp=} [properties] Properties to set
     * @returns {LoginRsp} LoginRsp instance
     */
    LoginRsp.create = function create(properties) {
        return new LoginRsp(properties);
    };

    /**
     * Encodes the specified LoginRsp message. Does not implicitly {@link LoginRsp.verify|verify} messages.
     * @function encode
     * @memberof LoginRsp
     * @static
     * @param {ILoginRsp} message LoginRsp message or plain object to encode
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
            $root.GameData.encode(message.gameData, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.items != null && message.items.length)
            for (var i = 0; i < message.items.length; ++i)
                $root.Item.encode(message.items[i], writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified LoginRsp message, length delimited. Does not implicitly {@link LoginRsp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LoginRsp
     * @static
     * @param {ILoginRsp} message LoginRsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginRsp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LoginRsp message from the specified reader or buffer.
     * @function decode
     * @memberof LoginRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LoginRsp} LoginRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoginRsp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginRsp();
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
                message.gameData = $root.GameData.decode(reader, reader.uint32());
                break;
            case 15:
                if (!(message.items && message.items.length))
                    message.items = [];
                message.items.push($root.Item.decode(reader, reader.uint32()));
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
     * @memberof LoginRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LoginRsp} LoginRsp
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
     * @memberof LoginRsp
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
            var error = $root.GameData.verify(message.gameData);
            if (error)
                return "gameData." + error;
        }
        if (message.items != null && message.hasOwnProperty("items")) {
            if (!Array.isArray(message.items))
                return "items: array expected";
            for (var i = 0; i < message.items.length; ++i) {
                var error = $root.Item.verify(message.items[i]);
                if (error)
                    return "items." + error;
            }
        }
        return null;
    };

    /**
     * Creates a LoginRsp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LoginRsp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LoginRsp} LoginRsp
     */
    LoginRsp.fromObject = function fromObject(object) {
        if (object instanceof $root.LoginRsp)
            return object;
        var message = new $root.LoginRsp();
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
                throw TypeError(".LoginRsp.gameData: object expected");
            message.gameData = $root.GameData.fromObject(object.gameData);
        }
        if (object.items) {
            if (!Array.isArray(object.items))
                throw TypeError(".LoginRsp.items: array expected");
            message.items = [];
            for (var i = 0; i < object.items.length; ++i) {
                if (typeof object.items[i] !== "object")
                    throw TypeError(".LoginRsp.items: object expected");
                message.items[i] = $root.Item.fromObject(object.items[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a LoginRsp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LoginRsp
     * @static
     * @param {LoginRsp} message LoginRsp
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
            object.gameData = $root.GameData.toObject(message.gameData, options);
        if (message.items && message.items.length) {
            object.items = [];
            for (var j = 0; j < message.items.length; ++j)
                object.items[j] = $root.Item.toObject(message.items[j], options);
        }
        return object;
    };

    /**
     * Converts this LoginRsp to JSON.
     * @function toJSON
     * @memberof LoginRsp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LoginRsp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return LoginRsp;
})();

$root.Item = (function() {

    /**
     * Properties of an Item.
     * @exports IItem
     * @interface IItem
     * @property {number|null} [id] Item id
     * @property {number|Long|null} [num] Item num
     * @property {number|null} [expireAt] Item expireAt
     */

    /**
     * Constructs a new Item.
     * @exports Item
     * @classdesc Represents an Item.
     * @implements IItem
     * @constructor
     * @param {IItem=} [properties] Properties to set
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
     * @memberof Item
     * @instance
     */
    Item.prototype.id = 0;

    /**
     * Item num.
     * @member {number|Long} num
     * @memberof Item
     * @instance
     */
    Item.prototype.num = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Item expireAt.
     * @member {number} expireAt
     * @memberof Item
     * @instance
     */
    Item.prototype.expireAt = 0;

    /**
     * Creates a new Item instance using the specified properties.
     * @function create
     * @memberof Item
     * @static
     * @param {IItem=} [properties] Properties to set
     * @returns {Item} Item instance
     */
    Item.create = function create(properties) {
        return new Item(properties);
    };

    /**
     * Encodes the specified Item message. Does not implicitly {@link Item.verify|verify} messages.
     * @function encode
     * @memberof Item
     * @static
     * @param {IItem} message Item message or plain object to encode
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
     * Encodes the specified Item message, length delimited. Does not implicitly {@link Item.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Item
     * @static
     * @param {IItem} message Item message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Item.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Item message from the specified reader or buffer.
     * @function decode
     * @memberof Item
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Item} Item
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Item.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Item();
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
     * @memberof Item
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Item} Item
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
     * @memberof Item
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
     * @memberof Item
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Item} Item
     */
    Item.fromObject = function fromObject(object) {
        if (object instanceof $root.Item)
            return object;
        var message = new $root.Item();
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
     * @memberof Item
     * @static
     * @param {Item} message Item
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
     * @memberof Item
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Item.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Item;
})();

$root.ItemOpt = (function() {

    /**
     * Properties of an ItemOpt.
     * @exports IItemOpt
     * @interface IItemOpt
     * @property {number|null} [id] ItemOpt id
     * @property {number|Long|null} [num] ItemOpt num
     * @property {number|null} [expireAt] ItemOpt expireAt
     */

    /**
     * Constructs a new ItemOpt.
     * @exports ItemOpt
     * @classdesc Represents an ItemOpt.
     * @implements IItemOpt
     * @constructor
     * @param {IItemOpt=} [properties] Properties to set
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
     * @memberof ItemOpt
     * @instance
     */
    ItemOpt.prototype.id = 0;

    /**
     * ItemOpt num.
     * @member {number|Long} num
     * @memberof ItemOpt
     * @instance
     */
    ItemOpt.prototype.num = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ItemOpt expireAt.
     * @member {number} expireAt
     * @memberof ItemOpt
     * @instance
     */
    ItemOpt.prototype.expireAt = 0;

    /**
     * Creates a new ItemOpt instance using the specified properties.
     * @function create
     * @memberof ItemOpt
     * @static
     * @param {IItemOpt=} [properties] Properties to set
     * @returns {ItemOpt} ItemOpt instance
     */
    ItemOpt.create = function create(properties) {
        return new ItemOpt(properties);
    };

    /**
     * Encodes the specified ItemOpt message. Does not implicitly {@link ItemOpt.verify|verify} messages.
     * @function encode
     * @memberof ItemOpt
     * @static
     * @param {IItemOpt} message ItemOpt message or plain object to encode
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
     * Encodes the specified ItemOpt message, length delimited. Does not implicitly {@link ItemOpt.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ItemOpt
     * @static
     * @param {IItemOpt} message ItemOpt message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ItemOpt.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ItemOpt message from the specified reader or buffer.
     * @function decode
     * @memberof ItemOpt
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ItemOpt} ItemOpt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ItemOpt.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ItemOpt();
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
     * @memberof ItemOpt
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ItemOpt} ItemOpt
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
     * @memberof ItemOpt
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
     * @memberof ItemOpt
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ItemOpt} ItemOpt
     */
    ItemOpt.fromObject = function fromObject(object) {
        if (object instanceof $root.ItemOpt)
            return object;
        var message = new $root.ItemOpt();
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
     * @memberof ItemOpt
     * @static
     * @param {ItemOpt} message ItemOpt
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
     * @memberof ItemOpt
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ItemOpt.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ItemOpt;
})();

$root.ItemUpdate = (function() {

    /**
     * Properties of an ItemUpdate.
     * @exports IItemUpdate
     * @interface IItemUpdate
     * @property {number|null} [id] ItemUpdate id
     * @property {number|Long|null} [change] ItemUpdate change
     * @property {number|Long|null} [num] ItemUpdate num
     * @property {number|null} [expireAt] ItemUpdate expireAt
     */

    /**
     * Constructs a new ItemUpdate.
     * @exports ItemUpdate
     * @classdesc Represents an ItemUpdate.
     * @implements IItemUpdate
     * @constructor
     * @param {IItemUpdate=} [properties] Properties to set
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
     * @memberof ItemUpdate
     * @instance
     */
    ItemUpdate.prototype.id = 0;

    /**
     * ItemUpdate change.
     * @member {number|Long} change
     * @memberof ItemUpdate
     * @instance
     */
    ItemUpdate.prototype.change = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ItemUpdate num.
     * @member {number|Long} num
     * @memberof ItemUpdate
     * @instance
     */
    ItemUpdate.prototype.num = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ItemUpdate expireAt.
     * @member {number} expireAt
     * @memberof ItemUpdate
     * @instance
     */
    ItemUpdate.prototype.expireAt = 0;

    /**
     * Creates a new ItemUpdate instance using the specified properties.
     * @function create
     * @memberof ItemUpdate
     * @static
     * @param {IItemUpdate=} [properties] Properties to set
     * @returns {ItemUpdate} ItemUpdate instance
     */
    ItemUpdate.create = function create(properties) {
        return new ItemUpdate(properties);
    };

    /**
     * Encodes the specified ItemUpdate message. Does not implicitly {@link ItemUpdate.verify|verify} messages.
     * @function encode
     * @memberof ItemUpdate
     * @static
     * @param {IItemUpdate} message ItemUpdate message or plain object to encode
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
     * Encodes the specified ItemUpdate message, length delimited. Does not implicitly {@link ItemUpdate.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ItemUpdate
     * @static
     * @param {IItemUpdate} message ItemUpdate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ItemUpdate.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ItemUpdate message from the specified reader or buffer.
     * @function decode
     * @memberof ItemUpdate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ItemUpdate} ItemUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ItemUpdate.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ItemUpdate();
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
     * @memberof ItemUpdate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ItemUpdate} ItemUpdate
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
     * @memberof ItemUpdate
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
     * @memberof ItemUpdate
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ItemUpdate} ItemUpdate
     */
    ItemUpdate.fromObject = function fromObject(object) {
        if (object instanceof $root.ItemUpdate)
            return object;
        var message = new $root.ItemUpdate();
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
     * @memberof ItemUpdate
     * @static
     * @param {ItemUpdate} message ItemUpdate
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
     * @memberof ItemUpdate
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ItemUpdate.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ItemUpdate;
})();

$root.UpdateItemNot = (function() {

    /**
     * Properties of an UpdateItemNot.
     * @exports IUpdateItemNot
     * @interface IUpdateItemNot
     * @property {string|null} [cliParam] UpdateItemNot cliParam
     * @property {Array.<IItemUpdate>|null} [update] UpdateItemNot update
     */

    /**
     * Constructs a new UpdateItemNot.
     * @exports UpdateItemNot
     * @classdesc Represents an UpdateItemNot.
     * @implements IUpdateItemNot
     * @constructor
     * @param {IUpdateItemNot=} [properties] Properties to set
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
     * @memberof UpdateItemNot
     * @instance
     */
    UpdateItemNot.prototype.cliParam = "";

    /**
     * UpdateItemNot update.
     * @member {Array.<IItemUpdate>} update
     * @memberof UpdateItemNot
     * @instance
     */
    UpdateItemNot.prototype.update = $util.emptyArray;

    /**
     * Creates a new UpdateItemNot instance using the specified properties.
     * @function create
     * @memberof UpdateItemNot
     * @static
     * @param {IUpdateItemNot=} [properties] Properties to set
     * @returns {UpdateItemNot} UpdateItemNot instance
     */
    UpdateItemNot.create = function create(properties) {
        return new UpdateItemNot(properties);
    };

    /**
     * Encodes the specified UpdateItemNot message. Does not implicitly {@link UpdateItemNot.verify|verify} messages.
     * @function encode
     * @memberof UpdateItemNot
     * @static
     * @param {IUpdateItemNot} message UpdateItemNot message or plain object to encode
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
                $root.ItemUpdate.encode(message.update[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified UpdateItemNot message, length delimited. Does not implicitly {@link UpdateItemNot.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UpdateItemNot
     * @static
     * @param {IUpdateItemNot} message UpdateItemNot message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UpdateItemNot.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an UpdateItemNot message from the specified reader or buffer.
     * @function decode
     * @memberof UpdateItemNot
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UpdateItemNot} UpdateItemNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UpdateItemNot.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UpdateItemNot();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cliParam = reader.string();
                break;
            case 10:
                if (!(message.update && message.update.length))
                    message.update = [];
                message.update.push($root.ItemUpdate.decode(reader, reader.uint32()));
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
     * @memberof UpdateItemNot
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UpdateItemNot} UpdateItemNot
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
     * @memberof UpdateItemNot
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
                var error = $root.ItemUpdate.verify(message.update[i]);
                if (error)
                    return "update." + error;
            }
        }
        return null;
    };

    /**
     * Creates an UpdateItemNot message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UpdateItemNot
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UpdateItemNot} UpdateItemNot
     */
    UpdateItemNot.fromObject = function fromObject(object) {
        if (object instanceof $root.UpdateItemNot)
            return object;
        var message = new $root.UpdateItemNot();
        if (object.cliParam != null)
            message.cliParam = String(object.cliParam);
        if (object.update) {
            if (!Array.isArray(object.update))
                throw TypeError(".UpdateItemNot.update: array expected");
            message.update = [];
            for (var i = 0; i < object.update.length; ++i) {
                if (typeof object.update[i] !== "object")
                    throw TypeError(".UpdateItemNot.update: object expected");
                message.update[i] = $root.ItemUpdate.fromObject(object.update[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from an UpdateItemNot message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UpdateItemNot
     * @static
     * @param {UpdateItemNot} message UpdateItemNot
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
                object.update[j] = $root.ItemUpdate.toObject(message.update[j], options);
        }
        return object;
    };

    /**
     * Converts this UpdateItemNot to JSON.
     * @function toJSON
     * @memberof UpdateItemNot
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UpdateItemNot.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UpdateItemNot;
})();

$root.GetPlayerInfoReq = (function() {

    /**
     * Properties of a GetPlayerInfoReq.
     * @exports IGetPlayerInfoReq
     * @interface IGetPlayerInfoReq
     * @property {Array.<number|Long>|null} [uidList] GetPlayerInfoReq uidList
     */

    /**
     * Constructs a new GetPlayerInfoReq.
     * @exports GetPlayerInfoReq
     * @classdesc Represents a GetPlayerInfoReq.
     * @implements IGetPlayerInfoReq
     * @constructor
     * @param {IGetPlayerInfoReq=} [properties] Properties to set
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
     * @memberof GetPlayerInfoReq
     * @instance
     */
    GetPlayerInfoReq.prototype.uidList = $util.emptyArray;

    /**
     * Creates a new GetPlayerInfoReq instance using the specified properties.
     * @function create
     * @memberof GetPlayerInfoReq
     * @static
     * @param {IGetPlayerInfoReq=} [properties] Properties to set
     * @returns {GetPlayerInfoReq} GetPlayerInfoReq instance
     */
    GetPlayerInfoReq.create = function create(properties) {
        return new GetPlayerInfoReq(properties);
    };

    /**
     * Encodes the specified GetPlayerInfoReq message. Does not implicitly {@link GetPlayerInfoReq.verify|verify} messages.
     * @function encode
     * @memberof GetPlayerInfoReq
     * @static
     * @param {IGetPlayerInfoReq} message GetPlayerInfoReq message or plain object to encode
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
     * Encodes the specified GetPlayerInfoReq message, length delimited. Does not implicitly {@link GetPlayerInfoReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetPlayerInfoReq
     * @static
     * @param {IGetPlayerInfoReq} message GetPlayerInfoReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetPlayerInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetPlayerInfoReq message from the specified reader or buffer.
     * @function decode
     * @memberof GetPlayerInfoReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetPlayerInfoReq} GetPlayerInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetPlayerInfoReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetPlayerInfoReq();
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
     * @memberof GetPlayerInfoReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetPlayerInfoReq} GetPlayerInfoReq
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
     * @memberof GetPlayerInfoReq
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
     * @memberof GetPlayerInfoReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetPlayerInfoReq} GetPlayerInfoReq
     */
    GetPlayerInfoReq.fromObject = function fromObject(object) {
        if (object instanceof $root.GetPlayerInfoReq)
            return object;
        var message = new $root.GetPlayerInfoReq();
        if (object.uidList) {
            if (!Array.isArray(object.uidList))
                throw TypeError(".GetPlayerInfoReq.uidList: array expected");
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
     * @memberof GetPlayerInfoReq
     * @static
     * @param {GetPlayerInfoReq} message GetPlayerInfoReq
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
     * @memberof GetPlayerInfoReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetPlayerInfoReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetPlayerInfoReq;
})();

$root.PlayerInfo = (function() {

    /**
     * Properties of a PlayerInfo.
     * @exports IPlayerInfo
     * @interface IPlayerInfo
     * @property {number|Long|null} [uid] PlayerInfo uid
     * @property {number|null} [sex] PlayerInfo sex
     * @property {string|null} [faceUrl] PlayerInfo faceUrl
     * @property {number|Long|null} [money] PlayerInfo money
     */

    /**
     * Constructs a new PlayerInfo.
     * @exports PlayerInfo
     * @classdesc Represents a PlayerInfo.
     * @implements IPlayerInfo
     * @constructor
     * @param {IPlayerInfo=} [properties] Properties to set
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
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * PlayerInfo sex.
     * @member {number} sex
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.sex = 0;

    /**
     * PlayerInfo faceUrl.
     * @member {string} faceUrl
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.faceUrl = "";

    /**
     * PlayerInfo money.
     * @member {number|Long} money
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new PlayerInfo instance using the specified properties.
     * @function create
     * @memberof PlayerInfo
     * @static
     * @param {IPlayerInfo=} [properties] Properties to set
     * @returns {PlayerInfo} PlayerInfo instance
     */
    PlayerInfo.create = function create(properties) {
        return new PlayerInfo(properties);
    };

    /**
     * Encodes the specified PlayerInfo message. Does not implicitly {@link PlayerInfo.verify|verify} messages.
     * @function encode
     * @memberof PlayerInfo
     * @static
     * @param {IPlayerInfo} message PlayerInfo message or plain object to encode
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
     * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link PlayerInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PlayerInfo
     * @static
     * @param {IPlayerInfo} message PlayerInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PlayerInfo message from the specified reader or buffer.
     * @function decode
     * @memberof PlayerInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PlayerInfo} PlayerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlayerInfo();
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
     * @memberof PlayerInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PlayerInfo} PlayerInfo
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
     * @memberof PlayerInfo
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
     * @memberof PlayerInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PlayerInfo} PlayerInfo
     */
    PlayerInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.PlayerInfo)
            return object;
        var message = new $root.PlayerInfo();
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
     * @memberof PlayerInfo
     * @static
     * @param {PlayerInfo} message PlayerInfo
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
     * @memberof PlayerInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PlayerInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PlayerInfo;
})();

$root.GetPlayerInfoRsp = (function() {

    /**
     * Properties of a GetPlayerInfoRsp.
     * @exports IGetPlayerInfoRsp
     * @interface IGetPlayerInfoRsp
     * @property {Array.<IPlayerInfo>|null} [infoList] GetPlayerInfoRsp infoList
     */

    /**
     * Constructs a new GetPlayerInfoRsp.
     * @exports GetPlayerInfoRsp
     * @classdesc Represents a GetPlayerInfoRsp.
     * @implements IGetPlayerInfoRsp
     * @constructor
     * @param {IGetPlayerInfoRsp=} [properties] Properties to set
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
     * @member {Array.<IPlayerInfo>} infoList
     * @memberof GetPlayerInfoRsp
     * @instance
     */
    GetPlayerInfoRsp.prototype.infoList = $util.emptyArray;

    /**
     * Creates a new GetPlayerInfoRsp instance using the specified properties.
     * @function create
     * @memberof GetPlayerInfoRsp
     * @static
     * @param {IGetPlayerInfoRsp=} [properties] Properties to set
     * @returns {GetPlayerInfoRsp} GetPlayerInfoRsp instance
     */
    GetPlayerInfoRsp.create = function create(properties) {
        return new GetPlayerInfoRsp(properties);
    };

    /**
     * Encodes the specified GetPlayerInfoRsp message. Does not implicitly {@link GetPlayerInfoRsp.verify|verify} messages.
     * @function encode
     * @memberof GetPlayerInfoRsp
     * @static
     * @param {IGetPlayerInfoRsp} message GetPlayerInfoRsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetPlayerInfoRsp.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.infoList != null && message.infoList.length)
            for (var i = 0; i < message.infoList.length; ++i)
                $root.PlayerInfo.encode(message.infoList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GetPlayerInfoRsp message, length delimited. Does not implicitly {@link GetPlayerInfoRsp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetPlayerInfoRsp
     * @static
     * @param {IGetPlayerInfoRsp} message GetPlayerInfoRsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetPlayerInfoRsp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetPlayerInfoRsp message from the specified reader or buffer.
     * @function decode
     * @memberof GetPlayerInfoRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetPlayerInfoRsp} GetPlayerInfoRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetPlayerInfoRsp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetPlayerInfoRsp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.infoList && message.infoList.length))
                    message.infoList = [];
                message.infoList.push($root.PlayerInfo.decode(reader, reader.uint32()));
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
     * @memberof GetPlayerInfoRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetPlayerInfoRsp} GetPlayerInfoRsp
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
     * @memberof GetPlayerInfoRsp
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
                var error = $root.PlayerInfo.verify(message.infoList[i]);
                if (error)
                    return "infoList." + error;
            }
        }
        return null;
    };

    /**
     * Creates a GetPlayerInfoRsp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetPlayerInfoRsp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetPlayerInfoRsp} GetPlayerInfoRsp
     */
    GetPlayerInfoRsp.fromObject = function fromObject(object) {
        if (object instanceof $root.GetPlayerInfoRsp)
            return object;
        var message = new $root.GetPlayerInfoRsp();
        if (object.infoList) {
            if (!Array.isArray(object.infoList))
                throw TypeError(".GetPlayerInfoRsp.infoList: array expected");
            message.infoList = [];
            for (var i = 0; i < object.infoList.length; ++i) {
                if (typeof object.infoList[i] !== "object")
                    throw TypeError(".GetPlayerInfoRsp.infoList: object expected");
                message.infoList[i] = $root.PlayerInfo.fromObject(object.infoList[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a GetPlayerInfoRsp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetPlayerInfoRsp
     * @static
     * @param {GetPlayerInfoRsp} message GetPlayerInfoRsp
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
                object.infoList[j] = $root.PlayerInfo.toObject(message.infoList[j], options);
        }
        return object;
    };

    /**
     * Converts this GetPlayerInfoRsp to JSON.
     * @function toJSON
     * @memberof GetPlayerInfoRsp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetPlayerInfoRsp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetPlayerInfoRsp;
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
