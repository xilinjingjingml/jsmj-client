import * as $protobuf from "protobufjs";
/** Represents an Activity */
export class Activity extends $protobuf.rpc.Service {

    /**
     * Constructs a new Activity service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new Activity service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Activity;

    /**
     * Calls GetActivityProgress.
     * @param request GetActivityProgressReq message or plain object
     * @param callback Node-style callback called with the error, if any, and GetActivityProgressRsp
     */
    public getActivityProgress(request: IGetActivityProgressReq, callback: Activity.GetActivityProgressCallback): void;

    /**
     * Calls GetActivityProgress.
     * @param request GetActivityProgressReq message or plain object
     * @returns Promise
     */
    public getActivityProgress(request: IGetActivityProgressReq): Promise<GetActivityProgressRsp>;

    /**
     * Calls UptBcsAdState.
     * @param request UptBcsAdStateReq message or plain object
     * @param callback Node-style callback called with the error, if any, and UptBcsAdStateRsp
     */
    public uptBcsAdState(request: IUptBcsAdStateReq, callback: Activity.UptBcsAdStateCallback): void;

    /**
     * Calls UptBcsAdState.
     * @param request UptBcsAdStateReq message or plain object
     * @returns Promise
     */
    public uptBcsAdState(request: IUptBcsAdStateReq): Promise<UptBcsAdStateRsp>;

    /**
     * Calls GetActivityAward.
     * @param request GetActivityAwardReq message or plain object
     * @param callback Node-style callback called with the error, if any, and GetActivityAwardRsp
     */
    public getActivityAward(request: IGetActivityAwardReq, callback: Activity.GetActivityAwardCallback): void;

    /**
     * Calls GetActivityAward.
     * @param request GetActivityAwardReq message or plain object
     * @returns Promise
     */
    public getActivityAward(request: IGetActivityAwardReq): Promise<GetActivityAwardRsp>;
}

export namespace Activity {

    /**
     * Callback as used by {@link Activity#getActivityProgress}.
     * @param error Error, if any
     * @param [response] GetActivityProgressRsp
     */
    type GetActivityProgressCallback = (error: (Error|null), response?: GetActivityProgressRsp) => void;

    /**
     * Callback as used by {@link Activity#uptBcsAdState}.
     * @param error Error, if any
     * @param [response] UptBcsAdStateRsp
     */
    type UptBcsAdStateCallback = (error: (Error|null), response?: UptBcsAdStateRsp) => void;

    /**
     * Callback as used by {@link Activity#getActivityAward}.
     * @param error Error, if any
     * @param [response] GetActivityAwardRsp
     */
    type GetActivityAwardCallback = (error: (Error|null), response?: GetActivityAwardRsp) => void;
}

/** Properties of a GetActivityProgressReq. */
export interface IGetActivityProgressReq {

    /** GetActivityProgressReq type */
    type?: (number|null);

    /** GetActivityProgressReq uid */
    uid?: (number|Long|null);
}

/** Represents a GetActivityProgressReq. */
export class GetActivityProgressReq implements IGetActivityProgressReq {

    /**
     * Constructs a new GetActivityProgressReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetActivityProgressReq);

    /** GetActivityProgressReq type. */
    public type: number;

    /** GetActivityProgressReq uid. */
    public uid: (number|Long);

    /**
     * Creates a new GetActivityProgressReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetActivityProgressReq instance
     */
    public static create(properties?: IGetActivityProgressReq): GetActivityProgressReq;

    /**
     * Encodes the specified GetActivityProgressReq message. Does not implicitly {@link GetActivityProgressReq.verify|verify} messages.
     * @param message GetActivityProgressReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetActivityProgressReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetActivityProgressReq message, length delimited. Does not implicitly {@link GetActivityProgressReq.verify|verify} messages.
     * @param message GetActivityProgressReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetActivityProgressReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetActivityProgressReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetActivityProgressReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetActivityProgressReq;

    /**
     * Decodes a GetActivityProgressReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetActivityProgressReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetActivityProgressReq;

    /**
     * Verifies a GetActivityProgressReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetActivityProgressReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetActivityProgressReq
     */
    public static fromObject(object: { [k: string]: any }): GetActivityProgressReq;

    /**
     * Creates a plain object from a GetActivityProgressReq message. Also converts values to other types if specified.
     * @param message GetActivityProgressReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetActivityProgressReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetActivityProgressReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an AwardItem. */
export interface IAwardItem {

    /** AwardItem propId */
    propId?: (number|null);

    /** AwardItem minNum */
    minNum?: (number|Long|null);

    /** AwardItem maxNum */
    maxNum?: (number|Long|null);

    /** AwardItem effectTime */
    effectTime?: (number|Long|null);

    /** AwardItem propIndex */
    propIndex?: (number|Long|null);

    /** AwardItem tip */
    tip?: (string|null);
}

/** Represents an AwardItem. */
export class AwardItem implements IAwardItem {

    /**
     * Constructs a new AwardItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAwardItem);

    /** AwardItem propId. */
    public propId: number;

    /** AwardItem minNum. */
    public minNum: (number|Long);

    /** AwardItem maxNum. */
    public maxNum: (number|Long);

    /** AwardItem effectTime. */
    public effectTime: (number|Long);

    /** AwardItem propIndex. */
    public propIndex: (number|Long);

    /** AwardItem tip. */
    public tip: string;

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

/** Properties of an ActivityItem. */
export interface IActivityItem {

    /** ActivityItem uid */
    uid?: (number|Long|null);

    /** ActivityItem progId */
    progId?: (string|null);

    /** ActivityItem activityId */
    activityId?: (number|null);

    /** ActivityItem type */
    type?: (number|null);

    /** ActivityItem title */
    title?: (string|null);

    /** ActivityItem desc */
    desc?: (string|null);

    /** ActivityItem curNum */
    curNum?: (number|Long|null);

    /** ActivityItem condNum */
    condNum?: (number|Long|null);

    /** ActivityItem awards */
    awards?: (IAwardItem[]|null);

    /** ActivityItem status */
    status?: (number|null);
}

/** Represents an ActivityItem. */
export class ActivityItem implements IActivityItem {

    /**
     * Constructs a new ActivityItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IActivityItem);

    /** ActivityItem uid. */
    public uid: (number|Long);

    /** ActivityItem progId. */
    public progId: string;

    /** ActivityItem activityId. */
    public activityId: number;

    /** ActivityItem type. */
    public type: number;

    /** ActivityItem title. */
    public title: string;

    /** ActivityItem desc. */
    public desc: string;

    /** ActivityItem curNum. */
    public curNum: (number|Long);

    /** ActivityItem condNum. */
    public condNum: (number|Long);

    /** ActivityItem awards. */
    public awards: IAwardItem[];

    /** ActivityItem status. */
    public status: number;

    /**
     * Creates a new ActivityItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ActivityItem instance
     */
    public static create(properties?: IActivityItem): ActivityItem;

    /**
     * Encodes the specified ActivityItem message. Does not implicitly {@link ActivityItem.verify|verify} messages.
     * @param message ActivityItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IActivityItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ActivityItem message, length delimited. Does not implicitly {@link ActivityItem.verify|verify} messages.
     * @param message ActivityItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IActivityItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ActivityItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ActivityItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ActivityItem;

    /**
     * Decodes an ActivityItem message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ActivityItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ActivityItem;

    /**
     * Verifies an ActivityItem message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ActivityItem message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ActivityItem
     */
    public static fromObject(object: { [k: string]: any }): ActivityItem;

    /**
     * Creates a plain object from an ActivityItem message. Also converts values to other types if specified.
     * @param message ActivityItem
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ActivityItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ActivityItem to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GetActivityProgressRsp. */
export interface IGetActivityProgressRsp {

    /** GetActivityProgressRsp errCode */
    errCode?: (number|null);

    /** GetActivityProgressRsp errMsg */
    errMsg?: (string|null);

    /** GetActivityProgressRsp activityItems */
    activityItems?: (IActivityItem[]|null);
}

/** Represents a GetActivityProgressRsp. */
export class GetActivityProgressRsp implements IGetActivityProgressRsp {

    /**
     * Constructs a new GetActivityProgressRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetActivityProgressRsp);

    /** GetActivityProgressRsp errCode. */
    public errCode: number;

    /** GetActivityProgressRsp errMsg. */
    public errMsg: string;

    /** GetActivityProgressRsp activityItems. */
    public activityItems: IActivityItem[];

    /**
     * Creates a new GetActivityProgressRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetActivityProgressRsp instance
     */
    public static create(properties?: IGetActivityProgressRsp): GetActivityProgressRsp;

    /**
     * Encodes the specified GetActivityProgressRsp message. Does not implicitly {@link GetActivityProgressRsp.verify|verify} messages.
     * @param message GetActivityProgressRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetActivityProgressRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetActivityProgressRsp message, length delimited. Does not implicitly {@link GetActivityProgressRsp.verify|verify} messages.
     * @param message GetActivityProgressRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetActivityProgressRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetActivityProgressRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetActivityProgressRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetActivityProgressRsp;

    /**
     * Decodes a GetActivityProgressRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetActivityProgressRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetActivityProgressRsp;

    /**
     * Verifies a GetActivityProgressRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetActivityProgressRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetActivityProgressRsp
     */
    public static fromObject(object: { [k: string]: any }): GetActivityProgressRsp;

    /**
     * Creates a plain object from a GetActivityProgressRsp message. Also converts values to other types if specified.
     * @param message GetActivityProgressRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetActivityProgressRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetActivityProgressRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GetActivityAwardReq. */
export interface IGetActivityAwardReq {

    /** GetActivityAwardReq progIds */
    progIds?: (string|null);

    /** GetActivityAwardReq uid */
    uid?: (number|Long|null);

    /** GetActivityAwardReq type */
    type?: (number|null);

    /** GetActivityAwardReq double */
    double?: (number|null);
}

/** Represents a GetActivityAwardReq. */
export class GetActivityAwardReq implements IGetActivityAwardReq {

    /**
     * Constructs a new GetActivityAwardReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetActivityAwardReq);

    /** GetActivityAwardReq progIds. */
    public progIds: string;

    /** GetActivityAwardReq uid. */
    public uid: (number|Long);

    /** GetActivityAwardReq type. */
    public type: number;

    /** GetActivityAwardReq double. */
    public double: number;

    /**
     * Creates a new GetActivityAwardReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetActivityAwardReq instance
     */
    public static create(properties?: IGetActivityAwardReq): GetActivityAwardReq;

    /**
     * Encodes the specified GetActivityAwardReq message. Does not implicitly {@link GetActivityAwardReq.verify|verify} messages.
     * @param message GetActivityAwardReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetActivityAwardReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetActivityAwardReq message, length delimited. Does not implicitly {@link GetActivityAwardReq.verify|verify} messages.
     * @param message GetActivityAwardReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetActivityAwardReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetActivityAwardReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetActivityAwardReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetActivityAwardReq;

    /**
     * Decodes a GetActivityAwardReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetActivityAwardReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetActivityAwardReq;

    /**
     * Verifies a GetActivityAwardReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetActivityAwardReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetActivityAwardReq
     */
    public static fromObject(object: { [k: string]: any }): GetActivityAwardReq;

    /**
     * Creates a plain object from a GetActivityAwardReq message. Also converts values to other types if specified.
     * @param message GetActivityAwardReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetActivityAwardReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetActivityAwardReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GetActivityAwardRsp. */
export interface IGetActivityAwardRsp {

    /** GetActivityAwardRsp errCode */
    errCode?: (number|null);

    /** GetActivityAwardRsp errMsg */
    errMsg?: (string|null);

    /** GetActivityAwardRsp awards */
    awards?: (IAwardItem[]|null);
}

/** Represents a GetActivityAwardRsp. */
export class GetActivityAwardRsp implements IGetActivityAwardRsp {

    /**
     * Constructs a new GetActivityAwardRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetActivityAwardRsp);

    /** GetActivityAwardRsp errCode. */
    public errCode: number;

    /** GetActivityAwardRsp errMsg. */
    public errMsg: string;

    /** GetActivityAwardRsp awards. */
    public awards: IAwardItem[];

    /**
     * Creates a new GetActivityAwardRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetActivityAwardRsp instance
     */
    public static create(properties?: IGetActivityAwardRsp): GetActivityAwardRsp;

    /**
     * Encodes the specified GetActivityAwardRsp message. Does not implicitly {@link GetActivityAwardRsp.verify|verify} messages.
     * @param message GetActivityAwardRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetActivityAwardRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetActivityAwardRsp message, length delimited. Does not implicitly {@link GetActivityAwardRsp.verify|verify} messages.
     * @param message GetActivityAwardRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetActivityAwardRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetActivityAwardRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetActivityAwardRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetActivityAwardRsp;

    /**
     * Decodes a GetActivityAwardRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetActivityAwardRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetActivityAwardRsp;

    /**
     * Verifies a GetActivityAwardRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetActivityAwardRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetActivityAwardRsp
     */
    public static fromObject(object: { [k: string]: any }): GetActivityAwardRsp;

    /**
     * Creates a plain object from a GetActivityAwardRsp message. Also converts values to other types if specified.
     * @param message GetActivityAwardRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetActivityAwardRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetActivityAwardRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an UptBcsAdStateReq. */
export interface IUptBcsAdStateReq {

    /** UptBcsAdStateReq uid */
    uid?: (number|Long|null);

    /** UptBcsAdStateReq state */
    state?: (number|null);
}

/** Represents an UptBcsAdStateReq. */
export class UptBcsAdStateReq implements IUptBcsAdStateReq {

    /**
     * Constructs a new UptBcsAdStateReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUptBcsAdStateReq);

    /** UptBcsAdStateReq uid. */
    public uid: (number|Long);

    /** UptBcsAdStateReq state. */
    public state: number;

    /**
     * Creates a new UptBcsAdStateReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UptBcsAdStateReq instance
     */
    public static create(properties?: IUptBcsAdStateReq): UptBcsAdStateReq;

    /**
     * Encodes the specified UptBcsAdStateReq message. Does not implicitly {@link UptBcsAdStateReq.verify|verify} messages.
     * @param message UptBcsAdStateReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUptBcsAdStateReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UptBcsAdStateReq message, length delimited. Does not implicitly {@link UptBcsAdStateReq.verify|verify} messages.
     * @param message UptBcsAdStateReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUptBcsAdStateReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UptBcsAdStateReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UptBcsAdStateReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UptBcsAdStateReq;

    /**
     * Decodes an UptBcsAdStateReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UptBcsAdStateReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UptBcsAdStateReq;

    /**
     * Verifies an UptBcsAdStateReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an UptBcsAdStateReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UptBcsAdStateReq
     */
    public static fromObject(object: { [k: string]: any }): UptBcsAdStateReq;

    /**
     * Creates a plain object from an UptBcsAdStateReq message. Also converts values to other types if specified.
     * @param message UptBcsAdStateReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UptBcsAdStateReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UptBcsAdStateReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an UptBcsAdStateRsp. */
export interface IUptBcsAdStateRsp {

    /** UptBcsAdStateRsp errCode */
    errCode?: (number|null);

    /** UptBcsAdStateRsp errMsg */
    errMsg?: (string|null);

    /** UptBcsAdStateRsp service */
    service?: (string|null);

    /** UptBcsAdStateRsp orderId */
    orderId?: (string|null);
}

/** Represents an UptBcsAdStateRsp. */
export class UptBcsAdStateRsp implements IUptBcsAdStateRsp {

    /**
     * Constructs a new UptBcsAdStateRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUptBcsAdStateRsp);

    /** UptBcsAdStateRsp errCode. */
    public errCode: number;

    /** UptBcsAdStateRsp errMsg. */
    public errMsg: string;

    /** UptBcsAdStateRsp service. */
    public service: string;

    /** UptBcsAdStateRsp orderId. */
    public orderId: string;

    /**
     * Creates a new UptBcsAdStateRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UptBcsAdStateRsp instance
     */
    public static create(properties?: IUptBcsAdStateRsp): UptBcsAdStateRsp;

    /**
     * Encodes the specified UptBcsAdStateRsp message. Does not implicitly {@link UptBcsAdStateRsp.verify|verify} messages.
     * @param message UptBcsAdStateRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUptBcsAdStateRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UptBcsAdStateRsp message, length delimited. Does not implicitly {@link UptBcsAdStateRsp.verify|verify} messages.
     * @param message UptBcsAdStateRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUptBcsAdStateRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UptBcsAdStateRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UptBcsAdStateRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UptBcsAdStateRsp;

    /**
     * Decodes an UptBcsAdStateRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UptBcsAdStateRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UptBcsAdStateRsp;

    /**
     * Verifies an UptBcsAdStateRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an UptBcsAdStateRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UptBcsAdStateRsp
     */
    public static fromObject(object: { [k: string]: any }): UptBcsAdStateRsp;

    /**
     * Creates a plain object from an UptBcsAdStateRsp message. Also converts values to other types if specified.
     * @param message UptBcsAdStateRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UptBcsAdStateRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UptBcsAdStateRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an ActivityHeadFrameNot. */
export interface IActivityHeadFrameNot {

    /** ActivityHeadFrameNot params */
    params?: ({ [k: string]: string }|null);
}

/** Represents an ActivityHeadFrameNot. */
export class ActivityHeadFrameNot implements IActivityHeadFrameNot {

    /**
     * Constructs a new ActivityHeadFrameNot.
     * @param [properties] Properties to set
     */
    constructor(properties?: IActivityHeadFrameNot);

    /** ActivityHeadFrameNot params. */
    public params: { [k: string]: string };

    /**
     * Creates a new ActivityHeadFrameNot instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ActivityHeadFrameNot instance
     */
    public static create(properties?: IActivityHeadFrameNot): ActivityHeadFrameNot;

    /**
     * Encodes the specified ActivityHeadFrameNot message. Does not implicitly {@link ActivityHeadFrameNot.verify|verify} messages.
     * @param message ActivityHeadFrameNot message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IActivityHeadFrameNot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ActivityHeadFrameNot message, length delimited. Does not implicitly {@link ActivityHeadFrameNot.verify|verify} messages.
     * @param message ActivityHeadFrameNot message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IActivityHeadFrameNot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ActivityHeadFrameNot message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ActivityHeadFrameNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ActivityHeadFrameNot;

    /**
     * Decodes an ActivityHeadFrameNot message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ActivityHeadFrameNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ActivityHeadFrameNot;

    /**
     * Verifies an ActivityHeadFrameNot message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ActivityHeadFrameNot message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ActivityHeadFrameNot
     */
    public static fromObject(object: { [k: string]: any }): ActivityHeadFrameNot;

    /**
     * Creates a plain object from an ActivityHeadFrameNot message. Also converts values to other types if specified.
     * @param message ActivityHeadFrameNot
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ActivityHeadFrameNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ActivityHeadFrameNot to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an ActivityAwardNot. */
export interface IActivityAwardNot {

    /** ActivityAwardNot haveRewards */
    haveRewards?: (boolean|null);

    /** ActivityAwardNot style */
    style?: (number|null);

    /** ActivityAwardNot desc */
    desc?: (string|null);

    /** ActivityAwardNot align */
    align?: (number|null);
}

/** Represents an ActivityAwardNot. */
export class ActivityAwardNot implements IActivityAwardNot {

    /**
     * Constructs a new ActivityAwardNot.
     * @param [properties] Properties to set
     */
    constructor(properties?: IActivityAwardNot);

    /** ActivityAwardNot haveRewards. */
    public haveRewards: boolean;

    /** ActivityAwardNot style. */
    public style: number;

    /** ActivityAwardNot desc. */
    public desc: string;

    /** ActivityAwardNot align. */
    public align: number;

    /**
     * Creates a new ActivityAwardNot instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ActivityAwardNot instance
     */
    public static create(properties?: IActivityAwardNot): ActivityAwardNot;

    /**
     * Encodes the specified ActivityAwardNot message. Does not implicitly {@link ActivityAwardNot.verify|verify} messages.
     * @param message ActivityAwardNot message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IActivityAwardNot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ActivityAwardNot message, length delimited. Does not implicitly {@link ActivityAwardNot.verify|verify} messages.
     * @param message ActivityAwardNot message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IActivityAwardNot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ActivityAwardNot message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ActivityAwardNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ActivityAwardNot;

    /**
     * Decodes an ActivityAwardNot message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ActivityAwardNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ActivityAwardNot;

    /**
     * Verifies an ActivityAwardNot message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ActivityAwardNot message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ActivityAwardNot
     */
    public static fromObject(object: { [k: string]: any }): ActivityAwardNot;

    /**
     * Creates a plain object from an ActivityAwardNot message. Also converts values to other types if specified.
     * @param message ActivityAwardNot
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ActivityAwardNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ActivityAwardNot to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a LevelExp. */
export interface ILevelExp {

    /** LevelExp prevLevel */
    prevLevel?: (number|null);

    /** LevelExp curLevel */
    curLevel?: (number|null);

    /** LevelExp incExp */
    incExp?: (number|null);

    /** LevelExp prevLevelExp */
    prevLevelExp?: (number|null);

    /** LevelExp prevLeftExp */
    prevLeftExp?: (number|null);

    /** LevelExp levelExp */
    levelExp?: (number|null);

    /** LevelExp leftExp */
    leftExp?: (number|null);

    /** LevelExp money */
    money?: (number|null);
}

/** Represents a LevelExp. */
export class LevelExp implements ILevelExp {

    /**
     * Constructs a new LevelExp.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILevelExp);

    /** LevelExp prevLevel. */
    public prevLevel: number;

    /** LevelExp curLevel. */
    public curLevel: number;

    /** LevelExp incExp. */
    public incExp: number;

    /** LevelExp prevLevelExp. */
    public prevLevelExp: number;

    /** LevelExp prevLeftExp. */
    public prevLeftExp: number;

    /** LevelExp levelExp. */
    public levelExp: number;

    /** LevelExp leftExp. */
    public leftExp: number;

    /** LevelExp money. */
    public money: number;

    /**
     * Creates a new LevelExp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LevelExp instance
     */
    public static create(properties?: ILevelExp): LevelExp;

    /**
     * Encodes the specified LevelExp message. Does not implicitly {@link LevelExp.verify|verify} messages.
     * @param message LevelExp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILevelExp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LevelExp message, length delimited. Does not implicitly {@link LevelExp.verify|verify} messages.
     * @param message LevelExp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILevelExp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LevelExp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LevelExp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LevelExp;

    /**
     * Decodes a LevelExp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LevelExp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LevelExp;

    /**
     * Verifies a LevelExp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LevelExp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LevelExp
     */
    public static fromObject(object: { [k: string]: any }): LevelExp;

    /**
     * Creates a plain object from a LevelExp message. Also converts values to other types if specified.
     * @param message LevelExp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LevelExp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LevelExp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
