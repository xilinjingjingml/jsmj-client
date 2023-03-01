import * as $protobuf from "protobufjs";
/** Namespace item. */
export namespace item {

    /** Represents an Item */
    class Item extends $protobuf.rpc.Service {

        /**
         * Constructs a new Item service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Item service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Item;

        /**
         * Calls UpdateItem.
         * @param request UpdateItemReq message or plain object
         * @param callback Node-style callback called with the error, if any, and UpdateItemRsp
         */
        public updateItem(request: item.IUpdateItemReq, callback: item.Item.UpdateItemCallback): void;

        /**
         * Calls UpdateItem.
         * @param request UpdateItemReq message or plain object
         * @returns Promise
         */
        public updateItem(request: item.IUpdateItemReq): Promise<item.UpdateItemRsp>;

        /**
         * Calls GetPlayerInfo.
         * @param request GetPlayerInfoReq message or plain object
         * @param callback Node-style callback called with the error, if any, and GetPlayerInfoRsp
         */
        public getPlayerInfo(request: item.IGetPlayerInfoReq, callback: item.Item.GetPlayerInfoCallback): void;

        /**
         * Calls GetPlayerInfo.
         * @param request GetPlayerInfoReq message or plain object
         * @returns Promise
         */
        public getPlayerInfo(request: item.IGetPlayerInfoReq): Promise<item.GetPlayerInfoRsp>;

        /**
         * Calls UpdateHead.
         * @param request UpdateHeadReq message or plain object
         * @param callback Node-style callback called with the error, if any, and UpdateHeadRsp
         */
        public updateHead(request: item.IUpdateHeadReq, callback: item.Item.UpdateHeadCallback): void;

        /**
         * Calls UpdateHead.
         * @param request UpdateHeadReq message or plain object
         * @returns Promise
         */
        public updateHead(request: item.IUpdateHeadReq): Promise<item.UpdateHeadRsp>;

        /**
         * Calls UpdateHeadFrame.
         * @param request UpdateHeadFrameReq message or plain object
         * @param callback Node-style callback called with the error, if any, and UpdateHeadFrameRsp
         */
        public updateHeadFrame(request: item.IUpdateHeadFrameReq, callback: item.Item.UpdateHeadFrameCallback): void;

        /**
         * Calls UpdateHeadFrame.
         * @param request UpdateHeadFrameReq message or plain object
         * @returns Promise
         */
        public updateHeadFrame(request: item.IUpdateHeadFrameReq): Promise<item.UpdateHeadFrameRsp>;

        /**
         * Calls GetItemNum.
         * @param request GetItemNumReq message or plain object
         * @param callback Node-style callback called with the error, if any, and GetItemNumRsp
         */
        public getItemNum(request: item.IGetItemNumReq, callback: item.Item.GetItemNumCallback): void;

        /**
         * Calls GetItemNum.
         * @param request GetItemNumReq message or plain object
         * @returns Promise
         */
        public getItemNum(request: item.IGetItemNumReq): Promise<item.GetItemNumRsp>;
    }

    namespace Item {

        /**
         * Callback as used by {@link item.Item#updateItem}.
         * @param error Error, if any
         * @param [response] UpdateItemRsp
         */
        type UpdateItemCallback = (error: (Error|null), response?: item.UpdateItemRsp) => void;

        /**
         * Callback as used by {@link item.Item#getPlayerInfo}.
         * @param error Error, if any
         * @param [response] GetPlayerInfoRsp
         */
        type GetPlayerInfoCallback = (error: (Error|null), response?: item.GetPlayerInfoRsp) => void;

        /**
         * Callback as used by {@link item.Item#updateHead}.
         * @param error Error, if any
         * @param [response] UpdateHeadRsp
         */
        type UpdateHeadCallback = (error: (Error|null), response?: item.UpdateHeadRsp) => void;

        /**
         * Callback as used by {@link item.Item#updateHeadFrame}.
         * @param error Error, if any
         * @param [response] UpdateHeadFrameRsp
         */
        type UpdateHeadFrameCallback = (error: (Error|null), response?: item.UpdateHeadFrameRsp) => void;

        /**
         * Callback as used by {@link item.Item#getItemNum}.
         * @param error Error, if any
         * @param [response] GetItemNumRsp
         */
        type GetItemNumCallback = (error: (Error|null), response?: item.GetItemNumRsp) => void;
    }

    /** Properties of an ItemOpt. */
    interface IItemOpt {

        /** ItemOpt id */
        id?: (number|null);

        /** ItemOpt num */
        num?: (number|Long|null);

        /** ItemOpt expireAt */
        expireAt?: (number|Long|null);
    }

    /** Represents an ItemOpt. */
    class ItemOpt implements IItemOpt {

        /**
         * Constructs a new ItemOpt.
         * @param [properties] Properties to set
         */
        constructor(properties?: item.IItemOpt);

        /** ItemOpt id. */
        public id: number;

        /** ItemOpt num. */
        public num: (number|Long);

        /** ItemOpt expireAt. */
        public expireAt: (number|Long);

        /**
         * Creates a new ItemOpt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ItemOpt instance
         */
        public static create(properties?: item.IItemOpt): item.ItemOpt;

        /**
         * Encodes the specified ItemOpt message. Does not implicitly {@link item.ItemOpt.verify|verify} messages.
         * @param message ItemOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item.IItemOpt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ItemOpt message, length delimited. Does not implicitly {@link item.ItemOpt.verify|verify} messages.
         * @param message ItemOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item.IItemOpt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ItemOpt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ItemOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item.ItemOpt;

        /**
         * Decodes an ItemOpt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ItemOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item.ItemOpt;

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
        public static fromObject(object: { [k: string]: any }): item.ItemOpt;

        /**
         * Creates a plain object from an ItemOpt message. Also converts values to other types if specified.
         * @param message ItemOpt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item.ItemOpt, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        expireAt?: (number|Long|null);
    }

    /** Represents an ItemUpdate. */
    class ItemUpdate implements IItemUpdate {

        /**
         * Constructs a new ItemUpdate.
         * @param [properties] Properties to set
         */
        constructor(properties?: item.IItemUpdate);

        /** ItemUpdate id. */
        public id: number;

        /** ItemUpdate change. */
        public change: (number|Long);

        /** ItemUpdate num. */
        public num: (number|Long);

        /** ItemUpdate expireAt. */
        public expireAt: (number|Long);

        /**
         * Creates a new ItemUpdate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ItemUpdate instance
         */
        public static create(properties?: item.IItemUpdate): item.ItemUpdate;

        /**
         * Encodes the specified ItemUpdate message. Does not implicitly {@link item.ItemUpdate.verify|verify} messages.
         * @param message ItemUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item.IItemUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ItemUpdate message, length delimited. Does not implicitly {@link item.ItemUpdate.verify|verify} messages.
         * @param message ItemUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item.IItemUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ItemUpdate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ItemUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item.ItemUpdate;

        /**
         * Decodes an ItemUpdate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ItemUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item.ItemUpdate;

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
        public static fromObject(object: { [k: string]: any }): item.ItemUpdate;

        /**
         * Creates a plain object from an ItemUpdate message. Also converts values to other types if specified.
         * @param message ItemUpdate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item.ItemUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ItemUpdate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateItemReq. */
    interface IUpdateItemReq {

        /** UpdateItemReq uid */
        uid?: (number|Long|null);

        /** UpdateItemReq reason */
        reason?: (string|null);

        /** UpdateItemReq param */
        param?: (string|null);

        /** UpdateItemReq cliParam */
        cliParam?: (string|null);

        /** UpdateItemReq update */
        update?: (item.IItemOpt[]|null);
    }

    /** Represents an UpdateItemReq. */
    class UpdateItemReq implements IUpdateItemReq {

        /**
         * Constructs a new UpdateItemReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: item.IUpdateItemReq);

        /** UpdateItemReq uid. */
        public uid: (number|Long);

        /** UpdateItemReq reason. */
        public reason: string;

        /** UpdateItemReq param. */
        public param: string;

        /** UpdateItemReq cliParam. */
        public cliParam: string;

        /** UpdateItemReq update. */
        public update: item.IItemOpt[];

        /**
         * Creates a new UpdateItemReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateItemReq instance
         */
        public static create(properties?: item.IUpdateItemReq): item.UpdateItemReq;

        /**
         * Encodes the specified UpdateItemReq message. Does not implicitly {@link item.UpdateItemReq.verify|verify} messages.
         * @param message UpdateItemReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item.IUpdateItemReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateItemReq message, length delimited. Does not implicitly {@link item.UpdateItemReq.verify|verify} messages.
         * @param message UpdateItemReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item.IUpdateItemReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateItemReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateItemReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item.UpdateItemReq;

        /**
         * Decodes an UpdateItemReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateItemReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item.UpdateItemReq;

        /**
         * Verifies an UpdateItemReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateItemReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateItemReq
         */
        public static fromObject(object: { [k: string]: any }): item.UpdateItemReq;

        /**
         * Creates a plain object from an UpdateItemReq message. Also converts values to other types if specified.
         * @param message UpdateItemReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item.UpdateItemReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateItemReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateItemRsp. */
    interface IUpdateItemRsp {

        /** UpdateItemRsp errCode */
        errCode?: (number|null);

        /** UpdateItemRsp errMsg */
        errMsg?: (string|null);
    }

    /** Represents an UpdateItemRsp. */
    class UpdateItemRsp implements IUpdateItemRsp {

        /**
         * Constructs a new UpdateItemRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: item.IUpdateItemRsp);

        /** UpdateItemRsp errCode. */
        public errCode: number;

        /** UpdateItemRsp errMsg. */
        public errMsg: string;

        /**
         * Creates a new UpdateItemRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateItemRsp instance
         */
        public static create(properties?: item.IUpdateItemRsp): item.UpdateItemRsp;

        /**
         * Encodes the specified UpdateItemRsp message. Does not implicitly {@link item.UpdateItemRsp.verify|verify} messages.
         * @param message UpdateItemRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item.IUpdateItemRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateItemRsp message, length delimited. Does not implicitly {@link item.UpdateItemRsp.verify|verify} messages.
         * @param message UpdateItemRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item.IUpdateItemRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateItemRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateItemRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item.UpdateItemRsp;

        /**
         * Decodes an UpdateItemRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateItemRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item.UpdateItemRsp;

        /**
         * Verifies an UpdateItemRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateItemRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateItemRsp
         */
        public static fromObject(object: { [k: string]: any }): item.UpdateItemRsp;

        /**
         * Creates a plain object from an UpdateItemRsp message. Also converts values to other types if specified.
         * @param message UpdateItemRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item.UpdateItemRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateItemRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateMjzzItemNot. */
    interface IUpdateMjzzItemNot {

        /** UpdateMjzzItemNot cliParam */
        cliParam?: (string|null);

        /** UpdateMjzzItemNot update */
        update?: (item.IItemUpdate[]|null);
    }

    /** Represents an UpdateMjzzItemNot. */
    class UpdateMjzzItemNot implements IUpdateMjzzItemNot {

        /**
         * Constructs a new UpdateMjzzItemNot.
         * @param [properties] Properties to set
         */
        constructor(properties?: item.IUpdateMjzzItemNot);

        /** UpdateMjzzItemNot cliParam. */
        public cliParam: string;

        /** UpdateMjzzItemNot update. */
        public update: item.IItemUpdate[];

        /**
         * Creates a new UpdateMjzzItemNot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateMjzzItemNot instance
         */
        public static create(properties?: item.IUpdateMjzzItemNot): item.UpdateMjzzItemNot;

        /**
         * Encodes the specified UpdateMjzzItemNot message. Does not implicitly {@link item.UpdateMjzzItemNot.verify|verify} messages.
         * @param message UpdateMjzzItemNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item.IUpdateMjzzItemNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateMjzzItemNot message, length delimited. Does not implicitly {@link item.UpdateMjzzItemNot.verify|verify} messages.
         * @param message UpdateMjzzItemNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item.IUpdateMjzzItemNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateMjzzItemNot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateMjzzItemNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item.UpdateMjzzItemNot;

        /**
         * Decodes an UpdateMjzzItemNot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateMjzzItemNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item.UpdateMjzzItemNot;

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
        public static fromObject(object: { [k: string]: any }): item.UpdateMjzzItemNot;

        /**
         * Creates a plain object from an UpdateMjzzItemNot message. Also converts values to other types if specified.
         * @param message UpdateMjzzItemNot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item.UpdateMjzzItemNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateMjzzItemNot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetPlayerInfoReq. */
    interface IGetPlayerInfoReq {

        /** GetPlayerInfoReq uidList */
        uidList?: (string|null);
    }

    /** Represents a GetPlayerInfoReq. */
    class GetPlayerInfoReq implements IGetPlayerInfoReq {

        /**
         * Constructs a new GetPlayerInfoReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: item.IGetPlayerInfoReq);

        /** GetPlayerInfoReq uidList. */
        public uidList: string;

        /**
         * Creates a new GetPlayerInfoReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetPlayerInfoReq instance
         */
        public static create(properties?: item.IGetPlayerInfoReq): item.GetPlayerInfoReq;

        /**
         * Encodes the specified GetPlayerInfoReq message. Does not implicitly {@link item.GetPlayerInfoReq.verify|verify} messages.
         * @param message GetPlayerInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item.IGetPlayerInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetPlayerInfoReq message, length delimited. Does not implicitly {@link item.GetPlayerInfoReq.verify|verify} messages.
         * @param message GetPlayerInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item.IGetPlayerInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetPlayerInfoReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetPlayerInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item.GetPlayerInfoReq;

        /**
         * Decodes a GetPlayerInfoReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetPlayerInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item.GetPlayerInfoReq;

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
        public static fromObject(object: { [k: string]: any }): item.GetPlayerInfoReq;

        /**
         * Creates a plain object from a GetPlayerInfoReq message. Also converts values to other types if specified.
         * @param message GetPlayerInfoReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item.GetPlayerInfoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

        /** PlayerInfo items */
        items?: (item.IItemOpt[]|null);
    }

    /** Represents a PlayerInfo. */
    class PlayerInfo implements IPlayerInfo {

        /**
         * Constructs a new PlayerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: item.IPlayerInfo);

        /** PlayerInfo uid. */
        public uid: (number|Long);

        /** PlayerInfo items. */
        public items: item.IItemOpt[];

        /**
         * Creates a new PlayerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerInfo instance
         */
        public static create(properties?: item.IPlayerInfo): item.PlayerInfo;

        /**
         * Encodes the specified PlayerInfo message. Does not implicitly {@link item.PlayerInfo.verify|verify} messages.
         * @param message PlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item.IPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link item.PlayerInfo.verify|verify} messages.
         * @param message PlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item.IPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item.PlayerInfo;

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item.PlayerInfo;

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
        public static fromObject(object: { [k: string]: any }): item.PlayerInfo;

        /**
         * Creates a plain object from a PlayerInfo message. Also converts values to other types if specified.
         * @param message PlayerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item.PlayerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetPlayerInfoRsp. */
    interface IGetPlayerInfoRsp {

        /** GetPlayerInfoRsp errCode */
        errCode?: (number|null);

        /** GetPlayerInfoRsp errMsg */
        errMsg?: (string|null);

        /** GetPlayerInfoRsp infoList */
        infoList?: (item.IPlayerInfo[]|null);
    }

    /** Represents a GetPlayerInfoRsp. */
    class GetPlayerInfoRsp implements IGetPlayerInfoRsp {

        /**
         * Constructs a new GetPlayerInfoRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: item.IGetPlayerInfoRsp);

        /** GetPlayerInfoRsp errCode. */
        public errCode: number;

        /** GetPlayerInfoRsp errMsg. */
        public errMsg: string;

        /** GetPlayerInfoRsp infoList. */
        public infoList: item.IPlayerInfo[];

        /**
         * Creates a new GetPlayerInfoRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetPlayerInfoRsp instance
         */
        public static create(properties?: item.IGetPlayerInfoRsp): item.GetPlayerInfoRsp;

        /**
         * Encodes the specified GetPlayerInfoRsp message. Does not implicitly {@link item.GetPlayerInfoRsp.verify|verify} messages.
         * @param message GetPlayerInfoRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item.IGetPlayerInfoRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetPlayerInfoRsp message, length delimited. Does not implicitly {@link item.GetPlayerInfoRsp.verify|verify} messages.
         * @param message GetPlayerInfoRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item.IGetPlayerInfoRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetPlayerInfoRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetPlayerInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item.GetPlayerInfoRsp;

        /**
         * Decodes a GetPlayerInfoRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetPlayerInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item.GetPlayerInfoRsp;

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
        public static fromObject(object: { [k: string]: any }): item.GetPlayerInfoRsp;

        /**
         * Creates a plain object from a GetPlayerInfoRsp message. Also converts values to other types if specified.
         * @param message GetPlayerInfoRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item.GetPlayerInfoRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetPlayerInfoRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayerMsgNot. */
    interface IPlayerMsgNot {

        /** PlayerMsgNot uid */
        uid?: (number|Long|null);

        /** PlayerMsgNot route */
        route?: (string|null);

        /** PlayerMsgNot body */
        body?: (Uint8Array|null);
    }

    /** Represents a PlayerMsgNot. */
    class PlayerMsgNot implements IPlayerMsgNot {

        /**
         * Constructs a new PlayerMsgNot.
         * @param [properties] Properties to set
         */
        constructor(properties?: item.IPlayerMsgNot);

        /** PlayerMsgNot uid. */
        public uid: (number|Long);

        /** PlayerMsgNot route. */
        public route: string;

        /** PlayerMsgNot body. */
        public body: Uint8Array;

        /**
         * Creates a new PlayerMsgNot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerMsgNot instance
         */
        public static create(properties?: item.IPlayerMsgNot): item.PlayerMsgNot;

        /**
         * Encodes the specified PlayerMsgNot message. Does not implicitly {@link item.PlayerMsgNot.verify|verify} messages.
         * @param message PlayerMsgNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item.IPlayerMsgNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerMsgNot message, length delimited. Does not implicitly {@link item.PlayerMsgNot.verify|verify} messages.
         * @param message PlayerMsgNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item.IPlayerMsgNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerMsgNot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerMsgNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item.PlayerMsgNot;

        /**
         * Decodes a PlayerMsgNot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerMsgNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item.PlayerMsgNot;

        /**
         * Verifies a PlayerMsgNot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerMsgNot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerMsgNot
         */
        public static fromObject(object: { [k: string]: any }): item.PlayerMsgNot;

        /**
         * Creates a plain object from a PlayerMsgNot message. Also converts values to other types if specified.
         * @param message PlayerMsgNot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item.PlayerMsgNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerMsgNot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateHeadReq. */
    interface IUpdateHeadReq {

        /** UpdateHeadReq uid */
        uid?: (number|Long|null);

        /** UpdateHeadReq index */
        index?: (number|Long|null);
    }

    /** Represents an UpdateHeadReq. */
    class UpdateHeadReq implements IUpdateHeadReq {

        /**
         * Constructs a new UpdateHeadReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: item.IUpdateHeadReq);

        /** UpdateHeadReq uid. */
        public uid: (number|Long);

        /** UpdateHeadReq index. */
        public index: (number|Long);

        /**
         * Creates a new UpdateHeadReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateHeadReq instance
         */
        public static create(properties?: item.IUpdateHeadReq): item.UpdateHeadReq;

        /**
         * Encodes the specified UpdateHeadReq message. Does not implicitly {@link item.UpdateHeadReq.verify|verify} messages.
         * @param message UpdateHeadReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item.IUpdateHeadReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateHeadReq message, length delimited. Does not implicitly {@link item.UpdateHeadReq.verify|verify} messages.
         * @param message UpdateHeadReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item.IUpdateHeadReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateHeadReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateHeadReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item.UpdateHeadReq;

        /**
         * Decodes an UpdateHeadReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateHeadReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item.UpdateHeadReq;

        /**
         * Verifies an UpdateHeadReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateHeadReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateHeadReq
         */
        public static fromObject(object: { [k: string]: any }): item.UpdateHeadReq;

        /**
         * Creates a plain object from an UpdateHeadReq message. Also converts values to other types if specified.
         * @param message UpdateHeadReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item.UpdateHeadReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateHeadReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateHeadRsp. */
    interface IUpdateHeadRsp {

        /** UpdateHeadRsp errCode */
        errCode?: (number|null);

        /** UpdateHeadRsp errMsg */
        errMsg?: (string|null);
    }

    /** Represents an UpdateHeadRsp. */
    class UpdateHeadRsp implements IUpdateHeadRsp {

        /**
         * Constructs a new UpdateHeadRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: item.IUpdateHeadRsp);

        /** UpdateHeadRsp errCode. */
        public errCode: number;

        /** UpdateHeadRsp errMsg. */
        public errMsg: string;

        /**
         * Creates a new UpdateHeadRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateHeadRsp instance
         */
        public static create(properties?: item.IUpdateHeadRsp): item.UpdateHeadRsp;

        /**
         * Encodes the specified UpdateHeadRsp message. Does not implicitly {@link item.UpdateHeadRsp.verify|verify} messages.
         * @param message UpdateHeadRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item.IUpdateHeadRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateHeadRsp message, length delimited. Does not implicitly {@link item.UpdateHeadRsp.verify|verify} messages.
         * @param message UpdateHeadRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item.IUpdateHeadRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateHeadRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateHeadRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item.UpdateHeadRsp;

        /**
         * Decodes an UpdateHeadRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateHeadRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item.UpdateHeadRsp;

        /**
         * Verifies an UpdateHeadRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateHeadRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateHeadRsp
         */
        public static fromObject(object: { [k: string]: any }): item.UpdateHeadRsp;

        /**
         * Creates a plain object from an UpdateHeadRsp message. Also converts values to other types if specified.
         * @param message UpdateHeadRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item.UpdateHeadRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateHeadRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateHeadFrameReq. */
    interface IUpdateHeadFrameReq {

        /** UpdateHeadFrameReq uid */
        uid?: (number|Long|null);

        /** UpdateHeadFrameReq index */
        index?: (number|Long|null);
    }

    /** Represents an UpdateHeadFrameReq. */
    class UpdateHeadFrameReq implements IUpdateHeadFrameReq {

        /**
         * Constructs a new UpdateHeadFrameReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: item.IUpdateHeadFrameReq);

        /** UpdateHeadFrameReq uid. */
        public uid: (number|Long);

        /** UpdateHeadFrameReq index. */
        public index: (number|Long);

        /**
         * Creates a new UpdateHeadFrameReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateHeadFrameReq instance
         */
        public static create(properties?: item.IUpdateHeadFrameReq): item.UpdateHeadFrameReq;

        /**
         * Encodes the specified UpdateHeadFrameReq message. Does not implicitly {@link item.UpdateHeadFrameReq.verify|verify} messages.
         * @param message UpdateHeadFrameReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item.IUpdateHeadFrameReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateHeadFrameReq message, length delimited. Does not implicitly {@link item.UpdateHeadFrameReq.verify|verify} messages.
         * @param message UpdateHeadFrameReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item.IUpdateHeadFrameReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateHeadFrameReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateHeadFrameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item.UpdateHeadFrameReq;

        /**
         * Decodes an UpdateHeadFrameReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateHeadFrameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item.UpdateHeadFrameReq;

        /**
         * Verifies an UpdateHeadFrameReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateHeadFrameReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateHeadFrameReq
         */
        public static fromObject(object: { [k: string]: any }): item.UpdateHeadFrameReq;

        /**
         * Creates a plain object from an UpdateHeadFrameReq message. Also converts values to other types if specified.
         * @param message UpdateHeadFrameReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item.UpdateHeadFrameReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateHeadFrameReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateHeadFrameRsp. */
    interface IUpdateHeadFrameRsp {

        /** UpdateHeadFrameRsp errCode */
        errCode?: (number|null);

        /** UpdateHeadFrameRsp errMsg */
        errMsg?: (string|null);
    }

    /** Represents an UpdateHeadFrameRsp. */
    class UpdateHeadFrameRsp implements IUpdateHeadFrameRsp {

        /**
         * Constructs a new UpdateHeadFrameRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: item.IUpdateHeadFrameRsp);

        /** UpdateHeadFrameRsp errCode. */
        public errCode: number;

        /** UpdateHeadFrameRsp errMsg. */
        public errMsg: string;

        /**
         * Creates a new UpdateHeadFrameRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateHeadFrameRsp instance
         */
        public static create(properties?: item.IUpdateHeadFrameRsp): item.UpdateHeadFrameRsp;

        /**
         * Encodes the specified UpdateHeadFrameRsp message. Does not implicitly {@link item.UpdateHeadFrameRsp.verify|verify} messages.
         * @param message UpdateHeadFrameRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item.IUpdateHeadFrameRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateHeadFrameRsp message, length delimited. Does not implicitly {@link item.UpdateHeadFrameRsp.verify|verify} messages.
         * @param message UpdateHeadFrameRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item.IUpdateHeadFrameRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateHeadFrameRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateHeadFrameRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item.UpdateHeadFrameRsp;

        /**
         * Decodes an UpdateHeadFrameRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateHeadFrameRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item.UpdateHeadFrameRsp;

        /**
         * Verifies an UpdateHeadFrameRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateHeadFrameRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateHeadFrameRsp
         */
        public static fromObject(object: { [k: string]: any }): item.UpdateHeadFrameRsp;

        /**
         * Creates a plain object from an UpdateHeadFrameRsp message. Also converts values to other types if specified.
         * @param message UpdateHeadFrameRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item.UpdateHeadFrameRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateHeadFrameRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetItemNumReq. */
    interface IGetItemNumReq {

        /** GetItemNumReq uid */
        uid?: (number|Long|null);

        /** GetItemNumReq itemList */
        itemList?: (string|null);
    }

    /** Represents a GetItemNumReq. */
    class GetItemNumReq implements IGetItemNumReq {

        /**
         * Constructs a new GetItemNumReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: item.IGetItemNumReq);

        /** GetItemNumReq uid. */
        public uid: (number|Long);

        /** GetItemNumReq itemList. */
        public itemList: string;

        /**
         * Creates a new GetItemNumReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetItemNumReq instance
         */
        public static create(properties?: item.IGetItemNumReq): item.GetItemNumReq;

        /**
         * Encodes the specified GetItemNumReq message. Does not implicitly {@link item.GetItemNumReq.verify|verify} messages.
         * @param message GetItemNumReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item.IGetItemNumReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetItemNumReq message, length delimited. Does not implicitly {@link item.GetItemNumReq.verify|verify} messages.
         * @param message GetItemNumReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item.IGetItemNumReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetItemNumReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetItemNumReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item.GetItemNumReq;

        /**
         * Decodes a GetItemNumReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetItemNumReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item.GetItemNumReq;

        /**
         * Verifies a GetItemNumReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetItemNumReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetItemNumReq
         */
        public static fromObject(object: { [k: string]: any }): item.GetItemNumReq;

        /**
         * Creates a plain object from a GetItemNumReq message. Also converts values to other types if specified.
         * @param message GetItemNumReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item.GetItemNumReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetItemNumReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetItemNumRsp. */
    interface IGetItemNumRsp {

        /** GetItemNumRsp errCode */
        errCode?: (number|null);

        /** GetItemNumRsp errMsg */
        errMsg?: (string|null);

        /** GetItemNumRsp items */
        items?: ({ [k: string]: (number|Long) }|null);
    }

    /** Represents a GetItemNumRsp. */
    class GetItemNumRsp implements IGetItemNumRsp {

        /**
         * Constructs a new GetItemNumRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: item.IGetItemNumRsp);

        /** GetItemNumRsp errCode. */
        public errCode: number;

        /** GetItemNumRsp errMsg. */
        public errMsg: string;

        /** GetItemNumRsp items. */
        public items: { [k: string]: (number|Long) };

        /**
         * Creates a new GetItemNumRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetItemNumRsp instance
         */
        public static create(properties?: item.IGetItemNumRsp): item.GetItemNumRsp;

        /**
         * Encodes the specified GetItemNumRsp message. Does not implicitly {@link item.GetItemNumRsp.verify|verify} messages.
         * @param message GetItemNumRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item.IGetItemNumRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetItemNumRsp message, length delimited. Does not implicitly {@link item.GetItemNumRsp.verify|verify} messages.
         * @param message GetItemNumRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item.IGetItemNumRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetItemNumRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetItemNumRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item.GetItemNumRsp;

        /**
         * Decodes a GetItemNumRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetItemNumRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item.GetItemNumRsp;

        /**
         * Verifies a GetItemNumRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetItemNumRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetItemNumRsp
         */
        public static fromObject(object: { [k: string]: any }): item.GetItemNumRsp;

        /**
         * Creates a plain object from a GetItemNumRsp message. Also converts values to other types if specified.
         * @param message GetItemNumRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item.GetItemNumRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetItemNumRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ItemVipLevelNot. */
    interface IItemVipLevelNot {

        /** ItemVipLevelNot params */
        params?: ({ [k: string]: string }|null);
    }

    /** Represents an ItemVipLevelNot. */
    class ItemVipLevelNot implements IItemVipLevelNot {

        /**
         * Constructs a new ItemVipLevelNot.
         * @param [properties] Properties to set
         */
        constructor(properties?: item.IItemVipLevelNot);

        /** ItemVipLevelNot params. */
        public params: { [k: string]: string };

        /**
         * Creates a new ItemVipLevelNot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ItemVipLevelNot instance
         */
        public static create(properties?: item.IItemVipLevelNot): item.ItemVipLevelNot;

        /**
         * Encodes the specified ItemVipLevelNot message. Does not implicitly {@link item.ItemVipLevelNot.verify|verify} messages.
         * @param message ItemVipLevelNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item.IItemVipLevelNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ItemVipLevelNot message, length delimited. Does not implicitly {@link item.ItemVipLevelNot.verify|verify} messages.
         * @param message ItemVipLevelNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item.IItemVipLevelNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ItemVipLevelNot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ItemVipLevelNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item.ItemVipLevelNot;

        /**
         * Decodes an ItemVipLevelNot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ItemVipLevelNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item.ItemVipLevelNot;

        /**
         * Verifies an ItemVipLevelNot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ItemVipLevelNot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ItemVipLevelNot
         */
        public static fromObject(object: { [k: string]: any }): item.ItemVipLevelNot;

        /**
         * Creates a plain object from an ItemVipLevelNot message. Also converts values to other types if specified.
         * @param message ItemVipLevelNot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item.ItemVipLevelNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ItemVipLevelNot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
