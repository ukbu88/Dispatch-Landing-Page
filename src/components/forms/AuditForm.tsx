"use client";

import { useActionState } from 'react';
import { submitAudit } from '@/actions/submit-audit';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Section } from '@/components/ui/Section';

const initialState = {
    success: false,
    message: '',
};

export function AuditForm() {
    const [state, formAction, isPending] = useActionState(submitAudit, initialState);

    if (state.success) {
        return (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-green-800 mb-2">Request Received</h3>
                <p className="text-green-700">{state.message}</p>
                <Button href="/" variant="outline" className="mt-6 bg-white">Back to Home</Button>
            </div>
        );
    }

    return (
        <Section className="max-w-2xl mx-auto pt-0">
            <div className="mb-8">
                <h2 className="text-2xl font-bold">Get a free site audit</h2>
                <p className="text-muted-foreground">Tell us about your business and we'll take a look.</p>
            </div>

            <form action={formAction} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Name
                        </label>
                        <Input id="name" name="name" placeholder="John Smith" required />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="business" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Business Name
                        </label>
                        <Input id="business" name="business" placeholder="Smith Plumbing" required />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="industry" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Industry
                        </label>
                        <select
                            id="industry"
                            name="industry"
                            className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            defaultValue=""
                            required
                        >
                            <option value="" disabled>Select an industry...</option>
                            <option value="trade">Trade (Plumbing, Electrical, etc)</option>
                            <option value="service">Local Service (Cleaning, etc)</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="location" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Location
                        </label>
                        <Input id="location" name="location" placeholder="e.g. Melbourne, VIC" required />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="contact" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Best Contact (Email or Phone)
                    </label>
                    <Input id="contact" name="contact" placeholder="john@example.com or 0400..." required />
                </div>

                <div className="space-y-2">
                    <label htmlFor="website" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Current Website (Optional)
                    </label>
                    <Input id="website" name="website" placeholder="https://" />
                </div>

                <div className="space-y-2">
                    <label htmlFor="needs" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        What do you need?
                    </label>
                    <Textarea
                        id="needs"
                        name="needs"
                        placeholder="I need more leads, or my current site is broken..."
                        className="h-32"
                    />
                </div>

                <Button type="submit" size="lg" className="w-full text-lg" disabled={isPending}>
                    {isPending ? 'Sending...' : 'Request Audit'}
                </Button>
            </form>
        </Section>
    );
}
