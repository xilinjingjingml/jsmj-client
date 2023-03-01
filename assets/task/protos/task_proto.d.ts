import * as $protobuf from "protobufjs";
/** Namespace task. */
export namespace task {

    /** Represents a Task */
    class Task extends $protobuf.rpc.Service {

        /**
         * Constructs a new Task service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Task service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Task;

        /**
         * Calls GetTaskProgress.
         * @param request GetTaskProgressReq message or plain object
         * @param callback Node-style callback called with the error, if any, and GetTaskProgressRsp
         */
        public getTaskProgress(request: task.IGetTaskProgressReq, callback: task.Task.GetTaskProgressCallback): void;

        /**
         * Calls GetTaskProgress.
         * @param request GetTaskProgressReq message or plain object
         * @returns Promise
         */
        public getTaskProgress(request: task.IGetTaskProgressReq): Promise<task.GetTaskProgressRsp>;

        /**
         * Calls GetTaskAward.
         * @param request GetTaskAwardReq message or plain object
         * @param callback Node-style callback called with the error, if any, and GetTaskAwardRsp
         */
        public getTaskAward(request: task.IGetTaskAwardReq, callback: task.Task.GetTaskAwardCallback): void;

        /**
         * Calls GetTaskAward.
         * @param request GetTaskAwardReq message or plain object
         * @returns Promise
         */
        public getTaskAward(request: task.IGetTaskAwardReq): Promise<task.GetTaskAwardRsp>;

        /**
         * Calls UptTaskProgressByIndex.
         * @param request UptTaskProgressByIndexReq message or plain object
         * @param callback Node-style callback called with the error, if any, and UptTaskProgressByIndexRsp
         */
        public uptTaskProgressByIndex(request: task.IUptTaskProgressByIndexReq, callback: task.Task.UptTaskProgressByIndexCallback): void;

        /**
         * Calls UptTaskProgressByIndex.
         * @param request UptTaskProgressByIndexReq message or plain object
         * @returns Promise
         */
        public uptTaskProgressByIndex(request: task.IUptTaskProgressByIndexReq): Promise<task.UptTaskProgressByIndexRsp>;

        /**
         * Calls UptTaskProgressByGroup.
         * @param request UptTaskProgressByGroupReq message or plain object
         * @param callback Node-style callback called with the error, if any, and UptTaskProgressByGroupRsp
         */
        public uptTaskProgressByGroup(request: task.IUptTaskProgressByGroupReq, callback: task.Task.UptTaskProgressByGroupCallback): void;

        /**
         * Calls UptTaskProgressByGroup.
         * @param request UptTaskProgressByGroupReq message or plain object
         * @returns Promise
         */
        public uptTaskProgressByGroup(request: task.IUptTaskProgressByGroupReq): Promise<task.UptTaskProgressByGroupRsp>;
    }

    namespace Task {

        /**
         * Callback as used by {@link task.Task#getTaskProgress}.
         * @param error Error, if any
         * @param [response] GetTaskProgressRsp
         */
        type GetTaskProgressCallback = (error: (Error|null), response?: task.GetTaskProgressRsp) => void;

        /**
         * Callback as used by {@link task.Task#getTaskAward}.
         * @param error Error, if any
         * @param [response] GetTaskAwardRsp
         */
        type GetTaskAwardCallback = (error: (Error|null), response?: task.GetTaskAwardRsp) => void;

        /**
         * Callback as used by {@link task.Task#uptTaskProgressByIndex}.
         * @param error Error, if any
         * @param [response] UptTaskProgressByIndexRsp
         */
        type UptTaskProgressByIndexCallback = (error: (Error|null), response?: task.UptTaskProgressByIndexRsp) => void;

        /**
         * Callback as used by {@link task.Task#uptTaskProgressByGroup}.
         * @param error Error, if any
         * @param [response] UptTaskProgressByGroupRsp
         */
        type UptTaskProgressByGroupCallback = (error: (Error|null), response?: task.UptTaskProgressByGroupRsp) => void;
    }

    /** Properties of a GetTaskProgressReq. */
    interface IGetTaskProgressReq {

        /** GetTaskProgressReq type */
        type?: (number|null);

        /** GetTaskProgressReq uid */
        uid?: (number|Long|null);
    }

    /** Represents a GetTaskProgressReq. */
    class GetTaskProgressReq implements IGetTaskProgressReq {

        /**
         * Constructs a new GetTaskProgressReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: task.IGetTaskProgressReq);

        /** GetTaskProgressReq type. */
        public type: number;

        /** GetTaskProgressReq uid. */
        public uid: (number|Long);

        /**
         * Creates a new GetTaskProgressReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetTaskProgressReq instance
         */
        public static create(properties?: task.IGetTaskProgressReq): task.GetTaskProgressReq;

        /**
         * Encodes the specified GetTaskProgressReq message. Does not implicitly {@link task.GetTaskProgressReq.verify|verify} messages.
         * @param message GetTaskProgressReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: task.IGetTaskProgressReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetTaskProgressReq message, length delimited. Does not implicitly {@link task.GetTaskProgressReq.verify|verify} messages.
         * @param message GetTaskProgressReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: task.IGetTaskProgressReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetTaskProgressReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetTaskProgressReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): task.GetTaskProgressReq;

        /**
         * Decodes a GetTaskProgressReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetTaskProgressReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): task.GetTaskProgressReq;

        /**
         * Verifies a GetTaskProgressReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetTaskProgressReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetTaskProgressReq
         */
        public static fromObject(object: { [k: string]: any }): task.GetTaskProgressReq;

        /**
         * Creates a plain object from a GetTaskProgressReq message. Also converts values to other types if specified.
         * @param message GetTaskProgressReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: task.GetTaskProgressReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetTaskProgressReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AwardItem. */
    interface IAwardItem {

        /** AwardItem type */
        type?: (number|null);

        /** AwardItem propId */
        propId?: (number|null);

        /** AwardItem minNum */
        minNum?: (number|Long|null);

        /** AwardItem maxNum */
        maxNum?: (number|Long|null);

        /** AwardItem effectTime */
        effectTime?: (number|Long|null);
    }

    /** Represents an AwardItem. */
    class AwardItem implements IAwardItem {

        /**
         * Constructs a new AwardItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: task.IAwardItem);

        /** AwardItem type. */
        public type: number;

        /** AwardItem propId. */
        public propId: number;

        /** AwardItem minNum. */
        public minNum: (number|Long);

        /** AwardItem maxNum. */
        public maxNum: (number|Long);

        /** AwardItem effectTime. */
        public effectTime: (number|Long);

        /**
         * Creates a new AwardItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AwardItem instance
         */
        public static create(properties?: task.IAwardItem): task.AwardItem;

        /**
         * Encodes the specified AwardItem message. Does not implicitly {@link task.AwardItem.verify|verify} messages.
         * @param message AwardItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: task.IAwardItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AwardItem message, length delimited. Does not implicitly {@link task.AwardItem.verify|verify} messages.
         * @param message AwardItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: task.IAwardItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AwardItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AwardItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): task.AwardItem;

        /**
         * Decodes an AwardItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AwardItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): task.AwardItem;

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
        public static fromObject(object: { [k: string]: any }): task.AwardItem;

        /**
         * Creates a plain object from an AwardItem message. Also converts values to other types if specified.
         * @param message AwardItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: task.AwardItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AwardItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TaskItem. */
    interface ITaskItem {

        /** TaskItem uid */
        uid?: (number|Long|null);

        /** TaskItem mid */
        mid?: (string|null);

        /** TaskItem gid */
        gid?: (number|null);

        /** TaskItem progId */
        progId?: (string|null);

        /** TaskItem taskId */
        taskId?: (number|null);

        /** TaskItem taskType */
        taskType?: (number|null);

        /** TaskItem taskCond */
        taskCond?: (number|null);

        /** TaskItem desc */
        desc?: (string|null);

        /** TaskItem title */
        title?: (string|null);

        /** TaskItem awards */
        awards?: (task.IAwardItem[]|null);

        /** TaskItem condNum */
        condNum?: (number|Long|null);

        /** TaskItem curNum */
        curNum?: (number|Long|null);

        /** TaskItem status */
        status?: (number|null);

        /** TaskItem headFrameIndex */
        headFrameIndex?: (number|Long|null);

        /** TaskItem taskGroup */
        taskGroup?: (number|null);
    }

    /** Represents a TaskItem. */
    class TaskItem implements ITaskItem {

        /**
         * Constructs a new TaskItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: task.ITaskItem);

        /** TaskItem uid. */
        public uid: (number|Long);

        /** TaskItem mid. */
        public mid: string;

        /** TaskItem gid. */
        public gid: number;

        /** TaskItem progId. */
        public progId: string;

        /** TaskItem taskId. */
        public taskId: number;

        /** TaskItem taskType. */
        public taskType: number;

        /** TaskItem taskCond. */
        public taskCond: number;

        /** TaskItem desc. */
        public desc: string;

        /** TaskItem title. */
        public title: string;

        /** TaskItem awards. */
        public awards: task.IAwardItem[];

        /** TaskItem condNum. */
        public condNum: (number|Long);

        /** TaskItem curNum. */
        public curNum: (number|Long);

        /** TaskItem status. */
        public status: number;

        /** TaskItem headFrameIndex. */
        public headFrameIndex: (number|Long);

        /** TaskItem taskGroup. */
        public taskGroup: number;

        /**
         * Creates a new TaskItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TaskItem instance
         */
        public static create(properties?: task.ITaskItem): task.TaskItem;

        /**
         * Encodes the specified TaskItem message. Does not implicitly {@link task.TaskItem.verify|verify} messages.
         * @param message TaskItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: task.ITaskItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TaskItem message, length delimited. Does not implicitly {@link task.TaskItem.verify|verify} messages.
         * @param message TaskItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: task.ITaskItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TaskItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TaskItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): task.TaskItem;

        /**
         * Decodes a TaskItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TaskItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): task.TaskItem;

        /**
         * Verifies a TaskItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TaskItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TaskItem
         */
        public static fromObject(object: { [k: string]: any }): task.TaskItem;

        /**
         * Creates a plain object from a TaskItem message. Also converts values to other types if specified.
         * @param message TaskItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: task.TaskItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TaskItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetTaskProgressRsp. */
    interface IGetTaskProgressRsp {

        /** GetTaskProgressRsp errCode */
        errCode?: (number|null);

        /** GetTaskProgressRsp errMsg */
        errMsg?: (string|null);

        /** GetTaskProgressRsp taskItems */
        taskItems?: (task.ITaskItem[]|null);
    }

    /** Represents a GetTaskProgressRsp. */
    class GetTaskProgressRsp implements IGetTaskProgressRsp {

        /**
         * Constructs a new GetTaskProgressRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: task.IGetTaskProgressRsp);

        /** GetTaskProgressRsp errCode. */
        public errCode: number;

        /** GetTaskProgressRsp errMsg. */
        public errMsg: string;

        /** GetTaskProgressRsp taskItems. */
        public taskItems: task.ITaskItem[];

        /**
         * Creates a new GetTaskProgressRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetTaskProgressRsp instance
         */
        public static create(properties?: task.IGetTaskProgressRsp): task.GetTaskProgressRsp;

        /**
         * Encodes the specified GetTaskProgressRsp message. Does not implicitly {@link task.GetTaskProgressRsp.verify|verify} messages.
         * @param message GetTaskProgressRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: task.IGetTaskProgressRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetTaskProgressRsp message, length delimited. Does not implicitly {@link task.GetTaskProgressRsp.verify|verify} messages.
         * @param message GetTaskProgressRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: task.IGetTaskProgressRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetTaskProgressRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetTaskProgressRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): task.GetTaskProgressRsp;

        /**
         * Decodes a GetTaskProgressRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetTaskProgressRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): task.GetTaskProgressRsp;

        /**
         * Verifies a GetTaskProgressRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetTaskProgressRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetTaskProgressRsp
         */
        public static fromObject(object: { [k: string]: any }): task.GetTaskProgressRsp;

        /**
         * Creates a plain object from a GetTaskProgressRsp message. Also converts values to other types if specified.
         * @param message GetTaskProgressRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: task.GetTaskProgressRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetTaskProgressRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetTaskAwardReq. */
    interface IGetTaskAwardReq {

        /** GetTaskAwardReq progId */
        progId?: (string|null);

        /** GetTaskAwardReq uid */
        uid?: (number|Long|null);
    }

    /** Represents a GetTaskAwardReq. */
    class GetTaskAwardReq implements IGetTaskAwardReq {

        /**
         * Constructs a new GetTaskAwardReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: task.IGetTaskAwardReq);

        /** GetTaskAwardReq progId. */
        public progId: string;

        /** GetTaskAwardReq uid. */
        public uid: (number|Long);

        /**
         * Creates a new GetTaskAwardReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetTaskAwardReq instance
         */
        public static create(properties?: task.IGetTaskAwardReq): task.GetTaskAwardReq;

        /**
         * Encodes the specified GetTaskAwardReq message. Does not implicitly {@link task.GetTaskAwardReq.verify|verify} messages.
         * @param message GetTaskAwardReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: task.IGetTaskAwardReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetTaskAwardReq message, length delimited. Does not implicitly {@link task.GetTaskAwardReq.verify|verify} messages.
         * @param message GetTaskAwardReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: task.IGetTaskAwardReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetTaskAwardReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetTaskAwardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): task.GetTaskAwardReq;

        /**
         * Decodes a GetTaskAwardReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetTaskAwardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): task.GetTaskAwardReq;

        /**
         * Verifies a GetTaskAwardReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetTaskAwardReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetTaskAwardReq
         */
        public static fromObject(object: { [k: string]: any }): task.GetTaskAwardReq;

        /**
         * Creates a plain object from a GetTaskAwardReq message. Also converts values to other types if specified.
         * @param message GetTaskAwardReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: task.GetTaskAwardReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetTaskAwardReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetTaskAwardRsp. */
    interface IGetTaskAwardRsp {

        /** GetTaskAwardRsp errCode */
        errCode?: (number|null);

        /** GetTaskAwardRsp errMsg */
        errMsg?: (string|null);

        /** GetTaskAwardRsp awards */
        awards?: (task.IAwardItem[]|null);
    }

    /** Represents a GetTaskAwardRsp. */
    class GetTaskAwardRsp implements IGetTaskAwardRsp {

        /**
         * Constructs a new GetTaskAwardRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: task.IGetTaskAwardRsp);

        /** GetTaskAwardRsp errCode. */
        public errCode: number;

        /** GetTaskAwardRsp errMsg. */
        public errMsg: string;

        /** GetTaskAwardRsp awards. */
        public awards: task.IAwardItem[];

        /**
         * Creates a new GetTaskAwardRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetTaskAwardRsp instance
         */
        public static create(properties?: task.IGetTaskAwardRsp): task.GetTaskAwardRsp;

        /**
         * Encodes the specified GetTaskAwardRsp message. Does not implicitly {@link task.GetTaskAwardRsp.verify|verify} messages.
         * @param message GetTaskAwardRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: task.IGetTaskAwardRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetTaskAwardRsp message, length delimited. Does not implicitly {@link task.GetTaskAwardRsp.verify|verify} messages.
         * @param message GetTaskAwardRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: task.IGetTaskAwardRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetTaskAwardRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetTaskAwardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): task.GetTaskAwardRsp;

        /**
         * Decodes a GetTaskAwardRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetTaskAwardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): task.GetTaskAwardRsp;

        /**
         * Verifies a GetTaskAwardRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetTaskAwardRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetTaskAwardRsp
         */
        public static fromObject(object: { [k: string]: any }): task.GetTaskAwardRsp;

        /**
         * Creates a plain object from a GetTaskAwardRsp message. Also converts values to other types if specified.
         * @param message GetTaskAwardRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: task.GetTaskAwardRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetTaskAwardRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UptTaskProgsNotiItem. */
    interface IUptTaskProgsNotiItem {

        /** UptTaskProgsNotiItem uid */
        uid?: (number|Long|null);

        /** UptTaskProgsNotiItem ProgId */
        ProgId?: (string|null);

        /** UptTaskProgsNotiItem TaskId */
        TaskId?: (number|null);

        /** UptTaskProgsNotiItem condNum */
        condNum?: (number|Long|null);

        /** UptTaskProgsNotiItem curNum */
        curNum?: (number|Long|null);

        /** UptTaskProgsNotiItem status */
        status?: (number|null);
    }

    /** Represents an UptTaskProgsNotiItem. */
    class UptTaskProgsNotiItem implements IUptTaskProgsNotiItem {

        /**
         * Constructs a new UptTaskProgsNotiItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: task.IUptTaskProgsNotiItem);

        /** UptTaskProgsNotiItem uid. */
        public uid: (number|Long);

        /** UptTaskProgsNotiItem ProgId. */
        public ProgId: string;

        /** UptTaskProgsNotiItem TaskId. */
        public TaskId: number;

        /** UptTaskProgsNotiItem condNum. */
        public condNum: (number|Long);

        /** UptTaskProgsNotiItem curNum. */
        public curNum: (number|Long);

        /** UptTaskProgsNotiItem status. */
        public status: number;

        /**
         * Creates a new UptTaskProgsNotiItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UptTaskProgsNotiItem instance
         */
        public static create(properties?: task.IUptTaskProgsNotiItem): task.UptTaskProgsNotiItem;

        /**
         * Encodes the specified UptTaskProgsNotiItem message. Does not implicitly {@link task.UptTaskProgsNotiItem.verify|verify} messages.
         * @param message UptTaskProgsNotiItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: task.IUptTaskProgsNotiItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UptTaskProgsNotiItem message, length delimited. Does not implicitly {@link task.UptTaskProgsNotiItem.verify|verify} messages.
         * @param message UptTaskProgsNotiItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: task.IUptTaskProgsNotiItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UptTaskProgsNotiItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UptTaskProgsNotiItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): task.UptTaskProgsNotiItem;

        /**
         * Decodes an UptTaskProgsNotiItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UptTaskProgsNotiItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): task.UptTaskProgsNotiItem;

        /**
         * Verifies an UptTaskProgsNotiItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UptTaskProgsNotiItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UptTaskProgsNotiItem
         */
        public static fromObject(object: { [k: string]: any }): task.UptTaskProgsNotiItem;

        /**
         * Creates a plain object from an UptTaskProgsNotiItem message. Also converts values to other types if specified.
         * @param message UptTaskProgsNotiItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: task.UptTaskProgsNotiItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UptTaskProgsNotiItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UptTaskProgressByIndexReq. */
    interface IUptTaskProgressByIndexReq {

        /** UptTaskProgressByIndexReq uid */
        uid?: (number|Long|null);

        /** UptTaskProgressByIndexReq id */
        id?: (number|null);

        /** UptTaskProgressByIndexReq inc */
        inc?: (number|null);
    }

    /** Represents an UptTaskProgressByIndexReq. */
    class UptTaskProgressByIndexReq implements IUptTaskProgressByIndexReq {

        /**
         * Constructs a new UptTaskProgressByIndexReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: task.IUptTaskProgressByIndexReq);

        /** UptTaskProgressByIndexReq uid. */
        public uid: (number|Long);

        /** UptTaskProgressByIndexReq id. */
        public id: number;

        /** UptTaskProgressByIndexReq inc. */
        public inc: number;

        /**
         * Creates a new UptTaskProgressByIndexReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UptTaskProgressByIndexReq instance
         */
        public static create(properties?: task.IUptTaskProgressByIndexReq): task.UptTaskProgressByIndexReq;

        /**
         * Encodes the specified UptTaskProgressByIndexReq message. Does not implicitly {@link task.UptTaskProgressByIndexReq.verify|verify} messages.
         * @param message UptTaskProgressByIndexReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: task.IUptTaskProgressByIndexReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UptTaskProgressByIndexReq message, length delimited. Does not implicitly {@link task.UptTaskProgressByIndexReq.verify|verify} messages.
         * @param message UptTaskProgressByIndexReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: task.IUptTaskProgressByIndexReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UptTaskProgressByIndexReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UptTaskProgressByIndexReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): task.UptTaskProgressByIndexReq;

        /**
         * Decodes an UptTaskProgressByIndexReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UptTaskProgressByIndexReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): task.UptTaskProgressByIndexReq;

        /**
         * Verifies an UptTaskProgressByIndexReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UptTaskProgressByIndexReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UptTaskProgressByIndexReq
         */
        public static fromObject(object: { [k: string]: any }): task.UptTaskProgressByIndexReq;

        /**
         * Creates a plain object from an UptTaskProgressByIndexReq message. Also converts values to other types if specified.
         * @param message UptTaskProgressByIndexReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: task.UptTaskProgressByIndexReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UptTaskProgressByIndexReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UptTaskProgressByIndexRsp. */
    interface IUptTaskProgressByIndexRsp {

        /** UptTaskProgressByIndexRsp errCode */
        errCode?: (number|null);

        /** UptTaskProgressByIndexRsp errMsg */
        errMsg?: (string|null);
    }

    /** Represents an UptTaskProgressByIndexRsp. */
    class UptTaskProgressByIndexRsp implements IUptTaskProgressByIndexRsp {

        /**
         * Constructs a new UptTaskProgressByIndexRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: task.IUptTaskProgressByIndexRsp);

        /** UptTaskProgressByIndexRsp errCode. */
        public errCode: number;

        /** UptTaskProgressByIndexRsp errMsg. */
        public errMsg: string;

        /**
         * Creates a new UptTaskProgressByIndexRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UptTaskProgressByIndexRsp instance
         */
        public static create(properties?: task.IUptTaskProgressByIndexRsp): task.UptTaskProgressByIndexRsp;

        /**
         * Encodes the specified UptTaskProgressByIndexRsp message. Does not implicitly {@link task.UptTaskProgressByIndexRsp.verify|verify} messages.
         * @param message UptTaskProgressByIndexRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: task.IUptTaskProgressByIndexRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UptTaskProgressByIndexRsp message, length delimited. Does not implicitly {@link task.UptTaskProgressByIndexRsp.verify|verify} messages.
         * @param message UptTaskProgressByIndexRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: task.IUptTaskProgressByIndexRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UptTaskProgressByIndexRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UptTaskProgressByIndexRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): task.UptTaskProgressByIndexRsp;

        /**
         * Decodes an UptTaskProgressByIndexRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UptTaskProgressByIndexRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): task.UptTaskProgressByIndexRsp;

        /**
         * Verifies an UptTaskProgressByIndexRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UptTaskProgressByIndexRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UptTaskProgressByIndexRsp
         */
        public static fromObject(object: { [k: string]: any }): task.UptTaskProgressByIndexRsp;

        /**
         * Creates a plain object from an UptTaskProgressByIndexRsp message. Also converts values to other types if specified.
         * @param message UptTaskProgressByIndexRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: task.UptTaskProgressByIndexRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UptTaskProgressByIndexRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UptTaskProgressByGroupReq. */
    interface IUptTaskProgressByGroupReq {

        /** UptTaskProgressByGroupReq uid */
        uid?: (number|Long|null);

        /** UptTaskProgressByGroupReq group */
        group?: (number|null);

        /** UptTaskProgressByGroupReq inc */
        inc?: (number|null);
    }

    /** Represents an UptTaskProgressByGroupReq. */
    class UptTaskProgressByGroupReq implements IUptTaskProgressByGroupReq {

        /**
         * Constructs a new UptTaskProgressByGroupReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: task.IUptTaskProgressByGroupReq);

        /** UptTaskProgressByGroupReq uid. */
        public uid: (number|Long);

        /** UptTaskProgressByGroupReq group. */
        public group: number;

        /** UptTaskProgressByGroupReq inc. */
        public inc: number;

        /**
         * Creates a new UptTaskProgressByGroupReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UptTaskProgressByGroupReq instance
         */
        public static create(properties?: task.IUptTaskProgressByGroupReq): task.UptTaskProgressByGroupReq;

        /**
         * Encodes the specified UptTaskProgressByGroupReq message. Does not implicitly {@link task.UptTaskProgressByGroupReq.verify|verify} messages.
         * @param message UptTaskProgressByGroupReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: task.IUptTaskProgressByGroupReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UptTaskProgressByGroupReq message, length delimited. Does not implicitly {@link task.UptTaskProgressByGroupReq.verify|verify} messages.
         * @param message UptTaskProgressByGroupReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: task.IUptTaskProgressByGroupReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UptTaskProgressByGroupReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UptTaskProgressByGroupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): task.UptTaskProgressByGroupReq;

        /**
         * Decodes an UptTaskProgressByGroupReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UptTaskProgressByGroupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): task.UptTaskProgressByGroupReq;

        /**
         * Verifies an UptTaskProgressByGroupReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UptTaskProgressByGroupReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UptTaskProgressByGroupReq
         */
        public static fromObject(object: { [k: string]: any }): task.UptTaskProgressByGroupReq;

        /**
         * Creates a plain object from an UptTaskProgressByGroupReq message. Also converts values to other types if specified.
         * @param message UptTaskProgressByGroupReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: task.UptTaskProgressByGroupReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UptTaskProgressByGroupReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UptTaskProgressByGroupRsp. */
    interface IUptTaskProgressByGroupRsp {

        /** UptTaskProgressByGroupRsp errCode */
        errCode?: (number|null);

        /** UptTaskProgressByGroupRsp errMsg */
        errMsg?: (string|null);
    }

    /** Represents an UptTaskProgressByGroupRsp. */
    class UptTaskProgressByGroupRsp implements IUptTaskProgressByGroupRsp {

        /**
         * Constructs a new UptTaskProgressByGroupRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: task.IUptTaskProgressByGroupRsp);

        /** UptTaskProgressByGroupRsp errCode. */
        public errCode: number;

        /** UptTaskProgressByGroupRsp errMsg. */
        public errMsg: string;

        /**
         * Creates a new UptTaskProgressByGroupRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UptTaskProgressByGroupRsp instance
         */
        public static create(properties?: task.IUptTaskProgressByGroupRsp): task.UptTaskProgressByGroupRsp;

        /**
         * Encodes the specified UptTaskProgressByGroupRsp message. Does not implicitly {@link task.UptTaskProgressByGroupRsp.verify|verify} messages.
         * @param message UptTaskProgressByGroupRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: task.IUptTaskProgressByGroupRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UptTaskProgressByGroupRsp message, length delimited. Does not implicitly {@link task.UptTaskProgressByGroupRsp.verify|verify} messages.
         * @param message UptTaskProgressByGroupRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: task.IUptTaskProgressByGroupRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UptTaskProgressByGroupRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UptTaskProgressByGroupRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): task.UptTaskProgressByGroupRsp;

        /**
         * Decodes an UptTaskProgressByGroupRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UptTaskProgressByGroupRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): task.UptTaskProgressByGroupRsp;

        /**
         * Verifies an UptTaskProgressByGroupRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UptTaskProgressByGroupRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UptTaskProgressByGroupRsp
         */
        public static fromObject(object: { [k: string]: any }): task.UptTaskProgressByGroupRsp;

        /**
         * Creates a plain object from an UptTaskProgressByGroupRsp message. Also converts values to other types if specified.
         * @param message UptTaskProgressByGroupRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: task.UptTaskProgressByGroupRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UptTaskProgressByGroupRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UptTaskProgsNot. */
    interface IUptTaskProgsNot {

        /** UptTaskProgsNot items */
        items?: (task.IUptTaskProgsNotiItem[]|null);
    }

    /** Represents an UptTaskProgsNot. */
    class UptTaskProgsNot implements IUptTaskProgsNot {

        /**
         * Constructs a new UptTaskProgsNot.
         * @param [properties] Properties to set
         */
        constructor(properties?: task.IUptTaskProgsNot);

        /** UptTaskProgsNot items. */
        public items: task.IUptTaskProgsNotiItem[];

        /**
         * Creates a new UptTaskProgsNot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UptTaskProgsNot instance
         */
        public static create(properties?: task.IUptTaskProgsNot): task.UptTaskProgsNot;

        /**
         * Encodes the specified UptTaskProgsNot message. Does not implicitly {@link task.UptTaskProgsNot.verify|verify} messages.
         * @param message UptTaskProgsNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: task.IUptTaskProgsNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UptTaskProgsNot message, length delimited. Does not implicitly {@link task.UptTaskProgsNot.verify|verify} messages.
         * @param message UptTaskProgsNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: task.IUptTaskProgsNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UptTaskProgsNot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UptTaskProgsNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): task.UptTaskProgsNot;

        /**
         * Decodes an UptTaskProgsNot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UptTaskProgsNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): task.UptTaskProgsNot;

        /**
         * Verifies an UptTaskProgsNot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UptTaskProgsNot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UptTaskProgsNot
         */
        public static fromObject(object: { [k: string]: any }): task.UptTaskProgsNot;

        /**
         * Creates a plain object from an UptTaskProgsNot message. Also converts values to other types if specified.
         * @param message UptTaskProgsNot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: task.UptTaskProgsNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UptTaskProgsNot to JSON.
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
        constructor(properties?: task.IPlayerMsgNot);

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
        public static create(properties?: task.IPlayerMsgNot): task.PlayerMsgNot;

        /**
         * Encodes the specified PlayerMsgNot message. Does not implicitly {@link task.PlayerMsgNot.verify|verify} messages.
         * @param message PlayerMsgNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: task.IPlayerMsgNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerMsgNot message, length delimited. Does not implicitly {@link task.PlayerMsgNot.verify|verify} messages.
         * @param message PlayerMsgNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: task.IPlayerMsgNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerMsgNot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerMsgNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): task.PlayerMsgNot;

        /**
         * Decodes a PlayerMsgNot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerMsgNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): task.PlayerMsgNot;

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
        public static fromObject(object: { [k: string]: any }): task.PlayerMsgNot;

        /**
         * Creates a plain object from a PlayerMsgNot message. Also converts values to other types if specified.
         * @param message PlayerMsgNot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: task.PlayerMsgNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerMsgNot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TaskAwardNot. */
    interface ITaskAwardNot {

        /** TaskAwardNot haveRewards */
        haveRewards?: (boolean|null);

        /** TaskAwardNot style */
        style?: (number|null);

        /** TaskAwardNot desc */
        desc?: (string|null);

        /** TaskAwardNot align */
        align?: (number|null);
    }

    /** Represents a TaskAwardNot. */
    class TaskAwardNot implements ITaskAwardNot {

        /**
         * Constructs a new TaskAwardNot.
         * @param [properties] Properties to set
         */
        constructor(properties?: task.ITaskAwardNot);

        /** TaskAwardNot haveRewards. */
        public haveRewards: boolean;

        /** TaskAwardNot style. */
        public style: number;

        /** TaskAwardNot desc. */
        public desc: string;

        /** TaskAwardNot align. */
        public align: number;

        /**
         * Creates a new TaskAwardNot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TaskAwardNot instance
         */
        public static create(properties?: task.ITaskAwardNot): task.TaskAwardNot;

        /**
         * Encodes the specified TaskAwardNot message. Does not implicitly {@link task.TaskAwardNot.verify|verify} messages.
         * @param message TaskAwardNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: task.ITaskAwardNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TaskAwardNot message, length delimited. Does not implicitly {@link task.TaskAwardNot.verify|verify} messages.
         * @param message TaskAwardNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: task.ITaskAwardNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TaskAwardNot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TaskAwardNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): task.TaskAwardNot;

        /**
         * Decodes a TaskAwardNot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TaskAwardNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): task.TaskAwardNot;

        /**
         * Verifies a TaskAwardNot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TaskAwardNot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TaskAwardNot
         */
        public static fromObject(object: { [k: string]: any }): task.TaskAwardNot;

        /**
         * Creates a plain object from a TaskAwardNot message. Also converts values to other types if specified.
         * @param message TaskAwardNot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: task.TaskAwardNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TaskAwardNot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
