/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.vip = (function() {

    /**
     * Namespace vip.
     * @exports vip
     * @namespace
     */
    var vip = {};

    vip.Vip = (function() {

        /**
         * Constructs a new Vip service.
         * @memberof vip
         * @classdesc Represents a Vip
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Vip(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Vip.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Vip;

        /**
         * Creates new Vip service using the specified rpc implementation.
         * @function create
         * @memberof vip.Vip
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Vip} RPC service. Useful where requests and/or responses are streamed.
         */
        Vip.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link vip.Vip#getVipConfig}.
         * @memberof vip.Vip
         * @typedef GetVipConfigCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {vip.GetVipConfigRsp} [response] GetVipConfigRsp
         */

        /**
         * Calls GetVipConfig.
         * @function getVipConfig
         * @memberof vip.Vip
         * @instance
         * @param {vip.IGetVipConfigReq} request GetVipConfigReq message or plain object
         * @param {vip.Vip.GetVipConfigCallback} callback Node-style callback called with the error, if any, and GetVipConfigRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Vip.prototype.getVipConfig = function getVipConfig(request, callback) {
            return this.rpcCall(getVipConfig, $root.vip.GetVipConfigReq, $root.vip.GetVipConfigRsp, request, callback);
        }, "name", { value: "GetVipConfig" });

        /**
         * Calls GetVipConfig.
         * @function getVipConfig
         * @memberof vip.Vip
         * @instance
         * @param {vip.IGetVipConfigReq} request GetVipConfigReq message or plain object
         * @returns {Promise<vip.GetVipConfigRsp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link vip.Vip#getSendVipConfig}.
         * @memberof vip.Vip
         * @typedef GetSendVipConfigCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {vip.GetSendVipConfigRsp} [response] GetSendVipConfigRsp
         */

        /**
         * Calls GetSendVipConfig.
         * @function getSendVipConfig
         * @memberof vip.Vip
         * @instance
         * @param {vip.IGetSendVipConfigReq} request GetSendVipConfigReq message or plain object
         * @param {vip.Vip.GetSendVipConfigCallback} callback Node-style callback called with the error, if any, and GetSendVipConfigRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Vip.prototype.getSendVipConfig = function getSendVipConfig(request, callback) {
            return this.rpcCall(getSendVipConfig, $root.vip.GetSendVipConfigReq, $root.vip.GetSendVipConfigRsp, request, callback);
        }, "name", { value: "GetSendVipConfig" });

        /**
         * Calls GetSendVipConfig.
         * @function getSendVipConfig
         * @memberof vip.Vip
         * @instance
         * @param {vip.IGetSendVipConfigReq} request GetSendVipConfigReq message or plain object
         * @returns {Promise<vip.GetSendVipConfigRsp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link vip.Vip#getVipUserLevel}.
         * @memberof vip.Vip
         * @typedef GetVipUserLevelCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {vip.GetVipUserLevelRsp} [response] GetVipUserLevelRsp
         */

        /**
         * Calls GetVipUserLevel.
         * @function getVipUserLevel
         * @memberof vip.Vip
         * @instance
         * @param {vip.IGetVipUserLevelReq} request GetVipUserLevelReq message or plain object
         * @param {vip.Vip.GetVipUserLevelCallback} callback Node-style callback called with the error, if any, and GetVipUserLevelRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Vip.prototype.getVipUserLevel = function getVipUserLevel(request, callback) {
            return this.rpcCall(getVipUserLevel, $root.vip.GetVipUserLevelReq, $root.vip.GetVipUserLevelRsp, request, callback);
        }, "name", { value: "GetVipUserLevel" });

        /**
         * Calls GetVipUserLevel.
         * @function getVipUserLevel
         * @memberof vip.Vip
         * @instance
         * @param {vip.IGetVipUserLevelReq} request GetVipUserLevelReq message or plain object
         * @returns {Promise<vip.GetVipUserLevelRsp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link vip.Vip#getVipAwards}.
         * @memberof vip.Vip
         * @typedef GetVipAwardsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {vip.GetVipAwardsRsp} [response] GetVipAwardsRsp
         */

        /**
         * Calls GetVipAwards.
         * @function getVipAwards
         * @memberof vip.Vip
         * @instance
         * @param {vip.IGetVipAwardsReq} request GetVipAwardsReq message or plain object
         * @param {vip.Vip.GetVipAwardsCallback} callback Node-style callback called with the error, if any, and GetVipAwardsRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Vip.prototype.getVipAwards = function getVipAwards(request, callback) {
            return this.rpcCall(getVipAwards, $root.vip.GetVipAwardsReq, $root.vip.GetVipAwardsRsp, request, callback);
        }, "name", { value: "GetVipAwards" });

        /**
         * Calls GetVipAwards.
         * @function getVipAwards
         * @memberof vip.Vip
         * @instance
         * @param {vip.IGetVipAwardsReq} request GetVipAwardsReq message or plain object
         * @returns {Promise<vip.GetVipAwardsRsp>} Promise
         * @variation 2
         */

        return Vip;
    })();

    vip.StateCode = (function() {

        /**
         * Properties of a StateCode.
         * @memberof vip
         * @interface IStateCode
         * @property {number|null} [id] StateCode id
         * @property {string|null} [msg] StateCode msg
         */

        /**
         * Constructs a new StateCode.
         * @memberof vip
         * @classdesc Represents a StateCode.
         * @implements IStateCode
         * @constructor
         * @param {vip.IStateCode=} [properties] Properties to set
         */
        function StateCode(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StateCode id.
         * @member {number} id
         * @memberof vip.StateCode
         * @instance
         */
        StateCode.prototype.id = 0;

        /**
         * StateCode msg.
         * @member {string} msg
         * @memberof vip.StateCode
         * @instance
         */
        StateCode.prototype.msg = "";

        /**
         * Creates a new StateCode instance using the specified properties.
         * @function create
         * @memberof vip.StateCode
         * @static
         * @param {vip.IStateCode=} [properties] Properties to set
         * @returns {vip.StateCode} StateCode instance
         */
        StateCode.create = function create(properties) {
            return new StateCode(properties);
        };

        /**
         * Encodes the specified StateCode message. Does not implicitly {@link vip.StateCode.verify|verify} messages.
         * @function encode
         * @memberof vip.StateCode
         * @static
         * @param {vip.IStateCode} message StateCode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StateCode.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.msg != null && message.hasOwnProperty("msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified StateCode message, length delimited. Does not implicitly {@link vip.StateCode.verify|verify} messages.
         * @function encodeDelimited
         * @memberof vip.StateCode
         * @static
         * @param {vip.IStateCode} message StateCode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StateCode.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StateCode message from the specified reader or buffer.
         * @function decode
         * @memberof vip.StateCode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {vip.StateCode} StateCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StateCode.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.vip.StateCode();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
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
         * Decodes a StateCode message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof vip.StateCode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {vip.StateCode} StateCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StateCode.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StateCode message.
         * @function verify
         * @memberof vip.StateCode
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StateCode.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates a StateCode message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof vip.StateCode
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {vip.StateCode} StateCode
         */
        StateCode.fromObject = function fromObject(object) {
            if (object instanceof $root.vip.StateCode)
                return object;
            var message = new $root.vip.StateCode();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a StateCode message. Also converts values to other types if specified.
         * @function toObject
         * @memberof vip.StateCode
         * @static
         * @param {vip.StateCode} message StateCode
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StateCode.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.msg = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this StateCode to JSON.
         * @function toJSON
         * @memberof vip.StateCode
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StateCode.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StateCode;
    })();

    vip.GetVipConfigReq = (function() {

        /**
         * Properties of a GetVipConfigReq.
         * @memberof vip
         * @interface IGetVipConfigReq
         * @property {number|Long|null} [level] GetVipConfigReq level
         */

        /**
         * Constructs a new GetVipConfigReq.
         * @memberof vip
         * @classdesc Represents a GetVipConfigReq.
         * @implements IGetVipConfigReq
         * @constructor
         * @param {vip.IGetVipConfigReq=} [properties] Properties to set
         */
        function GetVipConfigReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetVipConfigReq level.
         * @member {number|Long} level
         * @memberof vip.GetVipConfigReq
         * @instance
         */
        GetVipConfigReq.prototype.level = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GetVipConfigReq instance using the specified properties.
         * @function create
         * @memberof vip.GetVipConfigReq
         * @static
         * @param {vip.IGetVipConfigReq=} [properties] Properties to set
         * @returns {vip.GetVipConfigReq} GetVipConfigReq instance
         */
        GetVipConfigReq.create = function create(properties) {
            return new GetVipConfigReq(properties);
        };

        /**
         * Encodes the specified GetVipConfigReq message. Does not implicitly {@link vip.GetVipConfigReq.verify|verify} messages.
         * @function encode
         * @memberof vip.GetVipConfigReq
         * @static
         * @param {vip.IGetVipConfigReq} message GetVipConfigReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetVipConfigReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.level != null && message.hasOwnProperty("level"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.level);
            return writer;
        };

        /**
         * Encodes the specified GetVipConfigReq message, length delimited. Does not implicitly {@link vip.GetVipConfigReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof vip.GetVipConfigReq
         * @static
         * @param {vip.IGetVipConfigReq} message GetVipConfigReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetVipConfigReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetVipConfigReq message from the specified reader or buffer.
         * @function decode
         * @memberof vip.GetVipConfigReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {vip.GetVipConfigReq} GetVipConfigReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetVipConfigReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.vip.GetVipConfigReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.level = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetVipConfigReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof vip.GetVipConfigReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {vip.GetVipConfigReq} GetVipConfigReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetVipConfigReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetVipConfigReq message.
         * @function verify
         * @memberof vip.GetVipConfigReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetVipConfigReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.level != null && message.hasOwnProperty("level"))
                if (!$util.isInteger(message.level) && !(message.level && $util.isInteger(message.level.low) && $util.isInteger(message.level.high)))
                    return "level: integer|Long expected";
            return null;
        };

        /**
         * Creates a GetVipConfigReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof vip.GetVipConfigReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {vip.GetVipConfigReq} GetVipConfigReq
         */
        GetVipConfigReq.fromObject = function fromObject(object) {
            if (object instanceof $root.vip.GetVipConfigReq)
                return object;
            var message = new $root.vip.GetVipConfigReq();
            if (object.level != null)
                if ($util.Long)
                    (message.level = $util.Long.fromValue(object.level)).unsigned = false;
                else if (typeof object.level === "string")
                    message.level = parseInt(object.level, 10);
                else if (typeof object.level === "number")
                    message.level = object.level;
                else if (typeof object.level === "object")
                    message.level = new $util.LongBits(object.level.low >>> 0, object.level.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a GetVipConfigReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof vip.GetVipConfigReq
         * @static
         * @param {vip.GetVipConfigReq} message GetVipConfigReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetVipConfigReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.level = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.level = options.longs === String ? "0" : 0;
            if (message.level != null && message.hasOwnProperty("level"))
                if (typeof message.level === "number")
                    object.level = options.longs === String ? String(message.level) : message.level;
                else
                    object.level = options.longs === String ? $util.Long.prototype.toString.call(message.level) : options.longs === Number ? new $util.LongBits(message.level.low >>> 0, message.level.high >>> 0).toNumber() : message.level;
            return object;
        };

        /**
         * Converts this GetVipConfigReq to JSON.
         * @function toJSON
         * @memberof vip.GetVipConfigReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetVipConfigReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetVipConfigReq;
    })();

    vip.GetSendVipConfigReq = (function() {

        /**
         * Properties of a GetSendVipConfigReq.
         * @memberof vip
         * @interface IGetSendVipConfigReq
         */

        /**
         * Constructs a new GetSendVipConfigReq.
         * @memberof vip
         * @classdesc Represents a GetSendVipConfigReq.
         * @implements IGetSendVipConfigReq
         * @constructor
         * @param {vip.IGetSendVipConfigReq=} [properties] Properties to set
         */
        function GetSendVipConfigReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetSendVipConfigReq instance using the specified properties.
         * @function create
         * @memberof vip.GetSendVipConfigReq
         * @static
         * @param {vip.IGetSendVipConfigReq=} [properties] Properties to set
         * @returns {vip.GetSendVipConfigReq} GetSendVipConfigReq instance
         */
        GetSendVipConfigReq.create = function create(properties) {
            return new GetSendVipConfigReq(properties);
        };

        /**
         * Encodes the specified GetSendVipConfigReq message. Does not implicitly {@link vip.GetSendVipConfigReq.verify|verify} messages.
         * @function encode
         * @memberof vip.GetSendVipConfigReq
         * @static
         * @param {vip.IGetSendVipConfigReq} message GetSendVipConfigReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetSendVipConfigReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetSendVipConfigReq message, length delimited. Does not implicitly {@link vip.GetSendVipConfigReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof vip.GetSendVipConfigReq
         * @static
         * @param {vip.IGetSendVipConfigReq} message GetSendVipConfigReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetSendVipConfigReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetSendVipConfigReq message from the specified reader or buffer.
         * @function decode
         * @memberof vip.GetSendVipConfigReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {vip.GetSendVipConfigReq} GetSendVipConfigReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetSendVipConfigReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.vip.GetSendVipConfigReq();
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
         * Decodes a GetSendVipConfigReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof vip.GetSendVipConfigReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {vip.GetSendVipConfigReq} GetSendVipConfigReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetSendVipConfigReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetSendVipConfigReq message.
         * @function verify
         * @memberof vip.GetSendVipConfigReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetSendVipConfigReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a GetSendVipConfigReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof vip.GetSendVipConfigReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {vip.GetSendVipConfigReq} GetSendVipConfigReq
         */
        GetSendVipConfigReq.fromObject = function fromObject(object) {
            if (object instanceof $root.vip.GetSendVipConfigReq)
                return object;
            return new $root.vip.GetSendVipConfigReq();
        };

        /**
         * Creates a plain object from a GetSendVipConfigReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof vip.GetSendVipConfigReq
         * @static
         * @param {vip.GetSendVipConfigReq} message GetSendVipConfigReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetSendVipConfigReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GetSendVipConfigReq to JSON.
         * @function toJSON
         * @memberof vip.GetSendVipConfigReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetSendVipConfigReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetSendVipConfigReq;
    })();

    vip.AwardItem = (function() {

        /**
         * Properties of an AwardItem.
         * @memberof vip
         * @interface IAwardItem
         * @property {number|null} [propId] AwardItem propId
         * @property {number|Long|null} [minNum] AwardItem minNum
         * @property {number|Long|null} [maxNum] AwardItem maxNum
         * @property {number|Long|null} [effectTime] AwardItem effectTime
         * @property {number|null} [type] AwardItem type
         * @property {string|null} [icon] AwardItem icon
         * @property {string|null} [tip] AwardItem tip
         */

        /**
         * Constructs a new AwardItem.
         * @memberof vip
         * @classdesc Represents an AwardItem.
         * @implements IAwardItem
         * @constructor
         * @param {vip.IAwardItem=} [properties] Properties to set
         */
        function AwardItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AwardItem propId.
         * @member {number} propId
         * @memberof vip.AwardItem
         * @instance
         */
        AwardItem.prototype.propId = 0;

        /**
         * AwardItem minNum.
         * @member {number|Long} minNum
         * @memberof vip.AwardItem
         * @instance
         */
        AwardItem.prototype.minNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AwardItem maxNum.
         * @member {number|Long} maxNum
         * @memberof vip.AwardItem
         * @instance
         */
        AwardItem.prototype.maxNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AwardItem effectTime.
         * @member {number|Long} effectTime
         * @memberof vip.AwardItem
         * @instance
         */
        AwardItem.prototype.effectTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AwardItem type.
         * @member {number} type
         * @memberof vip.AwardItem
         * @instance
         */
        AwardItem.prototype.type = 0;

        /**
         * AwardItem icon.
         * @member {string} icon
         * @memberof vip.AwardItem
         * @instance
         */
        AwardItem.prototype.icon = "";

        /**
         * AwardItem tip.
         * @member {string} tip
         * @memberof vip.AwardItem
         * @instance
         */
        AwardItem.prototype.tip = "";

        /**
         * Creates a new AwardItem instance using the specified properties.
         * @function create
         * @memberof vip.AwardItem
         * @static
         * @param {vip.IAwardItem=} [properties] Properties to set
         * @returns {vip.AwardItem} AwardItem instance
         */
        AwardItem.create = function create(properties) {
            return new AwardItem(properties);
        };

        /**
         * Encodes the specified AwardItem message. Does not implicitly {@link vip.AwardItem.verify|verify} messages.
         * @function encode
         * @memberof vip.AwardItem
         * @static
         * @param {vip.IAwardItem} message AwardItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AwardItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.propId != null && message.hasOwnProperty("propId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.propId);
            if (message.minNum != null && message.hasOwnProperty("minNum"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.minNum);
            if (message.maxNum != null && message.hasOwnProperty("maxNum"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.maxNum);
            if (message.effectTime != null && message.hasOwnProperty("effectTime"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.effectTime);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.type);
            if (message.icon != null && message.hasOwnProperty("icon"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.icon);
            if (message.tip != null && message.hasOwnProperty("tip"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.tip);
            return writer;
        };

        /**
         * Encodes the specified AwardItem message, length delimited. Does not implicitly {@link vip.AwardItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof vip.AwardItem
         * @static
         * @param {vip.IAwardItem} message AwardItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AwardItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AwardItem message from the specified reader or buffer.
         * @function decode
         * @memberof vip.AwardItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {vip.AwardItem} AwardItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AwardItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.vip.AwardItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.propId = reader.int32();
                    break;
                case 2:
                    message.minNum = reader.int64();
                    break;
                case 3:
                    message.maxNum = reader.int64();
                    break;
                case 4:
                    message.effectTime = reader.int64();
                    break;
                case 5:
                    message.type = reader.int32();
                    break;
                case 6:
                    message.icon = reader.string();
                    break;
                case 7:
                    message.tip = reader.string();
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
         * @memberof vip.AwardItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {vip.AwardItem} AwardItem
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
         * @memberof vip.AwardItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AwardItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.propId != null && message.hasOwnProperty("propId"))
                if (!$util.isInteger(message.propId))
                    return "propId: integer expected";
            if (message.minNum != null && message.hasOwnProperty("minNum"))
                if (!$util.isInteger(message.minNum) && !(message.minNum && $util.isInteger(message.minNum.low) && $util.isInteger(message.minNum.high)))
                    return "minNum: integer|Long expected";
            if (message.maxNum != null && message.hasOwnProperty("maxNum"))
                if (!$util.isInteger(message.maxNum) && !(message.maxNum && $util.isInteger(message.maxNum.low) && $util.isInteger(message.maxNum.high)))
                    return "maxNum: integer|Long expected";
            if (message.effectTime != null && message.hasOwnProperty("effectTime"))
                if (!$util.isInteger(message.effectTime) && !(message.effectTime && $util.isInteger(message.effectTime.low) && $util.isInteger(message.effectTime.high)))
                    return "effectTime: integer|Long expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            if (message.tip != null && message.hasOwnProperty("tip"))
                if (!$util.isString(message.tip))
                    return "tip: string expected";
            return null;
        };

        /**
         * Creates an AwardItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof vip.AwardItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {vip.AwardItem} AwardItem
         */
        AwardItem.fromObject = function fromObject(object) {
            if (object instanceof $root.vip.AwardItem)
                return object;
            var message = new $root.vip.AwardItem();
            if (object.propId != null)
                message.propId = object.propId | 0;
            if (object.minNum != null)
                if ($util.Long)
                    (message.minNum = $util.Long.fromValue(object.minNum)).unsigned = false;
                else if (typeof object.minNum === "string")
                    message.minNum = parseInt(object.minNum, 10);
                else if (typeof object.minNum === "number")
                    message.minNum = object.minNum;
                else if (typeof object.minNum === "object")
                    message.minNum = new $util.LongBits(object.minNum.low >>> 0, object.minNum.high >>> 0).toNumber();
            if (object.maxNum != null)
                if ($util.Long)
                    (message.maxNum = $util.Long.fromValue(object.maxNum)).unsigned = false;
                else if (typeof object.maxNum === "string")
                    message.maxNum = parseInt(object.maxNum, 10);
                else if (typeof object.maxNum === "number")
                    message.maxNum = object.maxNum;
                else if (typeof object.maxNum === "object")
                    message.maxNum = new $util.LongBits(object.maxNum.low >>> 0, object.maxNum.high >>> 0).toNumber();
            if (object.effectTime != null)
                if ($util.Long)
                    (message.effectTime = $util.Long.fromValue(object.effectTime)).unsigned = false;
                else if (typeof object.effectTime === "string")
                    message.effectTime = parseInt(object.effectTime, 10);
                else if (typeof object.effectTime === "number")
                    message.effectTime = object.effectTime;
                else if (typeof object.effectTime === "object")
                    message.effectTime = new $util.LongBits(object.effectTime.low >>> 0, object.effectTime.high >>> 0).toNumber();
            if (object.type != null)
                message.type = object.type | 0;
            if (object.icon != null)
                message.icon = String(object.icon);
            if (object.tip != null)
                message.tip = String(object.tip);
            return message;
        };

        /**
         * Creates a plain object from an AwardItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof vip.AwardItem
         * @static
         * @param {vip.AwardItem} message AwardItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AwardItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.propId = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.minNum = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.minNum = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.maxNum = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.maxNum = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.effectTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.effectTime = options.longs === String ? "0" : 0;
                object.type = 0;
                object.icon = "";
                object.tip = "";
            }
            if (message.propId != null && message.hasOwnProperty("propId"))
                object.propId = message.propId;
            if (message.minNum != null && message.hasOwnProperty("minNum"))
                if (typeof message.minNum === "number")
                    object.minNum = options.longs === String ? String(message.minNum) : message.minNum;
                else
                    object.minNum = options.longs === String ? $util.Long.prototype.toString.call(message.minNum) : options.longs === Number ? new $util.LongBits(message.minNum.low >>> 0, message.minNum.high >>> 0).toNumber() : message.minNum;
            if (message.maxNum != null && message.hasOwnProperty("maxNum"))
                if (typeof message.maxNum === "number")
                    object.maxNum = options.longs === String ? String(message.maxNum) : message.maxNum;
                else
                    object.maxNum = options.longs === String ? $util.Long.prototype.toString.call(message.maxNum) : options.longs === Number ? new $util.LongBits(message.maxNum.low >>> 0, message.maxNum.high >>> 0).toNumber() : message.maxNum;
            if (message.effectTime != null && message.hasOwnProperty("effectTime"))
                if (typeof message.effectTime === "number")
                    object.effectTime = options.longs === String ? String(message.effectTime) : message.effectTime;
                else
                    object.effectTime = options.longs === String ? $util.Long.prototype.toString.call(message.effectTime) : options.longs === Number ? new $util.LongBits(message.effectTime.low >>> 0, message.effectTime.high >>> 0).toNumber() : message.effectTime;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            if (message.tip != null && message.hasOwnProperty("tip"))
                object.tip = message.tip;
            return object;
        };

        /**
         * Converts this AwardItem to JSON.
         * @function toJSON
         * @memberof vip.AwardItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AwardItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AwardItem;
    })();

    vip.VipConfigItem = (function() {

        /**
         * Properties of a VipConfigItem.
         * @memberof vip
         * @interface IVipConfigItem
         * @property {number|Long|null} [level] VipConfigItem level
         * @property {number|Long|null} [exp] VipConfigItem exp
         * @property {Array.<vip.IAwardItem>|null} [awardsOnce] VipConfigItem awardsOnce
         * @property {Array.<vip.IAwardItem>|null} [awardsDaily] VipConfigItem awardsDaily
         * @property {Array.<string>|null} [privilegeDesc] VipConfigItem privilegeDesc
         */

        /**
         * Constructs a new VipConfigItem.
         * @memberof vip
         * @classdesc Represents a VipConfigItem.
         * @implements IVipConfigItem
         * @constructor
         * @param {vip.IVipConfigItem=} [properties] Properties to set
         */
        function VipConfigItem(properties) {
            this.awardsOnce = [];
            this.awardsDaily = [];
            this.privilegeDesc = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VipConfigItem level.
         * @member {number|Long} level
         * @memberof vip.VipConfigItem
         * @instance
         */
        VipConfigItem.prototype.level = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * VipConfigItem exp.
         * @member {number|Long} exp
         * @memberof vip.VipConfigItem
         * @instance
         */
        VipConfigItem.prototype.exp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * VipConfigItem awardsOnce.
         * @member {Array.<vip.IAwardItem>} awardsOnce
         * @memberof vip.VipConfigItem
         * @instance
         */
        VipConfigItem.prototype.awardsOnce = $util.emptyArray;

        /**
         * VipConfigItem awardsDaily.
         * @member {Array.<vip.IAwardItem>} awardsDaily
         * @memberof vip.VipConfigItem
         * @instance
         */
        VipConfigItem.prototype.awardsDaily = $util.emptyArray;

        /**
         * VipConfigItem privilegeDesc.
         * @member {Array.<string>} privilegeDesc
         * @memberof vip.VipConfigItem
         * @instance
         */
        VipConfigItem.prototype.privilegeDesc = $util.emptyArray;

        /**
         * Creates a new VipConfigItem instance using the specified properties.
         * @function create
         * @memberof vip.VipConfigItem
         * @static
         * @param {vip.IVipConfigItem=} [properties] Properties to set
         * @returns {vip.VipConfigItem} VipConfigItem instance
         */
        VipConfigItem.create = function create(properties) {
            return new VipConfigItem(properties);
        };

        /**
         * Encodes the specified VipConfigItem message. Does not implicitly {@link vip.VipConfigItem.verify|verify} messages.
         * @function encode
         * @memberof vip.VipConfigItem
         * @static
         * @param {vip.IVipConfigItem} message VipConfigItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VipConfigItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.level != null && message.hasOwnProperty("level"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.level);
            if (message.exp != null && message.hasOwnProperty("exp"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.exp);
            if (message.awardsOnce != null && message.awardsOnce.length)
                for (var i = 0; i < message.awardsOnce.length; ++i)
                    $root.vip.AwardItem.encode(message.awardsOnce[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.awardsDaily != null && message.awardsDaily.length)
                for (var i = 0; i < message.awardsDaily.length; ++i)
                    $root.vip.AwardItem.encode(message.awardsDaily[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.privilegeDesc != null && message.privilegeDesc.length)
                for (var i = 0; i < message.privilegeDesc.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.privilegeDesc[i]);
            return writer;
        };

        /**
         * Encodes the specified VipConfigItem message, length delimited. Does not implicitly {@link vip.VipConfigItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof vip.VipConfigItem
         * @static
         * @param {vip.IVipConfigItem} message VipConfigItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VipConfigItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VipConfigItem message from the specified reader or buffer.
         * @function decode
         * @memberof vip.VipConfigItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {vip.VipConfigItem} VipConfigItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VipConfigItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.vip.VipConfigItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.level = reader.int64();
                    break;
                case 2:
                    message.exp = reader.int64();
                    break;
                case 3:
                    if (!(message.awardsOnce && message.awardsOnce.length))
                        message.awardsOnce = [];
                    message.awardsOnce.push($root.vip.AwardItem.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if (!(message.awardsDaily && message.awardsDaily.length))
                        message.awardsDaily = [];
                    message.awardsDaily.push($root.vip.AwardItem.decode(reader, reader.uint32()));
                    break;
                case 5:
                    if (!(message.privilegeDesc && message.privilegeDesc.length))
                        message.privilegeDesc = [];
                    message.privilegeDesc.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VipConfigItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof vip.VipConfigItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {vip.VipConfigItem} VipConfigItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VipConfigItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VipConfigItem message.
         * @function verify
         * @memberof vip.VipConfigItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VipConfigItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.level != null && message.hasOwnProperty("level"))
                if (!$util.isInteger(message.level) && !(message.level && $util.isInteger(message.level.low) && $util.isInteger(message.level.high)))
                    return "level: integer|Long expected";
            if (message.exp != null && message.hasOwnProperty("exp"))
                if (!$util.isInteger(message.exp) && !(message.exp && $util.isInteger(message.exp.low) && $util.isInteger(message.exp.high)))
                    return "exp: integer|Long expected";
            if (message.awardsOnce != null && message.hasOwnProperty("awardsOnce")) {
                if (!Array.isArray(message.awardsOnce))
                    return "awardsOnce: array expected";
                for (var i = 0; i < message.awardsOnce.length; ++i) {
                    var error = $root.vip.AwardItem.verify(message.awardsOnce[i]);
                    if (error)
                        return "awardsOnce." + error;
                }
            }
            if (message.awardsDaily != null && message.hasOwnProperty("awardsDaily")) {
                if (!Array.isArray(message.awardsDaily))
                    return "awardsDaily: array expected";
                for (var i = 0; i < message.awardsDaily.length; ++i) {
                    var error = $root.vip.AwardItem.verify(message.awardsDaily[i]);
                    if (error)
                        return "awardsDaily." + error;
                }
            }
            if (message.privilegeDesc != null && message.hasOwnProperty("privilegeDesc")) {
                if (!Array.isArray(message.privilegeDesc))
                    return "privilegeDesc: array expected";
                for (var i = 0; i < message.privilegeDesc.length; ++i)
                    if (!$util.isString(message.privilegeDesc[i]))
                        return "privilegeDesc: string[] expected";
            }
            return null;
        };

        /**
         * Creates a VipConfigItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof vip.VipConfigItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {vip.VipConfigItem} VipConfigItem
         */
        VipConfigItem.fromObject = function fromObject(object) {
            if (object instanceof $root.vip.VipConfigItem)
                return object;
            var message = new $root.vip.VipConfigItem();
            if (object.level != null)
                if ($util.Long)
                    (message.level = $util.Long.fromValue(object.level)).unsigned = false;
                else if (typeof object.level === "string")
                    message.level = parseInt(object.level, 10);
                else if (typeof object.level === "number")
                    message.level = object.level;
                else if (typeof object.level === "object")
                    message.level = new $util.LongBits(object.level.low >>> 0, object.level.high >>> 0).toNumber();
            if (object.exp != null)
                if ($util.Long)
                    (message.exp = $util.Long.fromValue(object.exp)).unsigned = false;
                else if (typeof object.exp === "string")
                    message.exp = parseInt(object.exp, 10);
                else if (typeof object.exp === "number")
                    message.exp = object.exp;
                else if (typeof object.exp === "object")
                    message.exp = new $util.LongBits(object.exp.low >>> 0, object.exp.high >>> 0).toNumber();
            if (object.awardsOnce) {
                if (!Array.isArray(object.awardsOnce))
                    throw TypeError(".vip.VipConfigItem.awardsOnce: array expected");
                message.awardsOnce = [];
                for (var i = 0; i < object.awardsOnce.length; ++i) {
                    if (typeof object.awardsOnce[i] !== "object")
                        throw TypeError(".vip.VipConfigItem.awardsOnce: object expected");
                    message.awardsOnce[i] = $root.vip.AwardItem.fromObject(object.awardsOnce[i]);
                }
            }
            if (object.awardsDaily) {
                if (!Array.isArray(object.awardsDaily))
                    throw TypeError(".vip.VipConfigItem.awardsDaily: array expected");
                message.awardsDaily = [];
                for (var i = 0; i < object.awardsDaily.length; ++i) {
                    if (typeof object.awardsDaily[i] !== "object")
                        throw TypeError(".vip.VipConfigItem.awardsDaily: object expected");
                    message.awardsDaily[i] = $root.vip.AwardItem.fromObject(object.awardsDaily[i]);
                }
            }
            if (object.privilegeDesc) {
                if (!Array.isArray(object.privilegeDesc))
                    throw TypeError(".vip.VipConfigItem.privilegeDesc: array expected");
                message.privilegeDesc = [];
                for (var i = 0; i < object.privilegeDesc.length; ++i)
                    message.privilegeDesc[i] = String(object.privilegeDesc[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a VipConfigItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof vip.VipConfigItem
         * @static
         * @param {vip.VipConfigItem} message VipConfigItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VipConfigItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.awardsOnce = [];
                object.awardsDaily = [];
                object.privilegeDesc = [];
            }
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.level = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.level = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.exp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.exp = options.longs === String ? "0" : 0;
            }
            if (message.level != null && message.hasOwnProperty("level"))
                if (typeof message.level === "number")
                    object.level = options.longs === String ? String(message.level) : message.level;
                else
                    object.level = options.longs === String ? $util.Long.prototype.toString.call(message.level) : options.longs === Number ? new $util.LongBits(message.level.low >>> 0, message.level.high >>> 0).toNumber() : message.level;
            if (message.exp != null && message.hasOwnProperty("exp"))
                if (typeof message.exp === "number")
                    object.exp = options.longs === String ? String(message.exp) : message.exp;
                else
                    object.exp = options.longs === String ? $util.Long.prototype.toString.call(message.exp) : options.longs === Number ? new $util.LongBits(message.exp.low >>> 0, message.exp.high >>> 0).toNumber() : message.exp;
            if (message.awardsOnce && message.awardsOnce.length) {
                object.awardsOnce = [];
                for (var j = 0; j < message.awardsOnce.length; ++j)
                    object.awardsOnce[j] = $root.vip.AwardItem.toObject(message.awardsOnce[j], options);
            }
            if (message.awardsDaily && message.awardsDaily.length) {
                object.awardsDaily = [];
                for (var j = 0; j < message.awardsDaily.length; ++j)
                    object.awardsDaily[j] = $root.vip.AwardItem.toObject(message.awardsDaily[j], options);
            }
            if (message.privilegeDesc && message.privilegeDesc.length) {
                object.privilegeDesc = [];
                for (var j = 0; j < message.privilegeDesc.length; ++j)
                    object.privilegeDesc[j] = message.privilegeDesc[j];
            }
            return object;
        };

        /**
         * Converts this VipConfigItem to JSON.
         * @function toJSON
         * @memberof vip.VipConfigItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VipConfigItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return VipConfigItem;
    })();

    vip.GetVipConfigRsp = (function() {

        /**
         * Properties of a GetVipConfigRsp.
         * @memberof vip
         * @interface IGetVipConfigRsp
         * @property {vip.IStateCode|null} [code] GetVipConfigRsp code
         * @property {Array.<vip.IVipConfigItem>|null} [vipConfigs] GetVipConfigRsp vipConfigs
         */

        /**
         * Constructs a new GetVipConfigRsp.
         * @memberof vip
         * @classdesc Represents a GetVipConfigRsp.
         * @implements IGetVipConfigRsp
         * @constructor
         * @param {vip.IGetVipConfigRsp=} [properties] Properties to set
         */
        function GetVipConfigRsp(properties) {
            this.vipConfigs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetVipConfigRsp code.
         * @member {vip.IStateCode|null|undefined} code
         * @memberof vip.GetVipConfigRsp
         * @instance
         */
        GetVipConfigRsp.prototype.code = null;

        /**
         * GetVipConfigRsp vipConfigs.
         * @member {Array.<vip.IVipConfigItem>} vipConfigs
         * @memberof vip.GetVipConfigRsp
         * @instance
         */
        GetVipConfigRsp.prototype.vipConfigs = $util.emptyArray;

        /**
         * Creates a new GetVipConfigRsp instance using the specified properties.
         * @function create
         * @memberof vip.GetVipConfigRsp
         * @static
         * @param {vip.IGetVipConfigRsp=} [properties] Properties to set
         * @returns {vip.GetVipConfigRsp} GetVipConfigRsp instance
         */
        GetVipConfigRsp.create = function create(properties) {
            return new GetVipConfigRsp(properties);
        };

        /**
         * Encodes the specified GetVipConfigRsp message. Does not implicitly {@link vip.GetVipConfigRsp.verify|verify} messages.
         * @function encode
         * @memberof vip.GetVipConfigRsp
         * @static
         * @param {vip.IGetVipConfigRsp} message GetVipConfigRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetVipConfigRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                $root.vip.StateCode.encode(message.code, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.vipConfigs != null && message.vipConfigs.length)
                for (var i = 0; i < message.vipConfigs.length; ++i)
                    $root.vip.VipConfigItem.encode(message.vipConfigs[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetVipConfigRsp message, length delimited. Does not implicitly {@link vip.GetVipConfigRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof vip.GetVipConfigRsp
         * @static
         * @param {vip.IGetVipConfigRsp} message GetVipConfigRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetVipConfigRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetVipConfigRsp message from the specified reader or buffer.
         * @function decode
         * @memberof vip.GetVipConfigRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {vip.GetVipConfigRsp} GetVipConfigRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetVipConfigRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.vip.GetVipConfigRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = $root.vip.StateCode.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.vipConfigs && message.vipConfigs.length))
                        message.vipConfigs = [];
                    message.vipConfigs.push($root.vip.VipConfigItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetVipConfigRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof vip.GetVipConfigRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {vip.GetVipConfigRsp} GetVipConfigRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetVipConfigRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetVipConfigRsp message.
         * @function verify
         * @memberof vip.GetVipConfigRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetVipConfigRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code")) {
                var error = $root.vip.StateCode.verify(message.code);
                if (error)
                    return "code." + error;
            }
            if (message.vipConfigs != null && message.hasOwnProperty("vipConfigs")) {
                if (!Array.isArray(message.vipConfigs))
                    return "vipConfigs: array expected";
                for (var i = 0; i < message.vipConfigs.length; ++i) {
                    var error = $root.vip.VipConfigItem.verify(message.vipConfigs[i]);
                    if (error)
                        return "vipConfigs." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetVipConfigRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof vip.GetVipConfigRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {vip.GetVipConfigRsp} GetVipConfigRsp
         */
        GetVipConfigRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.vip.GetVipConfigRsp)
                return object;
            var message = new $root.vip.GetVipConfigRsp();
            if (object.code != null) {
                if (typeof object.code !== "object")
                    throw TypeError(".vip.GetVipConfigRsp.code: object expected");
                message.code = $root.vip.StateCode.fromObject(object.code);
            }
            if (object.vipConfigs) {
                if (!Array.isArray(object.vipConfigs))
                    throw TypeError(".vip.GetVipConfigRsp.vipConfigs: array expected");
                message.vipConfigs = [];
                for (var i = 0; i < object.vipConfigs.length; ++i) {
                    if (typeof object.vipConfigs[i] !== "object")
                        throw TypeError(".vip.GetVipConfigRsp.vipConfigs: object expected");
                    message.vipConfigs[i] = $root.vip.VipConfigItem.fromObject(object.vipConfigs[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetVipConfigRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof vip.GetVipConfigRsp
         * @static
         * @param {vip.GetVipConfigRsp} message GetVipConfigRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetVipConfigRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.vipConfigs = [];
            if (options.defaults)
                object.code = null;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = $root.vip.StateCode.toObject(message.code, options);
            if (message.vipConfigs && message.vipConfigs.length) {
                object.vipConfigs = [];
                for (var j = 0; j < message.vipConfigs.length; ++j)
                    object.vipConfigs[j] = $root.vip.VipConfigItem.toObject(message.vipConfigs[j], options);
            }
            return object;
        };

        /**
         * Converts this GetVipConfigRsp to JSON.
         * @function toJSON
         * @memberof vip.GetVipConfigRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetVipConfigRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetVipConfigRsp;
    })();

    vip.GetSendVipConfigRsp = (function() {

        /**
         * Properties of a GetSendVipConfigRsp.
         * @memberof vip
         * @interface IGetSendVipConfigRsp
         * @property {vip.IStateCode|null} [code] GetSendVipConfigRsp code
         * @property {Array.<vip.IAwardItem>|null} [awardsList] GetSendVipConfigRsp awardsList
         */

        /**
         * Constructs a new GetSendVipConfigRsp.
         * @memberof vip
         * @classdesc Represents a GetSendVipConfigRsp.
         * @implements IGetSendVipConfigRsp
         * @constructor
         * @param {vip.IGetSendVipConfigRsp=} [properties] Properties to set
         */
        function GetSendVipConfigRsp(properties) {
            this.awardsList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetSendVipConfigRsp code.
         * @member {vip.IStateCode|null|undefined} code
         * @memberof vip.GetSendVipConfigRsp
         * @instance
         */
        GetSendVipConfigRsp.prototype.code = null;

        /**
         * GetSendVipConfigRsp awardsList.
         * @member {Array.<vip.IAwardItem>} awardsList
         * @memberof vip.GetSendVipConfigRsp
         * @instance
         */
        GetSendVipConfigRsp.prototype.awardsList = $util.emptyArray;

        /**
         * Creates a new GetSendVipConfigRsp instance using the specified properties.
         * @function create
         * @memberof vip.GetSendVipConfigRsp
         * @static
         * @param {vip.IGetSendVipConfigRsp=} [properties] Properties to set
         * @returns {vip.GetSendVipConfigRsp} GetSendVipConfigRsp instance
         */
        GetSendVipConfigRsp.create = function create(properties) {
            return new GetSendVipConfigRsp(properties);
        };

        /**
         * Encodes the specified GetSendVipConfigRsp message. Does not implicitly {@link vip.GetSendVipConfigRsp.verify|verify} messages.
         * @function encode
         * @memberof vip.GetSendVipConfigRsp
         * @static
         * @param {vip.IGetSendVipConfigRsp} message GetSendVipConfigRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetSendVipConfigRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                $root.vip.StateCode.encode(message.code, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.awardsList != null && message.awardsList.length)
                for (var i = 0; i < message.awardsList.length; ++i)
                    $root.vip.AwardItem.encode(message.awardsList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetSendVipConfigRsp message, length delimited. Does not implicitly {@link vip.GetSendVipConfigRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof vip.GetSendVipConfigRsp
         * @static
         * @param {vip.IGetSendVipConfigRsp} message GetSendVipConfigRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetSendVipConfigRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetSendVipConfigRsp message from the specified reader or buffer.
         * @function decode
         * @memberof vip.GetSendVipConfigRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {vip.GetSendVipConfigRsp} GetSendVipConfigRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetSendVipConfigRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.vip.GetSendVipConfigRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = $root.vip.StateCode.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.awardsList && message.awardsList.length))
                        message.awardsList = [];
                    message.awardsList.push($root.vip.AwardItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetSendVipConfigRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof vip.GetSendVipConfigRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {vip.GetSendVipConfigRsp} GetSendVipConfigRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetSendVipConfigRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetSendVipConfigRsp message.
         * @function verify
         * @memberof vip.GetSendVipConfigRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetSendVipConfigRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code")) {
                var error = $root.vip.StateCode.verify(message.code);
                if (error)
                    return "code." + error;
            }
            if (message.awardsList != null && message.hasOwnProperty("awardsList")) {
                if (!Array.isArray(message.awardsList))
                    return "awardsList: array expected";
                for (var i = 0; i < message.awardsList.length; ++i) {
                    var error = $root.vip.AwardItem.verify(message.awardsList[i]);
                    if (error)
                        return "awardsList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetSendVipConfigRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof vip.GetSendVipConfigRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {vip.GetSendVipConfigRsp} GetSendVipConfigRsp
         */
        GetSendVipConfigRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.vip.GetSendVipConfigRsp)
                return object;
            var message = new $root.vip.GetSendVipConfigRsp();
            if (object.code != null) {
                if (typeof object.code !== "object")
                    throw TypeError(".vip.GetSendVipConfigRsp.code: object expected");
                message.code = $root.vip.StateCode.fromObject(object.code);
            }
            if (object.awardsList) {
                if (!Array.isArray(object.awardsList))
                    throw TypeError(".vip.GetSendVipConfigRsp.awardsList: array expected");
                message.awardsList = [];
                for (var i = 0; i < object.awardsList.length; ++i) {
                    if (typeof object.awardsList[i] !== "object")
                        throw TypeError(".vip.GetSendVipConfigRsp.awardsList: object expected");
                    message.awardsList[i] = $root.vip.AwardItem.fromObject(object.awardsList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetSendVipConfigRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof vip.GetSendVipConfigRsp
         * @static
         * @param {vip.GetSendVipConfigRsp} message GetSendVipConfigRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetSendVipConfigRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.awardsList = [];
            if (options.defaults)
                object.code = null;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = $root.vip.StateCode.toObject(message.code, options);
            if (message.awardsList && message.awardsList.length) {
                object.awardsList = [];
                for (var j = 0; j < message.awardsList.length; ++j)
                    object.awardsList[j] = $root.vip.AwardItem.toObject(message.awardsList[j], options);
            }
            return object;
        };

        /**
         * Converts this GetSendVipConfigRsp to JSON.
         * @function toJSON
         * @memberof vip.GetSendVipConfigRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetSendVipConfigRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetSendVipConfigRsp;
    })();

    vip.GetVipUserLevelReq = (function() {

        /**
         * Properties of a GetVipUserLevelReq.
         * @memberof vip
         * @interface IGetVipUserLevelReq
         * @property {number|Long|null} [uid] GetVipUserLevelReq uid
         */

        /**
         * Constructs a new GetVipUserLevelReq.
         * @memberof vip
         * @classdesc Represents a GetVipUserLevelReq.
         * @implements IGetVipUserLevelReq
         * @constructor
         * @param {vip.IGetVipUserLevelReq=} [properties] Properties to set
         */
        function GetVipUserLevelReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetVipUserLevelReq uid.
         * @member {number|Long} uid
         * @memberof vip.GetVipUserLevelReq
         * @instance
         */
        GetVipUserLevelReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GetVipUserLevelReq instance using the specified properties.
         * @function create
         * @memberof vip.GetVipUserLevelReq
         * @static
         * @param {vip.IGetVipUserLevelReq=} [properties] Properties to set
         * @returns {vip.GetVipUserLevelReq} GetVipUserLevelReq instance
         */
        GetVipUserLevelReq.create = function create(properties) {
            return new GetVipUserLevelReq(properties);
        };

        /**
         * Encodes the specified GetVipUserLevelReq message. Does not implicitly {@link vip.GetVipUserLevelReq.verify|verify} messages.
         * @function encode
         * @memberof vip.GetVipUserLevelReq
         * @static
         * @param {vip.IGetVipUserLevelReq} message GetVipUserLevelReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetVipUserLevelReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            return writer;
        };

        /**
         * Encodes the specified GetVipUserLevelReq message, length delimited. Does not implicitly {@link vip.GetVipUserLevelReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof vip.GetVipUserLevelReq
         * @static
         * @param {vip.IGetVipUserLevelReq} message GetVipUserLevelReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetVipUserLevelReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetVipUserLevelReq message from the specified reader or buffer.
         * @function decode
         * @memberof vip.GetVipUserLevelReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {vip.GetVipUserLevelReq} GetVipUserLevelReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetVipUserLevelReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.vip.GetVipUserLevelReq();
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
         * Decodes a GetVipUserLevelReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof vip.GetVipUserLevelReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {vip.GetVipUserLevelReq} GetVipUserLevelReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetVipUserLevelReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetVipUserLevelReq message.
         * @function verify
         * @memberof vip.GetVipUserLevelReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetVipUserLevelReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            return null;
        };

        /**
         * Creates a GetVipUserLevelReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof vip.GetVipUserLevelReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {vip.GetVipUserLevelReq} GetVipUserLevelReq
         */
        GetVipUserLevelReq.fromObject = function fromObject(object) {
            if (object instanceof $root.vip.GetVipUserLevelReq)
                return object;
            var message = new $root.vip.GetVipUserLevelReq();
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
         * Creates a plain object from a GetVipUserLevelReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof vip.GetVipUserLevelReq
         * @static
         * @param {vip.GetVipUserLevelReq} message GetVipUserLevelReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetVipUserLevelReq.toObject = function toObject(message, options) {
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
         * Converts this GetVipUserLevelReq to JSON.
         * @function toJSON
         * @memberof vip.GetVipUserLevelReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetVipUserLevelReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetVipUserLevelReq;
    })();

    vip.AwardsLog = (function() {

        /**
         * Properties of an AwardsLog.
         * @memberof vip
         * @interface IAwardsLog
         * @property {number|Long|null} [level] AwardsLog level
         * @property {number|null} [status] AwardsLog status
         */

        /**
         * Constructs a new AwardsLog.
         * @memberof vip
         * @classdesc Represents an AwardsLog.
         * @implements IAwardsLog
         * @constructor
         * @param {vip.IAwardsLog=} [properties] Properties to set
         */
        function AwardsLog(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AwardsLog level.
         * @member {number|Long} level
         * @memberof vip.AwardsLog
         * @instance
         */
        AwardsLog.prototype.level = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AwardsLog status.
         * @member {number} status
         * @memberof vip.AwardsLog
         * @instance
         */
        AwardsLog.prototype.status = 0;

        /**
         * Creates a new AwardsLog instance using the specified properties.
         * @function create
         * @memberof vip.AwardsLog
         * @static
         * @param {vip.IAwardsLog=} [properties] Properties to set
         * @returns {vip.AwardsLog} AwardsLog instance
         */
        AwardsLog.create = function create(properties) {
            return new AwardsLog(properties);
        };

        /**
         * Encodes the specified AwardsLog message. Does not implicitly {@link vip.AwardsLog.verify|verify} messages.
         * @function encode
         * @memberof vip.AwardsLog
         * @static
         * @param {vip.IAwardsLog} message AwardsLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AwardsLog.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.level != null && message.hasOwnProperty("level"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.level);
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
            return writer;
        };

        /**
         * Encodes the specified AwardsLog message, length delimited. Does not implicitly {@link vip.AwardsLog.verify|verify} messages.
         * @function encodeDelimited
         * @memberof vip.AwardsLog
         * @static
         * @param {vip.IAwardsLog} message AwardsLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AwardsLog.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AwardsLog message from the specified reader or buffer.
         * @function decode
         * @memberof vip.AwardsLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {vip.AwardsLog} AwardsLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AwardsLog.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.vip.AwardsLog();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.level = reader.int64();
                    break;
                case 2:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AwardsLog message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof vip.AwardsLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {vip.AwardsLog} AwardsLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AwardsLog.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AwardsLog message.
         * @function verify
         * @memberof vip.AwardsLog
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AwardsLog.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.level != null && message.hasOwnProperty("level"))
                if (!$util.isInteger(message.level) && !(message.level && $util.isInteger(message.level.low) && $util.isInteger(message.level.high)))
                    return "level: integer|Long expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            return null;
        };

        /**
         * Creates an AwardsLog message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof vip.AwardsLog
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {vip.AwardsLog} AwardsLog
         */
        AwardsLog.fromObject = function fromObject(object) {
            if (object instanceof $root.vip.AwardsLog)
                return object;
            var message = new $root.vip.AwardsLog();
            if (object.level != null)
                if ($util.Long)
                    (message.level = $util.Long.fromValue(object.level)).unsigned = false;
                else if (typeof object.level === "string")
                    message.level = parseInt(object.level, 10);
                else if (typeof object.level === "number")
                    message.level = object.level;
                else if (typeof object.level === "object")
                    message.level = new $util.LongBits(object.level.low >>> 0, object.level.high >>> 0).toNumber();
            if (object.status != null)
                message.status = object.status | 0;
            return message;
        };

        /**
         * Creates a plain object from an AwardsLog message. Also converts values to other types if specified.
         * @function toObject
         * @memberof vip.AwardsLog
         * @static
         * @param {vip.AwardsLog} message AwardsLog
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AwardsLog.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.level = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.level = options.longs === String ? "0" : 0;
                object.status = 0;
            }
            if (message.level != null && message.hasOwnProperty("level"))
                if (typeof message.level === "number")
                    object.level = options.longs === String ? String(message.level) : message.level;
                else
                    object.level = options.longs === String ? $util.Long.prototype.toString.call(message.level) : options.longs === Number ? new $util.LongBits(message.level.low >>> 0, message.level.high >>> 0).toNumber() : message.level;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this AwardsLog to JSON.
         * @function toJSON
         * @memberof vip.AwardsLog
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AwardsLog.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AwardsLog;
    })();

    vip.VipUserLevel = (function() {

        /**
         * Properties of a VipUserLevel.
         * @memberof vip
         * @interface IVipUserLevel
         * @property {number|Long|null} [uid] VipUserLevel uid
         * @property {Array.<vip.IAwardsLog>|null} [awardsOnceLogs] VipUserLevel awardsOnceLogs
         * @property {Array.<vip.IAwardsLog>|null} [awardsDailyLogs] VipUserLevel awardsDailyLogs
         * @property {number|Long|null} [dailyDate] VipUserLevel dailyDate
         */

        /**
         * Constructs a new VipUserLevel.
         * @memberof vip
         * @classdesc Represents a VipUserLevel.
         * @implements IVipUserLevel
         * @constructor
         * @param {vip.IVipUserLevel=} [properties] Properties to set
         */
        function VipUserLevel(properties) {
            this.awardsOnceLogs = [];
            this.awardsDailyLogs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VipUserLevel uid.
         * @member {number|Long} uid
         * @memberof vip.VipUserLevel
         * @instance
         */
        VipUserLevel.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * VipUserLevel awardsOnceLogs.
         * @member {Array.<vip.IAwardsLog>} awardsOnceLogs
         * @memberof vip.VipUserLevel
         * @instance
         */
        VipUserLevel.prototype.awardsOnceLogs = $util.emptyArray;

        /**
         * VipUserLevel awardsDailyLogs.
         * @member {Array.<vip.IAwardsLog>} awardsDailyLogs
         * @memberof vip.VipUserLevel
         * @instance
         */
        VipUserLevel.prototype.awardsDailyLogs = $util.emptyArray;

        /**
         * VipUserLevel dailyDate.
         * @member {number|Long} dailyDate
         * @memberof vip.VipUserLevel
         * @instance
         */
        VipUserLevel.prototype.dailyDate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new VipUserLevel instance using the specified properties.
         * @function create
         * @memberof vip.VipUserLevel
         * @static
         * @param {vip.IVipUserLevel=} [properties] Properties to set
         * @returns {vip.VipUserLevel} VipUserLevel instance
         */
        VipUserLevel.create = function create(properties) {
            return new VipUserLevel(properties);
        };

        /**
         * Encodes the specified VipUserLevel message. Does not implicitly {@link vip.VipUserLevel.verify|verify} messages.
         * @function encode
         * @memberof vip.VipUserLevel
         * @static
         * @param {vip.IVipUserLevel} message VipUserLevel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VipUserLevel.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            if (message.awardsOnceLogs != null && message.awardsOnceLogs.length)
                for (var i = 0; i < message.awardsOnceLogs.length; ++i)
                    $root.vip.AwardsLog.encode(message.awardsOnceLogs[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.awardsDailyLogs != null && message.awardsDailyLogs.length)
                for (var i = 0; i < message.awardsDailyLogs.length; ++i)
                    $root.vip.AwardsLog.encode(message.awardsDailyLogs[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.dailyDate != null && message.hasOwnProperty("dailyDate"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.dailyDate);
            return writer;
        };

        /**
         * Encodes the specified VipUserLevel message, length delimited. Does not implicitly {@link vip.VipUserLevel.verify|verify} messages.
         * @function encodeDelimited
         * @memberof vip.VipUserLevel
         * @static
         * @param {vip.IVipUserLevel} message VipUserLevel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VipUserLevel.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VipUserLevel message from the specified reader or buffer.
         * @function decode
         * @memberof vip.VipUserLevel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {vip.VipUserLevel} VipUserLevel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VipUserLevel.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.vip.VipUserLevel();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int64();
                    break;
                case 2:
                    if (!(message.awardsOnceLogs && message.awardsOnceLogs.length))
                        message.awardsOnceLogs = [];
                    message.awardsOnceLogs.push($root.vip.AwardsLog.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.awardsDailyLogs && message.awardsDailyLogs.length))
                        message.awardsDailyLogs = [];
                    message.awardsDailyLogs.push($root.vip.AwardsLog.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.dailyDate = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VipUserLevel message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof vip.VipUserLevel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {vip.VipUserLevel} VipUserLevel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VipUserLevel.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VipUserLevel message.
         * @function verify
         * @memberof vip.VipUserLevel
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VipUserLevel.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.awardsOnceLogs != null && message.hasOwnProperty("awardsOnceLogs")) {
                if (!Array.isArray(message.awardsOnceLogs))
                    return "awardsOnceLogs: array expected";
                for (var i = 0; i < message.awardsOnceLogs.length; ++i) {
                    var error = $root.vip.AwardsLog.verify(message.awardsOnceLogs[i]);
                    if (error)
                        return "awardsOnceLogs." + error;
                }
            }
            if (message.awardsDailyLogs != null && message.hasOwnProperty("awardsDailyLogs")) {
                if (!Array.isArray(message.awardsDailyLogs))
                    return "awardsDailyLogs: array expected";
                for (var i = 0; i < message.awardsDailyLogs.length; ++i) {
                    var error = $root.vip.AwardsLog.verify(message.awardsDailyLogs[i]);
                    if (error)
                        return "awardsDailyLogs." + error;
                }
            }
            if (message.dailyDate != null && message.hasOwnProperty("dailyDate"))
                if (!$util.isInteger(message.dailyDate) && !(message.dailyDate && $util.isInteger(message.dailyDate.low) && $util.isInteger(message.dailyDate.high)))
                    return "dailyDate: integer|Long expected";
            return null;
        };

        /**
         * Creates a VipUserLevel message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof vip.VipUserLevel
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {vip.VipUserLevel} VipUserLevel
         */
        VipUserLevel.fromObject = function fromObject(object) {
            if (object instanceof $root.vip.VipUserLevel)
                return object;
            var message = new $root.vip.VipUserLevel();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.awardsOnceLogs) {
                if (!Array.isArray(object.awardsOnceLogs))
                    throw TypeError(".vip.VipUserLevel.awardsOnceLogs: array expected");
                message.awardsOnceLogs = [];
                for (var i = 0; i < object.awardsOnceLogs.length; ++i) {
                    if (typeof object.awardsOnceLogs[i] !== "object")
                        throw TypeError(".vip.VipUserLevel.awardsOnceLogs: object expected");
                    message.awardsOnceLogs[i] = $root.vip.AwardsLog.fromObject(object.awardsOnceLogs[i]);
                }
            }
            if (object.awardsDailyLogs) {
                if (!Array.isArray(object.awardsDailyLogs))
                    throw TypeError(".vip.VipUserLevel.awardsDailyLogs: array expected");
                message.awardsDailyLogs = [];
                for (var i = 0; i < object.awardsDailyLogs.length; ++i) {
                    if (typeof object.awardsDailyLogs[i] !== "object")
                        throw TypeError(".vip.VipUserLevel.awardsDailyLogs: object expected");
                    message.awardsDailyLogs[i] = $root.vip.AwardsLog.fromObject(object.awardsDailyLogs[i]);
                }
            }
            if (object.dailyDate != null)
                if ($util.Long)
                    (message.dailyDate = $util.Long.fromValue(object.dailyDate)).unsigned = false;
                else if (typeof object.dailyDate === "string")
                    message.dailyDate = parseInt(object.dailyDate, 10);
                else if (typeof object.dailyDate === "number")
                    message.dailyDate = object.dailyDate;
                else if (typeof object.dailyDate === "object")
                    message.dailyDate = new $util.LongBits(object.dailyDate.low >>> 0, object.dailyDate.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a VipUserLevel message. Also converts values to other types if specified.
         * @function toObject
         * @memberof vip.VipUserLevel
         * @static
         * @param {vip.VipUserLevel} message VipUserLevel
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VipUserLevel.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.awardsOnceLogs = [];
                object.awardsDailyLogs = [];
            }
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.dailyDate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dailyDate = options.longs === String ? "0" : 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.awardsOnceLogs && message.awardsOnceLogs.length) {
                object.awardsOnceLogs = [];
                for (var j = 0; j < message.awardsOnceLogs.length; ++j)
                    object.awardsOnceLogs[j] = $root.vip.AwardsLog.toObject(message.awardsOnceLogs[j], options);
            }
            if (message.awardsDailyLogs && message.awardsDailyLogs.length) {
                object.awardsDailyLogs = [];
                for (var j = 0; j < message.awardsDailyLogs.length; ++j)
                    object.awardsDailyLogs[j] = $root.vip.AwardsLog.toObject(message.awardsDailyLogs[j], options);
            }
            if (message.dailyDate != null && message.hasOwnProperty("dailyDate"))
                if (typeof message.dailyDate === "number")
                    object.dailyDate = options.longs === String ? String(message.dailyDate) : message.dailyDate;
                else
                    object.dailyDate = options.longs === String ? $util.Long.prototype.toString.call(message.dailyDate) : options.longs === Number ? new $util.LongBits(message.dailyDate.low >>> 0, message.dailyDate.high >>> 0).toNumber() : message.dailyDate;
            return object;
        };

        /**
         * Converts this VipUserLevel to JSON.
         * @function toJSON
         * @memberof vip.VipUserLevel
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VipUserLevel.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return VipUserLevel;
    })();

    vip.GetVipUserLevelRsp = (function() {

        /**
         * Properties of a GetVipUserLevelRsp.
         * @memberof vip
         * @interface IGetVipUserLevelRsp
         * @property {vip.IStateCode|null} [code] GetVipUserLevelRsp code
         * @property {vip.IVipUserLevel|null} [info] GetVipUserLevelRsp info
         */

        /**
         * Constructs a new GetVipUserLevelRsp.
         * @memberof vip
         * @classdesc Represents a GetVipUserLevelRsp.
         * @implements IGetVipUserLevelRsp
         * @constructor
         * @param {vip.IGetVipUserLevelRsp=} [properties] Properties to set
         */
        function GetVipUserLevelRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetVipUserLevelRsp code.
         * @member {vip.IStateCode|null|undefined} code
         * @memberof vip.GetVipUserLevelRsp
         * @instance
         */
        GetVipUserLevelRsp.prototype.code = null;

        /**
         * GetVipUserLevelRsp info.
         * @member {vip.IVipUserLevel|null|undefined} info
         * @memberof vip.GetVipUserLevelRsp
         * @instance
         */
        GetVipUserLevelRsp.prototype.info = null;

        /**
         * Creates a new GetVipUserLevelRsp instance using the specified properties.
         * @function create
         * @memberof vip.GetVipUserLevelRsp
         * @static
         * @param {vip.IGetVipUserLevelRsp=} [properties] Properties to set
         * @returns {vip.GetVipUserLevelRsp} GetVipUserLevelRsp instance
         */
        GetVipUserLevelRsp.create = function create(properties) {
            return new GetVipUserLevelRsp(properties);
        };

        /**
         * Encodes the specified GetVipUserLevelRsp message. Does not implicitly {@link vip.GetVipUserLevelRsp.verify|verify} messages.
         * @function encode
         * @memberof vip.GetVipUserLevelRsp
         * @static
         * @param {vip.IGetVipUserLevelRsp} message GetVipUserLevelRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetVipUserLevelRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                $root.vip.StateCode.encode(message.code, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.info != null && message.hasOwnProperty("info"))
                $root.vip.VipUserLevel.encode(message.info, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetVipUserLevelRsp message, length delimited. Does not implicitly {@link vip.GetVipUserLevelRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof vip.GetVipUserLevelRsp
         * @static
         * @param {vip.IGetVipUserLevelRsp} message GetVipUserLevelRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetVipUserLevelRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetVipUserLevelRsp message from the specified reader or buffer.
         * @function decode
         * @memberof vip.GetVipUserLevelRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {vip.GetVipUserLevelRsp} GetVipUserLevelRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetVipUserLevelRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.vip.GetVipUserLevelRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = $root.vip.StateCode.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.info = $root.vip.VipUserLevel.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetVipUserLevelRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof vip.GetVipUserLevelRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {vip.GetVipUserLevelRsp} GetVipUserLevelRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetVipUserLevelRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetVipUserLevelRsp message.
         * @function verify
         * @memberof vip.GetVipUserLevelRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetVipUserLevelRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code")) {
                var error = $root.vip.StateCode.verify(message.code);
                if (error)
                    return "code." + error;
            }
            if (message.info != null && message.hasOwnProperty("info")) {
                var error = $root.vip.VipUserLevel.verify(message.info);
                if (error)
                    return "info." + error;
            }
            return null;
        };

        /**
         * Creates a GetVipUserLevelRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof vip.GetVipUserLevelRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {vip.GetVipUserLevelRsp} GetVipUserLevelRsp
         */
        GetVipUserLevelRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.vip.GetVipUserLevelRsp)
                return object;
            var message = new $root.vip.GetVipUserLevelRsp();
            if (object.code != null) {
                if (typeof object.code !== "object")
                    throw TypeError(".vip.GetVipUserLevelRsp.code: object expected");
                message.code = $root.vip.StateCode.fromObject(object.code);
            }
            if (object.info != null) {
                if (typeof object.info !== "object")
                    throw TypeError(".vip.GetVipUserLevelRsp.info: object expected");
                message.info = $root.vip.VipUserLevel.fromObject(object.info);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetVipUserLevelRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof vip.GetVipUserLevelRsp
         * @static
         * @param {vip.GetVipUserLevelRsp} message GetVipUserLevelRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetVipUserLevelRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = null;
                object.info = null;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = $root.vip.StateCode.toObject(message.code, options);
            if (message.info != null && message.hasOwnProperty("info"))
                object.info = $root.vip.VipUserLevel.toObject(message.info, options);
            return object;
        };

        /**
         * Converts this GetVipUserLevelRsp to JSON.
         * @function toJSON
         * @memberof vip.GetVipUserLevelRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetVipUserLevelRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetVipUserLevelRsp;
    })();

    vip.GetVipAwardsReq = (function() {

        /**
         * Properties of a GetVipAwardsReq.
         * @memberof vip
         * @interface IGetVipAwardsReq
         * @property {number|Long|null} [uid] GetVipAwardsReq uid
         * @property {number|Long|null} [level] GetVipAwardsReq level
         */

        /**
         * Constructs a new GetVipAwardsReq.
         * @memberof vip
         * @classdesc Represents a GetVipAwardsReq.
         * @implements IGetVipAwardsReq
         * @constructor
         * @param {vip.IGetVipAwardsReq=} [properties] Properties to set
         */
        function GetVipAwardsReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetVipAwardsReq uid.
         * @member {number|Long} uid
         * @memberof vip.GetVipAwardsReq
         * @instance
         */
        GetVipAwardsReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetVipAwardsReq level.
         * @member {number|Long} level
         * @memberof vip.GetVipAwardsReq
         * @instance
         */
        GetVipAwardsReq.prototype.level = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GetVipAwardsReq instance using the specified properties.
         * @function create
         * @memberof vip.GetVipAwardsReq
         * @static
         * @param {vip.IGetVipAwardsReq=} [properties] Properties to set
         * @returns {vip.GetVipAwardsReq} GetVipAwardsReq instance
         */
        GetVipAwardsReq.create = function create(properties) {
            return new GetVipAwardsReq(properties);
        };

        /**
         * Encodes the specified GetVipAwardsReq message. Does not implicitly {@link vip.GetVipAwardsReq.verify|verify} messages.
         * @function encode
         * @memberof vip.GetVipAwardsReq
         * @static
         * @param {vip.IGetVipAwardsReq} message GetVipAwardsReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetVipAwardsReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            if (message.level != null && message.hasOwnProperty("level"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.level);
            return writer;
        };

        /**
         * Encodes the specified GetVipAwardsReq message, length delimited. Does not implicitly {@link vip.GetVipAwardsReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof vip.GetVipAwardsReq
         * @static
         * @param {vip.IGetVipAwardsReq} message GetVipAwardsReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetVipAwardsReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetVipAwardsReq message from the specified reader or buffer.
         * @function decode
         * @memberof vip.GetVipAwardsReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {vip.GetVipAwardsReq} GetVipAwardsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetVipAwardsReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.vip.GetVipAwardsReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int64();
                    break;
                case 2:
                    message.level = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetVipAwardsReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof vip.GetVipAwardsReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {vip.GetVipAwardsReq} GetVipAwardsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetVipAwardsReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetVipAwardsReq message.
         * @function verify
         * @memberof vip.GetVipAwardsReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetVipAwardsReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.level != null && message.hasOwnProperty("level"))
                if (!$util.isInteger(message.level) && !(message.level && $util.isInteger(message.level.low) && $util.isInteger(message.level.high)))
                    return "level: integer|Long expected";
            return null;
        };

        /**
         * Creates a GetVipAwardsReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof vip.GetVipAwardsReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {vip.GetVipAwardsReq} GetVipAwardsReq
         */
        GetVipAwardsReq.fromObject = function fromObject(object) {
            if (object instanceof $root.vip.GetVipAwardsReq)
                return object;
            var message = new $root.vip.GetVipAwardsReq();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.level != null)
                if ($util.Long)
                    (message.level = $util.Long.fromValue(object.level)).unsigned = false;
                else if (typeof object.level === "string")
                    message.level = parseInt(object.level, 10);
                else if (typeof object.level === "number")
                    message.level = object.level;
                else if (typeof object.level === "object")
                    message.level = new $util.LongBits(object.level.low >>> 0, object.level.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a GetVipAwardsReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof vip.GetVipAwardsReq
         * @static
         * @param {vip.GetVipAwardsReq} message GetVipAwardsReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetVipAwardsReq.toObject = function toObject(message, options) {
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
                    object.level = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.level = options.longs === String ? "0" : 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.level != null && message.hasOwnProperty("level"))
                if (typeof message.level === "number")
                    object.level = options.longs === String ? String(message.level) : message.level;
                else
                    object.level = options.longs === String ? $util.Long.prototype.toString.call(message.level) : options.longs === Number ? new $util.LongBits(message.level.low >>> 0, message.level.high >>> 0).toNumber() : message.level;
            return object;
        };

        /**
         * Converts this GetVipAwardsReq to JSON.
         * @function toJSON
         * @memberof vip.GetVipAwardsReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetVipAwardsReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetVipAwardsReq;
    })();

    vip.GetVipAwardsRsp = (function() {

        /**
         * Properties of a GetVipAwardsRsp.
         * @memberof vip
         * @interface IGetVipAwardsRsp
         * @property {vip.IStateCode|null} [code] GetVipAwardsRsp code
         * @property {Array.<vip.IAwardItem>|null} [awards] GetVipAwardsRsp awards
         */

        /**
         * Constructs a new GetVipAwardsRsp.
         * @memberof vip
         * @classdesc Represents a GetVipAwardsRsp.
         * @implements IGetVipAwardsRsp
         * @constructor
         * @param {vip.IGetVipAwardsRsp=} [properties] Properties to set
         */
        function GetVipAwardsRsp(properties) {
            this.awards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetVipAwardsRsp code.
         * @member {vip.IStateCode|null|undefined} code
         * @memberof vip.GetVipAwardsRsp
         * @instance
         */
        GetVipAwardsRsp.prototype.code = null;

        /**
         * GetVipAwardsRsp awards.
         * @member {Array.<vip.IAwardItem>} awards
         * @memberof vip.GetVipAwardsRsp
         * @instance
         */
        GetVipAwardsRsp.prototype.awards = $util.emptyArray;

        /**
         * Creates a new GetVipAwardsRsp instance using the specified properties.
         * @function create
         * @memberof vip.GetVipAwardsRsp
         * @static
         * @param {vip.IGetVipAwardsRsp=} [properties] Properties to set
         * @returns {vip.GetVipAwardsRsp} GetVipAwardsRsp instance
         */
        GetVipAwardsRsp.create = function create(properties) {
            return new GetVipAwardsRsp(properties);
        };

        /**
         * Encodes the specified GetVipAwardsRsp message. Does not implicitly {@link vip.GetVipAwardsRsp.verify|verify} messages.
         * @function encode
         * @memberof vip.GetVipAwardsRsp
         * @static
         * @param {vip.IGetVipAwardsRsp} message GetVipAwardsRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetVipAwardsRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                $root.vip.StateCode.encode(message.code, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.awards != null && message.awards.length)
                for (var i = 0; i < message.awards.length; ++i)
                    $root.vip.AwardItem.encode(message.awards[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetVipAwardsRsp message, length delimited. Does not implicitly {@link vip.GetVipAwardsRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof vip.GetVipAwardsRsp
         * @static
         * @param {vip.IGetVipAwardsRsp} message GetVipAwardsRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetVipAwardsRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetVipAwardsRsp message from the specified reader or buffer.
         * @function decode
         * @memberof vip.GetVipAwardsRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {vip.GetVipAwardsRsp} GetVipAwardsRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetVipAwardsRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.vip.GetVipAwardsRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = $root.vip.StateCode.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.awards && message.awards.length))
                        message.awards = [];
                    message.awards.push($root.vip.AwardItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetVipAwardsRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof vip.GetVipAwardsRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {vip.GetVipAwardsRsp} GetVipAwardsRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetVipAwardsRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetVipAwardsRsp message.
         * @function verify
         * @memberof vip.GetVipAwardsRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetVipAwardsRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code")) {
                var error = $root.vip.StateCode.verify(message.code);
                if (error)
                    return "code." + error;
            }
            if (message.awards != null && message.hasOwnProperty("awards")) {
                if (!Array.isArray(message.awards))
                    return "awards: array expected";
                for (var i = 0; i < message.awards.length; ++i) {
                    var error = $root.vip.AwardItem.verify(message.awards[i]);
                    if (error)
                        return "awards." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetVipAwardsRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof vip.GetVipAwardsRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {vip.GetVipAwardsRsp} GetVipAwardsRsp
         */
        GetVipAwardsRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.vip.GetVipAwardsRsp)
                return object;
            var message = new $root.vip.GetVipAwardsRsp();
            if (object.code != null) {
                if (typeof object.code !== "object")
                    throw TypeError(".vip.GetVipAwardsRsp.code: object expected");
                message.code = $root.vip.StateCode.fromObject(object.code);
            }
            if (object.awards) {
                if (!Array.isArray(object.awards))
                    throw TypeError(".vip.GetVipAwardsRsp.awards: array expected");
                message.awards = [];
                for (var i = 0; i < object.awards.length; ++i) {
                    if (typeof object.awards[i] !== "object")
                        throw TypeError(".vip.GetVipAwardsRsp.awards: object expected");
                    message.awards[i] = $root.vip.AwardItem.fromObject(object.awards[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetVipAwardsRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof vip.GetVipAwardsRsp
         * @static
         * @param {vip.GetVipAwardsRsp} message GetVipAwardsRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetVipAwardsRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.awards = [];
            if (options.defaults)
                object.code = null;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = $root.vip.StateCode.toObject(message.code, options);
            if (message.awards && message.awards.length) {
                object.awards = [];
                for (var j = 0; j < message.awards.length; ++j)
                    object.awards[j] = $root.vip.AwardItem.toObject(message.awards[j], options);
            }
            return object;
        };

        /**
         * Converts this GetVipAwardsRsp to JSON.
         * @function toJSON
         * @memberof vip.GetVipAwardsRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetVipAwardsRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetVipAwardsRsp;
    })();

    vip.VipHeadFrameNot = (function() {

        /**
         * Properties of a VipHeadFrameNot.
         * @memberof vip
         * @interface IVipHeadFrameNot
         * @property {Object.<string,string>|null} [params] VipHeadFrameNot params
         */

        /**
         * Constructs a new VipHeadFrameNot.
         * @memberof vip
         * @classdesc Represents a VipHeadFrameNot.
         * @implements IVipHeadFrameNot
         * @constructor
         * @param {vip.IVipHeadFrameNot=} [properties] Properties to set
         */
        function VipHeadFrameNot(properties) {
            this.params = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VipHeadFrameNot params.
         * @member {Object.<string,string>} params
         * @memberof vip.VipHeadFrameNot
         * @instance
         */
        VipHeadFrameNot.prototype.params = $util.emptyObject;

        /**
         * Creates a new VipHeadFrameNot instance using the specified properties.
         * @function create
         * @memberof vip.VipHeadFrameNot
         * @static
         * @param {vip.IVipHeadFrameNot=} [properties] Properties to set
         * @returns {vip.VipHeadFrameNot} VipHeadFrameNot instance
         */
        VipHeadFrameNot.create = function create(properties) {
            return new VipHeadFrameNot(properties);
        };

        /**
         * Encodes the specified VipHeadFrameNot message. Does not implicitly {@link vip.VipHeadFrameNot.verify|verify} messages.
         * @function encode
         * @memberof vip.VipHeadFrameNot
         * @static
         * @param {vip.IVipHeadFrameNot} message VipHeadFrameNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VipHeadFrameNot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.params != null && message.hasOwnProperty("params"))
                for (var keys = Object.keys(message.params), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.params[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified VipHeadFrameNot message, length delimited. Does not implicitly {@link vip.VipHeadFrameNot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof vip.VipHeadFrameNot
         * @static
         * @param {vip.IVipHeadFrameNot} message VipHeadFrameNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VipHeadFrameNot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VipHeadFrameNot message from the specified reader or buffer.
         * @function decode
         * @memberof vip.VipHeadFrameNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {vip.VipHeadFrameNot} VipHeadFrameNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VipHeadFrameNot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.vip.VipHeadFrameNot(), key;
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
         * Decodes a VipHeadFrameNot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof vip.VipHeadFrameNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {vip.VipHeadFrameNot} VipHeadFrameNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VipHeadFrameNot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VipHeadFrameNot message.
         * @function verify
         * @memberof vip.VipHeadFrameNot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VipHeadFrameNot.verify = function verify(message) {
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
         * Creates a VipHeadFrameNot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof vip.VipHeadFrameNot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {vip.VipHeadFrameNot} VipHeadFrameNot
         */
        VipHeadFrameNot.fromObject = function fromObject(object) {
            if (object instanceof $root.vip.VipHeadFrameNot)
                return object;
            var message = new $root.vip.VipHeadFrameNot();
            if (object.params) {
                if (typeof object.params !== "object")
                    throw TypeError(".vip.VipHeadFrameNot.params: object expected");
                message.params = {};
                for (var keys = Object.keys(object.params), i = 0; i < keys.length; ++i)
                    message.params[keys[i]] = String(object.params[keys[i]]);
            }
            return message;
        };

        /**
         * Creates a plain object from a VipHeadFrameNot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof vip.VipHeadFrameNot
         * @static
         * @param {vip.VipHeadFrameNot} message VipHeadFrameNot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VipHeadFrameNot.toObject = function toObject(message, options) {
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
         * Converts this VipHeadFrameNot to JSON.
         * @function toJSON
         * @memberof vip.VipHeadFrameNot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VipHeadFrameNot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return VipHeadFrameNot;
    })();

    vip.VipAwardNot = (function() {

        /**
         * Properties of a VipAwardNot.
         * @memberof vip
         * @interface IVipAwardNot
         * @property {boolean|null} [haveRewards] VipAwardNot haveRewards
         * @property {number|null} [style] VipAwardNot style
         * @property {string|null} [desc] VipAwardNot desc
         * @property {number|null} [align] VipAwardNot align
         */

        /**
         * Constructs a new VipAwardNot.
         * @memberof vip
         * @classdesc Represents a VipAwardNot.
         * @implements IVipAwardNot
         * @constructor
         * @param {vip.IVipAwardNot=} [properties] Properties to set
         */
        function VipAwardNot(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VipAwardNot haveRewards.
         * @member {boolean} haveRewards
         * @memberof vip.VipAwardNot
         * @instance
         */
        VipAwardNot.prototype.haveRewards = false;

        /**
         * VipAwardNot style.
         * @member {number} style
         * @memberof vip.VipAwardNot
         * @instance
         */
        VipAwardNot.prototype.style = 0;

        /**
         * VipAwardNot desc.
         * @member {string} desc
         * @memberof vip.VipAwardNot
         * @instance
         */
        VipAwardNot.prototype.desc = "";

        /**
         * VipAwardNot align.
         * @member {number} align
         * @memberof vip.VipAwardNot
         * @instance
         */
        VipAwardNot.prototype.align = 0;

        /**
         * Creates a new VipAwardNot instance using the specified properties.
         * @function create
         * @memberof vip.VipAwardNot
         * @static
         * @param {vip.IVipAwardNot=} [properties] Properties to set
         * @returns {vip.VipAwardNot} VipAwardNot instance
         */
        VipAwardNot.create = function create(properties) {
            return new VipAwardNot(properties);
        };

        /**
         * Encodes the specified VipAwardNot message. Does not implicitly {@link vip.VipAwardNot.verify|verify} messages.
         * @function encode
         * @memberof vip.VipAwardNot
         * @static
         * @param {vip.IVipAwardNot} message VipAwardNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VipAwardNot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.haveRewards != null && message.hasOwnProperty("haveRewards"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.haveRewards);
            if (message.style != null && message.hasOwnProperty("style"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.style);
            if (message.desc != null && message.hasOwnProperty("desc"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.desc);
            if (message.align != null && message.hasOwnProperty("align"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.align);
            return writer;
        };

        /**
         * Encodes the specified VipAwardNot message, length delimited. Does not implicitly {@link vip.VipAwardNot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof vip.VipAwardNot
         * @static
         * @param {vip.IVipAwardNot} message VipAwardNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VipAwardNot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VipAwardNot message from the specified reader or buffer.
         * @function decode
         * @memberof vip.VipAwardNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {vip.VipAwardNot} VipAwardNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VipAwardNot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.vip.VipAwardNot();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.haveRewards = reader.bool();
                    break;
                case 2:
                    message.style = reader.int32();
                    break;
                case 3:
                    message.desc = reader.string();
                    break;
                case 4:
                    message.align = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VipAwardNot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof vip.VipAwardNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {vip.VipAwardNot} VipAwardNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VipAwardNot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VipAwardNot message.
         * @function verify
         * @memberof vip.VipAwardNot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VipAwardNot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.haveRewards != null && message.hasOwnProperty("haveRewards"))
                if (typeof message.haveRewards !== "boolean")
                    return "haveRewards: boolean expected";
            if (message.style != null && message.hasOwnProperty("style"))
                if (!$util.isInteger(message.style))
                    return "style: integer expected";
            if (message.desc != null && message.hasOwnProperty("desc"))
                if (!$util.isString(message.desc))
                    return "desc: string expected";
            if (message.align != null && message.hasOwnProperty("align"))
                if (!$util.isInteger(message.align))
                    return "align: integer expected";
            return null;
        };

        /**
         * Creates a VipAwardNot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof vip.VipAwardNot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {vip.VipAwardNot} VipAwardNot
         */
        VipAwardNot.fromObject = function fromObject(object) {
            if (object instanceof $root.vip.VipAwardNot)
                return object;
            var message = new $root.vip.VipAwardNot();
            if (object.haveRewards != null)
                message.haveRewards = Boolean(object.haveRewards);
            if (object.style != null)
                message.style = object.style | 0;
            if (object.desc != null)
                message.desc = String(object.desc);
            if (object.align != null)
                message.align = object.align | 0;
            return message;
        };

        /**
         * Creates a plain object from a VipAwardNot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof vip.VipAwardNot
         * @static
         * @param {vip.VipAwardNot} message VipAwardNot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VipAwardNot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.haveRewards = false;
                object.style = 0;
                object.desc = "";
                object.align = 0;
            }
            if (message.haveRewards != null && message.hasOwnProperty("haveRewards"))
                object.haveRewards = message.haveRewards;
            if (message.style != null && message.hasOwnProperty("style"))
                object.style = message.style;
            if (message.desc != null && message.hasOwnProperty("desc"))
                object.desc = message.desc;
            if (message.align != null && message.hasOwnProperty("align"))
                object.align = message.align;
            return object;
        };

        /**
         * Converts this VipAwardNot to JSON.
         * @function toJSON
         * @memberof vip.VipAwardNot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VipAwardNot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return VipAwardNot;
    })();

    return vip;
})();

module.exports = $root.vip;
