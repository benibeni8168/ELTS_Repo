from django.db import models
from django.core.mail import send_mail
from django.conf import settings
from django.core.exceptions import ValidationError
import re


class ContactSubmission(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    company = models.CharField(max_length=100, blank=True)
    message = models.TextField()
    submitted_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-submitted_at']

    def __str__(self):
        return f"Contact from {self.name} ({self.email})"

    def clean(self):
        # Basic validation
        if not self.name.strip():
            raise ValidationError("Name is required")
        if not self.message.strip():
            raise ValidationError("Message is required")

        # Email validation
        email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        if not re.match(email_pattern, self.email):
            raise ValidationError("Invalid email format")

    def save(self, *args, **kwargs):
        # Validate before saving
        self.full_clean()

        # Send email notification
        self.send_email_notification()

        super().save(*args, **kwargs)

    def send_email_notification(self):
        """
        Send email notification when contact form is submitted
        """
        subject = f"New Contact Form Submission from {self.name}"

        message = f"""
New contact form submission received:

Name: {self.name}
Email: {self.email}
Company: {self.company if self.company else 'Not provided'}

Message:
{self.message}

Submitted at: {self.submitted_at}
"""

        try:
            send_mail(
                subject=subject,
                message=message,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.EMAIL_HOST_USER],  # Send to the configured email
                fail_silently=False,
            )
            print(f"Email sent successfully for contact from {self.name}")
        except Exception as e:
            print(f"Failed to send email: {e}")
            # In production, you might want to log this or handle it differently