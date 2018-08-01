from django.db import models
import datetime
# Create your models here.

class PlantInfo(models.Model):
    water_level = models.CharField(max_length=25)
    co2_ppm = models.CharField(max_length=25)
    soil_moisture = models.CharField(max_length=25)
    air_temp = models.CharField(max_length=25)
    air_humidity = models.CharField(max_length=25)
    door_status = models.CharField(max_length=25)
    growth_stage = models.CharField(max_length=25)
    light_status = models.CharField(max_length=25)
    time_created = models.DateTimeField(default = datetime.datetime.now())


