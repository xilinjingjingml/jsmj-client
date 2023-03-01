
export namespace Jsons{
    // 判断是否是json
    export function isJSON(str): boolean {
        if (typeof str === 'string') {
            try {
                let obj = JSON.parse(str);
                if (typeof obj == 'object' && obj) {
                    return true;
                } else {
                    return false;
                }
 
            } catch (e) {
                return false;
            }
        }
        return false;
    }


}