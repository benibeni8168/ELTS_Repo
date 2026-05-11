"""
Tests for contact app
"""
from django.test import TestCase
from .models import ContactSubmission


class ContactSubmissionTestCase(TestCase):
    def test_contact_creation(self):
        contact = ContactSubmission.objects.create(
            name="Test User",
            email="test@example.com",
            company="Test Company",
            message="Test message"
        )
        self.assertEqual(contact.name, "Test User")
        self.assertEqual(contact.email, "test@example.com")