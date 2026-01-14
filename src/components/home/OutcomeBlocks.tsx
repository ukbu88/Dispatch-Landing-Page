import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { StaggerContainer, StaggerItem, fadeInVariants } from '@/components/ui/Stagger';
import { Phone, FileText, CalendarCheck } from 'lucide-react';

const outcomes = [
    {
        title: 'More calls',
        description: 'Optimized for mobile click-to-call, getting your phone ringing with qualified leads.',
        icon: Phone,
    },
    {
        title: 'More quote requests',
        description: 'Clear, high-converting forms that capture the details you need to price jobs.',
        icon: FileText,
    },
    {
        title: 'More booked jobs',
        description: 'Professional design builds trust instantly, turning visitors into paying customers.',
        icon: CalendarCheck,
    },
];

export function OutcomeBlocks() {
    return (
        <Section className="bg-muted/30">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {outcomes.map((item) => (
                    <StaggerItem
                        key={item.title}
                        variants={fadeInVariants}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                        <Card className="bg-background border-none shadow-sm hover:shadow-lg transition-all h-full">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <CardTitle>{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{item.description}</p>
                            </CardContent>
                        </Card>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </Section>
    );
}
