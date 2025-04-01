from rest_framework import viewsets
from .models import CalorieEntry
from .serializers import CalorieEntrySerializer

class CalorieEntryViewSet(viewsets.ModelViewSet):
    queryset = CalorieEntry.objects.all()
    serializer_class = CalorieEntrySerializer
