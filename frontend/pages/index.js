import React, { useState } from 'react';

export default function Home() {
	const [picture, setPicture] = useState({});

	const uploadPicture = (e) => {
		setPicture({
			picturePreview: URL.createObjectURL(e.target.files[0]),
			pictureAsFile: e.target.files[0],
		});
	};

	const setImageAction = async (event) => {
		event.preventDefault();

		const formData = new FormData();
		formData.append('file', picture.pictureAsFile);

		console.log(picture.pictureAsFile);

		for (var key of formData.entries()) {
			console.log(key[0] + ', ' + key[1]);
		}

		const data = await fetch('http://localhost:5000/upload/post', {
			method: 'post',
			headers: { 'Content-Type': 'multipart/form-data' },
			body: formData,
		});
		const uploadedImage = await data.json();
		if (uploadedImage) {
			console.log('Successfully uploaded image');
		} else {
			console.log('Error Found');
		}
	};

	return (
		<div>
			<form onSubmit={setImageAction}>
				<input type='file' name='image' onChange={uploadPicture} />
				<button type='submit' name='upload'>
					Upload
				</button>
			</form>
		</div>
	);
}
