// Logic to Upload Files

let uploadedImages = [];
let uploadedDocs = [];

window.openUploadFile = function() {
	const listing = document.getElementById('listingUpload');
	if (listing.style.display == 'flex') {
		listing.style.display = 'none';
	} else {
		listing.style.display = 'flex';
	}
};

// Convert Drag & Drop

const writeField = document.querySelector('.writeField');
if (writeField) {
	writeField.addEventListener('dragover', (e) => {
		e.preventDefault();
		writeField.style.border = '2px dashed #4caf50';
	});
	
	writeField.addEventListener('dragleave', () => {
		writeField.style.border = 'none';
	})
	
	writeField.addEventListener('drop', (e) => {
		e.preventDefault();
		writeField.style.border = 'none';
		const files = Array.from(e.dataTransfer.files);
		files.forEach(file => handleDroppedFile(file));
	});
}

function handleDroppedFile(file) {
	if (file.type.startsWith('image/')) {
		if (uploadedImages.length < 5) {
			uploadedImages.push(file);
			showFilePreview(file);
		}
	} else if (file.type == 'application/pdf' || file.name.endsWith('.txt')) {
		if (uploadedDocs.length < 5) {
			uploadedDocs.push(file);
			showFilePreview(file);
		}
	} else {
		showWarning('Поддерживаются только изображения, PDF и TXT-файлы.');
	}
}
