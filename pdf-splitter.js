const { PDFDocument } = require('pdf-lib');
const fs = require('fs');

splitPdf = async () => {
    //put in the url of the pdf file
    const url = ''

    // put in an array of pages
    const pages = [];

    fs.readFile(url,async (err,data) => {
    //load pdf
    const pdf = await PDFDocument.load(data);
  
    //create a new pdf doc
    const pdfDoc = await PDFDocument.create();

    // copy pages from the original document
    const donorPages = await pdfDoc.copyPages(pdf, pages.map(page => page-1));

    //add each page into the new document
    donorPages.forEach(page => {
        pdfDoc.addPage(page);
    });

    //save new pdf
    const pdfBytes = await pdfDoc.save();
    
    // url where you want to put the new pdf
    const newUrl = 'example.pdf'
    fs.writeFileSync(newUrl, pdfBytes);
    });

}

splitPdf();