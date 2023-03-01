import * as $protobuf from "protobufjs";
/** Namespace gamebase. */
export namespace gamebase {

    /** Represents a Base */
    class Base extends $protobuf.rpc.Service {

        /**
         * Constructs a new Base service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Base service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Base;
    }

    /** Properties of a RoomInfo. */
    interface IRoomInfo {

        /** RoomInfo roomId */
        roomId?: (string | null);

        /** RoomInfo serverId */
        serverId?: (string | null);

        /** RoomInfo gameId */
        gameId?: (string | null);

        /** RoomInfo ruleId */
        ruleId?: (string | null);

        /** RoomInfo metaData */
        metaData?: (string | null);
    }

    /** Represents a RoomInfo. */
    class RoomInfo implements IRoomInfo {

        /**
         * Constructs a new RoomInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamebase.IRoomInfo);

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
        public static create(properties?: gamebase.IRoomInfo): gamebase.RoomInfo;

        /**
         * Encodes the specified RoomInfo message. Does not implicitly {@link gamebase.RoomInfo.verify|verify} messages.
         * @param message RoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamebase.IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link gamebase.RoomInfo.verify|verify} messages.
         * @param message RoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamebase.IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): gamebase.RoomInfo;

        /**
         * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): gamebase.RoomInfo;

        /**
         * Verifies a RoomInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);

        /**
         * Creates a RoomInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoomInfo
         */
        public static fromObject(object: { [k: string]: any }): gamebase.RoomInfo;

        /**
         * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
         * @param message RoomInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamebase.RoomInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoomInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnterRoomReq. */
    interface IEnterRoomReq {

        /** EnterRoomReq uid */
        uid?: (number | Long | null);

        /** EnterRoomReq token */
        token?: (string | null);

        /** EnterRoomReq roomId */
        roomId?: (string | null);
    }

    /** Represents an EnterRoomReq. */
    class EnterRoomReq implements IEnterRoomReq {

        /**
         * Constructs a new EnterRoomReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamebase.IEnterRoomReq);

        /** EnterRoomReq uid. */
        public uid: (number | Long);

        /** EnterRoomReq token. */
        public token: string;

        /** EnterRoomReq roomId. */
        public roomId: string;

        /**
         * Creates a new EnterRoomReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterRoomReq instance
         */
        public static create(properties?: gamebase.IEnterRoomReq): gamebase.EnterRoomReq;

        /**
         * Encodes the specified EnterRoomReq message. Does not implicitly {@link gamebase.EnterRoomReq.verify|verify} messages.
         * @param message EnterRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamebase.IEnterRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EnterRoomReq message, length delimited. Does not implicitly {@link gamebase.EnterRoomReq.verify|verify} messages.
         * @param message EnterRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamebase.IEnterRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnterRoomReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): gamebase.EnterRoomReq;

        /**
         * Decodes an EnterRoomReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnterRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): gamebase.EnterRoomReq;

        /**
         * Verifies an EnterRoomReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);

        /**
         * Creates an EnterRoomReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnterRoomReq
         */
        public static fromObject(object: { [k: string]: any }): gamebase.EnterRoomReq;

        /**
         * Creates a plain object from an EnterRoomReq message. Also converts values to other types if specified.
         * @param message EnterRoomReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamebase.EnterRoomReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnterRoomReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnterRoomRsp. */
    interface IEnterRoomRsp {

        /** EnterRoomRsp errCode */
        errCode?: (number | null);

        /** EnterRoomRsp errMsg */
        errMsg?: (string | null);

        /** EnterRoomRsp roomInfo */
        roomInfo?: (gamebase.IRoomInfo | null);
    }

    /** Represents an EnterRoomRsp. */
    class EnterRoomRsp implements IEnterRoomRsp {

        /**
         * Constructs a new EnterRoomRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamebase.IEnterRoomRsp);

        /** EnterRoomRsp errCode. */
        public errCode: number;

        /** EnterRoomRsp errMsg. */
        public errMsg: string;

        /** EnterRoomRsp roomInfo. */
        public roomInfo?: (gamebase.IRoomInfo | null);

        /**
         * Creates a new EnterRoomRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterRoomRsp instance
         */
        public static create(properties?: gamebase.IEnterRoomRsp): gamebase.EnterRoomRsp;

        /**
         * Encodes the specified EnterRoomRsp message. Does not implicitly {@link gamebase.EnterRoomRsp.verify|verify} messages.
         * @param message EnterRoomRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamebase.IEnterRoomRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EnterRoomRsp message, length delimited. Does not implicitly {@link gamebase.EnterRoomRsp.verify|verify} messages.
         * @param message EnterRoomRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamebase.IEnterRoomRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnterRoomRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): gamebase.EnterRoomRsp;

        /**
         * Decodes an EnterRoomRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnterRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): gamebase.EnterRoomRsp;

        /**
         * Verifies an EnterRoomRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);

        /**
         * Creates an EnterRoomRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnterRoomRsp
         */
        public static fromObject(object: { [k: string]: any }): gamebase.EnterRoomRsp;

        /**
         * Creates a plain object from an EnterRoomRsp message. Also converts values to other types if specified.
         * @param message EnterRoomRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamebase.EnterRoomRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnterRoomRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnterRoomNot. */
    interface IEnterRoomNot {

        /** EnterRoomNot roomId */
        roomId?: (string | null);

        /** EnterRoomNot uid */
        uid?: (number | Long | null);

        /** EnterRoomNot nickname */
        nickname?: (string | null);

        /** EnterRoomNot money */
        money?: (number | Long | null);
    }

    /** Represents an EnterRoomNot. */
    class EnterRoomNot implements IEnterRoomNot {

        /**
         * Constructs a new EnterRoomNot.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamebase.IEnterRoomNot);

        /** EnterRoomNot roomId. */
        public roomId: string;

        /** EnterRoomNot uid. */
        public uid: (number | Long);

        /** EnterRoomNot nickname. */
        public nickname: string;

        /** EnterRoomNot money. */
        public money: (number | Long);

        /**
         * Creates a new EnterRoomNot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterRoomNot instance
         */
        public static create(properties?: gamebase.IEnterRoomNot): gamebase.EnterRoomNot;

        /**
         * Encodes the specified EnterRoomNot message. Does not implicitly {@link gamebase.EnterRoomNot.verify|verify} messages.
         * @param message EnterRoomNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamebase.IEnterRoomNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EnterRoomNot message, length delimited. Does not implicitly {@link gamebase.EnterRoomNot.verify|verify} messages.
         * @param message EnterRoomNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamebase.IEnterRoomNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnterRoomNot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterRoomNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): gamebase.EnterRoomNot;

        /**
         * Decodes an EnterRoomNot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnterRoomNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): gamebase.EnterRoomNot;

        /**
         * Verifies an EnterRoomNot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);

        /**
         * Creates an EnterRoomNot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnterRoomNot
         */
        public static fromObject(object: { [k: string]: any }): gamebase.EnterRoomNot;

        /**
         * Creates a plain object from an EnterRoomNot message. Also converts values to other types if specified.
         * @param message EnterRoomNot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamebase.EnterRoomNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnterRoomNot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ExitRoomReq. */
    interface IExitRoomReq {
    }

    /** Represents an ExitRoomReq. */
    class ExitRoomReq implements IExitRoomReq {

        /**
         * Constructs a new ExitRoomReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamebase.IExitRoomReq);

        /**
         * Creates a new ExitRoomReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExitRoomReq instance
         */
        public static create(properties?: gamebase.IExitRoomReq): gamebase.ExitRoomReq;

        /**
         * Encodes the specified ExitRoomReq message. Does not implicitly {@link gamebase.ExitRoomReq.verify|verify} messages.
         * @param message ExitRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamebase.IExitRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExitRoomReq message, length delimited. Does not implicitly {@link gamebase.ExitRoomReq.verify|verify} messages.
         * @param message ExitRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamebase.IExitRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExitRoomReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExitRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): gamebase.ExitRoomReq;

        /**
         * Decodes an ExitRoomReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExitRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): gamebase.ExitRoomReq;

        /**
         * Verifies an ExitRoomReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);

        /**
         * Creates an ExitRoomReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExitRoomReq
         */
        public static fromObject(object: { [k: string]: any }): gamebase.ExitRoomReq;

        /**
         * Creates a plain object from an ExitRoomReq message. Also converts values to other types if specified.
         * @param message ExitRoomReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamebase.ExitRoomReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExitRoomReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ExitRoomRsp. */
    interface IExitRoomRsp {

        /** ExitRoomRsp errCode */
        errCode?: (number | null);

        /** ExitRoomRsp errMsg */
        errMsg?: (string | null);
    }

    /** Represents an ExitRoomRsp. */
    class ExitRoomRsp implements IExitRoomRsp {

        /**
         * Constructs a new ExitRoomRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamebase.IExitRoomRsp);

        /** ExitRoomRsp errCode. */
        public errCode: number;

        /** ExitRoomRsp errMsg. */
        public errMsg: string;

        /**
         * Creates a new ExitRoomRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExitRoomRsp instance
         */
        public static create(properties?: gamebase.IExitRoomRsp): gamebase.ExitRoomRsp;

        /**
         * Encodes the specified ExitRoomRsp message. Does not implicitly {@link gamebase.ExitRoomRsp.verify|verify} messages.
         * @param message ExitRoomRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamebase.IExitRoomRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExitRoomRsp message, length delimited. Does not implicitly {@link gamebase.ExitRoomRsp.verify|verify} messages.
         * @param message ExitRoomRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamebase.IExitRoomRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExitRoomRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExitRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): gamebase.ExitRoomRsp;

        /**
         * Decodes an ExitRoomRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExitRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): gamebase.ExitRoomRsp;

        /**
         * Verifies an ExitRoomRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);

        /**
         * Creates an ExitRoomRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExitRoomRsp
         */
        public static fromObject(object: { [k: string]: any }): gamebase.ExitRoomRsp;

        /**
         * Creates a plain object from an ExitRoomRsp message. Also converts values to other types if specified.
         * @param message ExitRoomRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamebase.ExitRoomRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExitRoomRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ExitRoomNot. */
    interface IExitRoomNot {

        /** ExitRoomNot roomId */
        roomId?: (string | null);

        /** ExitRoomNot uid */
        uid?: (number | Long | null);
    }

    /** Represents an ExitRoomNot. */
    class ExitRoomNot implements IExitRoomNot {

        /**
         * Constructs a new ExitRoomNot.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamebase.IExitRoomNot);

        /** ExitRoomNot roomId. */
        public roomId: string;

        /** ExitRoomNot uid. */
        public uid: (number | Long);

        /**
         * Creates a new ExitRoomNot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExitRoomNot instance
         */
        public static create(properties?: gamebase.IExitRoomNot): gamebase.ExitRoomNot;

        /**
         * Encodes the specified ExitRoomNot message. Does not implicitly {@link gamebase.ExitRoomNot.verify|verify} messages.
         * @param message ExitRoomNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamebase.IExitRoomNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExitRoomNot message, length delimited. Does not implicitly {@link gamebase.ExitRoomNot.verify|verify} messages.
         * @param message ExitRoomNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamebase.IExitRoomNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExitRoomNot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExitRoomNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): gamebase.ExitRoomNot;

        /**
         * Decodes an ExitRoomNot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExitRoomNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): gamebase.ExitRoomNot;

        /**
         * Verifies an ExitRoomNot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);

        /**
         * Creates an ExitRoomNot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExitRoomNot
         */
        public static fromObject(object: { [k: string]: any }): gamebase.ExitRoomNot;

        /**
         * Creates a plain object from an ExitRoomNot message. Also converts values to other types if specified.
         * @param message ExitRoomNot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamebase.ExitRoomNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExitRoomNot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DismissRoomReq. */
    interface IDismissRoomReq {

        /** DismissRoomReq roomId */
        roomId?: (string | null);
    }

    /** Represents a DismissRoomReq. */
    class DismissRoomReq implements IDismissRoomReq {

        /**
         * Constructs a new DismissRoomReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamebase.IDismissRoomReq);

        /** DismissRoomReq roomId. */
        public roomId: string;

        /**
         * Creates a new DismissRoomReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DismissRoomReq instance
         */
        public static create(properties?: gamebase.IDismissRoomReq): gamebase.DismissRoomReq;

        /**
         * Encodes the specified DismissRoomReq message. Does not implicitly {@link gamebase.DismissRoomReq.verify|verify} messages.
         * @param message DismissRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamebase.IDismissRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DismissRoomReq message, length delimited. Does not implicitly {@link gamebase.DismissRoomReq.verify|verify} messages.
         * @param message DismissRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamebase.IDismissRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DismissRoomReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DismissRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): gamebase.DismissRoomReq;

        /**
         * Decodes a DismissRoomReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DismissRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): gamebase.DismissRoomReq;

        /**
         * Verifies a DismissRoomReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);

        /**
         * Creates a DismissRoomReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DismissRoomReq
         */
        public static fromObject(object: { [k: string]: any }): gamebase.DismissRoomReq;

        /**
         * Creates a plain object from a DismissRoomReq message. Also converts values to other types if specified.
         * @param message DismissRoomReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamebase.DismissRoomReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DismissRoomReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DismissRoomRsp. */
    interface IDismissRoomRsp {

        /** DismissRoomRsp errCode */
        errCode?: (number | null);

        /** DismissRoomRsp errMsg */
        errMsg?: (string | null);
    }

    /** Represents a DismissRoomRsp. */
    class DismissRoomRsp implements IDismissRoomRsp {

        /**
         * Constructs a new DismissRoomRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamebase.IDismissRoomRsp);

        /** DismissRoomRsp errCode. */
        public errCode: number;

        /** DismissRoomRsp errMsg. */
        public errMsg: string;

        /**
         * Creates a new DismissRoomRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DismissRoomRsp instance
         */
        public static create(properties?: gamebase.IDismissRoomRsp): gamebase.DismissRoomRsp;

        /**
         * Encodes the specified DismissRoomRsp message. Does not implicitly {@link gamebase.DismissRoomRsp.verify|verify} messages.
         * @param message DismissRoomRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamebase.IDismissRoomRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DismissRoomRsp message, length delimited. Does not implicitly {@link gamebase.DismissRoomRsp.verify|verify} messages.
         * @param message DismissRoomRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamebase.IDismissRoomRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DismissRoomRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DismissRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): gamebase.DismissRoomRsp;

        /**
         * Decodes a DismissRoomRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DismissRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): gamebase.DismissRoomRsp;

        /**
         * Verifies a DismissRoomRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);

        /**
         * Creates a DismissRoomRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DismissRoomRsp
         */
        public static fromObject(object: { [k: string]: any }): gamebase.DismissRoomRsp;

        /**
         * Creates a plain object from a DismissRoomRsp message. Also converts values to other types if specified.
         * @param message DismissRoomRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamebase.DismissRoomRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DismissRoomRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeartBeatReq. */
    interface IHeartBeatReq {

        /** HeartBeatReq reqTime */
        reqTime?: (number | Long | null);
    }

    /** Represents a HeartBeatReq. */
    class HeartBeatReq implements IHeartBeatReq {

        /**
         * Constructs a new HeartBeatReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamebase.IHeartBeatReq);

        /** HeartBeatReq reqTime. */
        public reqTime: (number | Long);

        /**
         * Creates a new HeartBeatReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeartBeatReq instance
         */
        public static create(properties?: gamebase.IHeartBeatReq): gamebase.HeartBeatReq;

        /**
         * Encodes the specified HeartBeatReq message. Does not implicitly {@link gamebase.HeartBeatReq.verify|verify} messages.
         * @param message HeartBeatReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamebase.IHeartBeatReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeartBeatReq message, length delimited. Does not implicitly {@link gamebase.HeartBeatReq.verify|verify} messages.
         * @param message HeartBeatReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamebase.IHeartBeatReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeartBeatReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartBeatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): gamebase.HeartBeatReq;

        /**
         * Decodes a HeartBeatReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeartBeatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): gamebase.HeartBeatReq;

        /**
         * Verifies a HeartBeatReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);

        /**
         * Creates a HeartBeatReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeartBeatReq
         */
        public static fromObject(object: { [k: string]: any }): gamebase.HeartBeatReq;

        /**
         * Creates a plain object from a HeartBeatReq message. Also converts values to other types if specified.
         * @param message HeartBeatReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamebase.HeartBeatReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeartBeatReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeartBeatRsp. */
    interface IHeartBeatRsp {

        /** HeartBeatRsp reqTime */
        reqTime?: (number | Long | null);

        /** HeartBeatRsp ackTime */
        ackTime?: (number | Long | null);
    }

    /** Represents a HeartBeatRsp. */
    class HeartBeatRsp implements IHeartBeatRsp {

        /**
         * Constructs a new HeartBeatRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamebase.IHeartBeatRsp);

        /** HeartBeatRsp reqTime. */
        public reqTime: (number | Long);

        /** HeartBeatRsp ackTime. */
        public ackTime: (number | Long);

        /**
         * Creates a new HeartBeatRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeartBeatRsp instance
         */
        public static create(properties?: gamebase.IHeartBeatRsp): gamebase.HeartBeatRsp;

        /**
         * Encodes the specified HeartBeatRsp message. Does not implicitly {@link gamebase.HeartBeatRsp.verify|verify} messages.
         * @param message HeartBeatRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamebase.IHeartBeatRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeartBeatRsp message, length delimited. Does not implicitly {@link gamebase.HeartBeatRsp.verify|verify} messages.
         * @param message HeartBeatRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamebase.IHeartBeatRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeartBeatRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartBeatRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): gamebase.HeartBeatRsp;

        /**
         * Decodes a HeartBeatRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeartBeatRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): gamebase.HeartBeatRsp;

        /**
         * Verifies a HeartBeatRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);

        /**
         * Creates a HeartBeatRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeartBeatRsp
         */
        public static fromObject(object: { [k: string]: any }): gamebase.HeartBeatRsp;

        /**
         * Creates a plain object from a HeartBeatRsp message. Also converts values to other types if specified.
         * @param message HeartBeatRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamebase.HeartBeatRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeartBeatRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a KickPlayerNot. */
    interface IKickPlayerNot {

        /** KickPlayerNot reason */
        reason?: (number | null);

        /** KickPlayerNot msg */
        msg?: (string | null);
    }

    /** Represents a KickPlayerNot. */
    class KickPlayerNot implements IKickPlayerNot {

        /**
         * Constructs a new KickPlayerNot.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamebase.IKickPlayerNot);

        /** KickPlayerNot reason. */
        public reason: number;

        /** KickPlayerNot msg. */
        public msg: string;

        /**
         * Creates a new KickPlayerNot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KickPlayerNot instance
         */
        public static create(properties?: gamebase.IKickPlayerNot): gamebase.KickPlayerNot;

        /**
         * Encodes the specified KickPlayerNot message. Does not implicitly {@link gamebase.KickPlayerNot.verify|verify} messages.
         * @param message KickPlayerNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamebase.IKickPlayerNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KickPlayerNot message, length delimited. Does not implicitly {@link gamebase.KickPlayerNot.verify|verify} messages.
         * @param message KickPlayerNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamebase.IKickPlayerNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KickPlayerNot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KickPlayerNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): gamebase.KickPlayerNot;

        /**
         * Decodes a KickPlayerNot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KickPlayerNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): gamebase.KickPlayerNot;

        /**
         * Verifies a KickPlayerNot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);

        /**
         * Creates a KickPlayerNot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KickPlayerNot
         */
        public static fromObject(object: { [k: string]: any }): gamebase.KickPlayerNot;

        /**
         * Creates a plain object from a KickPlayerNot message. Also converts values to other types if specified.
         * @param message KickPlayerNot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamebase.KickPlayerNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KickPlayerNot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
