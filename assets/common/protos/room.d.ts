import * as $protobuf from "protobufjs";
/** Namespace servermanager. */
export namespace servermanager {

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
        constructor(properties?: servermanager.IRoomInfo);

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
        public static create(properties?: servermanager.IRoomInfo): servermanager.RoomInfo;

        /**
         * Encodes the specified RoomInfo message. Does not implicitly {@link servermanager.RoomInfo.verify|verify} messages.
         * @param message RoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: servermanager.IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link servermanager.RoomInfo.verify|verify} messages.
         * @param message RoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: servermanager.IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): servermanager.RoomInfo;

        /**
         * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): servermanager.RoomInfo;

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
        public static fromObject(object: { [k: string]: any }): servermanager.RoomInfo;

        /**
         * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
         * @param message RoomInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: servermanager.RoomInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoomInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StartJoinRoomReq. */
    interface IStartJoinRoomReq {

        /** StartJoinRoomReq uid */
        uid?: (number | Long | null);

        /** StartJoinRoomReq gameId */
        gameId?: (string | null);

        /** StartJoinRoomReq ruleId */
        ruleId?: (string | null);
    }

    /** Represents a StartJoinRoomReq. */
    class StartJoinRoomReq implements IStartJoinRoomReq {

        /**
         * Constructs a new StartJoinRoomReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: servermanager.IStartJoinRoomReq);

        /** StartJoinRoomReq uid. */
        public uid: (number | Long);

        /** StartJoinRoomReq gameId. */
        public gameId: string;

        /** StartJoinRoomReq ruleId. */
        public ruleId: string;

        /**
         * Creates a new StartJoinRoomReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StartJoinRoomReq instance
         */
        public static create(properties?: servermanager.IStartJoinRoomReq): servermanager.StartJoinRoomReq;

        /**
         * Encodes the specified StartJoinRoomReq message. Does not implicitly {@link servermanager.StartJoinRoomReq.verify|verify} messages.
         * @param message StartJoinRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: servermanager.IStartJoinRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StartJoinRoomReq message, length delimited. Does not implicitly {@link servermanager.StartJoinRoomReq.verify|verify} messages.
         * @param message StartJoinRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: servermanager.IStartJoinRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StartJoinRoomReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StartJoinRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): servermanager.StartJoinRoomReq;

        /**
         * Decodes a StartJoinRoomReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StartJoinRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): servermanager.StartJoinRoomReq;

        /**
         * Verifies a StartJoinRoomReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);

        /**
         * Creates a StartJoinRoomReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StartJoinRoomReq
         */
        public static fromObject(object: { [k: string]: any }): servermanager.StartJoinRoomReq;

        /**
         * Creates a plain object from a StartJoinRoomReq message. Also converts values to other types if specified.
         * @param message StartJoinRoomReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: servermanager.StartJoinRoomReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StartJoinRoomReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StartJoinRoomRsp. */
    interface IStartJoinRoomRsp {

        /** StartJoinRoomRsp errCode */
        errCode?: (number | null);

        /** StartJoinRoomRsp errMsg */
        errMsg?: (string | null);

        /** StartJoinRoomRsp gameData */
        gameData?: (common.IGameData | null);
    }

    /** Represents a StartJoinRoomRsp. */
    class StartJoinRoomRsp implements IStartJoinRoomRsp {

        /**
         * Constructs a new StartJoinRoomRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: servermanager.IStartJoinRoomRsp);

        /** StartJoinRoomRsp errCode. */
        public errCode: number;

        /** StartJoinRoomRsp errMsg. */
        public errMsg: string;

        /** StartJoinRoomRsp gameData. */
        public gameData?: (common.IGameData | null);

        /**
         * Creates a new StartJoinRoomRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StartJoinRoomRsp instance
         */
        public static create(properties?: servermanager.IStartJoinRoomRsp): servermanager.StartJoinRoomRsp;

        /**
         * Encodes the specified StartJoinRoomRsp message. Does not implicitly {@link servermanager.StartJoinRoomRsp.verify|verify} messages.
         * @param message StartJoinRoomRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: servermanager.IStartJoinRoomRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StartJoinRoomRsp message, length delimited. Does not implicitly {@link servermanager.StartJoinRoomRsp.verify|verify} messages.
         * @param message StartJoinRoomRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: servermanager.IStartJoinRoomRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StartJoinRoomRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StartJoinRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): servermanager.StartJoinRoomRsp;

        /**
         * Decodes a StartJoinRoomRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StartJoinRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): servermanager.StartJoinRoomRsp;

        /**
         * Verifies a StartJoinRoomRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);

        /**
         * Creates a StartJoinRoomRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StartJoinRoomRsp
         */
        public static fromObject(object: { [k: string]: any }): servermanager.StartJoinRoomRsp;

        /**
         * Creates a plain object from a StartJoinRoomRsp message. Also converts values to other types if specified.
         * @param message StartJoinRoomRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: servermanager.StartJoinRoomRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StartJoinRoomRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StartJoinRoomNot. */
    interface IStartJoinRoomNot {

        /** StartJoinRoomNot gameId */
        gameId?: (string | null);

        /** StartJoinRoomNot ruleId */
        ruleId?: (string | null);
    }

    /** Represents a StartJoinRoomNot. */
    class StartJoinRoomNot implements IStartJoinRoomNot {

        /**
         * Constructs a new StartJoinRoomNot.
         * @param [properties] Properties to set
         */
        constructor(properties?: servermanager.IStartJoinRoomNot);

        /** StartJoinRoomNot gameId. */
        public gameId: string;

        /** StartJoinRoomNot ruleId. */
        public ruleId: string;

        /**
         * Creates a new StartJoinRoomNot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StartJoinRoomNot instance
         */
        public static create(properties?: servermanager.IStartJoinRoomNot): servermanager.StartJoinRoomNot;

        /**
         * Encodes the specified StartJoinRoomNot message. Does not implicitly {@link servermanager.StartJoinRoomNot.verify|verify} messages.
         * @param message StartJoinRoomNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: servermanager.IStartJoinRoomNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StartJoinRoomNot message, length delimited. Does not implicitly {@link servermanager.StartJoinRoomNot.verify|verify} messages.
         * @param message StartJoinRoomNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: servermanager.IStartJoinRoomNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StartJoinRoomNot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StartJoinRoomNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): servermanager.StartJoinRoomNot;

        /**
         * Decodes a StartJoinRoomNot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StartJoinRoomNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): servermanager.StartJoinRoomNot;

        /**
         * Verifies a StartJoinRoomNot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);

        /**
         * Creates a StartJoinRoomNot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StartJoinRoomNot
         */
        public static fromObject(object: { [k: string]: any }): servermanager.StartJoinRoomNot;

        /**
         * Creates a plain object from a StartJoinRoomNot message. Also converts values to other types if specified.
         * @param message StartJoinRoomNot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: servermanager.StartJoinRoomNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StartJoinRoomNot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CancelJoinRoomReq. */
    interface ICancelJoinRoomReq {

        /** CancelJoinRoomReq uid */
        uid?: (number | Long | null);
    }

    /** Represents a CancelJoinRoomReq. */
    class CancelJoinRoomReq implements ICancelJoinRoomReq {

        /**
         * Constructs a new CancelJoinRoomReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: servermanager.ICancelJoinRoomReq);

        /** CancelJoinRoomReq uid. */
        public uid: (number | Long);

        /**
         * Creates a new CancelJoinRoomReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CancelJoinRoomReq instance
         */
        public static create(properties?: servermanager.ICancelJoinRoomReq): servermanager.CancelJoinRoomReq;

        /**
         * Encodes the specified CancelJoinRoomReq message. Does not implicitly {@link servermanager.CancelJoinRoomReq.verify|verify} messages.
         * @param message CancelJoinRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: servermanager.ICancelJoinRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CancelJoinRoomReq message, length delimited. Does not implicitly {@link servermanager.CancelJoinRoomReq.verify|verify} messages.
         * @param message CancelJoinRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: servermanager.ICancelJoinRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CancelJoinRoomReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CancelJoinRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): servermanager.CancelJoinRoomReq;

        /**
         * Decodes a CancelJoinRoomReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CancelJoinRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): servermanager.CancelJoinRoomReq;

        /**
         * Verifies a CancelJoinRoomReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);

        /**
         * Creates a CancelJoinRoomReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CancelJoinRoomReq
         */
        public static fromObject(object: { [k: string]: any }): servermanager.CancelJoinRoomReq;

        /**
         * Creates a plain object from a CancelJoinRoomReq message. Also converts values to other types if specified.
         * @param message CancelJoinRoomReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: servermanager.CancelJoinRoomReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CancelJoinRoomReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CancelJoinRoomRsp. */
    interface ICancelJoinRoomRsp {

        /** CancelJoinRoomRsp errCode */
        errCode?: (number | null);

        /** CancelJoinRoomRsp errMsg */
        errMsg?: (string | null);
    }

    /** Represents a CancelJoinRoomRsp. */
    class CancelJoinRoomRsp implements ICancelJoinRoomRsp {

        /**
         * Constructs a new CancelJoinRoomRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: servermanager.ICancelJoinRoomRsp);

        /** CancelJoinRoomRsp errCode. */
        public errCode: number;

        /** CancelJoinRoomRsp errMsg. */
        public errMsg: string;

        /**
         * Creates a new CancelJoinRoomRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CancelJoinRoomRsp instance
         */
        public static create(properties?: servermanager.ICancelJoinRoomRsp): servermanager.CancelJoinRoomRsp;

        /**
         * Encodes the specified CancelJoinRoomRsp message. Does not implicitly {@link servermanager.CancelJoinRoomRsp.verify|verify} messages.
         * @param message CancelJoinRoomRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: servermanager.ICancelJoinRoomRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CancelJoinRoomRsp message, length delimited. Does not implicitly {@link servermanager.CancelJoinRoomRsp.verify|verify} messages.
         * @param message CancelJoinRoomRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: servermanager.ICancelJoinRoomRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CancelJoinRoomRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CancelJoinRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): servermanager.CancelJoinRoomRsp;

        /**
         * Decodes a CancelJoinRoomRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CancelJoinRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): servermanager.CancelJoinRoomRsp;

        /**
         * Verifies a CancelJoinRoomRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);

        /**
         * Creates a CancelJoinRoomRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CancelJoinRoomRsp
         */
        public static fromObject(object: { [k: string]: any }): servermanager.CancelJoinRoomRsp;

        /**
         * Creates a plain object from a CancelJoinRoomRsp message. Also converts values to other types if specified.
         * @param message CancelJoinRoomRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: servermanager.CancelJoinRoomRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CancelJoinRoomRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetRoomInfoReq. */
    interface IGetRoomInfoReq {

        /** GetRoomInfoReq roomId */
        roomId?: (string | null);
    }

    /** Represents a GetRoomInfoReq. */
    class GetRoomInfoReq implements IGetRoomInfoReq {

        /**
         * Constructs a new GetRoomInfoReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: servermanager.IGetRoomInfoReq);

        /** GetRoomInfoReq roomId. */
        public roomId: string;

        /**
         * Creates a new GetRoomInfoReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRoomInfoReq instance
         */
        public static create(properties?: servermanager.IGetRoomInfoReq): servermanager.GetRoomInfoReq;

        /**
         * Encodes the specified GetRoomInfoReq message. Does not implicitly {@link servermanager.GetRoomInfoReq.verify|verify} messages.
         * @param message GetRoomInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: servermanager.IGetRoomInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetRoomInfoReq message, length delimited. Does not implicitly {@link servermanager.GetRoomInfoReq.verify|verify} messages.
         * @param message GetRoomInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: servermanager.IGetRoomInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetRoomInfoReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRoomInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): servermanager.GetRoomInfoReq;

        /**
         * Decodes a GetRoomInfoReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetRoomInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): servermanager.GetRoomInfoReq;

        /**
         * Verifies a GetRoomInfoReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);

        /**
         * Creates a GetRoomInfoReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetRoomInfoReq
         */
        public static fromObject(object: { [k: string]: any }): servermanager.GetRoomInfoReq;

        /**
         * Creates a plain object from a GetRoomInfoReq message. Also converts values to other types if specified.
         * @param message GetRoomInfoReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: servermanager.GetRoomInfoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetRoomInfoReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetRoomInfoRsp. */
    interface IGetRoomInfoRsp {

        /** GetRoomInfoRsp errCode */
        errCode?: (number | null);

        /** GetRoomInfoRsp errMsg */
        errMsg?: (string | null);

        /** GetRoomInfoRsp room */
        room?: (servermanager.IRoomInfo | null);
    }

    /** Represents a GetRoomInfoRsp. */
    class GetRoomInfoRsp implements IGetRoomInfoRsp {

        /**
         * Constructs a new GetRoomInfoRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: servermanager.IGetRoomInfoRsp);

        /** GetRoomInfoRsp errCode. */
        public errCode: number;

        /** GetRoomInfoRsp errMsg. */
        public errMsg: string;

        /** GetRoomInfoRsp room. */
        public room?: (servermanager.IRoomInfo | null);

        /**
         * Creates a new GetRoomInfoRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRoomInfoRsp instance
         */
        public static create(properties?: servermanager.IGetRoomInfoRsp): servermanager.GetRoomInfoRsp;

        /**
         * Encodes the specified GetRoomInfoRsp message. Does not implicitly {@link servermanager.GetRoomInfoRsp.verify|verify} messages.
         * @param message GetRoomInfoRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: servermanager.IGetRoomInfoRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetRoomInfoRsp message, length delimited. Does not implicitly {@link servermanager.GetRoomInfoRsp.verify|verify} messages.
         * @param message GetRoomInfoRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: servermanager.IGetRoomInfoRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetRoomInfoRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRoomInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): servermanager.GetRoomInfoRsp;

        /**
         * Decodes a GetRoomInfoRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetRoomInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): servermanager.GetRoomInfoRsp;

        /**
         * Verifies a GetRoomInfoRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);

        /**
         * Creates a GetRoomInfoRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetRoomInfoRsp
         */
        public static fromObject(object: { [k: string]: any }): servermanager.GetRoomInfoRsp;

        /**
         * Creates a plain object from a GetRoomInfoRsp message. Also converts values to other types if specified.
         * @param message GetRoomInfoRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: servermanager.GetRoomInfoRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetRoomInfoRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetCurRoomInfoReq. */
    interface IGetCurRoomInfoReq {

        /** GetCurRoomInfoReq uid */
        uid?: (number | Long | null);
    }

    /** Represents a GetCurRoomInfoReq. */
    class GetCurRoomInfoReq implements IGetCurRoomInfoReq {

        /**
         * Constructs a new GetCurRoomInfoReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: servermanager.IGetCurRoomInfoReq);

        /** GetCurRoomInfoReq uid. */
        public uid: (number | Long);

        /**
         * Creates a new GetCurRoomInfoReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetCurRoomInfoReq instance
         */
        public static create(properties?: servermanager.IGetCurRoomInfoReq): servermanager.GetCurRoomInfoReq;

        /**
         * Encodes the specified GetCurRoomInfoReq message. Does not implicitly {@link servermanager.GetCurRoomInfoReq.verify|verify} messages.
         * @param message GetCurRoomInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: servermanager.IGetCurRoomInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetCurRoomInfoReq message, length delimited. Does not implicitly {@link servermanager.GetCurRoomInfoReq.verify|verify} messages.
         * @param message GetCurRoomInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: servermanager.IGetCurRoomInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetCurRoomInfoReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetCurRoomInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): servermanager.GetCurRoomInfoReq;

        /**
         * Decodes a GetCurRoomInfoReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetCurRoomInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): servermanager.GetCurRoomInfoReq;

        /**
         * Verifies a GetCurRoomInfoReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);

        /**
         * Creates a GetCurRoomInfoReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetCurRoomInfoReq
         */
        public static fromObject(object: { [k: string]: any }): servermanager.GetCurRoomInfoReq;

        /**
         * Creates a plain object from a GetCurRoomInfoReq message. Also converts values to other types if specified.
         * @param message GetCurRoomInfoReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: servermanager.GetCurRoomInfoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetCurRoomInfoReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetCurRoomInfoRsp. */
    interface IGetCurRoomInfoRsp {

        /** GetCurRoomInfoRsp errCode */
        errCode?: (number | null);

        /** GetCurRoomInfoRsp errMsg */
        errMsg?: (string | null);

        /** GetCurRoomInfoRsp room */
        room?: (servermanager.IRoomInfo | null);
    }

    /** Represents a GetCurRoomInfoRsp. */
    class GetCurRoomInfoRsp implements IGetCurRoomInfoRsp {

        /**
         * Constructs a new GetCurRoomInfoRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: servermanager.IGetCurRoomInfoRsp);

        /** GetCurRoomInfoRsp errCode. */
        public errCode: number;

        /** GetCurRoomInfoRsp errMsg. */
        public errMsg: string;

        /** GetCurRoomInfoRsp room. */
        public room?: (servermanager.IRoomInfo | null);

        /**
         * Creates a new GetCurRoomInfoRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetCurRoomInfoRsp instance
         */
        public static create(properties?: servermanager.IGetCurRoomInfoRsp): servermanager.GetCurRoomInfoRsp;

        /**
         * Encodes the specified GetCurRoomInfoRsp message. Does not implicitly {@link servermanager.GetCurRoomInfoRsp.verify|verify} messages.
         * @param message GetCurRoomInfoRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: servermanager.IGetCurRoomInfoRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetCurRoomInfoRsp message, length delimited. Does not implicitly {@link servermanager.GetCurRoomInfoRsp.verify|verify} messages.
         * @param message GetCurRoomInfoRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: servermanager.IGetCurRoomInfoRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetCurRoomInfoRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetCurRoomInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): servermanager.GetCurRoomInfoRsp;

        /**
         * Decodes a GetCurRoomInfoRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetCurRoomInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): servermanager.GetCurRoomInfoRsp;

        /**
         * Verifies a GetCurRoomInfoRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);

        /**
         * Creates a GetCurRoomInfoRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetCurRoomInfoRsp
         */
        public static fromObject(object: { [k: string]: any }): servermanager.GetCurRoomInfoRsp;

        /**
         * Creates a plain object from a GetCurRoomInfoRsp message. Also converts values to other types if specified.
         * @param message GetCurRoomInfoRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: servermanager.GetCurRoomInfoRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetCurRoomInfoRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RoomListReq. */
    interface IRoomListReq {
    }

    /** Represents a RoomListReq. */
    class RoomListReq implements IRoomListReq {

        /**
         * Constructs a new RoomListReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: servermanager.IRoomListReq);

        /**
         * Creates a new RoomListReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomListReq instance
         */
        public static create(properties?: servermanager.IRoomListReq): servermanager.RoomListReq;

        /**
         * Encodes the specified RoomListReq message. Does not implicitly {@link servermanager.RoomListReq.verify|verify} messages.
         * @param message RoomListReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: servermanager.IRoomListReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoomListReq message, length delimited. Does not implicitly {@link servermanager.RoomListReq.verify|verify} messages.
         * @param message RoomListReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: servermanager.IRoomListReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomListReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): servermanager.RoomListReq;

        /**
         * Decodes a RoomListReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): servermanager.RoomListReq;

        /**
         * Verifies a RoomListReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);

        /**
         * Creates a RoomListReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoomListReq
         */
        public static fromObject(object: { [k: string]: any }): servermanager.RoomListReq;

        /**
         * Creates a plain object from a RoomListReq message. Also converts values to other types if specified.
         * @param message RoomListReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: servermanager.RoomListReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoomListReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RoomListRsp. */
    interface IRoomListRsp {

        /** RoomListRsp errCode */
        errCode?: (number | null);

        /** RoomListRsp errMsg */
        errMsg?: (string | null);

        /** RoomListRsp roomList */
        roomList?: (servermanager.IRoomInfo[] | null);
    }

    /** Represents a RoomListRsp. */
    class RoomListRsp implements IRoomListRsp {

        /**
         * Constructs a new RoomListRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: servermanager.IRoomListRsp);

        /** RoomListRsp errCode. */
        public errCode: number;

        /** RoomListRsp errMsg. */
        public errMsg: string;

        /** RoomListRsp roomList. */
        public roomList: servermanager.IRoomInfo[];

        /**
         * Creates a new RoomListRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomListRsp instance
         */
        public static create(properties?: servermanager.IRoomListRsp): servermanager.RoomListRsp;

        /**
         * Encodes the specified RoomListRsp message. Does not implicitly {@link servermanager.RoomListRsp.verify|verify} messages.
         * @param message RoomListRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: servermanager.IRoomListRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoomListRsp message, length delimited. Does not implicitly {@link servermanager.RoomListRsp.verify|verify} messages.
         * @param message RoomListRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: servermanager.IRoomListRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomListRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomListRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): servermanager.RoomListRsp;

        /**
         * Decodes a RoomListRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomListRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): servermanager.RoomListRsp;

        /**
         * Verifies a RoomListRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);

        /**
         * Creates a RoomListRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoomListRsp
         */
        public static fromObject(object: { [k: string]: any }): servermanager.RoomListRsp;

        /**
         * Creates a plain object from a RoomListRsp message. Also converts values to other types if specified.
         * @param message RoomListRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: servermanager.RoomListRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoomListRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnterRoomConfirmReq. */
    interface IEnterRoomConfirmReq {

        /** EnterRoomConfirmReq confirmed */
        confirmed?: (boolean | null);
    }

    /** Represents an EnterRoomConfirmReq. */
    class EnterRoomConfirmReq implements IEnterRoomConfirmReq {

        /**
         * Constructs a new EnterRoomConfirmReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: servermanager.IEnterRoomConfirmReq);

        /** EnterRoomConfirmReq confirmed. */
        public confirmed: boolean;

        /**
         * Creates a new EnterRoomConfirmReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterRoomConfirmReq instance
         */
        public static create(properties?: servermanager.IEnterRoomConfirmReq): servermanager.EnterRoomConfirmReq;

        /**
         * Encodes the specified EnterRoomConfirmReq message. Does not implicitly {@link servermanager.EnterRoomConfirmReq.verify|verify} messages.
         * @param message EnterRoomConfirmReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: servermanager.IEnterRoomConfirmReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EnterRoomConfirmReq message, length delimited. Does not implicitly {@link servermanager.EnterRoomConfirmReq.verify|verify} messages.
         * @param message EnterRoomConfirmReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: servermanager.IEnterRoomConfirmReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnterRoomConfirmReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterRoomConfirmReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): servermanager.EnterRoomConfirmReq;

        /**
         * Decodes an EnterRoomConfirmReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnterRoomConfirmReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): servermanager.EnterRoomConfirmReq;

        /**
         * Verifies an EnterRoomConfirmReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);

        /**
         * Creates an EnterRoomConfirmReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnterRoomConfirmReq
         */
        public static fromObject(object: { [k: string]: any }): servermanager.EnterRoomConfirmReq;

        /**
         * Creates a plain object from an EnterRoomConfirmReq message. Also converts values to other types if specified.
         * @param message EnterRoomConfirmReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: servermanager.EnterRoomConfirmReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnterRoomConfirmReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnterRoomConfirmRsp. */
    interface IEnterRoomConfirmRsp {

        /** EnterRoomConfirmRsp errCode */
        errCode?: (number | null);

        /** EnterRoomConfirmRsp errMsg */
        errMsg?: (string | null);

        /** EnterRoomConfirmRsp room */
        room?: (servermanager.IRoomInfo | null);
    }

    /** Represents an EnterRoomConfirmRsp. */
    class EnterRoomConfirmRsp implements IEnterRoomConfirmRsp {

        /**
         * Constructs a new EnterRoomConfirmRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: servermanager.IEnterRoomConfirmRsp);

        /** EnterRoomConfirmRsp errCode. */
        public errCode: number;

        /** EnterRoomConfirmRsp errMsg. */
        public errMsg: string;

        /** EnterRoomConfirmRsp room. */
        public room?: (servermanager.IRoomInfo | null);

        /**
         * Creates a new EnterRoomConfirmRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterRoomConfirmRsp instance
         */
        public static create(properties?: servermanager.IEnterRoomConfirmRsp): servermanager.EnterRoomConfirmRsp;

        /**
         * Encodes the specified EnterRoomConfirmRsp message. Does not implicitly {@link servermanager.EnterRoomConfirmRsp.verify|verify} messages.
         * @param message EnterRoomConfirmRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: servermanager.IEnterRoomConfirmRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EnterRoomConfirmRsp message, length delimited. Does not implicitly {@link servermanager.EnterRoomConfirmRsp.verify|verify} messages.
         * @param message EnterRoomConfirmRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: servermanager.IEnterRoomConfirmRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnterRoomConfirmRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterRoomConfirmRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): servermanager.EnterRoomConfirmRsp;

        /**
         * Decodes an EnterRoomConfirmRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnterRoomConfirmRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): servermanager.EnterRoomConfirmRsp;

        /**
         * Verifies an EnterRoomConfirmRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);

        /**
         * Creates an EnterRoomConfirmRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnterRoomConfirmRsp
         */
        public static fromObject(object: { [k: string]: any }): servermanager.EnterRoomConfirmRsp;

        /**
         * Creates a plain object from an EnterRoomConfirmRsp message. Also converts values to other types if specified.
         * @param message EnterRoomConfirmRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: servermanager.EnterRoomConfirmRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnterRoomConfirmRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
