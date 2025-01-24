import read from "./reader.js";
import json from "./parser.js";

export default class GameSavingLoader {


    static load() {

        return (async () => {
            try {
                const data = await read();
                const value = await json(data);
                return value;
            } catch (e) {
                console.log(`error ${e}`)
            }
        })();
    }
}

