import QRCode from 'qrcode';

export async function generateQR(data: string): Promise<Buffer> {
  return QRCode.toBuffer(data);
}
