from django.shortcuts import render

from rest_framework import serializers, viewsets, generics
from rest_framework.response import Response
from rest_framework import status

from .serializers import BrandSerializer, ShopSerializer
from .models import Brand, Shop


class BrandViewSet(viewsets.ModelViewSet):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer


class ShopViewSet(viewsets.ModelViewSet):
    queryset = Shop.objects.all()
    serializer_class = ShopSerializer

    def create(self, request, *arg, **kwargs):
        print(request.data)
        
        return super().create(request, *arg, **kwargs)
