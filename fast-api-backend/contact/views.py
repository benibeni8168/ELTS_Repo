from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings
from .models import ContactSubmission
from .serializers import ContactSubmissionSerializer


class ContactViewSet(viewsets.ModelViewSet):
    queryset = ContactSubmission.objects.all()
    serializer_class = ContactSubmissionSerializer

    @action(detail=False, methods=['post'])
    def submit(self, request):
        """
        Submit a contact form and send email notification
        """
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            contact = serializer.save()

            # Try to send email notification, but don't fail the API on SMTP errors.
            try:
                subject = f"New Contact Form Submission from {contact.name}"
                message = f"""
New contact form submission:

Name: {contact.name}
Email: {contact.email}
Company: {contact.company or 'Not provided'}

Message:
{contact.message}

Submitted at: {contact.submitted_at}
"""

                send_mail(
                    subject=subject,
                    message=message,
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    recipient_list=[settings.EMAIL_HOST_USER],
                    fail_silently=False,
                )
            except Exception as email_exception:
                # Log the email failure, but still return success for the contact submission.
                print(f"Failed to send email: {email_exception}")

            return Response({
                'message': f'Thank you {contact.name}! We have received your message and will get back to you soon.',
                'status': 'success',
                'data': ContactSubmissionSerializer(contact).data
            }, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)