document.querySelector('.download-btn').addEventListener('click', () => {
    const element = document.querySelector('main');
    html2pdf()
        .set({
            margin: 0.5,
            filename: 'curriculo-alessandra.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        })
        .from(element)
        .save();
});
