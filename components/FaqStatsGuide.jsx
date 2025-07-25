import React from 'react'
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";
import { features } from "@/data/features";
import { howItWorks } from "@/data/howItWorks";
import { ChevronDown } from "lucide-react";


const FaqStatsGuide = () => {
    return (
        <div>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
                        Powerful Features for Your Career Growth
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {features.map((feature, index) => (
                            <Card
                                key={index}
                                className="border-2 hover:border-primary transition-colors duration-300"
                            >
                                <CardContent className="pt-6 text-center flex flex-col items-center">
                                    <div className="flex flex-col items-center justify-center">
                                        {feature.icon}
                                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                        <p className="text-muted-foreground">
                                            {feature.description}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="w-full py-12 md:py-24 bg-muted/50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">

                        <div className="flex flex-col items-center justify-center space-y-2 group transition-transform hover:scale-105 hover:shadow-2xl hover:shadow-white/10 rounded-lg p-4">
                            <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-300 via-white to-gray-400 bg-clip-text text-transparent">50+</h3>
                            <p className="text-muted-foreground group-hover:text-foreground transition-colors">Industries Covered</p>
                        </div>

                        <div className="flex flex-col items-center justify-center space-y-2 group transition-transform hover:scale-105 hover:shadow-2xl hover:shadow-white/10 rounded-lg p-4">
                            <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-300 via-white to-gray-400 bg-clip-text text-transparent">1000+</h3>
                            <p className="text-muted-foreground group-hover:text-foreground transition-colors">Interview Questions</p>
                        </div>

                        <div className="flex flex-col items-center justify-center space-y-2 group transition-transform hover:scale-105 hover:shadow-2xl hover:shadow-white/10 rounded-lg p-4">
                            <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-300 via-white to-gray-400 bg-clip-text text-transparent">95%</h3>
                            <p className="text-muted-foreground group-hover:text-foreground transition-colors">Success Rate</p>
                        </div>

                        <div className="flex flex-col items-center justify-center space-y-2 group transition-transform hover:scale-105 hover:shadow-2xl hover:shadow-white/10 rounded-lg p-4">
                            <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-300 via-white to-gray-400 bg-clip-text text-transparent">24/7</h3>
                            <p className="text-muted-foreground group-hover:text-foreground transition-colors">AI Support</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="w-full py-12 md:py-24 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
                        <p className="text-muted-foreground">
                            Four simple steps to accelerate your career growth
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {howItWorks.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center space-y-4"
                            >
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center hover:scale-125">
                                    {item.icon}
                                </div>
                                <h3 className="font-semibold text-xl">{item.title}</h3>
                                <p className="text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="w-full py-12 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-muted-foreground">
                            Find answers to common questions about our platform.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="border-b py-4"
                                >
                                    <AccordionTrigger className="flex items-center justify-between w-full text-left hover:underline hover:scale-110">
                                        <span className="font-medium text-lg">{faq.question}</span>
                                    </AccordionTrigger>

                                    <AccordionContent className=" mt-2 pt-4 border-t transition-all duration-300">
                                        <p className=' bg-muted rounded-2xl p-6'>{faq.answer}</p>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FaqStatsGuide
