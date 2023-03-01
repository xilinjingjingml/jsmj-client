import * as $protobuf from "protobufjs";
/** Namespace shop. */
export namespace shop {

    /** Represents a Shop */
    class Shop extends $protobuf.rpc.Service {

        /**
         * Constructs a new Shop service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Shop service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Shop;

        /**
         * Calls GetConfig.
         * @param request GetConfigReq message or plain object
         * @param callback Node-style callback called with the error, if any, and GetConfigRsp
         */
        public getConfig(request: shop.IGetConfigReq, callback: shop.Shop.GetConfigCallback): void;

        /**
         * Calls GetConfig.
         * @param request GetConfigReq message or plain object
         * @returns Promise
         */
        public getConfig(request: shop.IGetConfigReq): Promise<shop.GetConfigRsp>;

        /**
         * Calls ExchangeBox.
         * @param request ExchangeBoxReq message or plain object
         * @param callback Node-style callback called with the error, if any, and ExchangeBoxRsp
         */
        public exchangeBox(request: shop.IExchangeBoxReq, callback: shop.Shop.ExchangeBoxCallback): void;

        /**
         * Calls ExchangeBox.
         * @param request ExchangeBoxReq message or plain object
         * @returns Promise
         */
        public exchangeBox(request: shop.IExchangeBoxReq): Promise<shop.ExchangeBoxRsp>;
    }

    namespace Shop {

        /**
         * Callback as used by {@link shop.Shop#getConfig}.
         * @param error Error, if any
         * @param [response] GetConfigRsp
         */
        type GetConfigCallback = (error: (Error|null), response?: shop.GetConfigRsp) => void;

        /**
         * Callback as used by {@link shop.Shop#exchangeBox}.
         * @param error Error, if any
         * @param [response] ExchangeBoxRsp
         */
        type ExchangeBoxCallback = (error: (Error|null), response?: shop.ExchangeBoxRsp) => void;
    }

    /** Properties of a StateCode. */
    interface IStateCode {

        /** StateCode id */
        id?: (number|null);

        /** StateCode msg */
        msg?: (string|null);
    }

    /** Represents a StateCode. */
    class StateCode implements IStateCode {

        /**
         * Constructs a new StateCode.
         * @param [properties] Properties to set
         */
        constructor(properties?: shop.IStateCode);

        /** StateCode id. */
        public id: number;

        /** StateCode msg. */
        public msg: string;

        /**
         * Creates a new StateCode instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StateCode instance
         */
        public static create(properties?: shop.IStateCode): shop.StateCode;

        /**
         * Encodes the specified StateCode message. Does not implicitly {@link shop.StateCode.verify|verify} messages.
         * @param message StateCode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: shop.IStateCode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StateCode message, length delimited. Does not implicitly {@link shop.StateCode.verify|verify} messages.
         * @param message StateCode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: shop.IStateCode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StateCode message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StateCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): shop.StateCode;

        /**
         * Decodes a StateCode message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StateCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): shop.StateCode;

        /**
         * Verifies a StateCode message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StateCode message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StateCode
         */
        public static fromObject(object: { [k: string]: any }): shop.StateCode;

        /**
         * Creates a plain object from a StateCode message. Also converts values to other types if specified.
         * @param message StateCode
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: shop.StateCode, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StateCode to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetConfigReq. */
    interface IGetConfigReq {

        /** GetConfigReq uid */
        uid?: (number|Long|null);
    }

    /** Represents a GetConfigReq. */
    class GetConfigReq implements IGetConfigReq {

        /**
         * Constructs a new GetConfigReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: shop.IGetConfigReq);

        /** GetConfigReq uid. */
        public uid: (number|Long);

        /**
         * Creates a new GetConfigReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetConfigReq instance
         */
        public static create(properties?: shop.IGetConfigReq): shop.GetConfigReq;

        /**
         * Encodes the specified GetConfigReq message. Does not implicitly {@link shop.GetConfigReq.verify|verify} messages.
         * @param message GetConfigReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: shop.IGetConfigReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetConfigReq message, length delimited. Does not implicitly {@link shop.GetConfigReq.verify|verify} messages.
         * @param message GetConfigReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: shop.IGetConfigReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetConfigReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetConfigReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): shop.GetConfigReq;

        /**
         * Decodes a GetConfigReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetConfigReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): shop.GetConfigReq;

        /**
         * Verifies a GetConfigReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetConfigReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetConfigReq
         */
        public static fromObject(object: { [k: string]: any }): shop.GetConfigReq;

        /**
         * Creates a plain object from a GetConfigReq message. Also converts values to other types if specified.
         * @param message GetConfigReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: shop.GetConfigReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetConfigReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Box. */
    interface IBox {

        /** Box id */
        id?: (number|null);

        /** Box num */
        num?: (number|Long|null);
    }

    /** Represents a Box. */
    class Box implements IBox {

        /**
         * Constructs a new Box.
         * @param [properties] Properties to set
         */
        constructor(properties?: shop.IBox);

        /** Box id. */
        public id: number;

        /** Box num. */
        public num: (number|Long);

        /**
         * Creates a new Box instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Box instance
         */
        public static create(properties?: shop.IBox): shop.Box;

        /**
         * Encodes the specified Box message. Does not implicitly {@link shop.Box.verify|verify} messages.
         * @param message Box message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: shop.IBox, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Box message, length delimited. Does not implicitly {@link shop.Box.verify|verify} messages.
         * @param message Box message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: shop.IBox, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Box message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Box
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): shop.Box;

        /**
         * Decodes a Box message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Box
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): shop.Box;

        /**
         * Verifies a Box message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Box message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Box
         */
        public static fromObject(object: { [k: string]: any }): shop.Box;

        /**
         * Creates a plain object from a Box message. Also converts values to other types if specified.
         * @param message Box
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: shop.Box, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Box to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BoxItem. */
    interface IBoxItem {

        /** BoxItem index */
        index?: (number|null);

        /** BoxItem needItem */
        needItem?: (shop.IBox|null);

        /** BoxItem getItem */
        getItem?: (shop.IBox|null);

        /** BoxItem icon */
        icon?: (string|null);
    }

    /** Represents a BoxItem. */
    class BoxItem implements IBoxItem {

        /**
         * Constructs a new BoxItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: shop.IBoxItem);

        /** BoxItem index. */
        public index: number;

        /** BoxItem needItem. */
        public needItem?: (shop.IBox|null);

        /** BoxItem getItem. */
        public getItem?: (shop.IBox|null);

        /** BoxItem icon. */
        public icon: string;

        /**
         * Creates a new BoxItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BoxItem instance
         */
        public static create(properties?: shop.IBoxItem): shop.BoxItem;

        /**
         * Encodes the specified BoxItem message. Does not implicitly {@link shop.BoxItem.verify|verify} messages.
         * @param message BoxItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: shop.IBoxItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BoxItem message, length delimited. Does not implicitly {@link shop.BoxItem.verify|verify} messages.
         * @param message BoxItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: shop.IBoxItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BoxItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BoxItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): shop.BoxItem;

        /**
         * Decodes a BoxItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BoxItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): shop.BoxItem;

        /**
         * Verifies a BoxItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BoxItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BoxItem
         */
        public static fromObject(object: { [k: string]: any }): shop.BoxItem;

        /**
         * Creates a plain object from a BoxItem message. Also converts values to other types if specified.
         * @param message BoxItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: shop.BoxItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BoxItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Award. */
    interface IAward {

        /** Award propId */
        propId?: (number|null);

        /** Award minNum */
        minNum?: (number|Long|null);

        /** Award maxNum */
        maxNum?: (number|Long|null);

        /** Award effectTime */
        effectTime?: (number|Long|null);
    }

    /** Represents an Award. */
    class Award implements IAward {

        /**
         * Constructs a new Award.
         * @param [properties] Properties to set
         */
        constructor(properties?: shop.IAward);

        /** Award propId. */
        public propId: number;

        /** Award minNum. */
        public minNum: (number|Long);

        /** Award maxNum. */
        public maxNum: (number|Long);

        /** Award effectTime. */
        public effectTime: (number|Long);

        /**
         * Creates a new Award instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Award instance
         */
        public static create(properties?: shop.IAward): shop.Award;

        /**
         * Encodes the specified Award message. Does not implicitly {@link shop.Award.verify|verify} messages.
         * @param message Award message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: shop.IAward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Award message, length delimited. Does not implicitly {@link shop.Award.verify|verify} messages.
         * @param message Award message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: shop.IAward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Award message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Award
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): shop.Award;

        /**
         * Decodes an Award message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Award
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): shop.Award;

        /**
         * Verifies an Award message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Award message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Award
         */
        public static fromObject(object: { [k: string]: any }): shop.Award;

        /**
         * Creates a plain object from an Award message. Also converts values to other types if specified.
         * @param message Award
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: shop.Award, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Award to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetConfigRsp. */
    interface IGetConfigRsp {

        /** GetConfigRsp code */
        code?: (shop.IStateCode|null);

        /** GetConfigRsp boxList */
        boxList?: (shop.IBoxItem[]|null);
    }

    /** Represents a GetConfigRsp. */
    class GetConfigRsp implements IGetConfigRsp {

        /**
         * Constructs a new GetConfigRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: shop.IGetConfigRsp);

        /** GetConfigRsp code. */
        public code?: (shop.IStateCode|null);

        /** GetConfigRsp boxList. */
        public boxList: shop.IBoxItem[];

        /**
         * Creates a new GetConfigRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetConfigRsp instance
         */
        public static create(properties?: shop.IGetConfigRsp): shop.GetConfigRsp;

        /**
         * Encodes the specified GetConfigRsp message. Does not implicitly {@link shop.GetConfigRsp.verify|verify} messages.
         * @param message GetConfigRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: shop.IGetConfigRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetConfigRsp message, length delimited. Does not implicitly {@link shop.GetConfigRsp.verify|verify} messages.
         * @param message GetConfigRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: shop.IGetConfigRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetConfigRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetConfigRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): shop.GetConfigRsp;

        /**
         * Decodes a GetConfigRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetConfigRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): shop.GetConfigRsp;

        /**
         * Verifies a GetConfigRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetConfigRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetConfigRsp
         */
        public static fromObject(object: { [k: string]: any }): shop.GetConfigRsp;

        /**
         * Creates a plain object from a GetConfigRsp message. Also converts values to other types if specified.
         * @param message GetConfigRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: shop.GetConfigRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetConfigRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ExchangeBoxReq. */
    interface IExchangeBoxReq {

        /** ExchangeBoxReq uid */
        uid?: (number|Long|null);

        /** ExchangeBoxReq index */
        index?: (number|null);
    }

    /** Represents an ExchangeBoxReq. */
    class ExchangeBoxReq implements IExchangeBoxReq {

        /**
         * Constructs a new ExchangeBoxReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: shop.IExchangeBoxReq);

        /** ExchangeBoxReq uid. */
        public uid: (number|Long);

        /** ExchangeBoxReq index. */
        public index: number;

        /**
         * Creates a new ExchangeBoxReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExchangeBoxReq instance
         */
        public static create(properties?: shop.IExchangeBoxReq): shop.ExchangeBoxReq;

        /**
         * Encodes the specified ExchangeBoxReq message. Does not implicitly {@link shop.ExchangeBoxReq.verify|verify} messages.
         * @param message ExchangeBoxReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: shop.IExchangeBoxReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExchangeBoxReq message, length delimited. Does not implicitly {@link shop.ExchangeBoxReq.verify|verify} messages.
         * @param message ExchangeBoxReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: shop.IExchangeBoxReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExchangeBoxReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExchangeBoxReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): shop.ExchangeBoxReq;

        /**
         * Decodes an ExchangeBoxReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExchangeBoxReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): shop.ExchangeBoxReq;

        /**
         * Verifies an ExchangeBoxReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExchangeBoxReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExchangeBoxReq
         */
        public static fromObject(object: { [k: string]: any }): shop.ExchangeBoxReq;

        /**
         * Creates a plain object from an ExchangeBoxReq message. Also converts values to other types if specified.
         * @param message ExchangeBoxReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: shop.ExchangeBoxReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExchangeBoxReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ExchangeBoxRsp. */
    interface IExchangeBoxRsp {

        /** ExchangeBoxRsp code */
        code?: (shop.IStateCode|null);

        /** ExchangeBoxRsp getItem */
        getItem?: (shop.IBox|null);
    }

    /** Represents an ExchangeBoxRsp. */
    class ExchangeBoxRsp implements IExchangeBoxRsp {

        /**
         * Constructs a new ExchangeBoxRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: shop.IExchangeBoxRsp);

        /** ExchangeBoxRsp code. */
        public code?: (shop.IStateCode|null);

        /** ExchangeBoxRsp getItem. */
        public getItem?: (shop.IBox|null);

        /**
         * Creates a new ExchangeBoxRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExchangeBoxRsp instance
         */
        public static create(properties?: shop.IExchangeBoxRsp): shop.ExchangeBoxRsp;

        /**
         * Encodes the specified ExchangeBoxRsp message. Does not implicitly {@link shop.ExchangeBoxRsp.verify|verify} messages.
         * @param message ExchangeBoxRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: shop.IExchangeBoxRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExchangeBoxRsp message, length delimited. Does not implicitly {@link shop.ExchangeBoxRsp.verify|verify} messages.
         * @param message ExchangeBoxRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: shop.IExchangeBoxRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExchangeBoxRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExchangeBoxRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): shop.ExchangeBoxRsp;

        /**
         * Decodes an ExchangeBoxRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExchangeBoxRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): shop.ExchangeBoxRsp;

        /**
         * Verifies an ExchangeBoxRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExchangeBoxRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExchangeBoxRsp
         */
        public static fromObject(object: { [k: string]: any }): shop.ExchangeBoxRsp;

        /**
         * Creates a plain object from an ExchangeBoxRsp message. Also converts values to other types if specified.
         * @param message ExchangeBoxRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: shop.ExchangeBoxRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExchangeBoxRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
