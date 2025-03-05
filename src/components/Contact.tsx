
import React, { useState } from "react";
import AnimatedText from "./AnimatedText";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

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
  <AnimatedText text="" delay={delay}>
    <div className="flex items-start mb-6">
      <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
        {icon}
      </div>
      <div>
        <h3 className="text-base font-medium">{title}</h3>
        <div className="text-foreground/70 mt-1">{content}</div>
      </div>
    </div>
  </AnimatedText>
);

const Contact: React.FC = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Mensagem enviada com sucesso!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-cta-pattern">
      <div className="container mx-auto px-4">
        <AnimatedText text="Entre em Contato" className="section-heading" />

        <div className="max-w-3xl mx-auto mt-8 mb-16">
          <AnimatedText
            text="Tem um projeto em mente ou gostaria de bater um papo? Fique à vontade para entrar em contato comigo usando o formulário abaixo ou através dos meus contatos."
            className="text-center text-lg text-foreground/80"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="glass-card p-8">
            <AnimatedText
              text="Informações de Contato"
              className="text-2xl font-display font-semibold mb-6"
              delay={100}
            />

            <ContactInfoItem
              icon={<Mail size={24} />}
              title="Email"
              content={
                <a
                  href="mailto:seuemail@exemplo.com"
                  className="hover:text-primary transition-colors"
                >
                  seuemail@exemplo.com
                </a>
              }
              delay={200}
            />

            <ContactInfoItem
              icon={<Phone size={24} />}
              title="Telefone"
              content="+55 (11) 98765-4321"
              delay={300}
            />

            <ContactInfoItem
              icon={<MapPin size={24} />}
              title="Localização"
              content="São Paulo, SP - Brasil"
              delay={400}
            />

            <AnimatedText text="" delay={500}>
              <div className="mt-10">
                <h3 className="text-base font-medium mb-4">Me siga nas redes</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-foreground text-background hover:bg-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-foreground text-background hover:bg-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </AnimatedText>
          </div>

          <div className="glass-card p-8">
            <AnimatedText
              text="Envie uma Mensagem"
              className="text-2xl font-display font-semibold mb-6"
              delay={100}
            />

            <form onSubmit={handleSubmit}>
              <div className="space-y-5">
                <AnimatedText text="" delay={200}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nome
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-white/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Seu email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-white/50"
                      />
                    </div>
                  </div>
                </AnimatedText>

                <AnimatedText text="" delay={300}>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Assunto
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Assunto da mensagem"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-white/50"
                    />
                  </div>
                </AnimatedText>

                <AnimatedText text="" delay={400}>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Sua mensagem"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-white/50"
                    />
                  </div>
                </AnimatedText>

                <AnimatedText text="" delay={500}>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        Enviar Mensagem <Send size={16} className="ml-2" />
                      </>
                    )}
                  </Button>
                </AnimatedText>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
