function openWindowSettings() {
	document.getElementById("windowSettings").style.display = "flex";
}

function closeWindowSettings() {
	document.getElementById("windowSettings").style.display = "none";
}

function openWindowSources() {
	document.getElementById("windowSources").style.display = "flex";
}

function closeWindowSources() {
	document.getElementById("windowSources").style.display = "none";
}

function copyableMessage() {
	document.getElementById("messageCopyable").style.display = "flex";
}

function openUploadListing() {
	document.getElementById("uploadButton").style.display = "none";
	document.getElementById("listingUpload").style.display = "grid";
	document.getElementById("closeUpload").style.display = "inline";
}

function closeUploadListing() {
	document.getElementById("uploadButton").style.display = "inline";
	document.getElementById("listingUpload").style.display = "none";
	document.getElementById("closeUpload").style.display = "none";
}

function openHistoryChats() {
	document.getElementById("windowHistory").style.display = "flex";
}

function closeHistoryChats() {
	document.getElementById("windowHistory").style.display = "none";
}

function openWindowAccount() {
	document.getElementById("windowAccount").style.display = "flex";
}

function closeWindowAccount() {
	document.getElementById("windowAccount").style.display = "none";
}

function openWindowClear() {
	document.getElementById("windowClear").style.display = "flex";
}

function closeWindowClear() {
	document.getElementById("windowClear").style.display = "none";
}

function openWindowLogout() {
	document.getElementById("windowLogout").style.display = "flex";
}

function closeWindowLogout() {
	document.getElementById("windowLogout").style.display = "none";
}