"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  inquiryType: z.enum(["general", "quote", "support", "partnership", "product"]),
  message: z.string().min(10, "Please provide some details."),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      inquiryType: "general",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    console.log("Contact Form Submitted:", data);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We will get back to you shortly.",
    });
    form.reset();
  }

  return (
    <div className="container py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Contact Us</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question, need support, or want to discuss a project? We're here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
                 <Card className="max-w-3xl mx-auto">
                    <CardHeader>
                        <CardTitle className="text-2xl font-headline">Send us a Message</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Full Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="John Doe" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email Address</FormLabel>
                                            <FormControl>
                                                <Input type="email" placeholder="you@example.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="inquiryType"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Reason for Inquiry</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a reason" />
                                                </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                  <SelectItem value="general">General Question</SelectItem>
                                                  <SelectItem value="quote">Project Quote</SelectItem>
                                                  <SelectItem value="product">Product Information</SelectItem>
                                                  <SelectItem value="support">Customer Support</SelectItem>
                                                  <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                    />
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Message</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="How can we help you?"
                                                    className="min-h-[120px]"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" size="lg" className="w-full" disabled={form.formState.isSubmitting}>
                                    {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
                                </Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </div>
            <div className="space-y-8">
                 <div>
                    <h2 className="text-2xl font-headline font-bold mb-6">Our Information</h2>
                    <div className="space-y-6">
                        <Card>
                            <CardHeader className="flex flex-row items-center gap-4">
                                <Phone className="h-8 w-8 text-primary"/>
                                <div>
                                    <h3 className="font-semibold">By Phone</h3>
                                    <p className="text-sm text-muted-foreground">Mon-Sat, 7am to 7pm</p>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <a href="tel:+1234567890" className="text-lg hover:text-primary transition-colors">(123) 456-7890</a>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center gap-4">
                                <Mail className="h-8 w-8 text-primary"/>
                                <div>
                                    <h3 className="font-semibold">By Email</h3>
                                     <p className="text-sm text-muted-foreground">We reply within 24 hours</p>
                                </div>
                            </CardHeader>
                             <CardContent>
                                <a href="mailto:sales@weritonenterprises.com" className="text-lg hover:text-primary transition-colors">sales@weritonenterprises.com</a>
                            </CardContent>
                        </Card>
                         <Card>
                            <CardHeader className="flex flex-row items-center gap-4">
                                <MapPin className="h-8 w-8 text-primary"/>
                                <div>
                                    <h3 className="font-semibold">Main Store & Showroom</h3>
                                     <p className="text-sm text-muted-foreground">Visit us in person</p>
                                </div>
                            </CardHeader>
                             <CardContent>
                                <address className="not-italic text-lg">
                                    123 Build Well Rd<br/>
                                    Constructville, ST 12345
                                </address>
                             </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
