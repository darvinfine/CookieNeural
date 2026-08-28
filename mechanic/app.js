// Disconnected/Connecting to Internet Message

document.addEventListener('DOMContentLoaded', function() {
	const statusElement = document.getElementById('connectingMessage');
	
	// Function to Update Status Connecting
	function updateConnectionStatus() {
		if (navigator.onLine) {
			statusElement.classList.remove('offline');
			statusElement.classList.add('online');
		} else {
			statusElement.classList.add('offline');
			statusElement.classList.remove('online');
		}
	}
	
	// Verifying Status to Refresh App
	updateConnectionStatus();
	
	// Checking Edit to Status Connecting
	window.addEventListener('online', updateConnectionStatus);
	window.addEventListener('offline', updateConnectionStatus);
});

// Create New Chat 

function openNewChat() {
	document.getElementById("chatBanner").style.display = "flex";
	document.getElementById("chatContainer").style.display = "none";
	document.querySelector("downField").style.display = "none";
	document.getElementById("loadingChat").style.display = "none";
	document.getElementById("uploadMessage").style.display = "none";
}

// Open Reval Chat

function openRevalChat() {
	document.getElementById("chatBanner").style.display = "none";
	document.getElementById("chatContainer").style.display = "none";
	document.getElementById("loadingChat").style.display = "grid";
	document.getElementById("windowHistory").style.display = "none";
	document.getElementById('importedFiles').style.display = "none";
	document.getElementById("uploadMessage").style.display = "none";
	document.querySelector("downField").style.display = "none";
}

// Copyable Code

function copyableCode() {
	document.getElementById("copyButton").style.display = "none";
	document.getElementById("sucessCopy").style.display = "inline";
	setTime = "5000";
}

// Send Button Hide/Seek Mechanic

const input = document.getElementById('writeMessageField');
const btn = document.getElementById('buttonSend');
const empty = document.getElementById('emptyButtonSend');

input.addEventListener('input', () => {
	if (input.value.trim().length > 0) {
		btn.classList.add('visible');
		empty.style.display = "none";
	} else {
		btn.classList.remove('visible');
		empty.style.display = "inline";
	}
});

// Photo/File Mechanic Buttons 

const photoImport = document.getElementById('buttonUploadPhoto');
const fileImport = document.getElementById('buttonUploadDocument');

const photoInput = document.getElementById('imageImport');
const fileInput = document.getElementById('fileImport');

photoImport.addEventListener('click', () => {
	photoInput.click();
	document.getElementById('listingUpload').style.display = "none";
	document.getElementById('closeUpload').style.display = "none";
	document.getElementById('uploadButton').style.display = "inline";
})

fileImport.addEventListener('click', () => {
	fileInput.click();
	document.getElementById('listingUpload').style.display = "none";
	document.getElementById('closeUpload').style.display = "none";
	document.getElementById('uploadButton').style.display = "inline";
})