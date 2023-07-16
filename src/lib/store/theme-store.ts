import { persistentWritable } from './persistent-store';
import { StoreKey } from './store-keys';

const createThemeStore = () => {
	const initial = 'crimson dark';
	const { subscribe, set } = persistentWritable(
		StoreKey.Theme,
		initial,
		(x) => x,
		(x) => x
	);
	return { subscribe, set, reset: () => set(initial) };
};

export default createThemeStore();