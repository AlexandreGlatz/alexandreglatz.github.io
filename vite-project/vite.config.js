import { defineConfig } from 'vite';
import usePHP from 'vite-plugin-php';

export default defineConfig({
  plugins: [usePHP()],
});

usePHP({
	binary: 'C:\\PHP\\php.exe',
	entry: [
		'contact.php'
	],
  });