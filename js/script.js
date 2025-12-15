// Simple script for accordion functionality

document.querySelectorAll('.faq-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const icon = button.querySelector('svg');
        
        // Toggle current
        content.classList.toggle('hidden');
        
        // Rotate icon
        if (content.classList.contains('hidden')) {
            icon.style.transform = 'rotate(0deg)';
        } else {
            icon.style.transform = 'rotate(180deg)';
        }
        
        // Optional: Close others
        document.querySelectorAll('.faq-toggle').forEach(otherButton => {
            if (otherButton !== button) {
                const otherContent = otherButton.nextElementSibling;
                const otherIcon = otherButton.querySelector('svg');
                otherContent.classList.add('hidden');
                otherIcon.style.transform = 'rotate(0deg)';
            }
        });
    });
});
