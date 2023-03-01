import * as $protobuf from "protobufjs";
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
     * Calls ChaiHongBao.
     * @param request GetChaiHongBaoReq message or plain object
     * @param callback Node-style callback called with the error, if any, and GetChaiHongBaoAck
     */
    public chaiHongBao(request: IGetChaiHongBaoReq, callback: Ad.ChaiHongBaoCallback): void;

    /**
     * Calls ChaiHongBao.
     * @param request GetChaiHongBaoReq message or plain object
     * @returns Promise
     */
    public chaiHongBao(request: IGetChaiHongBaoReq): Promise<GetChaiHongBaoAck>;
}

export namespace Ad {

    /**
     * Callback as used by {@link Ad#chaiHongBao}.
     * @param error Error, if any
     * @param [response] GetChaiHongBaoAck
     */
    type ChaiHongBaoCallback = (error: (Error|null), response?: GetChaiHongBaoAck) => void;
}

/** Properties of a GetChaiHongBaoReq. */
export interface IGetChaiHongBaoReq {

    /** GetChaiHongBaoReq uid */
    uid?: (number|Long|null);
}

/** Represents a GetChaiHongBaoReq. */
export class GetChaiHongBaoReq implements IGetChaiHongBaoReq {

    /**
     * Constructs a new GetChaiHongBaoReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetChaiHongBaoReq);

    /** GetChaiHongBaoReq uid. */
    public uid: (number|Long);

    /**
     * Creates a new GetChaiHongBaoReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetChaiHongBaoReq instance
     */
    public static create(properties?: IGetChaiHongBaoReq): GetChaiHongBaoReq;

    /**
     * Encodes the specified GetChaiHongBaoReq message. Does not implicitly {@link GetChaiHongBaoReq.verify|verify} messages.
     * @param message GetChaiHongBaoReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetChaiHongBaoReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetChaiHongBaoReq message, length delimited. Does not implicitly {@link GetChaiHongBaoReq.verify|verify} messages.
     * @param message GetChaiHongBaoReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetChaiHongBaoReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetChaiHongBaoReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetChaiHongBaoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetChaiHongBaoReq;

    /**
     * Decodes a GetChaiHongBaoReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetChaiHongBaoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetChaiHongBaoReq;

    /**
     * Verifies a GetChaiHongBaoReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetChaiHongBaoReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetChaiHongBaoReq
     */
    public static fromObject(object: { [k: string]: any }): GetChaiHongBaoReq;

    /**
     * Creates a plain object from a GetChaiHongBaoReq message. Also converts values to other types if specified.
     * @param message GetChaiHongBaoReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetChaiHongBaoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetChaiHongBaoReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GetChaiHongBaoAck. */
export interface IGetChaiHongBaoAck {

    /** GetChaiHongBaoAck errCode */
    errCode?: (number|null);

    /** GetChaiHongBaoAck errMsg */
    errMsg?: (string|null);

    /** GetChaiHongBaoAck CurrentCount */
    CurrentCount?: (number|null);

    /** GetChaiHongBaoAck TaskCount */
    TaskCount?: (number|null);
}

/** Represents a GetChaiHongBaoAck. */
export class GetChaiHongBaoAck implements IGetChaiHongBaoAck {

    /**
     * Constructs a new GetChaiHongBaoAck.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetChaiHongBaoAck);

    /** GetChaiHongBaoAck errCode. */
    public errCode: number;

    /** GetChaiHongBaoAck errMsg. */
    public errMsg: string;

    /** GetChaiHongBaoAck CurrentCount. */
    public CurrentCount: number;

    /** GetChaiHongBaoAck TaskCount. */
    public TaskCount: number;

    /**
     * Creates a new GetChaiHongBaoAck instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetChaiHongBaoAck instance
     */
    public static create(properties?: IGetChaiHongBaoAck): GetChaiHongBaoAck;

    /**
     * Encodes the specified GetChaiHongBaoAck message. Does not implicitly {@link GetChaiHongBaoAck.verify|verify} messages.
     * @param message GetChaiHongBaoAck message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetChaiHongBaoAck, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetChaiHongBaoAck message, length delimited. Does not implicitly {@link GetChaiHongBaoAck.verify|verify} messages.
     * @param message GetChaiHongBaoAck message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetChaiHongBaoAck, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetChaiHongBaoAck message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetChaiHongBaoAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetChaiHongBaoAck;

    /**
     * Decodes a GetChaiHongBaoAck message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetChaiHongBaoAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetChaiHongBaoAck;

    /**
     * Verifies a GetChaiHongBaoAck message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetChaiHongBaoAck message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetChaiHongBaoAck
     */
    public static fromObject(object: { [k: string]: any }): GetChaiHongBaoAck;

    /**
     * Creates a plain object from a GetChaiHongBaoAck message. Also converts values to other types if specified.
     * @param message GetChaiHongBaoAck
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetChaiHongBaoAck, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetChaiHongBaoAck to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
