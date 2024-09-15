/* 验证参数键名是否合法 */

// 导入依赖
import { ValidateString } from "../validate/ValidateString.js";

/**
 * 验证参数键名是否合法
 * 
 * @function ValidateKey
 * 
 * @param { { warn: boolean } } config 配置对象
 * @param { string } key 需要验证的键名
 * 
 * @return { string } 验证后的键名
 */
export function ValidateKey(config, key) {
    try {
        if (key === "") {
            throw new Error("Key cannot be an empty string.");
        } else return ValidateString(config, key, "key");
    } catch (err) {
        console.error(err);
    }
}