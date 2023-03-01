import * as $protobuf from "protobufjs";
/** Properties of a RoomInfo. */
export interface IRoomInfo {

    /** RoomInfo roomId */
    roomId?: (string|null);

    /** RoomInfo serverId */
    serverId?: (string|null);

    /** RoomInfo gameId */
    gameId?: (string|null);

    /** RoomInfo ruleId */
    ruleId?: (string|null);

    /** RoomInfo metaData */
    metaData?: (string|null);
}

/** Represents a RoomInfo. */
export class RoomInfo implements IRoomInfo {

    /**
     * Constructs a new RoomInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRoomInfo);

    /** RoomInfo roomId. */
    public roomId: string;

    /** RoomInfo serverId. */
    public serverId: string;

    /** RoomInfo gameId. */
    public gameId: string;

    /** RoomInfo ruleId. */
    public ruleId: string;

    /** RoomInfo metaData. */
    public metaData: string;

    /**
     * Creates a new RoomInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RoomInfo instance
     */
    public static create(properties?: IRoomInfo): RoomInfo;

    /**
     * Encodes the specified RoomInfo message. Does not implicitly {@link RoomInfo.verify|verify} messages.
     * @param message RoomInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link RoomInfo.verify|verify} messages.
     * @param message RoomInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RoomInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RoomInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RoomInfo;

    /**
     * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RoomInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RoomInfo;

    /**
     * Verifies a RoomInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RoomInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RoomInfo
     */
    public static fromObject(object: { [k: string]: any }): RoomInfo;

    /**
     * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
     * @param message RoomInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RoomInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RoomInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a StartJoinRoomReq. */
export interface IStartJoinRoomReq {

    /** StartJoinRoomReq uid */
    uid?: (number|Long|null);

    /** StartJoinRoomReq gameId */
    gameId?: (string|null);

    /** StartJoinRoomReq ruleId */
    ruleId?: (string|null);
}

/** Represents a StartJoinRoomReq. */
export class StartJoinRoomReq implements IStartJoinRoomReq {

    /**
     * Constructs a new StartJoinRoomReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IStartJoinRoomReq);

    /** StartJoinRoomReq uid. */
    public uid: (number|Long);

    /** StartJoinRoomReq gameId. */
    public gameId: string;

    /** StartJoinRoomReq ruleId. */
    public ruleId: string;

    /**
     * Creates a new StartJoinRoomReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns StartJoinRoomReq instance
     */
    public static create(properties?: IStartJoinRoomReq): StartJoinRoomReq;

    /**
     * Encodes the specified StartJoinRoomReq message. Does not implicitly {@link StartJoinRoomReq.verify|verify} messages.
     * @param message StartJoinRoomReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IStartJoinRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified StartJoinRoomReq message, length delimited. Does not implicitly {@link StartJoinRoomReq.verify|verify} messages.
     * @param message StartJoinRoomReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IStartJoinRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a StartJoinRoomReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns StartJoinRoomReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StartJoinRoomReq;

    /**
     * Decodes a StartJoinRoomReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns StartJoinRoomReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StartJoinRoomReq;

    /**
     * Verifies a StartJoinRoomReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a StartJoinRoomReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StartJoinRoomReq
     */
    public static fromObject(object: { [k: string]: any }): StartJoinRoomReq;

    /**
     * Creates a plain object from a StartJoinRoomReq message. Also converts values to other types if specified.
     * @param message StartJoinRoomReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: StartJoinRoomReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this StartJoinRoomReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a StartJoinRoomRsp. */
export interface IStartJoinRoomRsp {

    /** StartJoinRoomRsp errCode */
    errCode?: (number|null);

    /** StartJoinRoomRsp errMsg */
    errMsg?: (string|null);

    /** StartJoinRoomRsp gameData */
    gameData?: (IGameData|null);
}

/** Represents a StartJoinRoomRsp. */
export class StartJoinRoomRsp implements IStartJoinRoomRsp {

    /**
     * Constructs a new StartJoinRoomRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IStartJoinRoomRsp);

    /** StartJoinRoomRsp errCode. */
    public errCode: number;

    /** StartJoinRoomRsp errMsg. */
    public errMsg: string;

    /** StartJoinRoomRsp gameData. */
    public gameData?: (IGameData|null);

    /**
     * Creates a new StartJoinRoomRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns StartJoinRoomRsp instance
     */
    public static create(properties?: IStartJoinRoomRsp): StartJoinRoomRsp;

    /**
     * Encodes the specified StartJoinRoomRsp message. Does not implicitly {@link StartJoinRoomRsp.verify|verify} messages.
     * @param message StartJoinRoomRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IStartJoinRoomRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified StartJoinRoomRsp message, length delimited. Does not implicitly {@link StartJoinRoomRsp.verify|verify} messages.
     * @param message StartJoinRoomRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IStartJoinRoomRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a StartJoinRoomRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns StartJoinRoomRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StartJoinRoomRsp;

    /**
     * Decodes a StartJoinRoomRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns StartJoinRoomRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StartJoinRoomRsp;

    /**
     * Verifies a StartJoinRoomRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a StartJoinRoomRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StartJoinRoomRsp
     */
    public static fromObject(object: { [k: string]: any }): StartJoinRoomRsp;

    /**
     * Creates a plain object from a StartJoinRoomRsp message. Also converts values to other types if specified.
     * @param message StartJoinRoomRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: StartJoinRoomRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this StartJoinRoomRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a StartJoinRoomNot. */
export interface IStartJoinRoomNot {

    /** StartJoinRoomNot gameId */
    gameId?: (string|null);

    /** StartJoinRoomNot ruleId */
    ruleId?: (string|null);
}

/** Represents a StartJoinRoomNot. */
export class StartJoinRoomNot implements IStartJoinRoomNot {

    /**
     * Constructs a new StartJoinRoomNot.
     * @param [properties] Properties to set
     */
    constructor(properties?: IStartJoinRoomNot);

    /** StartJoinRoomNot gameId. */
    public gameId: string;

    /** StartJoinRoomNot ruleId. */
    public ruleId: string;

    /**
     * Creates a new StartJoinRoomNot instance using the specified properties.
     * @param [properties] Properties to set
     * @returns StartJoinRoomNot instance
     */
    public static create(properties?: IStartJoinRoomNot): StartJoinRoomNot;

    /**
     * Encodes the specified StartJoinRoomNot message. Does not implicitly {@link StartJoinRoomNot.verify|verify} messages.
     * @param message StartJoinRoomNot message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IStartJoinRoomNot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified StartJoinRoomNot message, length delimited. Does not implicitly {@link StartJoinRoomNot.verify|verify} messages.
     * @param message StartJoinRoomNot message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IStartJoinRoomNot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a StartJoinRoomNot message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns StartJoinRoomNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StartJoinRoomNot;

    /**
     * Decodes a StartJoinRoomNot message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns StartJoinRoomNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StartJoinRoomNot;

    /**
     * Verifies a StartJoinRoomNot message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a StartJoinRoomNot message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StartJoinRoomNot
     */
    public static fromObject(object: { [k: string]: any }): StartJoinRoomNot;

    /**
     * Creates a plain object from a StartJoinRoomNot message. Also converts values to other types if specified.
     * @param message StartJoinRoomNot
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: StartJoinRoomNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this StartJoinRoomNot to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CancelJoinRoomReq. */
export interface ICancelJoinRoomReq {

    /** CancelJoinRoomReq uid */
    uid?: (number|Long|null);
}

/** Represents a CancelJoinRoomReq. */
export class CancelJoinRoomReq implements ICancelJoinRoomReq {

    /**
     * Constructs a new CancelJoinRoomReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICancelJoinRoomReq);

    /** CancelJoinRoomReq uid. */
    public uid: (number|Long);

    /**
     * Creates a new CancelJoinRoomReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CancelJoinRoomReq instance
     */
    public static create(properties?: ICancelJoinRoomReq): CancelJoinRoomReq;

    /**
     * Encodes the specified CancelJoinRoomReq message. Does not implicitly {@link CancelJoinRoomReq.verify|verify} messages.
     * @param message CancelJoinRoomReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICancelJoinRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CancelJoinRoomReq message, length delimited. Does not implicitly {@link CancelJoinRoomReq.verify|verify} messages.
     * @param message CancelJoinRoomReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICancelJoinRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CancelJoinRoomReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CancelJoinRoomReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CancelJoinRoomReq;

    /**
     * Decodes a CancelJoinRoomReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CancelJoinRoomReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CancelJoinRoomReq;

    /**
     * Verifies a CancelJoinRoomReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CancelJoinRoomReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CancelJoinRoomReq
     */
    public static fromObject(object: { [k: string]: any }): CancelJoinRoomReq;

    /**
     * Creates a plain object from a CancelJoinRoomReq message. Also converts values to other types if specified.
     * @param message CancelJoinRoomReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CancelJoinRoomReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CancelJoinRoomReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CancelJoinRoomRsp. */
export interface ICancelJoinRoomRsp {

    /** CancelJoinRoomRsp errCode */
    errCode?: (number|null);

    /** CancelJoinRoomRsp errMsg */
    errMsg?: (string|null);
}

/** Represents a CancelJoinRoomRsp. */
export class CancelJoinRoomRsp implements ICancelJoinRoomRsp {

    /**
     * Constructs a new CancelJoinRoomRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICancelJoinRoomRsp);

    /** CancelJoinRoomRsp errCode. */
    public errCode: number;

    /** CancelJoinRoomRsp errMsg. */
    public errMsg: string;

    /**
     * Creates a new CancelJoinRoomRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CancelJoinRoomRsp instance
     */
    public static create(properties?: ICancelJoinRoomRsp): CancelJoinRoomRsp;

    /**
     * Encodes the specified CancelJoinRoomRsp message. Does not implicitly {@link CancelJoinRoomRsp.verify|verify} messages.
     * @param message CancelJoinRoomRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICancelJoinRoomRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CancelJoinRoomRsp message, length delimited. Does not implicitly {@link CancelJoinRoomRsp.verify|verify} messages.
     * @param message CancelJoinRoomRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICancelJoinRoomRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CancelJoinRoomRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CancelJoinRoomRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CancelJoinRoomRsp;

    /**
     * Decodes a CancelJoinRoomRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CancelJoinRoomRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CancelJoinRoomRsp;

    /**
     * Verifies a CancelJoinRoomRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CancelJoinRoomRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CancelJoinRoomRsp
     */
    public static fromObject(object: { [k: string]: any }): CancelJoinRoomRsp;

    /**
     * Creates a plain object from a CancelJoinRoomRsp message. Also converts values to other types if specified.
     * @param message CancelJoinRoomRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CancelJoinRoomRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CancelJoinRoomRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GetRoomInfoReq. */
export interface IGetRoomInfoReq {

    /** GetRoomInfoReq roomId */
    roomId?: (string|null);
}

/** Represents a GetRoomInfoReq. */
export class GetRoomInfoReq implements IGetRoomInfoReq {

    /**
     * Constructs a new GetRoomInfoReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetRoomInfoReq);

    /** GetRoomInfoReq roomId. */
    public roomId: string;

    /**
     * Creates a new GetRoomInfoReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetRoomInfoReq instance
     */
    public static create(properties?: IGetRoomInfoReq): GetRoomInfoReq;

    /**
     * Encodes the specified GetRoomInfoReq message. Does not implicitly {@link GetRoomInfoReq.verify|verify} messages.
     * @param message GetRoomInfoReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetRoomInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetRoomInfoReq message, length delimited. Does not implicitly {@link GetRoomInfoReq.verify|verify} messages.
     * @param message GetRoomInfoReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetRoomInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetRoomInfoReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetRoomInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetRoomInfoReq;

    /**
     * Decodes a GetRoomInfoReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetRoomInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetRoomInfoReq;

    /**
     * Verifies a GetRoomInfoReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetRoomInfoReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetRoomInfoReq
     */
    public static fromObject(object: { [k: string]: any }): GetRoomInfoReq;

    /**
     * Creates a plain object from a GetRoomInfoReq message. Also converts values to other types if specified.
     * @param message GetRoomInfoReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetRoomInfoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetRoomInfoReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GetRoomInfoRsp. */
export interface IGetRoomInfoRsp {

    /** GetRoomInfoRsp errCode */
    errCode?: (number|null);

    /** GetRoomInfoRsp errMsg */
    errMsg?: (string|null);

    /** GetRoomInfoRsp room */
    room?: (IRoomInfo|null);
}

/** Represents a GetRoomInfoRsp. */
export class GetRoomInfoRsp implements IGetRoomInfoRsp {

    /**
     * Constructs a new GetRoomInfoRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetRoomInfoRsp);

    /** GetRoomInfoRsp errCode. */
    public errCode: number;

    /** GetRoomInfoRsp errMsg. */
    public errMsg: string;

    /** GetRoomInfoRsp room. */
    public room?: (IRoomInfo|null);

    /**
     * Creates a new GetRoomInfoRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetRoomInfoRsp instance
     */
    public static create(properties?: IGetRoomInfoRsp): GetRoomInfoRsp;

    /**
     * Encodes the specified GetRoomInfoRsp message. Does not implicitly {@link GetRoomInfoRsp.verify|verify} messages.
     * @param message GetRoomInfoRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetRoomInfoRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetRoomInfoRsp message, length delimited. Does not implicitly {@link GetRoomInfoRsp.verify|verify} messages.
     * @param message GetRoomInfoRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetRoomInfoRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetRoomInfoRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetRoomInfoRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetRoomInfoRsp;

    /**
     * Decodes a GetRoomInfoRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetRoomInfoRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetRoomInfoRsp;

    /**
     * Verifies a GetRoomInfoRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetRoomInfoRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetRoomInfoRsp
     */
    public static fromObject(object: { [k: string]: any }): GetRoomInfoRsp;

    /**
     * Creates a plain object from a GetRoomInfoRsp message. Also converts values to other types if specified.
     * @param message GetRoomInfoRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetRoomInfoRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetRoomInfoRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GetCurRoomInfoReq. */
export interface IGetCurRoomInfoReq {

    /** GetCurRoomInfoReq uid */
    uid?: (number|Long|null);
}

/** Represents a GetCurRoomInfoReq. */
export class GetCurRoomInfoReq implements IGetCurRoomInfoReq {

    /**
     * Constructs a new GetCurRoomInfoReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetCurRoomInfoReq);

    /** GetCurRoomInfoReq uid. */
    public uid: (number|Long);

    /**
     * Creates a new GetCurRoomInfoReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetCurRoomInfoReq instance
     */
    public static create(properties?: IGetCurRoomInfoReq): GetCurRoomInfoReq;

    /**
     * Encodes the specified GetCurRoomInfoReq message. Does not implicitly {@link GetCurRoomInfoReq.verify|verify} messages.
     * @param message GetCurRoomInfoReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetCurRoomInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetCurRoomInfoReq message, length delimited. Does not implicitly {@link GetCurRoomInfoReq.verify|verify} messages.
     * @param message GetCurRoomInfoReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetCurRoomInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetCurRoomInfoReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetCurRoomInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetCurRoomInfoReq;

    /**
     * Decodes a GetCurRoomInfoReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetCurRoomInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetCurRoomInfoReq;

    /**
     * Verifies a GetCurRoomInfoReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetCurRoomInfoReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetCurRoomInfoReq
     */
    public static fromObject(object: { [k: string]: any }): GetCurRoomInfoReq;

    /**
     * Creates a plain object from a GetCurRoomInfoReq message. Also converts values to other types if specified.
     * @param message GetCurRoomInfoReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetCurRoomInfoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetCurRoomInfoReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GetCurRoomInfoRsp. */
export interface IGetCurRoomInfoRsp {

    /** GetCurRoomInfoRsp errCode */
    errCode?: (number|null);

    /** GetCurRoomInfoRsp errMsg */
    errMsg?: (string|null);

    /** GetCurRoomInfoRsp room */
    room?: (IRoomInfo|null);
}

/** Represents a GetCurRoomInfoRsp. */
export class GetCurRoomInfoRsp implements IGetCurRoomInfoRsp {

    /**
     * Constructs a new GetCurRoomInfoRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetCurRoomInfoRsp);

    /** GetCurRoomInfoRsp errCode. */
    public errCode: number;

    /** GetCurRoomInfoRsp errMsg. */
    public errMsg: string;

    /** GetCurRoomInfoRsp room. */
    public room?: (IRoomInfo|null);

    /**
     * Creates a new GetCurRoomInfoRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetCurRoomInfoRsp instance
     */
    public static create(properties?: IGetCurRoomInfoRsp): GetCurRoomInfoRsp;

    /**
     * Encodes the specified GetCurRoomInfoRsp message. Does not implicitly {@link GetCurRoomInfoRsp.verify|verify} messages.
     * @param message GetCurRoomInfoRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetCurRoomInfoRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetCurRoomInfoRsp message, length delimited. Does not implicitly {@link GetCurRoomInfoRsp.verify|verify} messages.
     * @param message GetCurRoomInfoRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetCurRoomInfoRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetCurRoomInfoRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetCurRoomInfoRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetCurRoomInfoRsp;

    /**
     * Decodes a GetCurRoomInfoRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetCurRoomInfoRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetCurRoomInfoRsp;

    /**
     * Verifies a GetCurRoomInfoRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetCurRoomInfoRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetCurRoomInfoRsp
     */
    public static fromObject(object: { [k: string]: any }): GetCurRoomInfoRsp;

    /**
     * Creates a plain object from a GetCurRoomInfoRsp message. Also converts values to other types if specified.
     * @param message GetCurRoomInfoRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetCurRoomInfoRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetCurRoomInfoRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RoomListReq. */
export interface IRoomListReq {
}

/** Represents a RoomListReq. */
export class RoomListReq implements IRoomListReq {

    /**
     * Constructs a new RoomListReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRoomListReq);

    /**
     * Creates a new RoomListReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RoomListReq instance
     */
    public static create(properties?: IRoomListReq): RoomListReq;

    /**
     * Encodes the specified RoomListReq message. Does not implicitly {@link RoomListReq.verify|verify} messages.
     * @param message RoomListReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRoomListReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RoomListReq message, length delimited. Does not implicitly {@link RoomListReq.verify|verify} messages.
     * @param message RoomListReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRoomListReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RoomListReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RoomListReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RoomListReq;

    /**
     * Decodes a RoomListReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RoomListReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RoomListReq;

    /**
     * Verifies a RoomListReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RoomListReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RoomListReq
     */
    public static fromObject(object: { [k: string]: any }): RoomListReq;

    /**
     * Creates a plain object from a RoomListReq message. Also converts values to other types if specified.
     * @param message RoomListReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RoomListReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RoomListReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RoomListRsp. */
export interface IRoomListRsp {

    /** RoomListRsp errCode */
    errCode?: (number|null);

    /** RoomListRsp errMsg */
    errMsg?: (string|null);

    /** RoomListRsp roomList */
    roomList?: (IRoomInfo[]|null);
}

/** Represents a RoomListRsp. */
export class RoomListRsp implements IRoomListRsp {

    /**
     * Constructs a new RoomListRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRoomListRsp);

    /** RoomListRsp errCode. */
    public errCode: number;

    /** RoomListRsp errMsg. */
    public errMsg: string;

    /** RoomListRsp roomList. */
    public roomList: IRoomInfo[];

    /**
     * Creates a new RoomListRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RoomListRsp instance
     */
    public static create(properties?: IRoomListRsp): RoomListRsp;

    /**
     * Encodes the specified RoomListRsp message. Does not implicitly {@link RoomListRsp.verify|verify} messages.
     * @param message RoomListRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRoomListRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RoomListRsp message, length delimited. Does not implicitly {@link RoomListRsp.verify|verify} messages.
     * @param message RoomListRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRoomListRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RoomListRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RoomListRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RoomListRsp;

    /**
     * Decodes a RoomListRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RoomListRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RoomListRsp;

    /**
     * Verifies a RoomListRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RoomListRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RoomListRsp
     */
    public static fromObject(object: { [k: string]: any }): RoomListRsp;

    /**
     * Creates a plain object from a RoomListRsp message. Also converts values to other types if specified.
     * @param message RoomListRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RoomListRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RoomListRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an EnterRoomConfirmReq. */
export interface IEnterRoomConfirmReq {

    /** EnterRoomConfirmReq confirmed */
    confirmed?: (boolean|null);
}

/** Represents an EnterRoomConfirmReq. */
export class EnterRoomConfirmReq implements IEnterRoomConfirmReq {

    /**
     * Constructs a new EnterRoomConfirmReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEnterRoomConfirmReq);

    /** EnterRoomConfirmReq confirmed. */
    public confirmed: boolean;

    /**
     * Creates a new EnterRoomConfirmReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EnterRoomConfirmReq instance
     */
    public static create(properties?: IEnterRoomConfirmReq): EnterRoomConfirmReq;

    /**
     * Encodes the specified EnterRoomConfirmReq message. Does not implicitly {@link EnterRoomConfirmReq.verify|verify} messages.
     * @param message EnterRoomConfirmReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEnterRoomConfirmReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EnterRoomConfirmReq message, length delimited. Does not implicitly {@link EnterRoomConfirmReq.verify|verify} messages.
     * @param message EnterRoomConfirmReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEnterRoomConfirmReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EnterRoomConfirmReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EnterRoomConfirmReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EnterRoomConfirmReq;

    /**
     * Decodes an EnterRoomConfirmReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EnterRoomConfirmReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EnterRoomConfirmReq;

    /**
     * Verifies an EnterRoomConfirmReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EnterRoomConfirmReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EnterRoomConfirmReq
     */
    public static fromObject(object: { [k: string]: any }): EnterRoomConfirmReq;

    /**
     * Creates a plain object from an EnterRoomConfirmReq message. Also converts values to other types if specified.
     * @param message EnterRoomConfirmReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EnterRoomConfirmReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EnterRoomConfirmReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an EnterRoomConfirmRsp. */
export interface IEnterRoomConfirmRsp {

    /** EnterRoomConfirmRsp errCode */
    errCode?: (number|null);

    /** EnterRoomConfirmRsp errMsg */
    errMsg?: (string|null);

    /** EnterRoomConfirmRsp room */
    room?: (IRoomInfo|null);
}

/** Represents an EnterRoomConfirmRsp. */
export class EnterRoomConfirmRsp implements IEnterRoomConfirmRsp {

    /**
     * Constructs a new EnterRoomConfirmRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEnterRoomConfirmRsp);

    /** EnterRoomConfirmRsp errCode. */
    public errCode: number;

    /** EnterRoomConfirmRsp errMsg. */
    public errMsg: string;

    /** EnterRoomConfirmRsp room. */
    public room?: (IRoomInfo|null);

    /**
     * Creates a new EnterRoomConfirmRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EnterRoomConfirmRsp instance
     */
    public static create(properties?: IEnterRoomConfirmRsp): EnterRoomConfirmRsp;

    /**
     * Encodes the specified EnterRoomConfirmRsp message. Does not implicitly {@link EnterRoomConfirmRsp.verify|verify} messages.
     * @param message EnterRoomConfirmRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEnterRoomConfirmRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EnterRoomConfirmRsp message, length delimited. Does not implicitly {@link EnterRoomConfirmRsp.verify|verify} messages.
     * @param message EnterRoomConfirmRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEnterRoomConfirmRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EnterRoomConfirmRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EnterRoomConfirmRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EnterRoomConfirmRsp;

    /**
     * Decodes an EnterRoomConfirmRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EnterRoomConfirmRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EnterRoomConfirmRsp;

    /**
     * Verifies an EnterRoomConfirmRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EnterRoomConfirmRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EnterRoomConfirmRsp
     */
    public static fromObject(object: { [k: string]: any }): EnterRoomConfirmRsp;

    /**
     * Creates a plain object from an EnterRoomConfirmRsp message. Also converts values to other types if specified.
     * @param message EnterRoomConfirmRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EnterRoomConfirmRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EnterRoomConfirmRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GameData. */
export interface IGameData {

    /** GameData roomId */
    roomId?: (string|null);

    /** GameData ruleId */
    ruleId?: (string|null);

    /** GameData serverId */
    serverId?: (string|null);

    /** GameData gameId */
    gameId?: (string|null);
}

/** Represents a GameData. */
export class GameData implements IGameData {

    /**
     * Constructs a new GameData.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGameData);

    /** GameData roomId. */
    public roomId: string;

    /** GameData ruleId. */
    public ruleId: string;

    /** GameData serverId. */
    public serverId: string;

    /** GameData gameId. */
    public gameId: string;

    /**
     * Creates a new GameData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameData instance
     */
    public static create(properties?: IGameData): GameData;

    /**
     * Encodes the specified GameData message. Does not implicitly {@link GameData.verify|verify} messages.
     * @param message GameData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGameData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GameData message, length delimited. Does not implicitly {@link GameData.verify|verify} messages.
     * @param message GameData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGameData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GameData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameData;

    /**
     * Decodes a GameData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GameData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameData;

    /**
     * Verifies a GameData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GameData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GameData
     */
    public static fromObject(object: { [k: string]: any }): GameData;

    /**
     * Creates a plain object from a GameData message. Also converts values to other types if specified.
     * @param message GameData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GameData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an Error. */
export interface IError {

    /** Error id */
    id?: (string|null);

    /** Error code */
    code?: (number|null);

    /** Error detail */
    detail?: (string|null);

    /** Error status */
    status?: (string|null);
}

/** Represents an Error. */
export class Error implements IError {

    /**
     * Constructs a new Error.
     * @param [properties] Properties to set
     */
    constructor(properties?: IError);

    /** Error id. */
    public id: string;

    /** Error code. */
    public code: number;

    /** Error detail. */
    public detail: string;

    /** Error status. */
    public status: string;

    /**
     * Creates a new Error instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Error instance
     */
    public static create(properties?: IError): Error;

    /**
     * Encodes the specified Error message. Does not implicitly {@link Error.verify|verify} messages.
     * @param message Error message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IError, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Error message, length delimited. Does not implicitly {@link Error.verify|verify} messages.
     * @param message Error message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IError, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Error message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Error
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Error;

    /**
     * Decodes an Error message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Error
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Error;

    /**
     * Verifies an Error message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Error message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Error
     */
    public static fromObject(object: { [k: string]: any }): Error;

    /**
     * Creates a plain object from an Error message. Also converts values to other types if specified.
     * @param message Error
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Error, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Error to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
