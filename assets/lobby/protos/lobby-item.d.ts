import * as $protobuf from "protobufjs";
/** Namespace lobby_item. */
export namespace lobby_item {

    /** Properties of an UpdateMjzzItemNot. */
    interface IUpdateMjzzItemNot {

        /** UpdateMjzzItemNot cliParam */
        cliParam?: (string|null);

        /** UpdateMjzzItemNot update */
        update?: (lobby_login.IItemUpdate[]|null);
    }

    /** Represents an UpdateMjzzItemNot. */
    class UpdateMjzzItemNot implements IUpdateMjzzItemNot {

        /**
         * Constructs a new UpdateMjzzItemNot.
         * @param [properties] Properties to set
         */
        constructor(properties?: lobby_item.IUpdateMjzzItemNot);

        /** UpdateMjzzItemNot cliParam. */
        public cliParam: string;

        /** UpdateMjzzItemNot update. */
        public update: lobby_login.IItemUpdate[];

        /**
         * Creates a new UpdateMjzzItemNot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateMjzzItemNot instance
         */
        public static create(properties?: lobby_item.IUpdateMjzzItemNot): lobby_item.UpdateMjzzItemNot;

        /**
         * Encodes the specified UpdateMjzzItemNot message. Does not implicitly {@link lobby_item.UpdateMjzzItemNot.verify|verify} messages.
         * @param message UpdateMjzzItemNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lobby_item.IUpdateMjzzItemNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateMjzzItemNot message, length delimited. Does not implicitly {@link lobby_item.UpdateMjzzItemNot.verify|verify} messages.
         * @param message UpdateMjzzItemNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lobby_item.IUpdateMjzzItemNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateMjzzItemNot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateMjzzItemNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lobby_item.UpdateMjzzItemNot;

        /**
         * Decodes an UpdateMjzzItemNot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateMjzzItemNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lobby_item.UpdateMjzzItemNot;

        /**
         * Verifies an UpdateMjzzItemNot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateMjzzItemNot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateMjzzItemNot
         */
        public static fromObject(object: { [k: string]: any }): lobby_item.UpdateMjzzItemNot;

        /**
         * Creates a plain object from an UpdateMjzzItemNot message. Also converts values to other types if specified.
         * @param message UpdateMjzzItemNot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lobby_item.UpdateMjzzItemNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateMjzzItemNot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

}
