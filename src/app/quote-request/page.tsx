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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload } from "lucide-react";

const quoteFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  projectType: z.enum(["residential", "commercial", "industrial", "other"]),
  budget: z.string().optional(),
  projectDetails: z.string().min(20, "Please provide some details about your project."),
});

type QuoteFormValues = z.infer<typeof quoteFormSchema>;

export default function QuoteRequestPage() {
  const { toast } = useToast();
  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      projectType: "residential",
      budget: "",
      projectDetails: "",
    },
  });

  function onSubmit(data: QuoteFormValues) {
    console.log("Quote Request Submitted:", data);
    toast({
      title: "Quote Request Sent!",
      description: "Thank you for your request. A member of our team will get back to you within 24 business hours.",
    });
    form.reset();
  }

  return (
    <div className="container py-12 md:py-16">
        <Card className="max-w-3xl mx-auto shadow-lg">
            <CardHeader className="text-center">
                <CardTitle className="text-3xl md:text-4xl font-headline">Request a Quote</CardTitle>
                <CardDescription className="text-base">
                    Provide us with some details about your project, and we'll get back to you with a tailored quote.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
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
                                name="company"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Company (Optional)</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Doe Construction Inc." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
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
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone Number</FormLabel>
                                        <FormControl>
                                            <Input type="tel" placeholder="(123) 456-7890" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                         <div className="grid md:grid-cols-2 gap-6">
                           <FormField
                              control={form.control}
                              name="projectType"
                              render={({ field }) => (
                                  <FormItem>
                                      <FormLabel>Project Type</FormLabel>
                                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                                          <FormControl>
                                          <SelectTrigger>
                                              <SelectValue placeholder="Select project type" />
                                          </SelectTrigger>
                                          </FormControl>
                                          <SelectContent>
                                            <SelectItem value="residential">Residential</SelectItem>
                                            <SelectItem value="commercial">Commercial</SelectItem>
                                            <SelectItem value="industrial">Industrial</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                          </SelectContent>
                                      </Select>
                                      <FormMessage />
                                  </FormItem>
                              )}
                              />
                            <FormField
                                control={form.control}
                                name="budget"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Budget Range (Optional)</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g., $5,000 - $10,000" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                         <FormField
                            control={form.control}
                            name="projectDetails"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Project Details</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Please describe your project, including scope, timeline, and a list of materials or services needed."
                                            className="min-h-[150px]"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                         <FormItem>
                            <FormLabel>Upload Drawings/Images (Optional)</FormLabel>
                            <FormControl>
                                <Button asChild variant="outline" className="w-full">
                                    <label htmlFor="file-upload" className="cursor-pointer">
                                        <Upload className="mr-2 h-4 w-4" />
                                        Click to upload files
                                        <Input id="file-upload" type="file" className="sr-only" />
                                    </label>
                                </Button>
                            </FormControl>
                            <FormMessage />
                        </FormItem>

                        <Button type="submit" size="lg" className="w-full" disabled={form.formState.isSubmitting}>
                            {form.formState.isSubmitting ? 'Sending Request...' : 'Submit Quote Request'}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    </div>
  );
}
