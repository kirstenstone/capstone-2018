from rest_framework import serializers

from .models import PlantInfo


class PlantInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlantInfo
        fields = ('id', 'water_level', 'co2_ppm', 'soil_moisture',\
        'air_temp', 'air_humidity', 'door_status', 'growth_stage',\
        'light_status', 'time_created',)