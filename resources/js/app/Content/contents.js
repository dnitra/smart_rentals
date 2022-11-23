/**
 * import all files from EN folder (english)
 */
import { mainContent } from "./en/mainContent";
import { login } from "./en/login";
import { register } from "./en/register";
import { properties } from "./en/properties";
import { tenantPortal } from "./en/tenantPortal";
import { listings } from "./en/listings";
/**
 * import all files from CS folder (czech)
 */

import { hlavniObsah } from "./cs/hlavniObsah";

export function contents() {
    /**
     *  create object which contains different language files
     * use the imported files and spread the content inside the different languages
     */

    return {
        en: {
            ...listings(),
            ...mainContent(),
            ...login(),
            ...register(),
            ...properties(),
            ...tenantPortal(),
        },
        cs: {
            ...hlavniObsah(),
        },
    };
}
