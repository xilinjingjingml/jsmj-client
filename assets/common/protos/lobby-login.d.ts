import * as $protobuf from "protobufjs";
/** Properties of a LoginReq. */
export interface ILoginReq {

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
export class LoginReq implements ILoginReq {

    /**
     * Constructs a new LoginReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILoginReq);

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
    public static create(properties?: ILoginReq): LoginReq;

    /**
     * Encodes the specified LoginReq message. Does not implicitly {@link LoginReq.verify|verify} messages.
     * @param message LoginReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link LoginReq.verify|verify} messages.
     * @param message LoginReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LoginReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LoginReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LoginReq;

    /**
     * Decodes a LoginReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LoginReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LoginReq;

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
    public static fromObject(object: { [k: string]: any }): LoginReq;

    /**
     * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
     * @param message LoginReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LoginReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LoginReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a LoginRsp. */
export interface ILoginRsp {

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
    gameData?: (IGameData|null);

    /** LoginRsp items */
    items?: (IItem[]|null);
}

/** Represents a LoginRsp. */
export class LoginRsp implements ILoginRsp {

    /**
     * Constructs a new LoginRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILoginRsp);

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
    public gameData?: (IGameData|null);

    /** LoginRsp items. */
    public items: IItem[];

    /**
     * Creates a new LoginRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LoginRsp instance
     */
    public static create(properties?: ILoginRsp): LoginRsp;

    /**
     * Encodes the specified LoginRsp message. Does not implicitly {@link LoginRsp.verify|verify} messages.
     * @param message LoginRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILoginRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LoginRsp message, length delimited. Does not implicitly {@link LoginRsp.verify|verify} messages.
     * @param message LoginRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILoginRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LoginRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LoginRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LoginRsp;

    /**
     * Decodes a LoginRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LoginRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LoginRsp;

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
    public static fromObject(object: { [k: string]: any }): LoginRsp;

    /**
     * Creates a plain object from a LoginRsp message. Also converts values to other types if specified.
     * @param message LoginRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LoginRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LoginRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an Item. */
export interface IItem {

    /** Item id */
    id?: (number|null);

    /** Item num */
    num?: (number|Long|null);

    /** Item expireAt */
    expireAt?: (number|null);
}

/** Represents an Item. */
export class Item implements IItem {

    /**
     * Constructs a new Item.
     * @param [properties] Properties to set
     */
    constructor(properties?: IItem);

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
    public static create(properties?: IItem): Item;

    /**
     * Encodes the specified Item message. Does not implicitly {@link Item.verify|verify} messages.
     * @param message Item message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Item message, length delimited. Does not implicitly {@link Item.verify|verify} messages.
     * @param message Item message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Item message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Item
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Item;

    /**
     * Decodes an Item message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Item
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Item;

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
    public static fromObject(object: { [k: string]: any }): Item;

    /**
     * Creates a plain object from an Item message. Also converts values to other types if specified.
     * @param message Item
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Item, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Item to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an ItemOpt. */
export interface IItemOpt {

    /** ItemOpt id */
    id?: (number|null);

    /** ItemOpt num */
    num?: (number|Long|null);

    /** ItemOpt expireAt */
    expireAt?: (number|null);
}

/** Represents an ItemOpt. */
export class ItemOpt implements IItemOpt {

    /**
     * Constructs a new ItemOpt.
     * @param [properties] Properties to set
     */
    constructor(properties?: IItemOpt);

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
    public static create(properties?: IItemOpt): ItemOpt;

    /**
     * Encodes the specified ItemOpt message. Does not implicitly {@link ItemOpt.verify|verify} messages.
     * @param message ItemOpt message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IItemOpt, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ItemOpt message, length delimited. Does not implicitly {@link ItemOpt.verify|verify} messages.
     * @param message ItemOpt message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IItemOpt, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ItemOpt message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ItemOpt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ItemOpt;

    /**
     * Decodes an ItemOpt message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ItemOpt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ItemOpt;

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
    public static fromObject(object: { [k: string]: any }): ItemOpt;

    /**
     * Creates a plain object from an ItemOpt message. Also converts values to other types if specified.
     * @param message ItemOpt
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ItemOpt, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ItemOpt to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an ItemUpdate. */
export interface IItemUpdate {

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
export class ItemUpdate implements IItemUpdate {

    /**
     * Constructs a new ItemUpdate.
     * @param [properties] Properties to set
     */
    constructor(properties?: IItemUpdate);

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
    public static create(properties?: IItemUpdate): ItemUpdate;

    /**
     * Encodes the specified ItemUpdate message. Does not implicitly {@link ItemUpdate.verify|verify} messages.
     * @param message ItemUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IItemUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ItemUpdate message, length delimited. Does not implicitly {@link ItemUpdate.verify|verify} messages.
     * @param message ItemUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IItemUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ItemUpdate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ItemUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ItemUpdate;

    /**
     * Decodes an ItemUpdate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ItemUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ItemUpdate;

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
    public static fromObject(object: { [k: string]: any }): ItemUpdate;

    /**
     * Creates a plain object from an ItemUpdate message. Also converts values to other types if specified.
     * @param message ItemUpdate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ItemUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ItemUpdate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an UpdateItemNot. */
export interface IUpdateItemNot {

    /** UpdateItemNot cliParam */
    cliParam?: (string|null);

    /** UpdateItemNot update */
    update?: (IItemUpdate[]|null);
}

/** Represents an UpdateItemNot. */
export class UpdateItemNot implements IUpdateItemNot {

    /**
     * Constructs a new UpdateItemNot.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUpdateItemNot);

    /** UpdateItemNot cliParam. */
    public cliParam: string;

    /** UpdateItemNot update. */
    public update: IItemUpdate[];

    /**
     * Creates a new UpdateItemNot instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UpdateItemNot instance
     */
    public static create(properties?: IUpdateItemNot): UpdateItemNot;

    /**
     * Encodes the specified UpdateItemNot message. Does not implicitly {@link UpdateItemNot.verify|verify} messages.
     * @param message UpdateItemNot message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUpdateItemNot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UpdateItemNot message, length delimited. Does not implicitly {@link UpdateItemNot.verify|verify} messages.
     * @param message UpdateItemNot message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUpdateItemNot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UpdateItemNot message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UpdateItemNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UpdateItemNot;

    /**
     * Decodes an UpdateItemNot message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UpdateItemNot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UpdateItemNot;

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
    public static fromObject(object: { [k: string]: any }): UpdateItemNot;

    /**
     * Creates a plain object from an UpdateItemNot message. Also converts values to other types if specified.
     * @param message UpdateItemNot
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UpdateItemNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UpdateItemNot to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GetPlayerInfoReq. */
export interface IGetPlayerInfoReq {

    /** GetPlayerInfoReq uidList */
    uidList?: ((number|Long)[]|null);
}

/** Represents a GetPlayerInfoReq. */
export class GetPlayerInfoReq implements IGetPlayerInfoReq {

    /**
     * Constructs a new GetPlayerInfoReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetPlayerInfoReq);

    /** GetPlayerInfoReq uidList. */
    public uidList: (number|Long)[];

    /**
     * Creates a new GetPlayerInfoReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetPlayerInfoReq instance
     */
    public static create(properties?: IGetPlayerInfoReq): GetPlayerInfoReq;

    /**
     * Encodes the specified GetPlayerInfoReq message. Does not implicitly {@link GetPlayerInfoReq.verify|verify} messages.
     * @param message GetPlayerInfoReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetPlayerInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetPlayerInfoReq message, length delimited. Does not implicitly {@link GetPlayerInfoReq.verify|verify} messages.
     * @param message GetPlayerInfoReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetPlayerInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetPlayerInfoReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetPlayerInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetPlayerInfoReq;

    /**
     * Decodes a GetPlayerInfoReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetPlayerInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetPlayerInfoReq;

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
    public static fromObject(object: { [k: string]: any }): GetPlayerInfoReq;

    /**
     * Creates a plain object from a GetPlayerInfoReq message. Also converts values to other types if specified.
     * @param message GetPlayerInfoReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetPlayerInfoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetPlayerInfoReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PlayerInfo. */
export interface IPlayerInfo {

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
export class PlayerInfo implements IPlayerInfo {

    /**
     * Constructs a new PlayerInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlayerInfo);

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
    public static create(properties?: IPlayerInfo): PlayerInfo;

    /**
     * Encodes the specified PlayerInfo message. Does not implicitly {@link PlayerInfo.verify|verify} messages.
     * @param message PlayerInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link PlayerInfo.verify|verify} messages.
     * @param message PlayerInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlayerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerInfo;

    /**
     * Decodes a PlayerInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlayerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlayerInfo;

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
    public static fromObject(object: { [k: string]: any }): PlayerInfo;

    /**
     * Creates a plain object from a PlayerInfo message. Also converts values to other types if specified.
     * @param message PlayerInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PlayerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PlayerInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GetPlayerInfoRsp. */
export interface IGetPlayerInfoRsp {

    /** GetPlayerInfoRsp infoList */
    infoList?: (IPlayerInfo[]|null);
}

/** Represents a GetPlayerInfoRsp. */
export class GetPlayerInfoRsp implements IGetPlayerInfoRsp {

    /**
     * Constructs a new GetPlayerInfoRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetPlayerInfoRsp);

    /** GetPlayerInfoRsp infoList. */
    public infoList: IPlayerInfo[];

    /**
     * Creates a new GetPlayerInfoRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetPlayerInfoRsp instance
     */
    public static create(properties?: IGetPlayerInfoRsp): GetPlayerInfoRsp;

    /**
     * Encodes the specified GetPlayerInfoRsp message. Does not implicitly {@link GetPlayerInfoRsp.verify|verify} messages.
     * @param message GetPlayerInfoRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetPlayerInfoRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetPlayerInfoRsp message, length delimited. Does not implicitly {@link GetPlayerInfoRsp.verify|verify} messages.
     * @param message GetPlayerInfoRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetPlayerInfoRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetPlayerInfoRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetPlayerInfoRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetPlayerInfoRsp;

    /**
     * Decodes a GetPlayerInfoRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetPlayerInfoRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetPlayerInfoRsp;

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
    public static fromObject(object: { [k: string]: any }): GetPlayerInfoRsp;

    /**
     * Creates a plain object from a GetPlayerInfoRsp message. Also converts values to other types if specified.
     * @param message GetPlayerInfoRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetPlayerInfoRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetPlayerInfoRsp to JSON.
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
