"""
Admin configuration for contact app
"""
from django.contrib import admin
from .models import ContactSubmission


@admin.register(ContactSubmission)
class ContactSubmissionAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'company', 'submitted_at']
    list_filter = ['submitted_at']
    search_fields = ['name', 'email', 'company']
    readonly_fields = ['submitted_at']