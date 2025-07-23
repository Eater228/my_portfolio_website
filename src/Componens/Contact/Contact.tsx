import { useState } from "react";
import styles from './Contact.module.scss';
import emailjs from 'emailjs-com';

interface FormData {
  firstName: string;
  lastName: string;
  linkedin: string;
  message: string;
}

interface Errors {
  firstName?: string;
  lastName?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    linkedin: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [isSent, setIsSent] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors: Errors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "Введіть ім’я";
    if (!formData.lastName.trim()) newErrors.lastName = "Введіть прізвище";
    if (!formData.message.trim()) newErrors.message = "Введіть повідомлення";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    setErrors({});

    const templateParams = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      linkedin: formData.linkedin,
      message: formData.message,
    };

    try {
      await emailjs.send(
        'service_zrs1w3c',     // заміни на свій service ID
        'template_ep20mmn',    // заміни на свій template ID
        templateParams,
        'TDG0WuecsM68rygI3'         // заміни на свій public key (user ID)
      );

      setIsSent(true);
      setFormData({
        firstName: "",
        lastName: "",
        linkedin: "",
        message: "",
      });
      setTimeout(() => setIsSent(false), 3000); // Скидання повідомлення через 3 секунди
    } catch (error) {
      console.error('Помилка надсилання листа:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.contactFormContainer}>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.formGroupName}>
          <div className={styles.formGroupFirstName}>
            <label>Ім’я *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Введіть ім’я"
            />
            {errors.firstName && <span className={styles.error}>{errors.firstName}</span>}
          </div>

          <div className={styles.formGroupLastName}>
            <label>Прізвище *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Введіть прізвище"
            />
            {errors.lastName && <span className={styles.error}>{errors.lastName}</span>}
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>Посилання на LinkedIn (необов’язково)</label>
          <input
            type="url"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            placeholder="https://linkedin.com/in/..."
          />
        </div>

        <div className={styles.formGroup}>
          <label>Повідомлення *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Ваше повідомлення"
            rows={5}
          />
          {errors.message && <span className={styles.error}>{errors.message}</span>}
        </div>

        <div className={styles.buttonContainer}>
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Надсилається..." : "Надіслати"}
          </button>
          {isSent && <p style={{ color: 'green', marginTop: '1rem' }}>Повідомлення надіслано!</p>}
        </div>
      </form>
    </div>
  );
}
