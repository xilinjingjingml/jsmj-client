import * as $protobuf from "protobufjs";
/** Namespace personal. */
export namespace personal {

    /** Represents a Personal */
    class Personal extends $protobuf.rpc.Service {

        /**
         * Constructs a new Personal service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Personal service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Personal;

        /**
         * Calls GetPersonalProgress.
         * @param request GetPersonalProgressReq message or plain object
         * @param callback Node-style callback called with the error, if any, and GetPersonalProgressRsp
         */
        public getPersonalProgress(request: personal.IGetPersonalProgressReq, callback: personal.Personal.GetPersonalProgressCallback): void;

        /**
         * Calls GetPersonalProgress.
         * @param request GetPersonalProgressReq message or plain object
         * @returns Promise
         */
        public getPersonalProgress(request: personal.IGetPersonalProgressReq): Promise<personal.GetPersonalProgressRsp>;

        /**
         * Calls GetPersonalAward.
         * @param request GetPersonalAwardReq message or plain object
         * @param callback Node-style callback called with the error, if any, and GetPersonalAwardRsp
         */
        public getPersonalAward(request: personal.IGetPersonalAwardReq, callback: personal.Personal.GetPersonalAwardCallback): void;

        /**
         * Calls GetPersonalAward.
         * @param request GetPersonalAwardReq message or plain object
         * @returns Promise
         */
        public getPersonalAward(request: personal.IGetPersonalAwardReq): Promise<personal.GetPersonalAwardRsp>;
    }

    namespace Personal {

        /**
         * Callback as used by {@link personal.Personal#getPersonalProgress}.
         * @param error Error, if any
         * @param [response] GetPersonalProgressRsp
         */
        type GetPersonalProgressCallback = (error: (Error|null), response?: personal.GetPersonalProgressRsp) => void;

        /**
         * Callback as used by {@link personal.Personal#getPersonalAward}.
         * @param error Error, if any
         * @param [response] GetPersonalAwardRsp
         */
        type GetPersonalAwardCallback = (error: (Error|null), response?: personal.GetPersonalAwardRsp) => void;
    }

    /** Properties of a GetPersonalProgressReq. */
    interface IGetPersonalProgressReq {

        /** GetPersonalProgressReq uid */
        uid?: (number|Long|null);
    }

    /** Represents a GetPersonalProgressReq. */
    class GetPersonalProgressReq implements IGetPersonalProgressReq {

        /**
         * Constructs a new GetPersonalProgressReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: personal.IGetPersonalProgressReq);

        /** GetPersonalProgressReq uid. */
        public uid: (number|Long);

        /**
         * Creates a new GetPersonalProgressReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetPersonalProgressReq instance
         */
        public static create(properties?: personal.IGetPersonalProgressReq): personal.GetPersonalProgressReq;

        /**
         * Encodes the specified GetPersonalProgressReq message. Does not implicitly {@link personal.GetPersonalProgressReq.verify|verify} messages.
         * @param message GetPersonalProgressReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: personal.IGetPersonalProgressReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetPersonalProgressReq message, length delimited. Does not implicitly {@link personal.GetPersonalProgressReq.verify|verify} messages.
         * @param message GetPersonalProgressReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: personal.IGetPersonalProgressReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetPersonalProgressReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetPersonalProgressReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): personal.GetPersonalProgressReq;

        /**
         * Decodes a GetPersonalProgressReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetPersonalProgressReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): personal.GetPersonalProgressReq;

        /**
         * Verifies a GetPersonalProgressReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetPersonalProgressReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetPersonalProgressReq
         */
        public static fromObject(object: { [k: string]: any }): personal.GetPersonalProgressReq;

        /**
         * Creates a plain object from a GetPersonalProgressReq message. Also converts values to other types if specified.
         * @param message GetPersonalProgressReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: personal.GetPersonalProgressReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetPersonalProgressReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AwardItem. */
    interface IAwardItem {

        /** AwardItem id */
        id?: (number|null);

        /** AwardItem num */
        num?: (number|null);
    }

    /** Represents an AwardItem. */
    class AwardItem implements IAwardItem {

        /**
         * Constructs a new AwardItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: personal.IAwardItem);

        /** AwardItem id. */
        public id: number;

        /** AwardItem num. */
        public num: number;

        /**
         * Creates a new AwardItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AwardItem instance
         */
        public static create(properties?: personal.IAwardItem): personal.AwardItem;

        /**
         * Encodes the specified AwardItem message. Does not implicitly {@link personal.AwardItem.verify|verify} messages.
         * @param message AwardItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: personal.IAwardItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AwardItem message, length delimited. Does not implicitly {@link personal.AwardItem.verify|verify} messages.
         * @param message AwardItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: personal.IAwardItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AwardItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AwardItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): personal.AwardItem;

        /**
         * Decodes an AwardItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AwardItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): personal.AwardItem;

        /**
         * Verifies an AwardItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AwardItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AwardItem
         */
        public static fromObject(object: { [k: string]: any }): personal.AwardItem;

        /**
         * Creates a plain object from an AwardItem message. Also converts values to other types if specified.
         * @param message AwardItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: personal.AwardItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AwardItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DailyItem. */
    interface IDailyItem {

        /** DailyItem day */
        day?: (number|null);

        /** DailyItem awardStatus */
        awardStatus?: (number|null);

        /** DailyItem awards */
        awards?: (personal.IAwardItem[]|null);
    }

    /** Represents a DailyItem. */
    class DailyItem implements IDailyItem {

        /**
         * Constructs a new DailyItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: personal.IDailyItem);

        /** DailyItem day. */
        public day: number;

        /** DailyItem awardStatus. */
        public awardStatus: number;

        /** DailyItem awards. */
        public awards: personal.IAwardItem[];

        /**
         * Creates a new DailyItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DailyItem instance
         */
        public static create(properties?: personal.IDailyItem): personal.DailyItem;

        /**
         * Encodes the specified DailyItem message. Does not implicitly {@link personal.DailyItem.verify|verify} messages.
         * @param message DailyItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: personal.IDailyItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DailyItem message, length delimited. Does not implicitly {@link personal.DailyItem.verify|verify} messages.
         * @param message DailyItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: personal.IDailyItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DailyItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DailyItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): personal.DailyItem;

        /**
         * Decodes a DailyItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DailyItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): personal.DailyItem;

        /**
         * Verifies a DailyItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DailyItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DailyItem
         */
        public static fromObject(object: { [k: string]: any }): personal.DailyItem;

        /**
         * Creates a plain object from a DailyItem message. Also converts values to other types if specified.
         * @param message DailyItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: personal.DailyItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DailyItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AccumulateItem. */
    interface IAccumulateItem {

        /** AccumulateItem count */
        count?: (number|null);

        /** AccumulateItem awardStatus */
        awardStatus?: (number|null);

        /** AccumulateItem awards */
        awards?: (personal.IAwardItem[]|null);
    }

    /** Represents an AccumulateItem. */
    class AccumulateItem implements IAccumulateItem {

        /**
         * Constructs a new AccumulateItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: personal.IAccumulateItem);

        /** AccumulateItem count. */
        public count: number;

        /** AccumulateItem awardStatus. */
        public awardStatus: number;

        /** AccumulateItem awards. */
        public awards: personal.IAwardItem[];

        /**
         * Creates a new AccumulateItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccumulateItem instance
         */
        public static create(properties?: personal.IAccumulateItem): personal.AccumulateItem;

        /**
         * Encodes the specified AccumulateItem message. Does not implicitly {@link personal.AccumulateItem.verify|verify} messages.
         * @param message AccumulateItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: personal.IAccumulateItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccumulateItem message, length delimited. Does not implicitly {@link personal.AccumulateItem.verify|verify} messages.
         * @param message AccumulateItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: personal.IAccumulateItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccumulateItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccumulateItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): personal.AccumulateItem;

        /**
         * Decodes an AccumulateItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccumulateItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): personal.AccumulateItem;

        /**
         * Verifies an AccumulateItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccumulateItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccumulateItem
         */
        public static fromObject(object: { [k: string]: any }): personal.AccumulateItem;

        /**
         * Creates a plain object from an AccumulateItem message. Also converts values to other types if specified.
         * @param message AccumulateItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: personal.AccumulateItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccumulateItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserItem. */
    interface IUserItem {

        /** UserItem uid */
        uid?: (number|Long|null);

        /** UserItem daily */
        daily?: (string|null);

        /** UserItem dailyTime */
        dailyTime?: (number|Long|null);

        /** UserItem accumulate */
        accumulate?: (string|null);

        /** UserItem accumulateTime */
        accumulateTime?: (number|Long|null);
    }

    /** Represents a UserItem. */
    class UserItem implements IUserItem {

        /**
         * Constructs a new UserItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: personal.IUserItem);

        /** UserItem uid. */
        public uid: (number|Long);

        /** UserItem daily. */
        public daily: string;

        /** UserItem dailyTime. */
        public dailyTime: (number|Long);

        /** UserItem accumulate. */
        public accumulate: string;

        /** UserItem accumulateTime. */
        public accumulateTime: (number|Long);

        /**
         * Creates a new UserItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserItem instance
         */
        public static create(properties?: personal.IUserItem): personal.UserItem;

        /**
         * Encodes the specified UserItem message. Does not implicitly {@link personal.UserItem.verify|verify} messages.
         * @param message UserItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: personal.IUserItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserItem message, length delimited. Does not implicitly {@link personal.UserItem.verify|verify} messages.
         * @param message UserItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: personal.IUserItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): personal.UserItem;

        /**
         * Decodes a UserItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): personal.UserItem;

        /**
         * Verifies a UserItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserItem
         */
        public static fromObject(object: { [k: string]: any }): personal.UserItem;

        /**
         * Creates a plain object from a UserItem message. Also converts values to other types if specified.
         * @param message UserItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: personal.UserItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetPersonalProgressRsp. */
    interface IGetPersonalProgressRsp {

        /** GetPersonalProgressRsp errCode */
        errCode?: (number|null);

        /** GetPersonalProgressRsp errMsg */
        errMsg?: (string|null);

        /** GetPersonalProgressRsp dailyTime */
        dailyTime?: (number|Long|null);

        /** GetPersonalProgressRsp accumulateTime */
        accumulateTime?: (number|Long|null);

        /** GetPersonalProgressRsp dailyItems */
        dailyItems?: (personal.IDailyItem[]|null);

        /** GetPersonalProgressRsp accumulateItems */
        accumulateItems?: (personal.IAccumulateItem[]|null);
    }

    /** Represents a GetPersonalProgressRsp. */
    class GetPersonalProgressRsp implements IGetPersonalProgressRsp {

        /**
         * Constructs a new GetPersonalProgressRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: personal.IGetPersonalProgressRsp);

        /** GetPersonalProgressRsp errCode. */
        public errCode: number;

        /** GetPersonalProgressRsp errMsg. */
        public errMsg: string;

        /** GetPersonalProgressRsp dailyTime. */
        public dailyTime: (number|Long);

        /** GetPersonalProgressRsp accumulateTime. */
        public accumulateTime: (number|Long);

        /** GetPersonalProgressRsp dailyItems. */
        public dailyItems: personal.IDailyItem[];

        /** GetPersonalProgressRsp accumulateItems. */
        public accumulateItems: personal.IAccumulateItem[];

        /**
         * Creates a new GetPersonalProgressRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetPersonalProgressRsp instance
         */
        public static create(properties?: personal.IGetPersonalProgressRsp): personal.GetPersonalProgressRsp;

        /**
         * Encodes the specified GetPersonalProgressRsp message. Does not implicitly {@link personal.GetPersonalProgressRsp.verify|verify} messages.
         * @param message GetPersonalProgressRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: personal.IGetPersonalProgressRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetPersonalProgressRsp message, length delimited. Does not implicitly {@link personal.GetPersonalProgressRsp.verify|verify} messages.
         * @param message GetPersonalProgressRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: personal.IGetPersonalProgressRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetPersonalProgressRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetPersonalProgressRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): personal.GetPersonalProgressRsp;

        /**
         * Decodes a GetPersonalProgressRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetPersonalProgressRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): personal.GetPersonalProgressRsp;

        /**
         * Verifies a GetPersonalProgressRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetPersonalProgressRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetPersonalProgressRsp
         */
        public static fromObject(object: { [k: string]: any }): personal.GetPersonalProgressRsp;

        /**
         * Creates a plain object from a GetPersonalProgressRsp message. Also converts values to other types if specified.
         * @param message GetPersonalProgressRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: personal.GetPersonalProgressRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetPersonalProgressRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetPersonalAwardReq. */
    interface IGetPersonalAwardReq {

        /** GetPersonalAwardReq uid */
        uid?: (number|Long|null);

        /** GetPersonalAwardReq personalType */
        personalType?: (number|null);

        /** GetPersonalAwardReq personalDay */
        personalDay?: (number|null);

        /** GetPersonalAwardReq awardType */
        awardType?: (number|null);
    }

    /** Represents a GetPersonalAwardReq. */
    class GetPersonalAwardReq implements IGetPersonalAwardReq {

        /**
         * Constructs a new GetPersonalAwardReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: personal.IGetPersonalAwardReq);

        /** GetPersonalAwardReq uid. */
        public uid: (number|Long);

        /** GetPersonalAwardReq personalType. */
        public personalType: number;

        /** GetPersonalAwardReq personalDay. */
        public personalDay: number;

        /** GetPersonalAwardReq awardType. */
        public awardType: number;

        /**
         * Creates a new GetPersonalAwardReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetPersonalAwardReq instance
         */
        public static create(properties?: personal.IGetPersonalAwardReq): personal.GetPersonalAwardReq;

        /**
         * Encodes the specified GetPersonalAwardReq message. Does not implicitly {@link personal.GetPersonalAwardReq.verify|verify} messages.
         * @param message GetPersonalAwardReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: personal.IGetPersonalAwardReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetPersonalAwardReq message, length delimited. Does not implicitly {@link personal.GetPersonalAwardReq.verify|verify} messages.
         * @param message GetPersonalAwardReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: personal.IGetPersonalAwardReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetPersonalAwardReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetPersonalAwardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): personal.GetPersonalAwardReq;

        /**
         * Decodes a GetPersonalAwardReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetPersonalAwardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): personal.GetPersonalAwardReq;

        /**
         * Verifies a GetPersonalAwardReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetPersonalAwardReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetPersonalAwardReq
         */
        public static fromObject(object: { [k: string]: any }): personal.GetPersonalAwardReq;

        /**
         * Creates a plain object from a GetPersonalAwardReq message. Also converts values to other types if specified.
         * @param message GetPersonalAwardReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: personal.GetPersonalAwardReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetPersonalAwardReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetPersonalAwardRsp. */
    interface IGetPersonalAwardRsp {

        /** GetPersonalAwardRsp errCode */
        errCode?: (number|null);

        /** GetPersonalAwardRsp errMsg */
        errMsg?: (string|null);

        /** GetPersonalAwardRsp awards */
        awards?: (personal.IAwardItem[]|null);
    }

    /** Represents a GetPersonalAwardRsp. */
    class GetPersonalAwardRsp implements IGetPersonalAwardRsp {

        /**
         * Constructs a new GetPersonalAwardRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: personal.IGetPersonalAwardRsp);

        /** GetPersonalAwardRsp errCode. */
        public errCode: number;

        /** GetPersonalAwardRsp errMsg. */
        public errMsg: string;

        /** GetPersonalAwardRsp awards. */
        public awards: personal.IAwardItem[];

        /**
         * Creates a new GetPersonalAwardRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetPersonalAwardRsp instance
         */
        public static create(properties?: personal.IGetPersonalAwardRsp): personal.GetPersonalAwardRsp;

        /**
         * Encodes the specified GetPersonalAwardRsp message. Does not implicitly {@link personal.GetPersonalAwardRsp.verify|verify} messages.
         * @param message GetPersonalAwardRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: personal.IGetPersonalAwardRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetPersonalAwardRsp message, length delimited. Does not implicitly {@link personal.GetPersonalAwardRsp.verify|verify} messages.
         * @param message GetPersonalAwardRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: personal.IGetPersonalAwardRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetPersonalAwardRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetPersonalAwardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): personal.GetPersonalAwardRsp;

        /**
         * Decodes a GetPersonalAwardRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetPersonalAwardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): personal.GetPersonalAwardRsp;

        /**
         * Verifies a GetPersonalAwardRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetPersonalAwardRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetPersonalAwardRsp
         */
        public static fromObject(object: { [k: string]: any }): personal.GetPersonalAwardRsp;

        /**
         * Creates a plain object from a GetPersonalAwardRsp message. Also converts values to other types if specified.
         * @param message GetPersonalAwardRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: personal.GetPersonalAwardRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetPersonalAwardRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
