from django.urls import path, include
from django.contrib import admin
from rest_framework.routers import DefaultRouter

from api.views import BrandViewSet, ShopViewSet


router = DefaultRouter()
router.register('Brands', BrandViewSet)
router.register('Shops', ShopViewSet)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include((router.urls, 'Brands'), namespace='Brands')),
    path('api/', include((router.urls, 'Shops'), namespace='Shops')),
]


for url in router.urls:
    print(url)
