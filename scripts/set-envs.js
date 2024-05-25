const { writeFileSync, mkdirSync } = require('fs');

require('dotenv').config();


const targetPath = './src/environments/environment.ts';

const envFileContent = `
export const environment = {
    baseUrl: "${ process.env['BASEURL'] }",
    audiosUrl: "${ process.env['AUDIOSURL']},
};
`;

mkdirSync('./src/environments', { recursive: true });

writeFileSync( targetPath, envFileContent );