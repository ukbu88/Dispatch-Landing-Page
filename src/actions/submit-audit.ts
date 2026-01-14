'use server';

export async function submitAudit(prevState: any, formData: FormData) {
    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log('Form Data Received:', Object.fromEntries(formData));

    // In a real app, you would send email here via Resend/SendGrid
    // e.g. await sendEmail({ to: 'hello@dispatch.au', ... })

    return {
        success: true,
        message: 'Thanks! We have received your request and will follow up within 24 hours.',
    };
}
