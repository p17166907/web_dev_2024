// Event listener for when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Selecting the container that holds the FAQ content
    const faqContainer = document.querySelector('.faq-content');

    // Adding a click event listener to the FAQ container
    faqContainer.addEventListener('click', (e) => {
        // Using event delegation to find the closest FAQ group header to the click event
        const groupHeader = e.target.closest('.faq-group-header');
        // Logging the group header for debugging
        console.log('groupHeader', groupHeader);

        // If the clicked element is not inside a FAQ group header, exit the function
        if (!groupHeader) return;

        // Getting the parent element of the group header, which is the FAQ group
        const group = groupHeader.parentElement;
        // Logging the group for debugging
        console.log('group', group);

        // Finding the FAQ group body within the FAQ group
        const groupBody = group.querySelector('.faq-group-body');

        // Selecting the icon element within the group header
        const icon = groupHeader.querySelector('i');

        // Toggling the classes on the icon - if it's a plus, change to minus and vice versa
        if (icon) {
            icon.classList.toggle('fa-plus');
            icon.classList.toggle('fa-minus');
        }

        // Toggle visibility of the FAQ group body
        groupBody.classList.toggle('open');

        // Getting all other FAQ groups
        const otherGroups = faqContainer.querySelectorAll('.faq-group');

        // Looping through each FAQ group
        otherGroups.forEach((otherGroupEl) => {
            // Check if the group is not the one that was clicked
            if (otherGroupEl !== group) {
                // Find the group body and icon in other groups
                const otherGroupBody = otherGroupEl.querySelector('.faq-group-body');
                const otherIcon = otherGroupEl.querySelector('.faq-group-header i');

                // Hide the group body and reset the icon to 'plus' in other groups
                otherGroupBody.classList.remove('open');
                otherIcon.classList.remove('fa-minus');
                otherIcon.classList.add('fa-plus');
            }
        });
    });
});
