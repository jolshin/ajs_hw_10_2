import GameSavingLoader from "./gamesaving.js";

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    return saving;
  } catch (e) {
    console.log(`error ${e}`);
}
})();