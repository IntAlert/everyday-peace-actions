




module.exports = function(botly){
	var tasks = {}

	tasks.cake = {

		challenge: {
			title: 'Bake a cake for a neighbour',
		    // item_url: 'https://upload.wikimedia.org/wikipedia/en/9/93/Tanooki_Mario.jpg',
		    image_url: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/user-collections/my-colelction-image/2015/12/recipe-image-legacy-id--364184_10.jpg?itok=eWj2NFNK',
		    subtitle: 'Have you ever spoken to your neighbour? Why not make them a cake.',
		    buttons: [
		    	botly.createPostbackButton('Skip', 'skip'),
		    	botly.createPostbackButton('Tell me more', 'more'),
		    	botly.createPostbackButton('Accept', 'accept')
		    ]
		},
		more: {
			text: "Everyone loves cake. Especially from strangers. They totes won't think it's weird."
		},
		accept: {
			title: 'Bake a cake for a neighbour',
		    // item_url: 'https://upload.wikimedia.org/wikipedia/en/9/93/Tanooki_Mario.jpg',
		    image_url: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/user-collections/my-colelction-image/2015/12/recipe-image-legacy-id--364184_10.jpg?itok=eWj2NFNK',
		    subtitle: 'Have you ever spoken to your neighbour? Why not make them a cake.',
		    buttons: [
		    	botly.createWebURLButton('Find out more', 'http://international-alert.org'),
		    ]
		},
		skip: {
			text: "Lame. It's people like you that cause war."
		},
		share: {
			title: 'I baked a cake!',
		    item_url: 'http://international-alert.org',
		    image_url: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/user-collections/my-colelction-image/2015/12/recipe-image-legacy-id--364184_10.jpg?itok=eWj2NFNK',
		    subtitle: 'Whoop I did it!',
		    buttons: [
		    	botly.createShareButton(),
		    ]
		}

	}

	return tasks;
}