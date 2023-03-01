/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.personal = (function() {

    /**
     * Namespace personal.
     * @exports personal
     * @namespace
     */
    var personal = {};

    personal.Personal = (function() {

        /**
         * Constructs a new Personal service.
         * @memberof personal
         * @classdesc Represents a Personal
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Personal(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Personal.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Personal;

        /**
         * Creates new Personal service using the specified rpc implementation.
         * @function create
         * @memberof personal.Personal
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Personal} RPC service. Useful where requests and/or responses are streamed.
         */
        Personal.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link personal.Personal#getPersonalProgress}.
         * @memberof personal.Personal
         * @typedef GetPersonalProgressCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {personal.GetPersonalProgressRsp} [response] GetPersonalProgressRsp
         */

        /**
         * Calls GetPersonalProgress.
         * @function getPersonalProgress
         * @memberof personal.Personal
         * @instance
         * @param {personal.IGetPersonalProgressReq} request GetPersonalProgressReq message or plain object
         * @param {personal.Personal.GetPersonalProgressCallback} callback Node-style callback called with the error, if any, and GetPersonalProgressRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Personal.prototype.getPersonalProgress = function getPersonalProgress(request, callback) {
            return this.rpcCall(getPersonalProgress, $root.personal.GetPersonalProgressReq, $root.personal.GetPersonalProgressRsp, request, callback);
        }, "name", { value: "GetPersonalProgress" });

        /**
         * Calls GetPersonalProgress.
         * @function getPersonalProgress
         * @memberof personal.Personal
         * @instance
         * @param {personal.IGetPersonalProgressReq} request GetPersonalProgressReq message or plain object
         * @returns {Promise<personal.GetPersonalProgressRsp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link personal.Personal#getPersonalAward}.
         * @memberof personal.Personal
         * @typedef GetPersonalAwardCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {personal.GetPersonalAwardRsp} [response] GetPersonalAwardRsp
         */

        /**
         * Calls GetPersonalAward.
         * @function getPersonalAward
         * @memberof personal.Personal
         * @instance
         * @param {personal.IGetPersonalAwardReq} request GetPersonalAwardReq message or plain object
         * @param {personal.Personal.GetPersonalAwardCallback} callback Node-style callback called with the error, if any, and GetPersonalAwardRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Personal.prototype.getPersonalAward = function getPersonalAward(request, callback) {
            return this.rpcCall(getPersonalAward, $root.personal.GetPersonalAwardReq, $root.personal.GetPersonalAwardRsp, request, callback);
        }, "name", { value: "GetPersonalAward" });

        /**
         * Calls GetPersonalAward.
         * @function getPersonalAward
         * @memberof personal.Personal
         * @instance
         * @param {personal.IGetPersonalAwardReq} request GetPersonalAwardReq message or plain object
         * @returns {Promise<personal.GetPersonalAwardRsp>} Promise
         * @variation 2
         */

        return Personal;
    })();

    personal.GetPersonalProgressReq = (function() {

        /**
         * Properties of a GetPersonalProgressReq.
         * @memberof personal
         * @interface IGetPersonalProgressReq
         * @property {number|Long|null} [uid] GetPersonalProgressReq uid
         */

        /**
         * Constructs a new GetPersonalProgressReq.
         * @memberof personal
         * @classdesc Represents a GetPersonalProgressReq.
         * @implements IGetPersonalProgressReq
         * @constructor
         * @param {personal.IGetPersonalProgressReq=} [properties] Properties to set
         */
        function GetPersonalProgressReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetPersonalProgressReq uid.
         * @member {number|Long} uid
         * @memberof personal.GetPersonalProgressReq
         * @instance
         */
        GetPersonalProgressReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GetPersonalProgressReq instance using the specified properties.
         * @function create
         * @memberof personal.GetPersonalProgressReq
         * @static
         * @param {personal.IGetPersonalProgressReq=} [properties] Properties to set
         * @returns {personal.GetPersonalProgressReq} GetPersonalProgressReq instance
         */
        GetPersonalProgressReq.create = function create(properties) {
            return new GetPersonalProgressReq(properties);
        };

        /**
         * Encodes the specified GetPersonalProgressReq message. Does not implicitly {@link personal.GetPersonalProgressReq.verify|verify} messages.
         * @function encode
         * @memberof personal.GetPersonalProgressReq
         * @static
         * @param {personal.IGetPersonalProgressReq} message GetPersonalProgressReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPersonalProgressReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            return writer;
        };

        /**
         * Encodes the specified GetPersonalProgressReq message, length delimited. Does not implicitly {@link personal.GetPersonalProgressReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof personal.GetPersonalProgressReq
         * @static
         * @param {personal.IGetPersonalProgressReq} message GetPersonalProgressReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPersonalProgressReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetPersonalProgressReq message from the specified reader or buffer.
         * @function decode
         * @memberof personal.GetPersonalProgressReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {personal.GetPersonalProgressReq} GetPersonalProgressReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPersonalProgressReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.personal.GetPersonalProgressReq();
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
         * Decodes a GetPersonalProgressReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof personal.GetPersonalProgressReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {personal.GetPersonalProgressReq} GetPersonalProgressReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPersonalProgressReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetPersonalProgressReq message.
         * @function verify
         * @memberof personal.GetPersonalProgressReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetPersonalProgressReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            return null;
        };

        /**
         * Creates a GetPersonalProgressReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof personal.GetPersonalProgressReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {personal.GetPersonalProgressReq} GetPersonalProgressReq
         */
        GetPersonalProgressReq.fromObject = function fromObject(object) {
            if (object instanceof $root.personal.GetPersonalProgressReq)
                return object;
            var message = new $root.personal.GetPersonalProgressReq();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unpersonaled = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a GetPersonalProgressReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof personal.GetPersonalProgressReq
         * @static
         * @param {personal.GetPersonalProgressReq} message GetPersonalProgressReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetPersonalProgressReq.toObject = function toObject(message, options) {
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
         * Converts this GetPersonalProgressReq to JSON.
         * @function toJSON
         * @memberof personal.GetPersonalProgressReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetPersonalProgressReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetPersonalProgressReq;
    })();

    personal.AwardItem = (function() {

        /**
         * Properties of an AwardItem.
         * @memberof personal
         * @interface IAwardItem
         * @property {number|null} [id] AwardItem id
         * @property {number|null} [num] AwardItem num
         */

        /**
         * Constructs a new AwardItem.
         * @memberof personal
         * @classdesc Represents an AwardItem.
         * @implements IAwardItem
         * @constructor
         * @param {personal.IAwardItem=} [properties] Properties to set
         */
        function AwardItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AwardItem id.
         * @member {number} id
         * @memberof personal.AwardItem
         * @instance
         */
        AwardItem.prototype.id = 0;

        /**
         * AwardItem num.
         * @member {number} num
         * @memberof personal.AwardItem
         * @instance
         */
        AwardItem.prototype.num = 0;

        /**
         * Creates a new AwardItem instance using the specified properties.
         * @function create
         * @memberof personal.AwardItem
         * @static
         * @param {personal.IAwardItem=} [properties] Properties to set
         * @returns {personal.AwardItem} AwardItem instance
         */
        AwardItem.create = function create(properties) {
            return new AwardItem(properties);
        };

        /**
         * Encodes the specified AwardItem message. Does not implicitly {@link personal.AwardItem.verify|verify} messages.
         * @function encode
         * @memberof personal.AwardItem
         * @static
         * @param {personal.IAwardItem} message AwardItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AwardItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.num != null && message.hasOwnProperty("num"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.num);
            return writer;
        };

        /**
         * Encodes the specified AwardItem message, length delimited. Does not implicitly {@link personal.AwardItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof personal.AwardItem
         * @static
         * @param {personal.IAwardItem} message AwardItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AwardItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AwardItem message from the specified reader or buffer.
         * @function decode
         * @memberof personal.AwardItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {personal.AwardItem} AwardItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AwardItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.personal.AwardItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.num = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AwardItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof personal.AwardItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {personal.AwardItem} AwardItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AwardItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AwardItem message.
         * @function verify
         * @memberof personal.AwardItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AwardItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.num != null && message.hasOwnProperty("num"))
                if (!$util.isInteger(message.num))
                    return "num: integer expected";
            return null;
        };

        /**
         * Creates an AwardItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof personal.AwardItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {personal.AwardItem} AwardItem
         */
        AwardItem.fromObject = function fromObject(object) {
            if (object instanceof $root.personal.AwardItem)
                return object;
            var message = new $root.personal.AwardItem();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.num != null)
                message.num = object.num | 0;
            return message;
        };

        /**
         * Creates a plain object from an AwardItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof personal.AwardItem
         * @static
         * @param {personal.AwardItem} message AwardItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AwardItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.num = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.num != null && message.hasOwnProperty("num"))
                object.num = message.num;
            return object;
        };

        /**
         * Converts this AwardItem to JSON.
         * @function toJSON
         * @memberof personal.AwardItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AwardItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AwardItem;
    })();

    personal.DailyItem = (function() {

        /**
         * Properties of a DailyItem.
         * @memberof personal
         * @interface IDailyItem
         * @property {number|null} [day] DailyItem day
         * @property {number|null} [awardStatus] DailyItem awardStatus
         * @property {Array.<personal.IAwardItem>|null} [awards] DailyItem awards
         */

        /**
         * Constructs a new DailyItem.
         * @memberof personal
         * @classdesc Represents a DailyItem.
         * @implements IDailyItem
         * @constructor
         * @param {personal.IDailyItem=} [properties] Properties to set
         */
        function DailyItem(properties) {
            this.awards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DailyItem day.
         * @member {number} day
         * @memberof personal.DailyItem
         * @instance
         */
        DailyItem.prototype.day = 0;

        /**
         * DailyItem awardStatus.
         * @member {number} awardStatus
         * @memberof personal.DailyItem
         * @instance
         */
        DailyItem.prototype.awardStatus = 0;

        /**
         * DailyItem awards.
         * @member {Array.<personal.IAwardItem>} awards
         * @memberof personal.DailyItem
         * @instance
         */
        DailyItem.prototype.awards = $util.emptyArray;

        /**
         * Creates a new DailyItem instance using the specified properties.
         * @function create
         * @memberof personal.DailyItem
         * @static
         * @param {personal.IDailyItem=} [properties] Properties to set
         * @returns {personal.DailyItem} DailyItem instance
         */
        DailyItem.create = function create(properties) {
            return new DailyItem(properties);
        };

        /**
         * Encodes the specified DailyItem message. Does not implicitly {@link personal.DailyItem.verify|verify} messages.
         * @function encode
         * @memberof personal.DailyItem
         * @static
         * @param {personal.IDailyItem} message DailyItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DailyItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.day != null && message.hasOwnProperty("day"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.day);
            if (message.awardStatus != null && message.hasOwnProperty("awardStatus"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.awardStatus);
            if (message.awards != null && message.awards.length)
                for (var i = 0; i < message.awards.length; ++i)
                    $root.personal.AwardItem.encode(message.awards[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DailyItem message, length delimited. Does not implicitly {@link personal.DailyItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof personal.DailyItem
         * @static
         * @param {personal.IDailyItem} message DailyItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DailyItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DailyItem message from the specified reader or buffer.
         * @function decode
         * @memberof personal.DailyItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {personal.DailyItem} DailyItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DailyItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.personal.DailyItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.day = reader.int32();
                    break;
                case 2:
                    message.awardStatus = reader.int32();
                    break;
                case 3:
                    if (!(message.awards && message.awards.length))
                        message.awards = [];
                    message.awards.push($root.personal.AwardItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DailyItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof personal.DailyItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {personal.DailyItem} DailyItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DailyItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DailyItem message.
         * @function verify
         * @memberof personal.DailyItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DailyItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.day != null && message.hasOwnProperty("day"))
                if (!$util.isInteger(message.day))
                    return "day: integer expected";
            if (message.awardStatus != null && message.hasOwnProperty("awardStatus"))
                if (!$util.isInteger(message.awardStatus))
                    return "awardStatus: integer expected";
            if (message.awards != null && message.hasOwnProperty("awards")) {
                if (!Array.isArray(message.awards))
                    return "awards: array expected";
                for (var i = 0; i < message.awards.length; ++i) {
                    var error = $root.personal.AwardItem.verify(message.awards[i]);
                    if (error)
                        return "awards." + error;
                }
            }
            return null;
        };

        /**
         * Creates a DailyItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof personal.DailyItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {personal.DailyItem} DailyItem
         */
        DailyItem.fromObject = function fromObject(object) {
            if (object instanceof $root.personal.DailyItem)
                return object;
            var message = new $root.personal.DailyItem();
            if (object.day != null)
                message.day = object.day | 0;
            if (object.awardStatus != null)
                message.awardStatus = object.awardStatus | 0;
            if (object.awards) {
                if (!Array.isArray(object.awards))
                    throw TypeError(".personal.DailyItem.awards: array expected");
                message.awards = [];
                for (var i = 0; i < object.awards.length; ++i) {
                    if (typeof object.awards[i] !== "object")
                        throw TypeError(".personal.DailyItem.awards: object expected");
                    message.awards[i] = $root.personal.AwardItem.fromObject(object.awards[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a DailyItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof personal.DailyItem
         * @static
         * @param {personal.DailyItem} message DailyItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DailyItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.awards = [];
            if (options.defaults) {
                object.day = 0;
                object.awardStatus = 0;
            }
            if (message.day != null && message.hasOwnProperty("day"))
                object.day = message.day;
            if (message.awardStatus != null && message.hasOwnProperty("awardStatus"))
                object.awardStatus = message.awardStatus;
            if (message.awards && message.awards.length) {
                object.awards = [];
                for (var j = 0; j < message.awards.length; ++j)
                    object.awards[j] = $root.personal.AwardItem.toObject(message.awards[j], options);
            }
            return object;
        };

        /**
         * Converts this DailyItem to JSON.
         * @function toJSON
         * @memberof personal.DailyItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DailyItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DailyItem;
    })();

    personal.AccumulateItem = (function() {

        /**
         * Properties of an AccumulateItem.
         * @memberof personal
         * @interface IAccumulateItem
         * @property {number|null} [count] AccumulateItem count
         * @property {number|null} [awardStatus] AccumulateItem awardStatus
         * @property {Array.<personal.IAwardItem>|null} [awards] AccumulateItem awards
         */

        /**
         * Constructs a new AccumulateItem.
         * @memberof personal
         * @classdesc Represents an AccumulateItem.
         * @implements IAccumulateItem
         * @constructor
         * @param {personal.IAccumulateItem=} [properties] Properties to set
         */
        function AccumulateItem(properties) {
            this.awards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccumulateItem count.
         * @member {number} count
         * @memberof personal.AccumulateItem
         * @instance
         */
        AccumulateItem.prototype.count = 0;

        /**
         * AccumulateItem awardStatus.
         * @member {number} awardStatus
         * @memberof personal.AccumulateItem
         * @instance
         */
        AccumulateItem.prototype.awardStatus = 0;

        /**
         * AccumulateItem awards.
         * @member {Array.<personal.IAwardItem>} awards
         * @memberof personal.AccumulateItem
         * @instance
         */
        AccumulateItem.prototype.awards = $util.emptyArray;

        /**
         * Creates a new AccumulateItem instance using the specified properties.
         * @function create
         * @memberof personal.AccumulateItem
         * @static
         * @param {personal.IAccumulateItem=} [properties] Properties to set
         * @returns {personal.AccumulateItem} AccumulateItem instance
         */
        AccumulateItem.create = function create(properties) {
            return new AccumulateItem(properties);
        };

        /**
         * Encodes the specified AccumulateItem message. Does not implicitly {@link personal.AccumulateItem.verify|verify} messages.
         * @function encode
         * @memberof personal.AccumulateItem
         * @static
         * @param {personal.IAccumulateItem} message AccumulateItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccumulateItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.count != null && message.hasOwnProperty("count"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.count);
            if (message.awardStatus != null && message.hasOwnProperty("awardStatus"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.awardStatus);
            if (message.awards != null && message.awards.length)
                for (var i = 0; i < message.awards.length; ++i)
                    $root.personal.AwardItem.encode(message.awards[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AccumulateItem message, length delimited. Does not implicitly {@link personal.AccumulateItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof personal.AccumulateItem
         * @static
         * @param {personal.IAccumulateItem} message AccumulateItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccumulateItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AccumulateItem message from the specified reader or buffer.
         * @function decode
         * @memberof personal.AccumulateItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {personal.AccumulateItem} AccumulateItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccumulateItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.personal.AccumulateItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.count = reader.int32();
                    break;
                case 2:
                    message.awardStatus = reader.int32();
                    break;
                case 3:
                    if (!(message.awards && message.awards.length))
                        message.awards = [];
                    message.awards.push($root.personal.AwardItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AccumulateItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof personal.AccumulateItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {personal.AccumulateItem} AccumulateItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccumulateItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AccumulateItem message.
         * @function verify
         * @memberof personal.AccumulateItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AccumulateItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.count != null && message.hasOwnProperty("count"))
                if (!$util.isInteger(message.count))
                    return "count: integer expected";
            if (message.awardStatus != null && message.hasOwnProperty("awardStatus"))
                if (!$util.isInteger(message.awardStatus))
                    return "awardStatus: integer expected";
            if (message.awards != null && message.hasOwnProperty("awards")) {
                if (!Array.isArray(message.awards))
                    return "awards: array expected";
                for (var i = 0; i < message.awards.length; ++i) {
                    var error = $root.personal.AwardItem.verify(message.awards[i]);
                    if (error)
                        return "awards." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AccumulateItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof personal.AccumulateItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {personal.AccumulateItem} AccumulateItem
         */
        AccumulateItem.fromObject = function fromObject(object) {
            if (object instanceof $root.personal.AccumulateItem)
                return object;
            var message = new $root.personal.AccumulateItem();
            if (object.count != null)
                message.count = object.count | 0;
            if (object.awardStatus != null)
                message.awardStatus = object.awardStatus | 0;
            if (object.awards) {
                if (!Array.isArray(object.awards))
                    throw TypeError(".personal.AccumulateItem.awards: array expected");
                message.awards = [];
                for (var i = 0; i < object.awards.length; ++i) {
                    if (typeof object.awards[i] !== "object")
                        throw TypeError(".personal.AccumulateItem.awards: object expected");
                    message.awards[i] = $root.personal.AwardItem.fromObject(object.awards[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AccumulateItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof personal.AccumulateItem
         * @static
         * @param {personal.AccumulateItem} message AccumulateItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccumulateItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.awards = [];
            if (options.defaults) {
                object.count = 0;
                object.awardStatus = 0;
            }
            if (message.count != null && message.hasOwnProperty("count"))
                object.count = message.count;
            if (message.awardStatus != null && message.hasOwnProperty("awardStatus"))
                object.awardStatus = message.awardStatus;
            if (message.awards && message.awards.length) {
                object.awards = [];
                for (var j = 0; j < message.awards.length; ++j)
                    object.awards[j] = $root.personal.AwardItem.toObject(message.awards[j], options);
            }
            return object;
        };

        /**
         * Converts this AccumulateItem to JSON.
         * @function toJSON
         * @memberof personal.AccumulateItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccumulateItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccumulateItem;
    })();

    personal.UserItem = (function() {

        /**
         * Properties of a UserItem.
         * @memberof personal
         * @interface IUserItem
         * @property {number|Long|null} [uid] UserItem uid
         * @property {string|null} [daily] UserItem daily
         * @property {number|Long|null} [dailyTime] UserItem dailyTime
         * @property {string|null} [accumulate] UserItem accumulate
         * @property {number|Long|null} [accumulateTime] UserItem accumulateTime
         */

        /**
         * Constructs a new UserItem.
         * @memberof personal
         * @classdesc Represents a UserItem.
         * @implements IUserItem
         * @constructor
         * @param {personal.IUserItem=} [properties] Properties to set
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
         * @memberof personal.UserItem
         * @instance
         */
        UserItem.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserItem daily.
         * @member {string} daily
         * @memberof personal.UserItem
         * @instance
         */
        UserItem.prototype.daily = "";

        /**
         * UserItem dailyTime.
         * @member {number|Long} dailyTime
         * @memberof personal.UserItem
         * @instance
         */
        UserItem.prototype.dailyTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserItem accumulate.
         * @member {string} accumulate
         * @memberof personal.UserItem
         * @instance
         */
        UserItem.prototype.accumulate = "";

        /**
         * UserItem accumulateTime.
         * @member {number|Long} accumulateTime
         * @memberof personal.UserItem
         * @instance
         */
        UserItem.prototype.accumulateTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new UserItem instance using the specified properties.
         * @function create
         * @memberof personal.UserItem
         * @static
         * @param {personal.IUserItem=} [properties] Properties to set
         * @returns {personal.UserItem} UserItem instance
         */
        UserItem.create = function create(properties) {
            return new UserItem(properties);
        };

        /**
         * Encodes the specified UserItem message. Does not implicitly {@link personal.UserItem.verify|verify} messages.
         * @function encode
         * @memberof personal.UserItem
         * @static
         * @param {personal.IUserItem} message UserItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            if (message.daily != null && message.hasOwnProperty("daily"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.daily);
            if (message.dailyTime != null && message.hasOwnProperty("dailyTime"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.dailyTime);
            if (message.accumulate != null && message.hasOwnProperty("accumulate"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.accumulate);
            if (message.accumulateTime != null && message.hasOwnProperty("accumulateTime"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.accumulateTime);
            return writer;
        };

        /**
         * Encodes the specified UserItem message, length delimited. Does not implicitly {@link personal.UserItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof personal.UserItem
         * @static
         * @param {personal.IUserItem} message UserItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserItem message from the specified reader or buffer.
         * @function decode
         * @memberof personal.UserItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {personal.UserItem} UserItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.personal.UserItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int64();
                    break;
                case 2:
                    message.daily = reader.string();
                    break;
                case 3:
                    message.dailyTime = reader.int64();
                    break;
                case 4:
                    message.accumulate = reader.string();
                    break;
                case 5:
                    message.accumulateTime = reader.int64();
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
         * @memberof personal.UserItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {personal.UserItem} UserItem
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
         * @memberof personal.UserItem
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
            if (message.daily != null && message.hasOwnProperty("daily"))
                if (!$util.isString(message.daily))
                    return "daily: string expected";
            if (message.dailyTime != null && message.hasOwnProperty("dailyTime"))
                if (!$util.isInteger(message.dailyTime) && !(message.dailyTime && $util.isInteger(message.dailyTime.low) && $util.isInteger(message.dailyTime.high)))
                    return "dailyTime: integer|Long expected";
            if (message.accumulate != null && message.hasOwnProperty("accumulate"))
                if (!$util.isString(message.accumulate))
                    return "accumulate: string expected";
            if (message.accumulateTime != null && message.hasOwnProperty("accumulateTime"))
                if (!$util.isInteger(message.accumulateTime) && !(message.accumulateTime && $util.isInteger(message.accumulateTime.low) && $util.isInteger(message.accumulateTime.high)))
                    return "accumulateTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a UserItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof personal.UserItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {personal.UserItem} UserItem
         */
        UserItem.fromObject = function fromObject(object) {
            if (object instanceof $root.personal.UserItem)
                return object;
            var message = new $root.personal.UserItem();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unpersonaled = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.daily != null)
                message.daily = String(object.daily);
            if (object.dailyTime != null)
                if ($util.Long)
                    (message.dailyTime = $util.Long.fromValue(object.dailyTime)).unpersonaled = false;
                else if (typeof object.dailyTime === "string")
                    message.dailyTime = parseInt(object.dailyTime, 10);
                else if (typeof object.dailyTime === "number")
                    message.dailyTime = object.dailyTime;
                else if (typeof object.dailyTime === "object")
                    message.dailyTime = new $util.LongBits(object.dailyTime.low >>> 0, object.dailyTime.high >>> 0).toNumber();
            if (object.accumulate != null)
                message.accumulate = String(object.accumulate);
            if (object.accumulateTime != null)
                if ($util.Long)
                    (message.accumulateTime = $util.Long.fromValue(object.accumulateTime)).unpersonaled = false;
                else if (typeof object.accumulateTime === "string")
                    message.accumulateTime = parseInt(object.accumulateTime, 10);
                else if (typeof object.accumulateTime === "number")
                    message.accumulateTime = object.accumulateTime;
                else if (typeof object.accumulateTime === "object")
                    message.accumulateTime = new $util.LongBits(object.accumulateTime.low >>> 0, object.accumulateTime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a UserItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof personal.UserItem
         * @static
         * @param {personal.UserItem} message UserItem
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
                object.daily = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.dailyTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dailyTime = options.longs === String ? "0" : 0;
                object.accumulate = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.accumulateTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.accumulateTime = options.longs === String ? "0" : 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.daily != null && message.hasOwnProperty("daily"))
                object.daily = message.daily;
            if (message.dailyTime != null && message.hasOwnProperty("dailyTime"))
                if (typeof message.dailyTime === "number")
                    object.dailyTime = options.longs === String ? String(message.dailyTime) : message.dailyTime;
                else
                    object.dailyTime = options.longs === String ? $util.Long.prototype.toString.call(message.dailyTime) : options.longs === Number ? new $util.LongBits(message.dailyTime.low >>> 0, message.dailyTime.high >>> 0).toNumber() : message.dailyTime;
            if (message.accumulate != null && message.hasOwnProperty("accumulate"))
                object.accumulate = message.accumulate;
            if (message.accumulateTime != null && message.hasOwnProperty("accumulateTime"))
                if (typeof message.accumulateTime === "number")
                    object.accumulateTime = options.longs === String ? String(message.accumulateTime) : message.accumulateTime;
                else
                    object.accumulateTime = options.longs === String ? $util.Long.prototype.toString.call(message.accumulateTime) : options.longs === Number ? new $util.LongBits(message.accumulateTime.low >>> 0, message.accumulateTime.high >>> 0).toNumber() : message.accumulateTime;
            return object;
        };

        /**
         * Converts this UserItem to JSON.
         * @function toJSON
         * @memberof personal.UserItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserItem;
    })();

    personal.GetPersonalProgressRsp = (function() {

        /**
         * Properties of a GetPersonalProgressRsp.
         * @memberof personal
         * @interface IGetPersonalProgressRsp
         * @property {number|null} [errCode] GetPersonalProgressRsp errCode
         * @property {string|null} [errMsg] GetPersonalProgressRsp errMsg
         * @property {number|Long|null} [dailyTime] GetPersonalProgressRsp dailyTime
         * @property {number|Long|null} [accumulateTime] GetPersonalProgressRsp accumulateTime
         * @property {Array.<personal.IDailyItem>|null} [dailyItems] GetPersonalProgressRsp dailyItems
         * @property {Array.<personal.IAccumulateItem>|null} [accumulateItems] GetPersonalProgressRsp accumulateItems
         */

        /**
         * Constructs a new GetPersonalProgressRsp.
         * @memberof personal
         * @classdesc Represents a GetPersonalProgressRsp.
         * @implements IGetPersonalProgressRsp
         * @constructor
         * @param {personal.IGetPersonalProgressRsp=} [properties] Properties to set
         */
        function GetPersonalProgressRsp(properties) {
            this.dailyItems = [];
            this.accumulateItems = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetPersonalProgressRsp errCode.
         * @member {number} errCode
         * @memberof personal.GetPersonalProgressRsp
         * @instance
         */
        GetPersonalProgressRsp.prototype.errCode = 0;

        /**
         * GetPersonalProgressRsp errMsg.
         * @member {string} errMsg
         * @memberof personal.GetPersonalProgressRsp
         * @instance
         */
        GetPersonalProgressRsp.prototype.errMsg = "";

        /**
         * GetPersonalProgressRsp dailyTime.
         * @member {number|Long} dailyTime
         * @memberof personal.GetPersonalProgressRsp
         * @instance
         */
        GetPersonalProgressRsp.prototype.dailyTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetPersonalProgressRsp accumulateTime.
         * @member {number|Long} accumulateTime
         * @memberof personal.GetPersonalProgressRsp
         * @instance
         */
        GetPersonalProgressRsp.prototype.accumulateTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetPersonalProgressRsp dailyItems.
         * @member {Array.<personal.IDailyItem>} dailyItems
         * @memberof personal.GetPersonalProgressRsp
         * @instance
         */
        GetPersonalProgressRsp.prototype.dailyItems = $util.emptyArray;

        /**
         * GetPersonalProgressRsp accumulateItems.
         * @member {Array.<personal.IAccumulateItem>} accumulateItems
         * @memberof personal.GetPersonalProgressRsp
         * @instance
         */
        GetPersonalProgressRsp.prototype.accumulateItems = $util.emptyArray;

        /**
         * Creates a new GetPersonalProgressRsp instance using the specified properties.
         * @function create
         * @memberof personal.GetPersonalProgressRsp
         * @static
         * @param {personal.IGetPersonalProgressRsp=} [properties] Properties to set
         * @returns {personal.GetPersonalProgressRsp} GetPersonalProgressRsp instance
         */
        GetPersonalProgressRsp.create = function create(properties) {
            return new GetPersonalProgressRsp(properties);
        };

        /**
         * Encodes the specified GetPersonalProgressRsp message. Does not implicitly {@link personal.GetPersonalProgressRsp.verify|verify} messages.
         * @function encode
         * @memberof personal.GetPersonalProgressRsp
         * @static
         * @param {personal.IGetPersonalProgressRsp} message GetPersonalProgressRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPersonalProgressRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            if (message.dailyTime != null && message.hasOwnProperty("dailyTime"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.dailyTime);
            if (message.accumulateTime != null && message.hasOwnProperty("accumulateTime"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.accumulateTime);
            if (message.dailyItems != null && message.dailyItems.length)
                for (var i = 0; i < message.dailyItems.length; ++i)
                    $root.personal.DailyItem.encode(message.dailyItems[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.accumulateItems != null && message.accumulateItems.length)
                for (var i = 0; i < message.accumulateItems.length; ++i)
                    $root.personal.AccumulateItem.encode(message.accumulateItems[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetPersonalProgressRsp message, length delimited. Does not implicitly {@link personal.GetPersonalProgressRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof personal.GetPersonalProgressRsp
         * @static
         * @param {personal.IGetPersonalProgressRsp} message GetPersonalProgressRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPersonalProgressRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetPersonalProgressRsp message from the specified reader or buffer.
         * @function decode
         * @memberof personal.GetPersonalProgressRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {personal.GetPersonalProgressRsp} GetPersonalProgressRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPersonalProgressRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.personal.GetPersonalProgressRsp();
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
                    message.dailyTime = reader.int64();
                    break;
                case 4:
                    message.accumulateTime = reader.int64();
                    break;
                case 5:
                    if (!(message.dailyItems && message.dailyItems.length))
                        message.dailyItems = [];
                    message.dailyItems.push($root.personal.DailyItem.decode(reader, reader.uint32()));
                    break;
                case 6:
                    if (!(message.accumulateItems && message.accumulateItems.length))
                        message.accumulateItems = [];
                    message.accumulateItems.push($root.personal.AccumulateItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetPersonalProgressRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof personal.GetPersonalProgressRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {personal.GetPersonalProgressRsp} GetPersonalProgressRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPersonalProgressRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetPersonalProgressRsp message.
         * @function verify
         * @memberof personal.GetPersonalProgressRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetPersonalProgressRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                if (!$util.isInteger(message.errCode))
                    return "errCode: integer expected";
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                if (!$util.isString(message.errMsg))
                    return "errMsg: string expected";
            if (message.dailyTime != null && message.hasOwnProperty("dailyTime"))
                if (!$util.isInteger(message.dailyTime) && !(message.dailyTime && $util.isInteger(message.dailyTime.low) && $util.isInteger(message.dailyTime.high)))
                    return "dailyTime: integer|Long expected";
            if (message.accumulateTime != null && message.hasOwnProperty("accumulateTime"))
                if (!$util.isInteger(message.accumulateTime) && !(message.accumulateTime && $util.isInteger(message.accumulateTime.low) && $util.isInteger(message.accumulateTime.high)))
                    return "accumulateTime: integer|Long expected";
            if (message.dailyItems != null && message.hasOwnProperty("dailyItems")) {
                if (!Array.isArray(message.dailyItems))
                    return "dailyItems: array expected";
                for (var i = 0; i < message.dailyItems.length; ++i) {
                    var error = $root.personal.DailyItem.verify(message.dailyItems[i]);
                    if (error)
                        return "dailyItems." + error;
                }
            }
            if (message.accumulateItems != null && message.hasOwnProperty("accumulateItems")) {
                if (!Array.isArray(message.accumulateItems))
                    return "accumulateItems: array expected";
                for (var i = 0; i < message.accumulateItems.length; ++i) {
                    var error = $root.personal.AccumulateItem.verify(message.accumulateItems[i]);
                    if (error)
                        return "accumulateItems." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetPersonalProgressRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof personal.GetPersonalProgressRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {personal.GetPersonalProgressRsp} GetPersonalProgressRsp
         */
        GetPersonalProgressRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.personal.GetPersonalProgressRsp)
                return object;
            var message = new $root.personal.GetPersonalProgressRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            if (object.dailyTime != null)
                if ($util.Long)
                    (message.dailyTime = $util.Long.fromValue(object.dailyTime)).unpersonaled = false;
                else if (typeof object.dailyTime === "string")
                    message.dailyTime = parseInt(object.dailyTime, 10);
                else if (typeof object.dailyTime === "number")
                    message.dailyTime = object.dailyTime;
                else if (typeof object.dailyTime === "object")
                    message.dailyTime = new $util.LongBits(object.dailyTime.low >>> 0, object.dailyTime.high >>> 0).toNumber();
            if (object.accumulateTime != null)
                if ($util.Long)
                    (message.accumulateTime = $util.Long.fromValue(object.accumulateTime)).unpersonaled = false;
                else if (typeof object.accumulateTime === "string")
                    message.accumulateTime = parseInt(object.accumulateTime, 10);
                else if (typeof object.accumulateTime === "number")
                    message.accumulateTime = object.accumulateTime;
                else if (typeof object.accumulateTime === "object")
                    message.accumulateTime = new $util.LongBits(object.accumulateTime.low >>> 0, object.accumulateTime.high >>> 0).toNumber();
            if (object.dailyItems) {
                if (!Array.isArray(object.dailyItems))
                    throw TypeError(".personal.GetPersonalProgressRsp.dailyItems: array expected");
                message.dailyItems = [];
                for (var i = 0; i < object.dailyItems.length; ++i) {
                    if (typeof object.dailyItems[i] !== "object")
                        throw TypeError(".personal.GetPersonalProgressRsp.dailyItems: object expected");
                    message.dailyItems[i] = $root.personal.DailyItem.fromObject(object.dailyItems[i]);
                }
            }
            if (object.accumulateItems) {
                if (!Array.isArray(object.accumulateItems))
                    throw TypeError(".personal.GetPersonalProgressRsp.accumulateItems: array expected");
                message.accumulateItems = [];
                for (var i = 0; i < object.accumulateItems.length; ++i) {
                    if (typeof object.accumulateItems[i] !== "object")
                        throw TypeError(".personal.GetPersonalProgressRsp.accumulateItems: object expected");
                    message.accumulateItems[i] = $root.personal.AccumulateItem.fromObject(object.accumulateItems[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetPersonalProgressRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof personal.GetPersonalProgressRsp
         * @static
         * @param {personal.GetPersonalProgressRsp} message GetPersonalProgressRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetPersonalProgressRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.dailyItems = [];
                object.accumulateItems = [];
            }
            if (options.defaults) {
                object.errCode = 0;
                object.errMsg = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.dailyTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dailyTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.accumulateTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.accumulateTime = options.longs === String ? "0" : 0;
            }
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                object.errCode = message.errCode;
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                object.errMsg = message.errMsg;
            if (message.dailyTime != null && message.hasOwnProperty("dailyTime"))
                if (typeof message.dailyTime === "number")
                    object.dailyTime = options.longs === String ? String(message.dailyTime) : message.dailyTime;
                else
                    object.dailyTime = options.longs === String ? $util.Long.prototype.toString.call(message.dailyTime) : options.longs === Number ? new $util.LongBits(message.dailyTime.low >>> 0, message.dailyTime.high >>> 0).toNumber() : message.dailyTime;
            if (message.accumulateTime != null && message.hasOwnProperty("accumulateTime"))
                if (typeof message.accumulateTime === "number")
                    object.accumulateTime = options.longs === String ? String(message.accumulateTime) : message.accumulateTime;
                else
                    object.accumulateTime = options.longs === String ? $util.Long.prototype.toString.call(message.accumulateTime) : options.longs === Number ? new $util.LongBits(message.accumulateTime.low >>> 0, message.accumulateTime.high >>> 0).toNumber() : message.accumulateTime;
            if (message.dailyItems && message.dailyItems.length) {
                object.dailyItems = [];
                for (var j = 0; j < message.dailyItems.length; ++j)
                    object.dailyItems[j] = $root.personal.DailyItem.toObject(message.dailyItems[j], options);
            }
            if (message.accumulateItems && message.accumulateItems.length) {
                object.accumulateItems = [];
                for (var j = 0; j < message.accumulateItems.length; ++j)
                    object.accumulateItems[j] = $root.personal.AccumulateItem.toObject(message.accumulateItems[j], options);
            }
            return object;
        };

        /**
         * Converts this GetPersonalProgressRsp to JSON.
         * @function toJSON
         * @memberof personal.GetPersonalProgressRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetPersonalProgressRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetPersonalProgressRsp;
    })();

    personal.GetPersonalAwardReq = (function() {

        /**
         * Properties of a GetPersonalAwardReq.
         * @memberof personal
         * @interface IGetPersonalAwardReq
         * @property {number|Long|null} [uid] GetPersonalAwardReq uid
         * @property {number|null} [personalType] GetPersonalAwardReq personalType
         * @property {number|null} [personalDay] GetPersonalAwardReq personalDay
         * @property {number|null} [awardType] GetPersonalAwardReq awardType
         */

        /**
         * Constructs a new GetPersonalAwardReq.
         * @memberof personal
         * @classdesc Represents a GetPersonalAwardReq.
         * @implements IGetPersonalAwardReq
         * @constructor
         * @param {personal.IGetPersonalAwardReq=} [properties] Properties to set
         */
        function GetPersonalAwardReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetPersonalAwardReq uid.
         * @member {number|Long} uid
         * @memberof personal.GetPersonalAwardReq
         * @instance
         */
        GetPersonalAwardReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetPersonalAwardReq personalType.
         * @member {number} personalType
         * @memberof personal.GetPersonalAwardReq
         * @instance
         */
        GetPersonalAwardReq.prototype.personalType = 0;

        /**
         * GetPersonalAwardReq personalDay.
         * @member {number} personalDay
         * @memberof personal.GetPersonalAwardReq
         * @instance
         */
        GetPersonalAwardReq.prototype.personalDay = 0;

        /**
         * GetPersonalAwardReq awardType.
         * @member {number} awardType
         * @memberof personal.GetPersonalAwardReq
         * @instance
         */
        GetPersonalAwardReq.prototype.awardType = 0;

        /**
         * Creates a new GetPersonalAwardReq instance using the specified properties.
         * @function create
         * @memberof personal.GetPersonalAwardReq
         * @static
         * @param {personal.IGetPersonalAwardReq=} [properties] Properties to set
         * @returns {personal.GetPersonalAwardReq} GetPersonalAwardReq instance
         */
        GetPersonalAwardReq.create = function create(properties) {
            return new GetPersonalAwardReq(properties);
        };

        /**
         * Encodes the specified GetPersonalAwardReq message. Does not implicitly {@link personal.GetPersonalAwardReq.verify|verify} messages.
         * @function encode
         * @memberof personal.GetPersonalAwardReq
         * @static
         * @param {personal.IGetPersonalAwardReq} message GetPersonalAwardReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPersonalAwardReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            if (message.personalType != null && message.hasOwnProperty("personalType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.personalType);
            if (message.personalDay != null && message.hasOwnProperty("personalDay"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.personalDay);
            if (message.awardType != null && message.hasOwnProperty("awardType"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.awardType);
            return writer;
        };

        /**
         * Encodes the specified GetPersonalAwardReq message, length delimited. Does not implicitly {@link personal.GetPersonalAwardReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof personal.GetPersonalAwardReq
         * @static
         * @param {personal.IGetPersonalAwardReq} message GetPersonalAwardReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPersonalAwardReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetPersonalAwardReq message from the specified reader or buffer.
         * @function decode
         * @memberof personal.GetPersonalAwardReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {personal.GetPersonalAwardReq} GetPersonalAwardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPersonalAwardReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.personal.GetPersonalAwardReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int64();
                    break;
                case 2:
                    message.personalType = reader.int32();
                    break;
                case 3:
                    message.personalDay = reader.int32();
                    break;
                case 4:
                    message.awardType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetPersonalAwardReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof personal.GetPersonalAwardReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {personal.GetPersonalAwardReq} GetPersonalAwardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPersonalAwardReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetPersonalAwardReq message.
         * @function verify
         * @memberof personal.GetPersonalAwardReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetPersonalAwardReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.personalType != null && message.hasOwnProperty("personalType"))
                if (!$util.isInteger(message.personalType))
                    return "personalType: integer expected";
            if (message.personalDay != null && message.hasOwnProperty("personalDay"))
                if (!$util.isInteger(message.personalDay))
                    return "personalDay: integer expected";
            if (message.awardType != null && message.hasOwnProperty("awardType"))
                if (!$util.isInteger(message.awardType))
                    return "awardType: integer expected";
            return null;
        };

        /**
         * Creates a GetPersonalAwardReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof personal.GetPersonalAwardReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {personal.GetPersonalAwardReq} GetPersonalAwardReq
         */
        GetPersonalAwardReq.fromObject = function fromObject(object) {
            if (object instanceof $root.personal.GetPersonalAwardReq)
                return object;
            var message = new $root.personal.GetPersonalAwardReq();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unpersonaled = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.personalType != null)
                message.personalType = object.personalType | 0;
            if (object.personalDay != null)
                message.personalDay = object.personalDay | 0;
            if (object.awardType != null)
                message.awardType = object.awardType | 0;
            return message;
        };

        /**
         * Creates a plain object from a GetPersonalAwardReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof personal.GetPersonalAwardReq
         * @static
         * @param {personal.GetPersonalAwardReq} message GetPersonalAwardReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetPersonalAwardReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.personalType = 0;
                object.personalDay = 0;
                object.awardType = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.personalType != null && message.hasOwnProperty("personalType"))
                object.personalType = message.personalType;
            if (message.personalDay != null && message.hasOwnProperty("personalDay"))
                object.personalDay = message.personalDay;
            if (message.awardType != null && message.hasOwnProperty("awardType"))
                object.awardType = message.awardType;
            return object;
        };

        /**
         * Converts this GetPersonalAwardReq to JSON.
         * @function toJSON
         * @memberof personal.GetPersonalAwardReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetPersonalAwardReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetPersonalAwardReq;
    })();

    personal.GetPersonalAwardRsp = (function() {

        /**
         * Properties of a GetPersonalAwardRsp.
         * @memberof personal
         * @interface IGetPersonalAwardRsp
         * @property {number|null} [errCode] GetPersonalAwardRsp errCode
         * @property {string|null} [errMsg] GetPersonalAwardRsp errMsg
         * @property {Array.<personal.IAwardItem>|null} [awards] GetPersonalAwardRsp awards
         */

        /**
         * Constructs a new GetPersonalAwardRsp.
         * @memberof personal
         * @classdesc Represents a GetPersonalAwardRsp.
         * @implements IGetPersonalAwardRsp
         * @constructor
         * @param {personal.IGetPersonalAwardRsp=} [properties] Properties to set
         */
        function GetPersonalAwardRsp(properties) {
            this.awards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetPersonalAwardRsp errCode.
         * @member {number} errCode
         * @memberof personal.GetPersonalAwardRsp
         * @instance
         */
        GetPersonalAwardRsp.prototype.errCode = 0;

        /**
         * GetPersonalAwardRsp errMsg.
         * @member {string} errMsg
         * @memberof personal.GetPersonalAwardRsp
         * @instance
         */
        GetPersonalAwardRsp.prototype.errMsg = "";

        /**
         * GetPersonalAwardRsp awards.
         * @member {Array.<personal.IAwardItem>} awards
         * @memberof personal.GetPersonalAwardRsp
         * @instance
         */
        GetPersonalAwardRsp.prototype.awards = $util.emptyArray;

        /**
         * Creates a new GetPersonalAwardRsp instance using the specified properties.
         * @function create
         * @memberof personal.GetPersonalAwardRsp
         * @static
         * @param {personal.IGetPersonalAwardRsp=} [properties] Properties to set
         * @returns {personal.GetPersonalAwardRsp} GetPersonalAwardRsp instance
         */
        GetPersonalAwardRsp.create = function create(properties) {
            return new GetPersonalAwardRsp(properties);
        };

        /**
         * Encodes the specified GetPersonalAwardRsp message. Does not implicitly {@link personal.GetPersonalAwardRsp.verify|verify} messages.
         * @function encode
         * @memberof personal.GetPersonalAwardRsp
         * @static
         * @param {personal.IGetPersonalAwardRsp} message GetPersonalAwardRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPersonalAwardRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            if (message.awards != null && message.awards.length)
                for (var i = 0; i < message.awards.length; ++i)
                    $root.personal.AwardItem.encode(message.awards[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetPersonalAwardRsp message, length delimited. Does not implicitly {@link personal.GetPersonalAwardRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof personal.GetPersonalAwardRsp
         * @static
         * @param {personal.IGetPersonalAwardRsp} message GetPersonalAwardRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPersonalAwardRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetPersonalAwardRsp message from the specified reader or buffer.
         * @function decode
         * @memberof personal.GetPersonalAwardRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {personal.GetPersonalAwardRsp} GetPersonalAwardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPersonalAwardRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.personal.GetPersonalAwardRsp();
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
                    if (!(message.awards && message.awards.length))
                        message.awards = [];
                    message.awards.push($root.personal.AwardItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetPersonalAwardRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof personal.GetPersonalAwardRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {personal.GetPersonalAwardRsp} GetPersonalAwardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPersonalAwardRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetPersonalAwardRsp message.
         * @function verify
         * @memberof personal.GetPersonalAwardRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetPersonalAwardRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                if (!$util.isInteger(message.errCode))
                    return "errCode: integer expected";
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                if (!$util.isString(message.errMsg))
                    return "errMsg: string expected";
            if (message.awards != null && message.hasOwnProperty("awards")) {
                if (!Array.isArray(message.awards))
                    return "awards: array expected";
                for (var i = 0; i < message.awards.length; ++i) {
                    var error = $root.personal.AwardItem.verify(message.awards[i]);
                    if (error)
                        return "awards." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetPersonalAwardRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof personal.GetPersonalAwardRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {personal.GetPersonalAwardRsp} GetPersonalAwardRsp
         */
        GetPersonalAwardRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.personal.GetPersonalAwardRsp)
                return object;
            var message = new $root.personal.GetPersonalAwardRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            if (object.awards) {
                if (!Array.isArray(object.awards))
                    throw TypeError(".personal.GetPersonalAwardRsp.awards: array expected");
                message.awards = [];
                for (var i = 0; i < object.awards.length; ++i) {
                    if (typeof object.awards[i] !== "object")
                        throw TypeError(".personal.GetPersonalAwardRsp.awards: object expected");
                    message.awards[i] = $root.personal.AwardItem.fromObject(object.awards[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetPersonalAwardRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof personal.GetPersonalAwardRsp
         * @static
         * @param {personal.GetPersonalAwardRsp} message GetPersonalAwardRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetPersonalAwardRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.awards = [];
            if (options.defaults) {
                object.errCode = 0;
                object.errMsg = "";
            }
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                object.errCode = message.errCode;
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                object.errMsg = message.errMsg;
            if (message.awards && message.awards.length) {
                object.awards = [];
                for (var j = 0; j < message.awards.length; ++j)
                    object.awards[j] = $root.personal.AwardItem.toObject(message.awards[j], options);
            }
            return object;
        };

        /**
         * Converts this GetPersonalAwardRsp to JSON.
         * @function toJSON
         * @memberof personal.GetPersonalAwardRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetPersonalAwardRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetPersonalAwardRsp;
    })();

    return personal;
})();

module.exports = $root.personal;
