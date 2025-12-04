import { useState } from "react";
import Button from "../ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/Card";
import { Input } from "../ui/input";
import { TextArea } from "../ui/TextArea";
import { Label } from "../ui/Label";
import { Calendar, Clock, Mail, User } from "lucide-react";

export const AppointmentsSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // No toast → Just reset form
    setFormData({ name: "", email: "", date: "", time: "", message: "" });
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Schedule an Appointment
            </h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss your project or collaboration opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>
                  Available for consultations, collaborations, and speaking engagements
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">contact@johndoe.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Availability</p>
                    <p className="text-sm text-muted-foreground">Monday - Friday, 9AM - 5PM EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Response Time</p>
                    <p className="text-sm text-muted-foreground">Usually within 24 hours</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    Or connect with me on social media:
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">LinkedIn</Button>
                    <Button variant="outline" size="sm">Twitter</Button>
                    <Button variant="outline" size="sm">GitHub</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Appointment Form */}
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle>Book a Meeting</CardTitle>
                <CardDescription>
                  Fill out the form and I'll reach out to confirm
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">

                  <div className="space-y-2">
                    <Label htmlFor="name">
                      <User className="h-4 w-4 inline mr-2" />
                      Name
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">
                      <Mail className="h-4 w-4 inline mr-2" />
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">
                        <Calendar className="h-4 w-4 inline mr-2" />
                        Preferred Date
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleChange("date", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="time">
                        <Clock className="h-4 w-4 inline mr-2" />
                        Preferred Time
                      </Label>
                      <Input
                        id="time"
                        type="time"
                        value={formData.time}
                        onChange={(e) => handleChange("time", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <TextArea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Tell me about your project or what you'd like to discuss..."
                      rows={4}
                      required
                      
                    />
                  </div>

                  <Button type="submit" className="w-full hover-lift">
                    Request Appointment
                  </Button>
                </form>
              </CardContent>

            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
