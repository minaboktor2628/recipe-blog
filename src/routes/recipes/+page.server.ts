import FusionCollection from 'fusionable/FusionCollection';

export function load() {
	const collection = new FusionCollection().loadFromDir('src/posts').orderBy('date', 'desc');
	const recipes = collection.getItemsArray();
	return { recipes };
}
