export function JsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "dispatch.au",
        "image": "https://dispatch.au/icon.svg",
        "url": "https://dispatch.au",
        "telephone": "+61000000000",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Melbourne",
            "addressRegion": "VIC",
            "addressCountry": "AU"
        },
        "priceRange": "$$$",
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "09:00",
            "closes": "17:00"
        },
        "sameAs": [
            "https://www.facebook.com/dispatchau",
            "https://www.instagram.com/dispatchau"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
