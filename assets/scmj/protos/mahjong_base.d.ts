import * as $protobuf from "protobufjs";
/** Namespace mahjong_base. */
export namespace mahjong_base {

    /** Properties of a ReadyReq. */
    interface IReadyReq {

        /** ReadyReq isReady */
        isReady?: (boolean|null);
    }

    /** Represents a ReadyReq. */
    class ReadyReq implements IReadyReq {

        /**
         * Constructs a new ReadyReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: mahjong_base.IReadyReq);

        /** ReadyReq isReady. */
        public isReady: boolean;

        /**
         * Creates a new ReadyReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReadyReq instance
         */
        public static create(properties?: mahjong_base.IReadyReq): mahjong_base.ReadyReq;

        /**
         * Encodes the specified ReadyReq message. Does not implicitly {@link mahjong_base.ReadyReq.verify|verify} messages.
         * @param message ReadyReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mahjong_base.IReadyReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReadyReq message, length delimited. Does not implicitly {@link mahjong_base.ReadyReq.verify|verify} messages.
         * @param message ReadyReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mahjong_base.IReadyReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReadyReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReadyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_base.ReadyReq;

        /**
         * Decodes a ReadyReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReadyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_base.ReadyReq;

        /**
         * Verifies a ReadyReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReadyReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReadyReq
         */
        public static fromObject(object: { [k: string]: any }): mahjong_base.ReadyReq;

        /**
         * Creates a plain object from a ReadyReq message. Also converts values to other types if specified.
         * @param message ReadyReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mahjong_base.ReadyReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReadyReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReadyRsp. */
    interface IReadyRsp {

        /** ReadyRsp errCode */
        errCode?: (number|null);

        /** ReadyRsp errMsg */
        errMsg?: (string|null);
    }

    /** Represents a ReadyRsp. */
    class ReadyRsp implements IReadyRsp {

        /**
         * Constructs a new ReadyRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: mahjong_base.IReadyRsp);

        /** ReadyRsp errCode. */
        public errCode: number;

        /** ReadyRsp errMsg. */
        public errMsg: string;

        /**
         * Creates a new ReadyRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReadyRsp instance
         */
        public static create(properties?: mahjong_base.IReadyRsp): mahjong_base.ReadyRsp;

        /**
         * Encodes the specified ReadyRsp message. Does not implicitly {@link mahjong_base.ReadyRsp.verify|verify} messages.
         * @param message ReadyRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mahjong_base.IReadyRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReadyRsp message, length delimited. Does not implicitly {@link mahjong_base.ReadyRsp.verify|verify} messages.
         * @param message ReadyRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mahjong_base.IReadyRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReadyRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReadyRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_base.ReadyRsp;

        /**
         * Decodes a ReadyRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReadyRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_base.ReadyRsp;

        /**
         * Verifies a ReadyRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReadyRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReadyRsp
         */
        public static fromObject(object: { [k: string]: any }): mahjong_base.ReadyRsp;

        /**
         * Creates a plain object from a ReadyRsp message. Also converts values to other types if specified.
         * @param message ReadyRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mahjong_base.ReadyRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReadyRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReadyNot. */
    interface IReadyNot {

        /** ReadyNot uid */
        uid?: (number|Long|null);

        /** ReadyNot isReady */
        isReady?: (boolean|null);
    }

    /** Represents a ReadyNot. */
    class ReadyNot implements IReadyNot {

        /**
         * Constructs a new ReadyNot.
         * @param [properties] Properties to set
         */
        constructor(properties?: mahjong_base.IReadyNot);

        /** ReadyNot uid. */
        public uid: (number|Long);

        /** ReadyNot isReady. */
        public isReady: boolean;

        /**
         * Creates a new ReadyNot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReadyNot instance
         */
        public static create(properties?: mahjong_base.IReadyNot): mahjong_base.ReadyNot;

        /**
         * Encodes the specified ReadyNot message. Does not implicitly {@link mahjong_base.ReadyNot.verify|verify} messages.
         * @param message ReadyNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mahjong_base.IReadyNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReadyNot message, length delimited. Does not implicitly {@link mahjong_base.ReadyNot.verify|verify} messages.
         * @param message ReadyNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mahjong_base.IReadyNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReadyNot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReadyNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_base.ReadyNot;

        /**
         * Decodes a ReadyNot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReadyNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_base.ReadyNot;

        /**
         * Verifies a ReadyNot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReadyNot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReadyNot
         */
        public static fromObject(object: { [k: string]: any }): mahjong_base.ReadyNot;

        /**
         * Creates a plain object from a ReadyNot message. Also converts values to other types if specified.
         * @param message ReadyNot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mahjong_base.ReadyNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReadyNot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
