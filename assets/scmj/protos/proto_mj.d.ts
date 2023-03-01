import * as $protobuf from "protobufjs";
/** Represents a Dzmj */
export class Dzmj extends $protobuf.rpc.Service {

    /**
     * Constructs a new Dzmj service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new Dzmj service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Dzmj;

    /**
     * Calls Operate.
     * @param request OperateAck message or plain object
     * @param callback Node-style callback called with the error, if any, and Empty
     */
    public operate(request: IOperateAck, callback: Dzmj.OperateCallback): void;

    /**
     * Calls Operate.
     * @param request OperateAck message or plain object
     * @returns Promise
     */
    public operate(request: IOperateAck): Promise<Empty>;

    /**
     * Calls Auto.
     * @param request AutoReq message or plain object
     * @param callback Node-style callback called with the error, if any, and Empty
     */
    public auto(request: IAutoReq, callback: Dzmj.AutoCallback): void;

    /**
     * Calls Auto.
     * @param request AutoReq message or plain object
     * @returns Promise
     */
    public auto(request: IAutoReq): Promise<Empty>;

    /**
     * Calls CompleteData.
     * @param request CompleteReq message or plain object
     * @param callback Node-style callback called with the error, if any, and CompleteDataNot
     */
    public completeData(request: ICompleteReq, callback: Dzmj.CompleteDataCallback): void;

    /**
     * Calls CompleteData.
     * @param request CompleteReq message or plain object
     * @returns Promise
     */
    public completeData(request: ICompleteReq): Promise<CompleteDataNot>;
}

export namespace Dzmj {

    /**
     * Callback as used by {@link Dzmj#operate}.
     * @param error Error, if any
     * @param [response] Empty
     */
    type OperateCallback = (error: (Error | null), response?: Empty) => void;

    /**
     * Callback as used by {@link Dzmj#auto}.
     * @param error Error, if any
     * @param [response] Empty
     */
    type AutoCallback = (error: (Error | null), response?: Empty) => void;

    /**
     * Callback as used by {@link Dzmj#completeData}.
     * @param error Error, if any
     * @param [response] CompleteDataNot
     */
    type CompleteDataCallback = (error: (Error | null), response?: CompleteDataNot) => void;
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
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): Empty;

    /**
     * Decodes an Empty message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Empty
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): Empty;

    /**
     * Verifies an Empty message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

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

/** Properties of a UserItem. */
export interface IUserItem {

    /** UserItem uid */
    uid?: (number | Long | null);

    /** UserItem nickname */
    nickname?: (string | null);

    /** UserItem score */
    score?: (number | Long | null);
}

/** Represents a UserItem. */
export class UserItem implements IUserItem {

    /**
     * Constructs a new UserItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserItem);

    /** UserItem uid. */
    public uid: (number | Long);

    /** UserItem nickname. */
    public nickname: string;

    /** UserItem score. */
    public score: (number | Long);

    /**
     * Creates a new UserItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserItem instance
     */
    public static create(properties?: IUserItem): UserItem;

    /**
     * Encodes the specified UserItem message. Does not implicitly {@link UserItem.verify|verify} messages.
     * @param message UserItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserItem message, length delimited. Does not implicitly {@link UserItem.verify|verify} messages.
     * @param message UserItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): UserItem;

    /**
     * Decodes a UserItem message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): UserItem;

    /**
     * Verifies a UserItem message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a UserItem message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserItem
     */
    public static fromObject(object: { [k: string]: any }): UserItem;

    /**
     * Creates a plain object from a UserItem message. Also converts values to other types if specified.
     * @param message UserItem
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UserItem to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an EnterNotiItem. */
export interface IEnterNotiItem {

    /** EnterNotiItem chairId */
    chairId?: (number | null);

    /** EnterNotiItem ready */
    ready?: (number | null);

    /** EnterNotiItem data */
    data?: (IUserItem | null);
}

/** Represents an EnterNotiItem. */
export class EnterNotiItem implements IEnterNotiItem {

    /**
     * Constructs a new EnterNotiItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEnterNotiItem);

    /** EnterNotiItem chairId. */
    public chairId: number;

    /** EnterNotiItem ready. */
    public ready: number;

    /** EnterNotiItem data. */
    public data?: (IUserItem | null);

    /**
     * Creates a new EnterNotiItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EnterNotiItem instance
     */
    public static create(properties?: IEnterNotiItem): EnterNotiItem;

    /**
     * Encodes the specified EnterNotiItem message. Does not implicitly {@link EnterNotiItem.verify|verify} messages.
     * @param message EnterNotiItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEnterNotiItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EnterNotiItem message, length delimited. Does not implicitly {@link EnterNotiItem.verify|verify} messages.
     * @param message EnterNotiItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEnterNotiItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EnterNotiItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EnterNotiItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): EnterNotiItem;

    /**
     * Decodes an EnterNotiItem message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EnterNotiItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): EnterNotiItem;

    /**
     * Verifies an EnterNotiItem message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates an EnterNotiItem message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EnterNotiItem
     */
    public static fromObject(object: { [k: string]: any }): EnterNotiItem;

    /**
     * Creates a plain object from an EnterNotiItem message. Also converts values to other types if specified.
     * @param message EnterNotiItem
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EnterNotiItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EnterNotiItem to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an EnterNoti. */
export interface IEnterNoti {

    /** EnterNoti item */
    item?: (IEnterNotiItem | null);
}

/** Represents an EnterNoti. */
export class EnterNoti implements IEnterNoti {

    /**
     * Constructs a new EnterNoti.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEnterNoti);

    /** EnterNoti item. */
    public item?: (IEnterNotiItem | null);

    /**
     * Creates a new EnterNoti instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EnterNoti instance
     */
    public static create(properties?: IEnterNoti): EnterNoti;

    /**
     * Encodes the specified EnterNoti message. Does not implicitly {@link EnterNoti.verify|verify} messages.
     * @param message EnterNoti message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEnterNoti, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EnterNoti message, length delimited. Does not implicitly {@link EnterNoti.verify|verify} messages.
     * @param message EnterNoti message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEnterNoti, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EnterNoti message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EnterNoti
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): EnterNoti;

    /**
     * Decodes an EnterNoti message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EnterNoti
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): EnterNoti;

    /**
     * Verifies an EnterNoti message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates an EnterNoti message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EnterNoti
     */
    public static fromObject(object: { [k: string]: any }): EnterNoti;

    /**
     * Creates a plain object from an EnterNoti message. Also converts values to other types if specified.
     * @param message EnterNoti
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EnterNoti, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EnterNoti to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an EnterAck. */
export interface IEnterAck {

    /** EnterAck ret */
    ret?: (number | null);

    /** EnterAck items */
    items?: (IEnterNotiItem[] | null);
}

/** Represents an EnterAck. */
export class EnterAck implements IEnterAck {

    /**
     * Constructs a new EnterAck.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEnterAck);

    /** EnterAck ret. */
    public ret: number;

    /** EnterAck items. */
    public items: IEnterNotiItem[];

    /**
     * Creates a new EnterAck instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EnterAck instance
     */
    public static create(properties?: IEnterAck): EnterAck;

    /**
     * Encodes the specified EnterAck message. Does not implicitly {@link EnterAck.verify|verify} messages.
     * @param message EnterAck message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEnterAck, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EnterAck message, length delimited. Does not implicitly {@link EnterAck.verify|verify} messages.
     * @param message EnterAck message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEnterAck, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EnterAck message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EnterAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): EnterAck;

    /**
     * Decodes an EnterAck message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EnterAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): EnterAck;

    /**
     * Verifies an EnterAck message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates an EnterAck message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EnterAck
     */
    public static fromObject(object: { [k: string]: any }): EnterAck;

    /**
     * Creates a plain object from an EnterAck message. Also converts values to other types if specified.
     * @param message EnterAck
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EnterAck, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EnterAck to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CountdownNot. */
export interface ICountdownNot {

    /** CountdownNot chairID */
    chairID?: (number | null);

    /** CountdownNot seconds */
    seconds?: (number | null);
}

/** Represents a CountdownNot. */
export class CountdownNot implements ICountdownNot {

    /**
     * Constructs a new CountdownNot.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICountdownNot);

    /** CountdownNot chairID. */
    public chairID: number;

    /** CountdownNot seconds. */
    public seconds: number;

    /**
     * Creates a new CountdownNot instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CountdownNot instance
     */
    public static create(properties?: ICountdownNot): CountdownNot;

    /**
     * Encodes the specified CountdownNot message. Does not implicitly {@link CountdownNot.verify|verify} messages.
     * @param message CountdownNot message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICountdownNot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CountdownNot message, length delimited. Does not implicitly {@link CountdownNot.verify|verify} messages.
     * @param message CountdownNot message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICountdownNot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CountdownNot message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CountdownNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): CountdownNot;

    /**
     * Decodes a CountdownNot message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CountdownNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): CountdownNot;

    /**
     * Verifies a CountdownNot message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a CountdownNot message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CountdownNot
     */
    public static fromObject(object: { [k: string]: any }): CountdownNot;

    /**
     * Creates a plain object from a CountdownNot message. Also converts values to other types if specified.
     * @param message CountdownNot
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CountdownNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CountdownNot to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an AutoReq. */
export interface IAutoReq {

    /** AutoReq autoFlag */
    autoFlag?: (number | null);

    /** AutoReq autoType */
    autoType?: (number | null);
}

/** Represents an AutoReq. */
export class AutoReq implements IAutoReq {

    /**
     * Constructs a new AutoReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAutoReq);

    /** AutoReq autoFlag. */
    public autoFlag: number;

    /** AutoReq autoType. */
    public autoType: number;

    /**
     * Creates a new AutoReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AutoReq instance
     */
    public static create(properties?: IAutoReq): AutoReq;

    /**
     * Encodes the specified AutoReq message. Does not implicitly {@link AutoReq.verify|verify} messages.
     * @param message AutoReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAutoReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AutoReq message, length delimited. Does not implicitly {@link AutoReq.verify|verify} messages.
     * @param message AutoReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAutoReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AutoReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AutoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): AutoReq;

    /**
     * Decodes an AutoReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AutoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): AutoReq;

    /**
     * Verifies an AutoReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates an AutoReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AutoReq
     */
    public static fromObject(object: { [k: string]: any }): AutoReq;

    /**
     * Creates a plain object from an AutoReq message. Also converts values to other types if specified.
     * @param message AutoReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AutoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AutoReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an AutoNot. */
export interface IAutoNot {

    /** AutoNot chairID */
    chairID?: (number | null);

    /** AutoNot autoFlag */
    autoFlag?: (number | null);

    /** AutoNot autoType */
    autoType?: (number | null);
}

/** Represents an AutoNot. */
export class AutoNot implements IAutoNot {

    /**
     * Constructs a new AutoNot.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAutoNot);

    /** AutoNot chairID. */
    public chairID: number;

    /** AutoNot autoFlag. */
    public autoFlag: number;

    /** AutoNot autoType. */
    public autoType: number;

    /**
     * Creates a new AutoNot instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AutoNot instance
     */
    public static create(properties?: IAutoNot): AutoNot;

    /**
     * Encodes the specified AutoNot message. Does not implicitly {@link AutoNot.verify|verify} messages.
     * @param message AutoNot message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAutoNot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AutoNot message, length delimited. Does not implicitly {@link AutoNot.verify|verify} messages.
     * @param message AutoNot message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAutoNot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AutoNot message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AutoNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): AutoNot;

    /**
     * Decodes an AutoNot message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AutoNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): AutoNot;

    /**
     * Verifies an AutoNot message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates an AutoNot message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AutoNot
     */
    public static fromObject(object: { [k: string]: any }): AutoNot;

    /**
     * Creates a plain object from an AutoNot message. Also converts values to other types if specified.
     * @param message AutoNot
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AutoNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AutoNot to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a BeginGameNot. */
export interface IBeginGameNot {

    /** BeginGameNot totalCardsNum */
    totalCardsNum?: (number | null);
}

/** Represents a BeginGameNot. */
export class BeginGameNot implements IBeginGameNot {

    /**
     * Constructs a new BeginGameNot.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBeginGameNot);

    /** BeginGameNot totalCardsNum. */
    public totalCardsNum: number;

    /**
     * Creates a new BeginGameNot instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BeginGameNot instance
     */
    public static create(properties?: IBeginGameNot): BeginGameNot;

    /**
     * Encodes the specified BeginGameNot message. Does not implicitly {@link BeginGameNot.verify|verify} messages.
     * @param message BeginGameNot message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBeginGameNot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BeginGameNot message, length delimited. Does not implicitly {@link BeginGameNot.verify|verify} messages.
     * @param message BeginGameNot message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBeginGameNot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BeginGameNot message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BeginGameNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): BeginGameNot;

    /**
     * Decodes a BeginGameNot message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BeginGameNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): BeginGameNot;

    /**
     * Verifies a BeginGameNot message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a BeginGameNot message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BeginGameNot
     */
    public static fromObject(object: { [k: string]: any }): BeginGameNot;

    /**
     * Creates a plain object from a BeginGameNot message. Also converts values to other types if specified.
     * @param message BeginGameNot
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BeginGameNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BeginGameNot to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SetDealerNot. */
export interface ISetDealerNot {

    /** SetDealerNot dices */
    dices?: (number[] | null);

    /** SetDealerNot uid */
    uid?: (number | Long | null);
}

/** Represents a SetDealerNot. */
export class SetDealerNot implements ISetDealerNot {

    /**
     * Constructs a new SetDealerNot.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISetDealerNot);

    /** SetDealerNot dices. */
    public dices: number[];

    /** SetDealerNot uid. */
    public uid: (number | Long);

    /**
     * Creates a new SetDealerNot instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SetDealerNot instance
     */
    public static create(properties?: ISetDealerNot): SetDealerNot;

    /**
     * Encodes the specified SetDealerNot message. Does not implicitly {@link SetDealerNot.verify|verify} messages.
     * @param message SetDealerNot message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISetDealerNot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SetDealerNot message, length delimited. Does not implicitly {@link SetDealerNot.verify|verify} messages.
     * @param message SetDealerNot message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISetDealerNot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SetDealerNot message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SetDealerNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): SetDealerNot;

    /**
     * Decodes a SetDealerNot message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SetDealerNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): SetDealerNot;

    /**
     * Verifies a SetDealerNot message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a SetDealerNot message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SetDealerNot
     */
    public static fromObject(object: { [k: string]: any }): SetDealerNot;

    /**
     * Creates a plain object from a SetDealerNot message. Also converts values to other types if specified.
     * @param message SetDealerNot
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SetDealerNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SetDealerNot to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a HandCardsNot. */
export interface IHandCardsNot {

    /** HandCardsNot leftCardsNum */
    leftCardsNum?: (number | null);

    /** HandCardsNot handCards */
    handCards?: (number[] | null);
}

/** Represents a HandCardsNot. */
export class HandCardsNot implements IHandCardsNot {

    /**
     * Constructs a new HandCardsNot.
     * @param [properties] Properties to set
     */
    constructor(properties?: IHandCardsNot);

    /** HandCardsNot leftCardsNum. */
    public leftCardsNum: number;

    /** HandCardsNot handCards. */
    public handCards: number[];

    /**
     * Creates a new HandCardsNot instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HandCardsNot instance
     */
    public static create(properties?: IHandCardsNot): HandCardsNot;

    /**
     * Encodes the specified HandCardsNot message. Does not implicitly {@link HandCardsNot.verify|verify} messages.
     * @param message HandCardsNot message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IHandCardsNot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified HandCardsNot message, length delimited. Does not implicitly {@link HandCardsNot.verify|verify} messages.
     * @param message HandCardsNot message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IHandCardsNot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HandCardsNot message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns HandCardsNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): HandCardsNot;

    /**
     * Decodes a HandCardsNot message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns HandCardsNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): HandCardsNot;

    /**
     * Verifies a HandCardsNot message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a HandCardsNot message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns HandCardsNot
     */
    public static fromObject(object: { [k: string]: any }): HandCardsNot;

    /**
     * Creates a plain object from a HandCardsNot message. Also converts values to other types if specified.
     * @param message HandCardsNot
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: HandCardsNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this HandCardsNot to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an OperateWrapper. */
export interface IOperateWrapper {

    /** OperateWrapper serial */
    serial?: (number | null);

    /** OperateWrapper opcode */
    opcode?: (number | null);

    /** OperateWrapper card */
    card?: (number | null);

    /** OperateWrapper cardsInfo */
    cardsInfo?: (number[] | null);
}

/** Represents an OperateWrapper. */
export class OperateWrapper implements IOperateWrapper {

    /**
     * Constructs a new OperateWrapper.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOperateWrapper);

    /** OperateWrapper serial. */
    public serial: number;

    /** OperateWrapper opcode. */
    public opcode: number;

    /** OperateWrapper card. */
    public card: number;

    /** OperateWrapper cardsInfo. */
    public cardsInfo: number[];

    /**
     * Creates a new OperateWrapper instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OperateWrapper instance
     */
    public static create(properties?: IOperateWrapper): OperateWrapper;

    /**
     * Encodes the specified OperateWrapper message. Does not implicitly {@link OperateWrapper.verify|verify} messages.
     * @param message OperateWrapper message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOperateWrapper, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified OperateWrapper message, length delimited. Does not implicitly {@link OperateWrapper.verify|verify} messages.
     * @param message OperateWrapper message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IOperateWrapper, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OperateWrapper message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OperateWrapper
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): OperateWrapper;

    /**
     * Decodes an OperateWrapper message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns OperateWrapper
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): OperateWrapper;

    /**
     * Verifies an OperateWrapper message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates an OperateWrapper message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns OperateWrapper
     */
    public static fromObject(object: { [k: string]: any }): OperateWrapper;

    /**
     * Creates a plain object from an OperateWrapper message. Also converts values to other types if specified.
     * @param message OperateWrapper
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: OperateWrapper, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this OperateWrapper to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an OperateReq. */
export interface IOperateReq {

    /** OperateReq ops */
    ops?: (IOperateWrapper[] | null);
}

/** Represents an OperateReq. */
export class OperateReq implements IOperateReq {

    /**
     * Constructs a new OperateReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOperateReq);

    /** OperateReq ops. */
    public ops: IOperateWrapper[];

    /**
     * Creates a new OperateReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OperateReq instance
     */
    public static create(properties?: IOperateReq): OperateReq;

    /**
     * Encodes the specified OperateReq message. Does not implicitly {@link OperateReq.verify|verify} messages.
     * @param message OperateReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOperateReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified OperateReq message, length delimited. Does not implicitly {@link OperateReq.verify|verify} messages.
     * @param message OperateReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IOperateReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OperateReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OperateReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): OperateReq;

    /**
     * Decodes an OperateReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns OperateReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): OperateReq;

    /**
     * Verifies an OperateReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates an OperateReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns OperateReq
     */
    public static fromObject(object: { [k: string]: any }): OperateReq;

    /**
     * Creates a plain object from an OperateReq message. Also converts values to other types if specified.
     * @param message OperateReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: OperateReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this OperateReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an OperateAck. */
export interface IOperateAck {

    /** OperateAck serial */
    serial?: (number | null);

    /** OperateAck opCode */
    opCode?: (number | null);

    /** OperateAck cards */
    cards?: (number[] | null);
}

/** Represents an OperateAck. */
export class OperateAck implements IOperateAck {

    /**
     * Constructs a new OperateAck.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOperateAck);

    /** OperateAck serial. */
    public serial: number;

    /** OperateAck opCode. */
    public opCode: number;

    /** OperateAck cards. */
    public cards: number[];

    /**
     * Creates a new OperateAck instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OperateAck instance
     */
    public static create(properties?: IOperateAck): OperateAck;

    /**
     * Encodes the specified OperateAck message. Does not implicitly {@link OperateAck.verify|verify} messages.
     * @param message OperateAck message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOperateAck, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified OperateAck message, length delimited. Does not implicitly {@link OperateAck.verify|verify} messages.
     * @param message OperateAck message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IOperateAck, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OperateAck message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OperateAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): OperateAck;

    /**
     * Decodes an OperateAck message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns OperateAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): OperateAck;

    /**
     * Verifies an OperateAck message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates an OperateAck message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns OperateAck
     */
    public static fromObject(object: { [k: string]: any }): OperateAck;

    /**
     * Creates a plain object from an OperateAck message. Also converts values to other types if specified.
     * @param message OperateAck
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: OperateAck, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this OperateAck to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an OperateOk. */
export interface IOperateOk {
}

/** Represents an OperateOk. */
export class OperateOk implements IOperateOk {

    /**
     * Constructs a new OperateOk.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOperateOk);

    /**
     * Creates a new OperateOk instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OperateOk instance
     */
    public static create(properties?: IOperateOk): OperateOk;

    /**
     * Encodes the specified OperateOk message. Does not implicitly {@link OperateOk.verify|verify} messages.
     * @param message OperateOk message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOperateOk, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified OperateOk message, length delimited. Does not implicitly {@link OperateOk.verify|verify} messages.
     * @param message OperateOk message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IOperateOk, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OperateOk message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OperateOk
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): OperateOk;

    /**
     * Decodes an OperateOk message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns OperateOk
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): OperateOk;

    /**
     * Verifies an OperateOk message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates an OperateOk message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns OperateOk
     */
    public static fromObject(object: { [k: string]: any }): OperateOk;

    /**
     * Creates a plain object from an OperateOk message. Also converts values to other types if specified.
     * @param message OperateOk
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: OperateOk, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this OperateOk to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an OperateNot. */
export interface IOperateNot {

    /** OperateNot chairId */
    chairId?: (number | null);

    /** OperateNot opCode */
    opCode?: (number | null);

    /** OperateNot fromChairId */
    fromChairId?: (number | null);

    /** OperateNot leftCardsNum */
    leftCardsNum?: (number | null);

    /** OperateNot cards */
    cards?: (number[] | null);
}

/** Represents an OperateNot. */
export class OperateNot implements IOperateNot {

    /**
     * Constructs a new OperateNot.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOperateNot);

    /** OperateNot chairId. */
    public chairId: number;

    /** OperateNot opCode. */
    public opCode: number;

    /** OperateNot fromChairId. */
    public fromChairId: number;

    /** OperateNot leftCardsNum. */
    public leftCardsNum: number;

    /** OperateNot cards. */
    public cards: number[];

    /**
     * Creates a new OperateNot instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OperateNot instance
     */
    public static create(properties?: IOperateNot): OperateNot;

    /**
     * Encodes the specified OperateNot message. Does not implicitly {@link OperateNot.verify|verify} messages.
     * @param message OperateNot message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOperateNot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified OperateNot message, length delimited. Does not implicitly {@link OperateNot.verify|verify} messages.
     * @param message OperateNot message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IOperateNot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OperateNot message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OperateNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): OperateNot;

    /**
     * Decodes an OperateNot message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns OperateNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): OperateNot;

    /**
     * Verifies an OperateNot message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates an OperateNot message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns OperateNot
     */
    public static fromObject(object: { [k: string]: any }): OperateNot;

    /**
     * Creates a plain object from an OperateNot message. Also converts values to other types if specified.
     * @param message OperateNot
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: OperateNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this OperateNot to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CardGroup. */
export interface ICardGroup {

    /** CardGroup opCode */
    opCode?: (number | null);

    /** CardGroup fromChair */
    fromChair?: (number | null);

    /** CardGroup cards */
    cards?: (number[] | null);
}

/** Represents a CardGroup. */
export class CardGroup implements ICardGroup {

    /**
     * Constructs a new CardGroup.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICardGroup);

    /** CardGroup opCode. */
    public opCode: number;

    /** CardGroup fromChair. */
    public fromChair: number;

    /** CardGroup cards. */
    public cards: number[];

    /**
     * Creates a new CardGroup instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CardGroup instance
     */
    public static create(properties?: ICardGroup): CardGroup;

    /**
     * Encodes the specified CardGroup message. Does not implicitly {@link CardGroup.verify|verify} messages.
     * @param message CardGroup message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICardGroup, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CardGroup message, length delimited. Does not implicitly {@link CardGroup.verify|verify} messages.
     * @param message CardGroup message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICardGroup, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CardGroup message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CardGroup
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): CardGroup;

    /**
     * Decodes a CardGroup message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CardGroup
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): CardGroup;

    /**
     * Verifies a CardGroup message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a CardGroup message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CardGroup
     */
    public static fromObject(object: { [k: string]: any }): CardGroup;

    /**
     * Creates a plain object from a CardGroup message. Also converts values to other types if specified.
     * @param message CardGroup
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CardGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CardGroup to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ChangeCardNot. */
export interface IChangeCardNot {

    /** ChangeCardNot chairId */
    chairId?: (number | null);

    /** ChangeCardNot currCard */
    currCard?: (number | null);

    /** ChangeCardNot handCards */
    handCards?: (number[] | null);

    /** ChangeCardNot showCards */
    showCards?: (ICardGroup[] | null);

    /** ChangeCardNot displayCards */
    displayCards?: (number[] | null);
}

/** Represents a ChangeCardNot. */
export class ChangeCardNot implements IChangeCardNot {

    /**
     * Constructs a new ChangeCardNot.
     * @param [properties] Properties to set
     */
    constructor(properties?: IChangeCardNot);

    /** ChangeCardNot chairId. */
    public chairId: number;

    /** ChangeCardNot currCard. */
    public currCard: number;

    /** ChangeCardNot handCards. */
    public handCards: number[];

    /** ChangeCardNot showCards. */
    public showCards: ICardGroup[];

    /** ChangeCardNot displayCards. */
    public displayCards: number[];

    /**
     * Creates a new ChangeCardNot instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChangeCardNot instance
     */
    public static create(properties?: IChangeCardNot): ChangeCardNot;

    /**
     * Encodes the specified ChangeCardNot message. Does not implicitly {@link ChangeCardNot.verify|verify} messages.
     * @param message ChangeCardNot message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IChangeCardNot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ChangeCardNot message, length delimited. Does not implicitly {@link ChangeCardNot.verify|verify} messages.
     * @param message ChangeCardNot message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IChangeCardNot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChangeCardNot message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ChangeCardNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): ChangeCardNot;

    /**
     * Decodes a ChangeCardNot message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ChangeCardNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): ChangeCardNot;

    /**
     * Verifies a ChangeCardNot message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a ChangeCardNot message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ChangeCardNot
     */
    public static fromObject(object: { [k: string]: any }): ChangeCardNot;

    /**
     * Creates a plain object from a ChangeCardNot message. Also converts values to other types if specified.
     * @param message ChangeCardNot
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ChangeCardNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ChangeCardNot to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Score. */
export interface IScore {

    /** Score chairID */
    chairID?: (number | null);

    /** Score score */
    score?: (number | Long | null);
}

/** Represents a Score. */
export class Score implements IScore {

    /**
     * Constructs a new Score.
     * @param [properties] Properties to set
     */
    constructor(properties?: IScore);

    /** Score chairID. */
    public chairID: number;

    /** Score score. */
    public score: (number | Long);

    /**
     * Creates a new Score instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Score instance
     */
    public static create(properties?: IScore): Score;

    /**
     * Encodes the specified Score message. Does not implicitly {@link Score.verify|verify} messages.
     * @param message Score message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IScore, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Score message, length delimited. Does not implicitly {@link Score.verify|verify} messages.
     * @param message Score message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IScore, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Score message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Score
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): Score;

    /**
     * Decodes a Score message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Score
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): Score;

    /**
     * Verifies a Score message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a Score message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Score
     */
    public static fromObject(object: { [k: string]: any }): Score;

    /**
     * Creates a plain object from a Score message. Also converts values to other types if specified.
     * @param message Score
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Score, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Score to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a FanData. */
export interface IFanData {

    /** FanData fanType */
    fanType?: (number | null);

    /** FanData fanScore */
    fanScore?: (number | null);
}

/** Represents a FanData. */
export class FanData implements IFanData {

    /**
     * Constructs a new FanData.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFanData);

    /** FanData fanType. */
    public fanType: number;

    /** FanData fanScore. */
    public fanScore: number;

    /**
     * Creates a new FanData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FanData instance
     */
    public static create(properties?: IFanData): FanData;

    /**
     * Encodes the specified FanData message. Does not implicitly {@link FanData.verify|verify} messages.
     * @param message FanData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFanData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FanData message, length delimited. Does not implicitly {@link FanData.verify|verify} messages.
     * @param message FanData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFanData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FanData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FanData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): FanData;

    /**
     * Decodes a FanData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FanData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): FanData;

    /**
     * Verifies a FanData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a FanData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FanData
     */
    public static fromObject(object: { [k: string]: any }): FanData;

    /**
     * Creates a plain object from a FanData message. Also converts values to other types if specified.
     * @param message FanData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FanData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FanData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a FanScore. */
export interface IFanScore {

    /** FanScore receiveChairID */
    receiveChairID?: (number | null);

    /** FanScore fanType */
    fanType?: (number | null);

    /** FanScore sendChairIDs */
    sendChairIDs?: (IScore[] | null);
}

/** Represents a FanScore. */
export class FanScore implements IFanScore {

    /**
     * Constructs a new FanScore.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFanScore);

    /** FanScore receiveChairID. */
    public receiveChairID: number;

    /** FanScore fanType. */
    public fanType: number;

    /** FanScore sendChairIDs. */
    public sendChairIDs: IScore[];

    /**
     * Creates a new FanScore instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FanScore instance
     */
    public static create(properties?: IFanScore): FanScore;

    /**
     * Encodes the specified FanScore message. Does not implicitly {@link FanScore.verify|verify} messages.
     * @param message FanScore message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFanScore, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FanScore message, length delimited. Does not implicitly {@link FanScore.verify|verify} messages.
     * @param message FanScore message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFanScore, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FanScore message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FanScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): FanScore;

    /**
     * Decodes a FanScore message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FanScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): FanScore;

    /**
     * Verifies a FanScore message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a FanScore message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FanScore
     */
    public static fromObject(object: { [k: string]: any }): FanScore;

    /**
     * Creates a plain object from a FanScore message. Also converts values to other types if specified.
     * @param message FanScore
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FanScore, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FanScore to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GameResult. */
export interface IGameResult {

    /** GameResult chairId */
    chairId?: (number | null);

    /** GameResult score */
    score?: (number | Long | null);
}

/** Represents a GameResult. */
export class GameResult implements IGameResult {

    /**
     * Constructs a new GameResult.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGameResult);

    /** GameResult chairId. */
    public chairId: number;

    /** GameResult score. */
    public score: (number | Long);

    /**
     * Creates a new GameResult instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameResult instance
     */
    public static create(properties?: IGameResult): GameResult;

    /**
     * Encodes the specified GameResult message. Does not implicitly {@link GameResult.verify|verify} messages.
     * @param message GameResult message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGameResult, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GameResult message, length delimited. Does not implicitly {@link GameResult.verify|verify} messages.
     * @param message GameResult message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGameResult, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameResult message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GameResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): GameResult;

    /**
     * Decodes a GameResult message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GameResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): GameResult;

    /**
     * Verifies a GameResult message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a GameResult message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GameResult
     */
    public static fromObject(object: { [k: string]: any }): GameResult;

    /**
     * Creates a plain object from a GameResult message. Also converts values to other types if specified.
     * @param message GameResult
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GameResult to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GameResultNot. */
export interface IGameResultNot {

    /** GameResultNot huChair */
    huChair?: (number | null);

    /** GameResultNot huType */
    huType?: (number | null);

    /** GameResultNot huFrom */
    huFrom?: (number | null);

    /** GameResultNot score */
    score?: (IFanScore[] | null);

    /** GameResultNot result */
    result?: (IGameResult[] | null);
}

/** Represents a GameResultNot. */
export class GameResultNot implements IGameResultNot {

    /**
     * Constructs a new GameResultNot.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGameResultNot);

    /** GameResultNot huChair. */
    public huChair: number;

    /** GameResultNot huType. */
    public huType: number;

    /** GameResultNot huFrom. */
    public huFrom: number;

    /** GameResultNot score. */
    public score: IFanScore[];

    /** GameResultNot result. */
    public result: IGameResult[];

    /**
     * Creates a new GameResultNot instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameResultNot instance
     */
    public static create(properties?: IGameResultNot): GameResultNot;

    /**
     * Encodes the specified GameResultNot message. Does not implicitly {@link GameResultNot.verify|verify} messages.
     * @param message GameResultNot message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGameResultNot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GameResultNot message, length delimited. Does not implicitly {@link GameResultNot.verify|verify} messages.
     * @param message GameResultNot message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGameResultNot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameResultNot message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GameResultNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): GameResultNot;

    /**
     * Decodes a GameResultNot message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GameResultNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): GameResultNot;

    /**
     * Verifies a GameResultNot message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a GameResultNot message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GameResultNot
     */
    public static fromObject(object: { [k: string]: any }): GameResultNot;

    /**
     * Creates a plain object from a GameResultNot message. Also converts values to other types if specified.
     * @param message GameResultNot
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameResultNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GameResultNot to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an OpScore. */
export interface IOpScore {

    /** OpScore receiveChairID */
    receiveChairID?: (number | null);

    /** OpScore opcode */
    opcode?: (number | null);

    /** OpScore sendChairIDs */
    sendChairIDs?: (IScore[] | null);
}

/** Represents an OpScore. */
export class OpScore implements IOpScore {

    /**
     * Constructs a new OpScore.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOpScore);

    /** OpScore receiveChairID. */
    public receiveChairID: number;

    /** OpScore opcode. */
    public opcode: number;

    /** OpScore sendChairIDs. */
    public sendChairIDs: IScore[];

    /**
     * Creates a new OpScore instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OpScore instance
     */
    public static create(properties?: IOpScore): OpScore;

    /**
     * Encodes the specified OpScore message. Does not implicitly {@link OpScore.verify|verify} messages.
     * @param message OpScore message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOpScore, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified OpScore message, length delimited. Does not implicitly {@link OpScore.verify|verify} messages.
     * @param message OpScore message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IOpScore, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OpScore message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OpScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): OpScore;

    /**
     * Decodes an OpScore message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns OpScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): OpScore;

    /**
     * Verifies an OpScore message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates an OpScore message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns OpScore
     */
    public static fromObject(object: { [k: string]: any }): OpScore;

    /**
     * Creates a plain object from an OpScore message. Also converts values to other types if specified.
     * @param message OpScore
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: OpScore, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this OpScore to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an OpScoreNot. */
export interface IOpScoreNot {

    /** OpScoreNot score */
    score?: (IOpScore[] | null);
}

/** Represents an OpScoreNot. */
export class OpScoreNot implements IOpScoreNot {

    /**
     * Constructs a new OpScoreNot.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOpScoreNot);

    /** OpScoreNot score. */
    public score: IOpScore[];

    /**
     * Creates a new OpScoreNot instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OpScoreNot instance
     */
    public static create(properties?: IOpScoreNot): OpScoreNot;

    /**
     * Encodes the specified OpScoreNot message. Does not implicitly {@link OpScoreNot.verify|verify} messages.
     * @param message OpScoreNot message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOpScoreNot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified OpScoreNot message, length delimited. Does not implicitly {@link OpScoreNot.verify|verify} messages.
     * @param message OpScoreNot message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IOpScoreNot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OpScoreNot message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OpScoreNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): OpScoreNot;

    /**
     * Decodes an OpScoreNot message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns OpScoreNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): OpScoreNot;

    /**
     * Verifies an OpScoreNot message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates an OpScoreNot message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns OpScoreNot
     */
    public static fromObject(object: { [k: string]: any }): OpScoreNot;

    /**
     * Creates a plain object from an OpScoreNot message. Also converts values to other types if specified.
     * @param message OpScoreNot
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: OpScoreNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this OpScoreNot to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CompleteReq. */
export interface ICompleteReq {
}

/** Represents a CompleteReq. */
export class CompleteReq implements ICompleteReq {

    /**
     * Constructs a new CompleteReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICompleteReq);

    /**
     * Creates a new CompleteReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CompleteReq instance
     */
    public static create(properties?: ICompleteReq): CompleteReq;

    /**
     * Encodes the specified CompleteReq message. Does not implicitly {@link CompleteReq.verify|verify} messages.
     * @param message CompleteReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICompleteReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CompleteReq message, length delimited. Does not implicitly {@link CompleteReq.verify|verify} messages.
     * @param message CompleteReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICompleteReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CompleteReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CompleteReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): CompleteReq;

    /**
     * Decodes a CompleteReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CompleteReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): CompleteReq;

    /**
     * Verifies a CompleteReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a CompleteReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CompleteReq
     */
    public static fromObject(object: { [k: string]: any }): CompleteReq;

    /**
     * Creates a plain object from a CompleteReq message. Also converts values to other types if specified.
     * @param message CompleteReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CompleteReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CompleteReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CompleteDataNot. */
export interface ICompleteDataNot {

    /** CompleteDataNot state */
    state?: (number | null);

    /** CompleteDataNot diZhu */
    diZhu?: (number | null);

    /** CompleteDataNot leftCardsNum */
    leftCardsNum?: (number | null);

    /** CompleteDataNot banker */
    banker?: (number | null);

    /** CompleteDataNot leftSeconds */
    leftSeconds?: (number | Long | null);

    /** CompleteDataNot curPlayer */
    curPlayer?: (number | null);

    /** CompleteDataNot req */
    req?: (IOperateReq | null);

    /** CompleteDataNot autoData */
    autoData?: (IAutoNot[] | null);

    /** CompleteDataNot plyData */
    plyData?: (IChangeCardNot[] | null);
}

/** Represents a CompleteDataNot. */
export class CompleteDataNot implements ICompleteDataNot {

    /**
     * Constructs a new CompleteDataNot.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICompleteDataNot);

    /** CompleteDataNot state. */
    public state: number;

    /** CompleteDataNot diZhu. */
    public diZhu: number;

    /** CompleteDataNot leftCardsNum. */
    public leftCardsNum: number;

    /** CompleteDataNot banker. */
    public banker: number;

    /** CompleteDataNot leftSeconds. */
    public leftSeconds: (number | Long);

    /** CompleteDataNot curPlayer. */
    public curPlayer: number;

    /** CompleteDataNot req. */
    public req?: (IOperateReq | null);

    /** CompleteDataNot autoData. */
    public autoData: IAutoNot[];

    /** CompleteDataNot plyData. */
    public plyData: IChangeCardNot[];

    /**
     * Creates a new CompleteDataNot instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CompleteDataNot instance
     */
    public static create(properties?: ICompleteDataNot): CompleteDataNot;

    /**
     * Encodes the specified CompleteDataNot message. Does not implicitly {@link CompleteDataNot.verify|verify} messages.
     * @param message CompleteDataNot message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICompleteDataNot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CompleteDataNot message, length delimited. Does not implicitly {@link CompleteDataNot.verify|verify} messages.
     * @param message CompleteDataNot message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICompleteDataNot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CompleteDataNot message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CompleteDataNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): CompleteDataNot;

    /**
     * Decodes a CompleteDataNot message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CompleteDataNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): CompleteDataNot;

    /**
     * Verifies a CompleteDataNot message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a CompleteDataNot message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CompleteDataNot
     */
    public static fromObject(object: { [k: string]: any }): CompleteDataNot;

    /**
     * Creates a plain object from a CompleteDataNot message. Also converts values to other types if specified.
     * @param message CompleteDataNot
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CompleteDataNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CompleteDataNot to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an UpdatePlyData. */
export interface IUpdatePlyData {

    /** UpdatePlyData uid */
    uid?: (number | Long | null);

    /** UpdatePlyData num */
    num?: (number | Long | null);
}

/** Represents an UpdatePlyData. */
export class UpdatePlyData implements IUpdatePlyData {

    /**
     * Constructs a new UpdatePlyData.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUpdatePlyData);

    /** UpdatePlyData uid. */
    public uid: (number | Long);

    /** UpdatePlyData num. */
    public num: (number | Long);

    /**
     * Creates a new UpdatePlyData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UpdatePlyData instance
     */
    public static create(properties?: IUpdatePlyData): UpdatePlyData;

    /**
     * Encodes the specified UpdatePlyData message. Does not implicitly {@link UpdatePlyData.verify|verify} messages.
     * @param message UpdatePlyData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUpdatePlyData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UpdatePlyData message, length delimited. Does not implicitly {@link UpdatePlyData.verify|verify} messages.
     * @param message UpdatePlyData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUpdatePlyData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UpdatePlyData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UpdatePlyData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): UpdatePlyData;

    /**
     * Decodes an UpdatePlyData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UpdatePlyData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): UpdatePlyData;

    /**
     * Verifies an UpdatePlyData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates an UpdatePlyData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UpdatePlyData
     */
    public static fromObject(object: { [k: string]: any }): UpdatePlyData;

    /**
     * Creates a plain object from an UpdatePlyData message. Also converts values to other types if specified.
     * @param message UpdatePlyData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UpdatePlyData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UpdatePlyData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
