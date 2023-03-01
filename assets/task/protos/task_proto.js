/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.task = (function() {

    /**
     * Namespace task.
     * @exports task
     * @namespace
     */
    var task = {};

    task.Task = (function() {

        /**
         * Constructs a new Task service.
         * @memberof task
         * @classdesc Represents a Task
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Task(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Task.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Task;

        /**
         * Creates new Task service using the specified rpc implementation.
         * @function create
         * @memberof task.Task
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Task} RPC service. Useful where requests and/or responses are streamed.
         */
        Task.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link task.Task#getTaskProgress}.
         * @memberof task.Task
         * @typedef GetTaskProgressCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {task.GetTaskProgressRsp} [response] GetTaskProgressRsp
         */

        /**
         * Calls GetTaskProgress.
         * @function getTaskProgress
         * @memberof task.Task
         * @instance
         * @param {task.IGetTaskProgressReq} request GetTaskProgressReq message or plain object
         * @param {task.Task.GetTaskProgressCallback} callback Node-style callback called with the error, if any, and GetTaskProgressRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Task.prototype.getTaskProgress = function getTaskProgress(request, callback) {
            return this.rpcCall(getTaskProgress, $root.task.GetTaskProgressReq, $root.task.GetTaskProgressRsp, request, callback);
        }, "name", { value: "GetTaskProgress" });

        /**
         * Calls GetTaskProgress.
         * @function getTaskProgress
         * @memberof task.Task
         * @instance
         * @param {task.IGetTaskProgressReq} request GetTaskProgressReq message or plain object
         * @returns {Promise<task.GetTaskProgressRsp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link task.Task#getTaskAward}.
         * @memberof task.Task
         * @typedef GetTaskAwardCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {task.GetTaskAwardRsp} [response] GetTaskAwardRsp
         */

        /**
         * Calls GetTaskAward.
         * @function getTaskAward
         * @memberof task.Task
         * @instance
         * @param {task.IGetTaskAwardReq} request GetTaskAwardReq message or plain object
         * @param {task.Task.GetTaskAwardCallback} callback Node-style callback called with the error, if any, and GetTaskAwardRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Task.prototype.getTaskAward = function getTaskAward(request, callback) {
            return this.rpcCall(getTaskAward, $root.task.GetTaskAwardReq, $root.task.GetTaskAwardRsp, request, callback);
        }, "name", { value: "GetTaskAward" });

        /**
         * Calls GetTaskAward.
         * @function getTaskAward
         * @memberof task.Task
         * @instance
         * @param {task.IGetTaskAwardReq} request GetTaskAwardReq message or plain object
         * @returns {Promise<task.GetTaskAwardRsp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link task.Task#uptTaskProgressByIndex}.
         * @memberof task.Task
         * @typedef UptTaskProgressByIndexCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {task.UptTaskProgressByIndexRsp} [response] UptTaskProgressByIndexRsp
         */

        /**
         * Calls UptTaskProgressByIndex.
         * @function uptTaskProgressByIndex
         * @memberof task.Task
         * @instance
         * @param {task.IUptTaskProgressByIndexReq} request UptTaskProgressByIndexReq message or plain object
         * @param {task.Task.UptTaskProgressByIndexCallback} callback Node-style callback called with the error, if any, and UptTaskProgressByIndexRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Task.prototype.uptTaskProgressByIndex = function uptTaskProgressByIndex(request, callback) {
            return this.rpcCall(uptTaskProgressByIndex, $root.task.UptTaskProgressByIndexReq, $root.task.UptTaskProgressByIndexRsp, request, callback);
        }, "name", { value: "UptTaskProgressByIndex" });

        /**
         * Calls UptTaskProgressByIndex.
         * @function uptTaskProgressByIndex
         * @memberof task.Task
         * @instance
         * @param {task.IUptTaskProgressByIndexReq} request UptTaskProgressByIndexReq message or plain object
         * @returns {Promise<task.UptTaskProgressByIndexRsp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link task.Task#uptTaskProgressByGroup}.
         * @memberof task.Task
         * @typedef UptTaskProgressByGroupCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {task.UptTaskProgressByGroupRsp} [response] UptTaskProgressByGroupRsp
         */

        /**
         * Calls UptTaskProgressByGroup.
         * @function uptTaskProgressByGroup
         * @memberof task.Task
         * @instance
         * @param {task.IUptTaskProgressByGroupReq} request UptTaskProgressByGroupReq message or plain object
         * @param {task.Task.UptTaskProgressByGroupCallback} callback Node-style callback called with the error, if any, and UptTaskProgressByGroupRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Task.prototype.uptTaskProgressByGroup = function uptTaskProgressByGroup(request, callback) {
            return this.rpcCall(uptTaskProgressByGroup, $root.task.UptTaskProgressByGroupReq, $root.task.UptTaskProgressByGroupRsp, request, callback);
        }, "name", { value: "UptTaskProgressByGroup" });

        /**
         * Calls UptTaskProgressByGroup.
         * @function uptTaskProgressByGroup
         * @memberof task.Task
         * @instance
         * @param {task.IUptTaskProgressByGroupReq} request UptTaskProgressByGroupReq message or plain object
         * @returns {Promise<task.UptTaskProgressByGroupRsp>} Promise
         * @variation 2
         */

        return Task;
    })();

    task.GetTaskProgressReq = (function() {

        /**
         * Properties of a GetTaskProgressReq.
         * @memberof task
         * @interface IGetTaskProgressReq
         * @property {number|null} [type] GetTaskProgressReq type
         * @property {number|Long|null} [uid] GetTaskProgressReq uid
         */

        /**
         * Constructs a new GetTaskProgressReq.
         * @memberof task
         * @classdesc Represents a GetTaskProgressReq.
         * @implements IGetTaskProgressReq
         * @constructor
         * @param {task.IGetTaskProgressReq=} [properties] Properties to set
         */
        function GetTaskProgressReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetTaskProgressReq type.
         * @member {number} type
         * @memberof task.GetTaskProgressReq
         * @instance
         */
        GetTaskProgressReq.prototype.type = 0;

        /**
         * GetTaskProgressReq uid.
         * @member {number|Long} uid
         * @memberof task.GetTaskProgressReq
         * @instance
         */
        GetTaskProgressReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GetTaskProgressReq instance using the specified properties.
         * @function create
         * @memberof task.GetTaskProgressReq
         * @static
         * @param {task.IGetTaskProgressReq=} [properties] Properties to set
         * @returns {task.GetTaskProgressReq} GetTaskProgressReq instance
         */
        GetTaskProgressReq.create = function create(properties) {
            return new GetTaskProgressReq(properties);
        };

        /**
         * Encodes the specified GetTaskProgressReq message. Does not implicitly {@link task.GetTaskProgressReq.verify|verify} messages.
         * @function encode
         * @memberof task.GetTaskProgressReq
         * @static
         * @param {task.IGetTaskProgressReq} message GetTaskProgressReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetTaskProgressReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.uid);
            return writer;
        };

        /**
         * Encodes the specified GetTaskProgressReq message, length delimited. Does not implicitly {@link task.GetTaskProgressReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof task.GetTaskProgressReq
         * @static
         * @param {task.IGetTaskProgressReq} message GetTaskProgressReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetTaskProgressReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetTaskProgressReq message from the specified reader or buffer.
         * @function decode
         * @memberof task.GetTaskProgressReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {task.GetTaskProgressReq} GetTaskProgressReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetTaskProgressReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.task.GetTaskProgressReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
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
         * Decodes a GetTaskProgressReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof task.GetTaskProgressReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {task.GetTaskProgressReq} GetTaskProgressReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetTaskProgressReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetTaskProgressReq message.
         * @function verify
         * @memberof task.GetTaskProgressReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetTaskProgressReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            return null;
        };

        /**
         * Creates a GetTaskProgressReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof task.GetTaskProgressReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {task.GetTaskProgressReq} GetTaskProgressReq
         */
        GetTaskProgressReq.fromObject = function fromObject(object) {
            if (object instanceof $root.task.GetTaskProgressReq)
                return object;
            var message = new $root.task.GetTaskProgressReq();
            if (object.type != null)
                message.type = object.type | 0;
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
         * Creates a plain object from a GetTaskProgressReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof task.GetTaskProgressReq
         * @static
         * @param {task.GetTaskProgressReq} message GetTaskProgressReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetTaskProgressReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            return object;
        };

        /**
         * Converts this GetTaskProgressReq to JSON.
         * @function toJSON
         * @memberof task.GetTaskProgressReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetTaskProgressReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetTaskProgressReq;
    })();

    task.AwardItem = (function() {

        /**
         * Properties of an AwardItem.
         * @memberof task
         * @interface IAwardItem
         * @property {number|null} [type] AwardItem type
         * @property {number|null} [propId] AwardItem propId
         * @property {number|Long|null} [minNum] AwardItem minNum
         * @property {number|Long|null} [maxNum] AwardItem maxNum
         * @property {number|Long|null} [effectTime] AwardItem effectTime
         */

        /**
         * Constructs a new AwardItem.
         * @memberof task
         * @classdesc Represents an AwardItem.
         * @implements IAwardItem
         * @constructor
         * @param {task.IAwardItem=} [properties] Properties to set
         */
        function AwardItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AwardItem type.
         * @member {number} type
         * @memberof task.AwardItem
         * @instance
         */
        AwardItem.prototype.type = 0;

        /**
         * AwardItem propId.
         * @member {number} propId
         * @memberof task.AwardItem
         * @instance
         */
        AwardItem.prototype.propId = 0;

        /**
         * AwardItem minNum.
         * @member {number|Long} minNum
         * @memberof task.AwardItem
         * @instance
         */
        AwardItem.prototype.minNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AwardItem maxNum.
         * @member {number|Long} maxNum
         * @memberof task.AwardItem
         * @instance
         */
        AwardItem.prototype.maxNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AwardItem effectTime.
         * @member {number|Long} effectTime
         * @memberof task.AwardItem
         * @instance
         */
        AwardItem.prototype.effectTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new AwardItem instance using the specified properties.
         * @function create
         * @memberof task.AwardItem
         * @static
         * @param {task.IAwardItem=} [properties] Properties to set
         * @returns {task.AwardItem} AwardItem instance
         */
        AwardItem.create = function create(properties) {
            return new AwardItem(properties);
        };

        /**
         * Encodes the specified AwardItem message. Does not implicitly {@link task.AwardItem.verify|verify} messages.
         * @function encode
         * @memberof task.AwardItem
         * @static
         * @param {task.IAwardItem} message AwardItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AwardItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.propId != null && message.hasOwnProperty("propId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.propId);
            if (message.minNum != null && message.hasOwnProperty("minNum"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.minNum);
            if (message.maxNum != null && message.hasOwnProperty("maxNum"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.maxNum);
            if (message.effectTime != null && message.hasOwnProperty("effectTime"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.effectTime);
            return writer;
        };

        /**
         * Encodes the specified AwardItem message, length delimited. Does not implicitly {@link task.AwardItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof task.AwardItem
         * @static
         * @param {task.IAwardItem} message AwardItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AwardItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AwardItem message from the specified reader or buffer.
         * @function decode
         * @memberof task.AwardItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {task.AwardItem} AwardItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AwardItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.task.AwardItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.propId = reader.int32();
                    break;
                case 3:
                    message.minNum = reader.int64();
                    break;
                case 4:
                    message.maxNum = reader.int64();
                    break;
                case 5:
                    message.effectTime = reader.int64();
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
         * @memberof task.AwardItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {task.AwardItem} AwardItem
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
         * @memberof task.AwardItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AwardItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
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
            return null;
        };

        /**
         * Creates an AwardItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof task.AwardItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {task.AwardItem} AwardItem
         */
        AwardItem.fromObject = function fromObject(object) {
            if (object instanceof $root.task.AwardItem)
                return object;
            var message = new $root.task.AwardItem();
            if (object.type != null)
                message.type = object.type | 0;
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
            return message;
        };

        /**
         * Creates a plain object from an AwardItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof task.AwardItem
         * @static
         * @param {task.AwardItem} message AwardItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AwardItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = 0;
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
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
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
            return object;
        };

        /**
         * Converts this AwardItem to JSON.
         * @function toJSON
         * @memberof task.AwardItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AwardItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AwardItem;
    })();

    task.TaskItem = (function() {

        /**
         * Properties of a TaskItem.
         * @memberof task
         * @interface ITaskItem
         * @property {number|Long|null} [uid] TaskItem uid
         * @property {string|null} [mid] TaskItem mid
         * @property {number|null} [gid] TaskItem gid
         * @property {string|null} [progId] TaskItem progId
         * @property {number|null} [taskId] TaskItem taskId
         * @property {number|null} [taskType] TaskItem taskType
         * @property {number|null} [taskCond] TaskItem taskCond
         * @property {string|null} [desc] TaskItem desc
         * @property {string|null} [title] TaskItem title
         * @property {Array.<task.IAwardItem>|null} [awards] TaskItem awards
         * @property {number|Long|null} [condNum] TaskItem condNum
         * @property {number|Long|null} [curNum] TaskItem curNum
         * @property {number|null} [status] TaskItem status
         * @property {number|Long|null} [headFrameIndex] TaskItem headFrameIndex
         * @property {number|null} [taskGroup] TaskItem taskGroup
         */

        /**
         * Constructs a new TaskItem.
         * @memberof task
         * @classdesc Represents a TaskItem.
         * @implements ITaskItem
         * @constructor
         * @param {task.ITaskItem=} [properties] Properties to set
         */
        function TaskItem(properties) {
            this.awards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TaskItem uid.
         * @member {number|Long} uid
         * @memberof task.TaskItem
         * @instance
         */
        TaskItem.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * TaskItem mid.
         * @member {string} mid
         * @memberof task.TaskItem
         * @instance
         */
        TaskItem.prototype.mid = "";

        /**
         * TaskItem gid.
         * @member {number} gid
         * @memberof task.TaskItem
         * @instance
         */
        TaskItem.prototype.gid = 0;

        /**
         * TaskItem progId.
         * @member {string} progId
         * @memberof task.TaskItem
         * @instance
         */
        TaskItem.prototype.progId = "";

        /**
         * TaskItem taskId.
         * @member {number} taskId
         * @memberof task.TaskItem
         * @instance
         */
        TaskItem.prototype.taskId = 0;

        /**
         * TaskItem taskType.
         * @member {number} taskType
         * @memberof task.TaskItem
         * @instance
         */
        TaskItem.prototype.taskType = 0;

        /**
         * TaskItem taskCond.
         * @member {number} taskCond
         * @memberof task.TaskItem
         * @instance
         */
        TaskItem.prototype.taskCond = 0;

        /**
         * TaskItem desc.
         * @member {string} desc
         * @memberof task.TaskItem
         * @instance
         */
        TaskItem.prototype.desc = "";

        /**
         * TaskItem title.
         * @member {string} title
         * @memberof task.TaskItem
         * @instance
         */
        TaskItem.prototype.title = "";

        /**
         * TaskItem awards.
         * @member {Array.<task.IAwardItem>} awards
         * @memberof task.TaskItem
         * @instance
         */
        TaskItem.prototype.awards = $util.emptyArray;

        /**
         * TaskItem condNum.
         * @member {number|Long} condNum
         * @memberof task.TaskItem
         * @instance
         */
        TaskItem.prototype.condNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * TaskItem curNum.
         * @member {number|Long} curNum
         * @memberof task.TaskItem
         * @instance
         */
        TaskItem.prototype.curNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * TaskItem status.
         * @member {number} status
         * @memberof task.TaskItem
         * @instance
         */
        TaskItem.prototype.status = 0;

        /**
         * TaskItem headFrameIndex.
         * @member {number|Long} headFrameIndex
         * @memberof task.TaskItem
         * @instance
         */
        TaskItem.prototype.headFrameIndex = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * TaskItem taskGroup.
         * @member {number} taskGroup
         * @memberof task.TaskItem
         * @instance
         */
        TaskItem.prototype.taskGroup = 0;

        /**
         * Creates a new TaskItem instance using the specified properties.
         * @function create
         * @memberof task.TaskItem
         * @static
         * @param {task.ITaskItem=} [properties] Properties to set
         * @returns {task.TaskItem} TaskItem instance
         */
        TaskItem.create = function create(properties) {
            return new TaskItem(properties);
        };

        /**
         * Encodes the specified TaskItem message. Does not implicitly {@link task.TaskItem.verify|verify} messages.
         * @function encode
         * @memberof task.TaskItem
         * @static
         * @param {task.ITaskItem} message TaskItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TaskItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            if (message.mid != null && message.hasOwnProperty("mid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.mid);
            if (message.gid != null && message.hasOwnProperty("gid"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.gid);
            if (message.progId != null && message.hasOwnProperty("progId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.progId);
            if (message.taskId != null && message.hasOwnProperty("taskId"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.taskId);
            if (message.taskType != null && message.hasOwnProperty("taskType"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.taskType);
            if (message.taskCond != null && message.hasOwnProperty("taskCond"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.taskCond);
            if (message.desc != null && message.hasOwnProperty("desc"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.desc);
            if (message.title != null && message.hasOwnProperty("title"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.title);
            if (message.awards != null && message.awards.length)
                for (var i = 0; i < message.awards.length; ++i)
                    $root.task.AwardItem.encode(message.awards[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.condNum != null && message.hasOwnProperty("condNum"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.condNum);
            if (message.curNum != null && message.hasOwnProperty("curNum"))
                writer.uint32(/* id 12, wireType 0 =*/96).int64(message.curNum);
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.status);
            if (message.headFrameIndex != null && message.hasOwnProperty("headFrameIndex"))
                writer.uint32(/* id 14, wireType 0 =*/112).int64(message.headFrameIndex);
            if (message.taskGroup != null && message.hasOwnProperty("taskGroup"))
                writer.uint32(/* id 15, wireType 0 =*/120).int32(message.taskGroup);
            return writer;
        };

        /**
         * Encodes the specified TaskItem message, length delimited. Does not implicitly {@link task.TaskItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof task.TaskItem
         * @static
         * @param {task.ITaskItem} message TaskItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TaskItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TaskItem message from the specified reader or buffer.
         * @function decode
         * @memberof task.TaskItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {task.TaskItem} TaskItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TaskItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.task.TaskItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int64();
                    break;
                case 2:
                    message.mid = reader.string();
                    break;
                case 3:
                    message.gid = reader.int32();
                    break;
                case 4:
                    message.progId = reader.string();
                    break;
                case 5:
                    message.taskId = reader.int32();
                    break;
                case 6:
                    message.taskType = reader.int32();
                    break;
                case 7:
                    message.taskCond = reader.int32();
                    break;
                case 8:
                    message.desc = reader.string();
                    break;
                case 9:
                    message.title = reader.string();
                    break;
                case 10:
                    if (!(message.awards && message.awards.length))
                        message.awards = [];
                    message.awards.push($root.task.AwardItem.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.condNum = reader.int64();
                    break;
                case 12:
                    message.curNum = reader.int64();
                    break;
                case 13:
                    message.status = reader.int32();
                    break;
                case 14:
                    message.headFrameIndex = reader.int64();
                    break;
                case 15:
                    message.taskGroup = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TaskItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof task.TaskItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {task.TaskItem} TaskItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TaskItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TaskItem message.
         * @function verify
         * @memberof task.TaskItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TaskItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.mid != null && message.hasOwnProperty("mid"))
                if (!$util.isString(message.mid))
                    return "mid: string expected";
            if (message.gid != null && message.hasOwnProperty("gid"))
                if (!$util.isInteger(message.gid))
                    return "gid: integer expected";
            if (message.progId != null && message.hasOwnProperty("progId"))
                if (!$util.isString(message.progId))
                    return "progId: string expected";
            if (message.taskId != null && message.hasOwnProperty("taskId"))
                if (!$util.isInteger(message.taskId))
                    return "taskId: integer expected";
            if (message.taskType != null && message.hasOwnProperty("taskType"))
                if (!$util.isInteger(message.taskType))
                    return "taskType: integer expected";
            if (message.taskCond != null && message.hasOwnProperty("taskCond"))
                if (!$util.isInteger(message.taskCond))
                    return "taskCond: integer expected";
            if (message.desc != null && message.hasOwnProperty("desc"))
                if (!$util.isString(message.desc))
                    return "desc: string expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.awards != null && message.hasOwnProperty("awards")) {
                if (!Array.isArray(message.awards))
                    return "awards: array expected";
                for (var i = 0; i < message.awards.length; ++i) {
                    var error = $root.task.AwardItem.verify(message.awards[i]);
                    if (error)
                        return "awards." + error;
                }
            }
            if (message.condNum != null && message.hasOwnProperty("condNum"))
                if (!$util.isInteger(message.condNum) && !(message.condNum && $util.isInteger(message.condNum.low) && $util.isInteger(message.condNum.high)))
                    return "condNum: integer|Long expected";
            if (message.curNum != null && message.hasOwnProperty("curNum"))
                if (!$util.isInteger(message.curNum) && !(message.curNum && $util.isInteger(message.curNum.low) && $util.isInteger(message.curNum.high)))
                    return "curNum: integer|Long expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            if (message.headFrameIndex != null && message.hasOwnProperty("headFrameIndex"))
                if (!$util.isInteger(message.headFrameIndex) && !(message.headFrameIndex && $util.isInteger(message.headFrameIndex.low) && $util.isInteger(message.headFrameIndex.high)))
                    return "headFrameIndex: integer|Long expected";
            if (message.taskGroup != null && message.hasOwnProperty("taskGroup"))
                if (!$util.isInteger(message.taskGroup))
                    return "taskGroup: integer expected";
            return null;
        };

        /**
         * Creates a TaskItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof task.TaskItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {task.TaskItem} TaskItem
         */
        TaskItem.fromObject = function fromObject(object) {
            if (object instanceof $root.task.TaskItem)
                return object;
            var message = new $root.task.TaskItem();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.mid != null)
                message.mid = String(object.mid);
            if (object.gid != null)
                message.gid = object.gid | 0;
            if (object.progId != null)
                message.progId = String(object.progId);
            if (object.taskId != null)
                message.taskId = object.taskId | 0;
            if (object.taskType != null)
                message.taskType = object.taskType | 0;
            if (object.taskCond != null)
                message.taskCond = object.taskCond | 0;
            if (object.desc != null)
                message.desc = String(object.desc);
            if (object.title != null)
                message.title = String(object.title);
            if (object.awards) {
                if (!Array.isArray(object.awards))
                    throw TypeError(".task.TaskItem.awards: array expected");
                message.awards = [];
                for (var i = 0; i < object.awards.length; ++i) {
                    if (typeof object.awards[i] !== "object")
                        throw TypeError(".task.TaskItem.awards: object expected");
                    message.awards[i] = $root.task.AwardItem.fromObject(object.awards[i]);
                }
            }
            if (object.condNum != null)
                if ($util.Long)
                    (message.condNum = $util.Long.fromValue(object.condNum)).unsigned = false;
                else if (typeof object.condNum === "string")
                    message.condNum = parseInt(object.condNum, 10);
                else if (typeof object.condNum === "number")
                    message.condNum = object.condNum;
                else if (typeof object.condNum === "object")
                    message.condNum = new $util.LongBits(object.condNum.low >>> 0, object.condNum.high >>> 0).toNumber();
            if (object.curNum != null)
                if ($util.Long)
                    (message.curNum = $util.Long.fromValue(object.curNum)).unsigned = false;
                else if (typeof object.curNum === "string")
                    message.curNum = parseInt(object.curNum, 10);
                else if (typeof object.curNum === "number")
                    message.curNum = object.curNum;
                else if (typeof object.curNum === "object")
                    message.curNum = new $util.LongBits(object.curNum.low >>> 0, object.curNum.high >>> 0).toNumber();
            if (object.status != null)
                message.status = object.status | 0;
            if (object.headFrameIndex != null)
                if ($util.Long)
                    (message.headFrameIndex = $util.Long.fromValue(object.headFrameIndex)).unsigned = false;
                else if (typeof object.headFrameIndex === "string")
                    message.headFrameIndex = parseInt(object.headFrameIndex, 10);
                else if (typeof object.headFrameIndex === "number")
                    message.headFrameIndex = object.headFrameIndex;
                else if (typeof object.headFrameIndex === "object")
                    message.headFrameIndex = new $util.LongBits(object.headFrameIndex.low >>> 0, object.headFrameIndex.high >>> 0).toNumber();
            if (object.taskGroup != null)
                message.taskGroup = object.taskGroup | 0;
            return message;
        };

        /**
         * Creates a plain object from a TaskItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof task.TaskItem
         * @static
         * @param {task.TaskItem} message TaskItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TaskItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.awards = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.mid = "";
                object.gid = 0;
                object.progId = "";
                object.taskId = 0;
                object.taskType = 0;
                object.taskCond = 0;
                object.desc = "";
                object.title = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.condNum = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.condNum = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.curNum = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.curNum = options.longs === String ? "0" : 0;
                object.status = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.headFrameIndex = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.headFrameIndex = options.longs === String ? "0" : 0;
                object.taskGroup = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.mid != null && message.hasOwnProperty("mid"))
                object.mid = message.mid;
            if (message.gid != null && message.hasOwnProperty("gid"))
                object.gid = message.gid;
            if (message.progId != null && message.hasOwnProperty("progId"))
                object.progId = message.progId;
            if (message.taskId != null && message.hasOwnProperty("taskId"))
                object.taskId = message.taskId;
            if (message.taskType != null && message.hasOwnProperty("taskType"))
                object.taskType = message.taskType;
            if (message.taskCond != null && message.hasOwnProperty("taskCond"))
                object.taskCond = message.taskCond;
            if (message.desc != null && message.hasOwnProperty("desc"))
                object.desc = message.desc;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.awards && message.awards.length) {
                object.awards = [];
                for (var j = 0; j < message.awards.length; ++j)
                    object.awards[j] = $root.task.AwardItem.toObject(message.awards[j], options);
            }
            if (message.condNum != null && message.hasOwnProperty("condNum"))
                if (typeof message.condNum === "number")
                    object.condNum = options.longs === String ? String(message.condNum) : message.condNum;
                else
                    object.condNum = options.longs === String ? $util.Long.prototype.toString.call(message.condNum) : options.longs === Number ? new $util.LongBits(message.condNum.low >>> 0, message.condNum.high >>> 0).toNumber() : message.condNum;
            if (message.curNum != null && message.hasOwnProperty("curNum"))
                if (typeof message.curNum === "number")
                    object.curNum = options.longs === String ? String(message.curNum) : message.curNum;
                else
                    object.curNum = options.longs === String ? $util.Long.prototype.toString.call(message.curNum) : options.longs === Number ? new $util.LongBits(message.curNum.low >>> 0, message.curNum.high >>> 0).toNumber() : message.curNum;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.headFrameIndex != null && message.hasOwnProperty("headFrameIndex"))
                if (typeof message.headFrameIndex === "number")
                    object.headFrameIndex = options.longs === String ? String(message.headFrameIndex) : message.headFrameIndex;
                else
                    object.headFrameIndex = options.longs === String ? $util.Long.prototype.toString.call(message.headFrameIndex) : options.longs === Number ? new $util.LongBits(message.headFrameIndex.low >>> 0, message.headFrameIndex.high >>> 0).toNumber() : message.headFrameIndex;
            if (message.taskGroup != null && message.hasOwnProperty("taskGroup"))
                object.taskGroup = message.taskGroup;
            return object;
        };

        /**
         * Converts this TaskItem to JSON.
         * @function toJSON
         * @memberof task.TaskItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TaskItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TaskItem;
    })();

    task.GetTaskProgressRsp = (function() {

        /**
         * Properties of a GetTaskProgressRsp.
         * @memberof task
         * @interface IGetTaskProgressRsp
         * @property {number|null} [errCode] GetTaskProgressRsp errCode
         * @property {string|null} [errMsg] GetTaskProgressRsp errMsg
         * @property {Array.<task.ITaskItem>|null} [taskItems] GetTaskProgressRsp taskItems
         */

        /**
         * Constructs a new GetTaskProgressRsp.
         * @memberof task
         * @classdesc Represents a GetTaskProgressRsp.
         * @implements IGetTaskProgressRsp
         * @constructor
         * @param {task.IGetTaskProgressRsp=} [properties] Properties to set
         */
        function GetTaskProgressRsp(properties) {
            this.taskItems = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetTaskProgressRsp errCode.
         * @member {number} errCode
         * @memberof task.GetTaskProgressRsp
         * @instance
         */
        GetTaskProgressRsp.prototype.errCode = 0;

        /**
         * GetTaskProgressRsp errMsg.
         * @member {string} errMsg
         * @memberof task.GetTaskProgressRsp
         * @instance
         */
        GetTaskProgressRsp.prototype.errMsg = "";

        /**
         * GetTaskProgressRsp taskItems.
         * @member {Array.<task.ITaskItem>} taskItems
         * @memberof task.GetTaskProgressRsp
         * @instance
         */
        GetTaskProgressRsp.prototype.taskItems = $util.emptyArray;

        /**
         * Creates a new GetTaskProgressRsp instance using the specified properties.
         * @function create
         * @memberof task.GetTaskProgressRsp
         * @static
         * @param {task.IGetTaskProgressRsp=} [properties] Properties to set
         * @returns {task.GetTaskProgressRsp} GetTaskProgressRsp instance
         */
        GetTaskProgressRsp.create = function create(properties) {
            return new GetTaskProgressRsp(properties);
        };

        /**
         * Encodes the specified GetTaskProgressRsp message. Does not implicitly {@link task.GetTaskProgressRsp.verify|verify} messages.
         * @function encode
         * @memberof task.GetTaskProgressRsp
         * @static
         * @param {task.IGetTaskProgressRsp} message GetTaskProgressRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetTaskProgressRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            if (message.taskItems != null && message.taskItems.length)
                for (var i = 0; i < message.taskItems.length; ++i)
                    $root.task.TaskItem.encode(message.taskItems[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetTaskProgressRsp message, length delimited. Does not implicitly {@link task.GetTaskProgressRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof task.GetTaskProgressRsp
         * @static
         * @param {task.IGetTaskProgressRsp} message GetTaskProgressRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetTaskProgressRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetTaskProgressRsp message from the specified reader or buffer.
         * @function decode
         * @memberof task.GetTaskProgressRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {task.GetTaskProgressRsp} GetTaskProgressRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetTaskProgressRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.task.GetTaskProgressRsp();
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
                    if (!(message.taskItems && message.taskItems.length))
                        message.taskItems = [];
                    message.taskItems.push($root.task.TaskItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetTaskProgressRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof task.GetTaskProgressRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {task.GetTaskProgressRsp} GetTaskProgressRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetTaskProgressRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetTaskProgressRsp message.
         * @function verify
         * @memberof task.GetTaskProgressRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetTaskProgressRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                if (!$util.isInteger(message.errCode))
                    return "errCode: integer expected";
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                if (!$util.isString(message.errMsg))
                    return "errMsg: string expected";
            if (message.taskItems != null && message.hasOwnProperty("taskItems")) {
                if (!Array.isArray(message.taskItems))
                    return "taskItems: array expected";
                for (var i = 0; i < message.taskItems.length; ++i) {
                    var error = $root.task.TaskItem.verify(message.taskItems[i]);
                    if (error)
                        return "taskItems." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetTaskProgressRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof task.GetTaskProgressRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {task.GetTaskProgressRsp} GetTaskProgressRsp
         */
        GetTaskProgressRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.task.GetTaskProgressRsp)
                return object;
            var message = new $root.task.GetTaskProgressRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            if (object.taskItems) {
                if (!Array.isArray(object.taskItems))
                    throw TypeError(".task.GetTaskProgressRsp.taskItems: array expected");
                message.taskItems = [];
                for (var i = 0; i < object.taskItems.length; ++i) {
                    if (typeof object.taskItems[i] !== "object")
                        throw TypeError(".task.GetTaskProgressRsp.taskItems: object expected");
                    message.taskItems[i] = $root.task.TaskItem.fromObject(object.taskItems[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetTaskProgressRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof task.GetTaskProgressRsp
         * @static
         * @param {task.GetTaskProgressRsp} message GetTaskProgressRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetTaskProgressRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.taskItems = [];
            if (options.defaults) {
                object.errCode = 0;
                object.errMsg = "";
            }
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                object.errCode = message.errCode;
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                object.errMsg = message.errMsg;
            if (message.taskItems && message.taskItems.length) {
                object.taskItems = [];
                for (var j = 0; j < message.taskItems.length; ++j)
                    object.taskItems[j] = $root.task.TaskItem.toObject(message.taskItems[j], options);
            }
            return object;
        };

        /**
         * Converts this GetTaskProgressRsp to JSON.
         * @function toJSON
         * @memberof task.GetTaskProgressRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetTaskProgressRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetTaskProgressRsp;
    })();

    task.GetTaskAwardReq = (function() {

        /**
         * Properties of a GetTaskAwardReq.
         * @memberof task
         * @interface IGetTaskAwardReq
         * @property {string|null} [progId] GetTaskAwardReq progId
         * @property {number|Long|null} [uid] GetTaskAwardReq uid
         */

        /**
         * Constructs a new GetTaskAwardReq.
         * @memberof task
         * @classdesc Represents a GetTaskAwardReq.
         * @implements IGetTaskAwardReq
         * @constructor
         * @param {task.IGetTaskAwardReq=} [properties] Properties to set
         */
        function GetTaskAwardReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetTaskAwardReq progId.
         * @member {string} progId
         * @memberof task.GetTaskAwardReq
         * @instance
         */
        GetTaskAwardReq.prototype.progId = "";

        /**
         * GetTaskAwardReq uid.
         * @member {number|Long} uid
         * @memberof task.GetTaskAwardReq
         * @instance
         */
        GetTaskAwardReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GetTaskAwardReq instance using the specified properties.
         * @function create
         * @memberof task.GetTaskAwardReq
         * @static
         * @param {task.IGetTaskAwardReq=} [properties] Properties to set
         * @returns {task.GetTaskAwardReq} GetTaskAwardReq instance
         */
        GetTaskAwardReq.create = function create(properties) {
            return new GetTaskAwardReq(properties);
        };

        /**
         * Encodes the specified GetTaskAwardReq message. Does not implicitly {@link task.GetTaskAwardReq.verify|verify} messages.
         * @function encode
         * @memberof task.GetTaskAwardReq
         * @static
         * @param {task.IGetTaskAwardReq} message GetTaskAwardReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetTaskAwardReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.progId != null && message.hasOwnProperty("progId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.progId);
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.uid);
            return writer;
        };

        /**
         * Encodes the specified GetTaskAwardReq message, length delimited. Does not implicitly {@link task.GetTaskAwardReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof task.GetTaskAwardReq
         * @static
         * @param {task.IGetTaskAwardReq} message GetTaskAwardReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetTaskAwardReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetTaskAwardReq message from the specified reader or buffer.
         * @function decode
         * @memberof task.GetTaskAwardReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {task.GetTaskAwardReq} GetTaskAwardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetTaskAwardReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.task.GetTaskAwardReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.progId = reader.string();
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
         * Decodes a GetTaskAwardReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof task.GetTaskAwardReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {task.GetTaskAwardReq} GetTaskAwardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetTaskAwardReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetTaskAwardReq message.
         * @function verify
         * @memberof task.GetTaskAwardReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetTaskAwardReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.progId != null && message.hasOwnProperty("progId"))
                if (!$util.isString(message.progId))
                    return "progId: string expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            return null;
        };

        /**
         * Creates a GetTaskAwardReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof task.GetTaskAwardReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {task.GetTaskAwardReq} GetTaskAwardReq
         */
        GetTaskAwardReq.fromObject = function fromObject(object) {
            if (object instanceof $root.task.GetTaskAwardReq)
                return object;
            var message = new $root.task.GetTaskAwardReq();
            if (object.progId != null)
                message.progId = String(object.progId);
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
         * Creates a plain object from a GetTaskAwardReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof task.GetTaskAwardReq
         * @static
         * @param {task.GetTaskAwardReq} message GetTaskAwardReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetTaskAwardReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.progId = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
            }
            if (message.progId != null && message.hasOwnProperty("progId"))
                object.progId = message.progId;
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            return object;
        };

        /**
         * Converts this GetTaskAwardReq to JSON.
         * @function toJSON
         * @memberof task.GetTaskAwardReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetTaskAwardReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetTaskAwardReq;
    })();

    task.GetTaskAwardRsp = (function() {

        /**
         * Properties of a GetTaskAwardRsp.
         * @memberof task
         * @interface IGetTaskAwardRsp
         * @property {number|null} [errCode] GetTaskAwardRsp errCode
         * @property {string|null} [errMsg] GetTaskAwardRsp errMsg
         * @property {Array.<task.IAwardItem>|null} [awards] GetTaskAwardRsp awards
         */

        /**
         * Constructs a new GetTaskAwardRsp.
         * @memberof task
         * @classdesc Represents a GetTaskAwardRsp.
         * @implements IGetTaskAwardRsp
         * @constructor
         * @param {task.IGetTaskAwardRsp=} [properties] Properties to set
         */
        function GetTaskAwardRsp(properties) {
            this.awards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetTaskAwardRsp errCode.
         * @member {number} errCode
         * @memberof task.GetTaskAwardRsp
         * @instance
         */
        GetTaskAwardRsp.prototype.errCode = 0;

        /**
         * GetTaskAwardRsp errMsg.
         * @member {string} errMsg
         * @memberof task.GetTaskAwardRsp
         * @instance
         */
        GetTaskAwardRsp.prototype.errMsg = "";

        /**
         * GetTaskAwardRsp awards.
         * @member {Array.<task.IAwardItem>} awards
         * @memberof task.GetTaskAwardRsp
         * @instance
         */
        GetTaskAwardRsp.prototype.awards = $util.emptyArray;

        /**
         * Creates a new GetTaskAwardRsp instance using the specified properties.
         * @function create
         * @memberof task.GetTaskAwardRsp
         * @static
         * @param {task.IGetTaskAwardRsp=} [properties] Properties to set
         * @returns {task.GetTaskAwardRsp} GetTaskAwardRsp instance
         */
        GetTaskAwardRsp.create = function create(properties) {
            return new GetTaskAwardRsp(properties);
        };

        /**
         * Encodes the specified GetTaskAwardRsp message. Does not implicitly {@link task.GetTaskAwardRsp.verify|verify} messages.
         * @function encode
         * @memberof task.GetTaskAwardRsp
         * @static
         * @param {task.IGetTaskAwardRsp} message GetTaskAwardRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetTaskAwardRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            if (message.awards != null && message.awards.length)
                for (var i = 0; i < message.awards.length; ++i)
                    $root.task.AwardItem.encode(message.awards[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetTaskAwardRsp message, length delimited. Does not implicitly {@link task.GetTaskAwardRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof task.GetTaskAwardRsp
         * @static
         * @param {task.IGetTaskAwardRsp} message GetTaskAwardRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetTaskAwardRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetTaskAwardRsp message from the specified reader or buffer.
         * @function decode
         * @memberof task.GetTaskAwardRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {task.GetTaskAwardRsp} GetTaskAwardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetTaskAwardRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.task.GetTaskAwardRsp();
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
                    message.awards.push($root.task.AwardItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetTaskAwardRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof task.GetTaskAwardRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {task.GetTaskAwardRsp} GetTaskAwardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetTaskAwardRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetTaskAwardRsp message.
         * @function verify
         * @memberof task.GetTaskAwardRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetTaskAwardRsp.verify = function verify(message) {
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
                    var error = $root.task.AwardItem.verify(message.awards[i]);
                    if (error)
                        return "awards." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetTaskAwardRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof task.GetTaskAwardRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {task.GetTaskAwardRsp} GetTaskAwardRsp
         */
        GetTaskAwardRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.task.GetTaskAwardRsp)
                return object;
            var message = new $root.task.GetTaskAwardRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            if (object.awards) {
                if (!Array.isArray(object.awards))
                    throw TypeError(".task.GetTaskAwardRsp.awards: array expected");
                message.awards = [];
                for (var i = 0; i < object.awards.length; ++i) {
                    if (typeof object.awards[i] !== "object")
                        throw TypeError(".task.GetTaskAwardRsp.awards: object expected");
                    message.awards[i] = $root.task.AwardItem.fromObject(object.awards[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetTaskAwardRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof task.GetTaskAwardRsp
         * @static
         * @param {task.GetTaskAwardRsp} message GetTaskAwardRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetTaskAwardRsp.toObject = function toObject(message, options) {
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
                    object.awards[j] = $root.task.AwardItem.toObject(message.awards[j], options);
            }
            return object;
        };

        /**
         * Converts this GetTaskAwardRsp to JSON.
         * @function toJSON
         * @memberof task.GetTaskAwardRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetTaskAwardRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetTaskAwardRsp;
    })();

    task.UptTaskProgsNotiItem = (function() {

        /**
         * Properties of an UptTaskProgsNotiItem.
         * @memberof task
         * @interface IUptTaskProgsNotiItem
         * @property {number|Long|null} [uid] UptTaskProgsNotiItem uid
         * @property {string|null} [ProgId] UptTaskProgsNotiItem ProgId
         * @property {number|null} [TaskId] UptTaskProgsNotiItem TaskId
         * @property {number|Long|null} [condNum] UptTaskProgsNotiItem condNum
         * @property {number|Long|null} [curNum] UptTaskProgsNotiItem curNum
         * @property {number|null} [status] UptTaskProgsNotiItem status
         */

        /**
         * Constructs a new UptTaskProgsNotiItem.
         * @memberof task
         * @classdesc Represents an UptTaskProgsNotiItem.
         * @implements IUptTaskProgsNotiItem
         * @constructor
         * @param {task.IUptTaskProgsNotiItem=} [properties] Properties to set
         */
        function UptTaskProgsNotiItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UptTaskProgsNotiItem uid.
         * @member {number|Long} uid
         * @memberof task.UptTaskProgsNotiItem
         * @instance
         */
        UptTaskProgsNotiItem.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UptTaskProgsNotiItem ProgId.
         * @member {string} ProgId
         * @memberof task.UptTaskProgsNotiItem
         * @instance
         */
        UptTaskProgsNotiItem.prototype.ProgId = "";

        /**
         * UptTaskProgsNotiItem TaskId.
         * @member {number} TaskId
         * @memberof task.UptTaskProgsNotiItem
         * @instance
         */
        UptTaskProgsNotiItem.prototype.TaskId = 0;

        /**
         * UptTaskProgsNotiItem condNum.
         * @member {number|Long} condNum
         * @memberof task.UptTaskProgsNotiItem
         * @instance
         */
        UptTaskProgsNotiItem.prototype.condNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UptTaskProgsNotiItem curNum.
         * @member {number|Long} curNum
         * @memberof task.UptTaskProgsNotiItem
         * @instance
         */
        UptTaskProgsNotiItem.prototype.curNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UptTaskProgsNotiItem status.
         * @member {number} status
         * @memberof task.UptTaskProgsNotiItem
         * @instance
         */
        UptTaskProgsNotiItem.prototype.status = 0;

        /**
         * Creates a new UptTaskProgsNotiItem instance using the specified properties.
         * @function create
         * @memberof task.UptTaskProgsNotiItem
         * @static
         * @param {task.IUptTaskProgsNotiItem=} [properties] Properties to set
         * @returns {task.UptTaskProgsNotiItem} UptTaskProgsNotiItem instance
         */
        UptTaskProgsNotiItem.create = function create(properties) {
            return new UptTaskProgsNotiItem(properties);
        };

        /**
         * Encodes the specified UptTaskProgsNotiItem message. Does not implicitly {@link task.UptTaskProgsNotiItem.verify|verify} messages.
         * @function encode
         * @memberof task.UptTaskProgsNotiItem
         * @static
         * @param {task.IUptTaskProgsNotiItem} message UptTaskProgsNotiItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UptTaskProgsNotiItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            if (message.ProgId != null && message.hasOwnProperty("ProgId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.ProgId);
            if (message.TaskId != null && message.hasOwnProperty("TaskId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.TaskId);
            if (message.condNum != null && message.hasOwnProperty("condNum"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.condNum);
            if (message.curNum != null && message.hasOwnProperty("curNum"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.curNum);
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.status);
            return writer;
        };

        /**
         * Encodes the specified UptTaskProgsNotiItem message, length delimited. Does not implicitly {@link task.UptTaskProgsNotiItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof task.UptTaskProgsNotiItem
         * @static
         * @param {task.IUptTaskProgsNotiItem} message UptTaskProgsNotiItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UptTaskProgsNotiItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UptTaskProgsNotiItem message from the specified reader or buffer.
         * @function decode
         * @memberof task.UptTaskProgsNotiItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {task.UptTaskProgsNotiItem} UptTaskProgsNotiItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UptTaskProgsNotiItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.task.UptTaskProgsNotiItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int64();
                    break;
                case 2:
                    message.ProgId = reader.string();
                    break;
                case 3:
                    message.TaskId = reader.int32();
                    break;
                case 4:
                    message.condNum = reader.int64();
                    break;
                case 5:
                    message.curNum = reader.int64();
                    break;
                case 6:
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
         * Decodes an UptTaskProgsNotiItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof task.UptTaskProgsNotiItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {task.UptTaskProgsNotiItem} UptTaskProgsNotiItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UptTaskProgsNotiItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UptTaskProgsNotiItem message.
         * @function verify
         * @memberof task.UptTaskProgsNotiItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UptTaskProgsNotiItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.ProgId != null && message.hasOwnProperty("ProgId"))
                if (!$util.isString(message.ProgId))
                    return "ProgId: string expected";
            if (message.TaskId != null && message.hasOwnProperty("TaskId"))
                if (!$util.isInteger(message.TaskId))
                    return "TaskId: integer expected";
            if (message.condNum != null && message.hasOwnProperty("condNum"))
                if (!$util.isInteger(message.condNum) && !(message.condNum && $util.isInteger(message.condNum.low) && $util.isInteger(message.condNum.high)))
                    return "condNum: integer|Long expected";
            if (message.curNum != null && message.hasOwnProperty("curNum"))
                if (!$util.isInteger(message.curNum) && !(message.curNum && $util.isInteger(message.curNum.low) && $util.isInteger(message.curNum.high)))
                    return "curNum: integer|Long expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            return null;
        };

        /**
         * Creates an UptTaskProgsNotiItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof task.UptTaskProgsNotiItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {task.UptTaskProgsNotiItem} UptTaskProgsNotiItem
         */
        UptTaskProgsNotiItem.fromObject = function fromObject(object) {
            if (object instanceof $root.task.UptTaskProgsNotiItem)
                return object;
            var message = new $root.task.UptTaskProgsNotiItem();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.ProgId != null)
                message.ProgId = String(object.ProgId);
            if (object.TaskId != null)
                message.TaskId = object.TaskId | 0;
            if (object.condNum != null)
                if ($util.Long)
                    (message.condNum = $util.Long.fromValue(object.condNum)).unsigned = false;
                else if (typeof object.condNum === "string")
                    message.condNum = parseInt(object.condNum, 10);
                else if (typeof object.condNum === "number")
                    message.condNum = object.condNum;
                else if (typeof object.condNum === "object")
                    message.condNum = new $util.LongBits(object.condNum.low >>> 0, object.condNum.high >>> 0).toNumber();
            if (object.curNum != null)
                if ($util.Long)
                    (message.curNum = $util.Long.fromValue(object.curNum)).unsigned = false;
                else if (typeof object.curNum === "string")
                    message.curNum = parseInt(object.curNum, 10);
                else if (typeof object.curNum === "number")
                    message.curNum = object.curNum;
                else if (typeof object.curNum === "object")
                    message.curNum = new $util.LongBits(object.curNum.low >>> 0, object.curNum.high >>> 0).toNumber();
            if (object.status != null)
                message.status = object.status | 0;
            return message;
        };

        /**
         * Creates a plain object from an UptTaskProgsNotiItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof task.UptTaskProgsNotiItem
         * @static
         * @param {task.UptTaskProgsNotiItem} message UptTaskProgsNotiItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UptTaskProgsNotiItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.ProgId = "";
                object.TaskId = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.condNum = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.condNum = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.curNum = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.curNum = options.longs === String ? "0" : 0;
                object.status = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.ProgId != null && message.hasOwnProperty("ProgId"))
                object.ProgId = message.ProgId;
            if (message.TaskId != null && message.hasOwnProperty("TaskId"))
                object.TaskId = message.TaskId;
            if (message.condNum != null && message.hasOwnProperty("condNum"))
                if (typeof message.condNum === "number")
                    object.condNum = options.longs === String ? String(message.condNum) : message.condNum;
                else
                    object.condNum = options.longs === String ? $util.Long.prototype.toString.call(message.condNum) : options.longs === Number ? new $util.LongBits(message.condNum.low >>> 0, message.condNum.high >>> 0).toNumber() : message.condNum;
            if (message.curNum != null && message.hasOwnProperty("curNum"))
                if (typeof message.curNum === "number")
                    object.curNum = options.longs === String ? String(message.curNum) : message.curNum;
                else
                    object.curNum = options.longs === String ? $util.Long.prototype.toString.call(message.curNum) : options.longs === Number ? new $util.LongBits(message.curNum.low >>> 0, message.curNum.high >>> 0).toNumber() : message.curNum;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this UptTaskProgsNotiItem to JSON.
         * @function toJSON
         * @memberof task.UptTaskProgsNotiItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UptTaskProgsNotiItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UptTaskProgsNotiItem;
    })();

    task.UptTaskProgressByIndexReq = (function() {

        /**
         * Properties of an UptTaskProgressByIndexReq.
         * @memberof task
         * @interface IUptTaskProgressByIndexReq
         * @property {number|Long|null} [uid] UptTaskProgressByIndexReq uid
         * @property {number|null} [id] UptTaskProgressByIndexReq id
         * @property {number|null} [inc] UptTaskProgressByIndexReq inc
         */

        /**
         * Constructs a new UptTaskProgressByIndexReq.
         * @memberof task
         * @classdesc Represents an UptTaskProgressByIndexReq.
         * @implements IUptTaskProgressByIndexReq
         * @constructor
         * @param {task.IUptTaskProgressByIndexReq=} [properties] Properties to set
         */
        function UptTaskProgressByIndexReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UptTaskProgressByIndexReq uid.
         * @member {number|Long} uid
         * @memberof task.UptTaskProgressByIndexReq
         * @instance
         */
        UptTaskProgressByIndexReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UptTaskProgressByIndexReq id.
         * @member {number} id
         * @memberof task.UptTaskProgressByIndexReq
         * @instance
         */
        UptTaskProgressByIndexReq.prototype.id = 0;

        /**
         * UptTaskProgressByIndexReq inc.
         * @member {number} inc
         * @memberof task.UptTaskProgressByIndexReq
         * @instance
         */
        UptTaskProgressByIndexReq.prototype.inc = 0;

        /**
         * Creates a new UptTaskProgressByIndexReq instance using the specified properties.
         * @function create
         * @memberof task.UptTaskProgressByIndexReq
         * @static
         * @param {task.IUptTaskProgressByIndexReq=} [properties] Properties to set
         * @returns {task.UptTaskProgressByIndexReq} UptTaskProgressByIndexReq instance
         */
        UptTaskProgressByIndexReq.create = function create(properties) {
            return new UptTaskProgressByIndexReq(properties);
        };

        /**
         * Encodes the specified UptTaskProgressByIndexReq message. Does not implicitly {@link task.UptTaskProgressByIndexReq.verify|verify} messages.
         * @function encode
         * @memberof task.UptTaskProgressByIndexReq
         * @static
         * @param {task.IUptTaskProgressByIndexReq} message UptTaskProgressByIndexReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UptTaskProgressByIndexReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.id);
            if (message.inc != null && message.hasOwnProperty("inc"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.inc);
            return writer;
        };

        /**
         * Encodes the specified UptTaskProgressByIndexReq message, length delimited. Does not implicitly {@link task.UptTaskProgressByIndexReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof task.UptTaskProgressByIndexReq
         * @static
         * @param {task.IUptTaskProgressByIndexReq} message UptTaskProgressByIndexReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UptTaskProgressByIndexReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UptTaskProgressByIndexReq message from the specified reader or buffer.
         * @function decode
         * @memberof task.UptTaskProgressByIndexReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {task.UptTaskProgressByIndexReq} UptTaskProgressByIndexReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UptTaskProgressByIndexReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.task.UptTaskProgressByIndexReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int64();
                    break;
                case 2:
                    message.id = reader.int32();
                    break;
                case 3:
                    message.inc = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UptTaskProgressByIndexReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof task.UptTaskProgressByIndexReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {task.UptTaskProgressByIndexReq} UptTaskProgressByIndexReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UptTaskProgressByIndexReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UptTaskProgressByIndexReq message.
         * @function verify
         * @memberof task.UptTaskProgressByIndexReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UptTaskProgressByIndexReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.inc != null && message.hasOwnProperty("inc"))
                if (!$util.isInteger(message.inc))
                    return "inc: integer expected";
            return null;
        };

        /**
         * Creates an UptTaskProgressByIndexReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof task.UptTaskProgressByIndexReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {task.UptTaskProgressByIndexReq} UptTaskProgressByIndexReq
         */
        UptTaskProgressByIndexReq.fromObject = function fromObject(object) {
            if (object instanceof $root.task.UptTaskProgressByIndexReq)
                return object;
            var message = new $root.task.UptTaskProgressByIndexReq();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.inc != null)
                message.inc = object.inc | 0;
            return message;
        };

        /**
         * Creates a plain object from an UptTaskProgressByIndexReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof task.UptTaskProgressByIndexReq
         * @static
         * @param {task.UptTaskProgressByIndexReq} message UptTaskProgressByIndexReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UptTaskProgressByIndexReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.id = 0;
                object.inc = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.inc != null && message.hasOwnProperty("inc"))
                object.inc = message.inc;
            return object;
        };

        /**
         * Converts this UptTaskProgressByIndexReq to JSON.
         * @function toJSON
         * @memberof task.UptTaskProgressByIndexReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UptTaskProgressByIndexReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UptTaskProgressByIndexReq;
    })();

    task.UptTaskProgressByIndexRsp = (function() {

        /**
         * Properties of an UptTaskProgressByIndexRsp.
         * @memberof task
         * @interface IUptTaskProgressByIndexRsp
         * @property {number|null} [errCode] UptTaskProgressByIndexRsp errCode
         * @property {string|null} [errMsg] UptTaskProgressByIndexRsp errMsg
         */

        /**
         * Constructs a new UptTaskProgressByIndexRsp.
         * @memberof task
         * @classdesc Represents an UptTaskProgressByIndexRsp.
         * @implements IUptTaskProgressByIndexRsp
         * @constructor
         * @param {task.IUptTaskProgressByIndexRsp=} [properties] Properties to set
         */
        function UptTaskProgressByIndexRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UptTaskProgressByIndexRsp errCode.
         * @member {number} errCode
         * @memberof task.UptTaskProgressByIndexRsp
         * @instance
         */
        UptTaskProgressByIndexRsp.prototype.errCode = 0;

        /**
         * UptTaskProgressByIndexRsp errMsg.
         * @member {string} errMsg
         * @memberof task.UptTaskProgressByIndexRsp
         * @instance
         */
        UptTaskProgressByIndexRsp.prototype.errMsg = "";

        /**
         * Creates a new UptTaskProgressByIndexRsp instance using the specified properties.
         * @function create
         * @memberof task.UptTaskProgressByIndexRsp
         * @static
         * @param {task.IUptTaskProgressByIndexRsp=} [properties] Properties to set
         * @returns {task.UptTaskProgressByIndexRsp} UptTaskProgressByIndexRsp instance
         */
        UptTaskProgressByIndexRsp.create = function create(properties) {
            return new UptTaskProgressByIndexRsp(properties);
        };

        /**
         * Encodes the specified UptTaskProgressByIndexRsp message. Does not implicitly {@link task.UptTaskProgressByIndexRsp.verify|verify} messages.
         * @function encode
         * @memberof task.UptTaskProgressByIndexRsp
         * @static
         * @param {task.IUptTaskProgressByIndexRsp} message UptTaskProgressByIndexRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UptTaskProgressByIndexRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            return writer;
        };

        /**
         * Encodes the specified UptTaskProgressByIndexRsp message, length delimited. Does not implicitly {@link task.UptTaskProgressByIndexRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof task.UptTaskProgressByIndexRsp
         * @static
         * @param {task.IUptTaskProgressByIndexRsp} message UptTaskProgressByIndexRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UptTaskProgressByIndexRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UptTaskProgressByIndexRsp message from the specified reader or buffer.
         * @function decode
         * @memberof task.UptTaskProgressByIndexRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {task.UptTaskProgressByIndexRsp} UptTaskProgressByIndexRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UptTaskProgressByIndexRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.task.UptTaskProgressByIndexRsp();
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
         * Decodes an UptTaskProgressByIndexRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof task.UptTaskProgressByIndexRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {task.UptTaskProgressByIndexRsp} UptTaskProgressByIndexRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UptTaskProgressByIndexRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UptTaskProgressByIndexRsp message.
         * @function verify
         * @memberof task.UptTaskProgressByIndexRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UptTaskProgressByIndexRsp.verify = function verify(message) {
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
         * Creates an UptTaskProgressByIndexRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof task.UptTaskProgressByIndexRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {task.UptTaskProgressByIndexRsp} UptTaskProgressByIndexRsp
         */
        UptTaskProgressByIndexRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.task.UptTaskProgressByIndexRsp)
                return object;
            var message = new $root.task.UptTaskProgressByIndexRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            return message;
        };

        /**
         * Creates a plain object from an UptTaskProgressByIndexRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof task.UptTaskProgressByIndexRsp
         * @static
         * @param {task.UptTaskProgressByIndexRsp} message UptTaskProgressByIndexRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UptTaskProgressByIndexRsp.toObject = function toObject(message, options) {
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
         * Converts this UptTaskProgressByIndexRsp to JSON.
         * @function toJSON
         * @memberof task.UptTaskProgressByIndexRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UptTaskProgressByIndexRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UptTaskProgressByIndexRsp;
    })();

    task.UptTaskProgressByGroupReq = (function() {

        /**
         * Properties of an UptTaskProgressByGroupReq.
         * @memberof task
         * @interface IUptTaskProgressByGroupReq
         * @property {number|Long|null} [uid] UptTaskProgressByGroupReq uid
         * @property {number|null} [group] UptTaskProgressByGroupReq group
         * @property {number|null} [inc] UptTaskProgressByGroupReq inc
         */

        /**
         * Constructs a new UptTaskProgressByGroupReq.
         * @memberof task
         * @classdesc Represents an UptTaskProgressByGroupReq.
         * @implements IUptTaskProgressByGroupReq
         * @constructor
         * @param {task.IUptTaskProgressByGroupReq=} [properties] Properties to set
         */
        function UptTaskProgressByGroupReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UptTaskProgressByGroupReq uid.
         * @member {number|Long} uid
         * @memberof task.UptTaskProgressByGroupReq
         * @instance
         */
        UptTaskProgressByGroupReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UptTaskProgressByGroupReq group.
         * @member {number} group
         * @memberof task.UptTaskProgressByGroupReq
         * @instance
         */
        UptTaskProgressByGroupReq.prototype.group = 0;

        /**
         * UptTaskProgressByGroupReq inc.
         * @member {number} inc
         * @memberof task.UptTaskProgressByGroupReq
         * @instance
         */
        UptTaskProgressByGroupReq.prototype.inc = 0;

        /**
         * Creates a new UptTaskProgressByGroupReq instance using the specified properties.
         * @function create
         * @memberof task.UptTaskProgressByGroupReq
         * @static
         * @param {task.IUptTaskProgressByGroupReq=} [properties] Properties to set
         * @returns {task.UptTaskProgressByGroupReq} UptTaskProgressByGroupReq instance
         */
        UptTaskProgressByGroupReq.create = function create(properties) {
            return new UptTaskProgressByGroupReq(properties);
        };

        /**
         * Encodes the specified UptTaskProgressByGroupReq message. Does not implicitly {@link task.UptTaskProgressByGroupReq.verify|verify} messages.
         * @function encode
         * @memberof task.UptTaskProgressByGroupReq
         * @static
         * @param {task.IUptTaskProgressByGroupReq} message UptTaskProgressByGroupReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UptTaskProgressByGroupReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            if (message.group != null && message.hasOwnProperty("group"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.group);
            if (message.inc != null && message.hasOwnProperty("inc"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.inc);
            return writer;
        };

        /**
         * Encodes the specified UptTaskProgressByGroupReq message, length delimited. Does not implicitly {@link task.UptTaskProgressByGroupReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof task.UptTaskProgressByGroupReq
         * @static
         * @param {task.IUptTaskProgressByGroupReq} message UptTaskProgressByGroupReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UptTaskProgressByGroupReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UptTaskProgressByGroupReq message from the specified reader or buffer.
         * @function decode
         * @memberof task.UptTaskProgressByGroupReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {task.UptTaskProgressByGroupReq} UptTaskProgressByGroupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UptTaskProgressByGroupReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.task.UptTaskProgressByGroupReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int64();
                    break;
                case 2:
                    message.group = reader.int32();
                    break;
                case 3:
                    message.inc = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UptTaskProgressByGroupReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof task.UptTaskProgressByGroupReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {task.UptTaskProgressByGroupReq} UptTaskProgressByGroupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UptTaskProgressByGroupReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UptTaskProgressByGroupReq message.
         * @function verify
         * @memberof task.UptTaskProgressByGroupReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UptTaskProgressByGroupReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.group != null && message.hasOwnProperty("group"))
                if (!$util.isInteger(message.group))
                    return "group: integer expected";
            if (message.inc != null && message.hasOwnProperty("inc"))
                if (!$util.isInteger(message.inc))
                    return "inc: integer expected";
            return null;
        };

        /**
         * Creates an UptTaskProgressByGroupReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof task.UptTaskProgressByGroupReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {task.UptTaskProgressByGroupReq} UptTaskProgressByGroupReq
         */
        UptTaskProgressByGroupReq.fromObject = function fromObject(object) {
            if (object instanceof $root.task.UptTaskProgressByGroupReq)
                return object;
            var message = new $root.task.UptTaskProgressByGroupReq();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.group != null)
                message.group = object.group | 0;
            if (object.inc != null)
                message.inc = object.inc | 0;
            return message;
        };

        /**
         * Creates a plain object from an UptTaskProgressByGroupReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof task.UptTaskProgressByGroupReq
         * @static
         * @param {task.UptTaskProgressByGroupReq} message UptTaskProgressByGroupReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UptTaskProgressByGroupReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.group = 0;
                object.inc = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.group != null && message.hasOwnProperty("group"))
                object.group = message.group;
            if (message.inc != null && message.hasOwnProperty("inc"))
                object.inc = message.inc;
            return object;
        };

        /**
         * Converts this UptTaskProgressByGroupReq to JSON.
         * @function toJSON
         * @memberof task.UptTaskProgressByGroupReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UptTaskProgressByGroupReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UptTaskProgressByGroupReq;
    })();

    task.UptTaskProgressByGroupRsp = (function() {

        /**
         * Properties of an UptTaskProgressByGroupRsp.
         * @memberof task
         * @interface IUptTaskProgressByGroupRsp
         * @property {number|null} [errCode] UptTaskProgressByGroupRsp errCode
         * @property {string|null} [errMsg] UptTaskProgressByGroupRsp errMsg
         */

        /**
         * Constructs a new UptTaskProgressByGroupRsp.
         * @memberof task
         * @classdesc Represents an UptTaskProgressByGroupRsp.
         * @implements IUptTaskProgressByGroupRsp
         * @constructor
         * @param {task.IUptTaskProgressByGroupRsp=} [properties] Properties to set
         */
        function UptTaskProgressByGroupRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UptTaskProgressByGroupRsp errCode.
         * @member {number} errCode
         * @memberof task.UptTaskProgressByGroupRsp
         * @instance
         */
        UptTaskProgressByGroupRsp.prototype.errCode = 0;

        /**
         * UptTaskProgressByGroupRsp errMsg.
         * @member {string} errMsg
         * @memberof task.UptTaskProgressByGroupRsp
         * @instance
         */
        UptTaskProgressByGroupRsp.prototype.errMsg = "";

        /**
         * Creates a new UptTaskProgressByGroupRsp instance using the specified properties.
         * @function create
         * @memberof task.UptTaskProgressByGroupRsp
         * @static
         * @param {task.IUptTaskProgressByGroupRsp=} [properties] Properties to set
         * @returns {task.UptTaskProgressByGroupRsp} UptTaskProgressByGroupRsp instance
         */
        UptTaskProgressByGroupRsp.create = function create(properties) {
            return new UptTaskProgressByGroupRsp(properties);
        };

        /**
         * Encodes the specified UptTaskProgressByGroupRsp message. Does not implicitly {@link task.UptTaskProgressByGroupRsp.verify|verify} messages.
         * @function encode
         * @memberof task.UptTaskProgressByGroupRsp
         * @static
         * @param {task.IUptTaskProgressByGroupRsp} message UptTaskProgressByGroupRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UptTaskProgressByGroupRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            return writer;
        };

        /**
         * Encodes the specified UptTaskProgressByGroupRsp message, length delimited. Does not implicitly {@link task.UptTaskProgressByGroupRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof task.UptTaskProgressByGroupRsp
         * @static
         * @param {task.IUptTaskProgressByGroupRsp} message UptTaskProgressByGroupRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UptTaskProgressByGroupRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UptTaskProgressByGroupRsp message from the specified reader or buffer.
         * @function decode
         * @memberof task.UptTaskProgressByGroupRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {task.UptTaskProgressByGroupRsp} UptTaskProgressByGroupRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UptTaskProgressByGroupRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.task.UptTaskProgressByGroupRsp();
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
         * Decodes an UptTaskProgressByGroupRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof task.UptTaskProgressByGroupRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {task.UptTaskProgressByGroupRsp} UptTaskProgressByGroupRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UptTaskProgressByGroupRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UptTaskProgressByGroupRsp message.
         * @function verify
         * @memberof task.UptTaskProgressByGroupRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UptTaskProgressByGroupRsp.verify = function verify(message) {
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
         * Creates an UptTaskProgressByGroupRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof task.UptTaskProgressByGroupRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {task.UptTaskProgressByGroupRsp} UptTaskProgressByGroupRsp
         */
        UptTaskProgressByGroupRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.task.UptTaskProgressByGroupRsp)
                return object;
            var message = new $root.task.UptTaskProgressByGroupRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            return message;
        };

        /**
         * Creates a plain object from an UptTaskProgressByGroupRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof task.UptTaskProgressByGroupRsp
         * @static
         * @param {task.UptTaskProgressByGroupRsp} message UptTaskProgressByGroupRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UptTaskProgressByGroupRsp.toObject = function toObject(message, options) {
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
         * Converts this UptTaskProgressByGroupRsp to JSON.
         * @function toJSON
         * @memberof task.UptTaskProgressByGroupRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UptTaskProgressByGroupRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UptTaskProgressByGroupRsp;
    })();

    task.UptTaskProgsNot = (function() {

        /**
         * Properties of an UptTaskProgsNot.
         * @memberof task
         * @interface IUptTaskProgsNot
         * @property {Array.<task.IUptTaskProgsNotiItem>|null} [items] UptTaskProgsNot items
         */

        /**
         * Constructs a new UptTaskProgsNot.
         * @memberof task
         * @classdesc Represents an UptTaskProgsNot.
         * @implements IUptTaskProgsNot
         * @constructor
         * @param {task.IUptTaskProgsNot=} [properties] Properties to set
         */
        function UptTaskProgsNot(properties) {
            this.items = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UptTaskProgsNot items.
         * @member {Array.<task.IUptTaskProgsNotiItem>} items
         * @memberof task.UptTaskProgsNot
         * @instance
         */
        UptTaskProgsNot.prototype.items = $util.emptyArray;

        /**
         * Creates a new UptTaskProgsNot instance using the specified properties.
         * @function create
         * @memberof task.UptTaskProgsNot
         * @static
         * @param {task.IUptTaskProgsNot=} [properties] Properties to set
         * @returns {task.UptTaskProgsNot} UptTaskProgsNot instance
         */
        UptTaskProgsNot.create = function create(properties) {
            return new UptTaskProgsNot(properties);
        };

        /**
         * Encodes the specified UptTaskProgsNot message. Does not implicitly {@link task.UptTaskProgsNot.verify|verify} messages.
         * @function encode
         * @memberof task.UptTaskProgsNot
         * @static
         * @param {task.IUptTaskProgsNot} message UptTaskProgsNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UptTaskProgsNot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.items != null && message.items.length)
                for (var i = 0; i < message.items.length; ++i)
                    $root.task.UptTaskProgsNotiItem.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UptTaskProgsNot message, length delimited. Does not implicitly {@link task.UptTaskProgsNot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof task.UptTaskProgsNot
         * @static
         * @param {task.IUptTaskProgsNot} message UptTaskProgsNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UptTaskProgsNot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UptTaskProgsNot message from the specified reader or buffer.
         * @function decode
         * @memberof task.UptTaskProgsNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {task.UptTaskProgsNot} UptTaskProgsNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UptTaskProgsNot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.task.UptTaskProgsNot();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.items && message.items.length))
                        message.items = [];
                    message.items.push($root.task.UptTaskProgsNotiItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UptTaskProgsNot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof task.UptTaskProgsNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {task.UptTaskProgsNot} UptTaskProgsNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UptTaskProgsNot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UptTaskProgsNot message.
         * @function verify
         * @memberof task.UptTaskProgsNot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UptTaskProgsNot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (var i = 0; i < message.items.length; ++i) {
                    var error = $root.task.UptTaskProgsNotiItem.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            return null;
        };

        /**
         * Creates an UptTaskProgsNot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof task.UptTaskProgsNot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {task.UptTaskProgsNot} UptTaskProgsNot
         */
        UptTaskProgsNot.fromObject = function fromObject(object) {
            if (object instanceof $root.task.UptTaskProgsNot)
                return object;
            var message = new $root.task.UptTaskProgsNot();
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".task.UptTaskProgsNot.items: array expected");
                message.items = [];
                for (var i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".task.UptTaskProgsNot.items: object expected");
                    message.items[i] = $root.task.UptTaskProgsNotiItem.fromObject(object.items[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an UptTaskProgsNot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof task.UptTaskProgsNot
         * @static
         * @param {task.UptTaskProgsNot} message UptTaskProgsNot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UptTaskProgsNot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.items = [];
            if (message.items && message.items.length) {
                object.items = [];
                for (var j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.task.UptTaskProgsNotiItem.toObject(message.items[j], options);
            }
            return object;
        };

        /**
         * Converts this UptTaskProgsNot to JSON.
         * @function toJSON
         * @memberof task.UptTaskProgsNot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UptTaskProgsNot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UptTaskProgsNot;
    })();

    task.PlayerMsgNot = (function() {

        /**
         * Properties of a PlayerMsgNot.
         * @memberof task
         * @interface IPlayerMsgNot
         * @property {number|Long|null} [uid] PlayerMsgNot uid
         * @property {string|null} [route] PlayerMsgNot route
         * @property {Uint8Array|null} [body] PlayerMsgNot body
         */

        /**
         * Constructs a new PlayerMsgNot.
         * @memberof task
         * @classdesc Represents a PlayerMsgNot.
         * @implements IPlayerMsgNot
         * @constructor
         * @param {task.IPlayerMsgNot=} [properties] Properties to set
         */
        function PlayerMsgNot(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerMsgNot uid.
         * @member {number|Long} uid
         * @memberof task.PlayerMsgNot
         * @instance
         */
        PlayerMsgNot.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PlayerMsgNot route.
         * @member {string} route
         * @memberof task.PlayerMsgNot
         * @instance
         */
        PlayerMsgNot.prototype.route = "";

        /**
         * PlayerMsgNot body.
         * @member {Uint8Array} body
         * @memberof task.PlayerMsgNot
         * @instance
         */
        PlayerMsgNot.prototype.body = $util.newBuffer([]);

        /**
         * Creates a new PlayerMsgNot instance using the specified properties.
         * @function create
         * @memberof task.PlayerMsgNot
         * @static
         * @param {task.IPlayerMsgNot=} [properties] Properties to set
         * @returns {task.PlayerMsgNot} PlayerMsgNot instance
         */
        PlayerMsgNot.create = function create(properties) {
            return new PlayerMsgNot(properties);
        };

        /**
         * Encodes the specified PlayerMsgNot message. Does not implicitly {@link task.PlayerMsgNot.verify|verify} messages.
         * @function encode
         * @memberof task.PlayerMsgNot
         * @static
         * @param {task.IPlayerMsgNot} message PlayerMsgNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerMsgNot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            if (message.route != null && message.hasOwnProperty("route"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.route);
            if (message.body != null && message.hasOwnProperty("body"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.body);
            return writer;
        };

        /**
         * Encodes the specified PlayerMsgNot message, length delimited. Does not implicitly {@link task.PlayerMsgNot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof task.PlayerMsgNot
         * @static
         * @param {task.IPlayerMsgNot} message PlayerMsgNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerMsgNot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerMsgNot message from the specified reader or buffer.
         * @function decode
         * @memberof task.PlayerMsgNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {task.PlayerMsgNot} PlayerMsgNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerMsgNot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.task.PlayerMsgNot();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int64();
                    break;
                case 2:
                    message.route = reader.string();
                    break;
                case 3:
                    message.body = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerMsgNot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof task.PlayerMsgNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {task.PlayerMsgNot} PlayerMsgNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerMsgNot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerMsgNot message.
         * @function verify
         * @memberof task.PlayerMsgNot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerMsgNot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.route != null && message.hasOwnProperty("route"))
                if (!$util.isString(message.route))
                    return "route: string expected";
            if (message.body != null && message.hasOwnProperty("body"))
                if (!(message.body && typeof message.body.length === "number" || $util.isString(message.body)))
                    return "body: buffer expected";
            return null;
        };

        /**
         * Creates a PlayerMsgNot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof task.PlayerMsgNot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {task.PlayerMsgNot} PlayerMsgNot
         */
        PlayerMsgNot.fromObject = function fromObject(object) {
            if (object instanceof $root.task.PlayerMsgNot)
                return object;
            var message = new $root.task.PlayerMsgNot();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.route != null)
                message.route = String(object.route);
            if (object.body != null)
                if (typeof object.body === "string")
                    $util.base64.decode(object.body, message.body = $util.newBuffer($util.base64.length(object.body)), 0);
                else if (object.body.length)
                    message.body = object.body;
            return message;
        };

        /**
         * Creates a plain object from a PlayerMsgNot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof task.PlayerMsgNot
         * @static
         * @param {task.PlayerMsgNot} message PlayerMsgNot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerMsgNot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.route = "";
                if (options.bytes === String)
                    object.body = "";
                else {
                    object.body = [];
                    if (options.bytes !== Array)
                        object.body = $util.newBuffer(object.body);
                }
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.route != null && message.hasOwnProperty("route"))
                object.route = message.route;
            if (message.body != null && message.hasOwnProperty("body"))
                object.body = options.bytes === String ? $util.base64.encode(message.body, 0, message.body.length) : options.bytes === Array ? Array.prototype.slice.call(message.body) : message.body;
            return object;
        };

        /**
         * Converts this PlayerMsgNot to JSON.
         * @function toJSON
         * @memberof task.PlayerMsgNot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerMsgNot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerMsgNot;
    })();

    task.TaskAwardNot = (function() {

        /**
         * Properties of a TaskAwardNot.
         * @memberof task
         * @interface ITaskAwardNot
         * @property {boolean|null} [haveRewards] TaskAwardNot haveRewards
         * @property {number|null} [style] TaskAwardNot style
         * @property {string|null} [desc] TaskAwardNot desc
         * @property {number|null} [align] TaskAwardNot align
         */

        /**
         * Constructs a new TaskAwardNot.
         * @memberof task
         * @classdesc Represents a TaskAwardNot.
         * @implements ITaskAwardNot
         * @constructor
         * @param {task.ITaskAwardNot=} [properties] Properties to set
         */
        function TaskAwardNot(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TaskAwardNot haveRewards.
         * @member {boolean} haveRewards
         * @memberof task.TaskAwardNot
         * @instance
         */
        TaskAwardNot.prototype.haveRewards = false;

        /**
         * TaskAwardNot style.
         * @member {number} style
         * @memberof task.TaskAwardNot
         * @instance
         */
        TaskAwardNot.prototype.style = 0;

        /**
         * TaskAwardNot desc.
         * @member {string} desc
         * @memberof task.TaskAwardNot
         * @instance
         */
        TaskAwardNot.prototype.desc = "";

        /**
         * TaskAwardNot align.
         * @member {number} align
         * @memberof task.TaskAwardNot
         * @instance
         */
        TaskAwardNot.prototype.align = 0;

        /**
         * Creates a new TaskAwardNot instance using the specified properties.
         * @function create
         * @memberof task.TaskAwardNot
         * @static
         * @param {task.ITaskAwardNot=} [properties] Properties to set
         * @returns {task.TaskAwardNot} TaskAwardNot instance
         */
        TaskAwardNot.create = function create(properties) {
            return new TaskAwardNot(properties);
        };

        /**
         * Encodes the specified TaskAwardNot message. Does not implicitly {@link task.TaskAwardNot.verify|verify} messages.
         * @function encode
         * @memberof task.TaskAwardNot
         * @static
         * @param {task.ITaskAwardNot} message TaskAwardNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TaskAwardNot.encode = function encode(message, writer) {
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
         * Encodes the specified TaskAwardNot message, length delimited. Does not implicitly {@link task.TaskAwardNot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof task.TaskAwardNot
         * @static
         * @param {task.ITaskAwardNot} message TaskAwardNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TaskAwardNot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TaskAwardNot message from the specified reader or buffer.
         * @function decode
         * @memberof task.TaskAwardNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {task.TaskAwardNot} TaskAwardNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TaskAwardNot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.task.TaskAwardNot();
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
         * Decodes a TaskAwardNot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof task.TaskAwardNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {task.TaskAwardNot} TaskAwardNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TaskAwardNot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TaskAwardNot message.
         * @function verify
         * @memberof task.TaskAwardNot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TaskAwardNot.verify = function verify(message) {
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
         * Creates a TaskAwardNot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof task.TaskAwardNot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {task.TaskAwardNot} TaskAwardNot
         */
        TaskAwardNot.fromObject = function fromObject(object) {
            if (object instanceof $root.task.TaskAwardNot)
                return object;
            var message = new $root.task.TaskAwardNot();
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
         * Creates a plain object from a TaskAwardNot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof task.TaskAwardNot
         * @static
         * @param {task.TaskAwardNot} message TaskAwardNot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TaskAwardNot.toObject = function toObject(message, options) {
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
         * Converts this TaskAwardNot to JSON.
         * @function toJSON
         * @memberof task.TaskAwardNot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TaskAwardNot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TaskAwardNot;
    })();

    return task;
})();

module.exports = $root.task;
