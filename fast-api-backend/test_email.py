#!/usr/bin/env python
"""
Test script to verify Gmail SMTP configuration
"""
import os
import django
from django.core.mail import send_mail
from django.conf import settings

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'elts_backend.settings')
django.setup()

def test_email():
    try:
        send_mail(
            subject='Test Email from Django',
            message='This is a test email to verify Gmail SMTP configuration.',
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[settings.EMAIL_HOST_USER],  # Send to yourself
            fail_silently=False,
        )
        print("✅ Email sent successfully!")
        return True
    except Exception as e:
        print(f"❌ Email failed: {e}")
        return False

if __name__ == '__main__':
    print("Testing Gmail SMTP configuration...")
    test_email()