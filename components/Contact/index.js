import { useState } from 'react';
import {
  Section,
  Container,
  FormWrapper,
  Header,
  Title,
  Subtitle,
  SuccessMessage,
  Form,
  InputGrid,
  Input,
  Select,
  TextArea,
  SubmitButton,
} from './index.styles';
import { PHONE_NUMBER } from '../../lib/consts';
import { logEvent } from '../../lib/analytics';

export const Contact = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { name, email, service, message } = formData;
    const whatsappMessage = `Hola! Soy ${name} (${email}). Estoy interesado en ${service}. ${message}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${encodeURIComponent(whatsappMessage)}`;
    
    logEvent('Form', 'Contact_Submit', service);
    
    setShowSuccess(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1000);
    
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({ name: '', email: '', service: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Section id="contact">
      <Container>
        <FormWrapper>
          <Header>
            <Title>Construyamos Tu Futuro</Title>
            <Subtitle>
              ¿Listo para discutir tu próximo proyecto? Completa el formulario a continuación o contáctame directamente.
            </Subtitle>
          </Header>

          {showSuccess && (
            <SuccessMessage>
              <strong>¡Gracias! </strong>
              <span>Tu mensaje ha sido enviado exitosamente. Me pondré en contacto pronto.</span>
            </SuccessMessage>
          )}

          <Form onSubmit={handleSubmit}>
            <InputGrid>
              <Input
                type="text"
                name="name"
                placeholder="Tu Nombre"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <Input
                type="email"
                name="email"
                placeholder="Tu Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </InputGrid>
            
            <Select
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
            >
              <option value="">Selecciona un Servicio</option>
              <option value="Automatizaciones con IA">Automatizaciones con IA</option>
              <option value="Visualización de Datos">Visualización de Datos</option>
              <option value="Desarrollo de Software">Desarrollo de Software</option>
              <option value="Validaciones de MVP">Validaciones de MVP</option>
              <option value="Soluciones en la Nube">Soluciones en la Nube</option>
              <option value="Servicios Educativos de IA">Servicios Educativos de IA</option>
              <option value="Otro">Otro</option>
            </Select>
            
            <TextArea
              name="message"
              placeholder="¿Cómo puedo ayudarte?"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
            />
            
            <SubmitButton type="submit">
              Enviar Mensaje
            </SubmitButton>
          </Form>
        </FormWrapper>
      </Container>
    </Section>
  );
};
