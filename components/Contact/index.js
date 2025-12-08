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
import { useLanguage } from '../../lib/LanguageContext';

export const Contact = () => {
  const { t, language } = useLanguage();
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
    const template = t('contact.form.whatsappMessage');
    const whatsappMessage = template
      .replace('{name}', name)
      .replace('{email}', email)
      .replace('{service}', service)
      .replace('{message}', message);
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
            <Title>{t('contact.title')}</Title>
            <Subtitle>
              {t('contact.subtitle')}
            </Subtitle>
          </Header>

          {showSuccess && (
            <SuccessMessage>
              <strong>{t('contact.successTitle')} </strong>
              <span>{t('contact.successMessage')}</span>
            </SuccessMessage>
          )}

          <Form onSubmit={handleSubmit}>
            <InputGrid>
              <Input
                type="text"
                name="name"
                placeholder={t('contact.form.namePlaceholder')}
                required
                value={formData.name}
                onChange={handleChange}
              />
              <Input
                type="email"
                name="email"
                placeholder={t('contact.form.emailPlaceholder')}
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
              <option value="">{t('contact.form.serviceDefault')}</option>
              <option value={t('services.aiAutomation.title')}>{t('services.aiAutomation.title')}</option>
              <option value={t('services.dataVisualization.title')}>{t('services.dataVisualization.title')}</option>
              <option value={t('services.softwareDevelopment.title')}>{t('services.softwareDevelopment.title')}</option>
              <option value={t('services.mvpValidation.title')}>{t('services.mvpValidation.title')}</option>
              <option value={t('services.cloudSolutions.title')}>{t('services.cloudSolutions.title')}</option>
              <option value={t('services.aiEducation.title')}>{t('services.aiEducation.title')}</option>
              <option value="Other">Other</option>
            </Select>
            
            <TextArea
              name="message"
              placeholder={t('contact.form.messagePlaceholder')}
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
            />
            
            <SubmitButton type="submit">
              {t('contact.form.submitButton')}
            </SubmitButton>
          </Form>
        </FormWrapper>
      </Container>
    </Section>
  );
};
