from django.conf.urls import include, url
from rest_framework import routers

from .api import PlantInfoViewSet
from .api import PlantInfoViewSetList

router = routers.DefaultRouter()
router.register('plantinfo', PlantInfoViewSet)
router.register('plantinfolist', PlantInfoViewSetList)

urlpatterns = [
    url("^", include(router.urls)),
]