import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import Save from './save';
import './style.scss';

registerBlockType( 'tst/myblock', {
	edit: Edit,
	save: Save,
} );
