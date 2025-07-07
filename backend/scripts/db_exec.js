const dotenv = require('dotenv');
const { execSync } = require('child_process');

dotenv.config();

const arg = process.argv[2];
const commands = ['init', 'seed', 'backup', 'restore'];

const user = process.env.DB_USER;
const name = process.env.DB_NAME;

switch (arg) {
	case 'init':
		execSync(`mysql -u ${user} -p < db/init.sql`, { stdio: 'inherit' });
		break;
	case 'seed':
		execSync(`mysql -u ${user} -p < db/seed.sql`, { stdio: 'inherit' });
		break;
	case 'backup':
		execSync(`mysqldump -u ${user} -p ${name} > db/backup.sql`, { stdio: 'inherit' });
		break;
	case 'restore':
		execSync(`mysql -u ${user} -p ${name} < db/backup.sql`, { stdio: 'inherit' });
		break;
	default:
		console.log('Usage: node db.js <init|seed|backup|restore>');
		process.exit(1);
}
