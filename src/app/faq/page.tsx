import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "What types of clients do you serve?",
        answer: "We serve a wide range of clients including individual homeowners, DIY enthusiasts, professional contractors, developers, interior designers, and corporate clients."
    },
    {
        question: "What are your quality standards for products?",
        answer: "We source our products from reputable manufacturers who meet stringent quality and safety standards. All our materials are commercial-grade and built to last."
    },
    {
        question: "Do you offer delivery services?",
        answer: "Yes, we offer reliable delivery services for all our products. We have a fleet of trucks to handle orders of any size, from a few items to a full construction site delivery."
    },
    {
        question: "Can you help with custom design services?",
        answer: "Absolutely. Our in-house design team can assist with everything from space planning and 3D visualization to material selection for both residential and commercial projects. Contact us to schedule a consultation."
    },
    {
        question: "How do I get a quote for a large project or renovation?",
        answer: "You can use the 'Request a Quote' form on our website to provide details about your project. For large-scale projects, we recommend contacting our sales team directly to discuss your specific needs."
    },
    {
        question: "Do you offer installation services for the products you sell?",
        answer: "Yes, we have a team of skilled professionals who can provide installation for many of the products we sell, including electrical, plumbing, flooring, and security systems. This is part of our end-to-end service offering."
    }
]

export default function FaqPage() {
    return (
        <div className="container py-12 md:py-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-headline font-bold">Frequently Asked Questions</h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Find answers to common questions about our products, services, and processes.
                </p>
            </div>
            <div className="max-w-3xl mx-auto">
                 <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}
