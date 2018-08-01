from rest_framework import viewsets, permissions

from .models import PlantInfo
from .serializers import PlantInfoSerializer



class PlantInfoViewSet(viewsets.ModelViewSet):
    queryset = PlantInfo.objects.all().order_by('-id')
    permission_classes = [permissions.AllowAny, ]
    serializer_class = PlantInfoSerializer

class PlantInfoViewSetList(viewsets.ModelViewSet):
    queryset = PlantInfo.objects.all().order_by('-id')[:100]
    permission_classes = [permissions.AllowAny, ]
    serializer_class = PlantInfoSerializer