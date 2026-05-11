from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import ContactSubmission
from .serializers import ContactSubmissionSerializer


class ContactViewSet(viewsets.ModelViewSet):
    queryset = ContactSubmission.objects.all()
    serializer_class = ContactSubmissionSerializer

    @action(detail=False, methods=['post'])
    def submit(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            contact = serializer.save()  # email notification handled by model's save()

            return Response({
                'message': f'Thank you {contact.name}! We have received your message and will get back to you soon.',
                'status': 'success',
                'data': ContactSubmissionSerializer(contact).data
            }, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)