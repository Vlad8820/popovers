document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('popover-btn');
    const popover = document.getElementById('popover');

    button.addEventListener('click', () => {
        const isVisible = popover.style.display === 'block';
        popover.style.display = isVisible ? 'none' : 'block';
        if (!isVisible) {
            const { left, top, width, height } = button.getBoundingClientRect();
            const popoverWidth = popover.offsetWidth;
            const popoverHeight = popover.offsetHeight;

            // Центрируем поповер по горизонтали и размещаем его сверху
            const popoverLeft = left + width / 2 - popoverWidth / 2;
            const popoverTop = top - popoverHeight - 10; // 10px отступ сверху

            popover.style.left = `${popoverLeft}px`;
            popover.style.top = `${popoverTop}px`;
        }
    });
});
