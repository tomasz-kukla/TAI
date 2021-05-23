from django.shortcuts import render

from rest_framework import serializers, viewsets, generics
from rest_framework.response import Response
from rest_framework import status

from .serializers import BrandSerializer, ShopSerializer
from .models import Brand, Shop


class BrandViewSet(generics.ListAPIView, viewsets.ViewSet):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer

    def create(self, request):
        '''Create method.'''
        serializer = BrandSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        '''Retrive method.'''
        brand = Brand.objects.get(id=pk)
        serializer = BrandSerializer(brand, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def update(self, request, pk=None):
        '''Update method.'''
        brand = Brand.objects.get(id=pk)
        serializer = BrandSerializer(instance=brand, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

    def delete(self, request, pk=None):
        '''Delete method.'''
        brand = Brand.objects.get(id=pk)
        brand.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class ShopViewSet(generics.ListAPIView, viewsets.ViewSet):
    queryset = Shop.objects.all()
    serializer_class = ShopSerializer

    def create(self, request):
        '''Create method.'''
        serializer = ShopSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        '''Retrive method.'''
        shop = Shop.objects.get(id=pk)
        serializer = ShopSerializer(shop, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def update(self, request, pk=None):
        '''Update method.'''
        shop = Shop.objects.get(id=pk)
        serializer = ShopSerializer(instance=shop, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

    def delete(self, request, pk=None):
        '''Delete method.'''
        shop = Shop.objects.get(id=pk)
        shop.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
