from rest_framework import serializers

from .models import Shop, Brand

class ShopSerializer(serializers.ModelSerializer):
    brand_name = serializers.StringRelatedField()
    class Meta:
        model = Shop
        fields = '__all__'

class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = '__all__'

        