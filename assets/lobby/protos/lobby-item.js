/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.lobby_item = (function() {

    /**
     * Namespace lobby_item.
     * @exports lobby_item
     * @namespace
     */
    var lobby_item = {};

    lobby_item.UpdateMjzzItemNot = (function() {

        /**
         * Properties of an UpdateMjzzItemNot.
         * @memberof prop
         * @interface IUpdateMjzzItemNot
         * @property {string|null} [cliParam] UpdateMjzzItemNot cliParam
         * @property {Array.<lobby_login.IItemUpdate>|null} [update] UpdateMjzzItemNot update
         */

        /**
         * Constructs a new UpdateMjzzItemNot.
         * @memberof prop
         * @classdesc Represents an UpdateMjzzItemNot.
         * @implements IUpdateMjzzItemNot
         * @constructor
         * @param {lobby_item.IUpdateMjzzItemNot=} [properties] Properties to set
         */
        function UpdateMjzzItemNot(properties) {
            this.update = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateMjzzItemNot cliParam.
         * @member {string} cliParam
         * @memberof lobby_item.UpdateMjzzItemNot
         * @instance
         */
        UpdateMjzzItemNot.prototype.cliParam = "";

        /**
         * UpdateMjzzItemNot update.
         * @member {Array.<lobby_login.IItemUpdate>} update
         * @memberof lobby_item.UpdateMjzzItemNot
         * @instance
         */
        UpdateMjzzItemNot.prototype.update = $util.emptyArray;

        /**
         * Creates a new UpdateMjzzItemNot instance using the specified properties.
         * @function create
         * @memberof lobby_item.UpdateMjzzItemNot
         * @static
         * @param {lobby_item.IUpdateMjzzItemNot=} [properties] Properties to set
         * @returns {lobby_item.UpdateMjzzItemNot} UpdateMjzzItemNot instance
         */
        UpdateMjzzItemNot.create = function create(properties) {
            return new UpdateMjzzItemNot(properties);
        };

        /**
         * Encodes the specified UpdateMjzzItemNot message. Does not implicitly {@link lobby_item.UpdateMjzzItemNot.verify|verify} messages.
         * @function encode
         * @memberof lobby_item.UpdateMjzzItemNot
         * @static
         * @param {lobby_item.IUpdateMjzzItemNot} message UpdateMjzzItemNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateMjzzItemNot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cliParam != null && message.hasOwnProperty("cliParam"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.cliParam);
            if (message.update != null && message.update.length)
                for (var i = 0; i < message.update.length; ++i)
                    $root.lobby_login.ItemUpdate.encode(message.update[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UpdateMjzzItemNot message, length delimited. Does not implicitly {@link lobby_item.UpdateMjzzItemNot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lobby_item.UpdateMjzzItemNot
         * @static
         * @param {lobby_item.IUpdateMjzzItemNot} message UpdateMjzzItemNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateMjzzItemNot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateMjzzItemNot message from the specified reader or buffer.
         * @function decode
         * @memberof lobby_item.UpdateMjzzItemNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lobby_item.UpdateMjzzItemNot} UpdateMjzzItemNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateMjzzItemNot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby_item.UpdateMjzzItemNot();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.cliParam = reader.string();
                        break;
                    case 10:
                        if (!(message.update && message.update.length))
                            message.update = [];
                        message.update.push($root.lobby_login.ItemUpdate.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateMjzzItemNot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lobby_item.UpdateMjzzItemNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lobby_item.UpdateMjzzItemNot} UpdateMjzzItemNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateMjzzItemNot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateMjzzItemNot message.
         * @function verify
         * @memberof lobby_item.UpdateMjzzItemNot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateMjzzItemNot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cliParam != null && message.hasOwnProperty("cliParam"))
                if (!$util.isString(message.cliParam))
                    return "cliParam: string expected";
            if (message.update != null && message.hasOwnProperty("update")) {
                if (!Array.isArray(message.update))
                    return "update: array expected";
                for (var i = 0; i < message.update.length; ++i) {
                    var error = $root.lobby_login.ItemUpdate.verify(message.update[i]);
                    if (error)
                        return "update." + error;
                }
            }
            return null;
        };

        /**
         * Creates an UpdateMjzzItemNot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lobby_item.UpdateMjzzItemNot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lobby_item.UpdateMjzzItemNot} UpdateMjzzItemNot
         */
        UpdateMjzzItemNot.fromObject = function fromObject(object) {
            if (object instanceof $root.lobby_item.UpdateMjzzItemNot)
                return object;
            var message = new $root.lobby_item.UpdateMjzzItemNot();
            if (object.cliParam != null)
                message.cliParam = String(object.cliParam);
            if (object.update) {
                if (!Array.isArray(object.update))
                    throw TypeError(".lobby_item.UpdateMjzzItemNot.update: array expected");
                message.update = [];
                for (var i = 0; i < object.update.length; ++i) {
                    if (typeof object.update[i] !== "object")
                        throw TypeError(".lobby_item.UpdateMjzzItemNot.update: object expected");
                    message.update[i] = $root.lobby_login.ItemUpdate.fromObject(object.update[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an UpdateMjzzItemNot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lobby_item.UpdateMjzzItemNot
         * @static
         * @param {lobby_item.UpdateMjzzItemNot} message UpdateMjzzItemNot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateMjzzItemNot.toObject = function toObject(message, options) {
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
                    object.update[j] = $root.lobby_login.ItemUpdate.toObject(message.update[j], options);
            }
            return object;
        };

        /**
         * Converts this UpdateMjzzItemNot to JSON.
         * @function toJSON
         * @memberof lobby_item.UpdateMjzzItemNot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateMjzzItemNot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateMjzzItemNot;
    })();

    return lobby_item;
})();

module.exports = $root.lobby_item;
