import * as $protobuf from "protobufjs";
/** AdOrderState enum. */
export enum AdOrderState {
    Init = 0,
    Reject = 1,
    Accept = 2,
    Complete = 3,
    Expired = 4
}

/** Properties of a Pair. */
export interface IPair {

    /** Pair key */
    key?: (string|null);

    /** Pair value */
    value?: (string|null);
}

/** Represents a Pair. */
export class Pair implements IPair {

    /**
     * Constructs a new Pair.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPair);

    /** Pair key. */
    public key: string;

    /** Pair value. */
    public value: string;

    /**
     * Creates a new Pair instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Pair instance
     */
    public static create(properties?: IPair): Pair;

    /**
     * Encodes the specified Pair message. Does not implicitly {@link Pair.verify|verify} messages.
     * @param message Pair message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPair, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Pair message, length delimited. Does not implicitly {@link Pair.verify|verify} messages.
     * @param message Pair message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPair, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Pair message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Pair
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Pair;

    /**
     * Decodes a Pair message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Pair
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Pair;

    /**
     * Verifies a Pair message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Pair message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Pair
     */
    public static fromObject(object: { [k: string]: any }): Pair;

    /**
     * Creates a plain object from a Pair message. Also converts values to other types if specified.
     * @param message Pair
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Pair, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Pair to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an Award. */
export interface IAward {

    /** Award index */
    index?: (number|null);

    /** Award num */
    num?: (number|Long|null);

    /** Award param */
    param?: (IPair[]|null);
}

/** Represents an Award. */
export class Award implements IAward {

    /**
     * Constructs a new Award.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAward);

    /** Award index. */
    public index: number;

    /** Award num. */
    public num: (number|Long);

    /** Award param. */
    public param: IPair[];

    /**
     * Creates a new Award instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Award instance
     */
    public static create(properties?: IAward): Award;

    /**
     * Encodes the specified Award message. Does not implicitly {@link Award.verify|verify} messages.
     * @param message Award message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAward, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Award message, length delimited. Does not implicitly {@link Award.verify|verify} messages.
     * @param message Award message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAward, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Award message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Award
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Award;

    /**
     * Decodes an Award message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Award
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Award;

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
    public static fromObject(object: { [k: string]: any }): Award;

    /**
     * Creates a plain object from an Award message. Also converts values to other types if specified.
     * @param message Award
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Award, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Award to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents an Ad */
export class Ad extends $protobuf.rpc.Service {

    /**
     * Constructs a new Ad service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new Ad service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Ad;

    /**
     * Calls InitOrder.
     * @param request AdOrderReq message or plain object
     * @param callback Node-style callback called with the error, if any, and AdOrderNot
     */
    public initOrder(request: IAdOrderReq, callback: Ad.InitOrderCallback): void;

    /**
     * Calls InitOrder.
     * @param request AdOrderReq message or plain object
     * @returns Promise
     */
    public initOrder(request: IAdOrderReq): Promise<AdOrderNot>;

    /**
     * Calls OrderAward.
     * @param request GetAdOrderAwardReq message or plain object
     * @param callback Node-style callback called with the error, if any, and GetAdOrderAwardAck
     */
    public orderAward(request: IGetAdOrderAwardReq, callback: Ad.OrderAwardCallback): void;

    /**
     * Calls OrderAward.
     * @param request GetAdOrderAwardReq message or plain object
     * @returns Promise
     */
    public orderAward(request: IGetAdOrderAwardReq): Promise<GetAdOrderAwardAck>;

    /**
     * Calls UpdateOrderStatus.
     * @param request UpdateAdOrderStatusReq message or plain object
     * @param callback Node-style callback called with the error, if any, and UpdateAdOrderStatusAck
     */
    public updateOrderStatus(request: IUpdateAdOrderStatusReq, callback: Ad.UpdateOrderStatusCallback): void;

    /**
     * Calls UpdateOrderStatus.
     * @param request UpdateAdOrderStatusReq message or plain object
     * @returns Promise
     */
    public updateOrderStatus(request: IUpdateAdOrderStatusReq): Promise<UpdateAdOrderStatusAck>;
}

export namespace Ad {

    /**
     * Callback as used by {@link Ad#initOrder}.
     * @param error Error, if any
     * @param [response] AdOrderNot
     */
    type InitOrderCallback = (error: (Error|null), response?: AdOrderNot) => void;

    /**
     * Callback as used by {@link Ad#orderAward}.
     * @param error Error, if any
     * @param [response] GetAdOrderAwardAck
     */
    type OrderAwardCallback = (error: (Error|null), response?: GetAdOrderAwardAck) => void;

    /**
     * Callback as used by {@link Ad#updateOrderStatus}.
     * @param error Error, if any
     * @param [response] UpdateAdOrderStatusAck
     */
    type UpdateOrderStatusCallback = (error: (Error|null), response?: UpdateAdOrderStatusAck) => void;
}

/** Properties of an AwardItem. */
export interface IAwardItem {

    /** AwardItem id */
    id?: (number|null);

    /** AwardItem sequence */
    sequence?: (number|null);

    /** AwardItem award */
    award?: (IAward[]|null);
}

/** Represents an AwardItem. */
export class AwardItem implements IAwardItem {

    /**
     * Constructs a new AwardItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAwardItem);

    /** AwardItem id. */
    public id: number;

    /** AwardItem sequence. */
    public sequence: number;

    /** AwardItem award. */
    public award: IAward[];

    /**
     * Creates a new AwardItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AwardItem instance
     */
    public static create(properties?: IAwardItem): AwardItem;

    /**
     * Encodes the specified AwardItem message. Does not implicitly {@link AwardItem.verify|verify} messages.
     * @param message AwardItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAwardItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AwardItem message, length delimited. Does not implicitly {@link AwardItem.verify|verify} messages.
     * @param message AwardItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAwardItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AwardItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AwardItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AwardItem;

    /**
     * Decodes an AwardItem message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AwardItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AwardItem;

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
    public static fromObject(object: { [k: string]: any }): AwardItem;

    /**
     * Creates a plain object from an AwardItem message. Also converts values to other types if specified.
     * @param message AwardItem
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AwardItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AwardItem to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an AdTimes. */
export interface IAdTimes {

    /** AdTimes adArea */
    adArea?: (number|null);

    /** AdTimes adTimes */
    adTimes?: (number|Long|null);
}

/** Represents an AdTimes. */
export class AdTimes implements IAdTimes {

    /**
     * Constructs a new AdTimes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAdTimes);

    /** AdTimes adArea. */
    public adArea: number;

    /** AdTimes adTimes. */
    public adTimes: (number|Long);

    /**
     * Creates a new AdTimes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AdTimes instance
     */
    public static create(properties?: IAdTimes): AdTimes;

    /**
     * Encodes the specified AdTimes message. Does not implicitly {@link AdTimes.verify|verify} messages.
     * @param message AdTimes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAdTimes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AdTimes message, length delimited. Does not implicitly {@link AdTimes.verify|verify} messages.
     * @param message AdTimes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAdTimes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AdTimes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AdTimes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AdTimes;

    /**
     * Decodes an AdTimes message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AdTimes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AdTimes;

    /**
     * Verifies an AdTimes message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AdTimes message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AdTimes
     */
    public static fromObject(object: { [k: string]: any }): AdTimes;

    /**
     * Creates a plain object from an AdTimes message. Also converts values to other types if specified.
     * @param message AdTimes
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AdTimes, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AdTimes to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an AdInfo. */
export interface IAdInfo {

    /** AdInfo service */
    service?: (string|null);

    /** AdInfo adArea */
    adArea?: (number|null);

    /** AdInfo adType */
    adType?: (number|null);

    /** AdInfo awardId */
    awardId?: (number|null);

    /** AdInfo award */
    award?: (IAwardItem|null);
}

/** Represents an AdInfo. */
export class AdInfo implements IAdInfo {

    /**
     * Constructs a new AdInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAdInfo);

    /** AdInfo service. */
    public service: string;

    /** AdInfo adArea. */
    public adArea: number;

    /** AdInfo adType. */
    public adType: number;

    /** AdInfo awardId. */
    public awardId: number;

    /** AdInfo award. */
    public award?: (IAwardItem|null);

    /**
     * Creates a new AdInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AdInfo instance
     */
    public static create(properties?: IAdInfo): AdInfo;

    /**
     * Encodes the specified AdInfo message. Does not implicitly {@link AdInfo.verify|verify} messages.
     * @param message AdInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAdInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AdInfo message, length delimited. Does not implicitly {@link AdInfo.verify|verify} messages.
     * @param message AdInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAdInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AdInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AdInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AdInfo;

    /**
     * Decodes an AdInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AdInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AdInfo;

    /**
     * Verifies an AdInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AdInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AdInfo
     */
    public static fromObject(object: { [k: string]: any }): AdInfo;

    /**
     * Creates a plain object from an AdInfo message. Also converts values to other types if specified.
     * @param message AdInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AdInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AdInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an AdInfoBundle. */
export interface IAdInfoBundle {

    /** AdInfoBundle info */
    info?: (IAdInfo|null);

    /** AdInfoBundle params */
    params?: (IPair[]|null);
}

/** Represents an AdInfoBundle. */
export class AdInfoBundle implements IAdInfoBundle {

    /**
     * Constructs a new AdInfoBundle.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAdInfoBundle);

    /** AdInfoBundle info. */
    public info?: (IAdInfo|null);

    /** AdInfoBundle params. */
    public params: IPair[];

    /**
     * Creates a new AdInfoBundle instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AdInfoBundle instance
     */
    public static create(properties?: IAdInfoBundle): AdInfoBundle;

    /**
     * Encodes the specified AdInfoBundle message. Does not implicitly {@link AdInfoBundle.verify|verify} messages.
     * @param message AdInfoBundle message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAdInfoBundle, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AdInfoBundle message, length delimited. Does not implicitly {@link AdInfoBundle.verify|verify} messages.
     * @param message AdInfoBundle message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAdInfoBundle, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AdInfoBundle message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AdInfoBundle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AdInfoBundle;

    /**
     * Decodes an AdInfoBundle message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AdInfoBundle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AdInfoBundle;

    /**
     * Verifies an AdInfoBundle message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AdInfoBundle message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AdInfoBundle
     */
    public static fromObject(object: { [k: string]: any }): AdInfoBundle;

    /**
     * Creates a plain object from an AdInfoBundle message. Also converts values to other types if specified.
     * @param message AdInfoBundle
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AdInfoBundle, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AdInfoBundle to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an AdOrderReq. */
export interface IAdOrderReq {

    /** AdOrderReq uid */
    uid?: (number|Long|null);

    /** AdOrderReq areaId */
    areaId?: (number|null);
}

/** Represents an AdOrderReq. */
export class AdOrderReq implements IAdOrderReq {

    /**
     * Constructs a new AdOrderReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAdOrderReq);

    /** AdOrderReq uid. */
    public uid: (number|Long);

    /** AdOrderReq areaId. */
    public areaId: number;

    /**
     * Creates a new AdOrderReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AdOrderReq instance
     */
    public static create(properties?: IAdOrderReq): AdOrderReq;

    /**
     * Encodes the specified AdOrderReq message. Does not implicitly {@link AdOrderReq.verify|verify} messages.
     * @param message AdOrderReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAdOrderReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AdOrderReq message, length delimited. Does not implicitly {@link AdOrderReq.verify|verify} messages.
     * @param message AdOrderReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAdOrderReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AdOrderReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AdOrderReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AdOrderReq;

    /**
     * Decodes an AdOrderReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AdOrderReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AdOrderReq;

    /**
     * Verifies an AdOrderReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AdOrderReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AdOrderReq
     */
    public static fromObject(object: { [k: string]: any }): AdOrderReq;

    /**
     * Creates a plain object from an AdOrderReq message. Also converts values to other types if specified.
     * @param message AdOrderReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AdOrderReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AdOrderReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an AdOrderNot. */
export interface IAdOrderNot {

    /** AdOrderNot errCode */
    errCode?: (number|null);

    /** AdOrderNot errMsg */
    errMsg?: (string|null);

    /** AdOrderNot service */
    service?: (string|null);

    /** AdOrderNot orderId */
    orderId?: (string|null);

    /** AdOrderNot areaId */
    areaId?: (number|null);

    /** AdOrderNot award */
    award?: (IAward[]|null);

    /** AdOrderNot params */
    params?: (IPair[]|null);
}

/** Represents an AdOrderNot. */
export class AdOrderNot implements IAdOrderNot {

    /**
     * Constructs a new AdOrderNot.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAdOrderNot);

    /** AdOrderNot errCode. */
    public errCode: number;

    /** AdOrderNot errMsg. */
    public errMsg: string;

    /** AdOrderNot service. */
    public service: string;

    /** AdOrderNot orderId. */
    public orderId: string;

    /** AdOrderNot areaId. */
    public areaId: number;

    /** AdOrderNot award. */
    public award: IAward[];

    /** AdOrderNot params. */
    public params: IPair[];

    /**
     * Creates a new AdOrderNot instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AdOrderNot instance
     */
    public static create(properties?: IAdOrderNot): AdOrderNot;

    /**
     * Encodes the specified AdOrderNot message. Does not implicitly {@link AdOrderNot.verify|verify} messages.
     * @param message AdOrderNot message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAdOrderNot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AdOrderNot message, length delimited. Does not implicitly {@link AdOrderNot.verify|verify} messages.
     * @param message AdOrderNot message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAdOrderNot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AdOrderNot message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AdOrderNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AdOrderNot;

    /**
     * Decodes an AdOrderNot message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AdOrderNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AdOrderNot;

    /**
     * Verifies an AdOrderNot message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AdOrderNot message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AdOrderNot
     */
    public static fromObject(object: { [k: string]: any }): AdOrderNot;

    /**
     * Creates a plain object from an AdOrderNot message. Also converts values to other types if specified.
     * @param message AdOrderNot
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AdOrderNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AdOrderNot to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an UpdateAdOrderStatusReq. */
export interface IUpdateAdOrderStatusReq {

    /** UpdateAdOrderStatusReq uid */
    uid?: (number|Long|null);

    /** UpdateAdOrderStatusReq service */
    service?: (string|null);

    /** UpdateAdOrderStatusReq orderId */
    orderId?: (string|null);

    /** UpdateAdOrderStatusReq state */
    state?: (AdOrderState|null);
}

/** Represents an UpdateAdOrderStatusReq. */
export class UpdateAdOrderStatusReq implements IUpdateAdOrderStatusReq {

    /**
     * Constructs a new UpdateAdOrderStatusReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUpdateAdOrderStatusReq);

    /** UpdateAdOrderStatusReq uid. */
    public uid: (number|Long);

    /** UpdateAdOrderStatusReq service. */
    public service: string;

    /** UpdateAdOrderStatusReq orderId. */
    public orderId: string;

    /** UpdateAdOrderStatusReq state. */
    public state: AdOrderState;

    /**
     * Creates a new UpdateAdOrderStatusReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UpdateAdOrderStatusReq instance
     */
    public static create(properties?: IUpdateAdOrderStatusReq): UpdateAdOrderStatusReq;

    /**
     * Encodes the specified UpdateAdOrderStatusReq message. Does not implicitly {@link UpdateAdOrderStatusReq.verify|verify} messages.
     * @param message UpdateAdOrderStatusReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUpdateAdOrderStatusReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UpdateAdOrderStatusReq message, length delimited. Does not implicitly {@link UpdateAdOrderStatusReq.verify|verify} messages.
     * @param message UpdateAdOrderStatusReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUpdateAdOrderStatusReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UpdateAdOrderStatusReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UpdateAdOrderStatusReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UpdateAdOrderStatusReq;

    /**
     * Decodes an UpdateAdOrderStatusReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UpdateAdOrderStatusReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UpdateAdOrderStatusReq;

    /**
     * Verifies an UpdateAdOrderStatusReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an UpdateAdOrderStatusReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UpdateAdOrderStatusReq
     */
    public static fromObject(object: { [k: string]: any }): UpdateAdOrderStatusReq;

    /**
     * Creates a plain object from an UpdateAdOrderStatusReq message. Also converts values to other types if specified.
     * @param message UpdateAdOrderStatusReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UpdateAdOrderStatusReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UpdateAdOrderStatusReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an UpdateAdOrderStatusAck. */
export interface IUpdateAdOrderStatusAck {

    /** UpdateAdOrderStatusAck errCode */
    errCode?: (number|null);

    /** UpdateAdOrderStatusAck errMsg */
    errMsg?: (string|null);

    /** UpdateAdOrderStatusAck service */
    service?: (string|null);

    /** UpdateAdOrderStatusAck orderId */
    orderId?: (string|null);

    /** UpdateAdOrderStatusAck state */
    state?: (AdOrderState|null);
}

/** Represents an UpdateAdOrderStatusAck. */
export class UpdateAdOrderStatusAck implements IUpdateAdOrderStatusAck {

    /**
     * Constructs a new UpdateAdOrderStatusAck.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUpdateAdOrderStatusAck);

    /** UpdateAdOrderStatusAck errCode. */
    public errCode: number;

    /** UpdateAdOrderStatusAck errMsg. */
    public errMsg: string;

    /** UpdateAdOrderStatusAck service. */
    public service: string;

    /** UpdateAdOrderStatusAck orderId. */
    public orderId: string;

    /** UpdateAdOrderStatusAck state. */
    public state: AdOrderState;

    /**
     * Creates a new UpdateAdOrderStatusAck instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UpdateAdOrderStatusAck instance
     */
    public static create(properties?: IUpdateAdOrderStatusAck): UpdateAdOrderStatusAck;

    /**
     * Encodes the specified UpdateAdOrderStatusAck message. Does not implicitly {@link UpdateAdOrderStatusAck.verify|verify} messages.
     * @param message UpdateAdOrderStatusAck message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUpdateAdOrderStatusAck, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UpdateAdOrderStatusAck message, length delimited. Does not implicitly {@link UpdateAdOrderStatusAck.verify|verify} messages.
     * @param message UpdateAdOrderStatusAck message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUpdateAdOrderStatusAck, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UpdateAdOrderStatusAck message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UpdateAdOrderStatusAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UpdateAdOrderStatusAck;

    /**
     * Decodes an UpdateAdOrderStatusAck message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UpdateAdOrderStatusAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UpdateAdOrderStatusAck;

    /**
     * Verifies an UpdateAdOrderStatusAck message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an UpdateAdOrderStatusAck message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UpdateAdOrderStatusAck
     */
    public static fromObject(object: { [k: string]: any }): UpdateAdOrderStatusAck;

    /**
     * Creates a plain object from an UpdateAdOrderStatusAck message. Also converts values to other types if specified.
     * @param message UpdateAdOrderStatusAck
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UpdateAdOrderStatusAck, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UpdateAdOrderStatusAck to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GetAdOrderAwardReq. */
export interface IGetAdOrderAwardReq {

    /** GetAdOrderAwardReq uid */
    uid?: (number|Long|null);

    /** GetAdOrderAwardReq service */
    service?: (string|null);

    /** GetAdOrderAwardReq orderId */
    orderId?: (string|null);
}

/** Represents a GetAdOrderAwardReq. */
export class GetAdOrderAwardReq implements IGetAdOrderAwardReq {

    /**
     * Constructs a new GetAdOrderAwardReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetAdOrderAwardReq);

    /** GetAdOrderAwardReq uid. */
    public uid: (number|Long);

    /** GetAdOrderAwardReq service. */
    public service: string;

    /** GetAdOrderAwardReq orderId. */
    public orderId: string;

    /**
     * Creates a new GetAdOrderAwardReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetAdOrderAwardReq instance
     */
    public static create(properties?: IGetAdOrderAwardReq): GetAdOrderAwardReq;

    /**
     * Encodes the specified GetAdOrderAwardReq message. Does not implicitly {@link GetAdOrderAwardReq.verify|verify} messages.
     * @param message GetAdOrderAwardReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetAdOrderAwardReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetAdOrderAwardReq message, length delimited. Does not implicitly {@link GetAdOrderAwardReq.verify|verify} messages.
     * @param message GetAdOrderAwardReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetAdOrderAwardReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetAdOrderAwardReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetAdOrderAwardReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetAdOrderAwardReq;

    /**
     * Decodes a GetAdOrderAwardReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetAdOrderAwardReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetAdOrderAwardReq;

    /**
     * Verifies a GetAdOrderAwardReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetAdOrderAwardReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetAdOrderAwardReq
     */
    public static fromObject(object: { [k: string]: any }): GetAdOrderAwardReq;

    /**
     * Creates a plain object from a GetAdOrderAwardReq message. Also converts values to other types if specified.
     * @param message GetAdOrderAwardReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetAdOrderAwardReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetAdOrderAwardReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GetAdOrderAwardAck. */
export interface IGetAdOrderAwardAck {

    /** GetAdOrderAwardAck errCode */
    errCode?: (number|null);

    /** GetAdOrderAwardAck errMsg */
    errMsg?: (string|null);

    /** GetAdOrderAwardAck service */
    service?: (string|null);

    /** GetAdOrderAwardAck orderId */
    orderId?: (string|null);

    /** GetAdOrderAwardAck award */
    award?: (IAward[]|null);

    /** GetAdOrderAwardAck params */
    params?: (IPair[]|null);
}

/** Represents a GetAdOrderAwardAck. */
export class GetAdOrderAwardAck implements IGetAdOrderAwardAck {

    /**
     * Constructs a new GetAdOrderAwardAck.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetAdOrderAwardAck);

    /** GetAdOrderAwardAck errCode. */
    public errCode: number;

    /** GetAdOrderAwardAck errMsg. */
    public errMsg: string;

    /** GetAdOrderAwardAck service. */
    public service: string;

    /** GetAdOrderAwardAck orderId. */
    public orderId: string;

    /** GetAdOrderAwardAck award. */
    public award: IAward[];

    /** GetAdOrderAwardAck params. */
    public params: IPair[];

    /**
     * Creates a new GetAdOrderAwardAck instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetAdOrderAwardAck instance
     */
    public static create(properties?: IGetAdOrderAwardAck): GetAdOrderAwardAck;

    /**
     * Encodes the specified GetAdOrderAwardAck message. Does not implicitly {@link GetAdOrderAwardAck.verify|verify} messages.
     * @param message GetAdOrderAwardAck message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetAdOrderAwardAck, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetAdOrderAwardAck message, length delimited. Does not implicitly {@link GetAdOrderAwardAck.verify|verify} messages.
     * @param message GetAdOrderAwardAck message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetAdOrderAwardAck, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetAdOrderAwardAck message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetAdOrderAwardAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetAdOrderAwardAck;

    /**
     * Decodes a GetAdOrderAwardAck message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetAdOrderAwardAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetAdOrderAwardAck;

    /**
     * Verifies a GetAdOrderAwardAck message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetAdOrderAwardAck message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetAdOrderAwardAck
     */
    public static fromObject(object: { [k: string]: any }): GetAdOrderAwardAck;

    /**
     * Creates a plain object from a GetAdOrderAwardAck message. Also converts values to other types if specified.
     * @param message GetAdOrderAwardAck
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetAdOrderAwardAck, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetAdOrderAwardAck to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents an AdSpot */
export class AdSpot extends $protobuf.rpc.Service {

    /**
     * Constructs a new AdSpot service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new AdSpot service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): AdSpot;

    /**
     * Calls ZhuanPan.
     * @param request GetZhuanPanChouJiangReq message or plain object
     * @param callback Node-style callback called with the error, if any, and GetZhuanPanChouJiangAck
     */
    public zhuanPan(request: IGetZhuanPanChouJiangReq, callback: AdSpot.ZhuanPanCallback): void;

    /**
     * Calls ZhuanPan.
     * @param request GetZhuanPanChouJiangReq message or plain object
     * @returns Promise
     */
    public zhuanPan(request: IGetZhuanPanChouJiangReq): Promise<GetZhuanPanChouJiangAck>;

    /**
     * Calls XinShouHaoLi.
     * @param request GetXinShouHaoLiReq message or plain object
     * @param callback Node-style callback called with the error, if any, and GetXinShouHaoLiAck
     */
    public xinShouHaoLi(request: IGetXinShouHaoLiReq, callback: AdSpot.XinShouHaoLiCallback): void;

    /**
     * Calls XinShouHaoLi.
     * @param request GetXinShouHaoLiReq message or plain object
     * @returns Promise
     */
    public xinShouHaoLi(request: IGetXinShouHaoLiReq): Promise<GetXinShouHaoLiAck>;

    /**
     * Calls GetLotteryReward.
     * @param request GetZhuanPanChouJiangAwardReq message or plain object
     * @param callback Node-style callback called with the error, if any, and GetZhuanPanChouJiangAwardAck
     */
    public getLotteryReward(request: IGetZhuanPanChouJiangAwardReq, callback: AdSpot.GetLotteryRewardCallback): void;

    /**
     * Calls GetLotteryReward.
     * @param request GetZhuanPanChouJiangAwardReq message or plain object
     * @returns Promise
     */
    public getLotteryReward(request: IGetZhuanPanChouJiangAwardReq): Promise<GetZhuanPanChouJiangAwardAck>;

    /**
     * Calls GetAdSpots.
     * @param request GetAdSpotsReq message or plain object
     * @param callback Node-style callback called with the error, if any, and GetAdSpotsAck
     */
    public getAdSpots(request: IGetAdSpotsReq, callback: AdSpot.GetAdSpotsCallback): void;

    /**
     * Calls GetAdSpots.
     * @param request GetAdSpotsReq message or plain object
     * @returns Promise
     */
    public getAdSpots(request: IGetAdSpotsReq): Promise<GetAdSpotsAck>;
}

export namespace AdSpot {

    /**
     * Callback as used by {@link AdSpot#zhuanPan}.
     * @param error Error, if any
     * @param [response] GetZhuanPanChouJiangAck
     */
    type ZhuanPanCallback = (error: (Error|null), response?: GetZhuanPanChouJiangAck) => void;

    /**
     * Callback as used by {@link AdSpot#xinShouHaoLi}.
     * @param error Error, if any
     * @param [response] GetXinShouHaoLiAck
     */
    type XinShouHaoLiCallback = (error: (Error|null), response?: GetXinShouHaoLiAck) => void;

    /**
     * Callback as used by {@link AdSpot#getLotteryReward}.
     * @param error Error, if any
     * @param [response] GetZhuanPanChouJiangAwardAck
     */
    type GetLotteryRewardCallback = (error: (Error|null), response?: GetZhuanPanChouJiangAwardAck) => void;

    /**
     * Callback as used by {@link AdSpot#getAdSpots}.
     * @param error Error, if any
     * @param [response] GetAdSpotsAck
     */
    type GetAdSpotsCallback = (error: (Error|null), response?: GetAdSpotsAck) => void;
}

/** Properties of an Empty. */
export interface IEmpty {
}

/** Represents an Empty. */
export class Empty implements IEmpty {

    /**
     * Constructs a new Empty.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEmpty);

    /**
     * Creates a new Empty instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Empty instance
     */
    public static create(properties?: IEmpty): Empty;

    /**
     * Encodes the specified Empty message. Does not implicitly {@link Empty.verify|verify} messages.
     * @param message Empty message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Empty message, length delimited. Does not implicitly {@link Empty.verify|verify} messages.
     * @param message Empty message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Empty message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Empty
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Empty;

    /**
     * Decodes an Empty message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Empty
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Empty;

    /**
     * Verifies an Empty message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Empty message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Empty
     */
    public static fromObject(object: { [k: string]: any }): Empty;

    /**
     * Creates a plain object from an Empty message. Also converts values to other types if specified.
     * @param message Empty
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Empty to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ZhuanPanItem. */
export interface IZhuanPanItem {

    /** ZhuanPanItem award */
    award?: (IAward[]|null);

    /** ZhuanPanItem desc */
    desc?: (string|null);
}

/** Represents a ZhuanPanItem. */
export class ZhuanPanItem implements IZhuanPanItem {

    /**
     * Constructs a new ZhuanPanItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IZhuanPanItem);

    /** ZhuanPanItem award. */
    public award: IAward[];

    /** ZhuanPanItem desc. */
    public desc: string;

    /**
     * Creates a new ZhuanPanItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ZhuanPanItem instance
     */
    public static create(properties?: IZhuanPanItem): ZhuanPanItem;

    /**
     * Encodes the specified ZhuanPanItem message. Does not implicitly {@link ZhuanPanItem.verify|verify} messages.
     * @param message ZhuanPanItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IZhuanPanItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ZhuanPanItem message, length delimited. Does not implicitly {@link ZhuanPanItem.verify|verify} messages.
     * @param message ZhuanPanItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IZhuanPanItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ZhuanPanItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ZhuanPanItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ZhuanPanItem;

    /**
     * Decodes a ZhuanPanItem message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ZhuanPanItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ZhuanPanItem;

    /**
     * Verifies a ZhuanPanItem message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ZhuanPanItem message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ZhuanPanItem
     */
    public static fromObject(object: { [k: string]: any }): ZhuanPanItem;

    /**
     * Creates a plain object from a ZhuanPanItem message. Also converts values to other types if specified.
     * @param message ZhuanPanItem
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ZhuanPanItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ZhuanPanItem to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GetZhuanPanChouJiangReq. */
export interface IGetZhuanPanChouJiangReq {

    /** GetZhuanPanChouJiangReq uid */
    uid?: (number|Long|null);
}

/** Represents a GetZhuanPanChouJiangReq. */
export class GetZhuanPanChouJiangReq implements IGetZhuanPanChouJiangReq {

    /**
     * Constructs a new GetZhuanPanChouJiangReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetZhuanPanChouJiangReq);

    /** GetZhuanPanChouJiangReq uid. */
    public uid: (number|Long);

    /**
     * Creates a new GetZhuanPanChouJiangReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetZhuanPanChouJiangReq instance
     */
    public static create(properties?: IGetZhuanPanChouJiangReq): GetZhuanPanChouJiangReq;

    /**
     * Encodes the specified GetZhuanPanChouJiangReq message. Does not implicitly {@link GetZhuanPanChouJiangReq.verify|verify} messages.
     * @param message GetZhuanPanChouJiangReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetZhuanPanChouJiangReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetZhuanPanChouJiangReq message, length delimited. Does not implicitly {@link GetZhuanPanChouJiangReq.verify|verify} messages.
     * @param message GetZhuanPanChouJiangReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetZhuanPanChouJiangReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetZhuanPanChouJiangReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetZhuanPanChouJiangReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetZhuanPanChouJiangReq;

    /**
     * Decodes a GetZhuanPanChouJiangReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetZhuanPanChouJiangReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetZhuanPanChouJiangReq;

    /**
     * Verifies a GetZhuanPanChouJiangReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetZhuanPanChouJiangReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetZhuanPanChouJiangReq
     */
    public static fromObject(object: { [k: string]: any }): GetZhuanPanChouJiangReq;

    /**
     * Creates a plain object from a GetZhuanPanChouJiangReq message. Also converts values to other types if specified.
     * @param message GetZhuanPanChouJiangReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetZhuanPanChouJiangReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetZhuanPanChouJiangReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GetZhuanPanChouJiangAck. */
export interface IGetZhuanPanChouJiangAck {

    /** GetZhuanPanChouJiangAck errCode */
    errCode?: (number|null);

    /** GetZhuanPanChouJiangAck errMsg */
    errMsg?: (string|null);

    /** GetZhuanPanChouJiangAck hitIndex */
    hitIndex?: (number|null);

    /** GetZhuanPanChouJiangAck remainCount */
    remainCount?: (number|null);

    /** GetZhuanPanChouJiangAck AllItems */
    AllItems?: (IZhuanPanItem[]|null);

    /** GetZhuanPanChouJiangAck adOrder */
    adOrder?: (IAdOrderNot|null);
}

/** Represents a GetZhuanPanChouJiangAck. */
export class GetZhuanPanChouJiangAck implements IGetZhuanPanChouJiangAck {

    /**
     * Constructs a new GetZhuanPanChouJiangAck.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetZhuanPanChouJiangAck);

    /** GetZhuanPanChouJiangAck errCode. */
    public errCode: number;

    /** GetZhuanPanChouJiangAck errMsg. */
    public errMsg: string;

    /** GetZhuanPanChouJiangAck hitIndex. */
    public hitIndex: number;

    /** GetZhuanPanChouJiangAck remainCount. */
    public remainCount: number;

    /** GetZhuanPanChouJiangAck AllItems. */
    public AllItems: IZhuanPanItem[];

    /** GetZhuanPanChouJiangAck adOrder. */
    public adOrder?: (IAdOrderNot|null);

    /**
     * Creates a new GetZhuanPanChouJiangAck instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetZhuanPanChouJiangAck instance
     */
    public static create(properties?: IGetZhuanPanChouJiangAck): GetZhuanPanChouJiangAck;

    /**
     * Encodes the specified GetZhuanPanChouJiangAck message. Does not implicitly {@link GetZhuanPanChouJiangAck.verify|verify} messages.
     * @param message GetZhuanPanChouJiangAck message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetZhuanPanChouJiangAck, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetZhuanPanChouJiangAck message, length delimited. Does not implicitly {@link GetZhuanPanChouJiangAck.verify|verify} messages.
     * @param message GetZhuanPanChouJiangAck message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetZhuanPanChouJiangAck, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetZhuanPanChouJiangAck message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetZhuanPanChouJiangAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetZhuanPanChouJiangAck;

    /**
     * Decodes a GetZhuanPanChouJiangAck message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetZhuanPanChouJiangAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetZhuanPanChouJiangAck;

    /**
     * Verifies a GetZhuanPanChouJiangAck message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetZhuanPanChouJiangAck message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetZhuanPanChouJiangAck
     */
    public static fromObject(object: { [k: string]: any }): GetZhuanPanChouJiangAck;

    /**
     * Creates a plain object from a GetZhuanPanChouJiangAck message. Also converts values to other types if specified.
     * @param message GetZhuanPanChouJiangAck
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetZhuanPanChouJiangAck, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetZhuanPanChouJiangAck to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GetZhuanPanChouJiangAwardReq. */
export interface IGetZhuanPanChouJiangAwardReq {

    /** GetZhuanPanChouJiangAwardReq uid */
    uid?: (number|Long|null);

    /** GetZhuanPanChouJiangAwardReq service */
    service?: (string|null);

    /** GetZhuanPanChouJiangAwardReq orderId */
    orderId?: (string|null);
}

/** Represents a GetZhuanPanChouJiangAwardReq. */
export class GetZhuanPanChouJiangAwardReq implements IGetZhuanPanChouJiangAwardReq {

    /**
     * Constructs a new GetZhuanPanChouJiangAwardReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetZhuanPanChouJiangAwardReq);

    /** GetZhuanPanChouJiangAwardReq uid. */
    public uid: (number|Long);

    /** GetZhuanPanChouJiangAwardReq service. */
    public service: string;

    /** GetZhuanPanChouJiangAwardReq orderId. */
    public orderId: string;

    /**
     * Creates a new GetZhuanPanChouJiangAwardReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetZhuanPanChouJiangAwardReq instance
     */
    public static create(properties?: IGetZhuanPanChouJiangAwardReq): GetZhuanPanChouJiangAwardReq;

    /**
     * Encodes the specified GetZhuanPanChouJiangAwardReq message. Does not implicitly {@link GetZhuanPanChouJiangAwardReq.verify|verify} messages.
     * @param message GetZhuanPanChouJiangAwardReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetZhuanPanChouJiangAwardReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetZhuanPanChouJiangAwardReq message, length delimited. Does not implicitly {@link GetZhuanPanChouJiangAwardReq.verify|verify} messages.
     * @param message GetZhuanPanChouJiangAwardReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetZhuanPanChouJiangAwardReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetZhuanPanChouJiangAwardReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetZhuanPanChouJiangAwardReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetZhuanPanChouJiangAwardReq;

    /**
     * Decodes a GetZhuanPanChouJiangAwardReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetZhuanPanChouJiangAwardReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetZhuanPanChouJiangAwardReq;

    /**
     * Verifies a GetZhuanPanChouJiangAwardReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetZhuanPanChouJiangAwardReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetZhuanPanChouJiangAwardReq
     */
    public static fromObject(object: { [k: string]: any }): GetZhuanPanChouJiangAwardReq;

    /**
     * Creates a plain object from a GetZhuanPanChouJiangAwardReq message. Also converts values to other types if specified.
     * @param message GetZhuanPanChouJiangAwardReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetZhuanPanChouJiangAwardReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetZhuanPanChouJiangAwardReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GetZhuanPanChouJiangAwardAck. */
export interface IGetZhuanPanChouJiangAwardAck {

    /** GetZhuanPanChouJiangAwardAck errCode */
    errCode?: (number|null);

    /** GetZhuanPanChouJiangAwardAck errMsg */
    errMsg?: (string|null);
}

/** Represents a GetZhuanPanChouJiangAwardAck. */
export class GetZhuanPanChouJiangAwardAck implements IGetZhuanPanChouJiangAwardAck {

    /**
     * Constructs a new GetZhuanPanChouJiangAwardAck.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetZhuanPanChouJiangAwardAck);

    /** GetZhuanPanChouJiangAwardAck errCode. */
    public errCode: number;

    /** GetZhuanPanChouJiangAwardAck errMsg. */
    public errMsg: string;

    /**
     * Creates a new GetZhuanPanChouJiangAwardAck instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetZhuanPanChouJiangAwardAck instance
     */
    public static create(properties?: IGetZhuanPanChouJiangAwardAck): GetZhuanPanChouJiangAwardAck;

    /**
     * Encodes the specified GetZhuanPanChouJiangAwardAck message. Does not implicitly {@link GetZhuanPanChouJiangAwardAck.verify|verify} messages.
     * @param message GetZhuanPanChouJiangAwardAck message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetZhuanPanChouJiangAwardAck, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetZhuanPanChouJiangAwardAck message, length delimited. Does not implicitly {@link GetZhuanPanChouJiangAwardAck.verify|verify} messages.
     * @param message GetZhuanPanChouJiangAwardAck message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetZhuanPanChouJiangAwardAck, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetZhuanPanChouJiangAwardAck message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetZhuanPanChouJiangAwardAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetZhuanPanChouJiangAwardAck;

    /**
     * Decodes a GetZhuanPanChouJiangAwardAck message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetZhuanPanChouJiangAwardAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetZhuanPanChouJiangAwardAck;

    /**
     * Verifies a GetZhuanPanChouJiangAwardAck message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetZhuanPanChouJiangAwardAck message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetZhuanPanChouJiangAwardAck
     */
    public static fromObject(object: { [k: string]: any }): GetZhuanPanChouJiangAwardAck;

    /**
     * Creates a plain object from a GetZhuanPanChouJiangAwardAck message. Also converts values to other types if specified.
     * @param message GetZhuanPanChouJiangAwardAck
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetZhuanPanChouJiangAwardAck, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetZhuanPanChouJiangAwardAck to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GetXinShouHaoLiReq. */
export interface IGetXinShouHaoLiReq {

    /** GetXinShouHaoLiReq uid */
    uid?: (number|Long|null);
}

/** Represents a GetXinShouHaoLiReq. */
export class GetXinShouHaoLiReq implements IGetXinShouHaoLiReq {

    /**
     * Constructs a new GetXinShouHaoLiReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetXinShouHaoLiReq);

    /** GetXinShouHaoLiReq uid. */
    public uid: (number|Long);

    /**
     * Creates a new GetXinShouHaoLiReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetXinShouHaoLiReq instance
     */
    public static create(properties?: IGetXinShouHaoLiReq): GetXinShouHaoLiReq;

    /**
     * Encodes the specified GetXinShouHaoLiReq message. Does not implicitly {@link GetXinShouHaoLiReq.verify|verify} messages.
     * @param message GetXinShouHaoLiReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetXinShouHaoLiReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetXinShouHaoLiReq message, length delimited. Does not implicitly {@link GetXinShouHaoLiReq.verify|verify} messages.
     * @param message GetXinShouHaoLiReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetXinShouHaoLiReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetXinShouHaoLiReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetXinShouHaoLiReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetXinShouHaoLiReq;

    /**
     * Decodes a GetXinShouHaoLiReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetXinShouHaoLiReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetXinShouHaoLiReq;

    /**
     * Verifies a GetXinShouHaoLiReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetXinShouHaoLiReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetXinShouHaoLiReq
     */
    public static fromObject(object: { [k: string]: any }): GetXinShouHaoLiReq;

    /**
     * Creates a plain object from a GetXinShouHaoLiReq message. Also converts values to other types if specified.
     * @param message GetXinShouHaoLiReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetXinShouHaoLiReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetXinShouHaoLiReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GetXinShouHaoLiAck. */
export interface IGetXinShouHaoLiAck {

    /** GetXinShouHaoLiAck errCode */
    errCode?: (number|null);

    /** GetXinShouHaoLiAck errMsg */
    errMsg?: (string|null);

    /** GetXinShouHaoLiAck adOrder */
    adOrder?: (IAdOrderNot|null);
}

/** Represents a GetXinShouHaoLiAck. */
export class GetXinShouHaoLiAck implements IGetXinShouHaoLiAck {

    /**
     * Constructs a new GetXinShouHaoLiAck.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetXinShouHaoLiAck);

    /** GetXinShouHaoLiAck errCode. */
    public errCode: number;

    /** GetXinShouHaoLiAck errMsg. */
    public errMsg: string;

    /** GetXinShouHaoLiAck adOrder. */
    public adOrder?: (IAdOrderNot|null);

    /**
     * Creates a new GetXinShouHaoLiAck instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetXinShouHaoLiAck instance
     */
    public static create(properties?: IGetXinShouHaoLiAck): GetXinShouHaoLiAck;

    /**
     * Encodes the specified GetXinShouHaoLiAck message. Does not implicitly {@link GetXinShouHaoLiAck.verify|verify} messages.
     * @param message GetXinShouHaoLiAck message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetXinShouHaoLiAck, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetXinShouHaoLiAck message, length delimited. Does not implicitly {@link GetXinShouHaoLiAck.verify|verify} messages.
     * @param message GetXinShouHaoLiAck message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetXinShouHaoLiAck, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetXinShouHaoLiAck message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetXinShouHaoLiAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetXinShouHaoLiAck;

    /**
     * Decodes a GetXinShouHaoLiAck message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetXinShouHaoLiAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetXinShouHaoLiAck;

    /**
     * Verifies a GetXinShouHaoLiAck message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetXinShouHaoLiAck message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetXinShouHaoLiAck
     */
    public static fromObject(object: { [k: string]: any }): GetXinShouHaoLiAck;

    /**
     * Creates a plain object from a GetXinShouHaoLiAck message. Also converts values to other types if specified.
     * @param message GetXinShouHaoLiAck
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetXinShouHaoLiAck, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetXinShouHaoLiAck to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an AwardConfig. */
export interface IAwardConfig {

    /** AwardConfig index */
    index?: (number|null);

    /** AwardConfig minNum */
    minNum?: (number|null);

    /** AwardConfig maxNum */
    maxNum?: (number|null);
}

/** Represents an AwardConfig. */
export class AwardConfig implements IAwardConfig {

    /**
     * Constructs a new AwardConfig.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAwardConfig);

    /** AwardConfig index. */
    public index: number;

    /** AwardConfig minNum. */
    public minNum: number;

    /** AwardConfig maxNum. */
    public maxNum: number;

    /**
     * Creates a new AwardConfig instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AwardConfig instance
     */
    public static create(properties?: IAwardConfig): AwardConfig;

    /**
     * Encodes the specified AwardConfig message. Does not implicitly {@link AwardConfig.verify|verify} messages.
     * @param message AwardConfig message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAwardConfig, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AwardConfig message, length delimited. Does not implicitly {@link AwardConfig.verify|verify} messages.
     * @param message AwardConfig message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAwardConfig, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AwardConfig message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AwardConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AwardConfig;

    /**
     * Decodes an AwardConfig message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AwardConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AwardConfig;

    /**
     * Verifies an AwardConfig message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AwardConfig message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AwardConfig
     */
    public static fromObject(object: { [k: string]: any }): AwardConfig;

    /**
     * Creates a plain object from an AwardConfig message. Also converts values to other types if specified.
     * @param message AwardConfig
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AwardConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AwardConfig to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an IdItem. */
export interface IIdItem {

    /** IdItem channel */
    channel?: (number|null);

    /** IdItem id */
    id?: (string|null);

    /** IdItem percentage */
    percentage?: (number|null);
}

/** Represents an IdItem. */
export class IdItem implements IIdItem {

    /**
     * Constructs a new IdItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IIdItem);

    /** IdItem channel. */
    public channel: number;

    /** IdItem id. */
    public id: string;

    /** IdItem percentage. */
    public percentage: number;

    /**
     * Creates a new IdItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns IdItem instance
     */
    public static create(properties?: IIdItem): IdItem;

    /**
     * Encodes the specified IdItem message. Does not implicitly {@link IdItem.verify|verify} messages.
     * @param message IdItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IIdItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified IdItem message, length delimited. Does not implicitly {@link IdItem.verify|verify} messages.
     * @param message IdItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IIdItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an IdItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns IdItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IdItem;

    /**
     * Decodes an IdItem message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns IdItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IdItem;

    /**
     * Verifies an IdItem message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an IdItem message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns IdItem
     */
    public static fromObject(object: { [k: string]: any }): IdItem;

    /**
     * Creates a plain object from an IdItem message. Also converts values to other types if specified.
     * @param message IdItem
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: IdItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this IdItem to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Record. */
export interface IRecord {

    /** Record area */
    area?: (number|null);

    /** Record type */
    type?: (number|null);

    /** Record curNum */
    curNum?: (number|null);

    /** Record maxNum */
    maxNum?: (number|null);

    /** Record awards */
    awards?: (IAwardConfig[]|null);

    /** Record desc */
    desc?: (string|null);

    /** Record ids */
    ids?: (IIdItem[]|null);
}

/** Represents a Record. */
export class Record implements IRecord {

    /**
     * Constructs a new Record.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRecord);

    /** Record area. */
    public area: number;

    /** Record type. */
    public type: number;

    /** Record curNum. */
    public curNum: number;

    /** Record maxNum. */
    public maxNum: number;

    /** Record awards. */
    public awards: IAwardConfig[];

    /** Record desc. */
    public desc: string;

    /** Record ids. */
    public ids: IIdItem[];

    /**
     * Creates a new Record instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Record instance
     */
    public static create(properties?: IRecord): Record;

    /**
     * Encodes the specified Record message. Does not implicitly {@link Record.verify|verify} messages.
     * @param message Record message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRecord, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Record message, length delimited. Does not implicitly {@link Record.verify|verify} messages.
     * @param message Record message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRecord, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Record message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Record
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Record;

    /**
     * Decodes a Record message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Record
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Record;

    /**
     * Verifies a Record message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Record message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Record
     */
    public static fromObject(object: { [k: string]: any }): Record;

    /**
     * Creates a plain object from a Record message. Also converts values to other types if specified.
     * @param message Record
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Record, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Record to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GetAdSpotsReq. */
export interface IGetAdSpotsReq {

    /** GetAdSpotsReq uid */
    uid?: (number|Long|null);
}

/** Represents a GetAdSpotsReq. */
export class GetAdSpotsReq implements IGetAdSpotsReq {

    /**
     * Constructs a new GetAdSpotsReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetAdSpotsReq);

    /** GetAdSpotsReq uid. */
    public uid: (number|Long);

    /**
     * Creates a new GetAdSpotsReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetAdSpotsReq instance
     */
    public static create(properties?: IGetAdSpotsReq): GetAdSpotsReq;

    /**
     * Encodes the specified GetAdSpotsReq message. Does not implicitly {@link GetAdSpotsReq.verify|verify} messages.
     * @param message GetAdSpotsReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetAdSpotsReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetAdSpotsReq message, length delimited. Does not implicitly {@link GetAdSpotsReq.verify|verify} messages.
     * @param message GetAdSpotsReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetAdSpotsReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetAdSpotsReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetAdSpotsReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetAdSpotsReq;

    /**
     * Decodes a GetAdSpotsReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetAdSpotsReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetAdSpotsReq;

    /**
     * Verifies a GetAdSpotsReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetAdSpotsReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetAdSpotsReq
     */
    public static fromObject(object: { [k: string]: any }): GetAdSpotsReq;

    /**
     * Creates a plain object from a GetAdSpotsReq message. Also converts values to other types if specified.
     * @param message GetAdSpotsReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetAdSpotsReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetAdSpotsReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GetAdSpotsAck. */
export interface IGetAdSpotsAck {

    /** GetAdSpotsAck errCode */
    errCode?: (number|null);

    /** GetAdSpotsAck errMsg */
    errMsg?: (string|null);

    /** GetAdSpotsAck records */
    records?: (IRecord[]|null);
}

/** Represents a GetAdSpotsAck. */
export class GetAdSpotsAck implements IGetAdSpotsAck {

    /**
     * Constructs a new GetAdSpotsAck.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetAdSpotsAck);

    /** GetAdSpotsAck errCode. */
    public errCode: number;

    /** GetAdSpotsAck errMsg. */
    public errMsg: string;

    /** GetAdSpotsAck records. */
    public records: IRecord[];

    /**
     * Creates a new GetAdSpotsAck instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetAdSpotsAck instance
     */
    public static create(properties?: IGetAdSpotsAck): GetAdSpotsAck;

    /**
     * Encodes the specified GetAdSpotsAck message. Does not implicitly {@link GetAdSpotsAck.verify|verify} messages.
     * @param message GetAdSpotsAck message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetAdSpotsAck, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetAdSpotsAck message, length delimited. Does not implicitly {@link GetAdSpotsAck.verify|verify} messages.
     * @param message GetAdSpotsAck message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetAdSpotsAck, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetAdSpotsAck message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetAdSpotsAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetAdSpotsAck;

    /**
     * Decodes a GetAdSpotsAck message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetAdSpotsAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetAdSpotsAck;

    /**
     * Verifies a GetAdSpotsAck message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetAdSpotsAck message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetAdSpotsAck
     */
    public static fromObject(object: { [k: string]: any }): GetAdSpotsAck;

    /**
     * Creates a plain object from a GetAdSpotsAck message. Also converts values to other types if specified.
     * @param message GetAdSpotsAck
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetAdSpotsAck, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetAdSpotsAck to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
