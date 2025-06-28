import { Request, Response } from 'express';
import { generateReceiptPDF } from '../services/pdf.service';
import { PaymentData } from '../types/receipt';

export const generateReceipt = async (req: Request, res: Response) => {
  const { receiptId, name, amount } = req.body;

  if (!receiptId || !name || !amount) {
    res.status(400).json({ error: 'Missing required fields' });
    return;
  }

  const generationDate = new Date();
  const formattedDate = generationDate.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  const data: PaymentData = {
    receiptId,
    name,
    amount,
    date: formattedDate,
  };

  const start = Date.now();
  const pdfBuffer = await generateReceiptPDF(data);
  const duration = Date.now() - start;
  console.log(`PDF generated in ${duration}ms`);

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename=receipt-${receiptId}.pdf`);
  res.send(pdfBuffer);
};
