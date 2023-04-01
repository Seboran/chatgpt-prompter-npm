import convertFileToJson from "./convertFileToJson";
import createPromptFromJson from "./createPromptFromJson";

const filePath = './package.json';

// lire le contenu du fichier
(async () => console.log(createPromptFromJson(await convertFileToJson(filePath, 'utf8'), 'fr')))
()
