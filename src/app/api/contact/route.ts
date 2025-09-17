import { NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/email';

export const runtime = 'nodejs'; // Nodemailer דורש Node, לא Edge

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // ולידציה קצרה
    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 });
    }

    await sendContactEmail({ name, email, message });
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error('Contact API error:', err);
    return NextResponse.json({ ok: false, error: 'Email failed' }, { status: 500 });
  }
}
