import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageCircle,
  Calendar,
  Navigation,
  Shield,
  Headphones,
  Building2
} from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    appointmentType: "",
    preferredDate: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      appointmentType: "",
      preferredDate: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        { label: "Emergency Line", value: "+91-827-877-1093", highlight: true },
        { label: "Appointments", value: "+91-827-877-1094" },
        { label: "General Inquiries", value: "+91-827-877-1095" }
      ]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        { label: "General Information", value: "findskindoctor@gmail.com" },
        { label: "Appointments", value: "findskindoctor@gmail.com" },
      ]
    },
    {
      icon: MapPin,
      title: "Our Location",
      details: [
        { label: "Main Clinic", value: "123 findskin.doctor Blvd, Suite 100" },
        { label: "City", value: "Medical City, MC 12345" },
        { label: "Parking", value: "Free parking available on-site" }
      ]
    },
    {
      icon: Clock,
      title: "Operating Hours",
      details: [
        { label: "Monday - Friday", value: "24/7 Available", highlight: true },
        { label: "Saturday", value: "24/7 Available", highlight: true },
        { label: "Sunday", value: "24/7 Available", highlight: true },
        { label: "Emergency", value: "24/7 Available", highlight: true }
      ]
    }
  ];

const quickActions = [
  {
    icon: Calendar,
    title: "Schedule Appointment",
    description: "Book your appointment online or call us",
    action: "Book Now",
    variant: "medical" as const,
     link: "tel:+917589951677"
  },
  {
    icon: MessageCircle,
    title: "Live Chat Support",
    description: "Get instant help from our support team",
    action: "Start Chat",
    variant: "medical-outline" as const,
    link: "https://wa.me/917589951677" //
  },
  {
    icon: Navigation,
    title: "Get Directions",
    description: "Find the best route to our tothe clinic",
    action: "Get Directions",
    variant: "wellness-outline" as const,
    link: "https://www.google.com/maps?q=Your+Clinic+Location" // Google Maps location
  }
];


  return (
    <>
      <Helmet>
        <title>Contact findskin.doctor+ | Schedule Appointments & Get Directions</title>
        <meta name="description" content="Contact findskin.doctor+ for appointments, emergencies, or inquiries. Call (555) 123-CARE, visit us at 123 findskin.doctor Blvd, or use our online contact form." />
        <meta name="keywords" content="contact findskin.doctor, medical appointments, emergency contact, clinic location, findskin.doctor phone number" />
        <meta property="og:title" content="Contact findskin.doctor+ | Schedule Appointments & Get Directions" />
        <meta property="og:description" content="Get in touch with findskin.doctor+ for medical appointments, emergency care, or general inquiries. Multiple contact options available." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/contact" />
      </Helmet>

      <main className="pt-20">
        {/* Hero Banner */}
        <section className="relative py-20 bg-gradient-to-br from-primary to-primary-dark overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container mx-auto px-4 lg:px-6 relative">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
                Contact findskin.doctor+
              </h1>
              <p className="text-xl text-white/90 leading-relaxed animate-slide-in">
                We're here to help with your findskin.doctor needs. Reach out for appointments, 
                questions, or emergency care - our dedicated team is ready to assist you.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-16 bg-gradient-to-br from-background to-accent/10">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                How Can We Help You Today?
              </h2>
              <p className="text-lg text-muted-foreground">
                Choose the option that best fits your needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {quickActions.map((action, index) => (
                <Card key={index} className="text-center p-6 border-0 shadow-soft hover:shadow-large transition-all duration-300 bg-card group hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <action.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {action.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {action.description}
                  </p>
                 <a
  href={action.link}
  target={action.link.startsWith("http") ? "_blank" : "_self"}
  rel="noopener noreferrer"
  className="w-full block"
>
  <Button variant={action.variant} className="w-full">
    {action.action}
  </Button>
</a>

                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card className="border-0 shadow-large bg-card">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                      <Send className="w-6 h-6 text-primary" />
                      Send Us a Message
                    </CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            type="text"
                            required
                            value={formData.firstName}
                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                            placeholder="Enter your first name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            type="text"
                            required
                            value={formData.lastName}
                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                            placeholder="Enter your last name"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            placeholder="your.email@example.com"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            placeholder="(555) 123-4567"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={(e) => handleInputChange("subject", e.target.value)}
                          placeholder="What is this regarding?"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="appointmentType">Appointment Type</Label>
                          <Select onValueChange={(value) => handleInputChange("appointmentType", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select appointment type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">General Consultation</SelectItem>
                              <SelectItem value="dental">Dental Care</SelectItem>
                              <SelectItem value="cardiology">Cardiology</SelectItem>
                              <SelectItem value="physical-therapy">Physical Therapy</SelectItem>
                              <SelectItem value="pediatrics">Pediatrics</SelectItem>
                              <SelectItem value="emergency">Emergency</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="preferredDate">Preferred Date</Label>
                          <Input
                            id="preferredDate"
                            type="date"
                            value={formData.preferredDate}
                            onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          required
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          placeholder="Please describe how we can help you..."
                          rows={5}
                        />
                      </div>

                      <Button type="submit" variant="medical" size="lg" className="w-full">
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>

                      <p className="text-sm text-muted-foreground text-center">
                        <Shield className="w-4 h-4 inline mr-1" />
                        Your information is secure and protected by HIPAA compliance.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Whether you need to schedule an appointment, have a medical question, 
                    or require emergency care, we're here to help 24/7.
                  </p>
                </div>

                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-soft bg-card hover:shadow-medium transition-shadow duration-300">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg font-bold text-foreground flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                          <info.icon className="w-5 h-5 text-white" />
                        </div>
                        {info.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-3">
                        {info.details.map((detail, idx) => (
                          <div key={idx} className="flex justify-between items-center">
                            <span className="text-muted-foreground font-medium">
                              {detail.label}:
                            </span>
                            <span className={`font-semibold ${
                              detail.highlight ? "text-primary" : "text-foreground"
                            }`}>
                              {detail.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Emergency Notice */}
                <Card className="border-2 border-destructive/20 bg-destructive/5">
                  <CardContent className="p-6 text-center">
                    <Shield className="w-12 h-12 text-destructive mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Medical Emergency?
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      For life-threatening emergencies, call 911 immediately. 
                      For urgent but non-life-threatening conditions, call our emergency line.
                    </p>
                    <a href="tel:+918278771093" className="block">
                      <Button variant="destructive" size="lg">
                        <Phone className="w-5 h-5 mr-2" />
                        Emergency: +91-827-877-1093
                      </Button>
                    </a>
                  </CardContent>
                </Card>

                {/* Support Hours */}
                <Card className="border-0 shadow-soft bg-gradient-secondary/5">
                  <CardContent className="p-6 text-center">
                    <Headphones className="w-12 h-12 text-secondary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      24/7 Support Available
                    </h3>
                    <p className="text-muted-foreground">
                      Our customer support team is available around the clock 
                      to assist with non-emergency questions and appointment scheduling.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-gradient-to-br from-accent/10 to-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                <Building2 className="inline-block w-8 h-8 mr-3 text-primary" />
                Visit Our Clinic
              </h2>
              <p className="text-lg text-muted-foreground">
                Conveniently located in the heart of Medical City with ample parking
              </p>
            </div>

            <Card className="border-0 shadow-large overflow-hidden">
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Interactive Map
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    123 findskin.doctor Blvd, Suite 100<br />
                    Medical City, MC 12345
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="medical">
                      <Navigation className="w-5 h-5 mr-2" />
                      Get Directions
                    </Button>
                    <a href="tel:+917589951677" className="block">
                      <Button variant="medical-outline">
                        <Phone className="w-5 h-5 mr-2" />
                        Call for Directions
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
      
      <WhatsAppButton />
    </>
  );
};

export default Contact;