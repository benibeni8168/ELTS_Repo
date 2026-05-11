from rest_framework import serializers
from .models import ContactSubmission


class ContactSubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactSubmission
        fields = ['id', 'name', 'email', 'company', 'message', 'submitted_at']
        read_only_fields = ['id', 'submitted_at']

    def create(self, validated_data):
        # The model save() method will handle email sending
        return super().create(validated_data)