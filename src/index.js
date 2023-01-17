export default {
	async fetch(request, env) {
	  const url = new URL(request.url)
	  if (url.pathname === '/original-image') {
		const image = await fetch(
		  `https://imagedelivery.net/g5WydJ00kvUUbRJ_xKJn4A/f60f759b-b4d4-48b9-8c80-332614880c00/public`
		);
		return image;
	  }

	  if (url.pathname === '/thumbnail') {
		const imageURL = "https://github.com/ricknmartin/thumbnail-image/blob/main/assets/background-image.jpeg?raw=true"
		
		fetch(imageURL, {
			cf: {
			  image: {
				width: 1280,
				height: 720,
				draw: [
				  {
					url: 'https://wrangler-to-text.ricardo-martins.workers.dev',
					left: 40,
				  },
				],
			  },
			},
		   });

	  return new Response('Image Resizing with a Worker')
	}
   }
}
