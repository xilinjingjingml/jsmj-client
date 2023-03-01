import * as $protobuf from "protobufjs";
/** Represents a Sign */
export class Sign extends $protobuf.rpc.Service {

    /**
     * Constructs a new Sign service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new Sign service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Sign;

    /**
     * Calls DengLuJiangLi.
     * @param request GetMeiRiDengLuJiangLiReq message or plain object
     * @param callback Node-style callback called with the error, if any, and GetMeiRiDengLuJiangLiAck
     */
    public dengLuJiangLi(request: IGetMeiRiDengLuJiangLiReq, callback: Sign.DengLuJiangLiCallback): void;

    /**
     * Calls DengLuJiangLi.
     * @param request GetMeiRiDengLuJiangLiReq message or plain object
     * @returns Promise
     */
    public dengLuJiangLi(request: IGetMeiRiDengLuJiangLiReq): Promise<GetMeiRiDengLuJiangLiAck>;

    /**
     * Calls GetLoginReward.
     * @param request GetLoginRewardReq message or plain object
     * @param callback Node-style callback called with the error, if any, and Empty
     */
    public getLoginReward(request: IGetLoginRewardReq, callback: Sign.GetLoginRewardCallback): void;

    /**
     * Calls GetLoginReward.
     * @param request GetLoginRewardReq message or plain object
     * @returns Promise
     */
    public getLoginReward(request: IGetLoginRewardReq): Promise<Empty>;

    /**
     * Calls DailyFirstLogin.
     * @param request GetDailyFirstLoginReq message or plain object
     * @param callback Node-style callback called with the error, if any, and GetDailyFirstLoginAck
     */
    public dailyFirstLogin(request: IGetDailyFirstLoginReq, callback: Sign.DailyFirstLoginCallback): void;

    /**
     * Calls DailyFirstLogin.
     * @param request GetDailyFirstLoginReq message or plain object
     * @returns Promise
     */
    public dailyFirstLogin(request: IGetDailyFirstLoginReq): Promise<GetDailyFirstLoginAck>;
}

export namespace Sign {

    /**
     * Callback as used by {@link Sign#dengLuJiangLi}.
     * @param error Error, if any
     * @param [response] GetMeiRiDengLuJiangLiAck
     */
    type DengLuJiangLiCallback = (error: (Error|null), response?: GetMeiRiDengLuJiangLiAck) => void;

    /**
     * Callback as used by {@link Sign#getLoginReward}.
     * @param error Error, if any
     * @param [response] Empty
     */
    type GetLoginRewardCallback = (error: (Error|null), response?: Empty) => void;

    /**
     * Callback as used by {@link Sign#dailyFirstLogin}.
     * @param error Error, if any
     * @param [response] GetDailyFirstLoginAck
     */
    type DailyFirstLoginCallback = (error: (Error|null), response?: GetDailyFirstLoginAck) => void;
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

/** Properties of a DayItem. */
export interface IDayItem {

    /** DayItem award */
    award?: (IAward[]|null);

    /** DayItem day */
    day?: (number|null);

    /** DayItem State */
    State?: (number|null);

    /** DayItem desc */
    desc?: (string|null);

    /** DayItem service */
    service?: (string|null);

    /** DayItem orderId */
    orderId?: (string|null);
}

/** Represents a DayItem. */
export class DayItem implements IDayItem {

    /**
     * Constructs a new DayItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDayItem);

    /** DayItem award. */
    public award: IAward[];

    /** DayItem day. */
    public day: number;

    /** DayItem State. */
    public State: number;

    /** DayItem desc. */
    public desc: string;

    /** DayItem service. */
    public service: string;

    /** DayItem orderId. */
    public orderId: string;

    /**
     * Creates a new DayItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DayItem instance
     */
    public static create(properties?: IDayItem): DayItem;

    /**
     * Encodes the specified DayItem message. Does not implicitly {@link DayItem.verify|verify} messages.
     * @param message DayItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDayItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DayItem message, length delimited. Does not implicitly {@link DayItem.verify|verify} messages.
     * @param message DayItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDayItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DayItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DayItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DayItem;

    /**
     * Decodes a DayItem message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DayItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DayItem;

    /**
     * Verifies a DayItem message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DayItem message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DayItem
     */
    public static fromObject(object: { [k: string]: any }): DayItem;

    /**
     * Creates a plain object from a DayItem message. Also converts values to other types if specified.
     * @param message DayItem
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DayItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DayItem to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GetMeiRiDengLuJiangLiAck. */
export interface IGetMeiRiDengLuJiangLiAck {

    /** GetMeiRiDengLuJiangLiAck errCode */
    errCode?: (number|null);

    /** GetMeiRiDengLuJiangLiAck errMsg */
    errMsg?: (string|null);

    /** GetMeiRiDengLuJiangLiAck AllItems */
    AllItems?: (IDayItem[]|null);

    /** GetMeiRiDengLuJiangLiAck today */
    today?: (number|null);
}

/** Represents a GetMeiRiDengLuJiangLiAck. */
export class GetMeiRiDengLuJiangLiAck implements IGetMeiRiDengLuJiangLiAck {

    /**
     * Constructs a new GetMeiRiDengLuJiangLiAck.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetMeiRiDengLuJiangLiAck);

    /** GetMeiRiDengLuJiangLiAck errCode. */
    public errCode: number;

    /** GetMeiRiDengLuJiangLiAck errMsg. */
    public errMsg: string;

    /** GetMeiRiDengLuJiangLiAck AllItems. */
    public AllItems: IDayItem[];

    /** GetMeiRiDengLuJiangLiAck today. */
    public today: number;

    /**
     * Creates a new GetMeiRiDengLuJiangLiAck instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetMeiRiDengLuJiangLiAck instance
     */
    public static create(properties?: IGetMeiRiDengLuJiangLiAck): GetMeiRiDengLuJiangLiAck;

    /**
     * Encodes the specified GetMeiRiDengLuJiangLiAck message. Does not implicitly {@link GetMeiRiDengLuJiangLiAck.verify|verify} messages.
     * @param message GetMeiRiDengLuJiangLiAck message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetMeiRiDengLuJiangLiAck, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetMeiRiDengLuJiangLiAck message, length delimited. Does not implicitly {@link GetMeiRiDengLuJiangLiAck.verify|verify} messages.
     * @param message GetMeiRiDengLuJiangLiAck message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetMeiRiDengLuJiangLiAck, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetMeiRiDengLuJiangLiAck message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetMeiRiDengLuJiangLiAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetMeiRiDengLuJiangLiAck;

    /**
     * Decodes a GetMeiRiDengLuJiangLiAck message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetMeiRiDengLuJiangLiAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetMeiRiDengLuJiangLiAck;

    /**
     * Verifies a GetMeiRiDengLuJiangLiAck message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetMeiRiDengLuJiangLiAck message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetMeiRiDengLuJiangLiAck
     */
    public static fromObject(object: { [k: string]: any }): GetMeiRiDengLuJiangLiAck;

    /**
     * Creates a plain object from a GetMeiRiDengLuJiangLiAck message. Also converts values to other types if specified.
     * @param message GetMeiRiDengLuJiangLiAck
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetMeiRiDengLuJiangLiAck, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetMeiRiDengLuJiangLiAck to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GetMeiRiDengLuJiangLiReq. */
export interface IGetMeiRiDengLuJiangLiReq {

    /** GetMeiRiDengLuJiangLiReq uid */
    uid?: (number|Long|null);
}

/** Represents a GetMeiRiDengLuJiangLiReq. */
export class GetMeiRiDengLuJiangLiReq implements IGetMeiRiDengLuJiangLiReq {

    /**
     * Constructs a new GetMeiRiDengLuJiangLiReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetMeiRiDengLuJiangLiReq);

    /** GetMeiRiDengLuJiangLiReq uid. */
    public uid: (number|Long);

    /**
     * Creates a new GetMeiRiDengLuJiangLiReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetMeiRiDengLuJiangLiReq instance
     */
    public static create(properties?: IGetMeiRiDengLuJiangLiReq): GetMeiRiDengLuJiangLiReq;

    /**
     * Encodes the specified GetMeiRiDengLuJiangLiReq message. Does not implicitly {@link GetMeiRiDengLuJiangLiReq.verify|verify} messages.
     * @param message GetMeiRiDengLuJiangLiReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetMeiRiDengLuJiangLiReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetMeiRiDengLuJiangLiReq message, length delimited. Does not implicitly {@link GetMeiRiDengLuJiangLiReq.verify|verify} messages.
     * @param message GetMeiRiDengLuJiangLiReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetMeiRiDengLuJiangLiReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetMeiRiDengLuJiangLiReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetMeiRiDengLuJiangLiReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetMeiRiDengLuJiangLiReq;

    /**
     * Decodes a GetMeiRiDengLuJiangLiReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetMeiRiDengLuJiangLiReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetMeiRiDengLuJiangLiReq;

    /**
     * Verifies a GetMeiRiDengLuJiangLiReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetMeiRiDengLuJiangLiReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetMeiRiDengLuJiangLiReq
     */
    public static fromObject(object: { [k: string]: any }): GetMeiRiDengLuJiangLiReq;

    /**
     * Creates a plain object from a GetMeiRiDengLuJiangLiReq message. Also converts values to other types if specified.
     * @param message GetMeiRiDengLuJiangLiReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetMeiRiDengLuJiangLiReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetMeiRiDengLuJiangLiReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GetLoginRewardReq. */
export interface IGetLoginRewardReq {

    /** GetLoginRewardReq uid */
    uid?: (number|Long|null);

    /** GetLoginRewardReq day */
    day?: (number|null);

    /** GetLoginRewardReq service */
    service?: (string|null);

    /** GetLoginRewardReq orderId */
    orderId?: (string|null);
}

/** Represents a GetLoginRewardReq. */
export class GetLoginRewardReq implements IGetLoginRewardReq {

    /**
     * Constructs a new GetLoginRewardReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetLoginRewardReq);

    /** GetLoginRewardReq uid. */
    public uid: (number|Long);

    /** GetLoginRewardReq day. */
    public day: number;

    /** GetLoginRewardReq service. */
    public service: string;

    /** GetLoginRewardReq orderId. */
    public orderId: string;

    /**
     * Creates a new GetLoginRewardReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetLoginRewardReq instance
     */
    public static create(properties?: IGetLoginRewardReq): GetLoginRewardReq;

    /**
     * Encodes the specified GetLoginRewardReq message. Does not implicitly {@link GetLoginRewardReq.verify|verify} messages.
     * @param message GetLoginRewardReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetLoginRewardReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetLoginRewardReq message, length delimited. Does not implicitly {@link GetLoginRewardReq.verify|verify} messages.
     * @param message GetLoginRewardReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetLoginRewardReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetLoginRewardReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetLoginRewardReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetLoginRewardReq;

    /**
     * Decodes a GetLoginRewardReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetLoginRewardReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetLoginRewardReq;

    /**
     * Verifies a GetLoginRewardReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetLoginRewardReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetLoginRewardReq
     */
    public static fromObject(object: { [k: string]: any }): GetLoginRewardReq;

    /**
     * Creates a plain object from a GetLoginRewardReq message. Also converts values to other types if specified.
     * @param message GetLoginRewardReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetLoginRewardReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetLoginRewardReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GetDailyFirstLoginReq. */
export interface IGetDailyFirstLoginReq {

    /** GetDailyFirstLoginReq uid */
    uid?: (number|Long|null);
}

/** Represents a GetDailyFirstLoginReq. */
export class GetDailyFirstLoginReq implements IGetDailyFirstLoginReq {

    /**
     * Constructs a new GetDailyFirstLoginReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetDailyFirstLoginReq);

    /** GetDailyFirstLoginReq uid. */
    public uid: (number|Long);

    /**
     * Creates a new GetDailyFirstLoginReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetDailyFirstLoginReq instance
     */
    public static create(properties?: IGetDailyFirstLoginReq): GetDailyFirstLoginReq;

    /**
     * Encodes the specified GetDailyFirstLoginReq message. Does not implicitly {@link GetDailyFirstLoginReq.verify|verify} messages.
     * @param message GetDailyFirstLoginReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetDailyFirstLoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetDailyFirstLoginReq message, length delimited. Does not implicitly {@link GetDailyFirstLoginReq.verify|verify} messages.
     * @param message GetDailyFirstLoginReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetDailyFirstLoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetDailyFirstLoginReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetDailyFirstLoginReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetDailyFirstLoginReq;

    /**
     * Decodes a GetDailyFirstLoginReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetDailyFirstLoginReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetDailyFirstLoginReq;

    /**
     * Verifies a GetDailyFirstLoginReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetDailyFirstLoginReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetDailyFirstLoginReq
     */
    public static fromObject(object: { [k: string]: any }): GetDailyFirstLoginReq;

    /**
     * Creates a plain object from a GetDailyFirstLoginReq message. Also converts values to other types if specified.
     * @param message GetDailyFirstLoginReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetDailyFirstLoginReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetDailyFirstLoginReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GetDailyFirstLoginAck. */
export interface IGetDailyFirstLoginAck {

    /** GetDailyFirstLoginAck errCode */
    errCode?: (number|null);

    /** GetDailyFirstLoginAck errMsg */
    errMsg?: (string|null);

    /** GetDailyFirstLoginAck isFirst */
    isFirst?: (boolean|null);
}

/** Represents a GetDailyFirstLoginAck. */
export class GetDailyFirstLoginAck implements IGetDailyFirstLoginAck {

    /**
     * Constructs a new GetDailyFirstLoginAck.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetDailyFirstLoginAck);

    /** GetDailyFirstLoginAck errCode. */
    public errCode: number;

    /** GetDailyFirstLoginAck errMsg. */
    public errMsg: string;

    /** GetDailyFirstLoginAck isFirst. */
    public isFirst: boolean;

    /**
     * Creates a new GetDailyFirstLoginAck instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetDailyFirstLoginAck instance
     */
    public static create(properties?: IGetDailyFirstLoginAck): GetDailyFirstLoginAck;

    /**
     * Encodes the specified GetDailyFirstLoginAck message. Does not implicitly {@link GetDailyFirstLoginAck.verify|verify} messages.
     * @param message GetDailyFirstLoginAck message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetDailyFirstLoginAck, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetDailyFirstLoginAck message, length delimited. Does not implicitly {@link GetDailyFirstLoginAck.verify|verify} messages.
     * @param message GetDailyFirstLoginAck message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetDailyFirstLoginAck, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetDailyFirstLoginAck message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetDailyFirstLoginAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetDailyFirstLoginAck;

    /**
     * Decodes a GetDailyFirstLoginAck message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetDailyFirstLoginAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetDailyFirstLoginAck;

    /**
     * Verifies a GetDailyFirstLoginAck message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetDailyFirstLoginAck message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetDailyFirstLoginAck
     */
    public static fromObject(object: { [k: string]: any }): GetDailyFirstLoginAck;

    /**
     * Creates a plain object from a GetDailyFirstLoginAck message. Also converts values to other types if specified.
     * @param message GetDailyFirstLoginAck
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetDailyFirstLoginAck, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetDailyFirstLoginAck to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
