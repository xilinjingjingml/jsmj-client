/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.dzmjGame || ($protobuf.roots.dzmjGame = {});

$root.Dzmj = (function () {

    /**
     * Constructs a new Dzmj service.
     * @exports Dzmj
     * @classdesc Represents a Dzmj
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function Dzmj(rpcImpl, requestDelimited, responseDelimited) {
        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
    }

    (Dzmj.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Dzmj;

    /**
     * Creates new Dzmj service using the specified rpc implementation.
     * @function create
     * @memberof Dzmj
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {Dzmj} RPC service. Useful where requests and/or responses are streamed.
     */
    Dzmj.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        return new this(rpcImpl, requestDelimited, responseDelimited);
    };

    /**
     * Callback as used by {@link Dzmj#operate}.
     * @memberof Dzmj
     * @typedef OperateCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {Empty} [response] Empty
     */

    /**
     * Calls Operate.
     * @function operate
     * @memberof Dzmj
     * @instance
     * @param {IOperateAck} request OperateAck message or plain object
     * @param {Dzmj.OperateCallback} callback Node-style callback called with the error, if any, and Empty
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Dzmj.prototype.operate = function operate(request, callback) {
        return this.rpcCall(operate, $root.OperateAck, $root.Empty, request, callback);
    }, "name", { value: "Operate" });

    /**
     * Calls Operate.
     * @function operate
     * @memberof Dzmj
     * @instance
     * @param {IOperateAck} request OperateAck message or plain object
     * @returns {Promise<Empty>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link Dzmj#auto}.
     * @memberof Dzmj
     * @typedef AutoCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {Empty} [response] Empty
     */

    /**
     * Calls Auto.
     * @function auto
     * @memberof Dzmj
     * @instance
     * @param {IAutoReq} request AutoReq message or plain object
     * @param {Dzmj.AutoCallback} callback Node-style callback called with the error, if any, and Empty
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Dzmj.prototype.auto = function auto(request, callback) {
        return this.rpcCall(auto, $root.AutoReq, $root.Empty, request, callback);
    }, "name", { value: "Auto" });

    /**
     * Calls Auto.
     * @function auto
     * @memberof Dzmj
     * @instance
     * @param {IAutoReq} request AutoReq message or plain object
     * @returns {Promise<Empty>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link Dzmj#completeData}.
     * @memberof Dzmj
     * @typedef CompleteDataCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {CompleteDataNot} [response] CompleteDataNot
     */

    /**
     * Calls CompleteData.
     * @function completeData
     * @memberof Dzmj
     * @instance
     * @param {ICompleteReq} request CompleteReq message or plain object
     * @param {Dzmj.CompleteDataCallback} callback Node-style callback called with the error, if any, and CompleteDataNot
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Dzmj.prototype.completeData = function completeData(request, callback) {
        return this.rpcCall(completeData, $root.CompleteReq, $root.CompleteDataNot, request, callback);
    }, "name", { value: "CompleteData" });

    /**
     * Calls CompleteData.
     * @function completeData
     * @memberof Dzmj
     * @instance
     * @param {ICompleteReq} request CompleteReq message or plain object
     * @returns {Promise<CompleteDataNot>} Promise
     * @variation 2
     */

    return Dzmj;
})();

$root.Empty = (function () {

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

$root.UserItem = (function () {

    /**
     * Properties of a UserItem.
     * @exports IUserItem
     * @interface IUserItem
     * @property {number|Long|null} [uid] UserItem uid
     * @property {string|null} [nickname] UserItem nickname
     * @property {number|Long|null} [score] UserItem score
     */

    /**
     * Constructs a new UserItem.
     * @exports UserItem
     * @classdesc Represents a UserItem.
     * @implements IUserItem
     * @constructor
     * @param {IUserItem=} [properties] Properties to set
     */
    function UserItem(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserItem uid.
     * @member {number|Long} uid
     * @memberof UserItem
     * @instance
     */
    UserItem.prototype.uid = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

    /**
     * UserItem nickname.
     * @member {string} nickname
     * @memberof UserItem
     * @instance
     */
    UserItem.prototype.nickname = "";

    /**
     * UserItem score.
     * @member {number|Long} score
     * @memberof UserItem
     * @instance
     */
    UserItem.prototype.score = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

    /**
     * Creates a new UserItem instance using the specified properties.
     * @function create
     * @memberof UserItem
     * @static
     * @param {IUserItem=} [properties] Properties to set
     * @returns {UserItem} UserItem instance
     */
    UserItem.create = function create(properties) {
        return new UserItem(properties);
    };

    /**
     * Encodes the specified UserItem message. Does not implicitly {@link UserItem.verify|verify} messages.
     * @function encode
     * @memberof UserItem
     * @static
     * @param {IUserItem} message UserItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserItem.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uid != null && message.hasOwnProperty("uid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
        if (message.nickname != null && message.hasOwnProperty("nickname"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
        if (message.score != null && message.hasOwnProperty("score"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.score);
        return writer;
    };

    /**
     * Encodes the specified UserItem message, length delimited. Does not implicitly {@link UserItem.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserItem
     * @static
     * @param {IUserItem} message UserItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserItem.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserItem message from the specified reader or buffer.
     * @function decode
     * @memberof UserItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserItem} UserItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserItem.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserItem();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int64();
                    break;
                case 2:
                    message.nickname = reader.string();
                    break;
                case 3:
                    message.score = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };

    /**
     * Decodes a UserItem message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserItem} UserItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserItem.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserItem message.
     * @function verify
     * @memberof UserItem
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserItem.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                return "uid: integer|Long expected";
        if (message.nickname != null && message.hasOwnProperty("nickname"))
            if (!$util.isString(message.nickname))
                return "nickname: string expected";
        if (message.score != null && message.hasOwnProperty("score"))
            if (!$util.isInteger(message.score) && !(message.score && $util.isInteger(message.score.low) && $util.isInteger(message.score.high)))
                return "score: integer|Long expected";
        return null;
    };

    /**
     * Creates a UserItem message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserItem
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserItem} UserItem
     */
    UserItem.fromObject = function fromObject(object) {
        if (object instanceof $root.UserItem)
            return object;
        var message = new $root.UserItem();
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
        if (object.score != null)
            if ($util.Long)
                (message.score = $util.Long.fromValue(object.score)).unsigned = false;
            else if (typeof object.score === "string")
                message.score = parseInt(object.score, 10);
            else if (typeof object.score === "number")
                message.score = object.score;
            else if (typeof object.score === "object")
                message.score = new $util.LongBits(object.score.low >>> 0, object.score.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a UserItem message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserItem
     * @static
     * @param {UserItem} message UserItem
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserItem.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.uid = options.longs === String ? "0" : 0;
            object.nickname = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.score = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.score = options.longs === String ? "0" : 0;
        }
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (typeof message.uid === "number")
                object.uid = options.longs === String ? String(message.uid) : message.uid;
            else
                object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
        if (message.nickname != null && message.hasOwnProperty("nickname"))
            object.nickname = message.nickname;
        if (message.score != null && message.hasOwnProperty("score"))
            if (typeof message.score === "number")
                object.score = options.longs === String ? String(message.score) : message.score;
            else
                object.score = options.longs === String ? $util.Long.prototype.toString.call(message.score) : options.longs === Number ? new $util.LongBits(message.score.low >>> 0, message.score.high >>> 0).toNumber() : message.score;
        return object;
    };

    /**
     * Converts this UserItem to JSON.
     * @function toJSON
     * @memberof UserItem
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserItem.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserItem;
})();

$root.EnterNotiItem = (function () {

    /**
     * Properties of an EnterNotiItem.
     * @exports IEnterNotiItem
     * @interface IEnterNotiItem
     * @property {number|null} [chairId] EnterNotiItem chairId
     * @property {number|null} [ready] EnterNotiItem ready
     * @property {IUserItem|null} [data] EnterNotiItem data
     */

    /**
     * Constructs a new EnterNotiItem.
     * @exports EnterNotiItem
     * @classdesc Represents an EnterNotiItem.
     * @implements IEnterNotiItem
     * @constructor
     * @param {IEnterNotiItem=} [properties] Properties to set
     */
    function EnterNotiItem(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EnterNotiItem chairId.
     * @member {number} chairId
     * @memberof EnterNotiItem
     * @instance
     */
    EnterNotiItem.prototype.chairId = 0;

    /**
     * EnterNotiItem ready.
     * @member {number} ready
     * @memberof EnterNotiItem
     * @instance
     */
    EnterNotiItem.prototype.ready = 0;

    /**
     * EnterNotiItem data.
     * @member {IUserItem|null|undefined} data
     * @memberof EnterNotiItem
     * @instance
     */
    EnterNotiItem.prototype.data = null;

    /**
     * Creates a new EnterNotiItem instance using the specified properties.
     * @function create
     * @memberof EnterNotiItem
     * @static
     * @param {IEnterNotiItem=} [properties] Properties to set
     * @returns {EnterNotiItem} EnterNotiItem instance
     */
    EnterNotiItem.create = function create(properties) {
        return new EnterNotiItem(properties);
    };

    /**
     * Encodes the specified EnterNotiItem message. Does not implicitly {@link EnterNotiItem.verify|verify} messages.
     * @function encode
     * @memberof EnterNotiItem
     * @static
     * @param {IEnterNotiItem} message EnterNotiItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EnterNotiItem.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.chairId != null && message.hasOwnProperty("chairId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chairId);
        if (message.ready != null && message.hasOwnProperty("ready"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ready);
        if (message.data != null && message.hasOwnProperty("data"))
            $root.UserItem.encode(message.data, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EnterNotiItem message, length delimited. Does not implicitly {@link EnterNotiItem.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EnterNotiItem
     * @static
     * @param {IEnterNotiItem} message EnterNotiItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EnterNotiItem.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EnterNotiItem message from the specified reader or buffer.
     * @function decode
     * @memberof EnterNotiItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EnterNotiItem} EnterNotiItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EnterNotiItem.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EnterNotiItem();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chairId = reader.int32();
                    break;
                case 2:
                    message.ready = reader.int32();
                    break;
                case 3:
                    message.data = $root.UserItem.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };

    /**
     * Decodes an EnterNotiItem message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EnterNotiItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EnterNotiItem} EnterNotiItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EnterNotiItem.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EnterNotiItem message.
     * @function verify
     * @memberof EnterNotiItem
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EnterNotiItem.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.chairId != null && message.hasOwnProperty("chairId"))
            if (!$util.isInteger(message.chairId))
                return "chairId: integer expected";
        if (message.ready != null && message.hasOwnProperty("ready"))
            if (!$util.isInteger(message.ready))
                return "ready: integer expected";
        if (message.data != null && message.hasOwnProperty("data")) {
            var error = $root.UserItem.verify(message.data);
            if (error)
                return "data." + error;
        }
        return null;
    };

    /**
     * Creates an EnterNotiItem message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EnterNotiItem
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EnterNotiItem} EnterNotiItem
     */
    EnterNotiItem.fromObject = function fromObject(object) {
        if (object instanceof $root.EnterNotiItem)
            return object;
        var message = new $root.EnterNotiItem();
        if (object.chairId != null)
            message.chairId = object.chairId | 0;
        if (object.ready != null)
            message.ready = object.ready | 0;
        if (object.data != null) {
            if (typeof object.data !== "object")
                throw TypeError(".EnterNotiItem.data: object expected");
            message.data = $root.UserItem.fromObject(object.data);
        }
        return message;
    };

    /**
     * Creates a plain object from an EnterNotiItem message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EnterNotiItem
     * @static
     * @param {EnterNotiItem} message EnterNotiItem
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EnterNotiItem.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.chairId = 0;
            object.ready = 0;
            object.data = null;
        }
        if (message.chairId != null && message.hasOwnProperty("chairId"))
            object.chairId = message.chairId;
        if (message.ready != null && message.hasOwnProperty("ready"))
            object.ready = message.ready;
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = $root.UserItem.toObject(message.data, options);
        return object;
    };

    /**
     * Converts this EnterNotiItem to JSON.
     * @function toJSON
     * @memberof EnterNotiItem
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EnterNotiItem.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EnterNotiItem;
})();

$root.EnterNoti = (function () {

    /**
     * Properties of an EnterNoti.
     * @exports IEnterNoti
     * @interface IEnterNoti
     * @property {IEnterNotiItem|null} [item] EnterNoti item
     */

    /**
     * Constructs a new EnterNoti.
     * @exports EnterNoti
     * @classdesc Represents an EnterNoti.
     * @implements IEnterNoti
     * @constructor
     * @param {IEnterNoti=} [properties] Properties to set
     */
    function EnterNoti(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EnterNoti item.
     * @member {IEnterNotiItem|null|undefined} item
     * @memberof EnterNoti
     * @instance
     */
    EnterNoti.prototype.item = null;

    /**
     * Creates a new EnterNoti instance using the specified properties.
     * @function create
     * @memberof EnterNoti
     * @static
     * @param {IEnterNoti=} [properties] Properties to set
     * @returns {EnterNoti} EnterNoti instance
     */
    EnterNoti.create = function create(properties) {
        return new EnterNoti(properties);
    };

    /**
     * Encodes the specified EnterNoti message. Does not implicitly {@link EnterNoti.verify|verify} messages.
     * @function encode
     * @memberof EnterNoti
     * @static
     * @param {IEnterNoti} message EnterNoti message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EnterNoti.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.item != null && message.hasOwnProperty("item"))
            $root.EnterNotiItem.encode(message.item, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EnterNoti message, length delimited. Does not implicitly {@link EnterNoti.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EnterNoti
     * @static
     * @param {IEnterNoti} message EnterNoti message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EnterNoti.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EnterNoti message from the specified reader or buffer.
     * @function decode
     * @memberof EnterNoti
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EnterNoti} EnterNoti
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EnterNoti.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EnterNoti();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.item = $root.EnterNotiItem.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };

    /**
     * Decodes an EnterNoti message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EnterNoti
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EnterNoti} EnterNoti
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EnterNoti.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EnterNoti message.
     * @function verify
     * @memberof EnterNoti
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EnterNoti.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.item != null && message.hasOwnProperty("item")) {
            var error = $root.EnterNotiItem.verify(message.item);
            if (error)
                return "item." + error;
        }
        return null;
    };

    /**
     * Creates an EnterNoti message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EnterNoti
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EnterNoti} EnterNoti
     */
    EnterNoti.fromObject = function fromObject(object) {
        if (object instanceof $root.EnterNoti)
            return object;
        var message = new $root.EnterNoti();
        if (object.item != null) {
            if (typeof object.item !== "object")
                throw TypeError(".EnterNoti.item: object expected");
            message.item = $root.EnterNotiItem.fromObject(object.item);
        }
        return message;
    };

    /**
     * Creates a plain object from an EnterNoti message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EnterNoti
     * @static
     * @param {EnterNoti} message EnterNoti
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EnterNoti.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.item = null;
        if (message.item != null && message.hasOwnProperty("item"))
            object.item = $root.EnterNotiItem.toObject(message.item, options);
        return object;
    };

    /**
     * Converts this EnterNoti to JSON.
     * @function toJSON
     * @memberof EnterNoti
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EnterNoti.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EnterNoti;
})();

$root.EnterAck = (function () {

    /**
     * Properties of an EnterAck.
     * @exports IEnterAck
     * @interface IEnterAck
     * @property {number|null} [ret] EnterAck ret
     * @property {Array.<IEnterNotiItem>|null} [items] EnterAck items
     */

    /**
     * Constructs a new EnterAck.
     * @exports EnterAck
     * @classdesc Represents an EnterAck.
     * @implements IEnterAck
     * @constructor
     * @param {IEnterAck=} [properties] Properties to set
     */
    function EnterAck(properties) {
        this.items = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EnterAck ret.
     * @member {number} ret
     * @memberof EnterAck
     * @instance
     */
    EnterAck.prototype.ret = 0;

    /**
     * EnterAck items.
     * @member {Array.<IEnterNotiItem>} items
     * @memberof EnterAck
     * @instance
     */
    EnterAck.prototype.items = $util.emptyArray;

    /**
     * Creates a new EnterAck instance using the specified properties.
     * @function create
     * @memberof EnterAck
     * @static
     * @param {IEnterAck=} [properties] Properties to set
     * @returns {EnterAck} EnterAck instance
     */
    EnterAck.create = function create(properties) {
        return new EnterAck(properties);
    };

    /**
     * Encodes the specified EnterAck message. Does not implicitly {@link EnterAck.verify|verify} messages.
     * @function encode
     * @memberof EnterAck
     * @static
     * @param {IEnterAck} message EnterAck message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EnterAck.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ret != null && message.hasOwnProperty("ret"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ret);
        if (message.items != null && message.items.length)
            for (var i = 0; i < message.items.length; ++i)
                $root.EnterNotiItem.encode(message.items[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EnterAck message, length delimited. Does not implicitly {@link EnterAck.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EnterAck
     * @static
     * @param {IEnterAck} message EnterAck message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EnterAck.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EnterAck message from the specified reader or buffer.
     * @function decode
     * @memberof EnterAck
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EnterAck} EnterAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EnterAck.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EnterAck();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ret = reader.int32();
                    break;
                case 2:
                    if (!(message.items && message.items.length))
                        message.items = [];
                    message.items.push($root.EnterNotiItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };

    /**
     * Decodes an EnterAck message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EnterAck
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EnterAck} EnterAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EnterAck.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EnterAck message.
     * @function verify
     * @memberof EnterAck
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EnterAck.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ret != null && message.hasOwnProperty("ret"))
            if (!$util.isInteger(message.ret))
                return "ret: integer expected";
        if (message.items != null && message.hasOwnProperty("items")) {
            if (!Array.isArray(message.items))
                return "items: array expected";
            for (var i = 0; i < message.items.length; ++i) {
                var error = $root.EnterNotiItem.verify(message.items[i]);
                if (error)
                    return "items." + error;
            }
        }
        return null;
    };

    /**
     * Creates an EnterAck message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EnterAck
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EnterAck} EnterAck
     */
    EnterAck.fromObject = function fromObject(object) {
        if (object instanceof $root.EnterAck)
            return object;
        var message = new $root.EnterAck();
        if (object.ret != null)
            message.ret = object.ret | 0;
        if (object.items) {
            if (!Array.isArray(object.items))
                throw TypeError(".EnterAck.items: array expected");
            message.items = [];
            for (var i = 0; i < object.items.length; ++i) {
                if (typeof object.items[i] !== "object")
                    throw TypeError(".EnterAck.items: object expected");
                message.items[i] = $root.EnterNotiItem.fromObject(object.items[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from an EnterAck message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EnterAck
     * @static
     * @param {EnterAck} message EnterAck
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EnterAck.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.items = [];
        if (options.defaults)
            object.ret = 0;
        if (message.ret != null && message.hasOwnProperty("ret"))
            object.ret = message.ret;
        if (message.items && message.items.length) {
            object.items = [];
            for (var j = 0; j < message.items.length; ++j)
                object.items[j] = $root.EnterNotiItem.toObject(message.items[j], options);
        }
        return object;
    };

    /**
     * Converts this EnterAck to JSON.
     * @function toJSON
     * @memberof EnterAck
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EnterAck.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EnterAck;
})();

$root.CountdownNot = (function () {

    /**
     * Properties of a CountdownNot.
     * @exports ICountdownNot
     * @interface ICountdownNot
     * @property {number|null} [chairID] CountdownNot chairID
     * @property {number|null} [seconds] CountdownNot seconds
     */

    /**
     * Constructs a new CountdownNot.
     * @exports CountdownNot
     * @classdesc Represents a CountdownNot.
     * @implements ICountdownNot
     * @constructor
     * @param {ICountdownNot=} [properties] Properties to set
     */
    function CountdownNot(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CountdownNot chairID.
     * @member {number} chairID
     * @memberof CountdownNot
     * @instance
     */
    CountdownNot.prototype.chairID = 0;

    /**
     * CountdownNot seconds.
     * @member {number} seconds
     * @memberof CountdownNot
     * @instance
     */
    CountdownNot.prototype.seconds = 0;

    /**
     * Creates a new CountdownNot instance using the specified properties.
     * @function create
     * @memberof CountdownNot
     * @static
     * @param {ICountdownNot=} [properties] Properties to set
     * @returns {CountdownNot} CountdownNot instance
     */
    CountdownNot.create = function create(properties) {
        return new CountdownNot(properties);
    };

    /**
     * Encodes the specified CountdownNot message. Does not implicitly {@link CountdownNot.verify|verify} messages.
     * @function encode
     * @memberof CountdownNot
     * @static
     * @param {ICountdownNot} message CountdownNot message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CountdownNot.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.chairID != null && message.hasOwnProperty("chairID"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chairID);
        if (message.seconds != null && message.hasOwnProperty("seconds"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.seconds);
        return writer;
    };

    /**
     * Encodes the specified CountdownNot message, length delimited. Does not implicitly {@link CountdownNot.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CountdownNot
     * @static
     * @param {ICountdownNot} message CountdownNot message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CountdownNot.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CountdownNot message from the specified reader or buffer.
     * @function decode
     * @memberof CountdownNot
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CountdownNot} CountdownNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CountdownNot.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CountdownNot();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chairID = reader.int32();
                    break;
                case 2:
                    message.seconds = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };

    /**
     * Decodes a CountdownNot message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CountdownNot
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CountdownNot} CountdownNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CountdownNot.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CountdownNot message.
     * @function verify
     * @memberof CountdownNot
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CountdownNot.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.chairID != null && message.hasOwnProperty("chairID"))
            if (!$util.isInteger(message.chairID))
                return "chairID: integer expected";
        if (message.seconds != null && message.hasOwnProperty("seconds"))
            if (!$util.isInteger(message.seconds))
                return "seconds: integer expected";
        return null;
    };

    /**
     * Creates a CountdownNot message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CountdownNot
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CountdownNot} CountdownNot
     */
    CountdownNot.fromObject = function fromObject(object) {
        if (object instanceof $root.CountdownNot)
            return object;
        var message = new $root.CountdownNot();
        if (object.chairID != null)
            message.chairID = object.chairID | 0;
        if (object.seconds != null)
            message.seconds = object.seconds | 0;
        return message;
    };

    /**
     * Creates a plain object from a CountdownNot message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CountdownNot
     * @static
     * @param {CountdownNot} message CountdownNot
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CountdownNot.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.chairID = 0;
            object.seconds = 0;
        }
        if (message.chairID != null && message.hasOwnProperty("chairID"))
            object.chairID = message.chairID;
        if (message.seconds != null && message.hasOwnProperty("seconds"))
            object.seconds = message.seconds;
        return object;
    };

    /**
     * Converts this CountdownNot to JSON.
     * @function toJSON
     * @memberof CountdownNot
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CountdownNot.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CountdownNot;
})();

$root.AutoReq = (function () {

    /**
     * Properties of an AutoReq.
     * @exports IAutoReq
     * @interface IAutoReq
     * @property {number|null} [autoFlag] AutoReq autoFlag
     * @property {number|null} [autoType] AutoReq autoType
     */

    /**
     * Constructs a new AutoReq.
     * @exports AutoReq
     * @classdesc Represents an AutoReq.
     * @implements IAutoReq
     * @constructor
     * @param {IAutoReq=} [properties] Properties to set
     */
    function AutoReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AutoReq autoFlag.
     * @member {number} autoFlag
     * @memberof AutoReq
     * @instance
     */
    AutoReq.prototype.autoFlag = 0;

    /**
     * AutoReq autoType.
     * @member {number} autoType
     * @memberof AutoReq
     * @instance
     */
    AutoReq.prototype.autoType = 0;

    /**
     * Creates a new AutoReq instance using the specified properties.
     * @function create
     * @memberof AutoReq
     * @static
     * @param {IAutoReq=} [properties] Properties to set
     * @returns {AutoReq} AutoReq instance
     */
    AutoReq.create = function create(properties) {
        return new AutoReq(properties);
    };

    /**
     * Encodes the specified AutoReq message. Does not implicitly {@link AutoReq.verify|verify} messages.
     * @function encode
     * @memberof AutoReq
     * @static
     * @param {IAutoReq} message AutoReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AutoReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.autoFlag != null && message.hasOwnProperty("autoFlag"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.autoFlag);
        if (message.autoType != null && message.hasOwnProperty("autoType"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.autoType);
        return writer;
    };

    /**
     * Encodes the specified AutoReq message, length delimited. Does not implicitly {@link AutoReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AutoReq
     * @static
     * @param {IAutoReq} message AutoReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AutoReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AutoReq message from the specified reader or buffer.
     * @function decode
     * @memberof AutoReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AutoReq} AutoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AutoReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AutoReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.autoFlag = reader.int32();
                    break;
                case 2:
                    message.autoType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };

    /**
     * Decodes an AutoReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AutoReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AutoReq} AutoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AutoReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AutoReq message.
     * @function verify
     * @memberof AutoReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AutoReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.autoFlag != null && message.hasOwnProperty("autoFlag"))
            if (!$util.isInteger(message.autoFlag))
                return "autoFlag: integer expected";
        if (message.autoType != null && message.hasOwnProperty("autoType"))
            if (!$util.isInteger(message.autoType))
                return "autoType: integer expected";
        return null;
    };

    /**
     * Creates an AutoReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AutoReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AutoReq} AutoReq
     */
    AutoReq.fromObject = function fromObject(object) {
        if (object instanceof $root.AutoReq)
            return object;
        var message = new $root.AutoReq();
        if (object.autoFlag != null)
            message.autoFlag = object.autoFlag | 0;
        if (object.autoType != null)
            message.autoType = object.autoType | 0;
        return message;
    };

    /**
     * Creates a plain object from an AutoReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AutoReq
     * @static
     * @param {AutoReq} message AutoReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AutoReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.autoFlag = 0;
            object.autoType = 0;
        }
        if (message.autoFlag != null && message.hasOwnProperty("autoFlag"))
            object.autoFlag = message.autoFlag;
        if (message.autoType != null && message.hasOwnProperty("autoType"))
            object.autoType = message.autoType;
        return object;
    };

    /**
     * Converts this AutoReq to JSON.
     * @function toJSON
     * @memberof AutoReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AutoReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AutoReq;
})();

$root.AutoNot = (function () {

    /**
     * Properties of an AutoNot.
     * @exports IAutoNot
     * @interface IAutoNot
     * @property {number|null} [chairID] AutoNot chairID
     * @property {number|null} [autoFlag] AutoNot autoFlag
     * @property {number|null} [autoType] AutoNot autoType
     */

    /**
     * Constructs a new AutoNot.
     * @exports AutoNot
     * @classdesc Represents an AutoNot.
     * @implements IAutoNot
     * @constructor
     * @param {IAutoNot=} [properties] Properties to set
     */
    function AutoNot(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AutoNot chairID.
     * @member {number} chairID
     * @memberof AutoNot
     * @instance
     */
    AutoNot.prototype.chairID = 0;

    /**
     * AutoNot autoFlag.
     * @member {number} autoFlag
     * @memberof AutoNot
     * @instance
     */
    AutoNot.prototype.autoFlag = 0;

    /**
     * AutoNot autoType.
     * @member {number} autoType
     * @memberof AutoNot
     * @instance
     */
    AutoNot.prototype.autoType = 0;

    /**
     * Creates a new AutoNot instance using the specified properties.
     * @function create
     * @memberof AutoNot
     * @static
     * @param {IAutoNot=} [properties] Properties to set
     * @returns {AutoNot} AutoNot instance
     */
    AutoNot.create = function create(properties) {
        return new AutoNot(properties);
    };

    /**
     * Encodes the specified AutoNot message. Does not implicitly {@link AutoNot.verify|verify} messages.
     * @function encode
     * @memberof AutoNot
     * @static
     * @param {IAutoNot} message AutoNot message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AutoNot.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.chairID != null && message.hasOwnProperty("chairID"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chairID);
        if (message.autoFlag != null && message.hasOwnProperty("autoFlag"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.autoFlag);
        if (message.autoType != null && message.hasOwnProperty("autoType"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.autoType);
        return writer;
    };

    /**
     * Encodes the specified AutoNot message, length delimited. Does not implicitly {@link AutoNot.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AutoNot
     * @static
     * @param {IAutoNot} message AutoNot message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AutoNot.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AutoNot message from the specified reader or buffer.
     * @function decode
     * @memberof AutoNot
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AutoNot} AutoNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AutoNot.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AutoNot();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chairID = reader.int32();
                    break;
                case 2:
                    message.autoFlag = reader.int32();
                    break;
                case 3:
                    message.autoType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };

    /**
     * Decodes an AutoNot message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AutoNot
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AutoNot} AutoNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AutoNot.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AutoNot message.
     * @function verify
     * @memberof AutoNot
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AutoNot.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.chairID != null && message.hasOwnProperty("chairID"))
            if (!$util.isInteger(message.chairID))
                return "chairID: integer expected";
        if (message.autoFlag != null && message.hasOwnProperty("autoFlag"))
            if (!$util.isInteger(message.autoFlag))
                return "autoFlag: integer expected";
        if (message.autoType != null && message.hasOwnProperty("autoType"))
            if (!$util.isInteger(message.autoType))
                return "autoType: integer expected";
        return null;
    };

    /**
     * Creates an AutoNot message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AutoNot
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AutoNot} AutoNot
     */
    AutoNot.fromObject = function fromObject(object) {
        if (object instanceof $root.AutoNot)
            return object;
        var message = new $root.AutoNot();
        if (object.chairID != null)
            message.chairID = object.chairID | 0;
        if (object.autoFlag != null)
            message.autoFlag = object.autoFlag | 0;
        if (object.autoType != null)
            message.autoType = object.autoType | 0;
        return message;
    };

    /**
     * Creates a plain object from an AutoNot message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AutoNot
     * @static
     * @param {AutoNot} message AutoNot
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AutoNot.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.chairID = 0;
            object.autoFlag = 0;
            object.autoType = 0;
        }
        if (message.chairID != null && message.hasOwnProperty("chairID"))
            object.chairID = message.chairID;
        if (message.autoFlag != null && message.hasOwnProperty("autoFlag"))
            object.autoFlag = message.autoFlag;
        if (message.autoType != null && message.hasOwnProperty("autoType"))
            object.autoType = message.autoType;
        return object;
    };

    /**
     * Converts this AutoNot to JSON.
     * @function toJSON
     * @memberof AutoNot
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AutoNot.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AutoNot;
})();

$root.BeginGameNot = (function () {

    /**
     * Properties of a BeginGameNot.
     * @exports IBeginGameNot
     * @interface IBeginGameNot
     * @property {number|null} [totalCardsNum] BeginGameNot totalCardsNum
     */

    /**
     * Constructs a new BeginGameNot.
     * @exports BeginGameNot
     * @classdesc Represents a BeginGameNot.
     * @implements IBeginGameNot
     * @constructor
     * @param {IBeginGameNot=} [properties] Properties to set
     */
    function BeginGameNot(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * BeginGameNot totalCardsNum.
     * @member {number} totalCardsNum
     * @memberof BeginGameNot
     * @instance
     */
    BeginGameNot.prototype.totalCardsNum = 0;

    /**
     * Creates a new BeginGameNot instance using the specified properties.
     * @function create
     * @memberof BeginGameNot
     * @static
     * @param {IBeginGameNot=} [properties] Properties to set
     * @returns {BeginGameNot} BeginGameNot instance
     */
    BeginGameNot.create = function create(properties) {
        return new BeginGameNot(properties);
    };

    /**
     * Encodes the specified BeginGameNot message. Does not implicitly {@link BeginGameNot.verify|verify} messages.
     * @function encode
     * @memberof BeginGameNot
     * @static
     * @param {IBeginGameNot} message BeginGameNot message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BeginGameNot.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.totalCardsNum != null && message.hasOwnProperty("totalCardsNum"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.totalCardsNum);
        return writer;
    };

    /**
     * Encodes the specified BeginGameNot message, length delimited. Does not implicitly {@link BeginGameNot.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BeginGameNot
     * @static
     * @param {IBeginGameNot} message BeginGameNot message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BeginGameNot.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BeginGameNot message from the specified reader or buffer.
     * @function decode
     * @memberof BeginGameNot
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BeginGameNot} BeginGameNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BeginGameNot.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BeginGameNot();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalCardsNum = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };

    /**
     * Decodes a BeginGameNot message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BeginGameNot
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BeginGameNot} BeginGameNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BeginGameNot.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BeginGameNot message.
     * @function verify
     * @memberof BeginGameNot
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BeginGameNot.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.totalCardsNum != null && message.hasOwnProperty("totalCardsNum"))
            if (!$util.isInteger(message.totalCardsNum))
                return "totalCardsNum: integer expected";
        return null;
    };

    /**
     * Creates a BeginGameNot message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BeginGameNot
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BeginGameNot} BeginGameNot
     */
    BeginGameNot.fromObject = function fromObject(object) {
        if (object instanceof $root.BeginGameNot)
            return object;
        var message = new $root.BeginGameNot();
        if (object.totalCardsNum != null)
            message.totalCardsNum = object.totalCardsNum | 0;
        return message;
    };

    /**
     * Creates a plain object from a BeginGameNot message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BeginGameNot
     * @static
     * @param {BeginGameNot} message BeginGameNot
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BeginGameNot.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.totalCardsNum = 0;
        if (message.totalCardsNum != null && message.hasOwnProperty("totalCardsNum"))
            object.totalCardsNum = message.totalCardsNum;
        return object;
    };

    /**
     * Converts this BeginGameNot to JSON.
     * @function toJSON
     * @memberof BeginGameNot
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BeginGameNot.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return BeginGameNot;
})();

$root.SetDealerNot = (function () {

    /**
     * Properties of a SetDealerNot.
     * @exports ISetDealerNot
     * @interface ISetDealerNot
     * @property {Array.<number>|null} [dices] SetDealerNot dices
     * @property {number|Long|null} [uid] SetDealerNot uid
     */

    /**
     * Constructs a new SetDealerNot.
     * @exports SetDealerNot
     * @classdesc Represents a SetDealerNot.
     * @implements ISetDealerNot
     * @constructor
     * @param {ISetDealerNot=} [properties] Properties to set
     */
    function SetDealerNot(properties) {
        this.dices = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SetDealerNot dices.
     * @member {Array.<number>} dices
     * @memberof SetDealerNot
     * @instance
     */
    SetDealerNot.prototype.dices = $util.emptyArray;

    /**
     * SetDealerNot uid.
     * @member {number|Long} uid
     * @memberof SetDealerNot
     * @instance
     */
    SetDealerNot.prototype.uid = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

    /**
     * Creates a new SetDealerNot instance using the specified properties.
     * @function create
     * @memberof SetDealerNot
     * @static
     * @param {ISetDealerNot=} [properties] Properties to set
     * @returns {SetDealerNot} SetDealerNot instance
     */
    SetDealerNot.create = function create(properties) {
        return new SetDealerNot(properties);
    };

    /**
     * Encodes the specified SetDealerNot message. Does not implicitly {@link SetDealerNot.verify|verify} messages.
     * @function encode
     * @memberof SetDealerNot
     * @static
     * @param {ISetDealerNot} message SetDealerNot message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetDealerNot.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.dices != null && message.dices.length) {
            writer.uint32(/* id 1, wireType 2 =*/10).fork();
            for (var i = 0; i < message.dices.length; ++i)
                writer.int32(message.dices[i]);
            writer.ldelim();
        }
        if (message.uid != null && message.hasOwnProperty("uid"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.uid);
        return writer;
    };

    /**
     * Encodes the specified SetDealerNot message, length delimited. Does not implicitly {@link SetDealerNot.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SetDealerNot
     * @static
     * @param {ISetDealerNot} message SetDealerNot message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetDealerNot.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SetDealerNot message from the specified reader or buffer.
     * @function decode
     * @memberof SetDealerNot
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SetDealerNot} SetDealerNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetDealerNot.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SetDealerNot();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (!(message.dices && message.dices.length))
                        message.dices = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.dices.push(reader.int32());
                    } else
                        message.dices.push(reader.int32());
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
     * Decodes a SetDealerNot message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SetDealerNot
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SetDealerNot} SetDealerNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetDealerNot.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SetDealerNot message.
     * @function verify
     * @memberof SetDealerNot
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SetDealerNot.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.dices != null && message.hasOwnProperty("dices")) {
            if (!Array.isArray(message.dices))
                return "dices: array expected";
            for (var i = 0; i < message.dices.length; ++i)
                if (!$util.isInteger(message.dices[i]))
                    return "dices: integer[] expected";
        }
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                return "uid: integer|Long expected";
        return null;
    };

    /**
     * Creates a SetDealerNot message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SetDealerNot
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SetDealerNot} SetDealerNot
     */
    SetDealerNot.fromObject = function fromObject(object) {
        if (object instanceof $root.SetDealerNot)
            return object;
        var message = new $root.SetDealerNot();
        if (object.dices) {
            if (!Array.isArray(object.dices))
                throw TypeError(".SetDealerNot.dices: array expected");
            message.dices = [];
            for (var i = 0; i < object.dices.length; ++i)
                message.dices[i] = object.dices[i] | 0;
        }
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
     * Creates a plain object from a SetDealerNot message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SetDealerNot
     * @static
     * @param {SetDealerNot} message SetDealerNot
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SetDealerNot.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.dices = [];
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.uid = options.longs === String ? "0" : 0;
        if (message.dices && message.dices.length) {
            object.dices = [];
            for (var j = 0; j < message.dices.length; ++j)
                object.dices[j] = message.dices[j];
        }
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (typeof message.uid === "number")
                object.uid = options.longs === String ? String(message.uid) : message.uid;
            else
                object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
        return object;
    };

    /**
     * Converts this SetDealerNot to JSON.
     * @function toJSON
     * @memberof SetDealerNot
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SetDealerNot.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SetDealerNot;
})();

$root.HandCardsNot = (function () {

    /**
     * Properties of a HandCardsNot.
     * @exports IHandCardsNot
     * @interface IHandCardsNot
     * @property {number|null} [leftCardsNum] HandCardsNot leftCardsNum
     * @property {Array.<number>|null} [handCards] HandCardsNot handCards
     */

    /**
     * Constructs a new HandCardsNot.
     * @exports HandCardsNot
     * @classdesc Represents a HandCardsNot.
     * @implements IHandCardsNot
     * @constructor
     * @param {IHandCardsNot=} [properties] Properties to set
     */
    function HandCardsNot(properties) {
        this.handCards = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * HandCardsNot leftCardsNum.
     * @member {number} leftCardsNum
     * @memberof HandCardsNot
     * @instance
     */
    HandCardsNot.prototype.leftCardsNum = 0;

    /**
     * HandCardsNot handCards.
     * @member {Array.<number>} handCards
     * @memberof HandCardsNot
     * @instance
     */
    HandCardsNot.prototype.handCards = $util.emptyArray;

    /**
     * Creates a new HandCardsNot instance using the specified properties.
     * @function create
     * @memberof HandCardsNot
     * @static
     * @param {IHandCardsNot=} [properties] Properties to set
     * @returns {HandCardsNot} HandCardsNot instance
     */
    HandCardsNot.create = function create(properties) {
        return new HandCardsNot(properties);
    };

    /**
     * Encodes the specified HandCardsNot message. Does not implicitly {@link HandCardsNot.verify|verify} messages.
     * @function encode
     * @memberof HandCardsNot
     * @static
     * @param {IHandCardsNot} message HandCardsNot message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HandCardsNot.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.leftCardsNum != null && message.hasOwnProperty("leftCardsNum"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.leftCardsNum);
        if (message.handCards != null && message.handCards.length) {
            writer.uint32(/* id 2, wireType 2 =*/18).fork();
            for (var i = 0; i < message.handCards.length; ++i)
                writer.int32(message.handCards[i]);
            writer.ldelim();
        }
        return writer;
    };

    /**
     * Encodes the specified HandCardsNot message, length delimited. Does not implicitly {@link HandCardsNot.verify|verify} messages.
     * @function encodeDelimited
     * @memberof HandCardsNot
     * @static
     * @param {IHandCardsNot} message HandCardsNot message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HandCardsNot.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a HandCardsNot message from the specified reader or buffer.
     * @function decode
     * @memberof HandCardsNot
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {HandCardsNot} HandCardsNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HandCardsNot.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HandCardsNot();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.leftCardsNum = reader.int32();
                    break;
                case 2:
                    if (!(message.handCards && message.handCards.length))
                        message.handCards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.handCards.push(reader.int32());
                    } else
                        message.handCards.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };

    /**
     * Decodes a HandCardsNot message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof HandCardsNot
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {HandCardsNot} HandCardsNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HandCardsNot.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a HandCardsNot message.
     * @function verify
     * @memberof HandCardsNot
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    HandCardsNot.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.leftCardsNum != null && message.hasOwnProperty("leftCardsNum"))
            if (!$util.isInteger(message.leftCardsNum))
                return "leftCardsNum: integer expected";
        if (message.handCards != null && message.hasOwnProperty("handCards")) {
            if (!Array.isArray(message.handCards))
                return "handCards: array expected";
            for (var i = 0; i < message.handCards.length; ++i)
                if (!$util.isInteger(message.handCards[i]))
                    return "handCards: integer[] expected";
        }
        return null;
    };

    /**
     * Creates a HandCardsNot message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof HandCardsNot
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {HandCardsNot} HandCardsNot
     */
    HandCardsNot.fromObject = function fromObject(object) {
        if (object instanceof $root.HandCardsNot)
            return object;
        var message = new $root.HandCardsNot();
        if (object.leftCardsNum != null)
            message.leftCardsNum = object.leftCardsNum | 0;
        if (object.handCards) {
            if (!Array.isArray(object.handCards))
                throw TypeError(".HandCardsNot.handCards: array expected");
            message.handCards = [];
            for (var i = 0; i < object.handCards.length; ++i)
                message.handCards[i] = object.handCards[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a HandCardsNot message. Also converts values to other types if specified.
     * @function toObject
     * @memberof HandCardsNot
     * @static
     * @param {HandCardsNot} message HandCardsNot
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    HandCardsNot.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.handCards = [];
        if (options.defaults)
            object.leftCardsNum = 0;
        if (message.leftCardsNum != null && message.hasOwnProperty("leftCardsNum"))
            object.leftCardsNum = message.leftCardsNum;
        if (message.handCards && message.handCards.length) {
            object.handCards = [];
            for (var j = 0; j < message.handCards.length; ++j)
                object.handCards[j] = message.handCards[j];
        }
        return object;
    };

    /**
     * Converts this HandCardsNot to JSON.
     * @function toJSON
     * @memberof HandCardsNot
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    HandCardsNot.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return HandCardsNot;
})();

$root.OperateWrapper = (function () {

    /**
     * Properties of an OperateWrapper.
     * @exports IOperateWrapper
     * @interface IOperateWrapper
     * @property {number|null} [serial] OperateWrapper serial
     * @property {number|null} [opcode] OperateWrapper opcode
     * @property {number|null} [card] OperateWrapper card
     * @property {Array.<number>|null} [cardsInfo] OperateWrapper cardsInfo
     */

    /**
     * Constructs a new OperateWrapper.
     * @exports OperateWrapper
     * @classdesc Represents an OperateWrapper.
     * @implements IOperateWrapper
     * @constructor
     * @param {IOperateWrapper=} [properties] Properties to set
     */
    function OperateWrapper(properties) {
        this.cardsInfo = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * OperateWrapper serial.
     * @member {number} serial
     * @memberof OperateWrapper
     * @instance
     */
    OperateWrapper.prototype.serial = 0;

    /**
     * OperateWrapper opcode.
     * @member {number} opcode
     * @memberof OperateWrapper
     * @instance
     */
    OperateWrapper.prototype.opcode = 0;

    /**
     * OperateWrapper card.
     * @member {number} card
     * @memberof OperateWrapper
     * @instance
     */
    OperateWrapper.prototype.card = 0;

    /**
     * OperateWrapper cardsInfo.
     * @member {Array.<number>} cardsInfo
     * @memberof OperateWrapper
     * @instance
     */
    OperateWrapper.prototype.cardsInfo = $util.emptyArray;

    /**
     * Creates a new OperateWrapper instance using the specified properties.
     * @function create
     * @memberof OperateWrapper
     * @static
     * @param {IOperateWrapper=} [properties] Properties to set
     * @returns {OperateWrapper} OperateWrapper instance
     */
    OperateWrapper.create = function create(properties) {
        return new OperateWrapper(properties);
    };

    /**
     * Encodes the specified OperateWrapper message. Does not implicitly {@link OperateWrapper.verify|verify} messages.
     * @function encode
     * @memberof OperateWrapper
     * @static
     * @param {IOperateWrapper} message OperateWrapper message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OperateWrapper.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.serial != null && message.hasOwnProperty("serial"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.serial);
        if (message.opcode != null && message.hasOwnProperty("opcode"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.opcode);
        if (message.card != null && message.hasOwnProperty("card"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.card);
        if (message.cardsInfo != null && message.cardsInfo.length) {
            writer.uint32(/* id 4, wireType 2 =*/34).fork();
            for (var i = 0; i < message.cardsInfo.length; ++i)
                writer.int32(message.cardsInfo[i]);
            writer.ldelim();
        }
        return writer;
    };

    /**
     * Encodes the specified OperateWrapper message, length delimited. Does not implicitly {@link OperateWrapper.verify|verify} messages.
     * @function encodeDelimited
     * @memberof OperateWrapper
     * @static
     * @param {IOperateWrapper} message OperateWrapper message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OperateWrapper.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an OperateWrapper message from the specified reader or buffer.
     * @function decode
     * @memberof OperateWrapper
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {OperateWrapper} OperateWrapper
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OperateWrapper.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.OperateWrapper();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serial = reader.int32();
                    break;
                case 2:
                    message.opcode = reader.int32();
                    break;
                case 3:
                    message.card = reader.int32();
                    break;
                case 4:
                    if (!(message.cardsInfo && message.cardsInfo.length))
                        message.cardsInfo = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.cardsInfo.push(reader.int32());
                    } else
                        message.cardsInfo.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };

    /**
     * Decodes an OperateWrapper message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof OperateWrapper
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {OperateWrapper} OperateWrapper
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OperateWrapper.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an OperateWrapper message.
     * @function verify
     * @memberof OperateWrapper
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    OperateWrapper.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.serial != null && message.hasOwnProperty("serial"))
            if (!$util.isInteger(message.serial))
                return "serial: integer expected";
        if (message.opcode != null && message.hasOwnProperty("opcode"))
            if (!$util.isInteger(message.opcode))
                return "opcode: integer expected";
        if (message.card != null && message.hasOwnProperty("card"))
            if (!$util.isInteger(message.card))
                return "card: integer expected";
        if (message.cardsInfo != null && message.hasOwnProperty("cardsInfo")) {
            if (!Array.isArray(message.cardsInfo))
                return "cardsInfo: array expected";
            for (var i = 0; i < message.cardsInfo.length; ++i)
                if (!$util.isInteger(message.cardsInfo[i]))
                    return "cardsInfo: integer[] expected";
        }
        return null;
    };

    /**
     * Creates an OperateWrapper message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof OperateWrapper
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {OperateWrapper} OperateWrapper
     */
    OperateWrapper.fromObject = function fromObject(object) {
        if (object instanceof $root.OperateWrapper)
            return object;
        var message = new $root.OperateWrapper();
        if (object.serial != null)
            message.serial = object.serial | 0;
        if (object.opcode != null)
            message.opcode = object.opcode | 0;
        if (object.card != null)
            message.card = object.card | 0;
        if (object.cardsInfo) {
            if (!Array.isArray(object.cardsInfo))
                throw TypeError(".OperateWrapper.cardsInfo: array expected");
            message.cardsInfo = [];
            for (var i = 0; i < object.cardsInfo.length; ++i)
                message.cardsInfo[i] = object.cardsInfo[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from an OperateWrapper message. Also converts values to other types if specified.
     * @function toObject
     * @memberof OperateWrapper
     * @static
     * @param {OperateWrapper} message OperateWrapper
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    OperateWrapper.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.cardsInfo = [];
        if (options.defaults) {
            object.serial = 0;
            object.opcode = 0;
            object.card = 0;
        }
        if (message.serial != null && message.hasOwnProperty("serial"))
            object.serial = message.serial;
        if (message.opcode != null && message.hasOwnProperty("opcode"))
            object.opcode = message.opcode;
        if (message.card != null && message.hasOwnProperty("card"))
            object.card = message.card;
        if (message.cardsInfo && message.cardsInfo.length) {
            object.cardsInfo = [];
            for (var j = 0; j < message.cardsInfo.length; ++j)
                object.cardsInfo[j] = message.cardsInfo[j];
        }
        return object;
    };

    /**
     * Converts this OperateWrapper to JSON.
     * @function toJSON
     * @memberof OperateWrapper
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    OperateWrapper.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return OperateWrapper;
})();

$root.OperateReq = (function () {

    /**
     * Properties of an OperateReq.
     * @exports IOperateReq
     * @interface IOperateReq
     * @property {Array.<IOperateWrapper>|null} [ops] OperateReq ops
     */

    /**
     * Constructs a new OperateReq.
     * @exports OperateReq
     * @classdesc Represents an OperateReq.
     * @implements IOperateReq
     * @constructor
     * @param {IOperateReq=} [properties] Properties to set
     */
    function OperateReq(properties) {
        this.ops = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * OperateReq ops.
     * @member {Array.<IOperateWrapper>} ops
     * @memberof OperateReq
     * @instance
     */
    OperateReq.prototype.ops = $util.emptyArray;

    /**
     * Creates a new OperateReq instance using the specified properties.
     * @function create
     * @memberof OperateReq
     * @static
     * @param {IOperateReq=} [properties] Properties to set
     * @returns {OperateReq} OperateReq instance
     */
    OperateReq.create = function create(properties) {
        return new OperateReq(properties);
    };

    /**
     * Encodes the specified OperateReq message. Does not implicitly {@link OperateReq.verify|verify} messages.
     * @function encode
     * @memberof OperateReq
     * @static
     * @param {IOperateReq} message OperateReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OperateReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ops != null && message.ops.length)
            for (var i = 0; i < message.ops.length; ++i)
                $root.OperateWrapper.encode(message.ops[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified OperateReq message, length delimited. Does not implicitly {@link OperateReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof OperateReq
     * @static
     * @param {IOperateReq} message OperateReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OperateReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an OperateReq message from the specified reader or buffer.
     * @function decode
     * @memberof OperateReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {OperateReq} OperateReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OperateReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.OperateReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (!(message.ops && message.ops.length))
                        message.ops = [];
                    message.ops.push($root.OperateWrapper.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };

    /**
     * Decodes an OperateReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof OperateReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {OperateReq} OperateReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OperateReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an OperateReq message.
     * @function verify
     * @memberof OperateReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    OperateReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ops != null && message.hasOwnProperty("ops")) {
            if (!Array.isArray(message.ops))
                return "ops: array expected";
            for (var i = 0; i < message.ops.length; ++i) {
                var error = $root.OperateWrapper.verify(message.ops[i]);
                if (error)
                    return "ops." + error;
            }
        }
        return null;
    };

    /**
     * Creates an OperateReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof OperateReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {OperateReq} OperateReq
     */
    OperateReq.fromObject = function fromObject(object) {
        if (object instanceof $root.OperateReq)
            return object;
        var message = new $root.OperateReq();
        if (object.ops) {
            if (!Array.isArray(object.ops))
                throw TypeError(".OperateReq.ops: array expected");
            message.ops = [];
            for (var i = 0; i < object.ops.length; ++i) {
                if (typeof object.ops[i] !== "object")
                    throw TypeError(".OperateReq.ops: object expected");
                message.ops[i] = $root.OperateWrapper.fromObject(object.ops[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from an OperateReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof OperateReq
     * @static
     * @param {OperateReq} message OperateReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    OperateReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.ops = [];
        if (message.ops && message.ops.length) {
            object.ops = [];
            for (var j = 0; j < message.ops.length; ++j)
                object.ops[j] = $root.OperateWrapper.toObject(message.ops[j], options);
        }
        return object;
    };

    /**
     * Converts this OperateReq to JSON.
     * @function toJSON
     * @memberof OperateReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    OperateReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return OperateReq;
})();

$root.OperateAck = (function () {

    /**
     * Properties of an OperateAck.
     * @exports IOperateAck
     * @interface IOperateAck
     * @property {number|null} [serial] OperateAck serial
     * @property {number|null} [opCode] OperateAck opCode
     * @property {Array.<number>|null} [cards] OperateAck cards
     */

    /**
     * Constructs a new OperateAck.
     * @exports OperateAck
     * @classdesc Represents an OperateAck.
     * @implements IOperateAck
     * @constructor
     * @param {IOperateAck=} [properties] Properties to set
     */
    function OperateAck(properties) {
        this.cards = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * OperateAck serial.
     * @member {number} serial
     * @memberof OperateAck
     * @instance
     */
    OperateAck.prototype.serial = 0;

    /**
     * OperateAck opCode.
     * @member {number} opCode
     * @memberof OperateAck
     * @instance
     */
    OperateAck.prototype.opCode = 0;

    /**
     * OperateAck cards.
     * @member {Array.<number>} cards
     * @memberof OperateAck
     * @instance
     */
    OperateAck.prototype.cards = $util.emptyArray;

    /**
     * Creates a new OperateAck instance using the specified properties.
     * @function create
     * @memberof OperateAck
     * @static
     * @param {IOperateAck=} [properties] Properties to set
     * @returns {OperateAck} OperateAck instance
     */
    OperateAck.create = function create(properties) {
        return new OperateAck(properties);
    };

    /**
     * Encodes the specified OperateAck message. Does not implicitly {@link OperateAck.verify|verify} messages.
     * @function encode
     * @memberof OperateAck
     * @static
     * @param {IOperateAck} message OperateAck message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OperateAck.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.serial != null && message.hasOwnProperty("serial"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.serial);
        if (message.opCode != null && message.hasOwnProperty("opCode"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.opCode);
        if (message.cards != null && message.cards.length) {
            writer.uint32(/* id 3, wireType 2 =*/26).fork();
            for (var i = 0; i < message.cards.length; ++i)
                writer.int32(message.cards[i]);
            writer.ldelim();
        }
        return writer;
    };

    /**
     * Encodes the specified OperateAck message, length delimited. Does not implicitly {@link OperateAck.verify|verify} messages.
     * @function encodeDelimited
     * @memberof OperateAck
     * @static
     * @param {IOperateAck} message OperateAck message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OperateAck.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an OperateAck message from the specified reader or buffer.
     * @function decode
     * @memberof OperateAck
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {OperateAck} OperateAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OperateAck.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.OperateAck();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serial = reader.int32();
                    break;
                case 2:
                    message.opCode = reader.int32();
                    break;
                case 3:
                    if (!(message.cards && message.cards.length))
                        message.cards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.cards.push(reader.int32());
                    } else
                        message.cards.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };

    /**
     * Decodes an OperateAck message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof OperateAck
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {OperateAck} OperateAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OperateAck.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an OperateAck message.
     * @function verify
     * @memberof OperateAck
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    OperateAck.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.serial != null && message.hasOwnProperty("serial"))
            if (!$util.isInteger(message.serial))
                return "serial: integer expected";
        if (message.opCode != null && message.hasOwnProperty("opCode"))
            if (!$util.isInteger(message.opCode))
                return "opCode: integer expected";
        if (message.cards != null && message.hasOwnProperty("cards")) {
            if (!Array.isArray(message.cards))
                return "cards: array expected";
            for (var i = 0; i < message.cards.length; ++i)
                if (!$util.isInteger(message.cards[i]))
                    return "cards: integer[] expected";
        }
        return null;
    };

    /**
     * Creates an OperateAck message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof OperateAck
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {OperateAck} OperateAck
     */
    OperateAck.fromObject = function fromObject(object) {
        if (object instanceof $root.OperateAck)
            return object;
        var message = new $root.OperateAck();
        if (object.serial != null)
            message.serial = object.serial | 0;
        if (object.opCode != null)
            message.opCode = object.opCode | 0;
        if (object.cards) {
            if (!Array.isArray(object.cards))
                throw TypeError(".OperateAck.cards: array expected");
            message.cards = [];
            for (var i = 0; i < object.cards.length; ++i)
                message.cards[i] = object.cards[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from an OperateAck message. Also converts values to other types if specified.
     * @function toObject
     * @memberof OperateAck
     * @static
     * @param {OperateAck} message OperateAck
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    OperateAck.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.cards = [];
        if (options.defaults) {
            object.serial = 0;
            object.opCode = 0;
        }
        if (message.serial != null && message.hasOwnProperty("serial"))
            object.serial = message.serial;
        if (message.opCode != null && message.hasOwnProperty("opCode"))
            object.opCode = message.opCode;
        if (message.cards && message.cards.length) {
            object.cards = [];
            for (var j = 0; j < message.cards.length; ++j)
                object.cards[j] = message.cards[j];
        }
        return object;
    };

    /**
     * Converts this OperateAck to JSON.
     * @function toJSON
     * @memberof OperateAck
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    OperateAck.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return OperateAck;
})();

$root.OperateOk = (function () {

    /**
     * Properties of an OperateOk.
     * @exports IOperateOk
     * @interface IOperateOk
     */

    /**
     * Constructs a new OperateOk.
     * @exports OperateOk
     * @classdesc Represents an OperateOk.
     * @implements IOperateOk
     * @constructor
     * @param {IOperateOk=} [properties] Properties to set
     */
    function OperateOk(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new OperateOk instance using the specified properties.
     * @function create
     * @memberof OperateOk
     * @static
     * @param {IOperateOk=} [properties] Properties to set
     * @returns {OperateOk} OperateOk instance
     */
    OperateOk.create = function create(properties) {
        return new OperateOk(properties);
    };

    /**
     * Encodes the specified OperateOk message. Does not implicitly {@link OperateOk.verify|verify} messages.
     * @function encode
     * @memberof OperateOk
     * @static
     * @param {IOperateOk} message OperateOk message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OperateOk.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified OperateOk message, length delimited. Does not implicitly {@link OperateOk.verify|verify} messages.
     * @function encodeDelimited
     * @memberof OperateOk
     * @static
     * @param {IOperateOk} message OperateOk message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OperateOk.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an OperateOk message from the specified reader or buffer.
     * @function decode
     * @memberof OperateOk
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {OperateOk} OperateOk
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OperateOk.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.OperateOk();
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
     * Decodes an OperateOk message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof OperateOk
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {OperateOk} OperateOk
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OperateOk.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an OperateOk message.
     * @function verify
     * @memberof OperateOk
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    OperateOk.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates an OperateOk message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof OperateOk
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {OperateOk} OperateOk
     */
    OperateOk.fromObject = function fromObject(object) {
        if (object instanceof $root.OperateOk)
            return object;
        return new $root.OperateOk();
    };

    /**
     * Creates a plain object from an OperateOk message. Also converts values to other types if specified.
     * @function toObject
     * @memberof OperateOk
     * @static
     * @param {OperateOk} message OperateOk
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    OperateOk.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this OperateOk to JSON.
     * @function toJSON
     * @memberof OperateOk
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    OperateOk.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return OperateOk;
})();

$root.OperateNot = (function () {

    /**
     * Properties of an OperateNot.
     * @exports IOperateNot
     * @interface IOperateNot
     * @property {number|null} [chairId] OperateNot chairId
     * @property {number|null} [opCode] OperateNot opCode
     * @property {number|null} [fromChairId] OperateNot fromChairId
     * @property {number|null} [leftCardsNum] OperateNot leftCardsNum
     * @property {Array.<number>|null} [cards] OperateNot cards
     */

    /**
     * Constructs a new OperateNot.
     * @exports OperateNot
     * @classdesc Represents an OperateNot.
     * @implements IOperateNot
     * @constructor
     * @param {IOperateNot=} [properties] Properties to set
     */
    function OperateNot(properties) {
        this.cards = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * OperateNot chairId.
     * @member {number} chairId
     * @memberof OperateNot
     * @instance
     */
    OperateNot.prototype.chairId = 0;

    /**
     * OperateNot opCode.
     * @member {number} opCode
     * @memberof OperateNot
     * @instance
     */
    OperateNot.prototype.opCode = 0;

    /**
     * OperateNot fromChairId.
     * @member {number} fromChairId
     * @memberof OperateNot
     * @instance
     */
    OperateNot.prototype.fromChairId = 0;

    /**
     * OperateNot leftCardsNum.
     * @member {number} leftCardsNum
     * @memberof OperateNot
     * @instance
     */
    OperateNot.prototype.leftCardsNum = 0;

    /**
     * OperateNot cards.
     * @member {Array.<number>} cards
     * @memberof OperateNot
     * @instance
     */
    OperateNot.prototype.cards = $util.emptyArray;

    /**
     * Creates a new OperateNot instance using the specified properties.
     * @function create
     * @memberof OperateNot
     * @static
     * @param {IOperateNot=} [properties] Properties to set
     * @returns {OperateNot} OperateNot instance
     */
    OperateNot.create = function create(properties) {
        return new OperateNot(properties);
    };

    /**
     * Encodes the specified OperateNot message. Does not implicitly {@link OperateNot.verify|verify} messages.
     * @function encode
     * @memberof OperateNot
     * @static
     * @param {IOperateNot} message OperateNot message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OperateNot.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.chairId != null && message.hasOwnProperty("chairId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chairId);
        if (message.opCode != null && message.hasOwnProperty("opCode"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.opCode);
        if (message.fromChairId != null && message.hasOwnProperty("fromChairId"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.fromChairId);
        if (message.leftCardsNum != null && message.hasOwnProperty("leftCardsNum"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.leftCardsNum);
        if (message.cards != null && message.cards.length) {
            writer.uint32(/* id 5, wireType 2 =*/42).fork();
            for (var i = 0; i < message.cards.length; ++i)
                writer.int32(message.cards[i]);
            writer.ldelim();
        }
        return writer;
    };

    /**
     * Encodes the specified OperateNot message, length delimited. Does not implicitly {@link OperateNot.verify|verify} messages.
     * @function encodeDelimited
     * @memberof OperateNot
     * @static
     * @param {IOperateNot} message OperateNot message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OperateNot.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an OperateNot message from the specified reader or buffer.
     * @function decode
     * @memberof OperateNot
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {OperateNot} OperateNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OperateNot.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.OperateNot();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chairId = reader.int32();
                    break;
                case 2:
                    message.opCode = reader.int32();
                    break;
                case 3:
                    message.fromChairId = reader.int32();
                    break;
                case 4:
                    message.leftCardsNum = reader.int32();
                    break;
                case 5:
                    if (!(message.cards && message.cards.length))
                        message.cards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.cards.push(reader.int32());
                    } else
                        message.cards.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };

    /**
     * Decodes an OperateNot message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof OperateNot
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {OperateNot} OperateNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OperateNot.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an OperateNot message.
     * @function verify
     * @memberof OperateNot
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    OperateNot.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.chairId != null && message.hasOwnProperty("chairId"))
            if (!$util.isInteger(message.chairId))
                return "chairId: integer expected";
        if (message.opCode != null && message.hasOwnProperty("opCode"))
            if (!$util.isInteger(message.opCode))
                return "opCode: integer expected";
        if (message.fromChairId != null && message.hasOwnProperty("fromChairId"))
            if (!$util.isInteger(message.fromChairId))
                return "fromChairId: integer expected";
        if (message.leftCardsNum != null && message.hasOwnProperty("leftCardsNum"))
            if (!$util.isInteger(message.leftCardsNum))
                return "leftCardsNum: integer expected";
        if (message.cards != null && message.hasOwnProperty("cards")) {
            if (!Array.isArray(message.cards))
                return "cards: array expected";
            for (var i = 0; i < message.cards.length; ++i)
                if (!$util.isInteger(message.cards[i]))
                    return "cards: integer[] expected";
        }
        return null;
    };

    /**
     * Creates an OperateNot message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof OperateNot
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {OperateNot} OperateNot
     */
    OperateNot.fromObject = function fromObject(object) {
        if (object instanceof $root.OperateNot)
            return object;
        var message = new $root.OperateNot();
        if (object.chairId != null)
            message.chairId = object.chairId | 0;
        if (object.opCode != null)
            message.opCode = object.opCode | 0;
        if (object.fromChairId != null)
            message.fromChairId = object.fromChairId | 0;
        if (object.leftCardsNum != null)
            message.leftCardsNum = object.leftCardsNum | 0;
        if (object.cards) {
            if (!Array.isArray(object.cards))
                throw TypeError(".OperateNot.cards: array expected");
            message.cards = [];
            for (var i = 0; i < object.cards.length; ++i)
                message.cards[i] = object.cards[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from an OperateNot message. Also converts values to other types if specified.
     * @function toObject
     * @memberof OperateNot
     * @static
     * @param {OperateNot} message OperateNot
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    OperateNot.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.cards = [];
        if (options.defaults) {
            object.chairId = 0;
            object.opCode = 0;
            object.fromChairId = 0;
            object.leftCardsNum = 0;
        }
        if (message.chairId != null && message.hasOwnProperty("chairId"))
            object.chairId = message.chairId;
        if (message.opCode != null && message.hasOwnProperty("opCode"))
            object.opCode = message.opCode;
        if (message.fromChairId != null && message.hasOwnProperty("fromChairId"))
            object.fromChairId = message.fromChairId;
        if (message.leftCardsNum != null && message.hasOwnProperty("leftCardsNum"))
            object.leftCardsNum = message.leftCardsNum;
        if (message.cards && message.cards.length) {
            object.cards = [];
            for (var j = 0; j < message.cards.length; ++j)
                object.cards[j] = message.cards[j];
        }
        return object;
    };

    /**
     * Converts this OperateNot to JSON.
     * @function toJSON
     * @memberof OperateNot
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    OperateNot.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return OperateNot;
})();

$root.CardGroup = (function () {

    /**
     * Properties of a CardGroup.
     * @exports ICardGroup
     * @interface ICardGroup
     * @property {number|null} [opCode] CardGroup opCode
     * @property {number|null} [fromChair] CardGroup fromChair
     * @property {Array.<number>|null} [cards] CardGroup cards
     */

    /**
     * Constructs a new CardGroup.
     * @exports CardGroup
     * @classdesc Represents a CardGroup.
     * @implements ICardGroup
     * @constructor
     * @param {ICardGroup=} [properties] Properties to set
     */
    function CardGroup(properties) {
        this.cards = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CardGroup opCode.
     * @member {number} opCode
     * @memberof CardGroup
     * @instance
     */
    CardGroup.prototype.opCode = 0;

    /**
     * CardGroup fromChair.
     * @member {number} fromChair
     * @memberof CardGroup
     * @instance
     */
    CardGroup.prototype.fromChair = 0;

    /**
     * CardGroup cards.
     * @member {Array.<number>} cards
     * @memberof CardGroup
     * @instance
     */
    CardGroup.prototype.cards = $util.emptyArray;

    /**
     * Creates a new CardGroup instance using the specified properties.
     * @function create
     * @memberof CardGroup
     * @static
     * @param {ICardGroup=} [properties] Properties to set
     * @returns {CardGroup} CardGroup instance
     */
    CardGroup.create = function create(properties) {
        return new CardGroup(properties);
    };

    /**
     * Encodes the specified CardGroup message. Does not implicitly {@link CardGroup.verify|verify} messages.
     * @function encode
     * @memberof CardGroup
     * @static
     * @param {ICardGroup} message CardGroup message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CardGroup.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.opCode != null && message.hasOwnProperty("opCode"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.opCode);
        if (message.fromChair != null && message.hasOwnProperty("fromChair"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.fromChair);
        if (message.cards != null && message.cards.length) {
            writer.uint32(/* id 3, wireType 2 =*/26).fork();
            for (var i = 0; i < message.cards.length; ++i)
                writer.int32(message.cards[i]);
            writer.ldelim();
        }
        return writer;
    };

    /**
     * Encodes the specified CardGroup message, length delimited. Does not implicitly {@link CardGroup.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CardGroup
     * @static
     * @param {ICardGroup} message CardGroup message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CardGroup.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CardGroup message from the specified reader or buffer.
     * @function decode
     * @memberof CardGroup
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CardGroup} CardGroup
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CardGroup.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CardGroup();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.opCode = reader.int32();
                    break;
                case 2:
                    message.fromChair = reader.int32();
                    break;
                case 3:
                    if (!(message.cards && message.cards.length))
                        message.cards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.cards.push(reader.int32());
                    } else
                        message.cards.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };

    /**
     * Decodes a CardGroup message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CardGroup
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CardGroup} CardGroup
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CardGroup.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CardGroup message.
     * @function verify
     * @memberof CardGroup
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CardGroup.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.opCode != null && message.hasOwnProperty("opCode"))
            if (!$util.isInteger(message.opCode))
                return "opCode: integer expected";
        if (message.fromChair != null && message.hasOwnProperty("fromChair"))
            if (!$util.isInteger(message.fromChair))
                return "fromChair: integer expected";
        if (message.cards != null && message.hasOwnProperty("cards")) {
            if (!Array.isArray(message.cards))
                return "cards: array expected";
            for (var i = 0; i < message.cards.length; ++i)
                if (!$util.isInteger(message.cards[i]))
                    return "cards: integer[] expected";
        }
        return null;
    };

    /**
     * Creates a CardGroup message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CardGroup
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CardGroup} CardGroup
     */
    CardGroup.fromObject = function fromObject(object) {
        if (object instanceof $root.CardGroup)
            return object;
        var message = new $root.CardGroup();
        if (object.opCode != null)
            message.opCode = object.opCode | 0;
        if (object.fromChair != null)
            message.fromChair = object.fromChair | 0;
        if (object.cards) {
            if (!Array.isArray(object.cards))
                throw TypeError(".CardGroup.cards: array expected");
            message.cards = [];
            for (var i = 0; i < object.cards.length; ++i)
                message.cards[i] = object.cards[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a CardGroup message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CardGroup
     * @static
     * @param {CardGroup} message CardGroup
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CardGroup.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.cards = [];
        if (options.defaults) {
            object.opCode = 0;
            object.fromChair = 0;
        }
        if (message.opCode != null && message.hasOwnProperty("opCode"))
            object.opCode = message.opCode;
        if (message.fromChair != null && message.hasOwnProperty("fromChair"))
            object.fromChair = message.fromChair;
        if (message.cards && message.cards.length) {
            object.cards = [];
            for (var j = 0; j < message.cards.length; ++j)
                object.cards[j] = message.cards[j];
        }
        return object;
    };

    /**
     * Converts this CardGroup to JSON.
     * @function toJSON
     * @memberof CardGroup
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CardGroup.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CardGroup;
})();

$root.ChangeCardNot = (function () {

    /**
     * Properties of a ChangeCardNot.
     * @exports IChangeCardNot
     * @interface IChangeCardNot
     * @property {number|null} [chairId] ChangeCardNot chairId
     * @property {number|null} [currCard] ChangeCardNot currCard
     * @property {Array.<number>|null} [handCards] ChangeCardNot handCards
     * @property {Array.<ICardGroup>|null} [showCards] ChangeCardNot showCards
     * @property {Array.<number>|null} [displayCards] ChangeCardNot displayCards
     */

    /**
     * Constructs a new ChangeCardNot.
     * @exports ChangeCardNot
     * @classdesc Represents a ChangeCardNot.
     * @implements IChangeCardNot
     * @constructor
     * @param {IChangeCardNot=} [properties] Properties to set
     */
    function ChangeCardNot(properties) {
        this.handCards = [];
        this.showCards = [];
        this.displayCards = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ChangeCardNot chairId.
     * @member {number} chairId
     * @memberof ChangeCardNot
     * @instance
     */
    ChangeCardNot.prototype.chairId = 0;

    /**
     * ChangeCardNot currCard.
     * @member {number} currCard
     * @memberof ChangeCardNot
     * @instance
     */
    ChangeCardNot.prototype.currCard = 0;

    /**
     * ChangeCardNot handCards.
     * @member {Array.<number>} handCards
     * @memberof ChangeCardNot
     * @instance
     */
    ChangeCardNot.prototype.handCards = $util.emptyArray;

    /**
     * ChangeCardNot showCards.
     * @member {Array.<ICardGroup>} showCards
     * @memberof ChangeCardNot
     * @instance
     */
    ChangeCardNot.prototype.showCards = $util.emptyArray;

    /**
     * ChangeCardNot displayCards.
     * @member {Array.<number>} displayCards
     * @memberof ChangeCardNot
     * @instance
     */
    ChangeCardNot.prototype.displayCards = $util.emptyArray;

    /**
     * Creates a new ChangeCardNot instance using the specified properties.
     * @function create
     * @memberof ChangeCardNot
     * @static
     * @param {IChangeCardNot=} [properties] Properties to set
     * @returns {ChangeCardNot} ChangeCardNot instance
     */
    ChangeCardNot.create = function create(properties) {
        return new ChangeCardNot(properties);
    };

    /**
     * Encodes the specified ChangeCardNot message. Does not implicitly {@link ChangeCardNot.verify|verify} messages.
     * @function encode
     * @memberof ChangeCardNot
     * @static
     * @param {IChangeCardNot} message ChangeCardNot message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChangeCardNot.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.chairId != null && message.hasOwnProperty("chairId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chairId);
        if (message.currCard != null && message.hasOwnProperty("currCard"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.currCard);
        if (message.handCards != null && message.handCards.length) {
            writer.uint32(/* id 3, wireType 2 =*/26).fork();
            for (var i = 0; i < message.handCards.length; ++i)
                writer.int32(message.handCards[i]);
            writer.ldelim();
        }
        if (message.showCards != null && message.showCards.length)
            for (var i = 0; i < message.showCards.length; ++i)
                $root.CardGroup.encode(message.showCards[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.displayCards != null && message.displayCards.length) {
            writer.uint32(/* id 5, wireType 2 =*/42).fork();
            for (var i = 0; i < message.displayCards.length; ++i)
                writer.int32(message.displayCards[i]);
            writer.ldelim();
        }
        return writer;
    };

    /**
     * Encodes the specified ChangeCardNot message, length delimited. Does not implicitly {@link ChangeCardNot.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ChangeCardNot
     * @static
     * @param {IChangeCardNot} message ChangeCardNot message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChangeCardNot.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ChangeCardNot message from the specified reader or buffer.
     * @function decode
     * @memberof ChangeCardNot
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ChangeCardNot} ChangeCardNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChangeCardNot.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChangeCardNot();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chairId = reader.int32();
                    break;
                case 2:
                    message.currCard = reader.int32();
                    break;
                case 3:
                    if (!(message.handCards && message.handCards.length))
                        message.handCards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.handCards.push(reader.int32());
                    } else
                        message.handCards.push(reader.int32());
                    break;
                case 4:
                    if (!(message.showCards && message.showCards.length))
                        message.showCards = [];
                    message.showCards.push($root.CardGroup.decode(reader, reader.uint32()));
                    break;
                case 5:
                    if (!(message.displayCards && message.displayCards.length))
                        message.displayCards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.displayCards.push(reader.int32());
                    } else
                        message.displayCards.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };

    /**
     * Decodes a ChangeCardNot message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ChangeCardNot
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ChangeCardNot} ChangeCardNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChangeCardNot.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ChangeCardNot message.
     * @function verify
     * @memberof ChangeCardNot
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ChangeCardNot.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.chairId != null && message.hasOwnProperty("chairId"))
            if (!$util.isInteger(message.chairId))
                return "chairId: integer expected";
        if (message.currCard != null && message.hasOwnProperty("currCard"))
            if (!$util.isInteger(message.currCard))
                return "currCard: integer expected";
        if (message.handCards != null && message.hasOwnProperty("handCards")) {
            if (!Array.isArray(message.handCards))
                return "handCards: array expected";
            for (var i = 0; i < message.handCards.length; ++i)
                if (!$util.isInteger(message.handCards[i]))
                    return "handCards: integer[] expected";
        }
        if (message.showCards != null && message.hasOwnProperty("showCards")) {
            if (!Array.isArray(message.showCards))
                return "showCards: array expected";
            for (var i = 0; i < message.showCards.length; ++i) {
                var error = $root.CardGroup.verify(message.showCards[i]);
                if (error)
                    return "showCards." + error;
            }
        }
        if (message.displayCards != null && message.hasOwnProperty("displayCards")) {
            if (!Array.isArray(message.displayCards))
                return "displayCards: array expected";
            for (var i = 0; i < message.displayCards.length; ++i)
                if (!$util.isInteger(message.displayCards[i]))
                    return "displayCards: integer[] expected";
        }
        return null;
    };

    /**
     * Creates a ChangeCardNot message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ChangeCardNot
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ChangeCardNot} ChangeCardNot
     */
    ChangeCardNot.fromObject = function fromObject(object) {
        if (object instanceof $root.ChangeCardNot)
            return object;
        var message = new $root.ChangeCardNot();
        if (object.chairId != null)
            message.chairId = object.chairId | 0;
        if (object.currCard != null)
            message.currCard = object.currCard | 0;
        if (object.handCards) {
            if (!Array.isArray(object.handCards))
                throw TypeError(".ChangeCardNot.handCards: array expected");
            message.handCards = [];
            for (var i = 0; i < object.handCards.length; ++i)
                message.handCards[i] = object.handCards[i] | 0;
        }
        if (object.showCards) {
            if (!Array.isArray(object.showCards))
                throw TypeError(".ChangeCardNot.showCards: array expected");
            message.showCards = [];
            for (var i = 0; i < object.showCards.length; ++i) {
                if (typeof object.showCards[i] !== "object")
                    throw TypeError(".ChangeCardNot.showCards: object expected");
                message.showCards[i] = $root.CardGroup.fromObject(object.showCards[i]);
            }
        }
        if (object.displayCards) {
            if (!Array.isArray(object.displayCards))
                throw TypeError(".ChangeCardNot.displayCards: array expected");
            message.displayCards = [];
            for (var i = 0; i < object.displayCards.length; ++i)
                message.displayCards[i] = object.displayCards[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a ChangeCardNot message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ChangeCardNot
     * @static
     * @param {ChangeCardNot} message ChangeCardNot
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ChangeCardNot.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.handCards = [];
            object.showCards = [];
            object.displayCards = [];
        }
        if (options.defaults) {
            object.chairId = 0;
            object.currCard = 0;
        }
        if (message.chairId != null && message.hasOwnProperty("chairId"))
            object.chairId = message.chairId;
        if (message.currCard != null && message.hasOwnProperty("currCard"))
            object.currCard = message.currCard;
        if (message.handCards && message.handCards.length) {
            object.handCards = [];
            for (var j = 0; j < message.handCards.length; ++j)
                object.handCards[j] = message.handCards[j];
        }
        if (message.showCards && message.showCards.length) {
            object.showCards = [];
            for (var j = 0; j < message.showCards.length; ++j)
                object.showCards[j] = $root.CardGroup.toObject(message.showCards[j], options);
        }
        if (message.displayCards && message.displayCards.length) {
            object.displayCards = [];
            for (var j = 0; j < message.displayCards.length; ++j)
                object.displayCards[j] = message.displayCards[j];
        }
        return object;
    };

    /**
     * Converts this ChangeCardNot to JSON.
     * @function toJSON
     * @memberof ChangeCardNot
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ChangeCardNot.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ChangeCardNot;
})();

$root.Score = (function () {

    /**
     * Properties of a Score.
     * @exports IScore
     * @interface IScore
     * @property {number|null} [chairID] Score chairID
     * @property {number|Long|null} [score] Score score
     */

    /**
     * Constructs a new Score.
     * @exports Score
     * @classdesc Represents a Score.
     * @implements IScore
     * @constructor
     * @param {IScore=} [properties] Properties to set
     */
    function Score(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Score chairID.
     * @member {number} chairID
     * @memberof Score
     * @instance
     */
    Score.prototype.chairID = 0;

    /**
     * Score score.
     * @member {number|Long} score
     * @memberof Score
     * @instance
     */
    Score.prototype.score = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

    /**
     * Creates a new Score instance using the specified properties.
     * @function create
     * @memberof Score
     * @static
     * @param {IScore=} [properties] Properties to set
     * @returns {Score} Score instance
     */
    Score.create = function create(properties) {
        return new Score(properties);
    };

    /**
     * Encodes the specified Score message. Does not implicitly {@link Score.verify|verify} messages.
     * @function encode
     * @memberof Score
     * @static
     * @param {IScore} message Score message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Score.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.chairID != null && message.hasOwnProperty("chairID"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chairID);
        if (message.score != null && message.hasOwnProperty("score"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.score);
        return writer;
    };

    /**
     * Encodes the specified Score message, length delimited. Does not implicitly {@link Score.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Score
     * @static
     * @param {IScore} message Score message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Score.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Score message from the specified reader or buffer.
     * @function decode
     * @memberof Score
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Score} Score
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Score.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Score();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chairID = reader.int32();
                    break;
                case 2:
                    message.score = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };

    /**
     * Decodes a Score message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Score
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Score} Score
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Score.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Score message.
     * @function verify
     * @memberof Score
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Score.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.chairID != null && message.hasOwnProperty("chairID"))
            if (!$util.isInteger(message.chairID))
                return "chairID: integer expected";
        if (message.score != null && message.hasOwnProperty("score"))
            if (!$util.isInteger(message.score) && !(message.score && $util.isInteger(message.score.low) && $util.isInteger(message.score.high)))
                return "score: integer|Long expected";
        return null;
    };

    /**
     * Creates a Score message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Score
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Score} Score
     */
    Score.fromObject = function fromObject(object) {
        if (object instanceof $root.Score)
            return object;
        var message = new $root.Score();
        if (object.chairID != null)
            message.chairID = object.chairID | 0;
        if (object.score != null)
            if ($util.Long)
                (message.score = $util.Long.fromValue(object.score)).unsigned = false;
            else if (typeof object.score === "string")
                message.score = parseInt(object.score, 10);
            else if (typeof object.score === "number")
                message.score = object.score;
            else if (typeof object.score === "object")
                message.score = new $util.LongBits(object.score.low >>> 0, object.score.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a Score message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Score
     * @static
     * @param {Score} message Score
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Score.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.chairID = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.score = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.score = options.longs === String ? "0" : 0;
        }
        if (message.chairID != null && message.hasOwnProperty("chairID"))
            object.chairID = message.chairID;
        if (message.score != null && message.hasOwnProperty("score"))
            if (typeof message.score === "number")
                object.score = options.longs === String ? String(message.score) : message.score;
            else
                object.score = options.longs === String ? $util.Long.prototype.toString.call(message.score) : options.longs === Number ? new $util.LongBits(message.score.low >>> 0, message.score.high >>> 0).toNumber() : message.score;
        return object;
    };

    /**
     * Converts this Score to JSON.
     * @function toJSON
     * @memberof Score
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Score.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Score;
})();

$root.FanData = (function () {

    /**
     * Properties of a FanData.
     * @exports IFanData
     * @interface IFanData
     * @property {number|null} [fanType] FanData fanType
     * @property {number|null} [fanScore] FanData fanScore
     */

    /**
     * Constructs a new FanData.
     * @exports FanData
     * @classdesc Represents a FanData.
     * @implements IFanData
     * @constructor
     * @param {IFanData=} [properties] Properties to set
     */
    function FanData(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FanData fanType.
     * @member {number} fanType
     * @memberof FanData
     * @instance
     */
    FanData.prototype.fanType = 0;

    /**
     * FanData fanScore.
     * @member {number} fanScore
     * @memberof FanData
     * @instance
     */
    FanData.prototype.fanScore = 0;

    /**
     * Creates a new FanData instance using the specified properties.
     * @function create
     * @memberof FanData
     * @static
     * @param {IFanData=} [properties] Properties to set
     * @returns {FanData} FanData instance
     */
    FanData.create = function create(properties) {
        return new FanData(properties);
    };

    /**
     * Encodes the specified FanData message. Does not implicitly {@link FanData.verify|verify} messages.
     * @function encode
     * @memberof FanData
     * @static
     * @param {IFanData} message FanData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FanData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.fanType != null && message.hasOwnProperty("fanType"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.fanType);
        if (message.fanScore != null && message.hasOwnProperty("fanScore"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.fanScore);
        return writer;
    };

    /**
     * Encodes the specified FanData message, length delimited. Does not implicitly {@link FanData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FanData
     * @static
     * @param {IFanData} message FanData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FanData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FanData message from the specified reader or buffer.
     * @function decode
     * @memberof FanData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FanData} FanData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FanData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FanData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fanType = reader.int32();
                    break;
                case 2:
                    message.fanScore = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };

    /**
     * Decodes a FanData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FanData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FanData} FanData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FanData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FanData message.
     * @function verify
     * @memberof FanData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FanData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.fanType != null && message.hasOwnProperty("fanType"))
            if (!$util.isInteger(message.fanType))
                return "fanType: integer expected";
        if (message.fanScore != null && message.hasOwnProperty("fanScore"))
            if (!$util.isInteger(message.fanScore))
                return "fanScore: integer expected";
        return null;
    };

    /**
     * Creates a FanData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FanData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FanData} FanData
     */
    FanData.fromObject = function fromObject(object) {
        if (object instanceof $root.FanData)
            return object;
        var message = new $root.FanData();
        if (object.fanType != null)
            message.fanType = object.fanType | 0;
        if (object.fanScore != null)
            message.fanScore = object.fanScore | 0;
        return message;
    };

    /**
     * Creates a plain object from a FanData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FanData
     * @static
     * @param {FanData} message FanData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FanData.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.fanType = 0;
            object.fanScore = 0;
        }
        if (message.fanType != null && message.hasOwnProperty("fanType"))
            object.fanType = message.fanType;
        if (message.fanScore != null && message.hasOwnProperty("fanScore"))
            object.fanScore = message.fanScore;
        return object;
    };

    /**
     * Converts this FanData to JSON.
     * @function toJSON
     * @memberof FanData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FanData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return FanData;
})();

$root.FanScore = (function () {

    /**
     * Properties of a FanScore.
     * @exports IFanScore
     * @interface IFanScore
     * @property {number|null} [receiveChairID] FanScore receiveChairID
     * @property {number|null} [fanType] FanScore fanType
     * @property {Array.<IScore>|null} [sendChairIDs] FanScore sendChairIDs
     */

    /**
     * Constructs a new FanScore.
     * @exports FanScore
     * @classdesc Represents a FanScore.
     * @implements IFanScore
     * @constructor
     * @param {IFanScore=} [properties] Properties to set
     */
    function FanScore(properties) {
        this.sendChairIDs = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FanScore receiveChairID.
     * @member {number} receiveChairID
     * @memberof FanScore
     * @instance
     */
    FanScore.prototype.receiveChairID = 0;

    /**
     * FanScore fanType.
     * @member {number} fanType
     * @memberof FanScore
     * @instance
     */
    FanScore.prototype.fanType = 0;

    /**
     * FanScore sendChairIDs.
     * @member {Array.<IScore>} sendChairIDs
     * @memberof FanScore
     * @instance
     */
    FanScore.prototype.sendChairIDs = $util.emptyArray;

    /**
     * Creates a new FanScore instance using the specified properties.
     * @function create
     * @memberof FanScore
     * @static
     * @param {IFanScore=} [properties] Properties to set
     * @returns {FanScore} FanScore instance
     */
    FanScore.create = function create(properties) {
        return new FanScore(properties);
    };

    /**
     * Encodes the specified FanScore message. Does not implicitly {@link FanScore.verify|verify} messages.
     * @function encode
     * @memberof FanScore
     * @static
     * @param {IFanScore} message FanScore message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FanScore.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.receiveChairID != null && message.hasOwnProperty("receiveChairID"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.receiveChairID);
        if (message.fanType != null && message.hasOwnProperty("fanType"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.fanType);
        if (message.sendChairIDs != null && message.sendChairIDs.length)
            for (var i = 0; i < message.sendChairIDs.length; ++i)
                $root.Score.encode(message.sendChairIDs[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified FanScore message, length delimited. Does not implicitly {@link FanScore.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FanScore
     * @static
     * @param {IFanScore} message FanScore message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FanScore.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FanScore message from the specified reader or buffer.
     * @function decode
     * @memberof FanScore
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FanScore} FanScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FanScore.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FanScore();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.receiveChairID = reader.int32();
                    break;
                case 2:
                    message.fanType = reader.int32();
                    break;
                case 3:
                    if (!(message.sendChairIDs && message.sendChairIDs.length))
                        message.sendChairIDs = [];
                    message.sendChairIDs.push($root.Score.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };

    /**
     * Decodes a FanScore message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FanScore
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FanScore} FanScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FanScore.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FanScore message.
     * @function verify
     * @memberof FanScore
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FanScore.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.receiveChairID != null && message.hasOwnProperty("receiveChairID"))
            if (!$util.isInteger(message.receiveChairID))
                return "receiveChairID: integer expected";
        if (message.fanType != null && message.hasOwnProperty("fanType"))
            if (!$util.isInteger(message.fanType))
                return "fanType: integer expected";
        if (message.sendChairIDs != null && message.hasOwnProperty("sendChairIDs")) {
            if (!Array.isArray(message.sendChairIDs))
                return "sendChairIDs: array expected";
            for (var i = 0; i < message.sendChairIDs.length; ++i) {
                var error = $root.Score.verify(message.sendChairIDs[i]);
                if (error)
                    return "sendChairIDs." + error;
            }
        }
        return null;
    };

    /**
     * Creates a FanScore message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FanScore
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FanScore} FanScore
     */
    FanScore.fromObject = function fromObject(object) {
        if (object instanceof $root.FanScore)
            return object;
        var message = new $root.FanScore();
        if (object.receiveChairID != null)
            message.receiveChairID = object.receiveChairID | 0;
        if (object.fanType != null)
            message.fanType = object.fanType | 0;
        if (object.sendChairIDs) {
            if (!Array.isArray(object.sendChairIDs))
                throw TypeError(".FanScore.sendChairIDs: array expected");
            message.sendChairIDs = [];
            for (var i = 0; i < object.sendChairIDs.length; ++i) {
                if (typeof object.sendChairIDs[i] !== "object")
                    throw TypeError(".FanScore.sendChairIDs: object expected");
                message.sendChairIDs[i] = $root.Score.fromObject(object.sendChairIDs[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a FanScore message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FanScore
     * @static
     * @param {FanScore} message FanScore
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FanScore.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.sendChairIDs = [];
        if (options.defaults) {
            object.receiveChairID = 0;
            object.fanType = 0;
        }
        if (message.receiveChairID != null && message.hasOwnProperty("receiveChairID"))
            object.receiveChairID = message.receiveChairID;
        if (message.fanType != null && message.hasOwnProperty("fanType"))
            object.fanType = message.fanType;
        if (message.sendChairIDs && message.sendChairIDs.length) {
            object.sendChairIDs = [];
            for (var j = 0; j < message.sendChairIDs.length; ++j)
                object.sendChairIDs[j] = $root.Score.toObject(message.sendChairIDs[j], options);
        }
        return object;
    };

    /**
     * Converts this FanScore to JSON.
     * @function toJSON
     * @memberof FanScore
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FanScore.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return FanScore;
})();

$root.GameResult = (function () {

    /**
     * Properties of a GameResult.
     * @exports IGameResult
     * @interface IGameResult
     * @property {number|null} [chairId] GameResult chairId
     * @property {number|Long|null} [score] GameResult score
     */

    /**
     * Constructs a new GameResult.
     * @exports GameResult
     * @classdesc Represents a GameResult.
     * @implements IGameResult
     * @constructor
     * @param {IGameResult=} [properties] Properties to set
     */
    function GameResult(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GameResult chairId.
     * @member {number} chairId
     * @memberof GameResult
     * @instance
     */
    GameResult.prototype.chairId = 0;

    /**
     * GameResult score.
     * @member {number|Long} score
     * @memberof GameResult
     * @instance
     */
    GameResult.prototype.score = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

    /**
     * Creates a new GameResult instance using the specified properties.
     * @function create
     * @memberof GameResult
     * @static
     * @param {IGameResult=} [properties] Properties to set
     * @returns {GameResult} GameResult instance
     */
    GameResult.create = function create(properties) {
        return new GameResult(properties);
    };

    /**
     * Encodes the specified GameResult message. Does not implicitly {@link GameResult.verify|verify} messages.
     * @function encode
     * @memberof GameResult
     * @static
     * @param {IGameResult} message GameResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameResult.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.chairId != null && message.hasOwnProperty("chairId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chairId);
        if (message.score != null && message.hasOwnProperty("score"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.score);
        return writer;
    };

    /**
     * Encodes the specified GameResult message, length delimited. Does not implicitly {@link GameResult.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GameResult
     * @static
     * @param {IGameResult} message GameResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameResult.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GameResult message from the specified reader or buffer.
     * @function decode
     * @memberof GameResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GameResult} GameResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameResult.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chairId = reader.int32();
                    break;
                case 3:
                    message.score = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };

    /**
     * Decodes a GameResult message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GameResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GameResult} GameResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameResult.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GameResult message.
     * @function verify
     * @memberof GameResult
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GameResult.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.chairId != null && message.hasOwnProperty("chairId"))
            if (!$util.isInteger(message.chairId))
                return "chairId: integer expected";
        if (message.score != null && message.hasOwnProperty("score"))
            if (!$util.isInteger(message.score) && !(message.score && $util.isInteger(message.score.low) && $util.isInteger(message.score.high)))
                return "score: integer|Long expected";
        return null;
    };

    /**
     * Creates a GameResult message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GameResult
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GameResult} GameResult
     */
    GameResult.fromObject = function fromObject(object) {
        if (object instanceof $root.GameResult)
            return object;
        var message = new $root.GameResult();
        if (object.chairId != null)
            message.chairId = object.chairId | 0;
        if (object.score != null)
            if ($util.Long)
                (message.score = $util.Long.fromValue(object.score)).unsigned = false;
            else if (typeof object.score === "string")
                message.score = parseInt(object.score, 10);
            else if (typeof object.score === "number")
                message.score = object.score;
            else if (typeof object.score === "object")
                message.score = new $util.LongBits(object.score.low >>> 0, object.score.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a GameResult message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GameResult
     * @static
     * @param {GameResult} message GameResult
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GameResult.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.chairId = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.score = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.score = options.longs === String ? "0" : 0;
        }
        if (message.chairId != null && message.hasOwnProperty("chairId"))
            object.chairId = message.chairId;
        if (message.score != null && message.hasOwnProperty("score"))
            if (typeof message.score === "number")
                object.score = options.longs === String ? String(message.score) : message.score;
            else
                object.score = options.longs === String ? $util.Long.prototype.toString.call(message.score) : options.longs === Number ? new $util.LongBits(message.score.low >>> 0, message.score.high >>> 0).toNumber() : message.score;
        return object;
    };

    /**
     * Converts this GameResult to JSON.
     * @function toJSON
     * @memberof GameResult
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GameResult.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GameResult;
})();

$root.GameResultNot = (function () {

    /**
     * Properties of a GameResultNot.
     * @exports IGameResultNot
     * @interface IGameResultNot
     * @property {number|null} [huChair] GameResultNot huChair
     * @property {number|null} [huType] GameResultNot huType
     * @property {number|null} [huFrom] GameResultNot huFrom
     * @property {Array.<IFanScore>|null} [score] GameResultNot score
     * @property {Array.<IGameResult>|null} [result] GameResultNot result
     */

    /**
     * Constructs a new GameResultNot.
     * @exports GameResultNot
     * @classdesc Represents a GameResultNot.
     * @implements IGameResultNot
     * @constructor
     * @param {IGameResultNot=} [properties] Properties to set
     */
    function GameResultNot(properties) {
        this.score = [];
        this.result = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GameResultNot huChair.
     * @member {number} huChair
     * @memberof GameResultNot
     * @instance
     */
    GameResultNot.prototype.huChair = 0;

    /**
     * GameResultNot huType.
     * @member {number} huType
     * @memberof GameResultNot
     * @instance
     */
    GameResultNot.prototype.huType = 0;

    /**
     * GameResultNot huFrom.
     * @member {number} huFrom
     * @memberof GameResultNot
     * @instance
     */
    GameResultNot.prototype.huFrom = 0;

    /**
     * GameResultNot score.
     * @member {Array.<IFanScore>} score
     * @memberof GameResultNot
     * @instance
     */
    GameResultNot.prototype.score = $util.emptyArray;

    /**
     * GameResultNot result.
     * @member {Array.<IGameResult>} result
     * @memberof GameResultNot
     * @instance
     */
    GameResultNot.prototype.result = $util.emptyArray;

    /**
     * Creates a new GameResultNot instance using the specified properties.
     * @function create
     * @memberof GameResultNot
     * @static
     * @param {IGameResultNot=} [properties] Properties to set
     * @returns {GameResultNot} GameResultNot instance
     */
    GameResultNot.create = function create(properties) {
        return new GameResultNot(properties);
    };

    /**
     * Encodes the specified GameResultNot message. Does not implicitly {@link GameResultNot.verify|verify} messages.
     * @function encode
     * @memberof GameResultNot
     * @static
     * @param {IGameResultNot} message GameResultNot message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameResultNot.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.score != null && message.score.length)
            for (var i = 0; i < message.score.length; ++i)
                $root.FanScore.encode(message.score[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.result != null && message.result.length)
            for (var i = 0; i < message.result.length; ++i)
                $root.GameResult.encode(message.result[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.huChair != null && message.hasOwnProperty("huChair"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.huChair);
        if (message.huType != null && message.hasOwnProperty("huType"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.huType);
        if (message.huFrom != null && message.hasOwnProperty("huFrom"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.huFrom);
        return writer;
    };

    /**
     * Encodes the specified GameResultNot message, length delimited. Does not implicitly {@link GameResultNot.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GameResultNot
     * @static
     * @param {IGameResultNot} message GameResultNot message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameResultNot.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GameResultNot message from the specified reader or buffer.
     * @function decode
     * @memberof GameResultNot
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GameResultNot} GameResultNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameResultNot.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameResultNot();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 4:
                    message.huChair = reader.int32();
                    break;
                case 5:
                    message.huType = reader.int32();
                    break;
                case 6:
                    message.huFrom = reader.int32();
                    break;
                case 1:
                    if (!(message.score && message.score.length))
                        message.score = [];
                    message.score.push($root.FanScore.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.result && message.result.length))
                        message.result = [];
                    message.result.push($root.GameResult.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };

    /**
     * Decodes a GameResultNot message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GameResultNot
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GameResultNot} GameResultNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameResultNot.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GameResultNot message.
     * @function verify
     * @memberof GameResultNot
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GameResultNot.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.huChair != null && message.hasOwnProperty("huChair"))
            if (!$util.isInteger(message.huChair))
                return "huChair: integer expected";
        if (message.huType != null && message.hasOwnProperty("huType"))
            if (!$util.isInteger(message.huType))
                return "huType: integer expected";
        if (message.huFrom != null && message.hasOwnProperty("huFrom"))
            if (!$util.isInteger(message.huFrom))
                return "huFrom: integer expected";
        if (message.score != null && message.hasOwnProperty("score")) {
            if (!Array.isArray(message.score))
                return "score: array expected";
            for (var i = 0; i < message.score.length; ++i) {
                var error = $root.FanScore.verify(message.score[i]);
                if (error)
                    return "score." + error;
            }
        }
        if (message.result != null && message.hasOwnProperty("result")) {
            if (!Array.isArray(message.result))
                return "result: array expected";
            for (var i = 0; i < message.result.length; ++i) {
                var error = $root.GameResult.verify(message.result[i]);
                if (error)
                    return "result." + error;
            }
        }
        return null;
    };

    /**
     * Creates a GameResultNot message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GameResultNot
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GameResultNot} GameResultNot
     */
    GameResultNot.fromObject = function fromObject(object) {
        if (object instanceof $root.GameResultNot)
            return object;
        var message = new $root.GameResultNot();
        if (object.huChair != null)
            message.huChair = object.huChair | 0;
        if (object.huType != null)
            message.huType = object.huType | 0;
        if (object.huFrom != null)
            message.huFrom = object.huFrom | 0;
        if (object.score) {
            if (!Array.isArray(object.score))
                throw TypeError(".GameResultNot.score: array expected");
            message.score = [];
            for (var i = 0; i < object.score.length; ++i) {
                if (typeof object.score[i] !== "object")
                    throw TypeError(".GameResultNot.score: object expected");
                message.score[i] = $root.FanScore.fromObject(object.score[i]);
            }
        }
        if (object.result) {
            if (!Array.isArray(object.result))
                throw TypeError(".GameResultNot.result: array expected");
            message.result = [];
            for (var i = 0; i < object.result.length; ++i) {
                if (typeof object.result[i] !== "object")
                    throw TypeError(".GameResultNot.result: object expected");
                message.result[i] = $root.GameResult.fromObject(object.result[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a GameResultNot message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GameResultNot
     * @static
     * @param {GameResultNot} message GameResultNot
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GameResultNot.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.score = [];
            object.result = [];
        }
        if (options.defaults) {
            object.huChair = 0;
            object.huType = 0;
            object.huFrom = 0;
        }
        if (message.score && message.score.length) {
            object.score = [];
            for (var j = 0; j < message.score.length; ++j)
                object.score[j] = $root.FanScore.toObject(message.score[j], options);
        }
        if (message.result && message.result.length) {
            object.result = [];
            for (var j = 0; j < message.result.length; ++j)
                object.result[j] = $root.GameResult.toObject(message.result[j], options);
        }
        if (message.huChair != null && message.hasOwnProperty("huChair"))
            object.huChair = message.huChair;
        if (message.huType != null && message.hasOwnProperty("huType"))
            object.huType = message.huType;
        if (message.huFrom != null && message.hasOwnProperty("huFrom"))
            object.huFrom = message.huFrom;
        return object;
    };

    /**
     * Converts this GameResultNot to JSON.
     * @function toJSON
     * @memberof GameResultNot
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GameResultNot.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GameResultNot;
})();

$root.OpScore = (function () {

    /**
     * Properties of an OpScore.
     * @exports IOpScore
     * @interface IOpScore
     * @property {number|null} [receiveChairID] OpScore receiveChairID
     * @property {number|null} [opcode] OpScore opcode
     * @property {Array.<IScore>|null} [sendChairIDs] OpScore sendChairIDs
     */

    /**
     * Constructs a new OpScore.
     * @exports OpScore
     * @classdesc Represents an OpScore.
     * @implements IOpScore
     * @constructor
     * @param {IOpScore=} [properties] Properties to set
     */
    function OpScore(properties) {
        this.sendChairIDs = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * OpScore receiveChairID.
     * @member {number} receiveChairID
     * @memberof OpScore
     * @instance
     */
    OpScore.prototype.receiveChairID = 0;

    /**
     * OpScore opcode.
     * @member {number} opcode
     * @memberof OpScore
     * @instance
     */
    OpScore.prototype.opcode = 0;

    /**
     * OpScore sendChairIDs.
     * @member {Array.<IScore>} sendChairIDs
     * @memberof OpScore
     * @instance
     */
    OpScore.prototype.sendChairIDs = $util.emptyArray;

    /**
     * Creates a new OpScore instance using the specified properties.
     * @function create
     * @memberof OpScore
     * @static
     * @param {IOpScore=} [properties] Properties to set
     * @returns {OpScore} OpScore instance
     */
    OpScore.create = function create(properties) {
        return new OpScore(properties);
    };

    /**
     * Encodes the specified OpScore message. Does not implicitly {@link OpScore.verify|verify} messages.
     * @function encode
     * @memberof OpScore
     * @static
     * @param {IOpScore} message OpScore message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OpScore.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.receiveChairID != null && message.hasOwnProperty("receiveChairID"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.receiveChairID);
        if (message.opcode != null && message.hasOwnProperty("opcode"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.opcode);
        if (message.sendChairIDs != null && message.sendChairIDs.length)
            for (var i = 0; i < message.sendChairIDs.length; ++i)
                $root.Score.encode(message.sendChairIDs[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified OpScore message, length delimited. Does not implicitly {@link OpScore.verify|verify} messages.
     * @function encodeDelimited
     * @memberof OpScore
     * @static
     * @param {IOpScore} message OpScore message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OpScore.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an OpScore message from the specified reader or buffer.
     * @function decode
     * @memberof OpScore
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {OpScore} OpScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OpScore.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.OpScore();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.receiveChairID = reader.int32();
                    break;
                case 2:
                    message.opcode = reader.int32();
                    break;
                case 3:
                    if (!(message.sendChairIDs && message.sendChairIDs.length))
                        message.sendChairIDs = [];
                    message.sendChairIDs.push($root.Score.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };

    /**
     * Decodes an OpScore message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof OpScore
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {OpScore} OpScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OpScore.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an OpScore message.
     * @function verify
     * @memberof OpScore
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    OpScore.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.receiveChairID != null && message.hasOwnProperty("receiveChairID"))
            if (!$util.isInteger(message.receiveChairID))
                return "receiveChairID: integer expected";
        if (message.opcode != null && message.hasOwnProperty("opcode"))
            if (!$util.isInteger(message.opcode))
                return "opcode: integer expected";
        if (message.sendChairIDs != null && message.hasOwnProperty("sendChairIDs")) {
            if (!Array.isArray(message.sendChairIDs))
                return "sendChairIDs: array expected";
            for (var i = 0; i < message.sendChairIDs.length; ++i) {
                var error = $root.Score.verify(message.sendChairIDs[i]);
                if (error)
                    return "sendChairIDs." + error;
            }
        }
        return null;
    };

    /**
     * Creates an OpScore message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof OpScore
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {OpScore} OpScore
     */
    OpScore.fromObject = function fromObject(object) {
        if (object instanceof $root.OpScore)
            return object;
        var message = new $root.OpScore();
        if (object.receiveChairID != null)
            message.receiveChairID = object.receiveChairID | 0;
        if (object.opcode != null)
            message.opcode = object.opcode | 0;
        if (object.sendChairIDs) {
            if (!Array.isArray(object.sendChairIDs))
                throw TypeError(".OpScore.sendChairIDs: array expected");
            message.sendChairIDs = [];
            for (var i = 0; i < object.sendChairIDs.length; ++i) {
                if (typeof object.sendChairIDs[i] !== "object")
                    throw TypeError(".OpScore.sendChairIDs: object expected");
                message.sendChairIDs[i] = $root.Score.fromObject(object.sendChairIDs[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from an OpScore message. Also converts values to other types if specified.
     * @function toObject
     * @memberof OpScore
     * @static
     * @param {OpScore} message OpScore
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    OpScore.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.sendChairIDs = [];
        if (options.defaults) {
            object.receiveChairID = 0;
            object.opcode = 0;
        }
        if (message.receiveChairID != null && message.hasOwnProperty("receiveChairID"))
            object.receiveChairID = message.receiveChairID;
        if (message.opcode != null && message.hasOwnProperty("opcode"))
            object.opcode = message.opcode;
        if (message.sendChairIDs && message.sendChairIDs.length) {
            object.sendChairIDs = [];
            for (var j = 0; j < message.sendChairIDs.length; ++j)
                object.sendChairIDs[j] = $root.Score.toObject(message.sendChairIDs[j], options);
        }
        return object;
    };

    /**
     * Converts this OpScore to JSON.
     * @function toJSON
     * @memberof OpScore
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    OpScore.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return OpScore;
})();

$root.OpScoreNot = (function () {

    /**
     * Properties of an OpScoreNot.
     * @exports IOpScoreNot
     * @interface IOpScoreNot
     * @property {Array.<IOpScore>|null} [score] OpScoreNot score
     */

    /**
     * Constructs a new OpScoreNot.
     * @exports OpScoreNot
     * @classdesc Represents an OpScoreNot.
     * @implements IOpScoreNot
     * @constructor
     * @param {IOpScoreNot=} [properties] Properties to set
     */
    function OpScoreNot(properties) {
        this.score = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * OpScoreNot score.
     * @member {Array.<IOpScore>} score
     * @memberof OpScoreNot
     * @instance
     */
    OpScoreNot.prototype.score = $util.emptyArray;

    /**
     * Creates a new OpScoreNot instance using the specified properties.
     * @function create
     * @memberof OpScoreNot
     * @static
     * @param {IOpScoreNot=} [properties] Properties to set
     * @returns {OpScoreNot} OpScoreNot instance
     */
    OpScoreNot.create = function create(properties) {
        return new OpScoreNot(properties);
    };

    /**
     * Encodes the specified OpScoreNot message. Does not implicitly {@link OpScoreNot.verify|verify} messages.
     * @function encode
     * @memberof OpScoreNot
     * @static
     * @param {IOpScoreNot} message OpScoreNot message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OpScoreNot.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.score != null && message.score.length)
            for (var i = 0; i < message.score.length; ++i)
                $root.OpScore.encode(message.score[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified OpScoreNot message, length delimited. Does not implicitly {@link OpScoreNot.verify|verify} messages.
     * @function encodeDelimited
     * @memberof OpScoreNot
     * @static
     * @param {IOpScoreNot} message OpScoreNot message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OpScoreNot.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an OpScoreNot message from the specified reader or buffer.
     * @function decode
     * @memberof OpScoreNot
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {OpScoreNot} OpScoreNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OpScoreNot.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.OpScoreNot();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (!(message.score && message.score.length))
                        message.score = [];
                    message.score.push($root.OpScore.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };

    /**
     * Decodes an OpScoreNot message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof OpScoreNot
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {OpScoreNot} OpScoreNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OpScoreNot.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an OpScoreNot message.
     * @function verify
     * @memberof OpScoreNot
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    OpScoreNot.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.score != null && message.hasOwnProperty("score")) {
            if (!Array.isArray(message.score))
                return "score: array expected";
            for (var i = 0; i < message.score.length; ++i) {
                var error = $root.OpScore.verify(message.score[i]);
                if (error)
                    return "score." + error;
            }
        }
        return null;
    };

    /**
     * Creates an OpScoreNot message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof OpScoreNot
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {OpScoreNot} OpScoreNot
     */
    OpScoreNot.fromObject = function fromObject(object) {
        if (object instanceof $root.OpScoreNot)
            return object;
        var message = new $root.OpScoreNot();
        if (object.score) {
            if (!Array.isArray(object.score))
                throw TypeError(".OpScoreNot.score: array expected");
            message.score = [];
            for (var i = 0; i < object.score.length; ++i) {
                if (typeof object.score[i] !== "object")
                    throw TypeError(".OpScoreNot.score: object expected");
                message.score[i] = $root.OpScore.fromObject(object.score[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from an OpScoreNot message. Also converts values to other types if specified.
     * @function toObject
     * @memberof OpScoreNot
     * @static
     * @param {OpScoreNot} message OpScoreNot
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    OpScoreNot.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.score = [];
        if (message.score && message.score.length) {
            object.score = [];
            for (var j = 0; j < message.score.length; ++j)
                object.score[j] = $root.OpScore.toObject(message.score[j], options);
        }
        return object;
    };

    /**
     * Converts this OpScoreNot to JSON.
     * @function toJSON
     * @memberof OpScoreNot
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    OpScoreNot.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return OpScoreNot;
})();

$root.CompleteReq = (function () {

    /**
     * Properties of a CompleteReq.
     * @exports ICompleteReq
     * @interface ICompleteReq
     */

    /**
     * Constructs a new CompleteReq.
     * @exports CompleteReq
     * @classdesc Represents a CompleteReq.
     * @implements ICompleteReq
     * @constructor
     * @param {ICompleteReq=} [properties] Properties to set
     */
    function CompleteReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new CompleteReq instance using the specified properties.
     * @function create
     * @memberof CompleteReq
     * @static
     * @param {ICompleteReq=} [properties] Properties to set
     * @returns {CompleteReq} CompleteReq instance
     */
    CompleteReq.create = function create(properties) {
        return new CompleteReq(properties);
    };

    /**
     * Encodes the specified CompleteReq message. Does not implicitly {@link CompleteReq.verify|verify} messages.
     * @function encode
     * @memberof CompleteReq
     * @static
     * @param {ICompleteReq} message CompleteReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CompleteReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified CompleteReq message, length delimited. Does not implicitly {@link CompleteReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CompleteReq
     * @static
     * @param {ICompleteReq} message CompleteReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CompleteReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CompleteReq message from the specified reader or buffer.
     * @function decode
     * @memberof CompleteReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CompleteReq} CompleteReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CompleteReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CompleteReq();
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
     * Decodes a CompleteReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CompleteReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CompleteReq} CompleteReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CompleteReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CompleteReq message.
     * @function verify
     * @memberof CompleteReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CompleteReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a CompleteReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CompleteReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CompleteReq} CompleteReq
     */
    CompleteReq.fromObject = function fromObject(object) {
        if (object instanceof $root.CompleteReq)
            return object;
        return new $root.CompleteReq();
    };

    /**
     * Creates a plain object from a CompleteReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CompleteReq
     * @static
     * @param {CompleteReq} message CompleteReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CompleteReq.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this CompleteReq to JSON.
     * @function toJSON
     * @memberof CompleteReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CompleteReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CompleteReq;
})();

$root.CompleteDataNot = (function () {

    /**
     * Properties of a CompleteDataNot.
     * @exports ICompleteDataNot
     * @interface ICompleteDataNot
     * @property {number|null} [state] CompleteDataNot state
     * @property {number|null} [diZhu] CompleteDataNot diZhu
     * @property {number|null} [leftCardsNum] CompleteDataNot leftCardsNum
     * @property {number|null} [banker] CompleteDataNot banker
     * @property {number|Long|null} [leftSeconds] CompleteDataNot leftSeconds
     * @property {number|null} [curPlayer] CompleteDataNot curPlayer
     * @property {IOperateReq|null} [req] CompleteDataNot req
     * @property {Array.<IAutoNot>|null} [autoData] CompleteDataNot autoData
     * @property {Array.<IChangeCardNot>|null} [plyData] CompleteDataNot plyData
     */

    /**
     * Constructs a new CompleteDataNot.
     * @exports CompleteDataNot
     * @classdesc Represents a CompleteDataNot.
     * @implements ICompleteDataNot
     * @constructor
     * @param {ICompleteDataNot=} [properties] Properties to set
     */
    function CompleteDataNot(properties) {
        this.autoData = [];
        this.plyData = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CompleteDataNot state.
     * @member {number} state
     * @memberof CompleteDataNot
     * @instance
     */
    CompleteDataNot.prototype.state = 0;

    /**
     * CompleteDataNot diZhu.
     * @member {number} diZhu
     * @memberof CompleteDataNot
     * @instance
     */
    CompleteDataNot.prototype.diZhu = 0;

    /**
     * CompleteDataNot leftCardsNum.
     * @member {number} leftCardsNum
     * @memberof CompleteDataNot
     * @instance
     */
    CompleteDataNot.prototype.leftCardsNum = 0;

    /**
     * CompleteDataNot banker.
     * @member {number} banker
     * @memberof CompleteDataNot
     * @instance
     */
    CompleteDataNot.prototype.banker = 0;

    /**
     * CompleteDataNot leftSeconds.
     * @member {number|Long} leftSeconds
     * @memberof CompleteDataNot
     * @instance
     */
    CompleteDataNot.prototype.leftSeconds = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

    /**
     * CompleteDataNot curPlayer.
     * @member {number} curPlayer
     * @memberof CompleteDataNot
     * @instance
     */
    CompleteDataNot.prototype.curPlayer = 0;

    /**
     * CompleteDataNot req.
     * @member {IOperateReq|null|undefined} req
     * @memberof CompleteDataNot
     * @instance
     */
    CompleteDataNot.prototype.req = null;

    /**
     * CompleteDataNot autoData.
     * @member {Array.<IAutoNot>} autoData
     * @memberof CompleteDataNot
     * @instance
     */
    CompleteDataNot.prototype.autoData = $util.emptyArray;

    /**
     * CompleteDataNot plyData.
     * @member {Array.<IChangeCardNot>} plyData
     * @memberof CompleteDataNot
     * @instance
     */
    CompleteDataNot.prototype.plyData = $util.emptyArray;

    /**
     * Creates a new CompleteDataNot instance using the specified properties.
     * @function create
     * @memberof CompleteDataNot
     * @static
     * @param {ICompleteDataNot=} [properties] Properties to set
     * @returns {CompleteDataNot} CompleteDataNot instance
     */
    CompleteDataNot.create = function create(properties) {
        return new CompleteDataNot(properties);
    };

    /**
     * Encodes the specified CompleteDataNot message. Does not implicitly {@link CompleteDataNot.verify|verify} messages.
     * @function encode
     * @memberof CompleteDataNot
     * @static
     * @param {ICompleteDataNot} message CompleteDataNot message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CompleteDataNot.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.state != null && message.hasOwnProperty("state"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.state);
        if (message.diZhu != null && message.hasOwnProperty("diZhu"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.diZhu);
        if (message.leftCardsNum != null && message.hasOwnProperty("leftCardsNum"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.leftCardsNum);
        if (message.banker != null && message.hasOwnProperty("banker"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.banker);
        if (message.leftSeconds != null && message.hasOwnProperty("leftSeconds"))
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.leftSeconds);
        if (message.curPlayer != null && message.hasOwnProperty("curPlayer"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.curPlayer);
        if (message.req != null && message.hasOwnProperty("req"))
            $root.OperateReq.encode(message.req, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.autoData != null && message.autoData.length)
            for (var i = 0; i < message.autoData.length; ++i)
                $root.AutoNot.encode(message.autoData[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.plyData != null && message.plyData.length)
            for (var i = 0; i < message.plyData.length; ++i)
                $root.ChangeCardNot.encode(message.plyData[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified CompleteDataNot message, length delimited. Does not implicitly {@link CompleteDataNot.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CompleteDataNot
     * @static
     * @param {ICompleteDataNot} message CompleteDataNot message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CompleteDataNot.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CompleteDataNot message from the specified reader or buffer.
     * @function decode
     * @memberof CompleteDataNot
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CompleteDataNot} CompleteDataNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CompleteDataNot.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CompleteDataNot();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.state = reader.int32();
                    break;
                case 2:
                    message.diZhu = reader.int32();
                    break;
                case 3:
                    message.leftCardsNum = reader.int32();
                    break;
                case 4:
                    message.banker = reader.int32();
                    break;
                case 5:
                    message.leftSeconds = reader.int64();
                    break;
                case 6:
                    message.curPlayer = reader.int32();
                    break;
                case 7:
                    message.req = $root.OperateReq.decode(reader, reader.uint32());
                    break;
                case 9:
                    if (!(message.autoData && message.autoData.length))
                        message.autoData = [];
                    message.autoData.push($root.AutoNot.decode(reader, reader.uint32()));
                    break;
                case 10:
                    if (!(message.plyData && message.plyData.length))
                        message.plyData = [];
                    message.plyData.push($root.ChangeCardNot.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };

    /**
     * Decodes a CompleteDataNot message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CompleteDataNot
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CompleteDataNot} CompleteDataNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CompleteDataNot.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CompleteDataNot message.
     * @function verify
     * @memberof CompleteDataNot
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CompleteDataNot.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.state != null && message.hasOwnProperty("state"))
            if (!$util.isInteger(message.state))
                return "state: integer expected";
        if (message.diZhu != null && message.hasOwnProperty("diZhu"))
            if (!$util.isInteger(message.diZhu))
                return "diZhu: integer expected";
        if (message.leftCardsNum != null && message.hasOwnProperty("leftCardsNum"))
            if (!$util.isInteger(message.leftCardsNum))
                return "leftCardsNum: integer expected";
        if (message.banker != null && message.hasOwnProperty("banker"))
            if (!$util.isInteger(message.banker))
                return "banker: integer expected";
        if (message.leftSeconds != null && message.hasOwnProperty("leftSeconds"))
            if (!$util.isInteger(message.leftSeconds) && !(message.leftSeconds && $util.isInteger(message.leftSeconds.low) && $util.isInteger(message.leftSeconds.high)))
                return "leftSeconds: integer|Long expected";
        if (message.curPlayer != null && message.hasOwnProperty("curPlayer"))
            if (!$util.isInteger(message.curPlayer))
                return "curPlayer: integer expected";
        if (message.req != null && message.hasOwnProperty("req")) {
            var error = $root.OperateReq.verify(message.req);
            if (error)
                return "req." + error;
        }
        if (message.autoData != null && message.hasOwnProperty("autoData")) {
            if (!Array.isArray(message.autoData))
                return "autoData: array expected";
            for (var i = 0; i < message.autoData.length; ++i) {
                var error = $root.AutoNot.verify(message.autoData[i]);
                if (error)
                    return "autoData." + error;
            }
        }
        if (message.plyData != null && message.hasOwnProperty("plyData")) {
            if (!Array.isArray(message.plyData))
                return "plyData: array expected";
            for (var i = 0; i < message.plyData.length; ++i) {
                var error = $root.ChangeCardNot.verify(message.plyData[i]);
                if (error)
                    return "plyData." + error;
            }
        }
        return null;
    };

    /**
     * Creates a CompleteDataNot message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CompleteDataNot
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CompleteDataNot} CompleteDataNot
     */
    CompleteDataNot.fromObject = function fromObject(object) {
        if (object instanceof $root.CompleteDataNot)
            return object;
        var message = new $root.CompleteDataNot();
        if (object.state != null)
            message.state = object.state | 0;
        if (object.diZhu != null)
            message.diZhu = object.diZhu | 0;
        if (object.leftCardsNum != null)
            message.leftCardsNum = object.leftCardsNum | 0;
        if (object.banker != null)
            message.banker = object.banker | 0;
        if (object.leftSeconds != null)
            if ($util.Long)
                (message.leftSeconds = $util.Long.fromValue(object.leftSeconds)).unsigned = false;
            else if (typeof object.leftSeconds === "string")
                message.leftSeconds = parseInt(object.leftSeconds, 10);
            else if (typeof object.leftSeconds === "number")
                message.leftSeconds = object.leftSeconds;
            else if (typeof object.leftSeconds === "object")
                message.leftSeconds = new $util.LongBits(object.leftSeconds.low >>> 0, object.leftSeconds.high >>> 0).toNumber();
        if (object.curPlayer != null)
            message.curPlayer = object.curPlayer | 0;
        if (object.req != null) {
            if (typeof object.req !== "object")
                throw TypeError(".CompleteDataNot.req: object expected");
            message.req = $root.OperateReq.fromObject(object.req);
        }
        if (object.autoData) {
            if (!Array.isArray(object.autoData))
                throw TypeError(".CompleteDataNot.autoData: array expected");
            message.autoData = [];
            for (var i = 0; i < object.autoData.length; ++i) {
                if (typeof object.autoData[i] !== "object")
                    throw TypeError(".CompleteDataNot.autoData: object expected");
                message.autoData[i] = $root.AutoNot.fromObject(object.autoData[i]);
            }
        }
        if (object.plyData) {
            if (!Array.isArray(object.plyData))
                throw TypeError(".CompleteDataNot.plyData: array expected");
            message.plyData = [];
            for (var i = 0; i < object.plyData.length; ++i) {
                if (typeof object.plyData[i] !== "object")
                    throw TypeError(".CompleteDataNot.plyData: object expected");
                message.plyData[i] = $root.ChangeCardNot.fromObject(object.plyData[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a CompleteDataNot message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CompleteDataNot
     * @static
     * @param {CompleteDataNot} message CompleteDataNot
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CompleteDataNot.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.autoData = [];
            object.plyData = [];
        }
        if (options.defaults) {
            object.state = 0;
            object.diZhu = 0;
            object.leftCardsNum = 0;
            object.banker = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.leftSeconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.leftSeconds = options.longs === String ? "0" : 0;
            object.curPlayer = 0;
            object.req = null;
        }
        if (message.state != null && message.hasOwnProperty("state"))
            object.state = message.state;
        if (message.diZhu != null && message.hasOwnProperty("diZhu"))
            object.diZhu = message.diZhu;
        if (message.leftCardsNum != null && message.hasOwnProperty("leftCardsNum"))
            object.leftCardsNum = message.leftCardsNum;
        if (message.banker != null && message.hasOwnProperty("banker"))
            object.banker = message.banker;
        if (message.leftSeconds != null && message.hasOwnProperty("leftSeconds"))
            if (typeof message.leftSeconds === "number")
                object.leftSeconds = options.longs === String ? String(message.leftSeconds) : message.leftSeconds;
            else
                object.leftSeconds = options.longs === String ? $util.Long.prototype.toString.call(message.leftSeconds) : options.longs === Number ? new $util.LongBits(message.leftSeconds.low >>> 0, message.leftSeconds.high >>> 0).toNumber() : message.leftSeconds;
        if (message.curPlayer != null && message.hasOwnProperty("curPlayer"))
            object.curPlayer = message.curPlayer;
        if (message.req != null && message.hasOwnProperty("req"))
            object.req = $root.OperateReq.toObject(message.req, options);
        if (message.autoData && message.autoData.length) {
            object.autoData = [];
            for (var j = 0; j < message.autoData.length; ++j)
                object.autoData[j] = $root.AutoNot.toObject(message.autoData[j], options);
        }
        if (message.plyData && message.plyData.length) {
            object.plyData = [];
            for (var j = 0; j < message.plyData.length; ++j)
                object.plyData[j] = $root.ChangeCardNot.toObject(message.plyData[j], options);
        }
        return object;
    };

    /**
     * Converts this CompleteDataNot to JSON.
     * @function toJSON
     * @memberof CompleteDataNot
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CompleteDataNot.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CompleteDataNot;
})();

$root.UpdatePlyData = (function () {

    /**
     * Properties of an UpdatePlyData.
     * @exports IUpdatePlyData
     * @interface IUpdatePlyData
     * @property {number|Long|null} [uid] UpdatePlyData uid
     * @property {number|Long|null} [num] UpdatePlyData num
     */

    /**
     * Constructs a new UpdatePlyData.
     * @exports UpdatePlyData
     * @classdesc Represents an UpdatePlyData.
     * @implements IUpdatePlyData
     * @constructor
     * @param {IUpdatePlyData=} [properties] Properties to set
     */
    function UpdatePlyData(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UpdatePlyData uid.
     * @member {number|Long} uid
     * @memberof UpdatePlyData
     * @instance
     */
    UpdatePlyData.prototype.uid = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

    /**
     * UpdatePlyData num.
     * @member {number|Long} num
     * @memberof UpdatePlyData
     * @instance
     */
    UpdatePlyData.prototype.num = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

    /**
     * Creates a new UpdatePlyData instance using the specified properties.
     * @function create
     * @memberof UpdatePlyData
     * @static
     * @param {IUpdatePlyData=} [properties] Properties to set
     * @returns {UpdatePlyData} UpdatePlyData instance
     */
    UpdatePlyData.create = function create(properties) {
        return new UpdatePlyData(properties);
    };

    /**
     * Encodes the specified UpdatePlyData message. Does not implicitly {@link UpdatePlyData.verify|verify} messages.
     * @function encode
     * @memberof UpdatePlyData
     * @static
     * @param {IUpdatePlyData} message UpdatePlyData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UpdatePlyData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uid != null && message.hasOwnProperty("uid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
        if (message.num != null && message.hasOwnProperty("num"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.num);
        return writer;
    };

    /**
     * Encodes the specified UpdatePlyData message, length delimited. Does not implicitly {@link UpdatePlyData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UpdatePlyData
     * @static
     * @param {IUpdatePlyData} message UpdatePlyData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UpdatePlyData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an UpdatePlyData message from the specified reader or buffer.
     * @function decode
     * @memberof UpdatePlyData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UpdatePlyData} UpdatePlyData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UpdatePlyData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UpdatePlyData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int64();
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
     * Decodes an UpdatePlyData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UpdatePlyData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UpdatePlyData} UpdatePlyData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UpdatePlyData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an UpdatePlyData message.
     * @function verify
     * @memberof UpdatePlyData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UpdatePlyData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                return "uid: integer|Long expected";
        if (message.num != null && message.hasOwnProperty("num"))
            if (!$util.isInteger(message.num) && !(message.num && $util.isInteger(message.num.low) && $util.isInteger(message.num.high)))
                return "num: integer|Long expected";
        return null;
    };

    /**
     * Creates an UpdatePlyData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UpdatePlyData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UpdatePlyData} UpdatePlyData
     */
    UpdatePlyData.fromObject = function fromObject(object) {
        if (object instanceof $root.UpdatePlyData)
            return object;
        var message = new $root.UpdatePlyData();
        if (object.uid != null)
            if ($util.Long)
                (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
            else if (typeof object.uid === "string")
                message.uid = parseInt(object.uid, 10);
            else if (typeof object.uid === "number")
                message.uid = object.uid;
            else if (typeof object.uid === "object")
                message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
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
     * Creates a plain object from an UpdatePlyData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UpdatePlyData
     * @static
     * @param {UpdatePlyData} message UpdatePlyData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UpdatePlyData.toObject = function toObject(message, options) {
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
                object.num = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.num = options.longs === String ? "0" : 0;
        }
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (typeof message.uid === "number")
                object.uid = options.longs === String ? String(message.uid) : message.uid;
            else
                object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
        if (message.num != null && message.hasOwnProperty("num"))
            if (typeof message.num === "number")
                object.num = options.longs === String ? String(message.num) : message.num;
            else
                object.num = options.longs === String ? $util.Long.prototype.toString.call(message.num) : options.longs === Number ? new $util.LongBits(message.num.low >>> 0, message.num.high >>> 0).toNumber() : message.num;
        return object;
    };

    /**
     * Converts this UpdatePlyData to JSON.
     * @function toJSON
     * @memberof UpdatePlyData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UpdatePlyData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UpdatePlyData;
})();

module.exports = $root;
