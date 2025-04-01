from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from tracker.views import CalorieEntryViewSet

router = DefaultRouter()
router.register(r'calories', CalorieEntryViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
