import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
	.prompt([
		{
			message: "Type your URL: ",
			name: "URL",
		},
	])
	.then((answers) => {
		var qr_svg = qr.image(answers.URL, { type: 'png' });
		qr_svg.pipe(fs.createWriteStream('created_qr.png'));
	});
