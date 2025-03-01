document.addEventListener("DOMContentLoaded", function() {
    const complaints = [
        { title: "HYDRAA clears blocked roads and secures govt. land", link: "complaint1.html" },
        { title: "Traffic Mitra receives 200+ complaints within 24 Hours, 76% resolved", link: "complaint2.html" },
        { title: "Woman accuses in-laws of dowry harassment", link: "complaint3.html" }
    ];

    const complaintList = document.getElementById("complaint-list");

    complaints.forEach(complaint => {
        const listItem = document.createElement("li");
        
        const link = document.createElement("a");
        link.href = complaint.link;
        link.textContent = complaint.title;
        
        const shareButton = document.createElement("button");
        shareButton.textContent = "Share";
        shareButton.className = "share-button";
        shareButton.onclick = () => {
            const shareLink = `${window.location.origin}/${complaint.link}`;
            navigator.clipboard.writeText(shareLink).then(() => {
                alert("Link copied to clipboard!");
            });
        };

        listItem.appendChild(link);
        listItem.appendChild(shareButton);
        complaintList.appendChild(listItem);
    });
});
