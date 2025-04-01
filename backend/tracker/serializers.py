from rest_framework import serializers
from .models import CalorieEntry

class CalorieEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = CalorieEntry
        fields = '__all__'
