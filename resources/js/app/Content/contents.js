/**
 * import all files from EN folder (english)
 */
import { mainContent } from "./en/mainContent";

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
            ...mainContent(),
        },
        cs: {
            ...hlavniObsah(),
        },
    };
}