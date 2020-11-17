declare namespace ChivoxAiEngine{
    export class WsEngine{
        /**
         * 监听评测结果
         * @param cb 回调函数
         */
        onResult(cb:(res:{})=>void);
        /**
         * 监听错误结果
         * @param cb 回调函数
         */
        onErrorResult(cb:(res:{
            tokenId:string,
            errId:number,
            error:string
        })=>void);
        /**
         * 发起请求
         * @param options 请求参数 
         */
        start(options:{
            app:{
                applicationId:string,
                sig:string,
                alg:string,
                timestamp:string,
                userId:string
            },
            request:{},
            audio:{
                audioType:string,
                channel:number,
                sampleBytes:number,
                sampleRate:number
            },
            success:(res:{tokenId:string})=>void;
            fail:(res:{errId:number,error:string})=>void;
            complete?:()=>void;
        });
        /**
         * 发送音频数据
         * @param options 相关参数 
         */
        feed(options:{
            data:ArrayBuffer,
            success:()=>void;
            fail:(res:{errId:number,error:string})=>void;
            complete?:()=>void;
        });
        /**
         * 结束评测
         * @param options 相关参数
         */
        stop(options:{
            timeout?:number,
            success:()=>void;
            fail:(res:{errId:number,error:string})=>void;
            complete?:()=>void;
        });
        /**
         * 重置引擎
         */
        reset();
        /**
         * 获取SDK版本号
         */
        getVersion():string;
    }
    export function createWsEngine(res:{}):WsEngine;

}