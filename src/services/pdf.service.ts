import { PDFDocument, StandardFonts } from 'pdf-lib';
import { PaymentData } from '../types/receipt';
import { generateQR } from '../utils/qr';

export async function generateReceiptPDF(data: PaymentData): Promise<Buffer> {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([500, 400]);

  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const qrImage = await generateQR(`${data.receiptId}_${new Date().toISOString()}`);
  const qrImageEmbed = await pdfDoc.embedPng(qrImage);
  const qrDims = qrImageEmbed.scale(1);

  page.drawText(`Receipt ID: ${data.receiptId}`, { x: 50, y: 350, size: 14, font });
  page.drawText(`Name: ${data.name}`, { x: 50, y: 330, size: 14, font });
  page.drawText(`Amount: $${data.amount.toFixed(2)}`, { x: 50, y: 310, size: 14, font });
  page.drawText(`Date: ${data.date}`, { x: 50, y: 290, size: 14, font });
  page.drawImage(qrImageEmbed, { x: 50, y: 150, width: qrDims.width, height: qrDims.height });

  const pdfBytes = await pdfDoc.save();
  return Buffer.from(pdfBytes);
}
