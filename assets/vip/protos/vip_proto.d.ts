import * as $protobuf from "protobufjs";
/** Namespace vip. */
export namespace vip {

    /** Represents a Vip */
    class Vip extends $protobuf.rpc.Service {

        /**
         * Constructs a new Vip service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Vip service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Vip;

        /**
         * Calls GetVipConfig.
         * @param request GetVipConfigReq message or plain object
         * @param callback Node-style callback called with the error, if any, and GetVipConfigRsp
         */
        public getVipConfig(request: vip.IGetVipConfigReq, callback: vip.Vip.GetVipConfigCallback): void;

        /**
         * Calls GetVipConfig.
         * @param request GetVipConfigReq message or plain object
         * @returns Promise
         */
        public getVipConfig(request: vip.IGetVipConfigReq): Promise<vip.GetVipConfigRsp>;

        /**
         * Calls GetSendVipConfig.
         * @param request GetSendVipConfigReq message or plain object
         * @param callback Node-style callback called with the error, if any, and GetSendVipConfigRsp
         */
        public getSendVipConfig(request: vip.IGetSendVipConfigReq, callback: vip.Vip.GetSendVipConfigCallback): void;

        /**
         * Calls GetSendVipConfig.
         * @param request GetSendVipConfigReq message or plain object
         * @returns Promise
         */
        public getSendVipConfig(request: vip.IGetSendVipConfigReq): Promise<vip.GetSendVipConfigRsp>;

        /**
         * Calls GetVipUserLevel.
         * @param request GetVipUserLevelReq message or plain object
         * @param callback Node-style callback called with the error, if any, and GetVipUserLevelRsp
         */
        public getVipUserLevel(request: vip.IGetVipUserLevelReq, callback: vip.Vip.GetVipUserLevelCallback): void;

        /**
         * Calls GetVipUserLevel.
         * @param request GetVipUserLevelReq message or plain object
         * @returns Promise
         */
        public getVipUserLevel(request: vip.IGetVipUserLevelReq): Promise<vip.GetVipUserLevelRsp>;

        /**
         * Calls GetVipAwards.
         * @param request GetVipAwardsReq message or plain object
         * @param callback Node-style callback called with the error, if any, and GetVipAwardsRsp
         */
        public getVipAwards(request: vip.IGetVipAwardsReq, callback: vip.Vip.GetVipAwardsCallback): void;

        /**
         * Calls GetVipAwards.
         * @param request GetVipAwardsReq message or plain object
         * @returns Promise
         */
        public getVipAwards(request: vip.IGetVipAwardsReq): Promise<vip.GetVipAwardsRsp>;
    }

    namespace Vip {

        /**
         * Callback as used by {@link vip.Vip#getVipConfig}.
         * @param error Error, if any
         * @param [response] GetVipConfigRsp
         */
        type GetVipConfigCallback = (error: (Error|null), response?: vip.GetVipConfigRsp) => void;

        /**
         * Callback as used by {@link vip.Vip#getSendVipConfig}.
         * @param error Error, if any
         * @param [response] GetSendVipConfigRsp
         */
        type GetSendVipConfigCallback = (error: (Error|null), response?: vip.GetSendVipConfigRsp) => void;

        /**
         * Callback as used by {@link vip.Vip#getVipUserLevel}.
         * @param error Error, if any
         * @param [response] GetVipUserLevelRsp
         */
        type GetVipUserLevelCallback = (error: (Error|null), response?: vip.GetVipUserLevelRsp) => void;

        /**
         * Callback as used by {@link vip.Vip#getVipAwards}.
         * @param error Error, if any
         * @param [response] GetVipAwardsRsp
         */
        type GetVipAwardsCallback = (error: (Error|null), response?: vip.GetVipAwardsRsp) => void;
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
        constructor(properties?: vip.IStateCode);

        /** StateCode id. */
        public id: number;

        /** StateCode msg. */
        public msg: string;

        /**
         * Creates a new StateCode instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StateCode instance
         */
        public static create(properties?: vip.IStateCode): vip.StateCode;

        /**
         * Encodes the specified StateCode message. Does not implicitly {@link vip.StateCode.verify|verify} messages.
         * @param message StateCode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: vip.IStateCode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StateCode message, length delimited. Does not implicitly {@link vip.StateCode.verify|verify} messages.
         * @param message StateCode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: vip.IStateCode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StateCode message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StateCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): vip.StateCode;

        /**
         * Decodes a StateCode message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StateCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): vip.StateCode;

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
        public static fromObject(object: { [k: string]: any }): vip.StateCode;

        /**
         * Creates a plain object from a StateCode message. Also converts values to other types if specified.
         * @param message StateCode
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: vip.StateCode, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StateCode to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetVipConfigReq. */
    interface IGetVipConfigReq {

        /** GetVipConfigReq level */
        level?: (number|Long|null);
    }

    /** Represents a GetVipConfigReq. */
    class GetVipConfigReq implements IGetVipConfigReq {

        /**
         * Constructs a new GetVipConfigReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: vip.IGetVipConfigReq);

        /** GetVipConfigReq level. */
        public level: (number|Long);

        /**
         * Creates a new GetVipConfigReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetVipConfigReq instance
         */
        public static create(properties?: vip.IGetVipConfigReq): vip.GetVipConfigReq;

        /**
         * Encodes the specified GetVipConfigReq message. Does not implicitly {@link vip.GetVipConfigReq.verify|verify} messages.
         * @param message GetVipConfigReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: vip.IGetVipConfigReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetVipConfigReq message, length delimited. Does not implicitly {@link vip.GetVipConfigReq.verify|verify} messages.
         * @param message GetVipConfigReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: vip.IGetVipConfigReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetVipConfigReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetVipConfigReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): vip.GetVipConfigReq;

        /**
         * Decodes a GetVipConfigReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetVipConfigReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): vip.GetVipConfigReq;

        /**
         * Verifies a GetVipConfigReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetVipConfigReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetVipConfigReq
         */
        public static fromObject(object: { [k: string]: any }): vip.GetVipConfigReq;

        /**
         * Creates a plain object from a GetVipConfigReq message. Also converts values to other types if specified.
         * @param message GetVipConfigReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: vip.GetVipConfigReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetVipConfigReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetSendVipConfigReq. */
    interface IGetSendVipConfigReq {
    }

    /** Represents a GetSendVipConfigReq. */
    class GetSendVipConfigReq implements IGetSendVipConfigReq {

        /**
         * Constructs a new GetSendVipConfigReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: vip.IGetSendVipConfigReq);

        /**
         * Creates a new GetSendVipConfigReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetSendVipConfigReq instance
         */
        public static create(properties?: vip.IGetSendVipConfigReq): vip.GetSendVipConfigReq;

        /**
         * Encodes the specified GetSendVipConfigReq message. Does not implicitly {@link vip.GetSendVipConfigReq.verify|verify} messages.
         * @param message GetSendVipConfigReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: vip.IGetSendVipConfigReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetSendVipConfigReq message, length delimited. Does not implicitly {@link vip.GetSendVipConfigReq.verify|verify} messages.
         * @param message GetSendVipConfigReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: vip.IGetSendVipConfigReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetSendVipConfigReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetSendVipConfigReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): vip.GetSendVipConfigReq;

        /**
         * Decodes a GetSendVipConfigReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetSendVipConfigReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): vip.GetSendVipConfigReq;

        /**
         * Verifies a GetSendVipConfigReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetSendVipConfigReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetSendVipConfigReq
         */
        public static fromObject(object: { [k: string]: any }): vip.GetSendVipConfigReq;

        /**
         * Creates a plain object from a GetSendVipConfigReq message. Also converts values to other types if specified.
         * @param message GetSendVipConfigReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: vip.GetSendVipConfigReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetSendVipConfigReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AwardItem. */
    interface IAwardItem {

        /** AwardItem propId */
        propId?: (number|null);

        /** AwardItem minNum */
        minNum?: (number|Long|null);

        /** AwardItem maxNum */
        maxNum?: (number|Long|null);

        /** AwardItem effectTime */
        effectTime?: (number|Long|null);

        /** AwardItem type */
        type?: (number|null);

        /** AwardItem icon */
        icon?: (string|null);

        /** AwardItem tip */
        tip?: (string|null);
    }

    /** Represents an AwardItem. */
    class AwardItem implements IAwardItem {

        /**
         * Constructs a new AwardItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: vip.IAwardItem);

        /** AwardItem propId. */
        public propId: number;

        /** AwardItem minNum. */
        public minNum: (number|Long);

        /** AwardItem maxNum. */
        public maxNum: (number|Long);

        /** AwardItem effectTime. */
        public effectTime: (number|Long);

        /** AwardItem type. */
        public type: number;

        /** AwardItem icon. */
        public icon: string;

        /** AwardItem tip. */
        public tip: string;

        /**
         * Creates a new AwardItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AwardItem instance
         */
        public static create(properties?: vip.IAwardItem): vip.AwardItem;

        /**
         * Encodes the specified AwardItem message. Does not implicitly {@link vip.AwardItem.verify|verify} messages.
         * @param message AwardItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: vip.IAwardItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AwardItem message, length delimited. Does not implicitly {@link vip.AwardItem.verify|verify} messages.
         * @param message AwardItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: vip.IAwardItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AwardItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AwardItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): vip.AwardItem;

        /**
         * Decodes an AwardItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AwardItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): vip.AwardItem;

        /**
         * Verifies an AwardItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AwardItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AwardItem
         */
        public static fromObject(object: { [k: string]: any }): vip.AwardItem;

        /**
         * Creates a plain object from an AwardItem message. Also converts values to other types if specified.
         * @param message AwardItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: vip.AwardItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AwardItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a VipConfigItem. */
    interface IVipConfigItem {

        /** VipConfigItem level */
        level?: (number|Long|null);

        /** VipConfigItem exp */
        exp?: (number|Long|null);

        /** VipConfigItem awardsOnce */
        awardsOnce?: (vip.IAwardItem[]|null);

        /** VipConfigItem awardsDaily */
        awardsDaily?: (vip.IAwardItem[]|null);

        /** VipConfigItem privilegeDesc */
        privilegeDesc?: (string[]|null);
    }

    /** Represents a VipConfigItem. */
    class VipConfigItem implements IVipConfigItem {

        /**
         * Constructs a new VipConfigItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: vip.IVipConfigItem);

        /** VipConfigItem level. */
        public level: (number|Long);

        /** VipConfigItem exp. */
        public exp: (number|Long);

        /** VipConfigItem awardsOnce. */
        public awardsOnce: vip.IAwardItem[];

        /** VipConfigItem awardsDaily. */
        public awardsDaily: vip.IAwardItem[];

        /** VipConfigItem privilegeDesc. */
        public privilegeDesc: string[];

        /**
         * Creates a new VipConfigItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VipConfigItem instance
         */
        public static create(properties?: vip.IVipConfigItem): vip.VipConfigItem;

        /**
         * Encodes the specified VipConfigItem message. Does not implicitly {@link vip.VipConfigItem.verify|verify} messages.
         * @param message VipConfigItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: vip.IVipConfigItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VipConfigItem message, length delimited. Does not implicitly {@link vip.VipConfigItem.verify|verify} messages.
         * @param message VipConfigItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: vip.IVipConfigItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VipConfigItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VipConfigItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): vip.VipConfigItem;

        /**
         * Decodes a VipConfigItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VipConfigItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): vip.VipConfigItem;

        /**
         * Verifies a VipConfigItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VipConfigItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VipConfigItem
         */
        public static fromObject(object: { [k: string]: any }): vip.VipConfigItem;

        /**
         * Creates a plain object from a VipConfigItem message. Also converts values to other types if specified.
         * @param message VipConfigItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: vip.VipConfigItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VipConfigItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetVipConfigRsp. */
    interface IGetVipConfigRsp {

        /** GetVipConfigRsp code */
        code?: (vip.IStateCode|null);

        /** GetVipConfigRsp vipConfigs */
        vipConfigs?: (vip.IVipConfigItem[]|null);
    }

    /** Represents a GetVipConfigRsp. */
    class GetVipConfigRsp implements IGetVipConfigRsp {

        /**
         * Constructs a new GetVipConfigRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: vip.IGetVipConfigRsp);

        /** GetVipConfigRsp code. */
        public code?: (vip.IStateCode|null);

        /** GetVipConfigRsp vipConfigs. */
        public vipConfigs: vip.IVipConfigItem[];

        /**
         * Creates a new GetVipConfigRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetVipConfigRsp instance
         */
        public static create(properties?: vip.IGetVipConfigRsp): vip.GetVipConfigRsp;

        /**
         * Encodes the specified GetVipConfigRsp message. Does not implicitly {@link vip.GetVipConfigRsp.verify|verify} messages.
         * @param message GetVipConfigRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: vip.IGetVipConfigRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetVipConfigRsp message, length delimited. Does not implicitly {@link vip.GetVipConfigRsp.verify|verify} messages.
         * @param message GetVipConfigRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: vip.IGetVipConfigRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetVipConfigRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetVipConfigRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): vip.GetVipConfigRsp;

        /**
         * Decodes a GetVipConfigRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetVipConfigRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): vip.GetVipConfigRsp;

        /**
         * Verifies a GetVipConfigRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetVipConfigRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetVipConfigRsp
         */
        public static fromObject(object: { [k: string]: any }): vip.GetVipConfigRsp;

        /**
         * Creates a plain object from a GetVipConfigRsp message. Also converts values to other types if specified.
         * @param message GetVipConfigRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: vip.GetVipConfigRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetVipConfigRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetSendVipConfigRsp. */
    interface IGetSendVipConfigRsp {

        /** GetSendVipConfigRsp code */
        code?: (vip.IStateCode|null);

        /** GetSendVipConfigRsp awardsList */
        awardsList?: (vip.IAwardItem[]|null);
    }

    /** Represents a GetSendVipConfigRsp. */
    class GetSendVipConfigRsp implements IGetSendVipConfigRsp {

        /**
         * Constructs a new GetSendVipConfigRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: vip.IGetSendVipConfigRsp);

        /** GetSendVipConfigRsp code. */
        public code?: (vip.IStateCode|null);

        /** GetSendVipConfigRsp awardsList. */
        public awardsList: vip.IAwardItem[];

        /**
         * Creates a new GetSendVipConfigRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetSendVipConfigRsp instance
         */
        public static create(properties?: vip.IGetSendVipConfigRsp): vip.GetSendVipConfigRsp;

        /**
         * Encodes the specified GetSendVipConfigRsp message. Does not implicitly {@link vip.GetSendVipConfigRsp.verify|verify} messages.
         * @param message GetSendVipConfigRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: vip.IGetSendVipConfigRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetSendVipConfigRsp message, length delimited. Does not implicitly {@link vip.GetSendVipConfigRsp.verify|verify} messages.
         * @param message GetSendVipConfigRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: vip.IGetSendVipConfigRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetSendVipConfigRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetSendVipConfigRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): vip.GetSendVipConfigRsp;

        /**
         * Decodes a GetSendVipConfigRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetSendVipConfigRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): vip.GetSendVipConfigRsp;

        /**
         * Verifies a GetSendVipConfigRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetSendVipConfigRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetSendVipConfigRsp
         */
        public static fromObject(object: { [k: string]: any }): vip.GetSendVipConfigRsp;

        /**
         * Creates a plain object from a GetSendVipConfigRsp message. Also converts values to other types if specified.
         * @param message GetSendVipConfigRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: vip.GetSendVipConfigRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetSendVipConfigRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetVipUserLevelReq. */
    interface IGetVipUserLevelReq {

        /** GetVipUserLevelReq uid */
        uid?: (number|Long|null);
    }

    /** Represents a GetVipUserLevelReq. */
    class GetVipUserLevelReq implements IGetVipUserLevelReq {

        /**
         * Constructs a new GetVipUserLevelReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: vip.IGetVipUserLevelReq);

        /** GetVipUserLevelReq uid. */
        public uid: (number|Long);

        /**
         * Creates a new GetVipUserLevelReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetVipUserLevelReq instance
         */
        public static create(properties?: vip.IGetVipUserLevelReq): vip.GetVipUserLevelReq;

        /**
         * Encodes the specified GetVipUserLevelReq message. Does not implicitly {@link vip.GetVipUserLevelReq.verify|verify} messages.
         * @param message GetVipUserLevelReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: vip.IGetVipUserLevelReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetVipUserLevelReq message, length delimited. Does not implicitly {@link vip.GetVipUserLevelReq.verify|verify} messages.
         * @param message GetVipUserLevelReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: vip.IGetVipUserLevelReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetVipUserLevelReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetVipUserLevelReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): vip.GetVipUserLevelReq;

        /**
         * Decodes a GetVipUserLevelReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetVipUserLevelReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): vip.GetVipUserLevelReq;

        /**
         * Verifies a GetVipUserLevelReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetVipUserLevelReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetVipUserLevelReq
         */
        public static fromObject(object: { [k: string]: any }): vip.GetVipUserLevelReq;

        /**
         * Creates a plain object from a GetVipUserLevelReq message. Also converts values to other types if specified.
         * @param message GetVipUserLevelReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: vip.GetVipUserLevelReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetVipUserLevelReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AwardsLog. */
    interface IAwardsLog {

        /** AwardsLog level */
        level?: (number|Long|null);

        /** AwardsLog status */
        status?: (number|null);
    }

    /** Represents an AwardsLog. */
    class AwardsLog implements IAwardsLog {

        /**
         * Constructs a new AwardsLog.
         * @param [properties] Properties to set
         */
        constructor(properties?: vip.IAwardsLog);

        /** AwardsLog level. */
        public level: (number|Long);

        /** AwardsLog status. */
        public status: number;

        /**
         * Creates a new AwardsLog instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AwardsLog instance
         */
        public static create(properties?: vip.IAwardsLog): vip.AwardsLog;

        /**
         * Encodes the specified AwardsLog message. Does not implicitly {@link vip.AwardsLog.verify|verify} messages.
         * @param message AwardsLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: vip.IAwardsLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AwardsLog message, length delimited. Does not implicitly {@link vip.AwardsLog.verify|verify} messages.
         * @param message AwardsLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: vip.IAwardsLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AwardsLog message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AwardsLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): vip.AwardsLog;

        /**
         * Decodes an AwardsLog message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AwardsLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): vip.AwardsLog;

        /**
         * Verifies an AwardsLog message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AwardsLog message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AwardsLog
         */
        public static fromObject(object: { [k: string]: any }): vip.AwardsLog;

        /**
         * Creates a plain object from an AwardsLog message. Also converts values to other types if specified.
         * @param message AwardsLog
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: vip.AwardsLog, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AwardsLog to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a VipUserLevel. */
    interface IVipUserLevel {

        /** VipUserLevel uid */
        uid?: (number|Long|null);

        /** VipUserLevel awardsOnceLogs */
        awardsOnceLogs?: (vip.IAwardsLog[]|null);

        /** VipUserLevel awardsDailyLogs */
        awardsDailyLogs?: (vip.IAwardsLog[]|null);

        /** VipUserLevel dailyDate */
        dailyDate?: (number|Long|null);
    }

    /** Represents a VipUserLevel. */
    class VipUserLevel implements IVipUserLevel {

        /**
         * Constructs a new VipUserLevel.
         * @param [properties] Properties to set
         */
        constructor(properties?: vip.IVipUserLevel);

        /** VipUserLevel uid. */
        public uid: (number|Long);

        /** VipUserLevel awardsOnceLogs. */
        public awardsOnceLogs: vip.IAwardsLog[];

        /** VipUserLevel awardsDailyLogs. */
        public awardsDailyLogs: vip.IAwardsLog[];

        /** VipUserLevel dailyDate. */
        public dailyDate: (number|Long);

        /**
         * Creates a new VipUserLevel instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VipUserLevel instance
         */
        public static create(properties?: vip.IVipUserLevel): vip.VipUserLevel;

        /**
         * Encodes the specified VipUserLevel message. Does not implicitly {@link vip.VipUserLevel.verify|verify} messages.
         * @param message VipUserLevel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: vip.IVipUserLevel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VipUserLevel message, length delimited. Does not implicitly {@link vip.VipUserLevel.verify|verify} messages.
         * @param message VipUserLevel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: vip.IVipUserLevel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VipUserLevel message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VipUserLevel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): vip.VipUserLevel;

        /**
         * Decodes a VipUserLevel message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VipUserLevel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): vip.VipUserLevel;

        /**
         * Verifies a VipUserLevel message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VipUserLevel message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VipUserLevel
         */
        public static fromObject(object: { [k: string]: any }): vip.VipUserLevel;

        /**
         * Creates a plain object from a VipUserLevel message. Also converts values to other types if specified.
         * @param message VipUserLevel
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: vip.VipUserLevel, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VipUserLevel to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetVipUserLevelRsp. */
    interface IGetVipUserLevelRsp {

        /** GetVipUserLevelRsp code */
        code?: (vip.IStateCode|null);

        /** GetVipUserLevelRsp info */
        info?: (vip.IVipUserLevel|null);
    }

    /** Represents a GetVipUserLevelRsp. */
    class GetVipUserLevelRsp implements IGetVipUserLevelRsp {

        /**
         * Constructs a new GetVipUserLevelRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: vip.IGetVipUserLevelRsp);

        /** GetVipUserLevelRsp code. */
        public code?: (vip.IStateCode|null);

        /** GetVipUserLevelRsp info. */
        public info?: (vip.IVipUserLevel|null);

        /**
         * Creates a new GetVipUserLevelRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetVipUserLevelRsp instance
         */
        public static create(properties?: vip.IGetVipUserLevelRsp): vip.GetVipUserLevelRsp;

        /**
         * Encodes the specified GetVipUserLevelRsp message. Does not implicitly {@link vip.GetVipUserLevelRsp.verify|verify} messages.
         * @param message GetVipUserLevelRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: vip.IGetVipUserLevelRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetVipUserLevelRsp message, length delimited. Does not implicitly {@link vip.GetVipUserLevelRsp.verify|verify} messages.
         * @param message GetVipUserLevelRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: vip.IGetVipUserLevelRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetVipUserLevelRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetVipUserLevelRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): vip.GetVipUserLevelRsp;

        /**
         * Decodes a GetVipUserLevelRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetVipUserLevelRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): vip.GetVipUserLevelRsp;

        /**
         * Verifies a GetVipUserLevelRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetVipUserLevelRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetVipUserLevelRsp
         */
        public static fromObject(object: { [k: string]: any }): vip.GetVipUserLevelRsp;

        /**
         * Creates a plain object from a GetVipUserLevelRsp message. Also converts values to other types if specified.
         * @param message GetVipUserLevelRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: vip.GetVipUserLevelRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetVipUserLevelRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetVipAwardsReq. */
    interface IGetVipAwardsReq {

        /** GetVipAwardsReq uid */
        uid?: (number|Long|null);

        /** GetVipAwardsReq level */
        level?: (number|Long|null);
    }

    /** Represents a GetVipAwardsReq. */
    class GetVipAwardsReq implements IGetVipAwardsReq {

        /**
         * Constructs a new GetVipAwardsReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: vip.IGetVipAwardsReq);

        /** GetVipAwardsReq uid. */
        public uid: (number|Long);

        /** GetVipAwardsReq level. */
        public level: (number|Long);

        /**
         * Creates a new GetVipAwardsReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetVipAwardsReq instance
         */
        public static create(properties?: vip.IGetVipAwardsReq): vip.GetVipAwardsReq;

        /**
         * Encodes the specified GetVipAwardsReq message. Does not implicitly {@link vip.GetVipAwardsReq.verify|verify} messages.
         * @param message GetVipAwardsReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: vip.IGetVipAwardsReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetVipAwardsReq message, length delimited. Does not implicitly {@link vip.GetVipAwardsReq.verify|verify} messages.
         * @param message GetVipAwardsReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: vip.IGetVipAwardsReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetVipAwardsReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetVipAwardsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): vip.GetVipAwardsReq;

        /**
         * Decodes a GetVipAwardsReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetVipAwardsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): vip.GetVipAwardsReq;

        /**
         * Verifies a GetVipAwardsReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetVipAwardsReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetVipAwardsReq
         */
        public static fromObject(object: { [k: string]: any }): vip.GetVipAwardsReq;

        /**
         * Creates a plain object from a GetVipAwardsReq message. Also converts values to other types if specified.
         * @param message GetVipAwardsReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: vip.GetVipAwardsReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetVipAwardsReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetVipAwardsRsp. */
    interface IGetVipAwardsRsp {

        /** GetVipAwardsRsp code */
        code?: (vip.IStateCode|null);

        /** GetVipAwardsRsp awards */
        awards?: (vip.IAwardItem[]|null);
    }

    /** Represents a GetVipAwardsRsp. */
    class GetVipAwardsRsp implements IGetVipAwardsRsp {

        /**
         * Constructs a new GetVipAwardsRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: vip.IGetVipAwardsRsp);

        /** GetVipAwardsRsp code. */
        public code?: (vip.IStateCode|null);

        /** GetVipAwardsRsp awards. */
        public awards: vip.IAwardItem[];

        /**
         * Creates a new GetVipAwardsRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetVipAwardsRsp instance
         */
        public static create(properties?: vip.IGetVipAwardsRsp): vip.GetVipAwardsRsp;

        /**
         * Encodes the specified GetVipAwardsRsp message. Does not implicitly {@link vip.GetVipAwardsRsp.verify|verify} messages.
         * @param message GetVipAwardsRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: vip.IGetVipAwardsRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetVipAwardsRsp message, length delimited. Does not implicitly {@link vip.GetVipAwardsRsp.verify|verify} messages.
         * @param message GetVipAwardsRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: vip.IGetVipAwardsRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetVipAwardsRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetVipAwardsRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): vip.GetVipAwardsRsp;

        /**
         * Decodes a GetVipAwardsRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetVipAwardsRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): vip.GetVipAwardsRsp;

        /**
         * Verifies a GetVipAwardsRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetVipAwardsRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetVipAwardsRsp
         */
        public static fromObject(object: { [k: string]: any }): vip.GetVipAwardsRsp;

        /**
         * Creates a plain object from a GetVipAwardsRsp message. Also converts values to other types if specified.
         * @param message GetVipAwardsRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: vip.GetVipAwardsRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetVipAwardsRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a VipHeadFrameNot. */
    interface IVipHeadFrameNot {

        /** VipHeadFrameNot params */
        params?: ({ [k: string]: string }|null);
    }

    /** Represents a VipHeadFrameNot. */
    class VipHeadFrameNot implements IVipHeadFrameNot {

        /**
         * Constructs a new VipHeadFrameNot.
         * @param [properties] Properties to set
         */
        constructor(properties?: vip.IVipHeadFrameNot);

        /** VipHeadFrameNot params. */
        public params: { [k: string]: string };

        /**
         * Creates a new VipHeadFrameNot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VipHeadFrameNot instance
         */
        public static create(properties?: vip.IVipHeadFrameNot): vip.VipHeadFrameNot;

        /**
         * Encodes the specified VipHeadFrameNot message. Does not implicitly {@link vip.VipHeadFrameNot.verify|verify} messages.
         * @param message VipHeadFrameNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: vip.IVipHeadFrameNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VipHeadFrameNot message, length delimited. Does not implicitly {@link vip.VipHeadFrameNot.verify|verify} messages.
         * @param message VipHeadFrameNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: vip.IVipHeadFrameNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VipHeadFrameNot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VipHeadFrameNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): vip.VipHeadFrameNot;

        /**
         * Decodes a VipHeadFrameNot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VipHeadFrameNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): vip.VipHeadFrameNot;

        /**
         * Verifies a VipHeadFrameNot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VipHeadFrameNot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VipHeadFrameNot
         */
        public static fromObject(object: { [k: string]: any }): vip.VipHeadFrameNot;

        /**
         * Creates a plain object from a VipHeadFrameNot message. Also converts values to other types if specified.
         * @param message VipHeadFrameNot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: vip.VipHeadFrameNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VipHeadFrameNot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a VipAwardNot. */
    interface IVipAwardNot {

        /** VipAwardNot haveRewards */
        haveRewards?: (boolean|null);

        /** VipAwardNot style */
        style?: (number|null);

        /** VipAwardNot desc */
        desc?: (string|null);

        /** VipAwardNot align */
        align?: (number|null);
    }

    /** Represents a VipAwardNot. */
    class VipAwardNot implements IVipAwardNot {

        /**
         * Constructs a new VipAwardNot.
         * @param [properties] Properties to set
         */
        constructor(properties?: vip.IVipAwardNot);

        /** VipAwardNot haveRewards. */
        public haveRewards: boolean;

        /** VipAwardNot style. */
        public style: number;

        /** VipAwardNot desc. */
        public desc: string;

        /** VipAwardNot align. */
        public align: number;

        /**
         * Creates a new VipAwardNot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VipAwardNot instance
         */
        public static create(properties?: vip.IVipAwardNot): vip.VipAwardNot;

        /**
         * Encodes the specified VipAwardNot message. Does not implicitly {@link vip.VipAwardNot.verify|verify} messages.
         * @param message VipAwardNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: vip.IVipAwardNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VipAwardNot message, length delimited. Does not implicitly {@link vip.VipAwardNot.verify|verify} messages.
         * @param message VipAwardNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: vip.IVipAwardNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VipAwardNot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VipAwardNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): vip.VipAwardNot;

        /**
         * Decodes a VipAwardNot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VipAwardNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): vip.VipAwardNot;

        /**
         * Verifies a VipAwardNot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VipAwardNot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VipAwardNot
         */
        public static fromObject(object: { [k: string]: any }): vip.VipAwardNot;

        /**
         * Creates a plain object from a VipAwardNot message. Also converts values to other types if specified.
         * @param message VipAwardNot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: vip.VipAwardNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VipAwardNot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
