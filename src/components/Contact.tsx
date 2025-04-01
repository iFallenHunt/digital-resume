import React, { useState } from "react";
import AnimatedText from "./AnimatedText";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Globe, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/utils/translations";
import emailjs from '@emailjs/browser';

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  content: string | React.ReactNode;
  delay?: number;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({
  icon,
  title,
  content,
  delay = 0,
}) => (
  <div className="flex items-start mb-6 animate-fade-in" style={{ animationDelay: `${delay}ms` }}>
    <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
      {icon}
    </div>
    <div>
      <h3 className="text-base font-medium">{title}</h3>
      <div className="text-foreground/70 mt-1">{content}</div>
    </div>
  </div>
);

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'service_j2nspje', // Substitua pelo seu Service ID do EmailJS
        'template_p3rljko', // Substitua pelo seu Template ID do EmailJS
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'ZLwHlexl7HjgVtVod' // Substitua pela sua Public Key do EmailJS
      );

      toast.success(getTranslation("messageSent", language));
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      toast.error(language === "pt-BR" ? "Erro ao enviar mensagem. Tente novamente." : "Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-cta-pattern">
      <div className="container mx-auto px-4">
        <AnimatedText text={getTranslation("contactIntro", language)} className="section-heading" />

        <div className="max-w-3xl mx-auto mt-8 mb-16">
          <AnimatedText
            text={getTranslation("contactDescription", language)}
            className="text-center text-lg text-foreground/80"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="glass-card p-8">
            <AnimatedText
              text={getTranslation("personalInfo", language)}
              className="text-2xl font-display font-semibold mb-6"
              delay={100}
            />

            <ContactInfoItem
              icon={<Mail size={24} />}
              title={getTranslation("email", language)}
              content={
                <a
                  href="mailto:lukas_santos.silva@hotmail.com"
                  className="hover:text-primary transition-colors"
                >
                  lukas_santos.silva@hotmail.com
                </a>
              }
              delay={200}
            />

            <ContactInfoItem
              icon={<Phone size={24} />}
              title={getTranslation("phone", language)}
              content={
                <div className="flex items-center gap-2">
                  <span>+55 (16) 9 8108-0083</span>
                  <a
                    href="https://wa.me/+5516981080083"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2 py-1 text-sm bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
                  >
                    <MessageCircle size={14} />
                    WhatsApp
                  </a>
                </div>
              }
              delay={300}
            />

            <ContactInfoItem
              icon={<MapPin size={24} />}
              title={getTranslation("location", language)}
              content="Hortôlandia, SP, Brasil"
              delay={400}
            />

            <div className="mt-10 animate-fade-in" style={{ animationDelay: '500ms' }}>
              <h3 className="text-base font-medium mb-4">{getTranslation("followMe", language)}</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/iFallenHunt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-foreground text-background hover:bg-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/santos-lucas96dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-foreground text-background hover:bg-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="glass-card p-8">
            <AnimatedText
              text={getTranslation("sendMessage", language)}
              className="text-2xl font-display font-semibold mb-6"
              delay={100}
            />

            <form onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 animate-fade-in" style={{ animationDelay: '200ms' }}>
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      {getTranslation("name", language)}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder={getTranslation("yourName", language)}
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      {getTranslation("email", language)}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={getTranslation("yourEmail", language)}
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/50"
                    />
                  </div>
                </div>

                <div className="space-y-2 animate-fade-in" style={{ animationDelay: '300ms' }}>
                  <label htmlFor="subject" className="text-sm font-medium">
                    {getTranslation("subject", language)}
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder={getTranslation("messageSubject", language)}
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-white/50"
                  />
                </div>

                <div className="space-y-2 animate-fade-in" style={{ animationDelay: '400ms' }}>
                  <label htmlFor="message" className="text-sm font-medium">
                    {getTranslation("message", language)}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={getTranslation("yourMessage", language)}
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-white/50"
                  />
                </div>

                <div className="animate-fade-in" style={{ animationDelay: '500ms' }}>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      getTranslation("sending", language)
                    ) : (
                      <>
                        {getTranslation("sendMessage", language)} <Send size={16} className="ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
