import * as $protobuf from "protobufjs";
/** Namespace lobby_login. */
export namespace lobby_login {

    /** Properties of a LoginReq. */
    interface ILoginReq {

        /** LoginReq guid */
        guid?: (string|null);

        /** LoginReq token */
        token?: (string|null);

        /** LoginReq mid */
        mid?: (string|null);

        /** LoginReq pn */
        pn?: (string|null);
    }

    /** Represents a LoginReq. */
    class LoginReq implements ILoginReq {

        /**
         * Constructs a new LoginReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: lobby_login.ILoginReq);

        /** LoginReq guid. */
        public guid: string;

        /** LoginReq token. */
        public token: string;

        /** LoginReq mid. */
        public mid: string;

        /** LoginReq pn. */
        public pn: string;

        /**
         * Creates a new LoginReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginReq instance
         */
        public static create(properties?: lobby_login.ILoginReq): lobby_login.LoginReq;

        /**
         * Encodes the specified LoginReq message. Does not implicitly {@link lobby_login.LoginReq.verify|verify} messages.
         * @param message LoginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lobby_login.ILoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link lobby_login.LoginReq.verify|verify} messages.
         * @param message LoginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lobby_login.ILoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lobby_login.LoginReq;

        /**
         * Decodes a LoginReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lobby_login.LoginReq;

        /**
         * Verifies a LoginReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginReq
         */
        public static fromObject(object: { [k: string]: any }): lobby_login.LoginReq;

        /**
         * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
         * @param message LoginReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lobby_login.LoginReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginRsp. */
    interface ILoginRsp {

        /** LoginRsp errCode */
        errCode?: (number|null);

        /** LoginRsp errMsg */
        errMsg?: (string|null);

        /** LoginRsp uid */
        uid?: (number|Long|null);

        /** LoginRsp sex */
        sex?: (number|null);

        /** LoginRsp level */
        level?: (number|null);

        /** LoginRsp money */
        money?: (number|Long|null);

        /** LoginRsp vip */
        vip?: (number|null);

        /** LoginRsp gameData */
        gameData?: (common.IGameData|null);

        /** LoginRsp items */
        items?: (lobby_login.IItem[]|null);
    }

    /** Represents a LoginRsp. */
    class LoginRsp implements ILoginRsp {

        /**
         * Constructs a new LoginRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: lobby_login.ILoginRsp);

        /** LoginRsp errCode. */
        public errCode: number;

        /** LoginRsp errMsg. */
        public errMsg: string;

        /** LoginRsp uid. */
        public uid: (number|Long);

        /** LoginRsp sex. */
        public sex: number;

        /** LoginRsp level. */
        public level: number;

        /** LoginRsp money. */
        public money: (number|Long);

        /** LoginRsp vip. */
        public vip: number;

        /** LoginRsp gameData. */
        public gameData?: (common.IGameData|null);

        /** LoginRsp items. */
        public items: lobby_login.IItem[];

        /**
         * Creates a new LoginRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginRsp instance
         */
        public static create(properties?: lobby_login.ILoginRsp): lobby_login.LoginRsp;

        /**
         * Encodes the specified LoginRsp message. Does not implicitly {@link lobby_login.LoginRsp.verify|verify} messages.
         * @param message LoginRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lobby_login.ILoginRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginRsp message, length delimited. Does not implicitly {@link lobby_login.LoginRsp.verify|verify} messages.
         * @param message LoginRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lobby_login.ILoginRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lobby_login.LoginRsp;

        /**
         * Decodes a LoginRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lobby_login.LoginRsp;

        /**
         * Verifies a LoginRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginRsp
         */
        public static fromObject(object: { [k: string]: any }): lobby_login.LoginRsp;

        /**
         * Creates a plain object from a LoginRsp message. Also converts values to other types if specified.
         * @param message LoginRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lobby_login.LoginRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Item. */
    interface IItem {

        /** Item id */
        id?: (number|null);

        /** Item num */
        num?: (number|Long|null);

        /** Item expireAt */
        expireAt?: (number|null);
    }

    /** Represents an Item. */
    class Item implements IItem {

        /**
         * Constructs a new Item.
         * @param [properties] Properties to set
         */
        constructor(properties?: lobby_login.IItem);

        /** Item id. */
        public id: number;

        /** Item num. */
        public num: (number|Long);

        /** Item expireAt. */
        public expireAt: number;

        /**
         * Creates a new Item instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Item instance
         */
        public static create(properties?: lobby_login.IItem): lobby_login.Item;

        /**
         * Encodes the specified Item message. Does not implicitly {@link lobby_login.Item.verify|verify} messages.
         * @param message Item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lobby_login.IItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Item message, length delimited. Does not implicitly {@link lobby_login.Item.verify|verify} messages.
         * @param message Item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lobby_login.IItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Item message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lobby_login.Item;

        /**
         * Decodes an Item message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lobby_login.Item;

        /**
         * Verifies an Item message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Item message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Item
         */
        public static fromObject(object: { [k: string]: any }): lobby_login.Item;

        /**
         * Creates a plain object from an Item message. Also converts values to other types if specified.
         * @param message Item
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lobby_login.Item, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Item to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ItemOpt. */
    interface IItemOpt {

        /** ItemOpt id */
        id?: (number|null);

        /** ItemOpt num */
        num?: (number|Long|null);

        /** ItemOpt expireAt */
        expireAt?: (number|null);
    }

    /** Represents an ItemOpt. */
    class ItemOpt implements IItemOpt {

        /**
         * Constructs a new ItemOpt.
         * @param [properties] Properties to set
         */
        constructor(properties?: lobby_login.IItemOpt);

        /** ItemOpt id. */
        public id: number;

        /** ItemOpt num. */
        public num: (number|Long);

        /** ItemOpt expireAt. */
        public expireAt: number;

        /**
         * Creates a new ItemOpt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ItemOpt instance
         */
        public static create(properties?: lobby_login.IItemOpt): lobby_login.ItemOpt;

        /**
         * Encodes the specified ItemOpt message. Does not implicitly {@link lobby_login.ItemOpt.verify|verify} messages.
         * @param message ItemOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lobby_login.IItemOpt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ItemOpt message, length delimited. Does not implicitly {@link lobby_login.ItemOpt.verify|verify} messages.
         * @param message ItemOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lobby_login.IItemOpt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ItemOpt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ItemOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lobby_login.ItemOpt;

        /**
         * Decodes an ItemOpt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ItemOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lobby_login.ItemOpt;

        /**
         * Verifies an ItemOpt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ItemOpt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ItemOpt
         */
        public static fromObject(object: { [k: string]: any }): lobby_login.ItemOpt;

        /**
         * Creates a plain object from an ItemOpt message. Also converts values to other types if specified.
         * @param message ItemOpt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lobby_login.ItemOpt, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ItemOpt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ItemUpdate. */
    interface IItemUpdate {

        /** ItemUpdate id */
        id?: (number|null);

        /** ItemUpdate change */
        change?: (number|Long|null);

        /** ItemUpdate num */
        num?: (number|Long|null);

        /** ItemUpdate expireAt */
        expireAt?: (number|null);
    }

    /** Represents an ItemUpdate. */
    class ItemUpdate implements IItemUpdate {

        /**
         * Constructs a new ItemUpdate.
         * @param [properties] Properties to set
         */
        constructor(properties?: lobby_login.IItemUpdate);

        /** ItemUpdate id. */
        public id: number;

        /** ItemUpdate change. */
        public change: (number|Long);

        /** ItemUpdate num. */
        public num: (number|Long);

        /** ItemUpdate expireAt. */
        public expireAt: number;

        /**
         * Creates a new ItemUpdate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ItemUpdate instance
         */
        public static create(properties?: lobby_login.IItemUpdate): lobby_login.ItemUpdate;

        /**
         * Encodes the specified ItemUpdate message. Does not implicitly {@link lobby_login.ItemUpdate.verify|verify} messages.
         * @param message ItemUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lobby_login.IItemUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ItemUpdate message, length delimited. Does not implicitly {@link lobby_login.ItemUpdate.verify|verify} messages.
         * @param message ItemUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lobby_login.IItemUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ItemUpdate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ItemUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lobby_login.ItemUpdate;

        /**
         * Decodes an ItemUpdate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ItemUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lobby_login.ItemUpdate;

        /**
         * Verifies an ItemUpdate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ItemUpdate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ItemUpdate
         */
        public static fromObject(object: { [k: string]: any }): lobby_login.ItemUpdate;

        /**
         * Creates a plain object from an ItemUpdate message. Also converts values to other types if specified.
         * @param message ItemUpdate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lobby_login.ItemUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ItemUpdate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateItemNot. */
    interface IUpdateItemNot {

        /** UpdateItemNot cliParam */
        cliParam?: (string|null);

        /** UpdateItemNot update */
        update?: (lobby_login.IItemUpdate[]|null);
    }

    /** Represents an UpdateItemNot. */
    class UpdateItemNot implements IUpdateItemNot {

        /**
         * Constructs a new UpdateItemNot.
         * @param [properties] Properties to set
         */
        constructor(properties?: lobby_login.IUpdateItemNot);

        /** UpdateItemNot cliParam. */
        public cliParam: string;

        /** UpdateItemNot update. */
        public update: lobby_login.IItemUpdate[];

        /**
         * Creates a new UpdateItemNot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateItemNot instance
         */
        public static create(properties?: lobby_login.IUpdateItemNot): lobby_login.UpdateItemNot;

        /**
         * Encodes the specified UpdateItemNot message. Does not implicitly {@link lobby_login.UpdateItemNot.verify|verify} messages.
         * @param message UpdateItemNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lobby_login.IUpdateItemNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateItemNot message, length delimited. Does not implicitly {@link lobby_login.UpdateItemNot.verify|verify} messages.
         * @param message UpdateItemNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lobby_login.IUpdateItemNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateItemNot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateItemNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lobby_login.UpdateItemNot;

        /**
         * Decodes an UpdateItemNot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateItemNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lobby_login.UpdateItemNot;

        /**
         * Verifies an UpdateItemNot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateItemNot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateItemNot
         */
        public static fromObject(object: { [k: string]: any }): lobby_login.UpdateItemNot;

        /**
         * Creates a plain object from an UpdateItemNot message. Also converts values to other types if specified.
         * @param message UpdateItemNot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lobby_login.UpdateItemNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateItemNot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetPlayerInfoReq. */
    interface IGetPlayerInfoReq {

        /** GetPlayerInfoReq uidList */
        uidList?: ((number|Long)[]|null);
    }

    /** Represents a GetPlayerInfoReq. */
    class GetPlayerInfoReq implements IGetPlayerInfoReq {

        /**
         * Constructs a new GetPlayerInfoReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: lobby_login.IGetPlayerInfoReq);

        /** GetPlayerInfoReq uidList. */
        public uidList: (number|Long)[];

        /**
         * Creates a new GetPlayerInfoReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetPlayerInfoReq instance
         */
        public static create(properties?: lobby_login.IGetPlayerInfoReq): lobby_login.GetPlayerInfoReq;

        /**
         * Encodes the specified GetPlayerInfoReq message. Does not implicitly {@link lobby_login.GetPlayerInfoReq.verify|verify} messages.
         * @param message GetPlayerInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lobby_login.IGetPlayerInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetPlayerInfoReq message, length delimited. Does not implicitly {@link lobby_login.GetPlayerInfoReq.verify|verify} messages.
         * @param message GetPlayerInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lobby_login.IGetPlayerInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetPlayerInfoReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetPlayerInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lobby_login.GetPlayerInfoReq;

        /**
         * Decodes a GetPlayerInfoReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetPlayerInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lobby_login.GetPlayerInfoReq;

        /**
         * Verifies a GetPlayerInfoReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetPlayerInfoReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetPlayerInfoReq
         */
        public static fromObject(object: { [k: string]: any }): lobby_login.GetPlayerInfoReq;

        /**
         * Creates a plain object from a GetPlayerInfoReq message. Also converts values to other types if specified.
         * @param message GetPlayerInfoReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lobby_login.GetPlayerInfoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetPlayerInfoReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayerInfo. */
    interface IPlayerInfo {

        /** PlayerInfo uid */
        uid?: (number|Long|null);

        /** PlayerInfo sex */
        sex?: (number|null);

        /** PlayerInfo faceUrl */
        faceUrl?: (string|null);

        /** PlayerInfo money */
        money?: (number|Long|null);
    }

    /** Represents a PlayerInfo. */
    class PlayerInfo implements IPlayerInfo {

        /**
         * Constructs a new PlayerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: lobby_login.IPlayerInfo);

        /** PlayerInfo uid. */
        public uid: (number|Long);

        /** PlayerInfo sex. */
        public sex: number;

        /** PlayerInfo faceUrl. */
        public faceUrl: string;

        /** PlayerInfo money. */
        public money: (number|Long);

        /**
         * Creates a new PlayerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerInfo instance
         */
        public static create(properties?: lobby_login.IPlayerInfo): lobby_login.PlayerInfo;

        /**
         * Encodes the specified PlayerInfo message. Does not implicitly {@link lobby_login.PlayerInfo.verify|verify} messages.
         * @param message PlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lobby_login.IPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link lobby_login.PlayerInfo.verify|verify} messages.
         * @param message PlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lobby_login.IPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lobby_login.PlayerInfo;

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lobby_login.PlayerInfo;

        /**
         * Verifies a PlayerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerInfo
         */
        public static fromObject(object: { [k: string]: any }): lobby_login.PlayerInfo;

        /**
         * Creates a plain object from a PlayerInfo message. Also converts values to other types if specified.
         * @param message PlayerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lobby_login.PlayerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetPlayerInfoRsp. */
    interface IGetPlayerInfoRsp {

        /** GetPlayerInfoRsp infoList */
        infoList?: (lobby_login.IPlayerInfo[]|null);
    }

    /** Represents a GetPlayerInfoRsp. */
    class GetPlayerInfoRsp implements IGetPlayerInfoRsp {

        /**
         * Constructs a new GetPlayerInfoRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: lobby_login.IGetPlayerInfoRsp);

        /** GetPlayerInfoRsp infoList. */
        public infoList: lobby_login.IPlayerInfo[];

        /**
         * Creates a new GetPlayerInfoRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetPlayerInfoRsp instance
         */
        public static create(properties?: lobby_login.IGetPlayerInfoRsp): lobby_login.GetPlayerInfoRsp;

        /**
         * Encodes the specified GetPlayerInfoRsp message. Does not implicitly {@link lobby_login.GetPlayerInfoRsp.verify|verify} messages.
         * @param message GetPlayerInfoRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lobby_login.IGetPlayerInfoRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetPlayerInfoRsp message, length delimited. Does not implicitly {@link lobby_login.GetPlayerInfoRsp.verify|verify} messages.
         * @param message GetPlayerInfoRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lobby_login.IGetPlayerInfoRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetPlayerInfoRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetPlayerInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lobby_login.GetPlayerInfoRsp;

        /**
         * Decodes a GetPlayerInfoRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetPlayerInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lobby_login.GetPlayerInfoRsp;

        /**
         * Verifies a GetPlayerInfoRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetPlayerInfoRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetPlayerInfoRsp
         */
        public static fromObject(object: { [k: string]: any }): lobby_login.GetPlayerInfoRsp;

        /**
         * Creates a plain object from a GetPlayerInfoRsp message. Also converts values to other types if specified.
         * @param message GetPlayerInfoRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lobby_login.GetPlayerInfoRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetPlayerInfoRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace common. */
export namespace common {

    /** Properties of a GameData. */
    interface IGameData {

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
    class GameData implements IGameData {

        /**
         * Constructs a new GameData.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IGameData);

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
        public static create(properties?: common.IGameData): common.GameData;

        /**
         * Encodes the specified GameData message. Does not implicitly {@link common.GameData.verify|verify} messages.
         * @param message GameData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IGameData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameData message, length delimited. Does not implicitly {@link common.GameData.verify|verify} messages.
         * @param message GameData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IGameData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.GameData;

        /**
         * Decodes a GameData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.GameData;

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
        public static fromObject(object: { [k: string]: any }): common.GameData;

        /**
         * Creates a plain object from a GameData message. Also converts values to other types if specified.
         * @param message GameData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.GameData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
